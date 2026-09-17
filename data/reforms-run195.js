(() => {
  const additions = [
    {
      id: "plant-variety-protection-seed-act-2026-amendment",
      title: "種苗法・2026年改正",
      eventType: "law_amendment",
      lawId: "plant-variety-protection-seed-act",
      lawLabel: "種苗法",
      relatedTopics: ["plant-variety-seed-law-2026"],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-07-24", "2026-12-01"],
      effectiveDateNote: "育成者権の存続期間延長等は2026年7月24日、その他の主要改正は2026年12月1日に施行",
      effectiveDateSourceIds: ["source-maff-seed-amendment-2026", "source-maff-important-variety-law-2026"],
      matchSourceIds: ["source-maff-seed-amendment-2026"],
      sourceIds: ["source-maff-seed-amendment-2026", "source-maff-important-variety-law-2026"],
      articleIds: ["article-maff-seed-amendment-2026", "article-amt-seed-important-variety-20260908"]
    },
    {
      id: "important-variety-breeding-act-2026",
      title: "重要品種の育成及びその種苗の生産の振興に関する法律（気候変動等対応品種法）",
      eventType: "new_law",
      lawId: "important-variety-breeding-act",
      lawLabel: "重要品種の育成及びその種苗の生産の振興に関する法律",
      relatedTopics: ["plant-variety-seed-law-2026"],
      effectiveDateStatus: "relative",
      effectiveDates: [],
      effectiveDateNote: "公布日（2026年7月24日）から6か月以内に政令で定める日（特段の定めを除く）",
      effectiveDateSourceIds: ["source-maff-important-variety-law-2026"],
      matchSourceIds: ["source-maff-important-variety-law-2026", "source-maff-important-variety-policy-draft-2026"],
      sourceIds: ["source-maff-important-variety-law-2026", "source-maff-important-variety-policy-draft-2026"],
      articleIds: ["article-maff-important-variety-policy-20260907"]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
