(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-businesslawyers-smartphone-competition-act-2025",
      title: "スマホ競争促進法とは？アプリ提供者への影響を弁護士が解説",
      publisher: "BUSINESS LAWYERS",
      author: "杉浦 健二（STORIA法律事務所）",
      publishedAt: "2025-01-09",
      collectedAt: "2026-09-10",
      url: "https://www.businesslawyers.jp/articles/1422",
      sourceType: "secondary",
      sourceLabel: "弁護士・実務解説",
      status: "adopted",
      summary: "スマホソフトウェア競争促進法について、規律対象となるOS・アプリストア・ブラウザ・検索エンジン、指定事業者に対する禁止事項・遵守事項、アプリ提供者側に生じる決済・外部誘導・第三者アプリストア・OS機能利用等の変化、違反時の措置までを体系的に整理した施行前解説。執筆時点では指定・下位法令等が未確定だったため、現在の指定状況・施行日・指針等は公正取引委員会の現行一次資料で読み替える必要がある。",
      whyImportant: [
        "法の条文構造を、アプリ提供者の決済・配布・外部誘導・OS機能利用など具体的な事業場面へ対応付けている",
        "透明化法や独占禁止法との役割分担を含め、なぜ事前規制型のスマホ法が導入されたかを理解しやすい",
        "施行前資料であるため現行ルールの根拠にはせず、現在の公取委指針・FAQ・遵守報告と比較して制度設計の背景を読む資料として使える"
      ],
      audience: ["企業法務", "アプリ・デジタルサービス担当", "事業開発", "独占禁止法・競争法担当"],
      audienceReason: "スマホ法の各禁止・遵守事項が、アプリ提供者の契約・決済・配布・プロダクト設計にどう影響するかを全体像から把握するため。",
      categories: ["AI・デジタル", "契約"],
      relatedTopics: ["smartphone-software-competition-act"],
      relatedIssues: ["smartphone-law-designated-providers", "smartphone-law-developer-access", "smartphone-law-search-self-preferencing"],
      primarySourceIds: ["source-jftc-smartphone-law-guidelines"],
      reformEventId: "smartphone-software-competition-act-2024",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-jftc-smartphone-law-guidelines"],
      whatChanged: "一次資料だけだったスマホ法テーマに、アプリ提供者の事業実務へ禁止・遵守事項を対応付けた基礎的な二次解説をバックフィルした。現行の法的整理・段階は変更していない。"
    },
    {
      id: "article-businesslawyers-treatment-work-guideline-2026",
      title: "2026年2月に押さえておくべき企業法務の最新動向―治療と就業の両立支援指針",
      publisher: "BUSINESS LAWYERS",
      author: "河尻 拓之・菅原 裕人（治療と就業の両立支援部分）",
      publishedAt: "2026-02-10",
      collectedAt: "2026-09-10",
      url: "https://www.businesslawyers.jp/articles/1522",
      sourceType: "secondary",
      sourceLabel: "弁護士・実務解説",
      status: "adopted",
      summary: "2026年4月1日の治療と就業の両立支援努力義務化を前に、当時の指針案を基に、安全・健康確保、本人申出、個人情報保護、関係者連携、基本方針・研修・相談窓口・制度整備、主治医・産業医等の意見取得、就業継続可否の判断や休業・再発時対応までを一覧化した実務解説。記事は指針案段階のため、現在の根拠・具体的運用は2026年2月10日告示の最終指針と厚労省資料を優先して確認する。",
      whyImportant: [
        "努力義務を『配慮する』という抽象論で終わらせず、社内方針・研修・相談窓口・制度・医療連携という準備項目へ分解している",
        "本人申出から主治医・産業医等の意見取得、就業継続判断、支援措置、休業・再発時対応まで人事運用の流れを俯瞰できる",
        "指針案時点の二次資料であることを明示した上で、最終指針の一次資料と突合しながら社内制度の棚卸しに使える"
      ],
      audience: ["人事・労務", "企業法務", "安全衛生・産業保健担当", "管理職"],
      audienceReason: "治療と就業の両立支援を、努力義務の理解だけでなく相談受付・医療連携・勤務制度・健康情報管理まで具体的な社内運用へ落とすため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["treatment-work-support"],
      relatedIssues: ["treatment-work-effort-duty", "treatment-work-environment", "treatment-work-individual-process", "treatment-work-health-information"],
      primarySourceIds: ["source-mhlw-labor-policy-amendment-2025-treatment-work", "source-mhlw-treatment-work-guideline-2026"],
      reformEventId: "treatment-work-support-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-labor-policy-amendment-2025-treatment-work"],
      whatChanged: "一次資料だけだった治療と就業の両立支援テーマに、社内体制・相談・医療連携・個別措置を一連の運用として読む二次解説をバックフィルした。現行の法的整理・段階は変更していない。"
    }
  ]);
})();