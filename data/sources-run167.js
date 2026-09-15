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
      id: "source-mhlw-social-insurance-wage-requirement-decree-2026",
      title: "社会経済の変化を踏まえた年金制度の機能強化のための国民年金法等の一部を改正する等の法律の一部の施行に伴う関係政令の整備に関する政令（令和8年政令第276号）",
      type: "government",
      typeLabel: "一次資料・厚生労働省／短時間労働者の賃金要件撤廃・特定減額特例",
      authority: "厚生労働省",
      publishedAt: "2026-09-11",
      url: "https://www.mhlw.go.jp/hourei/doc/hourei/H260911T0010.pdf",
      importance: "最高",
      whyImportant: "2025年年金制度改正のうち、短時間労働者の月額8.8万円の賃金要件撤廃に関係する政令整備と、特定減額特例対象者の資格取得・喪失等の取扱いを定め、施行日を2026年10月1日と確認できる。",
      topics: ["social-insurance-expansion-2025"]
    },
    {
      id: "source-mhlw-social-insurance-wage-requirement-ordinance-2026",
      title: "社会経済の変化を踏まえた年金制度の機能強化のための国民年金法等の一部を改正する等の法律の一部の施行に伴う厚生労働省関係省令の整備に関する省令（令和8年厚生労働省令第138号）",
      type: "government",
      typeLabel: "一次資料・厚生労働省／短時間労働者の適用拡大・省令整備",
      authority: "厚生労働省",
      publishedAt: "2026-09-11",
      url: "https://www.mhlw.go.jp/hourei/doc/hourei/H260911T0030.pdf",
      importance: "高",
      whyImportant: "2026年10月1日の短時間労働者の適用拡大に伴い、特定減額特例対象者の申出や資格・届出等を含む省令上の実務手続を整備する。",
      topics: ["social-insurance-expansion-2025"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
