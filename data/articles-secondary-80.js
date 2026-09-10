(() => {
  const topicSlug = "disability-discrimination-reasonable-accommodation";
  const actSourceId = "source-cao-disability-discrimination-act";
  const basicPolicySourceId = "source-cao-disability-discrimination-basic-policy-2023";
  const reformEventId = "disability-discrimination-2021-amendment";
  const undueBurdenIssueId = "disability-discrimination-undue-burden-assessment";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const issues = addUniqueById((topic.issues || []).map((issue) => {
      if (issue.id === "disability-discrimination-scope-employment-boundary") {
        return {
          ...issue,
          conclusion: "法の対象となる障害者は障害者手帳の所持者に限られず、障害と社会的障壁による生活上の制限を個別にみる。事業者は営利・非営利、個人・法人、対面・オンラインを問わず広く対象となる一方、事業主と労働者の雇用関係における差別解消措置は障害者雇用促進法の規律へ切り分ける。",
          sourceIds: addUniqueStrings(issue.sourceIds, [basicPolicySourceId])
        };
      }
      if (issue.id === "disability-discrimination-reasonable-accommodation-duty") {
        return {
          ...issue,
          conclusion: "個々の場面で社会的障壁の除去を求める意思の表明があり、負担が過重でない場合に、事業の本質を変更しない範囲で、本人の意向を尊重し、代替措置を含む建設的対話を通じて必要かつ合理的な変更・調整を行う。意思表明の方法は限定されず、本人による表明が難しい場合は家族・介助者等による補佐も含まれる。",
          uncertain: "必要な配慮は個別性が高く、技術・社会状況や既存の環境整備によっても変わる。希望された手段そのものが難しい場合でも、過重な負担の判断と代替措置の検討を分けて行う必要がある。",
          sourceIds: addUniqueStrings(issue.sourceIds, [basicPolicySourceId])
        };
      }
      return issue;
    }), [
      {
        id: undueBurdenIssueId,
        title: "合理的配慮の『過重な負担』をどの要素で判断するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "過重な負担は、事務・事業への影響、実現可能性、費用・負担、事業規模、財務状況等を考慮し、個別の事案ごとに総合的・客観的に判断する。",
        exception: "希望された方法自体が過重な負担に当たる場合でも、それだけで検討を終えず、理由を丁寧に説明し、建設的対話を通じて代替措置を柔軟に検討することが求められる。",
        uncertain: "各要素の重みや許容される負担水準は事業・場面ごとに異なり、固定額や一律基準では判断できない。",
        sourceIds: [basicPolicySourceId]
      }
    ]);

    return {
      ...topic,
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "基本方針上、法の対象となる障害者は障害者手帳の所持者に限られず、障害と社会的障壁により継続的に日常生活又は社会生活に相当な制限を受ける状態かを個別に判断する。",
          "合理的配慮の『過重な負担』は、事務・事業への影響、実現可能性、費用・負担、事業規模、財務状況等を考慮し、具体的場面ごとに総合的・客観的に判断する。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "合理的配慮の実務では、希望された手段が実施できるかだけでなく、本人が除去を求める障壁を把握し、過重な負担の評価と代替手段の検討を分けて記録すると、建設的対話の過程を説明しやすい。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "過重な負担を理由に希望された対応を実施しない場合は、事業影響・実現可能性・費用負担・事業規模・財務状況を具体化し、理由説明と代替措置の検討をセットで記録する。",
          "障害者手帳の有無だけを入口の足切り基準にせず、本人が直面する社会的障壁と必要な調整を個別に確認する。"
        ])
      },
      issues
    };
  });

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "障害者差別解消法・2021年改正（2024年施行）",
      eventType: "law_amendment",
      lawId: "disability-discrimination-elimination-act",
      lawLabel: "障害者差別解消法",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2024-04-01"],
      effectiveDateSourceIds: [actSourceId],
      matchSourceIds: [],
      articleIds: [
        "article-cao-disability-discrimination-amendment-2021",
        "article-cao-disability-discrimination-basic-policy-2023"
      ],
      sourceIds: [actSourceId, basicPolicySourceId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-cao-disability-discrimination-amendment-2021",
      title: "障害者差別解消法・令和3年改正（事業者の合理的配慮提供義務化）",
      publisher: "内閣府",
      author: "内閣府",
      publishedAt: "2021-06-04",
      collectedAt: "2026-09-11",
      url: "https://www8.cao.go.jp/shougai/suishin/sabekai.html",
      sourceType: "primary",
      sourceLabel: "一次資料・改正法／2024年4月施行",
      status: "adopted",
      summary: "障害者差別解消法の法令、令和3年改正、施行期日、基本方針、各府省庁の対応指針等を集約した内閣府の公式ページ。令和3年改正が2024年4月1日に施行され、民間事業者にも合理的配慮の提供が義務化されたことを確認できる。",
      whyImportant: [
        "民間事業者の合理的配慮が努力義務から法的義務へ変わった改正の基準点を確認できる",
        "改正法、施行期日、基本方針、事業分野別対応指針を一つの公式ハブから追える",
        "施行済み制度として、現在のサービス・契約・顧客対応フローの点検起点になる"
      ],
      audience: ["企業法務", "コンプライアンス", "顧客対応・サービス設計"],
      audienceReason: "2024年施行後の民間事業者の法的義務を一次資料から確認し、適用範囲と社内対応の基準点を置くため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["disability-discrimination-scope-employment-boundary", "disability-discrimination-reasonable-accommodation-duty"],
      primarySourceIds: [actSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [actSourceId]
    },
    {
      id: "article-cao-disability-discrimination-basic-policy-2023",
      title: "障害を理由とする差別の解消の推進に関する基本方針（令和5年3月14日閣議決定）",
      publisher: "内閣府",
      author: "内閣府",
      publishedAt: "2023-03-14",
      collectedAt: "2026-09-11",
      url: "https://www8.cao.go.jp/shougai/whitepaper/r07hakusho/zenbun/furoku_03.html",
      sourceType: "primary",
      sourceLabel: "一次資料・基本方針／事業者対応",
      status: "adopted",
      summary: "障害者差別解消法の令和3年改正を踏まえ、対象事業者、不当な差別的取扱い、正当な理由、合理的配慮、過重な負担、建設的対話、環境整備を体系的に示した政府の基本方針。",
      whyImportant: [
        "障害者手帳の有無だけで対象を判断できないことや、対面・オンラインを問わない事業者の射程を確認できる",
        "過重な負担の5要素と、代替措置を含む建設的対話の考え方を一次資料で押さえられる",
        "電話のみの手続など、企業の標準フローが合理的配慮の問題になり得る具体例まで確認できる"
      ],
      audience: ["企業法務", "コンプライアンス", "顧客対応・サービス設計", "ウェブ・プロダクト担当"],
      audienceReason: "法文だけでは抽象的な合理的配慮・正当な理由・過重な負担を、企業の判断手順へ落とす基準資料となるため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "disability-discrimination-scope-employment-boundary",
        "disability-discrimination-unjust-treatment",
        "disability-discrimination-reasonable-accommodation-duty",
        "disability-discrimination-operational-design",
        undueBurdenIssueId
      ],
      primarySourceIds: [basicPolicySourceId, actSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [actSourceId]
    }
  ]);
})();