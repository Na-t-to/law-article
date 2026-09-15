(() => {
  const addition = {
    id: "source-mhlw-disability-employment-rare-disease-review-2026",
    title: "第142回労働政策審議会障害者雇用分科会 資料1『手帳を所持していない難病患者の位置付けについて』",
    type: "guideline",
    typeLabel: "一次資料・労働政策審議会／障害者雇用率制度見直し",
    authority: "厚生労働省",
    publishedAt: "2026-09-14",
    url: "https://www.mhlw.go.jp/stf/newpage_76196.html",
    importance: "最高",
    whyImportant: "障害者手帳を所持していない難病患者について、就労困難性の個別判定を経て実雇用率へ算入する制度案を、判定材料・審査体制・短時間労働者の算定・更新制まで具体化した最新の審議資料。現行制度と検討中の拡張を区別する基準点となる。",
    topics: ["disability-employment-business-quality-review"]
  };

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => item && item.url).filter(Boolean));
  if (!existingIds.has(addition.id) && !existingUrls.has(addition.url)) {
    window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([addition]);
  }
})();