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

---

## 15. Content Restructure — Modular File Architecture

Goal: replace monolithic `index.ts` per language with a modular folder structure, fix A1 content gaps, expand vocab/verbs to realistic targets, and introduce the `LessonUnit` type for ordered unit-based progression.

### New data structure
Each language `src/data/<lang>/` now contains:
```
grammar/a1.ts  a2.ts  b1.ts
vocab/a1.ts    a2.ts  b1.ts
verbs/a1.ts    a2.ts  b1.ts
units/a1.ts    a2.ts  b1.ts
questions/placement.ts  level-tests.ts
index.ts   ← pure assembler (imports and re-exports all sub-files)
```

### New types added (`src/types/index.ts`)
- `LocalizedText { native: string; target?: string }` — bilingual text container; `native` is always English
- `GrammarLesson.explanation: string | LocalizedText` — backward-compatible union
- `LessonUnit.description: string | LocalizedText` — same
- `LessonUnit` — groups grammar/vocab/verb IDs by topic; has `order`, `testQuestions`, and `level`
- `LanguageModule.units?: LessonUnit[]` — optional for non-migrated languages during transition
- `UserProgress.masteredUnits: Record<string, string[]>` — tracks mastered unit IDs per language

### New progress store functions (`src/store/progress.ts`)
- `getMasteredUnits(langId)` — returns mastered unit ID array
- `masterUnit(langId, unitId)` — marks a unit mastered
- `isUnitUnlocked(langId, unitId, allUnits)` — unit N unlocks when N-1 is mastered; unit 1 always unlocked
- `resetLanguageProgress()` updated to also clear masteredUnits

### Per-language restructure results

| Language | A1 grammar | A1 vocab | A1 verbs | A1 units | A2 units | B1 units |
|---|---|---|---|---|---|---|
| Spanish | 12 → 12 | 10 → 158 | 4 → 7 | 14 full | 7 full | 5 full |
| French | 13 | 10 → 173 | 4 → 7 | 15 full | 4 full | 5 full |
| Italian | 13 | 10 → 152 | 4 → 7 | 15 full | 4 full | 5 full |
| Japanese | 13+1* | 10 → 150 | 4 → 8 | 14+1* full | 4 full | 4 full |
| Korean | 12 | 10 → 150 | 4 → 8 | 12 full | 4 full | 4 full |

*see section 19 for Japanese kanji unit

### Key A1 content fixes applied
- Korean: present (-아요/-어요) and past (-았/었어요) tense moved from A2 → A1 (critical fix)
- Japanese: に/で particles and 〜たい moved from A2 → A1
- Spanish: `ir` verb and `ir a + inf` (futur proche equivalent) moved to A1 bridge
- French: `futur proche` added as A1 bridge unit (unit 15)
- Italian: `futuro prossimo` added as A1 bridge unit
- All languages: vouloir/volere/querer/wollen-equivalent and pouvoir/potere moved to A1 verbs

### A2/B1 vocab expansion
All languages expanded from 10 placeholder items to ~80–88 items at A2 and ~66–80 items at B1, with full `romanized` fields for Japanese and Korean.

**Files created:** all `grammar/`, `vocab/`, `verbs/`, `units/`, `questions/` sub-files for all 5 languages; old monolithic `index.ts` files replaced by pure assemblers.

---

## 16. Unit-Based Progression UI

Goal: expose the `LessonUnit` system through a dedicated Unit page and integrate it into the Dashboard Learning Path tab.

**Files created:**
- `src/pages/UnitPage.tsx` — full unit study page with four tabs:
  - **Grammar** — collapsible accordion per lesson (GrammarAccordion); "Mark as complete" per lesson
  - **Vocab** — expandable row per item (VocabRow) with example sentence; "Mark as learned" per item
  - **Verbs** — conjugation tables (VerbCard) per verb in the unit
  - **Test** — TestOutTab; 80% pass threshold unlocks/masters the unit; retake always available
  - Unit header shows order badge, level badge, mastered state; locked units show a lock screen

