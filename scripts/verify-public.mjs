import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';

export async function verifyPublic({baseUrl, root, files, maxAttempts = 42, delayMs = 10000, fetchImpl = fetch, log = console.log}) {
  const expected = files.map(file => ({file, bytes: fs.readFileSync(path.join(root, file))}));
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const stamp = `${Date.now()}-${attempt}`;
      const get = async file => {
        const response = await fetchImpl(`${baseUrl.replace(/\/$/, '')}/${file}?verify=${stamp}`, {cache: 'no-store', signal: AbortSignal.timeout(15000)});
        if (!response.ok) throw new Error(`${file}: HTTP ${response.status}`);
        return Buffer.from(await response.arrayBuffer());
      };
      const index = (await get('index.html')).toString('utf8');
      if (!index.includes('data/bootstrap.js?v=3')) throw new Error('index.html: expected bootstrap not visible yet');
      const manifest = (await get('data/manifest.js')).toString('utf8');
      for (const {file, bytes} of expected) {
        if (file.startsWith('data/') && !manifest.includes(path.basename(file))) throw new Error(`${file}: not in public manifest yet`);
        const actual = await get(file);
        if (!actual.equals(bytes)) throw new Error(`${file}: public bytes differ from verified commit`);
      }
      log(`Public verification passed on attempt ${attempt}: bootstrap, manifest, ${expected.length} exact files.`);
      return {attempts: attempt, verifiedFiles: files};
    } catch (error) {
      lastError = error;
      log(`Public verification ${attempt}/${maxAttempts}: ${error.message}`);
      if (attempt < maxAttempts) await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
  throw new Error(`Public verification did not converge after ${maxAttempts} attempts: ${lastError?.message}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const root = process.cwd();
  // Check the most recent actual publication, even in a repairs-only run.
  const commit = execFileSync('git', ['log', '-1', '--format=%H', '--grep=^Promote LAW INDEX staged data$'], {encoding: 'utf8'}).trim();
  if (!commit) throw new Error('No promotion commit found to verify. Fetch complete repository history.');
  const files = execFileSync('git', ['diff', '--no-renames', '--name-only', '--diff-filter=AM', `${commit}^`, commit], {encoding: 'utf8'})
    .trim().split('\n').filter(file => /^data\/(topics|sources|updates|reforms|articles)-.+\.js$/.test(file) || /^topics\/.+\.html$/.test(file));
  if (!files.length) throw new Error(`Promotion ${commit} contains no expected public files.`);
  console.log(`Verifying publication ${commit}`);
  await verifyPublic({root, files, baseUrl: 'https://na-t-to.github.io/law-article'});
}
