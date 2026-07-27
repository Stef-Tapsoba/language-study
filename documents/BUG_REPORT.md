# Bug Report & Living Backlog — language-study

Original QA review: 2026-03-30 (static analysis of critical-path modules)
Refreshed: 2026-07-26 — verified every historical entry against current code,
closed what's fixed, and folded in everything surfaced during the Korean A1/A2
curriculum + streak work (commits `d31825f`, `e9fc83d`).

**How to use this doc:** this is the running list of "noticed it, not fixing it
right now" items — pitfalls, design gaps, deferred content work. When
something here gets fixed, don't delete the entry — mark it RESOLVED with the
commit/date so there's a record. When something new surfaces during a
session and isn't worth fixing immediately, add it here before it's forgotten.

---

## Historical bugs (2026-03-30 report) — verified status as of 2026-07-26

### BUG-001 — `answerMatches` rejects valid punctuated inputs
**STATUS: RESOLVED.** `utils/answerMatch.ts`'s `normalize()` now strips all
non-letter/non-digit/non-space characters via `[^\p{L}\p{N}\s]`, exactly the
suggested fix. Confirmed in current code.

### BUG-002 — `answerMatches` has no multi-answer API
**STATUS: RESOLVED.** `answerMatches(input, target: string | string[], mode)`
already accepts a union type, with three modes (`loose`/`strict`/`dictation`)
and `"/"`-separated alternative support baked into `splitAlternatives()`. This
went further than the original suggested fix.

### BUG-003 — `getGlobalStreak` resets to 0 at midnight even after consistent study
**STATUS: PARTIALLY RESOLVED — different bug found and fixed in its place.**
The exact mechanism described here (streak counting breaks immediately if
today has no activity yet) is already fixed in current code — `getGlobalStreak`
already has the "start counting from yesterday if today's empty" logic.
However, a **different** bug in the same function was found and fixed
2026-07-26 (commit `e9fc83d`): every date-key computation in
`store/useStatsStore.ts` used `new Date().toISOString().slice(0, 10)`, which
converts to UTC before extracting the date. For anyone west of Greenwich,
studying near local midnight could land two different local calendar days on
the same UTC date, undercounting the streak by one. Fixed via a shared
`utils/date.ts:localDateStr()` helper, applied across `useStatsStore.ts` and
7 other call sites with the same anti-pattern (`domain/plateau.ts`,
`domain/goalTrajectory.ts`, `hooks/useBreakDetection.ts`,
`pages/GoalPickerPage.tsx`, `store/preferences.ts`, `store/progress.ts`,
`store/SupabaseProgressStorage.ts`, `store/LocalStorageStatsStorage.ts`,
`pages/ProfilePage.tsx`).

### BUG-004 — `useDrill.advance` silently skips questions when `selected === null`
**STATUS: STILL OPEN, but not currently reachable.** Verified in
`packages/quiz-engine/src/useDrill.ts` — `handleNext()` still calls
`advance(score, index, selected)` with no `revealed` guard. However, both
current consumers (`VerbDrillPage.tsx`, `GrammarDrillPage.tsx`) only render
the "Next" button inside `{drill.revealed && (...)}`, and `handleSelect`
always sets `selected` and `revealed` together — so there's no live UI path
that calls `handleNext()` with `selected === null` today. Still worth the
one-line guard (`if (!revealed) return`) since `handleNext` is a public API
on the exported `DrillState` and a future consumer or a test calling it
directly would hit the silent skip.

### BUG-005 — No localStorage schema versioning guard
**STATUS: RESOLVED.** `store/progress.ts` now has `SCHEMA_VERSION = 6` with a
real migration path (`version` read from stored data, migrated up). Well
past the original suggested fix.

### BUG-006 — `isUnitUnlocked` assumes contiguous `order` values
**STATUS: RESOLVED.** `domain/unitUnlock.ts`'s `isUnitUnlocked` was rewritten
to use `findIndex` + array-position lookup (`orderedUnits[idx - 1]`) instead
of searching for `order - 1`. No contiguous-order assumption remains.

### Latent Risks (2026-03-30) — refreshed status

