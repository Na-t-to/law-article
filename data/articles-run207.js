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
      id: "article-fsa-public-fund-liquidity-guideline-20260916",
      title: "『金融商品取引業者等向けの総合的な監督指針』の一部改正（案）に対するパブリックコメントの結果等の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260916/20260916.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／公募投資信託の流動性リスク管理・監督指針改正",
      status: "adopted",
      summary: "IOSCOが2025年5月に公表した集団投資スキームの流動性リスク管理に関する勧告・実施ガイダンスを踏まえ、公募投資信託の流動性リスク管理について投資運用業者に適切な対応を促すため、金融商品取引業者等向けの総合的な監督指針を改正した確定資料。2026年5月8日から6月8日までの意見募集を経て最終化され、改正後の監督指針は2027年10月1日から適用される。",
      whyImportant: [
        "公募投資信託の流動性リスク管理に関する監督指針改正が案段階を終え、確定したことを一次資料で確認できる",
        "2027年10月1日という適用日が確定しており、投資運用会社の規程・商品・リスク管理態勢の準備期限を置ける",
        "国際的なIOSCO勧告を国内の監督実務へどう接続するかを追う基準点となる"
      ],
      audience: ["投資運用会社の法務・コンプライアンス", "リスク管理", "商品企画・運用", "内部監査"],
      audienceReason: "2027年10月の適用に向け、公募投資信託の流動性リスク管理と商品・社内運用のギャップを確定資料から点検するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["secm-public-fund-liquidity-2027"],
      primarySourceIds: ["source-fsa-public-fund-liquidity-guideline-20260916"],
      reformEventId: "fsa-public-fund-liquidity-guideline-2027",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-public-fund-liquidity-guideline-20260916"],
      legacyReformInference: false,
      whatChanged: "テーマ更新／公募投資信託の流動性リスク管理に関する監督指針改正が最終化され、2027年10月1日の適用日が確定した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
