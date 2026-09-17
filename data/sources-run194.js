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

  const topic = "child-sexual-violence-prevention-dbs-2026";
  const additions = [
    {
      id: "source-cfa-child-sexual-violence-prevention-act-2026",
      title: "こども性暴力防止法（法令・通知・施行ガイドライン）",
      type: "government_material",
      typeLabel: "一次資料・こども家庭庁／こども性暴力防止法",
      authority: "こども家庭庁",
      publishedAt: "2024-06-26",
      url: "https://www.cfa.go.jp/policies/child-safety/efforts/koseibouhou",
      importance: "最高",
      whyImportant: "法律・施行期日政令・施行令・施行規則・告示・施行ガイドライン・Q&A・準備ガイドを集約した公式ページ。2026年12月25日の施行日、義務事業者と認定事業者の区別、2026年9月2日のガイドライン改訂等を現在の一次資料から確認できる。",
      topics: [topic]
    },
    {
      id: "source-cfa-child-sexual-violence-practice-materials-2026",
      title: "こども性暴力防止法に関する解説動画・資料",
      type: "government_material",
      typeLabel: "一次資料・こども家庭庁／施行実務・研修・情報管理",
      authority: "こども家庭庁",
      publishedAt: "2026-09-09",
      url: "https://www.cfa.go.jp/policies/child-safety/efforts/koseibouhou/jigyousya",
      importance: "最高",
      whyImportant: "事業者向けの制度解説に加え、事案発生時対応、防止措置と労働法制、情報管理措置、研修の企画・記録等を実務へ落とす公式教材をまとめたページ。施行準備を犯罪事実確認だけに限定しないための一次資料。",
      topics: [topic]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
