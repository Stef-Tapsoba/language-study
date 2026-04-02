# language-study — Implementation Plan

*Last updated: April 2, 2026 — v2.5.x (unit reinforcement, tagging, UI modernization, smart exercises)*

## Context

Building a structured, cognitively-designed language-learning app for adults — not gamified, not streak-obsessed. Built for durable mastery. The technical architecture is documented in `ARCHITECTURE.md`. The full product philosophy and deployment roadmap are in `Language_Study_App_Architecture_Blueprint.md`.

This document tracks the current stack, types, file structure, routes, and feature plans.

**User choices:**
- Languages: Spanish, French, Italian, Japanese, Korean
- Backend: 100% localStorage for prototype; real backend deferred
- Levels: CEFR — A1 → A2 → B1 → B2 → C1
- Native language: English only (locked for prototype + early production)

---

## Stack

| Concern | Choice | Reason |
|---|---|---|
| UI | React 18 + TypeScript | Required by user |
| Build | Vite | Fast DX; easy alias config for local packages |
| Routing | React Router v6 | Standard |
| Styling | Tailwind CSS + shadcn/ui | Mobile-first responsive |
| State | Zustand (stats) + localStorage (progress, SRS) | Behind adapter seam — swappable to Supabase |
| Packages | @myorg/* via Vite path aliases | No build step for packages during dev |

---

## Package Integration

Vite aliases point directly to `packages/*/src` so packages are compiled together with the app — no need to `tsc -b` packages separately during development.

| Package | Used for |
|---|---|
| `@myorg/auth-core` | `AuthService` — session management, auto-refresh, events |
| `@myorg/quiz-engine` | `useDrill` hook powering all drill pages; keyboard shortcuts (1–4, Enter) |
| `@myorg/srs` | SM-2 algorithm — `SRSCardState`, `calcNextReview`, `INITIAL_STATE` |
| `@myorg/tts` | Web Speech API wrapper — BCP-47 language mapping, graceful no-op fallback |
| `@myorg/storage` | `LocalStorageAdapter` — concrete storage for AuthService |
| `@myorg/validation` | Login + register form validation |
| `@myorg/theme-tokens` | CSS custom properties (import the generated CSS files) |
| `@myorg/event-bus` | `EventBus<AppEvents>` — route to `/login` on `auth:expired` |
| `@myorg/api-client` | Wired up but unused until real backend; mockAuthApi bypasses it |

---

## File Structure

```
language-study/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── src/
    ├── main.tsx
    ├── App.tsx                         ← router + context providers
    ├── types/
    │   └── index.ts                    ← all shared interfaces (see Key Types below)
    ├── auth/
    │   ├── AuthContext.tsx
    │   ├── ProtectedRoute.tsx
    │   └── mockAuthApi.ts
    ├── store/
    │   ├── registry.ts                 ← DI container: holds IProgressStorage/ISRSStorage/IStatsStorage instances
    │   ├── progress.ts                 ← localStorage progress (user-scoped key ls:progress:{userId})
    │   ├── progressUtils.ts            ← pure isUnitUnlocked() (no storage imports)
    │   ├── useStatsStore.ts            ← Zustand stats store (write-through to IStatsStorage)
    │   ├── srs.ts                      ← SM-2 card state + scheduling (ls:srs)
    │   ├── srs-migrate.ts              ← versioned SRS schema migration (v1→v2; { schemaVersion, langs } shape)
    │   ├── actions.ts                  ← compound progress mutations (Command Pattern)
    │   ├── merge.ts                    ← smart merge helpers for progress/SRS/stats import
    │   ├── preferences.ts              ← UI preferences (ls:onboarded:{langId}, ls:tts-autoplay)
    │   ├── IProgressStorage.ts         ← adapter interface (Supabase swap seam)
    │   ├── ISRSStorage.ts              ← SRS adapter interface (incl. hydrate())
    │   ├── IStatsStorage.ts            ← stats adapter interface (incl. flush())
    │   ├── LocalStorageProgressStorage.ts  ← IProgressStorage impl wrapping progress.ts
    │   ├── LocalStorageSRSStorage.ts   ← ISRSStorage impl; saves { schemaVersion, langs } on disk
    │   └── LocalStorageStatsStorage.ts ← IStatsStorage impl
    ├── i18n/                           ← UI shell string translations (✅ implemented)
    │   ├── strings.ts                  ← UIStrings interface (~65 keys)
    │   ├── en.ts                       ← default English strings
    │   ├── es.ts, fr.ts, it.ts, ja.ts, ko.ts  ← target language UI strings
    │   └── index.ts                    ← getUI(langId, level) + fmt()
    ├── context/
    │   └── ProgressContext.tsx         ← central React state; all mutations route through registry
    ├── hooks/
    │   ├── useDrill.ts                 ← re-exports useDrill + types from @myorg/quiz-engine
    │   ├── useGlobalStreak.ts          ← Zustand selector hook (streak integer, avoids re-renders)
    │   ├── useDarkMode.ts              ← dark/light toggle; persists to ls:dark-mode; syncs <html class>
    │   ├── useProgressStats.ts         ← per-section done/total/pct stats
    │   ├── useCurrentUser.ts           ← display name, email, initials from auth session
    │   ├── useVocabTooltip.ts          ← tooltip state for inline vocab clicks
    │   ├── useAppBootstrap.ts          ← sequences hydration on login; isReady = initialized && !isHydrating
    │   ├── useContentQuery.ts          ← data-fetching hook for exercise shell
    │   └── useSpeechRecognition.ts     ← Web Speech API wrapper (idle → listening → done state machine)
    ├── utils/
    │   ├── tts.ts                      ← speak() + TTS_LANG_MAP (Web Speech API)
    │   ├── answerMatch.ts              ← normalizeAnswer(), answersMatch() (accent-insensitive)
    │   └── localizedText.ts            ← toLocalized(), resolveDisplay(), resolvePrimary()
    ├── data/
    │   ├── languages.ts                ← language registry (id, name, nativeName, script)
    │   ├── modules.ts                  ← getModule(langId) registry
    │   ├── repo.ts                     ← named query functions over module cache (Repository Pattern)
    │   ├── spanish/                    ← ✅ full A1–C1 content + reading/listening at A1/A2/B2/C1
    │   │   ├── index.ts                ← pure assembler
    │   │   ├── grammar/a1.ts, a2.ts, b1.ts, b2.ts, c1.ts
    │   │   ├── vocab/a1.ts, a2.ts, b1.ts, b2.ts, c1.ts
    │   │   ├── verbs/a1.ts, a2.ts, b1.ts, b2.ts, c1.ts
    │   │   ├── units/a1.ts, a2.ts, b1.ts, b2.ts, c1.ts
    │   │   ├── reading/a1.ts, a2.ts, b2.ts, c1.ts
    │   │   ├── listening/a1.ts, a2.ts, b2.ts, c1.ts
    │   │   └── questions/placement.ts, level-tests.ts
    │   ├── french/                     ← ✅ full A1–C1 content (same file structure)
    │   ├── italian/                    ← ✅ full A1–C1 content (same file structure)
    │   ├── japanese/                   ← ✅ full A1–C1 content (+ romanized fields throughout)
    │   └── korean/                     ← ✅ full A1–C1 content (+ romanized fields throughout)
    ├── exerciseTypes/                  ← registry-based exercise type system
    │   ├── registry.ts                 ← registerExerciseType() + ExerciseComponentProps type
    │   ├── index.ts                    ← imports all exercise types (side-effect registrations)
    │   ├── cloze.ts, dictation.ts, dialogueCompletion.ts, errorCorrection.ts
    │   ├── scriptReading.ts, sentenceScramble.ts, vocabInContext.ts, vocabMatching.ts
    │   └── speaking.ts                 ← EO module (Web Speech API recognition)
    ├── components/
    │   ├── NavBar.tsx                  ← showLanguagePicker prop
    │   ├── LanguagePicker.tsx          ← dropdown with all started languages
    │   ├── Flag.tsx                    ← CDN flag image (no emoji)
    │   ├── LevelBadge.tsx
    │   ├── QuizCard.tsx
    │   ├── ProgressBar.tsx
    │   ├── LocalizedExplanation.tsx    ← renders LocalizedText by CEFR level
    │   ├── SpeakButton.tsx             ← Web Speech API one-shot speaker
    │   ├── ListeningPlayer.tsx         ← TTS player with play/stop/speed
    │   ├── ExerciseShell.tsx           ← generic shell wrapping any registered exercise type
    │   └── StatsTab.tsx                ← 14-day CSS bar chart + streak/accuracy stats
    └── pages/
        ├── LandingPage.tsx
        ├── LoginPage.tsx
        ├── RegisterPage.tsx
        ├── HomePage.tsx                ← returning user dashboard + language picker
        ├── LanguageSelectPage.tsx
        ├── DashboardPage.tsx           ← 5 tabs: Path / Study / Practice / Test / Stats
        ├── PlacementPage.tsx
        ├── UnitPage.tsx                ← grammar/vocab/verbs tabs + mini-test (+ reading/listening/culture pills)
        ├── GrammarPage.tsx
        ├── VocabPage.tsx
        ├── VerbsPage.tsx
        ├── FlashcardsPage.tsx          ← SRS deck gated behind isHydrating
        ├── VerbDrillPage.tsx
        ├── GrammarDrillPage.tsx
        ├── ReadingPage.tsx             ← CE module (browse + read; culture= filter)
        ├── CulturePage.tsx             ← dedicated cultural insights page (amber theme)
        ├── GrammarLessonPage.tsx       ← full lesson detail (/grammar/:lessonId)
        ├── ListeningPage.tsx           ← CO module (browse + listen)
        ├── LevelTestPage.tsx
        ├── ProfilePage.tsx             ← stats + language danger zone (reset/remove)
        ├── ClozePage.tsx               ← fill-in-the-blank from reading passages
        ├── SentenceScramblePage.tsx    ← token-reorder exercise
        ├── VocabMatchingPage.tsx       ← match word↔translation pairs (max 5 rounds)
        ├── VocabInContextPage.tsx      ← choose correct vocab in a sentence
        ├── DictationPage.tsx           ← type what you hear (TTS + strict match)
        ├── DialogueCompletionPage.tsx  ← choose the next dialogue line
        ├── ErrorCorrectionPage.tsx     ← spot and fix the error in a sentence
        ├── ScriptReadingPage.tsx       ← read a script aloud (for Japanese/Korean kana)
        ├── CategoryReadingPage.tsx     ← filtered reading browse by passage category
        └── SpeakingPage.tsx            ← EO: TTS plays phrase → user speaks → Speech API evaluates
