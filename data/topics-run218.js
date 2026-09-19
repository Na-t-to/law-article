(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "security-assignment-retention-title");
  if (!topic) return;

  const articleId = "article-businesslawyers-oehashi-security-assignment-practice-20250623";
  const primarySourceId = "source-moj-security-assignment-act-2025";

  topic.lastUpdated = "2026-09-19";
  topic.lastVerified = "2026-09-19";
  topic.currentSummary = topic.currentSummary || {};

  topic.currentSummary.interpretations = appendTextUnique(
    topic.currentSummary.interpretations,
    "集合動産譲渡担保では設定者による目的動産の処分が原則として認められる一方、契約で処分権限を制限できる。集合債権譲渡担保では設定者に取立権限を持たせるには契約上の定めが必要であり、権限の範囲と喪失事由を契約で明確にする重要性が増す。"
  );
  topic.currentSummary.implications = appendTextUnique(
    topic.currentSummary.implications,
    "集合動産・集合債権を担保にする契約では、通常時の処分・取立権限、権限を失うトリガー、実行通知、第三債務者への通知、倒産開始時の取扱いを一連の運用として見直す。"
  );

  if (!(topic.issues || []).some((item) => item?.id === "security-assignment-collection-authority")) {
    topic.issues = (topic.issues || []).concat({
      id: "security-assignment-collection-authority",
      title: "集合動産・集合債権の処分・取立権限を契約でどう設計するか",
      status: "interpreted",
      stage: "enacted",
      views: [],
      conclusion: "集合動産では設定者の処分権限の範囲を、集合債権では設定者の取立権限とその喪失事由を契約上明確にする。実行通知や倒産開始時に権限がどう切り替わるかも、第三債務者への通知を含めて運用へ落とす。",
      exception: "集合動産の処分権限を逸脱した場合の第三者保護や、集合債権の取立権限喪失を第三債務者へ対抗するための通知など、当事者間の契約だけでは完結しない規律がある。",
      uncertain: "施行に向けた下位法令・登記運用や、個別取引での条項例・実務慣行は引き続き確認が必要。",
      sourceIds: [primarySourceId]
    });
  }

  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, ["集合動産の処分権限・集合債権の取立権限"]);
})();
