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

  const topicSlug = "securities-monitoring-internal-controls";
  const sourcePolicyId = "source-sesc-securities-monitoring-policy-2026";
  const sourceCasesId = "source-sesc-securities-monitoring-cases-2026";
  const sources = [
    {
      id: sourcePolicyId,
      title: "令和8事務年度 証券モニタリング基本方針",
      type: "guideline",
      typeLabel: "証券監視委・監督／検査方針",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      importance: "最高",
      whyImportant: "2026年7月から2027年6月までの証券モニタリングについて、業態横断的事項と規模・業態別の重点検証項目を示す年度方針。金融商品取引業者等が内部管理態勢を点検する基準点になる。",
      topics: [topicSlug]
    },
    {
      id: sourceCasesId,
      title: "証券モニタリング概要・事例集（令和8年7月）",
      type: "guideline",
      typeLabel: "証券監視委・モニタリング事例集",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      importance: "最高",
      whyImportant: "実際の検査・モニタリングで把握した問題点を示し、年度方針の重点項目がどのような内部管理上の失敗と結び付くかを具体例から確認できる。",
      topics: [topicSlug]
    }
  ];

  const topic = {
    slug: topicSlug,
    title: "証券モニタリング・金融商品取引業者の内部管理",
    categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス", "AI・デジタル"],
    summary: "証券取引等監視委員会の年度モニタリング方針と事例集を基礎に、金融商品取引業者等が点検すべき顧客本位・適合性、サイバー／システムリスク、AML/CFT、ガバナンス、新商品・業態別内部管理を整理する。",
    lastUpdated: "2026-09-13",
    lastVerified: "2026-09-13",
    isNew: true,
    overview: [
      "証券取引等監視委員会は毎事務年度、金融商品取引業者等に対するモニタリングの重点項目を公表し、検査・モニタリングで把握した問題点を事例集として示している。",
      "令和8事務年度の方針は、顧客本位・適合性、システムリスク、AML/CFT、内部管理態勢の実効性を業態横断の重点とし、さらに証券会社・運用会社等の業態ごとに確認事項を具体化している。",
      "年度方針は新しい法的義務を一括して創設するものではないため、監督指針、自主規制規則、個別法令と区別しつつ、当局が実際に何を検証するかを内部管理へ落とし込む棚として扱う。"
    ],
    currentSummary: {
      facts: [
        "証券取引等監視委員会は2026年7月31日、2026年7月から2027年6月までを対象とする令和8事務年度の証券モニタリング基本方針を公表した。",
        "業態横断の重点項目には、顧客本位の業務運営・適合性、システムリスク管理、AML/CFT態勢、事業特性・規模に応じた内部管理態勢の実効性が含まれる。",
        "システムリスクでは、インターネット取引の不正アクセス・不正取引対策に加え、フロンティアAIによる脅威環境変化への短期対応の実施状況も重点確認対象とされる。",
        "規模・業態別では、大手証券会社グループの法人関係情報管理・引受審査、オンライン証券の本人確認等・売買審査、中小・地域証券の事業変化に応じた内部管理と新商品審査、投資運用業者の外部委託・利益相反管理等が重点として示されている。",
        "同日公表の証券モニタリング概要・事例集は、過去の検査・モニタリングで確認された問題点を示し、年度方針の重点項目を具体的な失敗事例と接続する資料になっている。"
      ],
      interpretations: [
        "年度方針はチェックリストとして機械的に消化するより、各重点項目を自社の規程、責任部署、モニタリング指標、内部監査、改善証跡へ対応付ける方が実効性を確認しやすい。",
        "新商品導入、M&A等による業態変更、システム拡張では、サービス開始時の適法性審査だけでなく、事業規模・顧客層・システム能力に見合う内部管理が継続しているかを再評価する必要がある。",
        "サイバー、フロンティアAI、AML/CFT、外部委託先管理は別々の専門領域に見えるが、経営関与、重要システム・委託先の特定、リスクベースの優先順位付け、監査・是正の証跡という共通の内部管理構造で接続する。"
      ],
      implications: [
        "令和8事務年度の重点項目を自社の業態・サービスに照らして対象／非対象に切り分け、責任部署、根拠規程、モニタリング指標、直近の改善実績を一覧化する。",
        "インターネット取引を扱う場合は、フィッシング耐性のある多要素認証、不正アクセス・不正取引の検知、本人確認、売買審査、顧客対応を横断して点検する。",
        "フロンティアAIの脅威環境変化に対して、優先対応すべきサービス・IT資産、パッチ適用、人員、ベンダー保守契約、サービス停止時の対応、外部連携を確認する。",
        "新商品・新サービスや事業モデル変更では、導入前の合理性・適合性・システム対応可能性を審査し、導入後も継続モニタリングする。",
        "投資運用業では、親会社・関係会社との取引、外部委託運用、利益相反管理について、取引時の承認だけでなく事後検証可能な記録と独立したチェック機能を確認する。"
      ],
      uncertain: [
        "証券モニタリング基本方針は重点事項を示すものであり、実際の検証範囲・深度は業態、規模、リスク、過去の問題、当局が把握する情報等によって異なる。",
        "年度途中の事故・行政処分・監督指針改正等によって重点の具体的な見方が変わり得るため、証券監視委・金融庁・自主規制機関の更新を継続確認する必要がある。"
      ]
    },
    issues: [
      {
        id: "securities-monitoring-best-interest-suitability",
        title: "顧客本位・適合性と新商品審査をどう点検するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "複雑・高リスク商品では想定顧客、商品理解に必要な説明、デジタルリテラシー等の顧客特性、短期乗換えの合理性を確認し、社内規程とモニタリングで実効性を検証する。新商品の導入時は販売対象としての合理性・適合性を具体的に審査する。",
        exception: "求められる説明や審査の内容は商品特性、顧客層、販売チャネル、自主規制規則等により異なる。",
        uncertain: "個別商品の適合性や説明水準は具体的な顧客・商品・販売態様に応じた判断が必要である。",
        sourceIds: [sourcePolicyId, sourceCasesId]
      },
      {
        id: "securities-monitoring-system-frontier-ai",
        title: "不正取引・システムリスクとフロンティアAI対応をどう管理するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "不正アクセス・不正取引対策を経営課題として扱い、認証・監視・顧客対応を整備するとともに、フロンティアAIによる脅威環境変化に対して重要資産の特定、パッチ、ベンダー保守、停止時対応、外部連携をリスクベースで進める。",
        exception: "具体的な技術対策・優先順位は扱うサービス、システム構成、脅威、監督指針等により変わる。",
        uncertain: "AIを利用した攻撃手法や当局の追加要請は変化が速く、最新の監督資料・業界要請を継続確認する必要がある。",
        sourceIds: [sourcePolicyId]
      },
      {
        id: "securities-monitoring-aml-outsourcing",
        title: "AML/CFTと外部委託先管理をどう実効化するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "AML/CFTガイドラインの対応事項を基礎に、取引モニタリング・フィルタリング、リスクに応じた低減措置、新技術の活用、外部委託先のAML/CFTリスク管理態勢の検証を行う。",
        exception: "対象業務・顧客・商品・委託構造に応じてリスクと必要措置は異なる。",
        uncertain: "疑わしい取引の傾向や技術・委託モデルの変化に応じ、検知ロジックと委託先評価を更新する必要がある。",
        sourceIds: [sourcePolicyId]
      },
      {
        id: "securities-monitoring-business-change-controls",
        title: "事業モデル変更・経営体制変更時の内部管理をどう再設計するか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "重大事故の有無だけで内部管理の十分性を判断せず、事業特性・規模・主要株主・経営体制・実際の業務拠点等に即してガバナンスと内部管理を再評価し、内部監査や自主規制機関等の指摘を経営が是正・再発防止へつなげる。",
        exception: "必要な統制の形は登録業務、会社規模、グループ構造、事業変化の内容により異なる。",
        uncertain: "M&Aや急速なサービス拡大時に必要となる管理水準は、個別の事業・システム・人員体制を踏まえて具体化する必要がある。",
        sourceIds: [sourcePolicyId, sourceCasesId]
      },
      {
        id: "securities-monitoring-business-type-controls",
        title: "業態別の重点項目を自社の統制へどう落とすか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "大手証券、オンライン証券、中小・地域証券、投資運用業等について示された業態別重点項目を、自社の業務と照合して対象項目を特定し、法人関係情報、引受審査、本人確認・売買審査、新商品、外部委託、利益相反等の統制へ落とし込む。",
        exception: "業態別重点は当該業態の全社に同じリスクがあることを意味せず、自社の実態に即した適用判断が必要。",
        uncertain: "年度内の検査事例や行政処分により、重点項目の具体的な着眼点がさらに明確化される可能性がある。",
        sourceIds: [sourcePolicyId, sourceCasesId]
      }
    ],
    sourceIds: [sourcePolicyId, sourceCasesId],
    practicalImpacts: [
      "証券モニタリング・当局対応",
      "顧客本位・適合性・商品審査",
      "サイバーセキュリティ・不正取引対策",
      "AML/CFT・委託先管理",
      "内部統制・内部監査",
      "M&A・事業モデル変更時の統制",
      "法人関係情報・引受審査",
      "投資運用・利益相反管理"
    ]
  };

  const articles = [
    {
      id: "article-sesc-securities-monitoring-policy-2026",
      title: "令和8事務年度 証券モニタリング基本方針",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-13",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      sourceType: "primary",
      sourceLabel: "一次資料・証券モニタリング／2026事務年度基本方針",
      status: "adopted",
      summary: "証券取引等監視委員会が2026年7月31日に公表した2026事務年度の証券モニタリング方針。顧客本位・適合性、システムリスク、AML/CFT、内部管理態勢の実効性を業態横断の重点とし、さらに証券会社・投資運用業者等の規模・業態別に重点検証項目を示す。",
      whyImportant: [
        "2026年7月から2027年6月まで、当局が金融商品取引業者等の何を重点的に見るかを一次資料で把握できる",
        "法令・監督指針の個別改正を、実際の検査・モニタリングで重視される内部管理事項へつなげられる",
        "サイバー、フロンティアAI、AML/CFT、顧客本位、業態別統制を年度のリスクベース点検計画へまとめられる"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "リスク管理", "情報セキュリティ", "経営管理"],
      audienceReason: "年度の当局対応・内部監査計画を作る際に、自社の業態に応じた重点項目を一次資料から確認するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス", "AI・デジタル"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-best-interest-suitability", "securities-monitoring-system-frontier-ai", "securities-monitoring-aml-outsourcing", "securities-monitoring-business-change-controls", "securities-monitoring-business-type-controls"],
      primarySourceIds: [sourcePolicyId],
      whatChanged: "新テーマ追加／2026事務年度の証券モニタリング重点を内部管理の点検軸として整理した。"
    },
    {
      id: "article-sesc-securities-monitoring-cases-2026",
      title: "証券モニタリング概要・事例集（令和8年7月）",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-13",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      sourceType: "primary",
      sourceLabel: "一次資料・証券モニタリング／概要・事例集",
      status: "adopted",
      summary: "金融商品取引業者等への検査・モニタリングで把握した問題点をまとめた証券監視委の事例集。基本方針だけでは抽象的な内部管理上の着眼点を、商品審査、システム、利益相反、ガバナンス等の実際の問題事例から確認できる。",
      whyImportant: [
        "年度方針の重点項目がどのような事実関係で問題化するかを執行・検査事例から確認できる",
        "内部規程の有無ではなく、審査・牽制・記録・経営関与が実際に機能しているかを自己点検する材料になる",
        "行政処分に至った事例を、新商品導入、業態変更、利益相反管理等の再発防止へ転用できる"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "リスク管理", "商品審査・営業管理"],
      audienceReason: "自社の内部管理を抽象的なルールだけでなく、当局が問題視した具体的な失敗パターンと比較するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-best-interest-suitability", "securities-monitoring-business-change-controls", "securities-monitoring-business-type-controls"],
      primarySourceIds: [sourceCasesId],
      whatChanged: "新テーマ追加／証券モニタリングの重点項目を具体的な検査・行政処分事例と接続した。"
    },
    {
      id: "article-tmi-securities-monitoring-policy-2026-part1",
      title: "Key Areas of Focus in the SESC’s Securities Monitoring for Program Year 2026: An Overview of the SESC’s Basic Policy (Part 1)",
      publisher: "TMI総合法律事務所",
      author: "岩井宏樹",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-13",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18778.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング2026・業態横断重点",
      status: "adopted",
      summary: "2026事務年度の証券モニタリング基本方針について、前年度との差分と2025事務年度の事例集を突き合わせながら、顧客本位・適合性、システムリスク、フロンティアAI、AML/CFT、内部管理態勢の実効性という業態横断の重点を実務へ落とす解説。",
      whyImportant: [
        "前年度方針との差分を示し、単なる方針の列挙ではなく2026年度に重みが置かれたポイントを読み取れる",
        "フィッシング耐性のある多要素認証やフロンティアAI対応について、重要資産の特定、パッチ、人員、ベンダー保守契約、停止時対応まで具体化している",
        "AML/CFTでは取引モニタリング・新技術だけでなく、外部委託先のリスク管理態勢の検証まで点検事項として整理している",
        "重大事故が起きていなくても、事業特性・規模に応じて内部管理が実効的かを見るという当局姿勢を把握できる"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "CISO・システムリスク", "AML/CFT担当", "内部監査"],
      audienceReason: "年度方針を規程・システム・委託先・監査の具体的な点検項目へ変換する担当者に向くため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス", "AI・デジタル"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-best-interest-suitability", "securities-monitoring-system-frontier-ai", "securities-monitoring-aml-outsourcing", "securities-monitoring-business-change-controls"],
      primarySourceIds: [sourcePolicyId, sourceCasesId],
      whatChanged: "整理変更なし／2026事務年度の業態横断重点を前年度差分・事例と接続した実務解説を追加。"
    },
    {
      id: "article-tmi-securities-monitoring-policy-2026-part2",
      title: "Key Areas of Focus in the SESC’s Securities Monitoring for Program Year 2026: An Overview of the SESC’s Basic Policy (Part 2)",
      publisher: "TMI総合法律事務所",
      author: "岩井宏樹",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-13",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18779.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング2026・業態別重点",
      status: "adopted",
      summary: "2026事務年度の証券モニタリングについて、規模・業態別の重点を前年度の検査事例と結び付けて解説。大手証券会社グループの法人関係情報・引受審査、オンライン証券の本人確認・売買審査、中小・地域証券の事業変化・新商品審査、投資運用業者の外部委託・利益相反管理等を具体化する。",
      whyImportant: [
        "同じ『金融商品取引業者』でも業態ごとに当局の重点が異なることを、実務の点検項目として切り分けられる",
        "M&A等で事業モデルを大きく変えた証券会社について、システム・法令対応・内部管理が事業拡大に追いつくかというリスクを具体例で示している",
        "新商品の合理的根拠適合性を導入前に具体的に審査し、導入後もモニタリングする必要性を行政処分事例と接続している",
        "投資運用業の親会社等との取引では、形式的な承認だけでなく、忠実義務・利益相反を事後検証できる統制の重要性を示している"
      ],
      audience: ["証券会社・運用会社の法務・コンプライアンス", "内部監査", "商品審査", "システム・事業企画", "利益相反管理担当"],
      audienceReason: "自社の規模・業態に応じて、当局が重点的に検証する統制を具体的な行政処分事例と照合するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-best-interest-suitability", "securities-monitoring-business-change-controls", "securities-monitoring-business-type-controls"],
      primarySourceIds: [sourcePolicyId, sourceCasesId],
      whatChanged: "整理変更なし／規模・業態別の重点を新商品審査、事業変更、利益相反等の検査事例へ落とす解説を追加。"
    }
  ];

  const currentSources = window.SOURCE_DATA || [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const nextSources = sources.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url)));
  if (nextSources.length) window.SOURCE_DATA = currentSources.concat(nextSources);

  const currentTopics = window.TOPIC_DATA || [];
  if (!currentTopics.some((item) => item && item.slug === topicSlug)) {
    window.TOPIC_DATA = currentTopics.concat(topic);
  }

  const currentArticles = window.ARTICLE_DATA || [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const nextArticles = articles.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url)));
  if (nextArticles.length) window.ARTICLE_DATA = currentArticles.concat(nextArticles);
})();
