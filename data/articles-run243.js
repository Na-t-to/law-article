(() => {
  if (window.__LAW_INDEX_RUN243_APPLIED__) return;
  window.__LAW_INDEX_RUN243_APPLIED__ = true;

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

  const article = {
    id: "article-tmi-ec-standard-terms-penalty-clause-20260323",
    title: "【デジタルプラットフォームと法】第7回「デジタルプラットフォームとEC利用規約（定型約款）における留意点（主として違約金条項を念頭に）」",
    publisher: "TMI総合法律事務所",
    author: "鈴木 翔平・内野 寛信",
    publishedAt: "2026-03-23",
    collectedAt: "2026-09-23",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18151.html",
    sourceType: "secondary",
    sourceLabel: "実務解説・TMI／EC利用規約・定型約款・違約金条項",
    status: "adopted",
    summary: "EC上の販売業者が消費者との取引に用いる利用規約について、民法548条の2の定型約款規律を、東京地判令和5年8月24日の転売禁止・違約金条項の事例から具体化する実務解説。定型約款への組入れと不当条項規制を分け、商品価格約1万円に対する20万円の違約金について、表示時期・表示位置・注意喚起・予測可能性・金額の大きさ等を踏まえて同条2項により契約内容から排除された判断を整理し、EC規約では条項内容だけでなく表示方法まで設計対象になることを示す。",
    whyImportant: [
      "利用規約が定型約款として契約内容に組み入れられても、相手方の義務を加重する条項は民法548条の2第2項により別途排除され得ることを、具体的な裁判例の当てはめから確認できる",
      "違約金・高額手数料などについて、金額の合理性だけでなく、商品ページからの導線、表示タイミング、埋没の有無、強調表示、利用者の予測可能性までレビュー観点へ落とせる",
      "消費者契約法10条との違いも整理しており、B2C利用規約の不当条項レビューを民法上の定型約款規律と消費者契約法の双方から切り分けて考える基礎になる"
    ],
    audience: ["企業法務", "EC・B2Cサービス担当", "プロダクト・UX担当", "規約・約款管理担当", "カスタマーサポート"],
    audienceReason: "違約金・手数料・転売禁止等の負担条項について、文言の有効性だけでなく、EC画面上でいつ・どこまで目立たせて提示するかを含めて利用規約を点検するため。",
    categories: ["契約・取引", "消費者法・表示", "AI・デジタル"],
    relatedTopics: ["consumer-contract-law-review-2026"],
    relatedIssues: ["consumer-contract-ec-standard-terms"],
    primarySourceIds: ["source-civil-code-current", "source-consumer-contract-act-current"],
    legacyReformInference: false,
    whatChanged: "参考解説追加／EC利用規約の違約金条項について、民法548条の2第2項の不当条項規制を裁判例の具体的な表示・予測可能性の事情からレビューできるよう補強した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat(article);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "consumer-contract-law-review-2026");
  if (topic && (window.ARTICLE_DATA || []).some((item) => item && item.id === article.id)) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, article.id);
  }
})();

