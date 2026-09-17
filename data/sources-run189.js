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
      id: "source-diet-fefta-bill-2026",
      title: "第221回国会 外国為替及び外国貿易法の一部を改正する法律案",
      type: "proposal",
      typeLabel: "一次資料・国会／外為法改正法案の審議経過",
      authority: "参議院",
      publishedAt: "2026-03-17",
      url: "https://www.sangiin.go.jp/japanese/joho1/kousei/gian/221/meisai/m221080221027.htm",
      importance: "高",
      whyImportant: "2026年3月17日の法案提出から5月29日の成立、6月5日の公布までの経過と法案要旨を確認でき、法案段階の実務解説を現在の確定法と区別する根拠になる。",
      topics: ["fefta-inward-investment-screening"]
    },
    {
      id: "source-mof-fefta-final-rules-2026",
      title: "「外国為替及び外国貿易法の一部を改正する法律の施行に伴う関係政令の整備等に関する政令」等について",
      type: "regulation",
      typeLabel: "一次資料・財務省／2026年改正外為法の施行政省令・告示",
      authority: "財務省",
      publishedAt: "2026-09-16",
      url: "https://www.mof.go.jp/policy/international_policy/gaitame_kawase/press_release/20260908204517.html",
      importance: "最高",
      whyImportant: "2026年改正外為法の施行政省令・告示が公布され、主要規定の2027年1月4日施行と2月3日の全面適用が確定したことを確認できる。",
      topics: ["fefta-inward-investment-screening"]
    },
    {
      id: "source-mof-fefta-final-summary-2026",
      title: "対内直接投資審査制度の見直しについて（概要資料）",
      type: "regulation",
      typeLabel: "一次資料・財務省／2027年施行外為法改正の最終概要",
      authority: "財務省",
      publishedAt: "2026-09-16",
      url: "https://www.mof.go.jp/policy/international_policy/gaitame_kawase/fdi/260916_koukaiyou_gaiyou_nihongo.pdf",
      importance: "最高",
      whyImportant: "間接取得の具体的な届出閾値、リスク軽減措置、みなし外国投資家、非指定業種への事後介入、指定業種の見直し等を施行直前の確定ルールとして横断確認できる。",
      topics: ["fefta-inward-investment-screening"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
