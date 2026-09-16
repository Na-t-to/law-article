(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "fair-subcontract-transactions");
  if (!topic) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueText = (list, value) => addUnique(list, value);
  const sourceId = "source-jftc-toridoll-deduction-2026";

  topic.lastUpdated = "2026-09-16";
  topic.lastVerified = "2026-09-16";
  topic.sourceIds = addUnique(topic.sourceIds, sourceId);

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = addUniqueText(
    topic.currentSummary.facts,
    "公正取引委員会は2026年9月9日、卸売業者を介して食品の製造を委託していたトリドールホールディングスが、受注者37名の代金から「システム利用料」名目で一律1.1％を減額したとして勧告した。2025年12月までの委託には改正前の下請法、2026年1月以降の委託には取適法が適用される。"
  );
  topic.currentSummary.interpretations = addUniqueText(
    topic.currentSummary.interpretations,
    "卸売業者等の中間事業者を介する取引でも、誰が製造委託等の主体となるかを取引実態から確認し、システム利用料・手数料等の名目で代金から控除する運用が減額禁止に抵触しないかを別途点検する必要がある。"
  );
  topic.currentSummary.implications = addUniqueText(
    topic.currentSummary.implications,
    "購買・経理システム上の控除項目を棚卸しし、システム利用料、事務手数料、販売協力金等を委託代金から差し引く運用について、契約条項だけでなく実際の請求・支払フローまで確認する。"
  );

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue && issue.id === "toriteki-intermediary-deduction")) {
    topic.issues.push({
      id: "toriteki-intermediary-deduction",
      title: "卸売業者等を介する委託・システム利用料控除をどう点検するか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "中間事業者を介する取引でも委託主体と対象取引を実態に即して確認し、システム利用料等を委託代金から一律控除する運用が減額禁止に抵触しないかを点検する。",
      exception: "すべての費用負担・控除が直ちに禁止されるわけではなく、費用の性質、当事者間の取引関係、法令上許容される調整に当たるかを個別に確認する。",
      uncertain: "中間事業者が関与する複合的な商流では、誰が委託事業者に当たるかは契約名義だけでなく実際の取引関係を踏まえて判断する必要がある。",
      sourceIds: [sourceId]
    });
  }

  const enforcementIssue = topic.issues.find((issue) => issue && issue.id === "toriteki-enforcement");
  if (enforcementIssue) enforcementIssue.sourceIds = addUnique(enforcementIssue.sourceIds, sourceId);

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "仲介・卸売経由の委託構造の棚卸し");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "システム利用料・手数料・相殺控除の支払統制");
})();
