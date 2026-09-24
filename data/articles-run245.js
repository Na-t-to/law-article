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

(() => {
  if (window.__LAW_INDEX_MOBILE_IDENTITY_2026_BACKFILL_APPLIED__) return;
  window.__LAW_INDEX_MOBILE_IDENTITY_2026_BACKFILL_APPLIED__ = true;

  const TOPIC = "mobile-identity-verification-2026";
  const REFORM = "mobile-phone-improper-use-prevention-2026";
  const SOURCE_DIET = "source-shugiin-mobile-phone-improper-use-amendment-2026";
  const SOURCE_EGOV = "source-egov-mobile-phone-improper-use-act-2026";
  const ARTICLE = "article-ushijima-mobile-phone-improper-use-20260805";

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

  const sourceAdditions = [
    {
      id: SOURCE_DIET,
      title: "第221回国会 閣法第33号 携帯音声通信事業者による契約者等の本人確認等及び携帯音声通信役務の不正な利用の防止に関する法律の一部を改正する法律案（議案審議経過情報）",
      type: "law",
      typeLabel: "改正法・国会審議経過",
      authority: "衆議院",
      publishedAt: "2026-03-24",
      url: "https://www.shugiin.go.jp/internet/itdb_gian.nsf/html/gian/keika/1DE218A.htm",
      importance: "最高",
      whyImportant: "2026年3月24日提出、5月22日成立、5月29日公布（法律第25号）という改正法の成立経過を確認する一次資料。データ通信を含む本人確認制度の拡張が法案から成立法へ進んだことの基準点になる。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_EGOV,
      title: "携帯音声通信事業者による契約者等の本人確認等及び携帯音声通信役務の不正な利用の防止に関する法律",
      type: "law",
      typeLabel: "現行法・2026年改正／未施行部分",
      authority: "e-Gov法令検索",
      publishedAt: "2026-05-29",
      url: "https://laws.e-gov.go.jp/law/417AC1000000031",
      importance: "最高",
      whyImportant: "令和8年法律第25号による改正と未施行部分を含む法令本文を確認する基準点。主要改正の施行日は、2026年5月29日の公布日から1年を超えない範囲内で政令で定める日とされている。",
      topics: [TOPIC]
    }
  ];
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const newSources = sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url)));
  if (newSources.length) window.SOURCE_DATA = existingSources.concat(newSources);

  const topicAddition = {
    slug: TOPIC,
    title: "携帯電話不正利用防止法・本人確認／データSIM対応",
    categories: ["個人情報", "AI・デジタル", "危機管理・コンプライアンス"],
    summary: "2026年改正携帯電話不正利用防止法について、データ通信専用SIMへの本人確認拡張、多回線契約、法人・代理人契約の権限確認、警察照会、既存利用者の再確認を、施行前準備と未確定の省令事項を分けて整理する。",
    lastUpdated: "2026-09-24",
    lastVerified: "2026-09-24",
    isNew: true,
    overview: [
      "2026年5月29日に公布された改正法は、従来の音声通話中心の本人確認制度を、データ通信サービスへ拡張する。",
      "通信事業者だけでなく、警察署長から契約特定のための照会を受け得るメッセージアプリ、SNS、マッチングアプリ等の運営事業者にも実務上の接点が生じる。",
      "改正の主要部分は施行前であり、対象となるデータ通信サービス、多回線契約の基準、本人確認方法・経過措置の期限などは省令等の具体化を継続確認する必要がある。",
      "このテーマでは、成立済みの法律と今後の下位規範を分け、契約・KYC・既存顧客対応・警察照会への社内フローを追う。"
    ],
    currentSummary: {
      facts: [
        "令和8年法律第25号は2026年5月29日に公布され、主要改正は公布日から1年を超えない範囲内で政令で定める日から施行される。2026年9月24日時点で主要部分の施行日は確定していない。",
        "改正法は本人確認等の対象を携帯音声通信から携帯通信へ拡張し、データ通信サービスのみを提供するMVNO等も対象になり得る。具体的な対象範囲は総務省令で定められる。",
        "警察署長が契約者確認の求めに必要な場合、電気通信事業者へ契約特定に必要な事項の報告を求める制度が追加され、メッセージアプリ、SNS、マッチングアプリ等の運営事業者が照会先として想定されている。",
        "施行日前から本人確認なしでデータ通信サービスを利用する一定の既存利用者について、施行後の本人確認等を求める経過措置が設けられている。"
      ],
      interpretations: [
        "通信事業者は、音声SIMかどうかだけでなく、SMS機能、IoT用途、MVNOとしての提供形態を含め、自社サービスごとに改正法の対象可能性を棚卸しする必要がある。",
        "プラットフォーム事業者は、警察照会への回答を一般的な任意照会と混同せず、法令上の根拠、対象情報、本人データの範囲、記録・承認手順を整備するのが実務的である。",
        "法人・代理人契約では担当者本人の確認だけでなく、契約締結権限・地位の確認とその記録までKYCフローへ組み込む必要がある。"
      ],
      implications: [
        "提供するSIM・通信サービスを類型化し、改正法の対象候補と省令待ちの境界を一覧化する。",
        "新規契約の本人確認、権限確認、本人確認記録、多回線申込の判定ロジックを施行前に改修する。",
        "既存利用者について、過去の本人確認記録の有無を棚卸しし、メール・SMS・マイページ等を含む再確認計画を準備する。",
        "警察署長からの法定照会に備え、法務・個人情報担当と運用部門の回答権限、ログ保存、エスカレーションを定める。"
      ],
      uncertain: [
        "SMS機能付きデータSIMのうちどこまでを対象とし、IoT用途等をどの範囲で除外するかは総務省令等の最終内容を確認する必要がある。",
        "個人の多回線契約で拒否可能となる回線数、正当利用の例外、契約締結担当者の権限・地位の具体的確認方法は下位規範・Q&Aで具体化される。",
        "既存利用者本人確認の具体的方法・期限と、確認に応じない利用者への停止・解約運用は施行ルールの確定後に最終設計する。"
      ]
    },
    issues: [
      {
        id: "mobile-data-sim-scope",
        title: "データ通信専用SIM・IoTのどこまで本人確認対象になるか",
        status: "pending",
        stage: "enacted",
        views: [],
        conclusion: "改正法は対象をデータ通信へ広げるが、具体的範囲は総務省令に委ねられている。現時点ではSMS機能付きデータSIMを中心とし、一定のIoT用途を除外する方向が示されているため、サービス単位で省令確定を追う。",
        exception: "音声SIMに付帯するデータ通信や、本人確認相当の確認を既に実施・記録している既存契約は、経過措置上の扱いが異なり得る。",
        uncertain: "SMS機能、IoT用途その他の適用境界は最終省令・Q&Aで確定する。",
        sourceIds: [SOURCE_DIET, SOURCE_EGOV]
      },
      {
        id: "mobile-multiline-authority-check",
        title: "多回線契約と法人・代理人の権限確認をどう実装するか",
        status: "pending",
        stage: "enacted",
        views: [],
        conclusion: "個人の多回線申込について一定の場合に役務提供を拒否できる仕組みを設け、法人・代理人契約では契約締結担当者の権限・地位の確認も義務化する。申込審査と本人確認記録を同じフローで管理する。",
        exception: "多回線拒否の仕組みは個人契約を中心とし、家族利用、個人事業、ウェアラブル端末等の正当利用について例外的扱いが具体化され得る。",
        uncertain: "回線数の閾値、正当利用の確認方法、権限・地位の確認手段は下位規範の確定待ち。",
        sourceIds: [SOURCE_DIET, SOURCE_EGOV]
      },
      {
        id: "mobile-police-platform-inquiry",
        title: "警察署長からの契約特定照会へどう対応するか",
        status: "pending",
        stage: "enacted",
        views: [],
        conclusion: "警察署長が契約者確認の求めに必要な場合、電気通信事業者へ契約特定に必要な事項の報告を求める法定照会が新設される。対象情報と法的根拠を確認し、個人データの第三者提供を法令に基づく場合として処理できる社内手順を整える。",
        exception: "照会権限は契約者確認の求めに必要な範囲で用いられる制度であり、すべての捜査照会・任意照会を同じ根拠で扱わない。",
        uncertain: "照会書式、本人への通知、回答範囲等の具体運用は施行後の実務も含め継続確認する。",
        sourceIds: [SOURCE_DIET, SOURCE_EGOV]
      },
      {
        id: "mobile-existing-user-reverification",
        title: "既存のデータSIM利用者をどう再確認するか",
        status: "pending",
        stage: "enacted",
        views: [],
        conclusion: "施行前から本人確認なしで利用する一定のデータ通信利用者には経過措置として施行後の本人確認等が必要となる。過去の確認記録を棚卸しし、対象者への連絡、本人確認、未応答時の役務停止まで一連の移行計画として準備する。",
        exception: "音声サービスに付帯する利用者、施行前に現行法相当の確認を適切に行い記録している者、契約終了・承継予定者などは対象外となり得る。",
        uncertain: "再確認の期限、具体的方法、未応答時の運用は省令等での具体化を待つ必要がある。",
        sourceIds: [SOURCE_DIET, SOURCE_EGOV]
      }
    ],
    sourceIds: [SOURCE_DIET, SOURCE_EGOV],
    practicalImpacts: [
      "通信サービス・SIM類型の適用棚卸し",
      "本人確認・契約権限確認・本人確認記録",
      "多回線申込の審査・役務提供拒否基準",
      "既存利用者の再本人確認・移行計画",
      "警察照会への回答・個人データ提供手順"
    ],
    referenceArticleIds: [ARTICLE]
  };
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  if (!topics.some((item) => item && item.slug === TOPIC)) window.TOPIC_DATA = topics.concat(topicAddition);

  const reformAddition = {
    id: REFORM,
    title: "携帯電話不正利用防止法・2026年改正",
    eventType: "law_amendment",
    lawId: "mobile-phone-improper-use-prevention-act",
    lawLabel: "携帯電話不正利用防止法",
    relatedTopics: [TOPIC],
    effectiveDateStatus: "relative",
    effectiveDateNote: "主要改正は2026年5月29日の公布日から1年を超えない範囲内において政令で定める日から施行。2026年9月24日時点で主要部分の施行日は未確定。",
    effectiveDateSourceIds: [SOURCE_EGOV],
    matchSourceIds: [SOURCE_DIET, SOURCE_EGOV],
    sourceIds: [SOURCE_DIET, SOURCE_EGOV]
  };
  const reforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  if (!reforms.some((item) => item && item.id === REFORM)) window.REFORM_EVENT_DATA = reforms.concat(reformAddition);

  const articleAddition = {
    id: ARTICLE,
    title: "携帯電話不正利用防止法　令和８年改正法の概要",
    publisher: "牛島総合法律事務所",
    author: "近藤 綾香",
    publishedAt: "2026-08-05",
    collectedAt: "2026-09-24",
    url: "https://www.ushijima-law.gr.jp/client-alert_seminar/client-alert/20260805identification/",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／携帯電話不正利用防止法・本人確認",
    status: "adopted",
    summary: "2026年改正携帯電話不正利用防止法を、通信事業者の施行準備へ落とす実務解説。データ通信専用SIMへの本人確認拡張、短期滞在外国人の確認方法、警察署長による電気通信事業者への契約特定照会、個人の多回線契約の提供拒否、法人・代理人契約の権限・地位確認、既存データSIM利用者の経過措置を横断して整理し、今後省令・Q&Aで確定する事項も切り分けている。",
    whyImportant: [
      "改正法の条文変更だけでなく、データ通信のみを提供するMVNO、SMS機能付きデータSIM、IoT用途の境界をサービス棚卸しの論点として具体化している",
      "メッセージアプリ・SNS・マッチングアプリ等への警察照会と個人情報保護法上の『法令に基づく場合』を接続し、通信事業者以外にも必要となる対応を示している",
      "施行前の既存利用者について、過去の本人確認記録の有無、再確認、未応答時の役務停止まで移行実務を一連で確認できる"
    ],
    audience: ["通信・MVNO事業者法務", "本人確認・不正対策担当", "メッセージアプリ・SNS事業者", "個人情報・プライバシー担当", "コンプライアンス"],
    audienceReason: "成立済みだが主要部分が未施行の改正について、自社サービスの対象判定、KYC改修、既存利用者移行、警察照会対応を省令確定前から準備するため。",
    categories: ["危機管理・コンプライアンス", "個人情報", "AI・デジタル"],
    relatedTopics: [TOPIC],
    relatedIssues: ["mobile-data-sim-scope", "mobile-multiline-authority-check", "mobile-police-platform-inquiry", "mobile-existing-user-reverification"],
    primarySourceIds: [SOURCE_DIET, SOURCE_EGOV],
    reformEventId: REFORM,
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: [SOURCE_DIET, SOURCE_EGOV],
    legacyReformInference: false,
    whatChanged: "新テーマ追加／2026年改正携帯電話不正利用防止法を、データSIMの本人確認拡張、多回線契約、権限確認、警察照会、既存利用者再確認という施行準備の単位で整理した。"
  };
  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(articles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(articles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(articleAddition.id) && !articleUrls.has(normalizeUrl(articleAddition.url))) {
    window.ARTICLE_DATA = articles.concat(articleAddition);
  }
})();
