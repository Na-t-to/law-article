// Verified daily-source additions. Existing themes and freshness dates are unchanged.
(() => {
  const additions = [
  {
    "id": "thp-guideline-secondary-prevention-2026",
    "title": "事業場における労働者の健康保持増進のための指針・二次予防拡充案（2026年）",
    "eventType": "regulation_or_guideline",
    "lawId": "workplace-health-promotion-thp-guideline",
    "lawLabel": "事業場における労働者の健康保持増進のための指針（THP指針）",
    "relatedTopics": [
      "treatment-work-support",
      "occupational-safety-health-reform"
    ],
    "effectiveDateStatus": "planned",
    "effectiveDate": "2026-10",
    "effectiveDateNote": "9月28日会議資料2-1の3頁は2026年10月の公示予定と公布日適用を示す。月までの予定であり、日付の確定を意味しない。10月5日に確認した厚労省のTHP政策ページ・公示一覧等では最終公示を確認できていない。",
    "effectiveDateSourceIds": [
      "source-mhlw-thp-revision-overview-20260928"
    ],
    "sourceIds": [
      "source-mhlw-thp-revision-overview-20260928",
      "source-mhlw-thp-revision-draft-20260928"
    ],
    "matchSourceIds": [
      "source-mhlw-thp-revision-overview-20260928",
      "source-mhlw-thp-revision-draft-20260928"
    ],
    "articleIds": [
      "article-mhlw-thp-revision-draft-20260928"
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
