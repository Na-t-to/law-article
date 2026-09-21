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
  const addition = {
    id: "source-jpx-misconduct-response-principles-20160224",
    title: "上場会社における不祥事対応のプリンシプル",
    type: "guideline",
    typeLabel: "日本取引所自主規制法人・不祥事対応プリンシプル",
    authority: "日本取引所自主規制法人",
    publishedAt: "2016-02-24",
    url: "https://www.jpx.co.jp/regulation/listing/principle/",
    importance: "最高",
    whyImportant: "上場会社の不祥事対応について、根本原因の解明、第三者委員会を設置する場合の独立性・中立性・専門性、実効性の高い再発防止、迅速・的確な情報開示という4原則を示す公式の実務基準。法令・取引所規則とは異なるプリンシプルであることも明示している。",
    topics: ["corporate-misconduct-investigations"]
  };
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) {
    window.SOURCE_DATA = existing.concat(addition);
  }
})();
