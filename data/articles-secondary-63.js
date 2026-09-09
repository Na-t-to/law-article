(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-tmi-customer-harassment-practice-2026",
      title: "企業におけるカスタマーハラスメント対策について",
      publisher: "TMI総合法律事務所",
      author: "近藤圭介・松本 梓・梶原大暉",
      publishedAt: "2026-04-02",
      collectedAt: "2026-09-10",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18180.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "2026年10月1日のカスタマーハラスメント防止措置義務化に向け、厚生労働省の最終指針を基礎に、該当性判断、方針・相談体制、管理者へのエスカレーション、録音・録画、対応打切り、警察通報、自社従業員によるカスハラへの協力、望ましい措置までを企業運用へ落とした解説。NHKサービスセンター事件も取り上げ、事業主の安全配慮義務との関係を具体化している。",
      whyImportant: [
        "最終指針の列挙事項を、現場担当者を一人で対応させないこと、管理者への引継ぎ、記録化、対応終了の判断など具体的な運用へ落としている",
        "正当な苦情とカスハラの境界だけでなく、契約内容を著しく超える要求や不当な減額要求などBtoBでも起こり得る場面を整理している",
        "裁判例を通じて、相談窓口の設置だけではなく、転送・切断権限や上司の介入など実際の保護措置が安全配慮義務の評価に関係することを確認できる"
      ],
      audience: ["人事・労務", "企業法務", "コンプライアンス", "顧客対応・現場責任者"],
      audienceReason: "施行前に、法定措置を基本方針・相談窓口・現場権限・記録・悪質事案対応まで一続きの社内フローとして実装するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["customer-harassment"],
      relatedIssues: ["ch-definition", "ch-response"],
      primarySourceIds: ["source-customer-harassment-guideline-2026", "source-customer-harassment-practical-2026"],
      reformEventId: "customer-harassment-obligation-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-customer-harassment-guideline-2026"],
      whatChanged: "一次資料中心だったカスタマーハラスメント対策テーマに、最終指針を現場の権限設計・記録・悪質事案対応・安全配慮義務まで落とす代表的な実務解説を追加した。"
    }
  ]);
})();