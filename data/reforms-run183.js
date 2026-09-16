(() => {
  const additions = [
    {
      id: "cyber-capability-critical-infrastructure-2026",
      title: "サイバー対処能力強化法・特別社会基盤事業者の届出／報告 2026年施行",
      eventType: "new_law",
      lawId: "cyber-capability-enhancement-act",
      lawLabel: "サイバー対処能力強化法",
      relatedTopics: ["cyber-capability-enhancement-critical-infrastructure-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-10-01"],
      effectiveDateSourceIds: ["source-cyber-reporting-exclusion-notice-2026", "source-cyber-report-form-notice-2026"],
      effectiveDateNote: "特別社会基盤事業者の特定重要電子計算機の届出・特定侵害事象等の報告に関する主要規定を対象とする。サイバー対処能力強化法全体には別の段階施行がある。",
      articleIds: [
        "article-cyber-capability-act-2025",
        "article-cyber-reporting-notices-2026-09-15",
        "article-businesslawyers-mhm-active-cyber-defense-2025",
        "article-miyake-cyber-capability-practice-2026"
      ],
      matchSourceIds: [],
      sourceIds: [
        "source-cyber-capability-act-2025",
        "source-cyber-reporting-order-2026",
        "source-cyber-reporting-exclusion-notice-2026",
        "source-cyber-report-form-notice-2026"
      ]
    }
  ];
  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existingIds.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
