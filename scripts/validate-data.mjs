import fs from "node:fs";
import vm from "node:vm";

const context = { window: {}, URL };
vm.createContext(context);
vm.runInContext(fs.readFileSync("data/manifest.js", "utf8"), context, { filename: "data/manifest.js" });

const manifest = context.window.LAW_INDEX_DATA_FILES || {};
const listedFiles = Object.values(manifest).flat().map((file) => file.split("?")[0]);
const actualFiles = fs.readdirSync("data").filter((file) => /^(schema|reform-policy|reforms|topics(?:-extra|-run\d+)?|sources(?:-extra|-run\d+)?|updates(?:-run\d+)?|articles(?:-secondary|-extra|-run\d+)?)\.js$/.test(file));
const manifestErrors = [
  ...actualFiles.filter((file) => !listedFiles.includes(file)).map((file) => `data/${file}: manifest.js に登録されていません。`),
  ...listedFiles.filter((file) => !actualFiles.includes(file)).map((file) => `data/${file}: manifest.js にありますがファイルが存在しません。`)
];

for (const file of listedFiles) {
  vm.runInContext(fs.readFileSync(`data/${file}`, "utf8"), context, { filename: `data/${file}` });
}

const topics = context.window.TOPIC_DATA || [];
const sources = context.window.SOURCE_DATA || [];
const updates = context.window.UPDATE_DATA || [];
const reformEvents = context.window.REFORM_EVENT_DATA || [];
const articles = context.window.ARTICLE_DATA || [];
const verificationAdvances = context.window.applyTopicVerificationDates(topics, articles, updates);
const reformStageValues = new Set(["proposal", "finalized_pending", "partially_effective", "effective"]);
const reformEventTypes = new Set(["law_amendment", "new_law", "regulation_or_guideline", "policy_review"]);
const effectiveDateStatuses = new Set(["confirmed", "planned", "relative", "phased"]);
const sourceIds = new Set(sources.map((source) => source.id));
const topicIds = new Set(topics.map((topic) => topic.slug));
const articleIds = new Set(articles.map((article) => article.id));
const reformEventIds = new Set();
const reformEventErrors = [];
const reformEventWarnings = [];
const reformStageErrors = [];
const reformEffectiveDateErrors = [];
const reformEffectiveDateWarnings = [];

