(() => {
  const topicSlug = "social-insurance-expansion-pension-reform-2025";
  const reformEventId = "pension-reform-2025-social-insurance-expansion";
  const decreeSourceId = "source-mhlw-premium-adjustment-decree-2026-09-04";
  const orderSourceId = "source-mhlw-premium-adjustment-order-2026-09-04";
  const jpsSourceId = "source-jps-premium-adjustment-guide-2026";
  const articleId = "article-mhlw-premium-adjustment-final-rules-2026";
  const issueId = "social-insurance-premium-adjustment";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: decreeSourceId,
      title: "年金制度改正法の一部施行に伴う経過措置に関する政令（令和8年政令第272号）",
      type: "government_material",
      typeLabel: "一次資料・保険料調整制度／経過措置政令",
      authority: "厚生労働省",
      publishedAt: "2026-09-04",
      url: "https://www.mhlw.go.jp/hourei/doc/hourei/H260904T0010.pdf",
      importance: "最高",
      whyImportant: "2026年10月1日に始まる保険料調整制度について、対象事業所の除外、標準報酬月額等級ごとの増加負担割合、申出ができない事業所等を確定した政令。",
      topics: [topicSlug]
    },
    {
      id: orderSourceId,
      title: "年金制度改正法の一部施行に伴う経過措置に関する省令（令和8年厚生労働省令第137号）",
      type: "government_material",
      typeLabel: "一次資料・保険料調整制度／経過措置省令",
      authority: "厚生労働省",
      publishedAt: "2026-09-04",
      url: "https://www.mhlw.go.jp/hourei/doc/hourei/H260907T0070.pdf",
      importance: "最高",
      whyImportant: "厚生年金・健康保険の保険料調整制度について、事業主の申出事項、停止解除、遡及して保険料調整額が変わる場合の届出、同月得喪等の手続きを定め、2026年10月1日施行とした省令。",
      topics: [topicSlug]
    },
    {
      id: jpsSourceId,
      title: "保険料調整制度のご案内",
      type: "government_material",
      typeLabel: "一次資料・日本年金機構／実務案内",
      authority: "日本年金機構",
      publishedAt: "2026-04-01",
      url: "https://www.nenkin.go.jp/tokusetsu/hokenryochosei.html",
      importance: "最高",
      whyImportant: "対象事業所・対象被保険者、標準報酬月額ごとの本人／事業主負担割合、通算3年間の軽減、対象日から2年以内の申出を事業主向けに一覧できる公式実務案内。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const issueUpdates = (topic.issues || []).map((issue) => {
      if (issue.id !== "social-insurance-employer-preparation") return issue;
      return {
        ...issue,
        conclusion: "適用拡大の対象者を事前に抽出し、資格取得手続、給与・勤怠システム、社会保険料負担、雇用条件、本人説明を施行時期に合わせて更新する。保険料調整制度を利用する場合は、対象事業所となった日から2年以内の申出、対象者の標準報酬月額、3年間の利用期間を給与・社会保険実務に組み込む。",
        exception: "保険料調整制度はすべての短時間労働者・事業所に一律適用される制度ではない。2026年9月30日以前に任意特定適用事業所となった事業所などは対象外となり、対象被保険者も短時間労働者かつ標準報酬月額126,000円以下等の要件を満たす必要がある。",
        uncertain: "政令・省令により制度の主要ルールは確定したが、日本年金機構は届書様式や手続きの詳細を今後掲載予定としているため、実際の申出時には最新様式・事務案内を確認する。",
        sourceIds: addUniqueStrings(issue.sourceIds, [decreeSourceId, orderSourceId, jpsSourceId])
      };
    });

    const issues = addUniqueById(issueUpdates, [
      {
        id: issueId,
        title: "保険料調整制度の対象・負担割合・申出をどう運用するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "2026年10月1日から、対象事業所の事業主が申出を行うことで、一定の短時間労働者の健康保険・厚生年金保険料の本人負担を通算3年間軽減できる。対象被保険者は短時間労働者として加入し標準報酬月額126,000円以下である者で、負担割合は標準報酬月額に応じて定まり、制度利用3年目は軽減幅が半減する。",
        exception: "2026年9月30日以前に任意特定適用事業所となった事業所は対象外であり、政令が定める申出不可事業所もある。制度利用には対象事業所となった日から2年以内の事業主の申出が必要で、各従業員が必ず3年間軽減されるわけではなく、事業所の制度利用期間の残存期間に左右される。",
        uncertain: "政令・省令で主要な対象・割合・申出ルールは確定した。届書様式や具体的な提出実務は、日本年金機構が今後掲載する最新案内を確認する。",
        sourceIds: [decreeSourceId, orderSourceId, jpsSourceId]
      }
    ]);

    const existingUncertain = ((topic.currentSummary && topic.currentSummary.uncertain) || []).filter(
      (item) => !String(item).includes("保険料調整措置")
    );

    return {
      ...topic,
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      overview: addUniqueStrings(topic.overview, [
        "2026年9月4日に保険料調整制度の経過措置政令（令和8年政令第272号）と省令（令和8年厚生労働省令第137号）が公布され、対象事業所、増加負担割合、申出・届出等の主要ルールが確定した。いずれも2026年10月1日施行である。"
      ]),
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "保険料調整制度の経過措置政令・省令は2026年9月4日に公布され、2026年10月1日から施行される。制度を利用できる対象被保険者は短時間労働者として健康保険・厚生年金保険に加入し、標準報酬月額が126,000円以下である者である。",
          "日本年金機構の案内では、制度利用1～2年目の本人／事業主負担割合は標準報酬月額に応じ25:75から48:52まで段階設定され、3年目は軽減幅が半減する。事業主の追加負担分は後に調整され、最終的な事業主の納付保険料総額は増えず、被保険者の将来の年金額にも影響しない。",
          "制度利用には、事業所が対象となった日から2年以内に事業主の申出が必要である。2026年10月1日以降に任意特定適用事業所となる事業所は対象になり得る一方、2026年9月30日以前に任意特定適用事業所となった事業所は対象外である。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "保険料調整制度は単なる従業員向け給付ではなく、事業主が対象判定・申出・給与控除・社会保険料計算を一体で運用する制度である。適用拡大の対象者シミュレーションと同時に、制度利用の可否・開始時期・3年間の管理方法を設計する必要がある。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "保険料調整制度の利用を検討する事業所は、任意特定適用事業所となった時期、今後の企業規模要件の適用時期、対象者の標準報酬月額を照合し、対象日から2年以内の申出期限を管理する。",
          "給与・社会保険システムでは、標準報酬月額ごとの本人／事業主負担割合、3年目の軽減幅縮小、途中加入者の残存利用期間を扱えるか確認する。"
        ]),
        uncertain: addUniqueStrings(existingUncertain, [
          "保険料調整制度の主要ルールは政令・省令で確定したが、日本年金機構は届書様式や手続きの詳細を今後掲載予定としているため、申出開始前に最新の事務案内を確認する必要がある。"
        ])
      },
      issues,
      sourceIds: addUniqueStrings(topic.sourceIds, [decreeSourceId, orderSourceId, jpsSourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["保険料調整制度の申出・3年間の期間管理", "短時間労働者の本人負担軽減・給与計算"])
    };
  });

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).map((event) =>
    event.id !== reformEventId
      ? event
      : {
          ...event,
          effectiveDateNote: "段階実施。保険料調整制度は2026年10月1日施行。賃金要件は2025年6月20日公布から3年以内の政令日で撤廃（厚労省は2026年10月予定と案内し、2026年9月8日に施行期日政令等を閣議決定）。企業規模要件は2027年10月から段階縮小し2035年10月に撤廃。常時5人以上の個人事業所の全業種適用拡大は2029年10月。",
          effectiveDateSourceIds: addUniqueStrings(event.effectiveDateSourceIds, [decreeSourceId, orderSourceId]),
          sourceIds: addUniqueStrings(event.sourceIds, [decreeSourceId, orderSourceId, jpsSourceId])
        }
  );

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "保険料調整制度の経過措置政令・省令（2026年10月1日施行）",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-04",
      collectedAt: "2026-09-10",
      url: "https://www.mhlw.go.jp/hourei/doc/hourei/H260904T0010.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・保険料調整制度／最終政省令",
      status: "adopted",
      summary: "2025年年金制度改正で設けられた保険料調整制度について、対象事業所、標準報酬月額等級ごとの増加負担割合、申出不可事業所、事業主の申出・変更時の届出等を具体化した最終政令・省令。2026年10月1日に施行される。",
      whyImportant: [
        "これまで未確定としていた保険料調整制度の対象・負担割合・申出ルールが最終政省令で確定した",
        "2026年10月1日以降に任意特定適用事業所となる場合や、2027年以降の社会保険適用拡大で新たに対象となる中小企業の給与・社会保険実務に直結する",
        "日本年金機構の実務案内と合わせると、標準報酬月額126,000円以下、対象日から2年以内の申出、通算3年間という運用単位を確認できる"
      ],
      audience: "人事・労務、給与・社会保険担当、法務、経営企画",
      audienceReason: "社会保険適用拡大に伴う対象者判定と、保険料調整制度の申出・給与計算・期間管理を2026年10月施行前に準備するため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId, "social-insurance-employer-preparation"],
      primarySourceIds: [decreeSourceId, orderSourceId, jpsSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [decreeSourceId, orderSourceId],
      whatChanged: "制度具体化／保険料調整制度の対象事業所、標準報酬月額別の負担割合、申出・届出等が最終政省令で確定し、2026年10月1日施行が明確になった。"
    }
  ]);

  window.UPDATE_DATA = addUniqueById(window.UPDATE_DATA, [
    {
      id: "update-social-insurance-premium-adjustment-2026-09",
      source: decreeSourceId,
      headline: "保険料調整制度の対象・負担割合・申出ルールが確定",
      publishedAt: "2026-09-10",
      type: "law-update",
      typeLabel: "施行準備",
      summary: "2026年9月4日公布の経過措置政令・省令を反映し、2025年年金制度改正の保険料調整制度について、対象事業所・対象被保険者、標準報酬月額別の負担割合、申出・届出を施行前の確定ルールとして整理した。",
      whatChanged: "最終政省令・申出実務の確認待ちだった整理から、2026年10月1日施行の主要ルールが確定した整理へ更新した。",
      affectedTopics: [topicSlug],
      affectedIssues: [
        {
          topic: topicSlug,
          issue: issueId,
          before: "保険料調整措置の具体的な対象・申出・届出実務は最終政省令待ち",
          after: "対象事業所・標準報酬月額126,000円以下・負担割合・2年以内の申出等を確定ルールとして登録"
        }
      ],
      before: "3年間の保険料負担軽減措置が設けられることは把握していたが、対象・負担割合・手続の最終ルールは継続確認としていた。",
      after: "政令第272号・厚生労働省令第137号と日本年金機構案内を基準に、2026年10月1日施行の保険料調整制度を実務単位で確認できる。",
      keyPoints: [
        "対象被保険者は短時間労働者として加入し標準報酬月額126,000円以下の者",
        "本人／事業主の負担割合は標準報酬月額に応じて変わり、制度利用3年目は軽減幅が半減する",
        "事業所が対象となった日から2年以内に事業主の申出が必要で、届書様式等は日本年金機構の最新案内を継続確認する"
      ],
      importance: "重要",
      tags: ["労務", "社会保険"],
      confidence: "fact"
    }
  ]);
})();
