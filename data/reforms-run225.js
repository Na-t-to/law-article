(() => {
  const addition = {
    id: "commercial-code-ebl-review-2024",
    title: "商法（電子船荷証券）・船荷証券等電子化見直し",
    eventType: "policy_review",
    lawId: "commercial-code-electronic-bill-of-lading",
    lawLabel: "商法（電子船荷証券）",
    relatedTopics: ["electronic-bill-of-lading-trade-dx"],
    matchSourceIds: ["source-moj-ebl-outline-20240909"],
    sourceIds: ["source-moj-ebl-interim-20230308", "source-moj-ebl-outline-20240909"],
    articleIds: [
      "article-moj-ebl-outline-20240909",
      "article-japan-pi-ebl-interim-20230421",
      "article-trade-dx-ebl-request-20260901"
    ]
  };

  if (!(window.REFORM_EVENT_DATA || []).some((item) => item && item.id === addition.id)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(addition);
  }
})();

(() => {
  const addition = {
    id: "fsa-cyber-reporting-common-forms-2026",
    title: "金融庁監督指針等・サイバー被害報告の共通様式移行",
    eventType: "regulation_or_guideline",
    lawId: "fsa-cyber-incident-reporting-guidelines",
    lawLabel: "金融庁監督指針等・サイバーインシデント報告",
    relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-10-01"],
    effectiveDateSourceIds: ["source-fsa-cyber-reporting-common-forms-20260918"],
    matchSourceIds: ["source-fsa-cyber-reporting-common-forms-20260918"],
    sourceIds: ["source-fsa-cyber-reporting-common-forms-20260918"],
    articleIds: ["article-fsa-cyber-reporting-common-forms-20260918"]
  };

  if (!(window.REFORM_EVENT_DATA || []).some((item) => item && item.id === addition.id)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(addition);
  }
})();
