(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "companies-act-review-shareholders");
  if (!topic) return;

  const sourceId = "source-meti-equity-incentive-plan-20230331";
  const issueId = "companies-act-employee-equity-compensation-wage";
  topic.lastUpdated = "2026-09-19";
  topic.lastVerified = "2026-09-19";
  topic.sourceIds = addUnique(topic.sourceIds, sourceId);
  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = addUnique(
    topic.currentSummary.facts,
    "2026年3月の会社法制中間試案は、従業員等への株式無償交付の対象拡大を検討する一方、使用人等へ無償交付される株式の労働基準法上の『賃金』該当性について整理が必要であると明記している。"
  );
  topic.currentSummary.interpretations = addUnique(
    topic.currentSummary.interpretations,
    "従業員向け株式報酬は会社法上の発行手続だけでなく、労基法上の賃金該当性と通貨払原則を別軸で確認する必要があり、株式という形式だけから一律に賃金外と扱わない。"
  );
  topic.currentSummary.implications = addUnique(
    topic.currentSummary.implications,
    "従業員向け株式報酬を設計・改定する場合は、既存の現金賃金を代替していないか、就業規則・労働条件通知書・報酬規程で賃金と別建てのインセンティブとして整理できているか、現金賃金が報酬全体の主たる部分かを確認する。"
  );
  topic.currentSummary.uncertain = addUnique(
    topic.currentSummary.uncertain,
    "会社法改正案の具体化と併せ、従業員向け株式報酬の賃金該当性について今後どのような労働法上の整理が示されるかは未確定であり、低額行使価格のストックオプションやマルス・クローバックの扱いにも不明確な点が残る。"
  );

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue && issue.id === issueId)) {
    topic.issues.push({
      id: issueId,
      title: "従業員への株式無償交付と労基法上の『賃金』該当性をどう整理するか",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "会社法制中間試案は従業員等への株式無償交付の対象拡大を検討しているが、その前提として労基法上の賃金該当性の整理が必要とされている。現行実務では、株式報酬が現金賃金に付加され、雇用契約・就業規則上も賃金と別建てで、現金賃金が報酬全体の主たる部分であるか等を確認しつつ、制度ごとに判断する必要がある。",
      exception: "ストックオプションには1997年の行政通達がある一方、低廉な行使価格のストックオプションや、株価連動で現金を支給するファントム・ストック等は同じ整理をそのまま適用できるとは限らない。",
      uncertain: "会社法改正の最終内容、厚生労働省による今後の整理、現金賃金が『主たるもの』といえる基準、マルス・クローバック条項の有効性等は未確定である。",
      sourceIds: ["source-moj-company-law-interim-2026", sourceId]
    });
  }

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "従業員株式報酬・就業規則・労働条件通知書");
})();
