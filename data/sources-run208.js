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
      id: "source-jftc-distribution-guideline-rpm-20260708",
      title: "『流通・取引慣行に関する独占禁止法上の指針』の改正について",
      type: "government_material",
      typeLabel: "一次資料・公正取引委員会／流通・取引慣行ガイドライン改正",
      authority: "公正取引委員会",
      publishedAt: "2026-07-08",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/jul/260708_soushi_ryutori.html",
      importance: "高",
      whyImportant: "再販売価格維持行為は原則違法という基本を維持しつつ、流通業者が単なる取次ぎとして機能し、実質的にメーカーがユーザーへ販売していると認められる場合の考え方と具体例を追加した2026年7月8日の確定改正。",
      topics: ["resale-price-maintenance-distribution-2026"]
    },
    {
      id: "source-jftc-distribution-guideline-current-20260708",
      title: "流通・取引慣行に関する独占禁止法上の指針",
      type: "government_material",
      typeLabel: "一次資料・公正取引委員会／流通・取引慣行ガイドライン現行版",
      authority: "公正取引委員会",
      publishedAt: "2026-07-08",
      url: "https://www.jftc.go.jp/dk/guideline/unyoukijun/ryutsutorihiki.html",
      importance: "高",
      whyImportant: "現行ガイドライン本文。1991年公表後の改正履歴に2026年7月8日改正を明記し、再販売価格維持、非価格制限その他の流通・取引慣行に関する独占禁止法上の考え方を確認できる。",
      topics: ["resale-price-maintenance-distribution-2026"]
    },
    {
      id: "source-jftc-rpm-faq-20260708",
      title: "よくある質問コーナー（独占禁止法）Q12-4・Q12-5",
      type: "government_material",
      typeLabel: "一次資料・公正取引委員会／指定価格制度・費用負担Q&A",
      authority: "公正取引委員会",
      publishedAt: "2026-07-08",
      url: "https://www.jftc.go.jp/dk/dk_qa.html",
      importance: "高",
      whyImportant: "いわゆる指定価格制度について、メーカーがユーザー販売までの危険・費用を負担し流通業者が単なる取次ぎとして機能する場合の考え方と、荷造費・人件費・研修費・保険料等を含む費用確認・負担方法を具体化する公式Q&A。",
      topics: ["resale-price-maintenance-distribution-2026"]
    },
    {
      id: "source-jftc-luxottica-commitment-20260806",
      title: "ルックスオティカジャパン株式会社から申請があった確約計画の認定について",
      type: "government_material",
      typeLabel: "一次資料・公正取引委員会／再販売価格維持・確約計画",
      authority: "公正取引委員会",
      publishedAt: "2026-08-06",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/aug/260806_dai1_LOJ/",
      importance: "高",
      whyImportant: "Ray-Ban・Oakley商品の推奨小売価格以上での販売、実質的な値引きとなるポイント・クーポンの制限、一定期間のオンライン販売停止等について再販売価格拘束違反の疑いを認め、確約計画を認定した事例。確約認定は違反認定そのものではない点も確認できる。",
      topics: ["resale-price-maintenance-distribution-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
