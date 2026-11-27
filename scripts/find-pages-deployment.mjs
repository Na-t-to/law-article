import fs from 'node:fs';
import {pathToFileURL} from 'node:url';

// GitHub's generated Pages workflow can complete while the legacy Pages builds
// endpoint still shows the staging commit. Don't match a mutable workflow name.
export function findPagesDeployment(payload, target) {
  if (!/^[a-f0-9]{40}$/.test(target ?? '') || !Array.isArray(payload?.workflow_runs)) return null;
  return payload.workflow_runs.find(run =>
    run?.path === 'dynamic/pages/pages-build-deployment' &&
    run.event === 'dynamic' &&
    run.head_branch === 'main' &&
    run.head_sha === target &&
    run.status === 'completed' &&
    run.conclusion === 'success' &&
    Number.isSafeInteger(run.id) && run.id > 0
  ) ?? null;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const run = findPagesDeployment(JSON.parse(fs.readFileSync(0, 'utf8')), process.argv[2]);
    if (run) console.log(run.id);
  } catch {
    // An unavailable response doesn't prove a build failed. Keep bounded polling.
  }
}
