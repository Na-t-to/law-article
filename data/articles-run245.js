(() => {
  if (window.__LAW_INDEX_RUN245_APPLIED__) return;
  window.__LAW_INDEX_RUN245_APPLIED__ = true;

  const ARTICLE_ID = "article-unitis-tmi-jcstar-20251208";
  const TOPIC_ID = "jc-star-iot-security-labeling";

  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === ARTICLE_ID);
  if (article) {
    article.title = "JC-STAR制度の概要とセキュリティ業務への影響（対象製品、レベル、時期等）【2026年9月更新】";
    article.collectedAt = "2026-09-24";
    article.sourceLabel = "実務解説・TMI総合法律事務所／JC-STARの製品・調達実務（2026年9月更新）";
    article.summary = "2026年9月更新版。JC-STARをIoT製品ベンダーと調達・利用企業の双方から解説し、対象製品の洗い出し、製品類型判定、製品・ベンダー体制のGAP分析、対応計画、申請・証跡整備を一連のプロセスとして整理する。更新版では、2026年6月に公表された通信機器・ネットワークカメラの★3セキュリティ要件・適合要件を反映し、★3が政府機関等・重要インフラ・地方公共団体・大企業での調達・設置を主に想定すること、第三者評価を要すること、個別要件を対象外（NA）とする場合にも理由の文書化が必要となることまで具体化している。";
    article.whyImportant = [
      "既収録時点の制度概説から実質更新され、通信機器・ネットワークカメラの★3要件が確定した後の実務へ内容が追随している",
      "★3を単に『上位レベル』と捉えず、政府・重要インフラ等での調達を想定する製品類型、第三者評価、対象外（NA）要件の理由付けまで認証準備の作業単位へ落としている",
      "製品仕様だけでなくベンダーの体制整備もGAP分析対象とし、法務・情報セキュリティ・製品・広報・事業部門を横断した証跡管理として設計する必要性を示している"
    ];
    article.whatChanged = "実質更新／2026年9月更新版を再確認し、2026年6月公表の★3要件、想定調達先、第三者評価、NA要件の理由文書化までARTICLE整理へ反映した。";
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC_ID);
  if (!topic) return;

  topic.lastUpdated = "2026-09-24";
  topic.lastVerified = "2026-09-24";

  if (topic.currentSummary && Array.isArray(topic.currentSummary.facts)) {
    const index = topic.currentSummary.facts.findIndex((value) => typeof value === "string" && value.startsWith("★1の申請受付は2025年3月25日に開始されている。"));
    const updatedFact = "★1の申請受付は2025年3月25日に開始されている。通信機器・ネットワークカメラの★3では2026年6月にセキュリティ要件・適合要件が公表され、政府機関等、重要インフラ事業者、地方自治体、大企業での調達・設置を想定する製品が対象となる。★3評価ガイドはなお準備中である。";
    if (index >= 0) topic.currentSummary.facts[index] = updatedFact;
  }

  if (topic.currentSummary && Array.isArray(topic.currentSummary.interpretations)) {
    const index = topic.currentSummary.interpretations.findIndex((value) => typeof value === "string" && value.startsWith("ベンダー側では、対象製品の洗い出し"));
    const updatedInterpretation = "ベンダー側では、対象製品の洗い出し、製品類型判定、要件とのGAP分析、実装、証跡整備、脆弱性情報の継続管理までを、法務・セキュリティ・製品部門の横断プロセスとして設計するのが実務的である。★3では製品仕様だけでなくベンダー体制も確認対象となり、個別要件を対象外（NA）とする場合も、その理由・根拠を評価機関へ説明できる形で残す必要がある。";
    if (index >= 0) topic.currentSummary.interpretations[index] = updatedInterpretation;
  }

  const issue = Array.isArray(topic.issues)
    ? topic.issues.find((item) => item && item.id === "jcstar-level-evaluation")
    : null;
  if (issue) {
    issue.conclusion = "★1・★2は自己適合宣言方式、★3・★4は第三者評価を基礎とする。通信機器・ネットワークカメラの★3要件は2026年6月に公表され、政府機関等、重要インフラ事業者、地方自治体、大企業での調達・設置を想定する製品が主な対象となる。個別要件には対象外（NA）条件が設けられるものがあり、その場合も理由・根拠の記載が必要である。評価ガイド等はなお整備途上のため、製品類型ごとに現行の申請・評価手順を確認する。";
  }
})();