```

Planned (future):
```
        └── WritingPage.tsx             ← EE module (self-assessed constrained writing)
```

---

## Routes

Current:
```
/                                → LandingPage (public)
/login, /register
/home                            → HomePage (authenticated)          [protected]
/languages                       → LanguageSelectPage                [protected]
/learn/:langId                   → DashboardPage                     [protected]
/learn/:langId/placement
/learn/:langId/units/:unitId     → UnitPage                         [protected]
/learn/:langId/grammar
/learn/:langId/grammar/:lessonId → GrammarLessonPage
/learn/:langId/vocab
/learn/:langId/verbs
/learn/:langId/flashcards
/learn/:langId/verb-drill
/learn/:langId/grammar-drill
/learn/:langId/reading           → ReadingPage                      [protected]
/learn/:langId/listening         → ListeningPage                    [protected]
/learn/:langId/culture           → CulturePage                      [protected]
/learn/:langId/level-test
/learn/:langId/exercise/:exerciseTypeId → ExerciseShell (registry-dispatched)
/learn/:langId/goal      → GoalPickerPage (personalized learning path selection)
/learn/:langId/review    → ReviewPage (break-return SRS review session)
/profile
```

All exercise types routed through `ExerciseShell` via `:exerciseTypeId`:
- `cloze`, `dictation`, `dialogue-completion`, `error-correction`
- `script-reading`, `sentence-scramble`, `vocab-in-context`, `vocab-matching`
- `speaking` (EO — Web Speech API)

`ExerciseShell` supports URL params for reinforcement scoping:
- `?unitId=` — scopes content to that unit's grammar/vocab
- `?lessonId=` — scopes grammar exercises to specific lesson examples
- `?section=grammar|vocab|verbs` — records reinforcement completion
- `?returnTo=` — navigates back after session done

Planned (future):
```
/learn/:langId/exercise/writing  ← EE module
```

---

## Key Types (`src/types/index.ts`)

```typescript
type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1"