for (const event of reformEvents) {
  const path = event.id || "reform-event";
  if (!event.id) reformEventErrors.push("reform-event: id がありません。");
  else if (reformEventIds.has(event.id)) reformEventErrors.push(`${path}: id が重複しています。`);
  reformEventIds.add(event.id);
  if (!event.title) reformEventErrors.push(`${path}: title がありません。`);
  if (!event.lawId || !event.lawLabel) reformEventErrors.push(`${path}: lawId・lawLabel が必要です。`);
  if (!reformEventTypes.has(event.eventType)) reformEventErrors.push(`${path}: eventType "${event.eventType}" は定義外です。`);
  if (!Array.isArray(event.relatedTopics)) reformEventErrors.push(`${path}: relatedTopics は配列で指定してください。`);
  else event.relatedTopics.filter((id) => !topicIds.has(id)).forEach((id) => reformEventErrors.push(`${path}: relatedTopic "${id}" は存在しません。`));
  if (!Array.isArray(event.sourceIds) || !event.sourceIds.length) reformEventErrors.push(`${path}: sourceIds を1件以上指定してください。`);
  else event.sourceIds.filter((id) => !sourceIds.has(id)).forEach((id) => reformEventErrors.push(`${path}: sourceId "${id}" は存在しません。`));

  if (event.matchSourceIds !== undefined) {
    if (!Array.isArray(event.matchSourceIds)) reformEventErrors.push(`${path}: matchSourceIds は配列で指定してください。`);
    else {
      event.matchSourceIds.filter((id) => !sourceIds.has(id)).forEach((id) => reformEventErrors.push(`${path}: matchSourceId "${id}" は存在しません。`));
      event.matchSourceIds.filter((id) => !(event.sourceIds || []).includes(id)).forEach((id) => reformEventErrors.push(`${path}: matchSourceId "${id}" は sourceIds にも含めてください。`));
    }
  }
  if (event.articleIds !== undefined) {
    if (!Array.isArray(event.articleIds)) reformEventErrors.push(`${path}: articleIds は配列で指定してください。`);
    else event.articleIds.filter((id) => !articleIds.has(id)).forEach((id) => reformEventErrors.push(`${path}: articleId "${id}" は存在しません。`));
  }

  const status = event.effectiveDateStatus;
  if (!effectiveDateStatuses.has(status)) reformEventErrors.push(`${path}: effectiveDateStatus "${status}" は定義外です。`);
  const hasSingleEffectiveDate = Object.prototype.hasOwnProperty.call(event, "effectiveDate");
  const hasMultipleEffectiveDates = Object.prototype.hasOwnProperty.call(event, "effectiveDates");
  const effectiveDateValues = [
    ...(Array.isArray(event.effectiveDates) ? event.effectiveDates : []),
    event.effectiveDate
  ].filter(Boolean);
  if (hasMultipleEffectiveDates && !Array.isArray(event.effectiveDates)) reformEventErrors.push(`${path}: effectiveDates は配列で指定してください。`);
  effectiveDateValues.filter((value) => !context.window.parseLegalReformEffectiveDate?.(value)).forEach((value) => reformEventErrors.push(`${path}: effectiveDate "${value}" は YYYY-MM-DD または YYYY-MM の実在する日付で指定してください。`));

  if (!Array.isArray(event.effectiveDateSourceIds) || !event.effectiveDateSourceIds.length) {
    reformEventErrors.push(`${path}: 施行時期を登録する場合は effectiveDateSourceIds を1件以上指定してください。`);
  } else {
    event.effectiveDateSourceIds.filter((id) => !sourceIds.has(id)).forEach((id) => reformEventErrors.push(`${path}: effectiveDateSourceId "${id}" は存在しません。`));
    event.effectiveDateSourceIds.filter((id) => !(event.sourceIds || []).includes(id)).forEach((id) => reformEventErrors.push(`${path}: effectiveDateSourceId "${id}" は event.sourceIds にも含めてください。`));
  }
  if (["confirmed", "planned"].includes(status) && !effectiveDateValues.length) reformEventErrors.push(`${path}: effectiveDateStatus=${status} では effectiveDate または effectiveDates が必要です。`);
  if (status === "relative" && !String(event.effectiveDateNote || "").trim()) reformEventErrors.push(`${path}: relative では effectiveDateNote が必要です。`);
  if (status === "phased" && !effectiveDateValues.length && !String(event.effectiveDateNote || "").trim()) reformEventErrors.push(`${path}: phased では effectiveDates または effectiveDateNote が必要です。`);
}

const matchingEventsForArticle = (article) => {
  const primary = Array.isArray(article.primarySourceIds) ? article.primarySourceIds : [];
  return reformEvents.filter((event) => (event.articleIds || []).includes(article.id) || (event.matchSourceIds || []).some((id) => primary.includes(id)));
};
const resolvedEventForArticle = (article) => {
  if (article.reformEventId) return reformEvents.find((event) => event.id === article.reformEventId) || null;
  const matches = matchingEventsForArticle(article);
  return matches.length === 1 ? matches[0] : null;
};

