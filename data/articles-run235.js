(() => {
  const article = (window.ARTICLE_DATA || []).find(
    (item) => item && item.id === "article-ppc-privacy-rulemaking-basic-1-2026"
  );
  if (!article) return;

  // The parent 2026 APPI amendment is enacted, but this 2026-09-16
  // implementing-rule material is expressly a "basic approach (draft)".
  // Keep the article linked to the enacted amendment event while preserving
  // the publication-stage distinction required by the reform view.
  article.reformStageAtPublication = "proposal";
  article.reformStageSourceIds = ["source-ppc-privacy-rulemaking-basic-1-2026"];
})();
