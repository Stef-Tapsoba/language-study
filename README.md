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
| Placement test + goal picker | Start at the right level with content matched to your goals |
| Unit reinforcement exercises | Practice after each lesson — not just read and scroll |
| Smart exercise sizing | Short focused sets in units; full corpus in free practice |
| SRS-aware item selection | Struggling items appear first; fresh items fill the rest |
| Cross-unit review | Prior vocab resurfaces when due — spaced retrieval in context |
| Break-return review | Come back after a week and get a targeted refresher |
| Personalized goal paths | Travelling, social, culture, or full course — units sorted for you |
| Sentence scramble + vocab matching | Active retrieval, not passive reading |
| Flashcards (SM-2 SRS) | Review words exactly when you're about to forget them |
| Auto-TTS pronunciation | Hear every word in the right accent, automatically |
| Speaking exercises | Speak the phrase, Web Speech API evaluates |
| Typed recall mode | Prove you actually know a word — not just recognise it |
| Verb conjugation drill | Repetition until conjugations become automatic |
| Grammar + cloze + dictation | Multiple retrieval modes for every grammar concept |
| Reading + listening passages | Real comprehension practice at each level |
| Culture episodes | Context that makes vocabulary stick |
| Sound feedback | Correct-answer chime and level-up fanfare (Web Audio API) |
| Immersion progression | Gradually removes English as you improve |
| Light-first UI with dark mode | Clean by default; toggle any time |
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

1. **Register** (mock auth — no real backend) and pick a language
2. **Take the placement test** to find your level — or skip if you already know
3. **Pick your learning goal** — Travelling, Making friends, Culture, or Full course
4. **Work through units** — each one has lessons, paired reinforcement exercises, and a mini-quiz
5. **Do the exercises** — after each grammar lesson or vocab review, a targeted exercise unlocks
6. **Use the flashcard deck** between sessions for spaced repetition review
7. **Take the level test** when ready — pass 12/15 to advance to the next CEFR level
8. **Come back after a break** — a review prompt appears if you've been away 7+ days
9. **Watch the UI shift** — at A2+, explanations and labels start appearing in your target language

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

- **Cloud sync** — optional Supabase backend (preserves local-first default; architecture seam-ready)
- **Mobile apps** — iOS + Android via Capacitor
- **B1–C1 content expansion** — reading/listening/culture rolling out across all five languages
- **Writing exercises** — constrained prompts + model answers (EE module)
- **Daily challenges** — progress ring, reward on completion

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

618 tests across 29 files. Key test files:

| Test file | What it covers |
|---|---|
| `src/utils/answerMatch.test.ts` | Exact match, accent stripping, multi-answer, whitespace |
| `src/utils/exerciseConfig.test.ts` | Context-aware sizing, selectItems tier routing, slot caps |
| `src/utils/reinforcementMapping.test.ts` | Vocab threshold, unlock conditions, exercise type resolver |
| `src/data/goalConfig.test.ts` | Goal profile structure, scoreUnitForGoal edge cases |
| `src/data/repo.unit.test.ts` | getGrammarForUnit, getVocabForUnit, getReviewItemsForUnit |
| `src/store/progress.test.ts` | CRUD, schema migration, reinforcement tracking, mergeProgress |
| `src/store/reinforcement.test.ts` | markReinforcementDone idempotency, cross-section isolation |
| `src/store/preferences.test.ts` | isGoalSet, goal persistence, review prompt dismissal + date reset |
| `src/hooks/useBreakDetection.test.ts` | Full tier boundary sweep (none/light/medium/heavy/critical) |
| `src/store/srs.test.ts` | SM-2 calculations, due-card logic, v1→v2 migration |
| `src/store/statsActivity.test.ts` | getLastActivityDate edge cases, per-language isolation |
| `src/components/DrillDoneScreen.test.tsx` | Score rendering, missed-items toggle, callbacks |

---

## See also

- [ARCHITECTURE.md](./documents/ARCHITECTURE.md) — technical architecture: data layer, store layer, routing, packages, design decisions
- [PLAN.md](./documents/PLAN.md) — implementation history, type definitions, game logic, and roadmap