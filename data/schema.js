(() => {
  const issueStatus = Object.freeze({
    authoritative: "一次資料で確認",
    interpreted: "解釈・整理",
    disputed: "見解対立",
    pending: "具体化待ち",
    unknown: "未確認"
  });

  const issueStage = Object.freeze({
    not_applicable: "施行段階なし",
    draft: "検討・案段階",
    enacted: "公布・施行待ち",
    effective: "施行済み",
    under_revision: "改正・整備中"
  });

  const validateKnowledgeData = (topics, sources = [], articles = []) => {
    const errors = [];
    const statuses = new Set(Object.keys(issueStatus));
    const stages = new Set(Object.keys(issueStage));
    const sourceIds = new Set(sources.map((source) => source.id));
    const articleIds = new Set(articles.map((article) => article.id));
    const topicIds = new Set(topics.map((topic) => topic.slug));
    const issueIds = new Set();

    const reportDuplicates = (items, getId, label) => {
      const seen = new Set();
      items.forEach((item) => {
        const id = getId(item);
        if (!id) errors.push(`${label}: id がありません。`);
        else if (seen.has(id)) errors.push(`${label}: id "${id}" が重複しています。`);
        seen.add(id);
      });
    };

    reportDuplicates(topics, (topic) => topic.slug, "topic");
    sources.filter((source) => !source.id).forEach(() => errors.push("source: id がありません。"));
    articles.filter((article) => !article.id).forEach(() => errors.push("article: id がありません。"));
    articles.filter((article) => !article.url).forEach((article) => errors.push(`${article.id || "article"}: url がありません。`));

    for (const topic of topics) {
      const topicIssueIds = new Set();
      if (!Array.isArray(topic.issues)) errors.push(`${topic.slug}: issues は配列で指定してください。`);
      if (!Array.isArray(topic.sourceIds)) errors.push(`${topic.slug}: sourceIds は配列で指定してください。`);
      else if (sourceIds.size) topic.sourceIds.filter((id) => !sourceIds.has(id)).forEach((id) => errors.push(`${topic.slug}: sourceId "${id}" は存在しません。`));
      for (const issue of topic.issues || []) {
        const path = `${topic.slug}/${issue.id}`;
        if (!issue.id) errors.push(`${topic.slug}: issue id がありません。`);
        else if (topicIssueIds.has(issue.id)) errors.push(`${path}: 同じテーマ内で issue id "${issue.id}" が重複しています。`);
        topicIssueIds.add(issue.id);
        issueIds.add(issue.id);
        if (!statuses.has(issue.status)) errors.push(`${path}: status "${issue.status}" は定義外です。`);
        if (!stages.has(issue.stage)) errors.push(`${path}: stage "${issue.stage}" は定義外です。`);
        if (Object.prototype.hasOwnProperty.call(issue, "statusTone")) errors.push(`${path}: 旧フィールド statusTone は使用できません。`);
        if (!Array.isArray(issue.sourceIds)) errors.push(`${path}: sourceIds は配列で指定してください。`);
        else if (sourceIds.size) issue.sourceIds.filter((id) => !sourceIds.has(id)).forEach((id) => errors.push(`${path}: sourceId "${id}" は存在しません。`));
        if (!Array.isArray(issue.views)) {
          errors.push(`${path}: views は配列で指定してください。`);
          continue;
        }
        if (issue.status === "disputed" && issue.views.length < 2) errors.push(`${path}: disputed には2件以上の views が必要です。`);
        issue.views.forEach((view, index) => {
          if (!view.id || !view.label || !view.summary) errors.push(`${path}: views[${index}] に id・label・summary が必要です。`);
          if (!Array.isArray(view.sourceIds) || !Array.isArray(view.articleIds)) errors.push(`${path}: views[${index}] の sourceIds・articleIds は配列で指定してください。`);
          if (sourceIds.size) view.sourceIds.filter((id) => !sourceIds.has(id)).forEach((id) => errors.push(`${path}: views[${index}] の sourceId "${id}" は存在しません。`));
          if (articleIds.size) view.articleIds.filter((id) => !articleIds.has(id)).forEach((id) => errors.push(`${path}: views[${index}] の articleId "${id}" は存在しません。`));
        });
      }
    }

    for (const article of articles) {
      const path = article.id || "article";
      if (!Array.isArray(article.relatedTopics)) errors.push(`${path}: relatedTopics は配列で指定してください。`);
      else article.relatedTopics.filter((id) => !topicIds.has(id)).forEach((id) => errors.push(`${path}: relatedTopic "${id}" は存在しません。`));
      if (!Array.isArray(article.relatedIssues)) errors.push(`${path}: relatedIssues は配列で指定してください。`);
      else article.relatedIssues.filter((id) => !Array.isArray(article.relatedTopics) || !article.relatedTopics.some((slug) => topics.find((topic) => topic.slug === slug)?.issues?.some((issue) => issue.id === id))).forEach((id) => errors.push(`${path}: relatedIssue "${id}" は関連テーマ内に存在しません。`));
      if (!Array.isArray(article.primarySourceIds)) errors.push(`${path}: primarySourceIds は配列で指定してください。`);
      else if (sourceIds.size) article.primarySourceIds.filter((id) => !sourceIds.has(id)).forEach((id) => errors.push(`${path}: primarySourceId "${id}" は存在しません。`));
    }
    return errors;
  };

  const findKnowledgeWarnings = (topics, sources = [], articles = []) => {
    const warnings = [];
    const findDuplicates = (items, getKey, label) => {
      const seen = new Set();
      items.forEach((item) => {
        const key = getKey(item);
        if (!key) return;
        if (seen.has(key)) warnings.push(`${label} "${key}" が重複しています。表示時は1件に統合します。`);
        seen.add(key);
      });
    };
    findDuplicates(sources, (source) => source.id, "source id");
    findDuplicates(articles, (article) => article.id, "article id");
    findDuplicates(articles, (article) => article.url, "article URL");
    return warnings;
  };

  const uniqueArticles = (articles = []) => {
    const merged = new Map();
    const arrayFields = ["whyImportant", "audience", "categories", "relatedTopics", "relatedIssues", "primarySourceIds"];
    const longer = (left, right) => String(right || "").length > String(left || "").length ? right : left;
    articles.forEach((article) => {
      const key = article.url || article.id;
      if (!merged.has(key)) {
        merged.set(key, { ...article });
        return;
      }
      const current = merged.get(key);
      const next = { ...current, ...article, id: current.id, url: current.url || article.url };
      arrayFields.forEach((field) => { next[field] = [...new Set([...(current[field] || []), ...(article[field] || [])])]; });
      ["summary", "audienceReason", "whatChanged"].forEach((field) => { next[field] = longer(current[field], article[field]); });
      merged.set(key, next);
    });
    return [...merged.values()];
  };

  const getLegalReformInfo = (article, topics = []) => {
    const articleText = [article.title, article.sourceLabel].filter(Boolean).join(" ");
    const reformWords = /改正|改訂|見直し|新法|法案|法律案|政令|省令|府令|規則案|中間試案|中間とりまとめ|パブリックコメント|公布|成立|施行/;
    const relatedIssues = (article.relatedIssues || []).flatMap((issueId) => topics.flatMap((topic) => topic.issues || []).filter((issue) => issue.id === issueId));
    const changingStages = new Set(relatedIssues.map((issue) => issue.stage).filter((stage) => ["draft", "enacted", "under_revision"].includes(stage)));
    const isReform = reformWords.test(articleText);
    if (!isReform) return { isReform: false, stage: null, stageLabel: "" };

    let stage = null;
    if (/中間試案|法案|法律案|規則案|パブリックコメント|検討|審議/.test(articleText)) stage = "draft";
    else if (/公布|成立|施行待ち|施行前|施行予定|施行に向け/.test(articleText)) stage = "enacted";
    else if (changingStages.has("draft")) stage = "draft";
    else if (changingStages.has("enacted")) stage = "enacted";
    else if (changingStages.has("under_revision")) stage = "under_revision";
    else if (/施行/.test(articleText)) stage = "effective";
    else stage = "under_revision";

    return { isReform: true, stage, stageLabel: issueStage[stage] || "法改正情報" };
  };

  window.KNOWLEDGE_SCHEMA = Object.freeze({ issueStatus, issueStage });
  window.validateKnowledgeData = validateKnowledgeData;
  window.findKnowledgeWarnings = findKnowledgeWarnings;
  window.uniqueKnowledgeArticles = uniqueArticles;
  window.getLegalReformInfo = getLegalReformInfo;
  window.assertKnowledgeData = (topics, sources, articles) => {
    const errors = validateKnowledgeData(topics, sources, articles);
    if (errors.length) throw new Error(`LAW / INDEX data validation failed:\n${errors.join("\n")}`);
  };
})();
