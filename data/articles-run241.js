(() => {
  const TOPIC = "consumer-nonclinical-testing-health-services";
  const ISSUE = "consumer-test-research-use-ivd-boundary";
  const SOURCE_DRAFT = "source-egov-research-use-ivd-guideline-draft-20260120";
  const SOURCE_FINAL = "source-mhlw-research-use-ivd-guideline-20260331";
  const SOURCE_PMD = "source-mhlw-pmd-act-2025-amendment-hub";
  const REFORM = "research-use-ivd-guideline-2026";
  const ARTICLE_PRIMARY = "article-mhlw-research-use-ivd-guideline-20260331";
  const ARTICLE_TMI = "article-tmi-research-use-ivd-pmd-act-20260216";

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
  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));
  const addUniqueMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(values || [])].filter(Boolean)));

  const sources = [
    {
      id: SOURCE_DRAFT,
      title: "研究用と称する検査キット等の体外診断用医薬品の範囲に関するガイドライン（案）に関する御意見の募集について",
      type: "public_comment",
      typeLabel: "e-Govパブリック・コメント／厚生労働省",
      authority: "厚生労働省",
      publishedAt: "2026-01-20",
      url: "https://public-comment.e-gov.go.jp/servlet/Public?CLASSNAME=PCM1040&Mode=1&id=495250338",
      importance: "高",
      whyImportant: "『研究用』表示だけで体外診断用医薬品から外れるとは限らず、製品の形状、販売方法、表示・広告等を総合して一般人が診断用途と認識するかを判断する考え方について、2026年1月20日から意見募集された厚生労働省のガイドライン案。2026年3月31日に最終化された。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_FINAL,
      title: "研究用と称する検査キット等の体外診断用医薬品の範囲に関するガイドラインについて",
      type: "guideline",
      typeLabel: "厚生労働省・体外診断用医薬品該当性ガイドライン",
      authority: "厚生労働省",
      publishedAt: "2026-03-31",
      url: "https://www.mhlw.go.jp/web/t_doc?dataId=00tc9941&dataType=1&pageNo=1",
      importance: "高",
      whyImportant: "薬機法2条14項の体外診断用医薬品該当性について、『研究用』『非医療用』等の表示だけでなく、製品の客観的な使用目的、一般消費者向けの販売方法、広告・表示、形状等を総合評価する最終ガイドライン。該当すると判断された場合は無承認無許可医薬品として取扱うことを明確にした。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_PMD,
      title: "令和7年の医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律（薬機法）等の一部改正について",
      type: "law_amendment",
      typeLabel: "厚生労働省・2025年薬機法等改正",
      authority: "厚生労働省",
      publishedAt: "2025-05-21",
      url: "https://www.mhlw.go.jp/stf/newpage_58083.html",
      importance: "高",
      whyImportant: "令和7年法律第37号の法文、概要、施行政省令・通知を集約する厚生労働省の公式ハブ。体外診断用医薬品についても、市販後の性能等再評価制度など段階施行される改正事項の一次資料を追える。",
      topics: [TOPIC]
    }
  ];

  let currentSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  sources.forEach((source) => {
    if (sourceIds.has(source.id) || sourceUrls.has(normalizeUrl(source.url))) return;
    currentSources = currentSources.concat([source]);
    sourceIds.add(source.id);
    sourceUrls.add(normalizeUrl(source.url));
  });
  window.SOURCE_DATA = currentSources;

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const currentSummary = topic.currentSummary || {};
    const issues = Array.isArray(topic.issues) ? topic.issues.slice() : [];
    if (!issues.some((issue) => issue && issue.id === ISSUE)) {
      issues.push({
        id: ISSUE,
        title: "『研究用』検査キットはいつ体外診断用医薬品に当たるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "『研究用』『非医療用』『診断には使用できない』等の表示だけで体外診断用医薬品から除外されるわけではない。疾病の診断に使用する目的があるかは、製品の性能・形状、販売場所・EC上の売り方、広告・説明、一般人が受ける認識等を総合して判断し、実態として診断目的で提供される検査キットは薬機法上の体外診断用医薬品として扱う。",
        exception: "研究機関・医療関係者等に販売先を限定し、研究目的であることが客観的に明確な試薬等まで一律に体外診断用医薬品とするものではない。他方、一般消費者が購入・使用できる実態がある場合、『研究用』という表示だけでは除外理由にならない。",
        uncertain: "該当性は製品ごとの表示・性能・流通実態を含む総合判断であり、海外認証表示や個々の性能表示も文脈によって評価が変わる。個別製品では最新の厚生労働省・都道府県の判断や運用も確認する必要がある。",
        sourceIds: [SOURCE_FINAL]
      });
    }
    const nextSummary = String(topic.summary || "").includes("研究用")
      ? topic.summary
      : `${topic.summary || ""} また、一般消費者に流通する『研究用』検査キットについては、2026年3月31日の厚生労働省ガイドラインにより、表示名ではなく形状・販売方法・広告等を含む実態から体外診断用医薬品該当性を判断する。`.trim();
    return {
      ...topic,
      summary: nextSummary,
      lastUpdated: "2026-09-23",
      lastVerified: "2026-09-23",
      overview: addUnique(topic.overview, "厚生労働省は2026年3月31日、『研究用』等と称する検査キットの体外診断用医薬品該当性ガイドラインを最終化した。『研究用』等の表示だけで規制対象外とはならず、製品の客観的な用途、形状、一般消費者向けの販売方法、広告・表示等を総合して診断目的の有無を判断する。"),
      currentSummary: {
        ...currentSummary,
        facts: addUniqueMany(currentSummary.facts, [
          "厚生労働省は2026年3月31日、『研究用と称する検査キット等の体外診断用医薬品の範囲に関するガイドライン』を公表した。薬機法2条14項の体外診断用医薬品該当性について、『研究用』『非医療用』等の表示だけでなく製品の実態から使用目的を判断する。",
          "ガイドラインは、新型コロナに限らず、インフルエンザ、性感染症、がんリスク等に関係する検査キットや、唾液、尿、鼻腔ぬぐい液、指先血等のヒト由来検体を用いる製品を広く対象として想定している。",
          "診断目的を明示・示唆する表示、疾患の有無を確認できるとの表示、海外のIVD認証等の強調、承認済み診断薬との比較、感度・特異度等の性能表示、検体採取方法の図示や採取具の同梱などは、体外診断用医薬品該当性を判断する要素になり得る。"
        ]),
        interpretations: addUniqueMany(currentSummary.interpretations, [
          "消費者向け検査ビジネスでは、サービス提供行為が医師法上の医業に当たるかだけでなく、販売する検査キット自体が薬機法上の体外診断用医薬品に当たらないかを別レイヤーで確認する必要がある。",
          "『研究用』という免責的な表示を置くより、誰に、どの販路で、どの形状・説明で販売し、一般人が何の目的の製品と理解するかという実態を基準に商品設計・広告審査を行う必要がある。"
        ]),
        implications: addUniqueMany(currentSummary.implications, [
          "『研究用』検査キットを扱う場合、EC・店頭を含む販路、商品名・パッケージ、使用説明、広告、レビュー誘導、検体採取具の同梱、性能表示を一体として棚卸しし、診断用途を示唆していないか確認する。",
          "研究機関向け試薬として扱う製品は、販売先の限定、研究目的の確認、一般消費者向け販売との分離等により、研究用途であることが客観的に説明できる運用を整える。",
          "体外診断用医薬品に該当し得る場合は、無承認無許可医薬品としてのリスクを前提に、製造販売承認・認証等の必要性を確認し、単なる注意書きの追加だけで対応を終えない。"
        ]),
        uncertain: addUnique(currentSummary.uncertain, "『研究用』検査キットの体外診断用医薬品該当性は、表示だけでなく個別製品の性能、形状、販売方法、広告等の具体的事情を総合して判断されるため、商品単位での確認が必要である。")
      },
      issues,
      sourceIds: addUniqueMany(topic.sourceIds, [SOURCE_DRAFT, SOURCE_FINAL, SOURCE_PMD])
    };
  });

  const reformEvent = {
    id: REFORM,
    title: "『研究用』検査キット・体外診断用医薬品該当性ガイドライン（2026年）",
    eventType: "regulation_or_guideline",
    lawId: "pmd-act-research-use-ivd-guideline",
    lawLabel: "薬機法・研究用検査キットIVD該当性ガイドライン",
    relatedTopics: [TOPIC],
    effectiveDateStatus: "confirmed",
    effectiveDate: "2026-03-31",
    effectiveDateSourceIds: [SOURCE_FINAL],
    matchSourceIds: [SOURCE_DRAFT, SOURCE_FINAL],
    sourceIds: [SOURCE_DRAFT, SOURCE_FINAL],
    articleIds: [ARTICLE_PRIMARY, ARTICLE_TMI]
  };
  if (!(window.REFORM_EVENT_DATA || []).some((item) => item && item.id === REFORM)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([reformEvent]);
  }

  const articles = [
    {
      id: ARTICLE_PRIMARY,
      title: "研究用と称する検査キット等の体外診断用医薬品の範囲に関するガイドラインについて",
      publisher: "厚生労働省",
      author: "厚生労働省医薬局監視指導・麻薬対策課",
      publishedAt: "2026-03-31",
      collectedAt: "2026-09-23",
      url: "https://www.mhlw.go.jp/web/t_doc?dataId=00tc9941&dataType=1&pageNo=1",
      sourceType: "primary",
      sourceLabel: "一次資料・厚生労働省／研究用検査キット・体外診断用医薬品該当性",
      status: "adopted",
      summary: "『研究用』『非医療用』等と称して流通する検査キットについて、薬機法2条14項の体外診断用医薬品該当性を表示名ではなく実態から判断する厚生労働省の最終ガイドライン。疾病の診断目的の明示・示唆、一般消費者向けの販売方法、海外認証や承認済み診断薬との比較、感度・特異度等の性能表示、検体採取方法の図示や採取具の同梱等を判断要素として例示し、研究機関に限定された真の研究用途との切り分けも示す。該当すると判断された製品は無承認無許可医薬品として取り扱われ得る。",
      whyImportant: [
        "『研究用』と書いてあれば薬機法対象外という形式的な整理を否定し、製品の客観的用途と一般人が受ける認識から診断目的を判断する公式基準を示した",
        "一般消費者向けEC販売、疾患の有無が分かるとの説明、承認品との比較、PCR陽性検体への感度、検体採取図やスワブ・ランセット等の同梱など、商品・広告審査で使える具体的な判断要素を列挙している",
        "研究機関等に販売先を限定した真正な研究用途は区別しつつ、一般消費者が購入できる実態がある場合には『研究用』表示だけでは規制対象外にならないことを明確にしている",
        "消費者向け検査サービスの医師法上の医業該当性とは別に、検査キット自体の薬機法上の製品規制を独立して確認する必要があることを整理できる"
      ],
      audience: ["企業法務", "医薬・ヘルスケア事業者", "検査キット・試薬メーカー", "EC・小売事業者", "広告・コンプライアンス担当"],
      audienceReason: "『研究用』検査キットの商品設計・販路・広告を、体外診断用医薬品該当性と無承認無許可医薬品リスクの観点から点検するため。",
      categories: ["危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [TOPIC],
      relatedIssues: [ISSUE],
      primarySourceIds: [SOURCE_FINAL],
      reformEventId: REFORM,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [SOURCE_FINAL],
      legacyReformInference: false,
      whatChanged: "2026年3月31日に最終化された厚生労働省ガイドラインを一次資料ARTICLEとして追加し、『研究用』表示ではなく製品・販売・広告の実態からIVD該当性を判断する基準を独立論点として整理した。"
    },
    {
      id: ARTICLE_TMI,
      title: "【ヘルスケア】『研究用』検査キット規制の明確化と体外診断用医薬品に係る改正薬機法のポイント ～該当性判断の新ガイドライン案とIVD規制の国際整合・厳格化～",
      publisher: "TMI総合法律事務所",
      author: "上﨑貴史・岡本敬史",
      publishedAt: "2026-02-16",
      collectedAt: "2026-09-23",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/17987.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／研究用検査キット・体外診断用医薬品",
      status: "adopted",
      summary: "意見募集段階にあった『研究用』検査キットの体外診断用医薬品該当性ガイドライン案と、2025年改正薬機法のIVD固有の改正事項を一体で整理する実務解説。『研究用』との標榜ではなく形状・販路・広告等の実態で判断する方向への転換に加え、市販後の性能等再評価、臨床性能試験の信頼性基準、不具合報告への整理、製造管理者要件の見直しを説明し、研究用製品の総点検、性能評価体制、GVP/GCP手順書の見直しまで企業対応へ落としている。",
      whyImportant: [
        "ガイドライン案の抽象的な基準を、形状、一般消費者向けEC等の販路、診断を示唆する広告、海外認証表示といった商品実務の単位へ分解している",
        "『研究用』表示があっても実態が診断目的なら無承認無許可医薬品として扱われ得るため、商品名だけでなく販路・パッケージ・説明を横断して点検すべきことが分かる",
        "2025年改正薬機法のIVD固有論点として、市販後の性能等再評価、臨床性能試験の信頼性基準、不具合報告、製造管理者要件をまとめており、製品ライフサイクル管理まで視野を広げられる",
        "研究用製品の棚卸し、市販後性能評価プロセス、GVP/GCP手順書の見直しという準備タスクまで提示し、一次資料の該当性基準を社内対応へ落とし込みやすい"
      ],
      audience: ["企業法務", "医薬・ヘルスケア事業者", "検査キット・試薬メーカー", "品質保証・薬事担当", "EC・広告担当"],
      audienceReason: "研究用試薬・検査キットの販売実態と表示を見直しつつ、IVD規制の改正対応を品質保証・薬事の運用まで具体化するため。",
      categories: ["危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [TOPIC],
      relatedIssues: [ISSUE],
      primarySourceIds: [SOURCE_DRAFT, SOURCE_FINAL, SOURCE_PMD],
      reformEventId: REFORM,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [SOURCE_DRAFT],
      legacyReformInference: false,
      whatChanged: "バックフィル／ガイドライン案時点の該当性判断と2025年改正薬機法のIVD固有の改正事項を、研究用製品の棚卸し・性能評価・SOP見直しまで実務対応として補強した。"
    }
  ];

  let currentArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (articleIds.has(article.id) || articleUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    articleIds.add(article.id);
    articleUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();
