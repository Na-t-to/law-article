(() => {
  const additions = [
    {
      id: "labor-policy-customer-harassment-2026",
      title: "労働施策総合推進法・カスタマーハラスメント防止措置（2026年10月）",
      eventType: "law_amendment",
      lawId: "labor-policy-comprehensive-promotion-act-customer-harassment",
      lawLabel: "労働施策総合推進法（カスタマーハラスメント対策）",
      relatedTopics: ["customer-harassment-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2026-10-01",
      effectiveDateNote: "令和7年法律第63号による改正のうち、労働施策総合推進法に基づくカスタマーハラスメント防止措置は2026年10月1日施行。同じ改正法に含まれる求職者等へのセクシュアルハラスメント対策は男女雇用機会均等法上の別制度であり、このイベントには混在させない。",
      effectiveDateSourceIds: ["source-mhlw-customer-harassment-law-20260723"],
      matchSourceIds: ["source-mhlw-customer-harassment-law-20260723"],
      sourceIds: [
        "source-mhlw-customer-harassment-law-20260723",
        "source-mhlw-customer-harassment-guideline-20260226"
      ],
      articleIds: [
        "article-mhlw-customer-harassment-guideline-20260226",
        "article-mhlw-portal-customer-harassment-rules-20260914",
        "article-tmi-customer-harassment-20260402"
      ]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
