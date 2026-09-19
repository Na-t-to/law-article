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
      id: "source-fsa-cyber-reporting-common-form-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について",
      type: "guideline",
      typeLabel: "一次資料・金融庁／サイバー攻撃報告共通様式・監督指針改正",
      authority: "金融庁",
      publishedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      importance: "高",
      whyImportant: "2026年9月15日の関係省庁申合せ改正により、DDoS・ランサムウェアに加えて「その他サイバー攻撃等事案共通様式」が整備されたことを公式に確認できる。金融庁所管の監督指針等も共通様式へ移行し、2026年10月1日から適用されるため、インシデント時の報告手順・様式・社内連絡フローの具体化に直結する。",
      topics: ["cyber-countermeasures-critical-infrastructure"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
