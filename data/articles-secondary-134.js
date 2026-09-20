(() => {
  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === "article-caa-digital-tokusho-interim-final-2026");
  if (article && Array.isArray(article.relatedIssues)) {
    article.relatedIssues = Array.from(new Set(article.relatedIssues.map((id) => id === "dt-social-solicitation" ? "dt-chat-solicitation" : id)));
  }
})();

// 2026-09-20 backfill: human rights / M&A commentary
(() => {
  const addition = {
    id: "article-mhm-human-rights-conflict-exit-ma-20230912",
    title: "ビジネスと人権：「人権×M&A①：責任ある撤退、M&Aにおける“強化された人権DD”」",
    publisher: "森・濱田松本法律事務所",
    author: "梅津英明、白井俊太郎、工藤恭平",
    publishedAt: "2023-09-12",
    collectedAt: "2026-09-20",
    url: "https://www.mhmjapan.com/content/files/00068159/CRM_SUS_COR_230912.pdf",
    sourceType: "secondary",
    sourceLabel: "実務解説・森・濱田松本／紛争影響地域・責任ある撤退と強化人権DD",
    status: "adopted",
    summary: "紛争等の影響地域では、通常の人権DDに加えて紛争分析を組み込む「強化された人権DD」が必要となり、事業継続・縮小・撤退の各選択肢が人権へ与える影響を比較しながら判断する必要があると整理する。撤退は自動的な正解ではなく、企業と負の影響との関係や、撤退自体が労働者・地域社会へ及ぼす影響も含めて評価することが重要であり、M&Aでは対象事業が紛争影響地域を含む場合に通常の法務DDへ強化人権DDを織り込む視点を示す。",
    whyImportant: [
      "紛争等の影響地域では、通常の人権DDに紛争分析を加え、自社の活動と紛争とのつながりを把握する必要があるという『強化された人権DD』の実務像を具体化している",
      "事業撤退を自動的なリスク回避策とせず、残留・縮小・撤退それぞれがライツホルダーへ及ぼす影響を比較し、撤退する場合も影響緩和やステークホルダーとの対話を検討するという判断枠組みを示す",
      "地政学・制裁対応と人権DDを分断せず、紛争影響地域に所在する事業・買収対象について、通常のM&A法務DDへ強化人権DDを組み込む接点を提示している"
    ],
    audience: ["企業法務", "M&A担当", "サステナビリティ担当", "コンプライアンス担当", "海外事業担当"],
    audienceReason: "紛争影響地域に事業・取引先・買収対象を持つ場面で、通常の人権DDをどこまで強化し、事業継続・縮小・撤退をどう比較するかの実務判断に向く。",
    categories: ["M&A", "危機管理・コンプライアンス", "国際取引"],
    relatedTopics: ["business-human-rights-dd"],
    relatedIssues: ["bhr-dd-cycle", "bhr-ma-dd"],
    primarySourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023"],
    legacyReformInference: false,
    whatChanged: "実務解説補強／紛争影響地域における強化人権DD、責任ある撤退、M&A DDへの組込みを既存の人権DD・M&A論点へ接続した。"
  };
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  if (!existing.some((item) => item && (item.id === addition.id || item.url === addition.url))) {
    window.ARTICLE_DATA = existing.concat([addition]);
  }
})();
