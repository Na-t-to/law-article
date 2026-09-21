(() => {
  const OLD_TOPIC = "economic-security-clearance";
  const CANONICAL_TOPIC = "economic-security-information-clearance";
  const OLD_LAW_SOURCE = "source-egov-important-economic-security-information-act-2024";
  const CANONICAL_LAW_SOURCE = "source-cao-security-clearance-law-2024";
  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];
  const topicMap = new Map([[OLD_TOPIC, CANONICAL_TOPIC]]);
  const sourceMap = new Map([[OLD_LAW_SOURCE, CANONICAL_LAW_SOURCE]]);
  const articleMap = new Map([
    ["article-cao-security-clearance-annual-report-20260626", "article-cao-security-clearance-report-2026"],
    ["article-noandt-security-clearance-hr-part2-20250319", "article-nagashima-security-clearance-hr-outsourcing-2025"]
  ]);
  const issueMap = new Map([
    ["security-clearance-qualifying-business", ["economic-security-qualified-business"]],
    ["security-clearance-employee-consent-hr", ["economic-security-suitability-assessment", "economic-security-hr-purpose-limit"]],
    ["security-clearance-recruitment-prescreening", ["economic-security-recruitment-prescreening"]],
    ["security-clearance-outsourcing", ["economic-security-outsourcing"]],
    ["security-clearance-first-year-operation", ["economic-security-operation-status"]]
  ]);
  const mapTopics = (values) => uniq((values || []).map((value) => topicMap.get(value) || value));
  const mapSources = (values) => uniq((values || []).map((value) => sourceMap.get(value) || value));
  const mapArticles = (values) => uniq((values || []).map((value) => articleMap.get(value) || value));
  const mapIssues = (values) => uniq((values || []).flatMap((value) => issueMap.get(value) || [value]));

  for (const source of window.SOURCE_DATA || []) source.topics = mapTopics(source.topics);
  for (const article of window.ARTICLE_DATA || []) {
    article.relatedTopics = mapTopics(article.relatedTopics);
    article.relatedIssues = mapIssues(article.relatedIssues);
    article.primarySourceIds = mapSources(article.primarySourceIds);
    if (Array.isArray(article.reformStageSourceIds)) article.reformStageSourceIds = mapSources(article.reformStageSourceIds);
    if (Array.isArray(article.reformEffectiveDateSourceIds)) article.reformEffectiveDateSourceIds = mapSources(article.reformEffectiveDateSourceIds);
  }
  for (const event of window.REFORM_EVENT_DATA || []) {
    event.relatedTopics = mapTopics(event.relatedTopics);
    event.sourceIds = mapSources(event.sourceIds);
    if (Array.isArray(event.matchSourceIds)) event.matchSourceIds = mapSources(event.matchSourceIds);
    if (Array.isArray(event.effectiveDateSourceIds)) event.effectiveDateSourceIds = mapSources(event.effectiveDateSourceIds);
    if (Array.isArray(event.articleIds)) event.articleIds = mapArticles(event.articleIds);
  }
  for (const update of window.UPDATE_DATA || []) {
    if (Array.isArray(update.affectedTopics)) update.affectedTopics = mapTopics(update.affectedTopics);
    if (update.source) update.source = sourceMap.get(update.source) || update.source;
  }

  const canonical = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === CANONICAL_TOPIC);
  const duplicate = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === OLD_TOPIC);
  if (canonical) {
    canonical.categories = uniq([...(canonical.categories || []), ...(duplicate?.categories || [])]);
    canonical.lastUpdated = "2026-09-21";
    canonical.lastVerified = "2026-09-21";
    canonical.sourceIds = mapSources(uniq([
      ...(canonical.sourceIds || []),
      ...(duplicate?.sourceIds || []),
      "source-cao-security-clearance-business-guideline-20250502",
      "source-cao-security-clearance-annual-report-20260626"
    ]));
    canonical.referenceArticleIds = mapArticles(uniq([
      ...(canonical.referenceArticleIds || []),
      ...(duplicate?.referenceArticleIds || []),
      "article-cao-economic-security-info-2025",
      "article-amt-economic-security-info-business-2025",
      "article-cao-security-clearance-report-2026",
      "article-nagashima-security-clearance-hr-outsourcing-2025",
      "article-amt-security-clearance-overview-20251226",
      "article-noandt-security-clearance-hr-part1-20250220"
    ]));
    const issues = Array.isArray(canonical.issues) ? canonical.issues : [];
    const hr = issues.find((issue) => issue.id === "economic-security-hr-purpose-limit");
    if (hr) hr.status = "interpreted";
    const outsourcing = issues.find((issue) => issue.id === "economic-security-outsourcing");
    if (outsourcing) outsourcing.status = "interpreted";
    if (!issues.some((issue) => issue.id === "economic-security-recruitment-prescreening")) {
      const sourceIssue = (duplicate?.issues || []).find((issue) => issue.id === "security-clearance-recruitment-prescreening");
      if (sourceIssue) {
        const copied = { ...sourceIssue, id: "economic-security-recruitment-prescreening", status: "interpreted", sourceIds: mapSources(sourceIssue.sourceIds) };
        issues.splice(Math.min(3, issues.length), 0, copied);
      }
    }
    canonical.issues = issues;
  }

  window.TOPIC_DATA = (window.TOPIC_DATA || []).filter((topic) => topic && topic.slug !== OLD_TOPIC);
  window.SOURCE_DATA = (window.SOURCE_DATA || []).filter((source) => source && source.id !== OLD_LAW_SOURCE);
})();

