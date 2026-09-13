(() => {
  const topicSlug = "aml-kyc-criminal-proceeds";
  const reformEventId = "aml-account-remittance-2026-amendment";
  const sourceAmendment = "source-npa-aml-amendment-2026";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id)));
  };

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-tmi-aml-2026-amendment-overview",
      title: "【犯収法ブログ】令和8年改正犯罪収益移転防止法の概要",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-07-30",
      collectedAt: "2026-09-13",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18642.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／2026年犯罪収益移転防止法改正",
      status: "adopted",
      summary: "2026年改正犯罪収益移転防止法について、預貯金通帳等の不正譲渡に対する罰則引上げ、いわゆる送金バイトを対象とする送金犯罪の新設、架空名義口座を利用する口座等犯罪利用防止措置の三本柱を整理する実務解説。送金犯罪の『有償性』『正当な理由』、暗号資産・ステーブルコイン等を含む対象役務、法人の両罰規定、金融機関等に求められる口座審査・取引検知、架空名義口座制度の施行待ち論点まで具体化している。",
      whyImportant: [
        "2026年7月10日に施行済みの罰則引上げ・送金犯罪と、施行日が政令指定待ちの架空名義口座制度を分けて確認できる",
        "送金犯罪について『有償性』『正当な理由』という適用除外の判断軸を示し、通常の商取引・送金代行との境界を実務上検討できる",
        "銀行口座だけでなく、一定の暗号資産ウォレットやステーブルコイン関連アカウント等も対象となり得る点を整理している",
        "金融機関等の口座開設審査、疑わしい取引の届出・検知体制、捜査機関との連携という運用上の対応まで一次資料から一段具体化している"
      ],
      audience: ["企業法務", "金融機関・決済事業者の法務・コンプライアンス", "AML/CFT担当", "Fintech・暗号資産事業者"],
      audienceReason: "改正条文の施行状況だけでなく、送金代行・口座管理・取引モニタリングのどこを見直すべきかを実務へ落とすため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["aml-2026-account-remittance", "aml-fictitious-account"],
      primarySourceIds: [sourceAmendment],
      reformEventId,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [sourceAmendment],
      whatChanged: "整理変更なし／2026年改正について、送金犯罪の適用境界、暗号資産等を含む対象役務、金融機関等の実務対応、架空名義口座制度の施行待ち論点を実務解説で補完した。"
    }
  ]);
})();