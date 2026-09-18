(() => {
  const additions = [
    {
      id: "jftc-distribution-guideline-rpm-2026",
      title: "流通・取引慣行ガイドライン・再販売価格維持の例外明確化（2026年7月）",
      eventType: "regulation_or_guideline",
      lawId: "antimonopoly-act-distribution-guideline-rpm",
      lawLabel: "独占禁止法・流通取引慣行ガイドライン（再販売価格維持）",
      relatedTopics: ["resale-price-maintenance-distribution-2026"],
      effectiveDateStatus: "unknown",
      effectiveDateNote: "公正取引委員会は2026年7月8日付でガイドラインを改正した。法令改正ではなく独占禁止法の運用上の考え方を明確化するガイドライン改正であり、別個の法定施行日は設定されていないため、法改正メニュー上の施行日は登録しない。",
      matchSourceIds: ["source-jftc-distribution-guideline-rpm-20260708"],
      sourceIds: [
        "source-jftc-distribution-guideline-rpm-20260708",
        "source-jftc-distribution-guideline-current-20260708",
        "source-jftc-rpm-faq-20260708"
      ],
      articleIds: [
        "article-jftc-distribution-guideline-rpm-20260708",
        "article-uchisaiwai-rpm-guideline-20260727"
      ]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
