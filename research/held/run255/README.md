# run255 held for deduplication and source review

The four original files from `incoming/data/*-run255.js` are preserved byte-for-byte in
`original-incoming/`. They are outside the public manifest and active staging directory.
Do not load, copy back, or promote them automatically. Git history retains their original
staging commits. No readiness marker was published for this batch.

## Why this batch is held (2026-10-02)

Evaluating the complete current manifest and every loaded delta shows that the canonical
`generative-ai-ip-principle-code` theme already includes the September 8 filing announcement:

- Canonical source: `source-ai-ip-principle-code-filing-2026`
- Canonical update: `update-ai-ip-principle-code-filing-20260908`
- Current topic `lastUpdated`: 2026-09-10; `lastVerified`: 2026-09-22
- Filing issue remains `pending`, with filing-destination/operational details unresolved.

run255 uses different IDs for substantially the same source and update, and changes the
filing issue to authoritative without resolving those open details. Its old 'before' state
is also inconsistent with the current dataset. Some existing delta text is Unicode-escaped:
plain-text grep is insufficient to establish that a fact is absent. Always inspect the
fully evaluated dataset, in the same sequence used by the application/validator.

The Nishimura secondary newsletter's exact detail URL was indexed with a September 28
publication date, while publisher listings showed October 1 for the same title. The
publisher's site returned a Cloudflare security check. Do not guess its publication date.

Official announcement content is indexed on the primary domain, but direct retrieval of
the two original cas.go.jp URLs returned HTTP 404 on October 2. Therefore no new current
source verification date was recorded, and no claim about current form availability or
fields was published. Find the current official source before adding substantive updates.

## Future review

1. Re-verify the current official material and resolve newsletter date/access.
2. Compare against existing runtime objects, preserving canonical IDs and uncertainty.
3. Create a new, minimal delta for genuinely new information only. Do not restore this
   entire batch or mechanically add its missing .ready marker.

Sources to reconcile:
- https://www.cas.go.jp/jp/seisakukaigi/titeki2/ai_principle_code/index.html
- https://www.cas.go.jp/jp/seisakukaigi/titeki2/index.html
- https://www.nishimura.com/ja/knowledge/newsletters/intellectual_property_260928
