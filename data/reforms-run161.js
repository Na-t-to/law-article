(() => {
  const additions = [
    {
      id: "early-business-restructuring-act-2026",
      title: "早期事業再生法（2026年12月11日施行）",
      eventType: "new_law",
      lawId: "early-business-restructuring-act",
      lawLabel: "早期事業再生法",
      relatedTopics: ["early-business-restructuring-act-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2026-12-11",
      effectiveDateSourceIds: ["source-egov-early-business-restructuring-act"],
      matchSourceIds: ["source-egov-early-business-restructuring-act"],
      sourceIds: ["source-egov-early-business-restructuring-act", "source-meti-early-business-restructuring-qa-2026"]
    },
    {
      id: "security-assignment-retention-title-act-2025",
      title: "譲渡担保法・所有権留保法制（2025年成立）",
      eventType: "new_law",
      lawId: "security-assignment-retention-title-act",
      lawLabel: "譲渡担保法・所有権留保法制",
      relatedTopics: ["security-assignment-retention-title-act"],
      effectiveDateStatus: "relative",
      effectiveDateNote: "2025年6月6日の公布日から起算して2年6か月を超えない範囲内において政令で定める日（一部規定を除く）",
      effectiveDateSourceIds: ["source-egov-security-assignment-act-2025"],
      matchSourceIds: ["source-egov-security-assignment-act-2025"],
      sourceIds: ["source-egov-security-assignment-act-2025", "source-moj-security-assignment-act-2025"]
    }
  ];

  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(additions.filter((item) => !existingIds.has(item.id)));
})();
