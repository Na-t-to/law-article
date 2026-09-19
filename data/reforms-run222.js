(() => {
  const additions = [
    {
      id: "early-business-restructuring-act-2025",
      title: "早期事業再生法・2026年12月11日施行",
      eventType: "new_law",
      lawId: "early-business-restructuring-act",
      lawLabel: "早期事業再生法",
      relatedTopics: ["early-business-restructuring-act"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-12-11"],
      effectiveDateNote: "早期事業再生法及び2026年6月30日公布の施行規則・資産評定基準の主要部分は2026年12月11日施行。",
      effectiveDateSourceIds: [
        "source-egov-early-business-restructuring-act",
        "source-meti-early-restructuring-rules-qa-20260630"
      ],
      matchSourceIds: [
        "source-egov-early-business-restructuring-act",
        "source-meti-early-restructuring-rules-qa-20260630"
      ],
      sourceIds: [
        "source-egov-early-business-restructuring-act",
        "source-meti-early-restructuring-rules-qa-20260630"
      ],
      articleIds: [
        "article-meti-early-business-restructuring-qa-20260630",
        "article-businesslawyers-mhm-early-business-restructuring-20260917",
        "article-noandt-early-business-restructuring-20260911"
      ]
    },
    {
      id: "specified-commercial-transactions-digital-review-2026",
      title: "デジタル取引・特定商取引法等・2026年見直し",
      eventType: "policy_review",
      lawId: "specified-commercial-transactions-digital-review",
      lawLabel: "特定商取引法等・デジタル取引見直し",
      relatedTopics: ["consumer-law-digital-contract-review"],
      matchSourceIds: ["source-caa-digital-transactions-interim-20260910"],
      sourceIds: ["source-caa-digital-transactions-interim-20260910"],
      articleIds: ["article-caa-digital-transactions-interim-20260910"]
    },
    {
      id: "consumer-contract-act-review-2026",
      title: "消費者契約法・2026年見直し",
      eventType: "policy_review",
      lawId: "consumer-contract-act",
      lawLabel: "消費者契約法",
      relatedTopics: ["consumer-law-digital-contract-review"],
      matchSourceIds: ["source-caa-consumer-contract-interim-20260910"],
      sourceIds: ["source-caa-consumer-contract-interim-20260910"],
      articleIds: ["article-caa-consumer-contract-interim-20260910"]
    },
    {
      id: "business-transfer-guideline-2026",
      title: "事業譲渡等指針・企業価値担保権対応（2026年改正）",
      eventType: "regulation_or_guideline",
      lawId: "business-transfer-labor-guideline",
      lawLabel: "事業譲渡等指針",
      relatedTopics: ["corporate-restructuring-labor"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-05-25"],
      effectiveDateNote: "企業価値担保権の創設に対応する改正事業譲渡等指針は2026年5月25日から適用。",
      effectiveDateSourceIds: ["source-mhlw-business-transfer-guideline-20260120"],
      matchSourceIds: ["source-mhlw-business-transfer-guideline-20260120"],
      sourceIds: ["source-mhlw-business-transfer-guideline-20260120"],
      articleIds: [
        "article-mhlw-business-transfer-guideline-amendment-20260120",
        "article-ey-restructuring-labor-enterprise-value-security-20260206"
      ]
    },
    {
      id: "corporate-restructuring-labor-review-2026",
      title: "組織再編に伴う労働関係・2026年見直し",
      eventType: "policy_review",
      lawId: "corporate-restructuring-labor-relations",
      lawLabel: "組織再編に伴う労働関係",
      relatedTopics: ["corporate-restructuring-labor"],
      matchSourceIds: [
        "source-mhlw-restructuring-labor-council-20260703",
        "source-mhlw-restructuring-labor-council-20260914"
      ],
      sourceIds: [
        "source-mhlw-restructuring-labor-council-20260703",
        "source-mhlw-restructuring-labor-council-20260914"
      ],
      articleIds: ["article-mhlw-restructuring-labor-council-20260703"]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
