(() => {
  if (window.__LAW_INDEX_RUN250_CANONICAL_CLEANUP_APPLIED__) return;
  window.__LAW_INDEX_RUN250_CANONICAL_CLEANUP_APPLIED__ = true;

  const duplicateTopic = "mobile-identity-verification-2026";
  const duplicateReform = "mobile-phone-improper-use-prevention-2026";
  const duplicateSourceIds = new Set([
    "source-shugiin-mobile-phone-improper-use-amendment-2026",
    "source-egov-mobile-phone-improper-use-act-2026"
  ]);
  const duplicateArticle = "article-ushijima-mobile-phone-improper-use-20260805";

  window.TOPIC_DATA = (window.TOPIC_DATA || []).filter((item) => item && item.slug !== duplicateTopic);
  window.SOURCE_DATA = (window.SOURCE_DATA || []).filter((item) => item && !duplicateSourceIds.has(item.id));
  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).filter((item) => item && item.id !== duplicateReform);
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).filter((item) => item && item.id !== duplicateArticle);
})();
