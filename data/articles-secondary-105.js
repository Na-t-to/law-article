(() => {
  const topicSlug = "digital-commerce-tokusho-review";
  const draftSourceId = "source-caa-digital-tokusho-interim-2026";
  const finalSourceId = "source-caa-digital-tokusho-interim-final-2026";
  const reformEventId = "digital-tokusho-review-2026";
  const finalArticleId = "article-caa-digital-tokusho-interim-final-2026";
  const draftArticleId = "article-caa-digital-tokusho-interim-2026";
  const targetIssueIds = new Set([
    "dt-chat-solicitation",
    "dt-ui-steering",
    "dt-cancellation-contract",
    "dt-platform"
  ]);

  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id)));
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
      importance: "最高",
      whyImportant: "2026年9月2日の中間取りまとめ案を経て、9月10日に正式に公表された検討会の中間取りまとめ。デジタル取引・特定商取引法制の見直し方向を追う現行の基準資料だが、法案・成立法・施行済みルールではない。",
      topics: [topicSlug]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: finalArticleId,
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "消費者庁／デジタル取引・特定商取引法等検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-12",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005",
      sourceType: "primary",
      sourceLabel: "一次資料・中間取りまとめ",
      status: "adopted",
      summary: "デジタル取引・特定商取引法等検討会が、SNS・チャット等を介した勧誘、オンライン上の表示・UI、契約・解約時の情報提供、プラットフォームを含むデジタル取引上の課題について制度見直しの方向を整理した正式な中間取りまとめ。2026年9月2日に示された案から検討会としての中間整理へ進んだが、具体的な法案・成立法・施行ルールではない。",
      whyImportant: [
        "9月2日の『中間取りまとめ（案）』から9月10日の正式な『中間取りまとめ』へ進んだことを一次資料で確認できる。",
        "SNS・チャット型勧誘やオンラインUI・解約導線など、EC・アプリ・SNSの設計に直結する見直し論点を一つの政策レビューとして追える。",
        "現行の特定商取引法上の義務と、今後法制化され得る見直し方向を分けて管理する基準点になる。"
      ],
      audience: ["企業法務", "EC・デジタルサービス担当", "広告・マーケティング", "プロダクト・UX担当", "カスタマーサポート"],
      audienceReason: "現在の法令対応を維持しつつ、勧誘、広告・UI、申込み、解約、プラットフォーム対応のどこが今後の制度見直し対象になり得るかを一次資料から確認するため。",
      categories: ["消費者法・表示", "契約", "AI・デジタル"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "dt-chat-solicitation",
        "dt-ui-steering",
        "dt-cancellation-contract",
        "dt-platform"
      ],
      primarySourceIds: [finalSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [finalSourceId],
      whatChanged: "2026年9月2日の中間取りまとめ（案）から、9月10日の正式な中間取りまとめへ移行。政策検討の中間整理として確定したが、法案・成立法・施行済みルールではない。"
    }
  ]);

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => {
    if (article.id !== draftArticleId) return article;
    return {
      ...article,
      reformEventId,
      reformStageAtPublication: article.reformStageAtPublication || "proposal",
      reformStageSourceIds: addUniqueStrings(article.reformStageSourceIds, [draftSourceId])
    };
  });

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const overview = (topic.overview || []).map((text) => {
      if (typeof text === "string" && text.includes("2026年9月2日の検討会で中間とりまとめ案を公表")) {
        return "消費者庁は2026年9月10日、デジタル取引・特定商取引法等検討会の正式な『中間取りまとめ』を公表しました。9月2日の中間取りまとめ案から検討会としての中間整理へ進みましたが、法案・成立法・施行済みルールではありません。";
      }
      return text;
    });

    const facts = ((topic.currentSummary || {}).facts || []).map((text) => {
      if (typeof text === "string" && text.includes("2026年9月2日の第9回デジタル取引・特定商取引法等検討会で、中間とりまとめ（案）が公表された")) {
        return "2026年9月10日、消費者庁はデジタル取引・特定商取引法等検討会の『中間取りまとめ』を公表した。9月2日の中間取りまとめ（案）から検討会としての中間整理へ進んだが、法案・成立法・施行済みルールではない。";
      }
      return text;
    });

    const uncertain = ((topic.currentSummary || {}).uncertain || []).map((text) => {
      if (typeof text === "string" && text.includes("2026年9月2日時点の中間とりまとめは案であり")) {
        return "2026年9月10日に正式な中間取りまとめが公表されたが、制度見直しはなお政策検討段階であり、具体的な条文化、対象範囲、要件、効果、施行時期は今後の法制化・制度設計で変わり得る。";
      }
      return text;
    });

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
      issues: (topic.issues || []).map((issue) => targetIssueIds.has(issue.id)
        ? { ...issue, sourceIds: addUniqueStrings(issue.sourceIds, [finalSourceId]) }
        : issue),
      sourceIds: addUniqueStrings(topic.sourceIds, [finalSourceId])
    };
  });

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "特定商取引法・デジタル取引規制 2026年見直し",
      eventType: "policy_review",
      lawId: "specified-commercial-transactions-act",
      lawLabel: "特定商取引法・デジタル取引法制",
      relatedTopics: [topicSlug],
      matchSourceIds: [draftSourceId, finalSourceId],
      sourceIds: [draftSourceId, finalSourceId],
      articleIds: [draftArticleId, finalArticleId]
    }
  ]);
})();
