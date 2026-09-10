(() => {
  const topicSlug = "ssbj-statutory-sustainability-disclosure";
  const lawSourceId = "source-fsa-fiea-law-2026";
  const roadmapSourceId = "source-fsa-sustainability-disclosure-assurance-report-2026";
  const assuranceSourceId = "source-fsa-sustainability-assurance-subcommittee-2026";
  const assuranceIssueId = "ssbj-statutory-assurance";
  const reformEventId = "fiea-sustainability-disclosure-assurance-2026-amendment";

  const lawArticleId = "article-fsa-fiea-sustainability-assurance-2026";
  const roadmapArticleId = "article-fsa-sustainability-disclosure-assurance-report-2026";
  const assuranceArticleId = "article-fsa-sustainability-assurance-subcommittee-2026";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = (window.SOURCE_DATA || []).map((source) => {
    if (source.id !== lawSourceId) return source;
    return { ...source, topics: addUniqueStrings(source.topics, [topicSlug]) };
  });

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: roadmapSourceId,
      title: "金融審議会 サステナビリティ情報の開示と保証のあり方に関するワーキング・グループ 報告",
      type: "report",
      typeLabel: "制度設計報告・開示／第三者保証ロードマップ",
      authority: "金融庁／金融審議会",
      publishedAt: "2026-01-08",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/tosin/20260108/01.pdf",
      importance: "最高",
      whyImportant: "SSBJ基準の段階適用に続く第三者保証の開始時期、当初2年間の保証範囲・限定的保証、保証業務実施者の登録・行為規制・監督、任意保証との区別など、2026年の法制化・制度整備の設計を具体化した金融審議会の一次資料。",
      topics: [topicSlug]
    },
    {
      id: assuranceSourceId,
      title: "企業会計審議会 サステナビリティ情報保証部会 第2回事務局説明・議事録",
      type: "report",
      typeLabel: "保証基準・制度整備資料",
      authority: "金融庁／企業会計審議会",
      publishedAt: "2026-07-03",
      url: "https://www.fsa.go.jp/singi/singi_kigyou/siryou/hoshou/20260703.html",
      importance: "高",
      whyImportant: "法案提出後の制度実装段階で、保証基準を国際基準と整合させること、監査法人以外も登録可能とすること、当初2年間はScope1・2、ガバナンス、リスク管理を限定的保証の対象とする方向などを具体化した一次資料。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const previousUncertain = ((topic.currentSummary && topic.currentSummary.uncertain) || []).filter(
      (item) => !String(item).includes("1兆円未満の会社への将来の適用拡大や保証制度の詳細")
    );

    const issues = addUniqueById(topic.issues, [
      {
        id: assuranceIssueId,
        title: "SSBJ情報の第三者保証は、いつ・誰から・どの範囲で受けるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "令和8年法律第64号により、金融商品取引法に特定非財務情報監査証明の法定枠組みが創設され、一定の有価証券報告書等の特定非財務情報について第三者保証を受ける制度と、保証業務実施者の登録・業規制が設けられた。サステナビリティ開示・保証に関係する第一条の主要改正は2027年4月1日施行で、同日以後に開始する事業年度に係る書類から適用される。",
        exception: "第三者保証の具体的な対象会社・対象情報・実施時期は、法律だけで完結せず、開示府令等、保証基準・実務指針その他の制度整備と併せて確認する必要がある。金融審議会報告のロードマップと、現時点で法令上確定している適用範囲を混同しない。",
        uncertain: "金融審議会報告では、時価総額3兆円以上は2028年3月期、1兆円以上3兆円未満は2029年3月期、5,000億円以上1兆円未満は2030年3月期から第三者保証を導入するロードマップが示され、当初2年間はScope1・2、ガバナンス、リスク管理を限定的保証の対象とする方向が示されている。5,000億円以上1兆円未満の適用具体化、保証基準・登録要件・保証報告書等の最終制度整備は継続確認する。",
        sourceIds: [lawSourceId, roadmapSourceId, assuranceSourceId]
      }
    ]);

    return {
      ...topic,
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "金融商品取引法及び資金決済に関する法律の一部を改正する法律は2026年7月15日に成立し、7月23日に令和8年法律第64号として公布された。金商法に特定非財務情報監査証明の制度を新設し、一定のプライム市場上場企業のサステナビリティ情報について第三者保証を受ける法定枠組みと、保証業務実施者の登録・業規制を設ける。",
          "サステナビリティ開示・保証に関係する金商法第一条の主要改正は2027年4月1日施行で、附則により同日以後に開始する事業年度に係る対象書類へ適用される。",
          "2026年1月の金融審議会報告は、SSBJ基準の適用開始の翌期から第三者保証を導入するロードマップとして、時価総額3兆円以上は2028年3月期、1兆円以上3兆円未満は2029年3月期、5,000億円以上1兆円未満は2030年3月期を示した。",
          "金融審議会報告・企業会計審議会の制度整備では、第三者保証の導入当初2年間はScope1・2のGHG排出量、ガバナンス、リスク管理を保証範囲とし、保証水準は限定的保証とする方向が示されている。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "SSBJ対応は開示文案の作成だけでなく、保証対象データの証跡、内部統制、保証業務実施者への情報提供、保証報告までを含む実装課題へ移っている。法定枠組みとして確定した部分と、金融審議会報告・企業会計審議会でなお具体化中の部分を分けて管理する必要がある。",
          "法定第三者保証と任意保証は投資家に誤認されないよう区別する必要があり、任意保証を有価証券報告書等で説明する場合は、保証実施者、登録の有無、準拠基準、結論、法定保証ではない旨などの表示設計も検討対象になる。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "対象会社は、自社の時価総額区分ごとにSSBJ開示の初年度と第三者保証の初年度を分け、保証初年度から逆算してScope1・2、ガバナンス、リスク管理の証跡・統制・責任分界を整備する。",
          "監査法人以外の保証業務実施者も登録可能となる制度設計を前提に、候補者の登録状況、独立性、専門性、品質管理体制を確認できる選定プロセスを準備する。"
        ]),
        uncertain: addUniqueStrings(previousUncertain, [
          "時価総額5,000億円以上1兆円未満の会社について、2029年3月期からのSSBJ基準適用・2030年3月期からの第三者保証は金融審議会報告のロードマップであり、開示府令等による法令上の具体化を継続確認する。",
          "第三者保証の保証基準、登録要件、保証報告書、実務指針その他の詳細は企業会計審議会等で制度整備が進行しているため、最終的な法令・基準・告示等を継続確認する。"
        ])
      },
      sourceIds: addUniqueStrings(topic.sourceIds, [lawSourceId, roadmapSourceId, assuranceSourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["第三者保証の準備・保証人選定", "保証対象データの内部統制・証跡整備"]),
      issues
    };
  });

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).map((event) =>
    event.lawId === "financial-instruments-exchange-act" ? { ...event, lawLabel: "金融商品取引法" } : event
  );

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "金融商品取引法・2026年サステナビリティ開示／第三者保証改正",
      eventType: "law_amendment",
      lawId: "financial-instruments-exchange-act",
      lawLabel: "金融商品取引法",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2027-04-01"],
      effectiveDateSourceIds: [lawSourceId],
      sourceIds: [lawSourceId, roadmapSourceId, assuranceSourceId],
      matchSourceIds: [roadmapSourceId, assuranceSourceId],
      articleIds: [lawArticleId, roadmapArticleId, assuranceArticleId]
    }
  ]);

  window.UPDATE_DATA = addUniqueById(window.UPDATE_DATA, [
    {
      id: "update-ssbj-statutory-assurance-2026-07",
      source: lawSourceId,
      headline: "令和8年金商法改正でSSBJ情報の第三者保証の法定枠組みが成立",
      publishedAt: "2026-07-23",
      type: "law-update",
      typeLabel: "法改正・公布／施行準備",
      summary: "令和8年法律第64号により、金商法に特定非財務情報監査証明制度と保証業務実施者の登録・業規制が新設された。従来は制度設計段階として追っていた第三者保証について、法定枠組みが成立・公布され、2027年4月1日の施行に向けて保証基準等の具体化を追う段階へ移った。",
      whatChanged: "法定枠組み確定／SSBJ情報の第三者保証について、制度導入の検討段階から、令和8年法律第64号による法定制度の成立・公布と2027年4月1日施行準備の段階へ更新した。",
      affectedTopics: [topicSlug],
      affectedIssues: ["ssbj-application-scope", assuranceIssueId],
      before: "SSBJ基準の法定開示は段階適用が具体化していた一方、第三者保証制度の法的枠組み・担い手・詳細は今後の制度整備事項として整理していた。",
      after: "金商法に特定非財務情報監査証明制度と保証業務実施者の登録・業規制が新設され、サステナビリティ開示・保証に関係する主要改正は2027年4月1日施行。保証開始時期・当初範囲は金融審議会ロードマップと区別して追跡する。",
      confidence: "fact"
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: lawArticleId,
      title: "金融商品取引法及び資金決済に関する法律の一部を改正する法律―サステナビリティ情報の開示・第三者保証",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-07-23",
      collectedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/common/diet/221/02/02.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・令和8年金商法改正／第三者保証",
      status: "adopted",
      summary: "2026年7月15日に成立し、7月23日に令和8年法律第64号として公布された金商法・資金決済法改正のうち、企業のサステナビリティ情報の開示・保証を扱う一次資料。一定のプライム市場上場企業にサステナビリティ開示基準に基づく情報開示と第三者保証を求め、保証提供業者に登録制・業規制を導入する法定枠組みを設けた。",
      whyImportant: [
        "SSBJ第三者保証が政策提案ではなく、成立・公布した金商法上の制度になったことを確認できる",
        "保証業務実施者について監査法人以外も登録可能とする制度設計を、法改正の全体像から把握できる",
        "施行日と経過措置を法律本文までたどる起点になる"
      ],
      audience: ["上場会社法務", "開示・IR", "サステナビリティ", "内部監査・経理"],
      audienceReason: "SSBJ対応を開示準備だけでなく、第三者保証を受けるための内部統制・証跡整備・保証人選定まで含めた工程に更新するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ssbj-application-scope", assuranceIssueId],
      primarySourceIds: [lawSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [lawSourceId],
      reformEffectiveDates: ["2027-04-01"],
      reformEffectiveDateSourceIds: [lawSourceId],
      whatChanged: "法定枠組み確定／SSBJ情報の第三者保証について、令和8年法律第64号による制度成立・公布と2027年4月1日の主要規定施行を反映した。"
    },
    {
      id: roadmapArticleId,
      title: "サステナビリティ情報の開示と保証のあり方に関するワーキング・グループ 報告",
      publisher: "金融庁",
      author: "金融審議会",
      publishedAt: "2026-01-08",
      collectedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/tosin/20260108.html",
      sourceType: "primary",
      sourceLabel: "一次資料・制度設計報告／第三者保証ロードマップ",
      status: "adopted",
      summary: "SSBJ基準に基づく開示と第三者保証の段階導入を整理した金融審議会報告。時価総額3兆円以上は2028年3月期、1兆円以上3兆円未満は2029年3月期、5,000億円以上1兆円未満は2030年3月期から第三者保証を導入するロードマップを示し、当初2年間の保証範囲をScope1・2、ガバナンス、リスク管理、保証水準を限定的保証とする方向を整理している。",
      whyImportant: [
        "法改正だけでは読み切れない対象会社ごとの第三者保証開始時期をロードマップとして確認できる",
        "当初2年間の保証範囲と限定的保証という実務準備の前提を確認できる",
        "保証業務実施者の登録・独立性・品質管理・監督や任意保証との区別まで制度全体を一続きで把握できる"
      ],
      audience: ["上場会社法務", "開示・IR", "サステナビリティ", "内部監査・経理"],
      audienceReason: "自社の時価総額区分からSSBJ開示と第三者保証の準備工程を逆算し、保証対象データと内部統制の整備優先順位を決めるため。",
      categories: ["金融商品取引・開示・IR"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ssbj-application-scope", assuranceIssueId],
      primarySourceIds: [roadmapSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [roadmapSourceId],
      whatChanged: "論点更新／第三者保証の対象会社別の導入時期、当初2年間の保証範囲・限定的保証、登録・監督の制度設計をSSBJテーマへ補完した。"
    },
    {
      id: assuranceArticleId,
      title: "企業会計審議会 サステナビリティ情報保証部会―保証基準・制度実装の検討",
      publisher: "金融庁",
      author: "企業会計審議会 サステナビリティ情報保証部会",
      publishedAt: "2026-07-03",
      collectedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/singi/singi_kigyou/gijiroku/hoshou/20260703.html",
      sourceType: "primary",
      sourceLabel: "一次資料・保証基準／制度整備",
      status: "adopted",
      summary: "サステナビリティ情報保証制度の実装に向け、国際基準と整合する日本の保証基準等、監査法人以外を含む登録業者、登録審査・検査監督、保証範囲・水準を議論した企業会計審議会の資料。国際基準と同等の基準を日本の保証基準等とし、金融庁が策定主体となる方向などが具体化している。",
      whyImportant: [
        "成立法の条文だけでは分からない保証基準の設計・策定主体と国際基準との接続を追える",
        "監査法人以外の保証業務実施者も含む登録・監督の実装論点を確認できる",
        "企業側が今から整えるべき証跡・内部統制と、なお最終化待ちの制度詳細を切り分けやすい"
      ],
      audience: ["上場会社法務", "開示・IR", "サステナビリティ", "内部監査・経理"],
      audienceReason: "法定第三者保証の開始前に、保証基準・担い手・監督制度の具体化を追い、社内準備を確定事項と未確定事項に分けるため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [assuranceIssueId],
      primarySourceIds: [assuranceSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [assuranceSourceId],
      whatChanged: "論点更新／SSBJ第三者保証について、保証基準・登録業者・検査監督など施行前に詰める制度実装の論点を追加した。"
    }
  ]);
})();
