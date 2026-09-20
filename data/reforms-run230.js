(() => {
  const additions = [
    {
      id: "fiea-startup-capital-2026-amendment",
      title: "金融商品取引法・スタートアップ資金調達規制（2026年改正）",
      eventType: "law_amendment",
      lawId: "financial-instruments-exchange-act",
      lawLabel: "金融商品取引法",
      relatedTopics: ["startup-capital-raising-fiea-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2027-04-01"],
      effectiveDateSourceIds: ["source-egov-fiea-startup-capital-2027"],
      matchSourceIds: ["source-egov-fiea-startup-capital-2027"],
      sourceIds: ["source-fsa-fiea-law-2026", "source-egov-fiea-startup-capital-2027"],
      articleIds: ["article-amt-startup-capital-fiea-20260918"]
    },
    {
      id: "fiea-foreign-vf-rule-2026",
      title: "金融商品取引法・外国ファンド特例の要件緩和（2026年）",
      eventType: "regulation_or_guideline",
      lawId: "financial-instruments-exchange-act",
      lawLabel: "金融商品取引法",
      relatedTopics: ["startup-capital-raising-fiea-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-09-16"],
      effectiveDateSourceIds: ["source-fsa-vf-rule-20260915"],
      matchSourceIds: ["source-fsa-vf-rule-20260915"],
      sourceIds: ["source-fsa-vf-rule-20260915"],
      articleIds: ["article-fsa-vf-rule-20260915"]
    }
  ];
  const existing = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  window.REFORM_EVENT_DATA = existing.concat(additions.filter((item) => !ids.has(item.id)));
})();
