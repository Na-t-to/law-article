(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueBySlug = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.slug));
    return (target || []).concat(additions.filter((item) => !existing.has(item.slug)));
  };

  const topicSlug = "jobseeker-sexual-harassment-2026";
  const amendmentSourceId = "source-mhlw-labor-policy-amendment-2025-jobseeker-harassment";
  const guidelineSourceId = "source-mhlw-jobseeker-sexual-harassment-guideline-2026";
  const qaSourceId = "source-mhlw-harassment-interpretation-qa-2026";
  const reformEventId = "jobseeker-sexual-harassment-obligation-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: amendmentSourceId,
      title: "令和7年労働施策総合推進法等の一部改正について",
      type: "law",
      typeLabel: "改正法・制度概要",
      authority: "厚生労働省",
      publishedAt: "2025-06-11",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyoukintou/zaitaku/index_00003.html",
      importance: "最高",
      whyImportant: "改正男女雇用機会均等法による求職者等へのセクシュアルハラスメント防止措置義務化と、2026年10月1日の施行時期を確認する公式の基準点。",
      topics: [topicSlug]
    },
    {
      id: guidelineSourceId,
      title: "事業主が求職活動等における性的な言動に起因する問題に関して雇用管理上講ずべき措置等についての指針（令和8年厚生労働省告示第52号）",
      type: "guideline",
      typeLabel: "求職者等セクシュアルハラスメント防止指針",
      authority: "厚生労働省",
      publishedAt: "2026-02-26",
      url: "https://www.mhlw.go.jp/content/11900000/001662589.pdf",
      importance: "最高",
      whyImportant: "対象となる求職者等・求職活動等、性的な言動、事業主が講ずべき方針・面談ルール・相談・事後対応・プライバシー保護等を具体化した最終指針。",
      topics: [topicSlug]
    },
    {
      id: qaSourceId,
      title: "ハラスメント防止措置義務規定等における解釈事項について",
      type: "guideline",
      typeLabel: "行政Q&A・解釈事項",
      authority: "厚生労働省",
      publishedAt: "2026-04-24",
      url: "https://www.mhlw.go.jp/content/11900000/001695619.pdf",
      importance: "最高",
      whyImportant: "内定者、インターンシップ、OB・OG訪問、懇親の場、役員・顧客等、面談ルール、相談窓口の設計・周知など、施行実務で迷いやすい境界をQ&Aで具体化する。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueBySlug(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "求職者等セクシュアルハラスメント・採用活動",
      categories: ["労務", "危機管理・コンプライアンス"],
      summary: "2026年10月1日から義務化される求職者等に対するセクシュアルハラスメント防止措置について、対象となる採用・実習場面、面談・SNSルール、相談窓口、事実確認・再発防止までを整理する。",
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      isNew: true,
      overview: [
        "2026年10月1日から、改正男女雇用機会均等法により、求職者等の求職活動等におけるセクシュアルハラスメントを防止するための雇用管理上の措置が事業主の義務となる。",
        "対象は求人への応募者だけではなく、就職説明会、インターンシップ、OB・OG訪問、教育実習・看護実習等の参加者を含み得る。SNS等のオンライン上のやり取りや、実質的に採用活動等の延長といえる懇親の場も対象になり得る。",
        "従業員向けの既存セクハラ規程をそのまま流用するだけでは足りず、面談時間・場所、複数人対応、利用するSNS等の採用接点ルールと、求職者から実質的に利用できる相談窓口・周知方法まで設計する必要がある。"
      ],
      currentSummary: {
        facts: [
          "求職者等へのセクシュアルハラスメント防止措置義務は2026年10月1日から施行される。",
          "求職者等には、当該事業主への求職者のほか、事業主が行う労働者の採用に資する活動への参加者や、教育実習・看護実習等の実習を受ける者が含まれる。",
          "求職活動等には採用面接、就職説明会、OB・OG訪問、インターンシップ、教育実習・看護実習等が含まれ、SNS等のオンラインを介したものや、一定の懇親の場も含まれ得る。",
          "事業主には、禁止方針と厳正対処方針の周知、面談等のルール明確化、求職者等が利用できる相談体制、迅速な事実確認・被害者配慮・行為者措置・再発防止、プライバシー保護等が求められる。"
        ],
        interpretations: [
          "採用活動のハラスメント対策は、人事部の研修だけで完結させず、現場社員が参加するOB・OG訪問、リクルーター面談、インターンシップ、懇親会、オンライン連絡まで採用プロセスとして統制する必要がある。",
          "求職者が採否を握る人事担当者への相談をためらう可能性を踏まえ、相談窓口の担当者・受付経路・採用判断からの独立性を検討することが実効性の確保につながる。",
          "内定者については労働契約成立の有無によって既存の職場セクハラ防止指針と求職者等セクハラ防止指針の適用関係が変わり得るため、一律にどちらかだけで処理しない。"
        ],
        implications: [
          "採用面接・説明会・インターン・OB・OG訪問・内定者イベントごとに、時間、場所、実施人数、連絡手段、飲食を伴う接点のルールを定める。",
          "求人ページ、採用サイト、募集資料等で求職者等が実際に確認できる相談窓口を周知し、人事担当者以外や外部窓口を含む選択肢を検討する。",
          "就業規則・服務規律・懲戒規程、採用マニュアル、リクルーター研修、相談対応マニュアルを相互に整合させる。",
          "相談後は採否判断から切り離して事実確認、被害者への配慮、行為者への対応、再発防止、プライバシー保護を実行できるエスカレーションを用意する。"
        ],
        uncertain: [
          "懇親会や私的な接点が求職活動等の延長に当たるかは、職務・採用活動との関連性、当事者の関係、参加者、参加や対応の任意性などを踏まえて個別に判断する。",
          "役員・事業主自身や取引先等の第三者による性的な言動については、法定義務の直接対象と望ましい取組を区別しつつ、指針・Q&Aを踏まえて必要な対応を設計する。"
        ]
      },
      issues: [
        {
          id: "jobseeker-harassment-scope-2026",
          title: "誰が『求職者等』で、どの場面が『求職活動等』に当たるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "求人応募者に加え、採用に資する就職説明会・インターンシップ・OB・OG訪問の参加者や教育実習・看護実習等の実習生を含み得る。場所を問わず、オンラインや実質的に採用活動等の延長といえる懇親の場も対象になり得る。",
          exception: "専ら教育目的の社会科見学や企業講演等の参加者は、採用に資する活動への参加者として当然に含まれるものではない。内定者は労働契約成立の有無で適用関係を確認する。",
          uncertain: "勤務時間外の飲食・懇親等が求職活動等に当たるかは、採用活動との関連性、参加者、任意性等を総合して判断する。",
          sourceIds: [guidelineSourceId, qaSourceId]
        },
        {
          id: "jobseeker-harassment-mandatory-measures-2026",
          title: "事業主は2026年10月1日までに何を整備する必要があるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "禁止方針・厳正対処方針の明確化と周知、求職活動等のルール明確化、相談体制、迅速な事実確認と被害者・行為者への対応、再発防止、プライバシー保護等を一連の雇用管理上の措置として整備する。",
          exception: "大学等との連携や、顧客・取引先等による類似行為への対応などには『望ましい取組』として位置付けられるものもあり、法定義務と区別する。",
          uncertain: "各社の採用形態に応じた具体的な運用粒度は、採用接点と相談フローを踏まえて設計する。",
          sourceIds: [amendmentSourceId, guidelineSourceId, qaSourceId]
        },
        {
          id: "jobseeker-harassment-recruiting-rules-2026",
          title: "面談・OB訪問・SNS等の採用接点ルールをどう設計するか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "面談時間・場所、複数人での対応等の実施体制、求職者等とのやり取りに用いるSNS等をあらかじめルール化し、労働者への研修と求職者等への周知を組み合わせる。",
          exception: "指針・Q&Aの例示をすべて一律の禁止事項として扱うのではなく、自社の採用方法に応じて実効的なルールへ具体化する。",
          uncertain: "オンライン採用、社員紹介、非公式な面談等の新しい接点は、採用活動との関連性を確認しながら運用を更新する必要がある。",
          sourceIds: [guidelineSourceId, qaSourceId]
        },
        {
          id: "jobseeker-harassment-consultation-2026",
          title: "求職者が実際に利用できる相談窓口をどう設計・周知するか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "担当者・相談制度・外部委託等により実質的に対応可能な窓口を設け、ホームページやパンフレット等で求職者等へ連絡先を周知し、事実確認・被害者配慮・行為者対応へ接続できる体制にする。",
          exception: "窓口担当者が必ず人事以外である必要はないが、求職者が採用担当の人事への相談をためらう可能性を踏まえた設計が考えられる。",
          uncertain: "窓口の独立性、匿名性、採用選考情報とのアクセス分離は、企業規模・採用体制に応じて具体化する。",
          sourceIds: [guidelineSourceId, qaSourceId]
        }
      ],
      sourceIds: [amendmentSourceId, guidelineSourceId, qaSourceId],
      practicalImpacts: [
        "採用方針・ハラスメント規程",
        "面接・インターン・OB・OG訪問ルール",
        "採用担当者・リクルーター研修",
        "求職者向け相談窓口・採用サイト",
        "相談・事実確認・懲戒・再発防止フロー",
        "SNS・オンライン採用の連絡ルール"
      ]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "求職者等セクシュアルハラスメント防止措置義務化・2026年施行",
      eventType: "law_amendment",
      lawId: "equal-employment-opportunity-act",
      lawLabel: "男女雇用機会均等法",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-10-01"],
      effectiveDateSourceIds: [amendmentSourceId],
      matchSourceIds: [amendmentSourceId, guidelineSourceId, qaSourceId],
      sourceIds: [amendmentSourceId, guidelineSourceId, qaSourceId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-tokio-dr-jobseeker-sexual-harassment-2026",
      title: "求職者等に対するセクシュアルハラスメントの防止措置が義務化されます",
      publisher: "東京海上ディーアール株式会社",
      author: "飯野 晶",
      publishedAt: "2026-05-22",
      collectedAt: "2026-09-10",
      url: "https://www.tokio-dr.jp/publication/column/258.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・人事労務／採用ハラスメント",
      status: "adopted",
      summary: "求職者等セクハラ防止指針を基礎に、対象となる求職者等・求職活動等と、事業主が講ずべき11項目の措置を整理する。面談時間・場所・実施体制・SNSの指定、求職者向け相談窓口の周知など、従来の従業員向けハラスメント対策だけでは不足する採用場面固有の対応を具体化している。",
      whyImportant: [
        "求職者等には応募者だけでなくインターン、OB・OG訪問、教育・看護実習等の参加者が含まれ得ることを、採用実務の接点ごとに確認できる",
        "面談ルールと相談窓口の求職者向け周知という、既存の社内セクハラ規程をそのまま流用しただけでは抜けやすい義務を一覧できる",
        "法定義務と大学等との連携・第三者による類似行為への対応などの望ましい取組を分けて整理できる"
      ],
      audience: ["企業の人事・採用担当", "企業法務・コンプライアンス担当", "インターン・リクルーター制度の運営担当"],
      audienceReason: "2026年10月1日の施行前に、既存のハラスメント規程と採用現場の運用を照合し、求職者向けのルール・相談導線まで不足なく整備するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["jobseeker-harassment-scope-2026", "jobseeker-harassment-mandatory-measures-2026", "jobseeker-harassment-recruiting-rules-2026", "jobseeker-harassment-consultation-2026"],
      primarySourceIds: [amendmentSourceId, guidelineSourceId, qaSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amendmentSourceId, guidelineSourceId],
      whatChanged: "新規テーマ追加／2026年10月1日施行の求職者等セクシュアルハラスメント防止措置を、対象範囲、採用接点ルール、相談・事後対応まで独立して追える棚を追加した。"
    },
    {
      id: "article-fecc-jobseeker-sexual-harassment-practice-2026",
      title: "【社労士が解説】2026年10月法改正で『求職者等』も保護対象に。就活セクハラのリスクと、企業が今すぐ見直すべき採用実務のポイント",
      publisher: "福岡市雇用労働相談センター（FECC）",
      author: "野田 亜以子",
      publishedAt: "2026-08-12",
      collectedAt: "2026-09-10",
      url: "https://fukuoka-ecc.mhlw.go.jp/academia/professionalcolumn/column_260810/",
      sourceType: "secondary",
      sourceLabel: "専門家解説・採用実務／就活セクハラ",
      status: "adopted",
      summary: "2026年10月の義務化を採用実務へ落とし、面接質問、個人SNS・深夜連絡、OB・OG訪問や1対1の飲食等のリスク場面と、質問リスト、会社公式ツール、複数名対応、リクルーター研修、求職者向け相談窓口等の点検項目を示す。厚労省指針の抽象的な措置を採用プロセスのチェック項目へ変換する材料になる。",
      whyImportant: [
        "面接、オンライン連絡、OB・OG訪問など、ハラスメントが人事部門の目の届かない接点で起こり得ることを採用フロー単位で点検できる",
        "面接質問リスト、会社公式の連絡手段、複数名対応、リクルーター研修など、指針を予防統制へ落とす実装例が具体的",
        "相談窓口を置くだけでなく、事実確認・被害者配慮・行為者対応まで機能する運用を設計する必要性が分かる"
      ],
      audience: ["人事・採用責任者", "企業法務・労務担当", "採用面接官・リクルーター制度の運営担当"],
      audienceReason: "法令・指針のチェックだけでは見落としやすい採用接点を洗い出し、施行前の研修・ルール・相談体制の具体的な点検表へ落とすため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["jobseeker-harassment-scope-2026", "jobseeker-harassment-recruiting-rules-2026", "jobseeker-harassment-consultation-2026"],
      primarySourceIds: [amendmentSourceId, guidelineSourceId, qaSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amendmentSourceId, guidelineSourceId],
      whatChanged: "新規テーマ追加／採用面接・SNS・OB・OG訪問等の具体的なリスク場面と予防統制の実装例を補完した。"
    }
  ]);
})();
