# language-study — v2.1.0

A structured language-learning prototype — think Duolingo without the gamification. Built for durable mastery with spaced repetition, progressive immersion, and study analytics. React + TypeScript + Tailwind CSS, backed entirely by `localStorage`. Consumes shared packages from `../packages/`.

---

## Features

- **Auth** — register / sign in with email and password (mock, localStorage-backed)
- **Language selection** — Spanish, French, Italian, Japanese, Korean
- **Placement test** — 10-question adaptive quiz that suggests a CEFR starting level, or pick manually
- **Unit-based progression** — ordered lesson units per level; each unit groups grammar + vocab + verbs + a mini-test; later units unlock as earlier ones are mastered
- **Grammar** — lesson list; click any lesson to open a full detail page with explanation + examples + TTS + mark-complete; immersion-aware explanations shift from English → bilingual → target-only as level advances
- **Vocabulary** — word cards with example sentences; filter by all / todo / done
- **Verbs** — collapsible conjugation tables grouped by tense; romanized column for Japanese/Korean
- **Reading (CE)** — graded passages with vocab glosses and comprehension questions (Spanish A1/A2; all languages scaffolded)
- **Listening (CO)** — TTS-driven exercises with transcript and comprehension questions (Spanish A1/A2; all languages scaffolded)
- **Flashcards (SRS)** — 3D flip cards with SM-2 spaced-repetition scheduling; 10 new cards/day; due-count badge on dashboard; auto-play TTS on card appear + flip
- **Verb drill** — fill-in-the-blank conjugation quiz with same-tense distractors; wrong-answer review after completion
- **Grammar drill** — pick the native sentence matching an English prompt with same-lesson distractors; wrong-answer review after completion
- **Level test** — 15 questions; pass 12/15 (80%) to advance to the next CEFR level; wrong-answer review on result screen
- **Culture** — dedicated cultural insights page (amber-themed) showing culture-category reading passages with comprehension questions
- **Study statistics** — global streak chip in NavBar; 14-day review bar chart per language; accuracy tracking
- **TTS** — Web Speech API speaker buttons on vocab, verbs, flashcards, reading, and listening pages
- **LanguagePicker** — in-nav language switcher with per-language level badge and progress
- **Profile page** — per-language progress breakdown, global streak, reset/remove per language
- **Immersion progression** — UI shell, grammar explanations, and unit descriptions switch to the target language at A2+
- **Progress persistence** — level, completed lessons, mastered units, SRS card state, and review history all stored in `localStorage`
- **Responsive** — single-column on mobile, expands on tablet/desktop

---

## CEFR Levels

| Badge | Level | Label | Content status |
|---|---|---|---|
| 🟢 A1 | Beginner | Core greetings, basic sentences | ✅ Full content |
| 🔵 A2 | Elementary | Past tense, everyday vocab | ✅ Full content |
| 🟣 B1 | Intermediate | Subjunctive, conditional, connectors | ✅ Full content |
| 🟠 B2 | Upper Intermediate | Complex grammar, nuanced vocab | ✅ Full content |
| 🔴 C1 | Advanced | Literary register, keigo, formal discourse | ✅ Full content |

---

## Content depth

All five languages have full grammar, vocab, verbs, units, placement questions, and level-test questions at every CEFR level (A1 → C1). Reading and listening passages exist at A1/A2/B2/C1.

| Language | Levels | A1 vocab | A1 units | Reading | Listening |
|---|---|---|---|---|---|
| Spanish | A1–C1 | 158 | 14 | ✅ A1+A2+B2+C1 | ✅ A1+A2+B2+C1 |
| French | A1–C1 | 173 | 15 | ✅ A1+A2+B2+C1 | ✅ A1+A2+B2+C1 |
| Italian | A1–C1 | 152 | 15 | ✅ A1+A2+B2+C1 | ✅ A1+A2+B2+C1 |
| Japanese | A1–C1 | 150 | 15 | ✅ A1+A2+B2+C1 | ✅ A1+A2+B2+C1 |
| Korean | A1–C1 | 150 | 12 | ✅ A1+A2+B2+C1 | ✅ A1+A2+B2+C1 |

Japanese and Korean include `romanized` fields on all content (words, examples, conjugation forms).

---

## Getting started

```bash
# From the repo root
cd language-study
npm install
npm run dev        # → http://localhost:5173
```

Other scripts:

```bash
npm run build      # production bundle → dist/
npm run typecheck  # tsc --noEmit
npm run preview    # serve the dist/ build locally
```

