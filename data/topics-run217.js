(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "cyber-supply-chain");
  if (!topic) return;

  const sourceId = "source-nara-hospital-system-outage-report-20260831";
  const articleId = "article-nara-hospital-system-outage-report-20260831";
  topic.lastUpdated = "2026-09-19";
  topic.lastVerified = "2026-09-19";
  topic.currentSummary = topic.currentSummary || {};

  topic.currentSummary.facts = appendTextUnique(
    topic.currentSummary.facts,
    "奈良市が2026年8月31日に公表した市立奈良病院の検証では、外部からのサイバー攻撃ではなく、セキュリティ監視装置の監視対象変動とソフトウェア自動更新を契機に、十分に学習されていなかった院内通信が異常判定され、自動遮断が連鎖した。電子カルデg��が停止し、救急受入れは約53時間停止した。"
  );
  topic.currentSummary.interpretations = appendTextUnique(
    topic.currentSummary.interpretations,
    "サプライチェーン・サイバーリスクでは、ベンダーから侵害を受ける場合だけでなく、セキュリティ製品や保守・更新そのものが可用性へ与える影響も管理対象になる。攻撃防御の強度と、誤検知・誤遮断時の事業継続を同じ変更管理・BCPの中で設計する必要がある。"
  );
  topic.currentSummary.implications = appendTextUnique(
    topic.currentSummary.implications,
    "重要システムに接続するセキュリティ製品・保守サービスについて、自動更新の適用条件、更新前後の確認、切戻し、自動遮断の発動・解除基準、必要ログの保存期間、重大事案時のベンダー連絡・判断権限・段階復旧を契約と運用手順へ落とす。"
  );

  for (const issueId of ["cyber-vulnerability", "cyber-incident-chain"]) {
    const issue = (topic.issues || []).find((item) => item?.id === issueId);
    if (issue) issue.sourceIds = appendUnique(issue.sourceIds, [sourceId]);
  }

  topic.sourceIds = appendUnique(topic.sourceIds, [sourceId]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, ["セキュリティ製品の更新・誤検知・自動遮断とBCP"]);
})();
