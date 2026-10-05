import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';
import os from 'node:os';
import crypto from 'node:crypto';
import { readBatch, DATA_FILENAME } from './staged-batch.mjs';

function promoteCandidate(root) {
const incomingRoot = path.join(root, 'incoming');
const incomingData = path.join(incomingRoot, 'data');
const incomingTopics = path.join(incomingRoot, 'topics');
const dataDir = path.join(root, 'data');
const topicsDir = path.join(root, 'topics');
const manifestPath = path.join(dataDir, 'manifest.js');
const bootstrapPath = path.join(dataDir, 'bootstrap.js');

const categoryFor = (file) => {
  const match = DATA_FILENAME.exec(file);
  return match?.[1] || null;
};

const listFiles = (dir, predicate = () => true) => {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && predicate(entry.name))
    .map((entry) => path.join(dir, entry.name))
    .sort();
};

const stagedData = listFiles(incomingData, (name) => name.endsWith('.js'));
const stagedTopicPages = listFiles(incomingTopics, (name) => name.endsWith('.html'));
const triggerFile = path.join(incomingRoot, '.ready');

if (!fs.existsSync(bootstrapPath)) {
  throw new Error('data/bootstrap.js is required before promotion.');
}

for (const sourcePath of stagedData) {
  const file = path.basename(sourcePath);
  const category = categoryFor(file);
  if (!category) throw new Error(`Unsupported staged data filename: ${file}`);
  const target = path.join(dataDir, file);
  if (fs.existsSync(target)) throw new Error(`Refusing to overwrite existing data file: data/${file}`);
  fs.copyFileSync(sourcePath, target);
}

for (const sourcePath of stagedTopicPages) {
  const file = path.basename(sourcePath);
  fs.mkdirSync(topicsDir, { recursive: true });
  fs.copyFileSync(sourcePath, path.join(topicsDir, file));
}

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(manifestPath, 'utf8'), context, { filename: 'data/manifest.js' });
const manifest = context.window.LAW_INDEX_DATA_FILES || {};
const additions = {};

for (const sourcePath of stagedData) {
  const file = path.basename(sourcePath);
  const category = categoryFor(file);
  const existing = (manifest[category] || []).some((entry) => entry.split('?')[0] === file);
  if (!existing) (additions[category] ||= []).push(`${file}?v=1`);
}

if (Object.keys(additions).length) {
  const fields = Object.entries(additions).map(([category, files]) => {
    const quoted = files.map((file) => JSON.stringify(file)).join(',');
    return `${category}:Object.freeze([...window.LAW_INDEX_DATA_FILES.${category},${quoted}])`;
  }).join(',');
  fs.appendFileSync(manifestPath, `\nwindow.LAW_INDEX_DATA_FILES = Object.freeze({...window.LAW_INDEX_DATA_FILES,${fields}});\n`);
}

const htmlRoots = [root, topicsDir];
const htmlFiles = [];
for (const dir of htmlRoots) {
  if (!fs.existsSync(dir)) continue;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(path.join(dir, entry.name));
  }
}

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
let migratedPages = 0;
for (const filePath of htmlFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  const prefix = filePath.startsWith(`${topicsDir}${path.sep}`) ? '../data/' : 'data/';
  const manifestTag = `<script\\s+src=["']${escapeRegExp(prefix)}manifest\\.js(?:\\?[^"']*)?["']><\\/script>`;
  const loaderTag = `<script\\s+src=["']${escapeRegExp(prefix)}load-all\\.js(?:\\?[^"']*)?["']><\\/script>`;
  const pair = new RegExp(`${manifestTag}\\s*${loaderTag}`, 'g');
  const next = content.replace(pair, `<script src="${prefix}bootstrap.js?v=3"></script>`)
    .replace(/(data\/bootstrap\.js\?v=)\d+/g, (_match, prefix) => `${prefix}3`);
  if (next !== content) {
    fs.writeFileSync(filePath, next);
    migratedPages += 1;
  }
}

