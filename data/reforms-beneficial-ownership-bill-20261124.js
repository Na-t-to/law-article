(() => {
  const additions = [
  {
    "id": "beneficial-ownership-reporting-law-2026",
    "title": "法人等の実質的支配者情報の把握・届出制度（2026年法案）",
    "eventType": "new_law",
    "lawId": "beneficial-ownership-reporting-law",
    "lawLabel": "法人等の実質的支配者に係る情報の把握等に関する法律案",
    "relatedTopics": [
      "aml-kyc-criminal-proceeds"
    ],
    "effectiveDateStatus": "relative",
    "effectiveDateNote": "法案の本則は公布から1年6か月以内の政令指定日。先行届出の規定は公布から1年以内の別の政令指定日。既存法人等の初回届出は本則施行日から30日以内とする案。成立・公布と具体的施行日は未確認。",
    "effectiveDateSourceIds": [
      "source-shugiin-222-bill-19-text-20261023"
    ],
    "sourceIds": [
      "source-shugiin-222-bill-19-progress-20261124",
      "source-shugiin-222-bill-19-text-20261023",
      "source-shugiin-222-bill-20-progress-20261124",
      "source-shugiin-222-bill-20-text-20261023"
    ],
    "matchSourceIds": [],
    "articleIds": []
  }
];
  const list = window.REFORM_EVENT_DATA || [];
  for (const item of additions) {
    const matches = list.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item)) ||
        (item.url && list.some(x => x.id !== item.id && x.url === item.url)) ||
        (item.lawId && list.some(x => x.id !== item.id && x.lawId === item.lawId))) {
      throw new Error("Conflicting beneficial ownership record: " + item.id);
    }
  }
  window.REFORM_EVENT_DATA = [...list, ...additions.filter(item => !list.some(x => x.id === item.id))];
})();
