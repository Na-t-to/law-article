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
      id: "source-ppc-privacy-rulemaking-basic-1-2026",
      title: "個人情報の保護に関する法律等の一部を改正する法律 政令・規則の整備に向けた基本的な考え方（案）について①",
      type: "guideline",
      typeLabel: "一次資料・政令／規則整備検討資料",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-16",
      url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-1.pdf",
      importance: "最高",
      whyImportant: "2026年改正個人情報保護法の施行に向け、本人同意不要例外、16歳未満の子供、特定生体個人情報について、政令・規則・ガイドラインで具体化する方向を初めて詳細に示した一次資料。現行法上の判断と将来の施行準備を分けて設計するための基準になる。",
      topics: ["personal-information-protection-2026-amendment"]
    },
    {
      id: "source-fsa-public-fund-liquidity-guideline-2026",
      title: "『金融商品取引業者等向けの総合的な監督指針』の一部改正（案）に対するパブリックコメントの結果等の公表について",
      type: "guideline",
      typeLabel: "一次資料・監督指針改正／パブリックコメント結果",
      authority: "金融庁",
      publishedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260916/20260916.html",
      importance: "最高",
      whyImportant: "公募投資信託の流動性リスク管理について、保有資産の流動性に応じた解約条件や変動型の信託財産留保額等の合理的措置を監督上の評価項目へ追加し、2027年10月1日から適用すると最終化した一次資料。",
      topics: ["public-investment-trust-liquidity-risk"]
    },
    {
      id: "source-fsa-iosco-fund-liquidity-2025",
      title: "IOSCOによる最終報告書『集団投資スキームの流動性リスク管理に関する勧告（改正版）』等の公表について",
      type: "guideline",
      typeLabel: "一次資料・IOSCO最終報告書公表（金融庁紹介）",
      authority: "金融庁／IOSCO",
      publishedAt: "2025-06-06",
      url: "https://www.fsa.go.jp/inter/ios/20250606/20250606.html",
      importance: "高",
      whyImportant: "2026年の国内監督指針改正の直接の背景となったIOSCOの流動性リスク管理に関する改訂勧告・オープンエンド型ファンド向け実施ガイダンスを確認するための基礎資料。",
      topics: ["public-investment-trust-liquidity-risk"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();
