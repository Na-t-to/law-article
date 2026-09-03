(() => {
  const manifest = window.LAW_INDEX_DATA_FILES;
  if (!manifest) throw new Error("LAW / INDEX data manifest is missing.");
  const baseUrl = new URL(".", document.currentScript.src);
  let articleBatchIndex = 0;
  for (const group of ["schema", "topics", "sources", "updates", "reforms", "articles"]) {
    for (const file of manifest[group] || []) {
      if (group !== "articles") {
        document.write(`<script src="${new URL(file, baseUrl).href}"><\/script>`);
        continue;
      }
      const batchIndex = articleBatchIndex++;
      const fileName = file.split("?")[0];
      document.write(`<script>window.__LAW_INDEX_ARTICLE_BATCH_START=(window.ARTICLE_DATA||[]).length;<\/script>`);
      document.write(`<script src="${new URL(file, baseUrl).href}"><\/script>`);
      document.write(`<script>(()=>{const start=window.__LAW_INDEX_ARTICLE_BATCH_START||0;const items=(window.ARTICLE_DATA||[]).slice(start);items.forEach((article,itemIndex)=>{article.__collectionBatch=${batchIndex};article.__collectionItem=itemIndex;article.__collectionFile=${JSON.stringify(fileName)};});})();<\/script>`);
    }
  }
  document.write(`<script>(()=>{const firstSeen=new Map();for(const article of window.ARTICLE_DATA||[]){const key=(article.url||article.id||"")+"::"+(article.collectedAt||"");if(!key)continue;const first=firstSeen.get(key);if(first){article.__collectionBatch=first.batch;article.__collectionItem=first.item;article.__collectionFile=first.file;}else{firstSeen.set(key,{batch:article.__collectionBatch??-1,item:article.__collectionItem??0,file:article.__collectionFile||""});}}window.applyTopicVerificationDates?.(window.TOPIC_DATA||[],window.ARTICLE_DATA||[],window.UPDATE_DATA||[]);})();<\/script>`);
})();
