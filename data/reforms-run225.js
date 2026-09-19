(() => {
  const addition = {
    id: "commercial-code-ebl-review-2024",
    title: "商法（電子船荷証券）・船荷証券等電子化見直し",
    eventType: "policy_review",
    lawId: "commercial-code-electronic-bill-of-lading",
    lawLabel: "商法（電子船荷証券）",
    relatedTopics: ["electronic-bill-of-lading-trade-dx"],
    matchSourceIds: ["source-moj-ebl-outline-20240909"],
    sourceIds: ["source-moj-ebl-interim-20230308", "source-moj-ebl-outline-20240909"],
    articleIds: [
      "article-moj-ebl-outline-20240909",
      "article-japan-pi-ebl-interim-20230421",
      "article-trade-dx-ebl-request-20260901"
    ]
  };

  if (!(window.REFORM_EVENT_DATA || []).some((item) => item && item.id === addition.id)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(addition);
  }
})();
