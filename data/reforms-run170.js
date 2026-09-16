(() => {
  const additions = [
    {
      id: "labor-standards-act-review-2025-2026",
      title: "労働基準法制・2025～2026年見直し",
      eventType: "policy_review",
      lawId: "labor-standards-act",
      lawLabel: "労働基準法",
      relatedTopics: ["labor-standards-review-representative-holidays-2026"],
      effectiveDateStatus: "unknown",
      matchSourceIds: ["source-mhlw-labor-standards-study-report-2025", "source-mhlw-labor-conditions-subcommittee-205-20260916"],
      sourceIds: ["source-mhlw-labor-standards-study-report-2025", "source-mhlw-labor-conditions-subcommittee-205-20260916"]
    }
  ];
  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existingIds.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
