(() => {
  if (window.__LAW_INDEX_RUN249_ECONSEC_STRATEGY_APPLIED__) return;
  window.__LAW_INDEX_RUN249_ECONSEC_STRATEGY_APPLIED__ = true;

  const TOPIC = "economic-security-tech-control";
  const ISSUE = "econsec-governance";
  const PRIMARY = "source-meti-economic-security-management-2026";
  const ARTICLE = "article-amt-economic-security-strategy-20260331";

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
    id: ARTICLE,
    title: "日本企業の法×経済安全保障を考える2026 ―ジレンマと戦略的対応―",
    publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
    author: "長嶺 安政・中川 淳司・髙嵜 直子・鈴木 潤",
    publishedAt: "2026-03-31",
    collectedAt: "2026-09-25",
    url: "https://www.amt-law.com/insights/trending-news/trending-news_20260331001_ja_001/",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／経済安全保障・地経学リスク",
    status: "adopted",
    summary: "国際情勢の変化を踏まえ、経済安全保障を個別規制の遵守に閉じず、経営判断・サプライチェーン・官民対話へ組み込む実務を整理した特集。特定地域・供給者への依存の可視化、マルチソーシングや代替設計・在庫等によるレジリエンス、複数シナリオでのインテリジェンス運用、各国当局との対話に耐える一貫した説明方針まで扱う。",
    whyImportant: [
      "経済安全保障経営ガイドラインの『経営課題として扱う』という公式整理を、依存関係の可視化、代替調達・生産、シナリオ分析という具体的な経営プロセスへ落とし込める",
      "規制対応だけでなく、経済的威圧や供給途絶を前提にコストとレジリエンスをどう両立させるかという企業判断の論点を補える",
      "自社の事業・供給網・投資計画に即して情報を解釈し、官民対話や海外当局対応で一貫した説明方針を持つという、一次資料だけでは掴みにくい実務上の視点がある"
    ],
    audience: ["企業法務", "経営企画・リスク管理", "調達・サプライチェーン担当", "海外事業・渉外", "経済安全保障担当"],
    audienceReason: "経済安全保障を規制チェックだけでなく、依存関係・レジリエンス・シナリオ分析・官民対話を含む経営判断へ落とすため。",
    categories: ["国際取引", "危機管理・コンプライアンス"],
    relatedTopics: [TOPIC],
    relatedIssues: [ISSUE],
    primarySourceIds: [PRIMARY],
    legacyReformInference: false,
    whatChanged: "参考解説補強／経済安全保障対応を、依存関係の可視化、レジリエンス、シナリオ分析、官民対話まで含む経営判断として読むための実務解説を追加した。"
  };

  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(articles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(articles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = articles.concat(article);
  }
})();