| # | Area | Risk | Status (2026-07-26) |
|---|------|------|------|
| L1 | SRS import | `getDueCards` treats any card with `nextReviewAt === 0` as new/always-due | **Still open.** Confirmed in `store/srs.ts`. Legitimate for brand-new cards (that's the initial state by design), but a corrupted or manually-imported state with `nextReviewAt: 0` would behave identically. Not independently verified whether such corruption is actually reachable. |
| L2 | Auth | `isAuthenticated()` returns false for expired session but session stays in storage | **Obsolete.** `isAuthenticated()` no longer exists anywhere in the codebase — auth was rewritten around `AuthContext`/`ProtectedRoute`/`authRegistry`. The new system hasn't been independently audited for an analogous issue. |
| L3 | Stats | `resetAllStats()` TOCTOU race (clears state, then async-loads, in Stage 2) | **Code path changed.** Current `resetAllStats()` captures lang keys synchronously, awaits all resets, *then* clears in-memory state once — the specific "load after clear" sequence described no longer exists. Not independently re-verified against `SupabaseStatsStorage`'s internals. |
| L4 | SRS/TTS | Device clock drift or travel shifts `nextReviewAt` timestamps; no clock-drift guard | **Still open.** No guard exists in `getDueCards`. Untouched. |

---

## Open — Software (surfaced 2026-07-26, not yet fixed)

### `src/utils/tts.test.ts` — flaky/failing test
`speak > cancels any in-progress speech before speaking` expects the cancel
spy to be called once but observes two calls. Failed consistently across
every full test run this session (unrelated to any change made). Never
investigated — root cause unknown, could be a real double-cancel bug in
`utils/tts.ts` or a test-isolation issue (leftover mock state between tests).

### `src/data/korean/grammar/a1/block4.ts` — pre-existing TS error
`tsc --noEmit` reports: `Object literal may only specify known properties,
and 'annotation' does not exist in type 'DialogueTurn'` at block4.ts:22.
Present throughout this session's type-checks, never touched. Either the
`DialogueTurn` type needs an optional `annotation` field (matching how
`examples` entries elsewhere use it), or this specific dialogue entry has a
stray field that should be removed.

### Unit "Test" tab is 100% recognition, no production/typed question type
`QuizQuestion` (`types/index.ts`) is hardcoded to `options: string[]` /
`answer: string`, and its renderer `QuizCard` is a pure radio-group MCQ.
Nearly every `testQuestions` entry across every unit is a four-option
recognition item — good for noticing, but doesn't verify a learner can
actually *produce* the form. A typed-answer variant is buildable cheaply by
reusing the existing `answerMatches(..., "strict")` pattern already proven in
`ClozePage.tsx` (text input + submit, not new matching logic) — but content
authoring is the real cost: every typed question needs carefully-authored
accepted-answer variants (Korean typed input has a lot of legitimate
variation — dropped particles, flexible word order, register). Scoped in
conversation but not built; recommendation was to prototype on one unit
(e.g. U9's 을/를 particle) before deciding on full rollout.

---

## Open — Korean Curriculum Content

### A2 has materially thinner scaffolding than A1
From the original curriculum pedagogy review: A1 spreads 42 grammar lessons
across 27 units (low new-material density, lots of practice-only units); A2
crams 18 grammar lessons into 18 units (~1 new structure per unit) while
individual units bundle multiple major structures at once (U2: ability +
permission + prohibition; U16: six `-기` expressions in one unit). At the
same time, A2 has only 6 verbs in its dedicated verb pool (vs 21 for A1) and
**zero** phrase lessons (vs 14 for A1). This is the single biggest curriculum
risk flagged in the original review — exactly where conceptual load spikes,
scaffolding thins.

### A2/B1/B2/C1 orphaned vocab — never wired into any unit
A1's orphan problem (16 words) was found and fixed (wired into U12/U24,
commit `d31825f`). The same audit was never repeated for the other levels,
where the numbers are much larger:

| Level | Total vocab | Orphaned |
|---|---|---|
| A2 | 164 | **54** (one unbroken block, `ko-v-a2-111`–`164` — confirmed leftover from a pre-redesign A2 unit plan; the vocab file's own section comments reference unit numbers/topics that don't match the current 18-unit redesign) |
| B1 | 100 | 5 |
| B2 | 111 | 55 |
| C1 | 84 | 55 |

B2/C1's ~50% orphan rate is large enough that it might reflect an
intentional "practice-pool beyond curated units" design for advanced levels
rather than a straightforward bug — worth checking the original intent before
assuming it needs the same fix as A1/A2.

### A2 vocab duplicate: 피곤하다 genuinely re-taught in two different units
Unlike A1's duplicates (decoding-practice word vs. later "real" vocab, same
unit never taught both), A2's `ko-v-a2-069` and `ko-v-a2-091` (both 피곤하다,
"to be tired") are each referenced by a **different real unit** — so a
learner is taught the same word twice as if new. The existing `dedupeVocab`
fix (in `getVocabForLevel`) hides the redundant copy from level-wide review
pools, but the unit that re-teaches it still presents it as new content.
Needs an editorial swap — pick a different word for one of the two units —
not a code fix.

### A2's grammar rules aren't in the shared rules-pool architecture
A1's grammar lessons reference a shared per-level `rules/a1.ts` pool via
`ruleIds`, which is what let a single rule (`ko-r-a1-14-1`) get reused —
and accidentally shared — between the verb lesson (U10) and the adjective
lesson (U12), causing the verb/adjective-mixing bug that was fixed (split
into `ko-r-a1-14-*` verb-only and `ko-r-a1-17-*` adjective-only, commit
`d31825f`). A2's grammar lessons define `rules` inline per-lesson instead —
so the *specific* mixing bug can't recur there the same way, but A2 has
never been audited for its own version of "one example set doing double
duty across two different grammatical categories."

### `dictionaryForm` (citation form) fix only applied to Korean A1
Added an optional `dictionaryForm` field to `VocabItem` so pre-conjugated
adjectives (and the supplementary "Verbs" vocab category) can show their
citation form (commit `d31825f`) — populated for all 19 A1 adjective entries
and all 17 A1 supplementary-verb entries. A2/B1/B2/C1 almost certainly have
the same pattern (adjectives and non-core verbs stored only in conjugated
form) and haven't been audited or backfilled.

### Other languages never audited for any of the above
This entire pass (duplicate vocab, orphaned vocab, verb/adjective rule
mixing, `dictionaryForm` gaps) was scoped to Korean only, by explicit choice.
French, Italian, Spanish, and Japanese share the same data shapes
(`VocabItem`, `GrammarLesson`, per-level `units/*.ts` files) and have never
been checked for any of these issues.

### Retention/spacing gaps (from the original pedagogy review, still open)
- No spaced-repetition scheduling for grammar patterns — only vocab goes
  through the SM-2 engine (Flashcards). Grammar retention relies entirely on
  incidental recycling across units.
- Checkpoints test their own block's content, not a cumulative/interleaved
  mix of everything learned so far — interleaving beats blocking for durable
  retention, and the current design blocks.
- No dedicated free-production writing (EE) task, despite EE being one of
  the four tracked competencies (`domain/skills.ts`).
- Register/politeness (해요체 / 존댓말 / 반말) is handled well in spots but
  isn't a labeled, tracked through-line across levels — this is where
  learners most visibly fail at higher levels.
