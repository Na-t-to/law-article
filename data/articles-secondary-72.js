(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const appendUnique = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  const sourceId = "source-ppc-privacy-2026-rulemaking-roadmap-20260909";
  const articleId = "article-ppc-privacy-2026-rulemaking-roadmap-20260909";
  const topicSlug = "personal-information-protection-2026-amendment";
  const aiTopicSlug = "ai-personal-data";
  const reformEventId = "privacy-law-2026-amendment";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "個人情報の保護に関する法律等の一部を改正する法律―政令・規則・ガイドライン等の整備に関する今後の進め方（案）について",
      type: "guideline",
      typeLabel: "施行準備・下位ルール整備ロードマップ",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-09",
      url: "https://www.ppc.go.jp/files/pdf/260909_shiryou-1.pdf",
      importance: "高",
      whyImportant: "2026年改正個人情報保護法について、子供・顔特徴データ・本人関与、統計作成等・委託先・漏えい等、連絡可能個人関連情報・オプトアウト・課徴金の順に下位ルールを検討し、その後の意見交換・ヒアリングを経て条文案とパブリックコメントへ進む当面の検討工程を公式に確認できる。",
      topics: [topicSlug, aiTopicSlug]
    }
  ]);

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.lastVerified = "2026-09-10";
    topic.sourceIds = appendUnique(topic.sourceIds, [sourceId]);
    for (const issue of topic.issues || []) {
      if ([
        "privacy-2026-children",
        "privacy-2026-biometric",
        "privacy-2026-consent-exceptions",
        "privacy-2026-outsourcing",
        "privacy-2026-contactable-related-info",
        "privacy-2026-surcharge"
      ].includes(issue.id)) {
        issue.sourceIds = appendUnique(issue.sourceIds, [sourceId]);
      }
    }
  }

  const aiTopic = (window.TOPIC_DATA || []).find((item) => item.slug === aiTopicSlug);
  if (aiTopic) {
    aiTopic.lastVerified = "2026-09-10";
    aiTopic.sourceIds = appendUnique(aiTopic.sourceIds, [sourceId]);
    for (const issue of aiTopic.issues || []) {
      if (["ai-statistical-use", "ai-outsourcing"].includes(issue.id)) {
        issue.sourceIds = appendUnique(issue.sourceIds, [sourceId]);
      }
    }
  }

  const reformEvent = (window.REFORM_EVENT_DATA || []).find((item) => item.id === reformEventId);
  if (reformEvent) {
    reformEvent.sourceIds = appendUnique(reformEvent.sourceIds, [sourceId]);
    reformEvent.articleIds = appendUnique(reformEvent.articleIds, [articleId]);
  }

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "2026年改正個人情報保護法―政令・規則・ガイドライン等の整備に関する今後の進め方",
      publisher: "個人情報保護委員会",
      author: "個人情報保護委員会事務局",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-10",
      url: "https://www.ppc.go.jp/aboutus/minutes/2026/20260909/",
      sourceType: "primary",
      sourceLabel: "一次資料・施行準備／2026年個人情報保護法改正",
      status: "adopted",
      summary: "2026年改正個人情報保護法の施行に向け、政令・委員会規則・ガイドライン等をどの順序で具体化するかを示した個人情報保護委員会のロードマップ。9月中旬に子供・顔特徴データ・本人関与、9月下旬から10月上旬に統計作成等・委託先・漏えい等、10月中旬に連絡可能個人関連情報・オプトアウト・課徴金の基本的な考え方を議論し、意見交換・事業者ヒアリングを経て条文案とパブリックコメントへ進む流れを示す。現時点では検討工程の案であり、下位ルールの内容が確定したものではない。",
      whyImportant: [
        "改正法の施行日はなお確定していない一方、企業実務に直結する下位ルールの検討順序と直近の論点公表時期が具体化した",
        "子供・顔特徴データ、統計作成等・委託先、連絡可能個人関連情報、オプトアウト、課徴金など、今後追加情報が出る論点を時系列で追跡できる",
        "委員会審議だけでなく、個人側・事業者側との意見交換や事業者ヒアリングを経てパブリックコメントへ進むため、確定ルールと検討中の考え方を混同せず追える"
      ],
      audience: ["企業法務", "プライバシー担当", "AI・データ利活用担当", "情報セキュリティ・コンプライアンス担当"],
      audienceReason: "2026年改正の施行準備について、未確定事項を先取りせず、今後公表される基本的な考え方・条文案・パブリックコメントを論点別に追跡するため。",
      categories: ["個人情報", "AI・デジタル", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug, aiTopicSlug],
      relatedIssues: ["privacy-2026-children", "privacy-2026-biometric", "privacy-2026-consent-exceptions", "privacy-2026-outsourcing", "privacy-2026-contactable-related-info", "privacy-2026-surcharge", "ai-statistical-use", "ai-outsourcing"],
      primarySourceIds: ["source-privacy-law-2026-amendment", "source-privacy-law-2026-rulemap", sourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-privacy-law-2026-amendment", sourceId],
      whatChanged: "施行準備更新／2026年改正法の下位ルールについて、2026年9月から10月にかけた論点別の検討工程と、意見交換・ヒアリングを経てパブリックコメントへ進むプロセスが具体化した。"
    }
  ]);
})();