interface Language {
  id: string
  name: string
  flag: string
  script: "latin" | "hiragana-kanji" | "hangul"
}

// Used for any text that participates in the immersion progression.
// native = always English (locked for prototype + early production).
// target is optional — falls back to native if not yet written.
interface LocalizedText {
  native: string    // English
  target?: string   // the language being studied
}

interface GrammarLesson {
  id: string
  language?: string             // e.g. "fr" — optional now, required after Supabase migration
  level: CEFRLevel
  title: string
  explanation: LocalizedText    // ← was plain string
  examples: { native: string; romanized?: string; translation: string }[]
  inlineVocab?: { word: string; translation: string }[]
}

interface VocabItem {
  id: string
  language?: string
  level: CEFRLevel
  word: string
  romanized?: string
  translation: string
  category: string
  example: { native: string; romanized?: string; translation: string }
}

interface Verb {
  id: string
  language?: string
  level: CEFRLevel
  infinitive: string
  romanized?: string
  meaning: string
  conjugations: {
    tense: string
    forms: { pronoun: string; form: string; romanized?: string }[]
  }[]
}

interface QuizQuestion {
  id: string
  level: CEFRLevel
  prompt: string
  options: string[]
  answer: string
}

// Content tagging — for personalized learning paths
type TopicTag = "identity"|"greetings"|"food"|"shopping"|"travel"|"social"|
                "home"|"health"|"work"|"culture"|"numbers"|"nature"
