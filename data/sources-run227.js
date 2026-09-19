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
      id: "source-meti-corporate-takeover-guidelines-2023",
      title: "企業買収における行動指針―企業価値の向上と株主利益の確保に向けて―",
      type: "guideline",
      typeLabel: "一次資料・経済産業省／企業買収における行動指針",
      authority: "経済産業省",
      publishedAt: "2023-08-31",
      url: "https://www.meti.go.jp/press/2023/08/20230831003/20230831003.html",
      importance: "高",
      whyImportant: "上場会社の経営支配権を取得する買収について、企業価値・株主共同の利益、株主意思、透明性の3原則と、買収提案を受けた取締役会の行動規範、情報提供、対応方針・対抗措置等を示す基礎となる行政ガイドライン。",
      topics: ["corporate-takeover-guidelines"]
    },
    {
      id: "source-meti-corporate-takeover-qa-20260730",
      title: "『企業買収における行動指針』の解釈・ポイント・Q&A",
      type: "guideline",
      typeLabel: "一次資料・経済産業省／企業買収行動指針の解釈・ポイント・Q&A",
      authority: "経済産業省",
      publishedAt: "2026-07-30",
      url: "https://www.meti.go.jp/press/2026/07/20260730002/20260730002.html",
      importance: "高",
      whyImportant: "2023年指針を改訂せず維持することを前提に、望ましい買収、真摯な買収提案、真摯な検討、企業価値、複数提案等について実務上の誤解が生じていた点を2026年に明確化した最新の公式解釈資料。",
      topics: ["corporate-takeover-guidelines"]
    }
  ];

  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();
