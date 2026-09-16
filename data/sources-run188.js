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
      id: "source-caa-digital-tokusho-interim-final-2026",
      title: "デジタル取引・特定商取引法等検討会 中間とりまとめ",
      type: "proposal",
      typeLabel: "検討会資料・中間とりまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      importance: "最高",
      whyImportant: "チャット勧誘、ダークパターン、最終確認画面、レスキュー・点検商法など、デジタル取引と特定商取引法制の見直し方向を最終の中間とりまとめとして確認できる。",
      topics: ["digital-commerce-tokusho-review"]
    },
    {
      id: "source-caa-digital-tokusho-public-comment-2026",
      title: "「デジタル取引・特定商取引法等検討会 中間とりまとめ」に関する意見募集",
      type: "proposal",
      typeLabel: "パブリックコメント",
      authority: "消費者庁 / e-Gov",
      publishedAt: "2026-09-16",
      url: "https://public-comment.e-gov.go.jp/pcm/detail?CLASSNAME=PCMMSTDETAIL&Mode=0&id=235060029",
      importance: "高",
      whyImportant: "中間とりまとめが2026年9月16日から10月31日まで意見募集段階にあることを確認でき、未確定の制度見直しを成立済みルールと誤認しない基準になる。",
      topics: ["digital-commerce-tokusho-review"]
    },
    {
      id: "source-caa-consumer-contract-interim-final-2026",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      type: "proposal",
      typeLabel: "検討会資料・中間取りまとめ",
      authority: "消費者庁 / 消費者契約法検討会",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      importance: "最高",
      whyImportant: "判断困難状態に着目した契約離脱、継続契約の解約妨害、更新・重要変更通知、解約料、EC定型約款など、消費者契約法見直しの中間整理を確定版資料で確認できる。",
      topics: ["consumer-contract-law-review-2026"]
    },
    {
      id: "source-caa-consumer-contract-public-comment-2026",
      title: "「現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ」に関する意見募集",
      type: "proposal",
      typeLabel: "パブリックコメント",
      authority: "消費者庁 / e-Gov",
      publishedAt: "2026-09-16",
      url: "https://public-comment.e-gov.go.jp/pcm/detail?CLASSNAME=PCMMSTDETAIL&Mode=0&id=235030052",
      importance: "高",
      whyImportant: "中間取りまとめが2026年9月16日から10月31日まで意見募集段階にあることを示し、各論点がなお制度検討中であることを確認できる。",
      topics: ["consumer-contract-law-review-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
