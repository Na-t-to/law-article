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
  const topicSlug = "startup-capital-raising-fiea-2026";
  const additions = [
    {
      id: "source-egov-fiea-startup-capital-2027",
      title: "金融商品取引法（令和9年4月1日施行・令和8年法律第64号反映）",
      type: "law",
      typeLabel: "法令・施行時点",
      authority: "e-Gov法令検索",
      publishedAt: "2026-07-23",
      url: "https://laws.e-gov.go.jp/law/323AC0000000025/20270401_508AC0000000064",
      importance: "最高",
      whyImportant: "令和8年法律第64号による金融商品取引法改正のうち、2027年4月1日施行となる条文時点を一次資料で確認でき、スタートアップ資金調達の施行日を二次資料だけに依存せず管理できる。",
      topics: [topicSlug]
    },
    {
      id: "source-fsa-vf-rule-20260915",
      title: "『金融商品取引法第二条に規定する定義に関する内閣府令の一部を改正する内閣府令』等の公布及びパブリックコメントの結果等について",
      type: "guideline",
      typeLabel: "内閣府令・パブリックコメント結果",
      authority: "金融庁",
      publishedAt: "2026-09-15",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260915/20260915.html",
      importance: "高",
      whyImportant: "国内スタートアップの海外進出促進のため、国内ベンチャーファンドから海外ベンチャーファンドへ出資する場合の外国ファンド特例の要件緩和を示し、2026年9月16日の施行日まで確認できる一次資料。",
      topics: [topicSlug]
    }
  ];
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
  const lawSource = window.SOURCE_DATA.find((item) => item && item.id === "source-fsa-fiea-law-2026");
  if (lawSource) {
    const topics = Array.isArray(lawSource.topics) ? lawSource.topics.slice() : [];
    if (!topics.includes(topicSlug)) topics.push(topicSlug);
    lawSource.topics = topics;
  }
})();
