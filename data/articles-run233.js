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

(() => {
  const articleId = "article-not-cyber-supply-chain-contracts-2025";
  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === articleId);
  if (!article) return;

  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];
  article.relatedTopics = uniq([...(article.relatedTopics || []), "supply-chain-security-scs-2026"]);
  article.relatedIssues = uniq([
    ...(article.relatedIssues || []),
    "scs-procurement-contract-implementation",
    "scs-competition-transaction-law"
  ]);
  article.primarySourceIds = uniq([
    ...(article.primarySourceIds || []),
    "source-jftc-cyber-partnership-20251226"
  ]);
  article.legacyReformInference = false;
  article.whatChanged = "分類更新／既採用のサプライチェーン・サイバー契約解説をSCS評価制度テーマにも接続し、契約・監査と取引適正化の論点を2026年の現行制度資料と横断して追えるよう整理した。";

  const scsTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "supply-chain-security-scs-2026");
  if (scsTopic) scsTopic.referenceArticleIds = uniq([...(scsTopic.referenceArticleIds || []), articleId]);
})();

(() => {
  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === "article-miyake-privacy-rules-20260918");
  if (!article) return;

  article.reformStageAtPublication = "proposal";
  article.reformStageSourceIds = ["source-ppc-privacy-rulemaking-basic-1-2026"];
  article.whatChanged = "法改正段階補正／成立済みの2026年改正個人情報保護法そのものではなく、2026年9月16日に示された政令・委員会規則・ガイドラインの案・検討内容を中心に扱う記事であるため、記事時点の段階を『検討・案段階』へ補正した。";
})();
