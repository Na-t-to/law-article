import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const incomingRoot = path.join(root, 'incoming');
const incomingData = path.join(incomingRoot, 'data');
const incomingTopics = path.join(incomingRoot, 'topics');
const dataDir = path.join(root, 'data');
const topicsDir = path.join(root, 'topics');
const manifestPath = path.join(dataDir, 'manifest.js');
const bootstrapPath = path.join(dataDir, 'bootstrap.js');

const categoryFor = (file) => {
  const match = /^(topics|sources|updates|reforms|articles)-.+\.js$/.exec(file);
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
  const next = content.replace(pair, `<script src="${prefix}bootstrap.js?v=1"></script>`);
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

console.log(JSON.stringify({
  promotedData: stagedData.map((file) => path.basename(file)),
  promotedTopicPages: stagedTopicPages.map((file) => path.basename(file)),
  migratedPages
}));
