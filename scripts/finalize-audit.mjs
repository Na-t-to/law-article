import fs from 'node:fs';
const path='data/schema.js';
let s=fs.readFileSync(path,'utf8');
if(!s.includes('const normalizeKnowledgeUrl =')){
  s=s.replace('    const issueIds = new Set();', `    const issueIds = new Set();\n    const normalizeKnowledgeUrl = (value) => {\n      try {\n        const url = new URL(value);\n        url.protocol = "https:";\n        url.hash = "";\n        [...url.searchParams.keys()].forEach((key) => {\n          if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);\n        });\n        url.hostname = url.hostname.toLowerCase();\n        url.pathname = url.pathname.replace(/\\/+$/, "") || "/";\n        url.searchParams.sort();\n        return url.toString();\n      } catch {\n        return String(value || "").trim();\n      }\n    };`);
}
s=s.replace('    reportDuplicates(sources, (source) => source.url, "source URL");\n    reportDuplicates(articles, (article) => article.url, "article URL");','    reportDuplicates(sources, (source) => normalizeKnowledgeUrl(source.url), "source canonical URL");\n    reportDuplicates(articles, (article) => normalizeKnowledgeUrl(article.url), "article canonical URL");');
s=s.replace(/  const uniqueArticles = \(articles = \[\]\) => \{[\s\S]*?\n  \};\n\n  const getArticleChangeResult/, `  const uniqueArticles = (articles = []) => articles.map((article) => ({ ...article }));\n\n  const getArticleChangeResult`);
fs.writeFileSync(path,s);

const validator='scripts/validate-data.mjs';
let v=fs.readFileSync(validator,'utf8');
v=v.replace('const context = { window: {} };','const context = { window: {}, URL };');
fs.writeFileSync(validator,v);
