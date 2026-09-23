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
  const additions = [
    {
      id: "article-amt-carveout-ma-practical-20250804",
      title: "AMT戦略的カーブアウトM&A ～各種法分野における実務上の留意点～",
      publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
      author: "中島真嗣／福田淳／栗田聡／佐賀洋之",
      publishedAt: "2025-08-04",
      collectedAt: "2026-09-24",
      url: "https://www.amt-law.com/insights/trending-news/trending-news_20250804001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／カーブアウトM&A",
      status: "adopted",
      summary: "カーブアウトM&Aを、検討開始からクロージング後のTSA期間までのプロジェクトとして整理する実務解説。カーブアウト特有の負担として、論点の広さ、売主側の準備・実行負担、スタンドアローンイシュー、Day 1後の移行を挙げ、典型的ストラクチャーの比較、Seller's DDによる独立運営可能性の検証、付随契約・TSAのサービス不足や追加コストのリスクまで具体化している。",
      whyImportant: [
        "カーブアウトを最終契約の交渉だけでなく、初期検討、ストラクチャー、Seller's DD、クロージング、TSA終了まで連続するプロジェクトとして把握できる",
        "対象事業が売主グループから独立して運営できるかというスタンドアローンイシューを、売主側の初期検討から最終契約・実行まで継続して解くべき論点として整理している",
        "TSAで必要なサービスが漏れた場合の事業運営支障、責任・追加コストを明示し、TSA対象外サービスの内製化又は買主側提供まで準備するというDay 1後の実装視点がある"
      ],
      audience: ["企業法務", "M&A担当", "経営企画", "事業部門", "PMI・IT・人事担当"],
      audienceReason: "非中核事業や子会社の売却で、売主側の準備、ストラクチャー、分離論点、Seller's DD、TSAを一つの工程として設計するため。",
      categories: ["M&A", "契約", "会社法・ガバナンス"],
      relatedTopics: ["carveout-ma-business-sale"],
      relatedIssues: [
        "carveout-ma-seller-preparation-governance",
        "carveout-ma-structure-transfer",
        "carveout-ma-standalone-sellers-dd",
        "carveout-ma-tsa-day1"
      ],
      primarySourceIds: [
        "source-meti-business-reorganization-guideline-2020",
        "source-companies-act-current",
        "source-labor-contract-succession-act",
        "source-mhlw-business-transfer-guideline-20260120"
      ],
      legacyReformInference: false,
      whatChanged: "新テーマ作成／カーブアウトM&Aの検討開始からストラクチャー、Seller's DD、スタンドアローンイシュー、TSA・Day 1移行までを一続きで追える実務解説を追加した。"
    },
    {
      id: "article-not-seller-side-carveout-ma-20240207",
      title: "近時のトレンドを踏まえた売主目線のM&Aのポイント",
      publisher: "長島・大野・常松法律事務所",
      author: "松本渉／逵本麻佑子",
      publishedAt: "2024-02-07",
      collectedAt: "2026-09-24",
      url: "https://www.nagashima.com/features/carveout_manda/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／売主側M&A・カーブアウト",
      status: "adopted",
      summary: "売主側から仕掛けるM&Aを、相対・入札のプロセス選択、Information MemorandumやSeller's DD等の事前準備、カーブアウトでのスタンドアローンイシュー、事業譲渡と会社分割の選択、知財・許認可、残存持分と株主間契約、競争法、表明保証保険まで横断して解説する。特に、共用IT・バックオフィス・保険・年金・ライセンス・不動産等を切り分け、TSA等の付随契約で移行期間を設計する売主側の実務が具体的である。",
      whyImportant: [
        "買主のDD対応だけではなく、売主が相対・入札を選び、情報資料・プロセスレター・ストラクチャー・Seller's DDを準備するという売主起点の案件設計を整理している",
        "会社分割と事業譲渡の違いを、包括承継・個別承継だけでなく、債権者保護手続、迅速性、許認可、海外拠点等の実行上の差へつないでいる",
        "IT、バックオフィス、年金・保険、グループ内取引、ライセンス、不動産等のスタンドアローンイシューをSeller's DDで検出し、TSA・ライセンス等の付随契約へ落とす流れが具体的である",
        "売主が持分を残す場合のガバナンス・Exit条項や競争法上の共同支配まで扱い、単純な100％売却ではないカーブアウトにも使える"
      ],
      audience: ["企業法務", "M&A担当", "経営企画", "取締役会事務局", "PMI・事業部門"],
      audienceReason: "事業売却を売主側から企画し、入札・相対、Seller's DD、分離・移行、残存持分まで案件条件へ落とすため。",
      categories: ["M&A", "契約", "会社法・ガバナンス"],
      relatedTopics: ["carveout-ma-business-sale"],
      relatedIssues: [
        "carveout-ma-seller-preparation-governance",
        "carveout-ma-structure-transfer",
        "carveout-ma-standalone-sellers-dd",
        "carveout-ma-tsa-day1"
      ],
      primarySourceIds: [
        "source-meti-business-reorganization-guideline-2020",
        "source-companies-act-current",
        "source-labor-contract-succession-act",
        "source-mhlw-business-transfer-guideline-20260120"
      ],
      legacyReformInference: false,
      whatChanged: "バックフィル／売主起点の入札・Seller's DD・カーブアウトの分離実務、TSA・残存持分までを横断する実務解説を追加した。"
    }
  ];
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "carveout-ma-business-sale");
  if (!topic) return;
  const ids = ["article-amt-carveout-ma-practical-20250804", "article-not-seller-side-carveout-ma-20240207"];
  const existing = Array.isArray(topic.referenceArticleIds) ? topic.referenceArticleIds.slice() : [];
  for (const id of ids) {
    if (!existing.includes(id) && (window.ARTICLE_DATA || []).some((article) => article && article.id === id)) existing.push(id);
  }
  topic.referenceArticleIds = existing;
})();

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
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const TOPIC = "consumer-law-digital-contract-review";
  const ARTICLE = "article-businesslawyers-mhm-consumer-terms-injunction-20260916";
  const PRIMARY_SOURCES = ["source-consumer-contract-act-current", "source-civil-code-current"];
  const article = {
    id: ARTICLE,
    title: "利用規約が無効に？差止請求事例を踏まえた見直しポイント",
    publisher: "BUSINESS LAWYERS／森・濱田松本法律事務所外国法共同事業",
    author: "嶋村 直登",
    publishedAt: "2026-09-16",
    collectedAt: "2026-09-24",
    url: "https://www.businesslawyers.jp/articles/1370",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／BtoC利用規約・不当条項",
    status: "adopted",
    summary: "消費者契約法8条から10条の不当条項規制と適格消費者団体の差止請求について、近時の公表事例を利用規約レビューへ落とす実務解説。免責・自己責任条項、サービス停止時の責任、専属的合意管轄、一方的な規約変更、消費者側の損害賠償範囲、ID・パスワードの不正利用時の責任を取り上げ、条項が広すぎることで事業者に責任がある場面まで免責・転嫁してしまうリスクと、民法上の定型約款変更手続を踏まえた見直し方を整理している。",
    whyImportant: [
      "差止請求の公表事例を条項類型ごとに並べ、抽象的な消費者契約法8条・10条を実際の利用規約レビュー観点へ変換できる",
      "『一切責任を負わない』『任意に規約を変更できる』『ID・パスワード利用はすべて本人責任』といった実務で見かける表現が、どこまで広いと問題になり得るかを具体例で確認できる",
      "規約変更について、利用者の個別同意又は民法548条の4の定型約款変更手続との関係まで扱っており、BtoCサービスの法務・プロダクト運用へ落とし込みやすい"
    ],
    audience: ["企業法務", "消費者法務", "BtoC・EC事業担当", "デジタルサービス担当", "プロダクト・CS担当"],
    audienceReason: "BtoC利用規約の免責、変更、責任分配、管轄等を、差止請求の実例から事前点検するため。",
    categories: ["消費者法・表示", "契約・取引", "AI・デジタル"],
    relatedTopics: [TOPIC],
    relatedIssues: ["consumer-review-contract-change-notice"],
    primarySourceIds: PRIMARY_SOURCES,
    legacyReformInference: false,
    whatChanged: "実務解説補強／差止請求の公表事例から、免責・一方的な規約変更・専属管轄・損害賠償・認証責任の利用規約レビュー軸を追加した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat([article]);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  if (topic && (window.ARTICLE_DATA || []).some((item) => item && item.id === ARTICLE)) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, ARTICLE);
  }
})();

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
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const TOPIC = "consumer-contract-law-review-2026";
  const SOURCE = "source-caa-consumer-contract-act-2022-amendment";
  const REFORM = "consumer-contract-act-2022-amendment";
  const ARTICLE = "article-businesslawyers-miura-consumer-contract-2022-amendment-20230525";

  const source = {
    id: SOURCE,
    title: "消費者契約法及び消費者の財産的被害の集団的な回復のための民事の裁判手続の特例に関する法律の一部を改正する法律（令和4年法律第59号）（消費者契約法関係）等について",
    type: "law",
    typeLabel: "改正法・施行情報",
    authority: "消費者庁",
    publishedAt: "2022-06-01",
    url: "https://www.caa.go.jp/policies/policy/consumer_system/consumer_contract_act/amendment/2022",
    importance: "最高",
    whyImportant: "令和4年法律第59号の成立・公布と、消費者契約法関係の2023年6月1日施行、適格消費者団体の事務等の2023年10月1日施行を確認できる公式資料。",
    topics: [TOPIC]
  };
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!sourceIds.has(source.id) && !sourceUrls.has(normalizeUrl(source.url))) {
    window.SOURCE_DATA = existingSources.concat([source]);
  }

  const reform = {
    id: REFORM,
    title: "消費者契約法・2022年改正（令和4年法律第59号）",
    eventType: "law_amendment",
    lawId: "consumer-contract-act",
    lawLabel: "消費者契約法",
    relatedTopics: [TOPIC],
    effectiveDateStatus: "phased",
    effectiveDates: ["2023-06-01", "2023-10-01"],
    effectiveDateNote: "令和4年法律第59号の消費者契約法関係は原則2023年6月1日施行。適格消費者団体の事務に関する改正規定等は2023年10月1日施行。",
    effectiveDateSourceIds: [SOURCE],
    matchSourceIds: [SOURCE],
    sourceIds: [SOURCE],
    articleIds: [ARTICLE]
  };
  const existingReforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  if (!existingReforms.some((item) => item && item.id === reform.id)) {
    window.REFORM_EVENT_DATA = existingReforms.concat([reform]);
  }

  const article = {
    id: ARTICLE,
    title: "令和4年消費者契約法改正の影響度と実務対応 不当勧誘の契約取消権、サルベージ条項の無効、解約料の説明等の努力義務",
    publisher: "BUSINESS LAWYERS／三浦法律事務所",
    author: "松田 知丈／遠藤 政佑",
    publishedAt: "2023-05-25",
    collectedAt: "2026-09-24",
    url: "https://www.businesslawyers.jp/articles/1189",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／消費者契約法・2022年改正・施行前",
    status: "adopted",
    summary: "2023年6月1日の施行直前に、令和4年法律第59号による消費者契約法改正を企業実務へ落とした解説。不当勧誘による取消権の追加、免責範囲を曖昧にしたサルベージ条項の無効、解約料の算定根拠に関する説明等の努力義務、適格消費者団体による差止請求の実効性強化を整理し、利用規約・契約書・勧誘マニュアル・説明資料の修正ポイントまで示している。",
    whyImportant: [
      "2026年の制度見直しを読む前提として、現行法の基礎になっている2022年改正で何が既に施行済みなのかを実務対応とセットで確認できる",
      "『法律上許される限り』など免責範囲を曖昧にするサルベージ条項について、運用で限定するだけでは足りず契約条項自体を直す必要があることを具体化している",
      "解約料の説明等の努力義務を、算定根拠資料や顧客向け説明の準備という運用へ落とし、現在の2026年見直しで議論されている解約料規律との連続性を追える"
    ],
    audience: ["企業法務", "消費者法務", "BtoC・EC事業担当", "営業・CS担当", "プロダクト担当"],
    audienceReason: "現行の消費者契約法を前提に、利用規約、免責条項、解約料、勧誘・説明プロセスを点検し、2026年見直しとの基準差を把握するため。",
    categories: ["消費者法・表示", "契約・取引"],
    relatedTopics: [TOPIC],
    relatedIssues: ["consumer-contract-cancellation-fees", "consumer-contract-ec-standard-terms"],
    primarySourceIds: [SOURCE, "source-consumer-contract-act-current"],
    reformEventId: REFORM,
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: [SOURCE],
    whatChanged: "バックフィル／2023年6月施行の2022年消費者契約法改正について、サルベージ条項、解約料の説明等、不当勧誘の取消しを企業の規約・マニュアル修正へ落とす実務解説を追加した。"
  };

  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existingArticles.concat([article]);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  if (topic && (window.ARTICLE_DATA || []).some((item) => item && item.id === ARTICLE)) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, ARTICLE);
  }
})();
