(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "cyber-countermeasures-critical-infrastructure");
  if (!topic) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };

  topic.lastUpdated = "2026-09-19";
  topic.lastVerified = "2026-09-19";
  topic.sourceIds = addUnique(topic.sourceIds, "source-fsa-cyber-reporting-common-form-20260918");
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-fsa-cyber-reporting-common-form-20260918");

  const reportingIssue = (topic.issues || []).find((item) => item && item.id === "cyber-countermeasures-reporting");
  if (reportingIssue) {
    reportingIssue.conclusion = "2026年10月1日の施行に向け、特定重要電子計算機の届出と特定侵害事象等の報告について、対象資産、認知・判断、当局連絡、証跡保存に加え、金融分野ではDDoS・ランサムウェア・その他サイバー攻撃等の3共通様式の選択と報告窓口を運用へ落とし込む。";
    reportingIssue.sourceIds = addUnique(reportingIssue.sourceIds, "source-fsa-cyber-reporting-common-form-20260918");
  }

  if (topic.currentSummary) {
    topic.currentSummary.facts = addUnique(
      topic.currentSummary.facts,
      "2026年9月15日に関係省庁申合せが改正され、DDoS攻撃事案・ランサムウェア事案に加えて「その他サイバー攻撃等事案共通様式」が整備された。金融庁の改正後の監督指針等は2026年10月1日から適用される。"
    );
    topic.currentSummary.implications = addUnique(
      topic.currentSummary.implications,
      "インシデント対応手順では、攻撃類型ごとの共通様式、各法令・監督指針上の提出先、社内の認知・エスカレーション、証跡保存を一つの報告フローとして整備し、2026年10月1日の運用開始前に様式記入訓練を行う。"
    );
  }
})();
