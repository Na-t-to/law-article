(() => {
  const additions = [
    {
      id: "pension-reform-2025-social-insurance-expansion",
      title: "年金制度改正法・社会保険適用拡大（2026～2035年）",
      eventType: "law_amendment",
      lawId: "pension-system-reform-act-2025",
      lawLabel: "年金制度改正法（令和7年法律第74号）",
      relatedTopics: ["social-insurance-short-time-workers-2026"],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-10-01", "2027-10-01", "2029-10-01", "2032-10-01", "2035-10-01"],
      effectiveDateNote: "短時間労働者の月額8.8万円賃金要件撤廃と保険料調整制度は2026年10月1日から。企業規模要件は2027年10月に36人以上、2029年10月に21人以上、2032年10月に11人以上へ拡大し、2035年10月に撤廃。常時5人以上を使用する個人事業所の業種要件は2029年10月に撤廃（既存の従来非適用業種事業所には経過措置）。",
      effectiveDateSourceIds: [
        "source-pension-reform-act-20250620",
        "source-mhlw-pension-effective-notice-20260915",
        "source-nenkin-short-time-expansion-20260916",
        "source-nenkin-premium-adjustment-20260911"
      ],
      matchSourceIds: ["source-pension-reform-act-20250620", "source-mhlw-pension-effective-notice-20260915"],
      sourceIds: [
        "source-pension-reform-act-20250620",
        "source-mhlw-pension-effective-notice-20260915",
        "source-nenkin-short-time-expansion-20260916",
        "source-nenkin-premium-adjustment-20260911"
      ],
      articleIds: [
        "article-mhlw-pension-effective-notice-20260915",
        "article-nenkin-short-time-expansion-20260916",
        "article-nenkin-premium-adjustment-20260911",
        "article-tmi-pension-reform-20250620",
        "article-tmi-labor-update-social-insurance-20260915"
      ]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();