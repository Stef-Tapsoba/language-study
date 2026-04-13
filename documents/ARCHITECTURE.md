# Language Study App — Technical Architecture

**Version: 2.4**
**Last updated: March 2026**

> For product philosophy, learning model, and deployment roadmap see `Language_Study_App_Architecture_Blueprint.md`.
> For content file naming conventions see `src/data/CONTENT_CONVENTIONS.md`.

---

## 1. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| UI framework | React 18 | Functional components + hooks throughout |
| Language | TypeScript (strict) | |
| Build tool | Vite | Dev server + production bundler |
| Styling | Tailwind CSS v3 | `components.json` for shadcn/ui primitives |
| Routing | React Router v6 | `createBrowserRouter`, file-per-page |
| State | Zustand | Reactive selectors; no Redux |
| Storage (Stage 1) | localStorage | Behind Adapter seam — swappable |
| SRS algorithm | SM-2 | `@myorg/srs` package |
| TTS | Web Speech API | `@myorg/tts` package |
| Quiz engine | custom `useDrill` hook | `@myorg/quiz-engine` package |
| Testing | Vitest + React Testing Library | |
| Hosting (Stage 1) | Vercel / Netlify | Static export, no server |

---

## 2. Repository Layout

```
language-study/
  src/
    App.tsx               — Router definition, lazy page imports
    main.tsx              — React root, no bootstrap side-effects
    global.d.ts           — declare const __APP_VERSION__: string
    index.css             — Tailwind directives + CSS custom properties
    auth/                 — Auth context + guards
    components/           — Shared UI components
    context/              — React context providers
    data/                 — Content + data-access layer (see §4)
    domain/               — Pure domain rules: unit unlock, exercise config, reinforcement (see §5)
    hooks/                — App-level custom hooks (re-exports + compositions)
    i18n/                 — UI string translations (not content)
    lib/                  — shadcn/ui utilities
    pages/                — One file per route, thin orchestration layer
    store/                — Storage adapters, Zustand stores, use-case actions (see §6)
    types/                — Shared TypeScript interfaces
    utils/                — Pure utility functions (shuffle, answer matching, TTS, sound)

  packages/               — Internal monorepo packages (see §7)
  documents/              — Architecture + content guides
  public/                 — Static assets
  vite.config.ts
  tailwind.config.ts
  tsconfig.json
  vitest.config.ts
```

---

## 3. Routing

All routes are defined in `src/App.tsx`. Protected routes are wrapped in an auth guard component. Language-specific routes carry `:langId` as a URL param.

Key route groups:
- `/` — Public landing page
- `/login`, `/register` — Auth pages
- `/home` — Language picker (authenticated)
- `/:langId/dashboard` — Per-language progress dashboard (tabs: Path, Study, Stats, Test)
- `/:langId/unit/:unitId` — Unit lesson + quiz
- `/:langId/flashcards` — SRS flashcard session
- `/:langId/grammar-drill`, `/:langId/verb-drill` — Practice drills
- `/:langId/grammar/:lessonId` — Individual grammar lesson
- `/:langId/placement` — Placement test
- `/:langId/level-test` — Level advancement test
- `/:langId/reading`, `/:langId/listening`, `/:langId/culture` — Passive skill pages
- `/profile` — User profile + progress export/import

---

## 4. Data Layer

### 4.1 Content Assembly Pipeline

Content lives in `src/data/{langId}/` as TypeScript files and is assembled at build time into a `LanguageModule` object.

```
src/data/{langId}/
  grammar/
    a1/           — subfolder when ≥ 5 lessons or > ~200 lines
      index.ts    — re-exports as a1Grammar: GrammarLesson[]
      *.ts        — thematic lesson files
    a2/           — same pattern
  vocab/a1.ts, a2.ts, ...
  verbs/a1.ts, a2.ts, ...
  units/a1.ts, a2.ts, ...
  culture/
    a1/           — per-episode files: {lang}-c-a1-{n}.ts
      index.ts
    a2/
  reading/a1.ts, a2.ts, ...
  listening/a1.ts, a2.ts, ...
  questions/
    placement.ts  — export: placementQuestions
    level-tests.ts — export: levelQuestions
  index.ts        — calls createLanguageModule() and exports LanguageModule
```

**`createLanguageModule(slices)`** (`src/data/moduleFactory.ts`) is the single assembly point:
- Accepts per-level content arrays (e.g. `grammar: [a1Grammar, a2Grammar, b1Grammar]`)
- Flattens each array with `.flat()`
- Stamps every item with `language: langId` via `stamp()` — individual content files do NOT set `language`
- Returns a typed `LanguageModule`

