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
      id: "article-fsa-public-fund-liquidity-guideline-20260916",
      title: "『金融商品取引業者等向けの総合的な監督指針』の一部改正（案）に対するパブリックコメントの結果等の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260916/20260916.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／公募投資信託の流動性リスク管理・監督指針改正",
      status: "adopted",
      summary: "IOSCOが2025年5月に公表した集団投資スキームの流動性リスク管理に関する勧告・実施ガイダンスを踏まえ、公募投資信託の流動性リスク管理について投資運用業者に適切な対応を促すため、金融商品取引業者等向けの総合的な監督指針を改正した確定資料。2026年5月8日から6月8日までの意見募集を経て最終化され、改正後の監督指針は2027年10月1日から適用される。",
      whyImportant: [
        "公募投資信託の流動性リスク管理に関する監督指針改正が案段階を終え、確定したことを一次資料で確認できる",
        "2027年10月1日という適用日が確定しており、投資運用会社の規程・商品・リスク管理態勢の準備期限を置ける",
        "国際的なIOSCO勧告を国内の監督実務へどう接続するかを追う基準点となる"
      ],
      audience: ["投資運用会社の法務・コンプライアンス", "リスク管理", "商品企画・運用", "内部監査"],
      audienceReason: "2027年10月の適用に向け、公募投資信託の流動性リスク管理と商品・社内運用のギャップを確定資料から点検するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["secm-public-fund-liquidity-2027"],
      primarySourceIds: ["source-fsa-public-fund-liquidity-guideline-20260916"],
      reformEventId: "fsa-public-fund-liquidity-guideline-2027",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-public-fund-liquidity-guideline-20260916"],
      legacyReformInference: false,
      whatChanged: "テーマ更新／公募投資信託の流動性リスク管理に関する監督指針改正が最終化され、2027年10月1日の適用日が確定した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
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

  const additions = [
    {
      id: "article-caa-pionet-door-to-door-analysis-20260917",
      title: "PIO-NETデータを用いた訪問販売等に関する分析調査報告書",
      publisher: "消費者庁",
      author: "消費者庁・東京大学エコノミックコンサルティング株式会社",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-18",
      url: "https://www.caa.go.jp/notice/entry/047579/",
      sourceType: "primary",
      sourceLabel: "一次資料・消費者庁／訪問販売等のPIO-NET分析",
      status: "adopted",
      summary: "訪問販売等のPIO-NET相談データを分析し、デジタル広告を起点に消費者が訪問を依頼する取引の増加とトラブル類型を可視化した調査報告書。訪問販売に関する相談では、インターネット広告を見て来訪を要請した類型が2015年度4.1%から2024年度36.3%へ増え、2024年度の当該類型では価格トラブル70.3%、勧誘手法31.5%、契約書面30.9%が確認された。解約妨害や、連鎖販売取引で特定利益が後から提示される実態も分析し、今後の制度検討に資する基礎資料として公表されている。",
      whyImportant: [
        "ネット広告と訪問販売を別々のチャネルとして見るだけでは捉えにくい、広告→訪問依頼→見積り・勧誘→契約→解約という取引導線の変化を数量的に確認できる",
        "訪問依頼型の相談で価格・勧誘・契約書面のトラブルが集中していることから、住宅設備・修理等の広告表示と現地営業を横断して監査する根拠になる",
        "制度見直しの基礎資料であり、新しい禁止規定や解約権そのものではないため、立法事実と現行ルールを分けて追える"
      ],
      audience: ["消費者向け事業の法務・コンプライアンス", "EC・デジタルマーケティング", "訪問見積り・フィールドセールス", "CS・解約対応"],
      audienceReason: "広告から訪問・契約・解約までをまたぐ顧客導線に、どのような相談・紛争リスクが集中しているかを一次資料から把握し、特商法等見直しに備えて運用を棚卸しするため。",
      categories: ["消費者法・表示", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["digital-commerce-tokusho-review"],
      relatedIssues: ["dt-ad-triggered-visit-sales", "dt-cancellation-contract", "dt-ui-steering"],
      primarySourceIds: [
        "source-caa-pionet-door-to-door-analysis-20260917",
        "source-caa-digital-scta-interim-20260910",
        "source-egov-digital-scta-interim-comment-20260916"
      ],
      reformEventId: "specified-commercial-transactions-digital-review-2026-interim",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [
        "source-caa-digital-scta-interim-20260910",
        "source-egov-digital-scta-interim-comment-20260916"
      ],
      legacyReformInference: false,
      whatChanged: "テーマ更新／特商法等の見直しについて、ネット広告起点の訪問依頼、価格・勧誘・書面トラブル、解約妨害等の実態を示すPIO-NET分析を追加。制度段階は中間取りまとめ・意見募集のままであり、新ルール確定とは扱わない。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);

  const appendUnique = (items, more) => [...new Set([...(Array.isArray(items) ? items : []), ...more])];
  const patches = new Map([
    ["article-caa-digital-scta-interim-20260910", {
      canonicalTopic: "digital-commerce-tokusho-review",
      reformEventId: "specified-commercial-transactions-digital-review-2026-interim",
      reformStageSourceIds: ["source-caa-digital-scta-interim-20260910", "source-egov-digital-scta-interim-comment-20260916"]
    }],
    ["article-spring-dark-pattern-ui-20260909", {
      canonicalTopic: "digital-commerce-tokusho-review",
      reformEventId: "specified-commercial-transactions-digital-review-2026-interim",
      reformStageSourceIds: ["source-caa-digital-scta-interim-20260910"]
    }],
    ["article-caa-consumer-contract-interim-20260910", {
      canonicalTopic: "consumer-contract-law-review-2026",
      reformEventId: "consumer-contract-law-review-2026",
      reformStageSourceIds: ["source-caa-consumer-contract-interim-20260910", "source-egov-consumer-contract-interim-comment-20260916"]
    }]
  ]);

  for (const article of window.ARTICLE_DATA || []) {
    const patch = patches.get(article?.id);
    if (!patch) continue;
    article.relatedTopics = appendUnique(article.relatedTopics, [patch.canonicalTopic]);
    article.reformEventId = patch.reformEventId;
    article.reformStageSourceIds = patch.reformStageSourceIds;
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

  const additions = [
    {
      id: "article-meti-scs-policy-20260327",
      title: "『サプライチェーン強化に向けたセキュリティ対策評価制度に関する制度構築方針』を公表しました",
      publisher: "経済産業省",
      author: "経済産業省・内閣官房国家サイバー統括室",
      publishedAt: "2026-03-27",
      collectedAt: "2026-09-18",
      url: "https://www.meti.go.jp/press/2025/03/20260327001/20260327001.html",
      sourceType: "primary",
      sourceLabel: "一次資料・経済産業省／SCS評価制度・制度構築方針",
      status: "adopted",
      summary: "意見募集93者・569件を踏まえて最終化されたSCS評価制度の制度構築方針。取引先ごとに異なるセキュリティ要求を共通基準で評価・可視化し、委託元・委託先双方の負担軽減とサプライチェーン全体の水準向上を図る。★3・★4は2026年度末頃の制度開始を目指し、★5は今後さらに具体化する。取引先への対策要請と取適法・独占禁止法上の取引適正化も制度運用上の重要論点として接続されている。",
      whyImportant: [
        "SCS評価制度の目的・位置付け、★3・★4の制度開始目標、今後の具体化事項を最終方針から確認できる",
        "セキュリティ要求を共通化・可視化する制度が、取引先管理や調達基準の設計にどう使われる想定かを把握できる",
        "制度開始前の段階で、法令上の義務と契約・調達上の要求を混同せず準備する基準点になる"
      ],
      audience: ["情報セキュリティ", "調達・購買", "法務・コンプライアンス", "委託先管理", "内部監査"],
      audienceReason: "SCSを取引先管理へ導入する際の制度の位置付け、準備時期、要求事項の骨格を一次資料から確認するため。",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["supply-chain-security-scs-2026"],
      relatedIssues: ["scs-scheme-status-2026", "scs-star3-star4-evaluation", "scs-procurement-contract-implementation"],
      primarySourceIds: ["source-meti-scs-policy-20260327", "source-meti-scs-portal-20260706"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／SCS評価制度の最終構築方針を基礎に、制度の位置付け・開始目標・取引先管理への実装論点を整理した。"
    },
    {
      id: "article-ipa-scs-details-20260421",
      title: "SCS評価制度の詳細情報",
      publisher: "独立行政法人情報処理推進機構（IPA）",
      author: "独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2026-04-21",
      collectedAt: "2026-09-18",
      url: "https://www.ipa.go.jp/security/scs/details.html",
      sourceType: "primary",
      sourceLabel: "一次資料・IPA／SCS評価制度・評価スキーム",
      status: "adopted",
      summary: "SCS評価制度を運営するIPAが、制度運用体制と段階別評価を具体化した公式ページ。★3は一般的なサイバー脅威に対処し得る水準として、セキュリティ専門家の確認・助言を経た自己評価と経営層の自己適合宣誓を用いる。★4は被害拡大防止やサプライチェーン強靱化まで含む水準として、指定された評価機関による第三者評価と技術検証を行う。★3を先に取得しなければ★4を取得できないという関係ではない。",
      whyImportant: [
        "★3と★4で評価主体・確認方法がどう違うかを制度運営主体の一次資料で確認できる",
        "自己評価、専門家確認、第三者評価、技術検証、登録という証跡の流れを調達・監査プロセスへ接続できる",
        "制度開始前に、既存の委託先質問票・監査とSCS評価をどう使い分けるか検討する基礎になる"
      ],
      audience: ["情報セキュリティ", "調達・購買", "委託先管理", "内部監査", "法務・コンプライアンス"],
      audienceReason: "★3・★4の評価方法、関係主体、証跡を把握し、自社の取引先管理・監査手続との重複や不足を棚卸しするため。",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["supply-chain-security-scs-2026"],
      relatedIssues: ["scs-scheme-status-2026", "scs-star3-star4-evaluation", "scs-procurement-contract-implementation"],
      primarySourceIds: ["source-ipa-scs-details-20260421", "source-meti-scs-policy-20260327"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／★3の専門家確認付き自己評価と★4の第三者評価・技術検証を、取引先管理の証跡設計として整理した。"
    },
    {
      id: "article-jftc-cyber-partnership-20251226",
      title: "サプライチェーン全体のサイバーセキュリティ向上のための取引先とのパートナーシップの構築に向けた想定事例及び解説",
      publisher: "公正取引委員会",
      author: "公正取引委員会・経済産業省",
      publishedAt: "2025-12-26",
      collectedAt: "2026-09-18",
      url: "https://www.jftc.go.jp/security_jirei.html",
      sourceType: "primary",
      sourceLabel: "一次資料・公正取引委員会／セキュリティ対策要請と取適法・独占禁止法",
      status: "adopted",
      summary: "発注側が取引先へ組織的なサイバーセキュリティ対策を求める際の価格交渉・費用負担を、取適法・独占禁止法との関係で整理した想定事例と解説。合理的必要性のある対策を要請し、必要性・具体的方法を説明した上で、追加コストについて価格交渉へ真摯に応じ、合意内容を記録するというパートナーシップ型の進め方を示す。一方、要請方法・内容によっては優越的地位の濫用等の問題が生じ得ることも明示する。",
      whyImportant: [
        "サイバーセキュリティ対策を取引条件にする場面を、情報セキュリティだけでなく取適法・独占禁止法の問題として整理できる",
        "組織的対策の追加費用を間接経費として価格交渉する場面まで示しており、調達・価格決定の実務へ落とし込める",
        "SCS等の共通基準を使う場合でも、合理性・説明・協議・費用負担が別途重要であることを一次資料で確認できる"
      ],
      audience: ["調達・購買", "法務・コンプライアンス", "情報セキュリティ", "取引適正化・価格交渉担当", "委託先管理"],
      audienceReason: "取引先へセキュリティ対策を要請するときの必要性説明、価格協議、費用負担、記録を取適法・独占禁止法に沿って設計するため。",
      categories: ["独占禁止法・下請・フリーランス", "契約・取引", "個人情報・AI・情報セキュリティ"],
      relatedTopics: ["supply-chain-security-scs-2026"],
      relatedIssues: ["scs-procurement-contract-implementation", "scs-competition-transaction-law"],
      primarySourceIds: ["source-jftc-cyber-partnership-20251226"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／取引先へのセキュリティ要求を、価格交渉・費用負担・取適法・独占禁止法の観点から整理した。"
    },
    {
      id: "article-unitis-ushijima-scs-contract-20260421",
      title: "委託先にセキュリティ対策を求めるうえで留意すべき法令は？ 取適法、独禁法上の注意点を弁護士が解説",
      publisher: "UNITIS",
      author: "小坂光矢・宮川将毅（牛島総合法律事務所）",
      publishedAt: "2026-04-21",
      collectedAt: "2026-09-18",
      url: "https://unitis.jp/articles/21071/",
      sourceType: "secondary",
      sourceLabel: "実務解説・UNITIS／牛島総合法律事務所・SCSと取引適正化",
      status: "adopted",
      summary: "委託先へセキュリティ対策を求める発注側の視点から、取適法・独占禁止法の適用場面を、価格据置き、対策費の負担、特定製品・サービスの利用強制といった具体例で整理する。SCSの★3・★4・★5を合理的な要求水準の参照枠として紹介しつつ、必要性の説明、取引先とのパートナーシップ、積極的な価格交渉、やり取りの記録まで実務対応へ落としている。個人データの委託先監督や契約上の秘密保持など、発注側が対策を確認する必要性も横断的に接続する。",
      whyImportant: [
        "一次資料の制度説明を超えて、どのような要求・価格決定・費用負担が取適法・独占禁止法上リスクになるかを具体的に整理している",
        "SCSを『合理的な要求範囲を考える参照枠』として調達・契約実務へ落とす視点がある",
        "セキュリティ部門だけで完結せず、価格交渉、委託先監督、契約、経営リスクを横断して運用する必要性が分かる"
      ],
      audience: ["法務・コンプライアンス", "調達・購買", "情報セキュリティ", "委託先管理", "事業部門"],
      audienceReason: "SCSや自社基準を取引先へ要請するとき、要求の合理性、価格協議、契約・監督を一つの実務フローで設計するため。",
      categories: ["独占禁止法・下請・フリーランス", "契約・取引", "個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["supply-chain-security-scs-2026"],
      relatedIssues: ["scs-procurement-contract-implementation", "scs-competition-transaction-law"],
      primarySourceIds: ["source-meti-scs-policy-20260327", "source-ipa-scs-details-20260421", "source-jftc-cyber-partnership-20251226"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／SCSを取引先へ要求する際の合理性、費用負担、価格協議、取適法・独占禁止法上の留意点を実務へ接続した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