for (const article of articles) {
  if (article.reformEventId && !reformEventIds.has(article.reformEventId)) reformEventErrors.push(`${article.id || "article"}: reformEventId "${article.reformEventId}" は存在しません。`);
  const inferredMatches = matchingEventsForArticle(article);
  if (!article.reformEventId && inferredMatches.length > 1) reformEventErrors.push(`${article.id || "article"}: 複数の改正イベントに一致します: ${inferredMatches.map((event) => event.id).join(" / ")}`);
  if (article.reformEventId) {
    const conflicts = inferredMatches.filter((event) => event.id !== article.reformEventId);
    if (conflicts.length) reformEventWarnings.push(`${article.id || "article"}: 明示 reformEventId と matchSourceIds が別イベントを指しています: ${conflicts.map((event) => event.id).join(" / ")}`);
  }

  const hasStage = Object.prototype.hasOwnProperty.call(article, "reformStageAtPublication");
  const hasStageSources = Object.prototype.hasOwnProperty.call(article, "reformStageSourceIds");
  if (hasStage || hasStageSources) {
    if (!hasStage) {
      reformStageErrors.push(`${article.id || "article"}: reformStageSourceIds を指定する場合は reformStageAtPublication も必要です。`);
    } else {
      if (!reformStageValues.has(article.reformStageAtPublication)) reformStageErrors.push(`${article.id || "article"}: reformStageAtPublication "${article.reformStageAtPublication}" は定義外です。`);
      if (!Array.isArray(article.reformStageSourceIds) || !article.reformStageSourceIds.length) {
        reformStageErrors.push(`${article.id || "article"}: reformStageAtPublication を表示するには reformStageSourceIds を1件以上指定してください。`);
      } else {
        article.reformStageSourceIds.filter((id) => !sourceIds.has(id)).forEach((id) => reformStageErrors.push(`${article.id || "article"}: reformStageSourceId "${id}" は存在しません。`));
        article.reformStageSourceIds.filter((id) => !(article.primarySourceIds || []).includes(id)).forEach((id) => reformStageErrors.push(`${article.id || "article"}: reformStageSourceId "${id}" は primarySourceIds にも含めてください。`));
      }
    }
  }

  const hasSingleEffectiveDate = Object.prototype.hasOwnProperty.call(article, "reformEffectiveDate");
  const hasMultipleEffectiveDates = Object.prototype.hasOwnProperty.call(article, "reformEffectiveDates");
  const hasEffectiveDateSources = Object.prototype.hasOwnProperty.call(article, "reformEffectiveDateSourceIds");
  const explicitEffectiveDateValues = [
    ...(Array.isArray(article.reformEffectiveDates) ? article.reformEffectiveDates : []),
    article.reformEffectiveDate
  ].filter(Boolean);

  if (resolvedEventForArticle(article) && explicitEffectiveDateValues.length) reformEventWarnings.push(`${article.id || "article"}: 改正イベントへ接続済みなので施行日は記事側ではなくイベント側へ移してください。`);
  if (hasMultipleEffectiveDates && !Array.isArray(article.reformEffectiveDates)) reformEffectiveDateErrors.push(`${article.id || "article"}: reformEffectiveDates は配列で指定してください。`);
  explicitEffectiveDateValues.filter((value) => !context.window.parseLegalReformEffectiveDate?.(value)).forEach((value) => reformEffectiveDateErrors.push(`${article.id || "article"}: reformEffectiveDate "${value}" は YYYY-MM-DD または YYYY-MM の実在する日付で指定してください。`));
  if (hasEffectiveDateSources && !hasSingleEffectiveDate && !hasMultipleEffectiveDates) reformEffectiveDateErrors.push(`${article.id || "article"}: reformEffectiveDateSourceIds を指定する場合は reformEffectiveDate または reformEffectiveDates も必要です。`);
  if ((hasSingleEffectiveDate || hasMultipleEffectiveDates) && explicitEffectiveDateValues.length) {
    if (!Array.isArray(article.reformEffectiveDateSourceIds) || !article.reformEffectiveDateSourceIds.length) {
      reformEffectiveDateWarnings.push(`${article.id || "article"}: 施行日データはありますが reformEffectiveDateSourceIds がないため、法改正ページには表示しません。一次資料で確認後に根拠を付けるか、改正イベントへ移してください。`);
    } else {
      article.reformEffectiveDateSourceIds.filter((id) => !sourceIds.has(id)).forEach((id) => reformEffectiveDateErrors.push(`${article.id || "article"}: reformEffectiveDateSourceId "${id}" は存在しません。`));
      article.reformEffectiveDateSourceIds.filter((id) => !(article.primarySourceIds || []).includes(id)).forEach((id) => reformEffectiveDateErrors.push(`${article.id || "article"}: reformEffectiveDateSourceId "${id}" は primarySourceIds にも含めてください。`));
    }
  }
}

