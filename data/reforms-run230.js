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

(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "pension-reform-social-insurance-expansion-2025");
  if (!event) return;
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    for (const value of values || []) if (value && !target.includes(value)) target.push(value);
  };
  event.effectiveDates = (event.effectiveDates || []).map((value) => value === "2026-10" ? "2026-10-01" : value);
  event.effectiveDateNote = "短時間労働者の賃金要件は2026年10月1日に撤廃／企業規模要件は2027年10月1日から段階的に縮小し2035年10月1日に撤廃／個人事業所の業種要件撤廃は2029年10月1日";
  if (!Array.isArray(event.effectiveDateSourceIds)) event.effectiveDateSourceIds = [];
  addUnique(event.effectiveDateSourceIds, ["source-mhlw-pension-wage-threshold-decrees-20260911"]);
  if (!Array.isArray(event.sourceIds)) event.sourceIds = [];
  addUnique(event.sourceIds, ["source-mhlw-pension-wage-threshold-decrees-20260911"]);
  if (!Array.isArray(event.matchSourceIds)) event.matchSourceIds = [];
  addUnique(event.matchSourceIds, ["source-mhlw-pension-wage-threshold-decrees-20260911"]);
  if (!Array.isArray(event.articleIds)) event.articleIds = [];
  addUnique(event.articleIds, ["article-tmi-labor-update-social-insurance-20260915"]);
})();
