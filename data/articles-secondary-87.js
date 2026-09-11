(() => {
  const topicSlug = "short-time-social-insurance-expansion";
  const mhlwSourceId = "source-mhlw-social-insurance-expansion-2025";
  const jpsSourceId = "source-jps-premium-adjustment-2026";
  const reformEventId = "pension-reform-social-insurance-expansion-2025";
  const jpsArticleId = "article-jps-premium-adjustment-2026";
  const tmiArticleId = "article-tmi-pension-reform-social-insurance-2025";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: mhlwSourceId,
      title: "令和7年年金制度改正法・社会保険の加入対象の拡大について",
      type: "law",
      typeLabel: "成立法・制度改正概要",
      authority: "厚生労働省",
      publishedAt: "2025-06-20",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000147284_00021.html",
      importance: "最高",
      whyImportant: "令和7年年金制度改正法による短時間労働者の企業規模要件の段階的撤廃、月額8.8万円の賃金要件撤廃、個人事業所の適用拡大、保険料調整措置を厚生労働省が一体で示す一次資料。",
      topics: [topicSlug]
    },
    {
      id: jpsSourceId,
      title: "保険料調整制度のご案内",
      type: "guidance",
      typeLabel: "施行準備・事業主手続",
      authority: "日本年金機構",
      publishedAt: "2026-09-11",
      url: "https://www.nenkin.go.jp/tokusetsu/hokenryochosei.html",
      importance: "最高",
      whyImportant: "2026年10月開始の保険料調整制度について、対象事業所・対象被保険者、3年間の軽減、事業主の一時負担と後日の調整、開始申出や停止・再開手続を日本年金機構が具体化した最新の一次実務資料。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "短時間労働者・社会保険適用拡大／保険料調整制度",
      categories: ["労務"],
      summary: "2025年年金制度改正による短時間労働者の被用者保険適用拡大と、2026年10月から始まる保険料調整制度を、人事・給与実務の観点から整理する。",
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      isNew: true,
      overview: [
        "2025年年金制度改正法は、短時間労働者の社会保険について、企業規模要件を段階的に縮小・撤廃し、月額8.8万円以上という賃金要件も公布から3年以内に撤廃する枠組みを定めた。",
        "企業規模要件は2027年10月以降段階的に対象を広げ、2035年10月に撤廃される。常時5人以上を使用する個人事業所の業種要件も2029年10月から見直されるが、既存事業所には経過措置がある。",
        "適用拡大に伴う就業調整を抑えるため、対象事業所が申出を行うことで、標準報酬月額12.6万円以下の対象短時間労働者の本人保険料負担を通算3年間軽減する保険料調整制度が2026年10月から始まる。"
      ],
      currentSummary: {
        facts: [
          "短時間労働者に係る企業規模要件は、2027年10月から36人以上、2029年10月から21人以上、2032年10月から11人以上へ段階的に縮小され、2035年10月に企業規模要件が撤廃される。",
          "月額8.8万円以上という賃金要件は、2025年6月20日の改正法公布から3年以内に、最低賃金の状況を踏まえて政令で定める日に撤廃される。厚生労働省は現在、2026年10月撤廃予定と案内している。",
          "常時5人以上を使用する個人事業所は、2029年10月から業種要件が撤廃され全業種が適用対象となるが、同日時点ですでに存在する事業所は当分の間対象外とされる。",
          "保険料調整制度は2026年10月から開始し、対象事業所の事業主が被保険者の健康保険・厚生年金保険料を一時的に追加負担することで、対象被保険者の本人負担を通算3年間軽減する。一定期間経過後に追加負担分が調整されるため、最終的な事業主の納付保険料は増えず、将来の年金額にも影響しない。",
          "保険料調整制度の対象被保険者は短時間労働者として加入する者のうち標準報酬月額12.6万円以下の者で、制度利用には事業主による期限内の開始申出が必要である。"
        ],
        interpretations: [
          "『106万円の壁が2026年10月に必ず撤廃済みになる』と決め打ちせず、賃金要件の法的な施行日は政令指定事項として追跡する必要がある。一方、保険料調整制度の2026年10月開始とは別の論点である。",
          "企業規模要件の段階縮小は一度の制度改修では終わらないため、自社の厚生年金被保険者数と適用開始年度を継続して管理し、採用・シフト・給与・社会保険手続きを同じ移行計画に載せる必要がある。"
        ],
        implications: [
          "短時間労働者について、週所定労働時間、賃金、学生該当性、事業所規模を棚卸しし、2027年以降の適用時期を事業所ごとに特定する。",
          "保険料調整制度を利用する可能性がある事業所は、対象事業所該当日と申出期限を管理し、標準報酬月額12.6万円以下の対象者を抽出できるようにする。",
          "制度利用時は、本人保険料の軽減、事業主の一時的追加負担、後日の調整・還付、停止・再開を給与計算と社会保険手続の双方へ反映する。",
          "従業員説明では、賃金要件撤廃、130万円基準、企業規模要件、保険料調整制度を別制度として説明し、手取りへの影響を混同しない。"
        ],
        uncertain: [
          "月額8.8万円の賃金要件の撤廃日は改正法上『公布から3年以内の政令で定める日』であり、厚生労働省は2026年10月撤廃予定と案内しているものの、このテーマでは施行日を政令等の一次資料で継続確認する。"
        ]
      },
      issues: [
        {
          id: "short-time-insurance-company-size",
          title: "企業規模要件はいつ、どの規模まで縮小・撤廃されるか",
          status: "authoritative",
          stage: "enacted",
          conclusion: "2027年10月に36人以上、2029年10月に21人以上、2032年10月に11人以上へ段階的に拡大し、2035年10月に企業規模要件を撤廃する。",
          sourceIds: [mhlwSourceId],
          articleIds: [tmiArticleId],
          views: []
        },
        {
          id: "short-time-insurance-wage-threshold",
          title: "月額8.8万円の賃金要件はいつ撤廃されるか",
          status: "pending",
          stage: "enacted",
          conclusion: "改正法は公布から3年以内に政令で定める日としており、厚生労働省は2026年10月撤廃予定と案内している。予定表示と確定した施行日を区別して管理する。",
          sourceIds: [mhlwSourceId],
          articleIds: [tmiArticleId],
          views: []
        },
        {
          id: "individual-business-social-insurance-expansion",
          title: "個人事業所の業種要件撤廃はどこまで及ぶか",
          status: "authoritative",
          stage: "enacted",
          conclusion: "2029年10月から常時5人以上を使用する個人事業所の業種要件を撤廃する。ただし施行日時点ですでに存在する事業所は当分の間対象外となる。",
          sourceIds: [mhlwSourceId],
          articleIds: [tmiArticleId],
          views: []
        },
        {
          id: "premium-adjustment-scope",
          title: "保険料調整制度を利用できる事業所・被保険者は誰か",
          status: "authoritative",
          stage: "enacted",
          conclusion: "2026年10月以降に任意特定適用事業所となる事業所や、2027年10月以降の適用拡大で新たに特定適用事業所となる事業所等が対象となり、対象被保険者は短時間労働者のうち標準報酬月額12.6万円以下の者である。",
          sourceIds: [mhlwSourceId, jpsSourceId],
          articleIds: [jpsArticleId, tmiArticleId],
          views: []
        },
        {
          id: "premium-adjustment-operation",
          title: "保険料調整制度を給与・社会保険手続へどう実装するか",
          status: "authoritative",
          stage: "enacted",
          conclusion: "事業主が期限内に開始申出を行い、本人負担を通算3年間軽減する。追加負担分の調整・還付や自動停止・再開手続まで含めて運用する必要がある。",
          sourceIds: [jpsSourceId],
          articleIds: [jpsArticleId],
          views: []
        }
      ],
      sourceIds: [mhlwSourceId, jpsSourceId],
      checklist: [
        "事業所ごとの厚生年金被保険者数と適用拡大時期を確認する",
        "短時間労働者の週所定労働時間・賃金・学生該当性を抽出する",
        "賃金要件の撤廃日は予定情報ではなく政令等の一次資料で確定確認する",
        "保険料調整制度の対象事業所該当日と申出期限を管理する",
        "標準報酬月額12.6万円以下の対象者を給与システムで識別する",
        "本人負担軽減・事業主追加負担・還付・停止再開の処理を手順化する"
      ]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "令和7年年金制度改正・被用者保険適用拡大",
      eventType: "law_amendment",
      lawId: "pension-system-reform-2025",
      lawLabel: "年金制度改正法（令和7年法律第74号）",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-10-01", "2027-10-01", "2029-10-01", "2032-10-01", "2035-10-01"],
      effectiveDateSourceIds: [mhlwSourceId, jpsSourceId],
      effectiveDateNote: "保険料調整制度は2026年10月1日開始。企業規模要件は2027年10月から段階的に縮小し2035年10月に撤廃。賃金要件は公布から3年以内の政令指定日で、厚生労働省は2026年10月撤廃予定と案内している。",
      matchSourceIds: [mhlwSourceId],
      sourceIds: [mhlwSourceId, jpsSourceId],
      articleIds: [jpsArticleId, tmiArticleId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: jpsArticleId,
      title: "保険料調整制度のご案内",
      publisher: "日本年金機構",
      author: "日本年金機構",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-11",
      url: "https://www.nenkin.go.jp/tokusetsu/hokenryochosei.html",
      sourceType: "primary",
      sourceLabel: "一次資料・施行準備／事業主手続",
      status: "adopted",
      summary: "2026年10月から開始する保険料調整制度の実務案内。対象事業所が申出を行い、対象短時間労働者の健康保険・厚生年金保険の本人負担を通算3年間軽減する仕組み、対象被保険者、申出、還付、停止・再開までを日本年金機構が具体化している。",
      whyImportant: [
        "2026年10月の制度開始直前に、対象事業所・被保険者・手続を最新の実装資料で確認できる",
        "事業主の一時的追加負担が最終的な追加納付にならず、将来年金額にも影響しない仕組みを確認できる",
        "申出期限や自動停止・再開まで給与・社会保険実務へ落とし込める"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "企業法務", "中小企業管理部門"],
      audienceReason: "短時間労働者の適用拡大に備え、2026年10月から利用可能となる保険料調整制度の対象判定と実際の申出・給与処理を準備するため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["premium-adjustment-scope", "premium-adjustment-operation"],
      primarySourceIds: [jpsSourceId, mhlwSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [jpsSourceId, mhlwSourceId]
    },
    {
      id: tmiArticleId,
      title: "【労働法ブログ】令和7年年金制度改正法の成立について",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2025-06-20",
      collectedAt: "2026-09-11",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17174.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "令和7年年金制度改正法の成立・公布を受け、企業人事に直結する短時間労働者の社会保険適用拡大を整理した実務解説。賃金要件の撤廃、企業規模要件の10年間の段階縮小、個人事業所の業種要件撤廃、3年間の保険料負担軽減措置を一つの移行工程として把握できる。",
      whyImportant: [
        "複数年にまたがる適用拡大を企業規模別の時系列で整理している",
        "個人事業所の経過措置や最低賃金と賃金要件撤廃の関係まで一次資料を補足している",
        "社会保険加入拡大を人事労務上の準備課題として読み替えやすい"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "企業法務", "中小企業管理部門"],
      audienceReason: "2027年以降の企業規模要件縮小を含む長期の適用拡大を、自社の人員構成と社会保険実務へ落とし込むため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["short-time-insurance-company-size", "short-time-insurance-wage-threshold", "individual-business-social-insurance-expansion", "premium-adjustment-scope"],
      primarySourceIds: [mhlwSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [mhlwSourceId]
    }
  ]);
})();