`LessonUnit` is intentionally not stamped (it has no `language` field; language is identified via the ID prefix `{lang}-{level}-u{n}`).

### 4.2 Module Cache + Lazy Loading

`src/data/modules.ts` holds an in-memory `Map<string, LanguageModule>` cache. `loadModule(langId)` returns a `Promise<LanguageModule>` (dynamic import, resolved from Vite chunk). Once loaded, subsequent reads are synchronous from the cache.

Language data is split into per-language Vite chunks (`lang-es`, `lang-fr`, etc.) via `manualChunks` in `vite.config.ts` so only the selected language's data is downloaded.

### 4.3 Repository Pattern

`src/data/repo.ts` exposes named query functions over the module cache:

```ts
getGrammarForLevel(langId, level)  → GrammarLesson[]
getVocabForLevel(langId, level)    → VocabItem[]
getVerbsForLevel(langId, level)    → Verb[]
getUnitsForLevel(langId, level)    → LessonUnit[]   // sorted by .order
getCultureEpisodesForLevel(...)    → CultureEpisode[]
getPlacementQuestions(langId)      → QuizQuestion[]
getLevelQuestions(langId, level)   → QuizQuestion[]
// ... single-item and multi-item variants
```

**Rule:** Pages query through `repo.ts` — never call `getModule()` directly. This creates a single seam for the Stage 2 Supabase migration: only `repo.ts` needs to change to async DB calls.

### 4.4 Content IDs

IDs follow: `{langId}-{type}-{level}-{n}`

| Code | Type |
|---|---|
| `g` | grammar lesson |
| `v` | vocab item |
| `vb` | verb |
| `u` | unit |
| `r` | reading passage |
| `l` | listening exercise |
| `c` | culture episode |

Examples: `es-g-a1-3`, `ja-v-a2-12`, `fr-c-a1-1`

### 4.5 Shared Config

- `src/data/languages.ts` — language metadata (id, name, flag, available levels)
- `src/data/sectionConfig.ts` — dashboard section definitions
- `src/data/cultureConfig.ts` — `CATEGORY_META` record (emoji, label, colour per culture category)

---

## 5. Domain Layer

`src/domain/` contains pure functions that encode the rules of the app — logic that is true regardless of storage backend, UI framework, or deployment stage.

| File | What it encodes |
|---|---|
| `unitUnlock.ts` | A unit is unlocked when the preceding unit is mastered and its checkpoint (if any) is passed. |
| `exerciseConfig.ts` | Exercise sizing by context (unit / practice / review) and the 4-tier SRS item selection system (due → weak → new → random). |
| `reinforcementMapping.ts` | The vocab unlock threshold (default: 5 items learned), grammar exercise type resolution, and exercise label display strings. |

**Rules for `src/domain/`:**
- No imports from `src/store/registry.ts` or any storage adapter
- No React imports, no hooks
- All functions accept explicit parameters — no hidden reads from localStorage or Zustand
- Every file has a corresponding `.test.ts`

See `documents/ARCHITECTURE_DIAGRAM.md` §5 for a visual map of which pages consume which domain functions.

---

## 6. Store Layer

### 5.1 Storage Adapter Seam

Three interfaces define the storage contract:

| Interface | Implementations |
|---|---|
| `IProgressStorage` | `LocalStorageProgressStorage` |
| `ISRSStorage` | `LocalStorageSRSStorage` |
| `IStatsStorage` | `LocalStorageStatsStorage` |

Stage 2 adds `SupabaseProgressStorage`, `SupabaseSRSStorage`, `SupabaseStatsStorage` without touching any page code.

**`src/store/registry.ts`** — DI container. Defaults to localStorage. Swap all three at once:

```ts
registry.configure({
    progress: new SupabaseProgressStorage(supabaseClient),
    srs:      new SupabaseSRSStorage(supabaseClient),
    stats:    new SupabaseStatsStorage(supabaseClient),
})
```

### 5.2 Progress Store

`src/store/progress.ts` — synchronous read helpers (`getMasteredUnits`, `getLevel`, `getProgress`, …) served from the localStorage cache via `registry.progress`.

### 5.3 SRS Store

`src/store/srs.ts` — lifecycle layer on top of `@myorg/srs` (pure SM-2 primitives):
- **Read helpers** (synchronous, from cache): `getDueCards`, `getDueCount`, `getNextDueDate`
- **Write helpers** (async, through registry): `updateCard`, `resetSRS`
- **Policy constant**: `NEW_CARDS_PER_DAY = 10`

