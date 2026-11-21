// Verified PPC notice; additive, guarded and idempotent.
(() => {
 const item = {
  "id": "article-ppc-id-image-deletion-20261118",
  "title": "本人確認画像を残し続けない：PPCがレンタカー事業者に消去を注意喚起",
  "publisher": "個人情報保護委員会",
  "author": "個人情報保護委員会",
  "publishedAt": "2026-11-18",
  "collectedAt": "2026-11-21",
  "url": "https://www.ppc.go.jp/news/press/2026/261118_houdou/",
  "sourceType": "primary",
  "sourceLabel": "一次資料・注意喚起",
  "status": "adopted",
  "summary": "個人情報保護委員会は、レンタカー事業者が保管していた身分証明書画像の漏えいを受け、本人確認に使い終えた画像の消去を求める注意喚起を公表した。免許証番号の2年間保存と、画像そのものの保存を区別している。",
  "whyImportant": [
    "原典の整理：個人情報保護法22条は、利用の必要がなくなった個人データを遅滞なく消去する努力義務を定める。レンタカーの貸渡手続後も本人確認画像を保管する法令上の義務はないと説明し、消去の対応状況によっては同法147条による指導等を行うことがあるとする。",
    "本記事の実務上の示唆：レンタカー事業者は、免許証番号の記録と画像の保存を分け、本人確認後の画像削除手順を点検する材料にできる。他業種では各業法の保存義務等を別途確認する。"
  ],
  "audience": [
    "レンタカー事業者の法務・個人情報管理担当",
    "本人確認業務・情報システム担当"
  ],
  "audienceReason": "本人確認で取得した画像の保管継続が必要かを確認し、不要な画像の漏えいリスクを減らすため。",
  "categories": [
    "個人情報",
    "情報セキュリティ",
    "危機管理・コンプライアンス"
  ],
  "relatedTopics": [
    "privacy-enforcement-breach-response"
  ],
  "relatedIssues": [],
  "primarySourceIds": [
    "source-ppc-id-image-deletion-20261118"
  ],
  "legacyReformInference": false,
  "whatChanged": "11月18日の注意喚起を収録。法改正や新たな施行日としては登録せず、既存テーマの本文・更新日・検証日は変更しない。"
};
 const current = window.ARTICLE_DATA || [];
 const matches = current.filter(x => x.id === item.id);
 if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item))) throw new Error('Conflicting November 18 PPC record: ' + item.id);
 if (current.some(x => x.id !== item.id && x.url?.replace(/\/$/, '') === item.url.replace(/\/$/, ''))) throw new Error('Duplicate PPC URL: ' + item.url);
 if (!matches.length) window.ARTICLE_DATA = [...current, item];
})();
