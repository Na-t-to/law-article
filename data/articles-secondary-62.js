(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueTopicBySlug = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.slug));
    return (target || []).concat(additions.filter((item) => !existing.has(item.slug)));
  };

  const topicSlug = "fdi-screening-fefta-2026";
  const reformEventId = "fefta-fdi-screening-2026-amendment";
  const lawSourceId = "source-mof-fefta-fdi-amendment-2026";
  const billSourceId = "source-shugiin-fefta-fdi-bill-2026";
  const rulesProposalSourceId = "source-mof-fefta-fdi-subordinate-rules-proposal-2026";
  const jficSourceId = "source-mof-jfic-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: lawSourceId,
      title: "外国為替及び外国貿易法の一部を改正する法律（令和8年法律第30号）関係資料",
      type: "law",
      typeLabel: "改正法・概要・新旧対照表",
      authority: "財務省",
      publishedAt: "2026-06-05",
      url: "https://www.mof.go.jp/policy/international_policy/gaitame_kawase/press_release/20260312152131.html",
      importance: "高",
      whyImportant: "対内直接投資審査制度の2026年改正について、リスク軽減措置、間接取得、高リスク非居住者等の支配・影響下の投資、非指定業種への事後介入、関係行政機関の協力を含む改正法の最終内容を確認する基礎一次資料。",
      topics: [topicSlug]
    },
    {
      id: billSourceId,
      title: "第221回国会 閣法第27号 外国為替及び外国貿易法の一部を改正する法律案・審議経過",
      type: "law",
      typeLabel: "国会・法案審議経過",
      authority: "衆議院",
      publishedAt: "2026-03-17",
      url: "https://www.shugiin.go.jp/internet/itdb_gian.nsf/html/gian/keika/1DE2076.htm",
      importance: "高",
      whyImportant: "法案提出、衆参両院の可決、2026年5月29日の成立、同年6月5日の公布を一次資料で追跡でき、法案段階の記事と成立後の記事の時点を区別する根拠になる。",
      topics: [topicSlug]
    },
    {
      id: rulesProposalSourceId,
      title: "外国為替及び外国貿易法の関連政省令・告示改正案について",
      type: "guideline",
      typeLabel: "政省令・告示案／パブリックコメント",
      authority: "財務省",
      publishedAt: "2026-07-03",
      url: "https://www.mof.go.jp/policy/international_policy/gaitame_kawase/press_release/20260702162235.html",
      importance: "高",
      whyImportant: "2026年改正外為法の施行に必要な関係政令・省令・告示について意見募集が開始されたことを示す一次資料。指定業種、重要技術、みなし外国投資家等の詳細を成立法だけで確定扱いしないための現在地になる。",
      topics: [topicSlug]
    },
    {
      id: jficSourceId,
      title: "対日外国投資委員会（JFIC：Japan Foreign Investment Committee）",
      type: "guideline",
      typeLabel: "政府運用・会議資料",
      authority: "財務省",
      publishedAt: "2026-06-29",
      url: "https://www.mof.go.jp/policy/international_policy/gaitame_kawase/fdi/20260618215004.html",
      importance: "高",
      whyImportant: "改正外為法69条の3・69条の4を基礎に、財務省と国家安全保障局を中心とする省庁横断の対日外国投資委員会が設置・運用されていることを確認できる一次資料。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueTopicBySlug(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "外為法・対内直接投資審査（2026年改正）",
      categories: ["M&A", "国際取引", "危機管理・コンプライアンス"],
      summary: "2026年外為法改正による対内直接投資審査の高度化について、リスク軽減措置、間接取得、高リスク投資家、非指定業種への事後介入、JFIC、政省令等の具体化を、クロスボーダーM&A・資本提携の実務から追う。",
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      isNew: true,
      overview: [
        "2026年5月29日に成立し6月5日に公布された改正外為法は、外国投資家による日本企業への直接取得だけでなく、外国法人等の支配権変更を通じた間接取得、リスク軽減措置、高リスク主体の影響下にある国内投資、非指定業種への投資後介入まで対内直接投資審査の射程を広げた。",
        "省庁横断の審査体制として対日外国投資委員会（JFIC）が設置され、関係行政機関の協力・情報連携を強める規定の一部は2026年6月5日から施行されている。その他の主要規定は公布日から1年以内の政令で定める日から施行される。",
        "2026年7月には関係政省令・告示案がパブリックコメントに付されており、指定業種の合理化、重要技術への着目、みなし外国投資家等の具体的範囲などは、最終の下位法令・ガイドラインを確認して実務へ落とす必要がある。"
      ],
      currentSummary: {
        facts: [
          "外国為替及び外国貿易法の一部を改正する法律は2026年5月29日に成立し、同年6月5日に公布された。",
          "改正法は、リスク軽減措置を届出事項として明確化し、外国法人等の買収等による日本企業株式等の間接取得を対内直接投資等の規制対象へ追加する。",
          "高リスクの非居住者等の支配・影響下にある一定の国内投資を規制対象に含める仕組みと、非指定業種への投資について安全保障上のリスクが生じた場合の事後的な対応措置が新設される。",
          "改正法69条の3・69条の4に基づく省庁横断の枠組みとして対日外国投資委員会（JFIC）が設置され、2026年6月29日に第1回会合が開催された。",
          "改正法の施行に伴う関係政省令・告示案は2026年7月3日にパブリックコメントへ付されており、2026年9月10日時点では財務省の外為法関係報道発表に最終の一括整備結果は掲載されていない。"
        ],
        interpretations: [
          "クロスボーダーM&Aでは、日本法人を直接取得しない海外親会社レベルの買収でも、日本企業株式等の間接取得として外為法審査が問題になり得るため、従来より早い段階で日本側の保有関係を確認する必要がある。",
          "審査で用いられてきたリスク軽減措置が法定手続へ組み込まれるため、届出要否だけでなく、機密情報へのアクセス、外国政府等の影響、重要事業の継続など、想定される緩和策を取引条件・PMIと一体で検討する場面が増える。",
          "成立法と下位法令案を混同せず、最終的な指定業種、重要技術、みなし外国投資家、届出免除等の詳細は施行令・省令・告示・ガイドラインの確定版で再判定する必要がある。"
        ],
        implications: [
          "インバウンド投資・資本提携・グローバルM&Aの初期DDで、対象会社の指定業種、保有技術、外国投資家該当性、直接・間接の保有関係を確認する。",
          "株式取得だけでなく海外親会社等の支配権変更を含め、外為法届出が取引スケジュール、前提条件、ロングストップ日へ与える影響を早期に見積もる。",
          "機密情報アクセス、ガバナンス、重要事業の継続等について、当局との審査で求められ得るリスク軽減措置を契約条項・情報遮断・PMI設計と接続して準備する。",
          "関係政省令・告示・ガイドラインの最終化後に、社内の外為法判定フロー、指定業種リスト、案件チェックリストを更新する。"
        ],
        uncertain: [
          "JFIC関係等を除く主要な改正規定の具体的な施行日は、公布日から1年以内の政令で定める日とされており、2026年9月10日時点では確定日を確認できない。",
          "指定業種の合理化、重要技術に着目した届出対象、高リスク非居住者等の支配・影響や間接取得の具体的範囲など、政省令・告示に委ねられる事項は最終内容の公表待ちである。"
        ]
      },
      issues: [
        {
          id: "fefta-fdi-2026-effective-schedule",
          title: "2026年改正はどこまで施行されているか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "改正法は2026年6月5日に公布され、関係行政機関の協力等の一部規定は同日施行された。その他の主要規定は公布の日から1年以内の政令で定める日から施行される。",
          exception: "下位法令の具体化を含むため、個別の届出義務・要件を適用する際は各規定の施行日を確認する。",
          uncertain: "JFIC関係等を除く主要規定の具体的な施行日は2026年9月10日時点で未確定。",
          sourceIds: [lawSourceId, billSourceId, rulesProposalSourceId]
        },
        {
          id: "fefta-fdi-risk-mitigation-2026",
          title: "リスク軽減措置は届出・審査でどう扱われるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "国の安全等に係るリスクをなくすための措置を届出事項として明確化し、措置の追加・修正や勧告・命令等を含む手続を法定化する。",
          exception: "具体的な措置の内容は投資家属性、投資先の事業・技術、取得態様等に応じて個別に設計される。",
          uncertain: "予見可能性を高めるための具体例・ガイドラインや下位法令の詳細は今後の最終化を確認する。",
          sourceIds: [lawSourceId, rulesProposalSourceId]
        },
        {
          id: "fefta-fdi-indirect-acquisition-2026",
          title: "海外親会社等の買収による間接取得はどう規制されるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "日本企業の株式等を保有する外国法人等を別の外国投資家が買収等により支配する行為を通じた間接取得を、対内直接投資等の規制対象へ追加する。",
          exception: "上場・非上場会社の保有割合、密接関係者との合算、支配権変更の具体的要件等は条文と下位法令を案件ごとに確認する。",
          uncertain: "政令に委ねられる買収等の類型や合算範囲などの最終的な適用境界は下位法令の確定版確認が必要。",
          sourceIds: [lawSourceId, rulesProposalSourceId]
        },
        {
          id: "fefta-fdi-high-risk-post-intervention-2026",
          title: "高リスク主体と非指定業種への投資はどう扱われるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "外国政府等を含む類型的に高リスクな非居住者等の支配・影響下で行われる一定の国内投資を規制対象に含めるとともに、高リスク外国投資家による非指定業種への投資にも安全保障上のリスクに応じた事後介入措置を設ける。",
          exception: "全ての国内投資や非指定業種への投資が一律に事前届出対象となるわけではなく、対象者・取得割合・措置要件は法令で限定される。",
          uncertain: "高リスク非居住者等の範囲、支配・影響の具体的要件、事後措置の対象取引等は下位法令の最終内容を確認する必要がある。",
          sourceIds: [lawSourceId, rulesProposalSourceId]
        },
        {
          id: "fefta-fdi-jfic-2026",
          title: "JFICは対内直接投資審査で何を担うか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "財務省と国家安全保障局を中心に、外務省、経済産業省、防衛省その他の事業所管省庁が連携する対日外国投資委員会（JFIC）を設け、省庁横断で投資家属性、投資先事業・技術、取得態様等の情報・審査ノウハウを共有する。",
          exception: "個別投資案件を扱う性質上、会議・議事録等は原則非公開で、全ての開催実績が公表されるわけではない。",
          uncertain: "JFIC創設後の審査運用やリスク軽減措置との接続は案件蓄積を通じて具体化していく。",
          sourceIds: [lawSourceId, jficSourceId]
        },
        {
          id: "fefta-fdi-subordinate-rules-2026",
          title: "指定業種・重要技術など下位法令の詳細は確定しているか",
          status: "pending",
          stage: "under_revision",
          views: [],
          conclusion: "2026年7月3日に関係政省令・告示案がパブリックコメントへ付されており、成立法だけでは決まらない届出対象・指定業種等の詳細は下位法令で具体化される。",
          exception: "改正法で既に確定した基本的な制度枠組みと、下位法令に委ねられた具体要件を分けて扱う。",
          uncertain: "2026年9月10日時点で財務省の外為法関係報道発表から最終の一括整備結果を確認できず、案の内容を確定ルールとして扱わない。",
          sourceIds: [rulesProposalSourceId, lawSourceId]
        }
      ],
      sourceIds: [lawSourceId, billSourceId, rulesProposalSourceId, jficSourceId]
    }
  ]);

  const articleIds = [
    "article-mof-fefta-fdi-amendment-2026",
    "article-businesslawyers-fefta-fdi-amendment-2026",
    "article-tmi-fefta-amendment-upper-2026",
    "article-tmi-fefta-amendment-lower-2026"
  ];

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "外為法・対内直接投資審査制度 2026年改正",
      eventType: "law_amendment",
      lawId: "foreign-exchange-foreign-trade-act",
      lawLabel: "外国為替及び外国貿易法（外為法）",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-06-05"],
      effectiveDateNote: "JFIC関係等の一部は2026-06-05施行。その他の主要規定は公布の日から1年以内の政令で定める日から施行（2026-09-10時点で具体日未確定）。",
      effectiveDateSourceIds: [lawSourceId],
      matchSourceIds: [lawSourceId],
      sourceIds: [lawSourceId, billSourceId, rulesProposalSourceId, jficSourceId],
      articleIds
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleIds[0],
      title: "「外国為替及び外国貿易法の一部を改正する法律」について",
      publisher: "財務省",
      author: "財務省国際局",
      publishedAt: "2026-06-05",
      collectedAt: "2026-09-10",
      url: "https://www.mof.go.jp/policy/international_policy/gaitame_kawase/press_release/20260312152131.html",
      sourceType: "primary",
      sourceLabel: "一次資料・改正法",
      status: "adopted",
      summary: "2026年6月5日に公布された外為法改正の公式資料。リスク軽減措置の明確化、外国法人等の支配権変更を通じた間接取得、高リスク非居住者等の影響下にある投資、非指定業種への投資後介入、関係行政機関の連携強化という制度改正の骨格を確認できる。",
      whyImportant: [
        "2026年改正の成立後の正式な制度骨格を、法案段階の解説ではなく一次資料で確認できる",
        "クロスボーダーM&Aで直接取得以外の間接取得や投資家属性まで審査範囲が広がることを押さえる起点になる",
        "政省令等に委ねられる詳細と、法律レベルで既に確定した事項を切り分けて読むための基準資料になる"
      ],
      audience: ["企業法務", "M&A担当", "経済安全保障担当", "投資・コーポレート担当"],
      audienceReason: "インバウンド投資や海外グループ再編で、2026年改正の確定部分と今後具体化される部分を取り違えず届出要否・取引日程を検討するため。",
      categories: ["M&A", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["fefta-fdi-2026-effective-schedule", "fefta-fdi-risk-mitigation-2026", "fefta-fdi-indirect-acquisition-2026", "fefta-fdi-high-risk-post-intervention-2026", "fefta-fdi-jfic-2026"],
      primarySourceIds: [lawSourceId, billSourceId],
      reformEventId,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [lawSourceId],
      whatChanged: "2026年外為法改正による対内直接投資審査を独立テーマとして追加し、成立法の確定事項、部分施行、下位法令の具体化待ちを分離して追跡できるようにした。"
    },
    {
      id: articleIds[1],
      title: "対内直接投資等に関する令和8年外為法改正の概要と実務ポイント",
      publisher: "BUSINESS LAWYERS",
      author: "松本 拓・武士俣 隆介・伊原 ひかり（アンダーソン・毛利・友常法律事務所外国法共同事業）",
      publishedAt: "2026-09-03",
      collectedAt: "2026-09-10",
      url: "https://www.businesslawyers.jp/articles/1569",
      sourceType: "secondary",
      sourceLabel: "弁護士・実務解説",
      status: "adopted",
      summary: "成立後の2026年外為法改正を、行為時事前届出・指定業種の合理化、リスク軽減措置、間接取得規制、高リスク投資家、非指定業種への事後介入、JFICまで一続きで整理し、外国企業・日本企業双方のDD、届出、取引スケジュールへの影響を具体化した解説。下位法令はパブリックコメント後の最終化待ちであることも明示する。",
      whyImportant: [
        "法改正の各条項を、外国企業のグループ再編・日本企業への出資受入・資本提携など具体的な取引実務へ落としている",
        "間接取得では直接の買主だけでなく上位の資本関係まで確認する必要があることを、取得比率や支配関係と結び付けて整理している",
        "成立法と政省令等で今後確定する事項を分けており、現時点の実務対応と今後の再チェック箇所がわかる"
      ],
      audience: ["企業法務", "M&A担当", "経済安全保障担当", "投資・事業開発"],
      audienceReason: "2026年改正を取引初期の外為法DD、届出スケジュール、契約条件、PMIへ落とすため。",
      categories: ["M&A", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["fefta-fdi-2026-effective-schedule", "fefta-fdi-risk-mitigation-2026", "fefta-fdi-indirect-acquisition-2026", "fefta-fdi-high-risk-post-intervention-2026", "fefta-fdi-jfic-2026", "fefta-fdi-subordinate-rules-2026"],
      primarySourceIds: [lawSourceId, rulesProposalSourceId, jficSourceId],
      reformEventId,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [lawSourceId],
      whatChanged: "新設した外為法・対内直接投資審査テーマに、成立後の改正内容をクロスボーダーM&AのDD・届出・契約実務へ落とした代表的な二次解説を追加した。"
    },
    {
      id: articleIds[2],
      title: "外為法改正案について〔上〕",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-05-11",
      collectedAt: "2026-09-10",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18314.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "2026年外為法改正案のうち、海外親会社等の支配権変更を通じた間接取得規制と、リスク軽減措置の法定化を中心に、現行制度との違いと実務上の確認事項を掘り下げた法案段階の解説。最終的な法的根拠は6月5日公布の改正法を優先して読む。",
      whyImportant: [
        "間接取得規制がグローバルM&Aのどの支配権変更を拾うのかを、直接取得との違いから細かく追える",
        "従来の審査実務で用いられてきたリスク軽減措置が法定手続へ移る意味を理解しやすい",
        "法案段階の記事として時点を明示することで、成立前の問題意識と成立法を比較する立法経緯資料として残せる"
      ],
      audience: ["企業法務", "M&A担当", "経済安全保障担当", "クロスボーダー取引担当"],
      audienceReason: "間接取得とリスク軽減措置という2026年改正の実務負荷が大きい部分を深く確認するため。",
      categories: ["M&A", "国際取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["fefta-fdi-risk-mitigation-2026", "fefta-fdi-indirect-acquisition-2026", "fefta-fdi-subordinate-rules-2026"],
      primarySourceIds: [billSourceId, lawSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [billSourceId],
      whatChanged: "新設した外為法テーマに、間接取得とリスク軽減措置を詳細に掘る法案段階の実務解説を立法経緯資料として追加した。"
    },
    {
      id: articleIds[3],
      title: "外為法改正案について〔下〕",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-06-29",
      collectedAt: "2026-09-10",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18512.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "6月5日の改正法公布後に、高リスク非居住者等の支配・影響下にある居住者へのみなし規定、非指定業種への投資後介入、関係行政機関への意見聴取、施行時期を整理した解説。上編と合わせ、2026年改正の主要5項目を分担して詳しく読める。",
      whyImportant: [
        "『外国投資家』の形式的な範囲だけでは捕捉できない外国政府等の影響下の投資をどう拾うかを具体化している",
        "従来は事前届出対象外だった非指定業種への投資にも事後介入が入るという改正の射程拡大を整理している",
        "一部施行と残部の1年以内施行を区別し、成立後の制度状態を踏まえて実務上の注意点を確認できる"
      ],
      audience: ["企業法務", "M&A担当", "経済安全保障担当", "投資・ファンド担当"],
      audienceReason: "投資家属性、非指定業種、事後介入、省庁横断審査という2026年改正の後半部分を案件スクリーニングへ反映するため。",
      categories: ["M&A", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["fefta-fdi-2026-effective-schedule", "fefta-fdi-high-risk-post-intervention-2026", "fefta-fdi-jfic-2026"],
      primarySourceIds: [lawSourceId, jficSourceId],
      reformEventId,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [lawSourceId],
      whatChanged: "新設した外為法テーマに、高リスク投資家・非指定業種への事後介入・省庁横断審査を詳しく扱う成立後の実務解説を追加した。"
    }
  ]);
})();
