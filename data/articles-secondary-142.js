(() => {
  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  const article = {
    id: "article-not-generative-ai-publicity-part1-2026",
    title: "Generative AI: Key Takeaways from ‘Civil Liability for Unauthorized Use of Human Likenesses and Voices Review Committee – Final Report: Interpretive Guidelines on Infringement by Generative AI of Publicity Rights, etc.’ (Part 1)",
    publisher: "長島・大野・常松法律事務所",
    author: "東崎賢治・小槻英之・井原諄・富永有美",
    publishedAt: "2026-09-04",
    collectedAt: "2026-09-14",
    url: "https://www.nagashima.com/en/publications/publication20260818-2/",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／生成AI・パブリシティ権（英語版）",
    status: "adopted",
    summary: "法務省の生成AIによる肖像・声の無断利用に関する取りまとめ報告書を、ピンク・レディー事件最高裁判決後の裁判例・議論と接続してパブリシティ権の成立要件から詳解する実務解説。顧客吸引力、本人識別、顧客吸引力を利用する主目的という三要素に分け、AI生成の似顔・似声、付加情報による本人特定、ものまね・声まね、SNS投稿、生成AIサービス提供等の場面へ当てはめている。",
    whyImportant: [
      "法務省報告書の紹介にとどまらず、パブリシティ権侵害を『顧客吸引力』『本人の肖像・声の使用』『顧客吸引力を利用する主目的』の三要素へ分解し、企業のコンテンツ審査で使える判断順序を示している",
      "AI生成物が本人の実際の画像・音声をそのまま複製していなくても、類似度と服装・行動・タイトル・説明等の付加情報を総合して本人識別が認められ得る点を具体化している",
      "声もパブリシティ権の保護対象となり得ること、ものまね・声まねとの境界、SNS投稿や広告・商品誘導など利用態様による評価の違いを整理している",
      "生成AIサービス提供、学習データセット販売、学習サービス提供など生成・利用前段階の行為にも検討を広げており、利用企業だけでなくAIサービス提供者のリスク管理にも使える"
    ],
    audience: ["企業法務", "知的財産・コンテンツ担当", "広告・広報", "AIガバナンス・サービス企画"],
    audienceReason: "人物の肖像・声を生成・利用する際のパブリシティ権判断を、最高裁判例と法務省報告書を踏まえた要件・具体例から確認し、広告・商品・SNS・AIサービスの審査へ落とすため。",
    categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
    relatedTopics: ["generative-ai-ip-rights"],
    relatedIssues: ["ai-ip-publicity"],
    primarySourceIds: ["source-moj-ai-likeness-report-2026"],
    legacyReformInference: false,
    whatChanged: "既存テーマ補完／生成AIによる肖像・声利用のうちパブリシティ権について、本人識別・顧客吸引力・利用目的・ものまねとの境界・AIサービス提供者まで実務判断を深掘りした。"
  };

  const currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingIds.has(article.id) && !existingUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = currentArticles.concat([article]);
  }
})();
