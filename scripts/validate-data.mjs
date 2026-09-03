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
const articles = context.window.ARTICLE_DATA || [];
const errors = [...manifestErrors, ...context.window.validateKnowledgeData(topics, sources, articles)];
const warnings = context.window.findKnowledgeWarnings(topics, sources, articles);
const uniqueArticles = context.window.uniqueKnowledgeArticles(articles);
const issues = topics.flatMap((topic) => topic.issues || []);
const legalReforms = uniqueArticles.filter((article) => context.window.getLegalReformInfo(article, topics).isReform);

for (const topic of topics) {
  const page = `topics/${topic.slug}.html`;
  if (!fs.existsSync(page)) errors.push(`${topic.slug}: テーマ詳細ページ ${page} がありません。`);
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
  legalReforms: legalReforms.length,
  reformStages: Object.fromEntries([...new Set(legalReforms.map((article) => context.window.getLegalReformInfo(article, topics).stage))].sort().map((stage) => [stage, legalReforms.filter((article) => context.window.getLegalReformInfo(article, topics).stage === stage).length])),
  reformLaws: Object.fromEntries([...new Set(legalReforms.map((article) => context.window.getLegalReformLaw(article, topics).label))].sort((left, right) => left.localeCompare(right, "ja")).map((law) => [law, legalReforms.filter((article) => context.window.getLegalReformLaw(article, topics).label === law).length])),
  warnings: warnings.length
}));
