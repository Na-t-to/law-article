(() => {
  const uniq = (values = []) => [...new Set((Array.isArray(values) ? values : []).filter(Boolean))];
  const replaceValues = (values, aliases) => uniq((Array.isArray(values) ? values : []).map((value) => aliases.get(value) || value));

  let topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const reforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];

  const topicAliases = new Map([
    ["ai-civil-liability-governance-2026", "ai-civil-liability"]
  ]);
  const issueAliases = new Map([
    ["ai-civil-support-reliance-classification-2026", "ai-liability-classification"],
    ["ai-civil-user-duty-business-process-2026", "ai-liability-user-duty"],
    ["ai-civil-developer-provider-duty-2026", "ai-liability-provider-duty"],
    ["ai-civil-product-liability-update-2026", "ai-liability-physical-product"]
  ]);

  // 同じ経産省手引きを基礎に同一論点を重ねていたAI民事責任テーマを正本へ統合する。
  // 後発テーマだけに接続されていたPwCのAIエージェント実務解説は、正本テーマの参考解説として保持する。
  const canonical = topics.find((topic) => topic?.slug === "ai-civil-liability");
  if (canonical) {
    canonical.referenceArticleIds = uniq([
      ...(canonical.referenceArticleIds || []),
      "article-pwc-ai-agent-governance-civil-liability-2026"
    ]);
    canonical.lastUpdated = "2026-09-21";
    canonical.lastVerified = "2026-09-21";
  }

  for (const source of sources) {
    source.topics = replaceValues(source.topics, topicAliases);
  }
  for (const article of articles) {
    article.relatedTopics = replaceValues(article.relatedTopics, topicAliases);
    article.relatedIssues = replaceValues(article.relatedIssues, issueAliases);
  }
  for (const update of window.UPDATE_DATA || []) {
    update.affectedTopics = replaceValues(update.affectedTopics, topicAliases);
  }
  for (const reform of reforms) {
    reform.relatedTopics = replaceValues(reform.relatedTopics, topicAliases);
  }

  topics = topics.filter((topic) => !topicAliases.has(topic?.slug));

  const validTopicIds = new Set(topics.map((topic) => topic.slug));
  const validArticleIds = new Set(articles.map((article) => article.id));
  const topicBySlug = new Map(topics.map((topic) => [topic.slug, topic]));

  for (const source of sources) {
    source.topics = uniq((source.topics || []).filter((slug) => validTopicIds.has(slug)));
  }
  for (const topic of topics) {
    topic.referenceArticleIds = uniq((topic.referenceArticleIds || []).filter((id) => validArticleIds.has(id)));
  }
  for (const article of articles) {
    article.relatedTopics = uniq((article.relatedTopics || []).filter((slug) => validTopicIds.has(slug)));
    const validIssueIds = new Set((article.relatedTopics || []).flatMap((slug) => (topicBySlug.get(slug)?.issues || []).map((issue) => issue.id)));
    article.relatedIssues = uniq((article.relatedIssues || []).filter((id) => validIssueIds.has(id)));
  }
  for (const reform of reforms) {
    reform.relatedTopics = uniq((reform.relatedTopics || []).filter((slug) => validTopicIds.has(slug)));
  }

  window.TOPIC_DATA = topics;
})();
