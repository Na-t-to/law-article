(() => {
  const OLD_TOPIC = "economic-security-clearance";
  const CANONICAL_TOPIC = "economic-security-information-clearance";
  const OLD_LAW_SOURCE = "source-egov-important-economic-security-information-act-2024";
  const CANONICAL_LAW_SOURCE = "source-cao-security-clearance-law-2024";
  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];

  const topicMap = new Map([[OLD_TOPIC, CANONICAL_TOPIC]]);
  const sourceMap = new Map([[OLD_LAW_SOURCE, CANONICAL_LAW_SOURCE]]);
  const articleMap = new Map([
    ["article-cao-security-clearance-annual-report-20260626", "article-cao-security-clearance-report-2026"],
    ["article-noandt-security-clearance-hr-part2-20250319", "article-nagashima-security-clearance-hr-outsourcing-2025"]
  ]);
  const issueMap = new Map([
    ["security-clearance-qualifying-business", ["economic-security-qualified-business"]],
    ["security-clearance-employee-consent-hr", ["economic-security-suitability-assessment", "economic-security-hr-purpose-limit"]],
    ["security-clearance-recruitment-prescreening", ["economic-security-recruitment-prescreening"]],
    ["security-clearance-outsourcing", ["economic-security-outsourcing"]],
    ["security-clearance-first-year-operation", ["economic-security-operation-status"]]
  ]);

  const mapTopicList = (values) => uniq((values || []).map((value) => topicMap.get(value) || value));
  const mapSourceList = (values) => uniq((values || []).map((value) => sourceMap.get(value) || value));
  const mapArticleList = (values) => uniq((values || []).map((value) => articleMap.get(value) || value));
  const mapIssueList = (values) => uniq((values || []).flatMap((value) => issueMap.get(value) || [value]));

  for (const source of window.SOURCE_DATA || []) {
    source.topics = mapTopicList(source.topics);
  }

  for (const article of window.ARTICLE_DATA || []) {
    article.relatedTopics = mapTopicList(article.relatedTopics);
    article.relatedIssues = mapIssueList(article.relatedIssues);
    article.primarySourceIds = mapSourceList(article.primarySourceIds);
    if (Array.isArray(article.reformStageSourceIds)) article.reformStageSourceIds = mapSourceList(article.reformStageSourceIds);
    if (Array.isArray(article.reformEffectiveDateSourceIds)) article.reformEffectiveDateSourceIds = mapSourceList(article.reformEffectiveDateSourceIds);
  }

  for (const event of window.REFORM_EVENT_DATA || []) {
    event.relatedTopics = mapTopicList(event.relatedTopics);
    event.sourceIds = mapSourceList(event.sourceIds);
    if (Array.isArray(event.matchSourceIds)) event.matchSourceIds = mapSourceList(event.matchSourceIds);
    if (Array.isArray(event.effectiveDateSourceIds)) event.effectiveDateSourceIds = mapSourceList(event.effectiveDateSourceIds);
    if (Array.isArray(event.articleIds)) event.articleIds = mapArticleList(event.articleIds);
  }

  for (const update of window.UPDATE_DATA || []) {
    if (Array.isArray(update.affectedTopics)) update.affectedTopics = mapTopicList(update.affectedTopics);
    if (update.source) update.source = sourceMap.get(update.source) || update.source;
  }

  const canonical = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === CANONICAL_TOPIC);
  const duplicate = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === OLD_TOPIC);
  if (canonical) {
    canonical.categories = uniq([...(canonical.categories || []), "\u500b\u4eba\u60c5\u5831", "\u60c5\u5831\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"]);
    canonical.lastUpdated = "2026-09-21";
    canonical.lastVerified = "2026-09-21";
    canonical.sourceIds = mapSourceList(uniq([
      ...(canonical.sourceIds || []),
      "source-cao-security-clearance-business-guideline-20250502",
      "source-cao-security-clearance-annual-report-20260626"
    ]));
    canonical.referenceArticleIds = mapArticleList(uniq([
      ...(canonical.referenceArticleIds || []),
      ...(duplicate?.referenceArticleIds || []),
      "article-cao-economic-security-info-2025",
      "article-amt-economic-security-info-business-2025",
      "article-cao-security-clearance-report-2026",
      "article-nagashima-security-clearance-hr-outsourcing-2025",
      "article-amt-security-clearance-overview-20251226",
      "article-noandt-security-clearance-hr-part1-20250220"
    ]));

    const issues = Array.isArray(canonical.issues) ? canonical.issues : [];
    const hrIssue = issues.find((issue) => issue.id === "economic-security-hr-purpose-limit");
    if (hrIssue) hrIssue.status = "interpreted";
    const outsourcingIssue = issues.find((issue) => issue.id === "economic-security-outsourcing");
    if (outsourcingIssue) outsourcingIssue.status = "interpreted";

    if (!issues.some((issue) => issue.id === "economic-security-recruitment-prescreening")) {
      issues.splice(Math.min(3, issues.length), 0, {
        id: "economic-security-recruitment-prescreening",
        title: "\u63a1\u7528\u6642\u306b\u9069\u6027\u8a55\u4fa1\u3092\u4e88\u6e2c\u3059\u308b\u305f\u3081\u306e\u60c5\u5831\u53ce\u96c6\u306f\u3069\u3053\u307e\u3067\u3067\u304d\u308b\u304b",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "\u884c\u653f\u6a5f\u95a2\u306e\u9069\u6027\u8a55\u4fa1\u3092\u4f01\u696d\u304c\u72ec\u81ea\u306b\u4ee3\u66ff\u30fb\u5148\u53d6\u308a\u3059\u308b\u767a\u60f3\u306f\u907f\u3051\u308b\u3002\u6c42\u8077\u8005\u306e\u75c5\u6b74\u30fb\u72af\u7f6a\u6b74\u7b49\u306b\u306f\u500b\u4eba\u60c5\u5831\u4fdd\u8b77\u6cd5\u4e0a\u306e\u5236\u7d04\u304c\u3042\u308a\u3001\u6c42\u8077\u8005\u60c5\u5831\u306e\u53ce\u96c6\u306b\u306f\u8077\u696d\u5b89\u5b9a\u6cd5\u4e0a\u306e\u5fc5\u8981\u6027\u30fb\u5408\u7406\u6027\u3082\u6c42\u3081\u3089\u308c\u308b\u305f\u3081\u3001\u9069\u6027\u8a55\u4fa1\u3092\u4e88\u6e2c\u3059\u308b\u76ee\u7684\u3060\u3051\u3067\u6a5f\u5fae\u60c5\u5831\u3092\u5e83\u304f\u53ce\u96c6\u3057\u306a\u3044\u3002",
        exception: "\u91cd\u8981\u7d4c\u6e08\u5b89\u4fdd\u60c5\u5831\u3092\u53d6\u308a\u6271\u3046\u6761\u4ef6\u3067\u63a1\u7528\u3055\u308c\u308b\u6c42\u8077\u8005\u306f\u6b63\u5f0f\u306a\u9069\u6027\u8a55\u4fa1\u306e\u5bfe\u8c61\u306h\u306a\u308a\u5f97\u308b\u305f\u3081\u3001\u4f01\u696d\u72ec\u81ea\u306e\u30b9\u30af\u30ea\u30fc\u30cb\u30f3\u30b0\u306h\u5236\u5ea6\u4e0a\u306e\u9069\u6027\u8a55\u4fa1\u3092\u533a\u5225\u3059\u308b\u3002",
        uncertain: "\u63a1\u7528\u524d\u306b\u9069\u6027\u8a55\u4fa1\u3092\u3044\u3064\u958b\u59cb\u3057\u3001\u7d50\u679c\u3092\u5f85\u3064\u671f\u9593\u3084\u4e0f\u53d6\u5f97\u6642\u306e\u6271\u3044\u3092\u96c7\u7528\u30d7\u30ef\u30bb\u30b9\u3078\u3069\u3046\u7d44\u307f\u8fbc\u3080\u304b\u306f\u3001\u8077\u52d9\u9650\u5b9a\u306e\u5408\u610f\u3001\u8a55\u4fa1\u671f\u9593\u3001\u4ee3\u66ff\u696d\u52d9\u7b49\u306b\u3088\u308a\u500b\u5225\u5224\u65ad\u3068\u306a\u308b\u3002",
        sourceIds: [CANONICAL_LAW_SOURCE, "source-cao-security-clearance-business-guideline-20250502"]
      });
    }
    canonical.issues = issues;
  }

  window.TOPIC_DATA = (window.TOPIC_DATA || []).filter((topic) => topic && topic.slug !== OLD_TOPIC);
  window.SOURCE_DATA = (window.SOURCE_DATA || []).filter((source) => source && source.id !== OLD_LAW_SOURCE);
})();
