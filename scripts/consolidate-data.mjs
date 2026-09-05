import fs from 'node:fs';
import vm from 'node:vm';

const ctx={window:{},URL,console}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync('data/manifest.js','utf8'),ctx,{filename:'data/manifest.js'});
const oldManifest=ctx.window.LAW_INDEX_DATA_FILES;
for(const files of Object.values(oldManifest)) for(const file0 of files){const file=file0.split('?')[0];vm.runInContext(fs.readFileSync(`data/${file}`,'utf8'),ctx,{filename:`data/${file}`});}

let topics=structuredClone(ctx.window.TOPIC_DATA||[]);
let sources=structuredClone(ctx.window.SOURCE_DATA||[]);
let updates=structuredClone(ctx.window.UPDATE_DATA||[]);
let reforms=structuredClone(ctx.window.REFORM_EVENT_DATA||[]);
let articles=structuredClone(ctx.window.ARTICLE_DATA||[]);

const normUrl=(u)=>{try{const x=new URL(u);x.protocol='https:';x.hash='';for(const k of [...x.searchParams.keys()])if(/^utm_/i.test(k)||['fbclid','gclid','yclid'].includes(k))x.searchParams.delete(k);x.hostname=x.hostname.toLowerCase();x.pathname=x.pathname.replace(/\/+$/,'')||'/';x.searchParams.sort();return x.toString()}catch{return String(u||'').trim()}};
const uniq=(xs)=>[...new Set(xs.filter((v)=>v!==undefined&&v!==null&&v!==''))];
const arrayFields=new Set(['whyImportant','audience','categories','relatedTopics','relatedIssues','primarySourceIds','sourceIds','articleIds','matchSourceIds','effectiveDateSourceIds','reformStageSourceIds','reformEffectiveDateSourceIds','affectedTopics']);
const richer=(a,b)=>String(b??'').length>String(a??'').length?b:a;

function mergeObj(a,b){
  const out={...a};
  for(const [k,v] of Object.entries(b)){
    if(Array.isArray(v)){
      if(arrayFields.has(k)||Array.isArray(out[k])) out[k]=uniq([...(Array.isArray(out[k])?out[k]:[]),...v]);
      else if(out[k]===undefined) out[k]=v;
    }else if(v&&typeof v==='object'){
      if(out[k]===undefined) out[k]=v;
    }else if(out[k]===undefined||out[k]===null||out[k]==='') out[k]=v;
    else if(['summary','whyImportant','audienceReason','whatChanged','title','sourceLabel','publisher','author','effectiveDateNote'].includes(k)) out[k]=richer(out[k],v);
  }
  return out;
}

function referenceCounts(rootArrays){
  const counts=new Map();
  const visit=(v)=>{if(Array.isArray(v))return v.forEach(visit);if(v&&typeof v==='object')return Object.values(v).forEach(visit);if(typeof v==='string')counts.set(v,(counts.get(v)||0)+1)};
  rootArrays.forEach(visit);return counts;
}
function canonicalize(items,{idKey='id',urlKey='url',refCounts=new Map()}={}){
  const idGroups=new Map();
  items.forEach((x,i)=>{const id=x[idKey];const key=id||`__missing_${i}`;(idGroups.get(key)||idGroups.set(key,[]).get(key)).push(x)});
  let merged=[...idGroups.values()].map(g=>g.reduce(mergeObj));
  const idMap=new Map();
  for(const g of idGroups.values())if(g.length>1){const canonical=g[0][idKey];for(const x of g)if(x[idKey]&&x[idKey]!==canonical)idMap.set(x[idKey],canonical)}
  const urlGroups=new Map();
  for(const x of merged){const key=x[urlKey]?normUrl(x[urlKey]):`__id_${x[idKey]}`;(urlGroups.get(key)||urlGroups.set(key,[]).get(key)).push(x)}
  const result=[];
  for(const g of urlGroups.values()){
    if(g.length===1){result.push(g[0]);continue}
    const ranked=[...g].sort((a,b)=>((refCounts.get(b[idKey])||0)-(refCounts.get(a[idKey])||0))||String(a[idKey]).localeCompare(String(b[idKey])));
    const canonical=ranked[0][idKey];
    let combined=ranked.reduce(mergeObj);
    combined[idKey]=canonical;
    combined[urlKey]=ranked[0][urlKey];
    for(const x of g)if(x[idKey]&&x[idKey]!==canonical)idMap.set(x[idKey],canonical);
    result.push(combined);
  }
  return {items:result,idMap};
}
function remapDeep(value,map){
  if(Array.isArray(value))return uniq(value.map(v=>remapDeep(v,map)));
  if(value&&typeof value==='object'){for(const k of Object.keys(value))value[k]=remapDeep(value[k],map);return value}
  if(typeof value==='string'&&map.has(value))return map.get(value);
  return value;
}

let refs=referenceCounts([topics,updates,reforms,articles]);
let sourceCanon=canonicalize(sources,{refCounts:refs}); sources=sourceCanon.items;
[topics,updates,reforms,articles].forEach(x=>remapDeep(x,sourceCanon.idMap));
refs=referenceCounts([topics,updates,reforms]);
let articleCanon=canonicalize(articles,{refCounts:refs}); articles=articleCanon.items;
[topics,updates,reforms].forEach(x=>remapDeep(x,articleCanon.idMap));

