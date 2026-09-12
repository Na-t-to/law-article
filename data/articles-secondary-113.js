(() => {
  const topicSlug = "fair-subcontract-transactions";
  const sourceToridoll = "source-jftc-toridoll-reduction-2026";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceToridoll,
      title: "株式会社トリドールホールディングスに対する勧告について",
      type: "enforcement",
      typeLabel: "行政処分・勧告",
      authority: "公正取引委員会",
      publishedAt: "2026-09-09",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      importance: "高",
      whyImportant: "食品の製造委託代金から「システム利用料」名目で一律1.1%を控除した行為について、旧下請法と2026年1月施行の取適法の双方に基づき勧告が行われた事例。返金に加え、取適法適用期間の減額分について遅延利息の支払も求められており、控除・手数料設計と経過措置を同時に確認できる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    return {
      ...topic,
      lastUpdated: "2026-09-13",
      lastVerified: "2026-09-13",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings(topic.currentSummary && topic.currentSummary.facts, [
          "公正取引委員会は2026年9月9日、トリドールホールディングスが卸売業者を介して食品の製造を委託した37事業者について、2024年8月から2026年7月まで委託代金から「システム利用料」名目で一律1.1%を減額したとして勧告した。2025年12月までの委託には改正前の下請法、2026年1月以降の委託には取適法が適用され、返金に加えて取適法適用期間の減額分には遅延利息の支払も求められた。"
        ]),
        interpretations: addUniqueStrings(topic.currentSummary && topic.currentSummary.interpretations, [
          "システム利用料・手数料等の名称を付けた控除でも、委託代金から一律に差し引く設計は代金減額規制との関係を確認し、購買・経理・システム上の控除項目まで点検する。"
        ]),
        implications: addUniqueStrings(topic.currentSummary && topic.currentSummary.implications, [
          "委託代金から控除しているシステム利用料、振込関連費用、管理費その他の名目を一覧化し、取適法上の減額に当たらないかを取引単位で確認する。"
        ])
      },
      issues: (topic.issues || []).map((issue) => {
        if (issue.id !== "toriteki-enforcement") return issue;
        return {
          ...issue,
          sourceIds: addUniqueStrings(issue.sourceIds, [sourceToridoll])
        };
      }),
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceToridoll])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-jftc-toridoll-reduction-2026",
      title: "株式会社トリドールホールディングスに対する勧告について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-13",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      sourceType: "primary",
      sourceLabel: "一次資料・旧下請法／取適法／勧告（代金減額）",
      status: "adopted",
      summary: "トリドールホールディングスが、卸売業者を介して食品の製造を委託した37事業者について、2024年8月から2026年7月まで委託代金から「システム利用料」名目で一律1.1%を減額したとして、公正取引委員会が2026年9月9日に勧告した事案。2025年12月までの委託には改正前の下請法、2026年1月以降の委託には取適法が適用され、旧法期間の減額額1億4741万1330円を含む減額分の返金と、取適法適用期間の減額分に対する遅延利息の支払が求められた。",
      whyImportant: [
        "「システム利用料」等の費目を設けても、委託代金から一律に控除する設計が代金減額として問題になり得ることを最新の執行事例で確認できる",
        "2025年12月までの委託には旧下請法、2026年1月以降の委託には取適法が適用される経過関係を同一事案で確認できる",
        "取適法適用期間の減額について返金だけでなく遅延利息まで勧告対象となっており、違反把握後の精算範囲を考える材料になる"
      ],
      audience: ["購買・調達担当", "企業法務", "経理・支払担当", "コンプライアンス・内部監査"],
      audienceReason: "委託代金から差し引く利用料・手数料・管理費等を、契約書だけでなく支払システムや精算実務まで含めて点検するため。",
      categories: ["契約", "独占禁止法・競争法", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["toriteki-enforcement"],
      primarySourceIds: [sourceToridoll],
      whatChanged: "執行例追加／システム利用料名目の一律控除について、旧下請法と取適法をまたぐ代金減額勧告と返金・遅延利息の扱いを追加した。"
    },
    {
      id: "article-amt-toriteki-recommendation-2026",
      title: "COMPETITION NEWSLETTER（2026年7月8日号）―取適法連載 第4回（勧告）",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "中野 雄介・浅沼 泰成",
      publishedAt: "2026-07-08",
      collectedAt: "2026-09-13",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260708002_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／取適法・勧告制度",
      status: "adopted",
      summary: "取適法への改正で勧告制度がどのように変わったかを整理した実務解説。違反行為が既に終了していても特に必要がある場合に再発防止策等を求める勧告が可能になったこと、現に違反がある場合の是正・遅延利息、コンプライアンス研修等の再発防止措置、組織再編後の承継主体等も含む勧告対象を解説する。旧下請法下でも勧告件数が増加していたことを踏まえ、取適法下の執行を継続的に確認する必要性を示している。",
      whyImportant: [
        "取適法10条の勧告制度を、違反が継続中の場合と既に終了した場合に分けて理解できる",
        "返金や遅延利息だけでなく、役員・従業員への研修等の再発防止措置まで勧告内容になり得ることを実務的に整理している",
        "違反後の組織再編や資本金・従業員数の変動だけで勧告リスクが消えるとは限らないという継続管理上の論点を確認できる"
      ],
      audience: ["企業法務", "購買・調達担当", "コンプライアンス・内部監査", "経理・支払担当"],
      audienceReason: "取適法違反を発見した後に、返金だけで終わらせず再発防止・証跡・組織変更後の責任まで含めた是正計画を設計するため。",
      categories: ["契約", "独占禁止法・競争法", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["toriteki-enforcement"],
      primarySourceIds: ["source-toriteki-law-2026", "source-toriteki-operation-2026"],
      whatChanged: "バックフィル／取適法改正後の勧告制度と再発防止措置の実務的な読み方を補強した。"
    }
  ]);
})();
