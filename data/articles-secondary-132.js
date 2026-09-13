(() => {
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
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };
  const replaceText = (values, predicate, replacement) => {
    if (!Array.isArray(values)) return;
    const index = values.findIndex(predicate);
    if (index >= 0) values[index] = replacement;
    else values.push(replacement);
  };
  const replaceFirstMatching = (values, predicate, replacement) => {
    if (!Array.isArray(values)) return;
    const index = values.findIndex(predicate);
    if (index >= 0) values[index] = replacement;
  };

  const consumerTopicSlug = "consumer-contract-law-review-2026";
  const digitalTopicSlug = "digital-commerce-tokusho-review";
  const consumerSourceId = "source-caa-consumer-contract-interim-final-2026";
  const digitalSourceId = "source-caa-digital-tokusho-interim-final-2026";
  const consumerReformId = "consumer-contract-law-review-2026";
  const digitalReformId = "digital-transactions-tokusho-review-2026";

  const sources = [
    {
      id: consumerSourceId,
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      type: "guideline",
      typeLabel: "消費者庁・消費者契約法見直し／中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006",
      importance: "最高",
      whyImportant: "2026年9月9日の第9回検討会を経て成案となり、9月10日に公表された消費者契約法見直しの中間取りまとめ。消費者の多様な脆弱性への配慮、解約妨害の禁止、契約変更時の通知等について、案段階から検討会としての中間的な合意段階へ進んだことを示す一次資料。",
      topics: [consumerTopicSlug]
    },
    {
      id: digitalSourceId,
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      type: "guideline",
      typeLabel: "消費者庁・デジタル取引／特定商取引法等見直し・中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005",
      importance: "最高",
      whyImportant: "2026年9月2日の第9回検討会を経て成案となり、9月10日に公表されたデジタル取引・特定商取引法等の中間取りまとめ。ダークパターン等への規律によるインターネット取引環境の適正化や、レスキュー商法等への制度対応を具体化する政策検討の基準点となる。",
      topics: [digitalTopicSlug]
    }
  ];

  const articles = [
    {
      id: "article-caa-consumer-contract-interim-final-2026",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "消費者庁／消費者契約法検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-14",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006",
      sourceType: "primary",
      sourceLabel: "一次資料・制度見直し／中間取りまとめ",
      status: "adopted",
      summary: "消費者契約法見直しについて、2026年9月9日の第9回検討会を経て成案となり、9月10日に公表された中間取りまとめ。消費者の多様な脆弱性への配慮を促進する仕組みや、サブスクリプション等を念頭にした解約妨害の禁止、契約変更時の通知等を中間的な政策合意として整理した。成立法ではなく、消費者庁は内容をさらに具体化し、準備が整い次第パブリックコメントを実施する予定としている。",
      whyImportant: [
        "8月31日の中間取りまとめ案から、検討会として成案となった中間取りまとめへ政策段階が進んだことを確認できる",
        "解約妨害や契約変更時の通知など、継続的契約の設計・運用に直結する方向性が中間的な合意として示された",
        "なお制度の具体要件・法的効果・施行時期は未確定で、成立済みルールとして先取りしないことが重要"
      ],
      audience: ["企業法務", "消費者法務", "サブスクリプション・EC運営", "プロダクト・CS"],
      audienceReason: "解約導線、契約変更通知、脆弱な消費者への対応について、案段階から一歩進んだ政策位置を把握しつつ、現行法と将来ルールを分けて準備するため。",
      categories: ["契約", "消費者法・表示", "AI・デジタル"],
      relatedTopics: [consumerTopicSlug],
      relatedIssues: ["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees"],
      primarySourceIds: [consumerSourceId, "source-consumer-contract-act-current"],
      reformEventId: consumerReformId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [consumerSourceId],
      whatChanged: "テーマ更新／2026年9月10日に中間取りまとめが成案として公表されたため、案段階から中間的な政策合意段階へ更新した。"
    },
    {
      id: "article-caa-digital-tokusho-interim-final-2026",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "消費者庁／デジタル取引・特定商取引法等検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-14",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005",
      sourceType: "primary",
      sourceLabel: "一次資料・制度見直し／中間取りまとめ",
      status: "adopted",
      summary: "デジタル取引・特定商取引法等の見直しについて、2026年9月2日の第9回検討会を経て成案となり、9月10日に公表された中間取りまとめ。ダークパターン等への規律を含むインターネット取引環境の適正化と、レスキュー商法等への制度対応を政策の中間的な方向として整理した。成立法ではなく、今後さらに内容を具体化し、準備が整い次第パブリックコメントを実施する予定とされる。",
      whyImportant: [
        "9月2日の中間取りまとめ案から、検討会として成案となった中間取りまとめへ政策段階が進んだことを確認できる",
        "EC・SNS・チャット等を含むデジタル取引の設計を、表示文言だけでなく消費者の意思決定を左右するUI・導線の問題として追う基準点になる",
        "具体的な禁止類型・法的効果・施行時期は未確定で、現行の特商法上の義務と将来の制度案を分けて管理する必要がある"
      ],
      audience: ["企業法務", "消費者法務", "EC・マーケティング", "プロダクト・UX", "CS"],
      audienceReason: "インターネット取引の申込み・表示・勧誘・解約導線について、将来の制度改正の方向と現行ルールを区別して点検するため。",
      categories: ["消費者法・表示", "契約", "AI・デジタル"],
      relatedTopics: [digitalTopicSlug],
      relatedIssues: ["dt-social-solicitation", "dt-ui-steering", "dt-cancellation-contract", "dt-platform"],
      primarySourceIds: [digitalSourceId],
      reformEventId: digitalReformId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [digitalSourceId],
      whatChanged: "テーマ更新／2026年9月10日に中間取りまとめが成案として公表されたため、案段階から中間的な政策合意段階へ更新し、法改正情報にも独立した政策レビューとして接続した。"
    }
  ];

  const currentSources = window.SOURCE_DATA || [];
  const existingSourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const existingSourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const newSources = sources.filter((source) => !existingSourceIds.has(source.id) && !existingSourceUrls.has(normalizeUrl(source.url)));
  if (newSources.length) window.SOURCE_DATA = currentSources.concat(newSources);

  const consumerTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === consumerTopicSlug);
  if (consumerTopic) {
    addUnique(consumerTopic.sourceIds, [consumerSourceId]);
    consumerTopic.lastUpdated = "2026-09-14";
    consumerTopic.lastVerified = "2026-09-14";
    replaceFirstMatching(
      consumerTopic.overview,
      (text) => String(text).includes("2026年8月31日") && String(text).includes("中間取りまとめ（案）"),
      "消費者庁の検討会は2026年9月9日の第9回会合で中間取りまとめ案を成案とし、9月10日に中間取りまとめを公表した。消費者の多様な脆弱性への配慮、継続的な契約関係からの離脱、契約変更時の通知、解約料等を扱うが、現時点では成立法ではなく制度具体化前の中間的な政策整理である。"
    );
    if (consumerTopic.currentSummary) {
      replaceText(
        consumerTopic.currentSummary.facts,
        (text) => String(text).includes("2026年8月31日") && String(text).includes("第9回検討会"),
        "2026年9月9日の第9回検討会で中間取りまとめ案が成案となり、消費者庁は9月10日に中間取りまとめを公表した。今後は内容をさらに具体化し、準備が整い次第パブリックコメントを実施する予定である。"
      );
      replaceText(
        consumerTopic.currentSummary.uncertain,
        (text) => String(text).includes("中間取りまとめは案") || String(text).includes("2026年9月9日"),
        "中間取りまとめ自体は2026年9月10日に成案として公表されたが、なお中間的な政策整理であり、具体的な条文、要件・効果、施行時期は未確定である。消費者庁は内容の具体化とパブリックコメントを予定している。"
      );
    }
    (consumerTopic.issues || []).forEach((issue) => {
      if (["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction"].includes(issue && issue.id)) {
        addUnique(issue.sourceIds, [consumerSourceId]);
        if (typeof issue.conclusion === "string") issue.conclusion = issue.conclusion.replace("中間取りまとめ（案）は", "中間取りまとめは");
      }
    });
  }

  const digitalTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === digitalTopicSlug);
  if (digitalTopic) {
    addUnique(digitalTopic.sourceIds, [digitalSourceId]);
    digitalTopic.lastUpdated = "2026-09-14";
    digitalTopic.lastVerified = "2026-09-14";
    replaceFirstMatching(
      digitalTopic.overview,
      (text) => String(text).includes("2026年9月2日") && String(text).includes("中間とりまとめ案"),
      "消費者庁の検討会は2026年9月2日の第9回会合で中間取りまとめ案を成案とし、9月10日に中間取りまとめを公表した。ダークパターン等への規律によるインターネット取引環境の適正化や、レスキュー商法等への制度対応が盛り込まれたが、現時点では成立法ではなく制度具体化前の中間的な政策整理である。"
    );
    if (digitalTopic.currentSummary) {
      replaceText(
        digitalTopic.currentSummary.facts,
        (text) => String(text).includes("2026年9月2日") && String(text).includes("中間とりまとめ（案）"),
        "2026年9月2日の第9回検討会で中間取りまとめ案が成案となり、消費者庁は9月10日に中間取りまとめを公表した。ダークパターン等への規律を含むインターネット取引環境の適正化や、レスキュー商法等への制度対応が盛り込まれている。"
      );
      replaceText(
        digitalTopic.currentSummary.uncertain,
        (text) => String(text).includes("2026年9月2日時点") && String(text).includes("案"),
        "中間取りまとめ自体は2026年9月10日に成案として公表されたが、なお中間的な政策整理であり、具体的な対象範囲・要件・法的効果・施行時期は未確定である。消費者庁は内容の具体化とパブリックコメントを予定している。"
      );
    }
  }

  const reforms = window.REFORM_EVENT_DATA || [];
  const consumerReform = reforms.find((item) => item && item.id === consumerReformId);
  if (consumerReform) {
    addUnique(consumerReform.sourceIds, [consumerSourceId]);
    addUnique(consumerReform.matchSourceIds, [consumerSourceId]);
  }
  if (!reforms.some((item) => item && item.id === digitalReformId)) {
    reforms.push({
      id: digitalReformId,
      title: "特定商取引法等・デジタル取引規律 2026年見直し",
      eventType: "policy_review",
      lawId: "specified-commercial-transactions-act",
      lawLabel: "特定商取引法・デジタル取引規律",
      relatedTopics: [digitalTopicSlug],
      matchSourceIds: [digitalSourceId],
      sourceIds: [digitalSourceId]
    });
  }
  window.REFORM_EVENT_DATA = reforms;

  const currentUpdates = window.UPDATE_DATA || [];
  const updateId = "update-consumer-transaction-interim-reports-2026-09-10";
  if (!currentUpdates.some((item) => item && item.id === updateId)) {
    currentUpdates.push({
      id: updateId,
      source: consumerSourceId,
      headline: "消費者契約法・特商法等の見直しが中間取りまとめ確定段階へ",
      publishedAt: "2026-09-10",
      type: "law-update",
      typeLabel: "制度見直し",
      summary: "消費者契約法検討会とデジタル取引・特定商取引法等検討会の中間取りまとめが成案として公表され、案段階から中間的な政策合意段階へ進んだ。",
      whatChanged: "両テーマについて『中間取りまとめ（案）』としていた状態を、中間取りまとめ公表済み・具体化とパブリックコメント待ちへ更新した。",
      affectedTopics: [consumerTopicSlug, digitalTopicSlug],
      affectedIssues: [
        { topic: consumerTopicSlug, issue: "consumer-contract-cancellation-obstruction", before: "中間取りまとめ案段階", after: "中間取りまとめ成案・制度具体化待ち" },
        { topic: digitalTopicSlug, issue: "dt-ui-steering", before: "中間取りまとめ案段階", after: "中間取りまとめ成案・制度具体化待ち" }
      ],
      before: "2026年8月31日・9月2日の中間取りまとめ案を基礎に、内容変更の可能性を含む案段階として管理。",
      after: "2026年9月10日に両中間取りまとめが成案として公表済み。ただし成立法ではなく、具体化・パブリックコメント・法制化を継続監視。",
      keyPoints: [
        "消費者契約法では脆弱性への配慮、解約妨害の禁止、契約変更時の通知等が中間整理として確定",
        "デジタル取引ではダークパターン等への規律とレスキュー商法等への制度対応が中間整理として確定",
        "両方とも具体的要件・効果・施行時期は未確定で、パブリックコメント予定"
      ],
      importance: "最重要",
      tags: ["消費者法・表示", "契約", "AI・デジタル"],
      confidence: "fact"
    });
  }
  window.UPDATE_DATA = currentUpdates;

  const currentArticles = window.ARTICLE_DATA || [];
  const existingArticleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingArticleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const newArticles = articles.filter((article) => !existingArticleIds.has(article.id) && !existingArticleUrls.has(normalizeUrl(article.url)));
  if (newArticles.length) window.ARTICLE_DATA = currentArticles.concat(newArticles);
})();
