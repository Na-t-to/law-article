(() => {
  const additions = [
    {
      id: "fsa-public-fund-liquidity-guideline-2027",
      title: "金融商品取引業者等向け総合的監督指針・公募投資信託の流動性リスク管理（2027年10月）",
      eventType: "regulation_or_guideline",
      lawId: "fsa-securities-supervisory-guideline-public-fund-liquidity",
      lawLabel: "金融商品取引業者等向け総合的監督指針（公募投資信託の流動性リスク管理）",
      relatedTopics: ["securities-monitoring-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2027-10-01",
      effectiveDateNote: "金融庁が2026年9月16日に最終化した公募投資信託の流動性リスク管理に関する監督指針改正は2027年10月1日から適用される。資産運用業協会の自主規制改正は別個の規範として扱い、このイベントには混在させない。",
      effectiveDateSourceIds: ["source-fsa-public-fund-liquidity-guideline-20260916"],
      matchSourceIds: ["source-fsa-public-fund-liquidity-guideline-20260916"],
      sourceIds: ["source-fsa-public-fund-liquidity-guideline-20260916"],
      articleIds: ["article-fsa-public-fund-liquidity-guideline-20260916"]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
