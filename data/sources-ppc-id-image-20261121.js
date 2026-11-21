// Verified PPC notice; additive, guarded and idempotent.
(() => {
 const item = {
  "id": "source-ppc-id-image-deletion-20261118",
  "title": "運転免許証等の顔写真付きの公的身分証明書の画像の消去について（注意喚起）",
  "type": "government_material",
  "typeLabel": "一次資料・注意喚起",
  "authority": "個人情報保護委員会",
  "publishedAt": "2026-11-18",
  "url": "https://www.ppc.go.jp/files/pdf/261118_houdou.pdf",
  "importance": "高",
  "whyImportant": "レンタカー事業者向けの注意喚起を含む全2頁。免許証番号の保存と本人確認画像の保存を区別し、不要になった画像の消去を求める。",
  "topics": [
    "privacy-enforcement-breach-response"
  ]
};
 const current = window.SOURCE_DATA || [];
 const matches = current.filter(x => x.id === item.id);
 if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item))) throw new Error('Conflicting November 18 PPC record: ' + item.id);
 if (current.some(x => x.id !== item.id && x.url?.replace(/\/$/, '') === item.url.replace(/\/$/, ''))) throw new Error('Duplicate PPC URL: ' + item.url);
 if (!matches.length) window.SOURCE_DATA = [...current, item];
})();