**Files updated:**
- `src/pages/DashboardPage.tsx` — added **Path** tab (first tab when units exist); renders ordered `UnitRow` list with lock/unlock/mastered states; unlocked units navigate to `/learn/:langId/units/:unitId`; uses `resolvePrimary()` for bilingual unit descriptions
- `src/App.tsx` — added `/learn/:langId/units/:unitId` protected route

---

## 17. Audio — Web Speech API

Goal: let learners hear correct pronunciation for every target-language string in the app.

**Files created:**
- `src/components/SpeakButton.tsx` — small icon button; calls `window.speechSynthesis` with a `SpeechSynthesisUtterance` at 0.9× rate; cancels any in-progress speech before starting; turns indigo while speaking; language map: `es→es-ES`, `fr→fr-FR`, `it→it-IT`, `ja→ja-JP`, `ko→ko-KR`

**Files updated:**
- `src/pages/UnitPage.tsx`:
  - `VocabRow` — SpeakButton next to each word in the header
  - `GrammarAccordion` — SpeakButton next to each example sentence's native text
  - `VerbCard` — SpeakButton next to verb infinitive

---

## 18. Immersion Progression System

Goal: grammar explanations and unit descriptions progressively shift from English to the target language as the learner advances through CEFR levels.

### Display logic
| Level | Grammar explanation | Unit description | UI shell |
|---|---|---|---|
| A1 | English only | English | English |
| A2 | English + target below (bilingual, native primary) | English | Target language |
| B1 | Target + collapsible English (bilingual, target primary) | Target | Target language |
| B2+ | Target only | Target | Target language |

### Files created
- `src/utils/localizedText.ts` — pure utility:
  - `toLocalized(text)` — normalises `string | LocalizedText` to `LocalizedText`
  - `resolveDisplay(text, level): TextDisplay` — returns `{ mode, text/primary/secondary }` union
  - `resolvePrimary(text, level): string` — returns the primary display string only
- `src/components/LocalizedExplanation.tsx` — level-aware renderer:
  - A1/no target: `<p>{text}</p>`
  - A2: English `<p>` + indigo italic target `<p>` below with left border
  - B1: target `<p>` + "Show/Hide English" toggle button + collapsible English `<p>`
  - B2+: target `<p>` only
  - `langId` prop passed to `getUI()` so Show/Hide labels honour the i18n system
- `src/i18n/strings.ts` — `UIStrings` interface (~40 keys covering tabs, buttons, test flow, level names)
- `src/i18n/en.ts` — English strings (always used at A1)
- `src/i18n/es.ts`, `fr.ts`, `it.ts`, `ja.ts`, `ko.ts` — full target-language translations
- `src/i18n/index.ts` — `getUI(langId, level): UIStrings` (A1→English, A2+→target); `fmt(template, vars)` for `{placeholder}` interpolation

### Files updated
- `src/types/index.ts` — `LocalizedText`, union fields on `GrammarLesson.explanation` and `LessonUnit.description`
- `src/pages/UnitPage.tsx` — `getUI()` called at page level; `ui` prop threaded to GrammarAccordion, VocabRow, TestOutTab; all hardcoded button/label strings replaced with `ui.*`; tab labels from `ui.unitTab*`; `resolvePrimary()` used for unit description header
- `src/pages/DashboardPage.tsx` — `getUI()` called at page level; tab labels, level name, section card titles, level test description all use `ui.*` and `fmt()`
- `src/data/spanish/grammar/a2.ts`, `b1.ts` — all 12 lessons converted to `{ native, target }` (Spanish target explanations)
- `src/data/french/grammar/a2.ts`, `b1.ts` — all 9 lessons converted (French target explanations)
- `src/data/italian/grammar/a2.ts`, `b1.ts` — all 9 lessons converted (Italian target explanations)
- `src/data/japanese/grammar/a2.ts`, `b1.ts` — all 8 lessons converted; **A2 target explanations written in hiragana/katakana only** (no kanji); B1 uses kanji freely
- `src/data/korean/grammar/a2.ts`, `b1.ts` — all 8 lessons converted (Korean target explanations)

