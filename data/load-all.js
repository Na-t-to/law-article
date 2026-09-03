(() => {
  const manifest = window.LAW_INDEX_DATA_FILES;
  if (!manifest) throw new Error("LAW / INDEX data manifest is missing.");
  const baseUrl = new URL(".", document.currentScript.src);
  for (const group of ["schema", "topics", "sources", "updates", "articles"]) {
    for (const file of manifest[group] || []) {
      document.write(`<script src="${new URL(file, baseUrl).href}"><\/script>`);
    }
  }
})();
