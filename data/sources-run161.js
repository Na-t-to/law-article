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
      id: "source-jpx-market-manipulation-guide",
      title: "相場操縦規制",
      type: "guideline",
      typeLabel: "一次資料・日本取引所自主規制法人／相場操縦・売買審査",
      authority: "日本取引所グループ・日本取引所自主規制法人",
      url: "https://www.jpx.co.jp/regulation/preventing/manipulation/",
      importance: "最高",
      whyImportant: "金融商品取引法159条の相場操縦規制と、日本取引所自主規制法人が売買審査で注視する対当売買、見せ玉、寄付き・終値への関与等の具体的な注文・売買形態を示す基礎資料。売買管理ルールとアラート設計の起点になる。",
      topics: ["market-manipulation-trading-controls"]
    },
    {
      id: "source-sesc-unfair-trading-casebook-2026",
      title: "金融商品取引法における課徴金事例集～不公正取引編～（令和7年度版）",
      type: "government",
      typeLabel: "一次資料・証券取引等監視委員会／課徴金事例集・不公正取引",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-06-23",
      url: "https://www.fsa.go.jp/sesc/jirei/torichou/20260623.html",
      importance: "最高",
      whyImportant: "2025年4月から2026年3月を中心とするインサイダー取引・相場操縦等の課徴金勧告事案を分析した最新年次事例集。個別事案だけでなく、監視委の問題意識と再発防止上の着眼点を横断的に確認できる。",
      topics: ["market-manipulation-trading-controls"]
    },
    {
      id: "source-sesc-ecomic-market-manipulation-2026",
      title: "エコミック株式に係る相場操縦に対する課徴金納付命令の勧告について",
      type: "government",
      typeLabel: "一次資料・証券取引等監視委員会／相場操縦・課徴金勧告",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-09-15",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260915-1.html",
      importance: "最高",
      whyImportant: "自己の買い注文に売り注文を対当させる行為、成行・高指値の買上がり、買い注文の重層的発注を組み合わせた10取引日の一連売買について、金商法159条2項1号違反として課徴金勧告した最新執行例。自主規制法人からの情報提供を端緒とした監視連携も確認できる。",
      topics: ["market-manipulation-trading-controls"]
    },
    {
      id: "source-fsa-nitto-market-manipulation-order-2018",
      title: "日東電工株式会社株式に係る相場操縦に対する課徴金納付命令の決定について",
      type: "government",
      typeLabel: "一次資料・金融庁／相場操縦・課徴金納付命令",
      authority: "金融庁",
      publishedAt: "2018-06-12",
      url: "https://www.fsa.go.jp/news/30/shouken/20180612-1.html",
      importance: "高",
      whyImportant: "引値保証取引を背景とする日東電工株式の相場操縦について6億8424万円の課徴金納付命令を決定した一次資料。2025年6月27日の取消訴訟判決を解説する二次資料の基礎となる行政処分を確認できる。",
      topics: ["market-manipulation-trading-controls"]
    },
    {
      id: "source-miura-closing-price-market-manipulation-2025",
      title: "危機管理INSIGHTS Vol.24：引値保証取引と相場操縦",
      type: "article",
      typeLabel: "実務解説・法律事務所／引値保証取引・誘引目的",
      authority: "三浦法律事務所",
      publishedAt: "2025-07-02",
      url: "https://note.com/miuraandpartners/n/n370301afbe36",
      importance: "高",
      whyImportant: "2025年6月27日の東京地裁判決について、誘引目的の判断枠組み、実需・経済合理性との関係、終値形成への影響、当時の自主規制ガイドラインと社内ルールまで具体的に整理する。相場操縦規制を売買執行・内部管理へ落とす付加価値が高い。",
      topics: ["market-manipulation-trading-controls"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);

  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? values : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  ["source-fsa-fiea-law-2026", "source-fsa-fiea-unfair-trading-explanation-2026"].forEach((id) => {
    const source = (window.SOURCE_DATA || []).find((item) => item && item.id === id);
    if (source) source.topics = addUnique(source.topics, "market-manipulation-trading-controls");
  });
})();
