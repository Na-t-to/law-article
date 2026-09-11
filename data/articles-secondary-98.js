(() => {
  const topicSlug = "fair-subcontract-transactions";
  const sourceId = "source-jftc-toridoll-recommendation-2026";
  const articleId = "article-jftc-toridoll-recommendation-2026";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "株式会社トリドールホールディングスに対する勧告について",
      type: "enforcement",
      typeLabel: "行政処分・勧告／取適法・減額禁止",
      authority: "公正取引委員会",
      publishedAt: "2026-09-09",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      importance: "高",
      whyImportant: "卸売業者を介した商流でも実質的な発注内容の決定主体を委託事業者と認定する考え方と、システム利用料名目の一律控除を代金減額として扱った最新の執行事例を同時に確認できる。",
      topics: [topicSlug]
    }
  ]);

  const newIssues = [
    {
      id: "toriteki-intermediary-commissioning-party",
      title: "卸売業者・商社を介する場合、誰が委託事業者になるか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "商社・卸売業者が発注者と外注先の間に入っていても、製品仕様、中小受託事業者の選定、代金額等の製造委託等の内容に関与せず、注文書の取次ぎや請求・支払等の事務手続を代行するにすぎない場合は、実質的に発注内容を決定する発注者が委託事業者となり得る。",
      exception: "仲介事業者自身が仕様、発注先選定、代金決定等へ実質的に関与する場合は、本件と同じ整理をそのまま当てはめず、各当事者の役割を確認する。",
      uncertain: "複層的な商流では、名義上の契約当事者だけでなく、誰が給付内容・相手方・価格等を決定しているかを個別の事実関係から確認する必要がある。",
      sourceIds: [sourceId]
    },
    {
      id: "toriteki-system-fee-deduction",
      title: "システム利用料等を委託代金から一律控除してよいか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "中小受託事業者の責めに帰すべき理由がないのに、代金支払時にシステム利用料名目で例外なく一律に一定割合を控除する方式は、取適法の代金減額禁止に抵触し得る。トリドール事案では1.1％相当額の控除が減額と認定された。",
      exception: "すべてのシステム利用契約や費用負担が直ちに違法という意味ではない。別個のサービス提供・対価関係がある場合などは、契約形式だけでなく給付と費用負担の実態を確認する。",
      uncertain: "相殺、共同システム利用料、物流費その他の名目で控除・精算する場合の評価は、受託者の責めに帰すべき理由、給付内容、合意形成、実際の負担構造等により個別に確認する必要がある。",
      sourceIds: [sourceId]
    }
  ];

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    const existingIssueIds = new Set((topic.issues || []).map((issue) => issue.id));
    return {
      ...topic,
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "公正取引委員会は2026年9月9日、トリドールホールディングスが卸売業者を介して37事業者へ食品製造を委託し、2024年8月から2026年7月まで代金から「システム利用料」名目で一律1.1％を控除した行為について、改正前の下請法と現行の取適法の双方に基づき勧告した。",
          "同事案では、卸売業者が製品仕様・中小受託事業者の選定・代金額等に関与せず発注・請求・支払等の事務を代行するにすぎず、これらの発注内容を決定していたトリドールホールディングスが委託事業者と認定された。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "取適法の対象判定では契約名義や商流上の仲介者だけでなく、仕様・発注先・代金等を実質的に誰が決定しているかを確認する。",
          "システム利用料、事務手数料等の名目を付けても、受託側に責めがないまま委託代金から一律控除する設計は減額禁止の観点から点検する。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "卸売業者・商社・プラットフォーム等を介する委託では、仕様決定、受託先選定、価格決定、発注、請求・支払の各役割を可視化し、委託事業者の判定根拠を残す。",
          "システム利用料、事務手数料、共通費等を代金から控除する運用を棚卸しし、受託側の責めに帰すべき理由なく実質的な減額になっていないか確認する。"
        ])
      },
      issues: (topic.issues || []).concat(newIssues.filter((issue) => !existingIssueIds.has(issue.id))),
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, [
        "仲介商社を挟む委託関係の主体判定",
        "システム利用料・事務手数料等の控除管理"
      ])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "株式会社トリドールホールディングスに対する勧告について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-12",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      sourceType: "primary",
      sourceLabel: "一次資料・旧下請法／取適法の勧告（代金減額）",
      status: "adopted",
      summary: "トリドールホールディングスが、卸売業者を介して食品製造を委託した37事業者への代金から「システム利用料」名目で例外なく一律1.1％を控除したとして、公正取引委員会が2026年9月9日に勧告した事案。2025年12月までの委託には改正前の下請法、2026年1月以降の委託には取適法が適用された。公表資料は、卸売業者が発注内容に関与せず事務手続を代行するだけなら、仕様・受託先・代金等を実質的に決定する発注者が委託事業者となる考え方も具体化している。",
      whyImportant: [
        "仲介業者を挟む商流でも、実質的な発注内容の決定主体を委託事業者として認定する具体例を確認できる",
        "システム利用料という別名目の一律控除が代金減額として認定されたため、各種手数料・共通費の控除設計を点検する材料になる",
        "旧下請法から取適法へまたがる継続的な違反行為について、委託時期に応じて適用法を分ける経過関係を確認できる",
        "取適法では減額分について年14.6％の遅延利息が生じることも公表資料で具体的に示されている"
      ],
      audience: ["企業法務", "購買・調達", "経理・支払担当", "コンプライアンス"],
      audienceReason: "仲介業者を挟む発注構造と代金からの手数料控除を、取適法の主体判定・減額禁止・是正対応の三点から点検するため。",
      categories: ["契約", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "toriteki-intermediary-commissioning-party",
        "toriteki-system-fee-deduction",
        "toriteki-enforcement"
      ],
      primarySourceIds: [sourceId],
      whatChanged: "重要勧告／仲介者がいる場合の委託事業者の認定と、システム利用料名目の一律控除を減額禁止として扱う具体例を既存の取適法テーマへ追加した。"
    }
  ]);
})();