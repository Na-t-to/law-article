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
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueMany = (list, values) => (values || []).reduce((next, value) => addUnique(next, value), Array.isArray(list) ? list : []);

  const dbsEvent = {
    id: "child-sexual-violence-prevention-act-2024",
    title: "こども性暴力防止法（日本版DBS）・2026年施行",
    eventType: "new_law",
    lawId: "child-sexual-violence-prevention-act",
    lawLabel: "こども性暴力防止法（日本版DBS）",
    relatedTopics: ["child-sexual-violence-prevention-dbs"],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-12-25"],
    effectiveDateSourceIds: ["source-cfa-child-sexual-violence-act-hub-20260918"],
    matchSourceIds: [
      "source-cfa-child-sexual-violence-act-hub-20260918",
      "source-cfa-child-sexual-violence-qa-20260918"
    ],
    sourceIds: [
      "source-cfa-child-sexual-violence-act-hub-20260918",
      "source-cfa-child-sexual-violence-qa-20260918",
      "source-cfa-child-sexual-violence-templates-20260902"
    ],
    articleIds: [
      "article-cfa-child-sexual-violence-qa-20260918",
      "article-miyake-japan-dbs-info-hiring-20260814",
      "article-tmi-child-sexual-violence-scope-20260710"
    ]
  };

  if (!(window.REFORM_EVENT_DATA || []).some((item) => item && item.id === dbsEvent.id)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(dbsEvent);
  }

  const privacy = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "privacy-law-2026-amendment");
  if (privacy) {
    privacy.sourceIds = addUnique(privacy.sourceIds, "source-ppc-apppi-subrules-369-20260916");
    privacy.matchSourceIds = addUnique(privacy.matchSourceIds, "source-ppc-apppi-subrules-369-20260916");
    privacy.articleIds = addUniqueMany(privacy.articleIds, [
      "article-ppc-apppi-subrules-369-20260916",
      "article-miyake-apppi-subrules-20260918"
    ]);
  }
})();

(() => {
  const additions = [
    {
      id: "freelance-act-2024-enactment",
      title: "フリーランス・事業者間取引適正化等法・2024年施行",
      eventType: "new_law",
      lawId: "freelance-act",
      lawLabel: "フリーランス・事業者間取引適正化等法",
      relatedTopics: ["freelance-law"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2024-11-01",
      effectiveDateSourceIds: ["source-freelance-law"],
      matchSourceIds: [],
      sourceIds: ["source-freelance-law"],
      articleIds: [
        "article-freelance-law-official",
        "article-not-freelance-work-environment-2024",
        "article-not-freelance-transactions-2024"
      ]
    },
    {
      id: "ssbj-ghg-disclosure-2026-amendment",
      title: "SSBJ基準・温室効果ガス排出開示（2026年改正）",
      eventType: "regulation_or_guideline",
      lawId: "ssbj-sustainability-disclosure-standards",
      lawLabel: "SSBJサステナビリティ開示基準",
      relatedTopics: ["ssbj-statutory-sustainability-disclosure"],
      effectiveDateStatus: "unknown",
      matchSourceIds: [],
      sourceIds: ["source-ssbj-ghg-amendment-2026"],
      articleIds: ["article-ssbj-ghg-amendment-2026"]
    },
    {
      id: "unfair-competition-prevention-act-2023-amendment",
      title: "不正競争防止法・2023年改正",
      eventType: "law_amendment",
      lawId: "unfair-competition-prevention-act",
      lawLabel: "不正競争防止法",
      relatedTopics: ["trade-secret-management"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2024-04-01",
      effectiveDateSourceIds: ["source-ucpa-amendment-2023"],
      matchSourceIds: [],
      sourceIds: ["source-ucpa-amendment-2023"],
      articleIds: ["article-meti-ucpa-amendment-2023"]
    }
  ];

  const existing = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  window.REFORM_EVENT_DATA = existing.concat(additions.filter((item) => !ids.has(item.id)));
})();
