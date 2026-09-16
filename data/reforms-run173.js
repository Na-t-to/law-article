(() => {
  const additions = [
    {
      id: "specified-commercial-transactions-digital-review-2026",
      title: "特定商取引法・デジタル取引法制／2026年見直し",
      eventType: "policy_review",
      lawId: "specified-commercial-transactions-act",
      lawLabel: "特定商取引法・デジタル取引法制",
      relatedTopics: ["digital-commerce-specified-transactions-2026"],
      effectiveDateStatus: "unknown",
      matchSourceIds: ["source-caa-digital-transaction-interim-20260910"],
      sourceIds: ["source-caa-digital-transaction-interim-20260910"]
    }
  ];
  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existingIds.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();