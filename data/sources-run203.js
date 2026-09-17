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
      id: "source-mhlw-short-hours-insured-status-20260914",
      title: "勤務時間が短い正規型の労働者として事業所に使用されている個人事業主等に係る被保険者資格の取扱いについて",
      type: "government_material",
      typeLabel: "一次資料・厚生労働省／被保険者資格通知",
      authority: "厚生労働省",
      publishedAt: "2026-09-14",
      url: "https://www.mhlw.go.jp/content/12512000/001749381.pdf",
      importance: "最高",
      whyImportant: "極端に短い勤務時間で雇用される個人事業主等について、契約名ではなく常用的使用関係の実態から健康保険・厚生年金保険の被保険者資格を判断する基準を明確化した。",
      topics: ["social-insurance-short-time-workers-2026"]
    },
    {
      id: "source-mhlw-product-safety-pledge-osha-20260910",
      title: "製品安全誓約（日本国）の対象に「労働安全衛生法」が加わります",
      type: "government_material",
      typeLabel: "一次資料・厚生労働省／製品安全誓約",
      authority: "厚生労働省",
      publishedAt: "2026-09-10",
      url: "https://www.mhlw.go.jp/stf/newpage_76064.html",
      importance: "高",
      whyImportant: "オンラインマーケットプレイスの自主的な製品安全対応の対象に、労働安全衛生法が規制する一部製品が追加されたことを確認できる。法定義務と自主的取組を分けて運用する基準になる。",
      topics: ["product-safety-four-acts-ecommerce-child-products"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
