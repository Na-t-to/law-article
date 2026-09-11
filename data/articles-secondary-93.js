(() => {
  const topicSlug = "cyber-countermeasures-critical-infrastructure";
  const primarySourceId = "source-nco-critical-infrastructure-unified-standard-2026";
  const reformEventId = "critical-infrastructure-unified-standard-2026";
  const articleId = "article-amt-critical-infrastructure-unified-standard-2026";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "【サイバー＆AIセキュリティ】サイバーセキュリティ戦略本部、「重要インフラのサイバーセキュリティ対策のための統一基準」等を決定",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "清水 亘、石川 雅人",
      publishedAt: "2026-09-04",
      collectedAt: "2026-09-12",
      url: "https://www.amt-law.com/insights/newsletters/ddrlc98_p/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター・実務解説",
      status: "adopted",
      summary: "2026年7月31日に決定された重要インフラ統一基準と重要インフラ行動計画の改定について、制度の背景、統一基準の概要・適用範囲、安全基準等に規定されるべき事項を整理し、同日に決定された『サイバーセキュリティ2026』、AI時代の対策パッケージ『Project YATA-Shield』、脅威ハンティングの基本方針まで関連付けて解説する。",
      whyImportant: [
        "一次資料を単に要約するだけでなく、重要インフラ統一基準の背景・適用範囲・安全基準等との関係を一つの実務的な読み順で整理している",
        "統一基準だけでなく、サイバーセキュリティ2026、Project YATA-Shield、脅威ハンティングの基本方針を同時に扱い、2026年度の政府サイバー政策との位置付けを把握しやすい",
        "重要インフラ事業者等やその法務・セキュリティ担当が、2026年10月1日の施行に向けて所管省庁の安全基準等と自社対応を照合する際の参考解説として使える"
      ],
      audience: ["重要インフラ事業者等の企業法務", "情報セキュリティ・CISO部門", "危機管理・コンプライアンス", "規制対応担当"],
      audienceReason: "重要インフラ統一基準そのものに加え、行動計画、安全基準等、年度計画や脅威ハンティングとの関係を横断して確認でき、一次資料を自社の規制対応・セキュリティ統制へ落とす前提整理に向くため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [],
      primarySourceIds: [primarySourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [primarySourceId],
      whatChanged: "整理変更なし／重要インフラ統一基準と行動計画・サイバーセキュリティ2026・脅威ハンティングを横断して整理する法律事務所の実務解説を参考資料として追加。"
    }
  ]);
})();
