(() => {
  const id = "payment-services-act-cross-border-collection-2025";
  if ((window.REFORM_EVENT_DATA || []).some((item) => item && item.id === id)) return;

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([{
    id,
    title: "資金決済法・クロスボーダー収納代行 2025年改正",
    eventType: "law_amendment",
    lawId: "payment-services-act",
    lawLabel: "資金決済法",
    relatedTopics: ["cross-border-collection-payment-services-act-2026"],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-06-01"],
    effectiveDateSourceIds: ["source-fsa-payment-services-amendment-final-2026"],
    articleIds: ["article-fsa-payment-services-cross-border-collection-final-2026", "article-tmi-cross-border-collection-2026"],
    matchSourceIds: [],
    sourceIds: ["source-fsa-payment-services-amendment-final-2026", "source-fsa-cross-border-collection-comments-2026"]
  }]);
})();
