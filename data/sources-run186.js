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
      id: "source-mhlw-social-insurance-related-order-2026",
      title: "社会経済の変化を踏まえた年金制度の機能強化のための国民年金法等の一部を改正する等の法律の一部の施行に伴う関係政令の整備に関する政令（令和8年政令第276号）",
      type: "regulation",
      typeLabel: "一次資料・厚生労働省／短時間労働者の賃金要件撤廃に伴う関係政令",
      authority: "厚生労働省",
      publishedAt: "2026-09-11",
      url: "https://www.mhlw.go.jp/hourei/doc/hourei/H260911T0010.pdf",
      importance: "最高",
      whyImportant: "2026年10月の賃金要件撤廃に伴い、最低賃金法7条の減額特例対象者に関する例外的取扱いなどを定める公布済みの関係政令を確認できる。",
      topics: ["social-insurance-expansion-pension-reform-2025"]
    },
    {
      id: "source-jps-social-insurance-expansion-2026-09-16",
      title: "短時間労働者に対する健康保険・厚生年金保険の適用拡大",
      type: "government_material",
      typeLabel: "一次資料・日本年金機構／2026年10月の賃金要件撤廃・任意加入案内",
      authority: "日本年金機構",
      publishedAt: "2026-09-16",
      url: "https://www.nenkin.go.jp/tokusetsu/tekiyokakudai.html",
      importance: "最高",
      whyImportant: "短時間労働者の月額8.8万円以上という賃金要件が2026年10月に撤廃されることと、最低賃金の減額特例対象者向け任意加入制度が同月から始まることを、実施機関の最新案内で確認できる。",
      topics: ["social-insurance-expansion-pension-reform-2025"]
    },
    {
      id: "source-jps-insurance-premium-adjustment-2026",
      title: "保険料調整制度とは",
      type: "government_material",
      typeLabel: "一次資料・日本年金機構／短時間労働者の保険料調整制度",
      authority: "日本年金機構",
      publishedAt: "2026-09-11",
      url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html",
      importance: "高",
      whyImportant: "2026年10月以降に始まる保険料調整制度について、対象事業所、標準報酬月額12.6万円以下の対象被保険者、通算3年間の負担軽減という運用条件を実施機関の資料で確認できる。",
      topics: ["social-insurance-expansion-pension-reform-2025"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
