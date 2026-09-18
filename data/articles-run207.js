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
