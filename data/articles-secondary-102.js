(() => {
  const topicSlug = "digital-commerce-tokusho-review";
  const draftSourceId = "source-caa-digital-tokusho-interim-2026";
  const finalSourceId = "source-caa-digital-tokusho-interim-final-2026";
  const reformEventId = "digital-tokusho-review-2026";
  const targetIssueIds = new Set([
    "dt-chat-solicitation",
    "dt-ui-steering",
    "dt-cancellation-contract",
    "dt-platform"
  ]);

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && (item.id || item.slug)));
    return (target || []).concat(additions.filter((item) => !existing.has(item && (item.id || item.slug))));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));
  const replaceFirstMatching = (items, matcher, replacement) => {
    let replaced = false;
    const next = (items || []).map((item) => {
      if (!replaced && matcher(item)) {
        replaced = true;
        return replacement;
      }
      return item;
    });
    return replaced ? next : next.concat([replacement]);
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: finalSourceId,
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      type: "proposal",
      typeLabel: "制度見直し・中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005",
      importance: "高",
      whyImportant: "2026年9月2日の中間取りまとめ案を経て、9月10日に公表された正式な中間取りまとめ。チャット勧誘、申込み画面・UI、契約・解約、プラットフォーム等の制度見直しを追う現行の一次資料である。一方、中間取りまとめは法案・成立法・施行済みルールではないため、現行法と区別して扱う必要がある。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const overview = replaceFirstMatching(
      topic.overview,
      (text) => typeof text === "string" && text.includes("2026年9月2日の第9回デジタル取引・特定商取引法等検討会"),
      "消費者庁は2026年9月10日、デジタル取引・特定商取引法等検討会の正式な「中間取りまとめ」を公表しました。9月2日に示された「中間取りまとめ（案）」から政策検討の段階が一つ進みましたが、法案・成立法・施行済みルールではありません。"
    );

    const facts = replaceFirstMatching(
      topic.currentSummary && topic.currentSummary.facts,
      (text) => typeof text === "string" && text.includes("2026年9月2日の第9回デジタル取引・特定商取引法等検討会"),
      "消費者庁は2026年9月10日、デジタル取引・特定商取引法等検討会の「中間取りまとめ」を公表した。9月2日の第9回検討会で示された中間取りまとめ案から正式な中間取りまとめへ移行したが、法案・成立法・施行済みルールではない。"
    );

    const uncertain = replaceFirstMatching(
      topic.currentSummary && topic.currentSummary.uncertain,
      (text) => typeof text === "string" && text.includes("2026年9月2日時点の中間とりまとめは案"),
      "2026年9月10日に正式な中間取りまとめが公表されたが、制度見直しはなお政策検討の中間段階であり、法案・成立法・施行内容ではない。今後の具体化・法制化の過程で対象範囲、要件、効果が変更される可能性がある。"
    );

    return {
      ...topic,
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      overview,
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts,
        uncertain
      },
      issues: (topic.issues || []).map((issue) => {
        if (!targetIssueIds.has(issue.id)) return issue;
        return {
          ...issue,
          sourceIds: addUniqueStrings(issue.sourceIds, [finalSourceId])
        };
      }),
      sourceIds: addUniqueStrings(topic.sourceIds, [finalSourceId])
    };
  });

  const relatedArticleIds = (window.ARTICLE_DATA || [])
    .filter((article) => (article.primarySourceIds || []).includes(draftSourceId))
    .map((article) => article.id)
    .filter(Boolean);

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => {
    if (!(article.primarySourceIds || []).includes(draftSourceId)) return article;
    return {
      ...article,
      reformEventId,
      reformStageAtPublication: article.reformStageAtPublication || "proposal",
      reformStageSourceIds: addUniqueStrings(article.reformStageSourceIds, [draftSourceId])
    };
  });

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "特定商取引法・デジタル取引規制 2026年見直し",
      eventType: "policy_review",
      lawId: "specified-commercial-transactions-act-digital-commerce",
      lawLabel: "特定商取引法・デジタル取引規制",
      relatedTopics: [topicSlug],
      matchSourceIds: [draftSourceId, finalSourceId],
      sourceIds: [draftSourceId, finalSourceId],
      articleIds: relatedArticleIds
    }
  ]);
})();
