// Selective October 10 review. No theme-wide freshness change.
(() => {
  const additions = [
  {
    "id": "source-fsa-cyber-kyc-warning-20261009",
    "title": "現下の情勢を踏まえたサイバーセキュリティ対策の強化と各種取引申込等における対応について",
    "type": "government_material",
    "typeLabel": "一次資料・金融機関等への注意喚起",
    "authority": "金融庁",
    "publishedAt": "2026-10-09",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20261009/20261009.html",
    "importance": "高",
    "whyImportant": "金融機関等に対し、第三者リスク・事故対応態勢の点検、本人確認画像の確認徹底、非対面本人確認のICチップ読取りへの早期対応を要請した公表本文。新たな改正法令や施行日の変更ではない。",
    "topics": [
      "aml-identity-verification-2027",
      "cyber-supply-chain"
    ]
  },
  {
    "id": "source-jftc-ip-guideline-survey-20261009",
    "title": "「知的財産権・ノウハウ・データの適切な取引のための優越的地位の濫用等に関する指針等に係る調査」の開始について",
    "type": "government_material",
    "typeLabel": "一次資料・実態調査開始",
    "authority": "公正取引委員会",
    "publishedAt": "2026-10-09",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/oct/261009_chizaitorihikishishintochosa.html",
    "importance": "高",
    "whyImportant": "知財取引指針等に関する発注者・受注者双方の実態調査を公表。依頼状の送付対象5万事業者と11月5日の回答期限、調査後の予定を確認する資料。",
    "topics": [
      "ip-knowhow-data-transactions"
    ]
  },
  {
    "id": "source-jftc-ip-guideline-survey-print-20261009",
    "title": "知財取引指針等に係る調査の開始について（印刷用公表資料）",
    "type": "government_material",
    "typeLabel": "一次資料・調査開始公表文（全文1頁）",
    "authority": "公正取引委員会",
    "publishedAt": "2026-10-09",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/oct/261009_chizaitorihikishishintochosa.pdf",
    "importance": "高",
    "whyImportant": "調査趣旨、依頼状送付対象、回答期限、今後のヒアリング・結果公表等の予定を全文で確認できる。アンケート票そのものではない。",
    "topics": [
      "ip-knowhow-data-transactions"
    ]
  }
];
  const current = window.SOURCE_DATA || [];
  for (const item of additions) {
    const existing = current.find(record => record.id === item.id);
    if (existing && JSON.stringify(existing) !== JSON.stringify(item)) throw new Error("Conflicting daily addition: " + item.id);
  }
  window.SOURCE_DATA = current.concat(additions.filter(item => !current.some(record => record.id === item.id)));
})();
