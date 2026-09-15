(() => {
  const additions = [
    {
      id: "seed-act-2026-amendment",
      title: "種苗法・2026年改正",
      eventType: "law_amendment",
      lawId: "seed-act",
      lawLabel: "種苗法",
      relatedTopics: ["plant-variety-seed-act-2026"],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-07-24", "2026-12-01"],
      effectiveDateNote: "育成者権の存続期間延長・効力が及ばない範囲の明確化は2026年7月24日、その他の主要改正は2026年12月1日施行。",
      effectiveDateSourceIds: ["source-maff-seed-act-qa-2026", "source-egov-seed-act-current"],
      matchSourceIds: ["source-maff-seed-act-amendment-2026", "source-maff-seed-act-qa-2026"],
      sourceIds: ["source-maff-seed-act-amendment-2026", "source-maff-seed-act-qa-2026", "source-egov-seed-act-current"]
    },
    {
      id: "important-varieties-act-2026-enactment",
      title: "重要品種の育成及びその種苗の生産の振興に関する法律・2026年制定",
      eventType: "new_law",
      lawId: "important-varieties-breeding-production-act",
      lawLabel: "重要品種の育成及びその種苗の生産の振興に関する法律",
      relatedTopics: ["plant-variety-seed-act-2026"],
      effectiveDateStatus: "relative",
      effectiveDateNote: "公布の日（2026年7月24日）から起算して6月を超えない範囲内で政令で定める日から施行。具体的な施行日は施行期日を定める一次資料で確認する。",
      effectiveDateSourceIds: ["source-egov-important-varieties-act-2026", "source-shugiin-important-varieties-bill-2026"],
      matchSourceIds: ["source-egov-important-varieties-act-2026", "source-egov-important-varieties-rule-draft-2026", "source-egov-important-varieties-basic-policy-draft-2026"],
      sourceIds: ["source-egov-important-varieties-act-2026", "source-shugiin-important-varieties-bill-2026", "source-egov-important-varieties-rule-draft-2026", "source-egov-important-varieties-basic-policy-draft-2026"]
    }
  ];

  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existingIds.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
