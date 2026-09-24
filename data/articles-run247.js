(() => {
  if (window.__LAW_INDEX_RUN247_APPLIED__) return;
  window.__LAW_INDEX_RUN247_APPLIED__ = true;

  const TOPIC = "insurance-agency-governance-comparison-sales-2025";
  const ISSUE = "insurance-broker-reform-2026";
  const REFORM = "insurance-business-act-2025-amendment";
  const SOURCE = "source-fsa-insurance-broker-reinsurance-fees-20250828";
  const FINAL_RULES = "source-fsa-insurance-business-act-2026-final-rules";
  const ARTICLE = "article-amt-insurance-broker-reinsurance-update-20260729";

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

  const source = {
    id: SOURCE,
    title: "『保険会社向けの総合的な監督指針』等の一部改正（案）に対するパブリックコメントの結果等の公表について",
    type: "guideline",
    typeLabel: "監督指針・パブリックコメント結果／保険仲立人報酬",
    authority: "金融庁",
    publishedAt: "2025-08-28",
    url: "https://www.fsa.go.jp/news/r7/hoken/20250828/20250828.html",
    importance: "高",
    whyImportant: "2025年8月28日適用の改正監督指針とパブリックコメント結果。回答389・390で、再保険契約の締結の媒介に係る手数料等について監督指針V-4-4(1)の請求方法ルールを適用せず、海外再保険会社との取引を含む商慣習・法令・公序良俗に沿って取り扱う考え方を明示している。",
    topics: [TOPIC]
  };
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(sources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(sources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!sourceIds.has(source.id) && !sourceUrls.has(normalizeUrl(source.url))) {
    window.SOURCE_DATA = sources.concat(source);
  }

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    const issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
      if (!issue || issue.id !== ISSUE) return issue;
      return {
        ...issue,
        conclusion: "2025年改正保険業法と施行ルールでは、保険仲立人について保証金制度、保険代理店等との協業、海外直接付保、不祥事件届出等が見直された。2026年6月1日以後、保険仲立人が代理店と協業する場合は両者の役割の違いと業務分担を顧客へ説明し、仲立人側は顧客の同意を得る。再保険契約の媒介手数料等については、2025年8月28日改正監督指針で一般の企業保険向けV-4-4(1)の請求方法ルールを適用せず、商慣習・法令・公序良俗に沿って扱う整理が示されている。",
        exception: "一般の企業保険と再保険では仲立人報酬の請求方法に関する監督指針上の扱いが異なる。再保険について一般保険向けの請求方法ルールを機械的に当てはめない。また、保証金、代理店との協業、海外直接付保、不祥事件届出等はそれぞれ適用要件が異なる。",
        uncertain: "改正後にどの保険調達・媒介スキームで仲立人利用が定着するか、また金融庁が今後検討するとしている仲立人制度の追加見直し・国内再保険キャプティブ制度の具体化は継続確認する。",
        sourceIds: addUnique(issue.sourceIds, SOURCE)
      };
    });
    return {
      ...topic,
      lastUpdated: "2026-09-24",
      lastVerified: "2026-09-24",
      sourceIds: addUnique(topic.sourceIds, SOURCE),
      issues,
      currentSummary: {
        ...currentSummary,
        facts: addUnique(currentSummary.facts, "保険仲立人と保険代理店の協業は2026年6月1日から可能となり、仲立人は両者の役割の違いと業務分担を顧客へ説明して同意を得る必要がある。再保険契約の媒介手数料等は2025年8月28日改正監督指針で一般の企業保険向け請求方法ルールの対象外とされ、商慣習・法令・公序良俗に沿う扱いが示されている。"),
        implications: addUnique(currentSummary.implications, "保険仲立人を使う企業は、代理店との協業時の説明・同意フローに加え、一般保険と再保険で報酬設計の監督上の扱いが異なることを契約・調達プロセスへ反映する。")
      }
    };
  });

  const article = {
    id: ARTICLE,
    title: "Recent Regulatory Updates Relevant to Insurance Brokers and Reinsurance",
    publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
    author: "Hiroki Tsue / Huan Lee (Henry) Tan / Tomoki Debari",
    publishedAt: "2026-07-29",
    collectedAt: "2026-09-24",
    url: "https://www.amt-law.com/en/insights/trending-news/trending-news_20260729001_en_001/",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／保険仲立人・再保険",
    status: "adopted",
    summary: "2025～2026年の保険仲立人制度見直しを、保険代理店との協業と再保険仲介報酬の両面から整理する実務解説。2026年6月1日以後、仲立人と代理店の協業では役割・業務分担の説明と同意取得が必要となる。一方、再保険契約の媒介手数料等については、2025年8月28日改正監督指針で一般の企業保険向けV-4-4(1)の請求方法ルールを適用せず、海外再保険を含む商慣習・法令・公序良俗に沿って扱う整理が示されている。今後の仲立人制度の追加見直しや国内再保険キャプティブ制度の検討にも触れる。",
    whyImportant: [
      "既収録の2026年5月AMT解説が明示的に対象外としていた『媒介手数料の受領方法』を、再保険まで含めて補完できる",
      "保険仲立人と保険代理店の協業について、誰が誰に役割・業務分担を説明し、どの同意を得るかを施行後の実務フローとして確認できる",
      "再保険では一般の企業保険と同じ手数料請求ルールを機械的に適用しないことを、金融庁パブリックコメント回答389・390と照合して確認できる"
    ],
    audience: ["企業法務・リスク管理", "保険・再保険担当", "保険仲立人", "保険代理店", "金融法務・コンプライアンス"],
    audienceReason: "改正後の保険仲立人を使う際に、代理店との協業説明・同意、一般保険と再保険の報酬設計の違い、今後の制度見直しを実務へ落とすため。",
    categories: ["契約", "危機管理・コンプライアンス", "国際取引"],
    relatedTopics: [TOPIC],
    relatedIssues: [ISSUE],
    primarySourceIds: [SOURCE, FINAL_RULES],
    reformEventId: REFORM,
    reformStageAtPublication: "effective",
    reformStageSourceIds: [FINAL_RULES, SOURCE],
    legacyReformInference: false,
    whatChanged: "テーマ更新／保険仲立人と代理店の協業時の説明・同意、および再保険契約の媒介手数料等が一般の企業保険向け請求方法ルールの対象外となる点を一次資料と実務解説で補強した。"
  };
  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(articles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(articles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = articles.concat(article);
  }
})();

