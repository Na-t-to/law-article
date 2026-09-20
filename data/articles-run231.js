(() => {
  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];
  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid", "mc_cid", "mc_eid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch { return String(value || "").trim(); }
  };
  const sourceAliases = new Map([
    ["source-caa-digital-scta-interim-20260910","source-caa-digital-tokusho-interim-2026"],
    ["source-egov-digital-scta-interim-comment-20260916","source-caa-digital-tokusho-public-comment-2026"],
    ["source-npa-aml-annual-report-2025","source-npa-jafic-annual-report-2025-identity-review"],
    ["source-egov-early-business-rehabilitation-act-2025","source-early-business-rehabilitation-act-2025"],
    ["source-meti-early-business-rehabilitation-rules-qa-2026","source-meti-early-business-recovery-rules-2026"],
    ["source-fsa-digital-bond-solicitation-final-2026","source-fsa-growth-finance-ordinance-2026"],
    ["source-mhlw-customer-harassment-2026","source-customer-harassment-practical-2026"],
    ["source-fsa-payment-services-amendment-final-2026","source-fsa-crossborder-collection-2026"],
    ["source-moj-ai-publicity-voice-report-2026","source-moj-ai-likeness-report-2026"],
    ["source-supreme-court-network-patent-2025","source-courts-dwango-fc2-system-2025"],
    ["source-cfa-child-sexual-violence-prevention-act-2026","source-cfa-child-sexual-violence-act-portal"],
    ["source-maff-seed-amendment-2026","source-maff-seed-act-amendment-2026"],
    ["source-fsa-payment-services-amendment-final-20260522","source-fsa-crossborder-collection-2026"],
    ["source-fsa-fiea-payment-amendment-law-20260723","source-fsa-fiea-law-text-2026"],
    ["source-caa-consumer-contract-interim-20260910","source-caa-consumer-contract-interim-draft-2026"],
    ["source-egov-consumer-contract-interim-comment-20260916","source-caa-consumer-contract-public-comment-2026"],
    ["source-fsa-ssbj-disclosure-ordinance-20260220","source-fsa-disclosure-ordinance-2026"],
    ["source-fsa-ssbj-shk-designation-20260915","source-fsa-ssbj-shk-practice-standard-designation-2026"],
    ["source-fsa-public-fund-liquidity-guideline-20260916","source-fsa-public-fund-liquidity-guideline-2026"],
    ["source-meti-scs-policy-20260327","source-scs-evaluation-2026"],
    ["source-egov-early-business-restructuring-act","source-early-business-rehabilitation-act-2025"],
    ["source-meti-early-restructuring-rules-qa-20260630","source-meti-early-business-recovery-rules-2026"],
    ["source-caa-digital-transactions-interim-20260910","source-caa-digital-tokusho-interim-2026"],
    ["source-mhlw-restructuring-labor-council-20260914","source-mhlw-reorg-labor-council-2026-09-14"],
    ["source-fsa-vf-rule-20260915","source-fsa-growth-finance-ordinance-2026"],
    ["source-cfa-child-sexual-violence-act-hub-20260918","source-cfa-child-sexual-violence-act-portal"],
    ["source-maff-seed-act-2026-amendment","source-maff-seed-act-amendment-2026"],
    ["source-maff-seed-act-2026-qa","source-maff-seed-act-qa-2026"],
    ["source-maff-important-varieties-act-2026","source-maff-important-variety-law-2026"],
    ["source-egov-important-varieties-rules-draft-2026","source-egov-important-varieties-rule-draft-2026"],
    ["source-sesc-monitoring-policy-20260731","source-sesc-securities-monitoring-policy-2026"],
    ["source-sesc-monitoring-casebook-20260731","source-sesc-securities-monitoring-cases-2026"]
  ]);
  const articleAliases = new Map([
    ["article-mhlw-restructuring-labor-council-20260703","article-mhlw-reorganization-labor-council-2026-07"],
    ["article-miyake-apppi-subrules-20260918","article-miyake-privacy-rules-20260918"],
    ["article-fsa-digital-bond-solicitation-final-2026","article-fsa-growth-finance-ordinance-2026"],
    ["article-mhlw-customer-harassment-2026","article-customer-harassment-practical-2026"],
    ["article-tmi-customer-harassment-practical-2026","article-tmi-customer-harassment-2026"],
    ["article-fsa-payment-services-cross-border-collection-final-2026","article-fsa-crossborder-collection-2026"],
    ["article-tmi-cross-border-collection-2026","article-tmi-crossborder-collection-2026"],
    ["article-tmi-aml-ekyc-2026","article-tmi-aml-identity-2026"],
    ["article-tmi-child-sexual-violence-overview-20260501","article-tmi-child-sexual-violence-overview-2026"],
    ["article-tmi-child-sexual-violence-scope-20260710","article-tmi-child-sexual-violence-scope-2026"],
    ["article-tmi-child-sexual-violence-recognition-20260724","article-tmi-child-sexual-violence-certification-2026"],
    ["article-maff-seed-amendment-2026","article-maff-seed-act-2026-amendment"],
    ["article-amt-seed-important-variety-20260908","article-amt-plant-variety-seed-important-varieties-2026-09-08"],
    ["article-fsa-payment-services-amendment-final-20260522","article-fsa-crossborder-collection-2026"],
    ["article-tmi-cross-border-collection-20260827","article-tmi-crossborder-collection-2026"],
    ["article-fsa-fiea-20day-effective-20260729","article-fsa-crypto-fiea-early-enforcement-2026"],
    ["article-businesslawyers-noandt-crypto-reform-20260828","article-businesslawyers-crypto-fiea-2026"],
    ["article-caa-digital-scta-interim-20260910","article-caa-digital-tokusho-interim-2026"],
    ["article-spring-dark-pattern-ui-20260909","article-spring-dark-pattern-practice-20260909"],
    ["article-fsa-ssbj-disclosure-ordinance-20260220","article-fsa-disclosure-ordinance-2026"],
    ["article-tmi-ssbj-scope3-legal-risks-20260603","article-tmi-ssbj-scope3-2026"],
    ["article-fsa-ssbj-shk-designation-20260915","article-fsa-ssbj-shk-practice-standard-designation-2026"],
    ["article-tmi-customer-harassment-20260402","article-tmi-customer-harassment-2026"],
    ["article-fsa-public-fund-liquidity-guideline-20260916","article-fsa-public-fund-liquidity-guideline-2026"],
    ["article-meti-early-business-restructuring-qa-20260630","article-meti-early-business-recovery-2026"],
    ["article-noandt-early-business-restructuring-20260911","article-noandt-early-business-recovery-practice-2026"],
    ["article-mhlw-business-transfer-guideline-amendment-20260120","article-mhlw-business-transfer-guideline-2026"],
    ["article-ey-restructuring-labor-enterprise-value-security-20260206","article-ey-reorganization-labor-2026"],
    ["article-fsa-vf-rule-20260915","article-fsa-growth-finance-ordinance-2026"],
    ["article-caa-digital-transactions-interim-20260910","article-caa-digital-tokusho-interim-2026"],
    ["article-noandt-security-clearance-hr-part2-20250319","article-nagashima-security-clearance-hr-outsourcing-2025"],
    ["article-caa-consumer-contract-interim-20260910","article-caa-consumer-contract-interim-draft-2026"],
    ["article-sesc-monitoring-policy-20260731","article-sesc-securities-monitoring-policy-2026"],
    ["article-sesc-monitoring-casebook-20260731","article-sesc-securities-monitoring-cases-2026"],
    ["article-noandt-cyber-supply-chain-reporting-202508","article-not-cyber-supply-chain-incident-reporting-2025"]
  ]);
  const topicAliases = new Map([
    ["bank-investment-subsidiaries-business-succession-2026","bank-subsidiary-business-succession"],
    ["child-sexual-violence-prevention-dbs-2026","child-sexual-violence-prevention-dbs"],
    ["early-business-rehabilitation-2025","early-business-recovery"],
    ["early-business-restructuring-act","early-business-recovery"],
    ["plant-variety-seed-act-2026","plant-variety-ip-important-varieties-2026"],
    ["plant-variety-seed-law-2026","plant-variety-ip-important-varieties-2026"],
    ["cross-border-collection-payment-services-act-2026","crossborder-collection-payment"],
    ["payment-services-cross-border-collection-2026","crossborder-collection-payment"],
    ["crypto-financial-instruments-reform-2026","crypto-assets-fiea-regulation-2026"],
    ["consumer-contract-act-review-2026","consumer-contract-law-review-2026"],
    ["digital-commerce-specified-transactions-2026","digital-commerce-tokusho-review"],
    ["digital-transactions-scta-review-2026","digital-commerce-tokusho-review"],
    ["corporate-restructuring-labor","ma-restructuring-labor-contract-succession"],
    ["patent-network-infringement-review-2026","patent-network-inventions-infringement-review-2026"],
    ["criminal-proceeds-aml-ekyc-2026-2027","aml-kyc-criminal-proceeds"],
    ["customer-harassment-2026","customer-harassment"]
  ]);
  const reformAliases = new Map([
    ["criminal-proceeds-act-2026-amendment","aml-account-remittance-2026-amendment"],
    ["child-sexual-violence-prevention-act-2024-2026","child-sexual-violence-prevention-act-2024"],
    ["child-sexual-violence-prevention-act-2026","child-sexual-violence-prevention-act-2024"],
    ["consumer-contract-act-review-2026-interim","consumer-contract-law-review-2026"],
    ["consumer-contract-act-review-2026","consumer-contract-law-review-2026"],
    ["plant-variety-protection-seed-act-2026-amendment","seed-act-2026-amendment"],
    ["important-varieties-act-2026","important-varieties-act-2026-enactment"],
    ["early-business-restructuring-act-2025","early-business-rehabilitation-act-2025"],
    ["early-business-recovery-act-2025","early-business-rehabilitation-act-2025"],
    ["fiea-foreign-vf-rule-2026","fiea-overseas-vf-foreign-fund-exemption-2026"],
    ["payment-services-act-cross-border-collection-2026","payment-services-act-cross-border-collection-2025"],
    ["patent-system-network-infringement-2026-review","patent-act-network-inventions-infringement-review-2026"],
    ["fiea-startup-funding-2026-amendment","fiea-startup-capital-2026-amendment"],
    ["labor-policy-customer-harassment-2025-amendment","customer-harassment-obligation-2026"],
    ["specified-commercial-transactions-digital-review-2026-interim","specified-commercial-transactions-digital-review-2026"],
    ["digital-commerce-tokusho-2026-review","specified-commercial-transactions-digital-review-2026"],
    ["fsa-public-fund-liquidity-guideline-2027","public-investment-trust-liquidity-guideline-2026"],
    ["labor-policy-customer-harassment-2026","customer-harassment-obligation-2026"],
    ["criminal-proceeds-identification-rules-2027","aml-identity-verification-2027-rules"],
    ["equal-employment-jobseeker-sexual-harassment-2025-amendment","equal-opportunity-jobseeker-sexual-harassment-2025"],
    ["banking-regulations-investment-subsidiary-2026","banking-act-investment-subsidiary-2026"],
    ["business-transfer-guideline-2026","business-transfer-guideline-2026-amendment"],
    ["corporate-restructuring-labor-review-2026","corporate-restructuring-labor-policy-review-2026"],
    ["important-variety-breeding-act-2026","important-varieties-act-2026-enactment"],
    ["fiea-2026-crypto-reform","crypto-assets-fiea-2026-amendment"]
  ]);

  const mapId = (map, id) => { let next=id, seen=new Set(); while(map.has(next)&&!seen.has(next)){seen.add(next);next=map.get(next);} return next; };
  const mapList = (list, map) => uniq((list || []).map((id) => mapId(map,id)));

  const sourceByUrl = new Map();
  for (const source of window.SOURCE_DATA || []) {
    const key=normalizeUrl(source?.url); if(!key)continue;
    if(sourceByUrl.has(key) && source.id !== sourceByUrl.get(key).id) sourceAliases.set(source.id, sourceByUrl.get(key).id);
    else if(!sourceByUrl.has(key)) sourceByUrl.set(key, source);
  }
  const articleByUrl = new Map();
  for (const article of window.ARTICLE_DATA || []) {
    const key=normalizeUrl(article?.url); if(!key)continue;
    if(articleByUrl.has(key) && article.id !== articleByUrl.get(key).id) articleAliases.set(article.id, articleByUrl.get(key).id);
    else if(!articleByUrl.has(key)) articleByUrl.set(key, article);
  }

  const categoryMap = new Map([
    ["会社法","会社法・ガバナンス"], ["労務・人事","労務"], ["契約・取引","契約"],
    ["独占禁止法・下請・フリーランス","独占禁止法・競争法"], ["金融・資本市場","金融"], ["金融規制","金融"]
  ]);
  const normalizeCategories = (list=[]) => {
    const out=[];
    for(const c of list||[]){
      if(c==="個人情報・AI・情報セキュリティ") out.push("情報セキュリティ","AI・デジタル");
      else if(c==="電子契約") out.push("契約","AI・デジタル");
      else out.push(categoryMap.get(c)||c);
    }
    return uniq(out);
  };

  const mergeIssue = (base, extra) => {
    if(!base) return {...extra};
    base.sourceIds=uniq([...(base.sourceIds||[]),...(extra.sourceIds||[])]);
    base.views=uniq([...(base.views||[]),...(extra.views||[])].map(v=>JSON.stringify(v))).map(v=>JSON.parse(v));
    return base;
  };
  const mergeTopic = (base, extra) => {
    base.categories=normalizeCategories([...(base.categories||[]),...(extra.categories||[])]);
    base.sourceIds=uniq([...(base.sourceIds||[]),...(extra.sourceIds||[])]);
    base.referenceArticleIds=uniq([...(base.referenceArticleIds||[]),...(extra.referenceArticleIds||[])]);
    base.overview=uniq([...(base.overview||[]),...(extra.overview||[])]);
    base.practicalImpacts=uniq([...(base.practicalImpacts||[]),...(extra.practicalImpacts||[])]);
    for(const key of ["facts","interpretations","implications","uncertain"]){
      if(base.currentSummary || extra.currentSummary){base.currentSummary ||= {};base.currentSummary[key]=uniq([...(base.currentSummary[key]||[]),...(extra.currentSummary?.[key]||[])]);}
    }
    const byIssue=new Map((base.issues||[]).map(i=>[i.id,i]));
    for(const issue of extra.issues||[]){ if(byIssue.has(issue.id)) mergeIssue(byIssue.get(issue.id),issue); else {base.issues ||= []; base.issues.push(issue);byIssue.set(issue.id,issue);} }
    base.lastUpdated=[base.lastUpdated,extra.lastUpdated].filter(Boolean).sort().at(-1)||base.lastUpdated;
    base.lastVerified=[base.lastVerified,extra.lastVerified].filter(Boolean).sort().at(-1)||base.lastVerified;
    return base;
  };

  let topics=window.TOPIC_DATA||[];
  const firstBySlug=new Map();
  for(const topic of topics){ if(!firstBySlug.has(topic.slug)) firstBySlug.set(topic.slug,topic); else mergeTopic(firstBySlug.get(topic.slug),topic); }
  topics=[...firstBySlug.values()];
  for(const [alias,canonical] of topicAliases){const a=topics.find(t=>t.slug===alias),b=topics.find(t=>t.slug===canonical);if(a&&b)mergeTopic(b,a);}
  topics=topics.filter(t=>!topicAliases.has(t.slug)).map(t=>({...t,categories:normalizeCategories(t.categories)}));
  window.TOPIC_DATA=topics;

  const mergeReform=(base,extra)=>{
    for(const k of ["sourceIds","matchSourceIds","articleIds","relatedTopics","effectiveDateSourceIds","effectiveDates"])base[k]=uniq([...(base[k]||[]),...(extra[k]||[])]);
    if(!base.effectiveDate&&extra.effectiveDate)base.effectiveDate=extra.effectiveDate;
    if(!base.effectiveDateNote&&extra.effectiveDateNote)base.effectiveDateNote=extra.effectiveDateNote;
    return base;
  };
  let reforms=window.REFORM_EVENT_DATA||[];
  for(const [alias,canonical] of reformAliases){const a=reforms.find(r=>r.id===alias),b=reforms.find(r=>r.id===canonical);if(a&&b)mergeReform(b,a);}
  reforms=reforms.filter(r=>!reformAliases.has(r.id));
  window.REFORM_EVENT_DATA=reforms;

  const amlTopic = topics.find((topic) => topic.slug === "aml-kyc-criminal-proceeds");
  if (amlTopic && amlTopic.lastUpdated === "2026-09-20") amlTopic.lastVerified = "2026-09-20";

  const paymentUmbrella = reforms.find((r) => r.id === "payment-services-act-2025-amendment");
  if (paymentUmbrella) paymentUmbrella.matchSourceIds = (paymentUmbrella.matchSourceIds || []).filter((id) => id !== "source-fsa-crossborder-collection-2026");
  const growthUmbrella = reforms.find((r) => r.id === "fiea-growth-finance-ordinances-2026");
  if (growthUmbrella) growthUmbrella.matchSourceIds = [];
  const cryptoEvent = reforms.find((r) => r.id === "crypto-assets-fiea-2026-amendment");
  if (cryptoEvent) cryptoEvent.matchSourceIds = (cryptoEvent.matchSourceIds || []).filter((id) => id !== "source-fsa-fiea-law-text-2026");
  const ssbjUmbrella = reforms.find((r) => r.id === "ssbj-mandatory-disclosure-2026");
  if (ssbjUmbrella) {
    ssbjUmbrella.matchSourceIds = (ssbjUmbrella.matchSourceIds || []).filter((id) => id !== "source-fsa-ssbj-shk-practice-standard-designation-2026");
    ssbjUmbrella.articleIds = (ssbjUmbrella.articleIds || []).filter((id) => id !== "article-fsa-ssbj-shk-practice-standard-designation-2026");
  }

  const mapSourcesInTopic=(topic)=>{
    topic.sourceIds=mapList(topic.sourceIds,sourceAliases);
    topic.referenceArticleIds=mapList(topic.referenceArticleIds,articleAliases);
    for(const issue of topic.issues||[]){issue.sourceIds=mapList(issue.sourceIds,sourceAliases);for(const view of issue.views||[]){view.sourceIds=mapList(view.sourceIds,sourceAliases);view.articleIds=mapList(view.articleIds,articleAliases);}}
  };
  topics.forEach(mapSourcesInTopic);
  for(const update of window.UPDATE_DATA||[]){if(update.source)update.source=mapId(sourceAliases,update.source);update.affectedTopics=mapList(update.affectedTopics,topicAliases);if(update.articleIds)update.articleIds=mapList(update.articleIds,articleAliases);}
  for(const reform of reforms){
    reform.sourceIds=mapList(reform.sourceIds,sourceAliases);reform.matchSourceIds=mapList(reform.matchSourceIds,sourceAliases);reform.effectiveDateSourceIds=mapList(reform.effectiveDateSourceIds,sourceAliases);reform.articleIds=mapList(reform.articleIds,articleAliases);reform.relatedTopics=mapList(reform.relatedTopics,topicAliases);
    reform.sourceIds=uniq([...(reform.sourceIds||[]),...(reform.effectiveDateSourceIds||[])]);
  }
  let sources=window.SOURCE_DATA||[];
  const seenSourceIds=new Set(),seenSourceUrls=new Set();
  sources=sources.filter(s=>{const id=mapId(sourceAliases,s.id);if(id!==s.id)return false;const u=normalizeUrl(s.url);if(seenSourceIds.has(id)||seenSourceUrls.has(u))return false;seenSourceIds.add(id);seenSourceUrls.add(u);s.topics=mapList(s.topics,topicAliases);return true;});
  window.SOURCE_DATA=sources;
  const validSourceIds=new Set(sources.map(s=>s.id));

  let articles=window.ARTICLE_DATA||[];
  for(const article of articles){
    article.relatedTopics=mapList(article.relatedTopics,topicAliases);article.categories=normalizeCategories(article.categories);
    article.primarySourceIds=mapList(article.primarySourceIds,sourceAliases);
    if (Array.isArray(article.reformStageSourceIds)) article.reformStageSourceIds=mapList(article.reformStageSourceIds,sourceAliases);
    if (Array.isArray(article.reformEffectiveDateSourceIds)) article.reformEffectiveDateSourceIds=mapList(article.reformEffectiveDateSourceIds,sourceAliases);
    if(article.reformEventId)article.reformEventId=mapId(reformAliases,article.reformEventId);
    article.primarySourceIds=uniq([...(article.primarySourceIds||[]),...(article.reformStageSourceIds||[]),...(article.reformEffectiveDateSourceIds||[])]);
  }
  const mergeArticle=(base,extra)=>{
    for(const k of ["relatedTopics","relatedIssues","primarySourceIds","categories","audience","reformStageSourceIds","reformEffectiveDateSourceIds"])base[k]=uniq([...(base[k]||[]),...(extra[k]||[])]);
    if(String(extra.summary||'').length>String(base.summary||'').length)base.summary=extra.summary;
    if(String(extra.whyImportant||'').length>String(base.whyImportant||'').length)base.whyImportant=extra.whyImportant;
    if(!base.reformEventId&&extra.reformEventId)base.reformEventId=extra.reformEventId;
    base.collectedAt=[base.collectedAt,extra.collectedAt].filter(Boolean).sort()[0]||base.collectedAt;
    return base;
  };
  const canonicalById=new Map(),canonicalByUrl=new Map();
  for(const article of articles){
    const desired=mapId(articleAliases,article.id); const u=normalizeUrl(article.url);
    let base=canonicalById.get(desired)||canonicalByUrl.get(u);
    if(!base){ if(desired!==article.id) continue; canonicalById.set(article.id,article);canonicalByUrl.set(u,article); }
    else if(base!==article){mergeArticle(base,article);articleAliases.set(article.id,base.id);}
  }
  articles=[...new Set([...canonicalById.values()])];
  window.ARTICLE_DATA=articles;
  const validArticleIds=new Set(articles.map(a=>a.id));

  for(const topic of topics){
    topic.sourceIds=uniq((topic.sourceIds||[]).filter(id=>validSourceIds.has(id)));
    topic.referenceArticleIds=mapList(topic.referenceArticleIds,articleAliases).filter(id=>validArticleIds.has(id));
    for(const issue of topic.issues||[]){issue.sourceIds=uniq((issue.sourceIds||[]).filter(id=>validSourceIds.has(id)));for(const view of issue.views||[]){view.sourceIds=uniq((view.sourceIds||[]).filter(id=>validSourceIds.has(id)));view.articleIds=mapList(view.articleIds,articleAliases).filter(id=>validArticleIds.has(id));}}
  }
  const topicBySlug=new Map(topics.map(t=>[t.slug,t]));
  for(const article of articles){
    if (typeof article.audience === "string") article.audience = article.audience.split(/[、,，]/).map((value) => value.trim()).filter(Boolean);
    article.primarySourceIds=uniq((article.primarySourceIds||[]).filter(id=>validSourceIds.has(id)));
    if (Array.isArray(article.reformStageSourceIds)) article.reformStageSourceIds=uniq(article.reformStageSourceIds.filter(id=>validSourceIds.has(id)));
    if (Array.isArray(article.reformEffectiveDateSourceIds)) article.reformEffectiveDateSourceIds=uniq(article.reformEffectiveDateSourceIds.filter(id=>validSourceIds.has(id)));
    if (!article.reformStageAtPublication) delete article.reformStageSourceIds;
    if (article.reformStageAtPublication && (!Array.isArray(article.reformStageSourceIds) || !article.reformStageSourceIds.length)) article.reformStageSourceIds = (article.primarySourceIds || []).slice(0, 1);
    if (!article.reformEffectiveDate && !(Array.isArray(article.reformEffectiveDates) && article.reformEffectiveDates.length)) delete article.reformEffectiveDateSourceIds;
    if (["article-jps-social-insurance-expansion-2026-09-16", "article-tmi-labor-update-social-insurance-2026-09-15", "article-businesslawyers-mhm-early-business-restructuring-20260917"].includes(article.id)) {
      delete article.reformEffectiveDate; delete article.reformEffectiveDates; delete article.reformEffectiveDateSourceIds;
    }
    const allowedIssues=new Set((article.relatedTopics||[]).flatMap(slug=>(topicBySlug.get(slug)?.issues||[]).map(i=>i.id)));
    article.relatedIssues=uniq((article.relatedIssues||[]).filter(id=>allowedIssues.has(id)));
  }
  const explicitReformByArticle = new Map([
    ["article-fsa-disclosure-ordinance-2026", "ssbj-mandatory-disclosure-2026"],
    ["article-tmi-ssbj-scope3-2026", "ssbj-mandatory-disclosure-2026"],
    ["article-nishimura-sustainability-ma-dd-2026-part1", "ssbj-mandatory-disclosure-2026"],
    ["article-nishimura-sustainability-ma-dd-2026-part2", "ssbj-mandatory-disclosure-2026"],
    ["article-nishimura-ssbj-legal-risk-2026", "ssbj-mandatory-disclosure-2026"],
    ["article-amt-companies-act-interim-2026", "companies-act-review-2026"],
    ["article-amt-companies-act-disclosure-beneficial-2026", "companies-act-review-2026"],
    ["article-moj-company-law-interim-2026", "companies-act-review-2026"],
    ["article-fsa-crossborder-collection-2026", "payment-services-act-cross-border-collection-2025"],
    ["article-amt-crossborder-collection-2026", "payment-services-act-cross-border-collection-2025"],
    ["article-tmi-crossborder-collection-2026", "payment-services-act-cross-border-collection-2025"]
  ]);
  for (const article of articles) { const eventId = explicitReformByArticle.get(article.id); if (eventId && reforms.some((event) => event.id === eventId)) article.reformEventId = eventId; }
  const nonReformLegacyArticles = new Set([
    "article-nishimura-ai-ip-principle-draft-2026",
    "article-mhlw-overtime-supervision-2026",
    "article-tm-nagoya-overtime-guidance-2026",
    "article-meti-human-capital-visualization-guideline-2026",
    "article-mhlw-officer-freelancer-insurance-amendment-20260914"
  ]);
  for (const article of articles) if (nonReformLegacyArticles.has(article.id)) article.legacyReformInference = false;

  for(const reform of reforms){
    reform.sourceIds=uniq((reform.sourceIds||[]).filter(id=>validSourceIds.has(id)));
    reform.matchSourceIds=uniq((reform.matchSourceIds||[]).filter(id=>validSourceIds.has(id)));
    reform.effectiveDateSourceIds=uniq((reform.effectiveDateSourceIds||[]).filter(id=>validSourceIds.has(id)));
    reform.articleIds=mapList(reform.articleIds,articleAliases).filter(id=>validArticleIds.has(id));
    reform.relatedTopics=uniq((reform.relatedTopics||[]).filter(slug=>topicBySlug.has(slug)));
  }

  const finalCrypto = reforms.find((r) => r.id === "crypto-assets-fiea-2026-amendment");
  if (finalCrypto) finalCrypto.matchSourceIds = (finalCrypto.matchSourceIds || []).filter((id) => id !== "source-fsa-fiea-law-text-2026");
  const finalSsbj = reforms.find((r) => r.id === "ssbj-mandatory-disclosure-2026");
  if (finalSsbj) {
    finalSsbj.matchSourceIds = (finalSsbj.matchSourceIds || []).filter((id) => !["source-fsa-disclosure-ordinance-2026", "source-fsa-ssbj-shk-practice-standard-designation-2026"].includes(id));
    finalSsbj.articleIds = (finalSsbj.articleIds || []).filter((id) => id !== "article-fsa-ssbj-shk-practice-standard-designation-2026");
  }
  const finalCompanies = reforms.find((r) => r.id === "companies-act-review-2026");
  if (finalCompanies) finalCompanies.matchSourceIds = (finalCompanies.matchSourceIds || []).filter((id) => id !== "source-moj-company-law-interim-2026");
  const finalCrossborder = reforms.find((r) => r.id === "payment-services-act-cross-border-collection-2025");
  if (finalCrossborder) finalCrossborder.matchSourceIds = [];
})();
