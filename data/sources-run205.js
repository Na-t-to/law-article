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
      id: "source-sesc-monitoring-policy-20260731",
      title: "令和8事務年度 証券モニタリング基本方針",
      type: "government_material",
      typeLabel: "一次資料・証券監視委／2026事務年度の重点検証事項",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      importance: "最高",
      whyImportant: "2026年7月から2027年6月までの証券モニタリングについて、顧客本位・適合性、システムリスク、AML/CFT、内部管理態勢の実効性と、規模・業態別の重点検証事項を当局自身が示す基準資料。",
      topics: ["securities-monitoring-2026"]
    },
    {
      id: "source-sesc-monitoring-casebook-20260731",
      title: "証券モニタリング概要・事例集（令和8年7月）",
      type: "government_material",
      typeLabel: "一次資料・証券監視委／前事務年度の検査・モニタリング事例",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      importance: "最高",
      whyImportant: "前事務年度の検査・モニタリングで把握した問題点を具体例で確認でき、年度方針の抽象的な重点項目を商品審査、業容変更、システムリスク、利益相反等の実務統制へ落とす材料になる。",
      topics: ["securities-monitoring-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
