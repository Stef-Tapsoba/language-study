# Implementation Progress

Tracks features delivered, the files touched, and what changed for each.

---

## 1. Project Scaffold & Build Config

**Files created:**
- `package.json` — dependencies (React 18, React Router v6, Tailwind CSS, Vite, TypeScript) + dev scripts
- `vite.config.ts` — Vite aliases pointing `@myorg/*` to `../packages/*/src` so monorepo packages compile together with the app; no separate build step needed
- `tsconfig.json` — TypeScript paths matching Vite aliases
- `tailwind.config.ts` — Tailwind extended with CSS variable references from `@myorg/theme-tokens`
- `postcss.config.js` — PostCSS + Tailwind + autoprefixer
- `index.html` — entry HTML; mounts `#root`
- `src/main.tsx` — renders `<App />`, imports global CSS and theme-token CSS files
- `src/index.css` — Tailwind directives (`@tailwind base/components/utilities`)

---

## 2. Core Types

**Files created:**
- `src/types/index.ts` — shared TypeScript interfaces and constants:
  - `CEFRLevel` union (`"A1" | "A2" | "B1" | "B2" | "C1"`) + `CEFR_LEVELS` ordered array
  - `Language`, `GrammarLesson`, `VocabItem`, `Verb`, `PlacementQuestion`, `UserProgress` interfaces
  - `romanized?` optional fields on examples, vocab, and verb conjugations for Japanese/Korean support

---

## 3. Auth System (localStorage mock)

**Files created:**
- `src/auth/mockAuthApi.ts` — implements the `AuthApi` interface from `@myorg/auth-core`:
  - Users persisted as JSON in `localStorage["ls:users"]`
  - `register()` — creates new user with generated UUID, hashed-free prototype password
  - `login()` — finds matching user, returns fake `Session` (`accessToken = btoa(email)`, `expiresAt = now + 8h`)
  - `refresh()` — re-issues session; never expires in prototype
  - `getUserById()` — lookup helper used by Profile and HomePage for display name
- `src/auth/AuthContext.tsx` — React context wrapping `AuthService` from `@myorg/auth-core` with `LocalStorageAdapter("ls")`; exposes `{ session, loading, logout }`
- `src/auth/ProtectedRoute.tsx` — redirects unauthenticated users to `/login`, preserving intended destination in `location.state.from`

---

## 4. Progress Store

**Files created / updated:**
- `src/store/progress.ts` — all user progress persisted in `localStorage["ls:progress"]`:
  - `getSelectedLanguage()` / `setSelectedLanguage()` — active language tab
  - `getCurrentLevel()` / `setCurrentLevel()` — per-language CEFR level
  - `getCompletedLessons()` / `markLessonComplete()` — per-language completed lesson IDs
  - `getStartedLanguages()` — returns all `langId` keys present in the `levels` map; used to distinguish new vs returning users
  - `resetLanguageProgress()` — clears level + completed lessons for one language; used by Profile page "Reset" action

---

## 5. Language Content Data

**Files created:**
- `src/data/languages.ts` — registry of the five languages (`{ id, name, nativeName, flag, script }`)
- `src/data/modules.ts` — static map `langId → LanguageModule`; `getModule(langId)` lookup used by all pages
- `src/data/spanish/index.ts` — 16 grammar lessons, 30 vocab items, 12 verbs (full conjugation tables), 10 placement questions (2/level A1–C1), 45 level-test questions (15 × A1/A2/B1)
- `src/data/french/index.ts` — 14 grammar, 32 vocab, 13 verbs, 10 placement questions, 45 level-test questions
- `src/data/italian/index.ts` — 12 grammar, 28 vocab, 11 verbs, 10 placement questions, 45 level-test questions
- `src/data/japanese/index.ts` — 12 grammar, 28 vocab, 11 verbs; all items include `romanized` fields; 45 level-test questions
- `src/data/korean/index.ts` — 12 grammar, 28 vocab, 11 verbs; all items include `romanized` (Revised Romanization) fields; 45 level-test questions

> B2+ arrays exist in every language file but are intentionally empty — displayed as "coming soon" in the UI.

---

## 6. Shared Components

**Files created:**
- `src/components/LevelBadge.tsx` — small colour-coded pill showing the CEFR level (green A1, teal A2, blue B1, purple B2, orange C1)
- `src/components/ProgressBar.tsx` — animated indigo progress bar with optional text label; accepts `value` (0–100) and optional `className`
- `src/components/QuizCard.tsx` — multiple-choice question card; highlights correct answer green and wrong answer red after the user picks; driven by parent-controlled `correct` prop (`null` = unanswered, `true/false` = result shown)
- `src/components/NavBar.tsx` — sticky top nav bar:
  - `title` prop (displayed text)
  - `level` prop (renders `LevelBadge` inline)
  - `backTo` prop: a path string navigates there; the string `"back"` calls `navigate(-1)` (browser history)
  - Profile icon (`<Link to="/profile">`) and Sign Out button always visible

---

## 7. Core Pages