(() => {
  if (window.__LAW_INDEX_SECURITIES_MONITORING_2026_APPLIED__) return;
  window.__LAW_INDEX_SECURITIES_MONITORING_2026_APPLIED__ = true;

  const TOPIC = "financial-instruments-securities-monitoring";
  const SOURCE_POLICY = "source-sesc-securities-monitoring-policy-20260731";
  const SOURCE_CASEBOOK = "source-sesc-securities-monitoring-casebook-20260731";
  const SOURCE_UNDERWRITING = "source-jsda-ipo-underwriting-fraud-guide-20260318";
  const ARTICLE_1 = "article-tmi-securities-monitoring-2026-part1-20260807";
  const ARTICLE_2 = "article-tmi-securities-monitoring-2026-part2-20260812";

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

  const sourceAdditions = [
    {
      id: SOURCE_POLICY,
      title: "令和8事務年度 証券モニタリング基本方針",
      type: "policy",
      typeLabel: "一次資料・証券取引等監視委員会／証券モニタリング基本方針",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      importance: "高",
      whyImportant: "2026年7月から2027年6月までの金融商品取引業者等に対する証券モニタリングで、顧客本位・適合性、システムリスク、AML/CFT、内部管理態勢と、規模・業態別の重点検証事項を示す年度方針。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_CASEBOOK,
      title: "証券モニタリング概要・事例集（令和8年7月）",
      type: "report",
      typeLabel: "一次資料・証券取引等監視委員会／検査・モニタリング事例集",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      importance: "高",
      whyImportant: "2025年7月から2026年6月までの検査・モニタリングで把握した問題事例を公表し、年度方針の抽象的な検証事項を、業容変化、新商品導入、システムリスク、利益相反等の具体的な内部管理不備へ接続できる。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_UNDERWRITING,
      title: "新規上場時の会計不正事例を踏まえた引受審査に関するガイドライン",
      type: "guideline",
      typeLabel: "一次資料・日本証券業協会／IPO引受審査",
      authority: "日本証券業協会",
      publishedAt: "2026-03-18",
      url: "https://www.jsda.or.jp/shijyo/minasama/hikiukeshinsa.html",
      importance: "高",
      whyImportant: "新規上場時の会計不正事例を踏まえ、主幹事会員が適切な引受審査機能を発揮するため、不正リスクに応じた確認、内部通報体制、不正情報への対応、経営者・監査役等・独立役員への確認等の留意事項を示す。",
      topics: [TOPIC]
    }
  ];

  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existingSources.concat(sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url))));

  const topicAddition = {
    slug: TOPIC,
    title: "金融商品取引業者・証券モニタリング／内部管理",
    categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
    summary: "証券取引等監視委員会の年度モニタリング方針と事例集を軸に、金商業者の顧客本位・適合性、システム・サイバー・AML、業容変化、新商品審査、引受審査、利益相反管理を内部管理態勢の実務として追う。",
    lastUpdated: "2026-09-24",
    lastVerified: "2026-09-24",
    isNew: true,
    overview: [
      "証券取引等監視委員会は2026年7月31日、2026年7月から2027年6月までを対象とする『令和8事務年度 証券モニタリング基本方針』と、前事務年度の検査・モニタリング事例集を公表した。",
      "年度方針は、顧客の最善の利益・適合性、システムリスク、AML/CFT、実効的な内部管理態勢を業態横断事項とし、さらに大手、ネット系、準大手・地域証券、投資運用業者等の規模・業態ごとの検証事項を具体化している。",
      "2026年度は、大手証券会社グループの法人関係情報管理・引受審査、ネット系証券の不正アクセス対策・取引時確認・売買管理、準大手・地域証券の業容変化に応じた内部管理と新商品審査、投資運用業者の利益相反管理などが重点として浮かび上がる。",
      "このテーマでは、法令条文の一般論ではなく、年度方針・事例集・自主規制ガイドラインから、金商業者がどの統制を経営課題として点検すべきかを継続的に更新する。"
    ],
    currentSummary: {
      facts: [
        "令和8事務年度の証券モニタリングは2026年7月から2027年6月を対象とし、業態横断事項と規模・業態別事項に分けて重点検証項目を示している。",
        "業態横断では、顧客の最善の利益・適合性、システムリスク、AML/CFT、実効的な内部管理態勢が主要な検証軸となっている。",
        "顧客対応では、複雑・高リスク商品の対象顧客設定、顧客属性やデジタル・リテラシーに応じた説明、合理性のない短期乗換えの有無、社内ルールとモニタリングが検証事項として明示されている。",
        "大手証券会社グループでは法人関係情報の管理態勢と引受審査態勢等が新たな重点として示され、日本証券業協会は2026年3月にIPO会計不正を踏まえた引受審査ガイドラインを公表している。",
        "準大手・地域証券では、業容の変化に応じた内部管理態勢と、新商品導入時の審査・導入後モニタリングが新たな検証事項として明示されている。"
      ],
      interpretations: [
        "証券モニタリング対応は年度方針の項目をチェックリスト化するだけでなく、直近の行政処分・検査事例が自社のビジネスモデル、商品、顧客属性、システム構成にどう当てはまるかを内部監査・コンプライアンスへ反映する必要がある。",
        "事業買収やオンライン化、NISA対応、新商品の投入など業容が変化した場合、旧来のシステム・法令遵守・審査体制が新しい業務に追随しているかを経営管理態勢まで含めて再評価する必要がある。",
        "新商品審査では販売開始時の承認だけでなく、想定顧客・商品性・リスクの合理性、販売後の実績と苦情等を踏まえた継続モニタリングまで統制サイクルとして設計するのが実務的である。"
      ],
      implications: [
        "年度方針と事例集を自社のリスクアセスメント、内部監査計画、コンプライアンス・プログラムへ反映し、前年から追加・具体化された検証事項を差分管理する。",
        "高リスク商品について対象顧客設定、説明方法、短期乗換え、販売実績を横断して点検し、デジタルチャネルでは顧客のデジタル・リテラシーも説明設計へ反映する。",
        "業容変更・新サービス・新商品導入時に、システム対応、法令・自主規制対応、審査、顧客対応、モニタリングを同時に確認するゲートを設ける。",
        "IPO引受審査では、不正リスク、内部通報体制、不正情報、経営者・監査役等・独立役員への確認を引受審査手続へ組み込む。",
        "投資運用業では親会社等との取引について、利益相反の事前管理だけでなく取引の妥当性を事後検証できる記録・牽制を整備する。"
      ],
      uncertain: [
        "年度方針に記載された検証事項は検査項目の限定列挙ではなく、個社の業態・リスクに応じて検証対象や深度は異なる。",
        "前年度方針から文言が削除された事項でも、直近の検査事例や不祥事から継続的なリスクが認められるものは、直ちに対応不要になったとはいえない。",
        "金融庁・監視委の監督指針、事例集、自主規制ルールは更新され得るため、年度途中の改正・行政処分も継続確認する。"
      ]
    },
    issues: [
      {
        id: "securities-monitoring-cross-sector-controls",
        title: "業態横断の重点検証事項を内部管理へどう落とすか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "顧客本位・適合性、システムリスク、AML/CFT、実効的な内部管理態勢を、自社のリスクアセスメント、社内規程、モニタリング、内部監査、経営報告へ対応付ける。特に複雑・高リスク商品の対象顧客設定、顧客属性に応じた説明、短期乗換え、フィッシング耐性のある認証等のシステム対策は、形式的な規程整備ではなく運用実績まで検証する。",
        exception: "年度方針は全金商業者へ一律に同じ統制を要求するものではなく、業態、顧客、商品、取引チャネル、システム構成等に応じてリスクベースで具体化する。",
        uncertain: "フロンティアAIを含む新たなサイバー脅威やAML/CFTの実務は更新が速いため、監督指針・要請・事例集の最新化を継続確認する。",
        sourceIds: [SOURCE_POLICY, SOURCE_CASEBOOK]
      },
      {
        id: "securities-monitoring-business-model-product",
        title: "業容変化・新商品導入時の統制をどう再設計するか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "買収、オンライン化、NISA対応、新規サービス等で業容が変化する場合、変化後の業務に即してシステム、法令遵守、経営管理、商品審査、導入後モニタリングを再設計する。新商品は導入前に商品性・リスク・想定顧客との合理性を検証し、販売後も実績や苦情等から継続評価する。",
        exception: "既存サービスの軽微な変更と、顧客層・商品・チャネル・システムを大きく変える業容変更では必要な審査深度が異なる。",
        uncertain: "どの変化が取締役会・経営会議等へのエスカレーションを要するかは個社の規模・ガバナンス・リスクに応じて設計する。",
        sourceIds: [SOURCE_POLICY, SOURCE_CASEBOOK]
      },
      {
        id: "securities-monitoring-underwriting-conflicts",
        title: "引受審査・法人情報・利益相反のゲートキーパー機能をどう実効化するか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "大手証券会社では法人関係情報管理と引受審査を、投資運用業者では親会社等との取引における利益相反管理を重点的に点検する。IPO引受審査では、会計不正リスク、内部通報体制、不正情報への対応、代表取締役・監査役等・独立役員への確認を、主幹事のゲートキーパー機能として具体化する。",
        exception: "引受審査と投資運用業の利益相反管理は別の業務・規制であり、同じ手続を横展開するのではなく、それぞれの役割・忠実義務・自主規制ルールに応じて統制を設計する。",
        uncertain: "個別の行政処分・自主規制ガイドラインで求められる確認の深度は案件の不正リスク、関係者、取引構造等に左右される。",
        sourceIds: [SOURCE_POLICY, SOURCE_CASEBOOK, SOURCE_UNDERWRITING]
      }
    ],
    sourceIds: [SOURCE_POLICY, SOURCE_CASEBOOK, SOURCE_UNDERWRITING],
    referenceArticleIds: [ARTICLE_1, ARTICLE_2],
    practicalImpacts: [
      "証券モニタリング年度方針と事例集の差分管理",
      "顧客本位・適合性・高リスク商品販売のモニタリング",
      "システム・サイバー・AML/CFT統制の経営課題化",
      "業容変更・新商品・新サービス導入時の審査ゲート",
      "IPO引受審査・法人関係情報管理",
      "投資運用業の利益相反・親会社取引の事後検証"
    ]
  };
  if (!(window.TOPIC_DATA || []).some((item) => item && item.slug === TOPIC)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(topicAddition);
  }

  const articleAdditions = [
    {
      id: ARTICLE_1,
      title: "【金商法業規制ブログ】令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委『令和8事務年度 証券モニタリング基本方針』の解説～（第1回）",
      publisher: "TMI総合法律事務所",
      author: "岩井 宏樹",
      publishedAt: "2026-08-07",
      collectedAt: "2026-09-24",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18668.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング・業態横断",
      status: "adopted",
      summary: "令和8事務年度証券モニタリング基本方針の業態横断事項を、前年度方針と令和7事務年度の検査・事例集との比較から解説する。顧客本位・適合性では対象顧客設定、顧客属性・デジタルリテラシーに応じた説明、短期乗換え、社内ルール・モニタリングを整理し、システムリスクでは不正アクセス対策やフロンティアAIによる脅威変化、さらにAML/CFTと業態に応じた実効的な内部管理態勢まで実務上の点検項目へ落としている。",
      whyImportant: [
        "年度方針を前年との差分だけで読むのではなく、同日公表の検査・事例集と照合し、文言から消えた論点でも直近の検査指摘として残るものを区別できる",
        "高リスク商品の対象顧客設定、顧客のデジタル・リテラシーを含む説明方法、短期乗換え、社内モニタリングを一続きの販売管理として確認できる",
        "不正アクセス対策、フロンティアAI、AML/CFT、内部管理態勢を証券モニタリングの共通検証軸としてまとめ、法務・コンプライアンス・IT・内部監査の横断点検へ落とせる"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "証券会社", "投資運用業者", "内部監査", "システム・サイバーセキュリティ担当"],
      audienceReason: "2026事務年度の監視委検証事項を前年との差分・実際の検査事例から読み、自社の内部管理・監査計画へ反映するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [TOPIC],
      relatedIssues: ["securities-monitoring-cross-sector-controls"],
      primarySourceIds: [SOURCE_POLICY, SOURCE_CASEBOOK],
      legacyReformInference: false,
      whatChanged: "新テーマ作成／令和8事務年度の証券モニタリングについて、顧客本位・適合性、システム・サイバー、AML/CFT、内部管理態勢を業態横断の実務点検として整理した。"
    },
    {
      id: ARTICLE_2,
      title: "【金商法業規制ブログ】令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委『令和8事務年度 証券モニタリング基本方針』の解説～（第2回）",
      publisher: "TMI総合法律事務所",
      author: "岩井 宏樹",
      publishedAt: "2026-08-12",
      collectedAt: "2026-09-24",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18670.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング・規模業態別",
      status: "adopted",
      summary: "令和8事務年度証券モニタリング基本方針の規模・業態別事項を、直近の行政処分・検査事例まで使って具体化する解説。大手証券の法人関係情報・引受審査、ネット系証券のサイバー・取引時確認・売買管理、準大手・地域証券の業容変化に応じた内部管理と新商品審査、投資運用業者の利益相反管理を整理し、買収後のオンライン化やNISA対応、商品導入、親会社取引等で統制が事業変化に追随しているかを点検できる。",
      whyImportant: [
        "監視委の抽象的な業態別検証事項を、2025～2026年の実際の勧告・行政処分事例へ接続し、どの統制不備が問題化したかを把握できる",
        "証券会社の買収、オンライン化、NISA、新商品導入など事業拡大に対し、システム・法令遵守・経営管理が追随しないリスクを『業容の変化に応じた内部管理』として整理している",
        "IPO引受審査の会計不正対応と投資運用業の親会社取引・利益相反まで扱い、証券会社だけでなく幅広い金商業者のゲートキーパー・忠実義務の実装へつながる"
      ],
      audience: ["証券会社の法務・コンプライアンス", "投資運用業者", "内部監査", "新商品・商品審査担当", "経営管理・システム担当"],
      audienceReason: "規模・業態別の2026年度重点事項を、自社の業容変化、新商品、引受審査、利益相反管理の具体的な統制へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [TOPIC],
      relatedIssues: ["securities-monitoring-business-model-product", "securities-monitoring-underwriting-conflicts"],
      primarySourceIds: [SOURCE_POLICY, SOURCE_CASEBOOK, SOURCE_UNDERWRITING],
      legacyReformInference: false,
      whatChanged: "新テーマ補強／大手・ネット・準大手／地域証券・投資運用業者の重点検証事項を、業容変化、新商品審査、引受審査、利益相反管理の実務へ落とした。"
    }
  ];

  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existingArticles.concat(articleAdditions.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url))));
})();
