// Verified daily-source additions; existing topics and freshness dates remain unchanged.
(() => {
  const additions = [
  {
    "id": "sds-notification-items-2026-draft",
    "title": "労働安全衛生規則・SDS通知事項追加案（2026年）",
    "eventType": "regulation_or_guideline",
    "lawId": "industrial-safety-health-ordinance-sds-notification",
    "lawLabel": "労働安全衛生規則・SDS通知事項",
    "relatedTopics": [
      "occupational-safety-health-reform"
    ],
    "effectiveDateStatus": "planned",
    "effectiveDate": "2030-04-01",
    "effectiveDateNote": "2026年9月28日諮問の省令案要綱第2に記載された施行予定。資料1-2は2026年10月公布予定と記載。答申は案を妥当としたもので、公布・施行の証明ではない。",
    "effectiveDateSourceIds": [
      "source-mhlw-sds-notification-draft-20260928",
      "source-mhlw-sds-notification-overview-20260928"
    ],
    "sourceIds": [
      "source-mhlw-sds-notification-draft-20260928",
      "source-mhlw-sds-notification-overview-20260928",
      "source-mhlw-sds-notification-response-20260928"
    ],
    "matchSourceIds": [
      "source-mhlw-sds-notification-draft-20260928",
      "source-mhlw-sds-notification-overview-20260928",
      "source-mhlw-sds-notification-response-20260928"
    ],
    "articleIds": [
      "article-mhlw-sds-notification-items-draft-20260928"
    ]
  }
];
  const existing = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  window.REFORM_EVENT_DATA = existing.concat(additions.filter(a => !existing.some(x => x && x.id === a.id)));
})();
