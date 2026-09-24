(() => {
  if (window.__LAW_INDEX_RUN243_APPLIED__) return;
  window.__LAW_INDEX_RUN243_APPLIED__ = true;

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

  const article = {
    id: "article-tmi-ec-standard-terms-penalty-clause-20260323",
    title: "【デジタルプラットフォームと法】第7回「デジタルプラットフォームとEC利用規約（定型約款）における留意点（主として違約金条項を念頭に）」",
    publisher: "TMI総合法律事務所",
    author: "鈴木 翔平・内野 寛信",
    publishedAt: "2026-03-23",
    collectedAt: "2026-09-23",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18151.html",
    sourceType: "secondary",
    sourceLabel: "実務解説・TMI／EC利用規約・定型約款・違約金条項",
    status: "adopted",
    summary: "EC上の販売業者が消費者との取引に用いる利用規約について、民法548条の2の定型約款規律を、東京地判令和5年8月24日の転売禁止・違約金条項の事例から具体化する実務解説。定型約款への組入れと不当条項規制を分け、商品価格約1万円に対する20万円の違約金について、表示時期・表示位置・注意喚起・予測可能性・金額の大きさ等を踏まえて同条2項により契約内容から排除された判断を整理し、EC規約では条項内容だけでなく表示方法まで設計対象になることを示す。",
    whyImportant: [
      "利用規約が定型約款として契約内容に組み入れられても、相手方の義務を加重する条項は民法548条の2第2項により別途排除され得ることを、具体的な裁判例の当てはめから確認できる",
      "違約金・高額手数料などについて、金額の合理性だけでなく、商品ページからの導線、表示タイミング、埋没の有無、強調表示、利用者の予測可能性までレビュー観点へ落とせる",
      "消費者契約法10条との違いも整理しており、B2C利用規約の不当条項レビューを民法上の定型約款規律と消費者契約法の双方から切り分けて考える基礎になる"
    ],
    audience: ["企業法務", "EC・B2Cサービス担当", "プロダクト・UX担当", "規約・約款管理担当", "カスタマーサポート"],
    audienceReason: "違約金・手数料・転売禁止等の負担条項について、文言の有効性だけでなく、EC画面上でいつ・どこまで目立たせて提示するかを含めて利用規約を点検するため。",
    categories: ["契約・取引", "消費者法・表示", "AI・デジタル"],
    relatedTopics: ["consumer-contract-law-review-2026"],
    relatedIssues: ["consumer-contract-ec-standard-terms"],
    primarySourceIds: ["source-civil-code-current", "source-consumer-contract-act-current"],
    legacyReformInference: false,
    whatChanged: "参考解説追加／EC利用規約の違約金条項について、民法548条の2第2項の不当条項規制を裁判例の具体的な表示・予測可能性の事情からレビューできるよう補強した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat(article);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "consumer-contract-law-review-2026");
  if (topic && (window.ARTICLE_DATA || []).some((item) => item && item.id === article.id)) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, article.id);
  }
})();

