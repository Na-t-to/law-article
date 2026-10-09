import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import test from "node:test";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const name = "articles-weekly-link-repair-20261009.js";
const file = [path.join(root, "incoming/data", name), path.join(root, "data", name)].find(fs.existsSync);
const repair = fs.readFileSync(file, "utf8");
const id = "article-amt-critical-infrastructure-unified-standard-2026";
const oldUrl = "https://www.amt-law.com/insights/newsletters/ddrlc98_p/";
const newUrl = "https://www.amt-law.com/insights/newsletters/newsletter_20260904001_ja_001/";
const plain = (value) => JSON.parse(JSON.stringify(value));
const courtId = "source-ip-highcourt-dr-martens-position-mark-20230810";
const oldCourtUrl = "https://www.courts.go.jp/ip/app/files/hanrei_jp/311/092311_hanrei.pdf";
const newCourtUrl = "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-92311.pdf";
function runtime() {
  const context = { window: {}, URL };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, "data/manifest.js"), "utf8"), context);
  for (const file of Object.values(context.window.LAW_INDEX_DATA_FILES).flat()) {
    vm.runInContext(fs.readFileSync(path.join(root, "data", file.split("?")[0]), "utf8"), context);
  }
  return context;
}
function fixture() {
  const context = runtime();
  const court = context.window.SOURCE_DATA.find((source) => source.id === courtId);
  court.url = oldCourtUrl;
  delete court.previousUrls;
  const record = context.window.ARTICLE_DATA.find((article) => article.id === id);
  record.url = oldUrl;
  delete record.previousUrls;
  return context;
}
test("weekly publisher URL repair preserves every record and all historical fields", () => {
  const context = fixture();
  const before = plain(context.window.ARTICLE_DATA);
  const beforeSources = plain(context.window.SOURCE_DATA);
  vm.runInContext(repair, context);
  const expected = before.map((article) => article.id === id ? { ...article, url: newUrl, previousUrls: [oldUrl] } : article);
  assert.deepEqual(plain(context.window.ARTICLE_DATA), expected);
  const expectedSources = beforeSources.map((source) => source.id === courtId ? { ...source, url: newCourtUrl, previousUrls: [oldCourtUrl] } : source);
  assert.deepEqual(plain(context.window.SOURCE_DATA), expectedSources);
  vm.runInContext(repair, context);
  assert.deepEqual(plain(context.window.ARTICLE_DATA), expected, "repair must be idempotent");
  assert.deepEqual(plain(context.window.SOURCE_DATA), expectedSources, "source repair must be idempotent");
});
test("weekly URL repair fails before changes if the previous URL differs", () => {
  const context = fixture();
  context.window.ARTICLE_DATA.find((article) => article.id === id).url = "https://example.org/changed";
  const before = plain(context.window.ARTICLE_DATA);
  assert.throws(() => vm.runInContext(repair, context), /unexpected previous URL/);
  assert.deepEqual(plain(context.window.ARTICLE_DATA), before);
});
test("weekly URL repair rejects duplicate targets before changing data", () => {
  const context = fixture();
  context.window.ARTICLE_DATA.push({ id: "__duplicate_target_fixture__", url: newUrl });
  const before = plain(context.window.ARTICLE_DATA);
  assert.throws(() => vm.runInContext(repair, context), /duplicate an article URL/);
  assert.deepEqual(plain(context.window.ARTICLE_DATA), before);
});

test("late source repair validates both arrays before any partial write", () => {
  const context = fixture();
  context.window.SOURCE_DATA.find((source) => source.id === courtId).url = "https://example.org/unexpected-court";
  const before = plain({ articles: context.window.ARTICLE_DATA, sources: context.window.SOURCE_DATA });
  assert.throws(() => vm.runInContext(repair, context), /unexpected previous URL/);
  assert.deepEqual(plain({ articles: context.window.ARTICLE_DATA, sources: context.window.SOURCE_DATA }), before);
});
test("published URL repairs survive the entire manifest and all article-category deltas", () => {
  const context = runtime();
  const loaded = context.window.LAW_INDEX_DATA_FILES.articles.some((entry) => entry.split("?")[0] === name);
  if (!loaded) return; // A staging-only checkout is checked by the candidate promotion tests.
  assert.equal(context.window.ARTICLE_DATA.find((article) => article.id === id).url, newUrl);
  assert.equal(context.window.SOURCE_DATA.find((source) => source.id === courtId).url, newCourtUrl);
});
