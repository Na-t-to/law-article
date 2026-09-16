(() => {
  const topicSlug = "digital-wage-payment-2026";
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
      id: "source-mhlw-digital-wage-ordinance-20221128",
      title: "労働基準法施行規則の一部を改正する省令（令和4年厚生労働省令第158号）",
      type: "regulation",
      typeLabel: "一次資料・厚生労働省／賃金デジタル払い制度",
      authority: "厚生労働省",
      publishedAt: "2022-11-28",
      url: "https://www.mhlw.go.jp/content/11200000/001017141.pdf",
      importance: "最高",
      whyImportant: "賃金のデジタル払いを可能にした労働基準法施行規則7条の2の改正省令。労働者の同意、指定資金移動業者、受入上限・破綻時弁済・補償・払出し等の法令上の骨格を確認できる。",
      topics: [topicSlug]
    },
    {
      id: "source-mhlw-digital-wage-notice-20221128",
      title: "賃金の口座振込み等について（令和4年11月28日基発1128第4号）",
      type: "guideline",
      typeLabel: "一次資料・厚生労働省／賃金デジタル払い運用通達",
      authority: "厚生労働省",
      publishedAt: "2022-11-28",
      url: "https://www.mhlw.go.jp/content/11200000/001017090.pdf",
      importance: "高",
      whyImportant: "使用者がデジタル払いを実施する際の労使協定、労働者への説明、個別同意等の実務運用を具体化する基準資料。",
      topics: [topicSlug]
    },
    {
      id: "source-mhlw-digital-wage-portal",
      title: "資金移動業者の口座への賃金支払（賃金のデジタル払い）について",
      type: "government",
      typeLabel: "一次資料・厚生労働省／制度ポータル・指定事業者一覧",
      authority: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/zigyonushi/shienjigyou/03_00028.html",
      importance: "最高",
      whyImportant: "使用者・労働者の現行手続、FAQ、法令・通達、指定資金移動業者一覧を一体で確認できる現行制度の公式入口。2026年7月1日時点で指定4社を掲載している。",
      topics: [topicSlug]
    },
    {
      id: "source-mhlw-digital-wage-review-20260916",
      title: "資金移動業者の口座への賃金支払制度について（第211回労働政策審議会労働条件分科会 資料No.1）",
      type: "government",
      typeLabel: "一次資料・厚生労働省／賃金デジタル払い制度見直し",
      authority: "厚生労働省",
      publishedAt: "2026-09-16",
      url: "https://www.mhlw.go.jp/content/11201250/001749946.pdf",
      importance: "最高",
      whyImportant: "制度施行後の検証を踏まえ、資産保全、指定代替口座、第三者認証、1円単位払出しについて、2026年9月時点の具体的な見直し方向を示す最新の一次資料。",
      topics: [topicSlug]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
