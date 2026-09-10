(() => {
  const topicSlug = "fair-subcontract-transactions";
  const sourceId = "source-jftc-toridoll-recommendation-2026";
  const articleId = "article-jftc-toridoll-recommendation-2026";
  const issueId = "toriteki-deduction-system-fee";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "株式会社トリドールホールディングスに対する勧告について",
      type: "enforcement",
      typeLabel: "行政処分・勧告",
      authority: "公正取引委員会",
      publishedAt: "2026-09-09",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      importance: "高",
      whyImportant: "卸売業者を介した製造委託で、受注者37名への代金から『システム利用料』名目で一律1.1％を控除した行為について、改正前の下請法と2026年施行後の取適法の双方で代金減額禁止を適用した最新の執行事例。名目ではなく、発注後に中小受託事業者の責めに帰すべき理由なく代金を減じているかを点検する必要性が分かる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const issues = addUniqueById(topic.issues, [
      {
        id: issueId,
        title: "『システム利用料』等を製造委託等代金から控除してよいか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "発注時に定めた製造委託等代金について、中小受託事業者の責めに帰すべき理由がないのに、システム利用料・手数料等の名目で発注後に減額してはならない。2026年9月のトリドールHD勧告では、卸売業者を介した製造委託で代金の1.1％を一律に控除した行為が減額禁止違反とされた。",
        exception: "給付内容の瑕疵など中小受託事業者の責めに帰すべき理由がある場合の合理的な減額は別途検討する。そもそも取適法の対象となる取引・事業者に該当するかも先に確認する。",
        uncertain: "実費精算、相殺、値引きその他の控除が減額に当たるかは、発注時に決定した代金額、控除の時点・理由、受託側の責任の有無等を個別に確認する必要がある。",
        sourceIds: [sourceId, "source-toriteki-law-2026"]
      }
    ]);

    return {
      ...topic,
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "公正取引委員会は2026年9月9日、トリドールホールディングスが卸売業者を介して食品の製造を委託した受注者37名について、代金から『システム利用料』名目で一律1.1％を控除した行為を、改正前の下請法および2026年1月以降の取適法の代金減額禁止に違反するとして勧告した。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "代金控除の点検では『システム利用料』『手数料』『協力金』などの名目だけで整理せず、発注時の代金から受託側の責任なく減額する仕組みになっていないかを、実際の支払フローと会計処理まで確認する必要がある。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "買掛・支払システムで委託代金から定率・定額で控除する項目を棚卸しし、控除の根拠、発注時の代金額、受託側の責任の有無を確認する。",
          "商流に卸売業者等の中間事業者が入る場合も、誰が製造委託等を行い、誰の計算でどの額が控除されているかを取引実態から確認する。"
        ])
      },
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["支払控除・手数料の点検"]),
      issues
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "株式会社トリドールホールディングスに対する勧告について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-11",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      sourceType: "primary",
      sourceLabel: "一次資料・行政処分／取適法（代金減額禁止）",
      status: "adopted",
      summary: "トリドールホールディングスが、卸売業者を介して食品製造を委託した受注者37名への代金から『システム利用料』として一律1.1％を控除した事案について、公正取引委員会が2026年9月9日に勧告した資料。2025年12月までの委託には改正前下請法、2026年1月以降の委託には取適法を適用し、いずれも代金減額禁止違反として、減額分の支払と取適法施行後分の遅延利息の支払等を求めている。",
      whyImportant: [
        "2026年施行後の取適法について、代金減額禁止が実際の支払控除へどう適用されるかを確認できる",
        "『システム利用料』という費目名や中間の卸売業者の存在ではなく、製造委託の実態と代金からの控除を見ている執行例として使える",
        "購買・経理の支払システムに残る定率控除、協力金、手数料等を横断点検する具体的な起点になる"
      ],
      audience: ["企業法務", "調達・購買", "経理・支払"],
      audienceReason: "取適法対応を契約書の対象判定だけで終わらせず、実際の支払処理に組み込まれた控除項目まで点検するため。",
      categories: ["契約", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId],
      primarySourceIds: [sourceId, "source-toriteki-law-2026"],
      whatChanged: "論点追加／取適法施行後の減額禁止について、卸売業者を介した製造委託で『システム利用料』名目の一律1.1％控除が勧告対象となった具体例を追加した。"
    }
  ]);
})();