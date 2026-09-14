(() => {
  const topicSlug = "securities-monitoring-internal-controls";
  const policySourceId = "source-sesc-securities-monitoring-policy-2026";
  const casebookSourceId = "source-sesc-securities-monitoring-casebook-2026";

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

  const sources = [
    {
      id: policySourceId,
      title: "令和8事務年度 証券モニタリング基本方針",
      type: "guideline",
      typeLabel: "証券監視委・年次モニタリング方針",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      importance: "高",
      whyImportant: "2026年7月から2027年6月までの証券モニタリングについて、業態横断・規模業態別の検証重点を示す一次資料。顧客本位・適合性、システム・サイバー、AML/CFT、内部管理態勢、業態別リスクを監督・検査対応へ落とす基準点になる。",
      topics: [topicSlug]
    },
    {
      id: casebookSourceId,
      title: "証券モニタリング概要・事例集（令和8年7月）",
      type: "report",
      typeLabel: "証券監視委・モニタリング事例集",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      importance: "高",
      whyImportant: "2025年7月から2026年6月末までの検査・モニタリングで把握した問題点を具体例で示す一次資料。抽象的な監督上の着眼点を、商品審査、システム、利益相反、経営管理等の失敗パターンと是正課題へ結び付けて読める。",
      topics: [topicSlug]
    }
  ];

  const existingSources = window.SOURCE_DATA || [];
  const existingSourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const existingSourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const sourceAdditions = sources.filter((item) => !existingSourceIds.has(item.id) && !existingSourceUrls.has(normalizeUrl(item.url)));
  if (sourceAdditions.length) window.SOURCE_DATA = existingSources.concat(sourceAdditions);

  const topic = {
    slug: topicSlug,
    title: "証券モニタリング・金融商品取引業者の内部管理",
    categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス", "情報セキュリティ"],
    summary: "証券取引等監視委員会の年次モニタリング方針と検査事例を基礎に、金融商品取引業者の顧客本位・適合性、システム・サイバー、AML/CFT、業容変更時の内部管理、業態別リスクを整理する。",
    lastUpdated: "2026-09-14",
    lastVerified: "2026-09-14",
    isNew: true,
    overview: [
      "証券モニタリング基本方針は新しい法令そのものではなく、証券取引等監視委員会が当該事務年度にどのリスクを重点的に検証するかを示す監督・検査上の地図である。",
      "令和8事務年度方針は2026年7月から2027年6月を対象とし、顧客本位・適合性、システム・サイバー、AML/CFT、内部管理態勢を業態横断で確認した上で、大手・ネット・地域証券、投資運用業者等ごとに重点を分けている。",
      "このテーマでは、方針の抽象的な着眼点と、同日に公表されたモニタリング事例集に現れる具体的な失敗事例を往復し、規程・商品審査・システム・内部監査・利益相反管理へ落とす。"
    ],
    currentSummary: {
      facts: [
        "証券取引等監視委員会は2026年7月31日、2026年7月から2027年6月までを対象とする令和8事務年度の証券モニタリング基本方針を公表した。",
        "業態横断では、顧客の最善の利益・適合性、システムリスクとサイバーセキュリティ、AML/CFT、個々の業容に応じた実効的な内部管理態勢が重点検証事項とされている。",
        "規模・業態別では、大手証券の法人関係情報管理・引受審査、ネット証券の不正アクセス対策・取引時確認・売買管理、準大手・地域証券の業容変化と新商品審査、投資運用業者の運用管理・利益相反管理等が重点として示されている。",
        "同日公表のモニタリング概要・事例集は、前事務年度の検査結果と問題事例を示し、監督上の着眼点を具体的な内部管理不備へ結び付ける材料となっている。"
      ],
      interpretations: [
        "年次方針に記載された事項を新しい法的義務と同一視せず、既存の法令・監督指針・自主規制等について当局がどこを重点検証するかという優先順位情報として扱う。",
        "主要株主・経営体制の変更、M&Aによる参入、新サービスや新商品による業容拡大では、既存の規程を残すだけでなく、システム、商品審査、顧客管理、法令遵守、内部監査を新しい業容に合わせて再設計する必要がある。",
        "検査事例は個社固有の事実関係を前提とするが、合理的根拠適合性、親会社との利益相反、内部監査指摘の是正等について、自社の統制が形式だけになっていないかを逆算して確認する素材になる。"
      ],
      implications: [
        "顧客属性・商品リスク・デジタルリテラシーを踏まえた説明、短期乗換え、対象顧客設定について、社内ルールと実際のモニタリング証跡を対応付ける。",
        "フィッシング耐性のある認証、不正取引検知、脆弱性・パッチ、委託先管理、AML/CFTの取引モニタリング等を、経営課題としての管理状況まで確認する。",
        "買収・主要株主変更、新規サービス、新商品導入時には、商品委員会・システム対応・法令審査・経営会議・内部監査のゲートを事前に確認する。",
        "投資運用業者は親会社等との取引について、忠実義務・利益相反管理だけでなく、取引妥当性を事後検証できる資料と牽制プロセスを残す。",
        "内部監査・自主規制機関の指摘事項は、経営陣が原因分析、改善策、再発防止、実施確認まで追えるようにする。"
      ],
      uncertain: [
        "基本方針に列挙された項目は検査対象を網羅するものではなく、個別業者の業態・規模・リスクや市場環境に応じて実際の重点は変わる。",
        "個別事例から一般化できる管理水準は事実関係により異なるため、行政処分事例の結論だけでなく、適用された法令・監督指針・自主規制と自社業務の対応関係を個別に確認する必要がある。"
      ]
    },
    issues: [
      {
        id: "securities-monitoring-customer-interest",
        title: "顧客本位・適合性・商品ガバナンスをどう点検するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "複雑又は高リスク商品の対象顧客設定、顧客属性・デジタルリテラシーに応じた説明、合理性のない短期乗換えの防止について、社内ルールだけでなく遵守状況のモニタリングまで確認する。",
        exception: "具体的な説明方法・対象顧客の設定は商品の性質、顧客属性、販売チャネル等により異なる。",
        uncertain: "新商品・新チャネルに必要な統制の具体的水準は、今後の検査・自主規制・商品特性に応じて個別確認する。",
        sourceIds: [policySourceId, casebookSourceId]
      },
      {
        id: "securities-monitoring-cyber-aml",
        title: "システム・サイバー・AML/CFTを業態横断でどう管理するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "不正アクセス・不正取引、フロンティアAIによる脅威変化、システムリスク及びAML/CFTについて、経営関与、技術対策、委託先管理、取引モニタリングを含む実効的な管理態勢を整える。",
        exception: "必要な対策はオンライン取引の有無、システム構成、顧客・商品・取引リスク、外部委託の状況等で異なる。",
        uncertain: "サイバー脅威・AI利用・不正手口の変化が速いため、固定的なチェックリストだけではなく最新の当局要請・監督指針を継続確認する必要がある。",
        sourceIds: [policySourceId]
      },
      {
        id: "securities-monitoring-business-change-controls",
        title: "株主・経営体制・ビジネスモデル変更時の内部管理をどう追随させるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "主要株主・経営体制の変更や業容拡大、新商品・新サービス導入時には、変更後の業務に見合うガバナンス、法令審査、システムリスク管理、商品審査、内部監査を構築する。",
        exception: "単なる株主変更それ自体ではなく、ガバナンス、実質的な業務運営拠点、ビジネスモデル・業容の変化と統制の対応関係を確認する。",
        uncertain: "参入形態・買収後統合・サービス構成によって必要な統制は異なり、個別の登録・届出・監督上の対応も確認が必要となる。",
        sourceIds: [policySourceId, casebookSourceId]
      },
      {
        id: "securities-monitoring-entity-specific",
        title: "規模・業態別にどの内部管理が重点検証されるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "大手証券、ネット系、準大手・地域証券、投資運用業者等について、各業態のビジネス・商品・システム・利益相反等のリスクに応じた重点検証事項を確認する。",
        exception: "基本方針の区分は典型的な重点を示すもので、複数業態を営む会社や特殊なビジネスモデルでは複数の観点が重なる。",
        uncertain: "事務年度中の市場環境・不祥事・技術変化等により追加的な重点検証が行われる可能性がある。",
        sourceIds: [policySourceId]
      },
      {
        id: "securities-monitoring-inspection-remediation",
        title: "検査事例を内部監査・改善計画へどう落とすか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "モニタリング事例集の指摘を、自社の業務・商品・統制との対応関係で比較し、内部監査や自主規制機関の指摘について原因分析、経営陣の関与、改善策・再発防止策の実施証跡まで確認する。",
        exception: "公表事例は個社固有の事実関係を前提とするため、指摘事項をそのまま全社共通の義務として転記しない。",
        uncertain: "自社に同種リスクがあるか、どの統制が必要かは、適用法令・自主規制、業務実態、顧客・商品特性を踏まえて個別に評価する。",
        sourceIds: [policySourceId, casebookSourceId]
      }
    ],
    sourceIds: [policySourceId, casebookSourceId],
    practicalImpacts: [
      "顧客本位・適合性モニタリング",
      "新商品・新サービス審査",
      "システム・サイバーリスク管理",
      "AML/CFT・取引時確認",
      "買収・主要株主変更時の統制整備",
      "投資運用の利益相反管理",
      "内部監査・改善計画・再発防止",
      "当局検査・自主規制機関監査対応"
    ]
  };

  const currentTopics = window.TOPIC_DATA || [];
  if (!currentTopics.some((item) => item && item.slug === topicSlug)) {
    window.TOPIC_DATA = currentTopics.concat(topic);
  }

  const articles = [
    {
      id: "article-sesc-securities-monitoring-policy-2026",
      title: "令和8事務年度 証券モニタリング基本方針",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-14",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      sourceType: "primary",
      sourceLabel: "一次資料・年次モニタリング方針",
      status: "adopted",
      summary: "2026年7月から2027年6月までの金融商品取引業者等に対する証券モニタリングの重点を示す基本方針。顧客本位・適合性、システム・サイバー、AML/CFT、実効的な内部管理態勢を業態横断で掲げ、大手・ネット・地域証券や投資運用業者等ごとの検証事項も整理する。",
      whyImportant: [
        "当局が当該事務年度にどのリスクを重点的に検証するかを一次資料で把握できる",
        "主要株主・経営体制や業容の変化、新商品・新サービス導入時に内部管理を追随させる必要性が明示されている",
        "顧客本位、サイバー、AML/CFT、内部監査を別々ではなく証券モニタリングの一体的な管理課題として点検できる"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査・リスク管理", "経営企画・新規事業担当"],
      audienceReason: "当局の重点検証領域を、当年度の内部監査計画、商品・サービス審査、経営管理、検査対応へ反映するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス", "情報セキュリティ"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "securities-monitoring-customer-interest",
        "securities-monitoring-cyber-aml",
        "securities-monitoring-business-change-controls",
        "securities-monitoring-entity-specific",
        "securities-monitoring-inspection-remediation"
      ],
      primarySourceIds: [policySourceId],
      legacyReformInference: false,
      whatChanged: "新テーマ作成／令和8事務年度の証券モニタリング重点を、顧客本位・システム／AML・業容変更・業態別リスク・検査改善の5論点で整理した。"
    },
    {
      id: "article-sesc-securities-monitoring-casebook-2026",
      title: "証券モニタリング概要・事例集（令和8年7月）",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-14",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      sourceType: "primary",
      sourceLabel: "一次資料・モニタリング事例集",
      status: "adopted",
      summary: "2025年7月から2026年6月末までの証券モニタリングの取組と検査事例をまとめた事例集。新商品・新サービス導入時の審査不足、システム・経営管理、合理的根拠適合性、利益相反等について、基本方針の着眼点が実際にどのような不備として現れるかを確認できる。",
      whyImportant: [
        "監督方針の抽象語を、具体的な不備・原因・行政対応と結び付けて理解できる",
        "買収後の業容拡大や新商品導入で統制整備が追い付かない失敗パターンを確認できる",
        "内部監査や自主点検で何を証跡として残すべきかを逆算する素材になる"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査・リスク管理", "商品・システム企画担当"],
      audienceReason: "公表事例を自社の統制と比較し、基本方針を実装レベルの点検項目へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "securities-monitoring-customer-interest",
        "securities-monitoring-business-change-controls",
        "securities-monitoring-inspection-remediation"
      ],
      primarySourceIds: [casebookSourceId],
      legacyReformInference: false,
      whatChanged: "整理変更なし／年次方針の重点が実際の検査でどのような内部管理不備として現れるかを確認する一次資料を追加した。"
    },
    {
      id: "article-tmi-securities-monitoring-2026-part1",
      title: "〖金商法業規制ブログ〗令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委「令和8事務年度 証券モニタリング基本方針」の解説～（第1回）",
      publisher: "TMI総合法律事務所",
      author: "岩井 宏樹",
      publishedAt: "2026-08-07",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18668.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング（業態横断）",
      status: "adopted",
      summary: "令和8事務年度方針の業態横断的な4重点を、前年度方針との違いと前年度の検査事例に照らして解説する。顧客属性・デジタルリテラシーに応じた説明、フロンティアAIを踏まえたシステムリスク、2026年改正AML/CFTガイドライン、業容に応じた内部管理態勢までを具体化する。",
      whyImportant: [
        "方針の記載が前年からどこで具体化・重点変更されたかを比較できる",
        "フロンティアAI対応やAML/CFT改正など、方針が参照する別資料を一つの実務課題としてつなげている",
        "主要株主・経営体制の変更や内部監査指摘の改善について、経営陣の役割まで読み解ける"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査・リスク管理", "システム・AML/CFT担当"],
      audienceReason: "年次方針の変化を前年との比較と関連規制まで含めて読み、当年度の点検優先順位を決めるため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス", "情報セキュリティ"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "securities-monitoring-customer-interest",
        "securities-monitoring-cyber-aml",
        "securities-monitoring-business-change-controls",
        "securities-monitoring-inspection-remediation"
      ],
      primarySourceIds: [policySourceId, casebookSourceId],
      legacyReformInference: false,
      whatChanged: "整理変更なし／業態横断の4重点について、前年との差分、関連監督指針・AML/CFTガイドライン、検査事例をつないだ実務解説を追加した。"
    },
    {
      id: "article-tmi-securities-monitoring-2026-part2",
      title: "〖金商法業規制ブログ〗令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委「令和8事務年度 証券モニタリング基本方針」の解説～（第2回）",
      publisher: "TMI総合法律事務所",
      author: "岩井 宏樹",
      publishedAt: "2026-08-12",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18670.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング（業態別）",
      status: "adopted",
      summary: "令和8事務年度方針の規模・業態別重点を、直近の勧告・行政処分事例と結び付けて解説する。大手証券の法人関係情報・引受審査、ネット証券のサイバー・取引時確認、地域証券の業容変更・新商品審査、投資運用業者の親会社取引・利益相反管理を具体的に整理する。",
      whyImportant: [
        "業態別の抽象的な検証事項を直近の具体的な不備事例へ接続している",
        "証券会社買収後のネット取引・NISA展開で統制が追い付かなかった事例から、買収・新規参入時の管理論点を抽出できる",
        "新商品委員会の合理的根拠適合性や、投資運用業者の親会社取引における牽制・事後検証など、実装単位まで踏み込んでいる"
      ],
      audience: ["証券会社・投資運用業者の法務・コンプライアンス", "内部監査・リスク管理", "新商品・M&A・経営企画担当"],
      audienceReason: "自社の業態に応じて重点検証領域を絞り、直近事例から商品審査・買収後統合・利益相反管理の点検項目を作るため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "securities-monitoring-business-change-controls",
        "securities-monitoring-entity-specific",
        "securities-monitoring-inspection-remediation"
      ],
      primarySourceIds: [policySourceId, casebookSourceId],
      legacyReformInference: false,
      whatChanged: "整理変更なし／業態別重点を買収後の業容変更、新商品審査、親会社取引等の具体的な不備事例と接続する実務解説を追加した。"
    }
  ];

  const currentArticles = window.ARTICLE_DATA || [];
  const existingArticleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingArticleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const articleAdditions = articles.filter((item) => !existingArticleIds.has(item.id) && !existingArticleUrls.has(normalizeUrl(item.url)));
  if (articleAdditions.length) window.ARTICLE_DATA = currentArticles.concat(articleAdditions);
})();
