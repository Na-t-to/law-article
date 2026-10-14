// October 14 verified operational request. Guarded and idempotent.
(() => {
  const additions = [
  {
    "id": "source-fsa-mlit-agency-quality-request-20261013",
    "title": "\u640d\u5bb3\u4fdd\u967a\u696d\u754c\u306e\u4fe1\u983c\u56de\u5fa9\u306b\u5411\u3051\u305f\u53d6\u7d44\u306e\u9069\u5207\u306a\u904b\u7528\u306b\u3064\u3044\u3066\uff08\u8981\u8acb\u30fb\u5225\u7d19\u3092\u542b\u3080\uff09",
    "type": "government_material",
    "typeLabel": "\u4e00\u6b21\u8cc7\u6599\u30fb\u696d\u754c\u56e3\u4f53\u3078\u306e\u904b\u7528\u8981\u8acb",
    "authority": "\u91d1\u878d\u5e81\u30fb\u56fd\u571f\u4ea4\u901a\u7701",
    "publishedAt": "2026-10-13",
    "url": "https://www.fsa.go.jp/news/r8/hoken/20261013/01.pdf",
    "importance": "\u9ad8",
    "whyImportant": "\u65e5\u672c\u640d\u5bb3\u4fdd\u967a\u5354\u4f1a\u5b9b\u3066\u306e\u5171\u540c\u8981\u8acb\u3002\u4ee3\u7406\u5e97\u306e\u898f\u6a21\u30fb\u696d\u52d9\u7279\u6027\u306b\u5fdc\u3058\u305f\u5bfe\u8a71\u30fb\u652f\u63f4\u3001\u4e00\u5f8b\u7684\u306a\u671f\u9650\u3084\u5bfe\u5fdc\u306e\u70b9\u691c\u3001\u7d4c\u55b6\u9663\u306b\u3088\u308b\u904b\u7528\u7ba1\u7406\u3092\u793a\u3059\u51682\u9801\u306e\u539f\u5178\u3002",
    "topics": [
      "insurance-agency-governance-comparison-sales-2025"
    ]
  }
];
  const current = window.SOURCE_DATA || [];
  for (const item of additions) {
    const matches = current.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item))) throw new Error('October 14 conflicting canonical record: ' + item.id);
  }
  window.SOURCE_DATA = [...current, ...additions.filter(item => !current.some(x => x.id === item.id))];
})();
