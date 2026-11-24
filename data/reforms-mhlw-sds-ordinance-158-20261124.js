(() => {
 const before = {
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
  "articleIds": []
};
 const after = {
  "id": "sds-notification-items-2026-draft",
  "title": "労働安全衛生規則・SDS通知事項の追加（2026年改正）",
  "eventType": "regulation_or_guideline",
  "lawId": "industrial-safety-health-ordinance-sds-notification",
  "lawLabel": "労働安全衛生規則・SDS通知事項",
  "relatedTopics": [
    "occupational-safety-health-reform"
  ],
  "effectiveDateStatus": "confirmed",
  "effectiveDate": "2030-04-01",
  "effectiveDateNote": "令和8年11月24日公布、2030年4月1日施行（令和8年厚生労働省令第158号附則）。",
  "effectiveDateSourceIds": [
    "source-mhlw-sds-ordinance-158-20261124-supplementary"
  ],
  "sourceIds": [
    "source-mhlw-sds-notification-draft-20260928",
    "source-mhlw-sds-notification-overview-20260928",
    "source-mhlw-sds-notification-response-20260928",
    "source-mhlw-sds-ordinance-158-20261124",
    "source-mhlw-sds-ordinance-158-20261124-supplementary"
  ],
  "matchSourceIds": [
    "source-mhlw-sds-notification-draft-20260928",
    "source-mhlw-sds-notification-overview-20260928",
    "source-mhlw-sds-notification-response-20260928"
  ],
  "articleIds": []
};
 const list = window.REFORM_EVENT_DATA || [];
 const matches = list.filter(x => x.id === before.id);
 if (matches.length !== 1) throw Error('Expected one SDS reform event');
 // The later article delta run231 clears the old explicit draft article link.
 // Accept the two known load-order shapes, without accepting unrelated changes.
 const draftArticleIds = ['article-mhlw-sds-notification-items-draft-20260928'];
 const atInsertion = {...before, articleIds:draftArticleIds};
 const afterAtInsertion = {...after, articleIds:draftArticleIds};
 const current = JSON.stringify(matches[0]);
 if (current === JSON.stringify(after) || current === JSON.stringify(afterAtInsertion)) return;
 if (current !== JSON.stringify(before) && current !== JSON.stringify(atInsertion)) throw Error('Unexpected SDS reform event baseline');
 window.REFORM_EVENT_DATA = list.map(x => x.id === before.id ? {...after, articleIds:x.articleIds} : x);
})();
