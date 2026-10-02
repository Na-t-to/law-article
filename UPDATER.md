# LAW / INDEX daily update runbook

## Roles and success condition

A scheduled research agent gathers and checks sources. It is not a deployment engine.
The deterministic scripts validate the complete proposed dataset before GitHub publishes it.
A run succeeds only after the intended commit is on main, promotion succeeds, GitHub Pages
serves the promoted manifest and files, and the affected theme actually reflects the update.
“No adopted sources” is a valid research result; never fabricate an update to fill a quota.

## Research and evidence

1. Read README.md and inspect the current manifest, canonical topics, sources, articles,
   reform events and any pending incoming batch. Check the latest Actions run and held
   research before starting. Do not append into an unexplained previous batch.
2. Review authoritative ministry/agency, legislature, court and regulator sources for
   existing themes, their unresolved questions and forthcoming effective dates. Trace
   secondary commentary back to its primary source. Follow existing source links and
   record the exact URL, title, publisher and verified date. Do not invent a publication
   date, deadline, legal conclusion or source access that did not happen.
3. Preserve README's separation of authoritative fact, interpretation, practical
   implication and uncertainty. Opening dates are not deadlines. Planned dates are not
   confirmed effective dates. Store an effective date only with the event's primary
   evidence; retain pending details explicitly.
4. Evaluate the complete current manifest and all deltas in application/validator load
   order; inspect the resulting runtime objects, not just grep/search snippets. Unicode-
   escaped deltas can contain facts invisible to plain-text searches. Compare against
   existing IDs, URLs and canonical shelves before adding anything.
   Add value to an existing theme instead of making duplicates. `lastUpdated` changes
   only with substance; `lastVerified` advances only after actual source comparison.
5. Hold unclear or inaccessible evidence outside incoming, with the exact blocker and
   original content preserved. A tool/security denial is not evidence of GitHub failure.
   Never circumvent a denied action. Report its target and actual error; reauthorization
   must follow the assistant's confirmation policy.

## One complete batch, one atomic Git commit

- Put new delta JavaScript in incoming/data as `<category>-<unique-batch-id>.js`, where
  category is topics, sources, articles, updates or reforms. Never overwrite a published
  delta. Optional theme HTML belongs in incoming/topics.
- Finish ALL files first, then run `node scripts/prepare-incoming.mjs`. It creates a
  versioned incoming/.ready inventory with every staged path and SHA-256 hash.
- Run `node --test scripts/test-promotion.mjs`, `node scripts/validate-data.mjs`,
  `node scripts/promote-incoming.mjs --check`, and `git diff --check`.
- The check-only command validates a disposable copy and must not alter the working
  public data or staged originals. Review the actual diff and all validator warnings.
- Upload the complete batch and marker together in ONE commit based on current main.
  With the GitHub connector use blobs/tree/commit followed by a non-forced reference
  update; avoid one commit per file. Re-read main immediately before publication.
  If the head changed, rebuild and revalidate against latest main; never force push.
- Existing plain-text readiness markers remain compatible with a visible warning,
  but new runs must use the checksummed marker. Never create .ready just because
  a directory has files: research completion, validation and publication authorization
  are prerequisites.

## Promotion and verification

The push of incoming/.ready triggers `.github/workflows/promote-law-index.yml`.
It tests promotion safety, validates the candidate, prepares one publication commit,
and removes only the successfully consumed staged inputs in that commit.

- On failure, public and staged originals remain available. The workflow does not
  erase a rejected batch or commit leaked validation artifacts.
- On a non-fast-forward push, the workflow fails safely. Re-run against latest main
  rather than rebasing a previously validated result without a new validation.
- Check the entire workflow, not just the first step or a Pages badge. Confirm the
  expected promoted commit and inspect the public manifest plus affected files/theme.
- Record source verification and publication outcome in a short run report: timestamp,
  sources reviewed/adopted, changed IDs, commit, workflow URL, public URL, remaining
  uncertainty, and any actual error. A staged commit alone is not publication.
- If a later valid run supersedes the commit being verified, compare the affected
  public content before retrying or claiming failure. Never publish the same delta twice.

## Recurrence and failure reporting

Run the research agent once daily on the owner's agreed schedule. Use the existing
GitHub connection; no new credentials or paid model API are required by this design.
Scheduling and authorization belong to the coordinating assistant, not this repository.

On failure, report one actionable message with the exact failed phase (research,
validation, GitHub write, Pages build, or live verification), the run/commit URL, preserved
batch path, and next step. Distinguish “no new adopted material” from “update did not run.”
Do not spin retry loops, bypass security checks, or silently advance freshness dates.
