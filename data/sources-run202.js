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
      id: "source-fsa-ssbj-disclosure-ordinance-20260220",
      title: "『企業内容等の開示に関する内閣府令及び特定有価証券の内容等の開示に関する内閣府令の一部を改正する内閣府令』等の公布及びパブリックコメントの結果について",
      type: "government_material",
      typeLabel: "一次資料・金融庁／SSBJ基準の強制適用・Scope3セーフハーバー等",
      authority: "金融庁",
      publishedAt: "2026-02-20",
      url: "https://www.fsa.go.jp/news/r7/shouken/20260220/20260220.html",
      importance: "最高",
      whyImportant: "東証プライム上場会社へのSSBJ基準の段階的な強制適用、平均時価総額による対象判定、二段階開示、Scope3・将来情報の推論過程と社内手続、Scope3のセーフハーバー、適用事業年度を確定資料として確認できる。",
      topics: ["ssbj-sustainability-disclosure-2026"]
    },
    {
      id: "source-ssbj-shk-practical-standard-20260611",
      title: "サステナビリティ開示実務対応基準第1号『温対法におけるSHK制度の定める方法により測定し報告する温室効果ガス排出を用いて「気候基準」の定めに従う場合の開示』",
      type: "standard",
      typeLabel: "一次資料・サステナビリティ基準委員会／SHK制度とSSBJ気候基準の実務対応基準",
      authority: "サステナビリティ基準委員会（SSBJ）",
      publishedAt: "2026-06-11",
      url: "https://www.ssb-j.jp/jp/ssbj_standards/2026-0611.html",
      importance: "最高",
      whyImportant: "温対法SHK制度に基づき測定・報告する温室効果ガス排出をSSBJ気候基準に従う開示へ用いる場合について、実務上見解が分かれていた点を明確化した基準設定主体の正式資料。",
      topics: ["ssbj-sustainability-disclosure-2026"]
    },
    {
      id: "source-fsa-ssbj-shk-designation-20260915",
      title: "『企業内容等の開示に関する内閣府令第十九条の九第五項に規定するサステナビリティ開示基準を指定する件の一部を改正する件』の公布及びパブリックコメントの結果について",
      type: "government_material",
      typeLabel: "一次資料・金融庁／SSBJ実務対応基準第1号の追加指定",
      authority: "金融庁",
      publishedAt: "2026-09-15",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260915/20260915.html",
      importance: "最高",
      whyImportant: "2026年6月11日にSSBJが公表したSHK制度に関する実務対応基準第1号を、開示府令19条の9第5項の法定サステナビリティ開示基準として正式に追加指定し、2026年9月15日から適用したことを確認できる。",
      topics: ["ssbj-sustainability-disclosure-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
