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

  const amlTopic = "criminal-proceeds-aml-ekyc-2026-2027";
  const copyrightTopic = "copyright-record-performance-right-2026";
  const additions = [
    {
      id: "source-npa-aml-amendment-2026",
      title: "令和8年犯罪収益移転防止法の改正について",
      type: "government_material",
      typeLabel: "一次資料・警察庁／犯罪収益移転防止法2026年改正",
      authority: "警察庁",
      publishedAt: "2026-06-10",
      url: "https://www.npa.go.jp/bureau/sosikihanzai/hansyu/houritukaisei.html",
      importance: "最高",
      whyImportant: "2026年改正の三本柱と、通帳不正譲渡等の罰則引上げ・送金犯罪は2026年7月10日施行、架空名義口座措置は公布後1年以内の政令指定日という段階施行を確認できる警察庁の公式ページ。",
      topics: [amlTopic]
    },
    {
      id: "source-npa-jafic-annual-report-2025-identity-review",
      title: "犯罪収益移転防止に関する年次報告書（令和7年）特集2・本人確認方法の見直し",
      type: "government_material",
      typeLabel: "一次資料・警察庁JAFIC／本人確認方法見直し",
      authority: "警察庁・JAFIC",
      publishedAt: "2026-03-12",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/nenzihokoku/data/jafic_2025.pdf",
      importance: "最高",
      whyImportant: "2027年4月1日施行の本人確認方法見直しについて、対面・非対面のICチップ利用、画像方式の廃止・縮小、法人等の確認方法まで具体的な改正内容を整理する公式報告書。",
      topics: [amlTopic]
    },
    {
      id: "source-mext-copyright-record-performance-law-2026",
      title: "著作権法の一部を改正する法律（令和8年法律第48号）",
      type: "statute",
      typeLabel: "一次資料・文部科学省／2026年著作権法改正",
      authority: "文部科学省・文化庁",
      publishedAt: "2026-06-24",
      url: "https://www.mext.go.jp/b_menu/houan/kakutei/detail/mext_00005.html",
      importance: "最高",
      whyImportant: "レコード演奏・伝達権を創設した2026年著作権法改正について、法律概要・条文・新旧対照表へ直接到達できる文部科学省の成立法律ページ。",
      topics: [copyrightTopic]
    },
    {
      id: "source-mext-copyright-record-performance-enactment-20260617",
      title: "『著作権法の一部を改正する法律案』が参議院本会議で可決され成立しました",
      type: "government_material",
      typeLabel: "一次資料・文部科学省／レコード演奏・伝達権",
      authority: "文部科学省",
      publishedAt: "2026-06-17",
      url: "https://www.mext.go.jp/b_menu/activity/detail/2026/20260617.html",
      importance: "高",
      whyImportant: "レコード演奏・伝達権の政策目的と、徴収・分配体制、二次使用料規程、小規模事業者等への配慮を施行に向けて検討することを公式に示した成立時資料。",
      topics: [copyrightTopic]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
