(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];

  const consumer = (window.REFORM_EVENT_DATA || []).find((item) => item?.id === "consumer-contract-law-review-2026");
  if (consumer) {
    const sources = [
      "source-caa-consumer-contract-interim-final-2026",
      "source-caa-consumer-contract-public-comment-2026"
    ];
    consumer.eventType = "policy_review";
    consumer.relatedTopics = appendUnique(consumer.relatedTopics, ["consumer-contract-law-review-2026"]);
    consumer.matchSourceIds = appendUnique(consumer.matchSourceIds, sources);
    consumer.sourceIds = appendUnique(consumer.sourceIds, sources);
    consumer.articleIds = appendUnique(consumer.articleIds, ["article-caa-consumer-contract-interim-final-2026"]);
  }

  let digital = (window.REFORM_EVENT_DATA || []).find((item) =>
    item?.id === "digital-commerce-tokusho-review-2026" ||
    (Array.isArray(item?.relatedTopics) && item.relatedTopics.includes("digital-commerce-tokusho-review"))
  );
  const digitalSources = [
    "source-caa-digital-tokusho-interim-2026",
    "source-caa-digital-tokusho-interim-final-2026",
    "source-caa-digital-tokusho-public-comment-2026"
  ];
  if (!digital) {
    digital = {
      id: "digital-commerce-tokusho-review-2026",
      title: "デジタル取引・特定商取引法等・2026年見直し",
      eventType: "policy_review",
      lawId: "specified-commercial-transactions-digital-commerce",
      lawLabel: "特定商取引法等・デジタル取引制度",
      relatedTopics: ["digital-commerce-tokusho-review"],
      matchSourceIds: digitalSources,
      sourceIds: digitalSources,
      articleIds: ["article-caa-digital-tokusho-interim-final-2026"]
    };
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(digital);
  } else {
    digital.eventType = "policy_review";
    digital.relatedTopics = appendUnique(digital.relatedTopics, ["digital-commerce-tokusho-review"]);
    digital.matchSourceIds = appendUnique(digital.matchSourceIds, digitalSources);
    digital.sourceIds = appendUnique(digital.sourceIds, digitalSources);
    digital.articleIds = appendUnique(digital.articleIds, ["article-caa-digital-tokusho-interim-final-2026"]);
  }
})();
