# language-study

A bare-bones language-learning prototype — think Duolingo without the gamification. Built with React + TypeScript + Tailwind CSS, backed entirely by `localStorage` for the prototype phase. Consumes shared packages from `../packages/`.

---

## Features

- **Auth** — register / sign in with email and password (mock, localStorage-backed)
- **Language selection** — Spanish, French, Italian, Japanese, Korean
- **Placement test** — 10-question adaptive quiz that suggests a CEFR starting level, or pick manually
- **Grammar** — expandable lesson cards with explanations and examples; mark lessons complete
- **Vocabulary** — word cards with example sentences; filter by all / todo / done
- **Verbs** — collapsible conjugation tables grouped by tense
- **Level test** — 15 questions; pass 12/15 to advance to the next CEFR level
- **Progress persistence** — level and completed lessons stored in `localStorage`
- **Responsive** — single-column on mobile, expands on tablet/desktop

---

## CEFR Levels

| Badge | Level | Label |
|---|---|---|
| 🟢 A1 | Beginner | Core greetings, basic sentences |
| 🔵 A2 | Elementary | Past tense, everyday vocab |
| 🟣 B1 | Intermediate | Subjunctive intro, reflexives |
| 🟠 B2 | Upper Intermediate | *(content coming soon)* |
| 🔴 C1 | Advanced | *(content coming soon)* |

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
    ├── index.css           ← Tailwind directives
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
        ├── LoginPage.tsx
        ├── RegisterPage.tsx
        ├── LanguageSelectPage.tsx
        ├── DashboardPage.tsx       ← Per-language hub with section cards
        ├── PlacementPage.tsx       ← Placement quiz or manual level picker
        ├── GrammarPage.tsx
        ├── VocabPage.tsx           ← all / todo / done filter
        ├── VerbsPage.tsx
        └── LevelTestPage.tsx       ← 15 Qs, 12/15 to advance
```

---

## Routes

| Path | Page | Auth |
|---|---|---|
| `/login` | LoginPage | public |
| `/register` | RegisterPage | public |
| `/` | → `/languages` redirect | — |
| `/languages` | LanguageSelectPage | ✅ |
| `/learn/:langId` | DashboardPage | ✅ |
| `/learn/:langId/placement` | PlacementPage | ✅ |
| `/learn/:langId/grammar` | GrammarPage | ✅ |
| `/learn/:langId/vocab` | VocabPage | ✅ |
| `/learn/:langId/verbs` | VerbsPage | ✅ |
| `/learn/:langId/level-test` | LevelTestPage | ✅ |

---

## Packages used

This app is the first consumer of the local `../packages/` monorepo. Vite aliases resolve them directly from source — no build step required.

| Package | Used for |
|---|---|
| `@myorg/auth-core` | `AuthService` — session management, auto-refresh, events |
| `@myorg/storage` | `LocalStorageAdapter` — concrete storage for `AuthService` |

---

## Data model

Each language module (`src/data/<lang>/index.ts`) exports a `LanguageModule`:

```typescript
interface LanguageModule {
    grammar:            GrammarLesson[]
    vocab:              VocabItem[]
    verbs:              Verb[]
    placementQuestions: QuizQuestion[]   // 10 total, 2 per CEFR level
    levelQuestions:     QuizQuestion[]   // 15 per level for the level test
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

1. Open `/register` → create an account
2. Pick a language (e.g. Spanish)
3. Take the placement test → confirm or change the suggested level
4. Open **Grammar** → read lessons, mark them complete
5. Open **Vocabulary** → learn words, filter by todo/done
6. Open **Verbs** → review conjugation tables
7. Open **Level Test** → answer 15 questions; pass 12/15 to advance