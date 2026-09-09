(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueTopicBySlug = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.slug));
    return (target || []).concat(additions.filter((item) => !existing.has(item.slug)));
  };

  const topicSlug = "digital-platform-transparency-act";
  const lawSourceId = "source-egov-dpf-transparency-act-current";
  const pointsSourceId = "source-meti-dpf-transparency-points-2026";
  const evaluationSourceId = "source-meti-dpf-transparency-evaluation-2025";
  const ebaySourceId = "source-meti-dpf-ebay-designation-2026";
  const tiktokSourceId = "source-meti-dpf-tiktok-designation-2025";
  const recommendationSourceId = "source-meti-dpf-recommendation-2024";
  const jftcReferralSourceId = "source-meti-dpf-jftc-referral-amazon-2024";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: lawSourceId,
      title: "特定デジタルプラットフォームの透明性及び公正性の向上に関する法律（令和2年法律第38号）",
      type: "law",
      typeLabel: "現行法令",
      authority: "e-Gov法令検索",
      publishedAt: "2026-05-21",
      url: "https://laws.e-gov.go.jp/law/502AC0000000038",
      importance: "最高",
      whyImportant: "提供条件等の開示、相互理解促進のための措置、毎年度の報告・自己評価、大臣評価、勧告、公正取引委員会への措置請求まで、透明化法の現在の法的枠組みを条文から確認する基準点。",
      topics: [topicSlug]
    },
    {
      id: pointsSourceId,
      title: "デジタルプラットフォーム取引透明化法 法律のポイント",
      type: "guideline",
      typeLabel: "制度概要・現行運用",
      authority: "経済産業省",
      publishedAt: "2026-06-30",
      url: "https://www.meti.go.jp/policy/mono_info_service/digitalplatform/transparency.html",
      importance: "最高",
      whyImportant: "現行の規制対象、提供条件変更時の事前通知、苦情・紛争処理等の体制、年次報告・自己評価に加え、2025年12月にアプリストア分野がスマホソフトウェア競争促進法へ移管された現在地を確認できる。",
      topics: [topicSlug, "smartphone-software-competition-act"]
    },
    {
      id: evaluationSourceId,
      title: "特定デジタルプラットフォームの透明性及び公正性についての評価（2025年度）",
      type: "guideline",
      typeLabel: "大臣評価・モニタリング",
      authority: "経済産業省",
      publishedAt: "2025-12-17",
      url: "https://www.meti.go.jp/press/2025/12/20251217001/20251217001.html",
      importance: "最高",
      whyImportant: "透明化法9条に基づくモニタリング・レビューの最終評価。共同規制としての運営改善サイクルと、改善が不十分な場合に勧告等を検討し得ることを具体的に確認できる。",
      topics: [topicSlug]
    },
    {
      id: ebaySourceId,
      title: "eBay Japan合同会社を特定デジタルプラットフォーム提供者として指定",
      type: "guideline",
      typeLabel: "指定・現行運用",
      authority: "経済産業省",
      publishedAt: "2026-06-12",
      url: "https://www.meti.go.jp/press/2026/06/20260612004/20260612004.html",
      importance: "高",
      whyImportant: "Qoo10を運営するeBay Japanが総合物販オンラインモール分野で新たに指定され、2027年度以降に年次報告・モニタリングの対象となることを確認できる最新の指定資料。",
      topics: [topicSlug]
    },
    {
      id: tiktokSourceId,
      title: "TikTok Pte. Ltd.を特定デジタルプラットフォーム提供者として指定",
      type: "guideline",
      typeLabel: "指定・現行運用",
      authority: "経済産業省",
      publishedAt: "2025-06-27",
      url: "https://www.meti.go.jp/press/2025/06/20250627002/20250627002.html",
      importance: "高",
      whyImportant: "TikTok for Businessをデジタル広告分野の規制対象として追加し、2026年度以降に年次報告・モニタリングの対象となることを確認できる。",
      topics: [topicSlug]
    },
    {
      id: recommendationSourceId,
      title: "アマゾンジャパン合同会社、Apple Inc.及びiTunes株式会社に対する勧告",
      type: "guideline",
      typeLabel: "法執行・勧告",
      authority: "経済産業省",
      publishedAt: "2024-08-02",
      url: "https://www.meti.go.jp/press/2024/08/20240802001/20240802001.html",
      importance: "高",
      whyImportant: "透明化法6条1項に基づく提供条件等の開示に関する初の勧告事案で、開示義務が抽象的な努力義務ではなく執行対象になることを具体的に確認できる。",
      topics: [topicSlug]
    },
    {
      id: jftcReferralSourceId,
      title: "透明化法に基づくアマゾンジャパン合同会社についての公正取引委員会への措置請求",
      type: "guideline",
      typeLabel: "法執行・公取委連携",
      authority: "経済産業省",
      publishedAt: "2024-11-27",
      url: "https://www.meti.go.jp/press/2024/11/20241127004/20241127004.html",
      importance: "高",
      whyImportant: "透明化法13条に基づき、独占禁止法違反と認められる事案について経済産業大臣が公正取引委員会へ措置を求める制度連携が実際に使われた事例。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueTopicBySlug(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "デジタルプラットフォーム取引透明化法・モール／デジタル広告",
      categories: ["AI・デジタル", "独占禁止法・競争法", "契約"],
      summary: "大規模なオンラインモール・デジタル広告プラットフォームと利用事業者のBtoB取引について、提供条件の開示、規約変更、苦情・紛争処理、年次報告・大臣評価、勧告・独禁法連携を現行の対象範囲から整理する。",
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      isNew: true,
      overview: [
        "デジタルプラットフォーム取引透明化法は、大規模なデジタルプラットフォーム提供者と利用事業者の交渉力・情報格差を背景に、BtoB取引の透明性と公正性を高めるための法律で、2021年2月1日に施行された。独占禁止法を補完する競争法として位置付けられている。",
        "指定されたプラットフォーム提供者には、取引条件等の開示、条件変更時の事前通知、苦情・紛争処理を含む手続・体制整備、毎年度の報告・自己評価が求められ、経済産業大臣がモニタリング・レビューを通じて評価する。",
        "2025年12月のスマホソフトウェア競争促進法の全面施行に伴い、アプリストア分野は透明化法の規制対象から外れた。現在の透明化法は総合物販オンラインモールとデジタル広告を中心に追う必要がある。",
        "2025年にはTikTok、2026年にはQoo10を運営するeBay Japanが新たに指定されており、指定事業者・対象サービスは固定リストとして扱わず、最新の経済産業省資料で確認する。"
      ],
      currentSummary: {
        facts: [
          "透明化法は2020年5月27日に成立、同年6月3日に公布され、2021年2月1日に施行された。",
          "特定デジタルプラットフォーム提供者は、提供条件等の情報開示、相互理解を促進するための手続・体制整備、毎年度の報告書提出と自己評価を行い、経済産業大臣による評価の対象となる。",
          "2025年12月18日のスマホソフトウェア競争促進法の全面施行に伴い、アプリストア分野は透明化法の規制対象から除外され、スマホ法へ移管された。",
          "TikTok Pte. Ltd.は2025年6月27日にデジタル広告分野で指定され、2026年度以降に年次報告・大臣評価の対象となる。eBay Japan合同会社は2026年6月12日にQoo10について総合物販オンラインモール分野で指定され、2027年度以降に年次報告・モニタリングの対象となる。",
          "2024年8月には提供条件等の開示をめぐりアマゾンジャパン等に法6条1項に基づく勧告が行われ、同年11月にはアマゾンジャパンについて法13条に基づく公正取引委員会への措置請求も行われた。"
        ],
        interpretations: [
          "透明化法はプラットフォーム上の全ての取引トラブルを直接禁止する一般条項ではなく、指定事業者に対する開示・手続・説明・継続改善の枠組みと、独占禁止法等との連携を組み合わせる制度として読む必要がある。",
          "利用規約の変更やアカウント停止、手数料・検索順位・広告取引等の問題では、条項の文言だけでなく、事前通知、理由説明、問い合わせ・異議申立て、処理期間、改善状況まで一連の運用として確認すると透明化法上の論点を把握しやすい。",
          "モニタリング・レビューは単年度の適否判定だけでなく、利用事業者の声や有識者意見を踏まえ、翌年度以降の運営改善を促す共同規制のサイクルとして機能する。"
        ],
        implications: [
          "指定プラットフォーム提供者側では、提供条件の開示、変更通知、苦情・紛争処理、国内管理体制、年次報告・自己評価を、法務・事業・CS・プロダクトをまたぐ運用として管理する。",
          "オンラインモールの出店者や広告主・パブリッシャー等の利用事業者側では、一方的な規約変更、説明不足、アカウント措置、手数料・広告取引等の問題が生じた場合、契約条項と通知・説明の履歴を保存し、相談窓口や異議申立ての利用を検討する。",
          "アプリストアに関する取引上の問題は、2025年12月18日以降、透明化法だけを参照せず、スマホソフトウェア競争促進法の対象・禁止事項・相談窓口へ切り替えて確認する。",
          "新規指定や大臣評価の公表時には、自社がプラットフォーム提供者・利用事業者のどちらの立場で影響を受けるかを確認し、規約・通知・苦情処理・広告運用等の社内チェックリストを更新する。"
        ],
        uncertain: [
          "大臣評価で指摘される重点課題や、その後に勧告・報告徴収等へ進むかは年度ごとのモニタリングと各事業者の改善状況により変わる。",
          "指定事業者・対象サービスは売上高等の基準や事業再編等により変動し得るため、個別案件では最新の指定状況を確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "dpf-transparency-current-scope",
          title: "現在どの分野・事業者が透明化法の対象になるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "政令で定める事業区分・規模に該当し、経済産業大臣から指定されたデジタルプラットフォーム提供者が規制対象となる。2025年12月18日以降、アプリストア分野はスマホ法へ移管され、透明化法では総合物販オンラインモールとデジタル広告分野を中心に確認する。",
          exception: "指定は事業者全体ではなく対象となるプラットフォーム事業の区分・サービスを特定して行われるため、同じ企業の全サービスが一律に対象となるわけではない。",
          uncertain: "新規指定・取消し、サービス名や事業構造の変更があり得るため、固定的な事業者一覧ではなく最新の指定資料を確認する。",
          sourceIds: [lawSourceId, pointsSourceId, ebaySourceId, tiktokSourceId]
        },
        {
          id: "dpf-transparency-disclosure",
          title: "提供条件・規約変更では何を開示・通知する必要があるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "指定事業者は、価格等の基本的取引条件、契約関係その他法令上の事項を開示し、一定の提供条件変更では変更内容・理由を事前に通知するなど、利用事業者が取引条件を把握できるようにする必要がある。",
          exception: "開示事項・通知時期には法令上の区分や例外があるため、個別の変更内容ごとに条文・施行規則等を確認する。",
          uncertain: "個々の表示・説明が法定水準を満たすかは、対象条件、通知方法、利用事業者が理解できる情報になっているか等の具体的事情による。",
          sourceIds: [lawSourceId, pointsSourceId, recommendationSourceId]
        },
        {
          id: "dpf-transparency-procedures",
          title: "苦情・紛争処理と相互理解のための体制をどう整えるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "指定事業者は、利用事業者との相互理解を促進するため、公正性確保、苦情・紛争の処理解決、国内でコミュニケーションを管理する体制等について必要な措置を講じる。",
          exception: "具体的な体制・手続は事業特性に応じた自主的な取組を含み、一律の単一手順が法定されているわけではない。",
          uncertain: "運用の十分性は年次報告とモニタリング・レビューでも継続的に評価される。",
          sourceIds: [lawSourceId, pointsSourceId, evaluationSourceId]
        },
        {
          id: "dpf-transparency-monitoring-review",
          title: "年次報告・大臣評価は運営改善にどうつながるか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "指定事業者の自己評価付き年次報告、利用事業者・有識者等の意見、大臣評価を循環させ、指摘事項への自主的改善を翌年度以降も確認する共同規制の仕組みとして運用されている。",
          exception: "大臣評価の指摘事項が直ちに個別取引の違法認定や損害賠償責任を意味するわけではなく、条文上の義務違反や独禁法上の問題は別途判断する。",
          uncertain: "どの課題を重点的に評価し、改善不足に対してどの執行手段を用いるかは年度・事案により異なる。",
          sourceIds: [lawSourceId, evaluationSourceId]
        },
        {
          id: "dpf-transparency-enforcement",
          title: "開示不足や競争上の問題にはどのような執行があり得るか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "開示義務違反等には勧告・命令等の仕組みがあり、透明性・公正性を阻害する行為が独占禁止法違反と認められる場合には、経済産業大臣が公正取引委員会へ措置を求めることができる。",
          exception: "大臣評価で改善課題が指摘されたこと自体と、法令違反として勧告・命令・公取委対応の要件を満たすことは区別する。",
          uncertain: "具体的な執行判断は個別事案の事実関係と各法の要件に依存する。",
          sourceIds: [lawSourceId, recommendationSourceId, jftcReferralSourceId]
        },
        {
          id: "dpf-transparency-new-designations",
          title: "新たに指定されたプラットフォームはいつ報告・評価対象になるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "TikTok Pte. Ltd.は2025年6月27日の指定を受け2026年度以降、eBay Japan合同会社は2026年6月12日の指定を受け2027年度以降、それぞれ年次報告・モニタリングの対象となる。",
          exception: "指定された事業区分・サービスについての規律であり、各社の全事業を対象とするものではない。",
          uncertain: "今後の新規指定・指定取消しは最新の経済産業省公表資料で確認する。",
          sourceIds: [ebaySourceId, tiktokSourceId]
        },
        {
          id: "dpf-transparency-smartphone-transfer",
          title: "アプリストア分野はスマホ法施行後どう扱うか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "2025年12月18日のスマホソフトウェア競争促進法の全面施行に伴い、アプリストア分野は透明化法の規制対象から除外され、アプリストアとの取引上の課題はスマホ法の規律・相談窓口を中心に確認する。",
          exception: "2025年12月17日までの透明化法上の評価・執行や過去の取引については、当時の規律を確認する必要がある。",
          uncertain: "スマホ法の運用・執行は別テーマで継続確認する。",
          sourceIds: [pointsSourceId, evaluationSourceId]
        }
      ],
      sourceIds: [lawSourceId, pointsSourceId, evaluationSourceId, ebaySourceId, tiktokSourceId, recommendationSourceId, jftcReferralSourceId],
      practicalImpacts: [
        "プラットフォーム利用規約・提供条件",
        "規約変更・手数料変更の通知",
        "アカウント停止・利用制限の理由説明",
        "苦情・異議申立て・紛争処理",
        "国内管理人・利用事業者対応体制",
        "年次報告・自己評価・大臣評価対応",
        "オンラインモール出店管理",
        "デジタル広告取引・広告主／パブリッシャー対応",
        "スマホ法との規制境界"
      ]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-meti-dpf-transparency-points-2026",
      title: "デジタルプラットフォーム取引透明化法―法律のポイントと現行の対象範囲",
      publisher: "経済産業省",
      author: "商務情報政策局 情報経済課 デジタル取引環境整備室",
      publishedAt: "2026-06-30",
      collectedAt: "2026-09-10",
      url: "https://www.meti.go.jp/policy/mono_info_service/digitalplatform/transparency.html",
      sourceType: "primary",
      sourceLabel: "一次資料・制度概要",
      status: "adopted",
      summary: "透明化法の対象指定、提供条件等の開示、条件変更時の事前通知、苦情・紛争処理等の体制整備、年次報告・自己評価の仕組みをまとめた現行の制度ページ。2025年12月にアプリストア分野がスマホソフトウェア競争促進法へ移管されたことも明示している。",
      whyImportant: [
        "現在の透明化法をアプリストアまで含む旧来の3分野のまま理解しないための基準点になる",
        "プラットフォーム提供者が利用事業者に対して開示・通知すべき事項と、苦情・紛争処理等の体制を一つの制度構造として確認できる",
        "オンラインモール・デジタル広告とスマホ法の規制境界を実務上切り分けられる"
      ],
      audience: ["企業法務", "デジタル事業", "EC・マーケットプレイス運営", "広告・マーケティング"],
      audienceReason: "プラットフォーム提供側・利用側の双方が、現在どの制度を参照し、規約・通知・苦情対応をどこまで管理すべきか確認するため。",
      categories: ["AI・デジタル", "独占禁止法・競争法", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["dpf-transparency-current-scope", "dpf-transparency-disclosure", "dpf-transparency-procedures", "dpf-transparency-smartphone-transfer"],
      primarySourceIds: [lawSourceId, pointsSourceId],
      whatChanged: "デジタルプラットフォーム取引透明化法を独立テーマとして新設し、アプリストア移管後の現行対象、開示・通知、苦情処理、年次報告の枠組みを整理した。"
    },
    {
      id: "article-meti-dpf-ebay-qoo10-designation-2026",
      title: "eBay Japan合同会社を透明化法の規制対象事業者として指定―Qoo10",
      publisher: "経済産業省",
      author: "商務情報政策局 情報経済課 デジタル取引環境整備室",
      publishedAt: "2026-06-12",
      collectedAt: "2026-09-10",
      url: "https://www.meti.go.jp/press/2026/06/20260612004/20260612004.html",
      sourceType: "primary",
      sourceLabel: "一次資料・指定",
      status: "adopted",
      summary: "Qoo10を運営するeBay Japan合同会社を、総合物販オンラインモール分野の特定デジタルプラットフォーム提供者として指定した資料。指定後は情報開示・体制整備が求められ、2027年度以降は自己評価付き年次報告とモニタリング・レビューの対象になる。",
      whyImportant: [
        "透明化法の規制対象が固定された大手3社だけではなく、売上規模等に応じて新規指定されることを最新事例で確認できる",
        "Qoo10の出店・出品事業者にとって、規約変更や苦情処理等を透明化法の枠組みで確認する入口になる",
        "指定年度と年次報告・評価が始まる年度を区別して管理できる"
      ],
      audience: ["企業法務", "EC・小売", "マーケットプレイス運営", "Qoo10出店事業者"],
      audienceReason: "新規指定がプラットフォーム提供者・利用事業者の運用へいつから影響するか確認するため。",
      categories: ["AI・デジタル", "独占禁止法・競争法", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["dpf-transparency-current-scope", "dpf-transparency-new-designations"],
      primarySourceIds: [ebaySourceId, lawSourceId],
      whatChanged: "Qoo10を運営するeBay Japanの2026年新規指定と、2027年度からの年次報告・モニタリング開始を現行の対象範囲へ反映した。"
    },
    {
      id: "article-meti-dpf-tiktok-designation-2025",
      title: "TikTok Pte. Ltd.を透明化法の規制対象事業者として指定―デジタル広告",
      publisher: "経済産業省",
      author: "商務情報政策局 情報経済課 デジタル取引環境整備室",
      publishedAt: "2025-06-27",
      collectedAt: "2026-09-10",
      url: "https://www.meti.go.jp/press/2025/06/20250627002/20250627002.html",
      sourceType: "primary",
      sourceLabel: "一次資料・指定",
      status: "adopted",
      summary: "TikTok for Businessを通じてTikTok等に広告を表示する事業について、TikTok Pte. Ltd.をデジタル広告分野の特定デジタルプラットフォーム提供者として指定した資料。2026年度以降、年次報告・大臣評価の対象となる。",
      whyImportant: [
        "デジタル広告分野の現行指定事業者を更新するうえで欠かせない一次資料",
        "広告主・広告代理店・パブリッシャーが、広告配信プラットフォームとの取引条件や相談対応を透明化法の対象として確認できる",
        "新規指定後に報告・モニタリングが始まるタイミングを区別できる"
      ],
      audience: ["企業法務", "広告・マーケティング", "広告代理店", "メディア・パブリッシャー"],
      audienceReason: "デジタル広告の取引条件、広告審査、問い合わせ等をプラットフォーム規律の観点から点検するため。",
      categories: ["AI・デジタル", "独占禁止法・競争法", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["dpf-transparency-current-scope", "dpf-transparency-new-designations"],
      primarySourceIds: [tiktokSourceId, lawSourceId],
      whatChanged: "TikTokのデジタル広告分野での指定と、2026年度からの年次報告・モニタリング対象化をバックフィルした。"
    },
    {
      id: "article-meti-dpf-evaluation-2025",
      title: "2025年度 特定デジタルプラットフォームの透明性及び公正性についての評価",
      publisher: "経済産業省",
      author: "商務情報政策局 情報経済課",
      publishedAt: "2025-12-17",
      collectedAt: "2026-09-10",
      url: "https://www.meti.go.jp/press/2025/12/20251217001/20251217001.html",
      sourceType: "primary",
      sourceLabel: "一次資料・大臣評価",
      status: "adopted",
      summary: "総合物販オンラインモール、当時のアプリストア、デジタル広告について、指定事業者の報告、利用事業者・有識者の意見等を踏まえて透明性・公正性を評価した2025年度の大臣評価。評価結果を受けた自主的改善と、改善が不十分な場合の勧告等を含む共同規制の運用を確認できる。",
      whyImportant: [
        "透明化法が単に規約開示を一度義務付ける制度ではなく、毎年度の評価と改善を繰り返す仕組みであることが分かる",
        "法令条文だけでは見えにくい利用事業者側の課題や、当局が運営改善を求める観点を追える",
        "個別の指摘を直ちに違法認定と扱わず、共同規制による改善要求と法執行を分けて読める"
      ],
      audience: ["企業法務", "コンプライアンス", "プラットフォーム運営", "EC・デジタル広告担当"],
      audienceReason: "年次報告・自己評価を形式対応で終わらせず、大臣評価で見られる運営課題を次年度の規約・体制改善へつなげるため。",
      categories: ["AI・デジタル", "独占禁止法・競争法", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["dpf-transparency-procedures", "dpf-transparency-monitoring-review", "dpf-transparency-smartphone-transfer"],
      primarySourceIds: [evaluationSourceId, lawSourceId],
      whatChanged: "透明化法のモニタリング・レビューを、年次報告から大臣評価・自主改善へ続く共同規制のサイクルとしてテーマへ組み込んだ。"
    },
    {
      id: "article-meti-dpf-recommendation-2024",
      title: "アマゾンジャパン、Apple・iTunesへの透明化法に基づく初の勧告",
      publisher: "経済産業省",
      author: "商務情報政策局 情報経済課",
      publishedAt: "2024-08-02",
      collectedAt: "2026-09-10",
      url: "https://www.meti.go.jp/press/2024/08/20240802001/20240802001.html",
      sourceType: "primary",
      sourceLabel: "一次資料・法執行",
      status: "adopted",
      summary: "提供条件等の開示をめぐり、アマゾンジャパンとApple・iTunesに透明化法6条1項に基づく勧告を行った初の勧告事案。販売手数料等の条件や英語で作成された提供条件等について、利用事業者に対する法定開示の具体的な執行例を示す。",
      whyImportant: [
        "透明化法の開示義務に実際の勧告・履行確認があり得ることを示す初の執行事例",
        "規約が存在するだけでなく、利用事業者が取引条件を理解できる形で開示されているかが問題になることを具体化する",
        "現在はスマホ法へ移管されたアプリストア分野についても、過去時点の透明化法執行として制度の沿革を確認できる"
      ],
      audience: ["企業法務", "コンプライアンス", "プラットフォーム運営", "EC事業"],
      audienceReason: "提供条件・手数料・規約の開示方法が法執行上どのように問題化するか、実例から点検するため。",
      categories: ["AI・デジタル", "独占禁止法・競争法", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["dpf-transparency-disclosure", "dpf-transparency-enforcement"],
      primarySourceIds: [recommendationSourceId, lawSourceId],
      whatChanged: "透明化法の開示義務について、2024年の初勧告を代表的な執行事例として追加し、共同規制だけでなく勧告等の法執行があることを明確化した。"
    },
    {
      id: "article-pwc-dpf-monitoring-review-2024",
      title: "デジタルプラットフォーム取引透明化法の「モニタリング・レビュー」にみる、新しい時代のトラストとは",
      publisher: "PwC Japanグループ",
      author: "川本大亮・百歩路子（経済産業省 仙田正文氏へのインタビュー）",
      publishedAt: "2024-08-19",
      collectedAt: "2026-09-10",
      url: "https://www.pwc.com/jp/ja/knowledge/column/awareness-cyber-security/dtf2024-05.html",
      sourceType: "secondary",
      sourceLabel: "専門家・実務解説",
      status: "adopted",
      summary: "透明化法のモニタリング・レビューについて、制度担当の経済産業省職員とPwCの専門家が、独占禁止法を補完する位置付け、共同規制・アジャイルガバナンス、利用事業者の声を取り込む仕組み、規約変更・アカウント停止等の改善例まで掘り下げた解説。記事公開時点ではアプリストアも対象だったため、現在の対象範囲は最新一次資料で補正して読む必要がある。",
      whyImportant: [
        "一次資料だけでは掴みにくい、なぜ年次報告と大臣評価を組み合わせるのかという制度設計の狙いを理解できる",
        "オンラインモールの規約変更や売上金留保、アプリストアのアカウント停止通知など、モニタリングで改善対象となった具体例を追える",
        "共同規制と独占禁止法執行をどう接続するかという透明化法の特徴を、制度担当者の説明から確認できる"
      ],
      audience: ["企業法務", "コンプライアンス", "デジタル事業", "プラットフォーム運営"],
      audienceReason: "条文の義務だけでなく、モニタリングで何が見られ、どのように運営改善へつながるかを理解するため。",
      categories: ["AI・デジタル", "独占禁止法・競争法", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["dpf-transparency-monitoring-review", "dpf-transparency-enforcement"],
      primarySourceIds: [lawSourceId, pointsSourceId, evaluationSourceId],
      whatChanged: "一次資料中心の制度整理に、共同規制・モニタリングの狙いと実際の改善例をつなぐ専門家解説を補った。"
    }
  ]);
})();