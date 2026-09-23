(() => {
  if (window.__LAW_INDEX_RUN242_APPLIED__) return;
  window.__LAW_INDEX_RUN242_APPLIED__ = true;

  const TOPIC = "consumer-contract-law-review-2026";
  const REFORM = "consumer-contract-law-review-2026";
  const ARTICLE = "article-miyake-consumer-contract-update-20260919";
  const INTERIM = "source-caa-consumer-contract-interim-draft-2026";
  const COMMENT = "source-caa-consumer-contract-public-comment-2026";

  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));
  const addUniqueMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(values || [])].filter(Boolean)));

  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === ARTICLE);
  if (article) {
    article.relatedTopics = addUnique(article.relatedTopics, TOPIC);
    article.relatedIssues = addUniqueMany(article.relatedIssues, [
      "consumer-contract-vulnerability-release",
      "consumer-contract-cancellation-obstruction",
      "consumer-contract-cancellation-fees"
    ]);
    article.primarySourceIds = addUniqueMany(article.primarySourceIds, [INTERIM, COMMENT]);
    article.reformEventId = REFORM;
    article.reformStageAtPublication = "proposal";
    article.reformStageSourceIds = addUniqueMany(article.reformStageSourceIds, [INTERIM, COMMENT]);
    article.legacyReformInference = false;
  }

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
      if (!issue || ![
        "consumer-contract-vulnerability-release",
        "consumer-contract-cancellation-obstruction",
        "consumer-contract-cancellation-fees"
      ].includes(issue.id)) return issue;
      return { ...issue, sourceIds: addUnique(issue.sourceIds, INTERIM) };
    });
    return {
      ...topic,
      sourceIds: addUniqueMany(topic.sourceIds, [INTERIM, COMMENT]),
      referenceArticleIds: addUnique(topic.referenceArticleIds, ARTICLE),
      issues
    };
  });

  const reform = (window.REFORM_EVENT_DATA || []).find((event) => event && event.id === REFORM);
  if (reform) {
    reform.matchSourceIds = addUniqueMany(reform.matchSourceIds, [INTERIM, COMMENT]);
    reform.sourceIds = addUniqueMany(reform.sourceIds, [INTERIM, COMMENT]);
    reform.articleIds = addUnique(reform.articleIds, ARTICLE);
  }
})();
