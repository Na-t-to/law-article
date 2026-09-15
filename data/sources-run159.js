(() => {
  const additions = [
    {
      id: "source-caa-consumer-contract-interim-final-2026",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      type: "proposal",
      typeLabel: "一次資料・消費者契約法見直し／中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      importance: "最高",
      whyImportant: "消費者の多様な脆弱性、継続的契約の解約妨害・更新・変更、解約料の立証責任等について、2026年9月10日時点の検討会の正式な中間取りまとめを確認できる。8月31日の案から成案化した政策検討の基準点であり、法案成立・施行済みルールとは区別して読む必要がある。",
      topics: ["consumer-contract-law-review-2026"]
    },
    {
      id: "source-caa-digital-tokusho-interim-final-2026",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      type: "proposal",
      typeLabel: "一次資料・デジタル取引／特定商取引法等見直し・中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      importance: "最高",
      whyImportant: "SNS・チャット等による勧誘、表示・UI、契約・解約導線、プラットフォーム、レスキュー商法・点検商法、後出しマルチ等について、2026年9月10日時点の正式な中間取りまとめを確認できる。制度改革の方向性を示すが、具体的な法案・条文・施行時期は今後の検討事項である。",
      topics: ["digital-commerce-tokusho-review"]
    }
  ];

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

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();