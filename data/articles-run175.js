(() => {
  const additions = [
    {
      id: "article-jftc-toridoll-deduction-2026",
      title: "株式会社トリドールホールディングスに対する勧告について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-16",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      sourceType: "primary",
      sourceLabel: "一次資料・取適法／勧告（代金の減額）",
      status: "adopted",
      summary: "トリドールホールディングスが、卸売業者を介して食品の製造を委託していた受注者37名について、委託代金から「システム利用料」名目で例外なく一律1.1％を減額したとして、公正取引委員会が2026年9月9日に勧告した事案。2025年12月までの製造委託等には改正前の下請法、2026年1月以降の委託には取適法が適用され、減額分に加えて取適法6条2項に基づく遅延利息の支払も求められた。",
      whyImportant: [
        "システム利用料・事務手数料などの名目でも、委託代金からの一律控除が減額禁止の問題となることを具体的な執行事例で確認できる",
        "卸売業者を介する商流でも、委託主体と取適法の適用関係を取引実態に即して確認する必要があることが分かる",
        "旧下請法から取適法へまたがる継続取引について、2025年12月までと2026年1月以降で適用法を分ける経過措置を同一事案から確認できる",
        "取適法下の減額については減額分だけでなく遅延利息も勧告対象となり得るため、違反把握後の返金・利息計算・再発防止の実務に直結する"
      ],
      audience: ["企業法務", "購買・調達", "経理・支払担当", "コンプライアンス"],
      audienceReason: "仲介業者を挟む委託構造や、システム利用料・手数料等を代金から控除する支払運用を、契約と実フローの両面から点検する材料になるため。",
      categories: ["契約", "独占禁止法・競争法", "危機管理・コンプライアンス"],
      relatedTopics: ["fair-subcontract-transactions"],
      relatedIssues: ["toriteki-intermediary-deduction", "toriteki-enforcement"],
      primarySourceIds: ["source-jftc-toridoll-deduction-2026"],
      legacyReformInference: false,
      whatChanged: "取適法テーマを更新／仲介・卸売業者を介する委託構造と、システム利用料等の代金控除を独立した点検論点として追加した。"
    }
  ];
  const existing = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id).filter(Boolean));
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(additions.filter((item) => !existing.has(item.id)));
})();