type FunctionTag = "fn:describing"|"fn:asking-questions"|"fn:expressing-time"|...

// Groups grammar/vocab/verbs into a sequential curriculum unit within a level.
interface LessonUnit {
  id: string                  // e.g. "es-a1-u1"
  level: CEFRLevel
  order: number               // sequential within the level
  title: string
  description: LocalizedText
  grammarIds: string[]
  vocabIds: string[]
  verbIds: string[]
  testQuestions: QuizQuestion[]
  cultureIds?: string[]
  readingIds?: string[]
  listeningIds?: string[]
  vocabUnlockThreshold?: number   // min learned before vocab exercise unlocks (default 5)
  topicTags?: TopicTag[]          // 1-3 tags; merged from unitTags.ts via repo.getUnitsForLevel()
}

// Reinforcement exercise completion (stored in UserProgress.completedReinforcement)
interface UnitReinforcementState {
  grammarLessonIds: string[]  // lesson IDs whose paired exercise is done
  vocab?: true                // vocab section exercise done
  verbs?: true                // verbs section exercise done
}

export type PassageCategory = "everyday" | "culture" | "history" | "literature" | "dialogue"

interface VocabGloss {
  word: string          // target-language word as it appears in the passage
  translation: string   // English gloss
  romanized?: string
}

