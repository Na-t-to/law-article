// Selective October 10 review. No theme-wide freshness change.
(() => {
  const additions = [
  {
    "id": "article-fsa-cyber-kyc-warning-20261009",
    "title": "金融庁が本人確認・サイバー対策を注意喚起：ICチップ読取りへ施行前の早期対応を要請",
    "publisher": "金融庁",
    "author": "金融庁",
    "publishedAt": "2026-10-09",
    "collectedAt": "2026-10-10",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20261009/20261009.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・金融機関等への注意喚起",
    "status": "adopted",
    "summary": "金融庁は、本人確認書類の画像を含む顧客情報の漏えい事案等を踏まえ、金融機関等に対策の点検を要請した。第三者リスク管理と事故対応態勢、本人確認書類・容貌画像の不自然な点の確認を徹底し、非対面本人確認について2027年4月1日の施行を待たず、ICチップ情報の読取りへの可及的速やかな対応を求めている。",
    "whyImportant": [
      "実務上は、法務・AML担当、システム担当、委託先管理担当で点検結果と移行工程を共有し、不十分な対策をリスクに応じて是正する材料になる。",
      "早期対応の要請であり、改正施行日を前倒しする法令ではない。本人確認方式の法的な適用範囲・例外は既存の改正命令と区別して確認する。",
      "経営陣のリーダーシップの下、自組織の規模・特性等に応じた対応を求める注意喚起であり、全事業者に一律の新たな義務を課すものとして扱わない。"
    ],
    "audience": [
      "金融機関の法務・AML担当",
      "情報セキュリティ担当",
      "委託先管理担当"
    ],
    "audienceReason": "本人確認方式の移行計画とサイバー・第三者リスク点検を連携させるため。",
    "categories": [
      "金融規制",
      "情報セキュリティ",
      "危機管理・コンプライアンス"
    ],
    "relatedTopics": [
      "aml-identity-verification-2027",
      "cyber-supply-chain"
    ],
    "relatedIssues": [
      "aml-kyc-nonface-image-methods",
      "aml-kyc-system-operations",
      "cyber-incident-chain"
    ],
    "primarySourceIds": [
      "source-fsa-cyber-kyc-warning-20261009"
    ],
    "legacyReformInference": false,
    "whatChanged": "10月9日の金融機関等向け運用上の要請を追加。既存の改正イベント、施行日、テーマ本文・確認日は変更しない。"
  },
  {
    "id": "article-jftc-ip-guideline-survey-20261009",
    "title": "公取委が知財取引指針の実態調査を開始：依頼状送付先5万事業者、回答期限は11月5日",
    "publisher": "公正取引委員会",
    "author": "公正取引委員会",
    "publishedAt": "2026-10-09",
    "collectedAt": "2026-10-10",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/oct/261009_chizaitorihikishishintochosa.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・知財取引の実態調査開始",
    "status": "adopted",
    "summary": "公正取引委員会は、6月24日公表の知財取引指針等に掲載された独占禁止法上問題となるおそれのある行為について、発注者・受注者双方の取引実態を調べる。10月9日に5万事業者へウェブアンケートの協力依頼状を発送すると公表し、依頼状が届いた事業者の回答期限を11月5日としている。結果公表や関係事業者へのヒアリング等は今後の予定。",
    "whyImportant": [
      "実務上は、依頼状を受領した事業者が法務・知財・購買等の担当を決め、知財等の提供範囲・対価・交渉経過の記録を確認する契機になる。",
      "11月5日はこの調査の回答期限であり、全事業者に共通する契約改訂期限や法令の施行日ではない。",
      "調査開始資料であって、調査結果、特定事業者の違反認定、新たな指針改正を示すものではない。"
    ],
    "audience": [
      "企業法務・知財",
      "購買・調達",
      "調査依頼を受けた事業者"
    ],
    "audienceReason": "既存指針を踏まえた取引実態の確認とアンケート対応を準備するため。",
    "categories": [
      "知的財産",
      "独占禁止法・競争法",
      "契約"
    ],
    "relatedTopics": [
      "ip-knowhow-data-transactions"
    ],
    "relatedIssues": [
      "iptx-information-disclosure",
      "iptx-value-compensation"
    ],
    "primarySourceIds": [
      "source-jftc-ip-guideline-survey-20261009",
      "source-jftc-ip-guideline-survey-print-20261009"
    ],
    "legacyReformInference": false,
    "whatChanged": "既存の3月調査報告・6月指針・10月1日改正と区別して、新たな実態調査の開始を追加。テーマ全体の整理・確認日は据え置く。"
  }
];
  const current = window.ARTICLE_DATA || [];
  for (const item of additions) {
    const existing = current.find(record => record.id === item.id);
    if (existing && JSON.stringify(existing) !== JSON.stringify(item)) throw new Error("Conflicting daily addition: " + item.id);
  }
  window.ARTICLE_DATA = current.concat(additions.filter(item => !current.some(record => record.id === item.id)));
})();
