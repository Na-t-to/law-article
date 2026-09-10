(() => {
  const topicSlug = "ip-knowhow-data-transactions";
  const sourceId = "source-jftc-ip-transactions-survey-2026";
  const articleId = "article-jftc-ip-transactions-survey-2026";
  const supportedIssueIds = new Set([
    "iptx-information-disclosure",
    "iptx-value-compensation",
    "iptx-rnd-ownership",
    "iptx-warranty-liability"
  ]);

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "知的財産権・ノウハウ・データを対象とした優越的地位の濫用行為等に関する実態調査報告書",
      type: "government_material",
      typeLabel: "実態調査・取引事例",
      authority: "公正取引委員会",
      publishedAt: "2026-03-11",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/mar/260311_chizai.html",
      importance: "高",
      whyImportant: "91業種を対象とするアンケートとヒアリング71事例から、NDA、ノウハウ・データ開示、知財譲渡・対価、共同研究開発、知財訴訟リスク転嫁等の取引実態を示し、2026年6月の知財取引指針の事実的基礎となった資料。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    return {
      ...topic,
      lastVerified: "2026-09-10",
      issues: (topic.issues || []).map((issue) =>
        supportedIssueIds.has(issue.id)
          ? { ...issue, sourceIds: addUniqueStrings(issue.sourceIds, [sourceId]) }
          : issue
      ),
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceId])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "知的財産権・ノウハウ・データを対象とした優越的地位の濫用行為等に関する実態調査報告書",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-03-11",
      collectedAt: "2026-09-10",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/mar/260311_chizai.html",
      sourceType: "primary",
      sourceLabel: "一次資料・実態調査／知財・ノウハウ・データ取引",
      status: "adopted",
      summary: "知的財産権・ノウハウ・データの取引実態を91業種4万社へのアンケートと148件のヒアリングで調査し、ヒアリングで確認した71事例を類型化した公正取引委員会の報告書。回答6,973社のうち知財等を保有する3,824社では、603社（15.8％）が納得できない内容の取引条件等を受け入れた経験があると回答した。NDAの締結拒否・片務化、設計図面や産業データの無償開示、著作権の無償譲渡、対価の不設定・一方的設定、無償の技術指導・PoC、共同研究成果の一方的帰属、非侵害リスクの転嫁などを、独占禁止法・取適法・フリーランス法との関係も含めて整理している。",
      whyImportant: [
        "2026年6月に最終化された知財取引指針が、どのような実際の取引上の問題を背景に策定されたのかを確認できる",
        "契約条項だけでなく、工場見学、設計図面・産業データの開示、技術指導、試作品・PoCなど契約前後の運用にも知財吸い上げリスクがあることを具体例で把握できる",
        "同じ行為について独占禁止法、取適法、フリーランス法のどの規律が問題になり得るかを横断的に点検する材料になる"
      ],
      audience: [
        "企業法務・知財",
        "購買・調達",
        "研究開発・事業部門"
      ],
      audienceReason: "知財取引指針を抽象的な禁止事項として読むだけでなく、実際に問題化した取引場面へ当てはめ、NDA・開示依頼・共同研究・対価・保証条項のレビュー観点を具体化するため。",
      categories: [
        "知的財産",
        "契約",
        "独占禁止法・競争法"
      ],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "iptx-information-disclosure",
        "iptx-value-compensation",
        "iptx-rnd-ownership",
        "iptx-warranty-liability"
      ],
      primarySourceIds: [sourceId]
    }
  ]);
})();
