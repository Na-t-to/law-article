(() => {
  const topicSlug = "bank-investment-subsidiary-business-succession";
  const reformEventId = "banking-act-investment-subsidiary-2026-amendment";
  const releaseSourceId = "source-fsa-bank-investment-subsidiary-2026";
  const commentsSourceId = "source-fsa-bank-investment-subsidiary-comments-2026";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueBySlug = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.slug));
    return (target || []).concat(additions.filter((item) => !existing.has(item.slug)));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: releaseSourceId,
      title: "「銀行法施行規則等の一部を改正する内閣府令」等の公布及びパブリックコメントの結果等について",
      type: "regulation",
      typeLabel: "一次資料・金融庁／銀行法施行規則等改正",
      authority: "金融庁",
      publishedAt: "2026-06-12",
      url: "https://www.fsa.go.jp/news/r7/ginkou/20260612/20260612.html",
      importance: "最高",
      whyImportant: "投資専門会社について、株式会社以外への資金供給、ベンチャー企業へのクロスオーバー投資、上場会社を含む事業承継会社への資金供給、M&A仲介業務を認める2026年6月改正の公式公表資料。投資専門会社関係の改正は2026年6月15日から施行・適用された。",
      topics: [topicSlug]
    },
    {
      id: commentsSourceId,
      title: "銀行法施行規則等の一部改正・コメントの概要及びコメントに対する金融庁の考え方",
      type: "report",
      typeLabel: "一次資料・金融庁／パブリックコメント回答",
      authority: "金融庁",
      publishedAt: "2026-06-12",
      url: "https://www.fsa.go.jp/news/r7/ginkou/20260612/01.pdf",
      importance: "高",
      whyImportant: "上場後のベンチャー企業への追加出資、上場会社である事業承継会社、投資先を国内の会社その他の団体に限ること、公益団体等への出資、匿名組合出資等について、改正条文の射程を金融庁が具体的に説明した一次資料。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueBySlug(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "銀行投資専門子会社・事業承継支援",
      categories: ["事業再生・金融", "M&A", "危機管理・コンプライアンス"],
      summary: "2026年6月の銀行法施行規則等改正を基礎に、銀行グループの投資専門会社による事業承継会社・ベンチャー等への資金供給、投資対象・手法、M&A仲介、議決権保有規制と内部管理を整理する。",
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      isNew: true,
      overview: [
        "銀行・銀行持株会社には子会社規制と議決権保有規制があり、一般の国内会社について銀行グループが保有できる議決権には原則として上限があります。一方、一定の投資専門会社を通じる場合には、事業承継会社やベンチャー企業等への資金供給について例外的な枠組みが置かれています。",
        "金融庁は2026年6月、投資専門会社の投資対象を株式会社以外の国内の会社・団体へ広げ、上場後のベンチャー企業への継続的な追加出資や、上場会社である事業承継会社への資金供給を可能にし、業務範囲にM&A仲介を追加する改正を施行しました。",
        "このテーマでは、投資可能になった対象・手法だけでなく、事業承継会社の要件、銀行本体と投資専門会社の役割分担、5％・15％ルール、10年の保有期間、利益相反・内部管理まで一体で追います。"
      ],
      currentSummary: {
        facts: [
          "金融庁は2026年6月12日、銀行法施行規則等の一部改正を公布し、投資専門会社関係の主要改正を2026年6月15日から施行・適用した。",
          "改正により、投資専門会社は株式会社に限らず、国内の会社その他の団体へ一定の方法で資金供給できるようになり、信託受益権の取得や匿名組合契約等を含む資金供給手法も明示的に拡張された。",
          "事業承継会社については上場会社も投資対象となり、ベンチャー企業については一定の場合に上場後も追加出資を継続できるようになった。",
          "投資専門会社の業務範囲にはM&A仲介業務が追加された。"
        ],
        interpretations: [
          "『株式会社以外にも投資できる』という改正は国外投資まで一般に開放するものではなく、資金供給先となる『会社その他の団体』は国内に限られる。外国の株式会社や外国LLC等への投資は、この投資専門会社の枠組みでは引き続き認められない。",
          "事業承継会社への出資では、単に承継ニーズがあるかだけでなく、銀行本体・銀行持株会社本体・投資専門会社のどの主体がどの議決権を持つかを分けて確認する必要がある。一定割合を超える出資は投資専門会社を通じる構造が前提になる。",
          "M&A仲介業務の追加は事業承継支援を資金供給だけでなく案件形成・相手方探索等へ広げる一方、融資者・投資家・仲介者の立場が同一グループ内で重なるため、利益相反管理と顧客利益保護の設計が重要になる。"
        ],
        implications: [
          "投資専門会社の投資方針・権限規程・稟議基準を見直し、株式会社以外の国内団体、上場事業承継会社、上場後ベンチャーへの追加投資をどの条件で扱うか明文化する。",
          "出資・貸付け・社債・新株予約権・信託受益権・匿名組合等の各手法について、資金供給先が国内の会社・団体であること、業務範囲規制、議決権保有規制を案件ごとに確認する。",
          "事業承継会社では、承継計画と支援の必要性、銀行本体等と投資専門会社の保有割合、原則10年の保有期間と出口方針を投資開始時から管理する。",
          "投資専門会社がM&A仲介も行う場合は、融資・出資・仲介の各役割から生じる利益相反を特定し、情報遮断、顧客説明、意思決定・報酬設計、モニタリングを既存の顧客利益保護態勢へ組み込む。"
        ],
        uncertain: [
          "事業承継会社の『支援の必要』や承継計画の具体的な充足水準は案件ごとの事情に左右され、代表者が高齢であること等だけで機械的に判断できない。",
          "改正後の投資対象・投資手法拡大を踏まえた案件慣行、利益相反管理、出口設計の市場標準は今後の運用蓄積を継続確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "bank-investment-subsidiary-targets-methods",
          title: "投資専門会社はどの投資先・資金供給手法を使えるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "2026年6月改正後は、投資専門会社が国内の会社その他の団体に対して、貸付け、社債・新株予約権・株式等の取得、信託受益権の取得、組合・匿名組合・LPS・LLP等の契約を通じて事業資金を供給できる。",
          exception: "資金供給先となる『会社その他の団体』は国内に限られ、外国の株式会社や外国LLC等への投資をこの枠組みで行えるようになったわけではない。個々の投資手法には別途、銀行法その他の規制が及び得る。",
          uncertain: "新たに対象となる団体や投資スキームの具体的な案件適合性は、法的性質、資金供給先、契約構造等を個別に確認する必要がある。",
          sourceIds: [releaseSourceId, commentsSourceId]
        },
        {
          id: "bank-business-succession-company-scope",
          title: "事業承継会社への出資で何を確認するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "事業承継のために支援の必要が生じ、事業承継計画に基づく支援を受ける会社について、2026年改正後は上場会社も事業承継会社の対象となる。投資専門会社を通じた子会社化・基準議決権数を超える保有は原則10年の枠内で管理する。",
          exception: "代表者の死亡・高齢化は事業承継が必要となる事由の例示であり、それだけが対象要件ではない。銀行本体又は銀行持株会社本体が基準議決権数を超えて直接出資できるという意味でもない。",
          uncertain: "承継計画の実現可能性、支援の必要性、関係金融機関の関与の程度等は案件ごとの事実関係に応じて判断する。",
          sourceIds: [releaseSourceId, commentsSourceId]
        },
        {
          id: "bank-investment-subsidiary-crossover",
          title: "ベンチャー企業の上場後も追加出資できるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "投資専門会社からの出資開始後7年を経過した日以後に投資先が上場等した場合には、上場後も継続して追加出資できる。上場後は中小企業者に該当するかにかかわらず追加出資が可能となる。",
          exception: "非上場のまま中小企業者に該当しなくなった会社への追加出資まで一般に認める改正ではない。",
          uncertain: "個別案件で追加出資を行う際は、投資開始時点、上場時点、投資先の属性及び他の議決権規制との関係を確認する必要がある。",
          sourceIds: [releaseSourceId, commentsSourceId]
        },
        {
          id: "bank-investment-subsidiary-ma-brokerage",
          title: "投資専門会社がM&A仲介を行う際に何を管理するか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "2026年改正で投資専門会社の業務範囲にM&A仲介業務が追加されたため、事業承継支援を資金供給と仲介の双方から行える。一方、銀行グループ内で融資・出資・仲介の立場が重なる案件では、顧客の利益を不当に害さないよう利益相反を特定・管理する態勢を整える。",
          exception: "M&A仲介が業務範囲に追加されたことは、個別案件に適用される他の法令・自主規制・契約上の義務や、銀行グループの利益相反管理を免除するものではない。",
          uncertain: "改正後のM&A仲介と投資・融資の組合せについて、具体的な情報遮断、報酬、顧客説明等の実務水準は案件蓄積を確認する必要がある。",
          sourceIds: [releaseSourceId, commentsSourceId]
        }
      ],
      sourceIds: [releaseSourceId, commentsSourceId],
      practicalImpacts: [
        "銀行グループの投資方針・権限規程",
        "事業承継ファンド・投資専門子会社",
        "議決権保有規制・子会社規制",
        "投資スキーム・出資手法",
        "M&A仲介・利益相反管理",
        "投資期間・出口管理"
      ]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "銀行法施行規則等・2026年改正（投資専門会社の投資対象・業務範囲拡充）",
      eventType: "regulation_or_guideline",
      lawId: "banking-act-investment-subsidiary",
      lawLabel: "銀行法施行規則等・投資専門会社規制",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-06-15"],
      effectiveDateSourceIds: [releaseSourceId],
      matchSourceIds: [releaseSourceId, commentsSourceId],
      articleIds: [
        "article-fsa-bank-investment-subsidiary-2026",
        "article-tmi-bank-subsidiary-business-succession-2026"
      ],
      sourceIds: [releaseSourceId, commentsSourceId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-fsa-bank-investment-subsidiary-2026",
      title: "銀行法施行規則等の一部改正（投資専門会社の投資対象・業務範囲拡充）",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-06-12",
      collectedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/news/r7/ginkou/20260612/20260612.html",
      sourceType: "primary",
      sourceLabel: "一次資料・銀行法施行規則等改正／2026年6月15日施行",
      status: "adopted",
      summary: "金融庁が2026年6月12日に公布した銀行法施行規則等の改正。投資専門会社について、株式会社以外の国内会社・団体への資金供給、ベンチャー企業へのクロスオーバー投資、上場会社を含む事業承継会社への資金供給、M&A仲介業務を可能にした。投資専門会社関係は6月15日から施行・適用された。",
      whyImportant: [
        "銀行グループの投資専門会社が使える投資先・投資手法の範囲が実質的に広がった改正の公式基準点になる",
        "事業承継会社への上場会社投資と、ベンチャー企業への上場後追加投資を区別して確認できる",
        "投資専門会社のM&A仲介を含め、銀行グループの事業承継支援モデルを見直す起点になる"
      ],
      audience: ["銀行・銀行持株会社の法務・コンプライアンス", "投資専門子会社・ファンド担当", "M&A・事業承継担当"],
      audienceReason: "投資専門会社を使った出資・ファンド・事業承継支援の対象と手法を、施行済みの一次資料から確認するため。",
      categories: ["事業再生・金融", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "bank-investment-subsidiary-targets-methods",
        "bank-business-succession-company-scope",
        "bank-investment-subsidiary-crossover",
        "bank-investment-subsidiary-ma-brokerage"
      ],
      primarySourceIds: [releaseSourceId, commentsSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [releaseSourceId],
      whatChanged: "新テーマ追加／2026年6月15日施行の銀行法施行規則等改正により、投資専門会社の投資対象・資金供給手法、クロスオーバー投資、事業承継会社への投資、M&A仲介の範囲が拡充された。"
    },
    {
      id: "article-tmi-bank-subsidiary-business-succession-2026",
      title: "銀行子会社による事業承継支援（令和8年6月銀行法施行規則改正を踏まえて）",
      publisher: "TMI総合法律事務所",
      author: "溝端俊介",
      publishedAt: "2026-08-04",
      collectedAt: "2026-09-11",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18659.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・銀行法／投資専門子会社・事業承継",
      status: "adopted",
      summary: "銀行・銀行持株会社の子会社規制と議決権保有規制を起点に、投資専門会社を通じた事業承継会社への出資要件と2026年6月改正を整理した実務解説。上場事業承継会社、株式会社以外の国内団体、信託受益権・匿名組合等の新たな資金供給手法、外国法人への投資が対象外であること、原則10年の保有期間まで条文とパブコメ回答を横断して説明する。",
      whyImportant: [
        "改正前後の条文を比較し、投資専門会社が新たに使える資金供給手法を一覧で確認できる",
        "『国内の会社その他の団体』の射程を、外国株式会社・外国LLCは対象外、公益団体等は対象となり得るという金融庁回答まで含めて具体化している",
        "上場会社である事業承継会社への出資、銀行本体と投資専門会社の役割分担、原則10年の保有期間を一つの実務フローとして読める"
      ],
      audience: ["銀行・銀行持株会社の法務", "投資専門子会社・ファンド担当", "事業承継・M&A担当"],
      audienceReason: "改正条文だけでは把握しにくい子会社規制・議決権保有規制・業務範囲規制の関係を、実際の事業承継投資の検討順序へ落とし込むため。",
      categories: ["事業再生・金融", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "bank-investment-subsidiary-targets-methods",
        "bank-business-succession-company-scope",
        "bank-investment-subsidiary-ma-brokerage"
      ],
      primarySourceIds: [releaseSourceId, commentsSourceId],
      reformEventId,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [releaseSourceId],
      whatChanged: "実務整理追加／2026年改正を、銀行グループの子会社・議決権保有規制、事業承継会社の要件、投資専門会社の資金供給手法、10年の保有期間までつなげて具体化した。"
    }
  ]);
})();
