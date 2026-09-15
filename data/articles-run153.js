(() => {
  const article = {
    id: "article-privacy-law-2026-roadmap-20260909",
    title: "個人情報保護法2026年改正　政令・規則・ガイドライン等の整備に関する今後の進め方",
    publisher: "個人情報保護委員会",
    author: "個人情報保護委員会事務局",
    publishedAt: "2026-09-09",
    collectedAt: "2026-09-15",
    url: "https://www.ppc.go.jp/files/pdf/260909_kongonosusumekatanitsuite.pdf",
    sourceType: "primary",
    sourceLabel: "一次資料／個人情報保護法2026年改正・施行準備ロードマップ",
    status: "adopted",
    summary: "2026年改正個人情報保護法の施行に向けた政令・委員会規則・ガイドライン等の整備手順と当面の審議順序を示す個人情報保護委員会の資料。9月中旬に子供・顔特徴データ・本人関与、9月下旬から10月上旬に統計作成等・委託先・漏えい等、10月中旬に連絡可能個人関連情報・オプトアウト・課徴金について基本的な考え方を議論し、個人・事業者双方との意見交換や事務局ヒアリングを経て、具体案・条文案・パブリックコメントへ進む工程を示している。",
    whyImportant: [
      "改正法の条文だけでは未確定の実務要件について、どの論点から下位ルールが具体化されるかを時系列で追える",
      "AI開発等に関係する統計作成等の特例と委託先規律は、2026年9月下旬から10月上旬の基本的な考え方②で議論予定と明示されている",
      "子供・顔特徴データ・本人関与、漏えい等、オプトアウト、課徴金まで論点ごとの審議順序が示され、社内の施行準備・ウォッチ対象を割り振りやすい",
      "意見交換・事務局ヒアリングを経て条文案・パブリックコメントへ進むため、現時点の工程表や基本的考え方を最終ルールとして先取りしないための基準になる"
    ],
    audience: ["企業法務", "プライバシー担当", "AI・データ利活用担当", "情報セキュリティ"],
    audienceReason: "改正個人情報保護法の施行準備について、確定済みの法律と今後具体化される政令・規則・ガイドラインを分け、社内対応の着手順序を決めるため。",
    categories: ["個人情報", "AI・デジタル"],
    relatedTopics: ["personal-information-protection-2026-amendment", "ai-personal-data"],
    relatedIssues: ["ai-statistical-use", "ai-outsourcing"],
    primarySourceIds: ["source-privacy-law-2026-roadmap-20260909"],
    reformEventId: "privacy-law-2026-amendment",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-privacy-law-2026-amendment", "source-privacy-law-2026-roadmap-20260909"],
    whatChanged: "施行準備更新／下位ルールの論点別審議順序と、意見交換・ヒアリングから条文案・パブリックコメントへ進む工程が具体化した。"
  };

  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  if (!articles.some((item) => item && item.id === article.id)) {
    window.ARTICLE_DATA = articles.concat([article]);
  }
})();
