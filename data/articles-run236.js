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
  const addUnique = (values, value) => [...new Set([...(Array.isArray(values) ? values : []), value].filter(Boolean))];

  const article = {
    id: "article-tmi-child-sexual-violence-protected-conduct-20260521",
    title: "［連載］こども性暴力防止法 基礎解説（第2回）―こども性暴力防止法の保護・防止の対象―",
    publisher: "TMI総合法律事務所",
    author: "益原大亮弁護士・社会保険労務士",
    publishedAt: "2026-05-21",
    collectedAt: "2026-09-21",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18370.html",
    sourceType: "secondary",
    sourceLabel: "実務解説・TMI／こども性暴力防止法の保護・防止対象",
    status: "adopted",
    summary: "2026年12月25日施行のこども性暴力防止法について、保護対象となる児童等、児童対象性暴力等の範囲に加え、性暴力そのものに至る前段階の『不適切な行為』『重大な不適切な行為』を施行ガイドラインに沿って整理する実務解説。私的なSNS等での連絡、二人きりの面会・送迎、ルール外の撮影、密室、身体接触などを例示しつつ、一律禁止ではなく業務上の必要性、児童等の年齢・発達・特性、現場状況を踏まえて判断し、就業規則等の服務規律へ落とし込む必要性を示す。",
    whyImportant: [
      "犯罪事実確認だけでは捉えられない初犯防止について、性暴力に至る前の『不適切な行為』をどの段階で組織的に扱うかを具体化している",
      "SNS・面会・送迎・撮影・密室・身体接触など、教育・保育現場で実際にルール化しやすい行為類型を施行ガイドラインと接続して整理している",
      "例示への機械的な当てはめではなく、業務上の必要性や児童等の年齢・特性を踏まえつつ、従事者を過度に萎縮させない服務規律・周知へ落とすという実務上のバランスが分かる"
    ],
    audience: ["人事・労務", "企業法務", "教育・保育事業者", "コンプライアンス担当", "現場管理者"],
    audienceReason: "こども性暴力防止法対応を犯罪歴確認だけで終わらせず、日常行動ルール、服務規律、研修、相談・防止措置へ実装するため。",
    categories: ["労務", "危機管理・コンプライアンス"],
    relatedTopics: ["child-sexual-violence-prevention-dbs"],
    relatedIssues: ["dbs-prevention-response", "dbs-employment-rules-templates"],
    primarySourceIds: [
      "source-cfa-child-sexual-violence-act-hub-20260918",
      "source-cfa-child-sexual-violence-templates-20260902"
    ],
    reformEventId: "child-sexual-violence-prevention-act-2024",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-cfa-child-sexual-violence-act-hub-20260918"],
    legacyReformInference: false,
    whatChanged: "整理変更なし／こども性暴力防止法の初犯防止について、『不適切な行為』の具体例と服務規律・周知への落とし込みを補う実務解説を追加。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (ids.has(article.id) || urls.has(normalizeUrl(article.url))) return;

  window.ARTICLE_DATA = existing.concat(article);

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "child-sexual-violence-prevention-dbs");
  if (topic) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, article.id);
    if (!topic.lastVerified || topic.lastVerified < "2026-09-21") topic.lastVerified = "2026-09-21";
  }

  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "child-sexual-violence-prevention-act-2024");
  if (reform) reform.articleIds = addUnique(reform.articleIds, article.id);
})();
