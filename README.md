# language-study

A structured language-learning app — think Duolingo without the gamification. The goal is durable mastery through spaced repetition, CEFR-levelled content, and progressive immersion (the UI gradually shifts to the target language as you advance).

Supports Spanish, French, Italian, Japanese, and Korean across five CEFR levels (A1 → C1). All state lives in `localStorage` — no backend required to run it.

---

## The idea

Most language apps optimise for streaks and dopamine. This one optimises for retention:

- **Structured path** — units unlock in order; each one combines grammar, vocab, verbs, and a mini-test
- **Spaced repetition** — SM-2 flashcard scheduling with auto-TTS pronunciation
- **Immersion progression** — grammar explanations and UI strings switch to the target language at A2+
- **Honest level tests** — pass 12/15 to advance; review every mistake before moving on
- **Practice modes** — verb conjugation drill, grammar drill, reading passages, TTS listening exercises, culture pages

---

## Stack

| Layer | Choice |
|---|---|
| UI | React 18 + TypeScript + Tailwind CSS + shadcn/ui |
| Routing | React Router v6 |
| State | `localStorage` (progress, SRS) + Zustand with persist (stats) |
| Build | Vite |
| Tests | Vitest + jsdom + `@testing-library/jest-dom` |

Monorepo packages from `../packages/` are consumed via Vite path aliases — no separate build step needed.

| Package | Role |
|---|---|
| `@myorg/auth-core` | Session management, auto-refresh |
| `@myorg/quiz-engine` | `useDrill` hook powering all drill pages |
| `@myorg/tts` | Web Speech API wrapper |
| `@myorg/srs` | SM-2 algorithm |
| `@myorg/storage` | `LocalStorageAdapter` for auth |
| `@myorg/validation` | Login / register form rules |
| `@myorg/theme-tokens` | CSS custom property tokens |
| `@myorg/event-bus` | Auth-expired → redirect events |

---

## Getting started

```bash
cd language-study
npm install
npm run dev        # → http://localhost:5173
npm run test       # unit tests
npm run build      # production bundle → dist/
npm run typecheck  # tsc --noEmit
```

---

## Project structure

```
language-study/
├── vite.config.ts       ← @myorg/* path aliases
└── src/
    ├── auth/            ← AuthContext, ProtectedRoute
    ├── data/            ← language content (grammar, vocab, verbs, units, reading, listening)
    ├── store/           ← progress, SRS, stats (Zustand)
    ├── hooks/           ← useDrill, useGlobalStreak, useProgressStats, …
    ├── components/      ← NavBar, QuizCard, Flashcard, DrillDoneScreen, shadcn primitives, …
    ├── pages/           ← one file per route
    ├── i18n/            ← UI strings (English + 5 target languages)
    └── types/           ← shared TypeScript types
```

---

## See also

- [IMPLEMENTATION_PROGRESS.md](./documents/IMPLEMENTATION_PROGRESS.md) — detailed change log
- [PLAN.md](./documents/PLAN.md) — architecture decisions and roadmap
