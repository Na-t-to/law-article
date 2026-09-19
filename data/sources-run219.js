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
      id: "source-iphc-sep-employee-invention-20250918",
      title: "知財高裁2025年9月18日判決（令和6年（ネ）第10040号 職務発明対価請求控訴事件）",
      type: "court_case",
      typeLabel: "裁判例",
      authority: "知的財産高等裁判所",
      publishedAt: "2025-09-18",
      url: "https://www.courts.go.jp/assets/hanrei/hanrei-point_pdf-95377.pdf",
      importance: "高",
      whyImportant: "平成16年改正前の特許法35条に基づく職務発明対価請求で、DVDビデオ規格のSEPリストに掲載され一体としてライセンス料の対象となった特許について、現実の実施がなくても使用者の独占の利益が否定されないと判断し、SEP・パテントプール等のライセンス価値を職務発明対価へどう反映するかを具体化した知財高裁判決。",
      topics: ["employee-inventions-patent-act-35"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