const errors = [...manifestErrors, ...context.window.validateKnowledgeData(topics, sources, articles), ...reformEventErrors, ...reformStageErrors, ...reformEffectiveDateErrors];
const uniqueArticles = context.window.uniqueKnowledgeArticles(articles);
const issues = topics.flatMap((topic) => topic.issues || []);
const legalReforms = uniqueArticles.filter((article) => resolvedEventForArticle(article) || context.window.getLegalReformInfo(article, topics).isReform);
const unlinkedLegalReforms = legalReforms.filter((article) => !resolvedEventForArticle(article));
if (unlinkedLegalReforms.length) reformEventWarnings.push(`法改正記事 ${legalReforms.length} 件のうち ${unlinkedLegalReforms.length} 件は改正イベント未整理です。既存記事は表示を維持し、順次棚卸ししてください。`);
const warnings = [...context.window.findKnowledgeWarnings(topics, sources, articles), ...reformEventWarnings, ...reformEffectiveDateWarnings];
const audit = context.window.getKnowledgeAudit(topics, articles, updates);

for (const topic of topics) {
  const page = `topics/${topic.slug}.html`;
  if (!fs.existsSync(page)) errors.push(`${topic.slug}: テーマ詳細ページ ${page} がありません。`);
}

for (const page of ["index.html", "articles.html", "topics.html", "reforms.html"]) {
  if (!fs.existsSync(page)) errors.push(`主要ページ ${page} がありません。`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

if (warnings.length) console.warn(warnings.join("\n"));
console.log(JSON.stringify({
  topics: topics.length,
  issues: issues.length,
  articles: articles.length,
  uniqueArticles: uniqueArticles.length,
  statuses: [...new Set(issues.map((issue) => issue.status))].sort(),
  stages: [...new Set(issues.map((issue) => issue.stage))].sort(),
  disputed: issues.filter((issue) => issue.status === "disputed").length,
  views: issues.reduce((sum, issue) => sum + issue.views.length, 0),
  issuesWithViews: issues.filter((issue) => Array.isArray(issue.views) && issue.views.length > 0).length,
  singleViewIssues: audit.singleViewIssues,
  statusCounts: audit.statusCounts,
  emptyViewsByStatus: audit.emptyViewsByStatus,
  allAuthoritativeThemes: audit.allAuthoritativeThemes,
  verificationDiverged: audit.verificationDiverged,
  oldestLastVerified: audit.oldestLastVerified,
  oldestVerifiedTopics: audit.oldestVerifiedTopics,
  verificationAdvancesApplied: verificationAdvances,
  verificationAdvancesPending: audit.verificationAdvancesPending,
  legalReforms: legalReforms.length,
  reformEvents: reformEvents.length,
  reformEventLinked: legalReforms.filter((article) => resolvedEventForArticle(article)).length,
  reformEventUnlinked: unlinkedLegalReforms.length,
  reformEventTimingGrounded: reformEvents.filter((event) => context.window.getLegalReformEventTiming?.(event)).length,
  reformStages: Object.fromEntries([...reformStageValues].sort().map((stage) => [stage, legalReforms.filter((article) => article.reformStageAtPublication === stage).length])),
  reformStageTagged: legalReforms.filter((article) => reformStageValues.has(article.reformStageAtPublication)).length,
  reformStageUntagged: legalReforms.filter((article) => !reformStageValues.has(article.reformStageAtPublication)).length,
  reformEffectiveDateGroundedLegacy: legalReforms.filter((article) => !resolvedEventForArticle(article) && context.window.getLegalReformEffectiveDate?.(article)).length,
  warnings: warnings.length
}));
