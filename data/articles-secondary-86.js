(() => {
  const topicSlug = "consumer-contract-law-review-2026";
  const sourceId = "source-caa-consumer-contract-interim-draft-2026";
  const articleId = "article-caa-consumer-contract-interim-draft-2026";
  const issueIds = ["consumer-contract-auto-renewal-notice", "consumer-contract-terms-change-notice"];

  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));
  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    return {
      ...topic,
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      issues: addUniqueById(topic.issues, [
        {
          id: issueIds[0],
          title: "自動更新時にどの情報を事前通知する方向か",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "期間の定めがある契約の自動更新について、消費者が不更新の申出をする機会を確保するため、申出の時期・方法や更新後の契約期間等の必要情報をあらかじめ通知するよう事業者に努力を促す方向が示されている。",
          exception: "契約期間や契約内容、プッシュ型・プル型サービス等によって通知の必要性・方法が異なり得るため、中間取りまとめは一律の通知義務化には慎重な整理をしている。",
          uncertain: "努力義務等の最終的な法形式、通知すべき事項、時期・方法、対象契約は今後の法制化で具体化される。",
          sourceIds: [sourceId]
        },
        {
          id: issueIds[1],
          title: "定型約款で重要事項を変更するとき個別通知が必要になる方向か",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "民法548条の4第1項2号による定型約款変更で、かつ消費者契約の重要事項を変更する場合には、変更前に現に契約関係にある消費者へ個別通知を求める方向が示されている。",
          exception: "消費者への通知が困難で、その権利利益を保護するため必要な代替措置をとる場合の例外も検討されている。民法上の定型約款変更要件との関係から慎重な制度設計が必要とされている。",
          uncertain: "『重要事項』の具体的範囲、通知方法・タイミング、代替措置、違反時の効果等は今後の法制化で確定する。",
          sourceIds: [sourceId]
        }
      ]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, [
        "自動更新前の通知設計・証跡管理",
        "定型約款の重要変更に関する個別通知"
      ])
    };
  });

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => {
    if (article.id !== articleId) return article;
    return {
      ...article,
      relatedIssues: addUniqueStrings(article.relatedIssues, issueIds),
      whatChanged: "論点更新／2026年9月10日の正式な中間取りまとめを再確認し、自動更新前の情報通知と定型約款の重要変更時の個別通知を独立論点として追加した。"
    };
  });
})();