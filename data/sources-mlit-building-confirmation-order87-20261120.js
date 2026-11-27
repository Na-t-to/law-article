(() => {
  const additions = [
  {
    "id": "source-kanpo-building-confirmation-order87-20261120",
    "title": "建築基準法施行規則及び建築基準法に基づく指定建築基準適合判定資格者検定機関等に関する省令の一部を改正する省令（令和8年国土交通省令第87号）",
    "authority": "国土交通省",
    "publishedAt": "2026-11-20",
    "url": "https://www.kanpo.go.jp/20261120/20261120g00253/pdf/20261120g00253full00010176.pdf",
    "type": "ordinance",
    "typeLabel": "一次資料・官報号外第253号（61～151頁）",
    "importance": "高",
    "whyImportant": "建築確認等の様式、閲覧対象と附則を確認できる公布原文。改正省令は2028年4月1日施行。",
    "topics": []
  },
  {
    "id": "source-fdma-digital-building-confirmation-20261125",
    "title": "消防予第504号：電子申請による建築確認に係る消防同意通知の取扱について（国土交通省の技術的助言・改正概要付き）",
    "authority": "総務省消防庁",
    "publishedAt": "2026-11-25",
    "url": "https://www.fdma.go.jp/laws/tutatsu/items/261125_yobou_504.pdf",
    "type": "government_material",
    "typeLabel": "一次資料・消防庁通知／国土交通省資料",
    "importance": "高",
    "whyImportant": "消防同意欄の取扱い。添付の国住指第396号と第395号は概要書廃止後の閲覧、電子申請及び処分通知等の取扱いを示す。",
    "topics": []
  },
  {
    "id": "source-mlit-order87-comment-result-20261120",
    "title": "建築基準法施行規則等改正案に関する意見募集の結果・国土交通省の回答",
    "authority": "国土交通省",
    "publishedAt": "2026-11-20",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000324487",
    "type": "government_material",
    "typeLabel": "一次資料・意見募集結果と回答",
    "importance": "高",
    "whyImportant": "改正の考え方と個別の取扱い。施行日以降の定期報告では調査・検査日が施行前でも旧様式を使用できないと説明する。",
    "topics": []
  }
];
  const list = window.SOURCE_DATA || [];
  for (const item of additions) {
    const matches = list.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item)) ||
        (item.url && list.some(x => x.id !== item.id && x.url === item.url))) {
      throw new Error("Conflicting building-confirmation record: " + item.id);
    }
  }
  window.SOURCE_DATA = [...list, ...additions.filter(item => !list.some(x => x.id === item.id))];
})();