interface ReadingPassage {
  id: string
  language?: string
  level: CEFRLevel
  category: PassageCategory
  title: string
  body: LocalizedText   // target = target-language passage; native = English translation
  vocabGloss: VocabGloss[]
  questions: QuizQuestion[]
}

interface ListeningExercise {
  id: string
  language?: string
  level: CEFRLevel
  title: string
  script: string           // target language — spoken via TTS
  translation: string      // English — toggle reference
  dialogue?: DialogueLine[] // structured speaker turns (optional)
  questions: QuizQuestion[]
}

interface LanguageModule {
  grammar: GrammarLesson[]
  vocab: VocabItem[]
  verbs: Verb[]
  units?: LessonUnit[]            // optional; all 5 languages have it
  placementQuestions: QuizQuestion[]
  levelQuestions: QuizQuestion[]
  readingPassages?: ReadingPassage[]
  listeningExercises?: ListeningExercise[]
  speakingPrompts?: SpeakingPrompt[]  // EO module; per-level via getSpeakingForLevel()
}

// Speaking (EO — Expression Orale)
interface SpeakingPrompt {
  id: string
  language?: string
  level: CEFRLevel
  cue: string              // English instruction / scenario
  targetPhrase: string     // target-language phrase to speak
  romanized?: string       // romanization for Japanese/Korean
}

// Progress (persisted in localStorage under ls:progress:{userId})
interface UserProgress {
  schemaVersion: 2         // v1→v2: completedReinforcement added (no migration needed)
  userId?: string
  selectedLanguage: string | null
  levels: Record<string, CEFRLevel>
  completedLessons: Record<string, string[]>
  masteredUnits: Record<string, string[]>
  completedReinforcement?: Record<string, Record<string, UnitReinforcementState>>
  // shape: { [langId]: { [unitId]: UnitReinforcementState } }
}
```

---

## Auth Flow (localStorage mock)

`mockAuthApi.ts` implements the `AuthApi` interface from `@myorg/auth-core`:
- Users stored as `JSON.stringify(User[])` in `localStorage["ls:users"]`
- `login()` — finds matching user, returns a fake Session with `accessToken = btoa(email)`, `expiresAt = now + 8h`
- `refresh()` — re-issues a fresh session; never expires in prototype
- `AuthContext` creates one `AuthService(mockAuthApi, new LocalStorageAdapter("ls"))` and exposes it
- `authRegistry.ts` — selects mock vs real AuthApi; `VITE_DEBUG=true` bypasses auth entirely (all units unlocked)

---

## Placement Test Logic

- 10 questions, 2 per level (A1, A2, B1, B2, C1-preview)
- Score table: 0–4 → A1, 5–6 → A2, 7–8 → B1, 9–10 → B2
- After scoring, user sees the suggestion and can confirm or manually pick any level

## Unit Progression Logic

- Unit 1 is always unlocked
- Unit N+1 unlocks when unit N is mastered
- Mastery = pass the unit mini-test (5–8 questions, threshold TBD) OR complete all content in the unit
- Test-out: user can take the mini-test at any time without working through the unit
- Mastered units remain accessible after test-out

## Level Test Logic

- 15 questions from the current level's content
- Pass threshold: 80% (≥ 12/15)
- On pass: advance one level, save to progress store
- On fail: show score and encourage more practice

---

## Immersion Progression System

The app's interface language gradually shifts from English toward the target language as the user advances. This is designed to build cognitive resilience without overwhelming beginners.

### What changes at each level

| Layer | A1 | A2 | B1 | B2+ |
|---|---|---|---|---|
| Grammar explanations | English only | Both (English primary) | Both (target primary) | Target only |
| Unit/lesson descriptions | English | Both | Target | Target |
| Activity instructions | English | Target | Target | Target |
| UI shell (nav, buttons) | English | Target | Target | Target |
| Feedback messages | English | Target | Target | Target |
| Example sentences | Target always | Target always | Target always | Target always |
| Vocab: target word | Target always | Target always | Target always | Target always |
| Vocab: English gloss | Always shown | Always shown | On hover/toggle | Hidden |
| System/error messages | English always | English always | English always | English always |

### Display logic

```ts
type ImmersionView = 'native-only' | 'bilingual-native' | 'bilingual-target' | 'target-only'

