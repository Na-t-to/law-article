// Cross-record references shared by publication validation and regression tests.
export function collectReferenceErrors(data) {
  const errors = [];
  const t = new Map(data.TOPIC_DATA.map((x) => [x.slug, x]));
  const s = new Set(data.SOURCE_DATA.map((x) => x.id));
  const a = new Set(data.ARTICLE_DATA.map((x) => x.id));
  const events = new Set((data.REFORM_EVENT_DATA || []).map((x) => x.id));
  const updateIds = new Set();
  const check = (values, valid, owner, key) => {
    for (const id of values || []) if (!valid.has(id)) errors.push(`${owner}.${key}: missing ${id}`);
  };
  for (const source of data.SOURCE_DATA) check(source.topics, t, source.id, "topics");
  for (const topic of data.TOPIC_DATA) check(topic.referenceArticleIds, a, topic.slug, "referenceArticleIds");
  for (const update of data.UPDATE_DATA) {
    if (!update.id || updateIds.has(update.id)) errors.push(`update: missing or duplicate id ${update.id}`);
    updateIds.add(update.id);
    if (update.source && !s.has(update.source)) errors.push(`${update.id}.source: missing ${update.source}`);
    check(update.sourceIds, s, update.id, "sourceIds");
    check(update.articleIds, a, update.id, "articleIds");
    check(update.affectedTopics, t, update.id, "affectedTopics");
    for (const affected of update.affectedIssues || []) {
      if (!affected || typeof affected !== "object" || Array.isArray(affected)) {
        errors.push(`${update.id}.affectedIssues: expected an object, received ${JSON.stringify(affected)}`);
        continue;
      }
      if (!t.get(affected.topic)?.issues.some((issue) => issue.id === affected.issue)) {
        errors.push(`${update.id}.affectedIssues: missing ${affected.topic}/${affected.issue}`);
      }
      if (!(update.affectedTopics || []).includes(affected.topic)) errors.push(`${update.id}.affectedIssues: ${affected.topic} not in affectedTopics`);
    }
  }
  for (const [alias, target] of Object.entries(data.ARTICLE_ALIASES || {})) {
    if (a.has(alias)) errors.push(`article alias ${alias} shadows an existing article`);
    if (!a.has(target)) errors.push(`article alias ${alias}: missing ${target}`);
    if (alias === target) errors.push(`article alias ${alias}: self alias`);
    const metadata = data.ARTICLE_ALIAS_METADATA?.[alias];
    if (!metadata || metadata.canonicalId !== target || !metadata.title || !metadata.url) errors.push(`article alias ${alias}: original metadata missing`);
  }
  for (const [slug, aliases] of Object.entries(data.TOPIC_ISSUE_ALIASES || {})) {
    const issueIds = new Set((t.get(slug)?.issues || []).map((issue) => issue.id));
    if (!t.has(slug)) errors.push(`issue aliases: missing theme ${slug}`);
    for (const [oldId, target] of Object.entries(aliases)) {
      if (issueIds.has(oldId)) errors.push(`issue alias ${slug}/${oldId} shadows a current issue`);
      if (!issueIds.has(target)) errors.push(`issue alias ${slug}/${oldId}: missing ${target}`);
    }
  }
  for (const [slug, aliases] of Object.entries(data.TOPIC_ISSUE_GROUP_ALIASES || {})) {
    const issueIds = new Set((t.get(slug)?.issues || []).map((issue) => issue.id));
    if (!t.has(slug)) errors.push(`issue group aliases: missing theme ${slug}`);
    for (const [oldId, targets] of Object.entries(aliases)) {
      if (issueIds.has(oldId)) errors.push(`issue group alias ${slug}/${oldId} shadows a current issue`);
      if (!Array.isArray(targets) || targets.length < 2) errors.push(`issue group alias ${slug}/${oldId}: requires all destinations`);
      else check(targets, issueIds, `${slug}/${oldId}`, "destinations");
    }
  }
  for (const [oldId, target] of Object.entries(data.REFORM_EVENT_ALIASES || {})) {
    if (events.has(oldId)) errors.push(`event alias ${oldId} shadows a current event`);
    if (!events.has(target)) errors.push(`event alias ${oldId}: missing ${target}`);
  }
  return errors;
}
