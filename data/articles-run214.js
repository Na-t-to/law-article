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

  const additions = [{
    id: "article-tmi-employee-equity-wage-20260625",
    title: "【労働法ブログ】株式報酬の賃金該当性について",
    publisher: "TMI総合法律事務所",
    author: "東 駿佑",
    publishedAt: "2026-06-25",
    collectedAt: "2026-09-19",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18506.html",
    sourceType: "secondary",
    sourceLabel: "実務解説・TMI／従業員株式報酬・賃金該当性",
    status: "adopted",
    summary: "会社法制中間試案が検討する従業員等への株式無償交付を、労働基準法上の『賃金』該当性から掘り下げる実務解説。現行のストックオプション通達と経産省手引Q80を踏まえつつ、低額行使価格のストックオプション、RS・PS・RSU・PSU、ファントム・ストック等を分け、現金賃金の代替性、就業規則・労働条件通知書上の位置付け、現金賃金が報酬全体の主たる部分かという観点から制度設計上の留意点を整理する。",
    whyImportant: [
      "会社法上の株式無償交付の対象拡大と、労基法上の賃金該当性・通貨払原則が別の問題であることを具体的に接続している",
      "経産省手引Q80の3要件をそのまま絶対視せず、退職時付与を念頭にした基準の由来や在職時付与への適用の不確実性まで指摘している",
      "現金賃金の減額・昇給代替を避けること、規程上『賃金』と別建てのインセンティブであることを明確にすることなど、制度導入時の文書・運用レビューへ落とし込める"
    ],
    audience: ["企業法務", "人事・労務", "報酬制度担当", "コーポレートガバナンス担当"],
    audienceReason: "従業員向け株式報酬を導入・改定する際に、会社法上の発行手続だけでなく、労基法24条の通貨払原則を含む労務リスクを制度設計・規程・労働条件通知まで一体で点検するため。",
    categories: ["会社法・ガバナンス", "労務・人事"],
    relatedTopics: ["companies-act-review-shareholders"],
    relatedIssues: ["companies-act-employee-equity-compensation-wage"],
    primarySourceIds: ["source-moj-company-law-interim-2026", "source-meti-equity-incentive-plan-20230331"],
    reformEventId: "companies-act-review-2026",
    reformStageAtPublication: "proposal",
    reformStageSourceIds: ["source-moj-company-law-interim-2026"],
    legacyReformInference: false,
    whatChanged: "会社法制見直しに従業員株式報酬の労働法論点を補完／株式無償交付の対象拡大案を、賃金該当性・通貨払原則・規程設計・現金賃金との関係まで実務的に接続した。"
  }];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
