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
      id: "source-nara-hospital-system-outage-report-20260831",
      title: "市立奈良病院におけるシステム障害に係る報告について",
      type: "report",
      typeLabel: "一次資料・奈良市／医療情報システム障害検証",
      authority: "奈良市",
      publishedAt: "2026-08-31",
      url: "https://www.city.nara.lg.jp/soshiki/93/273750.html",
      importance: "高",
      whyImportant: "サイバー攻撃ではなくセキュリティ監視装置の監視状態変化とソフトウェア更新を契機とする誤検知・自動遮断が、電子カルテ停止や救急受入停止へ連鎖した事案を、ログ・関係事業者ヒアリングに基づき検証し、更新管理、自動遮断、ログ保存、緊急時の判断権限、事業者との役割分担まで再発防止策を具体化した公式報告。",
      topics: ["cyber-supply-chain"]
    },
    {
      id: "source-mext-medical-research-ethics-guideline-20260827",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」の一部改正について",
      type: "guideline",
      typeLabel: "一次資料・文部科学省／生命・医学系研究倫理指針令和8年改正",
      authority: "文部科学省・厚生労働省・経済産業省",
      publishedAt: "2026-08-28",
      url: "https://www.mext.go.jp/b_menu/houdou/mext_01679.html",
      importance: "最高",
      whyImportant: "2026年8月27日告示・12月1日施行の生命・医学系研究倫理指針改正について、IC・オプトアウトの整理、仮名加工情報等の個人情報保護法への接続、多機関共同研究の一括倫理審査、既存試料・情報の提供・外国提供、経過措置を公式に示す基礎資料。",
      topics: ["medical-biological-research-ethics-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
