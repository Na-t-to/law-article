(() => {
  const topicSlug = "child-sexual-violence-prevention-dbs";
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
      id: "source-cfa-child-sexual-violence-act-portal",
      title: "こども性暴力防止法（法令・通知・ガイドライン等）",
      type: "government",
      typeLabel: "一次資料・こども家庭庁／こども性暴力防止法",
      authority: "こども家庭庁",
      publishedAt: "2026-08-05",
      url: "https://www.cfa.go.jp/policies/child-safety/efforts/koseibouhou",
      importance: "最高",
      whyImportant: "法律、施行期日政令、施行令、施行規則、告示、ガイドライン等を一体で確認できる公式ポータル。2026年12月25日の施行日と現行の下位法令を一次資料で確認できる。",
      topics: [topicSlug]
    },
    {
      id: "source-cfa-child-sexual-violence-guideline-20260109",
      title: "こども性暴力防止法施行ガイドライン",
      type: "guideline",
      typeLabel: "一次資料・こども家庭庁／施行ガイドライン",
      authority: "こども家庭庁",
      publishedAt: "2026-01-09",
      url: "https://www.cfa.go.jp/press/89afdf3b-a7ca-408e-b213-b2802cce394f",
      importance: "最高",
      whyImportant: "対象事業者、犯罪事実確認、安全確保措置、情報管理その他の実務運用を具体化する施行準備の中心資料。",
      topics: [topicSlug]
    },
    {
      id: "source-cfa-child-safety-cross-guideline-20260821",
      title: "教育・保育等を提供する事業者による児童対象性暴力等の防止等の取組を横断的に促進するための指針",
      type: "guideline",
      typeLabel: "一次資料・こども家庭庁／児童対象性暴力防止・横断指針",
      authority: "こども家庭庁",
      publishedAt: "2026-08-21",
      url: "https://www.cfa.go.jp/policies/child-safety/efforts/koseibouhou/odanshishin",
      importance: "高",
      whyImportant: "2026年1月の施行ガイドライン策定を踏まえて2026年8月に改訂され、相談窓口の周知や事業者の防止取組を法対象の内外をまたいで確認できる。",
      topics: [topicSlug]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
