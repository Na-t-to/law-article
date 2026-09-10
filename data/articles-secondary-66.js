(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueTopicBySlug = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.slug));
    return (target || []).concat(additions.filter((item) => !existing.has(item.slug)));
  };

  const topicSlug = "ai-recruitment-rpo-employment-security-act";
  const febSourceId = "source-cao-mhlw-ai-rpo-wg-2026";
  const reportSourceId = "source-cao-regulatory-reform-report-ai-rpo-2026";
  const augSourceId = "source-mhlw-ai-rpo-regulatory-reform-2026";
  const reformEventId = "ai-rpo-employment-security-review-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: febSourceId,
      title: "AI等を活用した採用代行（RPO）の職業安定法上の課題と明確化（厚生労働省提出資料）",
      type: "guideline",
      typeLabel: "規制改革会議・厚生労働省提出資料",
      authority: "厚生労働省／内閣府規制改革推進会議",
      publishedAt: "2026-02-13",
      url: "https://www8.cao.go.jp/kisei-kaikaku/kisei/meeting/wg/2501_06ai/260213/ai07_0203.pdf",
      importance: "最高",
      whyImportant: "採用代行サービスは実態に応じて職業紹介、募集情報等提供、委託募集等のどの雇用仲介事業に該当するかを個別判断すること、自動処理であることだけでは職業紹介事業の許可要否を左右しないこと、AI採用代行に関する例示と許可基準の明確化を検討する方向を厚生労働省自身が示した基準資料。",
      topics: [topicSlug]
    },
    {
      id: reportSourceId,
      title: "規制改革推進に関する答申（2026年6月29日）",
      type: "guideline",
      typeLabel: "政府審議会・制度見直し方針",
      authority: "内閣府 規制改革推進会議",
      publishedAt: "2026-06-29",
      url: "https://www8.cao.go.jp/kisei-kaikaku/kisei/publication/p_report.html",
      importance: "最高",
      whyImportant: "AIを活用した採用代行について、職業紹介への該当性・許可要否の明確化、判断のばらつきの抑制、AIサービスの実態を踏まえた許可要件の点検を制度見直し事項として位置付けた公式の答申。",
      topics: [topicSlug]
    },
    {
      id: augSourceId,
      title: "第397回労働政策審議会職業安定分科会労働力需給制度部会 資料1『規制改革実施計画』について",
      type: "guideline",
      typeLabel: "労働政策審議会・制度見直し",
      authority: "厚生労働省",
      publishedAt: "2026-08-27",
      url: "https://www.mhlw.go.jp/stf/newpage_75128.html",
      importance: "最高",
      whyImportant: "規制改革実施計画を受け、AIを活用した採用代行の職業安定法上の許可要否・許可要件の明確化を労働力需給制度部会で検討対象として扱い始めた現在の進捗を確認できる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueTopicBySlug(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "AI採用代行（RPO）・職業安定法",
      categories: ["労務", "AI・デジタル", "危機管理・コンプライアンス"],
      summary: "AIを使う採用代行・RPOについて、現行の職業紹介・募集情報等提供・委託募集の区分と、2026年に進む許可要否・許可要件の明確化を、確定ルールと制度見直しを分けて整理する。",
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      isNew: true,
      overview: [
        "採用代行（RPO）は、日程調整や事務処理から、候補者の探索・選別、スカウト、面接支援、評価まで幅が広く、サービス名だけでは職業安定法上の位置付けを決められない。提供される機能と実際の運用に基づき、職業紹介、募集情報等提供、委託募集等のどれに当たるかを確認する必要がある。",
        "厚生労働省は、情報の選別や求人者・求職者間の意思疎通への加工等を事業者の判断で行う場合、判断が電子情報処理組織により自動的に行われるかどうかにかかわらず、職業紹介事業の許可が必要になり得るという現行の考え方を示している。AIを使っていること自体が許可不要の理由になるわけではない。",
        "一方、AIによるスカウト文面の加工・送信、候補者の選定、AI面接等の新しいサービスについては、既存の例示だけでは線引きが分かりにくいとの指摘があり、2026年の規制改革で職業紹介該当性・許可要否の明確化と、AIサービスの実態に即した許可要件の点検が検討対象となった。",
        "2026年8月27日の労働政策審議会労働力需給制度部会でも規制改革実施計画が報告され、制度見直しは継続中である。現時点でAI採用代行に一律の新ルールが施行されたと扱わず、現行法の区分基準と今後の具体化を分けて追う。"
      ],
      currentSummary: {
        facts: [
          "職業安定法上の職業紹介は、求人・求職の申込みを受け、求人者と求職者の間の雇用関係成立をあっせんする行為をいう。採用代行サービスは名称ではなく提供機能と実態に応じて雇用仲介事業上の区分を判断する。",
          "厚生労働省の現行整理では、情報の選別や意思疎通への加工等を事業者自身の判断で行う一定の行為は、その判断がシステムにより自動的に行われるかどうかにかかわらず職業紹介事業の許可が必要になり得る。",
          "2026年2月13日の規制改革推進会議では、AI採用代行について職業紹介該当性の具体例が少ないことから例示の追加・明確化を検討し、AIサービスの実態把握を踏まえて許可基準の見直しを検討する方向が厚生労働省から示された。",
          "2026年6月29日の規制改革答申を経て、8月27日の労働政策審議会労働力需給制度部会でも、AIを活用した採用代行の許可要否・許可要件の明確化が規制改革実施計画に基づく検討事項として扱われている。"
        ],
        interpretations: [
          "RPO導入時は『AIが自動で処理するだけ』という説明ではなく、誰が候補者を選別するか、スカウトや選考連絡を誰の判断で加工・送信するか、AI面接の評価が採否判断へどう接続するかを機能単位で分解して確認する必要がある。",
          "現行の職業紹介・募集情報等提供・委託募集の区分は引き続き適用されるため、制度見直しの議論があることを理由に、現在必要な許可や適法な業務範囲の確認を先送りしない。",
          "利用企業側でも、RPO事業者の許可の有無だけでなく、委託する業務範囲、AIによる選別・評価・コミュニケーションへの介入、個人情報の取扱い、最終的な採用判断主体を契約・運用で確認することが重要になる。"
        ],
        implications: [
          "AI採用代行を導入する企業は、候補者探索、スカウト、応募受付、日程調整、面接、評価、合否連絡などの工程ごとに、誰が判断し、誰が候補者との意思疎通を加工するかを棚卸しする。",
          "RPOベンダー選定時に、職業紹介等の必要な許可、サービス機能、AIの自動判断範囲、求人者による最終判断の位置付け、個人情報・応募者データの管理を確認する。",
          "新しいガイドラインや許可基準が示されるまでは、2026年の規制改革資料を確定済みの新ルールとして社内規程へ書き込まず、現行法対応と制度変更準備を別管理する。"
        ],
        uncertain: [
          "AIによるスカウト文面の生成・送信、候補者の優先順位付け、AI面接の自律的な質問・評価など個別機能について、どこまでを職業紹介として扱うかは今後の例示・ガイドライン等で具体化される。",
          "AIを活用する職業紹介事業者に対して、現行の許可要件のどの部分を維持・見直すかは検討中であり、具体的な制度改正内容や施行時期は確定していない。"
        ]
      },
      issues: [
        {
          id: "ai-rpo-current-classification",
          title: "AI採用代行は現行法上どの雇用仲介事業に当たるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "採用代行という名称やAI利用の有無ではなく、求人・求職の申込み、候補者や求人情報の選別、求人者・求職者間の意思疎通への加工、雇用関係成立へのあっせんの実態を見て、職業紹介・募集情報等提供・委託募集等の区分を判断する。",
          exception: "日程調整等の事務的な支援だけを行う場合と、候補者の選別や選考上の意思決定に介入する場合とでは評価が異なり得る。個別サービスの契約・機能・実際の運用を確認する必要がある。",
          uncertain: "AI採用代行の新しい機能については既存の具体例が十分でなく、現在も明確化作業が進んでいる。",
          sourceIds: [febSourceId, augSourceId]
        },
        {
          id: "ai-rpo-automation-permit",
          title: "AIによる自動処理なら職業紹介の許可は不要か",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "事業者の判断により情報の選別や意思疎通への加工等を行う一定の行為は、その判断が電子情報処理組織により自動的に行われているかどうかにかかわらず、職業紹介事業の許可が必要になり得る。",
          exception: "AIを用いる行為の全てが職業紹介になるわけではない。自動処理の内容が単なる表示・事務処理なのか、選別・加工・あっせんに当たるのかを実態で確認する。",
          uncertain: "生成AIやAI面接等の具体的機能を既存基準へどう当てはめるかについては、今後の例示の追加・明確化が予定されている。",
          sourceIds: [febSourceId]
        },
        {
          id: "ai-rpo-clarification-review",
          title: "AI採用代行の許可要否・許可要件はどう見直されるか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "政府は、AI採用代行の職業紹介該当性・許可要否について具体例を増やして明確化するとともに、AIサービスの実態を踏まえて現行の許可要件に見直すべき点がないかを検討する方向で作業を進めている。",
          exception: "現時点で新しい区分基準や許可基準が施行されたわけではなく、既存の職業安定法・指針に基づく判断が必要である。",
          uncertain: "最終的なガイドラインの内容、許可要件の変更範囲、実施時期は未確定である。",
          sourceIds: [reportSourceId, augSourceId, febSourceId]
        },
        {
          id: "ai-rpo-procurement-controls",
          title: "利用企業はRPO導入前に何を確認するか",
          status: "interpreted",
          stage: "under_revision",
          views: [],
          conclusion: "採用工程を機能単位で分解し、ベンダーの許可、候補者選別・連絡・評価の判断主体、AIの自動化範囲、最終採否の権限、応募者データの取扱いを契約と実運用の双方で確認する。",
          exception: "必要な確認項目は委託範囲によって異なり、単純な事務代行と候補者探索・選別・面接評価を含むサービスを同じチェックリストで扱わない。",
          uncertain: "制度見直し後に許可区分や求められるガバナンスが変わる可能性があるため、契約更新時にも最新の行政資料を確認する。",
          sourceIds: [febSourceId, reportSourceId, augSourceId]
        }
      ],
      sourceIds: [febSourceId, reportSourceId, augSourceId],
      practicalImpacts: ["RPO・採用代行契約", "HR Tech・AIサービス選定", "採用フロー・権限設計", "職業紹介事業の許可確認", "応募者データ・個人情報管理"]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "AI採用代行（RPO）の職業安定法上の区分・許可要件見直し",
      eventType: "policy_review",
      lawId: "employment-security-act-ai-rpo",
      lawLabel: "職業安定法・AI採用代行（RPO）",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "unknown",
      matchSourceIds: [febSourceId, reportSourceId, augSourceId],
      sourceIds: [febSourceId, reportSourceId, augSourceId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-cao-mhlw-ai-rpo-wg-2026",
      title: "AI等を活用した採用代行（RPO）の職業安定法上の課題と明確化",
      publisher: "厚生労働省／内閣府規制改革推進会議",
      author: "厚生労働省 職業安定局",
      publishedAt: "2026-02-13",
      collectedAt: "2026-09-10",
      url: "https://www8.cao.go.jp/kisei-kaikaku/kisei/meeting/wg/2501_06ai/260213/ai07_0203.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・規制改革／職業安定法・AI採用代行",
      status: "adopted",
      summary: "規制改革推進会議に提出された厚生労働省資料。採用代行サービスは実態に応じて雇用仲介事業上の区分を判断すること、情報選別や意思疎通への加工等を事業者の判断で行う場合は自動処理であっても職業紹介許可が必要になり得ることを確認した上で、AI採用代行について具体例の追加・明確化と許可基準の見直しを検討する方向を示す。",
      whyImportant: ["AIを使っているだけでは職業紹介規制の外に出ないという現行の基準点を確認できる", "候補者選別・意思疎通への加工など、RPO機能を法的区分へ分解する観点を得られる", "今後の明確化対象と、まだ確定していない部分を同じ資料から区別できる"],
      audience: ["企業法務", "人事・採用担当", "HR Tech・RPO事業者", "コンプライアンス担当"],
      audienceReason: "AI採用代行の導入・提供時に、職業紹介等の許可要否をサービス名ではなく機能と運用から確認するため。",
      categories: ["労務", "AI・デジタル"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ai-rpo-current-classification", "ai-rpo-automation-permit", "ai-rpo-clarification-review"],
      primarySourceIds: [febSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [febSourceId],
      whatChanged: "新テーマ作成／AI採用代行の現行区分基準と2026年の許可要否・許可要件明確化を分離して整理した。"
    },
    {
      id: "article-cao-regulatory-reform-ai-rpo-2026",
      title: "規制改革推進に関する答申（2026年6月29日）― AI採用代行・職業安定法関係",
      publisher: "内閣府 規制改革推進会議",
      author: "規制改革推進会議",
      publishedAt: "2026-06-29",
      collectedAt: "2026-09-10",
      url: "https://www8.cao.go.jp/kisei-kaikaku/kisei/publication/p_report.html",
      sourceType: "primary",
      sourceLabel: "一次資料・規制改革答申／AI採用代行",
      status: "adopted",
      summary: "2026年の規制改革答申。AIを活用した採用代行について、職業紹介への該当性・許可要否の明確化、行政判断のばらつきの抑制、AIサービスの実態を踏まえた許可要件の点検を制度見直しの方向として位置付ける。",
      whyImportant: ["2月のワーキンググループでの問題提起が政府の規制改革事項として進んだことを確認できる", "確定した新ルールではなく、今後の行政明確化・制度検討であることを時系列で追える", "RPOベンダーと利用企業の双方が、現行対応と制度変更準備を分けるための基準になる"],
      audience: ["企業法務", "人事・採用担当", "HR Tech・RPO事業者"],
      audienceReason: "AI採用代行規制の将来方向を把握しつつ、未確定事項を現行ルールとして先取りしないため。",
      categories: ["労務", "AI・デジタル"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ai-rpo-clarification-review", "ai-rpo-procurement-controls"],
      primarySourceIds: [reportSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [reportSourceId],
      whatChanged: "新テーマ補強／AI採用代行の許可要否・許可要件明確化が政府の制度見直し事項として継続していることを追加した。"
    },
    {
      id: "article-mhlw-ai-rpo-regulatory-reform-2026",
      title: "第397回労働政策審議会職業安定分科会労働力需給制度部会 資料1『規制改革実施計画』について",
      publisher: "厚生労働省",
      author: "厚生労働省 職業安定局",
      publishedAt: "2026-08-27",
      collectedAt: "2026-09-10",
      url: "https://www.mhlw.go.jp/stf/newpage_75128.html",
      sourceType: "primary",
      sourceLabel: "一次資料・労働政策審議会／AI採用代行",
      status: "adopted",
      summary: "2026年8月27日の労働政策審議会労働力需給制度部会資料。規制改革実施計画に基づく検討事項として、AIを活用した採用代行の職業安定法上の許可要否・許可要件の明確化を部会で扱い、制度具体化が継続中であることを示す。",
      whyImportant: ["6月答申後の検討が厚生労働省の労政審段階へ進んでいる現在地を確認できる", "AI採用代行に関する新ルールがすでに施行済みと誤認せず、まだ検討段階であることを確認できる", "今後のガイドライン・許可基準変更を追う際の直近の公式起点になる"],
      audience: ["企業法務", "人事・採用担当", "HR Tech・RPO事業者"],
      audienceReason: "AI採用代行規制の検討ステージを最新の厚生労働省資料で確認するため。",
      categories: ["労務", "AI・デジタル"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ai-rpo-clarification-review", "ai-rpo-procurement-controls"],
      primarySourceIds: [augSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [augSourceId],
      whatChanged: "新テーマ更新／2026年8月27日時点でAI採用代行の許可要否・許可要件明確化が労政審の検討対象となっている現在地を反映した。"
    },
    {
      id: "article-tm-nagoya-regulatory-reform-ai-rpo-2026",
      title: "【考察】【令和8年6月 規制改革答申】『働き方・人への投資』で動く4つの労務論点",
      publisher: "社会保険労務士法人T&M Nagoya",
      author: "三重 英則",
      publishedAt: "2026-07-01",
      collectedAt: "2026-09-10",
      url: "https://www.mh5.jp/announce2_96334.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・社会保険労務士／規制改革・AI採用代行",
      status: "adopted",
      summary: "2026年6月の規制改革答申を企業の労務実務へ落とす解説。AI採用代行について、スカウト文面の作成・送信、AI面接など具体的な機能を挙げながら職業紹介該当性・許可要否が明確化の対象になっていることを整理し、利用企業には導入前の許可・業務範囲確認を勧める。答申は提言であり確定ルールではない点も明確に区別している。",
      whyImportant: ["AI採用代行の抽象的な制度論を、スカウト・AI面接等の具体的な採用工程へ接続している", "制度見直し中でも現行法上の許可確認が必要という、利用企業側の実務対応を明確にしている", "答申と確定ルールを混同しない読み方を示しており、一次資料の補助解説として使いやすい"],
      audience: ["企業法務", "人事・採用担当", "HR Tech導入担当"],
      audienceReason: "AI採用ツール・RPOの導入時に、どの機能を許可・業務範囲の確認対象として見るかを具体化するため。",
      categories: ["労務", "AI・デジタル"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ai-rpo-current-classification", "ai-rpo-clarification-review", "ai-rpo-procurement-controls"],
      primarySourceIds: [reportSourceId, febSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [reportSourceId],
      whatChanged: "整理変更なし／政府資料で確認したAI採用代行の制度見直しを、企業の採用工程・ベンダー選定へ落とす参考解説を追加した。"
    }
  ]);
})();
