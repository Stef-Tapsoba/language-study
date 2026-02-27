# language-study

A bare-bones language-learning prototype — think Duolingo without the gamification. Built with React + TypeScript + Tailwind CSS, backed entirely by `localStorage` for the prototype phase. Consumes shared packages from `../packages/`.

---

## Features

- **Auth** — register / sign in with email and password (mock, localStorage-backed)
- **Language selection** — Spanish, French, Italian, Japanese, Korean
- **Placement test** — 10-question adaptive quiz that suggests a CEFR starting level, or pick manually
- **Grammar** — expandable lesson cards with explanations and examples; mark lessons complete
- **Vocabulary** — word cards with example sentences; filter by all / todo / done
- **Verbs** — collapsible conjugation tables grouped by tense; romanized column for Japanese/Korean
- **Flashcard drill** — flip cards with Got it / Not yet split; missed cards reviewed in a second round
- **Verb drill** — fill-in-the-blank conjugation quiz generated from the current level's verb pool
- **Grammar drill** — pick the native sentence matching an English prompt
- **Level test** — 15 questions; pass 12/15 (80%) to advance to the next CEFR level
- **Profile page** — per-language progress overview with level badge and reset option
- **Progress persistence** — level and completed lessons stored in `localStorage`
- **Responsive** — single-column on mobile, expands on tablet/desktop

---

## CEFR Levels

| Badge | Level | Label | Content status |
|---|---|---|---|
| 🟢 A1 | Beginner | Core greetings, basic sentences | ✅ Full content |
| 🔵 A2 | Elementary | Past tense, everyday vocab | ✅ Full content |
| 🟣 B1 | Intermediate | Subjunctive, conditional, connectors | ✅ Full content |
| 🟠 B2 | Upper Intermediate | *(coming soon)* | Scaffolded |
| 🔴 C1 | Advanced | *(coming soon)* | Scaffolded |

---

## Content depth

Each language has grammar lessons, vocab items, verbs with full conjugation tables, 10 placement questions (2 per CEFR level), and 15 level-test questions per level.

