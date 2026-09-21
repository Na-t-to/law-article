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
