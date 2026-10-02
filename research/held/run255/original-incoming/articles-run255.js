(() => {
  const sourceIds = ["source-ai-ip-principle-code-2026", "source-ai-ip-principle-code-filing-20260908"];
  const addition = {
    id: "article-nishimura-ai-ip-principle-final-20260928",
    title: "生成AIの適切な利活用等に向けた知的財産の保護及び透明性に関するプリンシプル・コードの公表",
    publisher: "西村あさひ法律事務所・外国法共同事業",
    author: "松下 外・難波 早登至",
    publishedAt: "2026-09-28",
    collectedAt: "2026-09-28",
    url: "https://www.nishimura.com/ja/knowledge/newsletters/intellectual_property_260928",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／生成AI知財プリンシプル・コード最終版",
    status: "adopted",
    summary: "2026年8月25日に公表された生成AI知財プリンシプル・コードの最終版を扱う改訂ニューズレター。8月21日の直前案解説を最終版に合わせて改訂し、コードの法的性格、透明性・知財保護、コンプライ・オア・エクスプレインを最終文書ベースで整理する。",
    whyImportant: [
      "8月21日の案段階の解説を最終版に合わせて改訂しており、暫定的な制度理解から最終文書ベースの実務整理へ読み替えられる",
      "対象該当性、概要開示、権利者・利用者からの照会対応を社内実装へ落とす補助線になる",
      "10月26日の届出開始に向け、法務・知財・AIプロダクト部門の準備事項を一次資料と往復して確認できる"
    ],
    audience: ["AIサービス提供事業者", "企業法務", "知的財産担当", "AIガバナンス・コンプライアンス", "AIプロダクト担当"],
    audienceReason: "生成AI知財プリンシプル・コードの最終版に基づき、対象該当性、対外開示、照会対応、受入れ準備を社内の実装課題へ落とすため。",
    categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
    relatedTopics: ["generative-ai-ip-principle-code", "generative-ai-ip-rights"],
    relatedIssues: ["ai-ip-code-scope", "ai-ip-code-disclosure", "ai-ip-code-rightsholder", "ai-ip-code-user-inquiry", "ai-ip-code-acceptance", "ai-ip-transparency", "ai-ip-rights-response"],
    primarySourceIds: sourceIds,
    legacyReformInference: false,
    whatChanged: "最終版二次資料追加／8月21日の案段階解説を最終版に合わせて改訂した実務解説を追加し、10月26日の届出開始に向けた運用準備へ接続した。"
  };

  let articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  if (!articles.some((x) => x && (x.id === addition.id || x.url === addition.url))) articles = articles.concat(addition);

  window.ARTICLE_DATA = articles.map((article) => {
    if (!article || article.id !== "article-ai-ip-principle-code-2026") return article;
    return {
      ...article,
      summary: "生成AI開発者・提供者に対し、モデル・学習・知財保護措置等の概要開示、権利者・利用者からの照会対応をコンプライ・オア・エクスプレイン方式で求める最終版のプリンシプル・コード。2026年8月25日に公表され、受入れ届出は2026年10月26日から開始すると9月8日に公式案内された。",
      primarySourceIds: sourceIds,
      whatChanged: "公式運用更新／受入れ届出の開始日が2026年10月26日に確定し、届出様式も公表された。"
    };
  });
})();