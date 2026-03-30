# language-study

**Master a language with structure, not streaks.**

A serious alternative to Duolingo — built for long-term fluency, not daily dopamine. Five languages, CEFR-levelled content from A1 to C1, and a UI that progressively switches to your target language as you improve. No backend required — everything runs locally.

---

## Why this is different

Most language apps optimise for retention loops. This one optimises for retention:

- **Spaced repetition + structured curriculum** — most apps do one or the other. This does both: SM-2 scheduling shows you words exactly when you're about to forget them, inside a curriculum that builds skills in the right order.
- **Immersion-aware UI** — grammar explanations and interface strings gradually shift to your target language at A2+. You're not just learning a language — you're being pushed to think in it.
- **Honest level tests** — pass 12/15 to advance, then review every mistake before you move on. No skipping gaps.
- **Drill → review → advance loop** — verb conjugation drills, grammar drills, and a missed-items review that closes the loop so nothing falls through.
- **Local-first** — fast, private, works offline. No account needed to start.

---

## Who this is for

- Learners who want real fluency, not just a streak to protect
- People tired of gamified apps that feel rewarding but don't stick
- Anyone who's plateaued with Duolingo and wants a more structured path
- Developers interested in how a serious language learning system is built

---

## What you get

| Feature | Why it matters |
|---|---|
| Placement test | Start at the right level — not from scratch |
| Unit progression | Build skills in the right order, not randomly |
| Flashcards (SRS) | Review words exactly when you're about to forget them |
| Auto-TTS pronunciation | Hear every word in the right accent, automatically |
| Typed recall mode | Prove you actually know a word — not just recognise it |
| Verb conjugation drill | Repetition until conjugations become automatic |
| Grammar drill | Targeted practice on the rules you keep getting wrong |
| Reading + listening passages | Real comprehension practice at each level |
| Culture episodes | Context that makes vocabulary stick |
| Immersion progression | Gradually removes English as you improve |
| Dark mode | Works how you want it to |
| Progress export / import | Your data, your device — portable JSON backup |

---

## Language coverage

| Language | Levels available | Notes |
|---|---|---|
| Spanish | A1 · A2 (B1–C1 in progress) | Full grammar + vocab + drills at each level |
| French | A1 · A2 (B1–C1 in progress) | Full grammar + vocab + drills at each level |
| Italian | A1 · A2 (B1–C1 in progress) | Full grammar + vocab + drills at each level |
| Japanese | A1 · A2 (B1–C1 in progress) | JLPT N4 coverage at A2 |
| Korean | A1 · A2 (B1–C1 in progress) | TOPIK 3 coverage at A2; units being expanded to match other languages |

Each A-level includes 20 grammar lessons, 20 units, 60+ vocabulary items, verb drills, culture episodes, and a CEFR level test.

---

## How to use the app

1. **Register** (mock auth — no real backend) and land on the dashboard
2. **Take the placement test** to start at A1, or skip ahead if you already know the basics
3. **Work through units** — each one combines grammar, vocabulary, verbs, and a mini-quiz
4. **Use the flashcard deck** between sessions to lock in vocabulary with spaced repetition
5. **Take the level test** when the unit tab is complete — pass 12/15 to advance
6. **Review your mistakes** — required before moving to the next level
7. **Watch the UI shift** — at A2+, explanations and labels start appearing in your target language

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

## Roadmap

- **Cloud sync** — optional Supabase backend (preserves local-first default)
- **Mobile apps** — iOS + Android via Capacitor
- **Speaking evaluation** — pronunciation feedback
- **Peer practice** — community corrections and conversation partners
- **B1–C1 content** — rolling out across all five languages

---

## Stack

| Layer | Choice |
|---|---|
| UI | React 18 + TypeScript + Tailwind CSS + shadcn/ui |
| Routing | React Router v6 |
| State | `localStorage` (progress, SRS) + Zustand with persist (stats) |
| Build | Vite |
| Tests | Vitest + jsdom + `@testing-library/jest-dom` |

Internal packages from `../packages/` are wired via Vite path aliases — no separate build step needed.

| Package | Role |
|---|---|
| `@myorg/auth-core` | Session management |
| `@myorg/quiz-engine` | `useDrill` hook powering all drills |
| `@myorg/tts` | Web Speech API wrapper |
| `@myorg/srs` | SM-2 algorithm |
| `@myorg/storage` | `LocalStorageAdapter` for auth |
| `@myorg/validation` | Login / register form rules |
| `@myorg/theme-tokens` | CSS custom property tokens |
| `@myorg/event-bus` | Auth-expired → redirect events |

---

## Project structure

```
language-study/
├── vite.config.ts       ← @myorg/* path aliases
└── src/
    ├── auth/            ← AuthContext, ProtectedRoute
    ├── data/            ← language content (grammar, vocab, verbs, units, reading, listening, culture)
    ├── store/           ← progress, SRS, stats (Zustand)
    ├── hooks/           ← useDrill, useGlobalStreak, useProgressStats, …
    ├── components/      ← NavBar, QuizCard, Flashcard, DrillDoneScreen, shadcn primitives, …
    ├── pages/           ← one file per route
    ├── i18n/            ← UI strings (English + 5 target languages)
    └── types/           ← shared TypeScript types
```

---

## Tests

```bash
npm run test              # run all tests once
npm run test -- --watch   # watch mode
```

| Test file | What it covers |
|---|---|
| `src/utils/answerMatch.test.ts` | Exact match, case-insensitivity, accent stripping, whitespace |
| `src/store/useStatsStore.test.ts` | `recordReview`, streak, accuracy, history, legacy migration |
| `src/store/progress.test.ts` | Lesson/unit/level CRUD, user-switch wipe, corrupted JSON fallback |
| `src/store/srs.test.ts` | `getDueCards`, `NEW_CARDS_PER_DAY` cap, v1→v2 migration, `updateCard` accumulation |
| `src/utils/tts.test.ts` | BCP-47 language mapping, graceful no-op when Speech API absent |
| `src/auth/mockAuthApi.test.ts` | Login, register, refresh, duplicate email detection |
| `src/auth/AuthContext.test.tsx` | Session lifecycle, login/logout state updates |
| `src/context/ProgressContext.test.tsx` | All mutations, user-switch, throws outside provider |
| `src/hooks/useProgressStats.test.ts` | `computeProgressStats`, `isDone`, division-by-zero guard |
| `src/components/DrillDoneScreen.test.tsx` | Score/pct rendering, missed-items toggle, callbacks |
| `src/components/StatsTab.test.tsx` | Streak chip, progress labels, 14-day chart bars |

---

## See also

- [ARCHITECTURE.md](./documents/ARCHITECTURE.md) — technical architecture: data layer, store layer, routing, packages, design decisions
- [PLAN.md](./documents/PLAN.md) — implementation history, type definitions, game logic, and roadmap