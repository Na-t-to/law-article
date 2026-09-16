(() => {
  const topicSlug = "digital-commerce-specified-transactions-2026";
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
      id: "source-caa-digital-transaction-interim-20260910",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      type: "government",
      typeLabel: "一次資料・消費者庁／デジタル取引・特定商取引法見直し",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      importance: "最高",
      whyImportant: "SNS等のチャット勧誘、ダークパターンを含む表示・UI、最終確認画面・契約後の電子書面、解約導線、デジタルプラットフォーム等について、特定商取引法等の制度見直し方向を示す2026年9月の中間取りまとめ。現時点では検討段階であり、成立済みの新義務ではない。",
      topics: [topicSlug]
    },
    {
      id: "source-caa-digital-consumer-survey-20260427",
      title: "特定商取引・デジタル消費取引の実態に関する調査報告書",
      type: "government",
      typeLabel: "一次資料・消費者庁／デジタル消費取引実態調査",
      authority: "消費者庁",
      publishedAt: "2026-04-27",
      url: "https://www.caa.go.jp/notice/assets/consumer_transaction_cms201_260427_01.pdf",
      importance: "高",
      whyImportant: "ECサイトの契約成立時点、注文確認メール、返品・返金、定期購入・サブスクの解約方法を実査し、海外の不公正取引・ダークパターン規制も比較した、中間取りまとめの実態把握を支える基礎資料。",
      topics: [topicSlug]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();