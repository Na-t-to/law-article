(() => {
  const additions = [
  {
    "id": "article-ipa-vulnerability-partnership-final-20261001",
    "title": "脆弱性情報の政府連携を反映した早期警戒パートナーシップガイドライン2026年版",
    "publisher": "独立行政法人情報処理推進機構（IPA）",
    "author": "IPAほか情報システム等の脆弱性情報の取扱いに関する研究会",
    "publishedAt": "2026-10-01",
    "collectedAt": "2026-10-05",
    "url": "https://www.ipa.go.jp/security/guide/vuln/partnership_guide.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・早期警戒パートナーシップガイドライン確定版",
    "status": "adopted",
    "summary": "IPAは10月1日、早期警戒パートナーシップガイドラインの2026年版（改訂第14版）を公開した。付録7は、悪用が確認・疑われる脆弱性、または一定の深刻度があり悪用時の影響が大きい脆弱性について、IPAから内閣府への通知と関係機関の対応を整理する。通常の製品開発者との調整やJVN公表は原則として並行して続く。",
    "whyImportant": [
      "9月14日の改訂案を経て公開された最終版。内閣府連携条項と付録7に基づき、通知対象と通常の脆弱性調整との関係を確認できる。",
      "内閣府による情報提供は一般公表前に行われる場合がある。IPA・JPCERT/CCとの連携、NICTによる助言・情報提供、公表前の情報管理を自社の脆弱性対応へ照合する。",
      "本ガイドラインは関係者に推奨する行為をまとめたもの。特別社会基盤事業者の資産届出・インシデント報告とは対象と手続を分け、企業一般に新たな一律の政府報告義務を課すものと扱わない。"
    ],
    "audience": [
      "企業法務・コンプライアンス",
      "製品セキュリティ・PSIRT",
      "CISO・CSIRT",
      "ITベンダー・製品開発者"
    ],
    "audienceReason": "脆弱性の受付・調整・公表と政府への情報連携を区別し、通知窓口や情報管理の運用を最終版へ照合するため。",
    "categories": [
      "情報セキュリティ",
      "危機管理・コンプライアンス",
      "契約"
    ],
    "relatedTopics": [
      "cyber-countermeasures-critical-infrastructure"
    ],
    "relatedIssues": [
      "cyber-countermeasures-vulnerability-coordination"
    ],
    "primarySourceIds": [
      "source-ipa-vulnerability-partnership-final-20261001",
      "source-ipa-vulnerability-partnership-publication-20261001"
    ],
    "legacyReformInference": false,
    "whatChanged": "一次資料追加／10月1日公開の確定版と公表案内を収録。9月14日の改訂案を残し、政府への脆弱性情報連携が成案化したことと、その対象・通常調整との並行運用を示す。"
  }
];
  const existing = window.ARTICLE_DATA || [];
  const ids = new Set(existing.map(record => record.id));
  for (const record of additions) {
    if (ids.has(record.id)) throw new Error("Duplicate cyber October 5 record: " + record.id);
  }
  window.ARTICLE_DATA = [...existing, ...additions];
})();