(() => {
  if (window.__LAW_INDEX_DIGITAL_LOCAL_BONDS_2026_APPLIED__) return;
  window.__LAW_INDEX_DIGITAL_LOCAL_BONDS_2026_APPLIED__ = true;

  const TOPIC = "digital-local-bonds-2026";
  const SOURCE_BILL = "source-shugiin-digital-local-bonds-bill-2026";
  const SOURCE_HISTORY = "source-sangiin-digital-local-bonds-enactment-2026";
  const SOURCE_EGOV = "source-egov-local-finance-act-digital-bonds-2026";
  const ARTICLE = "article-tmi-digital-local-bonds-20260424";
  const REFORM = "local-finance-act-digital-local-bonds-2026";

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
      id: SOURCE_BILL,
      title: "第221回国会 閣法第37号・地方財政法改正部分（デジタル地方債）",
      type: "law",
      typeLabel: "一次資料・衆議院／第16次地方分権一括法案・地方財政法改正条文",
      authority: "衆議院",
      publishedAt: "2026-03-27",
      url: "https://www.shugiin.go.jp/Internet/itdb_gian.nsf/html/gian/honbun/houan/g22109037.htm",
      importance: "最高",
      whyImportant: "地方債原簿の新設、会社法の社債規定の準用など、デジタル証券方式で地方債を発行するための法的基盤となる地方財政法改正条文を直接確認できる。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_HISTORY,
      title: "第221回国会 閣法第37号・議案審議情報",
      type: "law",
      typeLabel: "一次資料・参議院／第16次地方分権一括法・成立／公布",
      authority: "参議院",
      publishedAt: "2026-06-03",
      url: "https://www.sangiin.go.jp/japanese/joho1/kousei/gian/221/meisai/m221080221037.htm",
      importance: "最高",
      whyImportant: "デジタル地方債を含む第16次地方分権一括法について、2026年3月27日の提出、5月27日の参議院可決、6月3日の公布（令和8年法律第27号）までの成立経過を確認できる。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_EGOV,
      title: "地方財政法（昭和二十三年法律第百九号）",
      type: "law",
      typeLabel: "一次資料・e-Gov／地方財政法・令和8年法律第27号",
      authority: "e-Gov法令検索",
      publishedAt: "2026-06-03",
      url: "https://laws.e-gov.go.jp/law/323AC0000000109",
      importance: "最高",
      whyImportant: "令和8年法律第27号による地方財政法改正と、デジタル地方債関係規定が2027年4月1日に施行されることを現行法令の改正履歴から確認できる。",
      topics: [TOPIC]
    }
  ];
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existingSources.concat(sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url))));

  const topicAddition = {
    slug: TOPIC,
    title: "デジタル地方債・地方債原簿（2026年地方財政法改正）",
    categories: ["金融商品取引・開示・IR", "AI・デジタル"],
    summary: "2026年の地方財政法改正で整備された、地方債原簿と会社法の社債規定の準用を軸とするデジタル地方債の法的基盤を、2027年4月1日の施行に向けた実務設計とともに追う。",
    lastUpdated: "2026-09-24",
    lastVerified: "2026-09-24",
    isNew: true,
    overview: [
      "第16次地方分権一括法（令和8年法律第27号）は2026年5月27日に成立し、6月3日に公布された。地方財政法のデジタル地方債関係規定は2027年4月1日に施行される。",
      "改正地方財政法は、地方公共団体に地方債証券等を発行した後の地方債原簿の作成を求めるとともに、会社法の社債に関する規定の一部を準用することで、券面を前提としない地方債の発行・権利管理の法的基盤を整える。",
      "TMI総合法律事務所の2026年4月解説は、従来の証券発行地方債・登録地方債・振替地方債の違いを整理し、デジタル地方債を地域住民・関係人口との直接金融や地域金融機関をハブとする資金循環へ接続する実務像を示している。",
      "施行までの実装では、地方債原簿に記載・記録する事項等の下位法令、募集・販売、決済・利払、投資家情報管理、自治体の公平性・説明責任などを横断して確認する必要がある。"
    ],
    currentSummary: {
      facts: [
        "第16次地方分権一括法は2026年3月27日に国会提出され、5月27日に成立、6月3日に公布された。",
        "地方財政法に新設される第5条の7は、地方公共団体が地方債証券等を発行した日以後遅滞なく地方債原簿を作成し、政令で定める事項を記載・記録することを求める。",
        "同法第5条の8は、会社法の社債に関する複数の規定を地方公共団体が地方債証券等を発行する場合に準用する。",
        "デジタル地方債関係規定の施行日は2027年4月1日であり、2026年9月24日時点では公布済み・施行待ちである。"
      ],
      interpretations: [
        "今回の改正は単なる証券の電子化ではなく、地方債の権利管理を原簿ベースで扱える私法上の基盤を整えることで、セキュリティトークン等を使った発行方式を実装可能にするものと理解できる。",
        "実務では自治体だけで完結せず、地域金融機関、証券・STプラットフォーム、決済・本人確認等の事業者を含む役割分担と責任分界を、地方財政法・金融規制・契約実務をまたいで設計する必要がある。",
        "TMIの解説が指摘する地域内資金循環や非金銭的特典は制度活用の可能性を示す一方、公平性・利益供与・説明責任との整合を個別に検討すべき実装論であり、改正法から当然に許容されるものではない。"
      ],
      implications: [
        "2027年4月施行を前提に、地方債原簿の記録項目・更新、権利移転、償還・利払、投資家照合をシステム要件へ落とす。",
        "自治体・金融機関・証券会社・ST基盤事業者の役割、委託範囲、事故時対応、個人情報・サイバーセキュリティ上の責任分界を契約で整理する。",
        "住民向け・個人投資家向けに小口募集や特典を設計する場合は、募集規制だけでなく自治体の公平性・説明責任・資金使途の可視化を含めてレビューする。",
        "施行政令・省令・総務省等の運用資料が公表されたら、原簿記載事項、管理受託、募集・決済実務への影響を差分確認する。"
      ],
      uncertain: [
        "地方債原簿に記載・記録する具体的事項など、法律が政令へ委任した実装細目は施行までの下位法令・行政資料を継続確認する必要がある。",
        "デジタル地方債の具体的な発行・販売スキームによって関係する金融規制、決済手段、システム構成が異なるため、制度上可能になったことと個別スキームの適法性を分けて検討する必要がある。"
      ]
    },
    issues: [
      {
        id: "digital-local-bonds-legal-basis-2027",
        title: "2027年4月以降、デジタル地方債をどの法的基盤で発行できるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "令和8年法律第27号による地方財政法改正は、地方債原簿の新設と会社法の社債規定の準用を通じ、券面を前提としない地方債の発行・権利管理を可能にする法的基盤を整え、2027年4月1日に施行される。",
        exception: "改正によって地方債の資金使途・発行手続その他の公法上の規律がなくなるわけではなく、個別の発行スキームには既存の地方財政・金融規制も引き続き適用される。",
        uncertain: "施行までに整備される政令等の具体的内容を確認する必要がある。",
        sourceIds: [SOURCE_BILL, SOURCE_HISTORY, SOURCE_EGOV]
      },
      {
        id: "digital-local-bond-register-rights-management",
        title: "地方債原簿と会社法準用を権利移転・投資家管理へどう落とすか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "地方債原簿を権利管理の中核に据え、会社法の社債規定の準用を踏まえて、発行・譲渡・管理・償還の各局面をシステムと契約の双方で整合させる必要がある。",
        exception: "採用するST基盤、販売主体、決済手段、保有構造によって必要なシステム・契約・業規制対応は変わるため、単一の実装モデルを前提にしない。",
        uncertain: "原簿の具体的記載事項、管理受託その他の下位法令・運用資料の公表後に実装要件を更新する必要がある。",
        sourceIds: [SOURCE_BILL, SOURCE_EGOV]
      },
      {
        id: "digital-local-bonds-public-accountability",
        title: "地域向け小口発行・特典設計と自治体の公平性・説明責任をどう両立するか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "住民・関係人口への小口発行や非金銭的特典は地域資金循環を促す可能性があるが、自治体の公平性・説明責任と矛盾しないよう、対象者、特典、資金使途、情報開示を事前に設計する必要がある。",
        exception: "TMIが示す地域金融機関やトークン化決済を含むモデルは実務上の構想であり、改正地方財政法が特定の技術・販売方式・特典設計を一律に認める趣旨ではない。",
        uncertain: "具体的な発行事例、監督・自治体実務、下位法令の蓄積に応じて論点の優先順位が変わり得る。",
        sourceIds: [SOURCE_BILL, SOURCE_EGOV]
      }
    ],
    sourceIds: [SOURCE_BILL, SOURCE_HISTORY, SOURCE_EGOV],
    referenceArticleIds: [ARTICLE],
    practicalImpacts: [
      "地方債原簿・ST基盤のシステム要件整理",
      "自治体・金融機関・証券会社・基盤事業者の責任分界",
      "募集・販売・決済・償還フローの設計",
      "投資家情報・個人情報・サイバーセキュリティ管理",
      "住民向け小口発行・特典・情報開示の設計",
      "2027年4月施行までの下位法令・運用資料の差分管理"
    ]
  };
  if (!(window.TOPIC_DATA || []).some((item) => item && item.slug === TOPIC)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(topicAddition);
  }

  const reformAddition = {
    id: REFORM,
    title: "地方財政法・デジタル地方債／地方債原簿（2026年改正）",
    eventType: "law_amendment",
    lawId: "local-finance-act-digital-local-bonds",
    lawLabel: "地方財政法・デジタル地方債",
    relatedTopics: [TOPIC],
    effectiveDateStatus: "confirmed",
    effectiveDate: "2027-04-01",
    effectiveDateSourceIds: [SOURCE_HISTORY, SOURCE_EGOV],
    matchSourceIds: [SOURCE_BILL, SOURCE_HISTORY, SOURCE_EGOV],
    sourceIds: [SOURCE_BILL, SOURCE_HISTORY, SOURCE_EGOV],
    articleIds: [ARTICLE]
  };
  if (!(window.REFORM_EVENT_DATA || []).some((item) => item && item.id === REFORM)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(reformAddition);
  }

  const articleAddition = {
    id: ARTICLE,
    title: "【Web3ブログ】デジタル地方債に関する実務及び法改正の動向",
    publisher: "TMI総合法律事務所",
    author: "成本治男",
    publishedAt: "2026-04-24",
    collectedAt: "2026-09-24",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18285.html",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／デジタル地方債・地方財政法改正",
    status: "adopted",
    summary: "デジタル社債の先行実務を踏まえ、地方債の既存3類型、2026年地方財政法改正案による地方債原簿と会社法準用、2027年4月施行を見据えたデジタル地方債の法的構造を整理する実務解説。地域金融機関をハブとする販売・決済、住民・関係人口への直接金融、非金銭的特典や資金使途の可視化まで社会実装の論点へ落としている。",
    whyImportant: [
      "証券発行地方債・登録地方債・振替地方債の違いから、なぜ地方債原簿と会社法準用がデジタル証券方式の制度基盤になるのかを一続きで理解できる",
      "法改正の説明にとどまらず、地方銀行、ST基盤、トークン化預金・ステーブルコイン、投資家接点を組み合わせた実装イメージまで提示している",
      "地域住民向けの小口発行や非金銭的特典について、自治体の公平性・説明責任との整合が必要という公法上の制約も示しており、商品企画だけで走るリスクを避けられる"
    ],
    audience: ["金融機関・証券会社", "Fintech・ST事業者", "自治体法務・財政担当", "企業法務・金融法務", "地域金融・事業開発担当"],
    audienceReason: "2027年4月の制度施行を前に、地方債の権利管理、発行・販売・決済の役割分担、地域向け商品設計を法務・システムの両面から準備するため。",
    categories: ["金融商品取引・開示・IR", "AI・デジタル"],
    relatedTopics: [TOPIC],
    relatedIssues: ["digital-local-bonds-legal-basis-2027", "digital-local-bond-register-rights-management", "digital-local-bonds-public-accountability"],
    primarySourceIds: [SOURCE_BILL, SOURCE_HISTORY, SOURCE_EGOV],
    reformEventId: REFORM,
    reformStageAtPublication: "proposal",
    reformStageSourceIds: [SOURCE_BILL, SOURCE_HISTORY],
    legacyReformInference: false,
    whatChanged: "新規テーマ作成／2026年地方財政法改正によるデジタル地方債の法的基盤を、地方債原簿・会社法準用・2027年4月施行と実装論から整理した。"
  };
  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existingArticles.concat([articleAddition].filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url))));
})();
