# Progress Summary — July 2026

A record of the July 2026 engineering push and what remains against the
[Architecture Blueprint v2.4](./Language_Study_App_Architecture_Blueprint.md).

---

## What was done

### 1. Storage reliability — offline write outbox

Every hot-path Supabase write used to be fire-and-forget: failures were logged
and lost, and the `mutationError` retry banner could never fire. Now:

- All writes in the four Supabase adapters (progress, SRS, stats, preferences)
  are awaited through `syncOrQueue` (`src/store/outbox.ts`).
- Failed writes queue in a persisted per-user outbox (`ls:outbox:{userId}`)
  and replay on the browser `online` event and at next login (flushed **before**
  hydration so the server snapshot reflects queued writes).
- Same-key ops coalesce last-write-wins; stat deltas are summed (at-least-once).
- UI stays optimistic: adapters write their local cache synchronously, the
  store refreshes immediately, and network failures surface in the banner
  without hiding the optimistic state.

### 2. State consolidation — one paradigm

`ProgressContext` (React Context) was deleted. All progress state lives in
`useProgressStore` (Zustand), matching `useStatsStore`. All ~35 consumers were
migrated to the selector + `progressHelpers(progress)` pattern. This removed
the Context/Zustand/singleton three-paradigm split and the manual provider
refresh dance.

### 3. Content-type fidelity

Stage 1 used to discard the content type of completed lessons, so imported
snapshots wrote everything to Supabase as `"grammar"`. Now `completedByType`
is persisted alongside the flat list (progress schema v5 with backfill via the
content-ID naming convention), merged properly on import, and inferred for
legacy snapshots at upload time (`src/store/contentType.ts`).

### 4. Placement test improvements

- Gated-threshold logic extracted to `src/domain/placement.ts` with a
  **proportional** pass threshold (fixes languages with fewer questions per
  level always placing at A1).
- **"I don't know"** option — counts as incorrect, so lucky guesses stop
  inflating placement.
- **Early exit** — the test ends the moment a level's threshold becomes
  unreachable; a true beginner answers ~2-4 questions, not 20.

### 5. Exercise registry consolidation

- Verb Drill and Grammar Drill migrated into the exercise-type registry
  (11 registered types total); their pages are pure renderers of the
  ExerciseShell contract, with unit gating extracted to `domain/unitGating.ts`.
- PracticePage's card list is now **driven by the registry** — registering a
  new exercise type adds its Practice card automatically.
- The registry's boundary is documented: linear practice sessions live inside;
  SRS flashcards and the Reading/Listening/Culture browsers deliberately don't.
- Old drill URLs redirect; exercise labels come from the registry.

### 6. Goal transparency cluster (blueprint §2.1 / §2.3 / §2.4)

The largest piece — three connected features:

**Per-skill CO/CE/EO/EE tracking** (`src/domain/skills.ts`)
- Every skill-attributable exercise declares its competency on its registry
  def (cloze/error-correction/scramble → EE, dictation → CO, dialogue/script/
  vocab-in-context → CE, speaking → EO; reading/listening pages hardcode
  CE/CO). Core-knowledge drills stay unattributed by design.
- `recordQuizAnswer(langId, correct, skill)` carries the signal through the
  Zustand store, both storage adapters, a new `daily_skill_stats` table with
  an identity-guarded additive RPC, and the outbox.
- Stats tab shows per-skill accuracy bars (volume-guarded), with retrieval
  performance now ordered above completion percentages (blueprint §6).

**Time-bound goals** (`src/domain/goalTrajectory.ts`)
- Goal picker gained a skippable step 2: target CEFR level + optional date +
  optional minutes/day, stored **per language** (`goal_plans` table; progress
  schema v6).
- Unit-mastery dates are stamped going forward; Stage 2 logins hydrate full
  history from `mastered_units.mastered_at`.
- Honest trajectory: required vs actual units/week (±15% on-track band),
  "insufficient data" instead of guesses, behind-state copy that says exactly
  what pace is needed. Shown as a card on the Stats tab and a chip on Home.

**Plateau detection** (`src/domain/plateau.ts`)
- Compares two adjacent 14-day windows per skill and for flashcard retention,
  with minimum-volume guards (no false alarms on sparse data).
- Flat accuracy → "notice" card (acknowledgement: plateaus are normal);
  declining accuracy/retention → "concern" card. Interventions: review mode,
  a not-plateaued skill as content reframe, goal recalibration. Dismissable
  per ISO week; mounted on the Path tab.

### Supporting work

- Fixed mark-as-complete buttons not updating until navigation (optimistic
  refresh in the store's mutation wrapper).
- Fixed a dual-React crash in vitest for quiz-engine hooks (`resolve.dedupe`).
- Blueprint updated to v2.4 with an honest status section.
- Test suite grew from ~900 to **1028 passing tests**.

### ⚠️ Deployment note

The Supabase migration
`supabase/migrations/20260715000000_skill_stats_and_goal_plans.sql`
(daily_skill_stats + increment_skill_stat RPC + goal_plans) **must be applied
to the Supabase project** before Stage 2 skill/goal writes will persist.
Stage 1 (localStorage) needs nothing.

---

## What is left to do

In rough priority order (see blueprint §0 for the full status):

### Near-term / follow-ups to this push
1. **i18n for new copy** — goal/skill/plateau UI strings are English-only;
   they need `UIStrings` keys across the 6 interface languages.
2. **Manual smoke of the cluster against real Supabase** — apply the
   migration, verify `daily_skill_stats` / `goal_plans` rows, offline replay,
   and `mastered_at` hydration.
3. **Pre-existing typecheck error** in
   `src/data/korean/grammar/a1/block4.ts` (`annotation` not on
   `DialogueTurn`) — Japanese/Korean content cleanup.

### Phase 2 (production skills) — remaining
4. **EO self-assessment infrastructure** (§3.3) — model answers and rubrics
   are "not optional infrastructure"; speaking exercises exist but the
   comparison/reflection layer does not. Mostly content authoring.
5. **EE writing module** (§3.4) — paragraph-level tasks with rubric
   self-checks and annotated model paragraphs. No free written production
   exists yet.
6. **Dialect and regional content modules** (§4).

### Phase 3 (deep adaptation) — remaining
7. **Cognitive reinforcement completion** (§6) — weekly free recall,
   "explain yesterday's rule" prompts, and the **retention-debt gate**
   (block new content until overdue retrieval items are resolved — a listed
   Known Design Risk).
8. **Pattern Discovery** (§5) — inductive grammar for select content; needs
   editorially designed example sets and wrong-hypothesis handling.
9. **Tap-to-gloss lookup tracking** (§3.2) — count lookups; 5+ on the same
   word feeds it into SRS.
10. **Immersion "slow down" option** (§7) — temporary native-language support
    without resetting the CEFR assessment.

### Deployment track
11. **Google OAuth + Apple Sign-In** — Stage 2 leftover; Apple Sign-In is an
    App Store requirement, so it blocks Stage 3.
12. **Stage 3: Capacitor mobile apps** (iOS + Android) — offline queueing,
    its hardest prerequisite, is already done.
13. **Stage 4: monetisation** (Stripe web / RevenueCat mobile) — deliberately
    last, after retention is proven.

### Content
14. **Japanese** — paused; placement data is at 2 questions/level and the
    Korean grammar file has the type error above. Revisit when resuming.
