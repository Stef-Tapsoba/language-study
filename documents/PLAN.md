# language-study — Implementation Plan

*Last updated: March 26, 2026 — v2.4.0*

## Context

Building a structured, cognitively-designed language-learning app for adults — not gamified, not streak-obsessed. Built for durable mastery. The full architectural vision is documented in `Language_Study_App_Architecture_Blueprint.md`.

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
| Styling | Tailwind CSS | Mobile-first responsive with zero custom CSS needed |
| State | React Context + useState | Prototype doesn't need Redux/Zustand |
| Packages | @myorg/* via Vite path aliases | No build step for packages during dev |

---

## Package Integration

Vite aliases point directly to `packages/*/src` so packages are compiled together with the app — no need to `tsc -b` packages separately during development.

| Package | Used for |
|---|---|
| `@myorg/auth-core` | `AuthService` — session management, auto-refresh, events |
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
    │   ├── progress.ts                 ← localStorage progress (incl. masteredUnits)
    │   ├── useStatsStore.ts            ← Zustand stats store (debounced persist, SM-2 migrate)
    │   ├── srs.ts                      ← SM-2 card state + scheduling (ls:srs)
    │   ├── actions.ts                  ← compound progress mutations (Command Pattern)
    │   ├── IProgressStorage.ts         ← adapter interface (Supabase swap seam)
    │   └── LocalStorageProgressStorage.ts  ← IProgressStorage impl wrapping progress.ts
    ├── i18n/                           ← UI shell string translations (✅ implemented)
    │   ├── strings.ts                  ← UIStrings interface (~65 keys)
    │   ├── en.ts                       ← default English strings
    │   ├── es.ts, fr.ts, it.ts, ja.ts, ko.ts  ← target language UI strings
    │   └── index.ts                    ← getUI(langId, level) + fmt()
    ├── hooks/
    │   ├── useDrill.ts                 ← re-exports useDrill + types from @myorg/quiz-engine
    │   ├── useGlobalStreak.ts          ← Zustand selector hook (streak integer, avoids re-renders)
    │   ├── useDarkMode.ts              ← dark/light toggle; persists to ls:dark-mode; syncs <html class>
    │   ├── useProgressStats.ts         ← per-section done/total/pct stats
    │   ├── useCurrentUser.ts           ← display name, email, initials from auth session
    │   └── useVocabTooltip.ts          ← tooltip state for inline vocab clicks
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
    ├── components/
    │   ├── NavBar.tsx                  ← showLanguagePicker prop
    │   ├── LanguagePicker.tsx          ← dropdown with all started languages
    │   ├── Flag.tsx                    ← CDN flag image (no emoji)
    │   ├── LevelBadge.tsx
    │   ├── QuizCard.tsx
    │   ├── ProgressBar.tsx
    │   ├── LocalizedExplanation.tsx    ← renders LocalizedText by CEFR level
    │   ├── SpeakButton.tsx             ← Web Speech API one-shot speaker
    │   └── ListeningPlayer.tsx         ← TTS player with play/stop/speed
    └── pages/
        ├── LandingPage.tsx
        ├── LoginPage.tsx
        ├── RegisterPage.tsx
        ├── HomePage.tsx                ← returning user dashboard + language picker
        ├── LanguageSelectPage.tsx
        ├── DashboardPage.tsx           ← 5 tabs: Path / Study / Practice / Test / Stats
        ├── PlacementPage.tsx
        ├── UnitPage.tsx                ← grammar/vocab/verbs tabs + mini-test
        ├── GrammarPage.tsx
        ├── VocabPage.tsx
        ├── VerbsPage.tsx
        ├── FlashcardsPage.tsx
        ├── VerbDrillPage.tsx
        ├── GrammarDrillPage.tsx
        ├── ReadingPage.tsx             ← CE module (browse + read; culture= filter)
        ├── CulturePage.tsx             ← dedicated cultural insights page (amber theme)
        ├── GrammarLessonPage.tsx       ← full lesson detail (/grammar/:lessonId)
        ├── ListeningPage.tsx           ← CO module (browse + listen)
        ├── LevelTestPage.tsx
        └── ProfilePage.tsx             ← stats + language danger zone (reset/remove)
```

Planned (future):
```
        ├── SpeakingPage.tsx            ← EO module
        └── WritingPage.tsx             ← EE module
```

---

## Routes

Current:
```
/                           → LandingPage (public)
/login, /register
/home                       → HomePage (authenticated)          [protected]
/languages                  → LanguageSelectPage                [protected]
/learn/:langId              → DashboardPage                     [protected]
/learn/:langId/placement
/learn/:langId/units/:unitId → UnitPage                         [protected]
/learn/:langId/grammar
/learn/:langId/grammar/:lessonId → GrammarLessonPage
/learn/:langId/vocab
/learn/:langId/verbs
/learn/:langId/flashcards
/learn/:langId/verb-drill
/learn/:langId/grammar-drill
/learn/:langId/reading       → ReadingPage                      [protected]
/learn/:langId/listening     → ListeningPage                    [protected]
/learn/:langId/culture       → CulturePage                      [protected]
/learn/:langId/level-test
/profile
```

