(() => {
  const additions = [
    {
      id: "digital-wage-system-review-2026",
      title: "賃金のデジタル払い制度・2026年見直し",
      eventType: "policy_review",
      lawId: "labor-standards-regulations-digital-wage",
      lawLabel: "労働基準法施行規則（賃金のデジタル払い）",
      relatedTopics: ["digital-wage-payment-2026"],
      effectiveDateStatus: "unknown",
      matchSourceIds: ["source-mhlw-digital-wage-review-20260916"],
      sourceIds: ["source-mhlw-digital-wage-review-20260916"]
    }
  ];
  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existingIds.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
