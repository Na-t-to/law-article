(() => {
  const topicSlug = "cyber-countermeasures-critical-infrastructure";
  const sourceId = "source-nco-critical-infrastructure-safety-guideline-2026";
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === topicSlug);
  if (!topic) return;

  topic.lastUpdated = "2026-09-15";
  topic.lastVerified = "2026-09-15";
  topic.sourceIds = addUnique(topic.sourceIds, sourceId);
  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = addUnique(
    topic.currentSummary.facts,
    "国家サイバー統括室は2026年9月11日、重要インフラ所管省庁等が安全基準等の策定に当たって参照するための『重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン』を策定した。重要インフラ統一基準と同じ2026年10月1日に施行予定である。"
  );
  topic.currentSummary.interpretations = addUnique(
    topic.currentSummary.interpretations,
    "重要インフラ統一基準から各分野の安全基準等へ具体化する際の共通参照文書は、2026年9月11日の安全基準等策定ガイドライン確定により、案段階から最終版へ移った。企業は統一基準だけでなく、自社分野の所管省庁・業界団体がこのガイドラインを踏まえて安全基準等をどう改定するかを追う必要がある。"
  );
  topic.currentSummary.implications = addUnique(
    topic.currentSummary.implications,
    "2026年10月1日の施行に向け、安全基準等策定ガイドラインの最終版を基準に、自社分野の強制基準・推奨基準・業界ガイドライン・内規の改定状況を確認する。"
  );
  topic.currentSummary.uncertain = (topic.currentSummary.uncertain || []).filter(
    (text) => !String(text).includes("安全基準等策定ガイドラインは2026年8月5日公表の案")
  );
  topic.currentSummary.uncertain = addUnique(
    topic.currentSummary.uncertain,
    "安全基準等策定ガイドライン自体は2026年9月11日に確定したが、各重要インフラ分野の安全基準等へどのように反映されるかは所管省庁・業界団体ごとに確認が必要である。"
  );

  const issue = (topic.issues || []).find((item) => item && item.id === "cyber-critical-infrastructure-unified-standard");
  if (issue) {
    issue.conclusion = "重要インフラ統一基準は、2025年改正サイバーセキュリティ基本法に基づき、重要インフラ事業者等が分野・事業者横断的に実施すべき対策を促進する政府機関の施策に関する統一基準である。2026年9月11日には、所管省庁等が安全基準等を策定する際に参照する安全基準等策定ガイドラインも確定し、両文書は2026年10月1日に施行予定である。";
    issue.exception = "統一基準・安全基準等策定ガイドラインを、サイバー対処能力強化法の届出・インシデント報告等の直接的な法定義務や、すべての重要インフラ事業者へ一律に罰則付き義務を課す文書と同一視しない。";
    issue.uncertain = "ガイドラインは最終化されたが、各所管省庁・業界団体が整備する分野別の安全基準等への具体的な反映内容は継続確認が必要である。";
    issue.sourceIds = addUnique(issue.sourceIds, sourceId);
  }
})();
