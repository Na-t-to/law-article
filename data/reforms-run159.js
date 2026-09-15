(() => {
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  const consumerEvent = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "consumer-contract-law-review-2026");
  if (consumerEvent) {
    consumerEvent.matchSourceIds = addUnique(consumerEvent.matchSourceIds, "source-caa-consumer-contract-interim-final-2026");
    consumerEvent.sourceIds = addUnique(consumerEvent.sourceIds, "source-caa-consumer-contract-interim-final-2026");
  }

  const addition = {
    id: "digital-commerce-tokusho-2026-review",
    title: "デジタル取引・特定商取引法等制度見直し（2026年）",
    eventType: "policy_review",
    lawId: "digital-commerce-scta-policy-review",
    lawLabel: "デジタル取引・特定商取引法等制度見直し",
    relatedTopics: ["digital-commerce-tokusho-review"],
    effectiveDateStatus: "unknown",
    matchSourceIds: [
      "source-caa-digital-tokusho-interim-2026",
      "source-caa-digital-tokusho-interim-final-2026"
    ],
    sourceIds: [
      "source-caa-digital-tokusho-interim-2026",
      "source-caa-digital-tokusho-interim-final-2026"
    ]
  };

  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  if (!existingIds.has(addition.id)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([addition]);
  }
})();