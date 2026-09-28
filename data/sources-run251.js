(() => {
  if (window.__LAW_INDEX_RUN251_SOURCE_APPLIED__) return;
  window.__LAW_INDEX_RUN251_SOURCE_APPLIED__ = true;

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

  const addition = {
    id: "source-jftc-petroleum-price-pass-through-20260925",
    title: "「石油関連製品等の価格転嫁に関する緊急調査」の結果について",
    type: "report",
    typeLabel: "一次資料・公正取引委員会／価格転嫁緊急調査",
    authority: "公正取引委員会",
    publishedAt: "2026-09-25",
    url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260925_kinkyu_chosa.html",
    importance: "高",
    whyImportant: "石油関連製品等の価格高騰を受けた価格転嫁について、27,622名の回答、電話調査・立入調査を基に、協議の申出・要請受諾率・不受諾理由の説明・サプライチェーン下流での転嫁状況を示す最新の公取委調査。独占禁止法と取適法の執行方針も明示しており、価格協議プロセスの運用点検に直結する。",
    topics: ["fair-subcontract-transactions"]
  };

  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) {
    window.SOURCE_DATA = existing.concat(addition);
  }
})();