function getImmersionView(level: CEFRLevel): ImmersionView {
  switch (level) {
    case 'A1': return 'native-only'
    case 'A2': return 'bilingual-native'
    case 'B1': return 'bilingual-target'
    default:   return 'target-only'      // B2, C1
  }
}
```

The `<LocalizedText>` component consumes this and renders accordingly:
- `native-only` → show `text.native`
- `bilingual-native` → show `text.native` large, `text.target` below in muted style
- `bilingual-target` → show `text.target` large, `text.native` as collapsible toggle
- `target-only` → show `text.target`

If `text.target` is undefined, always fall back to `text.native` (safe for incremental authoring).

### UI shell strings

`src/i18n/en.ts` defines the shape. Each target language file (`es.ts`, `fr.ts`, etc.) must match it. At A1 the app uses `en.ts`; at A2+ it switches to the active language's translation file.

---

## Content Depth (Current State)

All 5 languages have A1, A2, and B1 reading/listening fully built out. B2–C1 content is partial. See `ARCHITECTURE.md §11` for full content status.

| Content type | A1 | A2 | B1 | B2+ |
|---|---|---|---|---|
| Grammar lessons | ✅ 35–42/lang | ✅ 20–25/lang | ✅ | Partial |
| Vocab items | ✅ 174–280/lang | ✅ 130–164/lang | ✅ | Partial |
| Units (path cards) | ✅ 14–16/lang | ✅ 20/lang | ✅ | Partial |
| Culture episodes | ✅ 3–4/lang | ✅ 3/lang | Pending | Pending |
| Reading passages | ✅ 2+/lang | ✅ 3–5/lang | ✅ 3/lang | Partial |
| Listening exercises | ✅ 2+/lang | ✅ 3–5/lang | ✅ 3/lang | Partial |
| Placement test | ✅ | shared | shared | shared |
| Level test | ✅ | ✅ | ✅ | ✅ |

French A1 has the fullest reading/listening coverage (7 passages + 7 exercises).

---

## Architecture Vision (Skill Modules)

The blueprint (`Language_Study_App_Architecture_Blueprint.md`) defines four skill modules beyond grammar/vocab. These are planned for future phases. AI/ML features from the blueprint are deferred indefinitely.

### CE — Reading (`ReadingPassage`)
Articles, cultural essays, dialogue texts with inline vocab highlighting and comprehension questions. Tied to units (vocab from unit N appears in a reading passage).

### CO — Listening (`ListeningTrack`)
Structured dialogues with comprehension and inference questions. Audio optional — can start as formatted transcripts. Field `audioUrl?: string` populated when audio exists.

### EO — Speaking (`SpeakingPrompt`)
Structured oral prompts (repetition, scenario, reaction, debate) with model answers. Self-assessed — no AI scoring needed. User speaks aloud, reveals model answer, self-marks.

### EE — Writing (`WritingTask`)
Constrained writing prompts with scaffolding (sentence starters, word banks) and model answers. Self-assessed against model. Rule-based hints for common errors at lower levels.

### Cultural Immersion
History timelines, regional/dialect notes, cultural essays — tagged `cultural: true` on `ReadingPassage` and `ListeningTrack`. Browseable as a standalone section and referenced from unit prompts.

### Pattern Discovery
Alternative entry to grammar lessons: present examples → user hypothesises the rule → delayed reveal. Toggle between "Discovery mode" and "Direct explanation mode" on any grammar lesson.

### Phased delivery
```
✅ Phase 1  — Core engine: unit progression, all 5 languages restructured, immersion progression
✅ Phase 2  — CE + CO: ReadingPage + ListeningPage + Spanish proof-of-concept content
             NavBar LanguagePicker, ProfilePage redesign, Flag CDN images, tab persistence
