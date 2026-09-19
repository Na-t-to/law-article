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
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();
