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
