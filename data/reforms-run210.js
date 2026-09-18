(() => {
  const additions = [
    {
      id: "investment-trust-etf-cash-setting-2026",
      title: "投資信託及び投資法人に関する法律施行規則・現物拠出型ETFの金銭設定（2026年9月）",
      eventType: "regulation_or_guideline",
      lawId: "investment-trust-act-regulation-etf-cash-setting",
      lawLabel: "投資信託及び投資法人に関する法律施行規則（現物拠出型ETFの金銭設定）",
      relatedTopics: ["securities-monitoring-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2026-09-18",
      effectiveDateNote: "現物拠出型ETFの構成銘柄のうち、設定申込者の株券等所有割合が30％を超える銘柄に相当する部分を金銭で設定できるようにする内閣府令改正。2026年9月18日に公布され、同日施行された。公開買付制度その他の制度自体の改正ではない。",
      effectiveDateSourceIds: ["source-fsa-etf-cash-setting-rule-20260918"],
      matchSourceIds: ["source-fsa-etf-cash-setting-rule-20260918"],
      sourceIds: ["source-fsa-etf-cash-setting-rule-20260918"],
      articleIds: ["article-fsa-etf-cash-setting-rule-20260918"]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
