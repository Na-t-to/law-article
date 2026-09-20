(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };
  const removeValues = (list, values) => (Array.isArray(list) ? list : []).filter((value) => !values.includes(value));
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "cyber-countermeasures-critical-infrastructure");
  if (!topic) return;

  topic.lastUpdated = "2026-09-20";
  topic.lastVerified = "2026-09-20";
  topic.sourceIds = removeValues(topic.sourceIds, ["source-nco-critical-infrastructure-safety-guideline-20260911"]);
  topic.sourceIds = addUnique(topic.sourceIds, "source-ipa-ransomware-lessons-20260908");
  topic.referenceArticleIds = removeValues(topic.referenceArticleIds, [
    "article-nco-critical-infrastructure-safety-guideline-20260911",
    "article-miyake-critical-infrastructure-guideline-20260913"
  ]);
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-nco-critical-infrastructure-safety-guideline-2026");
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-miyake-critical-infrastructure-safety-guideline-2026");
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-ipa-ransomware-lessons-20260908");
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-miyake-ransomware-lessons-20260910");

  const unifiedIssue = (topic.issues || []).find((issue) => issue && issue.id === "cyber-critical-infrastructure-unified-standard");
  if (unifiedIssue) {
    unifiedIssue.sourceIds = removeValues(unifiedIssue.sourceIds, ["source-nco-critical-infrastructure-safety-guideline-20260911"]);
  }

  if (!(topic.issues || []).some((issue) => issue && issue.id === "cyber-ransomware-preparation-response")) {
    topic.issues = (topic.issues || []).concat({
      id: "cyber-ransomware-preparation-response",
      title: "ランサムウェア発生前後の初動・復旧・法務判断をどう準備するか",
      status: "interpreted",
      stage: "effective",
      views: [],
      conclusion: "侵入・権限取得・横展開・データ持出しが暗号化より先行し得ることを前提に、初動指揮、ログ・証拠保全、復旧優先順位、バックアップ、外部専門家・警察・当局連携、通知・公表を平時から演習する。",
      exception: "身代金対応、本人通知、公表、当局報告等の法的評価は事案・適用法令・契約関係ごとに異なり、自動的な一律対応としない。",
      uncertain: "攻撃手法や脅威動向は急速に変化するため、プレイブック、連絡網、技術統制を定期的に更新する必要がある。",
      sourceIds: ["source-ipa-ransomware-lessons-20260908"]
    });
  }

  if (topic.currentSummary) {
    topic.currentSummary.facts = addUnique(
      topic.currentSummary.facts,
      "IPAは2026年9月8日、国内の被害組織へのヒアリング等を基礎に、ランサムウェアの経営判断、初動、復旧、バックアップ、ログ、対外説明等の教訓をまとめた。"
    );
    topic.currentSummary.interpretations = addUnique(
      topic.currentSummary.interpretations,
      "ランサムウェア対応は暗号化発見後の復旧だけでなく、侵害調査、証拠保全、業務継続、当局・警察対応、本人・取引先通知、対外説明を技術対応と並行して進める危機管理として設計する必要がある。"
    );
    topic.currentSummary.implications = addUnique(
      topic.currentSummary.implications,
      "ランサムウェアのプレイブックでは、法務・情シス・広報・経営・外部専門家の役割、復旧優先順位、ログ・証拠保全、報告・通知・公表の判断経路を演習で検証する。"
    );
  }
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "ランサムウェア初動・証拠保全・復旧演習");
})();

(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "aml-kyc-criminal-proceeds");
  if (!topic) return;

  topic.lastUpdated = "2026-09-20";
  topic.lastVerified = "2026-09-20";
  topic.sourceIds = addUnique(topic.sourceIds, "source-mof-fatf-io4-dnfbps-20260918");
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-mof-fatf-io4-dnfbps-20260918");

  const issue = (topic.issues || []).find((item) => item && item.id === "aml-dnfbp-governance");
  if (issue) {
    issue.sourceIds = addUnique(issue.sourceIds, "source-mof-fatf-io4-dnfbps-20260918");
  }

  if (topic.currentSummary) {
    topic.currentSummary.facts = addUnique(
      topic.currentSummary.facts,
      "財務省は2026年9月、FATF第5次相互審査のIO4について、DNFBPsの参入管理、監督当局と事業者のリスク理解、予防措置、モニタリング、是正措置を6つの主要課題として整理した。"
    );
    topic.currentSummary.interpretations = addUnique(
      topic.currentSummary.interpretations,
      "DNFBPsのAML/CFTでは、本人確認や規程の有無だけでなく、自社リスク評価、顧客管理、疑わしい取引届出、内部管理・監査が実際に機能しているかという有効性まで説明できることが重要になる。"
    );
    topic.currentSummary.implications = addUnique(
      topic.currentSummary.implications,
      "FATF第5次相互審査を見据え、実質的支配者確認、継続モニタリング、疑わしい取引の判断・届出、内部監査、経営関与を一体の運用として証跡化できるか点検する。"
    );
  }
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "FATF第5次相互審査を見据えたDNFBPの有効性検証");
})();
