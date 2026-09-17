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

  const topic = "social-insurance-short-time-workers-2026";
  const additions = [
    {
      id: "source-pension-reform-act-20250620",
      title: "社会経済の変化を踏まえた年金制度の機能強化のための国民年金法等の一部を改正する等の法律（令和7年法律第74号）",
      type: "law_text",
      typeLabel: "一次資料・衆議院／公布法令",
      authority: "衆議院",
      publishedAt: "2025-06-20",
      url: "https://www.shugiin.go.jp/Internet/itdb_housei.nsf/html/housei/21720250620074.htm",
      importance: "最高",
      whyImportant: "短時間労働者の賃金要件・企業規模要件の撤廃、個人事業所の適用拡大、保険料負担軽減措置などを定める改正法本文と経過措置を確認できる。",
      topics: [topic]
    },
    {
      id: "source-mhlw-pension-effective-notice-20260915",
      title: "令和7年年金制度改正法の一部施行に伴う関係政令等について（2026年10月1日施行）",
      type: "government_material",
      typeLabel: "一次資料・厚生労働省／施行期日・関係政令等",
      authority: "厚生労働省",
      publishedAt: "2026-09-15",
      url: "https://www.mhlw.go.jp/hourei/doc/tsuchi/T260915T0020.pdf",
      importance: "最高",
      whyImportant: "賃金要件撤廃を含む令和7年改正法の対象規定について施行期日を2026年10月1日とし、関係政令・省令の整備内容を確認できる。",
      topics: [topic]
    },
    {
      id: "source-nenkin-short-time-expansion-20260916",
      title: "短時間労働者に対する健康保険・厚生年金保険の適用の拡大",
      type: "government_material",
      typeLabel: "一次資料・日本年金機構／適用拡大案内",
      authority: "日本年金機構",
      publishedAt: "2026-09-16",
      url: "https://www.nenkin.go.jp/tokusetsu/tekiyokakudai.html",
      importance: "最高",
      whyImportant: "2026年10月の月額8.8万円賃金要件撤廃と、2027年以降の企業規模要件の段階的拡大を、事業主・労働者向けの現行案内として確認できる。",
      topics: [topic]
    },
    {
      id: "source-nenkin-premium-adjustment-20260911",
      title: "保険料調整制度とは",
      type: "government_material",
      typeLabel: "一次資料・日本年金機構／保険料調整制度",
      authority: "日本年金機構",
      publishedAt: "2026-09-11",
      url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html",
      importance: "最高",
      whyImportant: "2026年10月以降の保険料調整制度について、対象事業所・標準報酬月額12.6万円以下の対象者・通算3年間の負担軽減という制度設計を確認できる。",
      topics: [topic]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();