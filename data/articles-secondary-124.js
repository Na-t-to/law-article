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

  const source = {
    id: "source-jftc-toridoll-recommendation-2026",
    title: "株式会社トリドールホールディングスに対する勧告について",
    type: "administrative_action",
    typeLabel: "一次資料・公正取引委員会／取適法・代金減額の勧告",
    authority: "公正取引委員会",
    publishedAt: "2026-09-09",
    url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
    importance: "高",
    whyImportant: "2024年8月から2026年7月まで継続した同一の代金減額行為について、2025年12月までの委託には旧下請法、2026年1月以降の委託には取適法を適用し、取適法部分では減額分に加えて遅延利息の支払まで勧告した執行事例。改正前後をまたぐ継続取引の移行実務を一次資料で確認できる。",
    topics: ["fair-subcontract-transactions"]
  };

  const article = {
    id: "article-jftc-toridoll-recommendation-2026",
    title: "株式会社トリドールホールディングスに対する勧告について",
    publisher: "公正取引委員会",
    author: "公正取引委員会",
    publishedAt: "2026-09-09",
    collectedAt: "2026-09-13",
    url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
    sourceType: "primary",
    sourceLabel: "一次資料・取適法／勧告・代金減額",
    status: "adopted",
    summary: "トリドールホールディングスが、卸売業者を介して食品製造を委託した受注者37名について、2024年8月から2026年7月まで代金から一律1.1％を「システム利用料」名目で減額していたとして、公正取引委員会が2026年9月9日に勧告した事案。2025年12月までの委託には改正前の下請法、2026年1月以降の委託には取適法を適用し、旧法期間の減額分1億4741万1330円を含む減額分の返還に加え、取適法期間の減額分については同法6条2項に基づく遅延利息の支払も求めた。",
    whyImportant: [
      "同じ取引慣行が2026年1月1日の制度移行をまたいで継続した場合、委託時期に応じて旧下請法と取適法を切り分けて適用する執行実務を具体例で確認できる",
      "「システム利用料」等の名目を付けても、委託代金から例外なく一定率を控除する運用は代金減額として問題になり得ることが明確で、購買・経理の控除項目棚卸しに直結する",
      "取適法下の減額では返還だけでなく遅延利息まで勧告対象となっており、違反発見後の是正額・引当・社内報告を設計する際の実例になる"
    ],
    audience: ["企業法務", "購買・調達担当", "経理・支払担当", "コンプライアンス・内部監査"],
    audienceReason: "取適法施行前から続く控除・手数料・システム利用料等の支払条件を棚卸しし、委託時期ごとの適用法令と返金・遅延利息を含む是正範囲を確認するため。",
    categories: ["契約", "独占禁止法・競争法", "危機管理・コンプライアンス"],
    relatedTopics: ["fair-subcontract-transactions"],
    relatedIssues: ["toriteki-enforcement"],
    primarySourceIds: ["source-jftc-toridoll-recommendation-2026", "source-toriteki-law-2026", "source-toriteki-operation-2026"],
    whatChanged: "整理変更なし／旧下請法から取適法への移行をまたぐ一律控除について、代金減額と遅延利息を実際に勧告した最新の執行事例を追加した。"
  };

  const currentSources = window.SOURCE_DATA || [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!sourceIds.has(source.id) && !sourceUrls.has(normalizeUrl(source.url))) {
    window.SOURCE_DATA = currentSources.concat(source);
  }

  const currentArticles = window.ARTICLE_DATA || [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = currentArticles.concat(article);
  }
})();
