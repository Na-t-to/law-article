(() => {
  const additions = [
    {
      id: "fiea-asset-management-nonlisted-intermediary-2024-amendment",
      title: "金融商品取引法・2024年資産運用／非上場仲介改正",
      eventType: "law_amendment",
      lawId: "financial-instruments-exchange-act",
      lawLabel: "金融商品取引法",
      relatedTopics: ["startup-growth-capital-unlisted-market"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2025-05-01",
      effectiveDateSourceIds: ["source-fsa-fiea-asset-management-nonlisted-intermediary-2025"],
      matchSourceIds: ["source-fsa-fiea-asset-management-nonlisted-intermediary-2025"],
      sourceIds: ["source-fsa-fiea-asset-management-nonlisted-intermediary-2025"]
    },
    {
      id: "jsda-unlisted-securities-rules-2026",
      title: "日証協・非上場株式取引制度／2026年ルール整備",
      eventType: "regulation_or_guideline",
      lawId: "jsda-unlisted-securities-rules",
      lawLabel: "日証協・非上場株式取引制度",
      relatedTopics: ["startup-growth-capital-unlisted-market"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2026-06-16",
      effectiveDateSourceIds: ["source-jsda-unlisted-securities-rules-2026"],
      matchSourceIds: ["source-jsda-unlisted-securities-rules-2026"],
      sourceIds: ["source-jsda-unlisted-securities-rules-2026", "source-jsda-startup-growth-capital-report-2025"]
    },
    {
      id: "fiea-growth-finance-ordinances-2026",
      title: "金融商品取引法関係内閣府令・2026年成長資金／海外VF等改正",
      eventType: "regulation_or_guideline",
      lawId: "financial-instruments-exchange-act",
      lawLabel: "金融商品取引法",
      relatedTopics: ["startup-growth-capital-unlisted-market"],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-09-16", "2026-10-05"],
      effectiveDateNote: "デジタル社債等のグループ企業による勧誘規制緩和と外国ファンド特例の要件緩和は2026年9月16日施行／券面不発行の預託証券に係る指定等は2026年10月5日施行",
      effectiveDateSourceIds: ["source-fsa-growth-finance-ordinance-2026"],
      matchSourceIds: ["source-fsa-growth-finance-ordinance-2026"],
      sourceIds: ["source-fsa-growth-finance-ordinance-2026"]
    }
  ];

  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existingIds.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
