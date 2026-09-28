(() => {
  const currentScript = document.currentScript;
  if (!currentScript) throw new Error("LAW / INDEX bootstrap script context is missing.");

  const baseUrl = new URL(".", currentScript.src);
  const cacheKey = Date.now().toString(36);
  const manifestUrl = new URL(`manifest.js?v=${cacheKey}`, baseUrl).href;
  const loaderUrl = new URL(`load-all.js?v=${cacheKey}`, baseUrl).href;

  document.write(`<script src="${manifestUrl}"><\\/script>`);
  document.write(`<script src="${loaderUrl}"><\\/script>`);
})();
