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

  const topic = "plant-variety-seed-law-2026";
  const additions = [
    {
      id: "source-maff-seed-amendment-2026",
      title: "種苗法の改正について（令和8年改正・Q&A）",
      type: "law",
      typeLabel: "一次資料・農林水産省／2026年改正種苗法",
      authority: "農林水産省",
      publishedAt: "2026-07-24",
      url: "https://www.maff.go.jp/j/shokusan/syubyouhou/",
      importance: "最高",
      whyImportant: "2026年改正種苗法の概要・条文・新旧対照・Q&Aを集約する公式ページ。Q&Aでは2026年7月24日の先行施行と12月1日の主要施行を区別し、出願品種の輸出差止め、輸出目的保管、損害算定、名称推定、逆輸入、貸渡し等の実務を具体化している。",
      topics: [topic]
    },
    {
      id: "source-maff-important-variety-law-2026",
      title: "第221回国会提出法律案（重要品種法・種苗法改正の成立・公布・施行情報）",
      type: "law",
      typeLabel: "一次資料・農林水産省／成立・公布・施行情報",
      authority: "農林水産省",
      publishedAt: "2026-07-24",
      url: "https://www.maff.go.jp/j/law/bill/221.html",
      importance: "最高",
      whyImportant: "重要品種の育成及びその種苗の生産の振興に関する法律と2026年改正種苗法について、成立日・公布日・施行時期と法律案資料を公式に確認できる。新法の主要部分は公布から6か月以内の政令指定日であり、確定日を先取りしないための基準点となる。",
      topics: [topic]
    },
    {
      id: "source-maff-important-variety-policy-draft-2026",
      title: "第1回気候変動等対応品種育成・普及小委員会 配布資料",
      type: "government_material",
      typeLabel: "一次資料・農林水産省／基本方針案・施行準備",
      authority: "農林水産省",
      publishedAt: "2026-09-07",
      url: "https://www.maff.go.jp/j/council/seisaku/kikaku/hinsyu/260907.html",
      importance: "高",
      whyImportant: "気候変動等対応品種法の施行に向け、重要品種の育成・普及に関する基本方針案の検討状況を追える。公布済みの法律と、施行前に具体化中の政策・認定運用を分けて確認する資料。",
      topics: [topic]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
