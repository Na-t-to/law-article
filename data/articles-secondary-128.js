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
    id: "article-noandt-bhr-nap-2026",
    title: "「ビジネスと人権」に関する行動計画改定版の公表",
    publisher: "長島・大野・常松法律事務所",
    author: "福原あゆみ・辻野真央（角真央）",
    publishedAt: "2026-01-09",
    collectedAt: "2026-09-13",
    url: "https://www.nagashima.com/publications/publication20260109-1/",
    sourceType: "secondary",
    sourceLabel: "法律事務所ニュースレター・ビジネスと人権／人権DD",
    status: "adopted",
    summary: "2025年12月24日に改定された日本の「ビジネスと人権」行動計画を、企業への直接の法的義務ではなく政府施策の方向性として位置付けた上で、人権DD・サプライチェーン、情報開示、公共調達・補助金、救済、AI・テクノロジー、環境と人権という企業実務上の接点へ整理する解説。大企業側でも中小取引先との取引条件・取引慣行の改善を意識すべき点や、補助金審査への人権尊重の組込み検討など、一次資料だけでは拾いにくい実務上の含意を示す。",
    whyImportant: [
      "改定行動計画が企業へ直接の遵守義務を課すものではないことと、今後の政府施策・企業対応を読む政策シグナルとして重要であることを明確に区別している",
      "人権DDをサプライチェーン管理だけに閉じず、サステナビリティ情報開示、苦情処理メカニズム、公共調達・補助金の審査基準まで横断して実務上の影響を整理している",
      "AI・テクノロジーと人権、環境と人権が独立したテーマ別課題として位置付けられたことを踏まえ、プライバシー、セキュリティ、誤情報、知財、透明性等を人権ガバナンスの射程として読む手掛かりになる"
    ],
    audience: ["企業法務", "コンプライアンス担当", "サステナビリティ担当", "調達・購買担当", "公共調達・補助金事業に関わる事業部門"],
    audienceReason: "2025年改定行動計画を、直ちに法定義務へ読み替えることなく、自社の人権DD、取引先管理、情報開示、救済、AI・環境対応、公的取引との接点へ落とし込むため。",
    categories: ["危機管理・コンプライアンス", "国際取引", "会社法・ガバナンス"],
    relatedTopics: ["business-human-rights-dd"],
    relatedIssues: ["bhr-policy-scope", "bhr-risk-identification", "bhr-dd-cycle", "bhr-remedy-grievance"],
    primarySourceIds: ["source-mofa-bhr-nap-2025", "source-meti-bhr-guideline-2022"],
    whatChanged: "整理変更なし／2025年改定行動計画を、企業への直接義務と政府施策の方向性を区別しながら、人権DD・開示・救済・公契約・AI・環境へ落とし込む実務解説を補完した。"
  };

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingIds.has(article.id) && !existingUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(article);
  }
})();
