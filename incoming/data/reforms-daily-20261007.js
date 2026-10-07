// Verified October 7 additions. Existing records and freshness are preserved.
(() => {
  const additions = [
  {
    "id": "ccs-disposition-criteria-2026",
    "title": "CCS事業法・審査基準等の2026年改正案",
    "eventType": "regulation_or_guideline",
    "lawId": "ccs-business-act",
    "lawLabel": "二酸化炭素の貯留事業に関する法律（CCS事業法）",
    "relatedTopics": [
      "ccs-business-act-storage-transport"
    ],
    "effectiveDateStatus": "unknown",
    "effectiveDateNote": "2026年10月2日公示の改正訓令案。具体的な適用開始日は未確認。意見受付締切の10月31日は施行日ではない。",
    "sourceIds": [
      "source-enecho-ccs-criteria-consultation-20261002",
      "source-enecho-ccs-criteria-redline-20261002",
      "source-enecho-ccs-criteria-procedure-20261002"
    ],
    "matchSourceIds": [
      "source-enecho-ccs-criteria-consultation-20261002",
      "source-enecho-ccs-criteria-redline-20261002"
    ],
    "articleIds": [
      "article-enecho-ccs-criteria-proposal-20261002"
    ]
  }
];
  const current = window.REFORM_EVENT_DATA || [];
  const ids = new Set(current.map(item => item.id));
  for (const item of additions) {
    if (ids.has(item.id)) throw new Error(`Duplicate reforms ID: ${item.id}`);
    ids.add(item.id);
  }
  window.REFORM_EVENT_DATA = [...current, ...additions];
})();
