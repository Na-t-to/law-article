(() => {
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

  const disabilityTopic = "disability-discrimination-reasonable-accommodation";
  const applicantTopic = "job-seeker-sexual-harassment";
  const disabilitySourceId = "source-cao-disability-discrimination-basic-policy";
  const applicantSourceId = "source-mhlw-job-seeker-sexual-harassment-2026";
  const applicantReformId = "job-seeker-sexual-harassment-2026";

  const sources = [
    {
      id: disabilitySourceId,
      title: "障害を理由とする差別の解消の推進に関する基本方針・関係資料",
      type: "guideline",
      typeLabel: "内閣府・障害者差別解消法／基本方針・対応指針",
      authority: "内閣府",
      publishedAt: "2023-03-14",
      url: "https://www8.cao.go.jp/shougai/suishin/sabekai.html",
      importance: "最高",
      whyImportant: "障害者差別解消法、2021年改正法、2023年基本方針、各府省庁の対応指針、合理的配慮の事例・FAQ等を集約する内閣府の現行案内。2024年4月1日から民間事業者にも合理的配慮の提供が法的義務となったことを含め、事業者対応の一次資料を確認できる。",
      topics: [disabilityTopic]
    },
    {
      id: applicantSourceId,
      title: "求職活動等をする方を守るために―求職者等に対するセクシュアルハラスメント対策の新ルール",
      type: "guideline",
      typeLabel: "厚生労働省・求職者等セクハラ防止措置／施行準備",
      authority: "厚生労働省",
      publishedAt: "2026-09-01",
      url: "https://www.mhlw.go.jp/web_magazine/series/20260901.html",
      importance: "最高",
      whyImportant: "2026年10月1日から事業主に義務付けられる求職者等へのセクシュアルハラスメント防止措置について、対象者、採用・インターン・実習等の対象場面、方針・相談・事後対応・プライバシー保護を厚生労働省が施行直前に整理した一次資料。",
      topics: [applicantTopic]
    }
  ];

  const topics = [
    {
      slug: disabilityTopic,
      title: "障害者差別解消法・合理的配慮／サービス提供",
      categories: ["危機管理・コンプライアンス", "契約"],
      summary: "障害者差別解消法に基づく不当な差別的取扱いの禁止、事業者の合理的配慮提供義務、環境の整備を、対面・オンラインのサービス提供、契約、顧客対応、ウェブアクセシビリティへ落とし込む。",
      lastUpdated: "2026-09-14",
      lastVerified: "2026-09-14",
      isNew: true,
      overview: [
        "障害者差別解消法は、民間事業者に障害を理由とする不当な差別的取扱いを禁止し、2024年4月1日から合理的配慮の提供も法的義務とした。",
        "合理的配慮は個別の意思表明を契機に社会的障壁を除去するための必要かつ合理的な対応を検討する仕組みであり、過重な負担があるかは具体的事情を踏まえて判断する。単純な『できる／できない』ではなく、代替案を含む建設的対話が重要になる。",
        "環境の整備は、不特定多数を念頭にした事前的な改善措置で、合理的配慮とは役割が異なる。設備だけでなく研修、受付方法、情報アクセシビリティ、ウェブアクセシビリティ等も含み得る。",
        "このテーマでは、障害者からの申出を顧客対応上の例外処理として扱うのではなく、契約・サービス設計・現場判断・記録・再発防止の一連の運用として整理する。"
      ],
      currentSummary: {
        facts: [
          "2021年改正障害者差別解消法は2024年4月1日に施行され、民間事業者にも合理的配慮の提供が法的義務となった。",
          "対象となる事業者は営利・非営利、個人・法人を問わず、同種の行為を反復継続する意思をもって事業を行う者であり、対面・オンラインなどサービス提供形態の別を問わない。",
          "不当な差別的取扱いは、障害を理由として正当な理由なくサービス提供を拒否したり、条件を付したりすること等が問題となる。抽象的な安全懸念や『前例がない』といった事情だけで正当化されるものではない。",
          "合理的配慮は、障害者から社会的障壁の除去を必要としている旨の意思表明があった場合に、過重な負担でない範囲で必要かつ合理的な対応を行うものである。",
          "環境の整備は努力義務であり、不特定多数の障害者を主な対象とする事前的改善措置として、設備、人的支援、研修、情報・ウェブアクセシビリティ等を含み得る。"
        ],
        interpretations: [
          "合理的配慮の実務では、申出どおりに実施できるかだけで判断せず、目的を確認し、実現可能な代替案を含めて建設的対話を行うことが重要になる。",
          "同じ配慮要請が繰り返される事業では、その都度の個別対応だけでなく、環境の整備へ移行した方が継続的・効率的に社会的障壁を減らせる場合がある。",
          "安全確保や事業運営上の制約を理由に利用条件を変える場合でも、具体的危険や業務上の必要性を個別に説明できるかを確認し、合理的配慮の検討を別途行う必要がある。"
        ],
        implications: [
          "店舗・施設・オンラインサービス等について、障害を理由とする利用拒否・追加条件・対応場所の変更等が一律運用になっていないか点検する。",
          "合理的配慮の申出を受けたときの受付、事実・ニーズ確認、現場で可能な対応、管理者エスカレーション、過重な負担の判断、代替案提示、記録を一つのフローにする。",
          "ウェブサイト、受付端末、呼出し方法、動画・音声、店舗設備、研修など、個別配慮を容易にする環境整備を定期的に棚卸しする。",
          "カスタマーハラスメント対応では、障害者からの正当な差別解消・合理的配慮の申出まで一律にカスハラとして扱わないよう、現場ルールを接続する。"
        ],
        uncertain: [
          "合理的配慮の具体的内容や過重な負担の判断は、障害の特性、場面、事業への影響、実現可能性、費用・負担、事業規模、財務状況等によって変わる。",
          "各事業分野には所管府省庁の対応指針があるため、一般的な基本方針だけでなく自社分野の指針・事例を確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "disability-discrimination-business-scope",
          title: "どの事業・サービス提供が対象になるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "営利・非営利、個人・法人を問わず反復継続して事業を行う者が広く対象となり、対面だけでなくオンラインのサービス提供も含めて不当な差別的取扱い・合理的配慮を点検する。",
          exception: "具体的な対応内容は事業分野ごとの対応指針やサービス特性により異なる。",
          uncertain: "個別事業に適用される所管府省庁の対応指針と具体例を併せて確認する必要がある。",
          sourceIds: [disabilitySourceId]
        },
        {
          id: "disability-reasonable-accommodation",
          title: "合理的配慮の申出へどう対応するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "社会的障壁の除去を必要とする意思表明を受けた場合、目的・状況を確認し、過重な負担でない範囲で必要かつ合理的な対応を検討する。実施困難な場合も理由説明と代替案を含む建設的対話を行う。",
          exception: "事業への影響、実現可能性、費用・負担、事業規模、財務状況等から過重な負担となる場合は義務の範囲が限定される。",
          uncertain: "何が合理的かは個別場面ごとの判断であり、固定的な対応表だけでは結論できない。",
          sourceIds: [disabilitySourceId]
        },
        {
          id: "disability-environment-preparation",
          title: "個別配慮と環境の整備をどう使い分けるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "個々の障害者への合理的配慮と、不特定多数を対象とする事前的改善措置である環境の整備を分け、反復するニーズや長期的な利用が見込まれる場合は設備・研修・情報アクセシビリティ等の事前改善を進める。",
          exception: "環境の整備は努力義務であり、合理的配慮の個別判断を当然に代替するものではない。",
          uncertain: "技術進歩やサービス設計の変化に応じて適切な事前改善の水準も変わり得る。",
          sourceIds: [disabilitySourceId]
        },
        {
          id: "disability-unjust-treatment",
          title: "利用拒否・条件変更に正当な理由があるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "障害を理由とする不利な取扱いがある場合、目的の正当性と、その目的に照らして当該取扱いがやむを得ないかを具体的・客観的に確認する。抽象的な安全懸念、前例の不存在、対応方法が分からないことだけで一律に拒否しない。",
          exception: "本人・第三者の安全、財産保全、事業の目的・内容・機能の維持等のため具体的に必要で、客観的に説明できる場合は正当な理由が認められることがある。",
          uncertain: "利用態様や危険の具体性により判断が変わるため、理由と検討過程を記録することが望ましい。",
          sourceIds: [disabilitySourceId]
        }
      ],
      sourceIds: [disabilitySourceId],
      practicalImpacts: ["顧客・利用者対応", "契約・サービス利用条件", "店舗・施設運用", "ウェブアクセシビリティ", "合理的配慮の受付・記録", "従業員研修", "カスタマーハラスメント対応との切り分け"]
    },
    {
      slug: applicantTopic,
      title: "求職者等セクシュアルハラスメント・採用段階の防止措置",
      categories: ["労務", "危機管理・コンプライアンス"],
      summary: "2026年10月1日から義務化される求職者等へのセクシュアルハラスメント防止措置について、採用面接、説明会、インターンシップ、実習、OB・OG訪問、SNS等を対象に、方針・ルール・相談・調査・事後対応を整理する。",
      lastUpdated: "2026-09-14",
      lastVerified: "2026-09-14",
      isNew: true,
      overview: [
        "2025年改正男女雇用機会均等法により、2026年10月1日から、事業主には求職者等に対するセクシュアルハラスメントを防止するための雇用管理上の措置が義務付けられる。",
        "対象は採用応募者だけに限られず、就職説明会、インターンシップ、教育実習・看護実習、OB・OG訪問など、求職活動や職業選択に資する活動へ広がる。SNS等オンラインのやり取りや通常の就業場所以外での接触も対象になり得る。",
        "施行準備では、禁止方針を置くだけでなく、面談時間・場所・実施体制・使用するSNS等のルール、求職者へ見える相談窓口、迅速な事実確認、被害者・行為者対応、再発防止、プライバシー保護まで採用フローへ組み込む必要がある。"
      ],
      currentSummary: {
        facts: [
          "2026年10月1日から、事業主に求職者等に対するセクシュアルハラスメント防止措置が義務付けられる。",
          "求職者等には、求人応募者・採用面接参加者だけでなく、就職説明会、インターンシップ、教育実習・看護実習等の参加者や、一定のOB・OG訪問を行う者も含まれる。",
          "事業主が講ずべき措置には、方針と求職活動等のルールの明確化・周知、相談体制、迅速・正確な事実確認、被害者・行為者への措置、再発防止、プライバシー保護等が含まれる。",
          "面談時間・場所、実施体制、やり取りに用いるSNS等についてあらかじめルールを明確化し、労働者だけでなく求職者等にも周知することが求められる。"
        ],
        interpretations: [
          "就活セクハラ対策は人事部門の相談窓口だけで完結せず、面接官、現場社員、リクルーター、OB・OG対応、インターン・実習受入部署まで同じルールを及ぼす必要がある。",
          "被害者が採用担当者への相談をためらう構造を踏まえ、求職者から見える独立性・利用しやすさを相談体制の設計要素として考える必要がある。",
          "SNSや社外での面談を禁止するか否かだけでなく、許容する連絡手段、時間帯、複数名対応、記録・エスカレーション等を採用プロセスの統制として具体化することが重要になる。"
        ],
        implications: [
          "2026年10月1日までに、就業規則・服務規律・ハラスメント方針へ求職者等へのセクシュアルハラスメント禁止と厳正対処を反映し、管理監督者・面接官・リクルーター等へ周知する。",
          "採用・インターン・実習・OB・OG訪問について、面談場所、時間帯、実施人数、SNS・連絡手段、私的接触の扱いをルール化し、求職者へも明示する。",
          "求職者等が直接利用できる相談窓口を示し、受付、事実確認、被害者配慮、行為者対応、再発防止、プライバシー保護までの記録可能なフローを整える。"
        ],
        uncertain: [
          "個別の活動が『求職活動等』に当たるか、性的な言動により求職活動等が阻害されたと評価されるかは、具体的な活動目的・言動・影響を踏まえた判断が必要になる。"
        ]
      },
      issues: [
        {
          id: "job-seeker-harassment-scope",
          title: "誰・どの採用活動が対象になるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "応募・面接に限らず、就職説明会、インターンシップ、教育・看護実習、OB・OG訪問等の職業選択に資する活動を対象として、オンライン・社外での接触も含めて管理する。",
          exception: "専ら教育目的の社会科見学など、職業選択に資する活動と整理されないものは対象外となる場合がある。",
          uncertain: "個別プログラムの目的・運営形態により対象性を確認する必要がある。",
          sourceIds: [applicantSourceId]
        },
        {
          id: "job-seeker-harassment-prevention-rules",
          title: "面談・SNS・リクルーターのルールをどう設計するか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "禁止方針と厳正対処を明確にした上で、面談時間・場所、実施体制、使用するSNS等の求職活動ルールを定め、労働者と求職者等へ周知する。",
          exception: "具体的な連絡・面談方法は採用形態や実習等の性質に応じて設計する。",
          uncertain: "自社の採用チャネル・現場参加の範囲に応じて、どこまで統一ルールと例外承認を置くか検討が必要。",
          sourceIds: [applicantSourceId]
        },
        {
          id: "job-seeker-harassment-consultation-response",
          title: "求職者向け相談・調査・事後対応をどう整えるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "求職者等に周知した相談窓口を設け、相談後は迅速・正確な事実確認、被害者への配慮、行為者への措置、再発防止、プライバシー保護を一連の対応として実施する。",
          exception: "相談窓口の担当者は人事担当者に限定されず、求職者が相談をためらう可能性を踏まえて体制を設計できる。",
          uncertain: "大学等の外部相談窓口から情報提供を受けた場合の連携方法は、個人情報・本人意向・具体的事案を踏まえて運用する必要がある。",
          sourceIds: [applicantSourceId]
        }
      ],
      sourceIds: [applicantSourceId],
      practicalImpacts: ["採用・面接ルール", "インターンシップ・実習受入", "OB・OG訪問", "SNS・連絡手段の統制", "求職者向け相談窓口", "就業規則・服務規律", "ハラスメント調査・再発防止"]
    }
  ];

  const reformEvent = {
    id: applicantReformId,
    title: "求職者等セクシュアルハラスメント防止措置義務化・2026年施行",
    eventType: "law_amendment",
    lawId: "equal-employment-opportunity-act-job-seeker-harassment",
    lawLabel: "男女雇用機会均等法・求職者等セクシュアルハラスメント対策",
    relatedTopics: [applicantTopic],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-10-01"],
    effectiveDateSourceIds: [applicantSourceId],
    matchSourceIds: [applicantSourceId],
    sourceIds: [applicantSourceId]
  };

  const articles = [
    {
      id: "article-tmi-disability-reasonable-accommodation-2025",
      title: "障害者差別解消法（４） 合理的配慮",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2025-10-30",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17586.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／障害者差別解消法・合理的配慮",
      status: "adopted",
      summary: "2024年4月1日から民間事業者にも法的義務となった合理的配慮について、対象事業者、意思の表明、過重な負担、建設的対話、環境の整備との違いを具体例で整理する。対面・オンラインを問わない事業者の広い射程と、申出どおりの対応が難しい場合にも代替案を含む対話が必要となる点が実務上重要。",
      whyImportant: ["合理的配慮を『要望どおりに応じるか否か』ではなく、目的確認・過重な負担・代替案・建設的対話という判断手順へ落とし込める", "対面・オンラインを問わず広い事業者が対象となることを踏まえ、店舗・施設だけでなくデジタルサービスの顧客対応にも適用して考えられる", "個別の合理的配慮と事前的な環境整備を区別し、反復するニーズをサービス設計へ戻す視点を得られる"],
      audience: ["企業法務", "コンプライアンス担当", "顧客対応・店舗運営", "サービス企画・デジタル担当"],
      audienceReason: "合理的配慮の申出を現場だけの判断にせず、法務・サービス運用として再現可能な判断フローへ落とし込むため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [disabilityTopic],
      relatedIssues: ["disability-discrimination-business-scope", "disability-reasonable-accommodation", "disability-environment-preparation"],
      primarySourceIds: [disabilitySourceId],
      whatChanged: "新テーマ追加／合理的配慮の法的義務を、意思表明・過重な負担・建設的対話・代替案という事業者の判断フローに整理した。"
    },
    {
      id: "article-tmi-disability-environment-preparation-2026",
      title: "障害者差別解消法（５） 環境の整備",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-03-06",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18050.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／障害者差別解消法・環境の整備",
      status: "adopted",
      summary: "個々の障害者への合理的配慮とは別に、不特定多数を対象とする事前的改善措置である『環境の整備』を整理する解説。設備だけでなく研修、人的支援、受付、情報アクセシビリティ、ウェブアクセシビリティ等を例示し、反復する合理的配慮ニーズを事前改善へ転換する視点を示す。",
      whyImportant: ["合理的配慮と環境整備を同じ義務として混同せず、個別対応と事前改善の役割を分けられる", "自社ウェブサイトのアクセシビリティを含む具体例があり、デジタルサービスにも環境整備を広げて点検できる", "繰り返し生じる個別配慮を環境整備へ移すことで、利用者・現場双方の手間と費用を下げる運用設計につながる"],
      audience: ["企業法務", "コンプライアンス担当", "店舗・施設運営", "ウェブ・サービス企画", "研修担当"],
      audienceReason: "個別の配慮要請への都度対応だけでなく、設備・サービス・研修・アクセシビリティの事前改善へつなげるため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [disabilityTopic],
      relatedIssues: ["disability-environment-preparation", "disability-reasonable-accommodation", "disability-discrimination-business-scope"],
      primarySourceIds: [disabilitySourceId],
      whatChanged: "新テーマ追加／個別の合理的配慮と、不特定多数に向けた事前的な環境整備を切り分け、ウェブアクセシビリティ等を実務項目として整理した。"
    },
    {
      id: "article-tmi-disability-unjust-treatment-2026",
      title: "障害者差別解消法（６） 不当な差別的取扱いの禁止",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-07-17",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18585.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／障害者差別解消法・不当な差別的取扱い",
      status: "adopted",
      summary: "障害を理由とする利用拒否・条件付与等について、障害を理由とする不利な取扱いか、正当な理由があるかという判断軸を具体例で整理する。漠然とした安全懸念、前例がない、対応方法が分からないといった理由だけでは通常正当化できず、正当な理由がある場合でも合理的配慮は別途検討する点を示す。",
      whyImportant: ["利用拒否・追加条件等を『安全のため』という抽象理由で処理せず、目的の正当性と手段の必要性を個別に検討する枠組みを得られる", "契約拒否、施設利用、保証人・追加書類、介助者同伴等、企業の現場で起きる典型場面に当てはめやすい", "不当な差別的取扱いに当たらない場合でも合理的配慮の検討が残ることを区別できる"],
      audience: ["企業法務", "コンプライアンス担当", "顧客対応・店舗運営", "契約審査担当"],
      audienceReason: "顧客・利用者への拒否や条件変更を行う際に、正当な理由を具体的に説明できるかを確認するため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [disabilityTopic],
      relatedIssues: ["disability-unjust-treatment", "disability-reasonable-accommodation", "disability-discrimination-business-scope"],
      primarySourceIds: [disabilitySourceId],
      whatChanged: "新テーマ追加／サービス利用拒否・条件変更について、障害を理由とする不利な取扱いと正当な理由を具体的に検証する論点を追加した。"
    },
    {
      id: "article-mhlw-job-seeker-sexual-harassment-2026",
      title: "求職活動等をする方を守るために―求職者等に対するセクシュアルハラスメント対策の新ルール",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-01",
      collectedAt: "2026-09-14",
      url: "https://www.mhlw.go.jp/web_magazine/series/20260901.html",
      sourceType: "primary",
      sourceLabel: "一次資料・男女雇用機会均等法／求職者等セクハラ防止措置",
      status: "adopted",
      summary: "2026年10月1日から義務化される求職者等へのセクシュアルハラスメント防止措置を、対象となる採用・インターン・実習・OB・OG訪問等と、方針・ルール、相談窓口、事実確認、被害者・行為者対応、再発防止、プライバシー保護に分けて厚生労働省が施行直前に整理した一次資料。",
      whyImportant: ["施行日が2026年10月1日に迫る中、事業主が準備すべき措置を公式に一つのページで確認できる", "応募者だけでなくインターン、教育・看護実習、OB・OG訪問等まで対象が広いことを採用・実習フローへ反映できる", "面談時間・場所・実施体制・SNS等のルールを求職者にも周知する必要があり、単なる社内ハラスメント規程の追記では足りないことが分かる"],
      audience: ["企業法務", "人事・採用担当", "コンプライアンス担当", "インターン・実習受入部門", "ハラスメント相談窓口"],
      audienceReason: "2026年10月1日の施行前に、採用・インターン・実習・社員訪問の接点を含めた防止措置を実装するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [applicantTopic],
      relatedIssues: ["job-seeker-harassment-scope", "job-seeker-harassment-prevention-rules", "job-seeker-harassment-consultation-response"],
      primarySourceIds: [applicantSourceId],
      reformEventId: applicantReformId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [applicantSourceId],
      whatChanged: "新テーマ・法改正分類追加／2026年10月1日施行の求職者等セクシュアルハラスメント防止措置を、採用・実習・社員訪問・SNSを含む実務フローとして整理した。"
    }
  ];

  const currentSources = window.SOURCE_DATA || [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const nextSources = sources.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url)));
  if (nextSources.length) window.SOURCE_DATA = currentSources.concat(nextSources);

  const currentTopics = window.TOPIC_DATA || [];
  const topicSlugs = new Set(currentTopics.map((item) => item && item.slug).filter(Boolean));
  const nextTopics = topics.filter((item) => !topicSlugs.has(item.slug));
  if (nextTopics.length) window.TOPIC_DATA = currentTopics.concat(nextTopics);

  const currentReforms = window.REFORM_EVENT_DATA || [];
  if (!currentReforms.some((item) => item && item.id === reformEvent.id)) {
    window.REFORM_EVENT_DATA = currentReforms.concat(reformEvent);
  }

  const currentArticles = window.ARTICLE_DATA || [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const nextArticles = articles.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url)));
  if (nextArticles.length) window.ARTICLE_DATA = currentArticles.concat(nextArticles);
})();
