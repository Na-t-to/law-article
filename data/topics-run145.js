(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "fair-subcontract-transactions");
  if (!topic) return;

  const sourceId = "source-jftc-toridoll-deduction-2026";
  const addUnique = (list, value) => {
    const items = Array.isArray(list) ? list : [];
    if (!items.includes(value)) items.push(value);
    return items;
  };
  const addTextUnique = (list, value) => {
    const items = Array.isArray(list) ? list : [];
    if (!items.includes(value)) items.push(value);
    return items;
  };

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = addTextUnique(
    topic.currentSummary.facts,
    "公取委は2026年9月9日、卸売業者を介する食品製造委託で、受注者37名の委託代金から『システム利用料』名目で一律1.1％を控除していたトリドールホールディングスに対し、改正前の下請法と現行の取適法に基づき勧告した。"
  );
  topic.currentSummary.implications = addTextUnique(
    topic.currentSummary.implications,
    "システム利用料、事務手数料、協賛金等を委託代金から控除する運用は、名目ではなく実質的な代金減額になっていないかを購買・経理の支払フローまで含めて点検する。"
  );

  const scopeIssue = (topic.issues || []).find((issue) => issue && issue.id === "toriteki-scope");
  if (scopeIssue) scopeIssue.sourceIds = addUnique(scopeIssue.sourceIds, sourceId);
  const enforcementIssue = (topic.issues || []).find((issue) => issue && issue.id === "toriteki-enforcement");
  if (enforcementIssue) enforcementIssue.sourceIds = addUnique(enforcementIssue.sourceIds, sourceId);

  topic.sourceIds = addUnique(topic.sourceIds, sourceId);
  topic.lastUpdated = "2026-09-15";
  topic.lastVerified = "2026-09-15";
})();
