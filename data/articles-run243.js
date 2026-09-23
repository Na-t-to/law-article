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

(() => {
  if (window.__LAW_INDEX_RUN243_DNFBP_APPLIED__) return;
  window.__LAW_INDEX_RUN243_DNFBP_APPLIED__ = true;

  const TOPIC = "aml-kyc-criminal-proceeds";
  const ISSUE = "aml-financial-crime-effectiveness-2026";
  const SOURCE_ID = "source-jafic-annual-report-2025";
  const ARTICLE_ID = "article-tmi-dnfbp-aml-cft-20260917";
  const SOURCE_URL = "https://www.npa.go.jp/news/release/2026/20260312001.html";
  const ARTICLE_URL = "https://www.tmi.gr.jp/eyes/blog/2026/18831.html";

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

  const source = {
    id: SOURCE_ID,
    title: "犯罪収益移転防止に関する年次報告書（令和7年）",
    type: "administrative",
    typeLabel: "年次報告・AML/CFT運用",
    authority: "警察庁 犯罪収益対策室（JAFIC）",
    publishedAt: "2026-03-12",
    url: SOURCE_URL,
    importance: "高",
    whyImportant: "犯罪収益移転防止法の施行状況や疑わしい取引の届出等をまとめた公式年次報告。2025年版ではDNFBPsのマネー・ローンダリング対策等を特集しており、金融機関以外の特定事業者におけるリスクベース・アプローチと対策の有効性を点検する一次資料になる。",
    topics: [TOPIC]
  };

  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  let sourceRecord = sources.find((item) => item && (item.id === SOURCE_ID || normalizeUrl(item.url) === normalizeUrl(SOURCE_URL)));
  if (!sourceRecord) {
    window.SOURCE_DATA = sources.concat(source);
    sourceRecord = source;
  }
  const primarySourceId = sourceRecord.id;

  const article = {
    id: ARTICLE_ID,
    title: "【犯収法ブログ】事業会社（DNFBPs）のAML/CFT対策",
    publisher: "TMI総合法律事務所",
    author: "TMI総合法律事務所",
    publishedAt: "2026-09-17",
    collectedAt: "2026-09-23",
    url: ARTICLE_URL,
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／犯収法・AML/CFT",
    status: "adopted",
    summary: "不動産、宝石・貴金属、郵便物受取、電話受付・転送等の特定非金融業者・職業専門家（DNFBPs）について、犯収法上の義務、所管省庁のガイドライン、リスクベース・アプローチ、有効性検証、疑わしい取引の届出を事業会社の実装単位へ整理する解説。リスクベース・アプローチは法定の取引時確認要件を任意に緩和する考え方ではないことを明確にし、規程・統括管理者・リスク評価・モニタリング・承認・内部監査・取締役会での検証までをセルフチェックへ落としている。",
    whyImportant: [
      "金融機関中心になりがちなAML/CFTを、宅地建物取引業者、宝石・貴金属等取扱事業者、郵便物受取サービス、電話受付・転送サービス等のDNFBPsへ具体化している",
      "リスクベース・アプローチと法定の取引時確認義務を混同せず、低リスクだから法定要件まで緩和できるわけではないという実務上の誤解を正している",
      "形式的な規程整備だけでなく、疑わしい取引の届出実績、リスク評価、継続的モニタリング、内部監査、取締役会での実質的議論まで有効性検証の対象として整理している",
      "2027年4月施行の本人確認方法の厳格化も踏まえ、システム・従業員周知を含む準備項目をセルフチェックとして使える"
    ],
    audience: ["企業法務", "AML/CFT・コンプライアンス担当", "不動産・宝石貴金属等の特定事業者", "内部監査・リスク管理", "経営企画"],
    audienceReason: "金融機関以外の特定事業者が、犯収法の個別義務とリスクベース・アプローチ、有効性検証を分けて理解し、自社の規程・顧客管理・モニタリング・届出・監査へ落とすため。",
    categories: ["危機管理・コンプライアンス", "金融規制"],
    relatedTopics: [TOPIC],
    relatedIssues: [ISSUE],
    primarySourceIds: [primarySourceId],
    legacyReformInference: false,
    whatChanged: "参考解説追加／AML・金融犯罪対策の有効性管理を、金融機関だけでなくDNFBPsの事業会社へ広げ、取引時確認・顧客管理・モニタリング・疑わしい取引の届出・内部監査を一体で点検する実務を補強した。"
  };

  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  let articleRecord = articles.find((item) => item && (item.id === ARTICLE_ID || normalizeUrl(item.url) === normalizeUrl(ARTICLE_URL)));
  if (!articleRecord) {
    window.ARTICLE_DATA = articles.concat(article);
    articleRecord = article;
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  if (topic && articleRecord) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, articleRecord.id);
    topic.sourceIds = addUnique(topic.sourceIds, primarySourceId);
    const issue = (topic.issues || []).find((item) => item && item.id === ISSUE);
    if (issue) issue.sourceIds = addUnique(issue.sourceIds, primarySourceId);
  }
})();