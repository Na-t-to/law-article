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
      id: "source-npa-aml-annual-report-2025",
      title: "犯罪収益移転防止に関する年次報告書（令和7年）",
      type: "report",
      typeLabel: "一次資料・警察庁JAFIC／AML年次報告書",
      authority: "警察庁 犯罪収益対策室（JAFIC）",
      publishedAt: "2026-03-12",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/nenzihokoku/data/jafic_2025.pdf",
      importance: "高",
      whyImportant: "DNFBPsを特集し、疑わしい取引の届出状況、業種別のマネー・ローンダリングリスク、FATF第5次対日相互審査を見据えた取組、本人確認方法見直しを一次資料で確認できる。",
      topics: ["aml-kyc-criminal-proceeds"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
