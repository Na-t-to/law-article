// October 11 selective daily addition. Full-batch preflight and idempotent insertion.
(() => {
  const additions = [
  {
    "id": "eia-replacement-order-cabinet-20261009",
    "title": "\u5efa\u66ff\u914d\u616e\u66f8\u30fb\u5bfe\u8c61\u4e8b\u696d\u8981\u4ef6\u306e\u653f\u4ee4\uff082026\u5e7410\u67089\u65e5\u95a3\u8b70\u6c7a\u5b9a\uff09",
    "eventType": "regulation_or_guideline",
    "lawId": "environmental-impact-assessment-act",
    "lawLabel": "\u74b0\u5883\u5f71\u97ff\u8a55\u4fa1\u6cd5",
    "relatedTopics": [
      "eia-replacement-projects-2026"
    ],
    "effectiveDateStatus": "planned",
    "effectiveDate": "2027-04-01",
    "effectiveDateNote": "10\u67089\u65e5\u306b\u516c\u8868\u3055\u308c\u305f\u65bd\u884c\u671f\u65e5\u653f\u4ee4\u6848\u30fb\u65bd\u884c\u4ee4\u6539\u6b63\u6848\u306b\u57fa\u3065\u304f\u4e88\u5b9a\u3002\u653f\u4ee4\u306e\u516c\u5e03\u306f\u672a\u78ba\u8a8d\u3002\u6539\u6b63\u6cd5\u9644\u5247\u7b2c1\u6761\u672c\u6587\u306e\u5bfe\u8c61\u90e8\u5206\u3068\u4eca\u56de\u306e\u65bd\u884c\u4ee4\u6539\u6b63\u3092\u6271\u3044\u3001\u5225\u6bb5\u968e\u306e\u898f\u5b9a\u3078\u4e00\u5f8b\u306b\u6d41\u7528\u3057\u306a\u3044\u3002",
    "effectiveDateSourceIds": [
      "source-env-eia-order-draft-20261009",
      "source-env-eia-commencement-draft-20261009"
    ],
    "sourceIds": [
      "source-env-eia-cabinet-20261009",
      "source-env-eia-order-draft-20261009",
      "source-env-eia-commencement-draft-20261009",
      "source-shugiin-eia-amendment-2025"
    ],
    "matchSourceIds": [
      "source-env-eia-cabinet-20261009",
      "source-env-eia-order-draft-20261009",
      "source-env-eia-commencement-draft-20261009"
    ],
    "articleIds": []
  }
];
  const current = window.REFORM_EVENT_DATA || [];
  for (const item of additions) {
    const matches = current.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item))) throw new Error('October 11 conflicting canonical record: ' + item.id);
  }
  window.REFORM_EVENT_DATA = [...current, ...additions.filter(item => !current.some(x => x.id === item.id))];
})();
