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

  const topicSlug = "companies-act-review-shareholders";
  const issueId = "companies-act-employee-equity-compensation";
  const interimSourceId = "source-moj-company-law-interim-2026";
  const latestReviewSourceId = "source-moj-company-law-review-meeting17-2026";
  const reformEventId = "companies-act-stock-shareholders-review-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: latestReviewSourceId,
      title: "法制審議会会社法制（株式・株主総会等関係）部会第17回会議",
      type: "government_material",
      typeLabel: "一次資料・法制審議会／要綱案取りまとめに向けた検討",
      authority: "法務省 法制審議会会社法制（株式・株主総会等関係）部会",
      publishedAt: "2026-08-26",
      url: "https://www.moj.go.jp/shingi1/shingi04900001_00341.html",
      importance: "高",
      whyImportant: "2026年8月26日時点でも会社法制（株式・株主総会等関係）の見直しが要綱案取りまとめに向けた検討段階にあることを確認できる最新の部会資料。中間試案を成立済みルールとして扱わず、制度検討の現在地を確認する基準点になる。",
      topics: [topicSlug, "agm-pre-disclosure-company-law-reform"]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "会社法制（株式・株主総会等関係）・2026年見直し",
      eventType: "policy_review",
      lawId: "companies-act",
      lawLabel: "会社法",
      relatedTopics: [topicSlug, "agm-pre-disclosure-company-law-reform"],
      matchSourceIds: [interimSourceId],
      sourceIds: [interimSourceId, latestReviewSourceId]
    }
  ]);

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.title = "会社法制見直し・株式／株主総会／実質株主";
    topic.summary = "会社法制（株式・株主総会等関係）の見直しを、中間試案を基礎に、従業員への株式無償交付、バーチャル総会、実質株主確認、株主提案、開示合理化など企業実務への影響から追う。";
    topic.lastUpdated = "2026-09-12";
    topic.lastVerified = "2026-09-12";
    topic.sourceIds = addUniqueString(topic.sourceIds, latestReviewSourceId);
    topic.practicalImpacts = addUniqueText(topic.practicalImpacts, "従業員向け株式報酬制度・就業規則");

    if (!Array.isArray(topic.issues)) topic.issues = [];
    if (!topic.issues.some((issue) => issue.id === issueId)) {
      topic.issues.push({
        id: issueId,
        title: "従業員への株式無償交付と労基法上の「賃金」をどう整理するか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "会社法制の中間試案は株式の無償交付の対象拡大を検討しているが、使用人等への無償交付については労働基準法上の「賃金」該当性の整理が前提になる。現時点では、現行の労基法11条・24条、ストックオプションに関する通達や既存の政府資料を踏まえ、株式報酬の形態と制度設計ごとに慎重に確認する。",
        exception: "会社法上、株式を対価なしで交付できる範囲が将来拡大しても、それだけで労基法24条の通貨払原則等との関係が解消されるわけではない。ストックオプション、RS・PS、RSU・PSU、株価連動型の金銭報酬では検討対象も異なる。",
        uncertain: "中間試案自体が、使用人等に無償交付される株式の「賃金」該当性について整理が必要としており、ストックオプション以外の株式報酬、低額行使価額のストックオプション、マルス・クローバック等を含め、今後の厚生労働省等の整理を継続確認する必要がある。",
        sourceIds: [interimSourceId, latestReviewSourceId]
      });
    }

    if (topic.currentSummary) {
      topic.currentSummary.facts = addUniqueText(
        topic.currentSummary.facts,
        "2026年3月の中間試案は、株式の無償交付の対象範囲の見直しを検討事項に含め、使用人等へ無償交付される株式については労働基準法上の「賃金」該当性の整理が必要であるとしている。会社法制部会は2026年8月26日時点でも要綱案取りまとめに向けた検討を継続しており、改正法は未成立である。"
      );
      topic.currentSummary.interpretations = addUniqueText(
        topic.currentSummary.interpretations,
        "従業員向け株式報酬は会社法上の発行手続だけでは完結せず、労基法上の賃金該当性と通貨払原則を横断して制度設計する必要がある。とくに既存の現金賃金を株式へ置き換える設計と、現金賃金に付加するインセンティブ設計は分けて検討する。"
      );
      topic.currentSummary.implications = addUniqueText(
        topic.currentSummary.implications,
        "従業員向けRS・PS・RSU・PSUやストックオプションを設計する場合は、現金賃金との関係、就業規則・労働条件通知書・報酬規程上の位置付け、付与・権利確定条件、マルス・クローバック等を一覧化し、会社法改正と労働法上の整理を別々に追う。"
      );
      topic.currentSummary.uncertain = addUniqueText(
        topic.currentSummary.uncertain,
        "従業員への株式無償交付を可能にする会社法制の具体的な要件と、株式報酬の労基法上の賃金該当性に関する整理は未確定であり、要綱化・法案化と厚生労働省等の整理を確認する必要がある。"
      );
    }
  }

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-tmi-stock-compensation-wage-2026",
      title: "【労働法ブログ】株式報酬の賃金該当性について",
      publisher: "TMI総合法律事務所",
      author: "東 駿佑",
      publishedAt: "2026-06-25",
      collectedAt: "2026-09-12",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18506.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／株式報酬・労基法上の賃金",
      status: "adopted",
      summary: "2026年3月の会社法制中間試案が、使用人等への株式無償交付の対象拡大と、その前提となる労働基準法上の「賃金」該当性の整理を論点化したことを受け、現行の賃金概念、ストックオプション通達、経済産業省の既存手引を手掛かりに、ストックオプション、RS・PS、RSU・PSU、株価連動型の金銭報酬を分けて検討する実務解説。既存の現金賃金との関係や就業規則上の位置付け、低額行使価額のストックオプション、マルス・クローバック等、今後の制度整理が必要な点も明示している。",
      whyImportant: [
        "会社法上の株式無償交付の対象拡大と、労基法上の賃金・通貨払原則という別制度を一つの制度設計課題として接続して読める",
        "ストックオプション通達を機械的に全ての株式報酬へ広げず、RS・PS、RSU・PSU、1円ストックオプション、株価連動型金銭報酬を分けて検討している",
        "現金賃金を減額して株式へ置き換える場合、報酬規程・就業規則上の位置付け、現金賃金が利益の主たる部分かという実務上の確認点を具体化している",
        "中間試案の段階で未解決の論点を明確にしており、改正案を確定ルールとして先取りせず制度設計上の準備事項だけを抽出できる"
      ],
      audience: ["企業法務", "人事・労務", "報酬委員会・取締役会事務局", "株式報酬制度の設計担当", "スタートアップ・上場準備企業"],
      audienceReason: "従業員向けエクイティ報酬を、会社法上の発行手続だけでなく労基法上の賃金規制、就業規則・労働条件、将来の会社法改正まで含めて設計・点検するため。",
      categories: ["会社法・ガバナンス", "労務"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId],
      primarySourceIds: [interimSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [interimSourceId],
      whatChanged: "テーマ拡張／会社法制見直しの株式発行論点として、従業員への株式無償交付と労基法上の賃金該当性を独立論点化し、会社法と労働法を横断する株式報酬設計の確認事項を追加した。"
    }
  ]);
})();