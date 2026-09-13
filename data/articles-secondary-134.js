(() => {
  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === "article-caa-digital-tokusho-interim-final-2026");
  if (article && Array.isArray(article.relatedIssues)) {
    article.relatedIssues = Array.from(new Set(article.relatedIssues.map((id) => id === "dt-social-solicitation" ? "dt-chat-solicitation" : id)));
  }
})();
