import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

test('bootstrap emits real closing script tags so loader and application are not swallowed',()=>{
  const writes=[];
  const source=fs.readFileSync(fileURLToPath(new URL('../data/bootstrap.js',import.meta.url)),'utf8');
  vm.runInNewContext(source,{URL,Date,window:{addEventListener(){}},document:{addEventListener(){},currentScript:{src:'https://example.invalid/data/bootstrap.js?v=3'},write:html=>writes.push(html)}});
  assert.equal(writes.length,2);
  for(const html of writes){assert.match(html,/^<script src="https:\/\/example\.invalid\/data\/(manifest|load-all)\.js\?v=[a-z0-9]+"><\/script>$/);assert.equal(html.includes('\\/script'),false);}
});
