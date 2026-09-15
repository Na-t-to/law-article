(() => {
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };
  const appendUnique = (base = [], extra = []) => [...new Set([...(base || []), ...(extra || [])])];
  const topicAliases = new Map([
    ["insider-trading-information-control", "insider-trading-information-management"],
    ["securities-monitoring-internal-controls", "securities-monitoring-2026"]
  ]);
  const issueAliases = new Map([
    ["securities-monitoring-best-interest-suitability", "securities-monitoring-best-interest-suitability-2026"],
    ["securities-monitoring-system-frontier-ai", "securities-monitoring-system-frontier-ai-2026"],
    ["securities-monitoring-aml-outsourcing", "securities-monitoring-aml-outsourcing-2026"],
    ["securities-monitoring-business-change-controls", "securities-monitoring-business-model-governance-2026"],
    ["securities-monitoring-business-type-controls", "securities-monitoring-entity-specific-controls-2026"]
  ]);

  const topics = window.TOPIC_DATA || [];
  const insiderCanonical = topics.find((item) => item && item.slug === "insider-trading-information-management");
  const insiderLegacy = topics.find((item) => item && item.slug === "insider-trading-information-control");

  if (insiderCanonical) {
    insiderCanonical.lastUpdated = "2026-09-15";
    insiderCanonical.lastVerified = "2026-09-15";
    if (insiderLegacy) {
      insiderCanonical.sourceIds = appendUnique(insiderCanonical.sourceIds, insiderLegacy.sourceIds);
      insiderCanonical.practicalImpacts = appendUnique(insiderCanonical.practicalImpacts, insiderLegacy.practicalImpacts);
      const existingIssueIds = new Set((insiderCanonical.issues || []).map((issue) => issue && issue.id).filter(Boolean));
      insiderCanonical.issues = (insiderCanonical.issues || []).concat(
        (insiderLegacy.issues || []).filter((issue) => issue && !existingIssueIds.has(issue.id))
      );
      insiderCanonical.currentSummary = insiderCanonical.currentSummary || {};
      for (const key of ["facts", "interpretations", "implications", "uncertain"]) {
        insiderCanonical.currentSummary[key] = appendUnique(
          insiderCanonical.currentSummary[key],
          insiderLegacy.currentSummary && insiderLegacy.currentSummary[key]
        );
      }
    }
    insiderCanonical.currentSummary = insiderCanonical.currentSummary || {};
    insiderCanonical.currentSummary.interpretations = addUnique(
      insiderCanonical.currentSummary.interpretations,
      "公開買付者側で契約履行により公開買付け等事実を知る者は現行法の金融商品取引法167条で規制対象となり得る一方、2026年改正で追加される対象会社側の契約・交渉関係者は施行前の拡張部分であり、両者を同じ制度段階として扱わない。"
    );
    insiderCanonical.currentSummary.implications = addUnique(
      insiderCanonical.currentSummary.implications,
      "公開買付者側でFA、コンサルタント、外部専門家その他の委託先へTOB情報を共有する場合は、NDAだけでなく、情報受領者の特定、売買制限、アクセス権限・ログ、情報遮断を案件管理へ組み込む。"
    );
  }

  const securitiesCanonical = topics.find((item) => item && item.slug === "securities-monitoring-2026");
  const securitiesLegacy = topics.find((item) => item && item.slug === "securities-monitoring-internal-controls");

  if (securitiesCanonical) {
    securitiesCanonical.lastUpdated = "2026-09-15";
    securitiesCanonical.lastVerified = "2026-09-15";
    if (securitiesLegacy) {
      securitiesCanonical.sourceIds = appendUnique(securitiesCanonical.sourceIds, securitiesLegacy.sourceIds);
      securitiesCanonical.practicalImpacts = appendUnique(securitiesCanonical.practicalImpacts, securitiesLegacy.practicalImpacts);
      securitiesCanonical.categories = appendUnique(securitiesCanonical.categories, securitiesLegacy.categories);
      const amlIssue = (securitiesLegacy.issues || []).find((issue) => issue && issue.id === "securities-monitoring-aml-outsourcing");
      if (amlIssue && !(securitiesCanonical.issues || []).some((issue) => issue && issue.id === "securities-monitoring-aml-outsourcing-2026")) {
        securitiesCanonical.issues = (securitiesCanonical.issues || []).concat([{
          ...amlIssue,
          id: "securities-monitoring-aml-outsourcing-2026"
        }]);
      }
      securitiesCanonical.currentSummary = securitiesCanonical.currentSummary || {};
      securitiesCanonical.currentSummary.interpretations = addUnique(
        securitiesCanonical.currentSummary.interpretations,
        "サイバー、フロンティアAI、AML/CFT、外部委託先管理は別々の専門領域に見えるが、経営関与、重要システム・委託先の特定、リスクベースの優先順位付け、監査・是正の証跡という共通の内部管理構造で接続する。"
      );
      securitiesCanonical.currentSummary.implications = addUnique(
        securitiesCanonical.currentSummary.implications,
        "AML/CFTでは取引モニタリング・フィルタリング、新技術の活用だけでなく、外部委託先のリスク管理態勢まで年度点検の対象として確認する。"
      );
    }
  }

  const removedTopicSlugs = new Set(topicAliases.keys());
  window.TOPIC_DATA = (window.TOPIC_DATA || []).filter((topic) => topic && !removedTopicSlugs.has(topic.slug));

  const duplicateTranslationArticleIds = new Set([
    "article-tmi-securities-monitoring-policy-2026-part1",
    "article-tmi-securities-monitoring-policy-2026-part2"
  ]);

  window.ARTICLE_DATA = (window.ARTICLE_DATA || [])
    .filter((article) => article && !duplicateTranslationArticleIds.has(article.id))
    .map((article) => {
      const originalTopics = article.relatedTopics || [];
      const relatedTopics = originalTopics.map((slug) => topicAliases.get(slug) || slug);
      const originalIssues = article.relatedIssues || [];
      const relatedIssues = originalIssues.map((id) => issueAliases.get(id) || id);
      const topicsChanged = relatedTopics.some((slug, index) => slug !== originalTopics[index]);
      const issuesChanged = relatedIssues.some((id, index) => id !== originalIssues[index]);
      return (topicsChanged || issuesChanged)
        ? { ...article, relatedTopics: [...new Set(relatedTopics)], relatedIssues: [...new Set(relatedIssues)] }
        : article;
    });
})();
