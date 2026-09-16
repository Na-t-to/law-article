(() => {
  const additions = [
    {
      id: "aml-account-information-sharing-2027-rules",
      title: "犯罪収益移転防止法施行規則・不正利用口座情報共有（2027年施行）",
      eventType: "regulation_or_guideline",
      lawId: "criminal-proceeds-transfer-prevention-act",
      lawLabel: "犯罪収益移転防止法・不正利用口座情報共有",
      relatedTopics: ["aml-kyc-criminal-proceeds"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2027-04-01"],
      effectiveDateSourceIds: ["source-fsa-aml-account-info-sharing-2026"],
      matchSourceIds: ["source-fsa-aml-account-info-sharing-2026"],
      sourceIds: ["source-fsa-aml-account-info-sharing-2026"]
    },
    {
      id: "banking-act-investment-subsidiary-2026",
      title: "銀行法施行規則等・投資専門会社等の業務範囲拡充（2026年改正）",
      eventType: "regulation_or_guideline",
      lawId: "banking-act-subsidiary-business-scope",
      lawLabel: "銀行法施行規則・銀行グループ業務範囲",
      relatedTopics: ["bank-investment-subsidiaries-business-succession-2026"],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-06-15", "2027-04-01"],
      effectiveDateNote: "投資専門会社の投資対象・業務範囲拡充等は2026年6月15日施行・適用／銀行等グループのリース会社に係る収入依存度規制の撤廃は2027年4月1日施行",
      effectiveDateSourceIds: ["source-fsa-bank-investment-subsidiary-2026"],
      matchSourceIds: ["source-fsa-bank-investment-subsidiary-2026"],
      sourceIds: ["source-fsa-bank-investment-subsidiary-2026"]
    }
  ];
  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item.id));
  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(additions.filter((item) => !existing.has(item.id)));
})();
