(() => {
  const verifiedAt = "2026-09-17";
  const ipArticle = "article-tmi-ip-transaction-guideline-20260515";
  const existingIp = (window.TOPIC_DATA || []).find((item) => item?.slug === "ip-knowhow-data-transactions");
  if (existingIp) {
    existingIp.lastVerified = verifiedAt;
    existingIp.referenceArticleIds = existingIp.referenceArticleIds || [];
    if (!existingIp.referenceArticleIds.includes(ipArticle)) existingIp.referenceArticleIds.push(ipArticle);
  }

  const topic = {
    slug: "social-insurance-short-time-workers-2026",
    title: "社会保険適用拡大／106万円の壁撤廃・保険料調整制度",
    categories: ["労務", "危機管理・コンプライアンス"],
    summary: "2025年年金制度改正法による短時間労働者の社会保険適用拡大について、2026年10月の月額8.8万円要件撤廃、企業規模要件の段階的撤廃、個人事業所の適用拡大、保険料調整制度を人事労務実務から追う。",
    lastUpdated: verifiedAt,
    lastVerified: verifiedAt,
    isNew: true,
    overview: [
      "2025年6月に成立・公布された年金制度改正法は、短時間労働者の健康保険・厚生年金保険について、月額8.8万円以上という賃金要件と企業規模要件を段階的に撤廃し、被用者保険の適用を広げます。",
      "まず2026年10月1日に賃金要件が撤廃されます。企業規模要件は2027年10月以降、36人以上、21人以上、11人以上へ段階的に広がり、2035年10月に撤廃されます。常時5人以上を使用する個人事業所の業種要件も2029年10月に撤廃されます。",
      "同時に、新たに加入対象となる短時間労働者の就業調整を抑えるため、一定の事業所が事業主負担を一時的に増やして本人負担を軽減できる保険料調整制度が2026年10月から始まります。人事・給与・従業員説明を一体で準備する必要があります。"
    ],
    currentSummary: {
      facts: [
        "社会経済の変化を踏まえた年金制度の機能強化のための国民年金法等の一部を改正する等の法律（令和7年法律第74号）は2025年6月13日に成立し、同月20日に公布された。",
        "短時間労働者の社会保険加入要件のうち、所定内賃金が月額8.8万円以上であることを求める賃金要件は2026年10月1日に撤廃される。最低賃金法7条の減額特例対象者については、下位法令で例外的な取扱いが整備された。",
        "企業規模要件は、従業員36～50人の企業が2027年10月、21～35人が2029年10月、11～20人が2032年10月、10人以下が2035年10月から短時間労働者の適用拡大の対象となる。",
        "常時5人以上を使用する個人事業所は、2029年10月から原則として業種を問わず適用対象となる。ただし、施行時点で既に存在する従来非適用業種の事業所は当分の間対象外となる。",
        "保険料調整制度は2026年10月から開始し、対象事業所で新たに加入対象となる標準報酬月額12.6万円以下の短時間労働者について、事業主が保険料を追加負担することで本人負担を通算3年間軽減できる。"
      ],
      interpretations: [
        "『106万円の壁』の撤廃は月額8.8万円の賃金要件をなくすものであり、短時間労働者の週20時間以上、学生除外、企業規模等の他の要件や、被扶養者認定で問題となるいわゆる130万円基準まで同時になくすものではない。",
        "企業規模要件の段階的撤廃は、単に対象人数が増えるだけでなく、加入判定、資格取得届、給与控除、本人説明、シフト設計、採用条件に影響するため、対象年の直前ではなく従業員数の推移を見ながら準備する必要がある。",
        "保険料調整制度は事業主の申出と追加負担を伴う時限措置であり、対象となる事業所・被保険者・利用期間を通常の社会保険加入判定と分けて管理した方がよい。"
      ],
      implications: [
        "2026年10月1日までに、週20時間以上働きながら月額8.8万円未満で現在加入していない短時間労働者を抽出し、資格取得、給与控除、本人説明の対象を確認する。",
        "最低賃金の減額特例対象者など賃金要件撤廃後も例外となる者は、一般の短時間労働者と分けて判定根拠を残す。",
        "2027年以降の企業規模要件縮小を見据え、厚生年金保険の被保険者数の推移と適用開始時期を人事・給与システムの対応計画へ組み込む。",
        "保険料調整制度を利用する場合は、対象事業所・対象者、標準報酬月額、申出期限、本人負担と事業主負担の割合を給与計算と従業員説明資料へ反映する。",
        "個人事業所は2029年10月の業種要件撤廃と既存事業所の経過措置を区別して、強制適用・任意適用の扱いを確認する。"
      ],
      uncertain: [
        "個々の労働者が短時間労働者、通常の労働者、最低賃金減額特例対象者等のどの区分に当たるかは、労働時間、雇用形態、学生性、事業所の状態等を個別に確認する必要がある。",
        "保険料調整制度の申出期限や停止・再開等の運用は日本年金機構の手続資料で随時具体化されるため、実施時点の最新様式・案内を確認する必要がある。"
      ]
    },
    issues: [
      {
        id: "social-insurance-2026-wage-requirement",
        title: "月額8.8万円の賃金要件はいつ・どう撤廃されるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "短時間労働者の社会保険加入要件のうち月額8.8万円以上の賃金要件は2026年10月1日に撤廃される。",
        exception: "最低賃金法7条の減額特例対象者については、賃金要件撤廃後も一定の場合に加入対象外とする例外的取扱いが下位法令で整備されている。",
        uncertain: "個別労働者の適用関係は週20時間要件、学生性、通常労働者との比較、企業規模等を併せて確認する必要がある。",
        sourceIds: ["source-pension-reform-act-20250620", "source-mhlw-pension-effective-notice-20260915", "source-nenkin-short-time-expansion-20260916"]
      },
      {
        id: "social-insurance-2027-enterprise-size",
        title: "企業規模要件はどの順番で撤廃されるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "企業規模要件は、36人以上を2027年10月、21人以上を2029年10月、11人以上を2032年10月から対象とし、2035年10月に企業規模要件自体を撤廃する。",
        exception: "企業規模要件を満たさない期間でも、通常の労働者の4分の3以上働く者や、任意特定適用事業所等では別の根拠で加入対象となり得る。",
        uncertain: "企業規模の判定は単純な在籍人数ではなく厚生年金保険の被保険者数等を基準とするため、実際の判定時点で最新の日本年金機構の案内を確認する。",
        sourceIds: ["source-pension-reform-act-20250620", "source-nenkin-short-time-expansion-20260916"]
      },
      {
        id: "social-insurance-2026-premium-adjustment",
        title: "保険料調整制度を誰にどう使えるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "2026年10月以降、一定の対象事業所は、新たに加入対象となる標準報酬月額12.6万円以下の短時間労働者について、事業主が保険料を追加負担して本人負担を通算3年間軽減する保険料調整制度を利用できる。",
        exception: "すべての短時間労働者が対象ではなく、対象事業所・対象被保険者・申出期限等の要件を満たす必要がある。",
        uncertain: "対象者が0人となった場合の停止・再開や申出期限など運用上の細部は、日本年金機構の最新手続資料に従う必要がある。",
        sourceIds: ["source-pension-reform-act-20250620", "source-nenkin-premium-adjustment-20260911"]
      },
      {
        id: "social-insurance-2029-individual-establishments",
        title: "個人事業所の適用対象はどう広がるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "2029年10月から、常時5人以上を使用する個人事業所は原則として業種を問わず社会保険の適用対象となる。",
        exception: "2029年10月の施行時点で既に存在する従来非適用業種の個人事業所は、当分の間、強制適用の対象外とする経過措置がある。",
        uncertain: "個別事業所の常時使用人数、法人化、任意適用の有無等により適用関係は変わるため、施行時点の事実関係を確認する。",
        sourceIds: ["source-pension-reform-act-20250620"]
      }
    ],
    sourceIds: [
      "source-pension-reform-act-20250620",
      "source-mhlw-pension-effective-notice-20260915",
      "source-nenkin-short-time-expansion-20260916",
      "source-nenkin-premium-adjustment-20260911"
    ],
    referenceArticleIds: [
      "article-mhlw-pension-effective-notice-20260915",
      "article-nenkin-short-time-expansion-20260916",
      "article-nenkin-premium-adjustment-20260911",
      "article-tmi-pension-reform-20250620",
      "article-tmi-labor-update-social-insurance-20260915"
    ],
    practicalImpacts: [
      "短時間労働者の加入判定",
      "資格取得届・給与控除",
      "従業員向け説明",
      "人事・給与システム",
      "企業規模要件の将来対応",
      "保険料調整制度の申出・管理",
      "個人事業所の適用判定"
    ]
  };

  if (!(window.TOPIC_DATA || []).some((item) => item?.slug === topic.slug)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(topic);
  }
})();