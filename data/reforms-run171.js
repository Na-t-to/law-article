(() => {
  const additions = [
    {
      id: "child-sexual-violence-prevention-act-2024-2026",
      title: "こども性暴力防止法・2024年制定（2026年施行）",
      eventType: "new_law",
      lawId: "child-sexual-violence-prevention-act",
      lawLabel: "こども性暴力防止法",
      relatedTopics: ["child-sexual-violence-prevention-dbs"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2026-12-25",
      effectiveDateSourceIds: ["source-cfa-child-sexual-violence-act-portal"],
      matchSourceIds: ["source-cfa-child-sexual-violence-act-portal"],
      sourceIds: ["source-cfa-child-sexual-violence-act-portal", "source-cfa-child-sexual-violence-guideline-20260109", "source-cfa-child-safety-cross-guideline-20260821"]
    }
  ];
  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existingIds.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
