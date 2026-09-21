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
    canonical.categories = uniq([...(canonical.categories || []), "個人情報", "情報セキュリティ"]);
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
        title: "採用時に適性評価を予測するための情報収集はどこまでできるか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "行政機関の適性評価を企業が独自に代替・先取りする発想は避ける。求職者の病歴・犯罪歴等には個人情報保護法上の制約があり、求職者情報の収集には職業安定法上の必要性・合理性も求められるため、適性評価を予測する目的だけで機微情報を広く収集しない。",
        exception: "重要経済安保情報を叐c��扱う条件で採用される求職者は正式な適性評価の対象となり得るため、企業独自のスクリーニングと制度上の適性評価を区別する。",
        uncertain: "採用前に適性評価をいつ開始し、結果を待つ期間や不取得時の扱いを雇用プロセスへどう組み込むかは、職務限定の合意、評価期間、代替業務等により個別判断となる。",
        sourceIds: [CANONICAL_LAW_SOURCE, "source-cao-security-clearance-business-guideline-20250502"]
      });
    }
    canonical.issues = issues;
  }

  window.TOPIC_DATA = (window.TOPIC_DATA || []).filter((topic) => topic && topic.slug !== OLD_TOPIC);
  window.SOURCE_DATA = (window.SOURCE_DATA || []).filter((source) => source && source.id !== OLD_LAW_SOURCE);
})();
