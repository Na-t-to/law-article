import assert from 'node:assert/strict';
import test from 'node:test';
import {findPagesDeployment} from './find-pages-deployment.mjs';

const target = '770e9326f8059fb5c1e017dd6feb825baaa8d519';
const stage = '2eb717f96183f82b1700ea5cc63de6faaa35209e';
const pages = {
  id: 45761292437,
  name: 'pages build and deployment',
  path: 'dynamic/pages/pages-build-deployment',
  event: 'dynamic',
  head_branch: 'main', head_sha: target,
  status: 'completed', conclusion: 'success'
};
const select = (...workflow_runs) => findPagesDeployment({workflow_runs}, target);
test('finds an exact successful generated Pages deployment when the staging deployment is also successful', () => {
  assert.equal(select({...pages, id: 45761098623, head_sha: stage}, pages), pages);
});
test('ignores a matching display name, wrong trigger, wrong branch, or wrong SHA', () => {
  assert.equal(select(
    {...pages, path: '.github/workflows/pages.yml'},
    {...pages, event: 'push'},
    {...pages, head_branch: 'preview'},
    {...pages, head_sha: stage}
  ), null);
});
test('does not accept unfinished, skipped, failed, or malformed deployment data', () => {
  assert.equal(select({...pages, status:'in_progress'}, {...pages, conclusion:'skipped'},
    {...pages, conclusion:'failure'}, {...pages, id: '45761292437'}, null), null);
  assert.equal(findPagesDeployment({}, target), null);
  assert.equal(findPagesDeployment({workflow_runs:[pages]}, ''), null);
});
