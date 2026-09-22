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

  const additions = [{
    id: "article-nishimura-european-model-clauses-bhr-20251017",
    title: "ビジネスと人権のフロントライン: 責任ある持続可能なサプライチェーンのための欧州モデル条項",
    publisher: "西村あさひ法律事務所・外国法共同事業",
    author: "湯川 雄介・伴 真範・長岡 隼平",
    publishedAt: "2025-10-17",
    collectedAt: "2026-09-19",
    url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_251017",
    sourceType: "secondary",
    sourceLabel: "実務解説・西村あさひ／人権DD・契約条項",
    status: "adopted",
    summary: "国連『ビジネスと人権に関する指導原則』は人権尊重責任の履行手段として契約条項の利用自体を必須としていない一方、契約条項は負の影響へ対処するための『影響力（leverage）』として機能し得ることを出発点に、欧州モデル条項を素材としてサプライチェーン契約と人権デュー・ディリジェンスの接続を整理する実務解説。モデル条項を最終的な法的ルールとして扱うのではなく、人権DDを取引条件へ落とすための設計資料として読む価値がある。",
    whyImportant: [
      "人権条項を入れたこと自体を人権DDの完了とせず、契約を負の影響の予防・軽減・対処に使う『影響力』の一つとして位置付ける視点を得られる",
      "サプライヤー行動規範、情報提供・協力、是正、救済、取引継続・終了などを、法務だけでなく調達・サステナビリティ運用と接続して検討する入口になる",
      "欧州モデル条項は策定・更新が続く実務資料であり、ひな形の文言を固定ルールとしてコピーするのではなく、現行のモデル本文と自社の取引構造を都度確認すべきことを意識できる"
    ],
    audience: ["企業法務", "調達・購買", "人権・サステナビリティ担当", "国際取引担当"],
    audienceReason: "取引先への人権要求を一方的な遵守条項で終わらせず、人権DDの実効性を高める契約・調達プロセスとして設計するため。",
    categories: ["契約", "危機管理・コンプライアンス", "国際取引"],
    relatedTopics: ["business-human-rights-dd"],
    relatedIssues: ["bhr-dd-cycle", "bhr-remedy-grievance"],
    primarySourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023"],
    legacyReformInference: false,
    whatChanged: "ビジネスと人権の棚に、人権DDを取引条件へ実装する手段として契約条項と『影響力』の関係を整理する実務解説を追加した。"
  }];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
