(() => {
  const additions = [{
    id: "employee-social-insurance-expansion-2025-amendment",
    title: "被用者保険・2025年適用拡大",
    eventType: "law_amendment",
    lawId: "employee-social-insurance-coverage",
    lawLabel: "年金制度改正法（健康保険法・厚生年金保険法等）",
    relatedTopics: ["social-insurance-expansion-2025"],
    effectiveDateStatus: "phased",
    effectiveDates: ["2026-10-01", "2027-10-01", "2029-10-01", "2032-10-01", "2035-10-01"],
    effectiveDateNote: "保険料調整制度は2026年10月1日開始。企業規模要件は2027年10月以降段階的に縮小し、2035年10月1日に撤廃。個人事業所の業種要件撤廃は2029年10月。賃金要件は厚生労働省が2026年10月撤廃予定と案内しているが、法律上は公布後3年以内の政令指定日であり、最終施行日を政令で確認する。",
    effectiveDateSourceIds: ["source-jps-premium-adjustment-2026", "source-mhlw-pension-reform-law-2025", "source-mhlw-social-insurance-expansion-2025"],
    matchSourceIds: ["source-mhlw-pension-reform-law-2025", "source-mhlw-social-insurance-expansion-2025", "source-jps-premium-adjustment-2026"],
    sourceIds: ["source-mhlw-pension-reform-law-2025", "source-mhlw-social-insurance-expansion-2025", "source-jps-premium-adjustment-2026"]
  }];

  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existingIds.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
