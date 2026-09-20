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
  const topicSlug = "social-insurance-expansion-part-time-workers";
  const additions = [
    {
      id: "source-mhlw-pension-wage-threshold-decrees-20260911",
      title: "社会経済の変化を踏まえた年金制度の機能強化のための国民年金法等の一部を改正する等の法律の一部の施行に伴う関係政令の整備に関する政令等の公布について",
      type: "law",
      typeLabel: "施行期日政令・整備政令等／公布通知",
      authority: "厚生労働省",
      publishedAt: "2026-09-11",
      url: "https://www.mhlw.go.jp/hourei/doc/tsuchi/T260915T0020.pdf",
      importance: "最高",
      whyImportant: "令和8年政令第275号により短時間労働者の賃金要件撤廃日を2026年10月1日と確定し、整備政令・省令で最低賃金法上の特定減額特例対象者の取扱い等を具体化した一次資料。",
      topics: [topicSlug]
    },
    {
      id: "source-mhlw-short-regular-self-employed-social-insurance-20260914",
      title: "勤務時間が短い正規型の労働者として事業所に使用されている個人事業主等に係る被保険者資格の取扱い等について",
      type: "guideline",
      typeLabel: "行政通知・被保険者資格／常用的使用関係",
      authority: "厚生労働省",
      publishedAt: "2026-09-14",
      url: "https://www.mhlw.go.jp/stf/houdou/newpage_75927.html",
      importance: "高",
      whyImportant: "個人事業主等を勤務時間が短い正規型労働者として雇用する場合について、報酬の対価性と経常的な労務提供を基に社会保険の常用的使用関係・被保険者資格を判断する行政上の取扱いを明確化した一次資料。",
      topics: [topicSlug]
    }
  ];
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();
