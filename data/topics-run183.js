(() => {
  const topicSlug = "cyber-countermeasures-critical-infrastructure";
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === topicSlug);
  if (!topic) return;

  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (value && !target.includes(value)) target.push(value); });
  };
  const replaceOrAdd = (target, test, value) => {
    if (!Array.isArray(target)) return;
    const index = target.findIndex((item) => test(String(item || "")));
    if (index >= 0) target[index] = value;
    else if (!target.includes(value)) target.push(value);
  };

  const lawSource = "source-cyber-capability-act-2025";
  const orderSource = "source-cyber-reporting-order-2026";
  const exclusionSource = "source-cyber-reporting-exclusion-notice-2026";
  const formSource = "source-cyber-report-form-notice-2026";
  const vulnSource = "source-ipa-vulnerability-partnership-draft-2026";

  topic.lastUpdated = "2026-09-17";
  topic.lastVerified = "2026-09-17";
  addUnique(topic.sourceIds, [lawSource, orderSource, exclusionSource, formSource, vulnSource]);
  addUnique(topic.overview, [
    "2026年9月15日の関係府省告示により、特定重要電子計算機の届出で命令2条1項ただし書の指定対象となる製品と、特定侵害事象等の報告様式が確定した。告示第1号はMicrosoft WindowsとWindows Serverを指定し、告示第2号はDDoS、ランサムウェア、その他の事象を関係省庁共通様式1〜3へ接続する。いずれも2026年10月1日施行である。",
    "2026年9月14日にはIPAが、サイバー対処能力強化法に基づく内閣府からIPA・JPCERT/CCへの要請等を情報セキュリティ早期警戒パートナーシップへ組み込むガイドライン改訂案を公表した。これは9月24日まで意見募集中の案であり、最終版ではない。"
  ]);

  topic.currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
  addUnique(topic.currentSummary.facts, [
    "2026年9月15日の関係府省告示第1号は、関係府省令2条1項ただし書の指定対象としてMicrosoft WindowsとWindows Serverを定めた。告示第2号は特定侵害事象等の報告様式をDDoS、ランサムウェア、その他の3区分で関係省庁共通様式へ接続した。両告示は2026年10月1日施行である。",
    "IPAは2026年9月14日、サイバー対処能力強化法に基づく内閣府の要請等を踏まえて、IPA・JPCERT/CC・NICTと政府との脆弱性情報連携を早期警戒パートナーシップへ反映するガイドライン改訂案を公表し、9月24日まで意見を募集している。"
  ]);
  addUnique(topic.currentSummary.interpretations, [
    "Windows等が命令2条1項ただし書の指定対象となっても、そのことだけで当該システムが特定重要電子計算機ではなくなる、または特定侵害事象等の報告対象外になるとは限らない。資産届出とインシデント報告は要件を分けて確認する。",
    "脆弱性情報連携は、独立した新制度を一から作るのではなく、IPA・JPCERT/CC・NICTの既存の早期警戒パートナーシップへ法に基づく政府要請・通知を組み込む方向で具体化されている。"
  ]);
  addUnique(topic.currentSummary.implications, [
    "10月1日の制度開始に向け、資産台帳について告示第1号の指定対象を反映するとともに、DDoS・ランサムウェア・その他の共通報告様式に必要な情報を早期に埋められるよう、24時間連絡、ログ保全、委託先からの一次通知、原因・影響範囲の更新手順を確認する。"
  ]);
  topic.currentSummary.uncertain = (topic.currentSummary.uncertain || []).filter((text) => !String(text).includes("届出除外対象、報告様式"));
  addUnique(topic.currentSummary.uncertain, [
    "2026年9月14日の情報セキュリティ早期警戒パートナーシップガイドラインは改訂案であり、最終版の文言・運用は意見募集後の成案を確認する必要がある。",
    "サイバー対処能力強化法には段階施行があり、通信情報の利用等を含む制度全体の施行時期を、2026年10月1日の特別社会基盤事業者向け届出・報告制度と同一視しない。"
  ]);

  const scopeIssue = (topic.issues || []).find((item) => item && item.id === "cyber-countermeasures-scope");
  if (scopeIssue) addUnique(scopeIssue.sourceIds, [lawSource, orderSource]);

  const reportingIssue = (topic.issues || []).find((item) => item && item.id === "cyber-countermeasures-reporting");
  if (reportingIssue) {
    reportingIssue.conclusion = "2026年10月1日の施行に向け、特定重要電子計算機の届出と特定侵害事象等の報告について、対象資産、認知・判断、当局連絡、証跡保存の運用を準備する。2026年9月15日告示により、命令2条1項ただし書の指定対象とDDoS・ランサムウェア・その他の報告様式が確定した。";
    reportingIssue.exception = "届出上の指定対象から外れる製品があっても、それだけで当該システムが特定重要電子計算機ではなくなる、または特定侵害事象等の報告義務まで外れるとは限らない。届出と報告を別々に判定する。";
    reportingIssue.uncertain = "届出除外対象・報告様式は9月15日告示で確定した。今後も国家サイバー統括室等が公表する制度解説・運用情報の更新を確認する。";
    addUnique(reportingIssue.sourceIds, [lawSource, orderSource, exclusionSource, formSource]);
  }

  const vendorIssue = (topic.issues || []).find((item) => item && item.id === "cyber-countermeasures-vendor-contracts");
  if (vendorIssue) addUnique(vendorIssue.sourceIds, [lawSource, orderSource]);

  const privateDefenseIssue = (topic.issues || []).find((item) => item && item.id === "cyber-private-active-defense");
  if (privateDefenseIssue) addUnique(privateDefenseIssue.sourceIds, [lawSource]);

  const vulnIssueId = "cyber-countermeasures-vulnerability-coordination";
  if (!(topic.issues || []).some((item) => item && item.id === vulnIssueId)) {
    topic.issues = (topic.issues || []).concat([{
      id: vulnIssueId,
      title: "脆弱性情報の政府連携はどう変わるか",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "IPAの2026年9月14日改訂案では、サイバー対処能力強化法に基づく内閣府からIPA・JPCERT/CCへの要請等を前提に、政府への通知や関係機関間連携を情報セキュリティ早期警戒パートナーシップへ組み込む方向が示されている。",
      exception: "現時点では改訂案であり、最終ガイドラインの文言・運用は意見募集後の成案を確認する必要がある。",
      sourceIds: [vulnSource]
    }]);
  }

  replaceOrAdd(topic.practicalImpacts || (topic.practicalImpacts = []), (text) => text.includes("届出") || text.includes("報告"), "特定重要電子計算機の届出・DDoS／ランサムウェア等の報告");
  addUnique(topic.practicalImpacts, ["脆弱性情報の政府連携"]);
})();