Pages import from `store/srs.ts` — never directly from `@myorg/srs`.

### 5.4 Stats Store (Zustand)

`src/store/useStatsStore.ts` — Zustand store for study statistics:
- `recordActivity(langId)` — records today as a study day (streak calculation)
- `recordQuizAnswer(langId, correct)` — accumulates daily quiz accuracy
- `getHistory(data, langId, days)` — returns 14-day bar chart data for StatsTab

**Usage rule:** use reactive selectors in component render paths, `getState()` only inside event handlers:

```ts
// In JSX — reactive (re-renders on change):
const statsData = useStatsStore(s => s.data)

// In event handler — non-reactive (fine, called once):
useStatsStore.getState().recordActivity(langId)
```

### 5.5 Command Pattern

`src/store/actions.ts` — compound mutations that touch multiple stores. Each async action co-locates all state mutations so Stage 2 Supabase writes have a single place to add remote calls.

```ts
completeUnit(langId, unitId, score, total)  // masterUnit + recordQuizAnswer × N + recordActivity
confirmUnitMastery(langId, unitId)           // masterUnit + recordActivity (quiz already recorded)
advanceLevel(langId, from, to)              // setLevel + resetSRS + recordActivity
resetLanguageProgress(langId)               // reset progress + SRS + stats
```

---

## 7. Component Architecture

### 6.1 Shared Components

| Component | Purpose |
|---|---|
| `NavBar` | App shell, dark mode toggle, global streak display |
| `DrillDoneScreen` | Shared done-screen for GrammarDrill and VerbDrill |
| `StatsTab` | 14-day activity chart (extracted from DashboardPage) |
| `SpeakButton` | TTS trigger; auto-plays on flashcard reveal |
| `QuizCard` | Multi-choice question card with keyboard shortcut support |
| `LevelBadge` | CEFR level pill |
| `ProgressBar` | Accessible progress bar |
| `VocabTooltip` | Hover gloss for vocab items in reading passages |
| `Flag` | Language flag icon |
| `ListeningPlayer` | Audio player for listening exercises |
| `LocalizedExplanation` | Renders grammar explanations with target/native language toggle |

### 6.2 Drill Hook

`src/hooks/useDrill.ts` re-exports `useDrill` and its types from `@myorg/quiz-engine`. GrammarDrillPage and VerbDrillPage both consume this hook.

Keyboard shortcuts (1–4 to select answer, Enter to advance) are handled inside `@myorg/quiz-engine`.

### 6.3 Dark Mode

`src/hooks/useDarkMode.ts` — system-aware, persisted in localStorage, toggled via NavBar. Adds/removes `dark` class on `<html>`.

---

## 8. Monorepo Packages

Located in `packages/` alongside `language-study/`. Consumed via Vite path aliases — no separate build step in dev.

| Package | Purpose | Status |
|---|---|---|
| `@myorg/auth-core` | AuthService, AuthApi interface, session management | Active |
| `@myorg/srs` | SM-2 algorithm: `SRSCardState`, `calcNextReview`, `INITIAL_STATE` | Active |
| `@myorg/quiz-engine` | `useDrill` hook — question sequencing, keyboard shortcuts | Active |
| `@myorg/tts` | Web Speech API wrapper | Active |
| `@myorg/storage` | LocalStorageAdapter | Available |
| `@myorg/validation` | Form validation rules | Available |
| `@myorg/api-client` | HTTP client interface (wired, unused until Stage 2) | Placeholder |
| `@myorg/theme-tokens` | CSS custom properties | Available |
| `@myorg/event-bus` | `EventBus<AppEvents>` | Available |

`packages/node_modules` is symlinked to `language-study/node_modules` so React types resolve correctly inside package code without a separate install.

### Package boundary rules

- Pages never import from `@myorg/srs` directly — use `store/srs.ts` (lifecycle + policy layer)
- Pages never import from `@myorg/quiz-engine` directly — use `src/hooks/useDrill.ts` (re-export)
- Pages never call `getModule()` directly — use `src/data/repo.ts` (query layer)

---

## 9. Build-Time Versioning

`vite.config.ts` reads `package.json` at build time and injects the version as a build-time constant:

```ts
// vite.config.ts
const appVersion = JSON.parse(readFileSync("./package.json", "utf-8")).version
defineConfig({ define: { __APP_VERSION__: JSON.stringify(appVersion) } })
```

