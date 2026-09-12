(() => {
  const topicSlug = "fair-subcontract-transactions";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id)));
  };

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-amt-toriteki-recommendation-2026",
      title: "COMPETITION NEWSLETTER（2026年7月8日号）―取適法連載 第4回（勧告）",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "中野 雄介・浅沼 泰成",
      publishedAt: "2026-07-08",
      collectedAt: "2026-09-13",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260708002_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／取適法・勧告制度",
      status: "adopted",
      summary: "取適法への改正で勧告制度がどのように変わったかを整理した実務解説。違反行為が既に終了していても特に必要がある場合に再発防止策等を求める勧告が可能になったこと、現に違反がある場合の是正・遅延利息、コンプライアンス研修等の再発防止措置、組織再編後の承継主体等も含む勧告対象を解説する。旧下請法下でも勧告件数が増加していたことを踏まえ、取適法下の執行を継続的に確認する必要性を示している。",
      whyImportant: [
        "取適法10条の勧告制度を、違反が継続中の場合と既に終了した場合に分けて理解できる",
        "返金や遅延利息だけでなく、役員・従業員への研修等の再発防止措置まで勧告内容になり得ることを実務的に整理している",
        "違反後の組織再編や資本金・従業員数の変動だけで勧告リスクが消えるとは限らないという継続管理上の論点を確認できる"
      ],
      audience: ["企業法務", "購買・調達担当", "コンプライアンス・内部監査", "経理・支払担当"],
      audienceReason: "取適法違反を発見した後に、返金だけで終わらせず再発防止・証跡・組織変更後の責任まで含めた是正計画を設計するため。",
      categories: ["契約", "独占禁止法・競争法", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["toriteki-enforcement"],
      primarySourceIds: ["source-toriteki-law-2026", "source-toriteki-operation-2026"],
      reformEventId: "fair-subcontract-transactions-2025-amendment",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-toriteki-law-2026"],
      whatChanged: "バックフィル／取適法改正後の勧告制度と再発防止措置の実務的な読み方を補強した。"
    }
  ]);
})();
