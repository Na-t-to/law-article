window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map(function (topic) {
  if (topic.slug !== "freelance-law") return topic;
  var issues = (topic.issues || []).map(function (issue) {
    if (issue.id !== "freelance-notice") return issue;
    return Object.assign({}, issue, {
      sourceIds: Array.from(new Set((issue.sourceIds || []).concat(["source-jftc-japanpost-freelance-2026"])))
    });
  });
  if (!issues.some(function (issue) { return issue.id === "freelance-payment-deadline"; })) {
    issues.push({
      id: "freelance-payment-deadline",
      title: "報酬支払期日をどう設定・遵守するか",
      status: "authoritative", stage: "effective", views: [],
      conclusion: "委託時に支払期日を適切に定め、給付受領日・役務提供日を起点とする法定の期限までに実際の支払が完了するよう発注・検収・経理フローを設計する。",
      exception: "適用される支払期限や起算点は取引形態・役務提供の態様を確認して判断する。",
      uncertain: "多数の継続発注やシステム連携がある場合、個々の発注・受領・支払の紐付け方法は各社で設計が必要。",
      sourceIds: ["source-freelance-law", "source-jftc-japanpost-freelance-2026"]
    });
  }
  var currentSummary = Object.assign({}, topic.currentSummary || {});
  currentSummary.facts = (currentSummary.facts || []).concat(["公正取引委員会は2026年9月2日、日本郵便に対し、特定受託事業者への取引条件の即時明示を行わなかったこと及び報酬支払期日を定めず法定期日までに支払わなかったことについて勧告した。"]);
  currentSummary.implications = (currentSummary.implications || []).concat(["発注書・発注システムで明示事項を発注時点に確実に提示し、検収・支払システムまで含めて法定支払期限を超えない統制を置く。"]);
  return Object.assign({}, topic, {
    lastUpdated: "2026-09-03",
    lastVerified: "2026-09-03",
    currentSummary: currentSummary,
    issues: issues,
    sourceIds: Array.from(new Set((topic.sourceIds || []).concat(["source-jftc-japanpost-freelance-2026"]))),
    practicalImpacts: Array.from(new Set((topic.practicalImpacts || []).concat(["支払期日・支払管理"])))
  });
}).concat([
  {
    slug: "business-human-rights-dd",
    title: "ビジネスと人権・人権デュー・ディリジェンス",
    categories: ["危機管理・コンプライアンス", "国際取引", "M&A", "契約"],
    summary: "日本政府の人権尊重ガイドラインと改定行動計画を基礎に、人権方針、リスク特定、人権DD、救済、サプライチェーン・M&Aへの実装を企業法務向けに追う。",
    lastUpdated: "2026-09-03",
    lastVerified: "2026-09-03",
    isNew: true,
    overview: [
      "日本政府は2022年に企業の人権尊重に関する業種横断のガイドラインを策定し、2023年には人権方針とリスク特定を具体化する実務参照資料を公表しました。",
      "2025年12月の改定『ビジネスと人権』行動計画は、企業に対し、負の人権影響の特定・評価・予防・軽減・対処等から成る人権デュー・ディリジェンスの導入を促進することへの期待を改めて示しています。",
      "実務では、法令違反の有無だけを調べるのではなく、どの人権に誰がどの程度の負の影響を受け得るかを起点に、リスクの高い領域を絞って調査し、取引先への働き掛け、契約、救済、M&A・PMIへつなぐ必要があります。"
    ],
    currentSummary: {
      facts: [
        "日本政府は2022年9月13日、国連指導原則等の国際スタンダードを踏まえた『責任あるサプライチェーン等における人権尊重のためのガイドライン』を決定した。",
        "経済産業省は2023年4月、人権方針の記載項目例と、セクター・製品・地域等から人権リスクが重大な事業領域を特定・評価する手順を示す実務参照資料を公表した。",
        "政府は2025年12月24日に『ビジネスと人権』行動計画を改定し、8つの優先分野を示すとともに、企業による人権DD導入への期待を表明した。",
        "政府ガイドラインや行動計画は、それ自体を一般的な民間企業向けの法定義務として定めるものではなく、個別の法令・契約・海外規制等は別途確認する必要がある。"
      ],
      interpretations: [
        "人権DDは取引先に質問票を一度配る作業ではなく、リスク特定、調査、予防・軽減、効果検証、説明・救済を継続する管理プロセスとして設計する方が政府資料の考え方に合う。",
        "全サプライヤーを同じ深さで調査するより、セクター、製品・サービス、地域、企業固有の事情から重大リスクを絞り、深刻度や発生可能性に応じて調査手段を変える方が実務的である。",
        "M&Aでは平時の人権DDと目的・時間制約が異なるため、買収前は重大リスクへ調査を絞り、契約条件とPMIで未解決事項を引き継ぐ設計が重要になる。"
      ],
      implications: [
        "人権方針の承認主体、適用範囲、グループ会社・取引先への期待、重点課題を明確にする。",
        "セクター・製品・地域・企業固有のリスクを使ってリスクマッピングを行い、質問票、ヒアリング、現地調査、ステークホルダー対話等の深度を決める。",
        "取引先行動規範、契約条項、是正計画、エスカレーション、苦情処理・救済を、調達・法務・サステナビリティ部門で分断せず運用する。",
        "M&Aでは対象会社とバリューチェーンの重大な人権課題をDDへ組み込み、必要に応じてコベナンツ、前提条件、表明保証、案件中止、買収後の是正・人権DD統合を検討する。"
      ],
      uncertain: [
        "企業ごとに優先すべき人権リスクは業種、地域、製品、取引構造によって大きく異なり、共通チェックリストだけで十分性を判断できない。",
        "海外の人権・環境DD法制や強制労働産品規制は変化が速く、日本企業への域外適用・取引先からの要求も含めて個別に追う必要がある。"
      ]
    },
    issues: [
      { id: "bhr-policy-scope", title: "人権方針の適用範囲と社内外への期待をどう定めるか", status: "authoritative", stage: "effective", views: [], conclusion: "経営陣の承認を前提に、自社・グループ会社・従業員・取引先等への適用・期待を明示し、事業方針と手続へ反映する。", exception: "企業規模、事業、バリューチェーンにより具体的な適用範囲と記載内容は異なる。", uncertain: "既存の企業理念・調達方針等との統合方法は各社で設計が必要。", sourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023"] },
      { id: "bhr-risk-identification", title: "どの人権リスクから調査を始めるか", status: "authoritative", stage: "effective", views: [], conclusion: "セクター、製品・サービス、地域、企業固有のリスクから重大な事業領域を絞り、社内資料、質問票、ヒアリング、現地調査、ステークホルダー対話等を組み合わせて負の影響を特定・評価する。", exception: "全取引先を同じ深さで調べることを前提とせず、重大性と発生可能性等に応じて優先順位を付ける。", uncertain: "公開情報が乏しい地域・二次以降サプライヤー等では情報取得方法を個別に検討する必要がある。", sourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023"] },
      { id: "bhr-dd-cycle", title: "人権DDを継続的な管理プロセスへどう組み込むか", status: "authoritative", stage: "effective", views: [], conclusion: "負の影響の特定・評価だけで終わらせず、予防・軽減・対処、効果の確認、説明・情報開示を継続し、事業・取引条件の変更に応じて見直す。", exception: "具体的な頻度・調査手段はリスクの性質と事業規模に応じて設計する。", uncertain: "政府の今後の支援策や個別分野の制度化は継続確認が必要。", sourceIds: ["source-meti-bhr-guideline-2022", "source-mofa-bhr-nap-2025"] },
      { id: "bhr-remedy-grievance", title: "苦情処理・救済をどう実効化するか", status: "authoritative", stage: "effective", views: [], conclusion: "人権への負の影響を引き起こした又は助長した場合の救済を念頭に、通報・苦情受付、調査、是正、再発防止、ステークホルダーとの対話を運用へ組み込む。", exception: "適切な救済方法は影響の内容、関係性、ライツホルダーの状況で異なる。", uncertain: "外部グリーバンス機構との連携や案件ごとの適切な救済水準は個別検討が必要。", sourceIds: ["source-meti-bhr-guideline-2022", "source-mofa-bhr-nap-2025"] },
      { id: "bhr-ma-dd", title: "M&Aで人権・サステナビリティDDをどう行うか", status: "interpreted", stage: "not_applicable", views: [], conclusion: "買収対象の業種・地域・製品・バリューチェーンから重大リスクを絞り、M&A固有の時間・守秘制約を踏まえて調査し、発見事項を契約条件とPMI・買収後の人権DDへ引き継ぐ。", exception: "平時の人権DDと同じ範囲・手法を短期間のM&A DDで完全に再現できるとは限らない。", uncertain: "対象会社の情報開示範囲や競争関係によって、買収前に確認できる深度は案件ごとに変わる。", sourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023"] }
    ],
    sourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023", "source-mofa-bhr-nap-2025"],
    practicalImpacts: ["人権方針・取引先行動規範", "サプライチェーンのリスクマッピング", "質問票・ヒアリング・現地調査", "調達契約・是正計画", "苦情処理・救済", "M&A DD・契約条件", "PMI・買収後ガバナンス"]
  }
]);
