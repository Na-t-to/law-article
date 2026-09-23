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

  const articles = [
    {
      id: "article-nishimura-electronic-data-production-order-2025",
      title: "電子データ提供命令制度の導入 ～刑事訴訟法改正に伴う企業法務上の留意点～",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "河合 優子・北條 孝佳・山本 大成",
      publishedAt: "2025-06-12",
      collectedAt: "2026-09-15",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/data_protection_250612",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／刑事訴訟法・電磁的記録提供命令",
      status: "adopted",
      summary: "2025年改正刑事訴訟法で創設された電磁的記録提供命令について、従来の記録命令付差押えとの違いから、記録媒体への記録・移転とオンライン移転、命令拒絶事由、移転データの原状回復、秘密保持命令、準抗告、法人を含む罰則まで体系的に整理する。特に、職務上の秘密による拒絶可能性、被疑者である事業者が自己負罪を理由に拒めないとの整理、秘密保持命令下で顧客等が自ら不服申立てできない場面では被処分者側に顧客の権利も考慮した対応が期待される点を示し、企業のデータ提供対応を法的手続の側から補強する。",
      whyImportant: [
        "『記録』と『移転』を区別し、オンライン移転を含む提供方法と、移転元データの消去・原状回復の仕組みまで追えるため、単なる令状対応より細かなデータ管理上の影響を把握できる",
        "公務上・職務上の秘密による命令拒絶事由や、被疑者である事業者が自己負罪を理由に拒めないとの整理を示し、命令受領時に『応じる／争う』の入口判断を具体化できる",
        "秘密保持命令によって顧客本人が不服申立ての機会を得にくい場合に、被処分者側が顧客等の権利も考慮して準抗告を検討するという観点を提示している",
        "正当な理由のない命令違反について1年以下の拘禁刑又は300万円以下の罰金と法人両罰規定があることを確認でき、法務・IT・経営へのエスカレーションの必要性を法的リスクから理解できる"
      ],
      audience: [
        "企業法務",
        "危機管理・コンプライアンス担当",
        "個人情報・データガバナンス担当",
        "クラウド・SaaS・通信事業者",
        "情報システム・セキュリティ担当"
      ],
      audienceReason: "捜査機関から顧客・取引先データの提供を求められた場合に、提供方法、拒絶事由、秘密保持、準抗告、原状回復、罰則を一連の法的対応として確認するため。",
      categories: [
        "危機管理・コンプライアンス",
        "個人情報",
        "AI・デジタル",
        "情報セキュリティ",
        "契約"
      ],
      relatedTopics: ["law-enforcement-data-production"],
      relatedIssues: [
        "electronic-record-production-order-scope",
        "electronic-record-secrecy-order",
        "electronic-record-notification-contract",
        "electronic-record-quasi-appeal-business-continuity"
      ],
      primarySourceIds: [
        "source-moj-criminal-procedure-it-2025",
        "source-egov-criminal-procedure-electronic-record-2026"
      ],
      reformEventId: "criminal-procedure-electronic-record-order-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-moj-criminal-procedure-it-2025"],
      legacyReformInference: false,
      whatChanged: "バックフィル／電磁的記録提供命令について、命令拒絶事由、記録と移転の区別、原状回復、法人両罰、顧客等の権利を踏まえた準抗告という法的手続の観点を補強した。"
    }
  ];

  let currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (existingIds.has(article.id) || existingUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    existingIds.add(article.id);
    existingUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();
