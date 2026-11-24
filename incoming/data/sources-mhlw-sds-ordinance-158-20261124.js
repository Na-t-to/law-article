(() => {
 const additions = [
  {
    "id": "source-mhlw-sds-ordinance-158-20261124",
    "title": "労働安全衛生規則の一部を改正する省令（令和8年厚生労働省令第158号）・官報号外第255号3頁",
    "authority": "厚生労働省",
    "publishedAt": "2026-11-24",
    "url": "https://www.kanpo.go.jp/20261124/20261124g00255/20261124g002550003f.html",
    "type": "ordinance",
    "typeLabel": "一次資料・官報公布原文",
    "importance": "高",
    "whyImportant": "労働安全衛生規則第34条の2の4の新旧対照で、安全データシート（SDS）等による追加通知事項とその適用条件を確認できる。",
    "topics": [
      "occupational-safety-health-reform"
    ]
  },
  {
    "id": "source-mhlw-sds-ordinance-158-20261124-supplementary",
    "title": "労働安全衛生規則の一部を改正する省令（令和8年厚生労働省令第158号）・官報号外第255号4頁",
    "authority": "厚生労働省",
    "publishedAt": "2026-11-24",
    "url": "https://www.kanpo.go.jp/20261124/20261124g00255/20261124g002550004f.html",
    "type": "ordinance",
    "typeLabel": "一次資料・官報公布原文",
    "importance": "高",
    "whyImportant": "改正省令附則が2030年4月1日施行と定める。第34条の2の4の区分表の続きと第42条の5の改正も掲載。",
    "topics": [
      "occupational-safety-health-reform"
    ]
  }
];
 const list = window.SOURCE_DATA || [];
 for (const item of additions) {
  const matches = list.filter(x => x.id === item.id);
  if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item)) || list.some(x => x.id !== item.id && x.url === item.url)) throw Error('Conflicting SDS record: ' + item.id);
 }
 window.SOURCE_DATA = [...list, ...additions.filter(item => !list.some(x => x.id === item.id))];
})();
