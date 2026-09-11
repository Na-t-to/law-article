(() => {
  const topicSlug = "equal-pay-guideline-2026";
  const sourceId = "source-mhlw-equal-pay-2026";
  const primaryArticleId = "article-mhlw-equal-pay-2026";
  const articleId = "article-spica-tohoku-eizo-equal-pay-2026";
  const issueId = "equal-pay-indefinite-fulltime";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    return {
      ...topic,
      summary: "2026年10月1日施行・適用のパート・有期雇用労働法施行規則、同一労働同一賃金ガイドライン、雇用管理指針等の改正について、雇入れ時の明示、待遇差の点検・説明、派遣労働者対応に加え、無期雇用フルタイム・無期転換者へのガイドライン趣旨の波及を整理する。",
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      overview: addUniqueStrings(topic.overview, [
        "改正ガイドラインは、短時間・有期雇用労働法の直接の対象ではない無期雇用フルタイム労働者についても独立の第6を新設し、労働契約法3条2項に基づく均衡の考慮に当たりガイドラインの趣旨を考慮すべきことを明記した。特に有期契約から無期契約へ転換する際は、通常の労働者との不合理な待遇差をあらかじめ点検し、差がある場合は確実に解消することが求められる。"
      ]),
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "改正同一労働同一賃金ガイドライン第6は、所定労働時間が通常の労働者と同一で期間の定めのない労働契約を締結する労働者は短時間・有期雇用労働法2条3項の短時間・有期雇用労働者には該当しないとした上で、労働契約法3条2項による均衡の考慮に当たりガイドラインの趣旨を考慮すべきことを示している。",
          "同第6は、有期労働契約から無期労働契約への転換後の労働条件を決める際、転換対象の有期雇用労働者と通常の労働者との間に不合理な待遇差がないかをあらかじめ点検し、そのような差がある場合には確実に解消することを求めている。勤務地限定正社員、職務限定正社員、短時間正社員についても、均衡の考慮に当たりガイドラインの趣旨を考慮すべき旨等が示されている。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "無期雇用フルタイム労働者については、パート・有期雇用労働法8条・9条が直接適用されると整理するのではなく、労働契約法3条2項の均衡原則と改正ガイドライン第6を別の根拠として待遇差を点検する必要がある。『無期だから同一労働同一賃金の点検対象外』という雇用区分だけの切り分けは避ける。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "正社員、無期契約社員、無期転換者、勤務地・職務限定正社員等を含めて雇用区分ごとの待遇を棚卸しし、無期転換時には通常の労働者との待遇差を転換前に点検する。",
          "無期雇用フルタイム層については、パート・有期雇用労働法上の説明義務等と、労働契約法3条2項・改正ガイドライン第6に基づく均衡の考慮を混同せず、適用根拠を分けて社内説明資料・規程を確認する。"
        ]),
        uncertain: addUniqueStrings((topic.currentSummary && topic.currentSummary.uncertain) || [], [
          "無期雇用フルタイム労働者と通常の労働者との具体的な待遇差がどこまで違法となるかは、雇用区分名だけでは決まらず、待遇の性質・目的、就業実態、労使交渉等の個別事情と今後の裁判例を確認する必要がある。"
        ])
      },
      issues: addUniqueById(topic.issues, [
        {
          id: issueId,
          title: "無期雇用フルタイム・無期転換者の待遇差をどう点検するか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "無期雇用フルタイム労働者は短時間・有期雇用労働法の短時間・有期雇用労働者には該当しないが、労働契約法3条2項に基づく均衡の考慮に当たり改正ガイドラインの趣旨を考慮する。特に有期契約から無期契約へ転換する際は、通常の労働者との不合理な待遇差をあらかじめ点検し、そのような差がある場合には確実に解消する。",
          exception: "パート・有期雇用労働法8条・9条が無期雇用フルタイム労働者へ直接適用されることを意味せず、通常の労働者と一律に同一待遇としなければならないというルールでもない。",
          uncertain: "具体的な均衡の評価は、待遇の性質・目的、就業実態、職務・責任・配置変更範囲等の個別事情に左右され、施行後の行政運用・裁判例も継続確認する必要がある。",
          sourceIds: [sourceId]
        }
      ]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["無期雇用フルタイム・無期転換者の待遇点検", "限定正社員・多様な正社員の処遇設計"])
    };
  });

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => {
    if (article.id !== primaryArticleId) return article;
    return {
      ...article,
      summary: "2026年10月1日から施行・適用される同一労働同一賃金関係の改正省令・告示をまとめた厚生労働省の公式資料。雇入れ時の明示事項、待遇項目ごとの考え方、派遣労働者対応に加え、改正ガイドライン第6で無期雇用フルタイム労働者について労働契約法3条2項による均衡の考慮とガイドライン趣旨の考慮、無期転換時の待遇差点検を明記している。",
      whyImportant: addUniqueStrings(article.whyImportant, [
        "短時間・有期雇用労働法の直接対象外である無期雇用フルタイム労働者についても、改正ガイドライン第6が均衡待遇の確認方法を明示している"
      ]),
      relatedIssues: addUniqueStrings(article.relatedIssues, [issueId])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "「契約社員」でも無期雇用なら関係ない？――東北映像事件にみる待遇格差リスクと10月施行の新ガイドライン",
      publisher: "弁護士法人スピカ",
      author: "弁護士法人スピカ",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-11",
      url: "https://spica-law.jp/%E3%80%8C%E5%A5%91%E7%B4%84%E7%A4%BE%E5%93%A1%E3%80%8D%E3%81%A7%E3%82%82%E7%84%A1%E6%9C%9F%E9%9B%87%E7%94%A8%E3%81%AA%E3%82%89%E9%96%A2%E4%BF%82%E3%81%AA%E3%81%84%EF%BC%9F%E2%80%95%E2%80%95%E6%9D%B1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・裁判例／実務解説",
      status: "adopted",
      summary: "無期雇用フルタイムの契約社員と正社員の待遇差が争われた東北映像事件を素材に、パート・有期雇用労働法が直接適用されない無期雇用層の待遇格差リスクと、2026年10月1日適用の改正同一労働同一賃金ガイドライン第6を接続して解説する。判決の射程には慎重な見方もあることを示しつつ、雇用区分横断の待遇棚卸し、待遇の性質・目的の整理、賃金テーブル・説明資料、労使協議の記録まで実務対応へ落としている。",
      whyImportant: [
        "『無期雇用ならパート・有期法の対象外だから点検不要』という誤った短絡を、法の直接適用範囲とガイドライン第6の位置付けを分けて修正できる",
        "東北映像事件の判断を絶対視せず、上告不受理による確定と最高裁による実体判断を区別し、裁判例の射程に留保を置いている",
        "待遇差の棚卸し、待遇目的の言語化、賃金テーブル、説明資料、労使協議記録まで企業の実装項目に落としている"
      ],
      audience: ["人事・労務", "企業法務", "雇用制度・報酬制度担当"],
      audienceReason: "2026年10月改正対応をパート・有期層だけで終わらせず、無期契約社員・無期転換者・多様な正社員を含む雇用区分全体の待遇設計へ広げて点検するため。",
      categories: ["労務", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId, "equal-pay-treatment-review", "equal-pay-explanation"],
      primarySourceIds: [sourceId],
      reformEventId: "equal-pay-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceId],
      whatChanged: "論点更新／改正ガイドライン第6の無期雇用フルタイム・無期転換者への射程を、東北映像事件の実務解説と接続して独立論点化した。"
    }
  ]);
})();
