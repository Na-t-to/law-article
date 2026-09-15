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
      id: "source-fsa-corporate-governance-code-2026",
      title: "コーポレートガバナンス・コード（2026年改訂版）の確定について",
      type: "government",
      typeLabel: "一次資料・金融庁／コーポレートガバナンス・コード2026年改訂",
      authority: "金融庁・東京証券取引所",
      publishedAt: "2026-07-21",
      url: "https://www.fsa.go.jp/news/r7/singi/20260721.html",
      importance: "最高",
      whyImportant: "2026年改訂版の確定、公表資料、パブリックコメント結果、改訂趣旨、取締役会機能強化の事例集等への入口となる公式ページ。改訂の確定内容を追う基準資料。",
      topics: ["corporate-governance-code-2026"]
    },
    {
      id: "source-jpx-corporate-governance-code-2026",
      title: "コーポレートガバナンス・コード（2026年7月版）の公表について",
      type: "guideline",
      typeLabel: "一次資料・東京証券取引所／上場規程・コーポレートガバナンス・コード",
      authority: "東京証券取引所",
      publishedAt: "2026-07-21",
      url: "https://www.jpx.co.jp/corporate/news/news-releases/1020/20260721-01.html",
      importance: "最高",
      whyImportant: "2026年改訂に伴う有価証券上場規程の一部改正を2026年7月21日から施行したことを確認できる一次資料。改訂イベントの施行日を確定する根拠になる。",
      topics: ["corporate-governance-code-2026"]
    },
    {
      id: "source-jpx-corporate-governance-code-current",
      title: "コーポレートガバナンス・コード",
      type: "guideline",
      typeLabel: "一次資料・東京証券取引所／現行コーポレートガバナンス・コード",
      authority: "東京証券取引所",
      publishedAt: "不明",
      url: "https://www.jpx.co.jp/equities/listing/cg/",
      importance: "最高",
      whyImportant: "現行コードと適用市場の公式入口。プライム・スタンダード市場は全原則、グロース市場は基本原則について、実施しないものがある場合に理由説明が求められることを確認できる。",
      topics: ["corporate-governance-code-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
