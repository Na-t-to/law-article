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

  const topicSlug = "digital-commerce-specified-transactions-2026";
  const additions = [
    {
      id: "article-caa-digital-transaction-interim-20260910",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "デジタル取引・特定商取引法等検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-16",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・特定商取引法／デジタル取引見直し",
      status: "adopted",
      summary: "デジタル取引の拡大を踏まえ、チャット等による勧誘、ダークパターンを含む表示・UI、最終確認画面・契約後の電子書面、解約導線、デジタルプラットフォーム等について、特定商取引法等の見直し方向を整理した2026年9月10日の中間取りまとめ。現行法の適用と今後の制度具体化を分けて読む必要がある。",
      whyImportant: [
        "SNSのDM・電子メール・SMS等を用いた双方向勧誘を、通信販売だけでなく電話勧誘販売に近い規律で捉える可能性を一次資料で確認できる",
        "広告文言だけでなく、料金・契約期間の見せ方、在庫・タイムセール表示、反復的操作、画面遷移などUI全体を規律対象として検討する方向が示されている",
        "最終確認画面、契約後の確認情報、解約導線まで含む取引プロセス全体の法務レビューへ実務の射程が広がる可能性を把握できる"
      ],
      audience: ["企業法務", "消費者法・表示担当", "EC・デジタルサービス事業者", "マーケティング", "プロダクト・UI/UX", "カスタマーサポート"],
      audienceReason: "今後の特定商取引法等の見直しが、広告審査だけでなく営業チャネル、UI設計、契約確認、解約導線へ及ぶ可能性を早期に把握するため。",
      categories: ["消費者法・表示", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["digital-commerce-chat-solicitation", "digital-commerce-dark-pattern-ui", "digital-commerce-contract-confirmation", "digital-commerce-cancellation-flow"],
      primarySourceIds: ["source-caa-digital-transaction-interim-20260910", "source-caa-digital-consumer-survey-20260427"],
      reformEventId: "specified-commercial-transactions-digital-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-caa-digital-transaction-interim-20260910"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／デジタル取引の勧誘・表示UI・契約確認・解約を一連の特定商取引法等見直しとして整理した。"
    },
    {
      id: "article-caa-digital-consumer-survey-20260427",
      title: "特定商取引・デジタル消費取引の実態に関する調査報告書",
      publisher: "消費者庁",
      author: "消費者庁（調査受託：三菱UFJリサーチ＆コンサルティング）",
      publishedAt: "2026-04-27",
      collectedAt: "2026-09-16",
      url: "https://www.caa.go.jp/notice/assets/consumer_transaction_cms201_260427_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・デジタル消費取引実態調査",
      status: "adopted",
      summary: "ECサイトの契約成立時点、注文確認メール、返品・返金、定期購入・サブスクリプションの解約方法を目視調査し、米国・EU等の不公正取引・ダークパターン対応も比較した基礎調査。2026年のデジタル取引法制見直しが、表示だけでなく契約・解約プロセスを対象にする背景を確認できる。",
      whyImportant: [
        "ECサイトごとに契約成立時点や契約確認情報の扱いが分かれていることを実査で確認できる",
        "返品・返金の受付方法やサブスク解約手段の実態を、制度見直しの背景となる運用データとして読める",
        "海外の不公正取引・ダークパターン規制との比較から、日本で包括規律と具体例を組み合わせる検討の背景を把握できる"
      ],
      audience: ["企業法務", "消費者法・表示担当", "EC運営", "プロダクト・UI/UX", "カスタマーサポート"],
      audienceReason: "制度改正の結論だけでなく、どのEC実務が問題意識の出発点になっているかを確認し、自社導線の棚卸しに使うため。",
      categories: ["消費者法・表示", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["digital-commerce-dark-pattern-ui", "digital-commerce-contract-confirmation", "digital-commerce-cancellation-flow"],
      primarySourceIds: ["source-caa-digital-consumer-survey-20260427"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2026年見直しの前提となるEC契約・返品・解約とダークパターン規制の実態調査をバックフィルした。"
    },
    {
      id: "article-spring-dark-pattern-practice-20260909",
      title: "ダークパターンへの規制強化の動き―企業に求められるECサイト・UI設計の見直し",
      publisher: "スプリング法律事務所",
      author: "石井林太郎",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-16",
      url: "https://spring-partners.com/topics/3538/",
      sourceType: "secondary",
      sourceLabel: "実務解説・消費者法／EC・UI設計",
      status: "adopted",
      summary: "2026年9月の中間取りまとめ案を踏まえ、ダークパターン規律をEC・アプリの実務へ落とした解説。価格・在庫・タイムセール、定期購入・自動更新、最終確認画面、アップセル、注文後メール、解約・退会導線までを点検対象として挙げ、マーケティング・Web制作中心だったUI設計が法務・コンプライアンスのレビュー対象になり得る点を整理する。",
      whyImportant: [
        "一次資料の抽象的な見直し方向を、企業が実際に点検すべきEC画面・導線へ具体化している",
        "チャット勧誘、最終確認画面、解約導線を別々の制度論ではなく、顧客の取引体験全体として監査する視点を得られる",
        "通常の営業活動を一律に抑制するのではなく、誤認惹起・威迫・過度な離脱困難性に焦点を置くという実務上の線引きを示している"
      ],
      audience: ["企業法務", "消費者法・表示担当", "マーケティング", "EC運営", "プロダクト・UI/UX", "Web制作"],
      audienceReason: "法改正の方向を、自社サイト・アプリの画面レビュー項目と部門間チェック体制へ落とすため。",
      categories: ["消費者法・表示", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["digital-commerce-chat-solicitation", "digital-commerce-dark-pattern-ui", "digital-commerce-contract-confirmation", "digital-commerce-cancellation-flow"],
      primarySourceIds: ["source-caa-digital-transaction-interim-20260910", "source-caa-digital-consumer-survey-20260427"],
      reformEventId: "specified-commercial-transactions-digital-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-caa-digital-transaction-interim-20260910"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／中間取りまとめの方向を、EC・アプリのUI、契約確認、解約導線の実務点検へ落とす解説を採用した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();