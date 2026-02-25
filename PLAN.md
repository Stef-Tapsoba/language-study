# language-study — Implementation Plan

## Context
Building a bare-bones language-learning prototype (think Duolingo without gamification) to share with friends for feedback. It is the first real consumer of the `packages/` monorepo. Auth, validation, storage, theming, and the event bus all come from there.

**User choices:**
- Languages: Spanish, French, Italian, Japanese, Korean
- Backend: 100% localStorage for prototype 1
- Levels: CEFR — A1 → A2 → B1 → B2 → C1

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
    ├── App.tsx                     ← router + context providers
    ├── types/
    │   └── index.ts                ← CEFRLevel, Language, GrammarLesson, VocabItem, Verb, PlacementQuestion
    ├── auth/
    │   ├── AuthContext.tsx         ← React context wrapping AuthService
    │   ├── ProtectedRoute.tsx
    │   └── mockAuthApi.ts          ← implements AuthApi (localStorage users store)
    ├── store/
    │   └── progress.ts             ← read/write user progress in localStorage
    ├── data/
    │   ├── languages.ts            ← language registry (id, name, flag, script type)
    │   ├── spanish/index.ts        ← grammar, vocab, verbs, placement Qs, level-test Qs
    │   ├── french/index.ts
    │   ├── italian/index.ts
    │   ├── japanese/index.ts       ← includes romanized fields
    │   └── korean/index.ts         ← includes romanized fields
    ├── components/
    │   ├── NavBar.tsx
    │   ├── LevelBadge.tsx          ← coloured CEFR badge
    │   ├── QuizCard.tsx            ← multiple-choice question card
    │   └── ProgressBar.tsx
    └── pages/
        ├── LoginPage.tsx
        ├── RegisterPage.tsx
        ├── LanguageSelectPage.tsx
        ├── DashboardPage.tsx       ← per-language hub
        ├── PlacementPage.tsx       ← 10-question quiz or manual level picker
        ├── GrammarPage.tsx
        ├── VocabPage.tsx
        ├── VerbsPage.tsx
        └── LevelTestPage.tsx       ← 15 questions, 80% to advance
```

---

## Routes

```
/login
/register
/                       → redirect to /languages
/languages              → pick a language          [protected]
/learn/:langId          → dashboard                [protected]
/learn/:langId/placement
/learn/:langId/grammar
/learn/:langId/vocab
/learn/:langId/verbs
/learn/:langId/level-test
/profile
```

---

## Key Types (`src/types/index.ts`)

```typescript
type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1"

interface Language { id: string; name: string; flag: string; script: "latin" | "hiragana-kanji" | "hangul" }

interface GrammarLesson {
    id: string; level: CEFRLevel; title: string; explanation: string
    examples: { native: string; romanized?: string; translation: string }[]
}

interface VocabItem {
    id: string; level: CEFRLevel; word: string; romanized?: string
    translation: string; category: string
    example: { native: string; romanized?: string; translation: string }
}

interface Verb {
    id: string; level: CEFRLevel; infinitive: string; romanized?: string; meaning: string
    conjugations: { tense: string; forms: { pronoun: string; form: string; romanized?: string }[] }[]
}

interface PlacementQuestion {
    id: string; level: CEFRLevel   // which level this question discriminates
    prompt: string; options: string[]; answer: string
}

// Progress (persisted in localStorage)
interface UserProgress {
    selectedLanguage: string | null
    levels: Record<string, CEFRLevel>           // langId → current level
    completedLessons: Record<string, string[]>  // langId → lesson ids
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
- Score table: 0-2 → A1, 3-4 → A1, 5-6 → A2, 7-8 → B1, 9-10 → B2
- After scoring, user sees the suggestion and can confirm or manually pick any level

## Level Test Logic

- 15 questions from the current level's content
- Pass threshold: 80% (≥ 12/15)
- On pass: advance one level, save to progress store
- On fail: show score and encourage more practice

---

## Content per Language (prototype depth)

Each language module exports `{ grammar, vocab, verbs, placementQuestions, levelQuestions }`.

| Language | A1 content | A2 content |
|---|---|---|
| Spanish | 6 grammar, 15 vocab, 6 verbs | 5 grammar, 12 vocab, 5 verbs |
| French | 5 grammar, 12 vocab, 5 verbs | 4 grammar, 10 vocab, 4 verbs |
| Italian | 4 grammar, 10 vocab, 4 verbs | 3 grammar, 8 vocab, 3 verbs |
| Japanese | 4 grammar, 10 vocab, 4 verbs (all with romaji) | 3 grammar, 8 vocab, 3 verbs |
| Korean | 4 grammar, 10 vocab, 4 verbs (all with romanization) | 3 grammar, 8 vocab, 3 verbs |

B1+ content is scaffolded (data arrays exist but are empty — displayed as "coming soon").

---

## Tailwind + Theme Tokens

- Import `@myorg/theme-tokens` CSS files in `main.tsx`
- Tailwind config extended to read the CSS variables as theme values where appropriate
- Responsive breakpoints: `sm` (480px) = phone landscape, `md` (768px) = tablet, `lg` (1024px) = desktop
- All pages are single-column on mobile, can expand on md+

---

## Files to Create (in order)

1. `package.json` — deps + scripts
2. `vite.config.ts` — aliases to `../packages/*/src`
3. `tsconfig.json` — paths matching vite aliases
4. `tailwind.config.ts` + `postcss.config.js`
5. `index.html`
6. `src/types/index.ts`
7. `src/auth/mockAuthApi.ts`
8. `src/auth/AuthContext.tsx`
9. `src/auth/ProtectedRoute.tsx`
10. `src/store/progress.ts`
11. `src/data/languages.ts`
12. `src/data/spanish/index.ts` (full content)
13. `src/data/french/index.ts`
14. `src/data/italian/index.ts`
15. `src/data/japanese/index.ts`
16. `src/data/korean/index.ts`
17. `src/components/*` (4 components)
18. `src/pages/*` (9 pages)
19. `src/App.tsx`
20. `src/main.tsx`

---

## Verification

```bash
cd language-study
npm install
npm run dev     # → http://localhost:5173
```

Happy path:
1. Register → Login → Pick Spanish → Placement test → Dashboard
2. Open Grammar section → see A1 lessons
3. Open Vocab section → see A1 words
4. Open Verbs section → see conjugation tables
5. Take Level Test → pass or fail
6. Works on mobile viewport (DevTools → iPhone 14 size)