---

## 19. Japanese Kanji Scaffolding

Goal: properly sequence kanji learning so A2 immersion is accessible — A1 ends with script recognition, A2 explanations are readable with A1 skills, B1 introduces kanji freely.

**Files updated:**
- `src/data/japanese/grammar/a1.ts` — added lesson `ja-g-a1-14` "Beginner Kanji: 15 Essential Characters": teaches 日・水・山・本・手 / 人・学・生・先・語 / 上・下・中・大・小 using compounds the learner already knows (日本, 日本語, 大学, 学生, 先生); kun'yomi vs on'yomi explained
- `src/data/japanese/units/a1.ts` — added unit 15 "Beginner Kanji" (order 15, references `ja-g-a1-14`); 8 test questions on character recognition and compound reading
- `src/data/japanese/grammar/a2.ts` — all 4 `target` explanation fields rewritten in hiragana/katakana only (no kanji); katakana used only for loanwords (フォーマル, グループ, ルール); verb forms shown as たべる/いく rather than 食べる/行く so learners read patterns without kanji dependency

### Kanji progression design
| Level | Kanji in explanations | Notes |
|---|---|---|
| A1 | Recognised only (15 taught in final unit) | Numbers already taught in grammar lesson 6 |
| A2 | None in `target` explanations; present in example sentences | Examples always use real Japanese |
| B1 | Used freely | Learner has had kanji exposure via examples throughout A2 |

---

## 20. Smarter Quiz Distractors & Tense Label Prominence

Goal: make drill distractors pedagogically meaningful and surface the tense context visually.

**Files updated:**
- `src/pages/VerbDrillPage.tsx`:
  - Tense label changed from faded uppercase text to an indigo pill badge (`bg-indigo-100 text-indigo-700`) so learners see the tense context prominently before answering
  - Distractor selection now prefers same-tense distractors: forms are bucketed by tense in a `Map<string, string[]>`; same-tense pool used when ≥ 3 alternatives available; falls back to all-verb-forms pool otherwise; wrong answers therefore look like plausible conjugations of the same tense rather than random forms
- `src/pages/GrammarDrillPage.tsx`:
  - Grammar examples tagged with `lessonId` via `flatMap(g => g.examples.map(ex => ({ ...ex, lessonId: g.id })))`
  - Same-lesson distractors preferred (≥ 3 available); falls back to all same-level examples; wrong options now contrast within the same grammatical pattern rather than across unrelated topics

---

## 21. NavBar LanguagePicker & Home Page Redesign

Goal: replicate a Duolingo-style in-nav language switcher; enrich the returning-user home page.

**Files created:**
- `src/components/LanguagePicker.tsx` — self-contained dropdown:
  - Trigger: flag image + language name + chevron, sits between title and profile icon in the NavBar
  - Dropdown: horizontally scrollable row of per-language cards (flag, name, level badge, mini progress bar, % complete, ✓ Active indicator); "Add a course" dashed card navigates to `/languages`
  - Outside-click closes via `useRef` + `useEffect` mousedown listener
  - `overallPct()` helper calculates completion % across grammar + vocab + verbs + reading + listening at the current level

**Files updated:**
- `src/components/NavBar.tsx` — added `showLanguagePicker?: boolean` prop; renders `<LanguagePicker />` between title area and profile icon; removed Sign Out button entirely (moved to ProfilePage)
- `src/pages/HomePage.tsx` — `ReturningHome` uses `<NavBar showLanguagePicker />`; body now shows: time-of-day greeting, "Continue learning" card (flag, level, name, button), 5-row progress breakdown (grammar/vocab/verbs/reading/listening — reading and listening only shown when content exists), Quick Practice strip (Flashcards, Verb Drill, Grammar Drill); removed "Your other languages" and "Add another language" sections

