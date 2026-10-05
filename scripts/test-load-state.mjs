import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import test from "node:test";
import { fileURLToPath } from "node:url";

// Deterministic fault injection into production bootstrap/loader/renderers.
// This fixture explicitly simulates script load/error events. It does NOT model
// Chromium, transport, caches or native parser scheduling, and does not establish
// the cause of any observed intermittent browser failure.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const base = "https://na-t-to.github.io/law-article/";
const plant = "topics/plant-variety-ip-important-varieties-2026.html";
const source = new Map();
const read = file => {
  if (!source.has(file)) source.set(file, fs.readFileSync(path.join(root, file), "utf8"));
  return source.get(file);
};
const decode = value => String(value).replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&");
const attrs = text => {
  const result = Object.fromEntries([...text.matchAll(/([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(match => [match[1], decode(match[2] ?? match[3])]));
  for (const match of text.matchAll(/\b(data-[\w-]+)(?=\s|$)/g)) if (!(match[1] in result)) result[match[1]] = "";
  return result;
};
const missingText = /このテーマはまだ登録|この記事・資料は見つかりません|この更新は見つかりません/;

function fixture({ omit = [], resourceError = [], silent = [], throwIn = [], noAck = [], omitCompletion = false } = {}) {
  const windowHandlers = new Map();
  const errors = [];
  const scripts = [];
  const timers = [];
  const reloads = [];
  const window = {
    addEventListener(type, listener) {
      if (!windowHandlers.has(type)) windowHandlers.set(type, []);
      windowHandlers.get(type).push(listener);
    },
    removeEventListener(type, listener) {
      windowHandlers.set(type, (windowHandlers.get(type) || []).filter(item => item !== listener));
    },
    setTimeout(callback) { timers.push(callback); return timers.length; },
    clearTimeout() {},
    history: { replaceState() {} }
  };
  const context = vm.createContext({ window, URL, URLSearchParams, Date, Map, Set,
    CSS: { escape: String }, console, setTimeout: window.setTimeout, clearTimeout: window.clearTimeout });
  const emit = (type, event) => {
    for (const listener of windowHandlers.get(type) || []) listener(event);
  };
  let document;
  let elements;
  let main;
  let route;
  function createElement(tag = "div", attributes = {}) {
    const listeners = new Map();
    const node = {
      tagName: tag.toUpperCase(), nodeName: tag.toUpperCase(), attributes, children: [], value: "",
      dataset: Object.fromEntries(Object.entries(attributes).filter(([key]) => key.startsWith("data-")).map(([key, value]) => [key.slice(5).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()), value])),
      classList: { add() {}, remove() {}, toggle() {} },
      getAttribute: key => attributes[key] ?? null,
      setAttribute(key, value) { attributes[key] = String(value); },
      matches(selector) { return selector === "script" ? tag === "script" : selector === "a[href]" && tag === "a" && !!attributes.href; },
      addEventListener(type, listener) {
        if (!listeners.has(type)) listeners.set(type, []);
        listeners.get(type).push(listener);
      },
      appendChild(child) { this.children.push(child); child.parentNode = this; return child; },
      remove() {}, scrollIntoView() {},
      querySelector(selector) { return select(selector, this.children); },
      querySelectorAll(selector) { return selectAll(selector, this.children); },
      click() {
        const event = { type: "click", target: this, currentTarget: this, preventDefault() {} };
        for (const listener of listeners.get("click") || []) listener(event);
        if (typeof this.onclick === "function") this.onclick(event);
        if (attributes.onclick) inlineHandler(attributes.onclick, this, event);
      }
    };
    if (attributes.id) node.id = attributes.id;
    if (attributes.src) node.src = new URL(attributes.src, window.location).href;
    let content = "";
    Object.defineProperty(node, "innerHTML", {
      get: () => content,
      set(value) {
        content = String(value);
        node.children = [];
        for (const match of content.matchAll(/<([a-z][\w-]*)\b([^>]*)>/gi)) {
          const attributes = attrs(match[2]);
          if (attributes.id || Object.keys(attributes).some(key => key.startsWith("data-")) || match[1].toLowerCase() === "button") {
            const child = createElement(match[1].toLowerCase(), attributes);
            node.children.push(child);
            if (child.id) elements.set(`#${child.id}`, child);
          }
        }
      }
    });
    return node;
  }
  function selectAll(selector, candidates = [...elements.values()]) {
    if (selector === "button") return candidates.filter(node => node.tagName === "BUTTON");
    if (selector === "script") return scripts.map(script => script.node);
    if (selector.startsWith("#")) return candidates.filter(node => node.id === selector.slice(1));
    const data = selector.match(/^\[([^=\]]+)(?:=["']?([^"'\]]+)["']?)?\]$/);
    if (data) return candidates.filter(node => node.getAttribute(data[1]) !== null && (!data[2] || node.getAttribute(data[1]) === data[2]));
    return [];
  }
  function select(selector, candidates) {
    if (!candidates && selector.includes(",")) {
      for (const part of selector.split(",")) { const result = select(part.trim()); if (result) return result; }
      return null;
    }
    if (!candidates && selector === "main") return main;
    if (!candidates && elements.has(selector)) return elements.get(selector);
    const found = selectAll(selector, candidates)[0];
    if (found) return found;
    if (!candidates && selector.startsWith("#") && [...elements.values()].some(node => node.innerHTML.includes(`id="${selector.slice(1)}"`))) return { scrollIntoView() {} };
    return null;
  }
  function setPage(nextRoute, dataset = {}) {
    route = nextRoute;
    const html = read(route.split(/[?#]/)[0]);
    window.location = new URL(route, base);
    window.location.reload = () => reloads.push(route);
    window.location.replace = () => { throw new Error("Unexpected redirect in loading-state fixture"); };
    window.location.assign = window.location.replace;
    context.location = window.location;
    elements = new Map();
    for (const match of html.matchAll(/<([a-z][\w-]*)\b([^>]*\bid=["'][^"']+["'][^>]*)>/gi)) {
      const node = createElement(match[1], attrs(match[2]));
      elements.set(`#${node.id}`, node);
    }
    const mainAttributes = attrs(html.match(/<main\b([^>]*)>/)?.[1] || "");
    main = mainAttributes.id ? elements.get(`#${mainAttributes.id}`) : createElement("main", mainAttributes);
    const bodyAttributes = attrs(html.match(/<body\b([^>]*)>/)?.[1] || "");
    const body = createElement("body", bodyAttributes);
    Object.assign(body.dataset, dataset);
    document = {
      body, title: "", readyState: "loading", currentScript: null,
      querySelector: selector => select(selector),
      querySelectorAll: selector => selectAll(selector),
      getElementById: id => elements.get(`#${id}`) || null,
      createElement: tag => createElement(tag),
      addEventListener: window.addEventListener,
      write(markup) {
        for (const match of markup.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
          const attributes = attrs(match[1]);
          if (attributes.src) runScript(attributes);
          else {
            scripts.push({ file: "loader-inline", node: createElement("script") });
            if (!(omitCompletion && match[2].includes("LAW_INDEX_LOADING.finish()"))) evaluate(match[2], "loader-inline");
          }
        }
      }
    };
    window.document = context.document = document;
  }
  function evaluate(text, file) {
    try { vm.runInContext(text, context, { filename: file, timeout: 10000 }); }
    catch (error) {
      errors.push({ file, message: error.message });
      emit("error", { target: window, filename: new URL(file, base).href, message: error.message, error });
    }
  }
  function inlineHandler(text, node, event) {
    context.__eventTarget = node;
    context.__event = event;
    vm.runInContext(`(function(event){${text}\n}).call(__eventTarget,__event)`, context);
    delete context.__eventTarget;
    delete context.__event;
  }
  function runScript(attributes) {
    const node = createElement("script", attributes);
    const file = decodeURIComponent(new URL(node.src).pathname).replace("/law-article/", "");
    scripts.push({ file, node });
    if (omit.includes(file) || silent.includes(file)) return;
    if (resourceError.includes(file)) {
      const event = { type: "error", target: node };
      emit("error", event);
      if (attributes.onerror) inlineHandler(attributes.onerror, node, event);
      return;
    }
    const previous = document.currentScript;
    document.currentScript = node;
    evaluate(throwIn.includes(file) ? 'throw new Error("Injected data-delta execution failure")' : read(file), file);
    document.currentScript = previous;
    // Runtime exceptions still permit the resource load event. Acknowledgment
    // alone must not clear the independently recorded execution failure.
    if (attributes.onload && !noAck.includes(file)) inlineHandler(attributes.onload, node, { type: "load", target: node });
  }
  setPage(plant);
  const bootstrap = attrs(read(plant).match(/<script\b([^>]*\bsrc=["'][^"']*bootstrap[^"']*["'][^>]*)>/)[1]);
  runScript(bootstrap);
  return {
    window, errors, scripts, timers, reloads,
    render(nextRoute, dataset) {
      setPage(nextRoute, dataset);
      const html = read(nextRoute.split(/[?#]/)[0]);
      for (const match of html.matchAll(/<script\b([^>]*)>/g)) {
        const attributes = attrs(match[1]);
        if (attributes.src && !attributes.src.includes("bootstrap")) runScript(attributes);
      }
      document.readyState = "complete";
      return [...new Set([main, ...elements.values()])].map(node => node.innerHTML).join("\n");
    },
    buttons: () => [...new Set([main, ...elements.values()])].flatMap(node => node.children).filter(node => node.tagName === "BUTTON"),
    poisonData() {
      for (const name of ["TOPIC_DATA", "SOURCE_DATA", "UPDATE_DATA", "ARTICLE_DATA", "REFORM_EVENT_DATA"]) {
        Object.defineProperty(window, name, { configurable: true, get() { throw new Error(`Renderer accessed incomplete ${name}`); } });
      }
    },
    emit,
    completeDocument() { document.readyState = "complete"; emit("DOMContentLoaded", { target: document }); },
    content: () => main.innerHTML
  };
}

function modes(f) {
  return [
    ["index.html", /class="article-row"/],
    ["articles.html", /class="article-row"/],
    ["topics.html", /topic-row/],
    ["reforms.html", /reform-law-group/],
    [plant, /class="issue-row"/],
    [`article.html?id=${encodeURIComponent(f.window.ARTICLE_DATA?.[0]?.id || "unknown")}`, /article-hero/],
    [`update.html?id=${encodeURIComponent(f.window.UPDATE_DATA?.[0]?.id || "unknown")}`, /update-hero/]
  ];
}
function assertFailure(f) {
  assert.equal(f.window.LAW_INDEX_LOADING?.canRender(), false, "incomplete load must not be renderable");
  const routes = modes(f);
  f.poisonData();
  for (const [route, normalMarker] of routes) {
    const before = f.errors.length;
    const html = f.render(route);
    assert.equal(f.errors.length, before, `${route}: failed-state guard must run before data access; ${JSON.stringify(f.errors.slice(before))}`);
    assert.match(html, /読み込|読み込み|再読込|再読み込み/, `${route}: show a useful load failure`);
    assert.match(html, /<button\b/, `${route}: offer a manual retry button`);
    assert.doesNotMatch(html, missingText, `${route}: failed load is not an unknown record`);
    assert.doesNotMatch(html, normalMarker, `${route}: partial normal content must not be rendered`);
    f.completeDocument();
    assert.equal(f.errors.length, before, `${route}: document completion must preserve the failure UI`);
  }
  assert.equal(f.reloads.length, 0, "failure must never automatically reload");
  assert.equal(f.timers.length, 0, "failure must not schedule a reload loop");
  const buttons = [...new Set(f.buttons())];
  assert.equal(buttons.length, 1, "failure UI should expose one retry button");
  buttons[0].click();
  assert.equal(f.reloads.length, 1, "exactly one reload follows an explicit click");
}

test("completed production load permits all seven normal page modes", () => {
  const f = fixture();
  assert.equal(f.window.LAW_INDEX_LOADING?.canRender(), true);
  const manifestFiles = new Set(Object.values(f.window.LAW_INDEX_DATA_FILES).flat().map(file => new URL(file, `${base}data/`).href));
  for (const { node } of f.scripts.filter(({ node }) => manifestFiles.has(node.src))) {
    assert.match(node.getAttribute("onload"), /LAW_INDEX_LOADING\.loaded/);
    assert.match(node.getAttribute("onerror"), /LAW_INDEX_LOADING\.fail/);
  }
  for (const [route, marker] of modes(f)) assert.match(f.render(route), marker, route);
  assert.deepEqual(f.errors, []);
  assert.equal(f.reloads.length, 0);
});

test("missing loader execution yields failure UI before any renderer data access", () => {
  assertFailure(fixture({ omit: ["data/load-all.js"] }));
});

test("missing data resource is rejected through real script error handlers", () => {
  assertFailure(fixture({ resourceError: ["data/sources-run207.js"] }));
});

test("silently omitted data execution and acknowledgment cannot pass finish", () => {
  assertFailure(fixture({ silent: ["data/articles-run238.js"] }));
});

test("fully executed but unacknowledged chunk remains non-renderable", () => {
  assertFailure(fixture({ noAck: ["data/sources-run207.js"] }));
});

test("execution error remains fatal even when the external script fires load", () => {
  const f = fixture({ throwIn: ["data/articles-held-labor-20261005.js"] });
  assert.ok(f.errors.some(error => error.message === "Injected data-delta execution failure"));
  assertFailure(f);
});

test("complete data permits genuine missing topic, article and update fallbacks", () => {
  const f = fixture();
  assert.equal(f.window.LAW_INDEX_LOADING?.canRender(), true);
  assert.match(f.render(plant, { topic: "genuinely-unknown-topic" }), /このテーマはまだ登録/);
  assert.match(f.render("article.html?id=genuinely-unknown-article"), /この記事・資料は見つかりません/);
  assert.match(f.render("update.html?id=genuinely-unknown-update"), /この更新は見つかりません/);
  assert.deepEqual(f.errors, []);
  assert.equal(f.reloads.length, 0);
});


test("DOMContentLoaded supplies failure UI even when the renderer did not execute", () => {
  const f = fixture({ omit: ["data/load-all.js"] });
  f.completeDocument();
  assert.match(f.content(), /data-law-load-error/);
  assert.equal(f.reloads.length, 0);
  const button = f.buttons().find(node => node.getAttribute("data-law-reload") !== null);
  assert.ok(button);
  f.window.LAW_INDEX_LOADING.showError();
  assert.equal(f.buttons().find(node => node.getAttribute("data-law-reload") !== null), button, "failure display is idempotent");
  button.click();
  assert.equal(f.reloads.length, 1);
});

test("unrelated extension and off-site errors do not invalidate completed site data", () => {
  const f = fixture();
  f.emit("error", { filename: "chrome-extension://example/content.js", target: f.window });
  f.emit("error", { filename: "https://example.invalid/other.js", target: f.window });
  assert.equal(f.window.LAW_INDEX_LOADING.canRender(), true);
  f.completeDocument();
  assert.equal(f.content(), "");
  assert.match(f.render(plant), /class="issue-row"/);
  assert.deepEqual(f.errors, []);
});


test("all resource acknowledgments still require the final completion marker", () => {
  assertFailure(fixture({ omitCompletion: true }));
});
