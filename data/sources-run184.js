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

  const topic = "cross-border-collection-payment-services-act-2026";
  const additions = [
    {
      id: "source-fsa-payment-services-amendment-final-2026",
      title: "令和7年資金決済法改正に係る政令の公布及びパブリックコメントの結果等について",
      type: "government",
      typeLabel: "一次資料・金融庁／2025年改正資金決済法の下位法令・施行日",
      authority: "金融庁",
      publishedAt: "2026-05-22",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260522/20260522.html",
      importance: "最高",
      whyImportant: "クロスボーダー収納代行の適用除外類型を含む2025年改正資金決済法の政令・内閣府令等を最終化し、原則2026年6月1日施行・適用とした公式資料。",
      topics: [topic]
    },
    {
      id: "source-fsa-cross-border-collection-comments-2026",
      title: "コメントの概要及びコメントに対する金融庁の考え方（クロスボーダー収納代行（国境を跨ぐ収納代行））",
      type: "government",
      typeLabel: "一次資料・金融庁／クロスボーダー収納代行パブコメ回答",
      authority: "金融庁",
      publishedAt: "2026-05-22",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260522/04.pdf",
      importance: "最高",
      whyImportant: "資金決済法2条の2の適用、各適用除外類型、利用者保護上の適用除外の外れ方を、具体的な質問への金融庁回答で確認できる最重要の運用資料。",
      topics: [topic]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