(() => {
  const OLD_TOPIC = "customer-harassment-jobseeker-sexual-harassment-2026";
  const CUSTOMER_TOPIC = "customer-harassment";
  const JOBSEEKER_TOPIC = "job-seeker-sexual-harassment";
  const JOBSEEKER_SOURCE = "source-mhlw-jobseeker-sexual-harassment-2026";
  const JOBSEEKER_ARTICLE = "article-mhlw-jobseeker-sexual-harassment-2026";
  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];

  const customerIssueMap = new Map([
    ["customer-harassment-definition-2026", ["customer-harassment-definition-2026"]],
    ["customer-harassment-employer-measures-2026", ["customer-harassment-employer-measures-2026"]]
  ]);
  const jobseekerIssueMap = new Map([
    ["jobseeker-sexual-harassment-employer-measures-2026", [
      "jobseeker-sh-scope",
      "jobseeker-sh-recruiting-rules",
      "jobseeker-sh-consultation-response"
    ]]
  ]);

  const customerTopic = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === CUSTOMER_TOPIC);
  const jobseekerTopic = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === JOBSEEKER_TOPIC);
  if (customerTopic) customerTopic.lastVerified = "2026-09-21";
  if (jobseekerTopic) {
    jobseekerTopic.lastUpdated = "2026-09-21";
    jobseekerTopic.lastVerified = "2026-09-21";
    jobseekerTopic.sourceIds = uniq([...(jobseekerTopic.sourceIds || []), JOBSEEKER_SOURCE]);
  }

  for (const source of window.SOURCE_DATA || []) {
    if (!Array.isArray(source.topics) || !source.topics.includes(OLD_TOPIC)) continue;
    const canonical = source.id === JOBSEEKER_SOURCE || /求職|jobseeker/i.test(`${source.id || ""} ${source.title || ""}`)
      ? JOBSEEKER_TOPIC
      : CUSTOMER_TOPIC;
    source.topics = uniq(source.topics.map((topic) => topic === OLD_TOPIC ? canonical : topic));
  }

  for (const article of window.ARTICLE_DATA || []) {
    if (article.id === JOBSEEKER_ARTICLE) {
      article.primarySourceIds = uniq([...(article.primarySourceIds || []), JOBSEEKER_SOURCE]);
    }
    if (!Array.isArray(article.relatedTopics) || !article.relatedTopics.includes(OLD_TOPIC)) continue;
    const isJobseeker = (article.relatedIssues || []).some((issue) => jobseekerIssueMap.has(issue))
      || /求職|jobseeker/i.test(`${article.id || ""} ${article.title || ""}`);
    const canonical = isJobseeker ? JOBSEEKER_TOPIC : CUSTOMER_TOPIC;
    const issueMap = isJobseeker ? jobseekerIssueMap : customerIssueMap;
    article.relatedTopics = uniq(article.relatedTopics.map((topic) => topic === OLD_TOPIC ? canonical : topic));
    article.relatedIssues = uniq((article.relatedIssues || []).flatMap((issue) => issueMap.get(issue) || [issue]));
  }

  for (const event of window.REFORM_EVENT_DATA || []) {
    if (!Array.isArray(event.relatedTopics) || !event.relatedTopics.includes(OLD_TOPIC)) continue;
    const canonical = event.lawId === "equal-employment-opportunity-act"
      || /求職|jobseeker|equal-opportunity/i.test(`${event.id || ""} ${event.title || ""} ${event.lawId || ""}`)
      ? JOBSEEKER_TOPIC
      : CUSTOMER_TOPIC;
    event.relatedTopics = uniq(event.relatedTopics.map((topic) => topic === OLD_TOPIC ? canonical : topic));
  }

  for (const update of window.UPDATE_DATA || []) {
    if (!Array.isArray(update.affectedTopics) || !update.affectedTopics.includes(OLD_TOPIC)) continue;
    update.affectedTopics = uniq(update.affectedTopics.flatMap((topic) => topic === OLD_TOPIC ? [CUSTOMER_TOPIC, JOBSEEKER_TOPIC] : [topic]));
  }

  window.TOPIC_DATA = (window.TOPIC_DATA || []).filter((topic) => topic && topic.slug !== OLD_TOPIC);
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
    id: "article-atsumi-bhr-grievance-remedy-20240703",
    title: "知っておきたい「ビジネスと人権」#6 人権侵害に対する救済手続き－企業による人権対応 (3) －",
    publisher: "渥美坂井法律事務所・外国法共同事業",
    author: "入江克典",
    publishedAt: "2024-07-03",
    collectedAt: "2026-09-21",
    url: "https://www.aplawjapan.com/newsletter/20240703",
    sourceType: "secondary",
    sourceLabel: "実務解説・渥美坂井法律事務所／ビジネスと人権・苦情処理／救済",
    status: "adopted",
    summary: "国連指導原則と日本政府の人権尊重ガイドラインを基礎に、人権への負の影響を自社が引き起こし・助長した場合と、取引等を通じて直接関連する場合を分け、救済と防止・軽減の違い、社内外の苦情処理メカニズム、実効性の8要件を企業実務向けに整理する。",
    whyImportant: [
      "自社が負の影響を引き起こし・助長した場合の救済と、サプライチェーン等で直接関連する場合の防止・軽減を分け、謝罪・原状回復・補償・再発防止等をどう位置付けるかが具体的である",
      "国内外サプライヤー従業員が使えるホットライン、多言語窓口、企業内委員会、JaCER・JP-MIRAI等の外部制度まで、苦情処理メカニズムの選択肢を実装レベルで示す",
      "正当性、利用可能性、予測可能性、公平性、透明性、権利適合性、継続学習、対話の8要件を、苦情窓口の設計・点検項目へ落とせる"
    ],
    audience: ["企業法務", "サステナビリティ担当", "コンプライアンス担当", "調達・サプライチェーン管理", "内部通報・苦情処理担当"],
    audienceReason: "人権方針やDDだけで終わらせず、負の影響が判明した後の苦情受付、救済、改善要請、再発防止を既存の通報・相談・サプライヤー管理へ組み込むため。",
    categories: ["危機管理・コンプライアンス", "国際取引"],
    relatedTopics: ["business-human-rights-dd"],
    relatedIssues: ["bhr-remedy-grievance"],
    primarySourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023"],
    legacyReformInference: false,
    whatChanged: "バックフィル／ビジネスと人権の救済について、苦情処理メカニズムの内部・外部の選択肢と実効性8要件を実務解説で補強した。"
  };
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) {
    window.ARTICLE_DATA = existing.concat(addition);
  }
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "business-human-rights-dd");
  if (topic && (window.ARTICLE_DATA || []).some((item) => item && item.id === addition.id)) {
    topic.referenceArticleIds = [...new Set([...(topic.referenceArticleIds || []), addition.id])];
    topic.lastUpdated = "2026-09-21";
    topic.lastVerified = "2026-09-21";
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
    id: "article-noandt-supply-chain-cyber-contract-scs-20250808",
    title: "サプライチェーンにおけるサイバーセキュリティリスク対応の近時の動向（2） ～サプライチェーン全体でのサイバーセキュリティ強化に向けたサプライチェーン対策評価制度の整備等について～",
    publisher: "長島・大野・常松法律事務所",
    author: "工藤靖",
    publishedAt: "2025-08-08",
    collectedAt: "2026-09-21",
    url: "https://www.nagashima.com/publications/publication20250808-1/",
    sourceType: "secondary",
    sourceLabel: "実務解説・長島・大野・常松／サプライチェーンサイバー・SCS／契約",
    status: "adopted",
    summary: "取引先のVPN脆弱性や弱い認証を起点に自社へ侵入される設例から、委託先へ契約で求めるセキュリティ水準、エビデンス提出・監査協力、再委託管理、インシデント対応・責任分担を整理し、要求の仕方によっては独占禁止法上の優越的地位の濫用や取引適正化法上の問題となり得ることまで横断する実務解説。SCS評価制度は2025年の中間取りまとめ時点の制度設計を扱うため、現在の制度段階は2026年の最終構築方針と併読する。",
    whyImportant: [
      "セキュリティ条項を抽象的な善管義務で終わらせず、要求水準、エビデンス提出・監査協力、サイバー保険、再委託管理、脆弱性情報共有、インシデント時の責任分担まで契約事項として具体化している",
      "取引先へのセキュリティ要求には合理的必要性の説明、十分な準備期間、価格・費用負担の協議、記録化が必要であり、独占禁止法・取引適正化法上の取引適正化と一体で設計すべきことを示す",
      "2025年のSCS制度形成期の実務課題を、2026年に確定した制度構築方針へつながる契約・監査上の論点として読み直せる"
    ],
    audience: ["企業法務", "情報セキュリティ担当", "調達・購買", "委託先管理", "コンプライアンス・内部監査"],
    audienceReason: "委託先のセキュリティ要求を契約・監査・価格協議へ落とし、SCS評価制度を既存のサプライヤー管理へ組み込む際の法務上の境界を確認するため。",
    categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "危機管理・コンプライアンス", "独占禁止法・下請・フリーランス"],
    relatedTopics: ["supply-chain-security-scs-2026", "cyber-countermeasures-critical-infrastructure"],
    relatedIssues: ["scs-procurement-contract-implementation", "scs-competition-transaction-law", "cyber-supply-chain-resilience"],
    primarySourceIds: ["source-meti-scs-policy-20260327", "source-jftc-cyber-partnership-20251226"],
    legacyReformInference: false,
    whatChanged: "バックフィル／SCS導入前段階の実務解説として、委託先に求めるセキュリティ水準・監査・再委託管理と、独禁法・取適法上の価格協議・費用負担を一体で整理した。"
  };
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) {
    window.ARTICLE_DATA = existing.concat(addition);
  }
  if ((window.ARTICLE_DATA || []).some((item) => item && item.id === addition.id)) {
    for (const slug of ["supply-chain-security-scs-2026", "cyber-countermeasures-critical-infrastructure"]) {
      const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === slug);
      if (!topic) continue;
      topic.referenceArticleIds = [...new Set([...(topic.referenceArticleIds || []), addition.id])];
    }
  }
})();
