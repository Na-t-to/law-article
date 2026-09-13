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

  const topicSlug = "bank-investment-subsidiary-business-succession";
  const wgSourceId = "source-fsa-regional-financial-power-wg-2025";
  const finalSourceId = "source-fsa-bank-investment-subsidiary-reform-2026";
  const reformEventId = "bank-investment-subsidiary-2026-reform";

  const sources = [
    {
      id: wgSourceId,
      title: "金融審議会『地域金融力の強化に関するワーキング・グループ』報告書",
      type: "guideline",
      typeLabel: "金融審議会・制度見直し報告書",
      authority: "金融庁 / 金融審議会",
      publishedAt: "2025-12-18",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/tosin/20251218.html",
      importance: "高",
      whyImportant: "銀行グループの投資専門会社を通じた資本性資金供給について、投資対象・業務範囲、クロスオーバー投資、上場会社への事業承継支援等の見直し方向と、利益相反・リスク管理・内部管理態勢を前提とする政策趣旨を確認できる。",
      topics: [topicSlug]
    },
    {
      id: finalSourceId,
      title: "『銀行法施行規則等の一部を改正する内閣府令』等の公布及びパブリックコメントの結果等について",
      type: "guideline",
      typeLabel: "府令・告示・監督指針／最終ルール",
      authority: "金融庁",
      publishedAt: "2026-06-12",
      url: "https://www.fsa.go.jp/news/r7/ginkou/20260612/20260612.html",
      importance: "最高",
      whyImportant: "投資専門会社の投資対象・業務範囲拡充、クロスオーバー投資、上場事業承継会社への資金供給等を最終化し、主要部分の2026年6月15日施行を公式に確認できる。パブリックコメント回答から対象範囲の境界も確認できる。",
      topics: [topicSlug]
    }
  ];

  const topic = {
    slug: topicSlug,
    title: "銀行グループ・投資専門会社／事業承継支援",
    categories: ["事業再生・金融", "M&A", "会社法・ガバナンス"],
    summary: "2026年6月15日施行の銀行法施行規則等の改正を中心に、銀行グループの投資専門会社による資本性資金供給、上場会社を含む事業承継支援、クロスオーバー投資、M&A仲介業務の範囲を整理する。",
    lastUpdated: "2026-09-14",
    lastVerified: "2026-09-14",
    isNew: true,
    overview: [
      "銀行・銀行持株会社には子会社業務範囲規制と議決権保有規制があり、投資専門会社（銀行法上の特定子会社）を通じた出資・支援にも対象会社、投資手法、保有期間、業務範囲の制約がある。",
      "2026年6月15日施行の銀行法施行規則等の改正は、投資専門会社による株式会社以外の国内団体への資金供給、上場後のベンチャーへの一定の追加投資、上場会社を含む事業承継支援、M&A仲介業務を可能にし、従来の制度より利用可能な案件を広げた。",
      "実務では『銀行グループだから投資できる』と一括りにせず、銀行本体・投資専門会社のどの主体が、どの投資手法で、どの対象へ、どの期間まで保有できるかを案件ごとに確認する必要がある。"
    ],
    currentSummary: {
      facts: [
        "金融庁は2026年6月12日に銀行法施行規則等の改正を公布し、投資専門会社関係の主要部分は2026年6月15日に施行・適用した。",
        "投資専門会社の資金供給先は『他の株式会社』から『他の国内の会社その他の団体』へ拡張され、合同会社等への出資、匿名組合出資、信託受益権の取得等を利用した資金供給が可能となった。金融庁のパブリックコメント回答では、外国の株式会社や外国のLLC等はこの拡張の対象外とされている。",
        "事業承継会社は上場会社を含み得ることとなり、特定子会社を通じた事業承継支援の対象が拡大した。事業承継会社について基準議決権数を超える議決権を保有できる期間は原則10年間である。",
        "ベンチャービジネス会社については、一定の要件の下で上場後も追加出資を継続できるクロスオーバー投資が可能となった。",
        "投資専門会社の業務範囲にはM&A仲介業務が追加され、資金供給とオーナー探索・事業承継支援を一体で行いやすくなった。"
      ],
      interpretations: [
        "改正後も、投資対象が国内の会社その他の団体であること、投資専門会社の業務範囲、子会社・議決権保有規制、保有期限等は別々に確認する必要があり、資金供給手法が増えたことだけで案件全体が適法になるわけではない。",
        "事業承継案件では、対象会社が上場しているかだけで除外するのではなく、事業承継会社の要件、支援計画、投資主体、議決権割合、出口までの期間を案件設計の初期段階で確認する。",
        "制度拡張の政策目的は資本性資金の供給と地域企業の成長・承継支援を広げることだが、金融審議会報告書が前提とする利益相反防止、リスク管理、内部管理態勢を緩和したものではない。"
      ],
      implications: [
        "銀行グループの投資案件では、投資主体、対象法人・団体の属性、国内外、投資手法、議決権割合、保有期限を一覧化して規制適合性を確認する。",
        "事業承継ファンドや投資専門会社の投資方針・審査票を、上場会社、合同会社、匿名組合出資、信託受益権等の新たな選択肢に対応させる。",
        "M&A仲介を投資専門会社で行う場合は、資金供給先との関係、利益相反、手数料、情報管理、案件紹介・助言との役割分担を内部規程へ落とす。",
        "ベンチャーの上場後追加投資では、上場時期、既存保有期間、追加投資の要件、出口計画を投資管理システムで追跡する。"
      ],
      uncertain: [
        "新しい投資対象・手法を利用する案件の市場慣行、審査・利益相反管理、出口設計は施行後の案件蓄積により具体化していく。",
        "金融審議会報告書が今後の検討課題として挙げた更なる業務範囲規制の緩和、大口信用供与規制、銀行持株会社から一般持株会社への移行等は、2026年6月改正で一括して実現したものではないため、将来の制度改正と区別して追う必要がある。"
      ]
    },
    issues: [
      {
        id: "bank-investment-subsidiary-targets-instruments",
        title: "投資専門会社はどの主体へ、どの手法で資金供給できるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "2026年6月改正後は、国内の会社その他の団体に対し、貸付け、社債等、株式等、信託受益権、民法上の組合・匿名組合・LPS・LLP等の契約を通じた資金供給を行い得る。株式会社以外の国内団体も対象となる。",
        exception: "『会社その他の団体』は国内のものに限られ、外国の株式会社や外国のLLC等への投資がこの改正だけで可能になったわけではない。個別の投資手法には別途法令上の要件がある。",
        uncertain: "複雑なファンド・信託・組合スキームでは、実質的な資金供給先と各契約の位置付けを個別に確認する必要がある。",
        sourceIds: [finalSourceId]
      },
      {
        id: "bank-investment-subsidiary-business-succession-listed",
        title: "上場会社を含む事業承継会社へどう投資できるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "事業承継会社には上場会社も含まれ得る。基準議決権数を超える投資は投資専門会社を通じて行い、事業承継会社が子会社対象会社として扱われる期間は原則として議決権取得から10年間である。",
        exception: "上場会社であることだけで事業承継会社になるわけではなく、代表者の死亡・高齢化その他の事由による承継支援の必要性と、承継計画に基づく支援等の要件を満たす必要がある。",
        uncertain: "上場会社の具体的な承継計画や支援の必要性、投資後の出口方法は案件ごとの事実関係に左右される。",
        sourceIds: [finalSourceId]
      },
      {
        id: "bank-investment-subsidiary-crossover",
        title: "ベンチャーの上場後も追加投資を続けられるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "2026年6月改正により、ベンチャービジネス会社が上場した後も、規則上の要件を満たす場合には投資専門会社が追加出資できるクロスオーバー投資が認められた。",
        exception: "金融庁のパブリックコメント回答は、出資開始から7年を経過した日以後に上場等された場合の継続追加出資など具体的な要件を示しており、上場後の追加出資が無条件に認められるものではない。",
        uncertain: "個別案件では上場時期、議決権取得時期、中小企業者要件等を時系列で確認する必要がある。",
        sourceIds: [finalSourceId]
      },
      {
        id: "bank-investment-subsidiary-ma-brokerage",
        title: "投資専門会社でM&A仲介・事業承継支援をどう行うか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "2026年6月改正で投資専門会社の業務範囲にM&A仲介業務が追加され、資金供給と併せてオーナー探索・事業承継支援を行う制度上の選択肢が広がった。",
        exception: "M&A仲介を追加したことは、利益相反管理、情報管理、顧客保護その他の適用法令・監督上の要請を免除するものではない。",
        uncertain: "資金供給先と仲介依頼者の関係、手数料設計、利益相反の管理方法は案件・ビジネスモデルごとに具体化する必要がある。",
        sourceIds: [wgSourceId, finalSourceId]
      }
    ],
    sourceIds: [wgSourceId, finalSourceId],
    practicalImpacts: [
      "投資専門会社・ファンドの投資方針",
      "事業承継案件のストラクチャリング",
      "上場会社への事業承継支援",
      "合同会社・匿名組合・信託等への資金供給",
      "クロスオーバー投資",
      "M&A仲介業務の内部規程",
      "議決権保有上限・保有期限管理",
      "利益相反・情報管理・投資審査"
    ]
  };

  const reformEvent = {
    id: reformEventId,
    title: "銀行法施行規則等・2026年投資専門会社規制改正",
    eventType: "regulation_or_guideline",
    lawId: "banking-act-investment-subsidiary",
    lawLabel: "銀行法施行規則等・投資専門会社規制",
    relatedTopics: [topicSlug],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-06-15"],
    effectiveDateSourceIds: [finalSourceId],
    matchSourceIds: [wgSourceId, finalSourceId],
    sourceIds: [wgSourceId, finalSourceId]
  };

  const articles = [
    {
      id: "article-fsa-regional-financial-power-wg-investment-subsidiary-2025",
      title: "金融審議会『地域金融力の強化に関するワーキング・グループ』報告書",
      publisher: "金融庁 / 金融審議会",
      author: "金融審議会 地域金融力の強化に関するワーキング・グループ",
      publishedAt: "2025-12-18",
      collectedAt: "2026-09-14",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/tosin/20251218.html",
      sourceType: "primary",
      sourceLabel: "一次資料・制度見直し／地域金融力WG報告書・検討段階",
      status: "adopted",
      summary: "地域金融力強化の政策パッケージの中で、投資専門会社による株式会社以外への資金供給、M&A仲介業務、ベンチャーのクロスオーバー投資、上場会社を含む事業承継支援等の見直し方向を示した報告書。",
      whyImportant: [
        "2026年6月最終改正の政策起点と、なぜ投資専門会社の投資対象・業務範囲を広げるのかを確認できる",
        "利益相反取引の防止、リスク管理、内部管理態勢の整備を制度緩和の前提として位置付けている",
        "最終化された事項と、今後の検討課題として残る事項を区別する基準になる"
      ],
      audience: "銀行・銀行持株会社、地域金融機関、投資専門会社、ファンド、M&A・事業承継担当、金融法務",
      audienceReason: "最終ルールだけでなく、投資専門会社規制の見直しの政策目的と限界を把握し、将来の追加改正と区別するため。",
      categories: ["事業再生・金融", "M&A", "会社法・ガバナンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["bank-investment-subsidiary-targets-instruments", "bank-investment-subsidiary-business-succession-listed", "bank-investment-subsidiary-crossover", "bank-investment-subsidiary-ma-brokerage"],
      primarySourceIds: [wgSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [wgSourceId],
      whatChanged: "新テーマ追加／投資専門会社規制の2026年見直しについて、政策起点と検討段階の射程を整理した。"
    },
    {
      id: "article-fsa-bank-investment-subsidiary-reform-2026",
      title: "『銀行法施行規則等の一部を改正する内閣府令』等の公布及びパブリックコメントの結果等について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-06-12",
      collectedAt: "2026-09-14",
      url: "https://www.fsa.go.jp/news/r7/ginkou/20260612/20260612.html",
      sourceType: "primary",
      sourceLabel: "一次資料・府令等／投資専門会社規制改正・公布後施行前",
      status: "adopted",
      summary: "投資専門会社の投資対象・業務範囲の拡充、クロスオーバー投資、上場会社への事業承継支援、M&A仲介業務等を最終化した金融庁資料。2026年6月15日の施行・適用日とパブリックコメント回答を確認できる。",
      whyImportant: [
        "2026年6月改正の最終ルールと施行日を一次資料で確定できる",
        "パブリックコメント回答から、国内の会社その他の団体という対象範囲、外国法人の扱い、上場後追加投資等の境界を確認できる",
        "投資専門会社・事業承継・ベンチャー投資・M&A仲介を同じ改正パッケージとして追える"
      ],
      audience: "銀行・銀行持株会社、地域金融機関、投資専門会社、ファンド、M&A・事業承継担当、金融法務",
      audienceReason: "現行ルールに基づく投資可否・業務範囲・保有期限を判断するための一次資料だから。",
      categories: ["事業再生・金融", "M&A", "会社法・ガバナンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["bank-investment-subsidiary-targets-instruments", "bank-investment-subsidiary-business-succession-listed", "bank-investment-subsidiary-crossover", "bank-investment-subsidiary-ma-brokerage"],
      primarySourceIds: [finalSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [finalSourceId],
      whatChanged: "新テーマ追加／2026年6月15日施行の投資専門会社規制改正を現行ルールとして整理した。"
    },
    {
      id: "article-amt-regional-financial-power-investment-subsidiary-2026",
      title: "『地域金融力の強化に関するワーキング・グループ』報告書の概要 ―投資専門会社を通じた資本性資金の供給の促進等について―",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "戸塚貴晴 / 村井惠悟 / 中島庸元",
      publishedAt: "2026-02-20",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260220001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／投資専門会社制度見直し・検討段階",
      status: "adopted",
      summary: "金融審議会報告書を基に、投資専門会社の投資先・業務範囲、クロスオーバー投資、事業承継会社、地域活性化事業会社の見直しを改正前ルールとの差分から整理し、更なる業務範囲規制・大口信用供与規制等の残課題も示す解説。",
      whyImportant: [
        "2026年6月改正前の規制と提言を条文レベルで対比し、何が変更対象になったかを把握しやすい",
        "株式会社以外への投資やM&A仲介追加の背景となった実務ニーズを具体的に説明している",
        "2026年6月改正で実現した事項と、今後も検討課題として残る事項を切り分けて読める"
      ],
      audience: "銀行・地域金融機関、投資専門会社、ファンド、金融法務、M&A・事業承継担当",
      audienceReason: "制度改正の前後差分と政策趣旨を理解し、現行ルールを過度に広く解釈しないため。",
      categories: ["事業再生・金融", "M&A", "会社法・ガバナンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["bank-investment-subsidiary-targets-instruments", "bank-investment-subsidiary-business-succession-listed", "bank-investment-subsidiary-crossover", "bank-investment-subsidiary-ma-brokerage"],
      primarySourceIds: [wgSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [wgSourceId],
      whatChanged: "整理変更なし／最終改正前の規制との差分、政策趣旨、残る検討課題を補う実務解説を追加。"
    },
    {
      id: "article-tmi-bank-subsidiary-business-succession-2026",
      title: "銀行子会社による事業承継支援（令和8年6月銀行法施行規則改正を踏まえて）",
      publisher: "TMI総合法律事務所",
      author: "溝端俊介",
      publishedAt: "2026-08-04",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18659.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／銀行法施行規則改正・施行後",
      status: "adopted",
      summary: "2026年6月15日施行後の銀行法施行規則を前提に、銀行・銀行持株会社の子会社規制と議決権保有規制、事業承継会社、投資専門会社の業務範囲を条文とパブリックコメント回答に沿って整理した実務解説。",
      whyImportant: [
        "銀行・銀行持株会社の5％・15％の議決権保有規制と投資専門会社を使う場面を接続して理解できる",
        "上場事業承継会社への投資、10年の保有期限、M&A仲介業務追加を案件設計へ落とし込める",
        "合同会社、匿名組合出資、信託受益権等の新たな資金供給手法と、外国法人が対象外となる境界を具体化している"
      ],
      audience: "銀行・銀行持株会社、投資専門会社、事業承継ファンド、M&A担当、金融法務",
      audienceReason: "最終ルールを具体的な事業承継・投資ストラクチャーへ当てはめる際の確認順序を把握するため。",
      categories: ["事業再生・金融", "M&A", "会社法・ガバナンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["bank-investment-subsidiary-targets-instruments", "bank-investment-subsidiary-business-succession-listed", "bank-investment-subsidiary-ma-brokerage"],
      primarySourceIds: [finalSourceId],
      reformEventId,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [finalSourceId],
      whatChanged: "整理変更なし／施行後ルールを銀行子会社規制・議決権保有規制と事業承継ストラクチャーへ落とす実務解説を追加。"
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

  const currentEvents = window.REFORM_EVENT_DATA || [];
  if (!currentEvents.some((item) => item && item.id === reformEventId)) {
    window.REFORM_EVENT_DATA = currentEvents.concat(reformEvent);
  }

  const currentArticles = window.ARTICLE_DATA || [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const nextArticles = articles.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url)));
  if (nextArticles.length) window.ARTICLE_DATA = currentArticles.concat(nextArticles);
})();
