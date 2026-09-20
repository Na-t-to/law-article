(() => {
  const article = (window.ARTICLE_DATA || []).find(
    (item) => item && item.id === "article-ppc-privacy-rulemaking-basic-1-2026"
  );
  if (article) {
    article.reformStageAtPublication = "proposal";
    article.reformStageSourceIds = ["source-ppc-privacy-rulemaking-basic-1-2026"];
  }
})();

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
  const addition = {
    id: "article-tmi-disability-discrimination-overview-20240625",
    title: "障害者差別解消法（１）障害者差別解消法の概要",
    publisher: "TMI総合法律事務所",
    author: "菊田行紘、遠山夏子、伊勢智子、水田進、森安博行、伊藤憲昭、伏見純子",
    publishedAt: "2024-06-25",
    collectedAt: "2026-09-21",
    url: "https://www.tmi.gr.jp/eyes/blog/2024/15869.html",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／障害者差別解消法の全体像",
    status: "adopted",
    summary: "2024年4月1日に施行された改正障害者差別解消法について、環境の整備、不当な差別的取扱い、合理的配慮という三つの柱を民間事業者の実務から概観する。合理的配慮が努力義務から法的義務へ変わった点に加え、主務大臣による報告徴収・助言・指導・勧告と、報告義務違反時の過料まで整理する。",
    whyImportant: [
      "改正後の民間事業者の対応を、環境整備・差別禁止・合理的配慮という三つの柱で一度に確認できる",
      "合理的配慮が画一的な措置ではなく、障害の状態や具体的な場面に応じて個別に検討されることを基本方針の例とともに説明している",
      "制度違反を直ちに罰則と捉えるのではなく、主務大臣の報告徴収・助言・指導・勧告という行政対応まで含めて全体像を把握できる"
    ],
    audience: ["企業法務", "コンプライアンス", "顧客対応・店舗運営", "サービス企画・UX"],
    audienceReason: "2024年改正後の障害者対応を社内ルールへ落とす前提として、民間事業者に課される義務と行政対応の全体像を把握するため。",
    categories: ["危機管理・コンプライアンス", "契約"],
    relatedTopics: ["disability-discrimination-reasonable-accommodation"],
    relatedIssues: [
      "disability-discrimination-scope-employment-boundary",
      "disability-discrimination-unjust-treatment",
      "disability-discrimination-reasonable-accommodation-duty",
      "disability-discrimination-operational-design"
    ],
    primarySourceIds: [
      "source-cao-disability-discrimination-act",
      "source-cao-disability-discrimination-basic-policy-2023",
      "source-cao-reasonable-accommodation-cases"
    ],
    legacyReformInference: false,
    whatChanged: "バックフィル／既存の合理的配慮・環境整備・不当な差別的取扱いの各論に対し、2024年改正後の制度全体像と行政対応を横断する導入解説を補完した。"
  };
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) {
    window.ARTICLE_DATA = existing.concat(addition);
  }
})();
