(() => {
  const addition = {
    id: "corporate-governance-code-2026-revision",
    title: "コーポレートガバナンス・コード・2026年改訂",
    eventType: "regulation_or_guideline",
    lawId: "corporate-governance-code",
    lawLabel: "コーポレートガバナンス・コード",
    relatedTopics: ["corporate-governance-code-2026"],
    effectiveDateStatus: "confirmed",
    effectiveDate: "2026-07-21",
    effectiveDateSourceIds: ["source-jpx-corporate-governance-code-2026"],
    matchSourceIds: [
      "source-fsa-corporate-governance-code-2026",
      "source-jpx-corporate-governance-code-2026"
    ],
    sourceIds: [
      "source-fsa-corporate-governance-code-2026",
      "source-jpx-corporate-governance-code-2026"
    ]
  };

  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  if (!existingIds.has(addition.id)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([addition]);
  }
})();
