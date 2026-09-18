(() => {
  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  const additions = [
    {
      id: "source-fsa-public-fund-liquidity-guideline-20260916",
      title: "『金融商品取引業者等向けの総合的な監督指針』の一部改正（案）に対するパブリックコメントの結果等の公表について",
      type: "government_material",
      typeLabel: "一次資料・金融庁／公募投資信託の流動性リスク管理",
      authority: "金融庁",
      publishedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260916/20260916.html",
      importance: "最高",
      whyImportant: "IOSCOの勧告・実施ガイダンスを踏まえ、公募投資信託の流動性リスク管理に関する監督指針改正を最終化し、2027年10月1日の適用日を確定した一次資料。",
      topics: ["securities-monitoring-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
