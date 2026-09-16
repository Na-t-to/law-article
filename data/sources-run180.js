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
  const additions = [{
    id: "source-fsa-digital-bond-solicitation-final-2026",
    title: "『金融商品取引法第二条に規定する定義に関する内閣府令の一部を改正する内閣府令』等の公布及びパブリックコメントの結果等について",
    type: "regulation",
    typeLabel: "一次資料・内閣府令公布／パブリックコメント結果",
    authority: "金融庁",
    publishedAt: "2026-09-15",
    url: "https://www.fsa.go.jp/news/r8/sonota/20260915/20260915.html",
    importance: "最高",
    whyImportant: "社債発行企業のグループ企業による勧誘の適用除外を最終化し、2026年9月16日施行とした一次資料。パブリックコメント回答から対象証券、勧誘チャネル、発行企業の方針・報告、信用補完等の具体的要件も確認できる。",
    topics: ["digital-bond-solicitation-2026"]
  }];
  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