---

## 22. Profile Page Redesign (Design 3)

Goal: add the ability to fully remove a language, show richer stats, and keep destructive actions behind progressive disclosure.

**Files updated:**
- `src/store/progress.ts`:
  - `resetLanguageProgress()` — fixed semantics: now keeps the language in the `levels` map at "A1" (clears `completedLessons` and `masteredUnits` only); previously it deleted the language entirely (same effect as remove)
  - `removeLanguage(langId)` — **new** function: fully deletes from `levels`, `completedLessons`, and `masteredUnits`; clears `selectedLanguage` if it matched the removed language
- `src/pages/ProfilePage.tsx` — full rewrite:
  - **User card** — initials avatar, display name, email
  - **Stats strip** — 3 tiles: total items learned (grammar + vocab + verbs completed), languages count, highest CEFR level reached
  - **`LangCard` component** — per started language: flag + name + level badge, overall progress bar, 5-bar breakdown (grammar / vocab / verbs / reading / listening), collapsible "Manage course" danger zone (orange Reset + red Remove buttons in `bg-red-50` panel)
  - **Account section** at bottom with Sign Out button

---

## 23. Flag Images (CDN)

Goal: fix flag rendering on Windows where OS emoji fonts do not support regional indicator sequences.

**Files created:**
- `src/components/Flag.tsx` — maps `langId` to ISO 3166-1 alpha-2 country code (`es→es`, `fr→fr`, `it→it`, `ja→jp`, `ko→kr`); renders `<img>` from `https://flagcdn.com/w{width}/{code}.png` with `srcSet` for 2× HiDPI; sizes: `sm` (20 px), `md` (28 px), `lg` (40 px); no new npm dependencies

**Files updated (flag emoji → `<Flag />` component):**
- `src/pages/LanguageSelectPage.tsx`, `DashboardPage.tsx`, `PlacementPage.tsx`, `HomePage.tsx`, `ProfilePage.tsx`, `components/LanguagePicker.tsx`
- NavBar titles and level headers that previously included flag emoji strings were cleaned up to plain language names

---

## 24. Back Navigation Tab Persistence

Goal: pressing the back button from any Study/Practice sub-page returns to the correct dashboard tab.

**Problem:** `DashboardPage` uses React state for the active tab, which resets on every remount. Sub-pages used `backTo=\`/learn/${langId}\`` — navigating to the URL with no tab param — so the dashboard always defaulted to "Path".

**Solution:**
- `src/pages/DashboardPage.tsx` — active tab synced to URL via `useSearchParams`; initial tab read from `?tab=` param; `switchTab(t)` calls both `setTab(t)` and `setSearchParams({ tab: t }, { replace: true })`
- All sub-pages changed to `backTo="back"` so `navigate(-1)` pops the previous URL (which includes `?tab=study` or `?tab=practice`) rather than navigating to a fresh dashboard URL

**Files updated:** `src/pages/GrammarPage.tsx`, `VocabPage.tsx`, `VerbsPage.tsx`, `ListeningPage.tsx`, `FlashcardsPage.tsx`, `VerbDrillPage.tsx`, `GrammarDrillPage.tsx`, `UnitPage.tsx`, `LevelTestPage.tsx`, `PlacementPage.tsx`, `ReadingPage.tsx`

---

## 25. CE + CO Modules — Reading, Listening, Culture

Goal: implement the CE (Compréhension Écrite) and CO (Compréhension Orale) skill modules with real Spanish proof-of-concept content; expose them in the Dashboard Study tab and add a Culture filter route.

