(() => {
  const topicSlug = "insurance-agency-governance-comparison-sales-2025";
  const sourceStructural = "source-fsa-nonlife-structural-report-2024";
  const sourceWG = "source-fsa-nonlife-wg-report-2024";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceStructural,
      title: "損害保険業の構造的課題と競争のあり方に関する有識者会議報告書",
      type: "report",
      typeLabel: "一次資料・金融庁／損害保険業の構造改革",
      authority: "金融庁",
      publishedAt: "2024-06-25",
      url: "https://www.fsa.go.jp/news/r5/singi/20240625.html",
      importance: "最高",
      whyImportant: "保険金不正請求事案や保険料調整行為等を踏まえ、顧客本位の業務運営と健全な競争環境を再構築するため、保険会社・代理店・企業の関係や企業内代理店等を含む構造的課題を整理した、2025年以降の制度改革の出発点となる公式報告書。",
      topics: [topicSlug]
    },
    {
      id: sourceWG,
      title: "金融審議会『損害保険業等に関する制度等ワーキング・グループ』報告書",
      type: "report",
      typeLabel: "一次資料・金融庁／損害保険制度WG報告書",
      authority: "金融庁 金融審議会",
      publishedAt: "2024-12-25",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/tosin/20241225.html",
      importance: "最高",
      whyImportant: "大規模乗合代理店、比較推奨販売、保険会社による代理店管理、過度な便宜供与、企業内代理店、保険仲立人等について制度改正の方向性を整理し、2025年保険業法改正とその後の監督指針改正の直接の基礎となった報告書。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    return {
      ...topic,
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceStructural, sourceWG])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-fsa-nonlife-structural-report-2024",
      title: "損害保険業の構造的課題と競争のあり方に関する有識者会議報告書",
      publisher: "金融庁",
      author: "損害保険業の構造的課題と競争のあり方に関する有識者会議",
      publishedAt: "2024-06-25",
      collectedAt: "2026-09-13",
      url: "https://www.fsa.go.jp/news/r5/singi/20240625.html",
      sourceType: "primary",
      sourceLabel: "一次資料・損害保険業の構造改革",
      status: "adopted",
      summary: "保険金不正請求事案と保険料調整行為等を踏まえ、損害保険会社・代理店・企業の関係に潜む構造的課題を洗い出し、顧客本位の業務運営と健全な競争環境の実現に向けた制度・監督上の方向性を整理した金融庁の基礎報告書。",
      whyImportant: [
        "2025年保険業法改正と2026年以降の監督指針改正が、どの構造問題を解こうとしているかを遡って確認できる",
        "企業内代理店や代理店・保険会社の関係を、個別の募集ルールではなく競争環境と顧客本位の問題として捉えられる",
        "現在の確定ルールと将来の追加見直しを、一連の改革として読む基準点になる"
      ],
      audience: ["損害保険会社法務・コンプライアンス", "保険代理店経営・法務", "企業法務", "内部監査", "リスク管理"],
      audienceReason: "現在の保険業法・監督指針改正の政策背景と、なぜ代理店ガバナンスや競争政策まで見直されているかを把握するため。",
      categories: ["契約", "危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-large-multi-agency-governance-2026", "insurance-agency-conflict-claims-management-2026", "insurance-excessive-benefits-2026"],
      primarySourceIds: [sourceStructural],
      whatChanged: "バックフィル／2025年以降の損害保険業改革の政策的な出発点を一次資料として追加した。"
    },
    {
      id: "article-fsa-nonlife-wg-report-2024",
      title: "金融審議会『損害保険業等に関する制度等ワーキング・グループ』報告書",
      publisher: "金融庁",
      author: "金融審議会 損害保険業等に関する制度等ワーキング・グループ",
      publishedAt: "2024-12-25",
      collectedAt: "2026-09-13",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/tosin/20241225.html",
      sourceType: "primary",
      sourceLabel: "一次資料・損害保険制度WG報告書",
      status: "adopted",
      summary: "有識者会議の問題提起を受け、大規模乗合代理店の体制整備、比較推奨販売、保険会社による代理店管理、過度な便宜供与、企業内代理店、保険仲立人等について具体的な制度見直しの方向性をまとめた金融審議会WG報告書。",
      whyImportant: [
        "2025年保険業法改正の制度設計がどの提言から生まれたかを確認できる",
        "比較推奨販売・企業内代理店・便宜供与・保険仲立人を同じ改革パッケージとして把握できる",
        "成立法に入った事項と、その後も監督指針等で検討が続く事項を区別する手掛かりになる"
      ],
      audience: ["損害保険会社法務・コンプライアンス", "保険代理店経営・法務", "企業法務", "保険募集管理担当"],
      audienceReason: "2025年改正保険業法と2026年のフォローアップ見直しの制度形成過程を確認するため。",
      categories: ["契約", "危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-large-multi-agency-governance-2026", "insurance-comparison-recommendation-2028"],
      primarySourceIds: [sourceWG],
      whatChanged: "バックフィル／2025年改正保険業法と比較推奨販売・企業内代理店見直しの制度設計をつなぐWG報告書を追加した。"
    },
    {
      id: "article-amt-nonlife-wg-practice-2025",
      title: "【金融法務】金融審議会『損害保険業等に関する制度等ワーキング・グループ』報告書の概要―保険募集実務への影響―",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "村井 惠悟・津江 紘輝・高野 聖也・出張 智己・福田 直邦",
      publishedAt: "2025-01-31",
      collectedAt: "2026-09-13",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20250131001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／損害保険業改革・保険募集",
      status: "adopted",
      summary: "金融審議会WG報告書を、顧客本位の業務運営、大規模乗合代理店の体制整備、比較推奨販売、保険会社による代理店管理、健全な競争環境、企業内代理店、保険仲立人等の観点から整理し、保険募集実務への影響を解説する。",
      whyImportant: [
        "一次資料の制度論を、保険募集・代理店管理の実務変更点へ翻訳している",
        "企業内代理店・比較推奨販売・大規模乗合代理店を同じ改革パッケージとして俯瞰できる",
        "改正法成立前の時点で何が問題視され、どの実務が変わると整理されていたかを後から比較できる"
      ],
      audience: ["保険代理店経営・法務", "損害保険会社法務・コンプライアンス", "企業法務", "保険募集管理担当"],
      audienceReason: "WG報告書の提言を、募集・代理店管理の業務フローへ落とす際の実務的な読み方を得るため。",
      categories: ["契約", "危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-large-multi-agency-governance-2026", "insurance-comparison-recommendation-2028"],
      primarySourceIds: [sourceWG],
      whatChanged: "バックフィル／WG報告書の制度提言を保険募集実務へ落とす高品質な法律事務所解説を追加した。"
    },
    {
      id: "article-nozomi-insurance-law-practice-2026",
      title: "改正保険業法（2026年6月1日施行）の概説～保険代理店が留意すべき事項（その1）",
      publisher: "のぞみ総合法律事務所",
      author: "吉田 桂公",
      publishedAt: "2026-06-29",
      collectedAt: "2026-09-13",
      url: "https://www.nozomisogo.gr.jp/newsletter/13621",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／改正保険業法・代理店実務",
      status: "adopted",
      summary: "2026年6月1日に施行された改正保険業法について、2026年3月30日の施行規則・監督指針とパブリックコメント結果を踏まえ、特別利益の提供規制や特定大規模乗合保険募集人の体制整備等を代理店実務の観点から解説する。",
      whyImportant: [
        "施行済みの改正保険業法を、代理店が実際に確認すべき行為規制・体制整備へ落として読める",
        "法令・監督指針・パブリックコメントを横断し、現場での対応ポイントを確認できる",
        "2026年9月の追加の監督指針案と、すでに2026年6月から義務化されている事項を切り分けやすい"
      ],
      audience: ["保険代理店経営・法務", "損害保険会社法務・コンプライアンス", "内部監査", "保険募集管理担当"],
      audienceReason: "2026年6月施行後の代理店実務を点検し、規程だけでなく実際の運用上の未対応事項を洗い出すため。",
      categories: ["契約", "危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-large-multi-agency-governance-2026", "insurance-excessive-benefits-2026"],
      primarySourceIds: ["source-fsa-insurance-business-act-2025-law", "source-fsa-insurance-business-act-2026-final-rules"],
      reformEventId: "insurance-business-act-2025-amendment",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-fsa-insurance-business-act-2026-final-rules"],
      whatChanged: "バックフィル／施行済みの改正保険業法を代理店実務へ落とす解説を追加した。"
    }
  ]);
})();
