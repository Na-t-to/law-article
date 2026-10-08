// Verified October 8 additions. Existing records and freshness are preserved.
(() => {
  const additions = [
  {
    "id": "grid-connection-jcstar-requirements-2026-proposal",
    "title": "系統連系技術要件・分散型電源のJC-STAR要件化案（2026年）",
    "eventType": "regulation_or_guideline",
    "lawId": "grid-connection-technical-guideline",
    "lawLabel": "電力品質確保に係る系統連系技術要件ガイドライン",
    "relatedTopics": [
      "jc-star-iot-security-labeling"
    ],
    "effectiveDateStatus": "phased",
    "effectiveDates": [
      "2027-04-01",
      "2027-10-01",
      "2028-04-01"
    ],
    "effectiveDateNote": "いずれも2026年10月6日公示の改定案の適用予定（未確定）：太陽光・蓄電池の特別高圧・高圧及び風力は2027年4月1日、太陽光・蓄電池の低圧は同年10月1日、逆変換装置を用いて連系する燃料電池は2028年4月1日以降の契約申込み受付が対象。開始前受付済み案件の非遡及、開始後の対象機器変更・増設・交換の規定がある。最終決定・各社技術要件は別途確認する。",
    "effectiveDateSourceIds": [
      "source-enecho-grid-jcstar-draft-20261006"
    ],
    "sourceIds": [
      "source-enecho-grid-jcstar-consultation-20261006",
      "source-enecho-grid-jcstar-draft-20261006",
      "source-enecho-grid-jcstar-procedure-20261006"
    ],
    "matchSourceIds": [
      "source-enecho-grid-jcstar-consultation-20261006",
      "source-enecho-grid-jcstar-draft-20261006"
    ],
    "articleIds": [
      "article-enecho-grid-jcstar-proposal-20261006"
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
