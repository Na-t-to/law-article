(() => {
  const additions = [
    {
      id: "important-economic-security-information-act-2024",
      title: "重要経済安保情報保護活用法・セキュリティクリアランス制度",
      eventType: "new_law",
      lawId: "important-economic-security-information-protection-act",
      lawLabel: "重要経済安保情報保護活用法",
      relatedTopics: ["economic-security-clearance"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2025-05-16"],
      effectiveDateNote: "重要経済安保情報保護活用法の原則施行日。2026年6月26日の国会報告も対象期間を『法施行後の令和7年5月16日から』としている。",
      effectiveDateSourceIds: ["source-cao-security-clearance-annual-report-20260626"],
      matchSourceIds: [],
      sourceIds: [
        "source-egov-important-economic-security-information-act-2024",
        "source-cao-security-clearance-business-guideline-20250502",
        "source-cao-security-clearance-annual-report-20260626"
      ],
      articleIds: [
        "article-noandt-security-clearance-hr-part1-20250220",
        "article-noandt-security-clearance-hr-part2-20250319"
      ]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();