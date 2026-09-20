(() => {
  const addition = {
    id: "pension-reform-social-insurance-expansion-2025",
    title: "年金制度改正法・被用者保険の適用拡大（2025年改正）",
    eventType: "law_amendment",
    lawId: "pension-system-reform-act-2025-social-insurance",
    lawLabel: "年金制度改正法・健康保険／厚生年金保険の適用拡大",
    relatedTopics: ["social-insurance-expansion-part-time-workers"],
    effectiveDateStatus: "phased",
    effectiveDates: ["2026-10", "2027-10-01", "2029-10-01", "2032-10-01", "2035-10-01"],
    effectiveDateNote: "短時間労働者の賃金要件は2026年10月撤廃予定／企業規模要件は2027年10月1日から段階的に縮小し2035年10月1日に撤廃／個人事業所の業種要件撤廃は2029年10月1日",
    effectiveDateSourceIds: ["source-mhlw-social-insurance-expansion-2025"],
    matchSourceIds: ["source-mhlw-social-insurance-expansion-2025", "source-jps-premium-adjustment-20260911"],
    sourceIds: ["source-mhlw-social-insurance-expansion-2025", "source-jps-premium-adjustment-20260911"],
    articleIds: [
      "article-mhlw-social-insurance-expansion-2025",
      "article-jps-premium-adjustment-20260911",
      "article-tmi-pension-reform-social-insurance-20250620"
    ]
  };
  if (!(window.REFORM_EVENT_DATA || []).some((item) => item && item.id === addition.id)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(addition);
  }
})();