### New types (`src/types/index.ts`)
- `PassageCategory` union — `"everyday" | "culture" | "history" | "literature" | "dialogue"`
- `VocabGloss { word, translation, romanized? }` — in-passage word gloss
- `ReadingPassage { id, level, category, title, body: LocalizedText, vocabGloss, questions }`
- `ListeningExercise { id, level, title, script, translation, questions }`
- `LanguageModule.readingPassages?` and `listeningExercises?` — optional arrays (non-Spanish languages get empty arrays)

### New Spanish content
- `src/data/spanish/reading/a1.ts` — 5 passages: Mi familia, Un día normal, En el café, Los saludos en España, La comida española (80–120 words each, 4–7 vocab glosses, 3 comprehension questions)
- `src/data/spanish/reading/a2.ts` — 4 passages: Las fiestas de España, Los conquistadores, El transporte en Madrid, Una carta de amor (150–200 words, 5–7 glosses, 4 questions)
- `src/data/spanish/listening/a1.ts` — 4 exercises: Buenos días, ¿Cuánto cuesta?, Mi familia, En el restaurante (3–6 sentences, 3 questions each)
- `src/data/spanish/listening/a2.ts` — 4 exercises: El fin de semana, Una receta fácil, Las vacaciones, Noticias del barrio
- `src/data/spanish/index.ts` — updated assembler imports all reading/listening files

Other 4 languages: `readingPassages: []` and `listeningExercises: []` in their `index.ts` assemblers — pages show a "🚧 No passages yet" empty state.

### New components
- `src/components/ListeningPlayer.tsx` — TTS player wrapping `window.speechSynthesis`; Play/Stop toggle + Slow (0.7×) / Normal (1.0×) speed toggle; `onEnded` callback auto-opens comprehension quiz; returns `null` when `speechSynthesis` unavailable

### New pages
- `src/pages/ReadingPage.tsx`:
  - **Browse view**: passage list filtered by level; optional `category` prop pre-filters for Culture route; category colour badges; completion checkmarks
  - **Read view**: passage body (target language); English translation toggle (A1 shown by default, A2 behind toggle, B1+ hidden); vocab gloss panel (collapsible); comprehension quiz via `QuizCard`; sticky "Mark as read" button → `markLessonComplete`
- `src/pages/ListeningPage.tsx`:
  - **Browse view**: exercise list with level badges and completion checkmarks
  - **Listen view**: `ListeningPlayer`; transcript toggle (A1 shown, A2 hidden, B1+ not shown); English translation toggle (A1/A2 only); comprehension quiz; sticky "Mark as listened" button

### Routes (`src/App.tsx`)
- `/learn/:langId/reading` → `<ReadingPage />`
- `/learn/:langId/listening` → `<ListeningPage />`
- `/learn/:langId/culture` → `<ReadingPage category="culture" />`

### Dashboard Study tab (`src/pages/DashboardPage.tsx`)
Expanded from 3 to 6 cards in a 2×3 grid:
- Row 1: Grammar, Vocabulary, Verbs (unchanged, progress bars)
- Row 2: Reading (progress bar), Listening (progress bar), Culture (no progress bar — subset of Reading)

### i18n — new keys across all 6 language files
`sectionReading`, `sectionReadingDesc`, `sectionListening`, `sectionListeningDesc`, `sectionCulture`, `sectionCultureDesc`, `showEnglish`, `hideEnglish`, `showTranscript`, `hideTranscript`, `playAudio`, `stopAudio`, `slowSpeed`, `normalSpeed`, `checkUnderstanding`, `markAsRead`, `passageComplete`, `markAsListened`, `listeningComplete`, `noPassagesYet`, `noExercisesYet`, `showQuestions`, `vocabGlossTitle`, `categoryBadge*` (5 keys)

### Bug fix
- `src/pages/GrammarPage.tsx` — `lesson.explanation` is typed as `string | LocalizedText` but was rendered directly in JSX; fixed by importing `resolvePrimary` and rendering `resolvePrimary(lesson.explanation, level)` instead