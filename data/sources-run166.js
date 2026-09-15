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
      id: "source-fsa-fiea-asset-management-nonlisted-intermediary-2025",
      title: "令和6年金融商品取引法等改正に係る政令・内閣府令案等に関するパブリックコメントの結果等について",
      type: "government",
      typeLabel: "一次資料・金融庁／2024年金商法改正・投資運用／非上場仲介",
      authority: "金融庁",
      publishedAt: "2025-03-28",
      url: "https://www.fsa.go.jp/news/r6/shouken/20250328/20250328.html",
      importance: "最高",
      whyImportant: "投資運用関係業務受託業、投資運用業、非上場有価証券特例仲介等業務に関する2024年金商法改正の下位法令・監督指針の最終化と、2025年5月1日の施行・適用を確認できる。",
      topics: ["startup-growth-capital-unlisted-market"]
    },
    {
      id: "source-jsda-startup-growth-capital-report-2025",
      title: "スタートアップ企業等への成長資金供給等に関する懇談会 報告書",
      type: "report",
      typeLabel: "一次資料・日本証券業協会／スタートアップ成長資金供給報告書",
      authority: "日本証券業協会・金融庁",
      publishedAt: "2025-09-05",
      url: "https://www.jsda.or.jp/about/kaigi/chousa/startup/file/startup_houkokusho_0905.pdf",
      importance: "高",
      whyImportant: "非上場株式の発行・流通市場の活性化について、2027年度1,800億円のKGI、J-Ships、セカンダリー市場、SPV・投資信託、投資者層、原則勧誘禁止見直し等の方向性を体系化した基礎資料。",
      topics: ["startup-growth-capital-unlisted-market"]
    },
    {
      id: "source-jsda-unlisted-securities-rules-2026",
      title: "「特定投資家等に対する店頭有価証券の取引に関する規則」の制定等について",
      type: "guideline",
      typeLabel: "一次資料・日本証券業協会／非上場株式取引自主規制",
      authority: "日本証券業協会",
      publishedAt: "2026-06-16",
      url: "https://www.jsda.or.jp/about/public/kekka/files/20260616_hijojo_syushi.pdf",
      importance: "最高",
      whyImportant: "特定投資家・準特定投資家向けの新たな勧誘・取引制度、銘柄検証・情報提供・顧客確認等の要件、非上場株式の原則勧誘禁止見直しと2026年6月16日施行を確認できる。",
      topics: ["startup-growth-capital-unlisted-market"]
    },
    {
      id: "source-fsa-growth-finance-ordinance-2026",
      title: "「金融商品取引法第二条に規定する定義に関する内閣府令の一部を改正する内閣府令」等の公布及びパブリックコメントの結果等について",
      type: "government",
      typeLabel: "一次資料・金融庁／2026年成長資金・外国ファンド特例等",
      authority: "金融庁",
      publishedAt: "2026-09-15",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260915/20260915.html",
      importance: "最高",
      whyImportant: "国内VCから海外VCへの出資に関する外国ファンド特例とデジタル社債等のグループ勧誘規制の緩和を2026年9月16日施行、券面不発行の預託証券に係る指定を10月5日施行とする最終内閣府令改正を確認できる。",
      topics: ["startup-growth-capital-unlisted-market"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
