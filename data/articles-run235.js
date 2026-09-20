(() => {
  const article = (window.ARTICLE_DATA || []).find(
    (item) => item && item.id === "article-ppc-privacy-rulemaking-basic-1-2026"
  );
  if (article) {
    article.reformStageAtPublication = "proposal";
    article.reformStageSourceIds = ["source-ppc-privacy-rulemaking-basic-1-2026"];
  }
})();

(() => {
  const topicSlug = "disability-discrimination-reasonable-accommodation";
  const reformEventId = "disability-discrimination-act-2021-amendment-2024";
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
      id: "source-egov-disability-discrimination-act-2024",
      title: "障害を理由とする差別の解消の推進に関する法律（令和3年法律第56号反映・2024年4月1日施行時点）",
      type: "law",
      typeLabel: "法令・施行時点",
      authority: "e-Gov法令検索",
      publishedAt: "2024-04-01",
      url: "https://laws.e-gov.go.jp/law/425AC0000000065/20240401_503AC0000000056",
      importance: "最高",
      whyImportant: "令和3年法律第56号による改正を反映した2024年4月1日施行時点の条文で、民間事業者に対する合理的配慮の提供義務を含む法的根拠を確認できる。",
      topics: [topicSlug]
    },
    {
      id: "source-cao-disability-discrimination-overview",
      title: "障害を理由とする差別の解消の推進",
      type: "guideline",
      typeLabel: "制度・一次資料ポータル",
      authority: "内閣府",
      publishedAt: "2024-04-01",
      url: "https://www8.cao.go.jp/shougai/suishin/sabekai.html",
      importance: "高",
      whyImportant: "2021年改正法が2024年4月1日に施行されたことを明示し、法律、基本方針、各府省の対応指針、事業者向け資料、事例データベースへ接続する制度上のハブ。",
      topics: [topicSlug]
    },
    {
      id: "source-cao-disability-discrimination-faq",
      title: "障害を理由とする差別の解消の推進に関する法律についてのよくあるご質問と回答",
      type: "guideline",
      typeLabel: "行政解釈・Q&A",
      authority: "内閣府",
      publishedAt: "2024-04-01",
      url: "https://www8.cao.go.jp/shougai/suishin/law_h25-65_qa_kokumin.html",
      importance: "高",
      whyImportant: "不当な差別的取扱い、合理的配慮、社会的障壁、民間事業者に対する主務大臣の報告徴収等について、企業実務で参照しやすい形で政府の説明を確認できる。",
      topics: [topicSlug]
    }
  ];
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existingSources.concat(
    sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url)))
  );

  const topicAddition = {
    slug: topicSlug,
    title: "障害者差別解消法・合理的配慮",
    categories: ["危機管理・コンプライアンス", "消費者法・表示"],
    summary: "民間事業者に対する合理的配慮の法的義務化を軸に、不当な差別的取扱い、意思の表明・過重な負担・建設的対話、環境の整備を企業のサービス提供・現場運用として整理する。",
    lastUpdated: "2026-09-21",
    lastVerified: "2026-09-21",
    isNew: true,
    overview: [
      "障害者差別解消法は、民間事業者に対し、障害を理由とする不当な差別的取扱いを禁止し、個別の場面で必要となる合理的配慮の提供を求める。",
      "令和3年法律第56号による改正は2024年4月1日に施行され、それまで民間事業者について努力義務だった合理的配慮の提供が法的義務となった。",
      "合理的配慮は画一的なサービス仕様ではなく、社会的障壁の除去を必要とする意思の表明、障害の状態、具体的場面、事業者側の過重な負担等を踏まえ、本人との建設的対話を通じて個別に検討する。",
      "環境の整備は、不特定多数を主な対象とする事前的な改善措置であり、合理的配慮とは別の努力義務である。設備だけでなく、ウェブアクセシビリティ、研修、社内ルール、相談体制等のソフト面も実務上重要となる。"
    ],
    currentSummary: {
      facts: [
        "障害者差別解消法8条1項は民間事業者による不当な差別的取扱いを禁止している。",
        "同法8条2項に基づく民間事業者の合理的配慮の提供は、2024年4月1日から法的義務となった。",
        "合理的配慮は、障害者から社会的障壁の除去を必要としている旨の意思の表明があり、その実施に伴う負担が過重でない場合に、具体的状況に応じて必要かつ合理的な措置を検討する枠組みである。",
        "環境の整備は、個別の意思表明を待つのではなく、施設、情報アクセス、設備、研修等をあらかじめ改善する努力義務として合理的配慮と区別される。",
        "民間事業者による違反について直ちに罰則が科される制度ではないが、主務大臣は必要に応じて報告徴収、助言、指導、勧告を行うことができる。"
      ],
      interpretations: [
        "合理的配慮の実務では、要求をそのまま受け入れるか拒否するかの二択ではなく、目的と制約を確認し、代替措置を含めて建設的対話を行うことが中心となる。",
        "『安全だから』『前例がないから』『対応できないから』といった抽象的理由だけで一律にサービス提供を拒否する運用は、不当な差別的取扱いのリスクを高める。",
        "個別対応が反復する領域では、ウェブアクセシビリティ、設備、マニュアル、研修、相談経路等の環境整備を先に進める方が、合理的配慮を継続的に提供しやすい。"
      ],
      implications: [
        "顧客・利用者から配慮の申出を受けた際の受付、事実確認、代替案検討、理由説明、エスカレーションの手順を社内ルールとして整備する。",
        "店舗・施設だけでなく、オンライン申込み、電話・チャット、ウェブサイト、映像・音声コンテンツ等の提供方法も障害者対応の対象として点検する。",
        "現場従業員が障害を理由に一律拒否をしないよう、正当な理由と過重な負担を個別に評価する考え方を研修・マニュアルへ落とし込む。",
        "合理的配慮の申出・対応履歴を蓄積し、同種の要望が多い領域は環境整備として恒久対応へ切り替える。"
      ],
      uncertain: [
        "必要な合理的配慮や過重な負担の判断は、障害の状態、事業内容、実現可能性、費用、事業規模、財務状況等に左右され、個別事案ごとの検討が必要となる。",
        "業種別の具体例や望ましい対応は各府省庁の対応指針で異なり得るため、自社事業を所管する省庁の最新版も併せて確認する。"
      ]
    },
    issues: [
      {
        id: "disability-unjust-discriminatory-treatment",
        title: "障害を理由とする不当な差別的取扱いをどう判定するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "民間事業者は、正当な理由なく障害を理由としてサービス提供を拒否・制限したり、障害のない者には付さない条件を付したりして、障害者の権利利益を侵害してはならない。",
        exception: "安全確保や損害防止等の目的が具体的・客観的に認められ、当該取扱いがその目的に照らしてやむを得ない場合は、正当な理由が認められることがある。",
        uncertain: "正当な理由の有無は個別事案の具体的事情に左右されるため、一律の属性判断ではなく目的・必要性・代替手段を確認する。",
        sourceIds: ["source-egov-disability-discrimination-act-2024", "source-cao-disability-discrimination-faq"]
      },
      {
        id: "disability-reasonable-accommodation-duty",
        title: "合理的配慮の提供義務をどのように実装するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "民間事業者は2024年4月1日以降、社会的障壁の除去を必要とする意思の表明があり、実施に伴う負担が過重でない場合、具体的状況に応じて必要かつ合理的な配慮を行う法的義務を負う。",
        exception: "求められた方法そのものが過重な負担となる場合でも、直ちに対応を打ち切るのではなく、目的を満たし得る代替措置を検討する。",
        uncertain: "必要な措置は障害の特性、サービス内容、技術、費用等で変化するため、固定的な対応一覧だけでは完結しない。",
        sourceIds: ["source-egov-disability-discrimination-act-2024", "source-cao-disability-discrimination-overview", "source-cao-disability-discrimination-faq"]
      },
      {
        id: "disability-constructive-dialogue-undue-burden",
        title: "意思の表明・過重な負担・建設的対話をどう判断するか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "合理的配慮の可否は、本人の意思を確認した上で、事業への影響、実現可能性、費用・負担、事業規模、財務状況等を具体的に検討し、困難な場合も理由説明と代替案を含む建設的対話で調整するのが実務上重要となる。",
        exception: "本人の希望と同一の方法を常に実施する義務ではなく、目的を踏まえた別の合理的手段による対応もあり得る。",
        uncertain: "過重な負担の境界は定量的に一律化されていないため、判断過程と代替案検討を記録する運用が望ましい。",
        sourceIds: ["source-cao-disability-discrimination-faq", "source-cao-disability-discrimination-overview"]
      },
      {
        id: "disability-environmental-improvements",
        title: "環境の整備と個別の合理的配慮をどう切り分けるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "環境の整備は、不特定多数の障害者を主な対象として施設・情報アクセス・設備・研修等を事前に改善する努力義務であり、個別の合理的配慮を的確に提供する基盤として位置付けられる。",
        exception: "環境整備を行っていることだけで、個々の場面で必要となる合理的配慮の検討が不要になるわけではない。",
        uncertain: "優先すべき改善措置は利用者層、提供チャネル、既存設備、対応頻度等により異なる。",
        sourceIds: ["source-egov-disability-discrimination-act-2024", "source-cao-disability-discrimination-overview"]
      }
    ],
    sourceIds: [
      "source-egov-disability-discrimination-act-2024",
      "source-cao-disability-discrimination-overview",
      "source-cao-disability-discrimination-faq"
    ],
    referenceArticleIds: [
      "article-tmi-disability-discrimination-overview-20240625",
      "article-tmi-disability-reasonable-accommodation-20251030",
      "article-tmi-disability-environment-20260306",
      "article-tmi-disability-unjust-treatment-20260717"
    ],
    practicalImpacts: [
      "顧客・利用者対応マニュアルの整備",
      "合理的配慮の申出受付・代替案検討・記録",
      "店舗・施設・ウェブサイト等のアクセシビリティ改善",
      "従業員研修と現場判断のエスカレーション設計",
      "業種別対応指針の確認",
      "苦情・紛争・行政対応を見据えた説明可能な判断過程の確保"
    ]
  };
  if (!(window.TOPIC_DATA || []).some((item) => item && item.slug === topicSlug)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(topicAddition);
  }

  const reformAddition = {
    id: reformEventId,
    title: "障害者差別解消法・民間事業者の合理的配慮義務化（2021年改正・2024年施行）",
    eventType: "law_amendment",
    lawId: "disability-discrimination-elimination-act",
    lawLabel: "障害者差別解消法",
    relatedTopics: [topicSlug],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2024-04-01"],
    effectiveDateSourceIds: ["source-egov-disability-discrimination-act-2024", "source-cao-disability-discrimination-overview"],
    sourceIds: ["source-egov-disability-discrimination-act-2024", "source-cao-disability-discrimination-overview"],
    articleIds: ["article-tmi-disability-discrimination-overview-20240625"]
  };
  const existingReforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  if (!existingReforms.some((item) => item && item.id === reformEventId)) {
    window.REFORM_EVENT_DATA = existingReforms.concat(reformAddition);
  }

  const articleAdditions = [
    {
      id: "article-tmi-disability-discrimination-overview-20240625",
      title: "障害者差別解消法（１）障害者差別解消法の概要",
      publisher: "TMI総合法律事務所",
      author: "菊田行紘、遠山夏子、伊勢智子、水田進、森安博行、伊藤憲昭、伏見純子",
      publishedAt: "2024-06-25",
      collectedAt: "2026-09-21",
      url: "https://www.tmi.gr.jp/eyes/blog/2024/15869.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／障害者差別解消法の全体像と2024年改正",
      status: "adopted",
      summary: "2024年4月1日に施行された改正障害者差別解消法について、環境の整備、不当な差別的取扱い、合理的配慮の三つを民間事業者の実務から概観する。合理的配慮が努力義務から法的義務へ変わった点に加え、主務大臣による報告徴収・助言・指導・勧告と報告義務違反時の過料まで整理する。",
      whyImportant: [
        "2024年改正後の民間事業者の義務を、環境整備・差別禁止・合理的配慮という三つの柱で一度に確認できる",
        "合理的配慮が画一的な措置ではなく、障害の状態や具体的な場面によって変わることを基本方針の例とともに説明している",
        "違反時に直ちに罰則という単純な制度ではなく、主務大臣の報告徴収・助言・指導・勧告という行政対応まで押さえられる"
      ],
      audience: ["企業法務", "コンプライアンス", "店舗・サービス運営", "カスタマーサポート", "リスク管理"],
      audienceReason: "改正後の障害者対応を社内ルールへ落とす前提として、民間事業者に課される義務と行政対応の全体像を把握するため。",
      categories: ["危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: ["disability-unjust-discriminatory-treatment", "disability-reasonable-accommodation-duty", "disability-environmental-improvements"],
      primarySourceIds: ["source-egov-disability-discrimination-act-2024", "source-cao-disability-discrimination-overview", "source-cao-disability-discrimination-faq"],
      reformEventId,
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-egov-disability-discrimination-act-2024", "source-cao-disability-discrimination-overview"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2024年施行の合理的配慮義務化を、民間事業者の三つの実務論点から整理した。"
    },
    {
      id: "article-tmi-disability-reasonable-accommodation-20251030",
      title: "【障害福祉】障害者差別解消法（４） 合理的配慮",
      publisher: "TMI総合法律事務所",
      author: "菊田行紘、伊勢智子、水田進、森安博行、伏見純子",
      publishedAt: "2025-10-30",
      collectedAt: "2026-09-21",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17586.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／合理的配慮・建設的対話・過重な負担",
      status: "adopted",
      summary: "民間事業者の合理的配慮義務について、対象事業者、具体例、意思の表明、建設的対話、過重な負担、環境整備との関係を実務的に整理する。過重な負担は事業への影響、実現可能性、費用・負担、事業規模、財務状況等を総合評価し、困難な場合も理由説明と代替措置の柔軟な検討が重要とする。",
      whyImportant: [
        "合理的配慮の申出を受けた後の判断プロセスを、意思の表明から過重な負担まで具体的に追える",
        "過重な負担を抽象論で終わらせず、基本方針が挙げる評価要素へ分解している",
        "要求された方法を実施できない場合でも、建設的対話と代替措置を検討するという現場運用に直結する"
      ],
      audience: ["企業法務", "コンプライアンス", "店舗・サービス運営", "カスタマーサポート", "総務"],
      audienceReason: "個別の配慮申出について、断る・受けるの二択ではなく、説明可能な判断と代替案検討のプロセスを設計するため。",
      categories: ["危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: ["disability-reasonable-accommodation-duty", "disability-constructive-dialogue-undue-burden", "disability-environmental-improvements"],
      primarySourceIds: ["source-egov-disability-discrimination-act-2024", "source-cao-disability-discrimination-overview", "source-cao-disability-discrimination-faq"],
      legacyReformInference: false,
      whatChanged: "バックフィル／合理的配慮の個別判断を建設的対話・過重な負担・代替措置まで実務化する解説を追加した。"
    },
    {
      id: "article-tmi-disability-environment-20260306",
      title: "【障害福祉】障害者差別解消法（５） 環境の整備",
      publisher: "TMI総合法律事務所",
      author: "菊田行紘、伊勢智子、水田進、森安博行、伏見純子",
      publishedAt: "2026-03-06",
      collectedAt: "2026-09-21",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18050.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／環境の整備・アクセシビリティ",
      status: "adopted",
      summary: "障害者差別解消法5条の『環境の整備』を、個別の合理的配慮と区別して解説する。施設・設備だけでなく、ウェブアクセシビリティや職員研修などのソフト面も対象となり、個別対応が多い場面では事前の環境整備が合理的配慮を提供しやすくすることを具体例で示す。",
      whyImportant: [
        "環境整備をバリアフリー設備だけに限定せず、ウェブアクセシビリティや研修まで含む企業運用として理解できる",
        "個別の合理的配慮と、不特定多数を対象とする事前改善措置の違いを具体例で整理している",
        "反復する個別対応を恒久的な環境整備へ変えるという、運用コストと法務対応をつなぐ示唆がある"
      ],
      audience: ["企業法務", "総務", "ウェブ・プロダクト担当", "店舗・施設管理", "カスタマーサポート"],
      audienceReason: "個別対応だけでなく、設備・情報アクセス・研修・サイト改善を事前の仕組みとして優先順位付けするため。",
      categories: ["危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: ["disability-environmental-improvements", "disability-reasonable-accommodation-duty"],
      primarySourceIds: ["source-egov-disability-discrimination-act-2024", "source-cao-disability-discrimination-overview"],
      legacyReformInference: false,
      whatChanged: "バックフィル／環境の整備を施設・ウェブアクセシビリティ・研修まで含む事前改善として補強した。"
    },
    {
      id: "article-tmi-disability-unjust-treatment-20260717",
      title: "【障害福祉】障害者差別解消法（６） 不当な差別的取扱いの禁止",
      publisher: "TMI総合法律事務所",
      author: "菊田行紘、伊勢智子、水田進、森安博行、橋本直記、伏見純子",
      publishedAt: "2026-07-17",
      collectedAt: "2026-09-21",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18585.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／不当な差別的取扱い・現場運用",
      status: "adopted",
      summary: "障害を理由とする不当な差別的取扱いについて、サービス拒否・追加条件・安全上の理由等の具体例から『障害を理由とする不利な取扱い』と『正当な理由』を分けて検討する。抽象的な安全配慮や前例の不存在だけで一律拒否せず、本人の状況確認、代替手段、合理的配慮を検討する現場運用を示す。",
      whyImportant: [
        "入店・契約・施設利用・追加書類など、企業の現場で起こりやすい判断を具体例で確認できる",
        "正当な理由を安全確保等の目的だけでなく、その措置が本当にやむを得ないかまで評価する構造で説明している",
        "マニュアル、研修、相談窓口、事例蓄積という組織的な再発防止策まで落とし込んでいる"
      ],
      audience: ["企業法務", "コンプライアンス", "店舗・サービス運営", "カスタマーサポート", "リスク管理"],
      audienceReason: "現場担当者による一律拒否や過度な安全配慮を防ぎ、個別事情を確認して説明可能な対応をするため。",
      categories: ["危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: ["disability-unjust-discriminatory-treatment", "disability-constructive-dialogue-undue-burden"],
      primarySourceIds: ["source-egov-disability-discrimination-act-2024", "source-cao-disability-discrimination-overview", "source-cao-disability-discrimination-faq"],
      legacyReformInference: false,
      whatChanged: "バックフィル／不当な差別的取扱いの正当理由と現場体制整備を具体例で補強した。"
    }
  ];
  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existingArticles.concat(
    articleAdditions.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url)))
  );
})();