---

## Project structure

```
language-study/
├── vite.config.ts          ← @myorg/* aliases → ../packages/*/src
└── src/
    ├── types/              ← shared TypeScript types (CEFRLevel, Language, VocabItem, …)
    ├── auth/               ← AuthContext, ProtectedRoute, mockAuthApi
    ├── store/              ← localStorage state: progress, srs, stats
    ├── utils/              ← tts.ts (Web Speech API), localizedText.ts (immersion helpers)
    ├── i18n/               ← UI strings for en + 5 target languages; getUI(langId, level)
    ├── data/
    │   ├── languages.ts    ← language registry
    │   ├── modules.ts      ← getModule(langId) → LanguageModule
    │   └── <lang>/         ← grammar/, vocab/, verbs/, units/, reading/, listening/, questions/
    ├── components/         ← NavBar, LanguagePicker, Flag, LevelBadge, QuizCard, SpeakButton, …
    └── pages/              ← one file per route (Dashboard, Flashcards, VerbDrill, …)
```

---

## Routes

| Path | Page | Auth |
|---|---|---|
| `/` | LandingPage | public |
| `/login` | LoginPage | public |
| `/register` | RegisterPage | public |
| `/home` | HomePage | ✅ |
| `/languages` | LanguageSelectPage | ✅ |
| `/learn/:langId` | DashboardPage | ✅ |
| `/learn/:langId/placement` | PlacementPage | ✅ |
| `/learn/:langId/units/:unitId` | UnitPage | ✅ |
| `/learn/:langId/grammar` | GrammarPage | ✅ |
| `/learn/:langId/grammar/:lessonId` | GrammarLessonPage | ✅ |
| `/learn/:langId/vocab` | VocabPage | ✅ |
| `/learn/:langId/verbs` | VerbsPage | ✅ |
| `/learn/:langId/flashcards` | FlashcardsPage | ✅ |
| `/learn/:langId/verb-drill` | VerbDrillPage | ✅ |
| `/learn/:langId/grammar-drill` | GrammarDrillPage | ✅ |
| `/learn/:langId/reading` | ReadingPage | ✅ |
| `/learn/:langId/listening` | ListeningPage | ✅ |
| `/learn/:langId/culture` | CulturePage | ✅ |
| `/learn/:langId/level-test` | LevelTestPage | ✅ |
| `/profile` | ProfilePage | ✅ |

---

## localStorage keys

| Key | Contents |
|---|---|
| `ls:users` | `StoredUser[]` — registered accounts |
| `ls:session` | current `Session` (managed by `AuthService`) |
| `ls:progress` | `UserProgress` — levels, completed lessons, mastered units |
| `ls:srs` | `Record<langId, Record<vocabId, SRSCardState>>` — SM-2 card state |
| `ls:stats` | `Record<langId, Record<dateStr, { reviewed, correct }>>` — daily review history |

---

## Happy path

1. Open `/` → **Get Started** → register an account
2. Pick a language (e.g. Spanish)
3. Take the placement test → confirm or change the suggested level
4. Open the **Path** tab → work through units in order (grammar → vocab → verbs → mini-test)
5. Or use the **Study** tab to browse Grammar / Vocabulary / Verbs / Reading / Listening / Culture directly
6. Click any grammar lesson → full detail page with explanation + examples + TTS + mark-complete
7. Open **Practice → Flashcards** — SRS deck auto-plays pronunciation; rate cards as Got it / Not yet
8. Try **Verb Drill** or **Grammar Drill** → see "Review Mistakes" after completion if any wrong answers
9. Open **Level Test** → pass 12/15 to advance; review missed questions on the result screen
10. Check **Stats** tab → 14-day review bar chart and accuracy; streak shown in NavBar

---

## Packages used

| Package | Used for |
|---|---|
| `@myorg/auth-core` | `AuthService` — session management, auto-refresh, events |
| `@myorg/storage` | `LocalStorageAdapter` — concrete storage for `AuthService` |
| `@myorg/validation` | Login / register form validation |
| `@myorg/theme-tokens` | CSS custom property design tokens |
| `@myorg/event-bus` | `EventBus<AppEvents>` — redirect to `/login` on `auth:expired` |

---

## See also

- [IMPLEMENTATION_PROGRESS.md](./documents/IMPLEMENTATION_PROGRESS.md) — feature-by-feature change log
- [PLAN.md](./documents/PLAN.md) — architecture decisions, types, and future plans
