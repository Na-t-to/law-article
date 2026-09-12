(() => {
  const topicSlug = "securities-business-monitoring-internal-controls";
  const policySource = "source-sesc-securities-monitoring-policy-2026";
  const casesSource = "source-sesc-securities-monitoring-cases-2026";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => item && !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: policySource,
      title: "令和8事務年度 証券モニタリング基本方針",
      type: "guideline",
      typeLabel: "一次資料・証券取引等監視委員会／年度モニタリング方針",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      importance: "最高",
      whyImportant: "2026年7月から2027年6月までの金融商品取引業者等に対する検査・モニタリングで、業態横断・規模業態別に何を重点検証するかを示す公式方針。顧客本位・適合性、システムリスク、AML/CFT、内部管理、業態別の新規重点を確認する基準点になる。",
      topics: [topicSlug]
    },
    {
      id: casesSource,
      title: "証券モニタリング概要・事例集（令和8年7月）",
      type: "guideline",
      typeLabel: "一次資料・証券取引等監視委員会／検査事例集",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      importance: "最高",
      whyImportant: "前事務年度の検査で認められた具体的な問題点、勧告・指摘、行政処分を確認できる。新商品・新サービス導入、海外グループシステム、販売勧誘、金融商品仲介、銀証間情報管理、AML/CFT等を内部管理態勢の実装へ落とす材料になる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "金融商品取引業・証券モニタリング／内部管理",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      summary: "証券取引等監視委員会の年度モニタリング方針と検査事例を基礎に、金融商品取引業者等の顧客本位・適合性、システムリスク、AML/CFT、業容変化、新商品審査、利益相反等の内部管理を追う。",
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      isNew: true,
      overview: [
        "証券モニタリング基本方針は、新しい法的義務を単独で創設する資料ではなく、証券取引等監視委員会が当該事務年度に金融商品取引業者等のどこを重点的に検証するかを示す運用上の基準点である。実務では、各検証事項を金商法、監督指針、自主規制規則、AML/CFTガイドライン等の根拠と結び付けて読む必要がある。",
        "令和8事務年度は、顧客の最善の利益・適合性、システムリスク、AML/CFT、内部管理態勢を業態横断で検証する。加えて、大手証券の法人関係情報・引受審査、ネット系証券の不正アクセス・取引時確認、準大手・地域証券の業容変化と新商品審査、投資運用業者の利益相反管理など、業態別の重点も示された。",
        "同日公表の証券モニタリング概要・事例集は、年度方針を抽象論のまま読まず、どの統制不備が実際に指摘・勧告へつながったかを照合するための資料として扱う。"
      ],
      currentSummary: {
        facts: [
          "令和8事務年度は2026年7月から2027年6月までであり、証券監視委は2026年7月31日に当該期間の証券モニタリング基本方針を公表した。",
          "業態横断の重点は、顧客の最善の利益・適合性を踏まえた投資勧誘、フロンティアAI等も踏まえたシステムリスク、AML/CFT、個社の特性・業容に応じた内部管理態勢の実効性である。",
          "規模・業態別では、大手証券会社グループの法人関係情報管理・引受審査、ネット系証券の不正アクセス・取引時確認・売買管理、準大手・地域証券の業容変化・新商品審査、投資運用業者の利益相反管理等が明示されている。",
          "令和8年7月の事例集には、海外グループシステムの日本法対応確認不足、NISA対象商品登録等の不備、トルコ・リラ建て債券の不適切勧誘、銀証間の非公開情報管理、AML/CFT・システムリスク管理の不備などが掲載されている。"
        ],
        interpretations: [
          "年度方針の差分は、法令改正の有無とは別に、当局が現場で何を深掘りするかを把握するシグナルとして使える。前年から文言が具体化・追加された項目は、根拠規範と自社統制の証跡を優先的に棚卸しする価値が高い。",
          "『規程がある』だけでは足りず、対象顧客設定、説明方法、新商品審査、委託先管理、システム変更管理、内部監査後の是正等について、実際の運用記録と経営陣の関与まで追える状態が重要になる。",
          "業容変更や主要株主・経営体制の変更、海外システムへの依存は、従来の統制が新しいビジネスモデルに追随しているかという観点で横断的に見直す必要がある。"
        ],
        implications: [
          "自社の登録業態・提供商品・販売チャネルごとに、令和8事務年度の検証事項、根拠規範、現行統制、証跡、未対応ギャップを一枚のマトリクスにする。",
          "新商品・新サービス、システム改修、M&Aや主要株主変更、外部委託開始などの変更イベントを、コンプライアンス・システム・顧客保護の再評価トリガーとして明示する。",
          "事例集の指摘事項を自社の三線管理に当てはめ、第一線の業務設計、第二線のモニタリング、内部監査、経営陣による是正フォローのどこで同種事故を止めるかを確認する。"
        ],
        uncertain: [
          "年度方針に記載された事項が全ての金商業者等に同じ強度で検証されるわけではなく、実際の検査・モニタリングは業態・規模・リスク特性等に応じたリスクベースで行われる。",
          "個別の法的義務や具体的な管理水準は、金商法、監督指針、自主規制規則、AML/CFTガイドライン等の各根拠を別途確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "securities-monitoring-customer-protection",
          title: "顧客本位・適合性をどの統制と証跡で示すか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "複雑・高リスク商品の対象顧客設定、顧客属性やデジタル・リテラシーに応じた説明、合理性のない短期乗換えの防止、社内ルールの遵守モニタリングを一連の販売管理として確認する。",
          exception: "具体的な説明方法・対象顧客設定・適合性判断は商品特性、顧客属性、販売チャネル、自主規制規則等によって異なる。",
          uncertain: "個社への検査でどの項目がどの深度で検証されるかはリスク特性等により異なる。",
          sourceIds: [policySource, casesSource]
        },
        {
          id: "securities-monitoring-system-cyber",
          title: "システムリスク・不正アクセス・AI脅威へどう備えるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "監督指針やフロンティアAIによる脅威変化等を踏まえ、認証・不正取引対策、脆弱性対応、変更管理、ベンダー管理、サービス停止時の備えを経営課題として管理する。",
          exception: "必要な技術対策は業態、サービス、システム構成、委託関係等により異なり、年度方針だけで具体的水準を確定しない。",
          uncertain: "サイバー脅威や当局要請は変化が速いため、監督指針・金融庁要請等の更新を継続確認する。",
          sourceIds: [policySource, casesSource]
        },
        {
          id: "securities-monitoring-business-change-product",
          title: "業容変化・新商品導入時に何を再審査するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "M&A、主要株主・経営体制変更、チャネル拡大、新商品・新サービス導入、システム変更等を契機に、法令適合性、合理的根拠適合性、システム対応、委託先管理、顧客対応を再評価する。",
          exception: "変更の規模・内容に応じて必要な審査範囲は異なるが、収益性だけで導入可否を決めず、統制が業容に追随しているかを確認する。",
          uncertain: "個別の商品・サービスについて必要となる審査項目は適用規則・商品特性等により異なる。",
          sourceIds: [policySource, casesSource]
        },
        {
          id: "securities-monitoring-business-specific-controls",
          title: "業態別重点を内部管理へどう落とすか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "大手証券の法人関係情報・引受審査、ネット系証券の取引時確認・売買管理、投資運用業者の利益相反、外資系の海外委託など、自社業態に明示された重点を既存統制・監査計画へ対応付ける。",
          exception: "年度方針は重点検証の全てを尽くすものではなく、記載のない法令遵守・顧客保護上のリスクが免除されるわけではない。",
          uncertain: "年度内の市場環境、事故・行政処分等により重点が実務上追加・深掘りされる可能性がある。",
          sourceIds: [policySource, casesSource]
        }
      ],
      sourceIds: [policySource, casesSource],
      practicalImpacts: ["証券会社・金融商品取引業者のコンプライアンス", "販売勧誘・適合性管理", "新商品審査", "システムリスク・サイバーセキュリティ", "AML/CFT", "内部監査・三線管理", "委託先・金融商品仲介業者管理"]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-sesc-securities-monitoring-policy-2026",
      title: "令和8事務年度 証券モニタリング基本方針",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-12",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      sourceType: "primary",
      sourceLabel: "一次資料・年度モニタリング方針",
      status: "adopted",
      summary: "2026年7月から2027年6月までの証券モニタリングについて、顧客の最善の利益・適合性、システムリスク、AML/CFT、内部管理態勢を業態横断の重点とし、大手・外資・ネット系・地域証券、投資運用、第二種、登録金融機関等ごとの検証事項も示した公式方針。",
      whyImportant: ["当年度に証券監視委が何を重点的に見るかを一次資料から把握できる", "前年との差分を内部監査・コンプライアンス計画へ反映する基準点になる", "業態横断と業態別を分け、自社に関係する重点を優先順位付けできる"],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "リスク管理", "システム・情報セキュリティ"],
      audienceReason: "当局の検証重点を根拠規範と自社統制へ対応付け、年度の点検・監査計画を更新するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-customer-protection", "securities-monitoring-system-cyber", "securities-monitoring-business-change-product", "securities-monitoring-business-specific-controls"],
      primarySourceIds: [policySource],
      whatChanged: "新規テーマ作成／令和8事務年度の証券モニタリング重点を、顧客保護・システム・業容変化・業態別内部管理の4論点に整理した。"
    },
    {
      id: "article-sesc-securities-monitoring-cases-2026",
      title: "証券モニタリング概要・事例集（令和8年7月）",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-12",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      sourceType: "primary",
      sourceLabel: "一次資料・検査事例集",
      status: "adopted",
      summary: "令和7事務年度の証券モニタリングで把握した問題点や勧告・指摘をまとめた事例集。海外グループシステムの日本法対応不足、NISA対象商品登録等の不備、外国債券の不適切勧誘、金融商品仲介業者管理、銀証間の非公開情報管理、AML/CFT・システムリスク管理など、抽象的な内部管理要求がどこで破綻したかを具体例で確認できる。",
      whyImportant: ["年度方針の抽象語を実際の検査事例へ対応付けられる", "新商品・新サービスや海外システム導入時の変更管理不足が複数の問題につながる構造を確認できる", "販売勧誘だけでなく委託先管理、情報管理、AML/CFT、システム、経営陣の関与まで一体で点検できる"],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "商品審査", "システム・リスク管理"],
      audienceReason: "自社点検を規程の有無で終わらせず、実際の指摘事例に照らして運用・証跡・経営管理の弱点を確認するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-customer-protection", "securities-monitoring-system-cyber", "securities-monitoring-business-change-product", "securities-monitoring-business-specific-controls"],
      primarySourceIds: [casesSource],
      whatChanged: "新規テーマ補強／前事務年度の検査事例を加え、年度方針の各重点を具体的な統制不備・行政対応へ接続した。"
    },
    {
      id: "article-tmi-securities-monitoring-policy-2026-part1",
      title: "【金商法業規制ブログ】令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委「令和8事務年度 証券モニタリング基本方針」の解説～（第1回）",
      publisher: "TMI総合法律事務所",
      author: "岩井 宏樹",
      publishedAt: "2026-08-07",
      collectedAt: "2026-09-12",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18668.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング・業態横断重点",
      status: "adopted",
      summary: "令和8事務年度方針の業態横断項目を前年方針・事例集と比較し、顧客の最善の利益・適合性、フィッシング耐性のある認証等の不正アクセス対策、フロンティアAIに伴う脅威変化、2026年改正AML/CFTガイドライン、内部管理態勢の実効性を実務上の確認事項へ落とした解説。",
      whyImportant: ["前年からの文言差分を示し、今年どこが具体化・重点化されたかを読み取りやすい", "フロンティアAI対応、AML/CFT、サイバー対策を年度方針と各一次資料へ接続している", "重大事故の有無にかかわらず個社の特性・業容に応じた内部管理の実効性が検証される点を実務的に整理している"],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "システム・情報セキュリティ", "AML/CFT担当"],
      audienceReason: "当局方針の前年差分と関連ガイドラインをまとめて確認し、点検項目へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-customer-protection", "securities-monitoring-system-cyber"],
      primarySourceIds: [policySource, casesSource],
      whatChanged: "新規テーマ補強／業態横断の検証事項について、前年との差分と関連一次資料を踏まえた実務上の優先順位を追加した。"
    },
    {
      id: "article-tmi-securities-monitoring-policy-2026-part2",
      title: "【金商法業規制ブログ】令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委「令和8事務年度 証券モニタリング基本方針」の解説～（第2回）",
      publisher: "TMI総合法律事務所",
      author: "岩井 宏樹",
      publishedAt: "2026-08-12",
      collectedAt: "2026-09-12",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18670.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング・業態別重点",
      status: "adopted",
      summary: "令和8事務年度方針の規模・業態別重点を、前年度の具体的な勧告・行政処分と結び付けて解説する。大手証券の法人関係情報・引受審査、ネット系証券の不正アクセス・取引時確認、準大手・地域証券の業容変化・新商品審査、投資運用業者の利益相反管理等を、実際の統制不備から読み解ける。",
      whyImportant: ["業態別重点がどの実例を背景にしているかを示し、形式的なチェックリスト化を避けやすい", "M&Aや業務拡大後に内部管理が追随しなかった事例から、変更管理のトリガーを設計できる", "新商品導入時の合理的根拠適合性や投資運用業者の親会社取引など、業態固有の論点を具体化している"],
      audience: ["証券会社・投資運用業者の法務・コンプライアンス", "内部監査", "商品審査", "経営管理・リスク管理"],
      audienceReason: "自社業態に関係する当局重点を、具体的な行政処分・検査指摘と照合して統制へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-business-change-product", "securities-monitoring-business-specific-controls"],
      primarySourceIds: [policySource, casesSource],
      whatChanged: "新規テーマ補強／業態別重点を、前年度の検査・行政処分事例と結び付け、業容変化・新商品審査・利益相反等の実装論点を追加した。"
    }
  ]);
})();
