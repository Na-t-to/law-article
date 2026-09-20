(() => {
  const reforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  const removeArticle = (values, articleId) =>
    (Array.isArray(values) ? values : []).filter((id) => id !== articleId);

  // Keep cross-law / cross-guideline explainers attached to their explicit primary reform event.
  // Dedicated event articles are already explicitly linked, so broad source matching here only
  // creates duplicate reform ownership for mixed secondary or omnibus materials.
  const importantVarieties = reforms.find((event) => event?.id === "important-varieties-act-2026-enactment");
  if (importantVarieties) importantVarieties.matchSourceIds = [];

  const privacySecurityReview = reforms.find((event) => event?.id === "privacy-security-measures-guideline-review-2026-2027");
  if (privacySecurityReview) privacySecurityReview.matchSourceIds = [];

  const omnibusArticleId = "article-fsa-growth-finance-ordinance-2026";
  const digitalBond = reforms.find((event) => event?.id === "fiea-digital-bond-solicitation-2026");
  if (digitalBond) digitalBond.articleIds = removeArticle(digitalBond.articleIds, omnibusArticleId);

  const overseasVf = reforms.find((event) => event?.id === "fiea-overseas-vf-foreign-fund-exemption-2026");
  if (overseasVf) {
    overseasVf.matchSourceIds = [];
    overseasVf.articleIds = removeArticle(overseasVf.articleIds, omnibusArticleId);
  }
})();
