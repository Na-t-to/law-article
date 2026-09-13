(() => {
  const topicSlug = "human-genome-editing-embryo-regulation-2026";
  const reformEventId = "human-genome-editing-embryo-act-2026";
  const sourceOverview = "source-mhlw-human-genome-editing-embryo-act-overview-2026";
  const sourceDraft = "source-mhlw-human-genome-editing-embryo-rules-draft-2026";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceOverview,
      title: "ヒトゲノム編集胚等の取扱いの規制に関する法律の公布と遺伝子治療等臨床研究に関する指針の取扱いについて",
      type: "official_material",
      typeLabel: "一次資料・厚生労働省／新法概要・指針再編",
      authority: "厚生労働省",
      publishedAt: "2026-09-09",
      url: "https://www.mhlw.go.jp/content/11201250/001747043.pdf",
      importance: "最高",
      whyImportant: "令和8年法律第70号の規制構造、2027年7月24日の施行、取扱計画書の届出・60日待機、記録保存・報告徴収・立入検査・改善命令等を公式に整理し、遺伝子治療等臨床研究指針の再編方針まで確認できる。",
      topics: [topicSlug]
    },
    {
      id: sourceDraft,
      title: "ヒトゲノム編集胚等の取扱いの規制に関する法律に基づく省令及び指針（案）について",
      type: "meeting_material",
      typeLabel: "一次資料・厚生労働省等／省令・指針案",
      authority: "厚生労働省・文部科学省・こども家庭庁",
      publishedAt: "2026-09-02",
      url: "https://www.mhlw.go.jp/content/10601000/001744346.pdf",
      importance: "最高",
      whyImportant: "新法の施行に向け、届出様式を省令、研究用途・IC・譲受け／輸入・管理等を指針で具体化する案を示し、現行指針の統合・廃止予定と法人を含む取扱主体の考え方を確認できる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "ヒトゲノム編集胚等取扱規制法・研究実務",
      categories: ["危機管理・コンプライアンス"],
      summary: "2026年7月24日に公布されたヒトゲノム編集胚等取扱規制法について、胎内移植禁止、取扱計画書の届出、60日待機、記録保存・立入検査、2027年7月24日施行に向けた省令・指針整備を研究機関・バイオ企業の実務目線で整理する。",
      lastUpdated: "2026-09-13",
      lastVerified: "2026-09-13",
      isNew: true,
      overview: [
        "ヒトゲノム編集胚等の取扱いの規制に関する法律（令和8年法律第70号）は、ゲノム編集技術等が用いられたヒト胚・ヒト生殖細胞等の人又は動物の胎内への移植を原則禁止し、違反者への罰則を設ける新法である。主要部分は2027年7月24日に施行される。",
        "胎内移植禁止だけでなく、ヒトゲノム編集胚等の作成、譲受け・輸入、使用、管理を主務大臣の指針に従わせ、取扱計画書の事前届出、原則60日の待機、取扱記録の作成・保存、報告徴収・立入検査・改善措置命令等を組み合わせて研究段階の取扱いも規制する。",
        "施行準備では、従来複数の倫理指針に分散していたヒト胚・生殖細胞研究の規律を新法に基づく指針へ組み替える作業が進んでいる。研究機関・バイオ企業は、対象技術・試料、法人を含む取扱主体、IC、輸入・譲受け、保管・廃棄、届出時期を研究計画段階から確認する必要がある。"
      ],
      currentSummary: {
        facts: [
          "ヒトゲノム編集胚等の取扱いの規制に関する法律は2026年7月24日に公布され、主要部分は2027年7月24日に施行される。",
          "ヒトゲノム編集胚等を人又は動物の胎内へ移植することは原則禁止され、胎内移植禁止や届出義務等への違反には罰則が設けられている。",
          "ヒトゲノム編集胚等の作成、譲受け・輸入、使用等を行う者は取扱計画書をあらかじめ届け出る必要があり、原則として受理後60日を経過するまで作成等を開始できない。",
          "主務大臣は指針不適合等に対して取扱中止・計画変更等を命じることができ、取扱開始後も報告徴収・立入検査・改善措置命令の対象となる。",
          "2026年9月2日時点の省令・指針案では、届出様式を省令に置き、用途、作成、提供者のIC、譲受け・輸入、使用、管理等の要件を新法に基づく指針で具体化する方向が示されている。"
        ],
        interpretations: [
          "新法は『ゲノム編集ベビーの禁止』だけの規制ではなく、研究段階の作成・入手・輸入・使用・保有まで事前届出と指針適合性審査の対象にするため、研究開始前の法務・倫理審査・研究管理プロセスを一体で設計する必要がある。",
          "取扱主体には自然人だけでなく法人も想定されているため、研究責任者個人だけでなく、企業・大学・医療法人等の機関としての管理体制、権限、記録保存、行政対応の責任分担を明確にする必要がある。",
          "現行の複数指針から新法に基づく指針への再編は、既存SOPや倫理審査書式の単純な名称変更ではなく、ゲノム編集を用いる研究と用いない研究の適用法令・指針を切り分け直す作業になる。"
        ],
        implications: [
          "ヒト胚・ヒト生殖細胞、幹細胞由来生殖細胞等を扱う研究を棚卸しし、ゲノム編集技術等の利用有無、作成・譲受け・輸入・使用・管理の各行為が新法の対象になるかを確認する。",
          "2027年7月24日の施行に向け、取扱計画書の作成・届出から研究開始まで原則60日を要する前提で、研究開始時期、倫理審査、契約・試料移転、輸入手続を逆算する。",
          "提供者IC、試料・胚の由来確認、譲受け・輸入時の適法性確認、保管・廃棄・記録保存、行政照会・立入検査対応を研究SOPと責任分担表へ反映する。",
          "省令・指針はなお案段階であるため、最終化後に届出様式、必要記載事項、適用技術の範囲、動物胎内移植の例外、経過措置を再確認する。"
        ],
        uncertain: [
          "2026年9月時点では新法に基づく省令・指針は最終化前であり、ゲノム編集技術等の具体的範囲、届出様式、動物胎内移植禁止の例外要件、既存研究の経過措置等は今後の確定文書を確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "genome-embryo-implantation-prohibition",
          title: "胎内移植禁止の対象と罰則をどう捉えるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "ゲノム編集技術等が用いられたヒト胚・ヒト生殖細胞等を人又は動物の胎内へ移植することは原則禁止され、違反は罰則の対象となる。動物胎内移植については、胎盤形成を開始する可能性がないものとして政令で定める要件に該当する場合の例外が予定されている。",
          exception: "ヒトに関するクローン技術等の規制に関する法律上の特定胚は定義上別枠であり、動物胎内移植の例外要件も最終的な政令を確認する必要がある。",
          uncertain: "動物胎内移植の例外要件や政令で定めるゲノム編集技術等の具体的範囲は施行準備中である。",
          sourceIds: [sourceOverview, sourceDraft]
        },
        {
          id: "genome-embryo-plan-notification-waiting",
          title: "取扱計画書の届出と60日待機を研究計画へどう組み込むか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "ヒトゲノム編集胚等の作成、譲受け・輸入、使用等を行う者は取扱計画書を事前に届け出て、原則として受理後60日が経過するまで対象行為を開始できない。主務大臣が相当と認める場合には期間短縮があり得る。",
          exception: "届出事項の内容や短縮判断、施行時点で現に研究等を行う者への経過措置は最終的な省令・指針等を確認する。",
          uncertain: "届出様式・添付資料・行政との事前相談実務は最終化後の運用を確認する必要がある。",
          sourceIds: [sourceOverview, sourceDraft]
        },
        {
          id: "genome-embryo-guideline-research-governance",
          title: "新法指針と既存研究ガバナンスをどう接続するか",
          status: "pending",
          stage: "under_revision",
          views: [],
          conclusion: "新法に基づく指針では、用途、作成、提供者IC、譲受け・輸入、使用、管理等を具体化し、法人を含む取扱主体を前提に管理体制・倫理審査・研究手続を整備する方向で検討が進んでいる。",
          exception: "ゲノム編集技術等を用いないヒト胚研究は新法指針の対象外となり、別の研究指針側で整理される予定である。",
          uncertain: "省令・指針案は確定前であり、適用範囲・IC・管理・記録・経過措置等は最終版で再確認が必要である。",
          sourceIds: [sourceDraft]
        },
        {
          id: "genome-embryo-inspection-records-enforcement",
          title: "記録保存・報告徴収・立入検査へどう備えるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "研究者等には個々の研究での取扱記録の作成・保存が求められ、国は取扱計画や実態の指針適合性を確認するため報告徴収・立入検査を行い、必要に応じて中止・方法改善等を命じることができる。",
          exception: "保存事項・保存期間・具体的な検査対応は省令・指針等の確定内容による。",
          uncertain: "施行後の検査頻度、事前相談、是正措置の運用は実例の蓄積を待つ必要がある。",
          sourceIds: [sourceOverview]
        }
      ],
      sourceIds: [sourceOverview, sourceDraft],
      practicalImpacts: ["研究開発ガバナンス", "生命倫理・倫理審査", "取扱計画の行政届出", "試料・胚の譲受け・輸入", "IC・記録保存", "立入検査・行政対応"]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "ヒトゲノム編集胚等取扱規制法・2026年制定",
      eventType: "new_law",
      lawId: "human-genome-editing-embryo-act",
      lawLabel: "ヒトゲノム編集胚等の取扱いの規制に関する法律",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2027-07-24"],
      effectiveDateSourceIds: [sourceOverview],
      matchSourceIds: [sourceOverview, sourceDraft],
      sourceIds: [sourceOverview, sourceDraft]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-mhlw-human-genome-editing-embryo-rules-draft-2026",
      title: "ヒトゲノム編集胚等の取扱いの規制に関する法律に基づく省令及び指針（案）について",
      publisher: "厚生労働省・文部科学省・こども家庭庁",
      author: "ゲノム編集技術等を用いたヒト受精胚等の取扱い等に関する合同会議",
      publishedAt: "2026-09-02",
      collectedAt: "2026-09-13",
      url: "https://www.mhlw.go.jp/content/10601000/001744346.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・ヒトゲノム編集胚等取扱規制法／省令・指針案",
      status: "adopted",
      summary: "2027年7月24日の新法施行に向け、届出様式を省令、研究用途・作成・IC・譲受け／輸入・使用・管理等を指針で具体化する案を示した合同会議資料。従来の複数指針から新法指針へ規律を組み替え、法人を含む取扱主体、ゲノム編集を用いないヒト胚研究との切り分けも整理する。",
      whyImportant: [
        "法律本文だけでは未確定だった研究実務の具体化方向を、IC・譲受け／輸入・管理・届出様式まで確認できる",
        "研究主体として自然人だけでなく法人を想定し、企業・大学等の機関レベルのガバナンス設計が必要になることが明確",
        "現行指針の統合・廃止予定と新法指針の適用範囲を並べて確認でき、施行前のSOP・倫理審査書式改定に使える"
      ],
      audience: ["企業法務", "バイオ・製薬R&D", "研究倫理・倫理審査", "コンプライアンス"],
      audienceReason: "ヒト胚・生殖細胞やゲノム編集を扱う研究について、施行前に届出・IC・試料移転・管理手順を再設計するため。",
      categories: ["危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["genome-embryo-plan-notification-waiting", "genome-embryo-guideline-research-governance"],
      primarySourceIds: [sourceDraft, sourceOverview],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceOverview],
      whatChanged: "新法自体は公布・施行待ちのまま、省令・指針案により届出、IC、譲受け・輸入、管理、既存指針再編の具体化方向が示された。"
    },
    {
      id: "article-mhlw-human-genome-editing-embryo-act-overview-2026",
      title: "ヒトゲノム編集胚等の取扱いの規制に関する法律の公布と遺伝子治療等臨床研究に関する指針の取扱いについて",
      publisher: "厚生労働省",
      author: "厚生労働省大臣官房厚生科学課",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-13",
      url: "https://www.mhlw.go.jp/content/11201250/001747043.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・ヒトゲノム編集胚等取扱規制法／公布・施行準備",
      status: "adopted",
      summary: "2026年7月24日に公布された令和8年法律第70号について、胎内移植の原則禁止、取扱計画書の事前届出、原則60日の待機、取扱記録の作成・保存、報告徴収・立入検査・改善措置命令と、2027年7月24日の施行時期を整理した厚生労働省資料。遺伝子治療等臨床研究指針の廃止検討も示す。",
      whyImportant: [
        "新法を『胎内移植禁止』だけでなく、研究段階の作成・譲受け・輸入・使用・管理を規制する仕組みとして俯瞰できる",
        "取扱計画書の届出から原則60日間は作成等を開始できないため、研究スケジュールと行政手続の設計に直結する",
        "報告徴収・立入検査・改善措置命令と罰則まで確認でき、研究機関・バイオ企業の記録保存・行政対応を制度全体から設計できる"
      ],
      audience: ["企業法務", "バイオ・製薬R&D", "研究倫理・倫理審査", "コンプライアンス"],
      audienceReason: "2027年施行までに対象研究の棚卸し、届出、記録保存、行政対応を研究ガバナンスへ組み込むため。",
      categories: ["危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["genome-embryo-implantation-prohibition", "genome-embryo-plan-notification-waiting", "genome-embryo-inspection-records-enforcement"],
      primarySourceIds: [sourceOverview],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceOverview],
      whatChanged: "2026年7月24日に新法が公布され、2027年7月24日施行に向けて胎内移植禁止と研究段階の届出・記録・行政監督が法定化された。"
    }
  ]);
})();