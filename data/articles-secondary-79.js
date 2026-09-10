(() => {
  const topicSlug = "environmental-claims-greenwashing";
  const advertisingTopicSlug = "advertising-display-control";
  const moeSourceId = "source-moe-environmental-representation-guideline-2026";
  const caaSourceId = "source-caa-environmental-label-survey-2026";

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
      id: moeSourceId,
      title: "環境表示ガイドライン（令和8年3月改定）",
      type: "guideline",
      typeLabel: "一次資料・環境省／環境表示ガイドライン",
      authority: "環境省",
      publishedAt: "2026-03-31",
      url: "https://www.env.go.jp/policy/hozen/green/ecolabel/guideline/",
      importance: "高",
      whyImportant: "主に自己宣言による環境表示を行う事業者・事業者団体を対象に、ISO/JIS Q 14021への準拠を基本として、望ましい環境情報提供と5つの基本項目を示す2026年改定の行政ガイドライン。景品表示法の対象となる表示に加え、CSRや企業姿勢のPRなど取引に直接関係しない環境表示も対象としている。",
      topics: [topicSlug]
    },
    {
      id: caaSourceId,
      title: "環境ラベルに関する実態調査報告書",
      type: "report",
      typeLabel: "一次資料・消費者庁／景品表示法実態調査",
      authority: "消費者庁",
      publishedAt: "2026-08-20",
      url: "https://www.caa.go.jp/policies/policy/representation/fair_labeling/survey/assets/representation_cms216_260820_02.pdf",
      importance: "最高",
      whyImportant: "環境ラベル139種類、事業者・団体等へのヒアリング、消費者1,000名調査を踏まえ、対象範囲、使用割合・削減率、実証データ、第三者認証、抽象的な『エコ』『グリーン』表示について、優良誤認表示との関係を具体化した消費者庁の現行整理。",
      topics: [topicSlug, advertisingTopicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueBySlug(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "環境表示・グリーンウォッシュ／景品表示法",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      summary: "商品・サービスの『エコ』『グリーン』『再生素材』『プラスチック削減』等の環境訴求について、景品表示法上の優良誤認リスクと環境省の環境表示ガイドラインを横断し、対象範囲、数値、実証データ、第三者認証、社内レビューを整理する。",
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      isNew: true,
      overview: [
        "環境表示は、商品・サービスの環境側面を説明文、シンボル、図表等で訴求する表示である。環境省は2026年3月、主に自己宣言による環境表示を対象とする環境表示ガイドラインを改定し、ISO/JIS Q 14021への準拠を基本に望ましい情報提供を整理した。",
        "消費者庁は2026年8月、環境ラベル139種類を調査し、景品表示法上の考え方を具体化した。環境配慮の対象範囲、原材料等の使用割合・削減率、効果を裏付ける実証データ、第三者認証の外観、抽象的な『エコ』『グリーン』表示が主要な確認点となる。",
        "このテーマでは、環境省のガイドラインという自主的な表示設計の基準と、消費者庁が示す現行景品表示法上の優良誤認リスクを区別しつつ、包装・EC・ウェブ広告等の環境訴求を根拠資料と一体で管理する実務を追う。"
      ],
      currentSummary: {
        facts: [
          "環境省は2026年3月31日、近年のグリーンウォッシュ対応を踏まえて環境表示ガイドラインを改定した。主に自己宣言による環境表示を行う事業者等を対象とし、ISO/JIS Q 14021への準拠を基本として5つの基本項目を示している。",
          "消費者庁は2026年8月20日、ウェブサイトやECサイト等から収集した環境ラベル139種類、事業者・事業者団体15者、第三者認証ラベル運営主体3機関へのヒアリング、一般消費者1,000名への調査を踏まえた実態調査報告書を公表した。",
          "消費者庁は、環境配慮の対象が商品本体・包装等・全体のどこか不明確で、実際の効果がごく一部にすぎない場合、商品全体又は主要部分が環境に配慮していると誤認され、優良誤認表示として問題となるおそれがあるとしている。",
          "原材料等の使用割合や石油由来プラスチック等の削減率が明確でなく実際にはごく一部にすぎない場合、100％又は大部分であると誤認されるおそれがある。環境配慮効果を訴求する表示には、表示内容・製造条件・使用条件・効果の程度等と適切に対応する実証データ等の裏付けが必要とされる。",
          "第三者認証ではないラベルを第三者認証のように見せる表示や、具体的な説明を伴わない『エコ』『グリーン』等の抽象的表示も、消費者が実態以上の環境効果を認識する場合には優良誤認表示となるおそれがある。"
        ],
        interpretations: [
          "環境省ガイドラインは景品表示法の対象外となり得るCSR・企業姿勢のPR等も含む広い環境表示を対象とする一方、消費者庁報告書は商品・サービスの広告表示について現行景品表示法上のリスクを具体化している。両者の法的性質と射程を分けて使う必要がある。",
          "環境訴求の審査では、文言が文字どおり虚偽かだけでなく、ラベルの位置、アイコン、対象範囲の見え方、割合・削減率、認証らしさを含む表示全体が一般消費者にどの程度の環境効果を想起させるかを確認する必要がある。",
          "『環境に配慮』という結論だけを承認するのではなく、調達・製造・使用・廃棄等のどの段階の、どの対象について、どの条件・基準・データから、どの程度の効果を言えるかまで根拠を対応付けると、表示変更時の再レビューにも耐えやすい。"
        ],
        implications: [
          "商品包装、EC商品ページ、ウェブ広告、店頭表示等にある環境ラベル・環境訴求を棚卸しし、商品本体・包装・原材料・製造工程等の対象範囲を表示上明確にする。",
          "再生素材・バイオマス素材の使用割合、プラスチック等の削減率など割合を訴求する場合は、実態が一部なら具体的な数値・範囲を示し、100％又は大部分と受け取られないか確認する。",
          "環境効果の根拠となる試験、算定、製造条件、使用条件、適合基準等を表示文言と紐付けて保管し、必要に応じてURLや二次元コード等で根拠情報へアクセスできるようにする。",
          "第三者認証、自社認証、独自基準を区別し、認証主体・基準を誤認させない。抽象的な『エコ』『グリーン』や自然モチーフだけに頼らず、具体的な環境配慮の内容を併記する。",
          "表示部門だけで完結させず、製造・調達・環境・法務等が、表示内容と根拠資料の対応を確認する承認・更新プロセスを設ける。"
        ],
        uncertain: [
          "消費者庁の実態調査報告書は新しい禁止類型を制定したものではなく、個別表示が景品表示法上の優良誤認表示に該当するかは、実際の表示全体と商品・サービスの実態を踏まえて判断される。",
          "環境ラベル・環境表示に関する今後の行政執行や裁判例の蓄積により、合理的根拠や表示方法に求められる実務水準が具体化する可能性がある。"
        ]
      },
      issues: [
        {
          id: "green-claims-scope-clarity",
          title: "環境配慮の対象範囲をどこまで明確にするか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "環境配慮が商品・サービスの一部にとどまる場合は、商品本体、包装、原材料、工程等のどこを対象とする表示かを明確かつ見やすく示し、全体又は主要部分が環境配慮されているとの誤認を避ける。",
          exception: "環境配慮の対象が商品・サービス全体又は主要部分である場合、対象範囲を明示しなかっただけで通常直ちに優良誤認になるとは限らないが、消費者が対象を認識できる表示とすることが望ましい。",
          uncertain: "個別のラベル配置や説明の大きさ・位置が十分かは、表示全体と消費者の受ける印象により判断される。",
          sourceIds: [caaSourceId]
        },
        {
          id: "green-claims-percentage-quantification",
          title: "使用割合・削減率をどの程度具体化するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "再生素材等の使用割合や石油由来プラスチック等の削減率が一部にとどまる場合は、具体的な割合・範囲等を示し、100％又は大部分であると受け取られない表示にする。",
          exception: "常に単一の確定値だけが必要という整理ではなく、消費者庁報告書は『○％未満』『□％～◇％』等の表示も例示している。",
          uncertain: "どの程度の数値表示が必要かは訴求内容と実際の割合・削減率、表示全体から生じる印象により異なる。",
          sourceIds: [caaSourceId]
        },
        {
          id: "green-claims-substantiation-evidence",
          title: "環境効果の実証データをどう表示と対応付けるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "環境配慮効果を訴求する場合は、対象商品の製造条件・実際の使用条件・効果や性能の程度等を含む表示内容と適切に対応した実証データ等を保有する。根拠情報へ消費者が容易にアクセスできる工夫も望ましい。",
          exception: "根拠資料を広告面にすべて掲載することまで一律に求める整理ではないが、表示の裏付けを保有し、適合基準を設定する場合は公表することが望ましいとされる。",
          uncertain: "合理的根拠として十分な試験・算定方法や証拠の水準は、具体的な表示内容・効果の性質により異なり得る。",
          sourceIds: [caaSourceId, moeSourceId]
        },
        {
          id: "green-claims-certification-abstract-labels",
          title: "第三者認証・『エコ』『グリーン』表示の誤認をどう防ぐか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "第三者認証でないラベルを認証ラベルのように見せず、自己認証・自社基準である場合はその性質を明確にする。『エコ』『グリーン』等の抽象的な表示には、具体的な環境配慮の内容や程度を分かりやすく併記する。",
          exception: "『エコ』『グリーン』等の語や自然モチーフ自体が一律に禁止されるわけではなく、表示全体から実態以上の環境効果を一般消費者に認識させるかが問題となる。",
          uncertain: "第三者認証らしさや抽象表示が与える印象は、名称、認定番号、デザイン、説明文、表示場所等の組合せで変わる。",
          sourceIds: [caaSourceId, moeSourceId]
        },
        {
          id: "green-claims-internal-review-process",
          title: "環境表示の社内レビューをどう設計するか",
          status: "interpreted",
          stage: "not_applicable",
          views: [],
          conclusion: "表示担当部門だけで判断せず、製造・調達・環境等が持つ根拠データと表示案を法務・コンプライアンスが対応付け、表示変更・基準変更時に再確認できる承認記録を残す。",
          exception: "必要な関与部門・承認レベルは商品、表示の重要性、データの取得元、第三者認証の有無等に応じて設計する。",
          uncertain: "どの統制が十分かは企業規模、表示件数、製品ライフサイクル、外部委託の有無等で異なる。",
          sourceIds: [caaSourceId, moeSourceId]
        }
      ],
      sourceIds: [moeSourceId, caaSourceId],
      practicalImpacts: [
        "商品包装・ラベル審査",
        "EC・ウェブ広告レビュー",
        "環境・サステナビリティ訴求",
        "表示根拠・実証データ管理",
        "第三者認証・自社ラベル管理",
        "調達・製造・法務の承認フロー"
      ]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-moe-environmental-representation-guideline-2026",
      title: "環境表示ガイドライン（令和8年3月改定）",
      publisher: "環境省",
      author: "環境省大臣官房環境経済課",
      publishedAt: "2026-03-31",
      collectedAt: "2026-09-11",
      url: "https://www.env.go.jp/policy/hozen/green/ecolabel/guideline/",
      sourceType: "primary",
      sourceLabel: "一次資料・環境省／環境表示ガイドライン",
      status: "adopted",
      summary: "主に自己宣言による環境表示を行う事業者・事業者団体を対象に、望ましい環境情報提供のあり方を整理した2026年改定ガイドライン。ISO/JIS Q 14021への準拠を基本に5つの基本項目を示し、景品表示法の対象となる商品・サービス表示だけでなく、CSRや企業姿勢のPR等の環境表示も射程に含める。",
      whyImportant: [
        "環境表示を作る側が参照する現行の行政ガイドラインとして、自己宣言型の環境主張をどのように設計・根拠化するか確認できる",
        "景品表示法の取引表示より広い環境表示を対象としており、サステナビリティ広報や企業姿勢のPRまで一貫した表示原則を作る基礎になる",
        "消費者庁の景品表示法上の整理と併読することで、自主的な望ましい表示と法執行リスクを分けて管理できる"
      ],
      audience: ["企業法務・広告審査", "サステナビリティ・環境部門", "マーケティング・広報"],
      audienceReason: "自己宣言による環境訴求の設計原則と、商品広告以外も含む環境情報提供の範囲を確認するため。",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "green-claims-substantiation-evidence",
        "green-claims-certification-abstract-labels",
        "green-claims-internal-review-process"
      ],
      primarySourceIds: [moeSourceId],
      whatChanged: "新規テーマ追加／2026年改定の環境表示ガイドラインを、グリーンウォッシュ防止と環境表示設計の基礎資料として整理した。"
    },
    {
      id: "article-caa-environmental-label-survey-2026",
      title: "環境ラベルに関する実態調査報告書",
      publisher: "消費者庁",
      author: "消費者庁表示対策課",
      publishedAt: "2026-08-20",
      collectedAt: "2026-09-11",
      url: "https://www.caa.go.jp/policies/policy/representation/fair_labeling/survey/assets/representation_cms216_260820_02.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・消費者庁／環境ラベル実態調査・景品表示法上の考え方",
      status: "adopted",
      summary: "環境ラベル139種類の実態、事業者等へのヒアリング、消費者1,000名調査を踏まえ、対象範囲が不明確な表示、原材料等の使用割合・削減率、環境効果の実証データ、第三者認証らしい表示、『エコ』『グリーン』等の抽象的表示について、優良誤認表示との関係を具体的に整理した消費者庁報告書。",
      whyImportant: [
        "一般的なグリーンウォッシュ論ではなく、現在の景品表示法でどの環境ラベルが優良誤認リスクを持つかを行政の具体例から確認できる",
        "包装だけが環境配慮されている場合など、訴求対象の範囲とラベルの配置・見え方を広告審査の論点にできる",
        "使用割合・削減率、実証データ、認証主体、抽象表現を、表示根拠管理のチェック項目として直接使える"
      ],
      audience: ["企業法務・広告審査", "マーケティング・ブランド担当", "サステナビリティ・環境部門"],
      audienceReason: "環境ラベル・環境訴求を現行景品表示法の観点からレビューし、根拠資料と表示内容の対応を点検するため。",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug, advertisingTopicSlug],
      relatedIssues: [
        "green-claims-scope-clarity",
        "green-claims-percentage-quantification",
        "green-claims-substantiation-evidence",
        "green-claims-certification-abstract-labels",
        "green-claims-internal-review-process"
      ],
      primarySourceIds: [caaSourceId],
      whatChanged: "新規テーマ追加／環境ラベルの対象範囲・割合・根拠・認証・抽象表示を、現行景品表示法上の優良誤認リスクとして具体化した。"
    },
    {
      id: "article-morihamada-environmental-label-greenwashing-2026",
      title: "『環境ラベルに関する実態調査報告書』が示すグリーンウォッシュ対応を踏まえた景品表示法上の留意点",
      publisher: "森・濱田松本法律事務所",
      author: "川端 健太・嶋村 直登・一井 梨緒",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-11",
      url: "https://org-www.morihamada.com/ja/insights/newsletters/145456",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター・環境表示／景品表示法",
      status: "adopted",
      summary: "消費者庁の環境ラベル実態調査を基礎に、対象範囲、使用割合・削減率、実証データ、第三者認証、抽象的な環境訴求を景品表示法上のリスクとして整理し、包装・ウェブ表示の再点検、根拠資料の保管、製造・調達・環境・法務をまたぐ確認プロセスまで実務へ落とした解説。",
      whyImportant: [
        "消費者庁報告書の5つの論点を、企業が既存の包装・ウェブ表示を再点検するチェックリストへ変換している",
        "不実証広告規制との接続を示し、表示内容に対応する実証データを事前に保管する必要性を広告審査の運用へ落とし込んでいる",
        "表示部門だけでなく製造・調達・環境部門と法務をつなぐ確認プロセスを提案しており、一次資料だけでは薄い内部統制上の示唆がある"
      ],
      audience: ["企業法務・広告審査", "サステナビリティ・環境部門", "マーケティング・製造・調達"],
      audienceReason: "消費者庁報告書を自社の表示棚卸し、根拠資料管理、部門横断の承認プロセスへ具体的に落とし込むため。",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug, advertisingTopicSlug],
      relatedIssues: [
        "green-claims-scope-clarity",
        "green-claims-percentage-quantification",
        "green-claims-substantiation-evidence",
        "green-claims-certification-abstract-labels",
        "green-claims-internal-review-process"
      ],
      primarySourceIds: [caaSourceId, moeSourceId],
      whatChanged: "実務解説追加／環境ラベルの景品表示法リスクを、表示棚卸し・根拠資料管理・部門横断レビューの実務へ具体化した。"
    }
  ]);
})();
