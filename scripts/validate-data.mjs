import fs from "node:fs";
import vm from "node:vm";

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync("data/manifest.js", "utf8"), context, { filename: "data/manifest.js" });

const manifest = context.window.LAW_INDEX_DATA_FILES || {};
const listedFiles = Object.values(manifest).flat().map((file) => file.split("?")[0]);
const actualFiles = fs.readdirSync("data").filter((file) => /^(schema|topics(?:-extra|-run\d+)?|sources(?:-extra|-run\d+)?|updates(?:-run\d+)?|articles(?:-secondary|-extra|-run\d+)?)\.js$/.test(file));
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
const articles = context.window.ARTICLE_DATA || [];
const verificationAdvances = context.window.applyTopicVerificationDates(topics, articles, updates);
const reformStageValues = new Set(["proposal", "finalized_pending", "partially_effective", "effective"]);
const sourceIds = new Set(sources.map((source) => source.id));
const reformStageErrors = [];

for (const article of articles) {
  const hasStage = Object.prototype.hasOwnProperty.call(article, "reformStageAtPublication");
  const hasStageSources = Object.prototype.hasOwnProperty.call(article, "reformStageSourceIds");
  if (!hasStage && !hasStageSources) continue;
  if (!hasStage) {
    reformStageErrors.push(`${article.id || "article"}: reformStageSourceIds を指定する場合は reformStageAtPublication も必要です。`);
    continue;
  }
  if (!reformStageValues.has(article.reformStageAtPublication)) {
    reformStageErrors.push(`${article.id || "article"}: reformStageAtPublication "${article.reformStageAtPublication}" は定義外です。`);
  }
  if (!Array.isArray(article.reformStageSourceIds) || !article.reformStageSourceIds.length) {
    reformStageErrors.push(`${article.id || "article"}: reformStageAtPublication を表示するには reformStageSourceIds を1件以上指定してください。`);
    continue;
  }
  article.reformStageSourceIds.filter((id) => !sourceIds.has(id)).forEach((id) => reformStageErrors.push(`${article.id || "article"}: reformStageSourceId "${id}" は存在しません。`));
  article.reformStageSourceIds.filter((id) => !(article.primarySourceIds || []).includes(id)).forEach((id) => reformStageErrors.push(`${article.id || "article"}: reformStageSourceId "${id}" は primarySourceIds にも含めてください。`));
}

const errors = [...manifestErrors, ...context.window.validateKnowledgeData(topics, sources, articles), ...reformStageErrors];
const warnings = context.window.findKnowledgeWarnings(topics, sources, articles);
const uniqueArticles = context.window.uniqueKnowledgeArticles(articles);
const issues = topics.flatMap((topic) => topic.issues || []);
const legalReforms = uniqueArticles.filter((article) => context.window.getLegalReformInfo(article, topics).isReform);
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
  statusCounts: audit.statusCounts,
  emptyViewsByStatus: audit.emptyViewsByStatus,
  allAuthoritativeThemes: audit.allAuthoritativeThemes,
  verificationDiverged: audit.verificationDiverged,
  verificationAdvancesApplied: verificationAdvances,
  verificationAdvancesPending: audit.verificationAdvancesPending,
  legalReforms: legalReforms.length,
  reformStages: Object.fromEntries([...reformStageValues].sort().map((stage) => [stage, legalReforms.filter((article) => article.reformStageAtPublication === stage).length])),
  reformStageTagged: legalReforms.filter((article) => reformStageValues.has(article.reformStageAtPublication)).length,
  reformStageUntagged: legalReforms.filter((article) => !reformStageValues.has(article.reformStageAtPublication)).length,
  reformLaws: Object.fromEntries([...new Set(legalReforms.map((article) => context.window.getLegalReformLaw(article, topics).label))].sort((left, right) => left.localeCompare(right, "ja")).map((law) => [law, legalReforms.filter((article) => context.window.getLegalReformLaw(article, topics).label === law).length])),
  warnings: warnings.length
}));
