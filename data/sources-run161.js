(() => {
  const addition = {
    id: "source-jftc-toridoll-recommendation-2026",
    title: "株式会社トリドールホールディングスに対する勧告について",
    type: "enforcement",
    typeLabel: "一次資料・取適法／下請法・代金減額／委託事業者認定",
    authority: "公正取引委員会",
    publishedAt: "2026-09-09",
    url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
    importance: "最高",
    whyImportant: "卸売業者を介する発注でも、製品仕様・受注者選定・代金額を実質的に決定していた発注者を委託事業者と認定し、システム利用料名目の一律1.1％控除を代金減額として勧告した事例。2025年までの旧下請法と2026年以降の取適法を同一事案で区分適用し、取適法では減額分への遅延利息まで示している。",
    topics: ["fair-subcontract-transactions"]
  };

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => item && item.url).filter(Boolean));
  if (!existingIds.has(addition.id) && !existingUrls.has(addition.url)) {
    window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([addition]);
  }
})();
