(() => {
  const additions = [
    {
      id: "financial-cyber-common-reporting-2026",
      title: "金融分野サイバー攻撃報告共通様式・監督指針改正",
      eventType: "regulation_or_guideline",
      lawId: "financial-cyber-incident-reporting",
      lawLabel: "金融監督指針・サイバー攻撃報告共通様式",
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-10-01"],
      effectiveDateNote: "2026年9月15日の関係省庁申合せ改正を受け、金融庁の監督指針等は共通様式へ移行し、2026年10月1日から適用。",
      effectiveDateSourceIds: ["source-fsa-cyber-reporting-common-form-20260918"],
      matchSourceIds: ["source-fsa-cyber-reporting-common-form-20260918"],
      sourceIds: ["source-fsa-cyber-reporting-common-form-20260918"],
      articleIds: ["article-fsa-cyber-reporting-common-form-20260918"]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
