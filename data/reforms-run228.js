(() => {
  const additions = [
    {
      id: "critical-infrastructure-cybersecurity-framework-2026",
      title: "重要インフラ統一基準・安全基準等策定ガイドライン（2026年）",
      eventType: "regulation_or_guideline",
      lawId: "critical-infrastructure-cybersecurity-framework",
      lawLabel: "重要インフラ・サイバーセキュリティ統一基準等",
      relatedTopics: ["cybersecurity-incident-response-critical-infrastructure"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-10-01"],
      effectiveDateSourceIds: ["source-nco-critical-infra-framework-20260911"],
      matchSourceIds: ["source-nco-critical-infra-framework-20260911"],
      sourceIds: ["source-nco-critical-infra-framework-20260911"],
      articleIds: [
        "article-nco-critical-infra-framework-20260911",
        "article-miyake-critical-infra-guideline-20260913"
      ]
    },
    {
      id: "financial-cyber-incident-reporting-2026",
      title: "金融監督指針等・サイバー攻撃報告共通様式への移行",
      eventType: "regulation_or_guideline",
      lawId: "financial-supervisory-guidelines-cyber-reporting",
      lawLabel: "金融監督指針・サイバー攻撃報告様式",
      relatedTopics: ["cybersecurity-incident-response-critical-infrastructure"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-10-01"],
      effectiveDateSourceIds: ["source-fsa-cyber-common-reporting-20260918"],
      matchSourceIds: ["source-fsa-cyber-common-reporting-20260918"],
      sourceIds: ["source-fsa-cyber-common-reporting-20260918"],
      articleIds: ["article-fsa-cyber-common-reporting-20260918"]
    }
  ];

  const existing = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const fresh = additions.filter((item) => !ids.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = existing.concat(fresh);
})();