(() => {
  if (window.__LAW_INDEX_RUN247_DESIGN_CUSTOMS_APPLIED__) return;
  window.__LAW_INDEX_RUN247_DESIGN_CUSTOMS_APPLIED__ = true;

  const TOPIC = "applied-art-mass-products-copyright";
  const STRATEGY_ISSUE = "applied-art-product-design-rights-strategy";
  const CUSTOMS_ISSUE = "applied-art-design-customs-enforcement";
  const ARTICLE = "article-tmi-design-rights-customs-enforcement-20260507";
  const SOURCE_STATS = "source-mof-customs-ip-enforcement-2025";
  const SOURCE_QA = "source-customs-ip-injunction-qa";

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
  const addMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(Array.isArray(values) ? values : [])].filter(Boolean)));

  const sourceAdditions = [
    {
      id: SOURCE_STATS,
      title: "令和7年の税関における知的財産侵害物品の差止状況（詳細）",
      type: "report",
      typeLabel: "一次資料・財務省／知的財産侵害物品の水際取締り",
      authority: "財務省",
      publishedAt: "2026-03-06",
      url: "https://www.mof.go.jp/policy/customs_tariff/trade/safe_society/chiteki/cy2025/20260306a.html",
      importance: "高",
      whyImportant: "2025年の全国税関の知的財産侵害物品差止実績。輸入差止点数763,504点のうち意匠権侵害物品は46,112点（6.0％）で、イヤホン、携帯用魔法瓶、電気毛布、充電器等の意匠権侵害物品が実際に水際で差し止められていることを確認できる。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_QA,
      title: "Q&A（差止申立関係）",
      type: "guideline",
      typeLabel: "一次資料・税関／知的財産の輸出入差止申立制度",
      authority: "税関",
      publishedAt: null,
      url: "https://www.customs.go.jp/mizugiwa/chiteki/pages/qa_001.htm",
      importance: "高",
      whyImportant: "意匠権を含む知的財産権について輸出入差止申立てが可能であること、申立書・資料の提出や審査の基本手続を税関が整理した一次資料。商品デザインの権利化を模倣品の水際対応へ接続する際の制度入口を確認できる。",
      topics: [TOPIC]
    }
  ];
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existingSources.concat(sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url))));

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    let issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
      if (!issue || issue.id !== STRATEGY_ISSUE) return issue;
      return {
        ...issue,
        sourceIds: addMany(issue.sourceIds, [SOURCE_STATS, SOURCE_QA])
      };
    });
    if (!issues.some((issue) => issue && issue.id === CUSTOMS_ISSUE)) {
      issues = issues.concat({
        id: CUSTOMS_ISSUE,
        title: "意匠権を模倣品の税関水際取締りにどう使うか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "模倣品リスクが高い商品では、発売前の意匠出願を国内での差止・損害賠償だけでなく、税関への輸出入差止申立てまで見据えた権利ポートフォリオとして設計する。税関の差止申立ては意匠権も対象であり、実際の差止実績でも意匠権侵害物品が継続的に含まれている。",
        exception: "差止申立ては権利の存在だけで自動的に受理されるものではなく、権利内容、侵害事実、侵害物品を識別するための資料等を準備して税関の審査を受ける。商品ごとに商標権・著作権・特許権・不正競争防止法等との併用可否も異なる。",
        uncertain: "部分意匠や出願転換を含む個別の権利取得・侵害判断は登録意匠の内容、出願経過、輸入物品の具体的形状等に左右されるため、TMI解説の戦略例を全商品へ一般化せず案件ごとに検討する。",
        sourceIds: [SOURCE_STATS, SOURCE_QA]
      });
    }
    return {
      ...topic,
      lastUpdated: "2026-09-24",
      lastVerified: "2026-09-24",
      sourceIds: addMany(topic.sourceIds, [SOURCE_STATS, SOURCE_QA]),
      referenceArticleIds: addUnique(topic.referenceArticleIds, ARTICLE),
      practicalImpacts: addUnique(topic.practicalImpacts, "模倣品の税関水際取締り・輸出入差止申立て"),
      issues,
      currentSummary: {
        ...currentSummary,
        facts: addUnique(currentSummary.facts, "財務省の2025年実績では、全国税関の輸入差止点数763,504点のうち意匠権侵害物品は46,112点（6.0％）で、イヤホン、携帯用魔法瓶、電気毛布、充電器などの意匠権侵害物品が実際に水際で差し止められている。"),
        interpretations: addUnique(currentSummary.interpretations, "量産商品の意匠権は、著作権との保護調整だけでなく、模倣品が輸入される局面で税関差止申立ての根拠として使えるため、商品デザインの権利化を執行手段まで含むポートフォリオとして考える必要がある。"),
        implications: addUnique(currentSummary.implications, "模倣リスクが高い商品では、公開前の意匠出願時に、将来の税関差止申立てで侵害物品を識別・説明できる資料や部分意匠の活用可能性まで含めて権利化・証拠管理を設計する。")
      }
    };
  });

  const article = {
    id: ARTICLE,
    title: "Effectiveness of Design Rights in Japanese Customs Enforcement",
    publisher: "TMI総合法律事務所",
    author: "茜ヶ久保公二",
    publishedAt: "2026-05-07",
    collectedAt: "2026-09-24",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18306.html",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／意匠権・税関水際取締り",
    status: "adopted",
    summary: "日本の税関における意匠権の水際執行を、税関による侵害認定、意匠権の実際の差止利用、部分意匠、特許出願から意匠出願への転換という観点から整理する実務解説。単に『意匠登録しておく』という説明にとどまらず、模倣品が現れたときに税関差止へつなげる権利設計や、製品全体と部分のどこを保護対象にするかまで踏み込んでいる。",
    whyImportant: [
      "商品デザインの意匠出願を、登録後の侵害訴訟だけでなく税関の輸出入差止申立てという執行手段まで含めて設計する視点を得られる",
      "部分意匠が水際取締りで実際に活用され得ることを示し、模倣されやすい特徴部分をどの単位で権利化するかという商品開発・知財実務へ落とし込める",
      "財務省の最新差止実績と税関の公式Q&Aを併読することで、意匠権が現実の水際取締りで使われていることと制度上の申立入口を一次資料で確認できる"
    ],
    audience: ["企業法務", "知財・ブランド担当", "商品企画・デザイン担当", "模倣品対策担当", "輸出入・通関担当"],
    audienceReason: "商品デザインをどの権利で保護するかだけでなく、模倣品流入時に税関でどう執行するかまで含めた知財ポートフォリオを設計するため。",
    categories: ["知的財産", "国際取引", "危機管理・コンプライアンス"],
    relatedTopics: [TOPIC],
    relatedIssues: [STRATEGY_ISSUE, CUSTOMS_ISSUE],
    primarySourceIds: [SOURCE_STATS, SOURCE_QA],
    legacyReformInference: false,
    whatChanged: "実務執行補強／商品デザインの権利化を、意匠権による税関水際取締り・輸出入差止申立てまで含む権利ポートフォリオとして整理する論点を追加した。"
  };
  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existingArticles.concat(article);
  }
})();

