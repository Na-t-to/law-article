(() => {
  if (window.__LAW_INDEX_RUN242_APPLIED__) return;
  window.__LAW_INDEX_RUN242_APPLIED__ = true;

  const CONSUMER_TOPIC = "consumer-contract-law-review-2026";
  const CONSUMER_REFORM = "consumer-contract-law-review-2026";
  const CAA_INTERIM_SOURCE = "source-caa-consumer-contract-interim-final-2026";
  const CAA_COMMENT_SOURCE = "source-caa-consumer-contract-public-comment-2026";
  const CONSUMER_ARTICLE = "article-miyake-consumer-contract-interim-20260919";

  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };
  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));
  const addUniqueMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(values || [])].filter(Boolean)));

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== CONSUMER_TOPIC) return topic;
    const currentSummary = topic.currentSummary || {};
    const issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
      if (!issue || !["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees"].includes(issue.id)) return issue;
      return { ...issue, sourceIds: addUnique(issue.sourceIds, CAA_INTERIM_SOURCE) };
    });
    return {
      ...topic,
      lastUpdated: "2026-09-23",
      lastVerified: "2026-09-23",
      overview: addUnique(topic.overview, "2026年9月10日、消費者庁の検討会は中間取りまとめを正式に公表し、9月16日から法制的な検討に先立つパブリックコメントを開始した。中間取りまとめは法案ではなく、今後の法制化過程で変更され得る。"),
      currentSummary: {
        ...currentSummary,
        facts: addUniqueMany(currentSummary.facts, [
          "2026年9月10日、消費者契約法検討会の中間取りまとめが正式に公表され、9月16日から10月31日まで意見募集が行われている。",
          "中間取りまとめは、消費者の多様な脆弱性への配慮、一定の場合の契約からの解放、継続的契約における解約妨害の禁止・合理的な離脱方法、自動更新・重要変更時の通知、解約料に関する情報提供・説明等を主要論点としている。",
          "現段階は法案提出前の制度検討であり、中間取りまとめの内容がそのまま成立法になると確定したものではない。"
        ]),
        interpretations: addUniqueMany(currentSummary.interpretations, [
          "見直し案は規律の強度が一様ではなく、解約妨害の禁止・差止、重要な約款変更時の通知、配慮・説明等を区別して読む必要がある。",
          "法制化を待たず、解約導線、約款変更の通知設計、解約料の算定根拠・説明資料を棚卸しすると、自社実務と検討中規律のずれを把握しやすい。"
        ]),
        implications: addUniqueMany(currentSummary.implications, [
          "サブスクリプション等について、解約導線・解約受付・自動更新通知・重要な約款変更通知を一連の顧客体験として点検する。",
          "解約料・違約金について、現行法上の平均的損害の基準と、検討中の情報提供・説明強化を分けて管理し、算定根拠を説明できる資料を整える。"
        ]),
        uncertain: addUniqueMany(currentSummary.uncertain, [
          "2026年9月10日の中間取りまとめは法案ではなく、パブリックコメント後の法制的検討で条文・対象範囲・法的効果が変更される可能性がある。",
          "解約妨害の具体的類型、配慮規定・契約からの解放手段の最終要件、解約料規律の条文構造、施行時期は未確定である。"
        ])
      },
      issues,
      sourceIds: addUniqueMany(topic.sourceIds, [CAA_INTERIM_SOURCE, CAA_COMMENT_SOURCE])
    };
  });

  const reform = (window.REFORM_EVENT_DATA || []).find((event) => event && event.id === CONSUMER_REFORM);
  if (reform) {
    reform.matchSourceIds = addUniqueMany(reform.matchSourceIds, [CAA_INTERIM_SOURCE, CAA_COMMENT_SOURCE]);
    reform.sourceIds = addUniqueMany(reform.sourceIds, [CAA_INTERIM_SOURCE, CAA_COMMENT_SOURCE]);
    reform.articleIds = addUnique(reform.articleIds, CONSUMER_ARTICLE);
  }

  const update = {
    id: "update-consumer-contract-20260910-interim",
    source: CAA_INTERIM_SOURCE,
    headline: "消費者契約法見直しが中間取りまとめ・意見募集段階へ",
    publishedAt: "2026-09-10",
    type: "law-update",
    typeLabel: "制度見直し",
    summary: "8月31日の中間取りまとめ案から、9月10日の正式な中間取りまとめと9月16日開始のパブリックコメントへ進んだことを反映した。",
    whatChanged: "検討会案の段階から正式な中間取りまとめへ進み、法制的検討に先立つ意見募集が始まった。",
    affectedTopics: [CONSUMER_TOPIC],
    affectedIssues: [
      { topic: CONSUMER_TOPIC, issue: "consumer-contract-vulnerability-release", before: "中間取りまとめ案を追跡", after: "正式な中間取りまとめとして方向性を追跡" },
      { topic: CONSUMER_TOPIC, issue: "consumer-contract-cancellation-obstruction", before: "案段階の解約妨害規律", after: "中間取りまとめ・パブコメ段階の解約妨害規律" },
      { topic: CONSUMER_TOPIC, issue: "consumer-contract-cancellation-fees", before: "案段階の解約料整理", after: "中間取りまとめ・パブコメ段階の説明強化方向" }
    ],
    before: "2026年8月31日の中間取りまとめ（案）を基に、9月9日の検討会での修正可能性を残して整理。",
    after: "2026年9月10日の中間取りまとめと9月16日開始の意見募集を基準に、法案前の制度検討として追跡。",
    keyPoints: ["中間取りまとめは法案ではない", "解約妨害・重要変更通知・配慮等で規律の強度が異なる", "10月31日まで意見募集が行われる"],
    importance: "重要",
    tags: ["消費者法・表示", "契約"],
    confidence: "fact"
  };
  const existingUpdateIds = new Set((window.UPDATE_DATA || []).map((item) => item && item.id).filter(Boolean));
  if (!existingUpdateIds.has(update.id)) window.UPDATE_DATA = (window.UPDATE_DATA || []).concat(update);

  const article = {
    id: CONSUMER_ARTICLE,
    title: "【動画解説・動画資料】消費者契約法アップデート 中間取りまとめとパブリックコメント～配慮規定・契約からの解放手段・サブスクの解約・解約料",
    publisher: "三宅法律事務所",
    author: "渡邉雅之",
    publishedAt: "2026-09-19",
    collectedAt: "2026-09-23",
    url: "https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E6%B6%88%E8%B2%BB%E8%80%85%E5%A5%91%E7%B4%84%E6%B3%95%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC/",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／消費者契約法2026年見直し",
    status: "adopted",
    summary: "2026年9月10日の消費者契約法検討会中間取りまとめと9月16日開始のパブリックコメントを、配慮規定、契約からの解放、サブスクリプションの解約妨害・自動更新、重要な約款変更、解約料という実務単位で整理する解説。中間取りまとめは法案ではないことを明示しつつ、禁止・差止、通知義務、努力義務・配慮など規律の強度を分け、現行法の下でも先行して点検できる解約導線・通知・解約料説明を示している。",
    whyImportant: [
      "中間取りまとめを成立済みルールと誤認せず、法案前の制度検討として正確に位置付けている",
      "解約妨害、重要変更通知、配慮・説明について規律の強度が異なることを分けて説明している",
      "サブスクの解約導線、自動更新、約款変更通知、解約料の説明というプロダクト・契約実務へ具体化している",
      "パブリックコメント前に自社実務を棚卸しし、制度案が機能するかを検証する順序まで示している"
    ],
    audience: ["企業法務", "消費者向けサービス担当", "EC・サブスクリプション事業者", "プロダクト・UX担当", "カスタマーサポート"],
    audienceReason: "消費者契約法の見直しを法案前の段階で正確に追いながら、解約・更新・約款変更・解約料の実務を先行点検するため。",
    categories: ["契約", "消費者法・表示", "AI・デジタル"],
    relatedTopics: [CONSUMER_TOPIC],
    relatedIssues: ["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees"],
    primarySourceIds: [CAA_INTERIM_SOURCE, CAA_COMMENT_SOURCE, "source-consumer-contract-act-current"],
    reformEventId: CONSUMER_REFORM,
    reformStageAtPublication: "proposal",
    reformStageSourceIds: [CAA_INTERIM_SOURCE, CAA_COMMENT_SOURCE],
    legacyReformInference: false,
    whatChanged: "制度見直し／中間取りまとめ案から正式な中間取りまとめ・意見募集段階へ進んだ状態と、企業が先行点検できる実務項目を補強した。"
  };

  let currentArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    currentArticles = currentArticles.concat(article);
  }
  window.ARTICLE_DATA = currentArticles;
})();
