import fs from 'node:fs';
import path from 'node:path';
import {stagedFiles} from './staged-batch.mjs';

const root = process.cwd();
const files = stagedFiles(root);
if (!files.length) throw new Error('No staged files. Nothing marked ready.');
const marker = path.join(root, 'incoming', '.ready');
const temporary = `${marker}.tmp`;
fs.writeFileSync(temporary, JSON.stringify({version: 1, files}, null, 2) + '\n');
fs.renameSync(temporary, marker);
console.log(`Prepared ${files.length} checksummed files. Commit the whole incoming batch, including .ready, together.`);