(() => {
  if (window.__LAW_INDEX_RUN247_CAA_COMMITMENT_APPLIED__) return;
  window.__LAW_INDEX_RUN247_CAA_COMMITMENT_APPLIED__ = true;

  const TOPIC = "advertising-display-control";
  const ISSUE = "display-commitment-procedure";
  const SOURCE = "source-caa-display-commitment-guideline-20240418";
  const ARTICLE = "article-businesslawyers-mhm-display-commitment-20260520";

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

  const source = {
    id: SOURCE,
    title: "確約手続に関する運用基準",
    type: "guideline",
    typeLabel: "一次資料・消費者庁／景品表示法の確約手続",
    authority: "消費者庁",
    publishedAt: "2024-04-18",
    url: "https://www.caa.go.jp/policies/policy/representation/fair_labeling/guideline/assets/representation_cms216_240418_04.pdf",
    importance: "高",
    whyImportant: "改正景品表示法の確約手続について、手続開始前の相談、通知後60日以内の認定申請、対象外事由、確約措置の十分性・実施確実性、典型的措置、申請資料の取扱いまで消費者庁が定めた公式運用基準。",
    topics: [TOPIC]
  };
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!sourceIds.has(source.id) && !sourceUrls.has(normalizeUrl(source.url))) {
    window.SOURCE_DATA = existingSources.concat(source);
  }

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    let issues = Array.isArray(topic.issues) ? [...topic.issues] : [];
    if (!issues.some((issue) => issue && issue.id === ISSUE)) {
      issues = issues.concat({
        id: ISSUE,
        title: "景表法の確約手続を調査対応へどう組み込むか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "景品表示法違反の疑いで消費者庁の調査を受けた場合、確約手続通知前から対象可否や利用希望について相談できる。通知を受けて申請する場合は60日以内に、違反被疑行為等を是正するために十分で、かつ確実に実施できる確約計画を提出する必要がある。認定されれば、対象となる違反被疑行為について措置命令・課徴金納付命令等の法的措置に係る規定は適用されない。",
        exception: "確約手続は事業者が希望すれば当然に利用できる制度ではなく、消費者庁が個別事案ごとに付すことが適当か判断する。過去10年以内に確定した法的措置を受けた場合や、根拠がないことを認識しながら表示するなど悪質かつ重大な違反被疑行為は運用基準上の対象外となる。",
        uncertain: "返金、契約・取引条件変更等を含め、どの確約措置の組合せが十分性・実施確実性を満たすかは事案ごとに異なる。公表事例と消費者庁との事前相談の運用を継続確認する必要がある。",
        sourceIds: [SOURCE]
      });
    }
    return {
      ...topic,
      lastUpdated: "2026-09-24",
      lastVerified: "2026-09-24",
      sourceIds: addUnique(topic.sourceIds, SOURCE),
      referenceArticleIds: addUnique(topic.referenceArticleIds, ARTICLE),
      practicalImpacts: addUnique(topic.practicalImpacts, "消費者庁調査・確約手続／返金・再発防止措置の設計"),
      issues,
      currentSummary: {
        ...currentSummary,
        facts: addUnique(currentSummary.facts, "景品表示法の確約手続では、消費者庁の調査を受ける事業者は正式な確約手続通知前から相談でき、通知後に認定申請する場合は60日以内に確約計画を提出する。計画は措置内容の十分性と措置実施の確実性の双方を満たす必要がある。"),
        interpretations: addUnique(currentSummary.interpretations, "確約手続は単なる処分回避の申請ではなく、調査初期から是正策・返金等の被害回復・再発防止・履行報告をどう組み合わせるかを当局との協議も踏まえて設計する調査対応の選択肢として扱う必要がある。"),
        implications: addUnique(currentSummary.implications, "消費者庁の調査開始時に、確約手続の利用可能性、提出資料の範囲、返金等の影響是正措置、再発防止策を早期に検討する。申請が却下・取消し・取下げとなった場合、提出資料は返却されず、その後の法的措置の事実認定の証拠として使用され得る点も踏まえて資料提出を管理する。")
      }
    };
  });

  const article = {
    id: ARTICLE,
    title: "景表法の確約手続の概要とその動向〜最新の公表事例を踏まえて〜",
    publisher: "BUSINESS LAWYERS／森・濱田松本法律事務所外国法共同事業",
    author: "嶋村 直登",
    publishedAt: "2026-05-20",
    collectedAt: "2026-09-24",
    url: "https://www.businesslawyers.jp/articles/1409",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／景品表示法・確約手続",
    status: "adopted",
    summary: "景品表示法の確約手続について、制度上の対象・対象外事由、調査開始から通知・60日以内の申請までの流れ、確約措置の十分性・実施確実性、典型的な是正措置を、2026年5月時点の公表事例と実際の当局対応経験を踏まえて整理する。特に、正式通知前の消費者庁との協議、返金・契約変更等を含む措置設計、申請資料が却下・取消し・取下げ後の調査で証拠として使われ得る点まで、企業の調査対応へ落とし込んでいる。",
    whyImportant: [
      "運用基準の条文的な説明だけでなく、正式な確約手続通知の前に消費者庁との協議が進む実務を示し、調査初期からの意思決定フローへ落とし込める",
      "確約計画の認定に必要な『措置内容の十分性』『措置実施の確実性』を、行為停止、消費者周知、再発防止、履行報告、返金、契約・取引条件変更という具体的な措置単位で検討できる",
      "申請資料が却下・取消し・取下げ後の法的措置で証拠として利用され得る点を踏まえ、何をどこまで提出するかという調査対応上のリスクまで整理している"
    ],
    audience: ["企業法務", "広告・マーケティング審査担当", "コンプライアンス", "危機管理・当局対応担当", "消費者法務"],
    audienceReason: "景品表示法調査を受けた際に、通常の争点対応だけでなく確約手続を選択肢として評価し、是正・返金・再発防止策と提出資料を早期に設計するため。",
    categories: ["消費者法・表示", "危機管理・コンプライアンス"],
    relatedTopics: [TOPIC],
    relatedIssues: [ISSUE],
    primarySourceIds: [SOURCE],
    legacyReformInference: false,
    whatChanged: "実務対応補強／景品表示法の広告表示管理に、消費者庁の調査開始後の確約手続選択、正式通知前の相談、60日申請期限、確約措置・提出資料の設計という当局対応の論点を追加した。"
  };
  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existingArticles.concat(article);
  }
})();

