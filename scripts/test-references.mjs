import { collectReferenceErrors } from "./validate-references.mjs";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import test from "node:test";
import assert from "node:assert/strict";

const root = path.resolve(process.env.LAW_INDEX_TEST_ROOT || ".");
const context = { window: {}, URL };
vm.createContext(context);
const execute = (relative) => vm.runInContext(fs.readFileSync(path.join(root, relative), "utf8"), context, { filename: relative });
execute("data/manifest.js");
for (const group of ["schema", "topics", "sources", "updates", "reforms", "articles"]) {
  for (const file of context.window.LAW_INDEX_DATA_FILES[group] || []) execute(`data/${file.split("?")[0]}`);
}
// Use an explicit extra delta only when reviewing an unpublished candidate.
// Normal tests validate precisely the public manifest, never implicit staging.
const extraFiles = (process.env.LAW_INDEX_EXTRA_DATA || "").split(",").filter(Boolean);
const before = JSON.parse(JSON.stringify(context.window.UPDATE_DATA));
const collectionKeys = ["TOPIC_DATA", "SOURCE_DATA", "UPDATE_DATA", "REFORM_EVENT_DATA", "ARTICLE_DATA"];
const beforeIds = Object.fromEntries(collectionKeys.map((key) => [key, Array.from(context.window[key], (record) => record.id || record.slug)]));
for (const file of extraFiles) execute(file);
const window = context.window;
const topics = new Map(window.TOPIC_DATA.map((x) => [x.slug, x]));
const sources = new Set(window.SOURCE_DATA.map((x) => x.id));
const articles = new Set(window.ARTICLE_DATA.map((x) => x.id));


test("update and reverse references resolve against the complete runtime dataset", () => {
  assert.deepEqual(collectReferenceErrors(window), []);
});

test("optional reference-only candidates preserve every record ID and original update prose", () => {
  for (const key of collectionKeys) assert.deepEqual(Array.from(window[key], (record) => record.id || record.slug), beforeIds[key]);
  const fields = ["headline", "publishedAt", "summary", "whatChanged", "before", "after", "keyPoints", "tags", "confidence"];
  for (const old of before) {
    const current = window.UPDATE_DATA.find((x) => x.id === old.id);
    for (const field of fields) assert.equal(JSON.stringify(current[field]), JSON.stringify(old[field]), `${old.id}.${field}`);
    for (let i = 0; i < old.affectedIssues.length; i++) {
      if (typeof old.affectedIssues[i] === "string") {
        assert.equal(Object.hasOwn(current.affectedIssues[i], "before"), false, "never invent granular before text");
        assert.equal(Object.hasOwn(current.affectedIssues[i], "after"), false, "never invent granular after text");
      } else {
        for (const field of ["before", "after"]) assert.equal(current.affectedIssues[i][field], old.affectedIssues[i][field]);
      }
    }
  }
});

test("optional reference-only candidates are idempotent", () => {
  const snapshot = JSON.stringify(window);
  for (const file of extraFiles) execute(file);
  assert.equal(JSON.stringify(window), snapshot);
});

test("historical issue fragment aliases resolve without shadowing current issue anchors", () => {
  const aliases = window.TOPIC_ISSUE_ALIASES || {};
  assert.equal(Object.keys(aliases["securities-monitoring-2026"] || {}).length, 5);
  let count = 0;
  for (const [slug, pairs] of Object.entries(aliases)) {
    assert.ok(topics.has(slug), `unknown canonical theme ${slug}`);
    const ids = new Set(topics.get(slug).issues.map((issue) => issue.id));
    for (const [oldId, currentId] of Object.entries(pairs)) {
      count++;
      assert.ok(ids.has(currentId), `${slug}#${oldId}: missing ${currentId}`);
      assert.equal(ids.has(oldId), false, `${slug}#${oldId}: shadows a current issue`);
      assert.notEqual(oldId, currentId);
    }
  }
  assert.equal(count, 42);
  assert.equal(Object.hasOwn(aliases["economic-security-information-clearance"], "security-clearance-employee-consent-hr"), false, "do not choose one issue from an explicit one-to-many historical mapping");
});

test("historical reform aliases point directly to retained events", () => {
  const ids = new Set(window.REFORM_EVENT_DATA.map((event) => event.id));
  const aliases = window.REFORM_EVENT_ALIASES || {};
  assert.ok(Object.keys(aliases).length >= 32);
  for (const [oldId, currentId] of Object.entries(aliases)) {
    assert.ok(ids.has(currentId), `${oldId}: missing ${currentId}`);
    assert.equal(ids.has(oldId), false, `${oldId}: shadows a current event`);
    assert.notEqual(oldId, currentId);
    assert.equal(Object.hasOwn(aliases, currentId), false, `${oldId}: chained alias`);
  }
});

