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

  window.KNOWLEDGE_SCHEMA = Object.freeze({ issueStatus, issueStage });
  window.validateKnowledgeData = validateKnowledgeData;
  window.findKnowledgeWarnings = findKnowledgeWarnings;
  window.uniqueKnowledgeArticles = uniqueArticles;
  window.getLegalReformInfo = getLegalReformInfo;
  window.getLegalReformLaw = getLegalReformLaw;
  window.assertKnowledgeData = (topics, sources, articles) => {
    const errors = validateKnowledgeData(topics, sources, articles);
    if (errors.length) throw new Error(`LAW / INDEX data validation failed:\n${errors.join("\n")}`);
  };
})();
