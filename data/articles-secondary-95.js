(() => {
  const topicSlug = "securities-monitoring-2026";
  const policySourceId = "source-sesc-securities-monitoring-policy-2026";
  const primaryArticleId = "article-sesc-securities-monitoring-policy-2026";
  const tmiArticleId = "article-tmi-securities-monitoring-policy-2026-part2";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: policySourceId,
      title: "令和8事務年度 証券モニタリング基本方針",
      type: "guidance",
      typeLabel: "一次資料・証券取引等監視委員会モニタリング方針",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      importance: "高",
      whyImportant: "2026年7月から2027年6月までの証券モニタリングについて、業態横断的な重点事項と業態別の検証事項を示す公式資料。顧客本位・適合性、システムリスク、AML/CFT、内部管理の実効性に加え、業容・株主・経営体制の変化、法人関係情報、引受審査、ネット証券の取引時確認、投資運用業者の利益相反管理など、当局が当年度に重点確認する領域を把握できる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "証券モニタリング・金商業者の内部管理／2026事務年度",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      summary: "証券取引等監視委員会の令和8事務年度証券モニタリング基本方針から、金商業者等に対する業態横断・業態別の重点検証事項を、社内のリスク評価・内部管理・監査計画へ落とす観点で整理する。",
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      isNew: true,
      overview: [
        "証券取引等監視委員会は毎事務年度、金融商品取引業者等に対するモニタリングの重点を基本方針として公表している。令和8事務年度は2026年7月から2027年6月までを指す。",
        "2026事務年度の業態横断的な検証事項は、顧客の最善の利益・適合性、システムリスク、AML/CFT、内部管理態勢の実効性の4本柱で構成される。",
        "業態別では、大手証券の法人関係情報・引受審査、ネット系証券のサイバーセキュリティ・取引時確認、準大手・地域証券の業容変化と新商品審査、投資運用業者の利益相反管理など、直近事案を踏まえた重点が明示されている。"
      ],
      currentSummary: {
        facts: [
          "令和8事務年度の証券モニタリングは、顧客の最善の利益を勘案した業務運営・適合性、システムリスク、AML/CFT、内部管理態勢の実効性を業態横断的に検証する。",
          "システムリスクでは、フロンティアAIの発展に伴う脅威変化も踏まえたサイバーセキュリティを含む管理状況が重点検証事項とされている。",
          "主要株主・経営体制の変更に伴うビジネスモデル変更、本店所在地と実質的な業務運営拠点の乖離などは、ガバナンスの有効性の観点から検証対象となる。",
          "大手証券会社グループでは売買審査、法人関係情報、引受審査等、ネット系証券では不正アクセス対策、取引時確認、売買管理、外部委託先管理等が重点として掲げられている。"
        ],
        interpretations: [
          "基本方針は新たな法令上の義務を創設する資料ではないが、当局が当年度にどの既存規制・管理態勢を重点的に検証するかを示すため、法令遵守だけでなく内部監査・モニタリング計画の優先順位付けに使う価値が高い。",
          "2025事務年度から記載が具体化・追加された項目は、直近の行政処分・検査事例や市場環境の変化を反映した重点シグナルとして読み、該当業態では既存規程があるかだけでなく運用実効性を点検するのが実務的である。"
        ],
        implications: [
          "コンプライアンス・内部監査部門は、自社業態に該当する重点検証事項を年間監査・モニタリング計画へ対応付ける。",
          "新商品・新サービス、M&Aによる株主変更、業務拠点の変更、外部委託拡大などビジネスモデルが動いた場合は、従来の内部管理態勢が新しい業容に追随しているかを再評価する。",
          "ネット取引では、サイバー対策と取引時確認・売買管理を別々の規程確認で終わらせず、不正アクセス・不正取引の一連のシナリオとして検証する。",
          "投資運用業者は、親会社等との取引について、事前の利益相反管理だけでなく、取引の妥当性を事後検証できる証跡・牽制機能も確認する。"
        ],
        uncertain: [
          "基本方針は検証事項を網羅的・画一的に適用するものではなく、実際の検査・モニタリングの深度や対象は各社の業態、規模、リスク特性、直近の事象によって異なる。"
        ]
      },
      issues: [
        {
          id: "securities-monitoring-cross-sector-2026",
          title: "2026事務年度の業態横断的な重点検証事項は何か",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "顧客の最善の利益・適合性、システムリスク管理、AML/CFT、内部管理態勢の実効性が4本柱であり、社内ルールの存在だけでなく遵守・モニタリングの実効性まで検証対象となる。",
          exception: "重点項目であっても全業者へ同じ深度で一律に検査されるわけではなく、リスク特性に応じたモニタリングが前提となる。",
          uncertain: "個社ごとの具体的な検証範囲・深度は、業態・規模・リスク評価等により異なる。",
          sourceIds: [policySourceId]
        },
        {
          id: "securities-monitoring-business-model-change",
          title: "株主・経営体制・業容の変化は内部管理上どう見られるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "主要株主や経営体制の変更に伴うビジネスモデル変更、実質的業務拠点の変化等がある場合、変更後の業容に応じた実効的な内部管理・ガバナンスが構築されているかが検証される。",
          exception: "変更自体が問題なのではなく、変更後の業務内容・リスクに管理態勢が追随しているかが問題となる。",
          uncertain: "必要な管理態勢の具体的水準は変更内容と各社の規模・業務特性による。",
          sourceIds: [policySourceId]
        },
        {
          id: "securities-monitoring-broker-priorities",
          title: "証券会社ではどの内部管理項目が重点化されているか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "大手証券では売買審査・法人関係情報・引受審査、ネット系証券ではサイバーセキュリティ・取引時確認・売買管理・外部委託先管理、準大手・地域証券では業容変化に応じた管理、新商品審査・事後モニタリング等が重点とされる。",
          exception: "同じ第一種金融商品取引業者でも、実際の重点はビジネスモデルや顧客層、提供商品、販売チャネルによって異なる。",
          uncertain: "当年度中の事故・行政処分・市場環境の変化により、モニタリング上の重点が追加的に変化する可能性がある。",
          sourceIds: [policySourceId]
        },
        {
          id: "securities-monitoring-investment-management-conflicts",
          title: "投資運用業者の利益相反管理では何が見られるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "投資者の利益より親会社等の都合を優先した取引など忠実義務違反行為の有無に加え、親会社等との取引の妥当性を事後的に検証できる態勢、運用実態・運用管理態勢が検証対象となる。",
          exception: "利害関係者との取引自体が一律に禁止されるという整理ではなく、忠実義務・利益相反管理と検証可能性が問題となる。",
          uncertain: "牽制機能・証跡・審査プロセスの必要水準は、運用対象、グループ構造、取引頻度等に応じて異なる。",
          sourceIds: [policySourceId]
        },
        {
          id: "securities-monitoring-practical-translation",
          title: "基本方針を社内の監査・モニタリング計画へどう落とすか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "自社の業態別重点と業態横断4項目を既存の規程・統制・監査項目へマッピングし、直近の業務変更や行政処分事例を踏まえて、形式整備より運用実効性・事後検証可能性を優先して点検する。",
          exception: "基本方針は個社ごとの具体的な検査チェックリストではないため、記載項目をそのまま一律の社内チェックリストへ転記するのではなく、自社リスクへ翻訳する必要がある。",
          uncertain: "具体的な監査頻度、サンプル数、証跡水準等は各社のリスク評価・内部監査設計による。",
          sourceIds: [policySourceId]
        }
      ],
      sourceIds: [policySourceId],
      practicalImpacts: ["コンプライアンス年間計画", "内部監査・モニタリング計画", "新商品・新サービス審査", "法人関係情報・引受審査", "サイバーセキュリティ・取引時確認", "外部委託先管理", "利益相反管理", "M&A・株主変更後のガバナンス点検"]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: primaryArticleId,
      title: "「令和8事務年度 証券モニタリング基本方針」について",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-12",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      sourceType: "primary",
      sourceLabel: "一次資料・令和8事務年度証券モニタリング基本方針",
      status: "adopted",
      summary: "証券取引等監視委員会が2026年7月から2027年6月までの証券モニタリングについて、業態横断的な4つの重点と、証券会社・投資運用業者・登録金融機関等の業態別検証事項を示した基本方針。",
      whyImportant: ["顧客本位・適合性、システムリスク、AML/CFT、内部管理の実効性という当年度の業態横断重点を公式資料で確認できる", "株主・経営体制や業容の変化、新商品・新サービス、外部委託拡大など、事業変更時に内部管理が追随しているかを当局が重視することが分かる", "大手証券、ネット系証券、準大手・地域証券、投資運用業者など業態ごとの重点を年間監査・モニタリング計画へ落とす基礎になる"],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "リスク管理", "経営企画", "証券・運用会社の事業部門"],
      audienceReason: "当年度の検査・モニタリングで何が重点的に確認されるかを把握し、自社の内部管理・監査計画の優先順位を調整するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-cross-sector-2026", "securities-monitoring-business-model-change", "securities-monitoring-broker-priorities", "securities-monitoring-investment-management-conflicts", "securities-monitoring-practical-translation"],
      primarySourceIds: [policySourceId],
      whatChanged: "新規整理／令和8事務年度の証券モニタリング重点を、業態横断事項と業態別事項に分け、内部管理・監査計画へ落とすための棚を追加。"
    },
    {
      id: tmiArticleId,
      title: "令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委「令和8事務年度 証券モニタリング基本方針」の解説～（第2回）",
      publisher: "TMI総合法律事務所",
      author: "岩井 宏樹",
      publishedAt: "2026-08-12",
      collectedAt: "2026-09-12",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18670.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所ブログ・金融レギュレーション／証券モニタリング",
      status: "adopted",
      summary: "令和8事務年度証券モニタリング基本方針のうち業態別の重点を、前年度からの差分と直近の行政処分・自主規制ガイドラインに結び付けて解説。大手証券の法人関係情報・引受審査、ネット系証券のサイバー・取引時確認、準大手等の業容変化・新商品審査、投資運用業者の利益相反管理を具体的に読む。",
      whyImportant: ["基本方針の列挙をそのまま要約するのではなく、2025事務年度から記載が追加・具体化された項目を抽出している", "2025～2026年の行政処分・検査事例や日本証券業協会の引受審査ガイドラインと接続し、なぜその項目が重点化されたかを理解できる", "業容変更、新商品導入、親会社との取引、不正アクセス対応などを、規程の有無ではなく内部管理態勢の実効性という観点へ落としている"],
      audience: ["証券会社の法務・コンプライアンス", "投資運用業者", "内部監査", "リスク管理", "新商品・事業開発担当"],
      audienceReason: "当局方針の差分を直近事例と結び付け、自社のどの統制・審査・監査項目を優先的に見直すべきか判断するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-business-model-change", "securities-monitoring-broker-priorities", "securities-monitoring-investment-management-conflicts", "securities-monitoring-practical-translation"],
      primarySourceIds: [policySourceId],
      whatChanged: "整理変更なし／2026事務年度の業態別重点を前年度との差分・直近事案へ接続する代表的な実務解説を追加。"
    }
  ]);
})();