(() => {
  const reforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  const removeArticle = (values, articleId) =>
    (Array.isArray(values) ? values : []).filter((id) => id !== articleId);

  // Keep cross-law / cross-guideline explainers attached to their explicit primary reform event.
  // Dedicated event articles are already explicitly linked, so broad source matching here only
  // creates duplicate reform ownership for mixed secondary or omnibus materials.
  const importantVarieties = reforms.find((event) => event?.id === "important-varieties-act-2026-enactment");
  if (importantVarieties) importantVarieties.matchSourceIds = [];

  const privacySecurityReview = reforms.find((event) => event?.id === "privacy-security-measures-guideline-review-2026-2027");
  if (privacySecurityReview) privacySecurityReview.matchSourceIds = [];

  const omnibusArticleId = "article-fsa-growth-finance-ordinance-2026";
  const digitalBond = reforms.find((event) => event?.id === "fiea-digital-bond-solicitation-2026");
  if (digitalBond) digitalBond.articleIds = removeArticle(digitalBond.articleIds, omnibusArticleId);

  const overseasVf = reforms.find((event) => event?.id === "fiea-overseas-vf-foreign-fund-exemption-2026");
  if (overseasVf) {
    overseasVf.matchSourceIds = [];
    overseasVf.articleIds = removeArticle(overseasVf.articleIds, omnibusArticleId);
  }
})();

(() => {
  const articleId = "article-not-cyber-supply-chain-contracts-2025";
  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === articleId);
  if (!article) return;

  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];
  article.relatedTopics = uniq([...(article.relatedTopics || []), "supply-chain-security-scs-2026"]);
  article.relatedIssues = uniq([
    ...(article.relatedIssues || []),
    "scs-procurement-contract-implementation",
    "scs-competition-transaction-law"
  ]);
  article.primarySourceIds = uniq([
    ...(article.primarySourceIds || []),
    "source-jftc-cyber-partnership-20251226"
  ]);
  article.legacyReformInference = false;
  article.whatChanged = "分類更新／既採用のサプライチェーン・サイバー契約解説をSCS評価制度テーマにも接続し、契約・監査と取引適正化の論点を2026年の現行制度資料と横断して追えるよう整理した。";

  const scsTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "supply-chain-security-scs-2026");
  if (scsTopic) scsTopic.referenceArticleIds = uniq([...(scsTopic.referenceArticleIds || []), articleId]);
})();

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
  const uniq = (values = []) => [...new Set((Array.isArray(values) ? values : []).filter(Boolean))];
  const article = {
    id: "article-miyake-privacy-subrules-practical-20260918",
    title: "政令・規則の整備が「中身」の議論へ― 令和８年９月16日 第369回個人情報保護委員会 公表資料の解説 ―（個人情報保護法ニュース No.23）",
    publisher: "弁護士法人三宅法律事務所",
    author: "渡邉雅之",
    publishedAt: "2026-09-18",
    collectedAt: "2026-09-22",
    url: "https://www.miyake.gr.jp/notice/%E6%94%BF%E4%BB%A4%E3%83%BB%E8%A6%8F%E5%89%87%E3%81%AE%E6%95%B4%E5%82%99%E3%81%8C%E3%80%8C%E4%B8%AD%E8%BA%AB%E3%80%8D%E3%81%AE%E8%AD%B0%E8%AB%96%E3%81%B8%E2%80%95-%E4%BB%A4%E5%92%8C%EF%BC%98%E5%B9%B4/",
    sourceType: "secondary",
    sourceLabel: "実務解説・三宅法律事務所／2026年個人情報保護法・下位法令整備",
    status: "adopted",
    summary: "2026年9月16日の個人情報保護委員会資料を条文単位で読み解き、改正個人情報保護法の政令・委員会規則で具体化される同意不要例外、16歳未満の者の取扱い、顔特徴データ等の周知・利用停止対応と、安全管理措置ガイドライン別添の見直しを企業実務へ落とす。特に安全管理措置の見直しは改正法本体より先に2027年4月施行予定とされ、ゼロトラスト、横展開対策、クラウド、多要素認証、特権アカウント管理、侵害時の停止・隔離、ログ分析等を先行して点検すべきと整理する。いずれも下位法令・ガイドラインは案・検討段階であり、確定ルールとして先取りしない。",
    whyImportant: [
      "改正法の細目と安全管理措置ガイドラインという別スケジュールの二つの実装作業を分け、2027年4月予定の安全管理措置見直しを先行タスクとして把握できる",
      "第三者提供等の同意例外、16歳未満の利用者、顔識別カメラ・生体認証について、データフロー、年齢基準、施設掲示、利用停止等請求の導線という具体的な業務・システム変更へ落としている",
      "ゼロトラスト、多要素認証、特権アカウント、横展開対策、クラウド、ログ検知を社内規程・技術的安全管理措置の点検項目へ変換しつつ、現時点では手法例の検討案であることも明確にしている"
    ],
    audience: ["企業法務", "プライバシー・個人情報保護担当", "情報セキュリティ", "プロダクト・データ担当", "内部監査・IT統制"],
    audienceReason: "2026年改正個人情報保護法の施行準備と、それに先行する安全管理措置ガイドライン見直しを、同意取得・子供向けサービス・顔認証・セキュリティ統制の実装工程へ分けて進めるため。",
    categories: ["個人情報", "情報セキュリティ", "AI・デジタル", "危機管理・コンプライアンス"],
    relatedTopics: ["personal-information-protection-2026-amendment", "privacy-enforcement-breach-response"],
    relatedIssues: [
      "privacy-2026-consent-exceptions",
      "privacy-2026-children",
      "privacy-2026-biometric",
      "privacy-enforcement-safety-management",
      "privacy-incident-forensics-readiness"
    ],
    primarySourceIds: [
      "source-privacy-law-2026-amendment",
      "source-ppc-privacy-2026-subrules-basic-approach-20260916",
      "source-ppc-security-measures-guideline-review-2026"
    ],
    reformEventId: "privacy-law-2026-amendment",
    reformStageAtPublication: "proposal",
    reformStageSourceIds: ["source-ppc-privacy-2026-subrules-basic-approach-20260916"],
    legacyReformInference: false,
    whatChanged: "実務解説補強／9月16日の下位法令検討を、同意例外・子供・顔特徴データの業務実装と、2027年4月予定の安全管理措置見直しの先行対応へ落とす解説を追加した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat(article);
  }

  if (!(window.ARTICLE_DATA || []).some((item) => item && item.id === article.id)) return;
  for (const slug of article.relatedTopics) {
    const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === slug);
    if (topic) topic.referenceArticleIds = uniq([...(topic.referenceArticleIds || []), article.id]);
  }
})();
