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
  if (window.__LAW_INDEX_CRIMINAL_PROCEDURE_ELECTRONIC_RECORD_ORDERS_APPLIED__) return;
  window.__LAW_INDEX_CRIMINAL_PROCEDURE_ELECTRONIC_RECORD_ORDERS_APPLIED__ = true;

  const TOPIC = "criminal-procedure-electronic-record-production-orders";
  const REFORM = "criminal-procedure-digitalization-2025";
  const SOURCE_MOJ = "source-moj-criminal-procedure-digitalization-act-2025";
  const SOURCE_EGOV = "source-egov-criminal-procedure-electronic-record-orders-20260521";
  const ARTICLE_TMI = "article-tmi-electronic-record-production-secrecy-order-20260608";
  const ARTICLE_IDF = "article-idf-criminal-procedure-digital-evidence-20250825";

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
      id: SOURCE_MOJ,
      title: "情報通信技術の進展等に対応するための刑事訴訟法等の一部を改正する法律（令和7年法律第39号）",
      type: "law",
      typeLabel: "一次資料・法務省／刑事手続デジタル化改正法",
      authority: "法務省",
      publishedAt: "2025-05-23",
      url: "https://www.moj.go.jp/keiji1/keiji12_00210.html",
      importance: "最高",
      whyImportant: "2025年5月16日成立・5月23日公布の刑事手続デジタル化改正法について、法律・新旧対照条文・概要等をまとめた法務省の公式ページ。電磁的記録提供命令・秘密保持命令を含む改正全体と段階施行を確認する基礎資料。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_EGOV,
      title: "刑事訴訟法（令和8年5月21日施行版・令和7年法律第39号反映）",
      type: "law",
      typeLabel: "一次資料・e-Gov法令検索／刑事訴訟法",
      authority: "e-Gov法令検索",
      publishedAt: "2026-05-21",
      url: "https://laws.e-gov.go.jp/law/323AC0000000131",
      importance: "最高",
      whyImportant: "令和7年法律第39号による改正のうち、電磁的記録提供命令・秘密保持命令等を含む刑事訴訟法の主要規定が2026年5月21日に施行されたことと、現行条文を公式法令データで確認できる。",
      topics: [TOPIC]
    }
  ];
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existingSources.concat(sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url))));

  const topicAddition = {
    slug: TOPIC,
    title: "電磁的記録提供命令・捜査機関へのデータ提供／刑事手続デジタル化",
    categories: ["危機管理・コンプライアンス", "個人情報", "情報セキュリティ", "契約"],
    summary: "2025年改正刑事訴訟法等により導入され、2026年5月21日に運用開始した電磁的記録提供命令・秘密保持命令を、企業・クラウド／SaaS事業者の受領対応、契約上の通知義務、対象データの範囲と不服申立てから整理する。",
    lastUpdated: "2026-09-24",
    lastVerified: "2026-09-24",
    isNew: true,
    overview: [
      "2025年5月に成立・公布された刑事手続デジタル化改正法のうち、電磁的記録提供命令・秘密保持命令等を含む刑事訴訟法の主要規定は2026年5月21日に施行された。その他の電子化規定は2027年3月31日までの政令指定日に段階的に施行される。",
      "電磁的記録提供命令は、裁判官の令状に基づき、必要な電磁的記録を記録媒体へ記録・移転して提出させる方法に加え、電気通信回線を通じて捜査機関の管理する記録媒体へ直接記録・移転させる方法を可能にする。違反には刑罰が設けられている。",
      "秘密保持命令が付された場合、企業は命令を受けたことやデータを提供したか否かを一定期間みだりに漏らせないため、顧客・取引先への第三者提供通知条項や海外法上の通知義務との整合を事前に確認する必要がある。",
      "クラウド・SaaS・通信事業者等は第三者データを大量に保管するため、令状の対象範囲、無関係データの混入、準抗告、事業継続のためのデータ複写等を、単なる捜査協力ではなくデータガバナンスと危機管理の問題として扱う必要がある。"
    ],
    currentSummary: {
      facts: [
        "情報通信技術の進展等に対応するための刑事訴訟法等の一部を改正する法律（令和7年法律第39号）は2025年5月16日に成立し、5月23日に公布された。",
        "電磁的記録提供命令・秘密保持命令等を含む刑事訴訟法の主要規定は2026年5月21日に施行された。",
        "電磁的記録提供命令では、記録媒体の提出だけでなく、電気通信回線を通じて捜査機関の管理する記録媒体へデータを直接記録・移転させる方法が設けられた。",
        "秘密保持命令は裁判官の許可の下で1年を超えない期間について命じることができ、必要がなくなったときは捜査機関に取消義務がある。",
        "電磁的記録提供命令又は秘密保持命令への違反には1年以下の拘禁刑又は300万円以下の罰金があり、一定の場合には法人への両罰規定もある。"
      ],
      interpretations: [
        "企業対応では、捜査機関からの照会一般と罰則付きの電磁的記録提供命令を区別し、令状受領、法的確認、データ特定・抽出、移転、経営報告までを法務・情報システム・セキュリティ部門の共通フローとして設計する必要がある。",
        "秘密保持命令により顧客等への通知が制限され得るため、契約の第三者開示・通知条項に法令・捜査機関対応の例外があるか、命令取消後の通知をどう扱うかを平時に整理することが重要である。",
        "令状の対象が広く第三者の無関係データまで含み得る場合、提供主体は単に機械的に全量提出するのではなく、対象範囲を確認し、必要に応じて準抗告等の法的手段を検討する余地がある。",
        "刑事手続のデジタル化は段階施行であるため、2026年5月21日に全ての電子化規定が一括施行されたと扱わず、制度ごとの施行日を確認する必要がある。"
      ],
      implications: [
        "命令受領窓口、法務への即時エスカレーション、外部弁護士・情報システム・セキュリティ部門との連携、経営報告を文書化する。",
        "オンライン移転を求められた場合に、対象データを安全に抽出・送信できる技術手順とアクセス権限、作業記録を平時に整備する。",
        "顧客・取引先契約の第三者提供通知、法令・捜査機関対応の例外、秘密保持命令解除後の通知手順をレビューする。",
        "命令範囲と被疑事実との関連性、第三者データの混入、事業継続への影響を確認し、必要に応じて準抗告やデータ複写・回復の手段を検討する。"
      ],
      uncertain: [
        "命令対象の具体的な特定、オンライン移転の技術的手順、提供期限は個々の令状・捜査機関との調整に依存する。",
        "秘密保持命令と海外法・契約上の通知義務の優先関係、命令解除後の通知時期・方法は、適用法と契約内容に応じた個別検討が必要である。",
        "対象外データが取得された場合のデータ主体の不服申立て可能性や、捜査機関が取得した不要データの消去をどこまで求められるかは、なお実務・解釈上の課題が残る。"
      ]
    },
    issues: [
      {
        id: "electronic-record-production-order-response",
        title: "電磁的記録提供命令を受けたとき、社内でどう対応するか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "令状に基づく強制処分であることを前提に、受領窓口から法務・外部弁護士・情報システム・セキュリティ部門へのエスカレーション、命令の有効性・対象範囲確認、データ抽出・安全な移転、作業記録、経営報告までを一つの対応フローとして整備する。",
        exception: "命令の対象範囲が過大である、被疑事実との関連性が乏しい、事業継続へ重大な影響がある等の場合は、機械的に提供するのではなく準抗告や複写等の制度を含めて対応を検討する。",
        uncertain: "オンライン移転の具体的なインターフェース、技術要件、期限等は個別の命令と捜査機関の指示に応じて確認する必要がある。",
        sourceIds: [SOURCE_MOJ, SOURCE_EGOV]
      },
      {
        id: "electronic-record-secrecy-notification-contracts",
        title: "秘密保持命令と顧客・取引先への通知義務をどう整合させるか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "秘密保持命令の期間中は命令受領や提供の事実をみだりに漏らせないため、第三者提供時の通知義務条項について法令・捜査機関対応の例外を確認し、通知できない場合の社内判断と命令取消後の通知手順をあらかじめ設計する。",
        exception: "秘密保持命令が常に全ての通知を禁止するとは限らず、対象となる情報・相手方・適用法・契約文言を個別に確認する。海外法上の義務が関係する場合は別途の法的分析が必要になる。",
        uncertain: "命令取消後に遡って通知すべきか、どの時点・方法で通知するかは一律に決まらず、契約・適用法・捜査への影響を踏まえた個別判断となる。",
        sourceIds: [SOURCE_MOJ, SOURCE_EGOV]
      },
      {
        id: "electronic-record-scope-remedies-data-deletion",
        title: "過大なデータ取得・第三者データについて、どこまで争い・保護できるか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "クラウド・通信サービス等で令状対象と無関係な第三者データまで含まれ得る場合、提供主体は対象範囲を吟味し、準抗告等の不服申立てを検討する余地がある。顧客データを保管する事業者では、利用者のプライバシー保護も判断要素となり得る。",
        exception: "誰が準抗告の『不服がある者』に当たるか、どの範囲で取消し・変更を求められるかは処分態様とデータ主体との関係に左右される。秘密保持命令によりデータ主体自身が命令を知れない場合もある。",
        uncertain: "過大・違法に取得されたデータの消去を捜査機関に義務付ける一般的な仕組みは明確でなく、不要データの扱いとデータ主体の救済には実務上の課題が残る。",
        sourceIds: [SOURCE_MOJ, SOURCE_EGOV]
      }
    ],
    sourceIds: [SOURCE_MOJ, SOURCE_EGOV],
    referenceArticleIds: [ARTICLE_TMI, ARTICLE_IDF],
    practicalImpacts: [
      "捜査機関からの令状・命令受領フロー",
      "クラウド／SaaS上のデータ抽出・オンライン移転",
      "顧客・取引先への通知条項と法令対応例外",
      "秘密保持命令中・解除後の通知判断",
      "令状対象範囲・第三者データ・準抗告",
      "事業継続のためのデータ複写・回復",
      "法務・情報システム・セキュリティ・CS部門の連携"
    ]
  };
  const existingTopics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  if (!existingTopics.some((item) => item && item.slug === topicAddition.slug)) {
    window.TOPIC_DATA = existingTopics.concat([topicAddition]);
  }

  const reformAddition = {
    id: REFORM,
    title: "刑事訴訟法等・刑事手続デジタル化（2025年改正）",
    eventType: "law_amendment",
    lawId: "criminal-procedure-code",
    lawLabel: "刑事訴訟法等",
    relatedTopics: [TOPIC],
    effectiveDateStatus: "phased",
    effectiveDates: ["2026-05-21"],
    effectiveDateSourceIds: [SOURCE_EGOV],
    effectiveDateNote: "電磁的記録提供命令・秘密保持命令等は2026年5月21日施行。その他の電子化規定は2027年3月31日までの政令指定日に段階施行。",
    matchSourceIds: [SOURCE_MOJ, SOURCE_EGOV],
    sourceIds: [SOURCE_MOJ, SOURCE_EGOV],
    articleIds: [ARTICLE_TMI, ARTICLE_IDF]
  };
  const existingReforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  if (!existingReforms.some((item) => item && item.id === reformAddition.id)) {
    window.REFORM_EVENT_DATA = existingReforms.concat([reformAddition]);
  }

  const articleAdditions = [
    {
      id: ARTICLE_TMI,
      title: "【危機管理・刑事】施行された電磁的記録提供命令と秘密保持命令 ─ 企業法務担当者が今すぐ確認すべき三つの実務対応",
      publisher: "TMI総合法律事務所",
      author: "田山 翔",
      publishedAt: "2026-06-08",
      collectedAt: "2026-09-24",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18426.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／電磁的記録提供命令・秘密保持命令",
      status: "adopted",
      summary: "2026年5月21日に運用開始した電磁的記録提供命令と秘密保持命令を、企業の受領対応へ落とし込む実務解説。記録媒体提出とオンライン移転の二方式、秘密保持命令と顧客・取引先への通知義務の衝突、命令違反の罰則・両罰規定を整理した上で、社内エスカレーション、契約条項の総点検、範囲が過大な場合の準抗告という三つの対応を具体化する。",
      whyImportant: [
        "新制度を刑事手続の一般論で終わらせず、法務・情報システム・セキュリティ・CS部門が実際に動ける受領・抽出・移転フローへ落としている",
        "秘密保持命令により顧客・取引先への通知が制限され得る点を、第三者開示条項の法令対応例外と命令取消後の通知手順まで契約実務へ接続している",
        "クラウド・SaaS等で命令範囲が過大な場合の準抗告や、事業継続に必要なデータの複写まで扱い、単純な『捜査協力』ではない判断点を示している"
      ],
      audience: ["企業法務", "危機管理・コンプライアンス", "情報セキュリティ", "IT・クラウド事業者", "カスタマーサポート"],
      audienceReason: "捜査機関から罰則付きのデータ提供命令を受けた際に、法的確認、技術対応、契約上の通知、準抗告を一つの社内フローへ落とすため。",
      categories: ["危機管理・コンプライアンス", "個人情報", "情報セキュリティ", "契約"],
      relatedTopics: [TOPIC],
      relatedIssues: ["electronic-record-production-order-response", "electronic-record-secrecy-notification-contracts", "electronic-record-scope-remedies-data-deletion"],
      primarySourceIds: [SOURCE_MOJ, SOURCE_EGOV],
      reformEventId: REFORM,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [SOURCE_MOJ, SOURCE_EGOV],
      legacyReformInference: false,
      whatChanged: "バックフィル／2026年5月21日に施行された電磁的記録提供命令・秘密保持命令について、社内対応フロー、契約通知条項、準抗告まで企業実務の作業単位で追加した。"
    },
    {
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
      summary: "2025年改正刑事訴訟法の電磁的記録提供命令について、オンライン提供という効率化だけでなく、対象データを厳密に特定しにくいこと、被疑事実と無関係な第三者データまで取得され得ること、データ主体の準抗告が難しくなり得ること、取得後の不要データ消去制度が明確でないことを検討する専門解説。クラウド・通信事業者が利用者の権利保護のために命令範囲を吟味する必要性を補強する。",
      whyImportant: [
        "TMIの運用チェックリストとは別に、過大収集・第三者データ・救済という制度上の弱点を掘り下げ、提供範囲の判断を機械的な作業にしない視点を加えられる",
        "ベッコアメ事件等を踏まえ、データ保管事業者が利用者のプライバシー保護の観点から準抗告を検討し得るという実務上の接点を示している",
        "秘密保持命令によりデータ主体自身が命令を知れない場合や、不要データの消去を義務付ける一般的仕組みが明確でない点まで扱い、法改正後も残る不確実性を把握できる"
      ],
      audience: ["企業法務", "IT・クラウド事業者", "情報セキュリティ", "プライバシー・個人情報担当", "デジタルフォレンジック担当"],
      audienceReason: "提供命令の対象範囲を判断する際に、捜査効率だけでなく無関係な第三者データ、利用者の救済、取得後データの扱いまで含めて検討するため。",
      categories: ["危機管理・コンプライアンス", "個人情報", "情報セキュリティ"],
      relatedTopics: [TOPIC],
      relatedIssues: ["electronic-record-production-order-response", "electronic-record-scope-remedies-data-deletion"],
      primarySourceIds: [SOURCE_MOJ, SOURCE_EGOV],
      reformEventId: REFORM,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [SOURCE_MOJ],
      legacyReformInference: false,
      whatChanged: "バックフィル／電磁的記録提供命令について、対象データの特定困難性、過大収集、第三者データの準抗告、不要データ消去制度の限界という権利保護・データガバナンス上の論点を追加した。"
    }
  ];
  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existingArticles.concat(articleAdditions.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url))));
})();
