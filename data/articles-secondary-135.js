(() => {
  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  const topicSlug = "insurance-business-act-agency-governance";
  const sourceLawId = "source-insurance-business-act-2025-law";
  const sourceEnforcementId = "source-fsa-insurance-act-2025-enforcement";
  const sourceRulesFinalId = "source-fsa-insurance-rules-final-2026";
  const sourceSupervisoryActId = "source-fsa-insurance-supervisory-act-final-2026";
  const sourceSupervisoryStructureId = "source-fsa-insurance-supervisory-structure-final-2026";
  const sourceComparisonId = "source-fsa-insurance-comparison-final-2026";
  const sourceCorporateAgencyDraftId = "source-fsa-insurance-corporate-agency-draft-2026";
  const reformActId = "insurance-business-act-2025-amendment";
  const reformCorporateAgencyId = "insurance-supervisory-guideline-corporate-agency-2026";

  const sources = [
    {
      id: sourceLawId,
      title: "保険業法の一部を改正する法律（令和7年法律第54号）",
      type: "law",
      typeLabel: "改正法・議案審議情報",
      authority: "参議院",
      publishedAt: "2025-06-06",
      url: "https://www.sangiin.go.jp/japanese/joho1/kousei/gian/217/meisai/m217080217037.htm",
      importance: "最高",
      whyImportant: "特定大規模乗合損害保険代理店の体制整備義務、保険会社等による顧客利益保護、過度な便宜供与等の規制強化を定めた2025年改正保険業法の成立・公布を確認できる一次資料。",
      topics: [topicSlug]
    },
    {
      id: sourceEnforcementId,
      title: "令和7年保険業法改正に係る政令の公布及びパブリックコメント結果",
      type: "law",
      typeLabel: "施行令・施行日",
      authority: "金融庁",
      publishedAt: "2025-12-19",
      url: "https://www.fsa.go.jp/news/r7/hoken/20251219/20251219.html",
      importance: "最高",
      whyImportant: "改正保険業法と関係政令の主要部分が2026年6月1日に施行されること、生命保険募集人を含む大規模乗合代理店の対象拡張や保険仲立人保証金の見直しを確認できる。",
      topics: [topicSlug]
    },
    {
      id: sourceRulesFinalId,
      title: "令和7年保険業法改正に係る内閣府令等の公布及びパブリックコメント結果",
      type: "guideline",
      typeLabel: "施行規則・最終ルール",
      authority: "金融庁",
      publishedAt: "2026-03-30",
      url: "https://www.fsa.go.jp/news/r7/hoken/20260330/20260330.html",
      importance: "最高",
      whyImportant: "特定大規模乗合保険募集人の要件、法令等遵守責任者・統括責任者、苦情処理、兼業に伴う利益相反管理、保険会社側の監督、過度な便宜供与、保険仲立人等の施行ルールを確定した一次資料。",
      topics: [topicSlug]
    },
    {
      id: sourceSupervisoryActId,
      title: "令和7年改正保険業法に係る『保険会社向けの総合的な監督指針』等の一部改正・パブリックコメント結果",
      type: "guideline",
      typeLabel: "監督指針・最終ルール",
      authority: "金融庁",
      publishedAt: "2026-03-30",
      url: "https://www.fsa.go.jp/news/r7/hoken/20260330-2/20260330-2.html",
      importance: "最高",
      whyImportant: "2025年改正保険業法の施行に伴う大規模乗合代理店・保険会社の体制整備について、監督上の着眼点と2026年6月1日の適用開始を確認できる。",
      topics: [topicSlug]
    },
    {
      id: sourceSupervisoryStructureId,
      title: "『保険会社向けの総合的な監督指針』の一部改正・パブリックコメント結果（営業推進・保険金支払等）",
      type: "guideline",
      typeLabel: "監督指針・最終ルール",
      authority: "金融庁",
      publishedAt: "2026-03-30",
      url: "https://www.fsa.go.jp/news/r7/hoken/20260330-3/20260330-3.html",
      importance: "最高",
      whyImportant: "保険会社の営業推進態勢、保険金等支払管理態勢、代理店・保険仲立人との協業等に関する監督指針を確定し、2026年6月1日から適用する一次資料。",
      topics: [topicSlug]
    },
    {
      id: sourceComparisonId,
      title: "令和7年保険業法改正に係る比較推奨販売ルールのパブリックコメント結果等",
      type: "guideline",
      typeLabel: "施行規則・監督指針／比較推奨販売",
      authority: "金融庁",
      publishedAt: "2026-08-28",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260828/20260828.html",
      importance: "最高",
      whyImportant: "乗合代理店の比較説明・推奨販売について最終ルールと金融庁の考え方を示し、改正内閣府令・監督指針を2028年3月1日から適用することを確定した一次資料。",
      topics: [topicSlug]
    },
    {
      id: sourceCorporateAgencyDraftId,
      title: "『保険会社向けの総合的な監督指針』の一部改正（案）（企業内代理店・独禁法・企業向け損害保険）",
      type: "guideline",
      typeLabel: "監督指針改正案・パブリックコメント",
      authority: "金融庁",
      publishedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260911/20260911.html",
      importance: "最高",
      whyImportant: "企業内代理店の特定契約比率規制、独占禁止法遵守態勢、企業向け損害保険の料率管理・モニタリング、別個登録廃止を具体化する最新の監督指針改正案。2026年10月13日まで意見募集で、まだ確定ルールではない。",
      topics: [topicSlug]
    }
  ];

  const topic = {
    slug: topicSlug,
    title: "保険業法・保険募集／代理店ガバナンス",
    categories: ["契約・取引", "危機管理・コンプライアンス", "消費者法・表示"],
    summary: "2025年改正保険業法と2026年の施行・監督ルールを基礎に、大規模乗合代理店、保険会社の代理店管理、過度な便宜供与、比較推奨販売、保険仲立人、企業内代理店・独禁法・企業保険料率管理を追う。",
    lastUpdated: "2026-09-14",
    lastVerified: "2026-09-14",
    isNew: true,
    overview: [
      "2025年改正保険業法は、保険代理店をめぐる一連の不適切事案を踏まえ、大規模乗合代理店と保険会社双方のガバナンス、顧客利益保護、保険募集・兼業業務の管理を強化した。主要部分は2026年6月1日に施行された。",
      "2026年8月28日には、乗合代理店の比較説明・推奨販売に関する最終ルールが公表され、2028年3月1日の施行・適用に向けた体制整備が必要になった。",
      "さらに金融庁は2026年9月11日、企業内代理店規制、独占禁止法遵守、企業向け損害保険の料率管理等を扱う監督指針改正案を公表した。これは10月13日まで意見募集中であり、確定ルールと混同しない。"
    ],
    currentSummary: {
      facts: [
        "保険業法の一部を改正する法律（令和7年法律第54号）は2025年6月6日に公布され、主要部分は2026年6月1日に施行された。",
        "施行規則・監督指針では、特定大規模乗合保険募集人について営業所等ごとの法令等遵守責任者、本店等の統括責任者、苦情処理等を求め、特定大規模乗合損害保険代理店の兼業業務について利益相反管理、内部監査、社内通報等の体制整備を具体化した。",
        "保険会社等には、特定大規模乗合保険募集人への委託・兼業特定保険募集人との関係を含む管理態勢の強化と、保険契約者等への過度な便宜供与の禁止に対応した体制整備が求められる。",
        "乗合代理店の比較推奨販売に関する改正内閣府令・監督指針は2026年8月28日に公布・確定し、2028年3月1日から施行・適用される。",
        "2026年9月11日の監督指針改正案は、企業内代理店の特定契約比率規制を再構築し、独占禁止法遵守態勢、企業向け損害保険の料率・収支管理、別個登録の廃止を盛り込む。概要資料では、特定契約比率の経過措置撤廃を2030年4月、特定者範囲拡大を2032年4月とするスケジュールが案として示されている。"
      ],
      interpretations: [
        "改正対応は代理店単体の規程整備だけでは足りず、保険会社による委託先管理、兼業による利益相反、手数料・便宜供与、苦情・内部通報、内部監査まで同じ統制体系で追う必要がある。",
        "比較推奨販売は2028年施行だが、金融庁は制度趣旨を踏まえ可能な限り早期に体制整備を進めることが望ましいとしており、商品比較ロジック、推奨理由、顧客説明、記録を施行直前ではなく前倒しで点検する意味がある。",
        "企業内代理店の見直し案は、特定契約比率だけでなく、代理店手数料が実質的な保険料割引にならないこと、親会社等からの自立、独禁法遵守、三線管理を適用除外の条件と結び付けているため、企業グループ側の保険調達・代理店運営にも直接影響する。"
      ],
      implications: [
        "大規模乗合代理店は、自社が特定大規模乗合保険募集人に該当するかを確認し、法令等遵守責任者・統括責任者、苦情処理、内部監査、社内通報、兼業利益相反管理の役割と証跡を点検する。",
        "保険会社は、代理店への教育・管理・指導、兼業特定保険募集人との取引、過度な便宜供与、営業推進・保険金支払の管理態勢を横断して点検する。",
        "乗合代理店は2028年3月1日の比較推奨販売ルールに向け、比較対象・推奨基準、顧客への説明、意向把握との接続、記録・モニタリングを前倒しで整備する。",
        "企業内代理店を持つ企業グループは、特定契約の範囲、取扱保険種目、手数料算定、親会社との関係、代理店の実務能力・自立性、独禁法遵守・三線管理を棚卸しする。",
        "企業向け損害保険を扱う保険会社は、共同保険の必要性、割引増の適用基準・事後検証、契約単位の収支・料率検証、経営陣主導の継続モニタリングを監督指針案と照合する。"
      ],
      uncertain: [
        "2026年9月11日の監督指針改正はパブリックコメント段階であり、10月13日の意見募集終了後に内容や適用開始時期が変わる可能性がある。2030年・2032年の移行スケジュールも現時点では案として扱う。",
        "2025年改正保険業法の施行後運用、比較推奨販売の具体的なシステム・記録実務、企業内代理店の適用除外要件は、当局の追加資料・監督事例・業界実務を継続確認する必要がある。"
      ]
    },
    issues: [
      {
        id: "insurance-large-agency-governance",
        title: "特定大規模乗合保険募集人の体制整備をどう実装するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "対象該当性を確認したうえで、営業所等ごとの法令等遵守責任者と本店等の統括責任者、苦情処理、兼業利益相反、内部監査・社内通報等を実効的な役割分担と記録に落とす。",
        exception: "生命保険募集人と損害保険代理店では対象要件・兼業規律等が異なるため、同じ大規模代理店として一律に処理しない。",
        uncertain: "施行後の監督事例や各業界ガイドラインによる具体化は継続確認する。",
        sourceIds: [sourceLawId, sourceEnforcementId, sourceRulesFinalId, sourceSupervisoryActId]
      },
      {
        id: "insurance-insurer-oversight-benefits",
        title: "保険会社の代理店管理・過度な便宜供与・営業推進をどう統制するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "代理店への教育・管理・指導、兼業特定保険募集人との利益相反、保険契約者等への社会通念上相当でない便宜供与、営業推進・保険金支払の管理態勢を、保険会社側の経営・コンプライアンス統制として整備する。",
        exception: "具体的な取引・便宜供与が禁止対象となるかは、相手方、目的、対価、社会通念上の相当性等を個別に確認する。",
        uncertain: "施行後の当局運用や業界実務の蓄積により、管理水準がさらに具体化する可能性がある。",
        sourceIds: [sourceLawId, sourceRulesFinalId, sourceSupervisoryActId, sourceSupervisoryStructureId]
      },
      {
        id: "insurance-broker-reform",
        title: "保険仲立人の活用促進・協業ルールをどう使うか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "保証金制度、保険代理店等との協業、海外直接付保における媒介、不祥事件届出等の改正を踏まえ、保険仲立人を利用する取引の責任分界・手続・報酬を確認する。",
        exception: "媒介手数料、海外直接付保、協業形態等は取引類型ごとに適用規律が異なる。",
        uncertain: "改正後の保険仲立人利用がどの取引で定着するかは実務蓄積を確認する必要がある。",
        sourceIds: [sourceEnforcementId, sourceRulesFinalId, sourceSupervisoryStructureId]
      },
      {
        id: "insurance-comparison-recommendation",
        title: "乗合代理店の比較推奨販売を2028年ルールへどう移行するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "2028年3月1日の施行・適用に向け、比較説明・推奨の基準、顧客への説明、推奨理由、記録・モニタリングを最終ルールとパブリックコメント回答に沿って再設計する。",
        exception: "権限明示義務や意向把握義務は今回の改正対象外でも現行法上の対応が必要であり、比較推奨販売だけを切り離して運用しない。",
        uncertain: "各代理店のシステム・商品ラインアップ・推奨ロジックに応じた実装方法は個別設計が必要である。",
        sourceIds: [sourceComparisonId]
      },
      {
        id: "insurance-corporate-agency-specific-contract",
        title: "企業内代理店の特定契約比率規制・適用除外をどう準備するか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "監督指針改正案では、特定契約比率規制の経過措置撤廃・特定者範囲拡大と、手数料適正化・代理店の自立、特定契約管理、独禁法遵守、三線管理を条件とする適用除外の枠組みが示されている。現時点では案として移行準備に使う。",
        exception: "最終的な要件・適用時期はパブリックコメント後に変わり得る。保険仲立人が顧客のみから媒介手数料を受ける一定の契約についても案上の適用除外が示されている。",
        uncertain: "2030年4月の経過措置撤廃、2032年4月の特定者範囲拡大等は概要資料上の案であり、確定前に固定的な社内ルールとして扱わない。",
        sourceIds: [sourceCorporateAgencyDraftId]
      },
      {
        id: "insurance-antitrust-commercial-pricing",
        title: "独禁法遵守・共同保険・企業向け保険料率管理をどう高度化するか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "監督指針改正案は、保険会社・代理店の独禁法遵守態勢、共同保険の必要性検証と弊害防止、割引増の適用基準・事後検証、契約単位の収支・料率検証、経営陣主導の継続的な管理態勢を求める方向を示している。",
        exception: "共同保険や料率設定自体を一律に禁止するものではなく、取引の必要性・競争法上の評価・リスクに応じた検証が必要である。",
        uncertain: "監督指針案は未確定であり、パブリックコメント結果と最終指針で具体的な着眼点を再確認する必要がある。",
        sourceIds: [sourceCorporateAgencyDraftId]
      }
    ],
    sourceIds: [sourceLawId, sourceEnforcementId, sourceRulesFinalId, sourceSupervisoryActId, sourceSupervisoryStructureId, sourceComparisonId, sourceCorporateAgencyDraftId],
    practicalImpacts: ["保険募集管理規程", "代理店管理・委託先監督", "兼業利益相反管理", "苦情・内部通報・内部監査", "比較推奨販売・説明記録", "代理店手数料・便宜供与管理", "企業内代理店・特定契約管理", "独占禁止法・共同保険管理", "企業向け損害保険の料率・収支管理"]
  };

  const reformEvents = [
    {
      id: reformActId,
      title: "保険業法・2025年改正／段階施行",
      eventType: "law_amendment",
      lawId: "insurance-business-act",
      lawLabel: "保険業法（2025年改正）",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-06-01", "2028-03-01"],
      effectiveDateNote: "主要な改正法・府令・監督指針は2026年6月1日施行・適用／比較推奨販売に関する改正府令・監督指針は2028年3月1日施行・適用",
      effectiveDateSourceIds: [sourceEnforcementId, sourceComparisonId],
      matchSourceIds: [sourceLawId, sourceEnforcementId, sourceRulesFinalId, sourceSupervisoryActId, sourceSupervisoryStructureId, sourceComparisonId],
      sourceIds: [sourceLawId, sourceEnforcementId, sourceRulesFinalId, sourceSupervisoryActId, sourceSupervisoryStructureId, sourceComparisonId]
    },
    {
      id: reformCorporateAgencyId,
      title: "保険会社向け総合的監督指針・企業内代理店等の2026年見直し",
      eventType: "regulation_or_guideline",
      lawId: "insurance-supervisory-guideline-corporate-agency",
      lawLabel: "保険会社向け総合的監督指針（企業内代理店等）",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "unknown",
      matchSourceIds: [sourceCorporateAgencyDraftId],
      sourceIds: [sourceCorporateAgencyDraftId]
    }
  ];

  const articles = [
    {
      id: "article-fsa-insurance-rules-final-2026",
      title: "令和7年保険業法改正に係る内閣府令等の公布及びパブリックコメント結果",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-03-30",
      collectedAt: "2026-09-14",
      url: "https://www.fsa.go.jp/news/r7/hoken/20260330/20260330.html",
      sourceType: "primary",
      sourceLabel: "一次資料・2025年改正保険業法／施行規則最終化",
      status: "adopted",
      summary: "2025年改正保険業法の施行規則等を最終化した金融庁資料。特定大規模乗合保険募集人の要件、営業所等ごとの法令等遵守責任者と本店等の統括責任者、苦情処理、特定大規模乗合損害保険代理店の兼業利益相反管理、保険会社側の管理、過度な便宜供与、保険仲立人等を具体化し、主要部分を2026年6月1日施行へつないだ。",
      whyImportant: ["改正法の抽象的な体制整備義務を、責任者・苦情処理・兼業利益相反・保険会社側の監督という実装単位まで具体化した最終一次資料", "大規模代理店だけでなく、委託する保険会社や兼業取引、保険仲立人まで一連の制度として確認できる", "施行前の改正案ではなく、パブリックコメントを経た最終ルールを基準に社内規程・代理店管理を点検できる"],
      audience: ["保険会社法務・コンプライアンス", "保険代理店", "内部監査", "金融規制担当"],
      audienceReason: "2026年6月1日施行後の代理店ガバナンスと保険会社側の監督義務を最終ルールから確認するため。",
      categories: ["契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-large-agency-governance", "insurance-insurer-oversight-benefits", "insurance-broker-reform"],
      primarySourceIds: [sourceLawId, sourceEnforcementId, sourceRulesFinalId, sourceSupervisoryActId, sourceSupervisoryStructureId],
      reformEventId: reformActId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceRulesFinalId, sourceSupervisoryActId],
      whatChanged: "新テーマ／2025年改正保険業法の大規模乗合代理店・保険会社・保険仲立人に関する最終施行ルールを追加した。"
    },
    {
      id: "article-fsa-insurance-comparison-final-2026",
      title: "令和7年保険業法改正に係る比較推奨販売ルールのパブリックコメント結果等",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-08-28",
      collectedAt: "2026-09-14",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260828/20260828.html",
      sourceType: "primary",
      sourceLabel: "一次資料・保険募集／比較推奨販売",
      status: "adopted",
      summary: "乗合代理店の比較説明・推奨販売について、759件の意見を踏まえた金融庁の考え方と最終ルールを公表した資料。改正内閣府令と監督指針は2028年3月1日から施行・適用される。金融庁は、施行日前でも制度趣旨を踏まえて可能な限り早期に体制整備を進めることが望ましいとしている。",
      whyImportant: ["比較推奨販売の最終ルールと2028年3月1日の施行・適用日が確定した基準資料", "多数のパブリックコメントへの回答を通じ、推奨理由・説明・運用上の留意点を具体的に追える", "権限明示義務・意向把握義務は今回の改正対象外でも現行法上の対応が必要と明示しており、移行設計で規律を切り分けやすい"],
      audience: ["乗合保険代理店", "保険会社", "保険募集コンプライアンス", "プロダクト・システム担当"],
      audienceReason: "2028年施行に向け、比較・推奨ロジック、顧客説明、記録・モニタリングを最終ルールへ移行するため。",
      categories: ["契約・取引", "消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-comparison-recommendation"],
      primarySourceIds: [sourceComparisonId, sourceLawId],
      reformEventId: reformActId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceComparisonId],
      reformEffectiveDates: ["2028-03-01"],
      reformEffectiveDateSourceIds: [sourceComparisonId],
      whatChanged: "新テーマ／乗合代理店の比較推奨販売について最終ルールと2028年3月1日の施行・適用日を追加した。"
    },
    {
      id: "article-fsa-insurance-corporate-agency-draft-2026",
      title: "『保険会社向けの総合的な監督指針』の一部改正（案）の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-14",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260911/20260911.html",
      sourceType: "primary",
      sourceLabel: "一次資料・監督指針改正案／企業内代理店・独禁法・企業保険",
      status: "adopted",
      summary: "金融庁が2026年9月11日に公表した監督指針改正案。企業内代理店の特定契約比率規制を再構築し、一定の手数料適正化・自立性・特定契約管理・独禁法遵守・三線管理を満たす代理店への適用除外を提案する。あわせて、保険会社・代理店の独禁法遵守、共同保険の必要性検証、企業向け損害保険の料率・収支管理、別個登録の廃止を示す。10月13日までパブリックコメント中で、2030年・2032年の移行時期も現時点では案である。",
      whyImportant: ["企業内代理店の問題を特定契約比率だけでなく、代理店手数料、親会社からの自立、独禁法遵守、三線管理まで一体で再設計する最新案", "保険料調整行為を踏まえ、共同保険の必要性検証や企業向け損害保険の割引・収支・料率を経営陣主導で継続検証する方向を明示した", "企業内代理店を持つ一般企業にも、保険調達・手数料・グループガバナンスの見直しとして波及するため、保険会社だけの監督論点ではない"],
      audience: ["企業法務", "企業内保険代理店", "損害保険会社", "独禁法・コンプライアンス", "内部監査"],
      audienceReason: "確定前の段階から、企業内代理店・共同保険・企業向け損害保険料率の将来ルールを現行運用と照合して移行論点を把握するため。",
      categories: ["契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-corporate-agency-specific-contract", "insurance-antitrust-commercial-pricing"],
      primarySourceIds: [sourceCorporateAgencyDraftId],
      reformEventId: reformCorporateAgencyId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [sourceCorporateAgencyDraftId],
      whatChanged: "新テーマ更新／企業内代理店・独禁法遵守・企業向け損害保険料率管理を扱う2026年9月11日の監督指針改正案を追加した。"
    },
    {
      id: "article-amt-insurance-large-agency-2026",
      title: "大規模乗合保険代理店等に関する内閣府令等の改正案の概要",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "村井惠悟、津江紘輝、高野聖也、出張智己、福田直邦、若狭一行",
      publishedAt: "2026-03-06",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260306001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／大規模乗合保険代理店",
      status: "adopted",
      summary: "2025年改正保険業法の施行準備として、特定大規模乗合保険募集人の本業に関する体制整備と、特定大規模乗合損害保険代理店の自動車修理業等の兼業に関する利益相反管理を分けて整理する実務解説。営業所等の責任者・本店の統括、苦情・内部監査等をどの主体が持つかを把握する入口になる。",
      whyImportant: ["生命保険・損害保険の大規模乗合代理店を同じ名称だけで処理せず、本業の募集管理と兼業利益相反を切り分けて読める", "法律・政令・府令・監督指針の役割分担をつないでおり、対象判定から社内体制への落とし込みに使いやすい", "公開時は案段階だったため、現在は3月30日の最終ルールと組み合わせて読むことで改正前後の差分を確認できる"],
      audience: ["保険代理店", "保険会社法務・コンプライアンス", "内部監査"],
      audienceReason: "大規模代理店規制の対象判定と、責任者・利益相反・監査等の実装単位を整理するため。",
      categories: ["契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-large-agency-governance"],
      primarySourceIds: [sourceLawId, sourceEnforcementId, sourceRulesFinalId, sourceSupervisoryActId],
      reformEventId: reformActId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [sourceRulesFinalId, sourceSupervisoryActId],
      whatChanged: "整理変更なし／大規模乗合代理店の本業ガバナンスと兼業利益相反を分けて読む実務解説を追加した。"
    },
    {
      id: "article-amt-insurance-insurer-controls-2026",
      title: "大規模乗合保険代理店に対する規制強化に伴う保険会社等に対する体制整備義務の強化等に関する内閣府令等の改正の概要",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "村井惠悟、津江紘輝、高野聖也、出張智己、福田直邦、若狭一行",
      publishedAt: "2026-04-10",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260410001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／保険会社側の代理店管理・便宜供与",
      status: "adopted",
      summary: "2026年3月30日に最終化された改正府令・監督指針について、保険会社等に対する体制整備義務、保険契約者等への過度な便宜供与の禁止、保険会社の営業推進態勢、保険金等支払管理態勢をまとめた実務解説。代理店側だけでなく保険会社の管理責任へ視点を移せる。",
      whyImportant: ["大規模代理店規制を『代理店が何をするか』だけでなく、保険会社が委託先・兼業取引をどう管理するかへ接続している", "過度な便宜供与の禁止を営業関係・顧客利益保護の内部統制と結び付けて確認できる", "営業推進と保険金支払の管理まで扱い、代理店管理を単独のコンプライアンス項目に閉じない"],
      audience: ["保険会社法務・コンプライアンス", "代理店管理部門", "内部監査", "営業企画"],
      audienceReason: "最終施行ルールを保険会社側の代理店管理、便宜供与、営業・支払管理へ落とすため。",
      categories: ["契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-insurer-oversight-benefits"],
      primarySourceIds: [sourceRulesFinalId, sourceSupervisoryActId, sourceSupervisoryStructureId, sourceLawId],
      reformEventId: reformActId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceRulesFinalId, sourceSupervisoryActId, sourceSupervisoryStructureId],
      whatChanged: "整理変更なし／保険会社側の代理店管理、過度な便宜供与、営業推進・保険金支払管理をつなぐ実務解説を追加した。"
    },
    {
      id: "article-amt-insurance-broker-reform-2026",
      title: "保険仲立人の活用促進等に向けた改正の概要",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "村井惠悟、津江紘輝、高野聖也、出張智己、福田直邦、若狭一行",
      publishedAt: "2026-05-22",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260522001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／保険仲立人",
      status: "adopted",
      summary: "2025年改正保険業法・施行ルールのうち、保険仲立人について、保証金制度、保険代理店等との協業、海外直接付保における活用、不祥事件の届出義務を整理した実務解説。代理店規制強化と並行して、顧客側に立つ仲立人をどの取引で利用できるかを把握できる。",
      whyImportant: ["改正項目を保証金・協業・海外直接付保・不祥事件届出という取引実務単位に分解している", "大規模代理店の規制強化だけを追うと見落としやすい、保険仲立人の活用促進という制度の別方向を補える", "企業の保険調達でも、代理店と仲立人の役割・報酬・責任分界を再検討する材料になる"],
      audience: ["企業法務・リスク管理", "保険会社", "保険仲立人", "保険代理店"],
      audienceReason: "保険調達・媒介スキームの選択肢として、改正後の保険仲立人の役割と手続を理解するため。",
      categories: ["契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-broker-reform"],
      primarySourceIds: [sourceEnforcementId, sourceRulesFinalId, sourceSupervisoryStructureId, sourceLawId],
      reformEventId: reformActId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceRulesFinalId, sourceSupervisoryStructureId],
      whatChanged: "整理変更なし／保証金・協業・海外直接付保・不祥事件届出を横断する保険仲立人の実務解説を追加した。"
    }
  ];

  const currentSources = window.SOURCE_DATA || [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const newSources = sources.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url)));
  if (newSources.length) window.SOURCE_DATA = currentSources.concat(newSources);

  if (!(window.TOPIC_DATA || []).some((item) => item && item.slug === topicSlug)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([topic]);
  }

  const currentReforms = window.REFORM_EVENT_DATA || [];
  const reformIds = new Set(currentReforms.map((item) => item && item.id).filter(Boolean));
  reformEvents.forEach((item) => { if (!reformIds.has(item.id)) currentReforms.push(item); });
  window.REFORM_EVENT_DATA = currentReforms;

  const currentArticles = window.ARTICLE_DATA || [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const additions = articles.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url)));
  if (additions.length) window.ARTICLE_DATA = currentArticles.concat(additions);
})();
