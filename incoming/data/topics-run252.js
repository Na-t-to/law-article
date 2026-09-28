(() => {
  const sourceId = "source-jftc-petroleum-price-pass-through-20260925";
  const add = (a, v) => Array.from(new Set([...(Array.isArray(a) ? a : []), v]));
  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (!topic || topic.slug !== "fair-subcontract-transactions") return topic;
    const issues = (topic.issues || []).map((issue) => issue && issue.id === "toriteki-price-consultation"
      ? {...issue, sourceIds: add(issue.sourceIds, sourceId)}
      : issue);
    const summary = topic.currentSummary || {};
    return {
      ...topic,
      lastUpdated: "2026-09-28",
      lastVerified: "2026-09-28",
      sourceIds: add(topic.sourceIds, sourceId),
      issues,
      practicalImpacts: add(topic.practicalImpacts, "価格転嫁を受け入れない場合の理由回答・記録"),
      currentSummary: {
        ...summary,
        facts: add(summary.facts, "公取委の2026年9月25日緊急調査では、価格協議をまだ申し出ていない受注者が38.5％存在し、価格転嫁不受諾時に書面・電子メール等で理由回答があったのは17.5％だった。"),
        implications: add(summary.implications, "価格改定の受付とエスカレーションを明示し、不受諾時の検討理由と回答を文書・電子メール等で記録する。")
      }
    };
  });
})();