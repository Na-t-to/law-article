(() => {
  const exists = (window.REFORM_EVENT_DATA || []).some((item) => item && item.id === "companies-act-review-2026");
  if (exists) return;
  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([{
    id: "companies-act-review-2026",
    title: "会社法制（株式・株主総会等関係）・2026年見直し",
    eventType: "policy_review",
    lawId: "companies-act",
    lawLabel: "会社法",
    relatedTopics: ["companies-act-review-shareholders", "agm-pre-disclosure-company-law-reform"],
    matchSourceIds: [
      "source-moj-company-law-interim-2026",
      "source-moj-company-law-outline-round1-2026",
      "source-moj-company-law-outline-round3-2026"
    ],
    sourceIds: [
      "source-moj-company-law-interim-2026",
      "source-moj-company-law-outline-round1-2026",
      "source-moj-company-law-outline-round3-2026"
    ]
  }]);
})();
