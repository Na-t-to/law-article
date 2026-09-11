(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };

  const topicSlug = "human-capital-disclosure-strategy-2026";
  const primarySourceId = "source-meti-human-capital-visualization-guideline-2026";

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-tmi-human-capital-policy-architecture-2026-01-30",
      title: "【労働法ブログ】人的資本開示の拡充に向けた人的資本政策の狙い再確認②",
      publisher: "TMI総合法律事務所",
      author: "堀田 陽平",
      publishedAt: "2026-01-30",
      collectedAt: "2026-09-12",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/17944.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／人的資本政策・経営戦略と人材戦略",
      status: "adopted",
      summary: "人材版伊藤レポートの策定に関与した筆者が、人的資本政策を『人的資本経営の実践』と『人的資本の情報開示』の二つに分け、両者を経営戦略と人材戦略の連動という目的から説明する。ジョブ型雇用への移行自体が政策目的ではないこと、開示だけを先行させず人材戦略の実践を基礎に置くこと、さらに価値協創ガイダンスを参照して経営戦略全体の中に人材戦略を位置付ける必要があることを整理している。",
      whyImportant: [
        "人的資本開示を開示項目の充足だけで捉えず、経営戦略と人材戦略の連動を起点に設計する政策構造を理解できる。",
        "人材版伊藤レポートを『ジョブ型雇用の導入を求める文書』と単純化する読み方を修正し、自社戦略に応じた人材制度設計を検討しやすくする。",
        "人的資本経営の実践、人的資本開示、価値協創ガイダンス、取締役会・経営陣の役割を一つの構造としてつなぎ、IR・人事・経営企画・法務の分業を超えてレビューする視点を補える。"
      ],
      audience: ["経営企画", "人事・労務", "IR・開示担当", "企業法務", "取締役会事務局"],
      audienceReason: "2026年の人的資本開示拡充を形式的な記載対応にとどめず、経営戦略・人材戦略・指標・投資家対話を一貫させる社内設計へ落とすため。",
      categories: ["金融商品取引・開示・IR", "コーポレートガバナンス", "労務"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "human-capital-visualization-guideline-role",
        "human-capital-strategy-investor-dialogue"
      ],
      primarySourceIds: [primarySourceId],
      whatChanged: "整理変更なし／人的資本経営の実践と情報開示を『経営戦略と人材戦略の連動』から一体で捉える政策背景と実務視点を補完した。"
    }
  ]);
})();