(() => {
  if (window.__LAW_INDEX_RUN247_NA_AD_REFORM_APPLIED__) return;
  window.__LAW_INDEX_RUN247_NA_AD_REFORM_APPLIED__ = true;

  const TOPIC = "advertising-display-control";
  const ARTICLE = "article-nishimura-premium-unsubstantiated-review-20260821";
  const REFORM = "premium-representations-review-2026";
  const SOURCE = "source-cao-regulatory-reform-plan-2026-advertising";

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

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    return {
      ...topic,
      lastUpdated: "2026-09-24",
      lastVerified: "2026-09-24",
      referenceArticleIds: addUnique(topic.referenceArticleIds, ARTICLE)
    };
  });

  const article = {
    id: ARTICLE,
    title: "規制改革実施計画と景品表示法の改正",
    publisher: "西村あさひ法律事務所・外国法共同事業",
    author: "森田 多恵子 / 岡田 彩 / 伊藤 沙条羅",
    publishedAt: "2026-08-21",
    collectedAt: "2026-09-24",
    url: "https://www.nishimura.com/ja/knowledge/newsletters/consumer_law_260821",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／景品表示法・規制改革実施計画",
    status: "adopted",
    summary: "2026年7月21日に閣議決定された規制改革実施計画のうち、景品表示法に関係する総付景品規制の上限額引上げと不実証広告規制の運用見直しを取り上げる実務解説。現行の総付景品上限が直ちに変更されたわけではないことと、2026年度に検討を開始し2027年度に結論を得る政策工程を分けて読み、不実証広告規制では合理的根拠資料の提出要求や措置命令時の当局説明の在り方が見直し対象であることを整理する。",
    whyImportant: [
      "規制改革実施計画を『既にルールが変わった』と誤読せず、現行規制と将来の見直し工程を分けて広告・販促審査へ反映できる",
      "総付景品の上限額と不実証広告規制という性質の異なる二つの見直しを、企業のキャンペーン設計と表示根拠管理の双方から確認できる",
      "不実証広告規制では、当局が一般消費者の印象・認識や提出資料を合理的根拠と認めない理由をどう説明するかという手続運用も見直し対象であり、調査対応の証拠設計に直結する"
    ],
    audience: ["企業法務", "広告・マーケティング審査担当", "販促・キャンペーン企画", "コンプライアンス", "消費者法務"],
    audienceReason: "総付景品キャンペーンと効果・性能表示の審査で、現行ルールを維持しつつ2027年度までの制度見直しを追うため。",
    categories: ["消費者法・表示", "危機管理・コンプライアンス"],
    relatedTopics: [TOPIC],
    relatedIssues: ["display-premium-cap-review", "display-undemonstrated-ad-review"],
    primarySourceIds: [SOURCE],
    reformEventId: REFORM,
    reformStageAtPublication: "proposal",
    reformStageSourceIds: [SOURCE],
    legacyReformInference: false,
    whatChanged: "バックフィル／2026年規制改革実施計画による総付景品上限と不実証広告規制の見直しを、現行ルールと将来工程を分けて読む実務解説を追加した。"
  };
  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existingArticles.concat(article);
  }
})();

