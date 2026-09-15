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
    { id: "source-mhlw-pension-reform-law-2025", title: "令和7年度年金制度改正法が6月20日に公布されました。", type: "government", typeLabel: "一次資料・厚生労働省／2025年年金制度改正", authority: "厚生労働省", publishedAt: "2025-06-20", url: "https://www.mhlw.go.jp/stf/web_magazine/closeup/09.html", importance: "最高", whyImportant: "2025年年金制度改正法の公布、被用者保険の企業規模要件・賃金要件の見直し、個人事業所の適用拡大、保険料負担軽減措置の制度骨格を公式に確認できる。", topics: ["social-insurance-expansion-2025"] },
    { id: "source-mhlw-social-insurance-expansion-2025", title: "社会保険の加入対象の拡大について", type: "government", typeLabel: "一次資料・厚生労働省／被用者保険の適用拡大", authority: "厚生労働省", publishedAt: "不明", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000147284_00021.html", importance: "最高", whyImportant: "企業規模要件の段階的縮小・撤廃、賃金要件撤廃、個人事業所の適用拡大、短時間労働者向け支援策を現行の公式説明で確認できる。", topics: ["social-insurance-expansion-2025"] },
    { id: "source-jps-premium-adjustment-2026", title: "保険料調整制度とは", type: "government", typeLabel: "一次資料・日本年金機構／保険料調整制度", authority: "日本年金機構", publishedAt: "2026-09-11", url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html", importance: "最高", whyImportant: "2026年10月開始の保険料調整制度について、対象事業所、対象被保険者、通算3年の利用期間、標準報酬月額別の負担軽減を確認できる実務基準資料。", topics: ["social-insurance-expansion-2025"] },
    { id: "source-mhlw-short-hours-self-employed-insurance-2026", title: "勤務時間が短い正規型の労働者として事業所に使用されている個人事業主等に係る被保険者資格の取扱い等について", type: "government", typeLabel: "一次資料・厚生労働省／被保険者資格通知", authority: "厚生労働省", publishedAt: "2026-09-14", url: "https://www.mhlw.go.jp/stf/houdou/newpage_75927.html", importance: "最高", whyImportant: "極端に勤務時間が短い正規型労働者として使用される個人事業主等について、健康保険・厚生年金保険の被保険者資格を実態から判断する2026年9月14日通知の公式入口。", topics: ["social-insurance-expansion-2025"] },
    { id: "source-mhlw-officer-self-employed-insurance-2026", title: "法人の役員である個人事業主等に係る被保険者資格の取扱いについて", type: "government", typeLabel: "一次資料・厚生労働省／役員の被保険者資格通知", authority: "厚生労働省", publishedAt: "2026-03-18", url: "https://www.mhlw.go.jp/stf/houdou/0000190457_00024.html", importance: "高", whyImportant: "個人事業主等を法人役員として使用する場合について、経営参画を内容とする経常的労務提供と報酬の対価性を実態から判断する取扱いを示し、2026年9月14日に一部改正された。", topics: ["social-insurance-expansion-2025"] }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
