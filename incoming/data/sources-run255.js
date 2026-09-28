(() => {
  const addition = {
    id: "source-ai-ip-principle-code-filing-20260908",
    title: "生成AI知財プリンシプル・コードの届出開始日及び届出様式",
    type: "government_material",
    typeLabel: "一次資料・内閣官房／AI知財プリンシプル・コード運用",
    authority: "内閣官房 知的財産戦略推進事務局",
    publishedAt: "2026-09-08",
    url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/ai_principle_code/index.html",
    importance: "最高",
    whyImportant: "プリンシプル・コード受入れの届出は2026年10月26日開始。届出様式も公表済みで、届出先等は開始日に案内予定。",
    topics: ["generative-ai-ip-principle-code", "generative-ai-ip-rights"]
  };
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  if (!existing.some((x) => x && (x.id === addition.id || x.url === addition.url))) {
    window.SOURCE_DATA = existing.concat(addition);
  }
})();