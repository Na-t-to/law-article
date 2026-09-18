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
      id: "source-fsa-public-fund-liquidity-guideline-20260916",
      title: "『金融商品取引業者等向けの総合的な監督指針』の一部改正（案）に対するパブリックコメントの結果等の公表について",
      type: "government_material",
      typeLabel: "一次資料・金融庁／公募投資信託の流動性リスク管理",
      authority: "金融庁",
      publishedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260916/20260916.html",
      importance: "最高",
      whyImportant: "IOSCOの勧告・実施ガイダンスを踏まえ、公募投資信託の流動性リスク管理に関する監督指針改正を最終化し、2027年10月1日の適用日を確定した一次資料。",
      topics: ["securities-monitoring-2026"]
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
      id: "source-caa-pionet-door-to-door-analysis-20260917",
      title: "PIO-NETデータを用いた訪問販売等に関する分析調査報告書",
      type: "government_material",
      typeLabel: "一次資料・消費者庁／訪問販売等のPIO-NET分析",
      authority: "消費者庁",
      publishedAt: "2026-09-17",
      url: "https://www.caa.go.jp/notice/assets/consumer_transaction_cms201_260917_01.pdf",
      importance: "高",
      whyImportant: "訪問販売等の相談データを分析し、ネット広告から消費者が訪問を依頼する取引の増加、価格・勧誘・契約書面・解約妨害のトラブル、連鎖販売取引で特定利益が後から示される実態を数量的に示す。特定商取引法等の今後の制度検討に用いる立法事実を確認できる一次資料。",
      topics: ["digital-commerce-tokusho-review", "digital-transactions-scta-review-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const canonicalTopicBySource = new Map([
    ["source-caa-digital-scta-interim-20260910", "digital-commerce-tokusho-review"],
    ["source-egov-digital-scta-interim-comment-20260916", "digital-commerce-tokusho-review"],
    ["source-caa-consumer-contract-interim-20260910", "consumer-contract-law-review-2026"],
    ["source-egov-consumer-contract-interim-comment-20260916", "consumer-contract-law-review-2026"]
  ]);
  for (const source of window.SOURCE_DATA || []) {
    const canonicalTopic = canonicalTopicBySource.get(source?.id);
    if (canonicalTopic) source.topics = appendUnique(source.topics, [canonicalTopic]);
  }
})();