✅ v2.0.0   — SRS/SM-2 flashcards, TTS (Web Speech API), study statistics + global streak,
             CE+CO content for all 5 languages, standardised file headers
✅ v2.1.0   — B2+C1 full content for all 5 languages; Culture page (dedicated CulturePage),
             Grammar lesson detail page (/grammar/:lessonId), Wrong answer review in
             drills and level test
✅ v2.2.0   — A2 content expansion + gap fixes; A1 content expansion; JSON progress export;
             lazy-load language data chunks; Netlify SPA redirect rule;
             B1 full content expansion (grammar/vocab/verbs/units across all 5 languages);
             B2+C1 additional content expansion (mixed conditionals, register mastery,
             advanced discourse connectors, C1 academic constructions);
             @myorg/quiz-engine + @myorg/tts + @myorg/srs package wiring;
             Zustand stats store migration; shadcn/ui infrastructure; Vitest unit tests;
             performance + architecture fixes (useGlobalStreak, GPU progress bars);
             back navigation redesign (explicit backTo routes)
✅ v2.3.0   — French A1 complete CEFR curriculum (vocab gap fill, reading/listening/culture,
             unit wiring); Spanish + Italian A1 curriculum completion (same scope);
             Culture post-unit unlock cards on TestDoneScreen;
             Fill-in-the-blank mode on GrammarDrillPage;
             Architecture patterns: Repository (repo.ts), Command (actions.ts),
             Adapter (IProgressStorage + LocalStorageProgressStorage);
             Repo + Actions wired across all pages;
             UI polish: Plus Jakarta Sans, warm background, gradient ProgressBar with animation,
             card-lift/tab-fade, section colors unified via sectionConfig.ts;
             Section-coloured unit tabs (Grammar=green, Vocab=amber, Verbs=red, Test=violet);
             Progress import with smart merge (levels preserved, completions unioned);
             Dark mode (NavBar toggle, CSS variables, dark: variants on all pages/components)

✅ v2.4.0   — A2 curriculum overhaul: all 5 languages expanded to 20 grammar lessons, 20 units,
             60+ vocab items per language; 4 A1 duplicate grammar lessons replaced with
             genuine A2/JLPT-N4/TOPIK-3 content (Japanese + Korean); A2 culture episodes
             added for all 5 languages (3 per language); culture a2/ subfolder structure
             adopted across all 5 languages (matching A1 pattern)

✅ v2.5.0   — Exercise type registry system (ExerciseShell + exerciseTypes/ registry pattern);
             8 new exercise pages wired through /exercise/:exerciseTypeId route:
             ClozePage, SentenceScramblePage, VocabMatchingPage, VocabInContextPage,
             DictationPage, DialogueCompletionPage, ErrorCorrectionPage, ScriptReadingPage;
             EO module (Speaking): SpeakingPage + useSpeechRecognition hook +
             Web Speech API single-utterance evaluation via answerMatches("strict");
             Debug mode: VITE_DEBUG=true bypasses auth + unlocks all units (authRegistry.ts);
             Reading/listening/culture pills on unit rows and test start screen;
             Pre-Supabase architectural hardening (ARCH_REVIEW_MIGRATION.md):
               • Adapter seam complete: ISRSStorage.hydrate(), IStatsStorage.flush()
               • SRS schema migration extracted to srs-migrate.ts (v1→v2; { schemaVersion, langs })
               • Merge logic extracted to merge.ts (mergeProgress/mergeSRS/mergeStats)
               • ProgressContext: all mutations async/await, mutationError state, refreshProgress()
               • useAppBootstrap: isReady = initialized && !isHydrating (correct hydration gate)
               • resetAllStats() race fixed: capture keys synchronously, wipe storage, then clear Zustand
               • importProgressSnapshot: re-hydrates Zustand stats store immediately after write
               • registry.ts: _resetForTests() escape hatch for test adapter injection
               • SRSStore type: { schemaVersion, langs } replaces unsafe index-signature union
             Full Supabase migration plan: documents/SUPABASE_MIGRATION.md