const categoryMap=new Map([
 ['契約・取引',['契約']],['労務・人事',['労務']],['コーポレートガバナンス',['会社法・ガバナンス']],['会社法',['会社法・ガバナンス']],['ガバナンス',['会社法・ガバナンス']],['開示・IR',['金融商品取引・開示・IR']],['独占禁止法・下請・フリーランス',['独占禁止法・競争法']],['消費者法',['消費者法・表示']],['広告・表示',['消費者法・表示']],['IT・デジタル',['AI・デジタル']],['社内体制',['危機管理・コンプライアンス']],['個人情報・AI・情報セキュリティ',['個人情報','AI・デジタル','情報セキュリティ']]
]);
const normalizeCats=(arr)=>uniq((arr||[]).flatMap(c=>categoryMap.get(c)||[c]));
for(const x of articles){if(Array.isArray(x.categories))x.categories=normalizeCats(x.categories);if(x.category&&categoryMap.has(x.category)){const vals=categoryMap.get(x.category);x.category=vals[0];if(vals.length>1)x.categories=normalizeCats([...(x.categories||[]),...vals]);}}
for(const x of topics){if(Array.isArray(x.categories))x.categories=normalizeCats(x.categories);if(x.category&&categoryMap.has(x.category)){const vals=categoryMap.get(x.category);x.category=vals[0];if(vals.length>1)x.categories=normalizeCats([...(x.categories||[]),...vals]);}}

const reformIds=new Set(reforms.map(r=>r.id));
for(const a of articles){
  if(a.reformEventId&&reformIds.has(a.reformEventId)){
    delete a.reformEffectiveDate; delete a.reformEffectiveDates; delete a.reformEffectiveDateSourceIds;
  }
}

const write=(file,varName,data)=>fs.writeFileSync(`data/${file}`,`window.${varName} = ${JSON.stringify(data,null,2)};\n`);
write('topics.js','TOPIC_DATA',topics);
write('sources.js','SOURCE_DATA',sources);
write('updates.js','UPDATE_DATA',updates);
write('reforms.js','REFORM_EVENT_DATA',reforms);
write('articles.js','ARTICLE_DATA',articles);

const keep=new Set(['schema.js','reform-policy.js','manifest.js','topics.js','sources.js','updates.js','reforms.js','articles.js']);
for(const file of fs.readdirSync('data')){
  if(/^(topics(?:-extra|-run\d+)?|sources(?:-extra|-run\d+)?|updates(?:-run\d+)?|articles(?:-secondary|-extra|-run\d+)?)\.js$/.test(file)&&!keep.has(file))fs.unlinkSync(`data/${file}`);
}
fs.writeFileSync('data/manifest.js',`window.LAW_INDEX_DATA_FILES = Object.freeze({\n  schema: [\"schema.js?v=8\", \"reform-policy.js?v=4\"],\n  topics: [\"topics.js?v=10\"],\n  sources: [\"sources.js?v=11\"],\n  updates: [\"updates.js?v=9\"],\n  reforms: [\"reforms.js?v=11\"],\n  articles: [\"articles.js?v=11\"]\n});\n`);

let schema=fs.readFileSync('data/schema.js','utf8');
schema=schema.replace('    reportDuplicates(topics, (topic) => topic.slug, "topic");\n    sources.filter((source) => !source.id).forEach(() => errors.push("source: id がありません。"));\n    articles.filter((article) => !article.id).forEach(() => errors.push("article: id がありません。"));', '    reportDuplicates(topics, (topic) => topic.slug, "topic");\n    reportDuplicates(sources, (source) => source.id, "source");\n    reportDuplicates(articles, (article) => article.id, "article");\n    reportDuplicates(sources, (source) => source.url, "source URL");\n    reportDuplicates(articles, (article) => article.url, "article URL");\n    sources.filter((source) => !source.id).forEach(() => errors.push("source: id がありません。"));\n    articles.filter((article) => !article.id).forEach(() => errors.push("article: id がありません。"));');
schema=schema.replace(/  const applyTopicVerificationDates = \(topics = \[\], articles = \[\], updates = \[\]\) => \{[\s\S]*?\n  \};\n\n  const getKnowledgeAudit/, '  const applyTopicVerificationDates = () => {\n    // lastVerified is evidence of an actual primary-source re-check.\n    // Article collection alone must never advance it automatically.\n    return [];\n  };\n\n  const getKnowledgeAudit');
fs.writeFileSync('data/schema.js',schema);

console.log(JSON.stringify({before:{articles:ctx.window.ARTICLE_DATA.length,sources:ctx.window.SOURCE_DATA.length,topics:ctx.window.TOPIC_DATA.length,reforms:ctx.window.REFORM_EVENT_DATA.length},after:{articles:articles.length,sources:sources.length,topics:topics.length,reforms:reforms.length},articleIdRemaps:Object.fromEntries(articleCanon.idMap),sourceIdRemaps:Object.fromEntries(sourceCanon.idMap)},null,2));
