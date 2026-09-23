(() => {
  if (window.__LAW_INDEX_RUN243_APPLIED__) return;
  window.__LAW_INDEX_RUN243_APPLIED__ = true;

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
  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));

  const article = {
    id: "article-tmi-ec-standard-terms-penalty-clause-20260323",
    title: "【デジタルプラットフォームと法】第7回「デジタルプラットフォームとEC利用規約（定型約款）における留意点（主として違約金条項を念頭に）」",
    publisher: "TMI総合法律事務所",
    author: "鈴木 翔平・内野 寛信",
    publishedAt: "2026-03-23",
    collectedAt: "2026-09-23",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18151.html",
    sourceType: "secondary",
    sourceLabel: "実務解説・TMI／EC利用規約・定型約款・違約金条項",
    status: "adopted",
    summary: "EC上の販売業者が消費者との取引に用いる利用規約について、民法548条の2の定型約款規律を、東京地判令和5年8月24日の転売禁止・違約金条項の事例から具体化する実務解説。定型約款への組入れと不当条項規制を分け、商品価格約1万円に対する20万円の違約金について、表示時期・表示位置・注意喚起・予測可能性・金額の大きさ等を踏まえて同条2項により契約内容から排除された判断を整理し、EC規約では条項内容だけでなく表示方法まで設計対象になることを示す。",
    whyImportant: [
      "利用規約が定型約款として契約内容に組み入れられても、相手方の義務を加重する条項は民法548条の2第2項により別途排除され得ることを、具体的な裁判例の当てはめから確認できる",
      "違約金・高額手数料などについて、金額の合理性だけでなく、商品ページからの導線、表示タイミング、埋没の有無、強調表示、利用者の予測可能性までレビュー観点へ落とせる",
      "消費者契約法10条との違いも整理しており、B2C利用規約の不当条項レビューを民法上の定型約款規律と消費者契約法の双方から切り分けて考える基礎になる"
    ],
    audience: ["企業法務", "EC・B2Cサービス担当", "プロダクト・UX担当", "規約・約款管理担当", "カスタマーサポート"],
    audienceReason: "違約金・手数料・転売禁止等の負担条項について、文言の有効性だけでなく、EC画面上でいつ・どこまで目立たせて提示するかを含めて利用規約を点検するため。",
    categories: ["契約・取引", "消費者法・表示", "AI・デジタル"],
    relatedTopics: ["consumer-contract-law-review-2026"],
    relatedIssues: ["consumer-contract-ec-standard-terms"],
    primarySourceIds: ["source-civil-code-current", "source-consumer-contract-act-current"],
    legacyReformInference: false,
    whatChanged: "参考解説追加／EC利用規約の違約金条項について、民法548条の2第2項の不当条項規制を裁判例の具体的な表示・予測可能性の事情からレビューできるよう補強した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat(article);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "consumer-contract-law-review-2026");
  if (topic && (window.ARTICLE_DATA || []).some((item) => item && item.id === article.id)) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, article.id);
  }
})();