**Files created:**
- `src/pages/LoginPage.tsx` — email + password form; on success redirects to `location.state.from` (ProtectedRoute saved destination) or `/home`; links to register
- `src/pages/RegisterPage.tsx` — display name + email + password form with `@myorg/validation` rules; on success redirects to `/home`
- `src/pages/LanguageSelectPage.tsx` — grid of all five languages; picks one and navigates to its dashboard; shows back button + "Add a language" heading when a language is already selected (returning user), plain picker for new users
- `src/pages/DashboardPage.tsx` — per-language hub; shows current level card, Study section (Grammar / Vocabulary / Verbs with progress bars), Practice section (Flashcards / Verb Drill / Grammar Drill), and Level Test CTA; `backTo="/home"`
- `src/pages/PlacementPage.tsx` — 10-question adaptive quiz (2 per CEFR level); score table maps result to a suggested level; user can confirm or manually override; saves chosen level to progress store
- `src/pages/GrammarPage.tsx` — collapsible accordion of grammar lessons filtered to current level; each card shows explanation + examples; "Mark complete" button updates progress store
- `src/pages/VocabPage.tsx` — vocabulary cards filtered to current level with All / To Learn / Learned tabs; "Mark as learned" toggles lesson completion in progress store
- `src/pages/VerbsPage.tsx` — conjugation tables for verbs at current level; collapsible per-verb with pronoun + form grid per tense; `romanized` column shown for Japanese/Korean
- `src/pages/LevelTestPage.tsx` — 15-question quiz; pass threshold is 12/15 (80%); on pass advances level in progress store and shows confetti-style result card; on fail shows score and encourages more practice

---

## 8. App Routing

**Files created / updated:**
- `src/App.tsx` — defines all routes inside `<AuthProvider><BrowserRouter>`:
  - Public: `/` (`LandingPage`), `/login`, `/register`
  - Protected: `/home` (`HomePage`), `/languages`, `/learn/:langId` and all sub-routes, `/profile`
  - Fallback `*` → `/`

---

## 9. Profile Page (Phase 1)

Goal: users can view per-language progress and the app remembers the last active language on login.

**Files created:**
- `src/pages/ProfilePage.tsx` — shows user avatar (initials), display name and email from `getUserById()`; per-language cards with grammar/vocab/verbs progress bars + level badge + "Continue" and "Reset progress" buttons; grid of not-yet-started languages with a start link; `backTo="back"` for history-based navigation

**Files updated:**
- `src/auth/mockAuthApi.ts` — added `getUserById(id)` export
- `src/store/progress.ts` — added `getStartedLanguages()` and `resetLanguageProgress()`
- `src/components/NavBar.tsx` — added profile icon SVG `<Link to="/profile">` between level badge and sign out button
- `src/pages/LoginPage.tsx` — post-login redirect uses `location.state.from` or falls back to `/home` (previously hardcoded to `/languages`)
- `src/App.tsx` — added `/profile` protected route

---

## 10. Flashcards, Verb Drill & Grammar Drill (Phase 2)

Goal: active-recall practice modes accessible from the Dashboard and the Home quick-practice strip.

**Files created:**
- `src/pages/FlashcardsPage.tsx` — shuffled deck of vocab items at current level; tap card to flip (3D CSS animation); "Got it" / "Not yet" split the deck; missed cards are reviewed in a second round; shows a completion screen with score
- `src/pages/VerbDrillPage.tsx` — generates up to 10 questions from tense × pronoun combos; distractors sourced from the same verb pool; QuizCard shows verb infinitive and tense as context; tracks correct/total and shows result screen
- `src/pages/GrammarDrillPage.tsx` — shows English translation and asks user to pick the matching native sentence from four options; requires ≥ 4 examples at current level; shows a "not enough content" message otherwise

**Files updated:**
- `src/index.css` — added CSS 3D flip classes: `.card-scene`, `.card-inner`, `.card-inner.flipped`, `.card-face`, `.card-back` (`backface-visibility: hidden`, `rotateY(180deg)`)
- `src/pages/DashboardPage.tsx` — added Practice section with three `SectionCard` links (Flashcards, Verb Drill, Grammar Drill)
- `src/App.tsx` — added three new protected routes: `/learn/:langId/flashcards`, `/learn/:langId/verb-drill`, `/learn/:langId/grammar-drill`

---

## 11. Public Landing Page & Authenticated Home Page

Goal: unauthenticated visitors see a marketing page; authenticated users land on a personalised home screen.

**Files created:**
- `src/pages/LandingPage.tsx` — public marketing page at `/`; redirects authenticated users to `/home`; sections: hero with language flags + CTA, 3-step "How it works" strip, CEFR levels overview, bottom CTA; links to `/register` and `/login`
- `src/pages/HomePage.tsx` — authenticated home; two branches based on `getStartedLanguages().length`:
  - **New user** (`NewUserWelcome`) — first-name greeting, language picker grid; on pick → `setSelectedLanguage` + navigate to dashboard
  - **Returning user** (`ReturningHome`) — time-of-day greeting, "Continue learning" card with three progress bars (grammar/vocab/verbs) + level badge + navigate button, Quick Practice strip (Flashcards / Verb Drill / Grammar Drill), "Your other languages" switcher, "+ Add another language" link

