(() => {
  const addition = {
    id: "source-nco-critical-infrastructure-safety-guideline-2026",
    title: "重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン",
    type: "guideline",
    typeLabel: "重要インフラ・安全基準等策定ガイドライン／最終版",
    authority: "内閣官房 国家サイバー統括室",
    publishedAt: "2026-09-11",
    url: "https://www.cyber.go.jp/policy/group/infra/siryou/index.html",
    importance: "最高",
    whyImportant: "重要インフラ統一基準に基づき、重要インフラ所管省庁等が分野別の安全基準等を策定・改定する際に参照する詳細事項を示す最終版。2026年10月1日に統一基準と同時施行予定であり、案段階だった施行準備資料が確定したことを確認する基準点となる。",
    topics: ["cyber-countermeasures-critical-infrastructure"]
  };

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => item && item.url).filter(Boolean));
  if (!existingIds.has(addition.id) && !existingUrls.has(addition.url)) {
    window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([addition]);
  }
})();
