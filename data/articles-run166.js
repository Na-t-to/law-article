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
      id: "article-jsda-startup-growth-capital-report-2025",
      title: "スタートアップ企業等への成長資金供給等に関する懇談会 報告書",
      publisher: "日本証券業協会",
      author: "日本証券業協会・金融庁",
      publishedAt: "2025-09-05",
      collectedAt: "2026-09-16",
      url: "https://www.jsda.or.jp/about/kaigi/chousa/startup/file/startup_houkokusho_0905.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料／スタートアップ成長資金・非上場市場",
      status: "adopted",
      summary: "非上場株式の発行・流通市場を活性化し、スタートアップへの成長資金供給を増やすための市場設計を体系化した報告書。市場仲介者が関与する資金調達額を2027年度までに1,800億円とするKGIを設定し、J-Ships、セカンダリー市場、SPV・投資信託、投資者区分、原則勧誘禁止の見直し等を検討課題として示した。",
      whyImportant: [
        "2026年の日証協ルール整備の出発点となった政策・市場構造を一つの資料で把握できる",
        "非上場市場の活性化を、投資者保護を前提とするプライマリー・セカンダリー双方の制度整備として理解できる",
        "1,800億円KGIは法的義務ではなく、市場仲介者を通じた資金供給を測る政策上の評価指標だと切り分けられる"
      ],
      audience: ["スタートアップ法務", "資本政策", "証券会社", "VC・CVC", "経営企画"],
      audienceReason: "非上場段階の資金調達・株式流通について、現在の制度改正がどの課題認識と政策目標から生まれているかを把握するため。",
      categories: ["金融商品取引・開示・IR"],
      relatedTopics: ["startup-growth-capital-unlisted-market"],
      relatedIssues: ["startup-growth-market-policy-2025", "startup-growth-jsda-qualified-investors-2026"],
      primarySourceIds: ["source-jsda-startup-growth-capital-report-2025"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／非上場株式のプライマリー・セカンダリー市場、投資者層、J-Ships等を一つの成長資金供給アーキテクチャとして整理した。"
    },
    {
      id: "article-jsda-unlisted-securities-rules-2026",
      title: "特定投資家等に対する店頭有価証券の取引に関する規則の制定等について",
      publisher: "日本証券業協会",
      author: "日本証券業協会",
      publishedAt: "2026-06-16",
      collectedAt: "2026-09-16",
      url: "https://www.jsda.or.jp/shijyo/seido/jishukisei/web-handbook/105_kabushiki/index.html",
      sourceType: "primary",
      sourceLabel: "一次資料／非上場株式・特定投資家／準特定投資家",
      status: "adopted",
      summary: "2025年9月の成長資金供給報告書を受け、日本証券業協会が2026年6月16日に施行した非上場株式取引の自主規制。特定投資家・準特定投資家向けの新たな勧誘・取引制度を設け、銘柄検証・審査、情報提供、顧客範囲確認、社内規則等を求めるとともに、非上場株式の原則勧誘禁止を見直した。",
      whyImportant: [
        "2025年報告書の提言が2026年6月16日に実際の自主規制ルールへ移ったことを確認できる",
        "準特定投資家を含む顧客範囲だけでなく、銘柄審査・発行者情報・説明・社内規則等の実務要件を追える",
        "『非上場株式の勧誘解禁』と単純化せず、利用可能な制度と投資者保護要件をセットで把握できる"
      ],
      audience: ["証券会社", "スタートアップ法務", "資本政策", "VC・CVC", "コンプライアンス"],
      audienceReason: "非上場株式の勧誘・取引制度を利用する際の投資者区分、銘柄審査、情報提供、社内手続を現行ルールに合わせるため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["startup-growth-capital-unlisted-market"],
      relatedIssues: ["startup-growth-jsda-qualified-investors-2026"],
      primarySourceIds: ["source-jsda-unlisted-securities-rules-2026", "source-jsda-startup-growth-capital-report-2025"],
      reformEventId: "jsda-unlisted-securities-rules-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-jsda-unlisted-securities-rules-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／特定投資家・準特定投資家向けの非上場株式取引と、原則勧誘禁止見直し後の銘柄審査・情報提供・顧客確認を現行ルールとして整理した。"
    },
    {
      id: "article-not-fiea-investment-management-nonlisted-intermediary-2025",
      title: "資産運用の高度化・多様化に係る令和6年金商法改正の政令・内閣府令",
      publisher: "長島・大野・常松法律事務所",
      author: "長島・大野・常松法律事務所",
      publishedAt: "2025-04-25",
      collectedAt: "2026-09-16",
      url: "https://www.nagashima.com/publications/publication20250425-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所解説／資産運用・非上場有価証券仲介",
      status: "adopted",
      summary: "2024年金商法改正のうち、投資運用関係業務受託業、投資運用業の分業・参入規制、非上場有価証券特例仲介等業務を、最終化された政令・内閣府令・監督指針に沿って整理する実務解説。特例仲介業の対象商品・顧客範囲・金銭預託等の具体的な境界まで踏み込んでいる。",
      whyImportant: [
        "一次資料の制度名だけでは分かりにくい、非上場有価証券特例仲介等業務の対象商品・顧客・行為の範囲を具体化している",
        "一般投資家が関与する場合の除外や金銭預託期間など、登録・業務設計に直結する論点を確認できる",
        "投資運用業の分業と非上場証券仲介を同じ2024年改正パッケージとして把握できる"
      ],
      audience: ["金融法務", "証券会社", "スタートアップ資本政策", "VC・ファンド", "コンプライアンス"],
      audienceReason: "新規参入・業務設計時に、非上場有価証券特例仲介等業務の具体的な適用範囲と実務上の注意点を一次資料と対応させて理解するため。",
      categories: ["金融商品取引・開示・IR"],
      relatedTopics: ["startup-growth-capital-unlisted-market"],
      relatedIssues: ["startup-growth-nonlisted-intermediary-2025"],
      primarySourceIds: ["source-fsa-fiea-asset-management-nonlisted-intermediary-2025"],
      reformEventId: "fiea-asset-management-nonlisted-intermediary-2024-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-fiea-asset-management-nonlisted-intermediary-2025"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／非上場有価証券特例仲介等業務を、対象商品・顧客・取引・預託の境界まで実務的に補完した。"
    },
    {
      id: "article-fsa-growth-finance-ordinance-2026",
      title: "「金融商品取引法第二条に規定する定義に関する内閣府令の一部を改正する内閣府令」等の公布及びパブリックコメントの結果等について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260915/20260915.html",
      sourceType: "primary",
      sourceLabel: "一次資料／海外VF・デジタル社債等の2026年内閣府令改正",
      status: "adopted",
      summary: "金融庁が2026年9月15日に公布した内閣府令改正。国内VCから海外VCへ出資する場合の外国ファンド特例の要件緩和と、発行会社と同視できるグループ会社によるデジタル社債等の勧誘規制緩和を9月16日から施行し、券面不発行の預託証券に表示されるべき権利の有価証券指定等を10月5日から施行する。",
      whyImportant: [
        "国内スタートアップの海外展開を促す政策の一環として、国内VCと海外VCの連携に関する投資運用規制が2026年9月16日に実際に緩和された",
        "パブリックコメント案ではなく最終内閣府令であり、施行日も9月16日・10月5日に確定している",
        "同じ改正パッケージに複数の制度変更があるため、外国ファンド特例とデジタル社債・預託証券の改正を混同せず適用日を分けて管理できる"
      ],
      audience: ["VC・ファンド", "スタートアップ法務", "金融法務", "証券会社", "海外事業"],
      audienceReason: "国内VCによる海外VCへの出資スキームについて、改正後の外国ファンド特例が利用できるかを2026年9月16日以降のルールで判断するため。",
      categories: ["金融商品取引・開示・IR", "国際取引"],
      relatedTopics: ["startup-growth-capital-unlisted-market"],
      relatedIssues: ["startup-growth-overseas-vf-2026"],
      primarySourceIds: ["source-fsa-growth-finance-ordinance-2026"],
      reformEventId: "fiea-growth-finance-ordinances-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-growth-finance-ordinance-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2026年9月16日施行の外国ファンド特例緩和を、非上場・成長資金市場の海外VC連携ルートとして追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
