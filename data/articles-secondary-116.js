(() => {
  const consumerTopic = "consumer-contract-law-review-2026";
  const digitalTopic = "digital-commerce-tokusho-review";
  const consumerReform = "consumer-contract-law-review-2026";
  const digitalReform = "digital-commerce-tokusho-review-2026";
  const consumerFinal = "source-caa-consumer-contract-interim-final-2026";
  const digitalFinal = "source-caa-digital-tokusho-interim-final-2026";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && (item.id || item.slug)));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id || item.slug)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: consumerFinal,
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      type: "proposal",
      typeLabel: "一次資料・制度見直し／中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      importance: "最高",
      whyImportant: "消費者契約法の2026年見直しについて、脆弱性への配慮、継続契約の解約・更新・変更、解約料の立証責任と説明規律を、検討会の中間取りまとめとして確認できる基準資料。",
      topics: [consumerTopic]
    },
    {
      id: digitalFinal,
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      type: "proposal",
      typeLabel: "一次資料・制度見直し／中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      importance: "最高",
      whyImportant: "SNS・チャット型勧誘、意思決定を歪めるUI、申込み・解約導線、プラットフォーム、レスキュー商法等について、特定商取引法等の制度整備の方向を検討会の中間取りまとめとして確認できる。",
      topics: [digitalTopic]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug === consumerTopic) {
      const facts = (topic.currentSummary?.facts || []).map((fact) => {
        if (fact.includes("2026年8月31日の第8回検討会")) return "2026年9月10日、検討会は中間取りまとめを公表した。現時点では制度見直しの中間整理であり、成立法ではない。";
        if (fact.includes("中間取りまとめ（案）は")) return fact.replace("中間取りまとめ（案）は", "中間取りまとめは");
        if (fact.startsWith("案は解約妨害に")) return fact.replace("案は", "中間取りまとめは");
        return fact;
      });
      const interpretations = (topic.currentSummary?.interpretations || []).map((item) =>
        item.includes("案の『環境設計』") ? item.replace("案の『環境設計』", "中間取りまとめの『環境設計』") : item
      );
      const uncertain = (topic.currentSummary?.uncertain || []).map((item) => {
        if (item.includes("中間取りまとめ") && item.includes("案")) return "2026年9月10日の中間取りまとめは検討会の中間整理であり、法案・成立法ではない。対象範囲、要件、効果は今後の具体化・パブリックコメント・法制化過程で変更される可能性がある。";
        return item;
      });
      return {
        ...topic,
        lastUpdated: "2026-09-13",
        lastVerified: "2026-09-13",
        overview: (topic.overview || []).map((item) => item.includes("2026年8月31日")
          ? "消費者庁の検討会は2026年9月10日、中間取りまとめを公表した。解約妨害、更新・変更時の通知、消費者の多様な脆弱性への配慮、解約料の説明規律などを今後の制度整備候補として整理している。"
          : item),
        currentSummary: { ...(topic.currentSummary || {}), facts, interpretations, uncertain },
        sourceIds: addUniqueStrings(topic.sourceIds, [consumerFinal]),
        issues: (topic.issues || []).map((issue) => {
          if (!["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees"].includes(issue.id)) return issue;
          return { ...issue, sourceIds: addUniqueStrings(issue.sourceIds, [consumerFinal]) };
        })
      };
    }

    if (topic.slug === digitalTopic) {
      const facts = (topic.currentSummary?.facts || []).map((fact) => {
        if (fact.includes("2026年9月2日の第9回")) return "2026年9月10日、デジタル取引・特定商取引法等検討会は中間取りまとめを公表した。";
        if (fact.includes("中間とりまとめ案では")) return fact.replace("中間とりまとめ案では", "中間取りまとめでは");
        return fact;
      });
      const implications = (topic.currentSummary?.implications || []).map((item) => item.includes("今後の最終とりまとめ")
        ? "今後の法案、成立法、政省令・ガイドライン等を確認し、具体的な対象範囲・判断基準が確定した段階で現行運用との差分を再評価する。"
        : item);
      const uncertain = (topic.currentSummary?.uncertain || []).map((item) => item.includes("2026年9月2日時点")
        ? "2026年9月10日の中間取りまとめは検討会の中間整理であり、法案・成立法・施行内容ではない。対象行為の範囲や判断基準は今後の法制化・下位法令等で具体化される。"
        : item);
      return {
        ...topic,
        lastUpdated: "2026-09-13",
        lastVerified: "2026-09-13",
        overview: (topic.overview || []).map((item) => item.includes("2026年9月2日の検討会")
          ? "消費者庁の検討会は2026年9月10日、中間取りまとめを公表し、インターネット上の不意打ち的勧誘、意思決定を歪めるUI、申込み・解約導線、プラットフォーム、レスキュー商法等について制度整備の方向を整理した。"
          : item),
        currentSummary: { ...(topic.currentSummary || {}), facts, implications, uncertain },
        sourceIds: addUniqueStrings(topic.sourceIds, [digitalFinal]),
        issues: (topic.issues || []).map((issue) => ({ ...issue, sourceIds: addUniqueStrings(issue.sourceIds, [digitalFinal]) }))
      };
    }
    return topic;
  });

  window.REFORM_EVENT_DATA = addUniqueById((window.REFORM_EVENT_DATA || []).map((event) => {
    if (event.id !== consumerReform) return event;
    return {
      ...event,
      matchSourceIds: addUniqueStrings(event.matchSourceIds, [consumerFinal]),
      sourceIds: addUniqueStrings(event.sourceIds, [consumerFinal])
    };
  }), [
    {
      id: digitalReform,
      title: "デジタル取引・特定商取引法等・2026年見直し",
      eventType: "policy_review",
      lawId: "specified-commercial-transactions-act-digital-review",
      lawLabel: "特定商取引法等・デジタル取引見直し",
      relatedTopics: [digitalTopic],
      matchSourceIds: ["source-caa-digital-tokusho-interim-2026", digitalFinal],
      sourceIds: ["source-caa-digital-tokusho-interim-2026", digitalFinal]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-caa-consumer-contract-interim-final-2026",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "消費者庁／消費者契約法検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-13",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・制度見直し／中間取りまとめ",
      status: "adopted",
      summary: "消費者の多様な脆弱性への配慮、継続契約の解約妨害・合理的な離脱方法・更新・変更通知、死亡時対応、解約料の説明規律など、消費者契約法の見直し方向を整理した中間取りまとめ。解約料についてはA案・B案・折衷案を検討した上で、今回は9条1項1号自体は見直さず、説明制度を拡充する方向を示す。",
      whyImportant: [
        "8月31日の案から9月10日の中間取りまとめへ進み、今後の制度具体化で参照すべき基準資料が更新された",
        "継続契約では解約妨害の禁止、合理的な離脱方法、更新前通知、重要事項変更時の個別通知など、事業者の運用に直結する方向が示された",
        "解約料は立証責任のA案・B案・折衷案を検討した上で、今回は9条1項1号自体を見直さず説明制度を拡充するという到達点を確認できる"
      ],
      audience: ["企業法務", "EC・サブスクリプション事業者", "カスタマーサポート", "事業企画・プロダクト"],
      audienceReason: "解約・更新・変更・解約料の現行運用について、将来規制の方向と未確定部分を分けて点検するため。",
      categories: ["契約", "消費者法・表示", "AI・デジタル"],
      relatedTopics: [consumerTopic],
      relatedIssues: ["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees"],
      primarySourceIds: [consumerFinal, "source-consumer-contract-act-current"],
      reformEventId: consumerReform,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [consumerFinal],
      whatChanged: "中間取りまとめ案から9月10日の中間取りまとめへ進展。制度の確定法化ではなく、検討会の中間整理が確定した段階として追跡する。"
    },
    {
      id: "article-caa-digital-tokusho-interim-final-2026",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "消費者庁 取引対策課／デジタル取引・特定商取引法等検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-13",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・制度見直し／中間取りまとめ",
      status: "adopted",
      summary: "インターネット上の勧誘・UI・契約・解約、デジタルプラットフォーム、レスキュー商法、点検商法、後出しマルチ、法執行など、特定商取引法等の制度整備の方向を整理した中間取りまとめ。",
      whyImportant: [
        "9月2日の案から9月10日の中間取りまとめへ進み、今後の法制化で参照すべき基準資料が更新された",
        "広告だけでなく接触・勧誘・申込み・解約までのUI／導線を一体で規律する方向が明確になった",
        "プラットフォーム、個人情報を活用した取引、海外事業者、書面電子化など、EC運用に横断的に関わる論点をまとめて追える"
      ],
      audience: ["企業法務", "EC・プラットフォーム事業者", "マーケティング", "プロダクト・カスタマーサポート"],
      audienceReason: "デジタル販売導線と特定商取引法対応について、今後の制度化候補を現行法と区別して点検するため。",
      categories: ["消費者法・表示", "契約", "AI・デジタル"],
      relatedTopics: [digitalTopic],
      relatedIssues: ["dt-chat-solicitation", "dt-ui-steering", "dt-cancellation-contract", "dt-platform"],
      primarySourceIds: [digitalFinal],
      reformEventId: digitalReform,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [digitalFinal],
      whatChanged: "中間取りまとめ案から9月10日の中間取りまとめへ進展。制度の確定法化ではなく、検討会の中間整理が確定した段階として追跡する。"
    }
  ]);
})();