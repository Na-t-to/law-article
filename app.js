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
  const changeSummaryForArticle = (article) => window.getKnowledgeArticleChangeSummary?.(article, topics, updates) || "整理変更なし／関連テーマの参考資料を追加";

  const recent = [...articles].sort((a, b) => (b.collectedAt || "").localeCompare(a.collectedAt || "") || b.publishedAt.localeCompare(a.publishedAt)).slice(0, 12);
  document.querySelector("#homeArticleList").innerHTML = recent.map((article) => `<article class="article-row"><time class="article-added-date" datetime="${escapeHtml(article.collectedAt)}"><span>追加</span>${escapeHtml(article.collectedAt)}</time><div class="article-main-cell"><a class="article-title-link" href="article.html?id=${encodeURIComponent(article.id)}"><strong>${escapeHtml(article.title)}</strong></a><small>${escapeHtml(article.publisher)} / ${escapeHtml(article.sourceLabel)}</small></div><time class="article-published-date" datetime="${escapeHtml(article.publishedAt)}"><span>公開</span>${escapeHtml(article.publishedAt)}</time><div class="article-topics">${topicsForArticle(article).map((topic) => `<a href="topics/${escapeHtml(topic.slug)}.html">${escapeHtml(topic.title)} →</a>`).join("")}</div><a class="article-impact" href="article.html?id=${encodeURIComponent(article.id)}">${escapeHtml(changeSummaryForArticle(article))}</a></article>`).join("");
})();
