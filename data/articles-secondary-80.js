(() => {
  const topicSlug = "disability-discrimination-reasonable-accommodation";
  const amendmentSourceId = "source-cao-disability-discrimination-amendment-2021";
  const basicPolicySourceId = "source-cao-disability-discrimination-basic-policy-2023";
  const reformEventId = "disability-discrimination-2021-amendment";

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
      id: amendmentSourceId,
      title: "障害者差別解消法・令和3年改正（事業者の合理的配慮提供義務化）",
      type: "law",
      typeLabel: "一次資料・内閣府／改正法・施行資料",
      authority: "内閣府",
      publishedAt: "2021-06-04",
      url: "https://www8.cao.go.jp/shougai/suishin/sabekai.html",
      importance: "最高",
      whyImportant: "障害者差別解消法の令和3年改正と2024年4月1日施行を確認できる内閣府の公式ハブ。民間事業者による合理的配慮の提供が努力義務から法的義務へ変わった改正の基準点となる。",
      topics: [topicSlug]
    },
    {
      id: basicPolicySourceId,
      title: "障害を理由とする差別の解消の推進に関する基本方針（令和5年3月14日閣議決定）",
      type: "guideline",
      typeLabel: "一次資料・内閣府／基本方針",
      authority: "内閣府",
      publishedAt: "2023-03-14",
      url: "https://www8.cao.go.jp/shougai/whitepaper/r07hakusho/zenbun/furoku_03.html",
      importance: "最高",
      whyImportant: "事業者の対象範囲、不当な差別的取扱い、合理的配慮、過重な負担、建設的対話、環境の整備を横断して示す政府の基本方針。各省庁の事業分野別対応指針の基礎でもある。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueBySlug(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "障害者差別解消法・合理的配慮／事業者対応",
      categories: ["危機管理・コンプライアンス", "契約・取引"],
      summary: "民間事業者に義務付けられた合理的配慮と不当な差別的取扱いの禁止について、対象範囲、申出への対応、過重な負担、正当な理由、事前の環境整備を企業実務の観点から整理する。",
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      isNew: true,
      overview: [
        "障害者差別解消法は、事業者による障害を理由とする不当な差別的取扱いを禁止し、2024年4月1日施行の令和3年改正により、民間事業者にも合理的配慮の提供を法的義務として課している。",
        "対象となる障害者は障害者手帳の所持者に限られず、障害と社会的障壁により継続的に生活上の制限を受ける状態かを個別にみる。事業者も営利・非営利、個人・法人、対面・オンラインを問わず広く対象となる。",
        "企業実務では、不当な差別的取扱い、個別の合理的配慮、事前的な環境の整備を分けて管理し、申出に対する建設的対話、過重な負担の個別判断、代替措置の検討を現場手順へ落とすことが重要となる。"
      ],
      currentSummary: {
        facts: [
          "障害者差別解消法の令和3年改正は2024年4月1日に施行され、事業者による合理的配慮の提供は努力義務から法的義務へ変更された。",
          "基本方針上、法の対象となる障害者は障害者手帳の所持者に限られない。対象事業者も営利・非営利、個人・法人を問わず、無報酬事業や非営利事業を含み、対面・オンラインなどサービス提供形態も問わない。",
          "事業者が事業主として労働者に対して行う障害を理由とする差別への措置は、障害者差別解消法13条により障害者雇用促進法の枠組みに委ねられている。",
          "不当な差別的取扱いでは、正当な理由なくサービス提供を拒否・制限したり、障害者でない者には付さない条件を付けたりすることが禁止される。正当な理由は、安全、財産、事業目的・機能等を踏まえ、個別事案ごとに総合的・客観的に判断する。",
          "合理的配慮は、社会的障壁の除去を必要とする旨の意思表明があり、負担が過重でない場合に必要となる。具体的方法は個別性が高く、事業者と本人が建設的対話を通じて代替措置を含め柔軟に検討することが求められる。"
        ],
        interpretations: [
          "企業の障害者対応は、①障害を理由に利用・契約条件を不利にしないこと、②個別の申出に応じて合理的配慮を検討すること、③不特定多数向けにアクセシビリティ等を事前改善すること、の三層に分けると判断漏れを減らしやすい。",
          "合理的配慮は申出どおりの方法を常に実施する義務ではなく、本人が解消したい障壁と事業者側の制約を共有し、目的を満たす実現可能な代替手段を探るプロセスとして設計するのが実務的である。",
          "電話のみの手続、固定化された申込フォーム、施設利用条件など、一見中立な標準フローが障壁になる場合があるため、商品・サービスの提供導線そのものを法務・運用のレビュー対象にする必要がある。"
        ],
        implications: [
          "窓口、申込み、契約、本人確認、解約、施設利用、ウェブ・アプリ等の顧客導線を棚卸しし、障害を理由とする一律拒否や代替手段のない固定ルールがないか確認する。",
          "合理的配慮の申出を受ける窓口、現場からのエスカレーション先、本人の必要とする障壁の確認、代替案の検討、判断理由の記録という一連の手順を整備する。",
          "過重な負担を理由に対応を断る場合は、事業への影響、実現可能性、費用・負担、事業規模、財務状況を具体的に検討し、理由説明と代替措置の検討を行う。",
          "障害者手帳の有無だけで制度対象外と決めず、個別の状況と社会的障壁を確認する。雇用場面は障害者雇用促進法の別ルートで整理する。",
          "ウェブアクセシビリティ、受付設備、コミュニケーション手段、職員研修、社内マニュアル等の環境整備を進め、個別の合理的配慮を提供しやすい基盤を作る。"
        ],
        uncertain: [
          "合理的配慮、過重な負担、正当な理由の具体的判断は、障害特性、本人の状況、サービス内容、事業者の規模・体制等により個別に異なる。",
          "各主務大臣が所管事業分野ごとに対応指針を定めているため、具体的な業務では基本方針だけでなく、自社に適用される最新の対応指針や自治体条例も確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "disability-scope-business-coverage",
          title: "誰が法の対象となり、どの事業場面まで含まれるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "対象となる障害者は障害者手帳所持者に限られず、障害と社会的障壁により継続的に日常生活・社会生活に相当な制限を受ける状態かを個別に判断する。事業者も営利・非営利、個人・法人を問わず、対面・オンラインを含む幅広い事業活動が対象となる。",
          exception: "事業者が事業主として労働者に対して行う障害差別への措置は、障害者差別解消法13条により障害者雇用促進法の定めるところによる。",
          uncertain: "具体的な事業分野では各主務大臣の対応指針や自治体条例による上乗せ・具体化があり得る。",
          sourceIds: [amendmentSourceId, basicPolicySourceId]
        },
        {
          id: "disability-reasonable-accommodation-process",
          title: "合理的配慮の申出をどう受け、代替案まで検討するか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "社会的障壁の除去を必要とする旨の意思表明を受けたら、本人の意向と障壁を確認し、本来の事業目的・機能を踏まえつつ、申出どおりの方法だけでなく実現可能な代替措置を含めて建設的対話により検討する。意思表明の方法は限定されず、本人による表明が難しい場合は家族・介助者等の補佐による表明も含まれる。",
          exception: "合理的配慮は、本来の業務に付随する範囲で同等の機会を提供するためのものであり、事務・事業の目的・内容・機能の本質的な変更まで求めるものではない。",
          uncertain: "必要な対話や記録の程度、最適な代替措置は、障壁の内容と事業者の運用・技術・体制により異なる。",
          sourceIds: [basicPolicySourceId]
        },
        {
          id: "disability-undue-burden",
          title: "『過重な負担』をどの要素で判断するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "過重な負担は、事務・事業への影響、実現可能性、費用・負担、事業規模、財務状況等を考慮し、個別の事案ごとに総合的・客観的に判断する。",
          exception: "希望された方法自体が過重な負担に当たる場合でも、それだけで検討を終えず、理由を丁寧に説明し、建設的対話を通じて代替措置を柔軟に検討することが求められる。",
          uncertain: "各要素の重みや許容される負担水準は事業・場面ごとに異なり、固定額や一律基準では判断できない。",
          sourceIds: [basicPolicySourceId]
        },
        {
          id: "disability-discriminatory-treatment",
          title: "不当な差別的取扱いと『正当な理由』をどう判断するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "障害を理由としてサービス提供を拒否・制限したり、障害者でない者には付さない条件を付けたりする場合、正当な理由がなければ不当な差別的取扱いとなる。正当な理由は、目的の正当性とその取扱いの必要性を、個別事案ごとに客観的に判断する。",
          exception: "安全確保、財産保全、事業の目的・内容・機能の維持、損害防止等の観点から客観的にやむを得ない取扱いは正当な理由が認められ得る。ただし、不当な差別的取扱いに当たらなくても合理的配慮の検討が別途必要な場合がある。",
          uncertain: "『危ない』『前例がない』『公平性が心配』など抽象的な理由だけでは足りず、具体的な事情に照らした必要性の説明ができるかが個別に問題となる。",
          sourceIds: [basicPolicySourceId]
        },
        {
          id: "disability-environmental-improvements",
          title: "個別の合理的配慮と事前の『環境の整備』をどう分けるか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "合理的配慮が特定の障害者に対する個別対応であるのに対し、環境の整備は不特定多数を主な対象とする事前的改善措置であり、施設・設備だけでなく、情報アクセシビリティ、人的支援、研修、規程・マニュアル整備等も含む。",
          exception: "環境の整備は法5条上の努力義務であり、個別の合理的配慮の法的義務と同一ではない。一方、環境整備の状況は必要となる合理的配慮の内容・負担にも影響する。",
          uncertain: "ウェブアクセシビリティ等でどの水準まで事前整備すべきかは、事業特性、利用者、技術水準、各分野の指針等を踏まえて継続的に検討する必要がある。",
          sourceIds: [basicPolicySourceId]
        }
      ],
      sourceIds: [amendmentSourceId, basicPolicySourceId],
      practicalImpacts: [
        "顧客・利用者向けサービス提供条件の点検",
        "合理的配慮の申出受付・判断・代替案提示フロー",
        "過重な負担・正当な理由の個別記録",
        "ウェブ・施設・受付・コミュニケーションのアクセシビリティ",
        "現場マニュアル・研修・相談窓口"
      ]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "障害者差別解消法・2021年改正（2024年施行）",
      eventType: "law_amendment",
      lawId: "disability-discrimination-elimination-act",
      lawLabel: "障害者差別解消法",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2024-04-01"],
      effectiveDateSourceIds: [amendmentSourceId],
      matchSourceIds: [amendmentSourceId],
      sourceIds: [amendmentSourceId, basicPolicySourceId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-cao-disability-discrimination-amendment-2021",
      title: "障害者差別解消法・令和3年改正（事業者の合理的配慮提供義務化）",
      publisher: "内閣府",
      author: "内閣府",
      publishedAt: "2021-06-04",
      collectedAt: "2026-09-11",
      url: "https://www8.cao.go.jp/shougai/suishin/sabekai.html",
      sourceType: "primary",
      sourceLabel: "一次資料・改正法／2024年4月施行",
      status: "adopted",
      summary: "障害者差別解消法の制定・改正、基本方針、各府省庁の対応指針、相談窓口等を集約した内閣府の公式ページ。令和3年改正が2024年4月1日に施行され、民間事業者にも合理的配慮の提供が義務化されたことを確認できる。",
      whyImportant: [
        "民間事業者の合理的配慮が努力義務から法的義務へ変わった基準点を公式資料で確認できる",
        "改正法、施行期日、基本方針、事業分野別対応指針を一つの公式ハブから追える",
        "施行済み制度として、現在のサービス・契約・顧客対応フローの点検起点になる"
      ],
      audience: ["企業法務", "コンプライアンス", "顧客対応・サービス設計"],
      audienceReason: "2024年施行後の民間事業者の法的義務を一次資料から確認し、適用範囲と社内対応の基準点を置くため。",
      categories: ["危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["disability-scope-business-coverage", "disability-reasonable-accommodation-process"],
      primarySourceIds: [amendmentSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amendmentSourceId]
    },
    {
      id: "article-cao-disability-discrimination-basic-policy-2023",
      title: "障害を理由とする差別の解消の推進に関する基本方針（令和5年3月14日閣議決定）",
      publisher: "内閣府",
      author: "内閣府",
      publishedAt: "2023-03-14",
      collectedAt: "2026-09-11",
      url: "https://www8.cao.go.jp/shougai/whitepaper/r07hakusho/zenbun/furoku_03.html",
      sourceType: "primary",
      sourceLabel: "一次資料・基本方針／事業者対応",
      status: "adopted",
      summary: "障害者差別解消法の令和3年改正を踏まえ、事業者の対象範囲、不当な差別的取扱い、正当な理由、合理的配慮、過重な負担、建設的対話、環境整備を体系的に示した政府の基本方針。",
      whyImportant: [
        "障害者手帳の有無だけで対象を判断できないことや、対面・オンラインを問わない事業者の射程を確認できる",
        "過重な負担の5要素と、代替措置を含む建設的対話の考え方を一次資料で押さえられる",
        "電話のみの手続など、企業の標準フローが合理的配慮の問題になり得る具体例まで確認できる"
      ],
      audience: ["企業法務", "コンプライアンス", "顧客対応・サービス設計", "ウェブ・プロダクト担当"],
      audienceReason: "法文だけでは抽象的な合理的配慮・正当な理由・過重な負担を、企業の判断手順へ落とす基準資料となるため。",
      categories: ["危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["disability-scope-business-coverage", "disability-reasonable-accommodation-process", "disability-undue-burden", "disability-discriminatory-treatment", "disability-environmental-improvements"],
      primarySourceIds: [basicPolicySourceId, amendmentSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amendmentSourceId]
    },
    {
      id: "article-tmi-disability-reasonable-accommodation-2025",
      title: "【障害福祉】障害者差別解消法（4） 合理的配慮",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2025-10-30",
      collectedAt: "2026-09-11",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17586.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "合理的配慮について、対象事業者、具体例、建設的対話、意思表明、過重な負担、環境整備との違いを一続きで整理する実務解説。申出に対してできる・できないの二択で終えず、代替案まで検討する運用を具体化している。",
      whyImportant: [
        "合理的配慮を現場で処理する際の建設的対話と代替案検討の意味を具体化している",
        "意思表明の方法が限定されず、本人が難しい場合の支援者による表明も含むことを実務目線で整理している",
        "過重な負担の5要素と環境整備との役割分担を一つの判断フローとして読める"
      ],
      audience: ["企業法務", "コンプライアンス", "顧客対応・店舗運営", "サービス設計"],
      audienceReason: "合理的配慮の受付から代替案提示までを、現場運用とエスカレーションの設計へ落とすため。",
      categories: ["危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["disability-reasonable-accommodation-process", "disability-undue-burden", "disability-environmental-improvements"],
      primarySourceIds: [basicPolicySourceId, amendmentSourceId]
    },
    {
      id: "article-tmi-disability-environmental-improvements-2026",
      title: "【障害福祉】障害者差別解消法（5） 環境の整備",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-03-06",
      collectedAt: "2026-09-11",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18050.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "個別の合理的配慮と、不特定多数向けの事前的改善措置である『環境の整備』を区別し、設備、研修、情報アクセシビリティ、ウェブ改善等の具体策を整理した実務解説。",
      whyImportant: [
        "合理的配慮と環境整備を混同せず、個別対応と事前投資の二層で設計できる",
        "ハード面だけでなく研修等のソフト面、ウェブアクセシビリティまで環境整備として整理している",
        "繰り返し発生する個別対応を環境整備へ還元することで、対応品質と中長期コストの両方を改善する視点が得られる"
      ],
      audience: ["企業法務", "コンプライアンス", "ウェブ・プロダクト担当", "店舗・施設運営"],
      audienceReason: "個別相談が来てから対応するだけでなく、障壁を事前に減らすアクセシビリティ施策へつなげるため。",
      categories: ["危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["disability-environmental-improvements", "disability-reasonable-accommodation-process"],
      primarySourceIds: [basicPolicySourceId, amendmentSourceId]
    },
    {
      id: "article-tmi-disability-discriminatory-treatment-2026",
      title: "【障害福祉】障害者差別解消法（6） 不当な差別的取扱いの禁止",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-07-17",
      collectedAt: "2026-09-11",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18585.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "障害を理由とする不利な取扱いと正当な理由の有無という判断構造を、入店、契約、電話利用、介助者同伴、追加書類等の事例で具体化した実務解説。正当な理由があっても合理的配慮は別途検討が必要と整理する。",
      whyImportant: [
        "『危ない』『対応できない』『公平性が心配』といった抽象理由で一律拒否しないための判断軸が具体的",
        "サービス拒否、契約条件、本人確認など企業実務で起きやすい場面を具体例で確認できる",
        "不当な差別的取扱いの正当化と合理的配慮の検討を別々に行う必要があることを明確にしている"
      ],
      audience: ["企業法務", "コンプライアンス", "顧客対応・店舗運営", "契約・審査担当"],
      audienceReason: "障害を理由とする利用拒否や追加条件が生じる場面で、現場の抽象的な懸念を客観的な判断へ置き換えるため。",
      categories: ["危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["disability-discriminatory-treatment", "disability-scope-business-coverage"],
      primarySourceIds: [basicPolicySourceId, amendmentSourceId]
    }
  ]);
})();