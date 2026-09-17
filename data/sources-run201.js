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
      id: "source-meti-unfair-competition-ai-likeness-hearing-20260911",
      title: "第30回 産業構造審議会 知的財産分科会 不正競争防止小委員会",
      type: "government_material",
      typeLabel: "一次資料・経済産業省／生成AIによる肖像・声の無断利用に関する関係者ヒアリング",
      authority: "経済産業省",
      publishedAt: "2026-09-11",
      url: "https://www.youtube.com/watch?v=jgvgSwTx3GE",
      importance: "高",
      whyImportant: "生成AIによる肖像・声の無断利用について、法務省の現行法解釈と実演家・業界団体の制度要望を聴取し、不正競争防止法による追加的な法的整備の要否を検討する公式審議会資料として、制度見直しが実際の政策検討段階へ進んだことを確認できる。",
      topics: ["ai-publicity-voice-rights-2026"]
    },
    {
      id: "source-caa-consumer-contract-interim-20260910",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      type: "government_material",
      typeLabel: "一次資料・消費者庁／消費者契約法検討会中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      importance: "最高",
      whyImportant: "消費者の多様な脆弱性、重大な結果をもたらす契約からの解放、継続契約の解約・更新・重要変更通知、解約料規律等について、2026年時点の制度見直し方向と未確定事項を確認できる公式中間取りまとめ。",
      topics: ["consumer-contract-act-review-2026"]
    },
    {
      id: "source-egov-consumer-contract-interim-comment-20260916",
      title: "『消費者契約法検討会 中間取りまとめ』に関する意見公募について",
      type: "government_material",
      typeLabel: "一次資料・e-Gov／中間取りまとめ意見募集",
      authority: "消費者庁",
      publishedAt: "2026-09-16",
      url: "https://public-comment.e-gov.go.jp/pcm/detail?CLASSNAME=PCMMSTDETAIL&Mode=0&id=235030052",
      importance: "高",
      whyImportant: "中間取りまとめが確定法制ではなく任意の意見募集段階にあることと、募集期間が2026年9月16日から10月31日までであることを公式に確認できる。",
      topics: ["consumer-contract-act-review-2026"]
    },
    {
      id: "source-caa-digital-scta-interim-20260910",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      type: "government_material",
      typeLabel: "一次資料・消費者庁／デジタル取引・特商法等検討会中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      importance: "最高",
      whyImportant: "SNS等のチャット勧誘、ダークパターンを含む表示・UI、最終確認・アップセル、電子的契約記録、解約妨害等について、デジタル取引規律の見直し方向と未確定事項を確認できる公式中間取りまとめ。",
      topics: ["digital-transactions-scta-review-2026"]
    },
    {
      id: "source-egov-digital-scta-interim-comment-20260916",
      title: "『デジタル取引・特定商取引法等検討会中間取りまとめ』に関する意見募集について",
      type: "government_material",
      typeLabel: "一次資料・e-Gov／中間取りまとめ意見募集",
      authority: "消費者庁",
      publishedAt: "2026-09-16",
      url: "https://public-comment.e-gov.go.jp/pcm/detail?CLASSNAME=PCMMSTDETAIL&Mode=0&id=235060029",
      importance: "高",
      whyImportant: "デジタル取引・特商法等の中間取りまとめが確定法制ではなく意見募集段階にあることと、募集期間が2026年9月16日から10月31日までであることを公式に確認できる。",
      topics: ["digital-transactions-scta-review-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
