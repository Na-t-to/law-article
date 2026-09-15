(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "securities-monitoring-2026");
  if (!topic) return;

  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (!list.includes(value)) list.push(value);
    return list;
  };

  topic.lastUpdated = "2026-09-15";
  topic.lastVerified = "2026-09-15";
  topic.sourceIds = addUnique(topic.sourceIds, "source-fsa-frontier-ai-financial-response-2026");
  topic.sourceIds = addUnique(topic.sourceIds, "source-fsa-aml-guideline-2026");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "AML/CFT・取引モニタリング");

  const systemIssue = (topic.issues || []).find((issue) => issue.id === "securities-monitoring-system-frontier-ai-2026");
  if (systemIssue) {
    systemIssue.sourceIds = addUnique(systemIssue.sourceIds, "source-fsa-frontier-ai-financial-response-2026");
  }

  if (!(topic.issues || []).some((issue) => issue.id === "securities-monitoring-aml-cft-2026")) {
    topic.issues = (topic.issues || []).concat([{
      id: "securities-monitoring-aml-cft-2026",
      title: "AML/CFTの2026年改正ガイドラインを証券モニタリングへどう反映するか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "2026年3月31日改正の金融庁AML/CFTガイドラインを踏まえ、取引モニタリング・フィルタリング後のリスク低減措置、新技術の活用、外部委託先の態勢検証等を、自社のリスク特性に応じて実装・検証する。",
      exception: "金融庁AML/CFTガイドラインの適用対象・求められる態勢は業態とリスクに応じて異なり、犯罪収益移転防止法上の本人確認義務と同一の論点ではない。",
      uncertain: "取引モニタリング技術や外部委託の具体的な検証水準は、今後の監督・検査事例や技術動向に応じて更新が必要である。",
      sourceIds: ["source-sesc-securities-monitoring-policy-2026", "source-fsa-aml-guideline-2026"]
    }]);
  }

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = addUnique(
    topic.currentSummary.facts,
    "金融庁は2026年3月31日にAML/CFTガイドラインを改正・即日適用し、取引モニタリング・フィルタリング後のリスク低減措置、新技術活用、外部委託先の態勢検証等を明確化した。"
  );
  topic.currentSummary.facts = addUnique(
    topic.currentSummary.facts,
    "金融庁・日本銀行は2026年5月22日、フロンティアAIによる脅威変化を踏まえ、重要サービス・IT資産の特定、技術負債への対応、パッチ適用体制、代替策等の短期的対応を金融機関等へ要請した。"
  );
})();
