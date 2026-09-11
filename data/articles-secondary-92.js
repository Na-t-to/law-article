(() => {
  const topicSlug = "insider-trading-information-control";
  const qaSourceId = "source-fsa-sesc-insider-qa-2024";
  const caseSourceId = "source-sesc-irom-insider-2026-09-11";
  const qaArticleId = "article-fsa-sesc-insider-qa-2024";
  const caseArticleId = "article-sesc-irom-insider-2026-09-11";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: qaSourceId,
      title: "インサイダー取引規制に関するQ&A（令和6年4月19日最終改訂）",
      type: "guidance",
      typeLabel: "一次資料・金融庁／証券取引等監視委員会Q&A",
      authority: "金融庁・証券取引等監視委員会",
      publishedAt: "2024-04-19",
      url: "https://www.fsa.go.jp/news/r5/shouken/20240419/240419insider_qa_.pdf",
      importance: "最高",
      whyImportant: "インサイダー取引規制の基本事項と実務上の法令解釈を金融庁・証券取引等監視委員会が整理した公式Q&A。社内の自社株売買ルールを過剰にしない考え方、情報管理態勢、知る前契約・計画、株式報酬等の実務論点を確認できる。",
      topics: [topicSlug]
    },
    {
      id: caseSourceId,
      title: "公開買付者との契約締結者によるアイロムグループ株式に係る内部者取引に対する課徴金納付命令の勧告について",
      type: "enforcement",
      typeLabel: "一次資料・課徴金勧告／公開買付け等関係者",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260911-1.html",
      importance: "高",
      whyImportant: "公開買付者の連結子会社とアドバイザリー契約を締結していた者が、契約履行に関して公開買付け等事実を知り、公開前に対象株式を買い付けた事案について、金商法167条1項違反として課徴金納付命令を勧告した具体的な執行事例。M&A関係者・外部アドバイザーを含む情報管理の射程を確認できる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "インサイダー取引・情報管理／公開買付け",
      categories: ["金融商品取引・開示・IR", "M&A", "危機管理・コンプライアンス"],
      summary: "上場会社やM&A関係者のインサイダー取引規制を、未公表重要事実・公開買付け等事実、契約関係者、社内売買ルール、情報管理の実務から整理する。",
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      isNew: true,
      overview: [
        "インサイダー取引規制は上場会社の役職員だけの問題ではなく、公開買付者との契約履行に関して公開買付け等事実を知った契約締結者など、M&Aに関与する外部者にも及び得る。",
        "他方、法令違反防止のために役職員の株式売買を一律・恒久的に禁止することまで法令が要求しているわけではない。金融庁Q&Aは、各社の実情・担当職務・情報アクセスに応じた合理的な売買ルールと情報管理を求める考え方を示している。",
        "このテーマでは、誰がどの経路で未公表情報を知り得るかを先に把握し、M&A案件管理、情報遮断、役職員売買ルール、事前承認・報告、株式報酬等の定型取引を一つのコンプライアンス設計として扱う。"
      ],
      currentSummary: {
        facts: [
          "金商法167条1項は、公開買付者等の関係者が公開買付け等の実施に関する事実を所定の立場・経路で知った場合、公表前の対象株券等の買付け等を原則として禁止する。",
          "証券取引等監視委員会は2026年9月11日、Blackstone Inc.の連結子会社とアドバイザリー契約を締結していた者が、契約履行に関してアイロムグループ株式の公開買付け等事実を知り、公表前に6600株を1224万2800円で買い付けた行為について、金商法167条1項違反として615万円の課徴金納付命令を勧告した。",
          "金融庁・証券取引等監視委員会のQ&Aは、自社株式売買を持株会経由以外すべて禁止するような社内ルールは法令上求められるものではなく、各社が実情に応じて過剰にならない社内ルールを整備することが重要とする。"
        ],
        interpretations: [
          "M&A案件の情報管理では、雇用関係の有無よりも、公開買付者・対象会社・助言会社・委託先等との契約関係と、誰が契約履行に関して公開買付け等事実へアクセスするかを洗い出す必要がある。",
          "役職員の売買規制は『全面禁止』か『自由』かの二択ではなく、未公表情報へのアクセス、担当業務、対象銘柄、保有期間、信用取引、事前承認・事後報告等を組み合わせたリスクベースの設計が可能である。"
        ],
        implications: [
          "公開買付け・非公開M&A案件では、買付者、対象会社、FA・弁護士・会計士、外部コンサルタント、委託先等の契約関係者を案件参加者として把握し、情報アクセス権と売買禁止・守秘義務を案件単位で管理する。",
          "役職員向けの自社株・取引先株売買規程について、法令上必要な範囲と会社独自の上乗せルールを区別し、事前承認・報告、ブラックアウト期間、対象者・対象銘柄、例外手続を明確にする。",
          "株式報酬や知る前契約・計画など定型的な取引は、未公表重要事実を知った後に都度判断するのではなく、Q&Aや法令上の要件を踏まえて事前に制度設計・記録化する。"
        ],
        uncertain: [
          "会社関係者・公開買付者等関係者への該当、重要事実・公開買付け等事実の発生時点、公表の成立、法定除外事由の適用は案件ごとの事実関係によって異なる。"
        ]
      },
      issues: [
        {
          id: "insider-tender-offer-contract-person",
          title: "公開買付者の外部アドバイザー等も規制対象になり得るか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "なり得る。公開買付者等と契約を締結している者が、その契約の締結又は履行に関して公開買付け等事実を知った場合は、金商法167条1項の公開買付者等関係者として公表前取引が規制され得る。",
          exception: "契約関係があるだけで直ちに違反となるわけではなく、所定の立場・情報取得経路、未公表の公開買付け等事実を知ったこと、対象となる取引、除外事由の有無を確認する。",
          uncertain: "複雑なグループ会社・委託関係で誰との契約が規制上の契約に当たるかは具体的事実関係を確認する。",
          sourceIds: [caseSourceId, qaSourceId]
        },
        {
          id: "insider-internal-trading-rules",
          title: "役職員の自社株売買を一律に禁止する必要があるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "法令上、一律の全面禁止が求められているわけではない。金融庁Q&Aは、インサイダー取引を防止しつつ自社株式売買を過度に萎縮させないよう、各社の実情や担当職務等に応じて合理的な社内ルールを整備する考え方を示している。",
          exception: "会社独自に法令より厳しい制限を設けることは可能であり、情報アクセスが特に高い部門・職位について厳格なルールを置くことも考えられる。",
          uncertain: "適切な規制水準は事業内容、M&A・決算等の機密情報量、役職員の情報アクセス、上場区分、グループ構成等によって異なる。",
          sourceIds: [qaSourceId]
        },
        {
          id: "insider-information-control",
          title: "インサイダー取引防止の情報管理で何を押さえるか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "未公表重要事実・公開買付け等事実について、発生・認識時点、アクセス可能者、社内外の伝達先、案件契約者、情報遮断、売買承認・報告を対応付け、誰がどの情報をいつ知ったかを追跡できる態勢を整える。",
          exception: "売買申請制度だけでは、外部アドバイザーや委託先への情報伝達、案件チーム間のアクセス制御、情報受領者の二次伝達まで管理できないため、案件・情報管理と組み合わせる。",
          uncertain: "必要な統制の強度やログ保存範囲は、組織規模、機密情報の種類、システム構成、外部関係者の数によって異なる。",
          sourceIds: [qaSourceId, caseSourceId]
        },
        {
          id: "insider-stock-compensation",
          title: "役職員への現物株式報酬は未公表重要事実があると付与できないか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "金融庁Q&Aは、勤務継続や業績条件に応じて一定期間経過後に現物株式を自己株式処分で付与する一般的な株式報酬について、付与が職務執行の対価として事前の社内規程・契約等に基づき、未公表重要事実と無関係に行われることが明らかであれば、付与時に未公表重要事実があってもインサイダー取引規制違反にならないとする考え方を示している。",
          exception: "株式報酬という名称だけで除外されるものではなく、付与条件・株数・時期が事前に規定され、未公表重要事実と無関係に行われることなど具体的な制度設計を確認する。",
          uncertain: "個別制度がQ&Aの想定する一般的な譲渡制限付株式ユニット・業績連動型株式ユニット等と同視できるかは付与条件を確認する。",
          sourceIds: [qaSourceId]
        }
      ],
      sourceIds: [qaSourceId, caseSourceId],
      practicalImpacts: ["M&A案件の情報アクセス管理", "役職員の株式売買規程・事前承認", "外部アドバイザー・委託先の情報管理", "株式報酬制度のインサイダー規制確認", "研修・記録・インシデント対応"]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: caseArticleId,
      title: "公開買付者との契約締結者によるアイロムグループ株式に係る内部者取引に対する課徴金納付命令の勧告について",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-12",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260911-1.html",
      sourceType: "primary",
      sourceLabel: "一次資料・課徴金勧告／インサイダー取引",
      status: "adopted",
      summary: "公開買付者の連結子会社とアドバイザリー契約を締結していた者が、契約履行に関してアイロムグループ株式の公開買付け等事実を知り、公表前の2024年5月10日から13日14時37分頃までに6600株を合計1224万2800円で買い付けた事案。証券取引等監視委員会は金商法167条1項違反として615万円の課徴金納付命令を勧告した。",
      whyImportant: ["公開買付者と直接の雇用関係がない外部アドバイザーでも、契約履行に関する情報取得が規制対象になり得る具体例", "M&Aで案件情報を共有する契約先・外部専門家の情報管理と売買統制を点検する材料になる", "公開前取引の時系列、株数・金額、適用条文まで一次資料で確認できる"],
      audience: ["企業法務", "M&A担当", "上場会社コンプライアンス", "FA・外部アドバイザー", "内部監査"],
      audienceReason: "公開買付け案件で、買付者グループ、対象会社、外部アドバイザー、委託先のどこまで情報アクセス・売買管理の対象に置くかを具体的に見直すため。",
      categories: ["金融商品取引・開示・IR", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insider-tender-offer-contract-person", "insider-information-control"],
      primarySourceIds: [caseSourceId],
      whatChanged: "執行事例追加／公開買付者グループとアドバイザリー契約を締結した外部者が、契約履行に関して公開買付け等事実を知って公表前に取引した事案の課徴金勧告を追加。"
    },
    {
      id: qaArticleId,
      title: "インサイダー取引規制に関するQ&A（令和6年4月19日最終改訂）",
      publisher: "金融庁・証券取引等監視委員会",
      author: "金融庁・証券取引等監視委員会",
      publishedAt: "2024-04-19",
      collectedAt: "2026-09-12",
      url: "https://www.fsa.go.jp/news/r5/shouken/20240419/240419insider_qa_.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・法令解釈Q&A",
      status: "adopted",
      summary: "金融庁・証券取引等監視委員会が、インサイダー取引規制の基本事項と実務上問題となる論点の法令解釈を整理したQ&A。自社株売買を一律に禁止することは法令上必要ではなく実情に応じた合理的な社内ルールを求める考え方、情報管理態勢、知る前契約・計画、株式報酬等を扱う。2024年改訂では勤務・業績条件付き現物株式報酬や源泉徴収税額充当のための売却に関する問9・10が追加された。",
      whyImportant: ["インサイダー取引防止策を法令上の禁止と会社独自の上乗せルールに分けて設計できる", "未公表情報へのアクセスに応じた合理的な売買統制・情報管理という実務の基準線を確認できる", "株式報酬、知る前契約・計画など日常的に判断が難しい取引の公式解釈を参照できる"],
      audience: ["企業法務", "上場会社コンプライアンス", "人事・株式報酬担当", "IR・経営企画", "M&A担当"],
      audienceReason: "インサイダー取引管理規程、売買承認手続、株式報酬制度、M&A案件の情報管理を、過剰な全面禁止ではなく法令解釈に沿って設計・更新するため。",
      categories: ["金融商品取引・開示・IR", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insider-tender-offer-contract-person", "insider-internal-trading-rules", "insider-information-control", "insider-stock-compensation"],
      primarySourceIds: [qaSourceId],
      whatChanged: "基礎資料バックフィル／インサイダー取引の情報管理・社内売買ルール・株式報酬等を整理するための金融庁・証券取引等監視委員会Q&Aを追加。"
    }
  ]);
})();
