(() => {
  const addition = {
    id: "ssbj-shk-practice-standard-2026-designation",
    title: "SSBJ実務対応基準第1号・2026年指定",
    eventType: "regulation_or_guideline",
    lawId: "ssbj-sustainability-disclosure-standards",
    lawLabel: "SSBJサステナビリティ開示基準",
    relatedTopics: ["ssbj-statutory-sustainability-disclosure"],
    effectiveDateStatus: "confirmed",
    effectiveDate: "2026-09-15",
    effectiveDateSourceIds: ["source-fsa-ssbj-shk-practice-standard-designation-2026"],
    matchSourceIds: ["source-fsa-ssbj-shk-practice-standard-designation-2026"],
    sourceIds: ["source-fsa-ssbj-shk-practice-standard-designation-2026"]
  };
  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  if (!existingIds.has(addition.id)) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([addition]);
})();