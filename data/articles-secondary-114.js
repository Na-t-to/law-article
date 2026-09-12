(() => {
  const topicSlug = "enterprise-value-security-business-lending";
  const reformEventId = "business-lending-promotion-act-2024";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id)));
  };

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-oneasia-enterprise-value-security-2026",
      title: "日本：企業価値担保権について",
      publisher: "One Asia Lawyers",
      author: "One Asia Lawyers 東京オフィス",
      publishedAt: "2026-04-10",
      collectedAt: "2026-09-13",
      url: "https://oneasia.legal/16927",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／企業価値担保権・資金調達／取引先実務",
      status: "adopted",
      summary: "2026年5月25日の施行直前に、企業価値担保権の基本構造を、資金調達側のコベナンツ・情報開示・金融機関による継続モニタリングと、実行時の事業譲渡・取引先への影響まで一体で整理した実務解説。担保設定により金融機関が直ちに経営権を取得するわけではないこと、事業譲渡時に契約上の地位が自動承継されず原則として取引先の個別同意が必要なこと、一般債権者側でも期限の利益喪失・情報提供義務・解除権等の契約条項を点検する意義を示している。",
      whyImportant: [
        "企業価値担保権を設定する借り手側について、重要資産処分・新規借入・組織再編等のコベナンツと、財務情報・事業計画の継続的な開示を具体的な実務課題として確認できる",
        "担保権設定だけで金融機関が経営権や労働条件決定権を取得するわけではないという制度上の境界を確認できる",
        "実行時の事業譲渡では取引先との契約上の地位が当然には承継されないため、取引継続・同意・解除等を契約実務から考えられる",
        "資金調達企業だけでなく一般の取引先側でも、与信管理・情報提供・期限の利益喪失・解除条項の見直しが必要になり得ることを整理している"
      ],
      audience: ["企業法務", "財務・資金調達担当", "金融機関法務・審査", "債権管理・与信管理担当", "契約担当"],
      audienceReason: "企業価値担保権を利用する借り手・金融機関だけでなく、その企業と取引する一般債権者まで含めて、契約・モニタリング・実行時対応を点検するため。",
      categories: ["契約", "事業再生・金融", "M&A"],
      relatedTopics: [topicSlug],
      relatedIssues: ["enterprise-value-security-contract-covenants", "enterprise-value-security-monitoring", "enterprise-value-security-creditors-enforcement"],
      primarySourceIds: ["source-business-lending-promotion-act", "source-fsa-enterprise-value-security-final-rules-2025", "source-fsa-enterprise-value-security-templates-2026", "source-fsa-business-lending-basic-thinking-2026"],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-enterprise-value-security-final-rules-2025"],
      whatChanged: "バックフィル／企業価値担保権を、借り手のコベナンツ・情報開示と取引先の与信・契約管理まで含む実務として補強した。"
    },
    {
      id: "article-not-project-finance-enterprise-value-security-2024",
      title: "国内プロジェクトファイナンスにおけるセキュリティ・パッケージの実務的機能と企業価値担保権活用についての一考察",
      publisher: "長島・大野・常松法律事務所",
      author: "村治能宗",
      publishedAt: "2024-12-23",
      collectedAt: "2026-09-13",
      url: "https://www.nagashima.com/publications/publication20241223-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／企業価値担保権・プロジェクトファイナンス",
      status: "adopted",
      summary: "国内プロジェクトファイナンスの既存セキュリティ・パッケージが果たす実務的機能を分解し、企業価値担保権でどこまで代替・合理化できるかを検討した実務解説。全資産を一体として担保化できる利点がある一方、事業譲渡時の契約承継には相手方の承諾が必要であるためダイレクト・アグリーメント等の実務がなお重要となり得ること、個別資産への強制執行や通常の事業活動による処分への防御という観点では従来担保や重複担保を残す合理性があり得ることを論じる。",
      whyImportant: [
        "企業価値担保権を『全資産を一つの担保にできる』という制度説明だけでなく、従来のセキュリティ・パッケージが持つ能動的・防御的機能との比較で評価できる",
        "企業価値担保権の実行が事業譲渡で行われても契約関係は自動承継されないため、プロジェクト契約の相手方から事前承諾等を取得する実務が残り得ることを具体化している",
        "第三者による個別資産への強制執行や通常の事業活動の範囲内での処分に対する保護では、従来型の個別担保を併用する意味があり得ることを示している",
        "新制度を導入すれば既存担保実務を全面的に置き換えられるという単純化を避け、案件ごとの担保パッケージ設計に使える"
      ],
      audience: ["金融機関法務・審査", "プロジェクトファイナンス担当", "企業法務", "財務・資金調達担当", "M&A・事業再生担当"],
      audienceReason: "企業価値担保権を既存の個別担保・ダイレクトアグリーメント等とどう組み合わせるかを、プロジェクトファイナンスの実務機能から検討するため。",
      categories: ["契約", "事業再生・金融", "M&A"],
      relatedTopics: [topicSlug],
      relatedIssues: ["enterprise-value-security-contract-covenants", "enterprise-value-security-creditors-enforcement", "enterprise-value-security-use-cases"],
      primarySourceIds: ["source-business-lending-promotion-act"],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-business-lending-promotion-act"],
      whatChanged: "バックフィル／プロジェクトファイナンスで企業価値担保権が従来の担保パッケージを代替できる範囲と、なお個別担保・契約承諾等が必要になり得る限界を補強した。"
    }
  ]);
})();
