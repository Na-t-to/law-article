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
    id: "source-fsa-ssbj-shk-practice-standard-designation-2026",
    title: "サステナビリティ開示基準を指定する件の一部改正（SSBJ実務対応基準第1号の追加）",
    type: "guideline",
    typeLabel: "一次資料・金融庁／サステナビリティ開示基準指定告示",
    authority: "金融庁",
    publishedAt: "2026-09-15",
    url: "https://www.fsa.go.jp/news/r8/shouken/20260915/20260915.html",
    importance: "最高",
    whyImportant: "SSBJが2026年6月11日までに公表した基準を指定対象とし、温対法のSHK制度の方法で測定・報告するGHG排出を用いる場合の開示を定める実務対応基準第1号を追加した告示改正が、2026年9月15日に公布・適用されたことを確認できる。",
    topics: ["ssbj-statutory-sustainability-disclosure"]
  }];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();