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
      id: "source-jftc-distribution-guideline-current-20260708",
      title: "流通・取引慣行に関する独占禁止法上の指針",
      type: "government_material",
      typeLabel: "一次資料・公正取引委員会／流通・取引慣行ガイドライン現行版",
      authority: "公正取引委員会",
      publishedAt: "2026-07-08",
      url: "https://www.jftc.go.jp/dk/guideline/unyoukijun/ryutsutorihiki.html",
      importance: "高",
      whyImportant: "現行ガイドライン本文。1991年公表後の改正履歴に2026年7月8日改正を明記し、再販売価格維持、非価格制限その他の流通・取引慣行に関する独占禁止法上の考え方を確認できる。",
      topics: ["distribution-resale-price"]
    },
    {
      id: "source-jftc-rpm-faq-20260708",
      title: "よくある質問コーナー（独占禁止法）Q12-4・Q12-5",
      type: "government_material",
      typeLabel: "一次資料・公正取引委員会／指定価格制度・費用負担Q&A",
      authority: "公正取引委員会",
      publishedAt: "2026-07-08",
      url: "https://www.jftc.go.jp/dk/dk_qa.html",
      importance: "高",
      whyImportant: "いわゆる指定価格制度について、メーカーがユーザー販売までの危険・費用を負担し流通業者が単なる取次ぎとして機能する場合の考え方と、荷造費・人件費・研修費・保険料等を含む費用確認・負担方法を具体化する公式Q&A。",
      topics: ["distribution-resale-price"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

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
      id: "source-meti-corporate-takeover-guideline-2023",
      title: "企業買収における行動指針―企業価値の向上と株主利益の確保に向けて―",
      type: "government_material",
      typeLabel: "一次資料・経済産業省／企業買収行動指針",
      authority: "経済産業省",
      publishedAt: "2023-08-31",
      url: "https://www.meti.go.jp/shingikai/economy/kosei_baishu/20230831_report.html",
      importance: "最高",
      whyImportant: "上場会社の経営支配権取得を主な対象として、企業価値・株主共同の利益、株主意思、透明性の三原則と、買収提案を受けた取締役会の行動規範、買収者・対象会社の情報提供等を体系化した基礎一次資料。",
      topics: ["corporate-takeover-guidelines-2026"]
    },
    {
      id: "source-meti-corporate-takeover-qna-20260730",
      title: "『企業買収における行動指針』の解釈について・ポイント・Q&A",
      type: "government_material",
      typeLabel: "一次資料・経済産業省／企業買収行動指針の解釈・ポイント・Q&A",
      authority: "経済産業省",
      publishedAt: "2026-07-30",
      url: "https://www.meti.go.jp/press/2026/07/20260730002.html",
      importance: "最高",
      whyImportant: "2023年指針を維持したまま、望ましい買収、高値提案、真摯な買収提案・真摯な検討、定性的要素の企業価値評価、複数提案の比較等について生じていた誤解・実務上の迷いを整理した最新の公式解釈資料。",
      topics: ["corporate-takeover-guidelines-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
