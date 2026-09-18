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
      id: "source-nco-critical-infrastructure-safety-guideline-20260911",
      title: "重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン",
      type: "guideline",
      typeLabel: "国家サイバー統括室／重要インフラ安全基準等策定ガイドライン（確定版）",
      authority: "国家サイバー統括室",
      publishedAt: "2026-09-11",
      url: "https://www.cyber.go.jp/policy/group/infra/siryou/index.html",
      importance: "最高",
      whyImportant: "2026年8月の案段階を終え、重要インフラ所管省庁等が分野別の安全基準等を策定・改定する際に参照するガイドラインが2026年9月11日に確定したことを確認できる。重要インフラ統一基準とともに2026年10月1日施行予定。",
      topics: ["cyber-countermeasures-critical-infrastructure"]
    },
    {
      id: "source-nco-cyber-common-reporting-20260915",
      title: "サイバー攻撃時の報告様式の統一について（DDoS攻撃、ランサムウェア事案、その他サイバー攻撃等）",
      type: "guideline",
      typeLabel: "国家サイバー統括室／サイバー攻撃被害報告の共通様式",
      authority: "国家サイバー統括室",
      publishedAt: "2026-09-15",
      url: "https://www.cyber.go.jp/policy/group/cyber/policy.html",
      importance: "高",
      whyImportant: "関係省庁の被害報告一元化申合せ、DDoS・ランサムウェア共通様式が改定され、新たに『その他サイバー攻撃等事案共通様式』が整備された。複数当局への報告を共通様式で扱う実務の基準点になる。",
      topics: ["cyber-countermeasures-critical-infrastructure", "cyber-supply-chain"]
    },
    {
      id: "source-fsa-cyber-common-reporting-guidelines-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について",
      type: "guideline",
      typeLabel: "金融庁／サイバーセキュリティ事案報告の共通様式移行・監督指針等改正",
      authority: "金融庁",
      publishedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      importance: "最高",
      whyImportant: "金融分野の多数の監督指針・事務ガイドラインについて、サイバーセキュリティ事案の報告様式を関係省庁共通様式へ移行する確定改正。2026年10月1日から適用される。",
      topics: ["cyber-countermeasures-critical-infrastructure"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
