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

  const topic = "patent-network-inventions-infringement-review-2026";
  const additions = [
    {
      id: "source-supreme-court-network-patent-2025",
      title: "最高裁判所令和7年3月3日判決・令和5年（受）第2028号 特許権侵害差止等請求事件",
      type: "case",
      typeLabel: "裁判例・ネットワーク関連発明／属地主義",
      authority: "最高裁判所",
      publishedAt: "2025-03-03",
      url: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-93839.pdf",
      importance: "最高",
      whyImportant: "国外サーバと国内端末を含むネットワークシステムについて、行為・システム全体を見て実質的に国内の『生産』と評価できる場合に日本の特許権が及び得ると示した最高裁判決。",
      topics: [topic]
    },
    {
      id: "source-jpo-patent-system-committee-56-2026",
      title: "第56回特許制度小委員会 議事次第・配布資料一覧",
      type: "government_material",
      typeLabel: "一次資料・特許庁／特許制度見直し",
      authority: "特許庁",
      publishedAt: "2026-06-12",
      url: "https://www.jpo.go.jp/resources/shingikai/sangyo-kouzou/shousai/tokkyo_shoi/56-shiryou.html",
      importance: "最高",
      whyImportant: "ネットワーク関連発明、AI技術を踏まえた特許制度、知的財産の侵害抑止を2026年の検討課題として扱う特許制度小委員会の公式資料一覧。",
      topics: [topic]
    },
    {
      id: "source-jpo-patent-system-committee-57-2026",
      title: "第57回特許制度小委員会 資料1『特許制度に関する検討課題について』",
      type: "government_material",
      typeLabel: "一次資料・特許庁／ネットワーク関連発明・侵害抑止",
      authority: "特許庁",
      publishedAt: "2026-08-20",
      url: "https://www.jpo.go.jp/resources/shingikai/sangyo-kouzou/shousai/tokkyo_shoi/document/57-shiryou/01.pdf",
      importance: "最高",
      whyImportant: "第57回特許制度小委員会で、ネットワーク関連発明の『考え方の整理』のドラフト準備と侵害抑止の民事救済・証拠収集等を議論する基礎資料。",
      topics: [topic]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
