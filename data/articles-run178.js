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
      id: "article-caa-consumer-contract-interim-final-2026",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-16",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・中間取りまとめ",
      status: "adopted",
      summary: "2026年の消費者契約法見直しについて、9回の検討会審議を踏まえて取りまとめられた中間取りまとめ。消費者の多様な脆弱性への配慮と契約拘束力からの解放、継続的契約における解約妨害の禁止・合理的な離脱方法・情報提供、更新・変更・死亡時対応、解約料の説明強化等の方向性を示す。現時点では法案・成立法ではなく、今後さらに制度具体化が必要な政策検討段階の資料である。",
      whyImportant: [
        "8月31日の中間取りまとめ（案）から、9月9日の第9回検討会を経た成案へ進んだことを公式資料で確認できる",
        "解約妨害について、不実告知、申入れ拒否・不当遅延、欺罔・威迫、不当な環境設計、解約後債務の不当な拒否・遅延等を対象としつつ、新たな一般的解約権を直ちに設けない方向を確認できる",
        "解約料では消費者契約法9条1項1号の一律見直しを今回は行わず、複数プランや算定根拠に関する説明・情報提供を強化する方向が明確になった",
        "サブスクリプション等では解約だけでなく、更新、契約変更、消費者死亡時の対応手順まで一連の運用として点検する必要があることが分かる"
      ],
      audience: ["企業法務", "消費者向けサービス担当", "EC・サブスクリプション運営", "カスタマーサポート"],
      audienceReason: "未成立の検討方向を確定ルールと誤認せず、将来の法改正に備えて利用規約、解約導線、更新・変更通知、解約料説明、死亡時対応のどこを先に棚卸しすべきか判断するため。",
      categories: ["契約", "消費者法・表示", "AI・デジタル"],
      relatedTopics: ["consumer-contract-law-review-2026"],
      relatedIssues: [
        "consumer-contract-vulnerability-release",
        "consumer-contract-cancellation-obstruction",
        "consumer-contract-cancellation-fees",
        "consumer-contract-ec-standard-terms"
      ],
      primarySourceIds: ["source-caa-consumer-contract-interim-final-2026", "source-consumer-contract-act-current"],
      reformEventId: "consumer-contract-law-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-caa-consumer-contract-interim-final-2026"],
      legacyReformInference: false,
      whatChanged: "中間取りまとめ案から成案へ更新／消費者契約法の2026年見直しについて、解約妨害・更新・変更・死亡時対応・解約料説明強化・脆弱性対応の検討方向を9月10日公表の公式中間取りまとめで確認した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