`src/global.d.ts` declares the constant so TypeScript knows about it:

```ts
declare const __APP_VERSION__: string
```

Usage: `ProfilePage.tsx` exports `__APP_VERSION__` in the JSON progress snapshot. This is **not** automatic git-based versioning — it reads whatever is in `package.json` at the time `vite build` runs. Bump `package.json` version manually on each release.

---

## 10. Versioning Policy

| Change type | Version bump |
|---|---|
| localStorage key schema change | Major (breaking) |
| Route restructure (breaks bookmarks) | Major (breaking) |
| New feature, new content, new UI | Minor |
| Bug fix, refactor, style | Patch |

Current version: **2.4** (branch `feature/a2_content_2.4`)

---

## 11. Progress Export / Import

`ProfilePage.tsx` serialises three localStorage namespaces to JSON:
- `ls:progress` — mastered units, CEFR levels
- `ls:srs` — per-card SRS state
- `ls:stats` — study activity history

Import applies a smart merge: data is never downgraded (higher level/more mastered units always wins). File is stamped with `appVersion` from `__APP_VERSION__` for forward-compatibility checks.

---

## 12. Languages and Content Status

Five languages: **Spanish (es)**, **French (fr)**, **Italian (it)**, **Japanese (ja)**, **Korean (ko)**.

CEFR levels implemented: **A1**, **A2**. B1 structure exists but content is partial.

| Content type | A1 | A2 | B1 |
|---|---|---|---|
| Grammar lessons | ✅ (35–42/lang) | ✅ (20–25/lang) | Partial |
| Vocab items | ✅ (174–280/lang) | ✅ (130–164/lang) | Partial |
| Verbs | ✅ (38–61/lang) | included above | Partial |
| Units (path cards) | ✅ | ✅ (20/lang) | Partial |
| Culture episodes | ✅ (3+/lang) | ✅ (3/lang) | Pending |
| Reading passages | ✅ (2+/lang) | Pending | Pending |
| Listening exercises | ✅ (2+/lang) | Pending | Pending |
| Placement test | ✅ | shared | shared |
| Level test | ✅ | ✅ | ✅ |

---

## 13. Deployment Stages

### Stage 1 — Web MVP (current)
- Static build, hosted on Vercel/Netlify
- localStorage for all persistence
- No auth backend (localStorage mock session)
- JSON export for cross-device portability

### Stage 2 — Backend + Accounts
- Supabase: PostgreSQL + row-level security + auth (email, Google, Apple Sign-In)
- Swap storage adapters via `registry.configure()`
- `repo.ts` functions become async DB calls
- Content stays as static TS files (never goes to DB)
- `@myorg/api-client` points at Supabase REST endpoints

### Stage 3 — Mobile
- Capacitor wraps existing React + Tailwind app in a WebView (no rewrite)
- Content bundle ships with device
- SRS sync queued locally, flushed on reconnect

### Stage 4 — Monetisation
- Web: Stripe (Checkout + Customer Portal + webhooks → Supabase)
- Mobile: RevenueCat (abstracts Apple StoreKit + Google Play Billing)

---

## 14. Key Design Decisions

### Why TypeScript content files instead of JSON/CMS
Content is structured and typed. The TypeScript compiler catches malformed content at build time. No server or CMS needed for Stage 1. Language chunks are tree-shaken so users only download the language they select.

### Why the Repository pattern (repo.ts)
Single seam for Stage 2: replace function bodies with async Supabase calls, pages don't change. Also enables easy test doubles.

### Why the Command pattern (actions.ts)
Compound mutations (e.g. "complete unit" touches progress + stats) are co-located. Stage 2 Supabase writes have one place to be added, not scattered across pages.

### Why the Adapter + Registry seam
`IProgressStorage` / `ISRSStorage` / `IStatsStorage` + `registry.ts` decouple storage from business logic. Swap localStorage → Supabase by calling `registry.configure()` once at bootstrap.

### Why createLanguageModule() (moduleFactory.ts)
Before the factory, each `data/{lang}/index.ts` had duplicated spread logic (`[...a1Grammar, ...a2Grammar]`) and often forgot to stamp `language`. The factory flattens, stamps, and validates in one place.

### Why Fisher-Yates in arrayUtils.ts
`sort(() => Math.random() - 0.5)` is a biased shuffle (some permutations are statistically impossible). Drills use the correct unbiased Fisher-Yates implementation from `src/utils/arrayUtils.ts`.
