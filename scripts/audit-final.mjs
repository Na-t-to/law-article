import fs from 'node:fs';
import vm from 'node:vm';
const c={window:{},URL,console};vm.createContext(c);
vm.runInContext(fs.readFileSync('data/manifest.js','utf8'),c);
for(const files of Object.values(c.window.LAW_INDEX_DATA_FILES))for(const f0 of files){const f=f0.split('?')[0];vm.runInContext(fs.readFileSync(`data/${f}`,'utf8'),c,{filename:f});}
const W=c.window,topics=W.TOPIC_DATA||[],articles=W.ARTICLE_DATA||[],sources=W.SOURCE_DATA||[],reforms=W.REFORM_EVENT_DATA||[],updates=W.UPDATE_DATA||[];
const uniq=x=>[...new Set(x)];
const jacc=(a,b)=>{a=new Set(a);b=new Set(b);const u=new Set([...a,...b]);if(!u.size)return 0;let n=0;for(const x of a)if(b.has(x))n++;return n/u.size};
const articleByTopic=new Map(topics.map(t=>[t.slug,articles.filter(a=>(a.relatedTopics||[]).includes(t.slug)).map(a=>a.id)]));
const sourceByTopic=new Map(topics.map(t=>[t.slug,uniq([...(t.sourceIds||[]),...articles.filter(a=>(a.relatedTopics||[]).includes(t.slug)).flatMap(a=>a.primarySourceIds||[])])]));
const pairs=[];
for(let i=0;i<topics.length;i++)for(let j=i+1;j<topics.length;j++){
 const a=topics[i],b=topics[j],aj=jacc(articleByTopic.get(a.slug),articleByTopic.get(b.slug)),sj=jacc(sourceByTopic.get(a.slug),sourceByTopic.get(b.slug));
 if(aj>=0.35||sj>=0.45)pairs.push({a:a.slug,aTitle:a.title,b:b.slug,bTitle:b.title,articleJaccard:+aj.toFixed(3),sourceJaccard:+sj.toFixed(3),aArticles:articleByTopic.get(a.slug).length,bArticles:articleByTopic.get(b.slug).length,sharedArticles:articleByTopic.get(a.slug).filter(x=>articleByTopic.get(b.slug).includes(x)),sharedSources:sourceByTopic.get(a.slug).filter(x=>sourceByTopic.get(b.slug).includes(x))});
}
pairs.sort((x,y)=>Math.max(y.articleJaccard,y.sourceJaccard)-Math.max(x.articleJaccard,x.sourceJaccard));
const categories={};for(const a of articles)for(const x of a.categories||[])categories[x]=(categories[x]||0)+1;for(const t of topics)for(const x of t.categories||[])categories[x]=(categories[x]||0)+1;
const normUrl=u=>{try{const x=new URL(u);x.protocol='https:';x.hash='';for(const k of [...x.searchParams.keys()])if(/^utm_/i.test(k)||['fbclid','gclid','yclid'].includes(k))x.searchParams.delete(k);x.pathname=x.pathname.replace(/\/+$/,'')||'/';x.searchParams.sort();return x.toString()}catch{return u}};
const groups=(arr,key)=>{const m=new Map;for(const x of arr){const k=key(x);(m.get(k)||m.set(k,[]).get(k)).push(x)}return [...m.entries()].filter(([,v])=>v.length>1).map(([key,v])=>({key,ids:v.map(x=>x.id)}))};
const reformEventIds=new Set(reforms.map(r=>r.id));
const matches=a=>reforms.filter(e=>(e.articleIds||[]).includes(a.id)||(e.matchSourceIds||[]).some(id=>(a.primarySourceIds||[]).includes(id)));
const resolved=a=>a.reformEventId?reforms.find(e=>e.id===a.reformEventId)||null:(matches(a).length===1?matches(a)[0]:null);
const legal=articles.filter(a=>resolved(a)||W.getLegalReformInfo?.(a,topics)?.isReform);
const unlinked=legal.filter(a=>!resolved(a)).map(a=>({id:a.id,title:a.title,publishedAt:a.publishedAt,relatedTopics:a.relatedTopics,primarySourceIds:a.primarySourceIds,reformStageAtPublication:a.reformStageAtPublication}));
const report={counts:{topics:topics.length,articles:articles.length,sources:sources.length,reforms:reforms.length,updates:updates.length},categories:Object.entries(categories).sort((a,b)=>b[1]-a[1]),duplicateNormalizedArticleUrls:groups(articles,a=>normUrl(a.url)),duplicateNormalizedSourceUrls:groups(sources,a=>normUrl(a.url)),topicPairs:pairs,topics:topics.map(t=>({slug:t.slug,title:t.title,categories:t.categories,lastUpdated:t.lastUpdated,lastVerified:t.lastVerified,issues:(t.issues||[]).length,articles:articleByTopic.get(t.slug).length,sources:sourceByTopic.get(t.slug).length})),reforms:reforms.map(e=>({id:e.id,title:e.title,lawLabel:e.lawLabel,eventType:e.eventType,effectiveDateStatus:e.effectiveDateStatus,effectiveDate:e.effectiveDate,effectiveDates:e.effectiveDates,effectiveDateNote:e.effectiveDateNote,articleIds:e.articleIds,relatedTopics:e.relatedTopics,sourceIds:e.sourceIds})),legalReforms:legal.length,unlinkedLegalReforms:unlinked.length,unlinked};
console.log(JSON.stringify(report,null,2));
