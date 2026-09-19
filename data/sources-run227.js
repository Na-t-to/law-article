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
      id: "source-mhlw-foreign-worker-supervision-20260915",
      title: "外国人技能実習生又は特定技能外国人を使用する事業場に対して行った令和7年の監督指導、送検等の状況",
      type: "report",
      typeLabel: "一次資料・厚生労働省／労働基準監督指導",
      authority: "厚生労働省",
      publishedAt: "2026-09-15",
      url: "https://www.mhlw.go.jp/stf/newpage_76095.html",
      importance: "高",
      whyImportant: "技能実習生・特定技能外国人を使用し法令違反が疑われる事業場への2025年監督指導について、違反事業場数、主要違反事項、送検件数を公表した最新の一次資料。外国人受入れを在留資格対応だけでなく労働基準・安全衛生コンプライアンスまで一体で管理する必要性を確認できる。",
      topics: ["skill-development-employment-foreign-workers"]
    }
  ];

  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();
