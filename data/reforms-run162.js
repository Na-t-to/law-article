(() => {
  const additions = [
    {
      id: "seed-act-2026-amendment",
      title: "種苗法・2026年改正",
      eventType: "law_amendment",
      lawId: "plant-variety-protection-and-seed-act",
      lawLabel: "種苗法",
      relatedTopics: ["plant-variety-seed-act-2026"],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-07-24", "2026-12-01"],
      effectiveDateNote: "育成者権の存続期間延長・効力が及ばない範囲の明確化は2026年7月24日施行／その他の主要改正は2026年12月1日施行",
      effectiveDateSourceIds: ["source-maff-seed-law-qa-2026"],
      matchSourceIds: ["source-maff-seed-law-qa-2026"],
      sourceIds: ["source-maff-seed-law-qa-2026"]
    },
    {
      id: "important-varieties-act-2026",
      title: "重要品種の育成・種苗生産振興法・2026年制定",
      eventType: "new_law",
      lawId: "important-varieties-breeding-act",
      lawLabel: "重要品種の育成及びその種苗の生産の振興に関する法律",
      relatedTopics: ["plant-variety-seed-act-2026"],
      effectiveDateStatus: "relative",
      effectiveDateNote: "2026年7月24日公布。主要部分は公布から6か月以内の政令指定日（一部別段）。2026年9月時点では基本方針案を審議中。",
      effectiveDateSourceIds: ["source-maff-important-varieties-act-2026"],
      matchSourceIds: ["source-maff-important-varieties-policy-draft-2026"],
      sourceIds: ["source-maff-important-varieties-act-2026", "source-maff-important-varieties-policy-draft-2026"]
    },
    {
      id: "defense-equipment-transfer-principles-2026",
      title: "防衛装備移転三原則・運用指針・2026年改正",
      eventType: "regulation_or_guideline",
      lawId: "defense-equipment-transfer-principles",
      lawLabel: "防衛装備移転三原則・運用指針",
      relatedTopics: ["economic-security-tech-control"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-04-21"],
      effectiveDateSourceIds: ["source-mod-defense-transfer-principles-2026"],
      matchSourceIds: ["source-mod-defense-transfer-principles-2026"],
      sourceIds: ["source-mod-defense-transfer-principles-2026"]
    }
  ];
  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
