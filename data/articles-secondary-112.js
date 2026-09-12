(() => {
  const topicSlug = "nonlife-insurance-reform-agency-governance";
  const sourceStructural = "source-fsa-nonlife-structural-report-2024";
  const sourceWG = "source-fsa-nonlife-wg-report-2024";
  const sourceAct = "source-fsa-insurance-business-act-2025";
  const sourceEffective = "source-fsa-insurance-act-effective-date-2025";
  const sourceFinalRules = "source-fsa-insurance-final-rules-2026";
  const sourceSupervisoryFinal = "source-fsa-insurance-supervisory-final-2026";
  const sourceComparisonFinal = "source-fsa-insurance-comparison-final-2026";
  const sourceCorporateAgencyDraft = "source-fsa-corporate-agency-guideline-draft-2026";

  const lawEventId = "insurance-business-act-2025-agency-reform";
  const comparisonEventId = "insurance-comparison-recommendation-2026";
  const corporateAgencyEventId = "nonlife-corporate-agency-supervisory-guideline-2026";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceStructural,
      title: "損害保険業の構造的課題と競争のあり方に関する有識者会議報告書",
      type: "report",
      typeLabel: "一次資料・金融庁／損害保険業の構造改革",
      authority: "金融庁",
      publishedAt: "2024-06-25",
      url: "https://www.fsa.go.jp/news/r5/singi/20240625.html",
      importance: "最高",
      whyImportant: "保険金不正請求事案や保険料調整行為等を踏まえ、顧客本位の業務運営と健全な競争環境を再構築するため、代理店・保険会社の関係、企業内代理店、比較推奨販売、独占禁止法対応等を含む損害保険業改革の出発点となった公式報告書。",
      topics: [topicSlug]
    },
    {
      id: sourceWG,
      title: "金融審議会『損害保険業等に関する制度等ワーキング・グループ』報告書",
      type: "report",
      typeLabel: "一次資料・金融庁／損害保険制度WG報告書",
      authority: "金融庁 金融審議会",
      publishedAt: "2024-12-25",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/tosin/20241225.html",
      importance: "最高",
      whyImportant: "大規模乗合代理店、比較推奨販売、保険会社による代理店管理、過度な便宜供与、企業内代理店、保険仲立人等について制度改正の方向性を整理し、2025年保険業法改正とその後の監督指針改正の直接の基礎となった報告書。",
      topics: [topicSlug]
    },
    {
      id: sourceAct,
      title: "保険業法の一部を改正する法律案（第217回国会）",
      type: "law",
      typeLabel: "一次資料・金融庁／2025年保険業法改正",
      authority: "金融庁",
      publishedAt: "2025-03-07",
      url: "https://www.fsa.go.jp/common/diet/217/index.html",
      importance: "最高",
      whyImportant: "2025年の保険業法改正について、特定大規模乗合保険募集人等の体制整備や保険会社の管理強化、禁止行為の対象拡大等の法改正内容を確認する基礎資料。",
      topics: [topicSlug]
    },
    {
      id: sourceEffective,
      title: "保険業法の一部を改正する法律の施行期日を定める政令等について",
      type: "law",
      typeLabel: "一次資料・金融庁／施行期日",
      authority: "金融庁",
      publishedAt: "2025-12-19",
      url: "https://www.fsa.go.jp/news/r7/hoken/20251219/20251219.html",
      importance: "最高",
      whyImportant: "2025年改正保険業法の主要部分が2026年6月1日に施行されることを確認できる施行期日根拠。",
      topics: [topicSlug]
    },
    {
      id: sourceFinalRules,
      title: "保険業法等の一部を改正する法律の施行に伴う関係内閣府令等の改正について",
      type: "regulation",
      typeLabel: "一次資料・金融庁／改正保険業法の施行規則等",
      authority: "金融庁",
      publishedAt: "2026-03-30",
      url: "https://www.fsa.go.jp/news/r7/hoken/20260330/20260330.html",
      importance: "最高",
      whyImportant: "2026年6月1日施行の改正保険業法について、特定大規模乗合保険募集人の体制整備、損害保険代理店の兼業管理、保険会社の管理強化、過度な便宜供与規制等を下位法令で具体化した最終資料。",
      topics: [topicSlug]
    },
    {
      id: sourceSupervisoryFinal,
      title: "保険会社向けの総合的な監督指針等の一部改正について",
      type: "guideline",
      typeLabel: "一次資料・金融庁／改正保険業法対応の監督指針",
      authority: "金融庁",
      publishedAt: "2026-03-30",
      url: "https://www.fsa.go.jp/news/r7/hoken/20260330-2/20260330-2.html",
      importance: "最高",
      whyImportant: "改正保険業法と同じ2026年6月1日から適用される監督指針の最終改正。代理店管理、保険会社のガバナンス、禁止行為等を監督実務へ落とす基準になる。",
      topics: [topicSlug]
    },
    {
      id: sourceComparisonFinal,
      title: "保険代理店による比較推奨販売に係る規制等の見直しについて",
      type: "regulation",
      typeLabel: "一次資料・金融庁／比較推奨販売の最終ルール",
      authority: "金融庁",
      publishedAt: "2026-08-28",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260828/20260828.html",
      importance: "最高",
      whyImportant: "乗合代理店による比較推奨販売の適正化について、規則・監督指針の最終改正と2028年3月1日の施行・適用開始を確認できる。",
      topics: [topicSlug]
    },
    {
      id: sourceCorporateAgencyDraft,
      title: "『保険会社向けの総合的な監督指針』の一部改正（案）の公表について",
      type: "guideline",
      typeLabel: "一次資料・金融庁／企業内代理店・独禁法・企業向け損保モニタリング案",
      authority: "金融庁",
      publishedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260911/20260911.html",
      importance: "最高",
      whyImportant: "企業内代理店の特定契約比率規制の再構築、独占禁止法遵守態勢、企業向け損害保険商品のモニタリング、代理店支店登録の見直しをまとめた最新の監督指針改正案。2026年10月13日まで意見募集されており、現時点では案段階である。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "損害保険業改革・代理店ガバナンス／企業内代理店",
      categories: ["危機管理・コンプライアンス", "契約"],
      summary: "損害保険業を巡る2024年以降の制度改革について、2025年改正保険業法と2026年施行ルール、比較推奨販売の見直し、企業内代理店・独占禁止法対応・企業向け損保商品のモニタリングを、確定済みルールと検討中の監督指針案に分けて整理する。",
      lastUpdated: "2026-09-13",
      lastVerified: "2026-09-13",
      isNew: true,
      overview: [
        "損害保険業では、保険金不正請求事案や保険料調整行為等を契機に、代理店と保険会社の力関係、乗合代理店の比較推奨販売、企業内代理店、共同保険、企業向け損害保険商品の価格管理まで一連の制度・監督実務が見直されている。",
        "2025年改正保険業法の主要部分は2026年6月1日に施行され、特定大規模乗合保険募集人や保険会社の体制整備、過度な便宜供与等の規律が具体化した。比較推奨販売については2026年8月に最終ルールが公表され、2028年3月1日から施行・適用される。",
        "2026年9月11日には、企業内代理店の特定契約比率規制、独占禁止法遵守、企業向け損害保険商品のモニタリング等に関する監督指針改正案が公表された。これはパブリックコメント段階であり、現時点の確定ルールとして扱わない。"
      ],
      currentSummary: {
        facts: [
          "2024年6月25日の金融庁有識者会議報告書は、損害保険業の構造的課題について、顧客本位の業務運営と健全な競争環境の実現を軸に、代理店・保険会社の関係、企業内代理店、保険仲立人等を含む改革の方向性を示した。",
          "2025年改正保険業法の主要部分は2026年6月1日に施行され、特定大規模乗合保険募集人の体制整備、保険会社による管理、禁止行為の対象拡大等が下位法令・監督指針で具体化された。",
          "2026年8月28日に比較推奨販売に係る最終的な規則・監督指針改正が公表され、2028年3月1日から施行・適用される。",
          "2026年9月11日の監督指針改正案は、企業内代理店の特定契約比率規制の見直し、独占禁止法上問題となり得る行為の防止、企業向け損害保険商品の適切な保険料・収支管理等を新たに具体化しようとしている。",
          "9月11日案では、企業内代理店について、手数料が保険料の実質的な割引・割戻しにならないことや、親会社等から一定の独立性を持つ募集・管理態勢などを満たす場合の扱いを設計する方向が示されている。"
        ],
        interpretations: [
          "損害保険代理店の規制対応は、募集人教育や比較推奨ルールだけでなく、代理店報酬、グループ内契約、内部監査・通報、独占禁止法、共同保険、商品別採算管理まで横断して設計する必要がある。",
          "企業内代理店の見直しは、単純に規制を廃止・緩和する話ではなく、経済グループ内契約の把握、保険料と手数料の関係、親会社からの独立性、三線管理等を条件に、実態に応じて規律を再設計する方向と読むべきである。",
          "2026年9月11日案はパブリックコメント段階なので、概ね2030年・2032年を念頭に置いた経過措置のイメージ等も含め、正式改正前に確定義務・確定施行日として扱わない。"
        ],
        implications: [
          "損害保険会社・大規模乗合代理店は、2026年6月施行済みの体制整備義務について、責任者、内部監査、苦情対応、兼業管理、便宜供与等の実運用を点検する。",
          "乗合代理店は、2028年3月1日の比較推奨販売ルールに向け、推奨方針、比較可能な商品の範囲、顧客への説明、記録・検証方法を更新する。",
          "企業内代理店を持つ企業グループは、グループ内契約比率、代理店手数料と保険料の関係、募集人の実務能力、親会社からの独立性、独占禁止法上のリスク、三線管理を棚卸しする。",
          "企業向け損害保険を扱う保険会社は、割増引の基準・事後検証、契約単位の採算性、保険料水準の妥当性、経営陣を含むモニタリング態勢を確認する。"
        ],
        uncertain: [
          "2026年9月11日の監督指針改正は案段階で、意見募集は2026年10月13日17時まで。正式な適用開始時期や最終文言は、パブリックコメント後の確定版を確認する必要がある。",
          "企業内代理店の特定契約比率規制について示された段階的な移行イメージは最終確定前であり、対象となる経済グループの範囲、免除要件、報告・モニタリング方法等は確定版で再確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "nonlife-large-agency-governance",
          title: "大規模乗合代理店・保険会社の体制整備をどう実装するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "2025年改正保険業法と2026年施行規則・監督指針に基づき、特定大規模乗合保険募集人の拠点管理、責任者、苦情対応、内部管理・監査、兼業管理等を実際の組織・手続へ落とし、保険会社側の代理店管理と接続する。",
          exception: "適用対象や要求水準は代理店の規模・業務形態・兼業の有無等によって異なるため、自社の該当性と個別規定を確認する。",
          uncertain: "施行済みの基本枠組みは確定しているが、監督実務や検査で重視される運用水準は事例の蓄積を継続確認する。",
          sourceIds: [sourceAct, sourceEffective, sourceFinalRules, sourceSupervisoryFinal]
        },
        {
          id: "nonlife-comparison-recommendation-sales",
          title: "比較推奨販売ルールをどう見直すか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "2026年8月28日に最終化された規則・監督指針を基準に、顧客の意向と比較可能な商品群を踏まえた推奨方針、説明、記録・検証を整備し、2028年3月1日の施行・適用開始へ備える。",
          exception: "実際の比較対象や説明方法は商品・チャネル・顧客意向に応じて異なり、一律の推奨ロジックに置き換えるものではない。",
          uncertain: "施行までに公表される追加Q&A・監督上の着眼点等があれば運用へ反映する。",
          sourceIds: [sourceComparisonFinal]
        },
        {
          id: "nonlife-corporate-agency-specific-contract-ratio",
          title: "企業内代理店・特定契約比率規制をどう再設計するか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "2026年9月11日案では、特定契約比率規制の対象範囲を経済グループ単位へ見直しつつ、代理店手数料が実質的な保険料割引・割戻しにならず、募集能力と親会社等からの独立性を含むガバナンス要件を満たす代理店の扱いを再設計する方向が示されている。",
          exception: "顧客のみから報酬を受ける保険仲立人契約等について別扱いが示されるなど、契約形態により整理が異なり得る。",
          uncertain: "パブリックコメント後の最終要件、経済グループの範囲、移行期間、モニタリング・報告方法を確認する。",
          sourceIds: [sourceCorporateAgencyDraft, sourceStructural]
        },
        {
          id: "nonlife-antitrust-coinsurance",
          title: "共同保険・代理店運営で独占禁止法遵守をどう確保するか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "2026年9月11日案は、保険会社・代理店に独占禁止法上問題となり得る行為を防止する態勢整備を求め、共同保険を組成する場合には共同引受けの具体的必要性と競争上のリスクを検証する方向を示している。",
          exception: "共同保険自体が一律に問題となるわけではなく、必要性・情報交換の範囲・市場への影響等を個別に検討する。",
          uncertain: "正式な監督指針の文言と、実務上要求される審査・記録・研修等の水準を確認する。",
          sourceIds: [sourceCorporateAgencyDraft, sourceStructural]
        },
        {
          id: "nonlife-corporate-pricing-monitoring",
          title: "企業向け損害保険の保険料・収支をどうモニタリングするか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "2026年9月11日案では、経営陣の関与の下で、割増引の基準・事後検証、契約単位の採算性、保険料水準の妥当性を継続的に検証し、三線管理を含む商品モニタリングを高度化する方向が示されている。",
          exception: "商品特性や顧客ポートフォリオにより妥当な収益管理・価格検証の方法は異なり得る。",
          uncertain: "最終監督指針と金融庁のモニタリング実務を確認し、既存の商品審査・料率管理との接続を具体化する。",
          sourceIds: [sourceCorporateAgencyDraft]
        }
      ],
      sourceIds: [sourceStructural, sourceWG, sourceAct, sourceEffective, sourceFinalRules, sourceSupervisoryFinal, sourceComparisonFinal, sourceCorporateAgencyDraft],
      practicalImpacts: ["損害保険代理店管理", "企業内代理店・グループ保険", "代理店手数料・保険料設計", "比較推奨販売", "共同保険・独占禁止法", "内部監査・コンプライアンス", "企業向け損害保険の商品・価格モニタリング"]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: lawEventId,
      title: "保険業法・2025年改正（2026年施行）",
      eventType: "law_amendment",
      lawId: "insurance-business-act",
      lawLabel: "保険業法",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-06-01"],
      effectiveDateSourceIds: [sourceEffective],
      matchSourceIds: [sourceAct, sourceEffective, sourceFinalRules, sourceSupervisoryFinal],
      sourceIds: [sourceAct, sourceEffective, sourceFinalRules, sourceSupervisoryFinal]
    },
    {
      id: comparisonEventId,
      title: "比較推奨販売規制・2026年最終改正",
      eventType: "regulation_or_guideline",
      lawId: "insurance-business-act",
      lawLabel: "保険業法",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2028-03-01"],
      effectiveDateSourceIds: [sourceComparisonFinal],
      matchSourceIds: [sourceComparisonFinal],
      sourceIds: [sourceComparisonFinal]
    },
    {
      id: corporateAgencyEventId,
      title: "企業内代理店・独禁法・企業向け損保モニタリング 2026年監督指針改正案",
      eventType: "regulation_or_guideline",
      lawId: "insurance-company-supervisory-guideline",
      lawLabel: "保険会社向け総合的監督指針",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "unknown",
      matchSourceIds: [sourceCorporateAgencyDraft],
      sourceIds: [sourceCorporateAgencyDraft]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-fsa-nonlife-structural-report-2024",
      title: "損害保険業の構造的課題と競争のあり方に関する有識者会議報告書",
      publisher: "金融庁",
      author: "損害保険業の構造的課題と競争のあり方に関する有識者会議",
      publishedAt: "2024-06-25",
      collectedAt: "2026-09-13",
      url: "https://www.fsa.go.jp/news/r5/singi/20240625.html",
      sourceType: "primary",
      sourceLabel: "一次資料・損害保険業の構造改革",
      status: "adopted",
      summary: "保険金不正請求事案や保険料調整行為等を踏まえ、顧客本位の業務運営と健全な競争環境を実現するため、保険会社・代理店の関係、企業内代理店、保険仲立人、競争政策等の構造的課題と改革方向を整理した金融庁の基礎報告書。",
      whyImportant: ["2025年以降の保険業法改正・監督指針改正を読む出発点になる", "企業内代理店や共同保険を個別論点ではなく市場構造の問題として理解できる", "顧客本位と競争政策を同時に追う必要性が分かる"],
      audience: ["損害保険会社", "保険代理店", "企業法務", "コンプライアンス", "リスク管理"],
      audienceReason: "現在進行中の損害保険業改革の政策背景と、どの実務領域が見直し対象になったかを把握するため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["nonlife-corporate-agency-specific-contract-ratio", "nonlife-antitrust-coinsurance"],
      primarySourceIds: [sourceStructural],
      whatChanged: "損害保険業改革を、顧客本位・競争環境・代理店構造を一体で読むための政策上の基準点を追加した。"
    },
    {
      id: "article-fsa-insurance-final-rules-2026",
      title: "保険業法等の一部を改正する法律の施行に伴う関係内閣府令等の改正について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-03-30",
      collectedAt: "2026-09-13",
      url: "https://www.fsa.go.jp/news/r7/hoken/20260330/20260330.html",
      sourceType: "primary",
      sourceLabel: "一次資料・改正保険業法の最終施行ルール",
      status: "adopted",
      summary: "2025年改正保険業法の施行に向け、特定大規模乗合保険募集人の体制整備、代理店の兼業管理・内部管理、保険会社の管理強化、過度な便宜供与等を具体化した関係府令等の最終改正。2026年6月1日施行。",
      whyImportant: ["改正法の抽象的な義務を代理店・保険会社の具体的な体制整備へ落とせる", "大規模乗合代理店の責任者・苦情・監査等の現在の確定ルールを確認できる", "2026年6月施行済みの義務と、9月の新たな案段階の見直しを分離できる"],
      audience: ["損害保険会社", "保険代理店", "企業法務", "コンプライアンス", "内部監査"],
      audienceReason: "2026年6月からすでに適用されている代理店・保険会社の体制整備を点検するため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["nonlife-large-agency-governance"],
      primarySourceIds: [sourceAct, sourceEffective, sourceFinalRules, sourceSupervisoryFinal],
      reformEventId: lawEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceEffective, sourceFinalRules],
      whatChanged: "2025年改正保険業法について、2026年6月1日施行の具体的な代理店・保険会社の体制整備ルールを確定資料で整理した。"
    },
    {
      id: "article-fsa-insurance-comparison-final-2026",
      title: "保険代理店による比較推奨販売に係る規制等の見直しについて",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-08-28",
      collectedAt: "2026-09-13",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260828/20260828.html",
      sourceType: "primary",
      sourceLabel: "一次資料・比較推奨販売の最終改正",
      status: "adopted",
      summary: "乗合代理店の比較推奨販売について、顧客本位の販売を徹底するための規則・監督指針の最終改正と金融庁の考え方を公表した資料。2028年3月1日から施行・適用される。",
      whyImportant: ["比較推奨販売の見直しが検討段階から最終ルールへ移ったことを確認できる", "代理店の推奨方針・説明・記録を施行日から逆算して見直せる", "パブコメ回答から金融庁が実務上どう考えているかを確認できる"],
      audience: ["乗合保険代理店", "損害保険会社", "企業法務", "コンプライアンス", "営業企画"],
      audienceReason: "2028年3月の適用開始に向け、比較推奨販売の業務フロー・説明・記録を更新するため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["nonlife-comparison-recommendation-sales"],
      primarySourceIds: [sourceComparisonFinal],
      reformEventId: comparisonEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceComparisonFinal],
      whatChanged: "比較推奨販売規制が最終化し、2028年3月1日の施行・適用開始が確定した。"
    },
    {
      id: "article-fsa-corporate-agency-guideline-draft-2026",
      title: "『保険会社向けの総合的な監督指針』の一部改正（案）の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-13",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260911/20260911.html",
      sourceType: "primary",
      sourceLabel: "一次資料・企業内代理店／独禁法／企業向け損保モニタリング案",
      status: "adopted",
      summary: "企業内代理店の特定契約比率規制の再構築、独占禁止法遵守態勢、共同保険組成時の検証、企業向け損害保険商品の価格・収支モニタリング、代理店支店登録の見直し等を示した監督指針改正案。2026年10月13日まで意見募集。",
      whyImportant: ["企業内代理店を持つ企業グループの保険調達・代理店報酬・ガバナンスへ直接影響し得る最新案", "損害保険会社に独占禁止法と企業向け商品の価格・採算管理を一体で求める方向が明確", "今後の移行措置を含むが、現段階では確定ルールではないことを一次資料で確認できる"],
      audience: ["企業内代理店", "損害保険会社", "事業会社法務", "コンプライアンス", "内部監査", "リスク管理"],
      audienceReason: "企業グループの保険代理店・保険調達、独禁法対応、商品・料率管理を正式改正前から棚卸しするため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["nonlife-corporate-agency-specific-contract-ratio", "nonlife-antitrust-coinsurance", "nonlife-corporate-pricing-monitoring"],
      primarySourceIds: [sourceCorporateAgencyDraft],
      reformEventId: corporateAgencyEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [sourceCorporateAgencyDraft],
      whatChanged: "企業内代理店・独禁法・企業向け損保モニタリングについて、2026年9月11日に新たな監督指針改正案が公表された。確定ルールとは分離して追跡する。"
    },
    {
      id: "article-amt-nonlife-wg-practice-2025",
      title: "【金融法務】金融審議会『損害保険業等に関する制度等ワーキング・グループ』報告書の概要―保険募集実務への影響―",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "村井惠悟 / 津江紘輝 / 高野聖也 / 出張智己 / 福田直邦",
      publishedAt: "2025-01-31",
      collectedAt: "2026-09-13",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20250131001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "実務解説・損害保険業改革／保険募集",
      status: "adopted",
      summary: "金融審議会WG報告書を、顧客本位の業務運営、大規模乗合代理店の体制、比較推奨販売、保険会社の代理店管理、健全な競争環境、企業内代理店、保険仲立人等の観点から整理し、保険募集実務への影響を解説する。",
      whyImportant: ["一次資料の制度論を保険募集実務の変更点へ翻訳している", "企業内代理店・比較推奨販売・大規模乗合代理店を同じ改革パッケージとして把握できる", "改正法成立前に何が問題視され、どの実務が変わると予想されたかを比較できる"],
      audience: ["保険代理店", "損害保険会社", "企業法務", "コンプライアンス", "営業企画"],
      audienceReason: "制度見直しを募集・代理店管理の業務フローへ具体化する観点を得るため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["nonlife-large-agency-governance", "nonlife-comparison-recommendation-sales", "nonlife-corporate-agency-specific-contract-ratio"],
      primarySourceIds: [sourceWG],
      whatChanged: "一次資料だけでは見えにくい、募集実務・代理店管理・企業内代理店への具体的な影響を補完した。"
    },
    {
      id: "article-nozomi-insurance-law-practice-2026",
      title: "改正保険業法（2026年6月1日施行）の概説～保険代理店が留意すべき事項（その1）",
      publisher: "のぞみ総合法律事務所",
      author: "吉田桂公",
      publishedAt: "2026-06-29",
      collectedAt: "2026-09-13",
      url: "https://www.nozomisogo.gr.jp/newsletter/13621",
      sourceType: "secondary",
      sourceLabel: "実務解説・改正保険業法／代理店対応",
      status: "adopted",
      summary: "2026年6月1日に施行された改正保険業法について、保険代理店が留意すべき事項を実務目線で整理する解説。特別利益の提供規制や大規模乗合代理店の体制整備等を、最終的な府令・監督指針を踏まえて説明する。",
      whyImportant: ["施行済みルールを代理店の具体的な対応事項へ落とし込んでいる", "法令・監督指針の読み方と現場運用の接続を確認できる", "2026年9月の新たな案段階の論点と、すでに施行された義務を切り分けやすい"],
      audience: ["保険代理店", "損害保険会社", "企業法務", "コンプライアンス", "内部監査"],
      audienceReason: "改正法施行後の代理店実務を点検し、未対応事項を洗い出すため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["nonlife-large-agency-governance"],
      primarySourceIds: [sourceAct, sourceEffective, sourceFinalRules, sourceSupervisoryFinal],
      reformEventId: lawEventId,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [sourceEffective, sourceFinalRules],
      whatChanged: "施行済みの改正保険業法について、代理店側が実際に点検すべき体制・行為規制を実務解説で補強した。"
    }
  ]);
})();
