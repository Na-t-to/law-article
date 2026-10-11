// October 11 selective daily addition. Full-batch preflight and idempotent insertion.
(() => {
  const additions = [
  {
    "id": "source-env-eia-cabinet-20261009",
    "title": "\u74b0\u5883\u5f71\u97ff\u8a55\u4fa1\u6cd5\u65bd\u884c\u4ee4\u306e\u4e00\u90e8\u3092\u6539\u6b63\u3059\u308b\u653f\u4ee4\u306e\u95a3\u8b70\u6c7a\u5b9a\u7b49\u306b\u3064\u3044\u3066",
    "url": "https://www.env.go.jp/press/press_05649.html",
    "publishedAt": "2026-10-09",
    "authority": "\u74b0\u5883\u7701",
    "whyImportant": "10\u67089\u65e5\u306e\u95a3\u8b70\u6c7a\u5b9a\u3068\u5bfe\u8c61\u4e8b\u696d\u306e\u6982\u8981\u3092\u78ba\u8a8d\u3059\u308b\u516c\u5f0f\u767a\u8868\u3002\u516c\u5e03\u6e08\u307f\u30fb\u65bd\u884c\u6e08\u307f\u3068\u3044\u3046\u610f\u5473\u3067\u306f\u306a\u3044\u3002",
    "type": "government",
    "typeLabel": "\u4e00\u6b21\u8cc7\u6599\u30fb\u6cd5\u5f8b\uff0f\u653f\u4ee4\u95a3\u8b70\u6c7a\u5b9a\u8cc7\u6599",
    "importance": "\u9ad8",
    "topics": [
      "eia-replacement-projects-2026"
    ]
  },
  {
    "id": "source-env-eia-order-draft-20261009",
    "title": "\u74b0\u5883\u5f71\u97ff\u8a55\u4fa1\u6cd5\u65bd\u884c\u4ee4\u306e\u4e00\u90e8\u3092\u6539\u6b63\u3059\u308b\u653f\u4ee4\uff08\u95a3\u8b70\u6c7a\u5b9a\u6642\u306e\u6848\u6587\uff09",
    "url": "https://www.env.go.jp/content/000432245.pdf",
    "publishedAt": "2026-10-09",
    "authority": "\u74b0\u5883\u7701",
    "whyImportant": "\u5efa\u66ff\u4e8b\u696d\u306e\u8ddd\u96e2\u30fb\u51fa\u529b\u6bd4\u3001\u30c0\u30e0\u7b49\u306e\u5bfe\u8c61\u4e8b\u696d\u533a\u5206\u53ca\u3073\u65bd\u884c\u671f\u65e5\u3092\u5b9a\u3081\u308b23\u30da\u30fc\u30b8\u306e\u6848\u6587\u3002\u516c\u5e03\u756a\u53f7\u306f\u7a7a\u6b04\u3002",
    "type": "government",
    "typeLabel": "\u4e00\u6b21\u8cc7\u6599\u30fb\u6cd5\u5f8b\uff0f\u653f\u4ee4\u95a3\u8b70\u6c7a\u5b9a\u8cc7\u6599",
    "importance": "\u9ad8",
    "topics": [
      "eia-replacement-projects-2026"
    ]
  },
  {
    "id": "source-env-eia-commencement-draft-20261009",
    "title": "\u74b0\u5883\u5f71\u97ff\u8a55\u4fa1\u6cd5\u306e\u4e00\u90e8\u3092\u6539\u6b63\u3059\u308b\u6cd5\u5f8b\u306e\u65bd\u884c\u671f\u65e5\u3092\u5b9a\u3081\u308b\u653f\u4ee4\uff08\u95a3\u8b70\u6c7a\u5b9a\u6642\u306e\u6848\u6587\uff09",
    "url": "https://www.env.go.jp/content/000432248.pdf",
    "publishedAt": "2026-10-09",
    "authority": "\u74b0\u5883\u7701",
    "whyImportant": "\u4ee4\u548c7\u5e74\u6cd5\u5f8b\u7b2c73\u53f7\u9644\u5247\u7b2c1\u6761\u672c\u6587\u306e\u65bd\u884c\u671f\u65e5\u30922027\u5e744\u67081\u65e5\u3068\u3059\u308b\u6848\u6587\u3002\u5225\u6bb5\u968e\u306e\u898f\u5b9a\u3078\u4e00\u5f8b\u306b\u6d41\u7528\u3057\u306a\u3044\u3002",
    "type": "government",
    "typeLabel": "\u4e00\u6b21\u8cc7\u6599\u30fb\u6cd5\u5f8b\uff0f\u653f\u4ee4\u95a3\u8b70\u6c7a\u5b9a\u8cc7\u6599",
    "importance": "\u9ad8",
    "topics": [
      "eia-replacement-projects-2026"
    ]
  },
  {
    "id": "source-shugiin-eia-amendment-2025",
    "title": "\u74b0\u5883\u5f71\u97ff\u8a55\u4fa1\u6cd5\u306e\u4e00\u90e8\u3092\u6539\u6b63\u3059\u308b\u6cd5\u5f8b\uff08\u4ee4\u548c7\u5e74\u6cd5\u5f8b\u7b2c73\u53f7\uff09",
    "url": "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/21720250620073.htm",
    "publishedAt": "2025-06-20",
    "authority": "\u8846\u8b70\u9662",
    "whyImportant": "\u5efa\u66ff\u914d\u616e\u66f8\u306e\u6cd5\u7684\u67a0\u7d44\u307f\u3068\u9644\u5247\u7b2c2\u6761\u306e\u65e2\u5b58\u6848\u4ef6\u306e\u7d4c\u904e\u63aa\u7f6e\u3092\u78ba\u8a8d\u3067\u304d\u308b\u5236\u5b9a\u6cd5\u5f8b\u5168\u6587\u3002",
    "type": "government",
    "typeLabel": "\u4e00\u6b21\u8cc7\u6599\u30fb\u6cd5\u5f8b\uff0f\u653f\u4ee4\u95a3\u8b70\u6c7a\u5b9a\u8cc7\u6599",
    "importance": "\u9ad8",
    "topics": [
      "eia-replacement-projects-2026"
    ]
  }
];
  const current = window.SOURCE_DATA || [];
  for (const item of additions) {
    const matches = current.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item))) throw new Error('October 11 conflicting canonical record: ' + item.id);
  }
  window.SOURCE_DATA = [...current, ...additions.filter(item => !current.some(x => x.id === item.id))];
})();
