(() => {
 const additions = [
  {
    "id": "article-fsa-ssbj-assurance-draft-20261113",
    "title": "サステナビリティ法定保証の段階適用：金融庁が政令・府令案を公表",
    "publisher": "金融庁",
    "author": "金融庁",
    "publishedAt": "2026-11-13",
    "collectedAt": "2026-11-22",
    "url": "https://www.fsa.go.jp/news/r8/shouken/20261113/20261113.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・意見募集／政令・府令案",
    "status": "adopted",
    "summary": "金融庁は11月13日、2026年金商法改正に伴う政令・府令案等を公表した。サステナビリティ開示・保証の特定提出者として、東証プライム市場に株券等を上場し、平均時価総額5,000億円以上の企業を対象とする案を示した。意見募集は12月13日17時まで。",
    "whyImportant": [
      "保証の段階適用案：事業年度の開始日を基準に、平均時価総額3兆円以上は2027年4月1日以後、1兆円以上3兆円未満は2028年4月1日以後、5,000億円以上1兆円未満は2029年4月1日以後に開始する事業年度から適用する案。",
      "開示との区別：3兆円以上のプライム上場企業には既存府令による2027年3月31日以後終了事業年度からの先行開示がある。改正法の関係規定の施行日と、今回の案が示す企業別の適用開始時期は区別して確認する。",
      "実務上の示唆：自社の時価総額区分と決算期を照合し、開示と保証の準備時期をそれぞれ見積もる。政令・府令等の最終化後に適用関係を再確認する。"
    ],
    "audience": [
      "上場会社法務",
      "開示・IR",
      "サステナビリティ・経理担当"
    ],
    "audienceReason": "サステナビリティ情報の開示と第三者保証の開始時期を区別して準備するため。",
    "categories": [
      "金融商品取引・開示・IR",
      "危機管理・コンプライアンス"
    ],
    "relatedTopics": [
      "ssbj-statutory-sustainability-disclosure"
    ],
    "relatedIssues": [
      "ssbj-application-scope",
      "ssbj-statutory-assurance"
    ],
    "primarySourceIds": [
      "source-fsa-ssbj-assurance-draft-notice-20261113",
      "source-fsa-ssbj-assurance-draft-order-20261113"
    ],
    "reformEventId": "fiea-sustainability-disclosure-assurance-2026",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": [
      "source-fsa-ssbj-assurance-draft-notice-20261113"
    ],
    "whatChanged": "審議会報告を受けた政令・府令案の公表を追加。既存改正イベントの施行日やテーマの確認日を更新せず、保証の段階適用は案として記録する。"
  }
];
 const records=window.ARTICLE_DATA || [];
 for(const item of additions){
 const matches=records.filter(x=>x.id===item.id);
 if(matches.length>1 || (matches.length===1 && JSON.stringify(matches[0])!==JSON.stringify(item)) || records.some(x=>x.id!==item.id && x.url===item.url)) throw Error('Conflict: '+item.id);
 }
 window.ARTICLE_DATA=[...records,...additions.filter(x=>!records.some(y=>x.id===y.id))];
})();
