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
      id: "source-egov-important-economic-security-information-act-2024",
      title: "重要経済安保情報の保護及び活用に関する法律（令和6年法律第27号）",
      type: "law",
      typeLabel: "法令・e-Gov／重要経済安保情報保護活用法",
      authority: "内閣府",
      publishedAt: "2024-05-17",
      url: "https://laws.e-gov.go.jp/law/506AC0000000027",
      importance: "高",
      whyImportant: "経済安全保障分野のセキュリティ・クリアランス制度について、重要経済安保情報の指定・提供、適合事業者、適性評価、情報管理、罰則等の法的枠組みを定める中核法令。",
      topics: ["economic-security-clearance"]
    },
    {
      id: "source-cao-security-clearance-business-guideline-20250502",
      title: "重要経済安保情報保護活用法の運用に関するガイドライン（適合事業者編）",
      type: "guideline",
      typeLabel: "一次資料・内閣府／適合事業者向けガイドライン",
      authority: "内閣府",
      publishedAt: "2025-05-02",
      url: "https://www.cao.go.jp/keizai_anzen_hosho/hogokatsuyou/doc/jigyousyagl.pdf",
      importance: "高",
      whyImportant: "適合事業者の認定、社内規程・管理体制、施設設備、教育、適性評価候補者、個人情報管理、アクセス制御、文書管理、契約・変更報告等を実務レベルまで具体化した事業者向けの公式ガイドライン。",
      topics: ["economic-security-clearance"]
    },
    {
      id: "source-cao-security-clearance-annual-report-20260626",
      title: "重要経済安保情報の指定及びその解除、適性評価の実施並びに適合事業者の認定の状況に関する報告（概要）",
      type: "report",
      typeLabel: "一次資料・内閣府／重要経済安保情報保護活用法の運用状況",
      authority: "内閣府",
      publishedAt: "2026-06-26",
      url: "https://www.cao.go.jp/keizai_anzen_hosho/kokkaihoukoku/houkoku_gaiyou.pdf",
      importance: "高",
      whyImportant: "2025年5月16日の法施行後から同年末までの初年度運用について、指定件数、適性評価・調査、適合事業者認定、通報、是正、有識者意見を公式統計で確認できる最初の国会報告。",
      topics: ["economic-security-clearance"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();