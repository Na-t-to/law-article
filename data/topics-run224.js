(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "aml-kyc-criminal-proceeds");
  if (!topic) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };

  topic.lastUpdated = "2026-09-19";
  topic.lastVerified = "2026-09-19";
  topic.sourceIds = addUnique(topic.sourceIds, "source-npa-aml-annual-report-2025");
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-npa-aml-annual-report-20260312");
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-tmi-dnfbp-aml-cft-20260917");

  if (!(topic.issues || []).some((issue) => issue && issue.id === "aml-dnfbp-governance")) {
    topic.issues = (topic.issues || []).concat({
      id: "aml-dnfbp-governance",
      title: "DNFBPsのAML/CFT体制と疑わしい取引届出をどう実効化するか",
      status: "interpreted",
      stage: "effective",
      views: [],
      conclusion: "宅地建物取引業者、宝石・貴金属等取扱事業者、郵便物受取サービス業者等のDNFBPsでは、法定の取引時確認・記録・疑わしい取引届出を前提に、自社リスクの特定・評価、モニタリング、内部規程、教育、監査、経営レベルの関与まで一体で運用し、対策の有効性を検証する。",
      exception: "リスクベース・アプローチは、リスクが低い取引について法定の取引時確認要件を任意に省略できるという意味ではない。業種ごとの監督指針・ガイドラインと犯収法上の最低要件を分けて確認する。",
      uncertain: "FATF第5次対日相互審査を見据えた監督・アウトリーチの強度や業種別の具体的な検査運用は、各所管行政庁の今後のガイドライン・要請・執行状況を継続確認する必要がある。",
      sourceIds: ["source-npa-aml-annual-report-2025"]
    });
  }

  if (topic.currentSummary) {
    topic.currentSummary.facts = addUnique(
      topic.currentSummary.facts,
      "警察庁JAFICの令和7年年次報告書では、疑わしい取引の年間通知101万9,405件のうちDNFBPsは439件（約0.04％）で、金融機関からはDNFBPsに関係する疑わしい取引情報が確認される一方、対応するDNFBPs側の届出が確認されない例があり、潜在的な情報の存在が指摘されている。"
    );
    topic.currentSummary.interpretations = addUnique(
      topic.currentSummary.interpretations,
      "DNFBPsのAML/CFTは、取引時確認や記録保存を形式的に実施するだけでなく、リスク評価と疑わしい取引の検知・届出を実際に機能させる『有効性』の観点で、内部規程・教育・監査・経営関与までつなげて見る必要がある。"
    );
    topic.currentSummary.implications = addUnique(
      topic.currentSummary.implications,
      "DNFBPに該当する事業者は、自社の特定業務・特定取引、顧客リスク、疑わしい取引の判断基準、モニタリング、統括管理者、教育・内部監査、取締役会等への報告を一つのAML/CFT管理サイクルとして棚卸しする。"
    );
  }

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "DNFBPのリスク評価・疑わしい取引届出");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "AML/CFT内部規程・教育・監査・経営報告");
})();
