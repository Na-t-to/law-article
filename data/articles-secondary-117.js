(() => {
  const collectedAt = "2026-09-13";
  const digitalTopicSlug = "digital-commerce-tokusho-review";
  const consumerTopicSlug = "consumer-contract-law-review-2026";
  const digitalFinalSource = "source-caa-digital-tokusho-interim-final-2026";
  const consumerFinalSource = "source-caa-consumer-contract-interim-final-2026";
  const digitalReformId = "digital-commerce-tokusho-review-2026";
  const consumerReformId = "consumer-contract-law-review-2026";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(keyOf(item))));
  };
  const addUnique = (target, values) => [...new Set([...(target || []), ...(values || [])])];
  const findTopic = (slug) => (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === slug);
  const findReform = (id) => (window.REFORM_EVENT_DATA || []).find((event) => event && event.id === id);
  const addSourceToIssues = (topic, issueIds, sourceId) => {
    if (!topic || !Array.isArray(topic.issues)) return;
    const ids = new Set(issueIds || []);
    topic.issues.forEach((issue) => {
      if (issue && ids.has(issue.id)) issue.sourceIds = addUnique(issue.sourceIds, [sourceId]);
    });
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: digitalFinalSource,
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      type: "report",
      typeLabel: "一次資料・制度見直し中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005",
      importance: "最高",
      whyImportant: "ダークパターン、SNS・チャット型勧誘、通信販売の最終確認画面・解約導線、レスキュー商法等について、特定商取引法等の制度見直しの方向を検討会の成案として確認できる。",
      topics: [digitalTopicSlug]
    },
    {
      id: consumerFinalSource,
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      type: "report",
      typeLabel: "一次資料・消費者契約法見直し中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006",
      importance: "最高",
      whyImportant: "消費者の多様な脆弱性への配慮、継続的契約の解約妨害、契約変更時の通知、解約料・説明等について、消費者契約法見直しの中間的な成案を確認できる。",
      topics: [consumerTopicSlug]
    }
  ]);

  const digitalTopic = findTopic(digitalTopicSlug);
  if (digitalTopic) {
    digitalTopic.lastUpdated = collectedAt;
    digitalTopic.lastVerified = collectedAt;
    digitalTopic.sourceIds = addUnique(digitalTopic.sourceIds, [digitalFinalSource]);
    digitalTopic.overview = (digitalTopic.overview || []).filter((text) => !String(text).includes("消費者庁は2026年9月2日の検討会で中間とりまとめ案を公表"));
    digitalTopic.overview.splice(1, 0, "消費者庁は2026年9月10日、9月2日の検討会で了承された中間取りまとめを成案として公表した。ダークパターン、SNS・チャット型勧誘、通信販売の最終確認画面・解約導線、レスキュー商法等について制度見直しの方向が示されているが、現時点で成立法・施行済みルールではない。");
    if (digitalTopic.currentSummary) {
      digitalTopic.currentSummary.facts = (digitalTopic.currentSummary.facts || []).filter((text) => !String(text).includes("2026年9月2日の第9回デジタル取引・特定商取引法等検討会で、中間とりまとめ（案）が公表された"));
      digitalTopic.currentSummary.facts.unshift("2026年9月10日、デジタル取引・特定商取引法等検討会の中間取りまとめが成案として公表された。ダークパターン、SNS・チャット型勧誘、最終確認画面・解約導線、レスキュー商法等の制度見直しが示されているが、法案・成立法ではない。");
      digitalTopic.currentSummary.uncertain = (digitalTopic.currentSummary.uncertain || []).filter((text) => !String(text).includes("2026年9月2日時点の中間とりまとめは案"));
      digitalTopic.currentSummary.uncertain.unshift("2026年9月10日に中間取りまとめは成案化されたが、具体的な法案・政省令・ガイドラインは未確定であり、対象範囲・要件・効果は今後の法制化・パブリックコメント等を確認する必要がある。");
    }
    addSourceToIssues(digitalTopic, ["dt-chat-solicitation", "dt-ui-steering", "dt-cancellation-contract", "dt-platform"], digitalFinalSource);
  }

  const consumerTopic = findTopic(consumerTopicSlug);
  if (consumerTopic) {
    consumerTopic.lastUpdated = collectedAt;
    consumerTopic.lastVerified = collectedAt;
    consumerTopic.summary = "消費者契約法の2026年見直しについて、2026年9月10日に公表された中間取りまとめを基礎に、消費者の多様な脆弱性、継続的契約からの離脱・解約妨害、更新・変更、解約料と説明、EC利用規約の不当条項まで、現行法と検討中の制度を分けて追う。";
    consumerTopic.sourceIds = addUnique(consumerTopic.sourceIds, [consumerFinalSource]);
    consumerTopic.overview = (consumerTopic.overview || []).filter((text) => !String(text).includes("消費者庁の検討会は2026年8月31日、中間取りまとめ（案）を提示した"));
    consumerTopic.overview.unshift("消費者庁は2026年9月10日、消費者契約法検討会の中間取りまとめを成案として公表した。消費者の多様な脆弱性への配慮、継続的契約の解約妨害、契約条件の変更時の通知、解約料・説明等が制度見直しの対象として整理されているが、現時点では成立法ではない。");
    if (consumerTopic.currentSummary) {
      consumerTopic.currentSummary.facts = (consumerTopic.currentSummary.facts || [])
        .filter((text) => !String(text).includes("2026年8月31日の第8回検討会で『中間取りまとめ（案）』が配布され"))
        .map((text) => String(text).replaceAll("中間取りまとめ（案）", "中間取りまとめ").replace(/^案は/, "中間取りまとめは"));
      consumerTopic.currentSummary.facts.unshift("2026年9月9日の第9回検討会で中間取りまとめ案が成案となり、消費者庁は9月10日に中間取りまとめとして公表した。今後は内容の具体化とパブリックコメントが予定されている。");
      consumerTopic.currentSummary.uncertain = (consumerTopic.currentSummary.uncertain || []).map((text) => String(text).replaceAll("中間取りまとめ（案）", "中間取りまとめ").replaceAll("中間取りまとめ案", "中間取りまとめ"));
    }
    addSourceToIssues(consumerTopic, ["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees"], consumerFinalSource);
  }

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: digitalReformId,
      title: "デジタル取引・特定商取引法等・2026年見直し",
      eventType: "policy_review",
      lawId: "specified-commercial-transactions-act-digital-commerce",
      lawLabel: "特定商取引法・デジタル取引規律",
      relatedTopics: [digitalTopicSlug],
      matchSourceIds: [digitalFinalSource],
      sourceIds: [digitalFinalSource]
    }
  ]);

  const consumerReform = findReform(consumerReformId);
  if (consumerReform) {
    consumerReform.sourceIds = addUnique(consumerReform.sourceIds, [consumerFinalSource]);
    consumerReform.matchSourceIds = addUnique(consumerReform.matchSourceIds, [consumerFinalSource]);
  }

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-caa-digital-tokusho-interim-final-2026",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "デジタル取引・特定商取引法等検討会",
      publishedAt: "2026-09-10",
      collectedAt,
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005",
      sourceType: "primary",
      sourceLabel: "一次資料・特定商取引法／デジタル取引制度見直し中間取りまとめ",
      status: "adopted",
      summary: "デジタル取引・特定商取引法等検討会が、ダークパターン、SNS・チャット型勧誘、通信販売の最終確認画面・解約導線、レスキュー商法等について制度見直しの方向を成案として整理した中間取りまとめ。2026年9月10日に消費者庁が公表し、今後の具体化・パブリックコメントへ進む基準点となる。",
      whyImportant: [
        "9月2日時点の『案』から検討会の成案へ進んだことを一次資料で確認できる",
        "EC・SNSの広告、勧誘、申込み、解約まで一連のUI・導線を制度見直しの対象として把握できる",
        "現行法と今後の法制化を混同せず、プロダクト・マーケティング・CSの準備論点を先行整理できる"
      ],
      audience: ["企業法務", "EC・デジタルサービス担当", "マーケティング", "プロダクト・UX", "カスタマーサポート"],
      audienceReason: "ダークパターンやチャット勧誘等の制度見直しが、自社の画面設計・勧誘導線・解約運用へ与える影響を法制化前から点検するため。",
      categories: ["消費者法・表示", "契約", "AI・デジタル"],
      relatedTopics: [digitalTopicSlug],
      relatedIssues: ["dt-chat-solicitation", "dt-ui-steering", "dt-cancellation-contract", "dt-platform"],
      primarySourceIds: [digitalFinalSource],
      reformEventId: digitalReformId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [digitalFinalSource],
      whatChanged: "中間取りまとめ案が検討会の成案として公表され、ダークパターン等の制度見直しが法制化・パブリックコメントへ進む基準点が確定した。"
    },
    {
      id: "article-caa-consumer-contract-interim-final-2026",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会",
      publishedAt: "2026-09-10",
      collectedAt,
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006",
      sourceType: "primary",
      sourceLabel: "一次資料・消費者契約法見直し中間取りまとめ",
      status: "adopted",
      summary: "消費者契約法の2026年見直しについて、消費者の多様な脆弱性への配慮、継続的契約の解約妨害、契約条件の変更時の通知、解約料・説明等を中間的な成案として整理した消費者庁検討会の取りまとめ。2026年9月10日に公表され、今後の制度具体化とパブリックコメントへ進む。",
      whyImportant: [
        "8月31日・9月9日の『案』段階から中間取りまとめの成案へ進んだことを確認できる",
        "サブスクリプション等では約款文言だけでなく、解約受付・UI・変更通知・解約後処理まで見直し対象になり得る",
        "解約料や脆弱性への配慮について、成立法ではない現段階の方向性と現行法を切り分けて管理できる"
      ],
      audience: ["企業法務", "消費者向けサービス担当", "EC・サブスクリプション担当", "カスタマーサポート"],
      audienceReason: "継続課金・会員制サービスの解約、契約変更、解約料、利用者対応を将来の法改正に備えて棚卸しするため。",
      categories: ["契約", "消費者法・表示", "AI・デジタル"],
      relatedTopics: [consumerTopicSlug],
      relatedIssues: ["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees"],
      primarySourceIds: [consumerFinalSource],
      reformEventId: consumerReformId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [consumerFinalSource],
      whatChanged: "中間取りまとめ案が成案として公表され、解約妨害・変更通知・脆弱性・解約料等の見直し方向が次の制度具体化へ進む基準点になった。"
    }
  ]);
})();