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
