(() => {
  if (window.__LAW_INDEX_RUN253_TOPIC_APPLIED__) return;
  window.__LAW_INDEX_RUN253_TOPIC_APPLIED__ = true;

  const TOPIC = "aml-kyc-criminal-proceeds";
  const ISSUE = "aml-dnfbp-risk-based-governance";
  const PRIMARY = "source-npa-jafic-annual-report-2025-dnfbp";
  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;

    const issues = Array.isArray(topic.issues) ? [...topic.issues] : [];
    if (!issues.some((issue) => issue && issue.id === ISSUE)) {
      issues.push({
        id: ISSUE,
        title: "DNFBPsはAML/CFT態勢をどう整えるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "DNFBPsに該当する事業者は、犯罪収益移転防止法上の義務と所管省庁のガイドラインを前提に、リスク評価、教育訓練、統括管理、継続的顧客管理、疑わしい取引の届出、内部監査等を自社リスクに応じて運用する。",
        exception: "リスクベース・アプローチは法定の取引時確認等を緩和できるという意味ではない。DNFBPsに該当しない事業者は特定事業者としての義務対象ではないが、取引先KYCへの協力や口座・サービスの悪用リスクは別途管理する。",
        uncertain: "FATF第5次対日相互審査や業態別監督の進展に伴い、監督実務と有効性評価の具体化を継続確認する。",
        sourceIds: [PRIMARY, "source-npa-aml-overview-2026"]
      });
    }

    const summary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    return {
      ...topic,
      lastUpdated: "2026-09-28",
      lastVerified: "2026-09-28",
      summary: "犯罪収益移転防止法について、2026年の口座・送金犯罪対策、2027年4月の本人確認方法厳格化に加え、DNFBPsのリスクベースAML/CFT、疑わしい取引の届出、有効性検証を企業実務から整理する。",
      sourceIds: addUnique(topic.sourceIds, PRIMARY),
      practicalImpacts: addUnique(addUnique(addUnique(topic.practicalImpacts, "DNFBPリスク評価・有効性検証"), "疑わしい取引の届出"), "AML統括管理・内部監査"),
      issues,
      currentSummary: {
        ...summary,
        facts: addUnique(
          addUnique(summary.facts, "警察庁JAFICの令和7年年次報告では、2025年の疑わしい取引の届出総数1,019,405件に対し、DNFBPsからの届出は439件（約0.04％）であり、DNFBPsに関係する多数の疑わしい取引情報が潜在している可能性が指摘された。"),
          "同年次報告は、不動産、宝石・貴金属等を含むDNFBPsの業態別リスクと、行政庁・特定事業者によるリスク理解、監督、疑わしい取引の届出促進等の取組を整理している。"
        ),
        interpretations: addUnique(summary.interpretations, "DNFBPのAML/CFTは本人確認だけで完結せず、リスク評価、継続的顧客管理、取引モニタリング、疑わしい取引の届出、教育、内部監査、経営管理までを一つの態勢として接続する必要がある。"),
        implications: addUnique(
          addUnique(summary.implications, "自社が犯罪収益移転防止法上の特定事業者・DNFBPに該当するかと、所管省庁のガイドラインを確認する。"),
          "リスク評価書、継続的顧客管理、疑わしい取引の届出判断、教育・内部監査について、実施有無だけでなく有効性を点検する。"
        )
      }
    };
  });
})();