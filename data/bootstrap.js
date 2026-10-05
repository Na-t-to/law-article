(() => {
  const currentScript = document.currentScript;
  if (!currentScript) throw new Error("LAW / INDEX bootstrap script context is missing.");

  const baseUrl = new URL(".", currentScript.src);
  const siteUrl = new URL("../", baseUrl).href;
  let expected = null;
  const loaded = new Set();
  let finished = false;
  let failed = false;

  // A script tag in the DOM is not proof that its resource ran successfully.
  // Keep the existing parser order, but require every data load before rendering.
  const loading = window.LAW_INDEX_LOADING = {
    start(files) {
      if (expected || !Array.isArray(files) || !files.length) {
        failed = true;
        return;
      }
      expected = new Set(files);
      if (expected.size !== files.length) failed = true;
    },
    loaded(url) {
      if (!expected?.has(url) || loaded.has(url)) failed = true;
      loaded.add(url);
    },
    fail() { failed = true; },
    finish() { finished = true; },
    canRender() {
      return !failed && finished && expected !== null && loaded.size === expected.size &&
        typeof window.assertKnowledgeData === "function" &&
        ["TOPIC_DATA", "SOURCE_DATA", "UPDATE_DATA", "REFORM_EVENT_DATA", "ARTICLE_DATA"]
          .every((key) => Array.isArray(window[key]));
    },
    showError() {
      const main = document.querySelector("main");
      if (!main || main.querySelector("[data-law-load-error]")) return;
      main.innerHTML = `<section class="missing-topic" data-law-load-error role="alert"><h1>ページを読み込めませんでした</h1><p>読み込みが完了しませんでした。再読み込みして、もう一度お試しください。</p><button type="button" data-law-reload>再読み込み</button></section>`;
      main.querySelector("[data-law-reload]").addEventListener("click", () => window.location.reload());
    }
  };
  window.addEventListener("error", (event) => {
    const source = event.target?.tagName === "SCRIPT" ? event.target.src : event.filename;
    if (typeof source === "string" && source.startsWith(siteUrl)) loading.fail();
  }, true);
  document.addEventListener("DOMContentLoaded", () => {
    if (!loading.canRender()) loading.showError();
  }, { once: true });

  const cacheKey = Date.now().toString(36);
  const manifestUrl = new URL(`manifest.js?v=${cacheKey}`, baseUrl).href;
  const loaderUrl = new URL(`load-all.js?v=${cacheKey}`, baseUrl).href;

  document.write(`<script src="${manifestUrl}"></script>`);
  document.write(`<script src="${loaderUrl}"></script>`);
})();
