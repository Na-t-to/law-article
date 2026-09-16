(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "privacy-law-2026-amendment");
  if (!event) return;

  const sourceId = "source-ppc-privacy-rulemaking-basic-1-2026";
  const articleId = "article-ppc-privacy-rulemaking-basic-1-2026";
  event.matchSourceIds = addUnique(event.matchSourceIds, sourceId);
  event.sourceIds = addUnique(event.sourceIds, sourceId);
  event.articleIds = addUnique(event.articleIds, articleId);
})();

(() => {
  const exists = (window.REFORM_EVENT_DATA || []).some((item) => item && item.id === "public-investment-trust-liquidity-guideline-2026");
  if (exists) return;
  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([{
    id: "public-investment-trust-liquidity-guideline-2026",
    title: "公募投資信託の流動性リスク管理・監督指針 2026年改正",
    eventType: "regulation_or_guideline",
    lawId: "investment-management-supervisory-guideline-fund-liquidity",
    lawLabel: "金融商品取引業者等向けの総合的な監督指針（公募投資信託の流動性）",
    relatedTopics: ["public-investment-trust-liquidity-risk"],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2027-10-01"],
    effectiveDateSourceIds: ["source-fsa-public-fund-liquidity-guideline-2026"],
    articleIds: ["article-fsa-public-fund-liquidity-guideline-2026"],
    matchSourceIds: ["source-fsa-public-fund-liquidity-guideline-2026"],
    sourceIds: ["source-fsa-public-fund-liquidity-guideline-2026", "source-fsa-iosco-fund-liquidity-2025"]
  }]);
})();
