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
  const mapTopics = (values) => uniq((values || []).map((value) => topicMap.get(value) || value));
  const mapSources = (values) => uniq((values || []).map((value) => sourceMap.get(value) || value));
  const mapArticles = (values) => uniq((values || []).map((value) => articleMap.get(value) || value));
  const mapIssues = (values) => uniq((values || []).flatMap((value) => issueMap.get(value) || [value]));

  for (const source of window.SOURCE_DATA || []) source.topics = mapTopics(source.topics);
  for (const article of window.ARTICLE_DATA || []) {
    article.relatedTopics = mapTopics(article.relatedTopics);
    article.relatedIssues = mapIssues(article.relatedIssues);
    article.primarySourceIds = mapSources(article.primarySourceIds);
    if (Array.isArray(article.reformStageSourceIds)) article.reformStageSourceIds = mapSources(article.reformStageSourceIds);
    if (Array.isArray(article.reformEffectiveDateSourceIds)) article.reformEffectiveDateSourceIds = mapSources(article.reformEffectiveDateSourceIds);
  }
  for (const event of window.REFORM_EVENT_DATA || []) {
    event.relatedTopics = mapTopics(event.relatedTopics);
    event.sourceIds = mapSources(event.sourceIds);
    if (Array.isArray(event.matchSourceIds)) event.matchSourceIds = mapSources(event.matchSourceIds);
    if (Array.isArray(event.effectiveDateSourceIds)) event.effectiveDateSourceIds = mapSources(event.effectiveDateSourceIds);
    if (Array.isArray(event.articleIds)) event.articleIds = mapArticles(event.articleIds);
  }
  for (const update of window.UPDATE_DATA || []) {
    if (Array.isArray(update.affectedTopics)) update.affectedTopics = mapTopics(update.affectedTopics);
    if (update.source) update.source = sourceMap.get(update.source) || update.source;
  }

  const canonical = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === CANONICAL_TOPIC);
  const duplicate = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === OLD_TOPIC);
  if (canonical) {
    canonical.categories = uniq([...(canonical.categories || []), ...(duplicate?.categories || [])]);
    canonical.lastUpdated = "2026-09-21";
    canonical.lastVerified = "2026-09-21";
    canonical.sourceIds = mapSources(uniq([
      ...(canonical.sourceIds || []),
      ...(duplicate?.sourceIds || []),
      "source-cao-security-clearance-business-guideline-20250502",
      "source-cao-security-clearance-annual-report-20260626"
    ]));
    canonical.referenceArticleIds = mapArticles(uniq([
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
    const hr = issues.find((issue) => issue.id === "economic-security-hr-purpose-limit");
    if (hr) hr.status = "interpreted";
    const outsourcing = issues.find((issue) => issue.id === "economic-security-outsourcing");
    if (outsourcing) outsourcing.status = "interpreted";
    if (!issues.some((issue) => issue.id === "economic-security-recruitment-prescreening")) {
      const sourceIssue = (duplicate?.issues || []).find((issue) => issue.id === "security-clearance-recruitment-prescreening");
      if (sourceIssue) {
        const copied = { ...sourceIssue, id: "economic-security-recruitment-prescreening", status: "interpreted", sourceIds: mapSources(sourceIssue.sourceIds) };
        issues.splice(Math.min(3, issues.length), 0, copied);
      }
    }
    canonical.issues = issues;
  }

  window.TOPIC_DATA = (window.TOPIC_DATA || []).filter((topic) => topic && topic.slug !== OLD_TOPIC);
  window.SOURCE_DATA = (window.SOURCE_DATA || []).filter((source) => source && source.id !== OLD_LAW_SOURCE);
})();

(() => {
  const OLD_TOPIC = "customer-harassment-jobseeker-sexual-harassment-2026";
  const CUSTOMER_TOPIC = "customer-harassment";
  const JOBSEEKER_TOPIC = "job-seeker-sexual-harassment";
  const JOBSEEKER_SOURCE = "source-mhlw-jobseeker-sexual-harassment-2026";
  const JOBSEEKER_ARTICLE = "article-mhlw-jobseeker-sexual-harassment-2026";
  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];

  const customerIssueMap = new Map([
    ["customer-harassment-definition-2026", ["customer-harassment-definition-2026"]],
    ["customer-harassment-employer-measures-2026", ["customer-harassment-employer-measures-2026"]]
  ]);
  const jobseekerIssueMap = new Map([
    ["jobseeker-sexual-harassment-employer-measures-2026", [
      "jobseeker-sh-scope",
      "jobseeker-sh-recruiting-rules",
      "jobseeker-sh-consultation-response"
    ]]
  ]);

  const customerTopic = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === CUSTOMER_TOPIC);
  const jobseekerTopic = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === JOBSEEKER_TOPIC);
  if (customerTopic) customerTopic.lastVerified = "2026-09-21";
  if (jobseekerTopic) {
    jobseekerTopic.lastUpdated = "2026-09-21";
    jobseekerTopic.lastVerified = "2026-09-21";
    jobseekerTopic.sourceIds = uniq([...(jobseekerTopic.sourceIds || []), JOBSEEKER_SOURCE]);
  }

  for (const source of window.SOURCE_DATA || []) {
    if (!Array.isArray(source.topics) || !source.topics.includes(OLD_TOPIC)) continue;
    const canonical = source.id === JOBSEEKER_SOURCE || /求職|jobseeker/i.test(`${source.id || ""} ${source.title || ""}`)
      ? JOBSEEKER_TOPIC
      : CUSTOMER_TOPIC;
    source.topics = uniq(source.topics.map((topic) => topic === OLD_TOPIC ? canonical : topic));
  }

  for (const article of window.ARTICLE_DATA || []) {
    if (article.id === JOBSEEKER_ARTICLE) {
      article.primarySourceIds = uniq([...(article.primarySourceIds || []), JOBSEEKER_SOURCE]);
    }
    if (!Array.isArray(article.relatedTopics) || !article.relatedTopics.includes(OLD_TOPIC)) continue;
    const isJobseeker = (article.relatedIssues || []).some((issue) => jobseekerIssueMap.has(issue))
      || /求職|jobseeker/i.test(`${article.id || ""} ${article.title || ""}`);
    const canonical = isJobseeker ? JOBSEEKER_TOPIC : CUSTOMER_TOPIC;
    const issueMap = isJobseeker ? jobseekerIssueMap : customerIssueMap;
    article.relatedTopics = uniq(article.relatedTopics.map((topic) => topic === OLD_TOPIC ? canonical : topic));
    article.relatedIssues = uniq((article.relatedIssues || []).flatMap((issue) => issueMap.get(issue) || [issue]));
  }

  for (const event of window.REFORM_EVENT_DATA || []) {
    if (!Array.isArray(event.relatedTopics) || !event.relatedTopics.includes(OLD_TOPIC)) continue;
    const canonical = event.lawId === "equal-employment-opportunity-act"
      || /求職|jobseeker|equal-opportunity/i.test(`${event.id || ""} ${event.title || ""} ${event.lawId || ""}`)
      ? JOBSEEKER_TOPIC
      : CUSTOMER_TOPIC;
    event.relatedTopics = uniq(event.relatedTopics.map((topic) => topic === OLD_TOPIC ? canonical : topic));
  }

  for (const update of window.UPDATE_DATA || []) {
    if (!Array.isArray(update.affectedTopics) || !update.affectedTopics.includes(OLD_TOPIC)) continue;
    update.affectedTopics = uniq(update.affectedTopics.flatMap((topic) => topic === OLD_TOPIC ? [CUSTOMER_TOPIC, JOBSEEKER_TOPIC] : [topic]));
  }

  window.TOPIC_DATA = (window.TOPIC_DATA || []).filter((topic) => topic && topic.slug !== OLD_TOPIC);
})();
