(() => {
  const addition = {
    id: "jsox-2023-internal-control-revision",
    title: "内部統制報告制度（J-SOX）・2023年基準／府令改訂",
    eventType: "regulation_or_guideline",
    lawId: "financial-instruments-exchange-act",
    lawLabel: "金融商品取引法",
    relatedTopics: ["j-sox-internal-control-reporting"],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2024-04-01"],
    effectiveDateSourceIds: ["source-fsa-jsox-ordinance-guideline-20230630"],
    matchSourceIds: [
      "source-fsa-jsox-standards-20230407",
      "source-fsa-jsox-ordinance-guideline-20230630",
      "source-fsa-jsox-qa-casebook-20230831"
    ],
    sourceIds: [
      "source-fsa-jsox-standards-20230407",
      "source-fsa-jsox-ordinance-guideline-20230630",
      "source-fsa-jsox-qa-casebook-20230831"
    ],
    articleIds: [
      "article-businesslawyers-miura-jsox-qa-20231113",
      "article-pwc-jsox-revision-points-20231206",
      "article-ey-jsox-fraud-risk-20240612"
    ]
  };
  const existing = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  if (!existing.some((item) => item && item.id === addition.id)) {
    window.REFORM_EVENT_DATA = existing.concat([addition]);
  }
})();
