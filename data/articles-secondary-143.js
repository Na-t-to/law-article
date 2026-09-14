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
      id: "article-tmi-lodging-membership-prepaid-1-2026",
      title: "宿泊会員権の前払式支払手段該当性（第1回）",
      publisher: "TMI総合法律事務所",
      author: "清水秋帆",
      publishedAt: "2026-05-11",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18316.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／資金決済法・前払式支払手段",
      status: "adopted",
      summary: "サーバ上で管理される宿泊会員権を題材に、資金決済法3条の前払式支払手段の定義、届出・登録や発行保証金等の基本規制、6か月未満の有効期間等の適用除外を確認したうえで、金融庁ガイドライン上の『証拠証券』『本人であることを確認する手段等』との境界を提示する基礎編。",
      whyImportant: [
        "会員権という名称ではなく、対価、価値の記録、商品・役務への利用という前払式支払手段の要件からサービス設計を分解している",
        "該当する場合の届出・登録・発行保証金等と、そもそも非該当となる類型、法の適用除外となる類型を分けており、商品設計時の判断順序に使いやすい",
        "NFT等を含むサーバ型宿泊会員権という具体例を置くことで、紙の商品券・会員証を前提とした古い整理をデジタルサービスへ接続している"
      ],
      audience: ["企業法務", "Fintech・決済担当", "ホテル・不動産サービス企画", "Web3・NFT事業担当"],
      audienceReason: "会員権・利用権を先払いで販売するサービスについて、資金決済法上の前払式支払手段該当性をローンチ前に構造化して確認するため。",
      categories: ["事業再生・金融", "AI・デジタル", "契約"],
      relatedTopics: ["prepaid-payment-instruments-memberships"],
      relatedIssues: ["prepaid-membership-scope", "prepaid-membership-regulatory-consequences", "prepaid-membership-nft-server"],
      primarySourceIds: ["source-payment-services-act-prepaid", "source-fsa-prepaid-guideline-current", "source-fsa-prepaid-guideline-comments-2010"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／会員権・NFT・サーバ型サービスについて、前払式支払手段の基本要件と非該当・適用除外・発行者規制を一つの確認フローとして追加した。"
    },
    {
      id: "article-tmi-lodging-membership-prepaid-2-2026",
      title: "宿泊会員権の前払式支払手段該当性（第2回）",
      publisher: "TMI総合法律事務所",
      author: "清水秋帆",
      publishedAt: "2026-05-11",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18317.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／資金決済法・サーバ型会員権",
      status: "adopted",
      summary: "金融庁ガイドラインに列挙された『証拠証券』『本人であることを確認する手段等』の沿革と判断基準を掘り下げ、オンラインで購入・管理するサーバ型宿泊会員権では後者を中心に検討する実務アプローチを示す。本人確認、別手段での権利行使、紛失時の再発行・価値維持と、NFTのように証票自体へ利用価値が結び付く設計を対比する。",
      whyImportant: [
        "前払式支払手段に該当しない『証拠証券』と『本人であることを確認する手段等』の関係を、前払式証票法時代からの沿革と2010年パブリックコメントまで遡って整理している",
        "サーバ型では、単なる氏名やクレジットカード番号の入力では足りず、真正な権利者を確実に認識できる本人確認、別手段による権利行使、紛失時の価値維持等を組み合わせて見る必要があることを具体化している",
        "NFTを提示した者が宿泊できる設計など、証票・トークン自体に価値が結び付く場合は前払式支払手段に該当する可能性が高まるという、Web3サービスにも転用できる示唆がある"
      ],
      audience: ["企業法務", "Fintech・決済担当", "ホテル・不動産サービス企画", "Web3・NFT事業担当"],
      audienceReason: "サーバ型会員権を『本人確認用ID』として非該当に整理できる条件と、トークン自体に価値が結び付く場合の境界を、規約・UI・認証・再発行設計へ落とすため。",
      categories: ["事業再生・金融", "AI・デジタル", "契約"],
      relatedTopics: ["prepaid-payment-instruments-memberships"],
      relatedIssues: ["prepaid-membership-scope", "prepaid-membership-identity-exclusion", "prepaid-membership-nft-server"],
      primarySourceIds: ["source-payment-services-act-prepaid", "source-fsa-prepaid-guideline-current", "source-fsa-prepaid-guideline-comments-2010"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／サーバ型会員権について、『証拠証券』『本人であることを確認する手段等』の判断基準とNFT等との境界を具体化した。"
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
