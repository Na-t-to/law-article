(() => {
  const additions = [
    {
      id: "child-sexual-violence-prevention-act-2026",
      title: "こども性暴力防止法（2026年施行）",
      eventType: "new_law",
      lawId: "child-sexual-violence-prevention-act",
      lawLabel: "こども性暴力防止法",
      relatedTopics: ["child-sexual-violence-prevention-dbs-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-12-25"],
      effectiveDateSourceIds: ["source-cfa-child-sexual-violence-prevention-act-2026"],
      matchSourceIds: ["source-cfa-child-sexual-violence-prevention-act-2026"],
      sourceIds: [
        "source-cfa-child-sexual-violence-prevention-act-2026",
        "source-cfa-child-sexual-violence-practice-materials-2026"
      ],
      articleIds: [
        "article-cfa-child-sexual-violence-prevention-act-2026",
        "article-cfa-child-sexual-violence-practice-materials-2026",
        "article-tmi-child-sexual-violence-overview-20260501",
        "article-tmi-child-sexual-violence-scope-20260710",
        "article-tmi-child-sexual-violence-recognition-20260724"
      ]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
