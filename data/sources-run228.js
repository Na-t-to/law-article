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
  const addition = {
    id: "source-ipa-ransomware-lessons-20260908",
    title: "ランサムウェア被害から学ぶ教訓集 ～経営者のためのランサムウェア対策ハンドブック～",
    type: "report",
    typeLabel: "一次資料・IPA／ランサムウェア被害の教訓集",
    authority: "独立行政法人情報処理推進機構（IPA）",
    publishedAt: "2026-09-08",
    url: "https://www.ipa.go.jp/security/todokede/crack-virus/ransomware_lessons_learned.html",
    importance: "高",
    whyImportant: "国内の被害組織へのヒアリング等を基礎に、ランサムウェアの侵入・二重脅迫、経営判断、初動、復旧、バックアップ、ログ、対外説明等を具体的に整理した実務基礎資料。技術対策と危機管理・法務対応を接続する材料となる。",
    topics: ["cyber-countermeasures-critical-infrastructure"]
  };
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) window.SOURCE_DATA = existing.concat(addition);
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
  const addition = {
    id: "source-jftc-oki-hitachi-atm-merger-20260918",
    title: "沖電気工業株式会社、株式会社日立製作所及び日立チャネルソリューションズ株式会社によるATM、営業店端末等の事業の統合に関する審査結果について",
    type: "decision",
    typeLabel: "企業結合・個別審査事例",
    authority: "公正取引委員会",
    publishedAt: "2026-09-18",
    url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260918kiketsu_oh.html",
    importance: "高",
    whyImportant: "ATMモジュール等の高シェア市場について水平・垂直・混合型の競争影響を検討し、競争上機微な情報の遮断、既存取引先への供給保証、監視事業者への情報提供、監視受託者によるモニタリング等の問題解消措置を前提に問題なしと判断した近時の企業結合審査事例。",
    topics: ["merger-control-antitrust"]
  };
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) window.SOURCE_DATA = existing.concat(addition);
})();
