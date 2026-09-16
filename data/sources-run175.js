(() => {
  const additions = [
    {
      id: "source-jftc-toridoll-deduction-2026",
      title: "株式会社トリドールホールディングスに対する勧告について",
      type: "enforcement",
      typeLabel: "行政処分・勧告",
      authority: "公正取引委員会",
      publishedAt: "2026-09-09",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      importance: "高",
      whyImportant: "卸売業者を介した食品製造委託で、システム利用料名目の一律1.1％控除が代金減額として勧告対象となり、旧下請法から取適法への経過措置も同一事案で確認できる最新の執行資料。",
      topics: ["fair-subcontract-transactions"]
    }
  ];
  const existing = new Set((window.SOURCE_DATA || []).map((item) => item && item.id).filter(Boolean));
  window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(additions.filter((item) => !existing.has(item.id)));
})();
