(() => {
 const additions = [
  {
    "id": "source-fsa-ssbj-assurance-draft-notice-20261113",
    "title": "令和8年金融商品取引法等改正に係る政令・内閣府令案等の公表（サステナビリティ情報の開示・保証、スタートアップ企業への資金供給の促進関係）",
    "type": "government_material",
    "typeLabel": "一次資料・意見募集",
    "authority": "金融庁",
    "publishedAt": "2026-11-13",
    "url": "https://www.fsa.go.jp/news/r8/shouken/20261113/20261113.html",
    "importance": "高",
    "whyImportant": "企業のサステナビリティ開示・保証に関し、案の対象範囲と適用時期を説明した金融庁の意見募集。",
    "topics": [
      "ssbj-statutory-sustainability-disclosure"
    ]
  },
  {
    "id": "source-fsa-ssbj-assurance-draft-order-20261113",
    "title": "金融商品取引法及び資金決済に関する法律の一部を改正する法律の一部の施行に伴う関係政令の整備等及び経過措置に関する政令（案）",
    "type": "government_material",
    "typeLabel": "一次資料・政令案／新旧対照条文",
    "authority": "金融庁",
    "publishedAt": "2026-11-13",
    "url": "https://www.fsa.go.jp/news/r8/shouken/20261113/01.pdf",
    "importance": "高",
    "whyImportant": "別紙1。金商法施行令第5条の5の新設案に、特定提出者となる発行者の時価総額要件を掲げる。",
    "topics": [
      "ssbj-statutory-sustainability-disclosure"
    ]
  }
];
 const records=window.SOURCE_DATA || [];
 for(const item of additions){
 const matches=records.filter(x=>x.id===item.id);
 if(matches.length>1 || (matches.length===1 && JSON.stringify(matches[0])!==JSON.stringify(item)) || records.some(x=>x.id!==item.id && x.url===item.url)) throw Error('Conflict: '+item.id);
 }
 window.SOURCE_DATA=[...records,...additions.filter(x=>!records.some(y=>x.id===y.id))];
})();
