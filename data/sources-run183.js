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

  const topicSlug = "cyber-countermeasures-critical-infrastructure";
  const additions = [
    {
      id: "source-cyber-capability-act-2025",
      title: "重要電子計算機に対する不正な行為による被害の防止に関する法律（令和7年法律第42号）",
      type: "law",
      typeLabel: "一次資料・サイバー対処能力強化法",
      authority: "内閣府",
      publishedAt: "2025-05-23",
      url: "https://laws.e-gov.go.jp/law/507AC0000000042",
      importance: "最高",
      whyImportant: "官民連携、通信情報の利用、アクセス・無害化等を制度化し、特別社会基盤事業者に特定重要電子計算機の届出・特定侵害事象等の報告を求める新法の根拠条文。",
      topics: [topicSlug]
    },
    {
      id: "source-cyber-reporting-order-2026",
      title: "重要電子計算機に対する不正な行為による被害の防止に関する法律に基づく特別社会基盤事業者による特定侵害事象等の報告等に関する命令",
      type: "regulation",
      typeLabel: "一次資料・特定重要電子計算機の届出／特定侵害事象等の報告命令",
      authority: "内閣府ほか関係府省",
      publishedAt: "2026-05-28",
      url: "https://laws.e-gov.go.jp/law/508M60000F5A004",
      importance: "最高",
      whyImportant: "特別社会基盤事業者による特定重要電子計算機の届出事項・期限、変更届、特定侵害事象等の報告対象・様式等を具体化する主務省令。",
      topics: [topicSlug]
    },
    {
      id: "source-cyber-reporting-exclusion-notice-2026",
      title: "特別社会基盤事業者による特定侵害事象等の報告等に関する命令第二条第一項ただし書の指定（関係府省告示第1号）",
      type: "regulation",
      typeLabel: "一次資料・届出除外対象の指定／2026年9月15日告示",
      authority: "内閣府・総務省・法務省・財務省・厚生労働省・農林水産省・経済産業省・国土交通省",
      publishedAt: "2026-09-15",
      url: "https://www.mof.go.jp/about_mof/act/kokuji_tsuutatsu/kokuji/KO-20260915-0001.pdf",
      importance: "最高",
      whyImportant: "命令2条1項ただし書の指定対象としてMicrosoft WindowsとWindows Serverを定め、2026年10月1日から施行することを明記した運用直前の告示。",
      topics: [topicSlug]
    },
    {
      id: "source-cyber-report-form-notice-2026",
      title: "特別社会基盤事業者による特定侵害事象等の報告等に関する命令第四条第二項の様式（関係府省告示第2号）",
      type: "regulation",
      typeLabel: "一次資料・特定侵害事象等の報告様式／2026年9月15日告示",
      authority: "内閣府・総務省・法務省・財務省・厚生労働省・農林水産省・経済産業省・国土交通省",
      publishedAt: "2026-09-15",
      url: "https://www.mof.go.jp/about_mof/act/kokuji_tsuutatsu/kokuji/KO-20260915-0002.pdf",
      importance: "最高",
      whyImportant: "特定侵害事象等の報告様式をDDoS、ランサムウェア、その他の事象に分け、既存の関係省庁共通様式へ接続したうえで2026年10月1日施行を明記した告示。",
      topics: [topicSlug]
    },
    {
      id: "source-ipa-vulnerability-partnership-draft-2026",
      title: "情報セキュリティ早期警戒パートナーシップガイドライン改訂案などの公開",
      type: "guideline",
      typeLabel: "一次資料・脆弱性情報取扱い／ガイドライン改訂案",
      authority: "独立行政法人情報処理推進機構",
      publishedAt: "2026-09-14",
      url: "https://www.ipa.go.jp/security/reports/vuln/kenkyukai-report2026.html",
      importance: "高",
      whyImportant: "サイバー対処能力強化法に基づく内閣府からIPA・JPCERT/CCへの要請等を早期警戒パートナーシップへ組み込む改訂案で、脆弱性情報が政府へ連携される実務フローを具体化する。",
      topics: [topicSlug]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
