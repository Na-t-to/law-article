window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([
  {
    "slug": "ai-recruitment-rpo-employment-placement",
    "title": "AI採用代行・職業紹介／募集情報等提供の境界",
    "categories": ["労務", "AI・デジタル", "契約"],
    "summary": "AIやRPOを使った採用支援について、職業安定法上の職業紹介・募集情報等提供・委託募集等の境界と、2026年に進む許可要否・許可要件の明確化を整理する。現行の区分基準と検討中の制度見直しを分けて追う。",
    "lastUpdated": "2026-09-07",
    "lastVerified": "2026-09-07",
    "isNew": true,
    "overview": [
      "採用代行（RPO）はサービス名称だけで法的位置付けが決まるものではなく、候補者の選別・推薦、求人情報の加工、応募者と求人者の意思疎通への介在など、実際に行う機能ごとに職業紹介該当性を確認する必要があります。",
      "厚生労働省の現行整理では、事業者自身の判断による情報の選別・相手方に応じた加工・意思疎通の加工を行う場合、電子システムで自動的に処理されるかどうかにかかわらず、職業紹介事業の許可等が必要となり得ます。",
      "一方、生成AI・AIエージェント等を使ってスカウト、候補者評価、メッセージ作成・送信などを自動化するサービスが拡大し、2026年には内閣府の規制改革推進会議で、AI等を活用した採用代行の許可要否・許可要件を明確化する検討が始まりました。",
      "2026年9月時点で新たな許可免除やAI専用ルールが施行されたわけではありません。現在のサービス設計・委託契約は現行の職業安定法と厚生労働省の区分基準で評価しつつ、今後の明確化を追います。"
    ],
    "currentSummary": {
      "facts": [
        "職業安定法上の『職業紹介』は、求人及び求職の申込みを受け、求人者と求職者の間の雇用関係の成立をあっせんすることをいい、有料職業紹介事業には原則として許可が必要となる。",
        "厚生労働省は、求人・求職者情報について事業者自身の判断で提供相手・情報を選別すること、相手方に応じて情報を加工すること、求人者と求職者の意思疎通を中継する際に事業者の判断で加工することなどを、職業紹介事業の許可等が必要となる行為として整理している。これらは電子情報処理組織により自動的に行われるかどうかを問わない。",
        "単に求人情報・求職者情報を提供し、求人・求職の申込みを受けず、雇用関係成立のあっせんを行わない場合は職業紹介には当たらない。ただし、求職者情報を収集して行う特定募集情報等提供には届出が必要となる。",
        "内閣府の規制改革推進会議デジタル・AIワーキング・グループは2026年2月13日、AI等を活用した採用代行について、職業安定法上の許可要否と許可要件の明確化を議題として検討した。",
        "厚生労働省の労働政策審議会職業安定分科会労働力需給制度部会では2026年8月27日に『規制改革実施計画』が議題となっており、AI採用代行の許可要否・許可要件の明確化は引き続き検討段階にある。"
      ],
      "interpretations": [
        "AIを使うか人が処理するかより、誰の判断で候補者・求人を選び、どの程度マッチング・推薦・意思疎通に介在するかを機能単位で確認する方が、現行の厚生労働省基準に沿う。",
        "採用代行契約では、応募受付・日程調整・ATS入力などの事務支援と、候補者の推薦・選考判断・スカウト対象選定・条件交渉など職業紹介に近づく行為を分け、実際のシステム権限と運用が契約上の役割分担を越えていないか確認する必要がある。",
        "2026年の制度検討は現行規制の適用を停止するものではないため、将来の明確化を先取りして無許可で職業紹介に当たり得る機能を提供・委託するのは避けるべきである。"
      ],
      "implications": [
        "RPO・採用AIを導入又は提供する際は、候補者抽出、スコアリング、推薦、スカウト送信、応募意思の確認、面接調整、選考連絡、条件交渉等を機能一覧にし、誰が最終判断するかを記録する。",
        "ベンダー審査では、有料職業紹介事業の許可の有無、特定募集情報等提供の届出、再委託・個人情報の取扱い、AIによる自動処理の範囲を確認する。",
        "委託契約・仕様書では、ベンダーが独自判断で候補者を推薦・選別したり、求人者の判断を代替して応募者との意思疎通を加工したりする範囲を明確にし、実運用との乖離を監査する。",
        "厚生労働省がAI採用代行の具体例や許可要件の見直しを公表した場合は、既存サービスの機能分類、許認可、契約、説明表示を再点検する。"
      ],
      "uncertain": [
        "AIによるスカウト文面生成・候補者評価・面接支援など個別機能について、今後どのような具体例・判断要素が追加されるかは確定していない。",
        "職業紹介事業の許可要件自体をどこまで見直すか、見直す場合の内容・時期も2026年9月時点では確定していない。"
      ]
    },
    "issues": [
      {
        "id": "rpo-current-placement-boundary",
        "title": "採用代行のどの機能が職業紹介に当たるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "現行の厚生労働省整理では、事業者自身の判断による求人・求職者情報の選別、相手方に応じた加工、意思疎通の加工等を行う場合は職業紹介事業の許可等が必要となり得る。自動処理であること自体は職業紹介該当性を否定する理由にならない。",
        "exception": "利用者が自ら設定した条件による検索・表示順の変更、求人者の明示的な依頼条件に従った配信、単純な連絡機能や一般的な履歴書作成助言など、厚生労働省が職業紹介に該当しない具体例として示す行為もある。",
        "uncertain": "複数機能を一体で提供するサービスは、宣伝広告、契約内容、実際の運用を含むサービス全体の実態から判断されるため、個々の機能だけで最終結論を出せない場合がある。",
        "sourceIds": ["source-mhlw-recruitment-info-placement-boundary"]
      },
      {
        "id": "rpo-ai-automated-acts-review",
        "title": "AI採用代行の許可要否・許可要件はどう明確化されるか",
        "status": "pending",
        "stage": "under_revision",
        "views": [],
        "conclusion": "2026年の規制改革では、AI等を活用した採用代行について職業安定法上の許可要否と許可要件を明確化する検討が進んでいるが、新たなAI専用ルールや許可免除が確定・施行した段階ではない。",
        "exception": "制度検討中であっても現行の職業安定法・指針・厚生労働省の区分基準は引き続き適用される。",
        "uncertain": "AIスカウト、候補者評価、面接支援、生成メッセージ等をどの粒度で具体例化するか、許可要件を見直すか、その時期は今後の審議次第である。",
        "sourceIds": ["source-cao-ai-rpo-wg-2026", "source-mhlw-ai-rpo-review-2026", "source-mhlw-recruitment-info-placement-boundary"]
      },
      {
        "id": "rpo-contract-licensing-controls",
        "title": "RPO契約・ベンダー管理で何を統制するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "採用代行の名称ではなく実際の機能・権限で規制区分が決まるため、委託契約と仕様書で候補者の選別・推薦、応募勧奨、意思疎通、条件交渉等の担当範囲を明確にし、必要な職業紹介許可・募集情報等提供の届出の有無を確認する。",
        "exception": "許認可の要否は個別サービスの実態に依存し、契約書に『職業紹介を行わない』と記載するだけで実際の業務が職業紹介に当たらなくなるわけではない。",
        "uncertain": "AI機能の自律性が高い場合に、人の最終承認をどの程度置けば事業者自身の判断による選別・加工と評価されないかは、今後の公式明確化と個別事実関係の確認が必要である。",
        "sourceIds": ["source-mhlw-recruitment-info-placement-boundary", "source-cao-ai-rpo-wg-2026"]
      }
    ],
    "sourceIds": [
      "source-mhlw-recruitment-info-placement-boundary",
      "source-cao-ai-rpo-wg-2026",
      "source-mhlw-ai-rpo-review-2026"
    ],
    "practicalImpacts": [
      "RPO・採用BPO契約",
      "採用AI・ATSベンダー審査",
      "職業紹介事業の許可確認",
      "特定募集情報等提供事業の届出確認",
      "スカウト・候補者推薦・選考フロー",
      "個人情報・再委託管理",
      "採用システムの権限・ログ"
    ]
  }
]);

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-mhlw-recruitment-info-placement-boundary",
    "title": "募集情報等提供と職業紹介の区分について",
    "type": "guideline",
    "typeLabel": "一次資料・職業紹介／募集情報等提供の区分",
    "authority": "厚生労働省",
    "url": "https://www.mhlw.go.jp/stf/shoukaibosyuukubun.html",
    "importance": "最高",
    "whyImportant": "職業紹介と募集情報等提供の現行の区分、許可・届出、事業者自身による選別・加工・意思疎通への介在の具体例を確認する基準資料。自動処理かどうかにかかわらず職業紹介該当性を判断することも明示する。",
    "topics": ["ai-recruitment-rpo-employment-placement"]
  },
  {
    "id": "source-cao-ai-rpo-wg-2026",
    "title": "第7回 デジタル・AIワーキング・グループ 議事次第・資料（AI等を活用した採用代行）",
    "type": "government_material",
    "typeLabel": "一次資料・規制改革／デジタル・AI WG",
    "authority": "内閣府 規制改革推進会議",
    "publishedAt": "2026-02-13",
    "url": "https://www8.cao.go.jp/kisei-kaikaku/kisei/meeting/wg/2501_06ai/260213/ai07_agenda.html",
    "importance": "最高",
    "whyImportant": "AI等を活用した採用代行について、職業安定法上の許可要否・許可要件の明確化を政府の規制改革会議が正式な議題として扱った一次資料。事業者と厚生労働省の提出資料への入口でもある。",
    "topics": ["ai-recruitment-rpo-employment-placement"]
  },
  {
    "id": "source-mhlw-ai-rpo-review-2026",
    "title": "第397回 労働政策審議会職業安定分科会労働力需給制度部会（「規制改革実施計画」について）",
    "type": "government_material",
    "typeLabel": "一次資料・労働政策審議会／制度見直し",
    "authority": "厚生労働省",
    "publishedAt": "2026-08-27",
    "url": "https://www.mhlw.go.jp/stf/newpage_75128.html",
    "importance": "高",
    "whyImportant": "2026年8月27日の労働力需給制度部会で規制改革実施計画が公開議題となったことを確認でき、AI採用代行の許可要否・許可要件明確化が職業安定行政側で検討される現在地を追う入口となる。",
    "topics": ["ai-recruitment-rpo-employment-placement"]
  }
]);

