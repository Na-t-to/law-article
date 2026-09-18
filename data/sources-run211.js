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
      id: "source-caa-hope-group-door-to-door-order-20260918",
      title: "訪問販売業者【株式会社HOPE Group】に対する行政処分について",
      type: "government_material",
      typeLabel: "一次資料・消費者庁／暮らしのレスキューサービスの訪問販売行政処分",
      authority: "消費者庁・関東経済産業局",
      publishedAt: "2026-09-18",
      url: "https://www.caa.go.jp/notice/assets/consumer_transaction_cms203_260918_01.pdf",
      importance: "高",
      whyImportant: "ネット広告を見た消費者自身が訪問を依頼した取引でも、具体的な役務内容・金額を把握せず低額の取引を想定していた事例について訪問販売該当性を前提に、契約書面の記載不備、クーリング・オフに関する不実告知、返金拒否、支払のためのATMへの連行を認定した執行事例。広告起点の訪問依頼から契約・解約までを一連の顧客導線として監査する実務上の根拠になる。",
      topics: ["digital-commerce-tokusho-review"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();