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
      id: "source-caa-kinpodo-funeral-price-order-20260918",
      title: "株式会社金宝堂に対する景品表示法に基づく措置命令について",
      type: "guideline",
      typeLabel: "措置命令・執行事例",
      authority: "消費者庁",
      publishedAt: "2026-09-18",
      url: "https://www.caa.go.jp/notice/entry/047522/",
      importance: "高",
      whyImportant: "広告されたサービス内容と最低価格の対応関係を、有利誤認として実際に執行した最新の一次資料。『○円〜』表示を実際の提供条件・価格分布と突合する重要性を確認できる。",
      topics: ["advertising-display-control"]
    },
    {
      id: "source-fsa-cyber-reporting-common-forms-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について",
      type: "guideline",
      typeLabel: "監督指針等改正・パブリックコメント結果",
      authority: "金融庁",
      publishedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      importance: "最高",
      whyImportant: "2026年10月1日から、銀行・保険・証券・貸金・資金決済・暗号資産等の幅広い金融分野で、システム障害・サイバー事案の監督当局報告を関係省庁の共通様式へ移行する最終的な監督指針改正と適用日を確認できる。",
      topics: ["cyber-countermeasures-critical-infrastructure"]
    }
  ];

  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();