test("consolidated issue records preserve predecessor evidence and legal classifications", () => {
  let count = 0;
  for (const [slug, records] of Object.entries(window.TOPIC_ISSUE_ALIAS_METADATA || {})) {
    const topic = topics.get(slug);
    for (const [oldId, record] of Object.entries(records)) {
      count++;
      assert.equal(window.TOPIC_ISSUE_ALIASES[slug][oldId], record.canonicalId);
      const target = topic.issues.find((issue) => issue.id === record.canonicalId);
      assert.ok(target);
      assert.equal(record.formerRecord.id, oldId);
      for (const former of [record.formerRecord, record.originalCanonical]) {
        assert.equal(target.status, former.status);
        assert.equal(target.stage, former.stage);
        for (const id of former.sourceIds || []) assert.ok(target.sourceIds.includes(id), `${oldId}: lost ${id}`);
        if (former.title !== target.title) assert.ok(target.aliasTitles?.includes(former.title), `${oldId}: lost title alias`);
      }
    }
  }
  assert.equal(count, 6);
});

test("explicit one-to-many fragment aliases preserve every named destination", () => {
  const groups = window.TOPIC_ISSUE_GROUP_ALIASES || {};
  assert.equal(Object.values(groups).reduce((sum, group) => sum + Object.keys(group).length, 0), 2);
  assert.equal(JSON.stringify(groups["economic-security-information-clearance"]["security-clearance-employee-consent-hr"]), JSON.stringify(["economic-security-suitability-assessment", "economic-security-hr-purpose-limit"]));
  assert.equal(JSON.stringify(groups["job-seeker-sexual-harassment"]["jobseeker-sexual-harassment-employer-measures-2026"]), JSON.stringify(["jobseeker-sh-scope", "jobseeker-sh-recruiting-rules", "jobseeker-sh-consultation-response"]));
  for (const [slug, aliases] of Object.entries(groups)) {
    assert.ok(topics.has(slug));
    const ids = new Set(topics.get(slug).issues.map((issue) => issue.id));
    for (const [oldId, currentIds] of Object.entries(aliases)) {
      assert.equal(ids.has(oldId), false);
      assert.equal(Object.hasOwn(window.TOPIC_ISSUE_ALIASES?.[slug] || {}, oldId), false);
      assert.ok(currentIds.length > 1);
      for (const id of currentIds) assert.ok(ids.has(id), `${slug}#${oldId}: missing ${id}`);
    }
  }
});


test("publication reference validation rejects malformed update references", () => {
  const candidate = JSON.parse(JSON.stringify(window));
  candidate.UPDATE_DATA[0].affectedIssues = ["not-an-object"];
  assert.ok(collectReferenceErrors(candidate).some((error) => error.includes("expected an object")));
  candidate.UPDATE_DATA[0].affectedIssues = [{ topic: candidate.TOPIC_DATA[0].slug, issue: "missing-issue" }];
  assert.ok(collectReferenceErrors(candidate).some((error) => error.includes("missing-issue")));
});


test("same-instrument event consolidation preserves all former evidence and timing records", () => {
  const events = new Map(window.REFORM_EVENT_DATA.map((event) => [event.id, event]));
  for (const oldId of ["medical-research-ethics-guideline-2026-amendment", "copyright-act-record-performance-2026"]) {
    const metadata = window.REFORM_EVENT_ALIAS_METADATA[oldId];
    const target = events.get(metadata.canonicalId);
    assert.ok(target && metadata.formerRecord);
    for (const field of ["relatedTopics", "sourceIds", "effectiveDateSourceIds", "matchSourceIds", "articleIds"]) {
      for (const id of metadata.formerRecord[field] || []) assert.ok((target[field] || []).includes(id), `${oldId}.${field}: lost ${id}`);
    }
    assert.equal(target.effectiveDateStatus, metadata.formerRecord.effectiveDateStatus);
    if (metadata.formerRecord.effectiveDate) assert.ok((target.effectiveDates || []).includes(metadata.formerRecord.effectiveDate));
    assert.equal(metadata.formerRecord.id, oldId);
  }
  assert.equal(window.REFORM_LAW_ALIASES["medical-research-ethics-guideline"], "human-subjects-medical-research-ethics-guideline");
  assert.ok(!window.ARTICLE_DATA.some((article) => ["medical-research-ethics-guideline-2026-amendment", "copyright-act-record-performance-2026"].includes(article.reformEventId)));
});
