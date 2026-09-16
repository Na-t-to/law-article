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
      id: "source-moj-company-law-outline-round1-2026",
      title: "法制審議会会社法制（株式・株主総会等関係）部会第15回会議",
      type: "proposal",
      typeLabel: "一次資料・要綱案取りまとめ検討",
      authority: "法務省／法制審議会会社法制（株式・株主総会等関係）部会",
      publishedAt: "2026-06-24",
      url: "https://www.moj.go.jp/shingi1/shingi04900001_00339.html",
      importance: "最高",
      whyImportant: "中間試案へのパブリックコメントと参考人意見を踏まえ、会社法制見直しが要綱案取りまとめフェーズへ移った基準点。株式交付・現物出資、バーチャル株主総会、実質株主確認制度について中間試案からの修正を含む提案が示された。",
      topics: ["companies-act-review-shareholders"]
    },
    {
      id: "source-moj-company-law-outline-round3-2026",
      title: "法制審議会会社法制（株式・株主総会等関係）部会第17回会議",
      type: "proposal",
      typeLabel: "一次資料・要綱案取りまとめ検討",
      authority: "法務省／法制審議会会社法制（株式・株主総会等関係）部会",
      publishedAt: "2026-08-26",
      url: "https://www.moj.go.jp/shingi1/shingi04900001_00341.html",
      importance: "最高",
      whyImportant: "要綱案取りまとめに向けた第3回の検討。調査者・検査役、指名委員会等設置会社、責任限定契約、事業報告等と有価証券報告書の開示合理化を扱い、中間試案後の会社法改正論点が具体化していることを確認できる。",
      topics: ["companies-act-review-shareholders", "agm-pre-disclosure-company-law-reform"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
