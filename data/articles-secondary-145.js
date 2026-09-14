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
      id: "article-jftc-toridoll-deduction-2026",
      title: "株式会社トリドールホールディングスに対する勧告について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-15",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      sourceType: "primary",
      sourceLabel: "一次資料・旧下請法／取適法・勧告（代金減額）",
      status: "adopted",
      summary: "トリドールホールディングスが、卸売業者を介して食品の製造を委託していた受注者37名について、2024年8月から2026年7月まで、委託代金から『システム利用料』名目で一律1.1％を控除していたとして、公正取引委員会が2026年9月9日に勧告した事案。2025年12月までの委託には改正前の下請法、2026年1月以降の委託には現行の取適法が適用され、減額分の返還に加え、取適法適用分については法定の遅延利息も支払うよう求められた。",
      whyImportant: [
        "『システム利用料』などの名目を付けても、委託代金から一律に控除する運用が代金減額禁止の問題となることを最新の執行事例で確認できる",
        "卸売業者を介した取引であっても、実際の製造委託関係を前提に取適法・旧下請法の適用が検討されており、商流上の中間業者だけで適用関係を判断しない必要性が分かる",
        "2026年1月の取適法施行をまたぐ継続取引について、旧法と新法を期間で切り分け、取適法適用分には遅延利息まで含めて是正する実務を確認できる"
      ],
      audience: ["企業法務", "購買・調達", "経理・支払担当", "コンプライアンス"],
      audienceReason: "取引先から徴収・控除するシステム料、事務手数料、協賛金等を、名称ではなく委託代金の減額に当たらないかという観点から棚卸しし、旧法・取適法をまたぐ是正方法まで確認するため。",
      categories: ["契約", "危機管理・コンプライアンス"],
      relatedTopics: ["fair-subcontract-transactions"],
      relatedIssues: ["toriteki-scope", "toriteki-enforcement"],
      primarySourceIds: ["source-jftc-toridoll-deduction-2026"],
      legacyReformInference: false,
      whatChanged: "取適法施行後の代金減額禁止について、システム利用料名目の一律控除と、旧下請法・取適法をまたぐ返金・遅延利息の是正例を最新執行事例として補完した。"
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
