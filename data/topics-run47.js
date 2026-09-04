(() => {
  const topic = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).find((item) => item.slug === "cyber-countermeasures-critical-infrastructure");
  if (topic) {
    topic.summary = "サイバー対処能力強化法の直接的な届出・報告義務と、2025年改正サイバーセキュリティ基本法に基づく重要インフラ統一基準・分野別安全基準の整備を切り分け、重要インフラ事業者とITベンダーの施行対応を整理する。";
    topic.lastUpdated = "2026-09-04";
    topic.lastVerified = "2026-09-04";

    const overview = "2026年7月31日、サイバーセキュリティ戦略本部は、2025年改正サイバーセキュリティ基本法に基づく「重要インフラのサイバーセキュリティ対策のための統一基準」を決定した。統一基準は2026年10月1日施行予定で、サイバー対処能力強化法の届出・報告義務とは別の制度として管理する。";
    if (!topic.overview.includes(overview)) topic.overview.push(overview);

    const fact = "2026年7月31日に重要インフラ統一基準が決定され、2026年10月1日施行予定とされている。これに伴い、重要インフラ行動計画の改定と従来の安全基準等策定指針の廃止も同日施行予定である。";
    if (!topic.currentSummary.facts.includes(fact)) topic.currentSummary.facts.push(fact);

    const interpretation = "重要インフラ統一基準は、重要インフラ事業者等が分野横断で講ずべき対策を促進するための政府機関の施策に関する統一基準であり、サイバー対処能力強化法が特別社会基盤事業者に課す届出・報告等の直接義務と同一視しない。企業実務では、所管省庁・業界団体が統一基準を踏まえて整備する安全基準等まで追う。";
    if (!topic.currentSummary.interpretations.includes(interpretation)) topic.currentSummary.interpretations.push(interpretation);

    const implication = "自社の分野に適用される安全基準等について、重要インフラ統一基準と今後確定する安全基準等策定ガイドラインを踏まえた改定状況を確認し、ガバナンス、リスク管理、サプライチェーン対策等を更新する。";
    if (!topic.currentSummary.implications.includes(implication)) topic.currentSummary.implications.push(implication);

    const uncertain = "重要インフラ統一基準を受けた安全基準等策定ガイドラインは2026年8月5日に案が公表され意見募集が行われた段階であり、最終版と各分野の安全基準等への反映を継続確認する必要がある。";
    if (!topic.currentSummary.uncertain.includes(uncertain)) topic.currentSummary.uncertain.push(uncertain);

    if (!topic.issues.some((issue) => issue.id === "cyber-critical-infrastructure-unified-standard")) {
      topic.issues.push({
        id:"cyber-critical-infrastructure-unified-standard",
        title:"重要インフラ統一基準とサイバー対処能力強化法をどう切り分けるか",
        status:"authoritative",
        stage:"enacted",
        views:[],
        conclusion:"重要インフラ統一基準は、2025年改正サイバーセキュリティ基本法に基づき、重要インフラ事業者等が分野・事業者横断的に実施すべき対策を促進するための政府機関の施策に関する統一基準であり、2026年10月1日施行予定である。企業は、統一基準そのものだけでなく、所管省庁・業界団体が整備する安全基準等への反映を追う。",
        exception:"統一基準を、サイバー対処能力強化法の届出・インシデント報告等の直接的な法定義務や、すべての重要インフラ事業者へ一律に罰則付き義務を課す文書と同一視しない。",
        uncertain:"安全基準等策定ガイドラインは2026年8月5日公表の案について意見募集が行われており、最終版と各分野の安全基準等の改定内容を確認する必要がある。",
        sourceIds:["source-nco-critical-infrastructure-unified-standard-2026"]
      });
    }

    topic.sourceIds = [...new Set([...(topic.sourceIds || []), "source-nco-critical-infrastructure-unified-standard-2026"] )];
    topic.practicalImpacts = [...new Set([...(topic.practicalImpacts || []), "所管省庁・業界の安全基準等", "サイバーセキュリティ・ガバナンス"] )];
  }

  window.REFORM_EVENT_DATA=(Array.isArray(window.REFORM_EVENT_DATA)?window.REFORM_EVENT_DATA:[]).concat([
    {
      id:"critical-infrastructure-unified-standard-2026",
      title:"重要インフラ・サイバーセキュリティ統一基準",
      eventType:"regulation_or_guideline",
      lawId:"critical-infrastructure-unified-cybersecurity-standard",
      lawLabel:"重要インフラ・サイバーセキュリティ統一基準",
      relatedTopics:["cyber-countermeasures-critical-infrastructure"],
      effectiveDateStatus:"planned",
      effectiveDates:["2026-10-01"],
      effectiveDateSourceIds:["source-nco-critical-infrastructure-unified-standard-2026"],
      matchSourceIds:["source-nco-critical-infrastructure-unified-standard-2026"],
      sourceIds:["source-nco-critical-infrastructure-unified-standard-2026"]
    }
  ]);
})();
