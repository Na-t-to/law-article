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
      id: "source-mhlw-social-insurance-short-regular-sole-proprietor-2026",
      title: "勤務時間が短い正規型の労働者として事業所に使用されている個人事業主等に係る被保険者資格の取扱い等について",
      type: "government",
      typeLabel: "一次資料・厚生労働省／健康保険・厚生年金保険の被保険者資格",
      authority: "厚生労働省",
      publishedAt: "2026-09-14",
      url: "https://www.mhlw.go.jp/stf/houdou/newpage_75927.html",
      importance: "高",
      whyImportant: "個人事業主・フリーランス等を勤務時間が極端に短い正規型労働者として雇用するケースについて、契約名義ではなく常用的使用関係の実態で被保険者資格を判断し、会費等と報酬の関係や実際の労務提供を具体的な判断要素として明確化した行政通知。",
      topics: ["social-insurance-expansion-2025"]
    },
    {
      id: "source-jps-social-insurance-premium-adjustment-2026",
      title: "保険料調整制度とは",
      type: "government",
      typeLabel: "一次資料・日本年金機構／社会保険適用拡大・保険料調整制度",
      authority: "日本年金機構",
      publishedAt: "2026-09-11",
      url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html",
      importance: "高",
      whyImportant: "2026年10月以降の任意適用や2027年以降の企業規模要件縮小等で新たに加入対象となる一定の短時間労働者について、3年間の保険料負担軽減、対象事業所・対象者、申出、事業主追加負担の還付という実務運用を確認できる公式案内。",
      topics: ["social-insurance-expansion-2025"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
