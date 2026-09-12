(() => {
  const canonicalSlug = "insider-trading-information-management";
  const duplicateSlug = "insider-trading-information-control";

  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));
  const addUniqueIssues = (target, additions) => {
    const existing = new Set((target || []).map((issue) => issue && issue.id));
    return (target || []).concat((additions || []).filter((issue) => issue && !existing.has(issue.id)));
  };
  const replaceTopicSlug = (values) => addUniqueStrings(
    (values || []).map((value) => value === duplicateSlug ? canonicalSlug : value),
    []
  );

  const duplicateTopic = (window.TOPIC_DATA || []).find((topic) => topic.slug === duplicateSlug);

  window.SOURCE_DATA = (window.SOURCE_DATA || []).map((source) => ({
    ...source,
    topics: replaceTopicSlug(source.topics)
  }));

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => ({
    ...article,
    relatedTopics: replaceTopicSlug(article.relatedTopics)
  }));

  if (duplicateTopic) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
      if (topic.slug !== canonicalSlug) return topic;

      const existingFacts = (topic.currentSummary && topic.currentSummary.facts) || [];
      const existingInterpretations = (topic.currentSummary && topic.currentSummary.interpretations) || [];
      const existingImplications = (topic.currentSummary && topic.currentSummary.implications) || [];
      const existingUncertain = (topic.currentSummary && topic.currentSummary.uncertain) || [];

      return {
        ...topic,
        lastUpdated: "2026-09-12",
        lastVerified: "2026-09-12",
        overview: addUniqueStrings(topic.overview, [
          "現行法でも、公開買付者等と契約を締結した外部アドバイザー等が契約の履行に関して公開買付け等事実を知れば規制対象になり得る。2026年改正で追加される対象会社側の契約・交渉関係者とは、現行法上の射程と施行前の拡張部分を分けて管理する。",
          "役職員の自社株売買は、法令上すべてを一律・恒久的に禁止する必要があるわけではない。未公表情報へのアクセスや担当職務に応じて、事前承認・報告、ブラックアウト、対象銘柄等を合理的に組み合わせる。"
        ]),
        currentSummary: {
          ...(topic.currentSummary || {}),
          facts: addUniqueStrings(existingFacts, [
            "証券取引等監視委員会は2026年9月11日、Blackstone Inc.の連結子会社とアドバイザリー契約を締結していた者が、契約履行に関してアイロムグループ株式の公開買付け等事実を知り、公表前に6600株を1224万2800円で買い付けた行為について、金商法167条1項違反として615万円の課徴金納付命令を勧告した。",
            "金融庁・証券取引等監視委員会のQ&Aは、自社株式売買を持株会経由以外すべて禁止するような社内ルールを法令上求めておらず、各社の実情に応じて過剰にならない合理的なルールを整備することが重要とする。"
          ]),
          interpretations: addUniqueStrings(existingInterpretations, [
            "公開買付者側の契約締結者は現行法でも規制対象になり得る一方、2026年改正による対象会社側の契約・交渉関係者への拡張は施行前であるため、M&A案件では『現在の規制対象』と『改正法施行後に追加される対象』を分けて管理する。",
            "役職員の売買規制は全面禁止か自由かの二択ではなく、情報アクセス、担当職務、対象銘柄、保有期間、信用取引、事前承認・事後報告等を組み合わせたリスクベースの設計が可能である。"
          ]),
          implications: addUniqueStrings(existingImplications, [
            "公開買付け・非公開M&Aでは、買付者、対象会社、FA・弁護士・会計士、外部コンサルタント、委託先等の契約関係者を案件参加者として把握し、現行法上の規制対象と改正後の追加対象を区別しながら情報アクセス権・売買制限を管理する。",
            "役職員向けの自社株・取引先株売買規程は、法令上必要な範囲と会社独自の上乗せルールを分け、事前承認・報告、ブラックアウト期間、対象者・対象銘柄、例外手続を明確にする。",
            "株式報酬や知る前契約・計画など定型的な取引は、未公表重要事実を知った後の都度判断に依存せず、公式Q&A等の要件を踏まえて事前に制度設計・記録化する。"
          ]),
          uncertain: addUniqueStrings(existingUncertain, duplicateTopic.currentSummary && duplicateTopic.currentSummary.uncertain)
        },
        issues: addUniqueIssues(topic.issues, duplicateTopic.issues),
        sourceIds: addUniqueStrings(topic.sourceIds, duplicateTopic.sourceIds),
        practicalImpacts: addUniqueStrings(topic.practicalImpacts, duplicateTopic.practicalImpacts)
      };
    }).filter((topic) => topic.slug !== duplicateSlug);
  }
})();
