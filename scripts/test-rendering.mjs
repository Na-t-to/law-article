import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import test from "node:test";
import { fileURLToPath } from "node:url";

// Deterministic execution of production renderers. This is not a browser/layout test.
// The narrow document fixture implements only DOM operations used by these scripts.
// Data is loaded through the real bootstrap and document.write loader, preserving
// load order and article collection metadata rather than reconstructing the dataset.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const base = "https://na-t-to.github.io/law-article/";
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const decode = (value) => String(value).replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g)].map((match) => [match[1], decode(match[2])]));
const htmlFiles = [
  ...fs.readdirSync(root).filter((name) => name.endsWith(".html")),
  ...fs.readdirSync(path.join(root, "topics")).filter((name) => name.endsWith(".html")).map((name) => `topics/${name}`)
];
let document;
let location;
const context = { window: {}, URL, URLSearchParams, Date, Map, Set, CSS: { escape: String }, console };
vm.createContext(context);
function documentFor(html, route, override = {}) {
  const elements = new Map();
  for (const match of html.matchAll(/<[^>]+\bid=["']([^"']+)["'][^>]*>/g)) {
    elements.set(`#${match[1]}`, {
      innerHTML: "", value: "", handlers: {}, classList: { toggle() {} },
      addEventListener(type, handler) { this.handlers[type] = handler; }, scrollIntoView() {}
    });
  }
  const dataset = {};
  for (const [key, value] of Object.entries(attributes(html.match(/<body[^>]*>/)?.[0] || ""))) {
    if (key.startsWith("data-")) dataset[key.slice(5).replace(/-([a-z])/g, (_, char) => char.toUpperCase())] = value;
  }
  Object.assign(dataset, override);
  location = new URL(route, base);
  location.replace = (target) => { context.window.redirect = new URL(target, location).href; };
  location.assign = location.replace;
  context.window.location = location;
  context.window.redirect = null;
  context.window.history = { replaceState(_state, _title, target) {
    location = new URL(target, location); context.window.location = location;
  } };
  document = {
    title: decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] || ""), body: { dataset }, currentScript: null, elements,
    querySelector(selector) {
      if (elements.has(selector)) return elements.get(selector);
      if (selector.startsWith("#") && [...elements.values()].some((element) => element.innerHTML.includes(`id="${selector.slice(1)}"`))) return { scrollIntoView() {} };
      return null;
    },
    querySelectorAll() { return []; },
    write(markup) {
      for (const match of markup.matchAll(/<script(?:\s+src="([^"]+)")?[^>]*>([\s\S]*?)<\/script>/g)) {
        if (match[1]) runUrl(match[1]);
        else vm.runInContext(match[2], context, { filename: "loader-inline" });
      }
    }
  };
  context.document = document;
  context.window.document = document;
  return document;
}
function runUrl(url) {
  const previous = document.currentScript;
  document.currentScript = { src: new URL(url, location).href };
  const file = decodeURIComponent(new URL(url, location).pathname).replace("/law-article/", "");
  vm.runInContext(read(file), context, { filename: file });
  document.currentScript = previous;
}
documentFor(read("index.html"), "index.html");
runUrl("data/bootstrap.js?v=2");
const data = context.window;
function render(route, override) {
  const file = route.split(/[?#]/)[0];
  const html = read(file);
  const doc = documentFor(html, route, override);
  let error;
  try {
    for (const match of html.matchAll(/<script\s+src="([^"]+)"/g)) if (!match[1].includes("bootstrap")) runUrl(match[1]);
  } catch (caught) { error = caught; }
  return {
    route, file, error, title: doc.title, document: doc, redirect: data.redirect,
    get content() { return [...doc.elements.values()].map((element) => element.innerHTML).join("\n"); },
    get html() { return html + "\n" + this.content; }
  };
}
function click(selector, targetSelector, dataset = {}) {
  document.querySelector(selector).handlers.click({ target: { closest: (candidate) => candidate === targetSelector ? { dataset } : null }, preventDefault() {} });
}
function assertRendered(result, label) {
  assert.ifError(result.error);
  assert.match(result.content, /<h1>/, `${label}: no rendered heading`);
  assert.doesNotMatch(result.content, /このテーマはまだ登録|この記事・資料は見つかりません|この更新は見つかりません/, `${label}: missing record`);
}
const canonicalRoutes = data.TOPIC_DATA.map((topic) => `topics/${topic.slug}.html`);
const articleRoutes = data.ARTICLE_DATA.map((article) => `article.html?id=${encodeURIComponent(article.id)}`);
const updateRoutes = data.UPDATE_DATA.map((update) => `update.html?id=${encodeURIComponent(update.id)}`);
const records = new Map([...new Set([...htmlFiles, ...articleRoutes, ...updateRoutes])].map((route) => [route, render(route)]));

test("every canonical topic, article ID, and update ID renders a real detail body", () => {
  const failures = [];
  for (const route of [...canonicalRoutes, ...articleRoutes, ...updateRoutes]) {
    try { assertRendered(records.get(route), route); } catch (error) { failures.push(`${route}: ${error.message}`); }
  }
  assert.deepEqual(failures, []);
});

test("every published topic shell resolves to current topic data or is an explicit redirect/landing page", () => {
  const slugs = new Set(data.TOPIC_DATA.map((topic) => topic.slug));
  const orphaned = htmlFiles.filter((file) => {
    const html = read(file);
    const slug = attributes(html.match(/<body[^>]*>/)?.[0] || "")["data-topic"];
    return slug && !slugs.has(slug) && !/http-equiv=["']refresh["']/i.test(html);
  });
  assert.deepEqual(orphaned, []);
});

test("production rendered content never exposes JavaScript undefined", () => {
  const failures = [...records].filter(([, result]) => /\bundefined\b/.test(result.content)).map(([route]) => route);
  assert.deepEqual(failures, []);
});

test("all issue fragment IDs appear on their canonical topic page", () => {
  const failures = [];
  for (const topic of data.TOPIC_DATA) {
    const rendered = records.get(`topics/${topic.slug}.html`);
    for (const issue of topic.issues) if (!rendered.content.includes(`id="${issue.id}"`)) failures.push(`${topic.slug}#${issue.id}`);
  }
  assert.deepEqual(failures, []);
});

test("all static and rendered internal links have a destination and valid fragment", () => {
  const failures = [];
  const follow = (url, depth = 0) => {
    if (depth > 5) throw new Error(`redirect loop: ${url.href}`);
    const file = decodeURIComponent(url.pathname.replace("/law-article/", "")) || "index.html";
    if (!fs.existsSync(path.join(root, file))) return { file, missing: true };
    if (!file.endsWith(".html")) return { file };
    const source = read(file);
    const meta = [...source.matchAll(/<meta[^>]+http-equiv=["']refresh["'][^>]*>/gi)][0]?.[0];
    if (meta) {
      const target = attributes(meta).content?.match(/url=(.*)/i)?.[1];
      if (target) return follow(new URL(target, url), depth + 1);
    }
    const key = ["article.html", "update.html"].includes(file) ? file + url.search : file;
    return { file, record: records.get(key), hash: decodeURIComponent(url.hash.slice(1)) };
  };
  for (const [route, result] of records) {
    for (const match of result.html.matchAll(/<a\b[^>]+href=["']([^"']+)["'][^>]*>/g)) {
      const url = new URL(decode(match[1]), new URL(route, base));
      if (!url.href.startsWith(base)) continue;
      const target = follow(url);
      const invalid = target.missing || (target.record && /このテーマはまだ登録|この記事・資料は見つかりません|この更新は見つかりません/.test(target.record.content)) || (target.hash && target.record && !target.record.html.includes(`id="${target.hash}"`));
      if (invalid) failures.push(`${route} → ${match[1]}`);
    }
  }
  assert.deepEqual(failures, []);
});

test("every canonical article and topic can be reached by complete pagination", () => {
  const articles = render("articles.html");
  let guard = 0;
  while (articles.content.includes("data-article-more") && guard++ < data.ARTICLE_DATA.length) click("#articleLibrary", "[data-article-more]");
  const expected = data.uniqueKnowledgeArticles(data.ARTICLE_DATA).filter((article) => article.status === "adopted");
  for (const article of expected) assert.ok(articles.content.includes(`article.html?id=${encodeURIComponent(article.id)}`), article.id);
  const topics = render("topics.html");
  guard = 0;
  while (topics.content.includes("data-topic-more") && guard++ < data.TOPIC_DATA.length) click("#topicList", "[data-topic-more]");
  for (const topic of data.TOPIC_DATA) assert.ok(topics.content.includes(`topics/${topic.slug}.html`), topic.slug);
});

test("search can find articles by an explicitly related issue title", () => {
  render("articles.html");
  const topic = data.TOPIC_DATA.find((item) => item.slug === "ai-governance-liability");
  const issue = topic.issues.find((item) => item.id === "ai-gov-classification");
  const field = document.querySelector("#articleSearch");
  field.value = issue.title;
  field.handlers.input();
  assert.doesNotMatch(document.querySelector("#articleLibrary").innerHTML, /条件に合う記事・資料はありません/, issue.title);
});

test("missing article and update IDs give a navigable empty state", () => {
  for (const [route, message, back] of [["article.html?id=__missing__", "この記事・資料は見つかりません", "articles.html"], ["update.html?id=__missing__", "この更新は見つかりません", "topics.html"]]) {
    const result = render(route);
    assert.ifError(result.error);
    assert.ok(result.content.includes(message));
    assert.ok(result.content.includes(`href="${back}"`));
  }
});

test("every current event deep link renders and opens its event, including source-only events", () => {
  const failures = [];
  for (const event of data.REFORM_EVENT_DATA) {
    const result = render(`reforms.html?law=${encodeURIComponent(event.id)}`);
    if (result.error) failures.push(`${event.id}: ${result.error.message}`);
    const eventTag = result.content.match(new RegExp(`<details[^>]*id="event-${event.id}"[^>]*>`))?.[0];
    if (!eventTag || !/\bopen(?:[\s=>]|$)/.test(eventTag)) failures.push(`${event.id}: expected event details open`);
  }
  assert.deepEqual(failures, []);
});

test("all stored current-summary and practical statements remain visible with distinct fact/interpretation sections", () => {
  const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const failures = [];
  for (const topic of data.TOPIC_DATA) {
    const result = records.get(`topics/${topic.slug}.html`);
    for (const statement of [...Object.values(topic.currentSummary).flat(), ...(topic.practicalImpacts || [])]) {
      if (!result.content.includes(escape(statement))) failures.push(`${topic.slug}: omitted statement: ${statement}`);
    }
    if (topic.currentSummary.facts.length && !result.content.includes('class="current-row key-points"')) failures.push(`${topic.slug}: no fact section`);
    if (topic.currentSummary.interpretations.length && !result.content.includes('class="current-row interpretations"')) failures.push(`${topic.slug}: no separate interpretation section`);
  }
  assert.deepEqual(failures, []);
});

test("article reform control navigates to the canonical event directory", () => {
  render("articles.html");
  click("#articleFilters", "[data-reform-filter]");
  assert.equal(data.redirect, `${base}reforms.html`);
});

test("all article and topic category filters can be selected and return matching rows", () => {
  const adopted = data.uniqueKnowledgeArticles(data.ARTICLE_DATA).filter((article) => article.status === "adopted");
  for (const category of new Set(adopted.flatMap((article) => article.categories))) {
    render("articles.html");
    click("#articleFilters", "[data-article-field]", { articleField: category });
    const actual = document.querySelector("#articleLibrary").innerHTML;
    assert.doesNotMatch(actual, /条件に合う記事・資料はありません/, category);
    const expectedCount = adopted.filter((article) => article.categories.includes(category)).length;
    assert.ok(document.querySelector("#libraryCount").innerHTML.includes(`>${String(expectedCount).padStart(2, "0")}<`), category);
  }
  for (const category of new Set(data.TOPIC_DATA.flatMap((topic) => topic.categories))) {
    render("topics.html");
    click("#fieldFilters", "[data-field]", { field: category });
    const actual = document.querySelector("#topicList").innerHTML;
    assert.doesNotMatch(actual, /まだ登録されていません/, category);
    for (const topic of data.TOPIC_DATA.filter((topic) => !topic.categories.includes(category))) {
      assert.ok(!actual.includes(`topics/${topic.slug}.html`), `${category} unexpectedly includes ${topic.slug}`);
    }
  }
});


test("all retained article aliases resolve, preserving original source title and URL", () => {
  const aliases = Object.entries(data.ARTICLE_ALIASES || {});
  assert.ok(aliases.length >= 20, "the 20 known legacy article URLs must be retained");
  const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  for (const [alias, id] of aliases) {
    const target = data.ARTICLE_DATA.find((article) => article.id === id);
    assert.ok(target, alias);
    const result = render(`article.html?id=${encodeURIComponent(alias)}`);
    assertRendered(result, alias);
    assert.ok(result.content.includes(escape(target.title)), alias);
    const metadata = data.ARTICLE_ALIAS_METADATA?.[alias];
    assert.ok(metadata?.title && metadata?.url, `${alias}: missing preserved source metadata`);
    assert.ok(result.content.includes(escape(metadata.title)), `${alias}: original title omitted`);
    assert.ok(result.content.includes(`href="${escape(metadata.url)}"`), `${alias}: original URL omitted`);
  }
});

test("missing-topic fallback returns to the actual topic directory", () => {
  const result = render("topics/ai-personal-data.html", { topic: "__missing__" });
  assert.ifError(result.error);
  assert.ok(result.content.includes("このテーマはまだ登録されていません"));
  assert.ok(result.content.includes('href="../topics.html"'));
});

test("all 36 historical issue hashes have anchors beside their canonical issue", () => {
  const mappings = Object.entries(data.TOPIC_ISSUE_ALIASES || {});
  assert.ok(mappings.reduce((count, [, aliases]) => count + Object.keys(aliases).length, 0) >= 36);
  for (const [slug, aliases] of mappings) {
    const topic = data.TOPIC_DATA.find((item) => item.slug === slug);
    const result = records.get(`topics/${slug}.html`);
    assert.ok(topic && result, slug);
    for (const [alias, target] of Object.entries(aliases)) {
      assert.ok(topic.issues.some((issue) => issue.id === target), `${slug}#${alias}: missing canonical issue ${target}`);
      assert.ok(result.content.includes(`id="${alias}"`), `${slug}#${alias}: missing historical fragment`);
      assert.ok(result.content.includes(`id="${target}"`), `${slug}#${target}: missing target fragment`);
    }
  }
});

test("historically split issue hashes retain every explicit destination", () => {
  const mappings = Object.entries(data.TOPIC_ISSUE_GROUP_ALIASES || {});
  assert.ok(mappings.reduce((count, [, groups]) => count + Object.keys(groups).length, 0) >= 2);
  for (const [slug, groups] of mappings) {
    const result = records.get(`topics/${slug}.html`);
    const topic = data.TOPIC_DATA.find((item) => item.slug === slug);
    for (const [alias, targets] of Object.entries(groups)) {
      assert.ok(result.content.includes(`id="${alias}"`), `${slug}#${alias}`);
      for (const target of targets) {
        assert.ok(topic.issues.some((issue) => issue.id === target), `${slug}#${target}`);
        assert.ok(result.content.includes(`href="#${target}"`), `${slug}#${alias} must retain ${target}`);
      }
    }
  }
});

test("all historical reform event query IDs open the preserved canonical event", () => {
  const mappings = Object.entries(data.REFORM_EVENT_ALIASES || {});
  assert.ok(mappings.length >= 32);
  for (const [alias, target] of mappings) {
    const result = render(`reforms.html?law=${encodeURIComponent(alias)}`);
    assert.ifError(result.error);
    const tag = result.content.match(new RegExp(`<details[^>]*id="event-${target}"[^>]*>`))?.[0];
    assert.ok(tag && /\bopen(?:[\s=>]|$)/.test(tag), `${alias} → ${target}`);
  }
});

test("all topic redirect scripts preserve query parameters and fragments", () => {
  let checked = 0;
  for (const file of htmlFiles.filter((name) => name.startsWith("topics/"))) {
    const source = read(file);
    if (!/http-equiv=["']refresh["']/i.test(source)) continue;
    const inline = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
    const original = new URL(`${file}?audit=preserve#legacy-issue`, base);
    const local = { location: original };
    local.window = local;
    let destination;
    local.location.replace = (value) => { destination = new URL(value, original); };
    vm.createContext(local);
    for (const script of inline) vm.runInContext(script, local, { filename: file });
    assert.ok(destination, `${file}: no preserving script redirect`);
    assert.equal(destination.search, original.search, `${file}: lost query`);
    assert.equal(destination.hash, original.hash, `${file}: lost fragment`);
    assert.ok(fs.existsSync(path.join(root, destination.pathname.replace('/law-article/', ''))), `${file}: missing destination`);
    checked++;
  }
  assert.ok(checked >= 30, "expected 30 retained topic redirect shells");
});

test("legacy issue anchors never become direct CSS-grid children of issue rows", () => {
  const voidElements = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
  const issueShapes = (markup) => {
    const stack = [];
    const rows = [];
    for (const token of markup.matchAll(/<(\/?)([a-z][\w-]*)\b([^>]*)>/gi)) {
      const tag = token[2].toLowerCase();
      if (token[1]) {
        const index = stack.findLastIndex((node) => node.tag === tag);
        if (index !== -1) stack.length = index;
        continue;
      }
      const attrs = attributes(token[3]);
      const node = { tag, attrs, children: [] };
      stack.at(-1)?.children.push(node);
      if (tag === "article" && (attrs.class || "").split(/\s+/).includes("issue-row")) rows.push(node);
      if (!voidElements.has(tag) && !/\/\s*$/.test(token[3])) stack.push(node);
    }
    return rows.map((row) => ({ id: row.attrs.id, children: row.children.map((child) => ({ tag: child.tag, class: child.attrs.class || "" })) }));
  };
  const expected = [{ tag: "div", class: "issue-title" }, { tag: "div", class: "issue-answer" }];
  // Negative fixture proves that the original direct-anchor layout regression is caught.
  const invalid = '<article class="issue-row" id="sample"><span id="legacy"></span><div class="issue-title"></div><div class="issue-answer"></div></article>';
  assert.notDeepEqual(issueShapes(invalid)[0].children, expected);
  for (const topic of data.TOPIC_DATA) {
    const shapes = issueShapes(records.get(`topics/${topic.slug}.html`).content);
    assert.equal(shapes.length, topic.issues.length, topic.slug);
    for (const shape of shapes) assert.deepEqual(shape.children, expected, `${topic.slug}#${shape.id}: extra grid child`);
  }
});

test("historical legal-instrument query aliases open every retained event for that instrument", () => {
  const aliases = data.REFORM_LAW_ALIASES || {};
  assert.equal(aliases["medical-research-ethics-guideline"], "human-subjects-medical-research-ethics-guideline");
  for (const [alias, target] of Object.entries(aliases)) {
    const events = data.REFORM_EVENT_DATA.filter((event) => event.lawId === target);
    assert.ok(events.length, `${alias}: no retained instrument events`);
    const result = render(`reforms.html?law=${encodeURIComponent(alias)}`);
    assert.ifError(result.error);
    for (const event of events) {
      const tag = result.content.match(new RegExp(`<details[^>]*id="event-${event.id}"[^>]*>`))?.[0];
      assert.ok(tag && /\bopen(?:[\s=>]|$)/.test(tag), `${alias} must open ${event.id}`);
    }
  }
});
