(() => {
  const additions = [
    {
      id: "criminal-proceeds-act-2026-amendment",
      title: "犯罪収益移転防止法・2026年改正（送金犯罪・架空名義口座対策）",
      eventType: "law_amendment",
      lawId: "criminal-proceeds-act",
      lawLabel: "犯罪収益移転防止法",
      relatedTopics: ["criminal-proceeds-aml-ekyc-2026-2027"],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-07-10"],
      effectiveDateNote: "預貯金通帳等の不正譲渡等に対する罰則引上げと『送金犯罪』は2026年7月10日施行。架空名義口座を利用した新たな措置は2026年6月10日の公布から1年以内の政令指定日に施行。",
      effectiveDateSourceIds: ["source-npa-aml-amendment-2026"],
      matchSourceIds: ["source-npa-aml-amendment-2026"],
      sourceIds: ["source-npa-aml-amendment-2026"],
      articleIds: ["article-npa-aml-amendment-2026", "article-tmi-aml-amendment-2026"]
    },
    {
      id: "criminal-proceeds-identification-rules-2027",
      title: "犯罪収益移転防止法施行規則・本人確認方法見直し（2027年）",
      eventType: "regulation_or_guideline",
      lawId: "criminal-proceeds-enforcement-regulations",
      lawLabel: "犯罪収益移転防止法施行規則・本人確認",
      relatedTopics: ["criminal-proceeds-aml-ekyc-2026-2027"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2027-04-01"],
      effectiveDateSourceIds: ["source-npa-jafic-annual-report-2025-identity-review"],
      matchSourceIds: ["source-npa-jafic-annual-report-2025-identity-review"],
      sourceIds: ["source-npa-jafic-annual-report-2025-identity-review"],
      articleIds: ["article-npa-jafic-identity-review-2026", "article-tmi-aml-ekyc-2026"]
    },
    {
      id: "copyright-act-record-performance-2026",
      title: "著作権法・2026年改正（レコード演奏・伝達権）",
      eventType: "law_amendment",
      lawId: "copyright-act",
      lawLabel: "著作権法",
      relatedTopics: ["copyright-record-performance-right-2026"],
      effectiveDateStatus: "relative",
      effectiveDateNote: "公布日（2026年6月24日）から3年を超えない範囲内において政令で定める日から施行。",
      effectiveDateSourceIds: ["source-mext-copyright-record-performance-law-2026"],
      matchSourceIds: [
        "source-mext-copyright-record-performance-law-2026",
        "source-mext-copyright-record-performance-enactment-20260617"
      ],
      sourceIds: [
        "source-mext-copyright-record-performance-law-2026",
        "source-mext-copyright-record-performance-enactment-20260617"
      ],
      articleIds: [
        "article-mext-copyright-record-performance-law-2026",
        "article-amt-copyright-record-performance-2026",
        "article-not-copyright-record-performance-2026"
      ]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
