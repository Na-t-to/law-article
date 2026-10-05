// Primary evidence for the full-theme DBS review of 2026-10-05.
(() => {
 const additions = [
  {
    "id": "source-cfa-child-sexual-violence-guideline-20260902",
    "title": "こども性暴力防止法施行ガイドライン（令和8年9月改訂）",
    "type": "guideline",
    "typeLabel": "一次資料・こども家庭庁／施行ガイドライン",
    "authority": "こども家庭庁",
    "publishedAt": "2026-09-02",
    "url": "https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/80127231-8582-476e-a6e7-9347e725ed96/abc50df0/20260901_policies_child-safety_efforts_koseibouhou_72.pdf",
    "importance": "最高",
    "whyImportant": "公式ポータルが2026年9月2日更新と明示する現行ガイドライン。対象事業・業務、犯罪事実確認、防止措置と労働法制、情報管理、認定等を改訂後の本文で確認できる。",
    "topics": [
      "child-sexual-violence-prevention-dbs"
    ]
  },
  {
    "id": "source-cfa-child-sexual-violence-qa-20260929",
    "title": "こども性暴力防止法に関するQ&A（令和8年9月29日改訂）",
    "type": "guideline",
    "typeLabel": "一次資料・こども家庭庁／制度Q&A",
    "authority": "こども家庭庁",
    "publishedAt": "2026-09-29",
    "url": "https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/80127231-8582-476e-a6e7-9347e725ed96/379c2e9b/20260929_policies_child-safety_efforts_koseibouhou_100.pdf",
    "importance": "最高",
    "whyImportant": "9月18日版の後の2回目の改訂。休職・休業中の現職者の分散申請と雇用仲介事業者による誓約書等の取扱いに関する設問を追加しており、最新の施行準備と情報管理の確認に使う。",
    "topics": [
      "child-sexual-violence-prevention-dbs"
    ]
  },
  {
    "id": "source-cfa-child-sexual-violence-supervision-20261001",
    "title": "こども性暴力防止法に係る監督等指針の策定について（通知）",
    "type": "government",
    "typeLabel": "一次資料・こども家庭庁／監督等指針策定通知",
    "authority": "こども家庭庁",
    "publishedAt": "2026-10-01",
    "url": "https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/80127231-8582-476e-a6e7-9347e725ed96/269ebd59/20261001_policies_child-safety_efforts_koseibouhou_101.pdf",
    "importance": "高",
    "whyImportant": "犯罪事実確認、安全確保措置及び情報管理措置についてこども家庭庁が行う監督等の指針を策定した通知。所轄庁の業法上の監督とは役割が異なることも確認できる。",
    "topics": [
      "child-sexual-violence-prevention-dbs"
    ]
  }
];
 const current = window.SOURCE_DATA || [];
 for(const addition of additions) {
   const sameId = current.find(source => source.id === addition.id);
   const sameUrl = current.find(source => source.url === addition.url);
   if ((sameId && JSON.stringify(sameId) !== JSON.stringify(addition)) || (sameUrl && sameUrl.id !== addition.id)) throw new Error('DBS source baseline conflict: '+addition.id);
 }
 window.SOURCE_DATA = current.concat(additions.filter(addition => !current.some(source => source.id === addition.id)));
})();
