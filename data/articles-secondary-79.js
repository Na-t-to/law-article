(() => {
  const topicSlug = "aml-kyc-criminal-proceeds";
  const reformEventId = "aml-account-remittance-2026-amendment";
  const sourceId = "source-npa-aml-amendment-2026";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-tmi-aml-amendment-2026",
      title: "【犯収法ブログ】令和8年改正犯罪収益移転防止法の概要",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-07-30",
      collectedAt: "2026-09-11",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18642.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・2026年犯収法改正／口座・送金犯罪対策",
      status: "adopted",
      summary: "2026年改正犯罪収益移転防止法について、預貯金通帳等の不正譲渡に対する罰則引上げ、送金犯罪の創設、架空名義口座を用いた新措置の三本柱を整理した実務解説。本人確認方法の厳格化という行政的な対応と今回の刑事法的改正を区別しつつ、送金犯罪の『有償性』『正当な理由』、暗号資産・ステーブルコイン等を含む対象サービス、金融機関等の口座開設審査・疑わしい取引の検知、捜査機関との連携などへ落とし込んでいる。",
      whyImportant: [
        "2026年7月10日に施行された罰則引上げ・送金犯罪と、施行日が今後の政令指定に委ねられた架空名義口座措置を分けて把握できる",
        "新設された送金犯罪について、従来規定では捉えにくかった送金中継行為と『有償性』『正当な理由』の意味を実務目線で整理している",
        "銀行口座だけでなく暗号資産・ステーブルコイン等も射程に入り得ることを示し、口座開設審査、モニタリング、疑わしい取引の届出、利用者への注意喚起まで具体的な統制へ接続している"
      ],
      audience: [
        "金融・決済事業者の法務・コンプライアンス",
        "AML・不正利用対策担当",
        "Fintech・暗号資産事業者"
      ],
      audienceReason: "改正条文の三本柱を把握するだけでなく、既存の本人確認・AML運用と新しい刑事規制を切り分け、口座・送金サービスの審査、検知、契約・利用ルールへ反映するため。",
      categories: [
        "危機管理・コンプライアンス",
        "契約"
      ],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "aml-2026-account-remittance",
        "aml-fictitious-account"
      ],
      primarySourceIds: [sourceId],
      reformEventId,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [sourceId],
      whatChanged: "整理変更なし／2026年犯収法改正について、施行済みの口座・送金犯罪対策と施行待ちの架空名義口座措置を、金融・決済事業者の内部統制へ落とす実務解説を追加。"
    }
  ]);
})();
