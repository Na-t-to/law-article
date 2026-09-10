(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueBySlug = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.slug));
    return (target || []).concat(additions.filter((item) => !existing.has(item.slug)));
  };

  const topicSlug = "securities-monitoring-internal-controls";
  const policySourceId = "source-sesc-securities-monitoring-policy-2026";
  const casesSourceId = "source-sesc-securities-monitoring-cases-2026";
  const underwritingSourceId = "source-jsda-ipo-underwriting-review-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: policySourceId,
      title: "令和8事務年度 証券モニタリング基本方針",
      type: "guideline",
      typeLabel: "証券モニタリング基本方針",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      importance: "最高",
      whyImportant: "令和8事務年度に金融商品取引業者等を検査・モニタリングする際の業態横断・規模業態別の重点事項を示す公式方針。顧客本位・適合性、システムリスク、AML/CFT、内部管理態勢、大手証券・ネット証券・地域証券・投資運用業者等の重点を確認できる。",
      topics: [topicSlug]
    },
    {
      id: casesSourceId,
      title: "証券モニタリング概要・事例集（令和8年7月）",
      type: "report",
      typeLabel: "証券モニタリング概要・事例集",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      importance: "最高",
      whyImportant: "証券モニタリングで把握した問題点と事例を公表し、金融商品取引業者等が内部管理態勢の充実・強化に自主的に活用するための公式事例集。年度方針の重点を具体的な事故・不備と結び付けて確認できる。",
      topics: [topicSlug]
    },
    {
      id: underwritingSourceId,
      title: "新規上場時の会計不正事例を踏まえた引受審査に関するガイドライン",
      type: "guideline",
      typeLabel: "自主規制ガイドライン・引受審査",
      authority: "日本証券業協会",
      publishedAt: "2026-03-18",
      url: "https://www.jsda.or.jp/shijyo/minasama/hikiukeshinsa.html",
      importance: "高",
      whyImportant: "新規上場時の会計不正事例を踏まえ、主幹事会員がゲートキーパーとして引受審査を行う際の留意事項を整理した自主規制上の実務資料。令和8事務年度方針が大手証券会社グループの重点として掲げる引受審査態勢を具体化して読む基礎になる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueBySlug(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "金融商品取引業者・証券モニタリング／内部管理",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      summary: "証券取引等監視委員会の年度方針と事例集を基礎に、金融商品取引業者等について、顧客本位・適合性、システム・サイバー、AML/CFT、内部監査、業容変更、新商品審査、法人関係情報・引受審査、利益相反管理など、検査・モニタリングで実効性を見られる内部管理態勢を整理する。",
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      isNew: true,
      overview: [
        "証券取引等監視委員会は毎事務年度、金融商品取引業者等に対する証券モニタリングの主な検証事項を公表している。令和8事務年度は2026年7月から2027年6月までを対象とする。",
        "令和8事務年度方針は、顧客の最善の利益・適合性、システムリスク、AML/CFT、内部管理態勢の実効性を業態横断の重点とし、さらに大手証券、ネット系証券、準大手・地域証券、投資運用業者などについて業態別の重点を示す。",
        "このテーマでは、年度方針そのものを新たな法的義務として扱わず、法令・監督指針・自主規制規則等に基づく既存義務が、当年度の検査・モニタリングでどのような観点から実効性を確認されるかを追う。"
      ],
      currentSummary: {
        facts: [
          "令和8事務年度方針は、顧客の最善の利益を勘案した業務運営・適合性原則、システムリスク、AML/CFT、個社の特性・業容に応じた内部管理態勢の実効性を業態横断の検証事項としている。",
          "内部監査や自主規制機関の監査等で指摘された事項について、経営陣が重要性を認識し、実効性のある改善策・再発防止策に取り組んでいるかも検証対象とされる。",
          "大手証券会社グループでは、売買審査、法人関係情報管理、引受審査等の内部管理態勢が重点に含まれ、ネット系証券では不正アクセス・不正取引へのサイバー対策、取引時確認、売買管理、外部委託先管理、ビジネスモデル変化への対応が挙げられている。",
          "準大手・地域証券では、業容の変化に応じた内部管理態勢、新商品の導入時審査と導入後モニタリング、適合性原則への対応が検証事項とされる。投資運用業者では、親会社等との取引を含む利益相反管理、運用実態、外部委託を含む運用管理態勢が重点となる。"
        ],
        interpretations: [
          "年度方針は新しい禁止規定を作る文書ではない。法令・監督指針・自主規制規則等を前提に、当局がどのリスクを重点的に見ているかを内部統制の点検順序へ変換して使うのが適切である。",
          "令和8事務年度は、規程や委員会の存在だけでなく、短期乗換えの監視、新商品導入前の分析、導入後モニタリング、内部監査指摘の是正、業容変更後のシステム・管理態勢など、実際に統制が機能している証跡を確認する方向が明確である。",
          "業態別重点は一律のチェックリストではなく、自社の登録業態、商品、販売チャネル、親会社・委託先との関係、ビジネスモデル変更の有無に応じて該当項目を選ぶ必要がある。"
        ],
        implications: [
          "顧客属性・商品リスク・デジタルリテラシーに応じた説明、短期乗換え、適合性に関する社内ルールとモニタリング記録を点検する。",
          "新商品・新サービス・M&A・販売チャネル変更など業容が変わった場合、法令確認、システム対応、商品審査、想定顧客、導入後モニタリングまでを変更管理に組み込む。",
          "内部監査・自主規制機関の指摘について、担当部署の是正だけでなく、経営陣の認識、期限、再発防止、フォローアップ結果を追えるようにする。",
          "大手証券では法人関係情報・売買審査・引受審査、ネット系証券ではサイバー・取引時確認・売買管理、投資運用業者では親会社取引・利益相反・外部委託管理を重点的に棚卸しする。"
        ],
        uncertain: [
          "実際の検査対象選定と検証の深度は各社のリスク、業容、過去の問題、当局が得た情報等によって変わり、年度方針に列挙された項目だけで検査範囲が尽きるわけではない。",
          "個別の行為が法令・監督指針・自主規制規則等に適合するかは、それぞれの規範と事実関係を確認する必要があり、年度方針だけから適法・違法を判断しない。"
        ]
      },
      issues: [
        {
          id: "securities-monitoring-customer-best-interest",
          title: "顧客本位・適合性と販売後モニタリングをどう実効化するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "複雑・高リスク商品の対象顧客設定、顧客属性やデジタルリテラシーに応じた説明、合理性のない短期乗換えの防止について社内ルールを整備し、実際の販売・勧誘がルールに沿うか継続的にモニタリングする。",
          exception: "商品・顧客・チャネルにより必要な説明や検証方法は異なるため、画一的な確認だけで適合性を判断しない。",
          uncertain: "個別商品の合理的根拠適合性や顧客への適合性は、商品特性、想定顧客、顧客属性、勧誘経緯等の具体的事実に左右される。",
          sourceIds: [policySourceId, casesSourceId]
        },
        {
          id: "securities-monitoring-governance-audit",
          title: "内部管理態勢・内部監査の実効性をどう示すか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "個社の特性・業容に応じた内部管理態勢を構築し、内部監査・自主規制機関の指摘について経営陣が重要性を認識して、改善策・再発防止策とフォローアップを実行する。",
          exception: "主要株主・経営体制・実質的業務拠点・ビジネスモデルに変更がある場合は、従来の統制がそのまま有効とは限らず、変更後の実態に即して再評価する。",
          uncertain: "求められる統制の具体的な水準・証跡は、業態、規模、取扱商品、過去の指摘等に応じて異なる。",
          sourceIds: [policySourceId, casesSourceId]
        },
        {
          id: "securities-monitoring-cyber-aml",
          title: "サイバー・取引時確認・AML/CFTをどう統合管理するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "システムリスクとサイバー脅威の変化、AML/CFTガイドラインへの対応、ネット取引の不正アクセス・不正取引、取引時確認や売買管理を、自社の取引チャネルとリスクに応じて継続検証する。",
          exception: "AML/CFT、サイバーセキュリティ、売買管理は根拠規範と担当機能が異なるため、一つのチェック項目へ潰さず、リスク連携と責任分担を明確にする。",
          uncertain: "フロンティアAI等に伴う脅威変化や攻撃手法は継続的に変化するため、固定的な対策だけで十分かは随時再評価が必要である。",
          sourceIds: [policySourceId, casesSourceId]
        },
        {
          id: "securities-monitoring-business-change-products",
          title: "業容変更・新商品審査・導入後モニタリングをどう設計するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "新商品・新サービスやM&A等で業容が変わる場合、商品特性・リスク・想定顧客・法令等諸規則・システム対応を導入前に検証し、導入後も販売実態・障害・苦情等をモニタリングして統制を更新する。",
          exception: "新商品委員会等の会議を開催した事実だけでは足りず、具体的な分析・検討とその記録、導入後の見直しまで機能しているかを確認する。",
          uncertain: "商品の複雑性・販売対象・既存業務との差分に応じ、必要な審査項目とモニタリング頻度は個別に設計する必要がある。",
          sourceIds: [policySourceId, casesSourceId]
        },
        {
          id: "securities-monitoring-underwriting-corporate-info",
          title: "法人関係情報管理・売買審査・引受審査をどう強化するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "大手証券会社グループでは、不公正取引の検知・防止に向けた売買審査、法人関係情報管理、引受審査等を重点点検する。新規上場時の引受審査では、不正リスクに応じた確認、内部通報情報への対応、経営者・監査役等・独立役員への確認等を実務へ落とす。",
          exception: "日本証券業協会の2026年ガイドラインは主幹事会員の引受審査に関する留意事項であり、すべての金融商品取引業者に同じ手順を求めるものではない。",
          uncertain: "個別IPOの不正リスクや取得可能な情報に応じ、追加調査・確認の範囲は案件ごとに判断する必要がある。",
          sourceIds: [policySourceId, underwritingSourceId]
        },
        {
          id: "securities-monitoring-asset-management-conflicts",
          title: "投資運用業の利益相反・親会社取引・外部委託をどう検証するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "投資者の利益より親会社等の都合を優先した取引等の有無、親会社等との取引の妥当性を事後検証できる態勢、運用実態、外部委託を含む運用管理態勢を継続的に検証する。",
          exception: "親会社・利害関係者との取引が直ちに不適切となるわけではなく、忠実義務・利益相反管理の観点から手続・条件・けん制・事後検証の実効性を見る。",
          uncertain: "案件ごとの利益相反の程度と必要なけん制措置は、資産・取引条件・意思決定過程・組織構成等に左右される。",
          sourceIds: [policySourceId, casesSourceId]
        }
      ],
      sourceIds: [policySourceId, casesSourceId, underwritingSourceId],
      practicalImpacts: [
        "証券コンプライアンス・内部管理規程",
        "顧客本位・適合性・販売モニタリング",
        "新商品審査・商品ガバナンス",
        "内部監査・改善管理",
        "サイバーセキュリティ・システムリスク",
        "AML/CFT・取引時確認",
        "法人関係情報・売買審査・引受審査",
        "投資運用・利益相反・外部委託管理"
      ]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-sesc-securities-monitoring-policy-2026",
      title: "令和8事務年度 証券モニタリング基本方針",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-10",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      sourceType: "primary",
      sourceLabel: "一次資料・証券モニタリング基本方針",
      status: "adopted",
      summary: "令和8事務年度（2026年7月～2027年6月）の証券モニタリングで、金融商品取引業者等について重点的に検証する事項を示した公式方針。顧客本位・適合性、システムリスク、AML/CFT、内部管理態勢の実効性を業態横断で掲げ、大手証券、ネット系証券、準大手・地域証券、投資運用業者等について業態別の重点も整理する。",
      whyImportant: [
        "当局が当年度にどのリスクと内部管理態勢を重点的に見るかを一次資料で確認できる",
        "規程整備だけでなく、販売モニタリング、監査指摘の是正、業容変更後の統制など実効性の確認が重視されている",
        "証券会社・運用会社等の業態ごとに、優先して棚卸しすべき統制を分けられる"
      ],
      audience: ["金融機関法務", "証券コンプライアンス", "内部監査・リスク管理", "金融商品・システム担当"],
      audienceReason: "年度の検査・モニタリング重点を、自社の内部管理態勢・商品管理・監査計画の点検項目へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-customer-best-interest", "securities-monitoring-governance-audit", "securities-monitoring-cyber-aml", "securities-monitoring-business-change-products", "securities-monitoring-underwriting-corporate-info", "securities-monitoring-asset-management-conflicts"],
      primarySourceIds: [policySourceId],
      whatChanged: "監督重点更新／令和8事務年度の証券モニタリングについて、顧客本位・適合性、システム・AML/CFT、内部管理の実効性と、業態別の重点検証事項が示された。"
    },
    {
      id: "article-sesc-securities-monitoring-cases-2026",
      title: "証券モニタリング概要・事例集（令和8年7月）",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-10",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      sourceType: "primary",
      sourceLabel: "一次資料・証券モニタリング事例集",
      status: "adopted",
      summary: "証券モニタリングを通じて把握した問題点・事例を取りまとめ、金融商品取引業者等による内部管理態勢の充実・強化に活用することを目的とする証券監視委の公式事例集。年度方針の抽象的な重点を、実際に問題となった業務運営・統制不備と接続して確認するための基礎資料。",
      whyImportant: [
        "当局が問題とした具体的な業務運営と内部管理上の根本原因を確認できる",
        "自社の監査・モニタリング項目を、実際の不備事例から逆算して点検できる",
        "年度方針だけでは分からない統制の失敗パターンを、再発防止・未然防止へ落とせる"
      ],
      audience: ["金融機関法務", "証券コンプライアンス", "内部監査・リスク管理", "経営管理"],
      audienceReason: "抽象的な規程適合性ではなく、過去の問題事例から自社の統制が実際に機能するかを点検するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-customer-best-interest", "securities-monitoring-governance-audit", "securities-monitoring-cyber-aml", "securities-monitoring-business-change-products", "securities-monitoring-asset-management-conflicts"],
      primarySourceIds: [casesSourceId, policySourceId],
      whatChanged: "監督実務更新／令和8年7月の事例集により、証券モニタリングで把握された問題点を内部管理態勢の点検・再発防止へ利用できる最新の事例基盤が更新された。"
    },
    {
      id: "article-jsda-ipo-underwriting-review-2026",
      title: "新規上場時の会計不正事例を踏まえた引受審査に関するガイドライン",
      publisher: "日本証券業協会",
      author: "日本証券業協会",
      publishedAt: "2026-03-18",
      collectedAt: "2026-09-10",
      url: "https://www.jsda.or.jp/shijyo/minasama/hikiukeshinsa.html",
      sourceType: "primary",
      sourceLabel: "一次資料・自主規制ガイドライン／引受審査",
      status: "adopted",
      summary: "新規上場時の発行者による会計不正事例を踏まえ、主幹事会員がゲートキーパーとして引受審査機能を発揮するための留意事項を整理した日本証券業協会のガイドライン。不正リスクに応じた確認、内部通報体制・不正情報への対応、経営者・監査役等・独立役員への確認などを示す。",
      whyImportant: [
        "令和8事務年度の証券モニタリング方針が重点に掲げる引受審査態勢を具体化して読める",
        "IPO審査を資料受領の形式確認ではなく、会計不正リスクに応じた追加確認へつなげられる",
        "内部通報情報、監査役等、独立役員を引受審査の情報源としてどう扱うかを確認できる"
      ],
      audience: ["証券会社法務・引受審査", "IPO担当", "コンプライアンス・内部監査"],
      audienceReason: "主幹事証券会社の引受審査について、会計不正リスクを踏まえた具体的な審査手順と確認先を設計するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-underwriting-corporate-info"],
      primarySourceIds: [underwritingSourceId, policySourceId],
      whatChanged: "自主規制実務更新／新規上場時の会計不正を踏まえ、主幹事会員の引受審査で特に留意すべき確認事項がガイドラインとして具体化された。"
    },
    {
      id: "article-tmi-securities-monitoring-policy-2026-part2",
      title: "令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委『令和8事務年度 証券モニタリング基本方針』の解説～（第2回）",
      publisher: "TMI総合法律事務所",
      author: "岩井宏樹",
      publishedAt: "2026-08-12",
      collectedAt: "2026-09-10",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18670.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・証券モニタリング実務解説",
      status: "adopted",
      summary: "令和8事務年度の証券モニタリング基本方針のうち規模・業態別の検証事項を、直近のガイドライン・行政処分事例と結び付けて解説。大手証券の法人関係情報・引受審査、ネット証券のサイバー・取引時確認・売買管理、準大手・地域証券の業容変更・新商品審査、投資運用業者の親会社取引・利益相反管理について、なぜ今年度の重点になったかを具体化する。",
      whyImportant: [
        "年度方針の文言を前年との差分と直近の行政処分事例へ接続しており、重点化の背景を理解できる",
        "業容変更後のNISA・システム管理や新興国債券の合理的根拠適合性など、内部統制の失敗パターンを具体的に確認できる",
        "投資運用業者の親会社取引では、形式的な利益相反規程ではなく、けん制機能と事後検証の実効性まで見る視点を得られる"
      ],
      audience: ["金融機関法務", "証券コンプライアンス", "内部監査・リスク管理", "商品・システム責任者"],
      audienceReason: "証券監視委の年度方針を、直近の不備事例と自社の改善アクションへ変換するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-governance-audit", "securities-monitoring-cyber-aml", "securities-monitoring-business-change-products", "securities-monitoring-underwriting-corporate-info", "securities-monitoring-asset-management-conflicts"],
      primarySourceIds: [policySourceId, casesSourceId, underwritingSourceId],
      whatChanged: "整理変更なし／証券監視委の令和8事務年度方針を、業態別の直近事例・自主規制ガイドラインと接続する実務解説を追加。"
    }
  ]);
})();
