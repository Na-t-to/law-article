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

(() => {
  if (window.__LAW_INDEX_ELECTRONIC_RECORD_RIGHTS_BACKFILL_APPLIED__) return;
  window.__LAW_INDEX_ELECTRONIC_RECORD_RIGHTS_BACKFILL_APPLIED__ = true;

  const TOPIC = "law-enforcement-data-production";
  const REFORM = "criminal-procedure-electronic-record-order-2025";
  const SOURCE_MOJ = "source-moj-criminal-procedure-it-2025";
  const SOURCE_EGOV = "source-egov-criminal-procedure-electronic-record-2026";
  const ARTICLE_TMI = "article-tmi-electronic-record-production-order-2026";
  const ARTICLE_NISHIMURA = "article-nishimura-electronic-data-production-order-2025";
  const ARTICLE_IDF = "article-idf-criminal-procedure-digital-evidence-20250825";
  const ISSUE = "electronic-record-data-subject-remedies-deletion";

  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  const articleAddition = {
    id: ARTICLE_IDF,
    title: "改正刑事訴訟法によるデジタル時代の証拠収集と課題",
    publisher: "NPOデジタル・フォレンジック研究会",
    author: "北條 孝佳",
    publishedAt: "2025-08-25",
    collectedAt: "2026-09-24",
    url: "https://digitalforensic.jp/2025/08/25/column888/",
    sourceType: "secondary",
    sourceLabel: "専門解説・デジタルフォレンジック／電磁的記録提供命令・プライバシー",
    status: "adopted",
    summary: "2025年改正刑事訴訟法の電磁的記録提供命令について、オンライン提供という効率化だけでなく、対象データを厳密に特定しにくいこと、被疑事実と無関係な第三者データまで取得され得ること、データ主体自身の準抗告が難しくなり得ること、取得後の不要データ消去を義務付ける一般的な仕組みが明確でないことを検討する専門解説。クラウド・通信事業者が利用者の権利保護のために命令範囲を吟味する必要性を補強する。",
    whyImportant: [
      "既収録のTMI・西村あさひ解説が扱う社内フロー、拒絶事由、秘密保持、準抗告に対し、過大収集・第三者データ・取得後の消去という制度上の残課題を掘り下げている",
      "ベッコアメ事件等を踏まえ、データ保管事業者が利用者のプライバシー保護の観点から準抗告を検討し得るという実務上の接点を示している",
      "秘密保持命令によりデータ主体が命令を知れない場合があることから、提供を命じられた事業者側が第三者の権利も考慮する必要性を理解できる"
    ],
    audience: ["企業法務", "クラウド・SaaS・通信事業者", "個人情報・データガバナンス担当", "情報セキュリティ", "デジタルフォレンジック担当"],
    audienceReason: "捜査機関へのデータ提供で、令状の対象範囲、無関係な第三者データ、データ主体の救済、取得後データの扱いまで含めて対応を設計するため。",
    categories: ["危機管理・コンプライアンス", "個人情報", "AI・デジタル", "情報セキュリティ"],
    relatedTopics: [TOPIC],
    relatedIssues: ["electronic-record-production-order-scope", "electronic-record-quasi-appeal-business-continuity", ISSUE],
    primarySourceIds: [SOURCE_MOJ, SOURCE_EGOV],
    reformEventId: REFORM,
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: [SOURCE_MOJ],
    legacyReformInference: false,
    whatChanged: "バックフィル／電磁的記録提供命令について、対象データの特定困難性、過大収集、データ主体の準抗告、不要データ消去制度の限界という権利保護・データガバナンス上の論点を補強した。"
  };

  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(articleAddition.id) && !urls.has(normalizeUrl(articleAddition.url))) {
    window.ARTICLE_DATA = existingArticles.concat([articleAddition]);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  if (topic) {
    const addUnique = (list, value) => {
      const next = Array.isArray(list) ? [...list] : [];
      if (value && !next.includes(value)) next.push(value);
      return next;
    };

    topic.lastUpdated = "2026-09-24";
    topic.lastVerified = "2026-09-24";

    topic.currentSummary = topic.currentSummary || {};
    topic.currentSummary.interpretations = addUnique(
      topic.currentSummary.interpretations,
      "秘密保持命令によりデータ主体が提供命令を知れない場合があるため、クラウド・通信事業者等では、自社が命令の直接の被処分者として第三者データの必要性・関連性を点検し、利用者の権利保護の観点から準抗告を検討すべき場面があり得る。"
    );
    topic.currentSummary.uncertain = addUnique(
      topic.currentSummary.uncertain,
      "被疑事実と無関係なデータが取得された後、その不要データの消去を捜査機関に一般的に義務付ける仕組みは明確でなく、過大取得後の救済にはなお制度・実務上の課題が残る。"
    );
    topic.practicalImpacts = addUnique(topic.practicalImpacts, "第三者データの過大取得・取得後消去の検討");
    topic.referenceArticleIds = [ARTICLE_TMI, ARTICLE_NISHIMURA, ARTICLE_IDF]
      .reduce((list, value) => addUnique(list, value), topic.referenceArticleIds);

    topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
    if (!topic.issues.some((item) => item && item.id === ISSUE)) {
      topic.issues.push({
        id: ISSUE,
        title: "第三者データの過大取得と取得後の救済をどう考えるか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "クラウド・通信サービス等で被疑事実と無関係な第三者データまで命令対象に含まれ得る場合、提供を命じられた事業者は対象範囲を吟味し、必要に応じて準抗告を検討する。特に秘密保持命令でデータ主体自身が命令を知れない場合には、事業者側が利用者のプライバシー等を考慮する意義が大きい。",
        exception: "誰が準抗告の『不服がある者』に当たるか、どの範囲で取消し・変更を求められるかは処分態様、データの帰属、提供前後の状況等に左右される。",
        uncertain: "過大又は違法に取得された不要データについて、捜査機関に一般的な消去義務を課す明確な制度はなく、取得後のデータ管理・消去とデータ主体の救済は今後の実務蓄積を要する。",
        sourceIds: [SOURCE_MOJ, SOURCE_EGOV]
      });
    }
  }

  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === REFORM);
  if (event) {
    const articleIds = Array.isArray(event.articleIds) ? [...event.articleIds] : [];
    [ARTICLE_TMI, ARTICLE_NISHIMURA, ARTICLE_IDF].forEach((id) => {
      if (!articleIds.includes(id) && (window.ARTICLE_DATA || []).some((item) => item && item.id === id)) articleIds.push(id);
    });
    event.articleIds = articleIds;
  }
})();
