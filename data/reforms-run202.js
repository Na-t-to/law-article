(() => {
  const additions = [
    {
      id: "ssbj-mandatory-disclosure-2026",
      title: "SSBJ基準・有価証券報告書サステナビリティ開示（2026年制度整備）",
      eventType: "regulation_or_guideline",
      lawId: "financial-instruments-disclosure-ssbj",
      lawLabel: "金融商品取引法・開示府令（SSBJ基準）",
      relatedTopics: ["ssbj-sustainability-disclosure-2026"],
      effectiveDateStatus: "phased",
      effectiveDates: ["2027-03-31", "2028-03-31"],
      effectiveDateNote: "開示府令等は2026年2月20日に公布・施行。SSBJ基準の強制適用は、平均時価総額3兆円以上の東証プライム上場会社について2027年3月31日以後終了事業年度から、その他の平均時価総額1兆円以上の同市場上場会社について2028年3月31日以後終了事業年度から段階適用される。2026年9月15日には、SHK制度に関するSSBJ実務対応基準第1号を指定基準へ追加する告示改正が公布・同日適用された。",
      effectiveDateSourceIds: ["source-fsa-ssbj-disclosure-ordinance-20260220"],
      matchSourceIds: [
        "source-fsa-ssbj-disclosure-ordinance-20260220",
        "source-ssbj-shk-practical-standard-20260611",
        "source-fsa-ssbj-shk-designation-20260915"
      ],
      sourceIds: [
        "source-fsa-ssbj-disclosure-ordinance-20260220",
        "source-ssbj-shk-practical-standard-20260611",
        "source-fsa-ssbj-shk-designation-20260915"
      ],
      articleIds: [
        "article-fsa-ssbj-disclosure-ordinance-20260220",
        "article-ssbj-shk-practical-standard-20260611",
        "article-tmi-ssbj-scope3-legal-risks-20260603",
        "article-fsa-ssbj-shk-designation-20260915"
      ]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