window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([
  {
    "id": "employment-security-ai-rpo-2026-review",
    "title": "職業安定法・AI採用代行／職業紹介区分の明確化（2026年検討）",
    "eventType": "policy_review",
    "lawId": "employment-security-act",
    "lawLabel": "職業安定法・AI採用代行／職業紹介",
    "relatedTopics": ["ai-recruitment-rpo-employment-placement"],
    "effectiveDateStatus": "unknown",
    "matchSourceIds": ["source-cao-ai-rpo-wg-2026", "source-mhlw-ai-rpo-review-2026"],
    "sourceIds": ["source-mhlw-recruitment-info-placement-boundary", "source-cao-ai-rpo-wg-2026", "source-mhlw-ai-rpo-review-2026"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-cao-ai-rpo-wg-2026",
    "title": "第7回 デジタル・AIワーキング・グループ（AI等を活用した採用代行の職業安定法上の許可要否及び許可要件の明確化）",
    "publisher": "内閣府 規制改革推進会議",
    "author": "デジタル・AIワーキング・グループ",
    "publishedAt": "2026-02-13",
    "collectedAt": "2026-09-07",
    "url": "https://www8.cao.go.jp/kisei-kaikaku/kisei/meeting/wg/2501_06ai/260213/ai07_agenda.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・規制改革／AI採用代行",
    "status": "adopted",
    "summary": "規制改革推進会議のデジタル・AIワーキング・グループが、AI等を活用した採用代行について、職業安定法上の職業紹介事業の許可が必要となる行為と許可要件の明確化を独立議題として扱った公式会議資料。採用サービス事業者と厚生労働省の提出資料が併記され、AI・自動化を前提とした雇用仲介規制の境界が政策課題となっていることを確認できる。",
    "whyImportant": [
      "AI採用代行の許可要否・許可要件が政府の正式な規制改革テーマとして検討されていることを一次資料で確認できる",
      "現在の職業紹介／募集情報等提供の区分を、AIスカウト・候補者評価等の新しいサービスへどう当てはめるかという論点の起点を追える",
      "制度変更が確定した資料ではないため、現行ルールと将来の明確化を分けて管理できる"
    ],
    "audience": ["企業法務", "人事・採用担当", "HRTech・RPO事業者", "新規事業・プロダクト法務"],
    "audienceReason": "採用AI・RPOの機能設計と職業紹介事業の許可要否を検討する際に、政府が何を明確化しようとしているかを一次資料から追うため。",
    "categories": ["労務", "AI・デジタル", "契約"],
    "relatedTopics": ["ai-recruitment-rpo-employment-placement"],
    "relatedIssues": ["rpo-ai-automated-acts-review", "rpo-contract-licensing-controls"],
    "primarySourceIds": ["source-cao-ai-rpo-wg-2026", "source-mhlw-recruitment-info-placement-boundary"],
    "reformEventId": "employment-security-ai-rpo-2026-review",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": ["source-cao-ai-rpo-wg-2026"],
    "whatChanged": "新規テーマ作成／AI等を活用した採用代行の職業紹介許可要否・許可要件の明確化を、現行の区分基準と分けて追う棚を追加した。"
  },
  {
    "id": "article-nao-rpo-employment-placement-2026",
    "title": "採用代行（RPO・BPO）は職業紹介に該当する？知らないと危険な職業安定法の境界線を解説",
    "publisher": "直法律事務所",
    "author": "直法律事務所",
    "publishedAt": "2026-05-29",
    "collectedAt": "2026-09-07",
    "url": "https://nao-lawoffice.jp/venture-startup/labor-management/saiyo-daiko-shokugyo-shokai.php",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所・実務解説／採用代行・職業安定法",
    "status": "adopted",
    "summary": "RPO・採用BPOの各機能を、職業紹介、委託募集、募集情報等提供、労働者供給・派遣との境界から整理する実務解説。求人票作成、応募者対応、日程調整、ATS運用等の事務支援と、候補者推薦、独自のスクリーニング、応募勧奨、条件調整等を分け、サービス名称ではなく実態で許認可を確認する必要性を示している。",
    "whyImportant": [
      "RPOの業務項目ごとに、職業紹介に近づく行為と純粋な事務支援を分けて確認できる",
      "職業紹介だけでなく委託募集・募集情報等提供・労働者供給との隣接領域を一つの業務設計として点検できる",
      "契約書の業務範囲、ベンダーの許可確認、実運用の監査まで企業側の導入・委託実務へ落としている"
    ],
    "audience": ["企業法務", "人事・採用担当", "RPO・採用BPO事業者", "新規事業担当"],
    "audienceReason": "採用代行の具体的な作業を職業安定法上の区分へ分解し、委託契約・サービス仕様・許認可確認へ反映するため。",
    "categories": ["労務", "契約", "AI・デジタル"],
    "relatedTopics": ["ai-recruitment-rpo-employment-placement"],
    "relatedIssues": ["rpo-current-placement-boundary", "rpo-contract-licensing-controls"],
    "primarySourceIds": ["source-mhlw-recruitment-info-placement-boundary"],
    "whatChanged": "整理補強／RPOの実際の業務を職業紹介・委託募集・募集情報等提供等へ分解し、契約・許認可確認の実務を補完した。"
  },
  {
    "id": "article-tm-regulatory-reform-ai-rpo-2026",
    "title": "令和8年6月 規制改革答申『働き方・人への投資』で動く4つの労務論点",
    "publisher": "社会保険労務士法人T&M Nagoya",
    "author": "三重 英則",
    "publishedAt": "2026-07-01",
    "collectedAt": "2026-09-07",
    "url": "https://www.mh5.jp/announce2_96334.html",
    "sourceType": "secondary",
    "sourceLabel": "社会保険労務士法人・制度動向解説／AI採用代行",
    "status": "adopted",
    "summary": "2026年6月の規制改革答申のうち、AI採用代行の職業安定法上の扱いを企業労務の観点から整理した解説。AIが作成・送信するスカウト、AI面接・質問・評価などが職業紹介に当たるかについて行政上の明確化が求められていること、地方労働局ごとの判断差を抑える必要性、許可要件の見直しが検討課題であることを紹介し、現行制度はまだ変わっていないと明示している。",
    "whyImportant": [
      "AI採用代行で実務上迷いやすいスカウト・面接・評価の機能を、職業紹介該当性の具体的な検討対象として把握できる",
      "制度見直しの方向だけでなく、現行制度はまだ変わっていないため許可要否を現行ルールで確認すべきことを明確にしている",
      "HRTech導入企業が将来の制度変更を待つ間に、どの機能と許認可を棚卸しすべきかを整理しやすい"
    ],
    "audience": ["企業法務", "人事・採用担当", "HRTech・RPO事業者", "労務コンプライアンス担当"],
    "audienceReason": "規制改革の議論を、採用AIの機能棚卸しと現在の許可確認という実務タスクへ変換するため。",
    "categories": ["労務", "AI・デジタル"],
    "relatedTopics": ["ai-recruitment-rpo-employment-placement"],
    "relatedIssues": ["rpo-ai-automated-acts-review", "rpo-contract-licensing-controls"],
    "primarySourceIds": ["source-cao-ai-rpo-wg-2026", "source-mhlw-recruitment-info-placement-boundary"],
    "reformEventId": "employment-security-ai-rpo-2026-review",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": ["source-cao-ai-rpo-wg-2026"],
    "whatChanged": "整理補強／規制改革の検討を、AIスカウト・面接・評価等の具体的機能と現行許可確認へ落とす実務解説を追加した。"
  }
]);
