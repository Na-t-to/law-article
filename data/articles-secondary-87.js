(() => {
  const topicSlug = "social-insurance-expansion-pension-reform-2025";
  const reformEventId = "pension-reform-2025-social-insurance-expansion";
  const jpsSourceId = "source-jps-premium-adjustment-guide-2026";
  const decreeSourceId = "source-mhlw-premium-adjustment-decree-2026-09-04";
  const orderSourceId = "source-mhlw-premium-adjustment-order-2026-09-04";
  const articleId = "article-jps-premium-adjustment-guide-2026-09-11";
  const updateId = "update-social-insurance-premium-adjustment-procedures-2026-09-11";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = (window.SOURCE_DATA || []).map((source) =>
    source.id !== jpsSourceId
      ? source
      : {
          ...source,
          typeLabel: "一次資料・日本年金機構／実務案内（2026年9月11日更新）",
          whyImportant: "2026年9月11日更新の公式実務案内。対象事業所・申出期限、対象被保険者、保険料計算、事業主追加負担分の還付、開始申出、自動停止・停止解除（再開）まで、2026年10月1日の制度開始に必要な手続を具体化している。"
        }
  );

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const issues = (topic.issues || []).map((issue) => {
      if (issue.id === "social-insurance-employer-preparation") {
        return {
          ...issue,
          conclusion: "適用拡大の対象者を事前に抽出し、資格取得手続、給与・勤怠システム、社会保険料負担、雇用条件、本人説明を施行時期に合わせて更新する。保険料調整制度を利用する場合は、事業所が対象となった日と区分ごとの申出期限を確認し、開始申出、給与計算、還付、自動停止・停止解除（再開）までを一連の運用に組み込む。",
          exception: "保険料調整制度はすべての短時間労働者・事業所に一律適用される制度ではない。2026年10月1日時点ですでに特定適用事業所（任意特定適用事業所を含む）である事業所等は対象外となり、対象被保険者も短時間労働者かつ標準報酬月額126,000円以下等の要件を満たす必要がある。",
          uncertain: "対象事業所となる契機が複数あるため、個別事業所では任意特定適用・企業規模要件による適用拡大・個人事業所の区分と、その最初の該当日を日本年金機構の最新案内で確認する。",
          sourceIds: addUniqueStrings(issue.sourceIds, [jpsSourceId])
        };
      }
      if (issue.id === "social-insurance-premium-adjustment") {
        return {
          ...issue,
          conclusion: "2026年10月1日から、対象事業所の事業主が申出を行うことで、一定の短時間労働者の健康保険・厚生年金保険料の本人負担を通算3年間軽減できる。対象被保険者は短時間労働者として加入し標準報酬月額126,000円以下である者。対象事業所は該当区分ごとに定められ、原則として対象となった日から2年を経過した日が属する月の前月までに開始申出を行う。",
          exception: "2026年10月1日時点ですでに特定適用事業所（任意特定適用事業所を含む）となっている事業所や、対象区分へ該当する前に被保険者数が常時51人以上となった事業所等は対象外となる。複数の対象区分に該当する場合は、最初に該当した区分が申出期限の基準となる。",
          uncertain: "法人・強制適用の個人事業所・任意適用の個人事業所で対象範囲が異なるため、事業所区分と適用日を個別に照合する。",
          sourceIds: addUniqueStrings(issue.sourceIds, [jpsSourceId])
        };
      }
      return issue;
    });

    const staleUncertain = ((topic.currentSummary && topic.currentSummary.uncertain) || []).filter(
      (item) => !String(item).includes("届書様式") && !String(item).includes("手続きの詳細を今後掲載予定")
    );

    return {
      ...topic,
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "日本年金機構は2026年9月11日、保険料調整制度について、対象事業所・申出期限、対象被保険者、保険料計算、事業主追加負担分の還付、開始申出、自動停止・停止解除（再開）の各手続ページを公開・更新した。",
          "対象事業所が制度利用を申し出る期限は、原則としてその事業所が対象となった日から2年を経過した日が属する月の前月までである。例えば2026年10月中に任意特定適用事業所となった場合は2028年9月末までに開始申出書を提出する。",
          "2026年10月1日時点ですでに特定適用事業所（任意特定適用事業所を含む）である事業所は、保険料調整制度の対象外とされている。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "保険料調整制度を利用する事業所は、対象となった契機と日付を記録し、開始申出の期限を月単位で管理する。",
          "給与・社会保険手続には、開始申出だけでなく、保険料軽減額の計算、事業主追加負担分の還付、自動停止・停止解除（再開）までを手順として組み込む。"
        ]),
        uncertain: staleUncertain
      },
      issues,
      sourceIds: addUniqueStrings(topic.sourceIds, [jpsSourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["保険料調整制度の申出期限管理", "制度の自動停止・停止解除（再開）手続"])
    };
  });

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).map((event) =>
    event.id !== reformEventId
      ? event
      : {
          ...event,
          sourceIds: addUniqueStrings(event.sourceIds, [jpsSourceId]),
          articleIds: addUniqueStrings(event.articleIds, [articleId])
        }
  );

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "保険料調整制度のご案内（2026年9月11日更新）",
      publisher: "日本年金機構",
      author: "日本年金機構",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-11",
      url: "https://www.nenkin.go.jp/tokusetsu/hokenryochosei.html",
      sourceType: "primary",
      sourceLabel: "一次資料・施行準備／事業主手続",
      status: "adopted",
      summary: "2026年10月1日に始まる保険料調整制度について、日本年金機構が2026年9月11日付で実務手続を具体化した案内。対象事業所と区分別の申出期限、標準報酬月額126,000円以下の対象被保険者、保険料計算、事業主追加負担分の還付、開始申出、自動停止・停止解除（再開）までを一つの導線で確認できる。",
      whyImportant: [
        "前回まで『届書様式・手続の詳細待ち』だった部分が、制度開始直前の公式実務案内で具体化した",
        "対象事業所となった日から申出期限をどう数えるかを区分別に確認できる",
        "開始申出だけでなく、給与計算・還付・自動停止・停止解除まで運用フローを作れる"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "企業法務", "中小企業管理部門"],
      audienceReason: "2026年10月1日の制度開始前に、自社が対象事業所か、いつまでに申出が必要か、給与・社会保険システムへどの手続を実装するかを確定するため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["social-insurance-premium-adjustment", "social-insurance-employer-preparation"],
      primarySourceIds: [jpsSourceId, decreeSourceId, orderSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [jpsSourceId, decreeSourceId, orderSourceId],
      whatChanged: "実務具体化／日本年金機構が対象事業所・申出期限、開始、保険料計算・還付、自動停止・停止解除（再開）の手続を2026年9月11日付で具体化した。"
    }
  ]);

  window.UPDATE_DATA = addUniqueById(window.UPDATE_DATA, [
    {
      id: updateId,
      source: jpsSourceId,
      headline: "保険料調整制度の申出・運用手続が具体化",
      publishedAt: "2026-09-11",
      type: "law-update",
      typeLabel: "施行準備",
      summary: "日本年金機構が2026年9月11日、対象事業所・申出期限、開始申出、保険料計算、還付、自動停止・停止解除（再開）等の実務案内を公開・更新した。",
      whatChanged: "前回の『届書様式・具体的な提出実務は今後の案内を確認』という状態から、制度開始に必要な主要手続と申出期限を具体的に確認できる状態へ更新した。",
      affectedTopics: [topicSlug],
      affectedIssues: [
        {
          topic: topicSlug,
          issue: "social-insurance-premium-adjustment",
          before: "政令・省令で主要ルールは確定したが、届書様式・具体的な提出実務は日本年金機構の今後の掲載待ち",
          after: "対象事業所・申出期限、開始申出、計算・還付、自動停止・停止解除（再開）の実務案内を確認済み"
        }
      ],
      before: "保険料調整制度の主要ルールは確定していたが、制度利用開始時の具体的な手続案内は継続確認としていた。",
      after: "日本年金機構の2026年9月11日更新ページを基準に、対象事業所の区分、申出期限、開始から停止・再開までを実務単位で確認できる。",
      keyPoints: [
        "対象事業所の申出期限は原則として対象となった日から2年を経過した日が属する月の前月まで",
        "2026年10月1日時点ですでに特定適用事業所（任意特定適用を含む）の事業所等は対象外",
        "開始申出・保険料計算・還付・自動停止・停止解除まで一連の手続として管理する"
      ],
      importance: "重要",
      tags: ["労務", "社会保険"],
      confidence: "fact"
    }
  ]);
})();