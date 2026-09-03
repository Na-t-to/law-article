(() => {
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const allArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articles = (window.uniqueKnowledgeArticles?.(allArticles) || allArticles).filter((article) => article.status === "adopted");
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

  window.assertKnowledgeData?.(topics, sources, allArticles);

  const topicBySlug = (slug) => topics.find((topic) => topic.slug === slug);
  const topicsForArticle = (article) => article.relatedTopics.map((slug) => topicBySlug(slug)).filter(Boolean);
  const issueTitlesForArticle = (article) => article.relatedIssues.map((id) => topics.flatMap((topic) => topic.issues).find((issue) => issue.id === id)?.title).filter(Boolean);
  const changeSummaryForArticle = (article) => {
    if (article.whatChanged) return article.whatChanged;
    const update = updates.filter((item) => article.primarySourceIds.includes(item.source) && item.affectedTopics.some((slug) => article.relatedTopics.includes(slug))).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];
    if (update) return update.whatChanged;
    const issues = issueTitlesForArticle(article);
    return issues.length ? `整理変更なし／「${issues.slice(0, 2).join("」「")}」の参考資料を追加` : "整理変更なし／関連テーマの参考資料を追加";
  };

  const recent = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 12);
  document.querySelector("#homeArticleList").innerHTML = recent.map((article) => `<article class="article-row"><time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(article.publishedAt)}</time><div class="article-main-cell"><a class="article-title-link" href="article.html?id=${encodeURIComponent(article.id)}"><strong>${escapeHtml(article.title)}</strong></a><small>${escapeHtml(article.publisher)} / ${escapeHtml(article.sourceLabel)}</small></div><div class="article-topics">${topicsForArticle(article).map((topic) => `<a href="topics/${escapeHtml(topic.slug)}.html">${escapeHtml(topic.title)} →</a>`).join("")}</div><a class="article-impact" href="article.html?id=${encodeURIComponent(article.id)}">${escapeHtml(changeSummaryForArticle(article))}</a></article>`).join("");
})();
