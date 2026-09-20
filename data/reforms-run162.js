(() => {
  const addition = {
    id: "corporate-governance-code-2026",
    title: "コーポレートガバナンス・コード・2026年改訂",
    eventType: "regulation_or_guideline",
    lawId: "corporate-governance-code",
    lawLabel: "コーポレートガバナンス・コード",
    relatedTopics: ["corporate-governance-code-2026"],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-07-21"],
    effectiveDateSourceIds: ["source-jpx-cg-code-2026"],
    matchSourceIds: [
      "source-jpx-cg-code-2026",
      "source-fsa-cg-code-2026"
    ],
    sourceIds: [
      "source-jpx-cg-code-2026",
      "source-fsa-cg-code-2026"
    ]
  };

  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  if (!existingIds.has(addition.id)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([addition]);
  }
})();
