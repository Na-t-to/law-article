import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {DATA_FILENAME} from './staged-batch.mjs';

const scripts = path.dirname(fileURLToPath(import.meta.url));
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'law-index-test-'));
  t.after(() => fs.rmSync(root, {recursive: true, force: true}));
  for (const dir of ['scripts', 'data', 'topics', 'incoming/data']) fs.mkdirSync(path.join(root, dir), {recursive: true});
  for (const name of ['promote-incoming.mjs', 'prepare-incoming.mjs', 'staged-batch.mjs']) fs.copyFileSync(path.join(scripts, name), path.join(root, 'scripts', name));
  fs.writeFileSync(path.join(root, 'scripts/validate-data.mjs'), `import fs from 'node:fs';\nif (fs.readFileSync('data/sources-run1.js','utf8').includes('INVALID')) { console.error('fixture validation error'); process.exit(1); }\n`);
  fs.writeFileSync(path.join(root, 'data/bootstrap.js'), '// bootstrap');
  fs.writeFileSync(path.join(root, 'data/manifest.js'), `window.LAW_INDEX_DATA_FILES = Object.freeze({topics:[],sources:[],updates:[],articles:[],reforms:[]});\n`);
  fs.writeFileSync(path.join(root, 'index.html'), '<script src="data/bootstrap.js?v=2"></script>');
  fs.writeFileSync(path.join(root, 'incoming/data/sources-run1.js'), '// valid source');
  return root;
}
function run(root, script = 'promote-incoming.mjs', args = []) {
  return spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], {cwd: root, encoding: 'utf8'});
}
function prepare(root) { const result = run(root, 'prepare-incoming.mjs'); assert.equal(result.status, 0, result.stderr); }
function snapshot(root) {
  const result = {};
  function walk(folder = '') {
    for (const entry of fs.readdirSync(path.join(root, folder), {withFileTypes: true})) {
      const relative = path.join(folder, entry.name);
      if (entry.isDirectory()) walk(relative);
      else result[relative] = fs.readFileSync(path.join(root, relative)).toString('base64');
    }
  }
  walk(); return result;
}
function unchangedFailure(root, pattern) {
  const before = snapshot(root); const result = run(root);
  assert.notEqual(result.status, 0); assert.match(result.stderr, pattern);
  assert.deepEqual(snapshot(root), before);
}

test('no marker never publishes', (t) => { const root = fixture(t); unchangedFailure(root, /No incoming\/\.ready/); });
test('checksum marker prevents partially uploaded batch', (t) => { const root = fixture(t); prepare(root); fs.rmSync(path.join(root, 'incoming/data/sources-run1.js')); unchangedFailure(root, /no staged files/); });
test('checksum marker catches changed staged file', (t) => { const root = fixture(t); prepare(root); fs.appendFileSync(path.join(root, 'incoming/data/sources-run1.js'), '\nchanged'); unchangedFailure(root, /do not match/); });
test('checksum marker catches extra staged file', (t) => { const root = fixture(t); prepare(root); fs.writeFileSync(path.join(root, 'incoming/data/topics-run2.js'), '// extra'); unchangedFailure(root, /do not match/); });
test('malformed JSON is never treated as legacy readiness', (t) => { const root = fixture(t); fs.writeFileSync(path.join(root, 'incoming/.ready'), '{broken'); unchangedFailure(root, /Malformed/); });
test('validator rejection preserves public data and all staged inputs', (t) => { const root = fixture(t); fs.writeFileSync(path.join(root, 'incoming/data/sources-run1.js'), 'INVALID'); prepare(root); unchangedFailure(root, /Validator failed/); });
test('existing published delta is never overwritten', (t) => { const root = fixture(t); fs.writeFileSync(path.join(root, 'data/sources-run1.js'), '// original'); prepare(root); unchangedFailure(root, /Refusing to overwrite/); });
test('check-only validates without changing any file', (t) => { const root = fixture(t); prepare(root); const before = snapshot(root); const result = run(root, 'promote-incoming.mjs', ['--check']); assert.equal(result.status, 0, result.stderr); assert.deepEqual(snapshot(root), before); });
test('success promotes once, registers manifest, removes only the consumed batch', (t) => {
  const root = fixture(t); prepare(root); const result = run(root);
  assert.equal(result.status, 0, result.stderr);
  assert.equal(fs.readFileSync(path.join(root, 'data/sources-run1.js'), 'utf8'), '// valid source');
  assert.match(fs.readFileSync(path.join(root, 'data/manifest.js'), 'utf8'), /sources-run1\.js\?v=1/);
  assert.equal(fs.existsSync(path.join(root, 'incoming/.ready')), false);
  assert.equal(fs.existsSync(path.join(root, 'incoming/data/sources-run1.js')), false);
  unchangedFailure(root, /No incoming\/\.ready/);
});
test('legacy external-task markers still work with visible warning', (t) => { const root = fixture(t); fs.writeFileSync(path.join(root, 'incoming/.ready'), 'run1'); const result = run(root); assert.equal(result.status, 0, result.stderr); assert.match(result.stderr, /Legacy/); });
test('promotion and validator share filename rule including run251z', () => { assert.equal(DATA_FILENAME.test('topics-run251z.js'), true); assert.equal(DATA_FILENAME.test('../sources-bad.js'), false); assert.equal(DATA_FILENAME.test('sources-.js'), false); });
