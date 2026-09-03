window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
  if (topic.slug !== "cyber-supply-chain") return topic;
  const current = topic.currentSummary || {};
  const issues = Array.isArray(topic.issues) ? topic.issues : [];
  return {
    ...topic,
    lastUpdated: "2026-09-03",
    lastVerified: "2026-09-03",
    overview: [
      "サプライチェーンのサイバーセキュリティでは、取引先の評価や契約条項だけでなく、経営者が自社の事業リスクとして位置付け、CISO等へ必要な指示を出すところから管理を始める必要があります。",
      ...(Array.isArray(topic.overview) ? topic.overview : [])
    ],
    currentSummary: {
      ...current,
      facts: [
        ...(Array.isArray(current.facts) ? current.facts : []),
        "経済産業省・IPAのサイバーセキュリティ経営ガイドラインVer.3.0は、経営者が認識すべき3原則と、CISO等へ指示すべき重要10項目を示し、サプライチェーン全体を通じた対策を経営課題として位置付けている。"
      ],
      interpretations: [
        ...(Array.isArray(current.interpretations) ? current.interpretations : []),
        "取引先のセキュリティ水準を確認する仕組みだけを導入しても、自社側のリスク許容度、責任者、投資判断、インシデント時の意思決定が曖昧なら、サプライチェーン管理は機能しにくい。"
      ],
      implications: [
        ...(Array.isArray(current.implications) ? current.implications : []),
        "経営会議・取締役会へ報告するサイバーリスク、CISO等への権限・指示、委託先管理の責任分担を既存のセキュリティ規程やリスク管理規程と整合させる。"
      ]
    },
    issues: issues.some((issue) => issue.id === "cyber-management-governance") ? issues : [
      ...issues,
      {
        id: "cyber-management-governance",
        title: "経営層・CISOの責任とサプライチェーン管理をどう接続するか",
        status: "authoritative", stage: "effective", views: [],
        conclusion: "経営者がサイバーリスクを事業リスクとして認識し、CISO等の責任者へ方針・体制・リスク管理・取引先管理を含む必要な指示を出す。",
        exception: "必要な体制・投資水準は事業規模、保有情報、システム依存度、取引先との接続関係等によって異なる。",
        uncertain: "SCS評価制度の普及により、取締役会・経営会議で求められる具体的な監督実務がさらに定着する可能性がある。",
        sourceIds: ["source-cyber-management-guideline-v3-2023", "source-scs-evaluation-2026"]
      }
    ],
    sourceIds: Array.from(new Set([...(Array.isArray(topic.sourceIds) ? topic.sourceIds : []), "source-cyber-management-guideline-v3-2023"])),
    practicalImpacts: Array.from(new Set([...(Array.isArray(topic.practicalImpacts) ? topic.practicalImpacts : []), "経営層へのサイバーリスク報告", "CISO等の権限・責任"] ))
  };
}).concat([
  {
    slug: "generative-ai-competition",
    title: "生成AI・競争法／デジタル市場",
    categories: ["独占禁止法・競争法", "AI・デジタル", "契約"],
    summary: "生成AIのインフラ・モデル・アプリ層における市場構造と、OS・APIアクセス制限、既存サービスへの統合・抱き合わせ、自社優遇や提携等を国内の競争政策資料から整理する。",
    lastUpdated: "2026-09-03",
    lastVerified: "2026-09-03",
    isNew: true,
    overview: [
      "公正取引委員会は、生成AIをGPU・AIクラウド等のインフラ、基盤モデル、アプリケーションという複数の層が相互依存する市場として継続調査しています。",
      "2026年4月の実態調査報告書ver.2.0では、モバイルOSの専用機能へのアクセス制限、既存デジタルサービスへの生成AI統合や抱き合わせ、APIアクセス制限など、競争上の問題が生じ得る具体的な場面が再整理されました。",
      "このテーマでは、AIサービスの統合やアクセス制限それ自体を直ちに違法とみなすのではなく、市場での地位、競争者の排除・取引機会への影響、技術的必要性、代替手段等を製品・提携・契約設計と結び付けて読みます。"
    ],
    currentSummary: {
      facts: [
        "公正取引委員会は2026年4月16日、2025年のver.1.0後に国内外の事業者・有識者等約30者へ追加ヒアリングを行い、生成AI関連市場の概要更新、自動運転市場の追加、独占禁止法上の論点再整理を行ったver.2.0を公表した。",
        "ver.2.0は、GPU・AIクラウド・データ等のインフラ、基盤モデル、アプリケーションの各層と、AIエージェント等の市場動向を踏まえて競争上の論点を整理している。",
        "モバイルOSの専用機能へのアクセス制限や、既存デジタルサービスへの生成AIの統合・抱き合わせ、APIアクセス制限は、市場での地位や競争への影響等によって私的独占・不公正な取引方法等の問題となり得る。",
        "公取委は2021年からアルゴリズム・AIと競争政策を研究しており、価格設定、ランキング、パーソナライゼーション等を含むデジタル市場の競争問題を継続的に検討している。"
      ],
      interpretations: [
        "生成AI機能の統合、専用機能へのアクセス条件、APIの提供条件は、それだけで違法になるのではなく、他社の取引機会をどの程度狭めるか、代替手段があるか、合理的な技術・セキュリティ上の理由があるかを具体的に見る必要がある。",
        "AIサービスの法務レビューでは、自社がOS、クラウド、既存デジタルサービスなど別の層で持つ優位性を、新しい生成AIサービスへ利用する設計になっていないかを確認すると論点を発見しやすい。",
        "クラウド、モデル、API等への依存が高いほど、切替コストやデータ移行・相互運用性が競争上の重要な条件になり得るため、アーキテクチャと契約条件を分けずに確認する必要がある。"
      ],
      implications: [
        "OS・クラウド・大規模なデジタルサービスで強い地位を持つ事業者は、生成AI機能の統合、API変更、専用機能へのアクセス条件を変更する前に競争への影響を確認する。",
        "AIモデル・クラウド・アプリの提携契約では、独占・優先条件、APIアクセス、ライセンス、データ利用、移行・エクスポート、相互運用性を競争法の観点でも確認する。",
        "アクセス制限や差別的な取扱いに技術・品質・セキュリティ上の理由がある場合は、その必要性と範囲を説明できるよう意思決定記録を残す。"
      ],
      uncertain: [
        "実態調査報告書は具体的な取引を一律に禁止するルールではなく、市場構造も急速に変化しているため、今後の個別執行、追加調査、スマホソフトウェア競争促進法の運用等を継続確認する必要がある。"
      ]
    },
    issues: [
      { id: "ai-competition-market-structure", title: "生成AIのどの層で市場力・依存関係が生じるか", status: "authoritative", stage: "effective", views: [], conclusion: "インフラ、基盤モデル、アプリケーションの各層と、その間のアクセス・取引関係を分けて把握する。", exception: "市場の境界や有力事業者は技術進展・新規参入で変化し得る。", uncertain: "AIエージェント等の普及で市場構造が再編される可能性がある。", sourceIds: ["source-jftc-generative-ai-market-v2-2026", "source-jftc-algorithm-ai-competition-2021"] },
      { id: "ai-competition-platform-access", title: "OS・API・専用機能へのアクセス制限は問題になるか", status: "interpreted", stage: "not_applicable", views: [], conclusion: "有力なOS・プラットフォーム等が競争するAI事業者のアクセスを制限する場合、市場での地位、排除効果、合理的理由を確認する。", exception: "安全性・品質・セキュリティ等の正当な目的に必要かつ相当な制限まで直ちに問題となるわけではない。", uncertain: "具体的な違法性は市場画定、競争への影響、代替手段等に依存する。", sourceIds: ["source-jftc-generative-ai-market-v2-2026"] },
      { id: "ai-competition-integration", title: "既存デジタルサービスへのAI統合・抱き合わせをどう見るか", status: "interpreted", stage: "not_applicable", views: [], conclusion: "既存サービスでの強い地位を利用した生成AIの統合・抱き合わせが、競争するAIサービスの取引機会を狭めるかを確認する。", exception: "機能統合による利便性・品質向上など競争促進効果も考慮する。", uncertain: "統合の態様と市場への実際の影響に応じて評価が変わる。", sourceIds: ["source-jftc-generative-ai-market-v2-2026"] },
      { id: "ai-competition-partnership", title: "提携・人材・自社優遇等をどうモニターするか", status: "pending", stage: "not_applicable", views: [], conclusion: "AI事業者間・クラウド等との提携、人材獲得、自社優遇等について、競争者のアクセスや市場の集中への影響を継続確認する。", exception: "提携や垂直統合には投資促進・効率化等の競争促進効果もある。", uncertain: "急速な市場変化のため、公取委も追加情報を募りながら継続調査している。", sourceIds: ["source-jftc-generative-ai-market-v2-2026"] }
    ],
    sourceIds: ["source-jftc-generative-ai-market-v2-2026", "source-jftc-algorithm-ai-competition-2021"],
    practicalImpacts: ["AI製品・機能レビュー", "OS・APIアクセス方針", "クラウド・モデル調達", "提携・独占条件", "相互運用・移行条件", "競争法レビュー記録"]
  },
  {
    slug: "ip-knowhow-data-transactions",
    title: "知財・ノウハウ・データ取引の適正化",
    categories: ["知的財産", "契約", "独占禁止法・競争法"],
    summary: "知的財産権・ノウハウ・データの開示、帰属、対価、共同研究開発、保証・責任分担を、2026年の知財取引指針と契約実務から整理する。",
    lastUpdated: "2026-09-03",
    lastVerified: "2026-09-03",
    isNew: true,
    overview: [
      "2026年6月、公正取引委員会・中小企業庁・特許庁は、全業種を対象に、知的財産権だけでなく権利化されていないノウハウやデータを含む取引について、優越的地位の濫用等の考え方と契約書ひな形を公表しました。",
      "実務では、NDAを結ぶかだけでなく、どこまで情報を開示するか、成果・既存知財を誰に帰属させるか、知財部分の価値をどう評価するか、保証・紛争リスクを誰が負担するかが一連の交渉問題になります。",
      "このテーマでは、指針をひな形の機械的な適用として使わず、取引上の力関係、貢献、対価、必要性を個別に説明できる契約交渉プロセスとして読みます。"
    ],
    currentSummary: {
      facts: [
        "2026年6月24日、公正取引委員会・中小企業庁・特許庁は『知的財産権・ノウハウ・データの適切な取引のための優越的地位の濫用等に関する指針』と附属の契約書ひな形を公表した。",
        "指針は特定業種に限定せず、知的財産権に加えて権利化されていないノウハウやデータの取引も対象とし、情報の管理、知的財産権等の価値の適切な評価等について独占禁止法上の考え方と実践例を示している。",
        "策定の背景には、公取委の実態調査で幅広い業種の問題事例が把握されたことと、知財取引適正化ワーキンググループでの検討がある。"
      ],
      interpretations: [
        "契約書に知財帰属や情報開示条項が存在するだけで適否が決まるのではなく、相手方との取引上の地位、提供を求める必要性、成果への貢献、対価、交渉過程を合わせて見る必要がある。",
        "発注者の標準ひな形を変更不可として運用すると、個別案件の貢献度や既存技術、利用範囲を検討しないまま不合理な条件を押し付けるリスクがあるため、例外承認と交渉記録を残せる運用が重要になる。",
        "受注者側でも、開示情報を段階化し、既存知財・ノウハウを事前に特定しておくことが、成果物との混同や意図しない権利移転を防ぐために有効である。"
      ],
      implications: [
        "NDA、共同研究開発、開発委託、業務委託、ライセンス等の標準条項について、情報開示、既存知財、成果帰属、利用範囲、対価、保証・責任分担を再点検する。",
        "知財・ノウハウ・データの提供を求める場合、取引目的との関係、必要範囲、対価や相手の負担を交渉時に説明・記録する。",
        "事業部だけで標準ひな形を押し切らないよう、知財条件の変更・例外・対価交渉を法務・知財部門へエスカレーションする基準を設ける。"
      ],
      uncertain: [
        "指針は個別取引での優越的地位や不利益の評価を不要にするものではなく、今後の相談・調査・執行事例によって具体的な境界が蓄積すると考えられる。"
      ]
    },
    issues: [
      { id: "iptx-information-disclosure", title: "ノウハウ・データをどこまで開示させてよいか", status: "authoritative", stage: "effective", views: [], conclusion: "取引目的との関係で必要な範囲を特定し、秘密保持、利用目的、管理方法を含めて合理的に設計する。", exception: "品質確認・監査等の正当な目的があっても、必要範囲を超える情報取得は別途評価が必要。", uncertain: "情報の必要性と相手方の不利益は個別の取引・技術内容に依存する。", sourceIds: ["source-ip-knowhow-data-guideline-2026"] },
      { id: "iptx-value-compensation", title: "知財・ノウハウの価値と対価をどう決めるか", status: "authoritative", stage: "effective", views: [], conclusion: "成果物の製作対価と知財等の提供価値を意識し、貢献・利用範囲・事業価値等を踏まえて協議する。", exception: "対価の切り分けや算定方法を一律に固定する必要はなく、取引実態に応じた合理的な方法を選べる。", uncertain: "適正な対価の具体額は技術・市場・利用範囲等で大きく異なる。", sourceIds: ["source-ip-knowhow-data-guideline-2026"] },
      { id: "iptx-rnd-ownership", title: "共同研究・開発委託の成果帰属をどう決めるか", status: "authoritative", stage: "effective", views: [], conclusion: "契約名称や費用負担だけで帰属を決めず、既存知財と成果を分け、創出への貢献や利用目的を踏まえて協議する。", exception: "一方当事者への単独帰属自体が直ちに問題となるわけではなく、対価・貢献・交渉状況等を含めて評価する。", uncertain: "複数社・大学等を含む研究開発では貢献の把握と権利関係が複雑化する。", sourceIds: ["source-ip-knowhow-data-guideline-2026"] },
      { id: "iptx-warranty-liability", title: "非侵害保証・紛争リスクをどこまで負わせるか", status: "authoritative", stage: "effective", views: [], conclusion: "原因や支配可能性を無視して一方当事者へ責任を全面転嫁せず、役割・情報・対価に応じた保証と責任分担を設計する。", exception: "取引内容に応じた合理的な保証・補償条項は利用できる。", uncertain: "適切な責任範囲は製品・開発工程・第三者知財へのアクセス等により異なる。", sourceIds: ["source-ip-knowhow-data-guideline-2026"] }
    ],
    sourceIds: ["source-ip-knowhow-data-guideline-2026"],
    practicalImpacts: ["NDA・情報開示", "共同研究開発契約", "開発・業務委託", "知財帰属・ライセンス", "知財対価", "保証・責任制限", "標準ひな形の例外承認"]
  }
]);