✅ v2.5.x (2026-04-02) — Unit reinforcement layer + smart exercise system + UI overhaul:
  • Unit reinforcement: grammar sequential list (per-lesson exercises), vocab practice section,
    soft test gate with "start test anyway", completion tracking (UnitReinforcementState)
  • Smart exercise config: ExerciseConfig (context-aware sizing), selectItems() 4-tier SRS selection
  • Break-return system: useBreakDetection, ReviewPromptCard (3 severity variants), /review route
  • Cross-unit SRS review: prior-unit due vocab silently injected when ≥4 units mastered
  • Content tagging: TopicTag/FunctionTag types, 200 A1+A2 unit assignments (all 5 languages)
  • Personalized learning goals: GoalPickerPage, 4 profiles (traveller/social/culture/general),
    goal-sorted Path tab, "For you" badges, inserted into new-user onboarding flow
  • UI modernization: Button, Badge, Progress, Card, Sheet (mobile NavBar), Input, Avatar, Skeleton,
    canvas-confetti, lucide-react — shadcn adopted consistently across all pages
  • Sound feedback: playCorrect/playWrong/playLevelUp (Web Audio API, no asset files)
  • Level-up overlay redesigned: gradient Dialog, confetti burst, 4-note fanfare
  • Pronunciation lessons → exerciseType: "dictation" (es/fr/it A1)
  • Unit scoping: exercises filtered to lesson/unit content (not full A1 corpus)
  • Light mode as default for new users; dark mode respects stored preference only
  • Onboarding banner auto-dismisses on first tab switch
  • 618 tests across 29 files (up from 467/21)

Next:
  - hydrateError / mutationError: retry banner in UI (currently defined but not consumed)
  - Verb tab reinforcement (deferred from reinforcement sprint)
  - Optional exercise unlock chain in unit sequential list
  - JSON progress import: partial restore UI (full conflict resolution, not just merge warning)

Phase 3 content — B1 reading/listening/culture content expansion (all 5 languages)
Phase 4     — EE: writing tasks (self-assessed prompt + model answer)
             Cognitive reinforcement: spaced retrieval quizzes, weekly free recall
Phase 5     — Pattern Discovery mode
Stage 2 (Supabase) — Swap IProgressStorage/ISRSStorage/IStatsStorage adapters;
             replace repo.ts with async DB calls; RLS policies + RPCs per SUPABASE_MIGRATION.md
             NOTE: Architecture is seam-ready. Migrate once A1/A2 content + auth is stable.
```

---

## Tailwind + Theme Tokens

- Import `@myorg/theme-tokens` CSS files in `main.tsx`
- Tailwind config extended to read the CSS variables as theme values where appropriate
- Responsive breakpoints: `sm` (480px) = phone landscape, `md` (768px) = tablet, `lg` (1024px) = desktop
- All pages are single-column on mobile, can expand on md+

---

## Verification

```bash
cd language-study
npm install
npm run dev     # → http://localhost:5173
```

Happy path:
1. Register → Login → Pick Spanish → Placement test → **Goal picker** → Dashboard
2. Dashboard shows A1 unit list sorted by goal relevance ("For you" badges on matches)
3. Open Unit 1 → grammar sequential list (lesson rows + exercise rows) + vocab practice
4. Complete grammar lesson → exercise row unlocks → do exercise → exercise marked done
5. Test tab shows soft gate checklist if exercises incomplete; "Start test anyway" always visible
6. Pass unit test → Unit 2 unlocks
7. Take Level Test → pass → confetti + fanfare → advance
8. Break-return: come back after 7+ days → ReviewPromptCard in Path tab → /review route
9. Works on mobile viewport (Sheet drawer nav on mobile)
