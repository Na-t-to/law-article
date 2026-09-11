(() => {
  const topicSlug = "startup-capital-markets-fiea-2026";
  const issueId = "startup-specified-investor-optup-2026";
  const finalSourceId = "source-fsa-specified-investor-optup-final-2026";
  const currentSourceId = "source-fsa-specified-investor-current-2026";
  const policySourceId = "source-jsda-fsa-startup-growth-finance-report-2025";
  const articleId = "article-fsa-specified-investor-optup-final-2026";
  const reformEventId = "fiea-specified-investor-optup-2026-ordinance";
  const updateId = "update-specified-investor-optup-2026-09";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: finalSourceId,
      title: "「金融商品取引業等に関する内閣府令の一部を改正する内閣府令」の公布及びパブリックコメントの結果等について",
      type: "regulation",
      typeLabel: "一次資料・金融庁／特定投資家移行要件の改正確定",
      authority: "金融庁",
      publishedAt: "2026-08-03",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260803/20260803.html",
      importance: "高",
      whyImportant: "個人が特定投資家へ移行できる類型のうち、証券・デリバティブ取引の頻度要件を緩和した改正府令の確定資料。2026年8月3日に公布・施行され、同時に金融商品取引業等に関するQ&A（問4）も改訂されたことを確認できる。",
      topics: [topicSlug]
    },
    {
      id: currentSourceId,
      title: "特定投資家に関する情報",
      type: "guideline",
      typeLabel: "一次資料・金融庁／現行の特定投資家要件・Q&A",
      authority: "金融庁",
      publishedAt: "2026-08-27",
      url: "https://www.fsa.go.jp/common/law/tokutei/",
      importance: "高",
      whyImportant: "2026年8月改正後の個人の特定投資家への移行要件と、金融商品取引業者等が申出者の知識・経験・財産・投資目的を踏まえて承諾可否を判断する現行運用を一覧できる金融庁の公式ページ。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const issues = [...(topic.issues || [])];
    const existingIndex = issues.findIndex((issue) => issue.id === issueId);
    const newIssue = {
      id: issueId,
      title: "現行の特定投資家への移行（プロ成り）要件はどう緩和されたか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "2026年8月3日から、個人の特定投資家への移行類型の一つについて、承諾日前1年間の証券・デリバティブ取引等は月平均4件以上である必要がなくなり、同期間に対象となる契約があれば足りる。純資産又は投資性金融資産3億円以上と、申出に係る契約種類の最初の契約から1年経過という要件は維持される。",
      exception: "形式要件を満たせば自動的に特定投資家になるわけではない。申出を受けた金融商品取引業者等は、知識・経験・財産の状況・投資目的を踏まえ、特定投資家として取り扱うことがふさわしいかを考慮して承諾可否を判断する。",
      uncertain: "2027年4月1日施行予定の2026年金商法改正で導入される、移行手続前の一定の投資家を特定投資家私募等の勧誘対象へ加える制度とは別の仕組みである。後者の具体要件は下位法令等を継続確認する。",
      sourceIds: [finalSourceId, currentSourceId, policySourceId]
    };
    if (existingIndex >= 0) issues[existingIndex] = newIssue;
    else issues.push(newIssue);

    const professionalIssueIndex = issues.findIndex((issue) => issue.id === "startup-fiea-professional-investor-solicitation-2026");
    if (professionalIssueIndex >= 0) {
      const issue = issues[professionalIssueIndex];
      issues[professionalIssueIndex] = {
        ...issue,
        exception: "仲介証券会社には適合性原則等が適用される。2026年8月3日に施行済みの『一般投資家が申出・承諾を経て特定投資家へ移行する要件の緩和』とは別制度であり、両者を混同しない。",
        sourceIds: addUniqueStrings(issue.sourceIds, [finalSourceId, currentSourceId, policySourceId])
      };
    }

    return {
      ...topic,
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      overview: addUniqueStrings(topic.overview, [
        "特定投資家制度では、2026年8月3日に現行の『プロ成り』要件の一部が先行して緩和された。これは、2027年4月1日施行予定の改正金商法で新設される、移行手続前の一定の投資家をプロ向け勧誘の対象へ広げる制度とは別に管理する必要がある。"
      ]),
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "金融庁は2026年8月3日、金融商品取引業等に関する内閣府令62条1項3号を改正し、個人の特定投資家への移行類型の一つで求めていた『承諾日前1年間の1月当たり平均4件以上』の証券・デリバティブ取引等の件数要件を削除した。改正府令は同日公布・施行された。",
          "改正後の当該類型では、承諾日前1年間に対象となる証券・デリバティブ取引等の契約があり、純資産又は投資性金融資産が3億円以上と見込まれ、申出に係る契約種類の最初の契約から1年を経過していることが要件となる。",
          "金融庁は改正と同時に金融商品取引業等に関するQ&A（問4）を改訂し、特定投資家に該当し得る者の範囲をさらに明確化した。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "2026年8月3日改正は、一般投資家が申出と金融商品取引業者等の承諾を経て特定投資家になる現行制度の入口を広げるもの。一方、2027年4月1日施行予定の改正金商法は、移行手続をしていない一定の投資家を特定投資家私募等の勧誘対象へ広げつつ、行為規制上は一般投資家として扱う別制度である。",
          "取引頻度要件の緩和だけでプロ成りが自動承認されるわけではなく、金融商品取引業者等には申出者の知識・経験・財産・投資目的に照らした承諾判断が残る。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "特定投資家への移行申出を受け付ける金融商品取引業者等は、旧来の月平均4件以上の取引件数チェックを残していないか確認し、2026年8月3日以降の要件と承諾判断プロセスへ更新する。",
          "スタートアップの資金調達では、既に特定投資家へ移行済みの者、2026年8月改正で移行しやすくなった者、2027年改正後に勧誘対象となる潜在的な特定投資家を区別して、利用できる募集・私募制度と投資者保護規制を確認する。"
        ]),
        uncertain: addUniqueStrings((topic.currentSummary && topic.currentSummary.uncertain) || [], [
          "2026年8月3日の現行プロ成り要件緩和は施行済みだが、2027年4月1日施行予定の潜在的特定投資家向け勧誘制度の対象者要件・確認方法等は下位法令等で具体化されるため、両制度の要件を先回りして統合しない。"
        ])
      },
      issues,
      sourceIds: addUniqueStrings(topic.sourceIds, [finalSourceId, currentSourceId, policySourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["特定投資家への移行申出・顧客属性確認", "プロ成りと潜在的特定投資家の制度区分"])
    };
  });

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "金融商品取引業等に関する内閣府令・特定投資家移行要件の2026年改正",
      eventType: "regulation_or_guideline",
      lawId: "financial-instruments-exchange-act",
      lawLabel: "金融商品取引法",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-08-03"],
      effectiveDateSourceIds: [finalSourceId],
      sourceIds: [finalSourceId, currentSourceId, policySourceId],
      matchSourceIds: [finalSourceId],
      articleIds: [articleId]
    }
  ]);

  window.UPDATE_DATA = addUniqueById(window.UPDATE_DATA, [
    {
      id: updateId,
      source: finalSourceId,
      headline: "個人の特定投資家への移行要件の2026年8月緩和を反映",
      publishedAt: "2026-09-11",
      type: "law-update",
      typeLabel: "施行済み制度改正",
      summary: "2026年8月3日施行の改正府令を反映し、個人の特定投資家への移行要件のうち取引頻度要件が緩和されたことを、2027年施行予定の潜在的特定投資家向け勧誘制度と分けて整理した。",
      whatChanged: "特定投資家制度を2027年改正の勧誘対象拡大だけで追う整理から、先行して施行済みの現行プロ成り要件緩和と、未施行の潜在的特定投資家制度を二層で追う整理へ更新した。",
      affectedTopics: [topicSlug],
      affectedIssues: [
        {
          topic: topicSlug,
          issue: issueId,
          before: "2025年報告書上の特定投資家要件緩和を政策経緯として参照",
          after: "2026年8月3日施行の取引頻度要件緩和を現行ルールとして独立管理"
        },
        {
          topic: topicSlug,
          issue: "startup-fiea-professional-investor-solicitation-2026",
          before: "2027年改正の特定投資家向け勧誘対象拡大を追跡",
          after: "施行済みのプロ成り要件緩和とは別制度であることを明示して追跡"
        }
      ],
      before: "特定投資家制度の要件緩和は、2025年報告書の政策形成過程と2027年施行予定の金商法改正を中心に整理。",
      after: "2026年8月3日に施行済みの現行プロ成り要件緩和を追加し、2027年施行予定の潜在的特定投資家制度と明確に分離。",
      keyPoints: [
        "月平均4件以上の取引件数要件を削除し、承諾日前1年間に対象契約があれば足りる類型へ変更",
        "純資産又は投資性金融資産3億円以上、契約種類の取引開始から1年という要件は維持",
        "2027年施行予定の潜在的特定投資家向け勧誘制度とは適用時期・法的効果・投資者保護規制が異なる"
      ],
      importance: "重要",
      tags: ["金融商品取引・開示・IR", "スタートアップ資金調達"],
      confidence: "fact"
    }
  ]);

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => {
    if (!["article-jsda-fsa-startup-growth-finance-report-2025", "article-nishimura-startup-growth-finance-report-2025"].includes(article.id)) return article;
    return { ...article, relatedIssues: addUniqueStrings(article.relatedIssues, [issueId]) };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "「金融商品取引業等に関する内閣府令の一部を改正する内閣府令」の公布及びパブリックコメントの結果等について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-08-03",
      collectedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260803/20260803.html",
      sourceType: "primary",
      sourceLabel: "一次資料・特定投資家移行要件／改正確定・施行済み",
      status: "adopted",
      summary: "個人が特定投資家へ移行できる類型のうち、証券・デリバティブ取引の頻度要件を緩和した金融庁の改正確定資料。従来は承諾日前1年間の1月当たり平均4件以上の対象契約が必要だった類型について、同期間に対象契約があれば足りる形へ改め、2026年8月3日に公布・施行した。同時に特定投資家に該当し得る者の範囲を明確化するQ&A（問4）も改訂している。",
      whyImportant: [
        "2025年の成長資金供給報告書で提言された特定投資家の移行要件緩和が、2026年8月3日に実際の現行ルールとして施行されたことを確認できる",
        "個人のプロ成りで実務上の障壁だった取引頻度要件がどこまで緩和されたかを、改正前後の府令と現行の金融庁整理から確認できる",
        "2027年4月施行予定の『移行手続前の一定の投資家へのプロ向け勧誘』とは別制度であり、施行済みルールと未施行ルールを取り違えずに資金調達・顧客管理を設計できる"
      ],
      audience: ["証券・金融商品取引業者の法務・コンプライアンス", "スタートアップ・成長企業の法務・CFO", "VC・CVC・投資担当"],
      audienceReason: "個人投資家の特定投資家への移行可否、申出・承諾時の確認、J-Ships等を含むスタートアップ資金調達での投資家区分を現行ルールへ更新するため。",
      categories: ["金融商品取引・開示・IR", "会社法・ガバナンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId, "startup-fiea-professional-investor-solicitation-2026"],
      primarySourceIds: [finalSourceId, currentSourceId],
      reformEventId,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [finalSourceId],
      whatChanged: "施行済み改正を反映／個人の特定投資家への移行類型の一つで月平均4件以上としていた取引頻度要件が撤廃され、2026年8月3日から現行ルールが緩和された。"
    }
  ]);
})();