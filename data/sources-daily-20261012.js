// October 12 selective daily addition. Guarded and idempotent.
(() => {
  const additions = [
  {
    "id": "source-fsa-prudential-group-orders-20261009",
    "title": "\u30d7\u30eb\u30c7\u30f3\u30b7\u30e3\u30eb\u751f\u547d\u4fdd\u967a\u682a\u5f0f\u4f1a\u793e\u3001\u30b8\u30d6\u30e9\u30eb\u30bf\u751f\u547d\u4fdd\u967a\u682a\u5f0f\u4f1a\u793e\u53ca\u3073\u30d7\u30eb\u30c7\u30f3\u30b7\u30e3\u30eb\u30fb\u30db\u30fc\u30eb\u30c7\u30a3\u30f3\u30b0\u30fb\u30aa\u30d6\u30fb\u30b8\u30e3\u30d1\u30f3\u682a\u5f0f\u4f1a\u793e\u306b\u5bfe\u3059\u308b\u884c\u653f\u51e6\u5206\u306b\u3064\u3044\u3066",
    "type": "government_material",
    "typeLabel": "\u4e00\u6b21\u8cc7\u6599\u30fb\u500b\u5225\u884c\u653f\u51e6\u5206",
    "authority": "\u91d1\u878d\u5e81",
    "publishedAt": "2026-10-09",
    "url": "https://www.fsa.go.jp/news/r8/hoken/20261009/20261009.html",
    "importance": "\u9ad8",
    "whyImportant": "\u751f\u547d\u4fdd\u967a2\u793e\u3068\u6301\u682a\u4f1a\u793e\u306b\u5bfe\u3059\u308b\u547d\u4ee4\u30fb\u7406\u7531\u306e\u5168\u6587\u3002\u55b6\u696d\u8077\u54e1\u7ba1\u7406\u3001\u82e6\u60c5\u5206\u6790\u3001\u9867\u5ba2\u60c5\u5831\u7ba1\u7406\u3001\u5b50\u4f1a\u793e\u76e3\u7763\u30fb\u5185\u90e8\u76e3\u67fb\u306e\u4e0d\u5099\u3092\u5177\u4f53\u7684\u306b\u793a\u3059\u500b\u5225\u57f7\u884c\u4e8b\u4f8b\u3002",
    "topics": [
      "corporate-misconduct-investigations"
    ]
  }
];
  const current = window.SOURCE_DATA || [];
  for (const item of additions) {
    const matches = current.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item))) throw new Error('October 12 conflicting canonical record: ' + item.id);
  }
  window.SOURCE_DATA = [...current, ...additions.filter(item => !current.some(x => x.id === item.id))];
})();
