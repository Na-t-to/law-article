(() => {
  const additions = [
    {
      id: "trade-secret-management-guideline-2025-revision",
      title: "営業秘密管理指針・2025年改訂",
      eventType: "regulation_or_guideline",
      lawId: "unfair-competition-prevention-trade-secret-guideline",
      lawLabel: "営業秘密管理指針（不正競争防止法）",
      relatedTopics: ["trade-secret-management"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2025-03-31"],
      effectiveDateNote: "2025年3月31日に最終改訂版を公表",
      effectiveDateSourceIds: ["source-trade-secret-guideline-2025"],
      matchSourceIds: ["source-trade-secret-guideline-2025"],
      sourceIds: ["source-trade-secret-guideline-2025"]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => item && !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
