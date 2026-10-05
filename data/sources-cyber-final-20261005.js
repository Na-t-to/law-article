(() => {
  const additions = [
  {
    "id": "source-ipa-vulnerability-partnership-final-20261001",
    "title": "情報セキュリティ早期警戒パートナーシップガイドライン 2026年版（改訂第14版）",
    "type": "guideline",
    "typeLabel": "一次資料・脆弱性情報取扱い／ガイドライン確定版",
    "authority": "独立行政法人情報処理推進機構（IPA）ほか関係機関",
    "publishedAt": "2026-10-01",
    "url": "https://www.ipa.go.jp/security/guide/vuln/ug65p90000019by0-att/partnership_guideline.pdf",
    "importance": "高",
    "whyImportant": "2026年10月1日発行の最終版。内閣府への通知対象、通常の脆弱性調整との並行運用、IPA・JPCERT/CC・NICT間の連携と公表前の情報管理を確認できる。",
    "topics": [
      "cyber-countermeasures-critical-infrastructure"
    ]
  },
  {
    "id": "source-ipa-vulnerability-partnership-publication-20261001",
    "title": "情報セキュリティ早期警戒パートナーシップガイドライン：2026年版の公開",
    "type": "guideline",
    "typeLabel": "一次資料・IPA／確定版公開案内",
    "authority": "独立行政法人情報処理推進機構（IPA）",
    "publishedAt": "2026-10-01",
    "url": "https://www.ipa.go.jp/security/guide/vuln/partnership_guide.html",
    "importance": "高",
    "whyImportant": "公式ページの2026年10月1日更新本文と更新履歴が、サイバー対処能力強化法等の施行に対応した2026年版の公開を示す。PDF奥付の同日発行と合わせ、9月14日の改訂案と区別する。",
    "topics": [
      "cyber-countermeasures-critical-infrastructure"
    ]
  }
];
  const existing = window.SOURCE_DATA || [];
  const ids = new Set(existing.map(record => record.id));
  for (const record of additions) {
    if (ids.has(record.id)) throw new Error("Duplicate cyber October 5 record: " + record.id);
  }
  window.SOURCE_DATA = [...existing, ...additions];
})();
