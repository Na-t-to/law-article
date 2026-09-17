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

  const topic = "economic-security-promotion-act-2026-oesa";
  const additions = [
    {
      id: "source-cao-oesa-basic-guideline-20260911",
      title: "特定海外事業の促進に関する基本指針",
      type: "guideline",
      typeLabel: "一次資料・内閣府／OESA基本指針",
      authority: "内閣府",
      publishedAt: "2026-09-11",
      url: "https://www.cao.go.jp/keizai_anzen_hosho/suishinhou/doc/kihonshishin5.pdf",
      importance: "最高",
      whyImportant: "OESAの対象となる特定海外事業の類型、計画認定の基準、実施体制・資金調達・情報管理、国内への裨益や人権尊重等の実施上の考え方を確定した基本指針。",
      topics: [topic]
    },
    {
      id: "source-kantei-economic-security-cabinet-20260911",
      title: "令和8年9月11日（金）定例閣議案件",
      type: "government_material",
      typeLabel: "一次資料・首相官邸／閣議決定",
      authority: "首相官邸",
      publishedAt: "2026-09-11",
      url: "https://www.kantei.go.jp/jp/kakugi/2026/kakugi-2026091101.html",
      importance: "最高",
      whyImportant: "OESA基本指針、改正経済安全保障推進法の各基本指針、施行期日政令の閣議決定を同日に確認できる。",
      topics: [topic]
    },
    {
      id: "source-kanpo-economic-security-effective-20260916",
      title: "官報 令和8年9月16日 号外第206号（令和8年政令第288号ほか）",
      type: "law_text",
      typeLabel: "一次資料・官報／施行期日政令・関係政省令等",
      authority: "国立印刷局",
      publishedAt: "2026-09-16",
      url: "https://www.kanpo.go.jp/20260916/20260916g00206/20260916g002060000f.html",
      importance: "最高",
      whyImportant: "改正経済安全保障推進法・JBIC法の施行期日を定める令和8年政令第288号とOESA関係の政省令・告示を確認でき、主要規定の2026年9月18日施行を確定できる。",
      topics: [topic]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
