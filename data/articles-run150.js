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
      id: "article-fsa-frontier-ai-financial-response-2026",
      title: "「フロンティアAIによる脅威変化を踏まえた金融機関等の短期的な対応」に係る要請について",
      publisher: "金融庁・日本銀行",
      author: "金融庁・日本銀行",
      publishedAt: "2026-05-22",
      collectedAt: "2026-09-15",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260522-5/20260522.html",
      sourceType: "primary",
      sourceLabel: "一次資料・フロンティアAI／金融機関サイバー対応",
      status: "adopted",
      summary: "フロンティアAIが脆弱性探索・攻撃能力を高める可能性を踏まえ、金融機関等に短期的なサイバーセキュリティ対応を求める金融庁・日本銀行の要請。重要なサービス・IT資産の特定、技術負債の解消、脆弱性・パッチ管理に必要な人員・体制、保守契約や代替策、外部組織との連携などを経営課題として点検するよう求めている。",
      whyImportant: [
        "令和8事務年度の証券モニタリング基本方針がフロンティアAIをシステムリスクの重点に据える際の直接の一次資料を確認できる",
        "AIリスクを抽象的な将来リスクではなく、重要サービス・技術負債・パッチ運用・ベンダー保守・代替策という具体的な統制へ落としている",
        "システム部門だけでなく、経営陣が短期的な対応計画と優先順位を持つべき事項として整理されている"
      ],
      audience: ["金融商品取引業者", "金融機関の法務・コンプライアンス", "情報セキュリティ", "システムリスク管理", "内部監査"],
      audienceReason: "証券モニタリング上のフロンティアAI・サイバー重点を、具体的なシステム統制・経営管理の点検項目へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["securities-monitoring-system-frontier-ai-2026"],
      primarySourceIds: ["source-fsa-frontier-ai-financial-response-2026"],
      whatChanged: "一次資料補強／既存の証券モニタリングテーマで扱っていたフロンティアAI・サイバー重点に、金融庁・日本銀行の直接要請を接続した。"
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
