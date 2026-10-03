// Verified daily-source additions; existing topics and freshness dates remain unchanged.
(() => {
  const additions = [
  {
    "id": "chemical-exposure-measurement-guideline-20261001",
    "title": "化学物質の濃度基準適用等に関する技術上の指針・第30号改正",
    "eventType": "regulation_or_guideline",
    "lawId": "chemical-exposure-concentration-technical-guideline",
    "lawLabel": "化学物質による健康障害防止のための濃度の基準の適用等に関する技術上の指針",
    "relatedTopics": [
      "occupational-safety-health-reform"
    ],
    "effectiveDateStatus": "confirmed",
    "effectiveDate": "2026-10-01",
    "effectiveDateNote": "技術上の指針公示第30号による改正の適用日。全文に併記される第29号の2027年10月1日適用部分を含めない。",
    "effectiveDateSourceIds": [
      "source-mhlw-chemical-exposure-guideline-20261001",
      "source-mhlw-chemical-exposure-guideline-text-20261001"
    ],
    "sourceIds": [
      "source-mhlw-chemical-exposure-guideline-20261001",
      "source-mhlw-chemical-exposure-guideline-text-20261001",
      "source-mhlw-chemical-exposure-guideline-redline-20261001"
    ],
    "matchSourceIds": [
      "source-mhlw-chemical-exposure-guideline-20261001",
      "source-mhlw-chemical-exposure-guideline-text-20261001",
      "source-mhlw-chemical-exposure-guideline-redline-20261001"
    ]
  }
];
  const existing = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  window.REFORM_EVENT_DATA = existing.concat(additions.filter(a => !existing.some(x => x && x.id === a.id)));
})();
