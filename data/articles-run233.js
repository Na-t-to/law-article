(() => {
  const reforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  const removeArticle = (values, articleId) =>
    (Array.isArray(values) ? values : []).filter((id) => id !== articleId);

  // Keep cross-law / cross-guideline explainers attached to their explicit primary reform event.
  // Dedicated event articles are already explicitly linked, so broad source matching here only
  // creates duplicate reform ownership for mixed secondary or omnibus materials.
  const importantVarieties = reforms.find((event) => event?.id === "important-varieties-act-2026-enactment");
  if (importantVarieties) importantVarieties.matchSourceIds = [];

  const privacySecurityReview = reforms.find((event) => event?.id === "privacy-security-measures-guideline-review-2026-2027");
  if (privacySecurityReview) privacySecurityReview.matchSourceIds = [];

  const omnibusArticleId = "article-fsa-growth-finance-ordinance-2026";
  const digitalBond = reforms.find((event) => event?.id === "fiea-digital-bond-solicitation-2026");
  if (digitalBond) digitalBond.articleIds = removeArticle(digitalBond.articleIds, omnibusArticleId);

  const overseasVf = reforms.find((event) => event?.id === "fiea-overseas-vf-foreign-fund-exemption-2026");
  if (overseasVf) {
    overseasVf.matchSourceIds = [];
    overseasVf.articleIds = removeArticle(overseasVf.articleIds, omnibusArticleId);
  }
})();

(() => {
  const articleId = "article-not-cyber-supply-chain-contracts-2025";
  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === articleId);
  if (!article) return;

  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];
  article.relatedTopics = uniq([...(article.relatedTopics || []), "supply-chain-security-scs-2026"]);
  article.relatedIssues = uniq([
    ...(article.relatedIssues || []),
    "scs-procurement-contract-implementation",
    "scs-competition-transaction-law"
  ]);
  article.primarySourceIds = uniq([
    ...(article.primarySourceIds || []),
    "source-jftc-cyber-partnership-20251226"
  ]);
  article.legacyReformInference = false;
  article.whatChanged = "分類更新／既採用のサプライチェーン・サイバー契約解説をSCS評価制度テーマにも接続し、契約・監査と取引適正化の論点を2026年の現行制度資料と横断して追えるよう整理した。";

  const scsTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "supply-chain-security-scs-2026");
  if (scsTopic) scsTopic.referenceArticleIds = uniq([...(scsTopic.referenceArticleIds || []), articleId]);
})();

(() => {
  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === "article-miyake-privacy-rules-20260918");
  if (!article) return;

  article.reformStageAtPublication = "proposal";
  article.reformStageSourceIds = ["source-ppc-privacy-rulemaking-basic-1-2026"];
  article.whatChanged = "法改正段階補正／成立済みの2026年改正個人情報保護法そのものではなく、2026年9月16日に示された政令・委員会規則・ガイドラインの案・検討内容を中心に扱う記事であるため、記事時点の段階を『検討・案段階』へ補正した。";
})();