(() => {
  if (window.__LAW_INDEX_RUN247_DNFBP_AML_APPLIED__) return;
  window.__LAW_INDEX_RUN247_DNFBP_AML_APPLIED__ = true;

  const TOPIC = "aml-kyc-criminal-proceeds";
  const ISSUE = "aml-dnfbp-effectiveness";
  const ARTICLE = "article-tmi-dnfbp-aml-cft-20260917";
  const SOURCE_ANNUAL = "source-npa-aml-annual-report-2025";
  const SOURCE_ACTION = "source-mof-aml-cft-action-plan-2024-2026";

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
  const addMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(Array.isArray(values) ? values : [])].filter(Boolean)));

  const sourceAdditions = [
    {
      id: SOURCE_ANNUAL,
      title: "犯罪収益移転防止に関する年次報告書（令和7年）",
      type: "report",
      typeLabel: "一次資料・警察庁JAFIC／DNFBPs・疑わしい取引届出",
      authority: "警察庁（JAFIC）",
      publishedAt: "2026-03-12",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/nenzihokoku/data/jafic_2025.pdf",
      importance: "高",
      whyImportant: "令和7年中の疑わしい取引の年間通知件数1,019,405件に対し、DNFBPsからの通知は439件（約0.04％）にとどまり、金融機関側の届出内容との対照からDNFBPsの取引には多数の疑わしい取引情報が潜在している可能性を警察庁が指摘した。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_ACTION,
      title: "マネロン・テロ資金供与・拡散金融対策に関する行動計画（2024-2026年度）",
      type: "report",
      typeLabel: "一次資料・政府行動計画／DNFBPsのAML/CFT",
      authority: "マネロン・テロ資金供与・拡散金融対策政策会議",
      publishedAt: "2024-04-17",
      url: "https://www.mof.go.jp/policy/international_policy/councils/aml_cft_policy/20240417.html",
      importance: "高",
      whyImportant: "DNFBPsについて、リスク理解とリスクベース・アプローチ、取引時確認・継続的顧客管理の実効性、リスクベース監督、疑わしい取引届出の質・件数向上を2026年度末までの政府行動として明示している。",
      topics: [TOPIC]
    }
  ];
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existingSources.concat(sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url))));

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    let issues = Array.isArray(topic.issues) ? [...topic.issues] : [];
    if (!issues.some((issue) => issue && issue.id === ISSUE)) {
      issues = issues.concat({
        id: ISSUE,
        title: "DNFBPsのAML/CFTを『実効性』までどう高めるか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "犯罪収益移転防止法上の特定事業者に当たるDNFBPsは、取引時確認・記録・疑わしい取引の届出等の法定義務を前提に、自社のリスク評価、継続的顧客管理、取引モニタリング、教育・内部監査をリスクベースで実効化する。2024-2026年度政府行動計画は、DNFBPsのリスク理解、リスクベース監督、疑わしい取引届出の質・件数向上を重点項目としている。",
        exception: "リスクベース・アプローチは法定要件を任意に緩和する根拠ではない。低リスク取引でも、犯罪収益移転防止法上要求される取引時確認等を省略できるとは限らない。また、DNFBPsに該当しない一般企業は同法上の特定事業者としての義務を当然には負わない。",
        uncertain: "FATF第5次対日相互審査を見据え、業種別ガイドライン、監督・アウトリーチ、疑わしい取引参考事例等は今後も更新され得る。自社業種を所管する監督官庁の最新資料を継続確認する。",
        sourceIds: [SOURCE_ANNUAL, SOURCE_ACTION]
      });
    }
    return {
      ...topic,
      lastUpdated: "2026-09-24",
      lastVerified: "2026-09-24",
      sourceIds: addMany(topic.sourceIds, [SOURCE_ANNUAL, SOURCE_ACTION]),
      referenceArticleIds: addUnique(topic.referenceArticleIds, ARTICLE),
      practicalImpacts: addUnique(topic.practicalImpacts, "DNFBPsのリスク評価・継続的顧客管理・疑わしい取引届出"),
      issues,
      currentSummary: {
        ...currentSummary,
        facts: addUnique(currentSummary.facts, "警察庁JAFICの令和7年年次報告書では、疑わしい取引の年間通知1,019,405件のうちDNFBPsからの通知は439件（約0.04％）で、金融機関側の届出との対照からDNFBPsの取引に多数の疑わしい取引情報が潜在する可能性が指摘されている。"),
        interpretations: addUnique(currentSummary.interpretations, "DNFBPsのAML/CFTは、本人確認手続を整えるだけでなく、自社リスクの評価、継続的顧客管理、モニタリング、疑わしい取引届出、教育・内部監査までを通じて『結果が出ているか』を検証する運用へ広げる必要がある。"),
        implications: addUnique(currentSummary.implications, "DNFBPsに該当する事業者は、自社の疑わしい取引届出件数・判断プロセスをリスク評価と照合し、届出が少ないこと自体を低リスクの証拠とせず、参考事例・モニタリング・エスカレーションが実際に機能しているか点検する。")
      }
    };
  });

  const article = {
    id: ARTICLE,
    title: "【犯収法ブログ】事業会社（DNFBPs）のAML/CFT対策",
    publisher: "TMI総合法律事務所",
    author: "TMI総合法律事務所",
    publishedAt: "2026-09-17",
    collectedAt: "2026-09-24",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18831.html",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／犯罪収益移転防止法・DNFBPs",
    status: "adopted",
    summary: "不動産、宝石・貴金属、郵便物受取・電話受付／転送サービス等のDNFBPsについて、犯罪収益移転防止法上の義務、業種別ガイドライン、リスクベース・アプローチ、有効性検証を一体で整理する実務解説。リスクベースだから法定の取引時確認を緩和できるわけではない点を明確にし、JAFIC年次報告書の疑わしい取引届出実績を用いて、形式的な体制整備から届出・モニタリングの実効性検証へ踏み込んでいる。",
    whyImportant: [
      "DNFBPsのAML/CFTを本人確認だけの問題にせず、リスク評価、継続的顧客管理、取引モニタリング、疑わしい取引届出、教育・内部監査まで一つの統制サイクルとして読める",
      "『リスクベース』を理由に犯罪収益移転防止法の取引時確認要件を任意に緩和できるわけではないという、実務で混同しやすい境界を明示している",
      "令和7年の疑わしい取引通知1,019,405件に対しDNFBPsは439件という一次資料の数値と、政府行動計画の届出強化方針をつなぎ、対策の有効性をどう点検するかへ落としている"
    ],
    audience: ["企業法務", "コンプライアンス・AML担当", "不動産事業者", "宝石・貴金属取扱事業者", "郵便物受取・電話受付／転送サービス事業者"],
    audienceReason: "DNFBPsに該当する事業者が、法定義務の形式的遵守にとどまらず、FATF第5次対日相互審査を見据えた実効性あるAML/CFT運用を点検するため。",
    categories: ["危機管理・コンプライアンス", "契約"],
    relatedTopics: [TOPIC],
    relatedIssues: [ISSUE],
    primarySourceIds: [SOURCE_ANNUAL, SOURCE_ACTION],
    legacyReformInference: false,
    whatChanged: "テーマ補強／犯罪収益移転防止法の本人確認・改正対応に加え、DNFBPsのリスク評価、継続的顧客管理、疑わしい取引届出と有効性検証を独立論点として追加した。"
  };
  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existingArticles.concat(article);
  }
})();