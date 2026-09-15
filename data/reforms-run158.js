(() => {
  const addition = {
    id: "disability-employment-rate-rare-disease-2026-review",
    title: "障害者雇用促進法・難病患者の実雇用率算入見直し（2026年）",
    eventType: "policy_review",
    lawId: "disability-employment-promotion-act",
    lawLabel: "障害者雇用促進法・障害者雇用率制度",
    relatedTopics: ["disability-employment-business-quality-review"],
    effectiveDateStatus: "unknown",
    matchSourceIds: ["source-mhlw-disability-employment-rare-disease-review-2026"],
    sourceIds: ["source-mhlw-disability-employment-rare-disease-review-2026"]
  };

  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  if (!existingIds.has(addition.id)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([addition]);
  }
})();

(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "fiea-unfair-trading-2026-amendment");
  if (!event) return;
  event.relatedTopics = Array.isArray(event.relatedTopics) ? event.relatedTopics : [];
  if (!event.relatedTopics.includes("market-manipulation-trading-controls")) {
    event.relatedTopics.push("market-manipulation-trading-controls");
  }
})();
