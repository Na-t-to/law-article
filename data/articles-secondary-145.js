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

  const articles = [
    {
      id: "article-nishimura-electronic-data-production-order-2025",
      title: "電子データ提供命令制度の導入 ～刑事訴訟法改正に伴う企業法務上の留意点～",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "河合 優子・北條 孝佳・山本 大成",
      publishedAt: "2025-06-12",
      collectedAt: "2026-09-15",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/data_protection_250612",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／刑事訴訟法・電磁的記録提供命令",
      status: "adopted",
      summary: "2025年改正刑事訴訟法で創設された電磁的記録提供命令について、従来の記録命令付差押えとの違いから、記録媒体への記録・移転とオンライン移転、命令拒絶事由、移転データの原状回復、秘密保持命令、準抗告、法人を含む罰則まで体系的に整理する。特に、職務上の秘密による拒絶可能性、被疑者である事業者が自己負罪を理由に拒めないとの整理、秘密保持命令下で顧客等が自ら不服申立てできない場面では被処分者側に顧客の権利も考慮した対応が期待される点を示し、企業のデータ提供対応を法的手続の側から補強する。",
      whyImportant: [
        "『記録』と『移転』を区別し、オンライン移転を含む提供方法と、移転元データの消去・原状回復の仕組みまで追えるため、単なる令状対応より細かなデータ管理上の影響を把握できる",
        "公務上・職務上の秘密による命令拒絶事由や、被疑者である事業者が自己負罪を理由に拒めないとの整理を示し、命令受領時に『応じる／争う』の入口判断を具体化できる",
        "秘密保持命令によって顧客本人が不服申立ての機会を得にくい場合に、被処分者側が顧客等の権利も考慮して準抗告を検討するという観点を提示している",
        "正当な理由のない命令違反について1年以下の拘禁刑又は300万円以下の罰金と法人両罰規定があることを確認でき、法務・IT・経営へのエスカレーションの必要性を法的リスクから理解できる"
      ],
      audience: [
        "企業法務",
        "危機管理・コンプライアンス担当",
        "個人情報・データガバナンス担当",
        "クラウド・SaaS・通信事業者",
        "情報システム・セキュリティ担当"
      ],
      audienceReason: "捜査機関から顧客・取引先データの提供を求められた場合に、提供方法、拒絶事由、秘密保持、準抗告、原状回復、罰則を一連の法的対応として確認するため。",
      categories: [
        "危機管理・コンプライアンス",
        "個人情報",
        "AI・デジタル",
        "情報セキュリティ",
        "契約"
      ],
      relatedTopics: ["law-enforcement-data-production"],
      relatedIssues: [
        "electronic-record-production-order-scope",
        "electronic-record-secrecy-order",
        "electronic-record-notification-contract",
        "electronic-record-quasi-appeal-business-continuity"
      ],
      primarySourceIds: [
        "source-moj-criminal-procedure-it-2025",
        "source-egov-criminal-procedure-electronic-record-2026"
      ],
      reformEventId: "criminal-procedure-electronic-record-order-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-moj-criminal-procedure-it-2025"],
      legacyReformInference: false,
      whatChanged: "バックフィル／電磁的記録提供命令について、命令拒絶事由、記録と移転の区別、原状回復、法人両罰、顧客等の権利を踏まえた準抗告という法的手続の観点を補強した。"
    }
  ];

  let currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (existingIds.has(article.id) || existingUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    existingIds.add(article.id);
    existingUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();

(() => {
  const TOPIC = "advertising-display-control";
  const ISSUE = "display-environmental-label-greenwashing";
  const SOURCE_CAA = "source-caa-environmental-label-survey-20260820";
  const SOURCE_ENV = "source-moe-environmental-claims-guideline-20260331";
  const ARTICLE_MHM = "article-mhm-environmental-label-greenwashing-20260909";
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
  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));
  const addUniqueMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(values || [])].filter(Boolean)));

  const sourceAdditions = [
    {
      id: SOURCE_CAA,
      title: "環境ラベルに関する実態調査報告書",
      type: "report",
      typeLabel: "消費者庁・実態調査報告書",
      authority: "消費者庁",
      publishedAt: "2026-08-20",
      url: "https://www.caa.go.jp/notice/entry/047213/",
      importance: "高",
      whyImportant: "実際の環境ラベル139種類、事業者・団体等へのヒアリング、一般消費者1,000名への調査を基に、環境ラベルの対象範囲、原材料の使用割合・削減率、実証データ、抽象的な環境訴求、第三者認証との誤認について景品表示法上の考え方を具体化した消費者庁の公式報告書。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_ENV,
      title: "環境表示ガイドライン（令和8年3月改定版）",
      type: "guideline",
      typeLabel: "環境省・環境表示ガイドライン",
      authority: "環境省",
      publishedAt: "2026-03-31",
      url: "https://www.env.go.jp/press/press_03660.html",
      importance: "高",
      whyImportant: "自己宣言による環境表示を行う事業者・団体を主な対象として、望ましい環境情報提供の基本項目を整理し、グリーンウォッシュ対策の国際動向も踏まえて2026年3月に改定された公式ガイドライン。",
      topics: [TOPIC]
    }
  ];
  let currentSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  sourceAdditions.forEach((source) => {
    if (sourceIds.has(source.id) || sourceUrls.has(normalizeUrl(source.url))) return;
    currentSources = currentSources.concat([source]);
    sourceIds.add(source.id);
    sourceUrls.add(normalizeUrl(source.url));
  });
  window.SOURCE_DATA = currentSources;

  const articles = [
    {
      id: ARTICLE_MHM,
      title: "「環境ラベルに関する実態調査報告書」が示すグリーンウォッシュ対応を踏まえた景品表示法上の留意点",
      publisher: "森・濱田松本法律事務所外国法共同事業",
      author: "川端 健太・嶋村 直登・一井 梨緒",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-23",
      url: "https://org-www.morihamada.com/ja/insights/newsletters/145456",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／環境ラベル・グリーンウォッシュ",
      status: "adopted",
      summary: "消費者庁の2026年8月20日『環境ラベルに関する実態調査報告書』を基礎に、環境ラベルが景品表示法上の優良誤認表示となり得る場面を、①訴求する対象範囲、②環境配慮原材料等の使用割合・削減率、③実証データによる裏付け、④第三者認証との誤認、⑤『エコ』『グリーン』等の抽象的表示に分けて整理する。さらに、表示担当部門だけでなく、製造・調達・環境部門等との間で表示内容と根拠資料を確認するプロセスを整備することまで実務対応へ落としている。",
      whyImportant: [
        "包装だけが環境配慮対象であるのに商品全体が環境配慮されているように見える場合など、表示対象の範囲と一般消費者が受ける印象のずれを具体例で確認できる",
        "『バイオマス素材使用』『プラスチック削減』等について、使用割合や削減率を明示しない場合に消費者が実際より大きな環境効果を想起するリスクを、消費者庁調査の数値と結び付けて整理している",
        "環境効果を支える実証データを保管し、表示内容と製造・使用条件等が対応しているかを確認するとともに、URLや二次元コードで根拠情報へアクセスできるようにする実務まで示している",
        "自己認証・自社基準を第三者認証のように見せないこと、抽象的な『エコ』『グリーン』表示には具体的内容を併記することを含め、グリーンウォッシュ点検項目として横断的に使える"
      ],
      audience: ["企業法務", "広告・マーケティング担当", "商品企画・パッケージ担当", "サステナビリティ・環境担当", "危機管理・コンプライアンス担当"],
      audienceReason: "環境配慮を訴求する商品・サービスのラベル、包装、ウェブ表示を、一般消費者の受ける印象と裏付け資料の両面から景品表示法対応として再点検するため。",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: [TOPIC],
      relatedIssues: [ISSUE, "display-undemonstrated-ad-review"],
      primarySourceIds: [SOURCE_CAA, SOURCE_ENV],
      legacyReformInference: false,
      whatChanged: "環境ラベルについて、表示対象、使用割合・削減率、実証データ、第三者認証との区別、抽象的環境訴求というグリーンウォッシュ点検項目を景品表示法の既存棚へ追加した。"
    }
  ];
  let currentArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (articleIds.has(article.id) || articleUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    articleIds.add(article.id);
    articleUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const currentSummary = topic.currentSummary || {};
    const issues = Array.isArray(topic.issues) ? topic.issues.slice() : [];
    if (!issues.some((issue) => issue && issue.id === ISSUE)) {
      issues.push({
        id: ISSUE,
        title: "環境ラベル・環境配慮表示をどう点検するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "環境ラベルは文言の真偽だけでなく表示全体から一般消費者が受ける印象を確認し、環境配慮の対象範囲、原材料等の使用割合・削減率、効果を裏付ける実証データ、第三者認証の有無、抽象的な環境訴求の具体的内容を明確にする。",
        exception: "自己認証や自社基準による環境ラベル自体が直ちに問題となるわけではないが、第三者認証と誤認させず、表示内容に対応した根拠と適合基準等を明確にする必要がある。",
        uncertain: "優良誤認表示への該当性は、個々のラベルだけでなく商品・包装・ウェブサイト等の表示全体、実際の環境効果、根拠資料、一般消費者が受ける認識を踏まえて個別に判断される。",
        sourceIds: [SOURCE_CAA, SOURCE_ENV]
      });
    }
    return {
      ...topic,
      lastUpdated: "2026-09-23",
      lastVerified: "2026-09-23",
      overview: addUnique(topic.overview, "2026年8月の消費者庁調査は、環境ラベルの表示対象、使用割合・削減率、実証データ、第三者認証との誤認、抽象的な環境訴求について景品表示法上の留意点を具体化しており、環境表示を広告審査の独立したチェック項目として扱う必要がある。"),
      currentSummary: {
        ...currentSummary,
        facts: addUniqueMany(currentSummary.facts, [
          "消費者庁は2026年8月20日、実際の環境ラベル139種類、事業者・団体等へのヒアリング、一般消費者1,000名への調査を基に『環境ラベルに関する実態調査報告書』を公表した。",
          "同報告書は、環境配慮の対象範囲、原材料等の使用割合・削減率、実証データ、第三者認証との誤認、『エコ』『グリーン』等の抽象的表示について、景品表示法上問題となり得る場面と事業者が採るべき対応を示した。",
          "環境省は2026年3月31日、自己宣言による環境表示を行う事業者等を主な対象とする『環境表示ガイドライン』を改定し、グリーンウォッシュ対策を踏まえた環境情報提供の基本項目を更新した。"
        ]),
        interpretations: addUniqueMany(currentSummary.interpretations, [
          "環境配慮表示は、文言が事実であるかだけでなく、ラベルの配置、商品・包装との関係、数値の示し方、認証らしい外観等を含む表示全体から一般消費者がどの程度の環境効果を想起するかを基準に審査する必要がある。",
          "自己認証・自社基準のラベルでは、第三者機関による認証であるとの誤認を避けるため、認証主体・適合基準・自己宣言であることを必要に応じて明示することが重要である。"
        ]),
        implications: addUniqueMany(currentSummary.implications, [
          "環境ラベルを棚卸しし、訴求対象が商品本体・包装・工程等のどこか、使用割合・削減率を数値で示す必要がないかを広告審査時に確認する。",
          "環境効果を裏付ける実証データと表示内容・製造条件・使用条件の対応を確認し、表示担当だけでなく製造・調達・環境部門から根拠資料を取得・保存する。",
          "第三者認証でないラベルは『認証』や認定番号等によって第三者認証のように見えないか確認し、『エコ』『グリーン』等の抽象的表示には具体的な環境配慮内容を併記する。"
        ]),
        uncertain: addUnique(currentSummary.uncertain, "環境ラベルに関する優良誤認表示の判断は表示全体と個別の商品・サービスの実態に左右されるため、今後の消費者庁の指導・措置命令等の執行例を継続確認する。")
      },
      issues,
      sourceIds: addUniqueMany(topic.sourceIds, [SOURCE_CAA, SOURCE_ENV])
    };
  });
})();
