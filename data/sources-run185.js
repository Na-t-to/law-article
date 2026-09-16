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
      id: "source-meti-takeover-guidelines-2023",
      title: "『企業買収における行動指針』を策定しました",
      type: "guideline",
      typeLabel: "一次資料・経済産業省／企業買収における行動指針",
      authority: "経済産業省",
      publishedAt: "2023-08-31",
      url: "https://www.meti.go.jp/press/2023/08/20230831003/20230831003.html",
      importance: "最高",
      whyImportant: "上場会社の経営支配権を取得する買収を中心に、企業価値・株主利益、取締役会の行動規範、透明性、対抗措置等の原則・ベストプラクティスを示した基礎資料。",
      topics: ["corporate-takeover-guidelines-2026"]
    },
    {
      id: "source-meti-takeover-guidance-qa-2026",
      title: "『企業買収における行動指針』のポイント・Q&A等を策定しました",
      type: "guideline",
      typeLabel: "一次資料・経済産業省／企業買収行動指針の解釈・ポイント・Q&A",
      authority: "経済産業省",
      publishedAt: "2026-07-30",
      url: "https://www.meti.go.jp/press/2026/07/20260730002.html",
      importance: "最高",
      whyImportant: "2023年指針を維持したまま、望ましい買収、真摯な買収提案・検討、企業価値と買収価格、定量・定性評価等を具体化した公式の補足文書群。",
      topics: ["corporate-takeover-guidelines-2026"]
    },
    {
      id: "source-fsa-overseas-vf-comments-2026",
      title: "コメントの概要及びコメントに対する金融庁の考え方（海外ベンチャーファンドとの連携に関する投資運用規制の緩和）",
      type: "regulation",
      typeLabel: "一次資料・金融庁／外国ファンド特例の2026年改正パブコメ回答",
      authority: "金融庁",
      publishedAt: "2026-09-15",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260915/01.pdf",
      importance: "最高",
      whyImportant: "外国ファンド特例の緩和範囲、国内VFの運用状況確認・LP説明責任が残ること、海外VF持分の勧誘規制は別途残ることを金融庁回答で具体的に確認できる。",
      topics: ["overseas-vf-foreign-fund-exemption-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
