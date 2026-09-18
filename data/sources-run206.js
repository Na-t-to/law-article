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
      id: "source-mhlw-customer-harassment-guideline-20260226",
      title: "事業主が職場における顧客等の言動に起因する問題に関して雇用管理上講ずべき措置等についての指針（令和8年厚生労働省告示第51号）",
      type: "government_material",
      typeLabel: "一次資料・厚生労働省／カスタマーハラスメント防止指針",
      authority: "厚生労働省",
      publishedAt: "2026-02-26",
      url: "https://www.mhlw.go.jp/content/11900000/001662584.pdf",
      importance: "最高",
      whyImportant: "改正労働施策総合推進法33条に基づき、カスタマーハラスメントの定義、事業主が講ずべき措置、対処内容の例、望ましい取組を具体化する法定指針。",
      topics: ["customer-harassment-2026"]
    },
    {
      id: "source-mhlw-customer-harassment-law-20260723",
      title: "改正労働施策総合推進法等特設ページ",
      type: "government_material",
      typeLabel: "一次資料・厚生労働省／2026年10月1日施行・改正法案内",
      authority: "厚生労働省",
      publishedAt: "2026-07-23",
      url: "https://www.no-harassment.mhlw.go.jp/foundation/law-amendment/",
      importance: "最高",
      whyImportant: "カスタマーハラスメント防止措置が2026年10月1日から事業主の義務となることと、改正法・指針・Q&A等の実施資料を厚生労働省の公式ポータルで確認できる。",
      topics: ["customer-harassment-2026"]
    },
    {
      id: "source-mhlw-pharmacist-dispensing-duty-20260708",
      title: "薬剤師の調剤応需義務等について（令和8年7月8日付医薬発0708第1号）",
      type: "government_material",
      typeLabel: "一次資料・厚生労働省／カスハラと薬剤師の調剤応需義務",
      authority: "厚生労働省",
      publishedAt: "2026-07-08",
      url: "https://www.mhlw.go.jp/content/001720004.pdf",
      importance: "高",
      whyImportant: "カスタマーハラスメントを含む現代的な薬局実務を踏まえ、薬剤師法21条の調剤応需義務の法的性質と、調剤拒否の正当理由を緊急性・時間帯・患者との信頼関係等から総合判断する枠組みを示す行政通知。",
      topics: ["customer-harassment-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
