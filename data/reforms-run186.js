(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item?.id === "pension-reform-2025-social-insurance-expansion");
  if (!event) return;

  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const sources = [
    "source-mhlw-social-insurance-related-order-2026",
    "source-jps-social-insurance-expansion-2026-09-16",
    "source-jps-insurance-premium-adjustment-2026"
  ];
  const articles = [
    "article-jps-social-insurance-expansion-2026-09-16",
    "article-jps-insurance-premium-adjustment-2026",
    "article-tmi-labor-update-social-insurance-2026-09-15"
  ];

  event.effectiveDateStatus = "phased";
  event.effectiveDateNote = "段階実施。短時間労働者の月額8.8万円以上の賃金要件は2026年9月11日公布の関係政令等を受け、2026年10月1日に撤廃。企業規模要件は2027年10月から段階縮小し2035年10月に撤廃。常時5人以上の個人事業所の全業種適用拡大は2029年10月。";
  event.effectiveDateSourceIds = appendUnique(event.effectiveDateSourceIds, sources);
  event.sourceIds = appendUnique(event.sourceIds, sources);
  event.articleIds = appendUnique(event.articleIds, articles);
  event.matchSourceIds = appendUnique(event.matchSourceIds, sources);
})();
