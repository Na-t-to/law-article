import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {verifyPublic} from './verify-public.mjs';
function fixture(t) {const root=fs.mkdtempSync(path.join(os.tmpdir(),'law-public-test-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));fs.mkdirSync(path.join(root,'data'));fs.writeFileSync(path.join(root,'data/articles-test.js'),'expected data');return root;}
function response(body, status=200) {return {ok:status===200,status,arrayBuffer:async()=>Buffer.from(body)};}
test('retries stale manifest until exact delta arrives',async t=>{let attempts=0;const result=await verifyPublic({root:fixture(t),files:['data/articles-test.js'],baseUrl:'https://example.invalid',delayMs:0,maxAttempts:3,log:()=>{},fetchImpl:async url=>{if(url.includes('index.html')){attempts++;return response('data/bootstrap.js?v=2');}if(url.includes('manifest.js'))return response(attempts<2?'old manifest':'articles-test.js');return response('expected data');}});assert.equal(result.attempts,2);});
test('retries HTTP 404 without claiming success',async t=>{let attempts=0;const result=await verifyPublic({root:fixture(t),files:['data/articles-test.js'],baseUrl:'https://example.invalid',delayMs:0,maxAttempts:3,log:()=>{},fetchImpl:async url=>{if(url.includes('index.html')){attempts++;return response('data/bootstrap.js?v=2');}if(url.includes('manifest.js'))return response('articles-test.js');return attempts<2?response('missing',404):response('expected data');}});assert.equal(result.attempts,2);});
test('persistent wrong content fails at bounded limit',async t=>{let attempts=0;await assert.rejects(verifyPublic({root:fixture(t),files:['data/articles-test.js'],baseUrl:'https://example.invalid',delayMs:0,maxAttempts:2,log:()=>{},fetchImpl:async url=>{if(url.includes('index.html')){attempts++;return response('data/bootstrap.js?v=2');}if(url.includes('manifest.js'))return response('articles-test.js');return response('wrong data');}}),/did not converge after 2 attempts/);assert.equal(attempts,2);});
