(() => {
  const topicSlug = "fair-subcontract-transactions";
  const sourceId = "source-jftc-toridoll-recommendation-2026";
  const articleId = "article-jftc-toridoll-price-reduction-2026";
  const issueId = "toriteki-intermediary-commissioning-party";
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  // The Toridoll source/article is already loaded by the current manifest.
  // This file only adds the separate issue exposed by the official JFTC attachment:
  // who is the substantive commissioning party when a wholesaler handles clerical steps.
  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    const existingIssueIds = new Set((topic.issues || []).map((issue) => issue.id));
    const newIssue = {
      id: issueId,
      title: "卸売業者・商社を介する場合、誰が委託事業者になるか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "商社・卸売業者が発注者と中小受託事業者の間に入っていても、製品仕様、中小受託事業者の選定、代金額等の製造委託等の内容に関与せず、注文書の取次ぎや請求・支払等の事務手続を代行するにすぎない場合は、実質的に発注内容を決定する発注者が委託事業者となり得る。",
      exception: "仲介事業者自身が仕様、発注先選定、代金決定等へ実質的に関与する場合は、本件と同じ整理をそのまま当てはめず、各当事者の役割を確認する。",
      uncertain: "複層的な商流では、名義上の契約当事者だけでなく、誰が給付内容・相手方・価格等を決定しているかを個別の事実関係から確認する必要がある。",
      sourceIds: [sourceId]
    };
    return {
      ...topic,
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "2026年9月9日のトリドールホールディングス勧告では、卸売業者が製品仕様・中小受託事業者の選定・代金額等に関与せず、発注・請求・支払等の事務を代行するにすぎなかったため、これらの発注内容を決定していたトリドールホールディングスが委託事業者と認定された。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "取適法の対象判定では契約名義や商流上の仲介者だけでなく、仕様・発注先・代金等を実質的に誰が決定しているかを確認する。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "卸売業者・商社等を介する委託では、仕様決定、受託先選定、価格決定、発注、請求・支払の各役割を可視化し、委託事業者の判定根拠を残す。"
        ])
      },
      issues: existingIssueIds.has(issueId) ? (topic.issues || []) : (topic.issues || []).concat([newIssue]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["仲介商社を挟む委託関係の主体判定"])
    };
  });

  window.SOURCE_DATA = (window.SOURCE_DATA || []).map((source) => {
    if (source.id !== sourceId) return source;
    return {
      ...source,
      whyImportant: "『システム利用料』名目の一律控除を代金減額として扱った最新事例であると同時に、卸売業者が発注内容に関与せず事務を代行するだけの場合に、仕様・受託先・代金等を実質的に決定する者を委託事業者と認定する考え方を確認できる。"
    };
  });

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => {
    if (article.id !== articleId) return article;
    return {
      ...article,
      relatedIssues: addUniqueStrings(article.relatedIssues, [issueId]),
      whyImportant: addUniqueStrings(article.whyImportant, [
        "卸売業者が仕様・受託先・代金等の決定に関与せず発注・請求・支払等の事務だけを担う場合、実質的な発注内容の決定者が委託事業者となる具体例も確認できる"
      ])
    };
  });
})();