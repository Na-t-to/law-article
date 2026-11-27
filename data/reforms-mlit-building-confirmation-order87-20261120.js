(() => {
  const additions = [
  {
    "id": "building-confirmation-document-digitalization-2026",
    "title": "建築基準法施行規則等・概要書の廃止と台帳情報の閲覧（2026年改正）",
    "eventType": "regulation_or_guideline",
    "lawId": "building-standards-act-enforcement-regulations",
    "lawLabel": "建築基準法施行規則等",
    "relatedTopics": [],
    "effectiveDateStatus": "confirmed",
    "effectiveDate": "2028-04-01",
    "effectiveDateNote": "令和8年国土交通省令第87号附則第1項による。令和8年11月20日公布。",
    "effectiveDateSourceIds": [
      "source-kanpo-building-confirmation-order87-20261120"
    ],
    "sourceIds": [
      "source-kanpo-building-confirmation-order87-20261120",
      "source-fdma-digital-building-confirmation-20261125",
      "source-mlit-order87-comment-result-20261120"
    ],
    "matchSourceIds": [],
    "articleIds": []
  }
];
  const list = window.REFORM_EVENT_DATA || [];
  for (const item of additions) {
    const matches = list.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item)) ||
        (item.url && list.some(x => x.id !== item.id && x.url === item.url))) {
      throw new Error("Conflicting building-confirmation record: " + item.id);
    }
  }
  window.REFORM_EVENT_DATA = [...list, ...additions.filter(item => !list.some(x => x.id === item.id))];
})();