| Language | A1 | A2 | B1 |
|---|---|---|---|
| Spanish | 6 grammar, 10 vocab, 4 verbs | 5 grammar, 10 vocab, 4 verbs | 5 grammar, 10 vocab, 4 verbs |
| French | 5 grammar, 12 vocab, 5 verbs | 5 grammar, 12 vocab, 5 verbs | 5 grammar, 10 vocab, 4 verbs |
| Italian | 4 grammar, 10 vocab, 4 verbs | 4 grammar, 10 vocab, 4 verbs | 5 grammar, 10 vocab, 4 verbs |
| Japanese | 4 grammar, 10 vocab, 4 verbs | 4 grammar, 10 vocab, 4 verbs | 4 grammar, 10 vocab, 4 verbs |
| Korean | 4 grammar, 10 vocab, 4 verbs | 4 grammar, 10 vocab, 4 verbs | 4 grammar, 10 vocab, 4 verbs |

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
├── index.html
├── package.json
├── vite.config.ts          ← @myorg/* aliases → ../packages/*/src
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── src/
    ├── main.tsx            ← React root
    ├── App.tsx             ← Router + AuthProvider
    ├── index.css           ← Tailwind directives + 3D flip classes
    ├── types/
    │   └── index.ts        ← CEFRLevel, Language, GrammarLesson, VocabItem, Verb, …
    ├── auth/
    │   ├── AuthContext.tsx     ← AuthService wired to LocalStorageAdapter
    │   ├── ProtectedRoute.tsx  ← Redirects to /login if no session
    │   └── mockAuthApi.ts      ← AuthApi backed by ls:users in localStorage
    ├── store/
    │   └── progress.ts         ← Read/write UserProgress (level, completed lessons)
    ├── data/
    │   ├── languages.ts        ← Language registry (id, name, flag, script)
    │   ├── modules.ts          ← getModule(langId) → LanguageModule
    │   ├── spanish/index.ts
    │   ├── french/index.ts
    │   ├── italian/index.ts
    │   ├── japanese/index.ts   ← includes romanized fields
    │   └── korean/index.ts     ← includes romanized fields
    ├── components/
    │   ├── NavBar.tsx          ← Sticky top nav with back button + sign out
    │   ├── LevelBadge.tsx      ← Colour-coded CEFR badge
    │   ├── QuizCard.tsx        ← Multiple-choice card with answer reveal
    │   └── ProgressBar.tsx     ← Animated progress bar with optional label
    └── pages/
        ├── LandingPage.tsx         ← Public marketing page at /
        ├── LoginPage.tsx
        ├── RegisterPage.tsx
        ├── HomePage.tsx            ← Authenticated home (new-user vs returning)
        ├── LanguageSelectPage.tsx
        ├── DashboardPage.tsx       ← Per-language hub with section cards
        ├── PlacementPage.tsx       ← Placement quiz or manual level picker
        ├── GrammarPage.tsx
        ├── VocabPage.tsx           ← all / todo / done filter
        ├── VerbsPage.tsx
        ├── LevelTestPage.tsx       ← 15 Qs, 12/15 to advance
        ├── FlashcardsPage.tsx      ← Flip-card active recall drill
        ├── VerbDrillPage.tsx       ← Conjugation fill-in quiz
        ├── GrammarDrillPage.tsx    ← Native-sentence matching quiz
        └── ProfilePage.tsx         ← Progress overview + reset
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
| `/learn/:langId/grammar` | GrammarPage | ✅ |
| `/learn/:langId/vocab` | VocabPage | ✅ |
| `/learn/:langId/verbs` | VerbsPage | ✅ |
| `/learn/:langId/level-test` | LevelTestPage | ✅ |
| `/learn/:langId/flashcards` | FlashcardsPage | ✅ |
| `/learn/:langId/verb-drill` | VerbDrillPage | ✅ |
| `/learn/:langId/grammar-drill` | GrammarDrillPage | ✅ |
| `/profile` | ProfilePage | ✅ |

---

## Packages used

This app is the first consumer of the local `../packages/` monorepo. Vite aliases resolve them directly from source — no build step required.

| Package | Used for |
|---|---|
| `@myorg/auth-core` | `AuthService` — session management, auto-refresh, events |
| `@myorg/storage` | `LocalStorageAdapter` — concrete storage for `AuthService` |
| `@myorg/validation` | Login / register form validation |
| `@myorg/theme-tokens` | CSS custom property design tokens |
| `@myorg/event-bus` | `EventBus<AppEvents>` — redirect to `/login` on `auth:expired` |

---

## Data model

Each language module (`src/data/<lang>/index.ts`) exports a `LanguageModule`:

```typescript
interface LanguageModule {
    grammar:            GrammarLesson[]
    vocab:              VocabItem[]
    verbs:              Verb[]
    placementQuestions: PlacementQuestion[]  // 10 total, 2 per CEFR level
    levelQuestions:     PlacementQuestion[]  // 15 per level for the level test
}
```

Japanese and Korean include optional `romanized` fields on examples, words, and conjugation forms.

---

## localStorage keys

| Key | Contents |
|---|---|
| `ls:users` | `StoredUser[]` — registered accounts |
| `ls:session` | current `Session` (managed by `AuthService`) |
| `ls:progress` | `UserProgress` — selected language, levels, completed lessons |

---

## Happy path

1. Open `/` (landing page) → click **Get Started** → register an account
2. Pick a language (e.g. Spanish)
3. Take the placement test → confirm or change the suggested level
4. Open **Grammar** → read lessons, mark them complete
5. Open **Vocabulary** → learn words, filter by todo/done
6. Open **Verbs** → review conjugation tables
7. Try a **Flashcard**, **Verb Drill**, or **Grammar Drill** from the Dashboard
8. Open **Level Test** → answer 15 questions; pass 12/15 to advance
