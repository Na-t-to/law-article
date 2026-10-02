(() => {
  const additions = [
  {
    "id": "source-jftc-ip-toriteki-freelance-20261001",
    "title": "「取適法運用基準」及び「フリーランス法の考え方」の改正について",
    "type": "government",
    "typeLabel": "一次資料・公正取引委員会／運用基準・解釈の最終改正公表",
    "authority": "公正取引委員会",
    "publishedAt": "2026-10-01",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/oct/261001_toriteki.html",
    "importance": "最高",
    "whyImportant": "知財取引指針を踏まえた運用基準・解釈の改正を2026年10月1日に最終公表したことと、意見募集結果を確認する公式発表。",
    "topics": [
      "ip-knowhow-data-transactions",
      "fair-subcontract-transactions",
      "freelance-law"
    ]
  },
  {
    "id": "source-jftc-ip-toriteki-freelance-20261001-toriteki-redline",
    "title": "取適法運用基準の新旧対照表（2026年10月1日公表）",
    "type": "guideline",
    "typeLabel": "一次資料・公正取引委員会／取適法運用基準新旧対照表",
    "authority": "公正取引委員会",
    "publishedAt": "2026-10-01",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/oct/261001_toriteki1-1.pdf",
    "importance": "最高",
    "whyImportant": "知財等の譲渡・許諾範囲と対価、利用範囲拡大時の価格協議、直前取消しの費用・損失に関する改正箇所を確認できる。",
    "topics": [
      "ip-knowhow-data-transactions",
      "fair-subcontract-transactions",
      "freelance-law"
    ]
  },
  {
    "id": "source-jftc-ip-toriteki-freelance-20261001-freelance-redline",
    "title": "フリーランス法の考え方の新旧対照表（2026年10月1日公表）",
    "type": "guideline",
    "typeLabel": "一次資料・公正取引委員会／フリーランス法解釈新旧対照表",
    "authority": "公正取引委員会",
    "publishedAt": "2026-10-01",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/oct/261001_toriteki1-2.pdf",
    "importance": "最高",
    "whyImportant": "知財等の範囲明示・対価と、予定を確保させた後の直前取消しに伴う費用・損失の扱いを確認できる。",
    "topics": [
      "ip-knowhow-data-transactions",
      "fair-subcontract-transactions",
      "freelance-law"
    ]
  },
  {
    "id": "source-jftc-ip-toriteki-freelance-20261001-comments",
    "title": "取適法運用基準等の改正に関する意見の概要及びそれに対する考え方（2026年10月1日公表）",
    "type": "government",
    "typeLabel": "一次資料・公正取引委員会／意見募集結果",
    "authority": "公正取引委員会",
    "publishedAt": "2026-10-01",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/oct/261001_toriteki2.pdf",
    "importance": "最高",
    "whyImportant": "キャンセル補償や予定確保期間の評価が個別判断となること、キャンセルポリシーを設けただけでは違反リスクを免れないことを確認できる。",
    "topics": [
      "ip-knowhow-data-transactions",
      "fair-subcontract-transactions",
      "freelance-law"
    ]
  }
];
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  window.SOURCE_DATA = existing.concat(additions.filter(a => !existing.some(x => x && (x.id === a.id || x.url === a.url))));
})();
