(() => {
  const appendUnique = (base, values) => [...new Set([...(Array.isArray(base) ? base : []), ...values])];

  const unified = (window.REFORM_EVENT_DATA || []).find((item) => item?.id === "critical-infrastructure-unified-standard-2026");
  if (unified) {
    unified.articleIds = appendUnique(unified.articleIds, ["article-amt-critical-infrastructure-unified-standard-20260904"]);
  }

  const additions = [
    {
      id: "critical-infrastructure-safety-guideline-2026",
      title: "重要インフラ・安全基準等策定ガイドライン（2026年）",
      eventType: "regulation_or_guideline",
      lawId: "critical-infrastructure-safety-standards-guideline",
      lawLabel: "重要インフラ・安全基準等策定ガイドライン",
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-10-01"],
      effectiveDateNote: "2026年9月11日に確定し、重要インフラ統一基準と同じ2026年10月1日に施行予定。",
      effectiveDateSourceIds: ["source-nco-critical-infrastructure-safety-guideline-20260911"],
      matchSourceIds: ["source-nco-critical-infrastructure-safety-guideline-20260911"],
      sourceIds: ["source-nco-critical-infrastructure-safety-guideline-20260911"],
      articleIds: ["article-nco-critical-infrastructure-safety-guideline-20260911"]
    },
    {
      id: "fsa-cyber-reporting-supervisory-guidelines-2026",
      title: "金融監督指針等・サイバー事案報告の共通様式移行（2026年）",
      eventType: "regulation_or_guideline",
      lawId: "fsa-cyber-reporting-supervisory-guidelines",
      lawLabel: "金融監督指針等・サイバー事案報告様式",
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-10-01"],
      effectiveDateNote: "金融庁所管の監督指針等について、サイバーセキュリティ事案の報告様式を関係省庁共通様式へ移行し、2026年10月1日から適用。",
      effectiveDateSourceIds: ["source-fsa-cyber-common-reporting-guidelines-20260918"],
      matchSourceIds: ["source-fsa-cyber-common-reporting-guidelines-20260918"],
      sourceIds: ["source-fsa-cyber-common-reporting-guidelines-20260918", "source-nco-cyber-common-reporting-20260915"],
      articleIds: ["article-fsa-cyber-common-reporting-guidelines-20260918"]
    },
    {
      id: "medical-biological-research-ethics-guideline-2026",
      title: "人を対象とする生命科学・医学系研究に関する倫理指針（2026年改正）",
      eventType: "regulation_or_guideline",
      lawId: "medical-biological-research-ethics-guideline",
      lawLabel: "人を対象とする生命科学・医学系研究に関する倫理指針",
      relatedTopics: ["medical-biological-research-ethics-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-12-01"],
      effectiveDateNote: "2026年8月27日に改正指針を告示し、2026年12月1日から施行。",
      effectiveDateSourceIds: ["source-mext-medical-research-ethics-guideline-20260827"],
      matchSourceIds: ["source-mext-medical-research-ethics-guideline-20260827"],
      sourceIds: ["source-mext-medical-research-ethics-guideline-20260827"],
      articleIds: ["article-mext-medical-research-ethics-guideline-20260828", "article-tmi-medical-research-ethics-guideline-20260901"]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
