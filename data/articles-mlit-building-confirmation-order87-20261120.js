(() => {
  const additions = [
  {
    "id": "article-mlit-building-confirmation-order87-20261120",
    "title": "建築確認の概要書を廃止し台帳を活用：改正省令は2028年4月1日施行",
    "publisher": "国土交通省",
    "author": "国土交通省",
    "publishedAt": "2026-11-20",
    "collectedAt": "2026-11-27",
    "url": "https://www.kanpo.go.jp/20261120/20261120g00253/pdf/20261120g00253full00010176.pdf",
    "sourceType": "primary",
    "sourceLabel": "一次資料・改正省令（官報公布）",
    "status": "adopted",
    "summary": "国土交通省は11月20日、建築確認などの手続で同じ情報を重複提出しなくて済むよう、建築計画概要書などの様式を廃止する省令（令和8年国土交通省令第87号）を公布した。施行日は2028年4月1日。申請・報告の様式を見直し、法定の閲覧対象は特定行政庁の台帳に記載した情報から抽出する。11月25日には消防庁が、電子手続における消防同意欄の取扱いも通知した。",
    "whyImportant": [
      "申請・報告の様式：廃止する概要書に記載していた情報のうち、引き続き必要な項目は新様式に移す。例えば確認申請書の第七面には付近見取図と配置図の欄を設ける。許可・認定等の処分通知の一部では、処分者の押印欄を廃止する。",
      "閲覧：概要書がなくなっても法定の閲覧制度は続く。特定行政庁が台帳から対象事項を抽出する。情報システム等の整備までの間は、閲覧対象事項が記載された申請書等の該当面を必要な除外処理のうえで閲覧に供する運用も可能と国土交通省は説明している。すべての申請書や添付図面をオンライン公開する改正ではない。",
      "切替日：国土交通省の意見募集結果によると、定期調査・検査を施行前に済ませても、2028年4月1日以降の定期報告に旧様式は使えない。施行前に行われた処分の閲覧には、附則による従前の取扱いがある。定期報告の様式と既存処分の閲覧を混同しない。",
      "消防同意：消防機関が電子システムで同意等を通知する場合、紙の確認申請書等に設けた消防関係同意欄への記載・押印等は省略して差し支えないという助言。消防同意そのものを省略できるという意味ではない。",
      "実務上の示唆：施行前に確認申請と定期報告のひな形を分けて点検し、書類の閲覧や電子申請の運用は申請先・報告先の案内も確認する。建築士法の設計・工事監理契約改正やBIM審査の一律開始とは別の話。"
    ],
    "audience": [
      "建築確認の申請担当",
      "設計事務所",
      "建物所有者・施設管理担当",
      "建設・不動産の企業法務"
    ],
    "audienceReason": "確認申請と定期報告で、廃止書類の代わりにどの様式を使うかを施行前に整理できる。",
    "categories": [
      "危機管理・コンプライアンス",
      "AI・デジタル"
    ],
    "relatedTopics": [],
    "relatedIssues": [],
    "primarySourceIds": [
      "source-kanpo-building-confirmation-order87-20261120",
      "source-fdma-digital-building-confirmation-20261125",
      "source-mlit-order87-comment-result-20261120"
    ],
    "reformEventId": "building-confirmation-document-digitalization-2026",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": [
      "source-kanpo-building-confirmation-order87-20261120",
      "source-fdma-digital-building-confirmation-20261125"
    ],
    "whatChanged": "概要書の廃止と台帳情報に基づく閲覧への移行を、建築士法の契約改正とは別の改正イベントに整理。2028年4月1日の施行は官報附則で確認。"
  }
];
  const list = window.ARTICLE_DATA || [];
  for (const item of additions) {
    const matches = list.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item)) ||
        (item.url && list.some(x => x.id !== item.id && x.url === item.url))) {
      throw new Error("Conflicting building-confirmation record: " + item.id);
    }
  }
  window.ARTICLE_DATA = [...list, ...additions.filter(item => !list.some(x => x.id === item.id))];
})();
