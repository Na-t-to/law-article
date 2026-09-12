(() => {
  const sourceId = "source-nco-critical-infrastructure-unified-standard-2026";
  const articleId = "article-nco-critical-infrastructure-unified-standard-2026";
  const topicSlug = "cyber-countermeasures-critical-infrastructure";
  const issueId = "cyber-critical-infrastructure-unified-standard";

  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));
  const addUniqueText = (target, text) => {
    const items = Array.isArray(target) ? target.slice() : [];
    if (!items.includes(text)) items.push(text);
    return items;
  };

  window.SOURCE_DATA = (window.SOURCE_DATA || []).map((source) => {
    if (source.id !== sourceId) return source;
    return {
      ...source,
      typeLabel: "重要インフラ統一基準・安全基準等策定ガイドライン",
      whyImportant: "2026年7月31日決定の重要インフラ統一基準と、9月11日に策定された安全基準等策定ガイドラインを同じ公式入口から確認できる。統一基準から所管省庁・業界団体等の安全基準等へ具体化する経路を追う基準点。"
    };
  });

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => {
    if (article.id !== articleId) return article;
    return {
      ...article,
      collectedAt: "2026-09-12",
      sourceLabel: "一次資料・重要インフラ統一基準／安全基準等策定ガイドライン・施行前",
      summary: "2026年7月31日に決定された重要インフラ統一基準に加え、国家サイバー統括室が2026年9月11日に『重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン』を策定した公式資料。統一基準が示す分野横断の共通枠組みを、所管省庁・業界団体等が安全基準等へ落とし込む際の詳細な参照文書が確定し、2026年10月1日の施行予定に向けた上流の制度文書がそろった。",
      whyImportant: [
        "2026年8月の案を経て、9月11日に安全基準等策定ガイドラインが策定されたことを公式資料で確認できる",
        "統一基準は政府施策の共通基準、ガイドラインは所管省庁・業界団体等が安全基準等を策定するための詳細な参照資料という役割分担を確認できる",
        "重要インフラ事業者への直接一律の罰則付き義務と同一視せず、分野別の安全基準等を通じて企業実務へ具体化される経路を追える"
      ],
      reformEventId: article.reformEventId || "critical-infrastructure-unified-standard-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: addUniqueStrings(article.reformStageSourceIds, [sourceId]),
      whatChanged: "2026年8月の案を経て9月11日に安全基準等策定ガイドラインが策定され、重要インフラ統一基準から所管省庁・業界団体等の安全基準等へ具体化する詳細な参照文書が確定した。"
    };
  });

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const currentSummary = topic.currentSummary || {};
    const facts = (currentSummary.facts || []).filter((text) => !(typeof text === "string" && text.includes("安全基準等策定ガイドライン") && (text.includes("案") || text.includes("具体化途上"))));
    const interpretations = currentSummary.interpretations || [];
    const implications = currentSummary.implications || [];
    const uncertain = (currentSummary.uncertain || []).filter((text) => !(typeof text === "string" && text.includes("安全基準等策定ガイドライン") && (text.includes("案") || text.includes("具体化途上"))));

    const finalFact = "2026年9月11日、国家サイバー統括室は『重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン』を策定した。2026年7月31日決定の重要インフラ統一基準とあわせ、2026年10月1日の施行予定に向けた上流の制度文書がそろった。";
    const finalInterpretation = "重要インフラ統一基準は政府施策の共通基準、安全基準等策定ガイドラインは所管省庁・業界団体等が分野別の安全基準等を策定する際の詳細な参照資料であり、各記載をそのまま民間事業者への一律の罰則付き直接義務と扱わない。";
    const finalImplication = "2026年9月11日の策定版を基準に、自社分野の安全基準等・業界ガイドラインの改定を追い、ガバナンス、リスク管理、サプライチェーン、監視・復旧等の既存統制との差分を確認する。";
    const finalUncertain = "安全基準等策定ガイドラインは策定済みだが、各分野の安全基準等・実施計画への具体的な反映や、個々の事業者に求められる運用水準は所管分野ごとに継続確認が必要である。";

    return {
      ...topic,
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      currentSummary: {
        ...currentSummary,
        facts: addUniqueText(facts, finalFact),
        interpretations: addUniqueText(interpretations, finalInterpretation),
        implications: addUniqueText(implications, finalImplication),
        uncertain: addUniqueText(uncertain, finalUncertain)
      },
      issues: (topic.issues || []).map((issue) => issue.id === issueId
        ? {
            ...issue,
            conclusion: "重要インフラ統一基準は2026年7月31日に決定され、安全基準等策定ガイドラインは2026年9月11日に策定された。両者を、政府施策の共通基準から所管省庁・業界団体等の分野別安全基準等へ具体化する一連の枠組みとして扱う。",
            uncertain: "上流の統一基準・ガイドラインは策定済みだが、各分野の安全基準等・実施計画への反映時期・具体内容と、個々の事業者に求められる運用水準は継続確認が必要である。",
            sourceIds: addUniqueStrings(issue.sourceIds, [sourceId])
          }
        : issue),
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceId])
    };
  });
})();
