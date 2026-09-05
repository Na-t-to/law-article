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
    reportDuplicates(sources, (source) => source.id, "source");
    reportDuplicates(articles, (article) => article.id, "article");
    reportDuplicates(sources, (source) => source.url, "source URL");
    reportDuplicates(articles, (article) => article.url, "article URL");
    sources.filter((source) => !source.id).forEach(() => errors.push("source: id がありません。"));
    articles.filter((article) => !article.id).forEach(() => errors.push("article: id がありません。"));
    articles.filter((article) => !article.url).forEach((article) => errors.push(`${article.id || "article"}: url がありません。`));

    for (const topic of topics) {
      const topicIssueIds = new Set();
      if (!/^\d{4}-\d{2}-\d{2}$/.test(topic.lastUpdated || "")) errors.push(`${topic.slug}: lastUpdated は YYYY-MM-DD で指定してください。`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(topic.lastVerified || "")) errors.push(`${topic.slug}: lastVerified は YYYY-MM-DD で指定してください。`);
      if (topic.lastUpdated && topic.lastVerified && topic.lastVerified < topic.lastUpdated) errors.push(`${topic.slug}: lastVerified を lastUpdated より前にはできません。`);
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
        if (issue.views.length === 1) errors.push(`${path}: views は0件または2件以上で指定してください。1件だけの views は conclusion の言い換え置き場として使用できません。`);
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
    const allAuthoritative = topics.filter((topic) => topic.issues?.length && topic.issues.every((issue) => issue.status === "authoritative"));
    if (allAuthoritative.length) warnings.push(`全論点が authoritative のテーマが ${allAuthoritative.length} 件あります。論点の切り方と status を棚卸ししてください: ${allAuthoritative.map((topic) => topic.title).join(" / ")}`);
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

  const getArticleChangeResult = (article, topics = [], updates = []) => {
    const explicit = String(article.whatChanged || "").trim();
    if (explicit) return { summary: explicit, source: "article", noChange: /^整理変更なし(?:[／/]|$)/.test(explicit) };
    const primarySourceIds = Array.isArray(article.primarySourceIds) ? article.primarySourceIds : [];
    const relatedTopics = Array.isArray(article.relatedTopics) ? article.relatedTopics : [];
    const update = updates
      .filter((item) => primarySourceIds.includes(item.source) && (item.affectedTopics || []).some((slug) => relatedTopics.includes(slug)))
      .sort((left, right) => String(right.publishedAt || "").localeCompare(String(left.publishedAt || "")))[0];
    if (update?.whatChanged) {
      const summary = String(update.whatChanged).trim();
      return { summary, source: "update", noChange: /^整理変更なし(?:[／/]|$)/.test(summary) };
    }
    const issueTitles = (article.relatedIssues || []).map((id) => topics.flatMap((topic) => topic.issues || []).find((issue) => issue.id === id)?.title).filter(Boolean);
    const summary = issueTitles.length
      ? `整理変更なし／「${issueTitles.slice(0, 2).join("」「")}」の参考資料を追加`
      : "整理変更なし／関連テーマの参考資料を追加";
    return { summary, source: "inferred", noChange: true };
  };

  const getTopicVerificationAdvances = (topics = [], articles = [], updates = []) => {
    const latestByTopic = new Map();
    uniqueArticles(articles).filter((article) => article.status === "adopted").forEach((article) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(article.collectedAt || "")) return;
      if (!getArticleChangeResult(article, topics, updates).noChange) return;
      (article.relatedTopics || []).forEach((slug) => {
        const topic = topics.find((item) => item.slug === slug);
        if (!topic) return;
        const current = latestByTopic.get(slug) || topic.lastVerified || topic.lastUpdated || "";
        if (article.collectedAt > current) latestByTopic.set(slug, article.collectedAt);
      });
    });
    return [...latestByTopic].map(([slug, verifiedAt]) => ({ slug, verifiedAt }));
  };

  const applyTopicVerificationDates = () => {
    // lastVerified is evidence of an actual primary-source re-check.
    // Article collection alone must never advance it automatically.
    return [];
  };

  const getKnowledgeAudit = (topics = [], articles = [], updates = []) => {
    const issues = topics.flatMap((topic) => topic.issues || []);
    const statusCounts = Object.fromEntries(Object.keys(issueStatus).map((status) => [status, issues.filter((issue) => issue.status === status).length]));
    const emptyViewsByStatus = Object.fromEntries(Object.keys(issueStatus).map((status) => [status, issues.filter((issue) => issue.status === status && !issue.views?.length).length]));
    const singleViewIssues = topics.flatMap((topic) => (topic.issues || [])
      .filter((issue) => Array.isArray(issue.views) && issue.views.length === 1)
      .map((issue) => ({ topic: topic.title, topicSlug: topic.slug, issueId: issue.id, issueTitle: issue.title, status: issue.status })));
    const verifiedTopics = topics.filter((topic) => /^\d{4}-\d{2}-\d{2}$/.test(topic.lastVerified || ""));
    const oldestLastVerified = verifiedTopics.map((topic) => topic.lastVerified).sort()[0] || null;
    const oldestVerifiedTopics = oldestLastVerified
      ? verifiedTopics.filter((topic) => topic.lastVerified === oldestLastVerified).map((topic) => ({ slug: topic.slug, title: topic.title }))
      : [];
    return {
      statusCounts,
      emptyViewsByStatus,
      singleViewIssues,
      allAuthoritativeThemes: topics.filter((topic) => topic.issues?.length && topic.issues.every((issue) => issue.status === "authoritative")).map((topic) => topic.title),
      verificationDiverged: topics.filter((topic) => topic.lastUpdated !== topic.lastVerified).length,
      oldestLastVerified,
      oldestVerifiedTopics,
      verificationAdvancesPending: getTopicVerificationAdvances(topics, articles, updates)
    };
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

  const reformLawRules = Object.freeze([
    { id: "personal-information-protection-act", label: "個人情報保護法", pattern: /個人情報保護法/ },
    { id: "whistleblower-protection-act", label: "公益通報者保護法", pattern: /公益通報者保護法|公益通報者保護制度/ },
    { id: "companies-act", label: "会社法", pattern: /会社法制|会社法改正/ },
    { id: "financial-instruments-exchange-act", label: "金融商品取引法", pattern: /金融商品取引法|金融商品法|公開買付|\bTOB\b|大量保有報告/ },
    { id: "payment-services-act", label: "資金決済法", pattern: /資金決済法/ },
    { id: "foreign-exchange-act", label: "外為法", pattern: /外国為替及び外国貿易法|外為法|輸出規制/ },
    { id: "fair-subcontract-transactions-act", label: "取適法（中小受託取引適正化法）", pattern: /中小受託取引適正化法|改正下請法|取適法/ },
    { id: "childcare-caregiver-leave-act", label: "育児・介護休業法", pattern: /育児・介護休業法/ },
    { id: "women-advancement-act", label: "女性活躍推進法", pattern: /女性活躍推進法/ },
    { id: "freelance-act", label: "フリーランス法", pattern: /フリーランス.*法|事業者間取引適正化等法/ },
    { id: "unfair-competition-prevention-act", label: "不正競争防止法・営業秘密管理指針", pattern: /不正競争防止法|営業秘密管理指針/ },
    { id: "specified-commercial-transactions-act", label: "特定商取引法・デジタル取引法制", pattern: /特定商取引法|デジタル取引/ },
    { id: "antimonopoly-act", label: "独占禁止法", pattern: /独占禁止法|流通・取引慣行/ },
    { id: "early-business-recovery-act", label: "早期事業再生法", pattern: /早期事業再生法/ },
    { id: "corporate-governance-code", label: "コーポレートガバナンス・コード", pattern: /コーポレートガバナンス・コード/ },
    { id: "sustainability-disclosure-rules", label: "サステナビリティ開示法制", pattern: /温室効果ガス|企業内容等の開示|SSBJ|サステナビリティ/ },
    { id: "generative-ai-ip-rules", label: "生成AI・知的財産ルール", pattern: /生成AI.*知的財産|プリンシプル・コード/ }
  ]);

  const getLegalReformLaw = (article, topics = []) => {
    const articleText = [article.title, article.sourceLabel].filter(Boolean).join(" ");
    const directMatch = reformLawRules.find((rule) => rule.pattern.test(articleText));
    if (directMatch) return { id: directMatch.id, label: directMatch.label };
    const relatedTopic = (article.relatedTopics || []).map((slug) => topics.find((topic) => topic.slug === slug)).find(Boolean);
    return relatedTopic ? { id: `topic-${relatedTopic.slug}`, label: relatedTopic.title } : { id: "other-legal-reform", label: "その他の法改正・制度変更" };
  };

  const getLegalReformEffectiveDate = (article, topics = []) => {
    const verifiedFallbacks = Object.freeze({
      "financial-instruments-exchange-act": "2026-05-01",
      "fair-subcontract-transactions-act": "2026-01-01",
      "women-advancement-act": "2026-04-01",
      "freelance-act": "2024-11-01"
    });
    const parseDate = (value) => {
      const match = String(value || "").match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
      if (!match) return null;
      const [, year, month, day] = match;
      return {
        value: day ? `${year}-${month}-${day}` : `${year}-${month}`,
        sortKey: `${year}-${month}-${day || "31"}`,
        precision: day ? "day" : "month",
        label: day ? `${Number(year)}年${Number(month)}月${Number(day)}日施行` : `${Number(year)}年${Number(month)}月施行`
      };
    };
    const explicitValues = [
      ...(Array.isArray(article.reformEffectiveDates) ? article.reformEffectiveDates : []),
      article.reformEffectiveDate
    ].filter(Boolean);
    const explicitDates = explicitValues.map(parseDate).filter(Boolean).sort((left, right) => right.sortKey.localeCompare(left.sortKey));
    if (explicitDates.length) return explicitDates[0];

    const collectText = (value, result = []) => {
      if (typeof value === "string") result.push(value);
      else if (Array.isArray(value)) value.forEach((item) => collectText(item, result));
      else if (value && typeof value === "object") Object.values(value).forEach((item) => collectText(item, result));
      return result;
    };
    const relatedTopics = (article.relatedTopics || []).map((slug) => topics.find((topic) => topic.slug === slug)).filter(Boolean);
    const passages = collectText([article.title, article.summary, article.whyImportant, article.audienceReason, article.whatChanged, relatedTopics])
      .flatMap((text) => text.split(/[。！？\n]/))
      .filter((text) => /施行/.test(text));
    const candidates = [];
    const addCandidate = (year, month, day) => {
      const normalizedYear = String(year).padStart(4, "0");
      const normalizedMonth = String(month).padStart(2, "0");
      const normalizedDay = day ? String(day).padStart(2, "0") : null;
      const parsed = parseDate(`${normalizedYear}-${normalizedMonth}${normalizedDay ? `-${normalizedDay}` : ""}`);
      if (parsed) candidates.push(parsed);
    };
    const suffix = String.raw`(?:\s*(?:から|より|に))?(?:\s*(?:全面|一部|段階的に|段階|順次))?\s*施行`;
    passages.forEach((passage) => {
      for (const match of passage.matchAll(new RegExp(`(20\\d{2})年\\s*(\\d{1,2})月(?:\\s*(\\d{1,2})日)?${suffix}`, "g"))) {
        addCandidate(Number(match[1]), Number(match[2]), match[3] ? Number(match[3]) : null);
      }
      for (const match of passage.matchAll(new RegExp(`(20\\d{2})年\\s*(\\d{1,2})月\\s*(?:・|、|及び|および|と)\\s*(\\d{1,2})月(?:\\s*(\\d{1,2})日)?${suffix}`, "g"))) {
        addCandidate(Number(match[1]), Number(match[2]), null);
        addCandidate(Number(match[1]), Number(match[3]), match[4] ? Number(match[4]) : null);
      }
      for (const match of passage.matchAll(new RegExp(`令和\\s*(元|\\d+)年\\s*(\\d{1,2})月(?:\\s*(\\d{1,2})日)?${suffix}`, "g"))) {
        const year = match[1] === "元" ? 2019 : 2018 + Number(match[1]);
        addCandidate(year, Number(match[2]), match[3] ? Number(match[3]) : null);
      }
      for (const match of passage.matchAll(/施行(?:日|期日)?\s*(?:は|を|が|：|:)?\s*(20\d{2})年\s*(\d{1,2})月(?:\s*(\d{1,2})日)?/g)) {
        addCandidate(Number(match[1]), Number(match[2]), match[3] ? Number(match[3]) : null);
      }
    });
    const fallback = parseDate(verifiedFallbacks[getLegalReformLaw(article, topics).id]);
    if (fallback) candidates.push(fallback);
    return [...new Map(candidates.map((date) => [date.value, date])).values()].sort((left, right) => {
      const monthOrder = right.value.slice(0, 7).localeCompare(left.value.slice(0, 7));
      if (monthOrder) return monthOrder;
      if (left.precision !== right.precision) return left.precision === "day" ? -1 : 1;
      return right.sortKey.localeCompare(left.sortKey);
    })[0] || null;
  };

  window.KNOWLEDGE_SCHEMA = Object.freeze({ issueStatus, issueStage });
  window.validateKnowledgeData = validateKnowledgeData;
  window.findKnowledgeWarnings = findKnowledgeWarnings;
  window.uniqueKnowledgeArticles = uniqueArticles;
  window.getKnowledgeArticleChangeResult = getArticleChangeResult;
  window.getKnowledgeArticleChangeSummary = (article, topics, updates) => getArticleChangeResult(article, topics, updates).summary;
  window.getTopicVerificationAdvances = getTopicVerificationAdvances;
  window.applyTopicVerificationDates = applyTopicVerificationDates;
  window.getKnowledgeAudit = getKnowledgeAudit;
  window.getLegalReformInfo = getLegalReformInfo;
  window.getLegalReformLaw = getLegalReformLaw;
  window.getLegalReformEffectiveDate = getLegalReformEffectiveDate;
  window.assertKnowledgeData = (topics, sources, articles) => {
    const errors = validateKnowledgeData(topics, sources, articles);
    if (errors.length) throw new Error(`LAW / INDEX data validation failed:\n${errors.join("\n")}`);
  };
})();