Planned (future skill modules):
```
/learn/:langId/speaking
/learn/:langId/writing
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

// Groups grammar/vocab/verbs into a sequential curriculum unit within a level.
interface LessonUnit {
  id: string                  // e.g. "es-a1-u1"
  level: CEFRLevel
  order: number               // sequential within the level
  title: string
  description: LocalizedText  // ← LocalizedText (not plain string)
  grammarIds: string[]
  vocabIds: string[]
  verbIds: string[]
  testQuestions: QuizQuestion[]  // 5–8 questions to test out of this unit
  cultureIds?: string[]          // optional CultureEpisode.id — unlocked post-unit
  readingIds?: string[]          // optional ReadingPassage.id — linked to this unit
  listeningIds?: string[]        // optional ListeningExercise.id — linked to this unit
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
}

// Progress (persisted in localStorage)
interface UserProgress {
  userId: string
  selectedLanguage: string | null
  levels: Record<string, CEFRLevel>
  completedLessons: Record<string, string[]>
  masteredUnits: Record<string, string[]>
}
```

---

## Auth Flow (localStorage mock)

`mockAuthApi.ts` implements the `AuthApi` interface from `@myorg/auth-core`:
- Users stored as `JSON.stringify(User[])` in `localStorage["ls:users"]`
- `login()` — finds matching user, returns a fake Session with `accessToken = btoa(email)`, `expiresAt = now + 8h`
- `refresh()` — re-issues a fresh session; never expires in prototype
- `AuthContext` creates one `AuthService(mockAuthApi, new LocalStorageAdapter("ls"))` and exposes it

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

See `CONTENT_RESTRUCTURE_PLAN.md` for the full per-language curriculum breakdown.

| Language | Levels | B1 Units | B2 Units | C1 Units | Reading | Listening | Culture |
|---|---|---|---|---|---|---|---|
| Spanish | A1–C1 | 9 | 8 | 6 | ✅ A1+A2+B2+C1 | ✅ A1+A2+B2+C1 | ✅ A1 (4 ep) + A2 (3 ep) |
| French | A1–C1 | 10 | 8 | 6 | ✅ A1(7)+A2+B2+C1 | ✅ A1(7)+A2+B2+C1 | ✅ A1 (4 ep) + A2 (3 ep) |
| Italian | A1–C1 | 8 | 8 | 6 | ✅ A1+A2+B2+C1 | ✅ A1+A2+B2+C1 | ✅ A1 (4 ep) + A2 (3 ep) |
| Japanese | A1–C1 | 9 | 8 | 6 | ✅ A1+A2+B2+C1 | ✅ A1+A2+B2+C1 | ✅ A1 (4 ep) + A2 (3 ep) |
| Korean | A1–C1 | 8 | 8 | 6 | ✅ A1+A2+B2+C1 | ✅ A1+A2+B2+C1 | ✅ A1 (4 ep) + A2 (3 ep) |

All 5 languages have full content at every CEFR level (A1 → C1). A2 grammar/vocab/units overhauled to 20 grammar lessons, 20 units, and 60+ vocab items per language. Reading and listening passages exist at A1, A2, B2, and C1 (B1 reading/listening is roadmap). Culture episodes exist at A1 (4 per language) and A2 (3 per language) for all 5 languages; split into per-episode files under `culture/a1/` and `culture/a2/` subfolders. French A1 has 7 reading passages and 7 listening exercises (fullest A1 coverage).

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

Next (v2.5.0 planned):
  - Web MVP deployment to Vercel (localStorage only — no backend needed)
  - Japanese and Korean A1 curriculum parity (inline vocab, unit wiring)
  - A2 reading/listening content for all 5 languages
  - B1 reading/listening passages for all 5 languages
  - JSON progress export/import improvements (conflict UI, partial restore)

Phase 3     — B1 reading/listening passages for all 5 languages
             Cognitive reinforcement: spaced retrieval quizzes, weekly free recall
Phase 4     — EO + EE: speaking prompts + writing tasks (self-assessed)
Phase 5     — Pattern Discovery mode
Phase 6 (Stage 2) — Supabase backend + auth; swap IProgressStorage adapter;
             replace repo.ts with async DB calls
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
1. Register → Login → Pick Spanish → Placement test → Dashboard
2. Dashboard shows ordered A1 unit list with lock/complete states
3. Open Unit 1 → tabs for grammar / vocab / verbs / test
4. Pass unit test → Unit 2 unlocks
5. Take Level Test → pass or fail
6. Works on mobile viewport (DevTools → iPhone 14 size)
