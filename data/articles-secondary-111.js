(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat(additions.filter((item) => item && !existing.has(item.id)));
  };
  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueText = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const appendIssueUncertainty = (topic, issueId, text, sourceId) => {
    const issue = (topic?.issues || []).find((item) => item.id === issueId);
    if (!issue) return;
    if (sourceId) issue.sourceIds = addUniqueString(issue.sourceIds, sourceId);
    if (text && !String(issue.uncertain || "").includes(text)) {
      issue.uncertain = `${String(issue.uncertain || "").trim()} ${text}`.trim();
    }
  };

  const sourceId = "source-privacy-law-2026-implementation-roadmap";
  const reformEventId = "privacy-law-2026-amendment";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "個人情報の保護に関する法律等の一部を改正する法律　政令・規則・ガイドライン等の整備に関する今後の進め方（案）について",
      type: "guideline",
      typeLabel: "施行準備資料・下位ルール整備ロードマップ",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-09",
      url: "https://www.ppc.go.jp/files/pdf/260909_shiryou-1.pdf",
      importance: "最高",
      whyImportant: "2026年改正個人情報保護法の施行に向け、政令・委員会規則・ガイドライン等の具体化を、テーマ別の委員会審議、個人・事業者団体との意見交換・ヒアリング、条文案、パブリックコメントへ進めるプロセスと当面の議論順を示した一次資料。",
      topics: ["ai-personal-data", "personal-information-protection-2026-amendment"]
    }
  ]);

  const aiTopic = (window.TOPIC_DATA || []).find((item) => item.slug === "ai-personal-data");
  if (aiTopic) {
    aiTopic.lastUpdated = "2026-09-12";
    aiTopic.lastVerified = "2026-09-12";
    aiTopic.sourceIds = addUniqueString(aiTopic.sourceIds, sourceId);
    aiTopic.practicalImpacts = addUniqueText(aiTopic.practicalImpacts, "2026年改正法の下位ルール整備スケジュール監視");
    if (aiTopic.currentSummary) {
      aiTopic.currentSummary.facts = addUniqueText(
        aiTopic.currentSummary.facts,
        "個人情報保護委員会は2026年9月9日、改正法の政令・規則・ガイドライン等について、テーマ別の基本的考え方の審議、個人・事業者団体との意見交換・事務局ヒアリング、具体案・条文案の審議を経てパブリックコメントへ進む整備プロセスを示した。"
      );
      aiTopic.currentSummary.uncertain = addUniqueText(
        aiTopic.currentSummary.uncertain,
        "当面の案では、統計作成等・委託先・漏えい等の基本的考え方を2026年9月下旬から10月上旬に議論し、その後も意見交換・ヒアリングと具体案の審議を続け、2027年1月以降にパブリックコメントへ進むイメージが示されている。ただし会合日程は今後調整とされ、個別要件はまだ確定していない。"
      );
    }
    appendIssueUncertainty(
      aiTopic,
      "ai-statistical-use",
      "2026年9月9日の整備ロードマップでは、統計作成等の基本的考え方を9月下旬から10月上旬に議論する案が示されたが、具体的要件は今後の委員会審議・意見交換・ヒアリング・パブリックコメントを経て確定する。",
      sourceId
    );
    appendIssueUncertainty(
      aiTopic,
      "ai-outsourcing",
      "2026年9月9日の整備ロードマップでは、委託先規律の基本的考え方を9月下旬から10月上旬に議論する案が示されており、契約・監督・義務免除の具体化は引き続き下位ルール待ちである。",
      sourceId
    );
  }

  const amendmentTopic = (window.TOPIC_DATA || []).find((item) => item.slug === "personal-information-protection-2026-amendment");
  if (amendmentTopic) {
    amendmentTopic.lastUpdated = "2026-09-12";
    amendmentTopic.lastVerified = "2026-09-12";
    amendmentTopic.sourceIds = addUniqueString(amendmentTopic.sourceIds, sourceId);
    amendmentTopic.practicalImpacts = addUniqueText(amendmentTopic.practicalImpacts, "政令・規則・ガイドライン整備ロードマップの監視");
    if (amendmentTopic.currentSummary) {
      amendmentTopic.currentSummary.facts = addUniqueText(
        amendmentTopic.currentSummary.facts,
        "2026年9月9日、個人情報保護委員会は改正法の下位ルール整備について、まず基本的考え方をテーマ別に議論し、個人・事業者双方の団体との意見交換・事務局ヒアリングを経て具体案・条文案を審議し、パブリックコメントへ進むプロセスを示した。"
      );
      amendmentTopic.currentSummary.interpretations = addUniqueText(
        amendmentTopic.currentSummary.interpretations,
        "施行準備は改正法の条文だけで固定せず、2026年秋以降の委員会資料を論点ごとに追い、基本的考え方、具体案、条文案、パブリックコメントの各段階を区別して社内対応へ反映する必要がある。"
      );
      amendmentTopic.currentSummary.uncertain = addUniqueText(
        amendmentTopic.currentSummary.uncertain,
        "当面の案では、9月中旬に子供・顔特徴データ・本人関与、9月下旬から10月上旬に統計作成等・委託先・漏えい等、10月中旬に連絡可能個人関連情報・オプトアウト・課徴金の基本的考え方を議論し、その後も随時審議・意見交換を行い、2027年1月以降にパブリックコメントへ進むイメージが示されている。会合日程と個別要件は未確定である。"
      );
    }
    [
      "privacy-2026-children",
      "privacy-2026-biometric",
      "privacy-2026-contactable-related-info",
      "privacy-2026-outsourcing",
      "privacy-2026-surcharge"
    ].forEach((issueId) => {
      const issue = (amendmentTopic.issues || []).find((item) => item.id === issueId);
      if (issue) issue.sourceIds = addUniqueString(issue.sourceIds, sourceId);
    });
  }

  const reformEvent = (window.REFORM_EVENT_DATA || []).find((item) => item.id === reformEventId);
  if (reformEvent) {
    reformEvent.sourceIds = addUniqueString(reformEvent.sourceIds, sourceId);
    reformEvent.matchSourceIds = addUniqueString(reformEvent.matchSourceIds, sourceId);
  }

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-privacy-law-2026-implementation-roadmap",
      title: "改正個人情報保護法　政令・規則・ガイドライン等の整備に関する今後の進め方（案）",
      publisher: "個人情報保護委員会",
      author: "個人情報保護委員会事務局",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-12",
      url: "https://www.ppc.go.jp/files/pdf/260909_shiryou-1.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・施行準備／政令・規則・ガイドライン整備ロードマップ",
      status: "adopted",
      summary: "2026年改正個人情報保護法の施行に向け、政令・委員会規則・ガイドライン等の具体化をどの順序と参加プロセスで進めるかを示した資料。改正法の4分類・テーマごとに基本的考え方を委員会で議論し、個人・事業者双方の団体との意見交換と事務局ヒアリングを経て具体案・条文案を審議し、パブリックコメントへ進む。2026年秋の当面の日程として、子供・顔特徴データ・本人関与、統計作成等・委託先・漏えい等、連絡可能個人関連情報・オプトアウト・課徴金の順に基本的考え方を扱う案も示している。",
      whyImportant: [
        "2026年8月26日の『政令・規則等で定める事項の全体像』から一歩進み、各論点をいつ・どのプロセスで具体化するかを追える",
        "統計作成等・AI開発、委託先、顔特徴データ、子供、連絡可能個人関連情報、課徴金など、企業実務への影響が大きい論点の議論順を確認できる",
        "委員会審議だけでなく、個人側・事業者側団体との意見交換と事務局ヒアリングを組み込むマルチステークホルダー型の検討過程が明示されている",
        "現時点の資料は下位ルールの確定内容ではないため、社内規程・契約・システム対応を先走って固定せず、基本的考え方、具体案、条文案、パブリックコメントの段階を分けて追える"
      ],
      audience: ["企業法務", "プライバシー・データガバナンス担当", "AI・データ利活用担当", "情報セキュリティ", "プロダクト・広告・HR担当"],
      audienceReason: "2026年改正法の施行準備で、どの論点がいつ具体化されるかを把握し、規程・契約・同意画面・データフロー・委託管理・課徴金対応の改修順を決めるため。",
      categories: ["個人情報", "AI・デジタル", "危機管理・コンプライアンス"],
      relatedTopics: ["ai-personal-data", "personal-information-protection-2026-amendment"],
      relatedIssues: [
        "ai-statistical-use",
        "ai-outsourcing",
        "privacy-2026-children",
        "privacy-2026-biometric",
        "privacy-2026-contactable-related-info",
        "privacy-2026-outsourcing",
        "privacy-2026-surcharge"
      ],
      primarySourceIds: [sourceId, "source-privacy-law-2026-amendment", "source-privacy-law-2026-rulemap"],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-privacy-law-2026-amendment", sourceId],
      whatChanged: "テーマ更新／改正法の下位ルールで具体化される事項だけでなく、2026年秋からの論点別審議、個人・事業者団体との意見交換・ヒアリング、条文案、パブリックコメントまでの整備ロードマップを追加した。"
    }
  ]);
})();
