(() => {
  const exists = (window.REFORM_EVENT_DATA || []).some((item) => item && item.id === "fiea-digital-bond-solicitation-2026");
  if (exists) return;
  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([{
    id: "fiea-digital-bond-solicitation-2026",
    title: "金融商品取引法関係府令・社債グループ企業勧誘規制 2026年改正",
    eventType: "regulation_or_guideline",
    lawId: "financial-instruments-exchange-act",
    lawLabel: "金融商品取引法・関係府令",
    relatedTopics: ["digital-bond-solicitation-2026"],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-09-16"],
    effectiveDateSourceIds: ["source-fsa-digital-bond-solicitation-final-2026"],
    articleIds: ["article-fsa-digital-bond-solicitation-final-2026"],
    matchSourceIds: [],
    sourceIds: ["source-fsa-digital-bond-solicitation-final-2026"]
  }]);
})();
