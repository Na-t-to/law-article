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
      id: "source-meti-takeover-guideline-20230831",
      title: "企業買収における行動指針―企業価値の向上と株主利益の確保に向けて―",
      type: "guideline",
      typeLabel: "一次資料・経済産業省／企業買収行動指針",
      authority: "経済産業省",
      publishedAt: "2023-08-31",
      url: "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/ma-guideline-publications.html",
      importance: "高",
      whyImportant: "上場会社の経営支配権取得を伴う買収について、企業価値・株主共同の利益、株主意思、透明性を柱に、買収提案の受領から検討・交渉・情報開示・対抗措置までの原則論とベストプラクティスを示す基礎資料。",
      topics: ["corporate-takeover-guidelines"]
    },
    {
      id: "source-meti-takeover-points-20260730",
      title: "『企業買収における行動指針』のポイント",
      type: "guideline",
      typeLabel: "一次資料・経済産業省／企業買収行動指針ポイント",
      authority: "経済産業省",
      publishedAt: "2026-07-30",
      url: "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/pdf/kodoshishin_20260730_3.pdf",
      importance: "高",
      whyImportant: "2023年指針を維持しつつ、上場会社の役員・買収者が原則論と留意点を把握できるよう要点を整理した確定版。2026年の研究会再開後に示された最新の公式整理として、Q&Aと併読する基準になる。",
      topics: ["corporate-takeover-guidelines"]
    },
    {
      id: "source-meti-takeover-qa-20260730",
      title: "『企業買収における行動指針』Q&A",
      type: "guideline",
      typeLabel: "一次資料・経済産業省／企業買収行動指針Q&A",
      authority: "経済産業省",
      publishedAt: "2026-07-30",
      url: "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/pdf/kodoshishin_20260730_5.pdf",
      importance: "高",
      whyImportant: "『望ましい買収』、真摯な買収提案、取締役会の真摯な検討、定性的要素と企業価値、複数提案の比較など、2023年指針の実務上の誤解・迷いを具体的な問いに沿って明確化する確定版。",
      topics: ["corporate-takeover-guidelines"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
