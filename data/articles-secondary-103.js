(() => {
  const topicSlug = "consumer-contract-law-review-2026";
  const sourceId = "source-caa-consumer-contract-interim-2026";
  const reformEventId = "consumer-contract-law-review-2026";
  const issueIds = new Set([
    "consumer-contract-vulnerability-release",
    "consumer-contract-cancellation-obstruction",
    "consumer-contract-cancellation-fees"
  ]);

  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id)));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      type: "proposal",
      typeLabel: "検討会・中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      importance: "最高",
      whyImportant: "消費者契約法の2026年見直しについて、消費者の脆弱性、継続的契約からの離脱、契約更新・変更、解約料等の現時点の検討会整理を確定した中間取りまとめ。成立法ではないため、現行法と将来の見直し方向を区別して追う基準点となる。",
      topics: [topicSlug]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-caa-consumer-contract-interim-2026",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "消費者庁／消費者契約法検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-12",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・検討会中間取りまとめ",
      status: "adopted",
      summary: "消費者契約法の2026年見直しについて、消費者の多様な脆弱性への配慮、深刻な結果をもたらす契約からの解放、継続的契約の解約妨害・合理的な離脱方法、契約更新・変更、死亡時対応、解約料等を整理した中間取りまとめ。解約料については、9条1項1号の『平均的な損害』規律自体は今回は見直さず、複数の解約条件に関する情報提供や算定根拠の説明を強化する方向を示す。",
      whyImportant: [
        "8月31日の中間取りまとめ案から9月10日の中間取りまとめへ進み、検討会としての現時点の整理を確定した一次資料である。",
        "解約料は一律の立証責任転換ではなく、現行9条1項1号を維持しつつ説明制度を拡充する方向が明確になった。",
        "サブスクリプション等では、解約導線だけでなく、更新・変更通知、死亡時対応、解約料の情報提供まで契約ライフサイクル全体の見直し候補を確認できる。"
      ],
      audience: ["企業法務", "BtoCサービス企画", "EC・サブスクリプション運営", "カスタマーサポート", "コンプライアンス"],
      audienceReason: "成立法を先取りせず、今後の消費者契約法見直しで事業者のUI・約款・説明・解約運用のどこが対象になり得るかを一次資料から把握するため。",
      categories: ["契約", "消費者法・表示", "AI・デジタル"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "consumer-contract-vulnerability-release",
        "consumer-contract-cancellation-obstruction",
        "consumer-contract-cancellation-fees"
      ],
      primarySourceIds: [sourceId, "source-consumer-contract-act-current"],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [sourceId],
      whatChanged: "中間取りまとめ案から2026年9月10日の中間取りまとめへ更新／9条1項1号は今回は見直さず、解約料の説明制度を拡充する方向等を現時点の検討会整理として確定。"
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const overview = (topic.overview || []).map((item) => {
      if (item.includes("2026年8月31日") && item.includes("中間取りまとめ")) {
        return "消費者庁の検討会は2026年9月10日、『中間取りまとめ』を公表した。消費者の多様な脆弱性への対応、継続的な契約関係からの離脱、更新・変更、死亡時対応、解約料、消費者の定義等を扱うが、成立法ではなく、今後さらに検討・法制化が進む段階である。";
      }
      return item.replaceAll("中間取りまとめ（案）", "中間取りまとめ");
    });

    const existingFacts = ((topic.currentSummary || {}).facts || []).filter((item) => !item.includes("2026年8月31日の第8回検討会"));
    const facts = addUniqueStrings(existingFacts.map((item) => {
      if (item.startsWith("中間取りまとめ（案）は")) {
        return item.replace("中間取りまとめ（案）は", "中間取りまとめは");
      }
      if (item.startsWith("案は解約妨害")) {
        return item.replace("案は", "中間取りまとめは");
      }
      if (item.includes("解約料については") && item.includes("一律の立証責任転換")) {
        return "中間取りまとめは、消費者契約法9条1項1号の『平均的な損害』規律について今回は見直しを行わず、まず事業者の説明責任を強化する方向を示した。複数の解約条件がある場合の情報提供や、解約料の算定根拠に通常費用以外の要素・業界の考え方が含まれる場合の説明を促すことが検討されている。";
      }
      return item;
    }), [
      "2026年9月10日、消費者庁の検討会は『中間取りまとめ』を公表した。これは現時点の検討会整理であり、改正法案の成立・公布や施行を意味しない。"
    ]);

    const uncertain = addUniqueStrings(
      ((topic.currentSummary || {}).uncertain || []).filter((item) => !item.includes("2026年9月9日の第9回検討会") && !item.includes("中間取りまとめは案であり")),
      ["中間取りまとめ公表後も検討会で更なる議論を続け、消費者庁が法見直しを進めるとされているため、条文化、法的効果、法案提出・成立・施行時期は未確定である。"]
    );

    const issues = (topic.issues || []).map((issue) => {
      if (!issueIds.has(issue.id)) return issue;
      const base = {...issue, sourceIds: addUniqueStrings(issue.sourceIds, [sourceId])};

      if (issue.id === "consumer-contract-vulnerability-release") {
        return {
          ...base,
          conclusion: "中間取りまとめは、消費者に深刻な結果が生じる契約について、深刻な結果となる内容を中心に据え、消費者の脆弱性を考慮しつつ事業者の予見可能性を確保する観点から対象を明確化し、事業者が当該事情を知っていたことを要件として取り入れる方向を示す。効果は遡及効を基本とすること等を引き続き検討する。",
          uncertain: "対象となる『深刻な結果』・契約類型、事業者の認識要件、具体的な条文と効果は今後の検討に委ねられている。"
        };
      }
      if (issue.id === "consumer-contract-cancellation-obstruction") {
        return {
          ...base,
          conclusion: "中間取りまとめは、実体法上の解約権の行使を妨げる行為を抑止し、合理的な離脱方法と解約条件・方法の情報提供を促す規律を検討する。消費者契約一般に新たな解約権を設けることには慎重な整理を維持している。",
          uncertain: "解約妨害の具体的な禁止類型、合理的な離脱方法・情報提供規律の法的性質、条文化、施行時期は未確定である。"
        };
      }
      return {
        ...base,
        conclusion: "中間取りまとめは、消費者契約法9条1項1号の『平均的な損害』規律について今回は見直しを行わず、まず説明制度を拡充する方向を示す。複数の解約条件がある場合の適時・適切な情報提供や、算定根拠に通常費用以外の要素・参考とした業界等の考え方がある場合の説明を促すことが検討されている。",
        uncertain: "情報提供・説明を努力義務の拡充にとどめるか義務化するか、具体的な説明事項・対象範囲、条文化、施行時期は未確定である。"
      };
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
      issues,
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceId])
    };
  });

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).map((event) => {
    if (event.id !== reformEventId) return event;
    return {
      ...event,
      matchSourceIds: addUniqueStrings(event.matchSourceIds, [sourceId]),
      sourceIds: addUniqueStrings(event.sourceIds, [sourceId])
    };
  });
})();
