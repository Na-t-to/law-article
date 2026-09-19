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
      id: "source-moj-ebl-interim-20230308",
      title: "『船荷証券に関する規定等の見直しに関する中間試案』の取りまとめ",
      type: "report",
      typeLabel: "一次資料・法務省／電子船荷証券中間試案",
      authority: "法務省・法制審議会商法（船荷証券等関係）部会",
      publishedAt: "2023-03-30",
      url: "https://www.moj.go.jp/shingi1/shingi04900001_00192.html",
      importance: "高",
      whyImportant: "電子船荷証券記録の名称、発行、支配、技術的要件、紙との転換、譲渡、効力、強制執行等について、2023年中間試案と補足説明への公式導線を提供する。最終要綱前の検討経過として位置付けて読む必要がある。",
      topics: ["electronic-bill-of-lading-trade-dx"]
    },
    {
      id: "source-moj-ebl-outline-20240909",
      title: "商法（船荷証券等関係）等の改正に関する要綱",
      type: "report",
      typeLabel: "一次資料・法務省／電子船荷証券の改正要綱",
      authority: "法務省・法制審議会",
      publishedAt: "2024-09-09",
      url: "https://www.moj.go.jp/shingi1/shingi03500044_00004.html",
      importance: "高",
      whyImportant: "2024年9月9日に法制審議会が全会一致で採択し法務大臣へ答申した、船荷証券等の電子化に関する立法方針の現行到達点。成立済み法律ではない点を含め、改正の段階を判定する基礎資料となる。",
      topics: ["electronic-bill-of-lading-trade-dx"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