**Files updated:**
- `src/pages/LoginPage.tsx` — redirects to `/home` (was `/languages`)
- `src/pages/RegisterPage.tsx` — redirects to `/home` (was `/languages`)
- `src/App.tsx` — added `LandingPage` at `/` (public) and `HomePage` at `/home` (protected); removed previous `RootRedirect` component

---

## 12. Navigation & Back-Button Consistency

Goal: every page's back button leads to the logically correct previous screen.

**Files updated:**
- `src/components/NavBar.tsx` — `backTo="back"` now calls `navigate(-1)` (browser history) instead of a fixed path; used for pages reachable from multiple locations (Profile, Add Language)
- `src/pages/LanguageSelectPage.tsx` — added `backTo="back"` and context-aware heading/subtitle for returning users adding a second language
- `src/pages/ProfilePage.tsx` — uses `backTo="back"` so the back button always returns to wherever the user came from
- `src/pages/DashboardPage.tsx` — changed `backTo="/languages"` → `backTo="/home"` so "Continue learning" and quick-practice drill-throughs correctly chain back to the home screen

---

## 13. A2 Content Expansion

Goal: fill all A2 content gaps so every language has complete grammar, vocab, verbs, and level-test questions at A2.

**Files updated:**
- `src/data/spanish/index.ts` — added 2 A2 grammar lessons (Direct Object Pronouns, Immediate Future ir+a+inf.), 15 A2 level-test questions
- `src/data/french/index.ts` — added 3 A2 grammar (L'Imparfait, Le Futur Proche, Direct Object Pronouns), 10 A2 vocab, 5 A2 verbs (vouloir, pouvoir, venir, manger, prendre), 15 A2 level-test questions
- `src/data/italian/index.ts` — added 3 A2 grammar (Imperfetto, Verbi Riflessivi, Futuro Semplice), 10 A2 vocab, 4 A2 verbs (volere, potere, venire, mangiare), 15 A2 level-test questions
- `src/data/japanese/index.ts` — added 3 A2 grammar (〜たい, 〜ことができる, Particles に/で), 10 A2 vocab with romaji, 4 A2 verbs with て-forms (見る, 来る, 話す, 書く), 15 A2 level-test questions
- `src/data/korean/index.ts` — added 3 A2 grammar (Past Tense 았/었어요, 〜고 싶다, 〜(으)ㄹ 수 있다/없다), 10 A2 vocab with romanized, 4 A2 verbs with present+past (보다, 오다, 말하다, 쓰다), 15 A2 level-test questions

---

## 14. B1 Content Expansion

Goal: add full B1-level content (grammar, vocab, verbs, level-test questions) across all five languages so users can progress from A2 → B1 → B2.

**Files updated:**
- `src/data/spanish/index.ts` — added 3 B1 grammar lessons (Futuro Simple, Condicional Simple, Por vs Para; two stubs already existed), 10 B1 vocab (connectors: además, sin embargo, por lo tanto, aunque; society: ambiente, desarrollo, sociedad; time: actualmente, de repente + mientras), 4 B1 verbs with Present+Preterite/Future (querer, saber, volver, salir), 15 B1 level-test questions
- `src/data/french/index.ts` — added 4 B1 grammar (Conditionnel Présent, Imparfait vs Passé Composé contrast, Pronoms Relatifs qui/que/dont/où, Plus-que-parfait; one stub already existed), 10 B1 vocab (de plus, en revanche, environ, l'environnement, la société, actuellement, le défi, l'opinion, selon, par contre), 4 B1 verbs with Présent+Conditionnel/Passé Composé (savoir, devoir, mettre, croire), 15 B1 level-test questions
- `src/data/italian/index.ts` — added 4 B1 grammar (Condizionale Presente, Pronomi Relativi che/cui/il quale, Trapassato Prossimo, Futuro Semplice uso avanzato; one stub already existed), 10 B1 vocab (inoltre, tuttavia, quindi, circa, l'ambiente, la società, attualmente, la sfida, secondo, sebbene), 4 B1 verbs with Presente+Condizionale/Passato Prossimo (sapere, dovere, mettere, credere), 15 B1 level-test questions
- `src/data/japanese/index.ts` — added 4 B1 grammar (〜なければならない, 〜てもいい / 〜てはいけない, 〜ようになる, 〜たり〜たりする), 10 B1 vocab with romaji (環境, 社会, 健康, 自由, 機会, 問題, 難しい, 大切, 生活, 意見), 4 B1 verbs with Present/Past polite + て-form (知る, 思う, 使う, 読む), 15 B1 level-test questions
- `src/data/korean/index.ts` — added 4 B1 grammar (~(으)면 conditional, ~아/어서 causal/sequential, ~지만 contrast, ~기 때문에 formal reason), 10 B1 vocab with romanized (환경, 사회, 건강, 자유, 기회, 문제, 어렵다, 중요하다, 생활, 의견), 4 B1 verbs with Present/Past polite + conditional (알다, 생각하다, 사용하다, 읽다), 15 B1 level-test questions