(() => {
  const TOPIC = "film-anime-production-transactions";
  const ISSUE = "content-production-committee-joint-production-contract";
  const ARTICLE_ID = "article-amt-anime-production-committee-contract-20231206";
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
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };

  const article = {
    id: ARTICLE_ID,
    title: "【会社法】アニメ製作に関する契約実務―製作委員会方式 共同製作契約編―",
    publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
    author: "生島 隆男",
    publishedAt: "2023-12-06",
    collectedAt: "2026-09-23",
    url: "https://www.amt-law.com/insights/newsletters/publication_0027559_ja_001/",
    sourceType: "secondary",
    sourceLabel: "法律事務所ニューズレター／アニメ製作・製作委員会・共同製作契約",
    status: "adopted",
    summary: "アニメ製作の主要プレイヤーと広告収入方式・製作委員会方式等の構造を整理した上で、製作委員会方式のコアとなる共同製作契約を、幹事会社と出資者の双方の視点から具体化する。共同製作契約で定める出資方法、幹事会社、著作権等の権利帰属、製作費負担、損益分配に加え、幹事会社の業務執行裁量・幹事手数料・再委託・権利処理の表明保証、出資者側の投下資本回収・追加費用負担・幹事会社の監視・二次利用の窓口権まで、交渉事項と契約設計上の留意点を示す。",
    whyImportant: [
      "2026年の取引適正化指針が主に製作委員会等から制作会社・フリーランスへの取引を扱うのに対し、製作委員会内部の出資・意思決定・権限・損益分配を定める共同製作契約を補完的に理解できる",
      "幹事会社の裁量と出資者の統制を、全員同意・多数決・事前協議、再委託、幹事手数料、権利処理の表明保証等の具体的な条項設計へ落としている",
      "制作費が当初予算を超えた場合の追加出資、新規出資者の募集、制作中止、二次利用の窓口権・手数料等、作品の途中変更や収益化で紛争になりやすい論点を契約段階で先回りして整理できる"
    ],
    audience: ["企業法務", "アニメ・映像コンテンツ事業者", "製作委員会の幹事会社・出資者", "知的財産・権利処理担当", "コンテンツ投資・事業開発担当"],
    audienceReason: "製作委員会へ参加・運営する企業が、制作委託契約だけでなく、出資者間の共同製作契約について権限、費用、権利、分配、追加出資、二次利用の仕組みを設計・レビューするため。",
    categories: ["契約", "知的財産", "会社法・ガバナンス"],
    relatedTopics: [TOPIC],
    relatedIssues: [ISSUE, "content-production-copyright-compensation", "content-production-retakes-costs", "content-production-payment-chain"],
    primarySourceIds: ["source-jftc-anime-guideline-2026", "source-jftc-film-anime-survey-2025"],
    legacyReformInference: false,
    whatChanged: "テーマ補強／制作委託取引の適正化だけでなく、製作委員会内部の共同製作契約について、幹事会社の権限・出資者の統制・追加出資・権利処理・損益分配・窓口権まで追える実務解説をバックフィルした。"
  };
  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(articles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(articles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = articles.concat(article);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  const articleExists = (window.ARTICLE_DATA || []).some((item) => item && item.id === ARTICLE_ID);
  if (!topic || !articleExists) return;

  topic.lastUpdated = "2026-09-23";
  topic.lastVerified = "2026-09-23";
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, ARTICLE_ID);
  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((item) => item && item.id === ISSUE)) {
    topic.issues.push({
      id: ISSUE,
      title: "製作委員会の共同製作契約で何を決めるか",
      status: "interpreted",
      stage: "effective",
      views: [],
      conclusion: "製作委員会方式では、制作委託契約だけでなく、出資者間の共同製作契約で、出資方法、幹事会社の権限と承認事項、権利帰属・権利処理、製作費と追加負担、損益分配、二次利用の窓口権、制作継続・中止等のルールを具体化し、下流の制作取引条件と整合させて運用する。",
      exception: "製作委員会の座組み、幹事会社の数、各出資者の役割、権利取得方法、収益化モデルは作品ごとに異なるため、定型的な条項構成をそのまま当てはめない。",
      uncertain: "幹事会社に与える裁量、追加出資・制作中止の条件、窓口権・手数料、権利処理に関する表明保証の範囲等は、当事者の役割分担とリスク許容度に応じた交渉事項となる。",
      sourceIds: ["source-jftc-anime-guideline-2026", "source-jftc-film-anime-survey-2025"]
    });
  }

  if (topic.currentSummary && Array.isArray(topic.currentSummary.interpretations)) {
    const interpretation = "製作委員会方式では、製作委員会から制作会社への制作委託契約だけでなく、出資者間の共同製作契約で幹事会社の権限・承認事項、追加出資、権利処理、損益分配、二次利用の窓口権を設計し、両契約の責任分担を整合させる必要がある。";
    if (!topic.currentSummary.interpretations.includes(interpretation)) topic.currentSummary.interpretations.push(interpretation);
  }
  if (topic.currentSummary && Array.isArray(topic.currentSummary.implications)) {
    const implication = "製作委員会の共同製作契約について、幹事会社の権限・承認事項、追加製作費の決定と追加出資、権利処理の責任・表明保証、損益分配、窓口権・手数料、制作中止時の処理を棚卸しする。";
    if (!topic.currentSummary.implications.includes(implication)) topic.currentSummary.implications.push(implication);
  }
})();
