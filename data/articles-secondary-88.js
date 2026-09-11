(() => {
  const primaryTopicSlug = "personal-information-protection-2026-amendment";
  const aiTopicSlug = "ai-personal-data";
  const reformEventId = "privacy-law-2026-amendment";
  const amendmentSourceId = "source-privacy-law-2026-amendment";
  const sourceId = "source-privacy-law-2026-rulemaking-roadmap-2026-09-09";
  const articleId = "article-privacy-law-2026-rulemaking-roadmap-2026-09-09";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "個人情報の保護に関する法律等の一部を改正する法律　政令・規則・ガイドライン等の整備に関する今後の進め方について",
      type: "guideline",
      typeLabel: "施行準備・下位ルール整備ロードマップ",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-09",
      url: "https://www.ppc.go.jp/files/pdf/260909_kongonosusumekatanitsuite.pdf",
      importance: "高",
      whyImportant: "2026年改正個人情報保護法の政令・委員会規則・ガイドライン等について、論点ごとの検討順序、個人・事業者との意見交換と事務局ヒアリング、条文案提示からパブリックコメントまでの策定プロセスを示す公式ロードマップ。",
      topics: [primaryTopicSlug, aiTopicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug === primaryTopicSlug) {
      return {
        ...topic,
        lastUpdated: "2026-09-11",
        lastVerified: "2026-09-11",
        currentSummary: {
          ...(topic.currentSummary || {}),
          facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
            "個人情報保護委員会は2026年9月9日、改正法の下位ルール整備について、9月中旬に子供・顔特徴データ・本人関与、9月下旬から10月上旬に統計作成等・委託先・漏えい等、10月中旬に連絡可能個人関連情報・オプトアウト・課徴金の基本的考え方を順次議論する当面のスケジュールを決定した。",
            "各論点は、委員会で基本的考え方を議論した後、個人側・事業者側との意見交換や事務局ヒアリングを行い、その内容を踏まえて具体案、政令・規則の条文案を議論し、パブリックコメントへ進むプロセスが予定されている。"
          ]),
          implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
            "施行準備では、自社に関係する論点の『基本的考え方』公表、意見交換・ヒアリング、具体案、パブリックコメントを順に追い、確定前の案を社内ルールへ固定しない。"
          ]),
          uncertain: addUniqueStrings((topic.currentSummary && topic.currentSummary.uncertain) || [], [
            "2026年9月9日資料の9月中旬・9月下旬から10月上旬・10月中旬という時期は当面のスケジュールのイメージで、個別会合の日程は今後調整とされている。下位ルールの最終内容や施行日は引き続き確定資料を確認する。"
          ])
        },
        sourceIds: addUniqueStrings(topic.sourceIds, [sourceId]),
        practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["政令・規則・ガイドライン策定スケジュールの追跡"])
      };
    }

    if (topic.slug === aiTopicSlug) {
      return {
        ...topic,
        lastUpdated: "2026-09-11",
        lastVerified: "2026-09-11",
        currentSummary: {
          ...(topic.currentSummary || {}),
          facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
            "個人情報保護委員会は、統計作成等・委託先・漏えい等に関する改正法の下位ルールについて、2026年9月下旬から10月上旬に『基本的考え方②』として議論する当面のスケジュールを示している。"
          ]),
          implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
            "AI開発の統計作成等特例やAIサービス委託の施行準備は、9月下旬以降の基本的考え方、意見交換・ヒアリング、具体案、パブリックコメントを段階的に追って更新する。"
          ]),
          uncertain: addUniqueStrings((topic.currentSummary && topic.currentSummary.uncertain) || [], [
            "統計作成等・委託先に関する9月下旬から10月上旬の検討時期は当面の予定であり、対象範囲や基準適合体制等の最終ルールが確定したものではない。"
          ])
        },
        sourceIds: addUniqueStrings(topic.sourceIds, [sourceId])
      };
    }

    return topic;
  });

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).map((event) =>
    event.id !== reformEventId
      ? event
      : {
          ...event,
          sourceIds: addUniqueStrings(event.sourceIds, [sourceId]),
          articleIds: addUniqueStrings(event.articleIds, [articleId])
        }
  );

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "改正個人情報保護法　政令・規則・ガイドライン等の整備に関する今後の進め方について",
      publisher: "個人情報保護委員会",
      author: "個人情報保護委員会事務局",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-11",
      url: "https://www.ppc.go.jp/files/pdf/260909_kongonosusumekatanitsuite.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・施行準備ロードマップ",
      status: "adopted",
      summary: "2026年改正個人情報保護法の下位ルール整備について、PPCが論点別の検討順序とマルチステークホルダー連携プロセスを示した公式資料。9月中旬は子供・顔特徴データ・本人関与、9月下旬から10月上旬は統計作成等・委託先・漏えい等、10月中旬は連絡可能個人関連情報・オプトアウト・課徴金を扱い、その後も意見交換・ヒアリング、具体案、条文案、パブリックコメントへ進む。",
      whyImportant: [
        "改正法の各論点について、いつ下位ルールの基本的考え方が示される予定かを公式資料で追える",
        "企業側の意見交換・事務局ヒアリングを経て具体案と条文案を作るプロセスが明示され、確定前情報の段階を区別できる",
        "AI開発の統計作成等特例、委託先規律、課徴金など、社内制度設計に直結する論点の監視順序を決めやすい"
      ],
      audience: ["企業法務", "プライバシー担当", "AI・データ利活用担当", "情報管理・コンプライアンス"],
      audienceReason: "改正法の施行準備で、未確定の下位ルールを先取りせず、自社に関係する論点の基本的考え方・具体案・パブリックコメントを適切な時点で追跡するため。",
      categories: ["個人情報", "AI・デジタル"],
      relatedTopics: [primaryTopicSlug, aiTopicSlug],
      relatedIssues: [
        "privacy-2026-children",
        "privacy-2026-consent-exceptions",
        "privacy-2026-biometric",
        "privacy-2026-contactable-related-info",
        "privacy-2026-outsourcing",
        "privacy-2026-surcharge",
        "ai-statistical-use",
        "ai-outsourcing"
      ],
      primarySourceIds: [sourceId, amendmentSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amendmentSourceId, sourceId],
      whatChanged: "施行準備具体化／2026年9月9日にPPCが下位ルールの論点別検討順序、意見交換・ヒアリング、具体案・条文案からパブリックコメントまでの進め方を決定した。"
    }
  ]);
})();