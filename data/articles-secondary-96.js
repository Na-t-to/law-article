(() => {
  const topicSlug = "insurance-agency-governance-comparison-sales-2025";
  const proposalSourceId = "source-fsa-insurance-supervisory-guideline-enterprise-agency-2026-proposal";
  const proposalArticleId = "article-fsa-insurance-supervisory-guideline-enterprise-agency-2026-proposal";
  const amtArticleId = "article-amt-insurance-company-governance-2026-04-10";
  const reformEventId = "insurance-supervisory-guideline-enterprise-agency-2026";
  const updateId = "update-insurance-enterprise-agency-supervisory-guideline-2026-09-11";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: proposalSourceId,
      title: "「保険会社向けの総合的な監督指針」の一部改正（案）の公表について",
      type: "guidance",
      typeLabel: "一次資料・監督指針改正案／企業内代理店・独禁法・企業向け損保",
      authority: "金融庁",
      publishedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260911/20260911.html",
      importance: "最高",
      whyImportant: "企業内代理店に関する特定契約比率規制の再構築、独占禁止法遵守態勢、企業向け損害保険商品の保険料率モニタリング、損害保険代理店の別個登録の見直しをまとめた監督指針改正案。2026年9月11日時点ではパブリックコメント段階で、初回の適用開始日は未確定であることも一次資料から確認できる。",
      topics: [topicSlug]
    }
  ]);

  const newIssues = [
    {
      id: "insurance-inhouse-agency-specific-contract-ratio-2026-draft",
      title: "企業内代理店の特定契約比率規制はどう見直される予定か",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "2026年9月11日の改正案では、特定契約比率規制について、適用開始からおおむね3年後に算定対象保険種目を限定する経過措置を廃止し、その2年後に「特定者」の範囲を同一企業グループの経済的一体性を踏まえて拡大する方向が示されている。一方、代理店手数料の適正化と、特定契約の把握・管理、独禁法遵守、三線管理等のガバナンス要件の双方を満たす代理店は規制対象から除外する案も示されている。",
      exception: "これはパブリックコメント中の監督指針改正案であり、現在の特定契約比率規制を直ちに置き換えるものではない。最終文言、適用除外要件、経過措置は変更され得る。",
      uncertain: "改正監督指針の初回の適用開始日は2026年9月11日時点で確定していない。概要資料に示された2030年4月・2032年4月の段階的見直しの時期も、最終化後の適用日と経過措置を確認する必要がある。",
      sourceIds: [proposalSourceId]
    },
    {
      id: "insurance-antitrust-compliance-coinsurance-2026-draft",
      title: "保険会社・代理店の独禁法遵守態勢と共同保険をどう見直す方向か",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "改正案は、保険会社・保険代理店が独占禁止法上問題となる行為を防止するための態勢を整備することを求める方向を示し、共同保険については共同で引き受ける具体的な必要性を確認するとともに、情報交換等による競争法上のリスクを抑える管理を求める。",
      exception: "独占禁止法そのものの適用関係が新たに創設されるという意味ではなく、保険監督上の内部管理態勢として具体化する改正案である。パブリックコメント段階なので最終的な監督指針の文言は未確定。",
      uncertain: "共同保険の必要性確認、情報遮断、記録・モニタリングの具体的水準は最終監督指針とパブリックコメント結果を確認する必要がある。",
      sourceIds: [proposalSourceId]
    },
    {
      id: "insurance-corporate-pricing-monitoring-2026-draft",
      title: "企業向け損保の保険料率モニタリングをどう高度化する方向か",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "改正案では、企業向け損害保険商品の保険料率について、経営陣が関与する管理態勢を構築し、割増・割引の適用基準と事後検証、三線管理、契約単位の収支・保険料水準の分析等を継続的に行う方向が示されている。金融庁も継続的なモニタリングを行うとしている。",
      exception: "特定の料率や収益水準を一律に義務付ける案ではなく、各社が合理的な料率設定と検証を行える内部管理態勢の構築を求める方向である。",
      uncertain: "対象となる商品・契約の切り分け、分析粒度、経営報告や三線管理の具体的運用は最終監督指針を確認する必要がある。",
      sourceIds: [proposalSourceId]
    },
    {
      id: "insurance-separate-registration-2026-draft",
      title: "損保代理店の別個登録は廃止される方向か",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "改正案は、一つの法人である損害保険代理店について支店等を別個の代理店として登録する実務を廃止し、法人単位で統一的な募集管理・ガバナンスを行う方向を示している。",
      exception: "2026年9月11日時点では改正案であり、現行の登録実務が直ちに変更されたわけではない。既存の別個登録代理店への移行措置も最終ルールを確認する必要がある。",
      uncertain: "既存登録の整理方法、移行期限、所属保険会社側の教育・管理実務への具体的影響は最終化後の監督指針と運用案内を確認する必要がある。",
      sourceIds: [proposalSourceId]
    }
  ];

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    const existingIssueIds = new Set((topic.issues || []).map((issue) => issue.id));
    return {
      ...topic,
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "金融庁は2026年9月11日、企業内代理店の特定契約比率規制、独占禁止法遵守態勢、企業向け損害保険商品の保険料率モニタリング、損害保険代理店の別個登録を見直す「保険会社向けの総合的な監督指針」の改正案を公表し、同年10月13日17時までパブリックコメントを実施している。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "2026年9月11日の監督指針改正案は、2026年6月に施行済みの2025年改正保険業法や、2028年3月施行の比較推奨販売ルールとは別のフォローアップ見直しとして管理し、現行義務と将来案を混同しない。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "企業内代理店と親会社・保険会社は、特定契約の把握、代理店手数料の原価・妥当性検証、独禁法遵守、三線管理を一体で棚卸しし、改正案とのギャップを把握する。",
          "損害保険会社は、共同保険の必要性検証、割増・割引の適用基準と事後検証、契約単位の収支・保険料水準分析について、現行の統制・証跡・経営報告を点検する。"
        ]),
        uncertain: addUniqueStrings((topic.currentSummary && topic.currentSummary.uncertain) || [], [
          "2026年9月11日の監督指針改正はパブリックコメント案であり、最終文言と初回の適用開始日は未確定である。特定契約比率規制について概要資料に示された2030年4月・2032年4月の段階的見直しの時期も、最終化後の経過措置を確認する必要がある。"
        ])
      },
      issues: (topic.issues || []).concat(newIssues.filter((issue) => !existingIssueIds.has(issue.id))),
      sourceIds: addUniqueStrings(topic.sourceIds, [proposalSourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, [
        "企業内代理店の特定契約比率管理",
        "代理店手数料の適正化",
        "独禁法遵守・共同保険管理",
        "企業向け損保の料率モニタリング"
      ])
    };
  });

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "保険会社向け総合的監督指針・2026年企業内代理店等改正",
      eventType: "regulation_or_guideline",
      lawId: "insurance-supervisory-guideline",
      lawLabel: "保険会社向けの総合的な監督指針",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "unknown",
      matchSourceIds: [proposalSourceId],
      sourceIds: [proposalSourceId],
      articleIds: [proposalArticleId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: proposalArticleId,
      title: "「保険会社向けの総合的な監督指針」の一部改正（案）の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-12",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260911/20260911.html",
      sourceType: "primary",
      sourceLabel: "一次資料・監督指針改正案／企業内代理店・独禁法・企業向け損保",
      status: "adopted",
      summary: "金融庁が2026年9月11日に公表した監督指針改正案。企業内代理店の特定契約比率規制の再構築、保険会社・代理店の独禁法遵守態勢、共同保険の管理、企業向け損害保険商品の料率モニタリング、損保代理店の別個登録の廃止を提案する。10月13日までパブリックコメント中で、初回の適用開始日はまだ確定していない。",
      whyImportant: [
        "企業内代理店について、特定契約比率の経過措置廃止・特定者範囲拡大と、手数料適正化・ガバナンスを満たす場合の適用除外という将来の制度設計を一次資料で確認できる",
        "独禁法遵守態勢と共同保険の必要性確認・競争法リスク管理を、保険監督上の内部管理事項として具体化する方向が分かる",
        "企業向け損保の料率について、割増・割引の基準と事後検証、三線管理、契約単位の収支・保険料分析までモニタリングを高度化する方向を確認できる"
      ],
      audience: ["保険会社法務・コンプライアンス", "企業内保険代理店", "保険代理店経営・法務", "内部監査", "法人保険・リスク管理担当"],
      audienceReason: "施行済みの2025年改正保険業法対応とは別に、企業内代理店、共同保険、企業向け料率管理、代理店登録の次の見直しを把握し、最終化前から現行態勢とのギャップを確認するため。",
      categories: ["契約", "危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "insurance-inhouse-agency-specific-contract-ratio-2026-draft",
        "insurance-antitrust-compliance-coinsurance-2026-draft",
        "insurance-corporate-pricing-monitoring-2026-draft",
        "insurance-separate-registration-2026-draft"
      ],
      primarySourceIds: [proposalSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [proposalSourceId],
      whatChanged: "テーマ更新／企業内代理店の特定契約比率規制、独禁法遵守、企業向け損保の料率モニタリング、別個登録の見直しを、現行義務と分離して監督指針改正案として追加。"
    },
    {
      id: amtArticleId,
      title: "【金融法務】大規模乗合保険代理店に対する規制強化に伴う保険会社等に対する体制整備義務の強化等に関する内閣府令等の改正の概要",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "村井 惠悟・津江 紘輝・高野 聖也（監修：出張 智己・福田 直邦・若狭 一行）",
      publishedAt: "2026-04-10",
      collectedAt: "2026-09-12",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260410001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／保険会社・代理店ガバナンス",
      status: "adopted",
      summary: "2025年改正保険業法と2026年3月30日に最終化された内閣府令・監督指針について、重要なパブリックコメント回答も参照しながら、保険会社等の体制整備、過度な便宜供与、営業推進態勢、保険金等支払管理態勢を具体化する実務解説。",
      whyImportant: [
        "金融庁資料の要約にとどまらず、保険会社側で兼業代理店の対象業務をどう特定・管理し、保険金支払部門と営業部門をどう牽制するかを法令・監督指針・パブリックコメント回答に沿って具体化している",
        "実施方針の策定・公表、記録保存、日常的管理、代理店監査など、既存の体制整備義務を運用単位まで落として確認できる",
        "過度な便宜供与、営業推進、保険金支払管理まで横断し、2025年改正の保険会社側の実装を補完できる"
      ],
      audience: ["保険会社法務・コンプライアンス", "保険代理店管理担当", "内部監査", "保険金支払部門", "企業内保険代理店担当"],
      audienceReason: "2026年6月施行の改正について、保険会社側の管理義務を規程レベルではなく、対象業務の特定、部門間牽制、記録、監査という運用へ落とすため。",
      categories: ["契約", "危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-agency-conflict-claims-management-2026", "insurance-excessive-benefits-2026"],
      primarySourceIds: ["source-fsa-insurance-business-act-2026-final-rules", "source-fsa-insurance-business-act-2025-law"],
      reformEventId: "insurance-business-act-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-insurance-business-act-2026-final-rules"],
      whatChanged: "整理変更なし／2025年改正保険業法について、保険会社側の兼業代理店管理、部門間牽制、記録・監査、便宜供与・支払管理を実務レベルで補完。"
    }
  ]);

  window.UPDATE_DATA = addUniqueById(window.UPDATE_DATA, [
    {
      id: updateId,
      source: proposalSourceId,
      headline: "企業内代理店・独禁法・企業向け損保モニタリングの監督指針改正案を公表",
      publishedAt: "2026-09-11",
      type: "law-update",
      typeLabel: "監督指針改正案",
      summary: "金融庁が、企業内代理店の特定契約比率規制、独禁法遵守態勢、共同保険、企業向け損害保険商品の料率モニタリング、損保代理店の別個登録を見直す監督指針改正案を公表した。",
      whatChanged: "既存テーマが2026年6月施行の2025年改正保険業法と2028年3月の比較推奨販売ルールを中心としていたところに、企業内代理店・独禁法・企業向け料率管理・別個登録のフォローアップ見直しを追加し、現行義務とは分離して案段階で整理した。",
      affectedTopics: [topicSlug],
      affectedIssues: [
        {
          topic: topicSlug,
          issue: "insurance-inhouse-agency-specific-contract-ratio-2026-draft",
          before: "2025年改正保険業法と2026年施行規則を中心に大規模乗合代理店のガバナンスを整理していたが、企業内代理店の特定契約比率規制の次段階の見直しは独立論点として整理していなかった。",
          after: "特定契約比率の経過措置廃止・特定者範囲拡大と、手数料適正化・ガバナンス要件を満たす代理店の適用除外案を、未確定の監督指針改正として独立管理する。"
        }
      ],
      before: "施行済みの代理店・保険会社ガバナンス強化と、2028年3月施行の比較推奨販売ルールが中心だった。",
      after: "企業内代理店規制、独禁法遵守・共同保険、企業向け損保の料率モニタリング、別個登録の見直しについて、2026年9月11日の監督指針改正案を追加し、案段階と現行義務を分離して追跡できる。",
      keyPoints: [
        "特定契約比率規制は段階的な見直しと、手数料適正化・ガバナンスを満たす場合の適用除外が提案されている",
        "保険会社・代理店の独禁法遵守態勢と共同保険の必要性・競争法リスク管理を監督上具体化する方向",
        "企業向け損保では割増・割引、契約単位の収支・保険料水準、三線管理を含む料率モニタリング高度化が提案されている",
        "初回の適用開始日は未確定であり、現行義務として表示しない"
      ],
      importance: "重要",
      tags: ["保険", "危機管理・コンプライアンス"],
      confidence: "fact"
    }
  ]);
})();