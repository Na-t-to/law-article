(() => {
 const additions = [
  {
    "id": "article-mhlw-sds-ordinance-158-20261124",
    "title": "化学物質のSDSに保護具・成分情報を追加：改正省令公布、2030年4月施行",
    "publisher": "厚生労働省",
    "author": "厚生労働省",
    "publishedAt": "2026-11-24",
    "collectedAt": "2026-11-24",
    "url": "https://www.kanpo.go.jp/20261124/20261124g00255/20261124g002550003f.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・改正省令（官報公布）",
    "status": "adopted",
    "summary": "厚生労働省は11月24日、労働安全衛生法第57条の2第1項の通知対象物を譲渡・提供する際の通知事項を追加する省令（令和8年厚生労働省令第158号）を公布した。労働安全衛生規則第34条の2の4に、成分識別番号、呼吸用保護具、不適切な保護手袋の材料、成分の化学物質区分を追加する。附則により2030年4月1日施行。",
    "whyImportant": [
      "成分識別番号は成分の識別に広く用いられる固有番号。番号がない場合や代替化学名等で成分情報を通知する場合は対象外。",
      "呼吸用保護具の種類は、そのまま使う、取扱説明書に従い混合するなどして、使用時の成分の量が明らかな通知対象物に限る。防毒マスク等では適切な吸収缶の種類を含む。",
      "不浸透性の保護手袋は、規定する対象成分について不適切な材料を通知する。該当情報の掲載先を示すウェブサイトのアドレス等で代えることもできる。成分の化学物質区分は、規定の区分に該当すれば表の略称等でも通知できる。",
      "実務上の示唆：譲渡・提供する通知対象物ごとに追加項目の該当性と根拠データの入手先を整理し、施行までにSDS等の様式や更新手順を見直す。9月の審議会資料にある公布予定と、実際の公布日・施行日は区別する。"
    ],
    "audience": [
      "企業法務",
      "安全衛生担当",
      "化学物質管理者",
      "SDS作成・調達担当"
    ],
    "audienceReason": "化学物質の譲渡・提供者が、追加の通知項目と適用条件を区別し、SDS等の改訂を準備するため。",
    "categories": [
      "労務",
      "危機管理・コンプライアンス"
    ],
    "relatedTopics": [
      "occupational-safety-health-reform"
    ],
    "relatedIssues": [
      "ohs-phased-measures"
    ],
    "primarySourceIds": [
      "source-mhlw-sds-ordinance-158-20261124",
      "source-mhlw-sds-ordinance-158-20261124-supplementary"
    ],
    "reformEventId": "sds-notification-items-2026-draft",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": [
      "source-mhlw-sds-ordinance-158-20261124",
      "source-mhlw-sds-ordinance-158-20261124-supplementary"
    ],
    "whatChanged": "9月の省令案と同じ改正イベントに11月24日の公布原文を追加し、施行予定を官報附則に基づく確定日へ更新。テーマ全体の確認日は据え置く。"
  }
];
 const list = window.ARTICLE_DATA || [];
 for (const item of additions) {
  const matches = list.filter(x => x.id === item.id);
  if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item)) || list.some(x => x.id !== item.id && x.url === item.url)) throw Error('Conflicting SDS record: ' + item.id);
 }
 window.ARTICLE_DATA = [...list, ...additions.filter(item => !list.some(x => x.id === item.id))];
})();
