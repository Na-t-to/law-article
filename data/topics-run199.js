(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "criminal-proceeds-aml-ekyc-2026-2027");
  if (!topic) return;

  const sourceId = "source-npa-jafic-annual-report-2025-identity-review";
  const articleId = "article-tmi-dnfbp-aml-cft-20260917";
  const issueId = "aml-dnfbp-risk-based-effectiveness-2026";

  topic.lastUpdated = "2026-09-17";
  topic.lastVerified = "2026-09-17";
  topic.summary = "2026年改正犯罪収益移転防止法による不正口座・送金対策、2027年4月の本人確認方法厳格化に加え、指定非金融業者・職業専門家（DNFBPs）に求められるリスクベースのAML/CFT管理と疑わしい取引の届出実務を追う。";

  topic.overview = topic.overview || [];
  if (!topic.overview.some((text) => String(text).includes("DNFBPs"))) {
    topic.overview.push("JAFICの令和7年年次報告書は、宅地建物取引業者、宝石・貴金属等取扱事業者、郵便物受取サービス業者等のDNFBPsを特集し、疑わしい取引の届出やリスクベース・アプローチの実効性を重点課題としている。本人確認の方式変更だけでなく、顧客リスク評価、取引モニタリング、届出、内部監査まで含めてAML/CFT体制を点検する必要がある。 ");
  }

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = topic.currentSummary.facts || [];
  if (!topic.currentSummary.facts.some((text) => String(text).includes("101万9,405件"))) {
    topic.currentSummary.facts.push("JAFICの令和7年年次報告書によれば、2025年中の疑わしい取引の年間通知件数は101万9,405件で、そのうちDNFBPsからの通知は439件（約0.04％）だった。JAFICは、金融機関からDNFBPsに関係する疑わしい送金情報が届出されている一方で対応するDNFBPs側の届出が確認されない例を挙げ、潜在する疑わしい取引情報の存在を指摘している。");
  }
  topic.currentSummary.interpretations = topic.currentSummary.interpretations || [];
  if (!topic.currentSummary.interpretations.some((text) => String(text).includes("リスクベース・アプローチ"))) {
    topic.currentSummary.interpretations.push("DNFBPsのAML/CFTでは、リスクベース・アプローチは高リスク領域へ資源を重点配分する考え方であり、犯罪収益移転防止法上の取引時確認等の法定要件を任意に緩和できるという意味ではない。形式的な規程整備だけでなく、疑わしい取引の届出、モニタリング、監査等が実際に機能しているかという有効性の確認が重要になる。");
  }
  topic.currentSummary.implications = topic.currentSummary.implications || [];
  if (!topic.currentSummary.implications.some((text) => String(text).includes("DNFBPs"))) {
    topic.currentSummary.implications.push("DNFBPsに該当する事業者は、自社の特定業務・特定取引、顧客リスク評価、継続的顧客管理、疑わしい取引の検知・届出、教育訓練、統括管理、内部監査が、法令と所管省庁の業界別ガイドラインに対応しているかを一体で点検する。");
  }
  topic.currentSummary.uncertain = topic.currentSummary.uncertain || [];
  if (!topic.currentSummary.uncertain.some((text) => String(text).includes("FATF第5次"))) {
    topic.currentSummary.uncertain.push("2027年からのFATF第5次対日相互審査を見据え、DNFBPsへのリスクベース監督や疑わしい取引の届出促進がさらに具体化される可能性があるため、所管省庁・業界団体の追加要請やガイドライン更新を継続確認する必要がある。");
  }

  topic.issues = topic.issues || [];
  if (!topic.issues.some((issue) => issue?.id === issueId)) {
    topic.issues.push({
      id: issueId,
      title: "DNFBPsのAML/CFTをリスクベースでどう運用し、有効性をどう確認するか",
      status: "interpreted",
      stage: "effective",
      views: [],
      conclusion: "DNFBPsは、犯罪収益移転防止法上の取引時確認・記録保存・疑わしい取引の届出等を前提に、業種別リスクと顧客・取引リスクを評価して管理資源を重点配分し、モニタリング、教育、統括管理、内部監査等が実際に機能しているかを検証する必要がある。リスクベース・アプローチは法定の取引時確認要件を任意に緩和する根拠ではない。",
      exception: "DNFBPsには宅地建物取引業、宝石・貴金属等取扱業、郵便物受取サービス業等のほか職業専門家も含まれ、具体的な義務・監督ガイドライン・リスク特性は業態ごとに異なる。",
      uncertain: "FATF第5次対日相互審査を見据えた監督強化や届出促進策の具体化は継続中であり、所管行政庁の追加要請・ガイドライン改訂によって実務上の期待水準が更新され得る。",
      sourceIds: [sourceId]
    });
  }

  topic.referenceArticleIds = topic.referenceArticleIds || [];
  if (!topic.referenceArticleIds.includes(articleId)) topic.referenceArticleIds.push(articleId);
  topic.practicalImpacts = topic.practicalImpacts || [];
  ["顧客・取引リスク評価", "疑わしい取引の検知・届出", "AML/CFT内部監査・有効性検証"].forEach((label) => {
    if (!topic.practicalImpacts.includes(label)) topic.practicalImpacts.push(label);
  });
})();