const remainingManifestRefs = htmlFiles.filter((filePath) => /data\/manifest\.js(?:\?|["'])/.test(fs.readFileSync(filePath, 'utf8')));
if (remainingManifestRefs.length) {
  throw new Error(`Static manifest references remain: ${remainingManifestRefs.map((file) => path.relative(root, file)).join(', ')}`);
}

const validation = spawnSync(process.execPath, ['scripts/validate-data.mjs'], { cwd: root, encoding: 'utf8' });
process.stdout.write(validation.stdout || '');
process.stderr.write(validation.stderr || '');
if (validation.status !== 0) {
  throw new Error(`Validator failed with exit code ${validation.status}. Staged files were not promoted.`);
}

for (const filePath of [...stagedData, ...stagedTopicPages]) fs.rmSync(filePath);
if (fs.existsSync(triggerFile)) fs.rmSync(triggerFile);
for (const dir of [incomingData, incomingTopics, incomingRoot]) {
  if (fs.existsSync(dir) && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

return {
  promotedData: stagedData.map((file) => path.basename(file)),
  promotedTopicPages: stagedTopicPages.map((file) => path.basename(file)),
  migratedPages
};
}


// Validation runs against a disposable candidate tree, never the public tree.
// Only a successful complete candidate becomes the next Git commit's contents.
const root = process.cwd();
const batch = readBatch(root);
const markerBytes = fs.readFileSync(path.join(root, 'incoming', '.ready'));
const scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'law-index-promotion-'));
const writeAtomic = (file, bytes) => {
  fs.mkdirSync(path.dirname(file), {recursive: true});
  const temporary = `${file}.${crypto.randomUUID()}.tmp`;
  try {
    fs.writeFileSync(temporary, bytes);
    fs.renameSync(temporary, file);
  } finally {
    fs.rmSync(temporary, {force: true});
  }
};
try {
  for (const folder of ['data', 'topics', 'scripts', 'incoming']) {
    const from = path.join(root, folder);
    if (fs.existsSync(from)) fs.cpSync(from, path.join(scratch, folder), {recursive: true});
  }
  for (const file of listRootHtml(root)) fs.copyFileSync(path.join(root, file), path.join(scratch, file));
  const result = promoteCandidate(scratch);
  if (JSON.stringify(readBatch(root)) !== JSON.stringify(batch) || !fs.readFileSync(path.join(root, 'incoming', '.ready')).equals(markerBytes)) {
    throw new Error('Staged batch changed during validation. Nothing was published; retry the complete batch.');
  }
  if (process.argv.includes('--check')) {
    console.log(JSON.stringify({...result, checkOnly: true}));
  } else {
    const changed = [];
    for (const relative of [...walkFiles(scratch, 'data'), ...walkFiles(scratch, 'topics'), ...listRootHtml(scratch)]) {
      const target = path.join(root, relative);
      const bytes = fs.readFileSync(path.join(scratch, relative));
      const before = fs.existsSync(target) ? fs.readFileSync(target) : null;
      if (before === null || !before.equals(bytes)) changed.push({target, before, bytes});
    }
    const inputs = [...batch.map(({path: relative}) => path.join(root, 'incoming', relative)), path.join(root, 'incoming', '.ready')]
      .map((target) => ({target, bytes: fs.readFileSync(target)}));
    try {
      for (const {target, bytes} of changed) writeAtomic(target, bytes);
      for (const {target} of inputs) fs.rmSync(target);
    } catch (error) {
      // Restore every touched file, including staged input, if application fails.
      for (const {target, before} of changed) {
        if (before === null) fs.rmSync(target, {force: true});
        else writeAtomic(target, before);
      }
      for (const {target, bytes} of inputs) writeAtomic(target, bytes);
      throw error;
    }
    console.log(JSON.stringify(result));
  }
} finally {
  fs.rmSync(scratch, {recursive: true, force: true});
}

function listRootHtml(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).filter((entry) => entry.isFile() && entry.name.endsWith('.html')).map((entry) => entry.name);
}
function walkFiles(directory, relative) {
  const absolute = path.join(directory, relative);
  if (!fs.existsSync(absolute)) return [];
  return fs.readdirSync(absolute, {withFileTypes: true}).flatMap((entry) => {
    const file = path.join(relative, entry.name);
    if (entry.isDirectory()) return walkFiles(directory, file);
    if (!entry.isFile()) throw new Error(`Unsupported non-file in publication tree: ${file}`);
    return [file];
  });
}
