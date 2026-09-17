(() => {
  const verifiedAt = "2026-09-17";
  const cyberTopic = "cyber-countermeasures-critical-infrastructure";
  const cyberSource = "source-nco-critical-infrastructure-safety-guideline-20260911";
  const cyberPrimaryArticle = "article-nco-critical-infrastructure-safety-guideline-20260911";
  const cyberSecondaryArticle = "article-miyake-critical-infrastructure-guideline-20260913";
  const bhrTopic = "business-human-rights-dd";
  const bhrArticle = "article-nishimura-human-rights-crisis-management-20260917";

  const pushUnique = (list, value) => {
    if (!Array.isArray(list) || list.includes(value)) return;
    list.push(value);
  };
  const pushText = (list, text, marker) => {
    if (!Array.isArray(list) || list.some((item) => String(item || "").includes(marker))) return;
    list.push(text);
  };
  const replaceContaining = (list, marker, replacement) => {
    if (!Array.isArray(list)) return;
    const index = list.findIndex((item) => String(item || "").includes(marker));
    if (index >= 0) list[index] = replacement;
    else list.push(replacement);
  };
  const appendSentence = (item, key, sentence, marker) => {
    if (!item) return;
    const current = String(item[key] || "").trim();
    if (current.includes(marker)) return;
    item[key] = current ? `${current} ${sentence}` : sentence;
  };

  const cyber = (window.TOPIC_DATA || []).find((item) => item?.slug === cyberTopic);
  if (cyber) {
    cyber.lastUpdated = verifiedAt;
    cyber.lastVerified = verifiedAt;
    cyber.sourceIds = cyber.sourceIds || [];
    cyber.referenceArticleIds = cyber.referenceArticleIds || [];
    pushUnique(cyber.sourceIds, cyberSource);
    pushUnique(cyber.referenceArticleIds, cyberPrimaryArticle);
    pushUnique(cyber.referenceArticleIds, cyberSecondaryArticle);

    const summary = cyber.currentSummary || {};
    pushText(summary.facts, "2026年9月11日、国家サイバー統括室は『重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン』を確定し、重要インフラ統一基準とともに2026年10月1日施行予定とした。", "2026年9月11日");
    pushText(summary.interpretations, "安全基準等策定ガイドラインは、所管省庁・業界団体等が分野別の安全基準等を整備するための詳細な参照枠組みであり、サイバー対処能力強化法の届出・報告義務そのものとは区別して読む。", "分野別の安全基準等");
    pushText(summary.implications, "重要インフラ事業者等は、経営層・CISOの関与、クラウド・委託先・サプライチェーン・IT/OTを含むリスク管理、検知・対応・復旧まで含むレジリエンス、委託契約上のセキュリティ条項を、自社分野の安全基準等へどう反映するか確認する。", "委託契約上のセキュリティ条項");
    replaceContaining(summary.uncertain, "安全基準等策定ガイドラインは2026年8月5日に案が公表", "安全基準等策定ガイドライン自体は2026年9月11日に確定した。今後は、各所管省庁・業界団体が分野別の安全基準等へどのように反映し、事業者にどの程度の具体的対応を求めるかを継続確認する必要がある。");

    const issue = (cyber.issues || []).find((item) => item?.id === "cyber-critical-infrastructure-unified-standard");
    if (issue) {
      issue.sourceIds = issue.sourceIds || [];
      pushUnique(issue.sourceIds, cyberSource);
      appendSentence(issue, "conclusion", "安全基準等策定ガイドラインは2026年9月11日に確定し、重要インフラ統一基準とともに10月1日施行予定である。所管省庁等はこのガイドラインを参照して分野別の安全基準等を整備する。", "2026年9月11日");
      issue.uncertain = "最終ガイドラインは確定したが、各所管省庁・業界団体による分野別の安全基準等への具体的な反映内容、改定時期、個々の事業者に求められる運用水準は継続確認が必要である。";
    }
  }

  const bhr = (window.TOPIC_DATA || []).find((item) => item?.slug === bhrTopic);
  if (bhr) {
    bhr.lastUpdated = verifiedAt;
    bhr.lastVerified = verifiedAt;
    bhr.referenceArticleIds = bhr.referenceArticleIds || [];
    bhr.issues = bhr.issues || [];
    pushUnique(bhr.referenceArticleIds, bhrArticle);

    const summary = bhr.currentSummary || {};
    pushText(summary.interpretations, "人権問題が顕在化した場面では、国内法上の責任や通常の不祥事対応だけで完結させず、被害申告後の対応、被害者の救済、経営陣への情報共有、ステークホルダーへの説明を国際人権基準の観点も踏まえて危機管理へ組み込む必要がある。", "被害申告後の対応");
    pushText(summary.implications, "重大な人権リスクが発覚した場合のエスカレーション、被害者保護・救済、調査、経営報告、対外説明、是正・再発防止を、平時のグリーバンスメカニズムと接続した危機対応フローとして整備する。", "危機対応フロー");

    if (!bhr.issues.some((item) => item?.id === "bhr-crisis-response")) {
      bhr.issues.push({
        id: "bhr-crisis-response",
        title: "人権問題が顕在化したときの危機管理をどう設計するか",
        status: "interpreted",
        stage: "not_applicable",
        views: [],
        conclusion: "国内法上の責任やコンプライアンス違反の有無だけでなく、被害申告後の対応、被害者の保護・救済、経営陣への情報共有、ステークホルダーへの説明、是正・再発防止までを一連の危機管理として設計し、平時の人権DD・グリーバンスメカニズムへ接続する。",
        exception: "必要な対応は人権影響の性質・深刻度、被害者の状況、企業が影響を引き起こした・助長した・直接関連した関係性などにより異なる。",
        uncertain: "個別事案での調査方法、情報開示、救済内容、外部専門家・NGO等との対話の範囲は、被害者保護と手続の公正を踏まえて案件ごとに判断する必要がある。",
        sourceIds: ["source-meti-bhr-guideline-2022", "source-mofa-bhr-nap-2025"]
      });
    }
  }
})();
