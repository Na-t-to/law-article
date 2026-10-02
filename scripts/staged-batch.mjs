import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const DATA_FILENAME = /^(topics|sources|updates|reforms|articles)-[A-Za-z0-9][A-Za-z0-9._-]*\.js$/;
const digest = (bytes) => crypto.createHash('sha256').update(bytes).digest('hex');
export function stagedFiles(root) {
  const files = [];
  for (const [folder, extension] of [['data', '.js'], ['topics', '.html']]) {
    const directory = path.join(root, 'incoming', folder);
    if (!fs.existsSync(directory)) continue;
    for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
      if (!entry.isFile() || !entry.name.endsWith(extension)) throw new Error(`Unsupported staged entry: incoming/${folder}/${entry.name}`);
      if (folder === 'data' && !DATA_FILENAME.test(entry.name)) throw new Error(`Unsupported staged data filename: ${entry.name}`);
      const relative = `${folder}/${entry.name}`;
      files.push({path: relative, sha256: digest(fs.readFileSync(path.join(root, 'incoming', relative)))});
    }
  }
  return files.sort((a, b) => a.path.localeCompare(b.path, 'en'));
}
export function readBatch(root, {allowLegacy = true} = {}) {
  const marker = path.join(root, 'incoming', '.ready');
  if (!fs.existsSync(marker)) throw new Error('No incoming/.ready marker. Prepare the complete batch with node scripts/prepare-incoming.mjs.');
  const files = stagedFiles(root);
  if (!files.length) throw new Error('The ready batch contains no staged files.');
  const raw = fs.readFileSync(marker, 'utf8').trim();
  let ready;
  try { ready = JSON.parse(raw); } catch {
    if (!allowLegacy || raw.startsWith('{') || raw.startsWith('[')) throw new Error('Malformed incoming/.ready JSON. Regenerate it with prepare-incoming.mjs.');
    console.warn('Legacy .ready marker: completeness is not checksummed. Use prepare-incoming.mjs for future batches.');
    return files;
  }
  if (!ready || ready.version !== 1 || !Array.isArray(ready.files)) throw new Error('Unsupported incoming/.ready format; expected version 1 and files.');
  if (JSON.stringify(ready.files) !== JSON.stringify(files)) throw new Error('Staged files do not match incoming/.ready: incomplete, extra, or changed batch. Prepare the marker only after all files are final.');
  return files;
}
