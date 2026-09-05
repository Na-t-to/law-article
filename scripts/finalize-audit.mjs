import fs from 'node:fs';
import pathModule from 'node:path';
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

const readme='README.md';
let r=fs.readFileSync(readme,'utf8');
r=r.replace('`data/articles*.js` — 記事・資料。', '`data/articles.js` — 記事・資料。');
r=r.replace('- `lastVerified` は、関連情報を確認した最新日です。採用記事が「整理変更なし」と判定された場合、記事の `collectedAt` から関連テーマの確認日だけを進めます。\n- 読み込み時に記事・更新履歴から `lastVerified` を再計算するため、テーマデータの再生成で確認日が巻き戻っても復元できます。`lastUpdated` はこの処理では変更しません。', '- `lastVerified` は、テーマ本文・一次資料を実際に照合し「整理変更なし」を含めて検証した最新日です。記事の収録や自動推定だけでは進めません。\n- 記事データから検証候補日を監査することはできますが、読み込み時に `lastVerified` を自動更新しません。検証日を進める場合は、一次資料との照合結果を確認してテーマデータを明示更新します。');
fs.writeFileSync(readme,r);

const walk=(dir)=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(pathModule.join(dir,entry.name)):[pathModule.join(dir,entry.name)]);
for(const file of walk('.').filter(file=>file.endsWith('.html'))){
  let html=fs.readFileSync(file,'utf8');
  html=html.replace(/data\/manifest\.js\?v=\d+/g,'data/manifest.js?v=18');
  fs.writeFileSync(file,html);
}
