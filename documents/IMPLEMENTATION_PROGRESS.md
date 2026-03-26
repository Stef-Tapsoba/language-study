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

---

## 26. Reading & Listening Content — French, Italian, Japanese, Korean

Goal: bring all four remaining languages to parity with Spanish for CE/CO modules at A1/A2.

**Files created per language:**
- `src/data/french/reading/a1.ts`, `a2.ts` — graded passages with vocab glosses + comprehension questions
- `src/data/french/listening/a1.ts`, `a2.ts` — TTS-ready scripts with translation + questions
- `src/data/italian/reading/a1.ts`, `a2.ts`
- `src/data/italian/listening/a1.ts`, `a2.ts`
- `src/data/japanese/reading/a1.ts`, `a2.ts` — all passages include romanized fields
- `src/data/japanese/listening/a1.ts`, `a2.ts`
- `src/data/korean/reading/a1.ts`, `a2.ts` — all passages include romanized (Revised Romanization)
- `src/data/korean/listening/a1.ts`, `a2.ts`

**Files updated:**
- `src/data/french/index.ts`, `italian/index.ts`, `japanese/index.ts`, `korean/index.ts` — assemblers updated to import and spread new reading/listening arrays

---

## 27. Spaced Repetition (SRS/SM-2) for Flashcards

Goal: replace random shuffle with a proper spaced-repetition schedule so the flashcard deck prioritises due and new cards.

**Files created:**
- `src/store/srs.ts` — SM-2 algorithm:
  - `SRSCardState { nextReviewDate, interval, easeFactor, repetitions }`; persisted in `localStorage["ls:srs"]`
  - `getDueCards(langId, allVocabIds)` — returns `{ due: string[], newCards: string[] }`; `newCards` capped at `NEW_CARDS_PER_DAY = 10`
  - `getDueCount(langId, allVocabIds)` — returns `due.length + newCards.length`; used for dashboard badge
  - `updateCard(langId, vocabId, rating)` — updates SM-2 state (rating 1 = incorrect, 4 = correct)
  - `getNextDueDate(langId)` — earliest next review timestamp; shown on the "all caught up" screen
  - `resetSRS(langId)` — deletes all card state for a language

**Files updated:**
- `src/pages/FlashcardsPage.tsx`:
  - `deck` selection: SRS deck (due + capped new) by default; "Study all" fallback; review-mode uses missed cards only
  - `handleResult` — calls `updateCard()` with rating 4 (correct) or 1 (incorrect); skipped in review-mode and study-all
  - "All caught up" screen shown when SRS deck is empty with next-review date and "Study all anyway" button
  - `newCardsScheduled` shown in results screen when new cards were introduced
  - `sessionKey` increments on restart to force SRS deck recalculation
- `src/pages/DashboardPage.tsx` — `getDueCount()` feeds `badge` prop on the Flashcards `SectionCard`
- `src/pages/ProfilePage.tsx` — `handleReset` calls `resetSRS(langId)`; `handleRemove` also calls `resetSRS(langId)`

---

## 28. Text-to-Speech (TTS) via Web Speech API

Goal: let learners hear correct pronunciation throughout the app — auto-played on flashcards, manually triggered everywhere else.

**Files created:**
- `src/utils/tts.ts` — shared helpers:
  - `TTS_LANG_MAP: Record<string, string>` — maps `langId` to BCP-47 locale (`es→es-ES`, `fr→fr-FR`, `it→it-IT`, `ja→ja-JP`, `ko→ko-KR`)
  - `speak(text, langId, rate?)` — fires `window.speechSynthesis`; cancels any in-progress speech first; no-ops silently when API unavailable

**Files updated:**
- `src/components/SpeakButton.tsx` — removed inline `LANG_MAP`; now imports `TTS_LANG_MAP` from `utils/tts`
- `src/pages/FlashcardsPage.tsx`:
  - `deck` refactored from inline function to `useMemo` (required for hooks-before-returns ordering)
  - `useEffect` auto-plays word when `[index, deck]` changes
  - `useEffect` auto-plays example sentence when `[flipped]` changes
  - `useEffect` cleanup cancels speech on unmount (`globalThis.speechSynthesis?.cancel()`)
  - `FlipCard` gets `langId` prop; `SpeakButton` added to word (front face) and example (back face)
- `src/pages/VocabPage.tsx` — `SpeakButton` added next to word in card header and on example sentence box
- `src/pages/VerbsPage.tsx` — `SpeakButton` added next to verb infinitive in `VerbCard` header; `langId` prop threaded down from `VerbsPage` to `VerbCard`

---

## 29. Study Statistics

Goal: track flashcard review history and expose a global streak and per-language bar chart.

**Design decisions:**
- Streak is **global** (any language reviewed that day keeps it alive); not reset when a single language is reset
- Bar chart is **per-language** (Dashboard Stats tab)
- Only flashcard ratings are counted (not grammar/verb drills)

**Files created:**
- `src/store/stats.ts`:
  - Shape: `Record<langId, Record<dateStr, { reviewed: number; correct: number }>>`; persisted in `localStorage["ls:stats"]`
  - `recordReview(langId, correct)` — increments today's bucket
  - `getHistory(langId, days)` — returns last N days padded with zeros (oldest first)
  - `getGlobalStreak()` — walks back from today across all languages; stops at first day with no activity in any language
  - `getTotalReviews(langId)` — all-time review count for a language
  - `resetStats(langId)` — clears per-language history; global streak unaffected since it aggregates all remaining languages

**Files updated:**
- `src/pages/FlashcardsPage.tsx` — `handleResult` calls `recordReview(langId, r === "correct")` for every rating (SRS, review-mode, and study-all)
- `src/components/NavBar.tsx` — calls `getGlobalStreak()` on each render; renders `🔥 Nd` chip between level badge and profile icon when streak > 0
- `src/pages/DashboardPage.tsx`:
  - `DashTab` type extended to include `"stats"`
  - New `StatsTab` component: 2-chip summary row (reviews 14d, accuracy 14d) + CSS-only 14-day bar chart with Monday labels; "Complete a flashcard session" empty state
  - `StatChip` helper component for numeric summary tiles
  - "Stats" added to the tab array
- `src/pages/ProfilePage.tsx`:
  - Stats strip expanded from 3 to 4 chips (2×2 mobile / 4-wide desktop); 4th chip shows `Nd` streak or `—`
  - `handleReset` calls `resetStats(langId)` (clears bar chart data; global streak intact)
  - `handleRemove` calls `resetSRS(langId)` and `resetStats(langId)` (previously omitted)

---

## 30. File Header Standardisation

Goal: every source file opens with a single-line comment showing its path relative to `src/` and a short description of its purpose.

**Format:** `// path/relative/to/src — short description`

**Files updated:** all 31 non-data code files (`App.tsx`, `main.tsx`, all `auth/`, `store/`, `utils/`, `i18n/`, `data/` meta, `pages/`, and `components/` files). Language content data files (`data/spanish/`, etc.) left unchanged — path already self-documents them.

**Changes applied per file:**
- Path-only headers → description added
- Two-line headers (path + description on separate lines) → collapsed to single line
- `src/` prefix on path → stripped (e.g. `// src/store/stats.ts` → `// store/stats.ts`)

---

## 31. v2.0.0 Release

**Files updated:**
- `package.json` — version bumped `0.1.0` → `2.0.0`

**v2 features shipped:** SRS/SM-2 flashcards, TTS (Web Speech API), study statistics + global streak, reading/listening content for all 5 languages, standardised file headers.

---

## 32. B2 Content — All 5 Languages

Goal: fill full B2 (Upper Intermediate) content across all five languages.

**Per language (30 new files total, 6 per language × 5 languages):**
- `src/data/<lang>/grammar/b2.ts` — 5 grammar lessons per language
- `src/data/<lang>/vocab/b2.ts` — 80 vocab items per language
- `src/data/<lang>/verbs/b2.ts` — 3 verbs with 2–3 tenses each
- `src/data/<lang>/units/b2.ts` — 5 units × 6 embedded questions
- `src/data/<lang>/reading/b2.ts` — 4 reading passages (category: everyday/culture/history/literature)
- `src/data/<lang>/listening/b2.ts` — 4 listening exercises

**Per language (3 files updated, 3 per language × 5 languages):**
- `src/data/<lang>/questions/level-tests.ts` — added 15 B2 level-test questions per language
- `src/data/<lang>/index.ts` — assembler updated to spread B2 arrays into grammar/vocab/verbs/units/readingPassages/listeningExercises

Placement questions for B2 already existed in all 5 languages (no changes needed).

**B2 grammar topics per language:**
- Spanish: Imperfecto de Subjuntivo, Condicional Compuesto, Por/Para avanzado, Construcciones Pasivas, Se impersonal y pasivo
- French: Subjonctif Présent, Conditionnel Passé, Pronoms Relatifs Avancés, Voix Passive, Discours Indirect
- Italian: Congiuntivo Presente/Passato, Condizionale Passato, Pronomi Relativi, Forma Passiva, Discorso Indiretto
- Japanese: Causative-passive (~させられる), Advanced conditionals (~たら/~ば/~なら contrast), Formal requests (~ていただけますか), Humble/respectful patterns advanced, Nominalisation (~こと/~の)
- Korean: Advanced honorifics (-(으)시-), Indirect speech (~다고 하다), -아/어지다 change-of-state, Formal connectors (-(으)므로, -는데), Passive voice (이/히/리/기)

---

## 33. C1 Content — All 5 Languages

Goal: fill full C1 (Advanced) content across all five languages.

**Per language (30 new files total):** same structure as B2 — grammar/b2 → grammar/c1, etc.

**Per language (2 files updated, 2 per language × 5 languages):**
- `src/data/<lang>/questions/level-tests.ts` — added 15 C1 level-test questions per language
- `src/data/<lang>/index.ts` — assembler updated to spread C1 arrays

Placement questions for C1 already existed in all 5 languages (no changes needed).

**C1 grammar topics per language:**
- Spanish: Subjuntivo Pluscuamperfecto, Condicional Compuesto (Type-3), Construcciones Impersonales Avanzadas, Registro Formal y Nominalizaciones, Expresiones Idiomáticas
- French: Subjonctif Imparfait (literary), Passé Simple (literary), Discours Indirect Avancé, Constructions Impersonnelles et Nominalisations, Expressions Idiomatiques et Registre Académique
- Italian: Congiuntivo Trapassato, Periodo Ipotetico di 3° tipo, Stile Nominale e Registro Formale, Costruzioni Impersonali Avanzate, Passato Remoto (literary)
- Japanese: Formal/Literary Connectors (につき, に際して, をもって), 四字熟語, Indirect/Hedged Expressions, Advanced Conditionals (~ともなると, ~ならではの), Formal/Literary Copula (である, ものだ)
- Korean: Formal Written Structures (-(으)므로, -는바), Advanced Modality (-(으)ㄹ 만하다, -기는커녕), Discourse Cohesion (즉, 나아가), Classical/Literary Forms (-노라, -이라), 사자성어 & 속담

---

## 34. v2.1.0 — Culture Page, Grammar Detail, Wrong Answer Review

Goal: three non-breaking UX improvements + version bump.

### Feature 1 — Dedicated Culture Page

**Files created:**
- `src/pages/CulturePage.tsx` — replaces the generic `ReadingPage category="culture"` route with a dedicated "Cultural Insights" layout; amber-themed colour scheme; language hero banner (flag + name + "Cultural Insights" subtitle); shows culture-category reading passages with comprehension questions; reuses existing culture-category reading data

**Files updated:**
- `src/App.tsx` — `/learn/:langId/culture` now renders `<CulturePage />` instead of `<ReadingPage category="culture" />`

### Feature 2 — Grammar Lesson Detail Page

**Files created:**
- `src/pages/GrammarLessonPage.tsx` — full lesson detail view at `/learn/:langId/grammar/:lessonId`; shows lesson title + LevelBadge, explanation (via `resolvePrimary` — immersion-aware), all examples with `SpeakButton` and romanized where applicable, "Mark as complete" button

**Files updated:**
- `src/pages/GrammarPage.tsx`:
  - `LessonCard` component changed from an inline-expand accordion to a `<Link>` pointing to the detail page
  - Removed inline body (explanation, examples, mark-complete button) — these now live on `GrammarLessonPage`
  - Removed unused imports (`markLessonComplete`, `resolvePrimary`, `useState` expand state)
- `src/App.tsx` — added route `/learn/:langId/grammar/:lessonId` → `GrammarLessonPage`

### Feature 3 — Wrong Answer Review

**`src/hooks/useDrill.ts`:**
- Added `MissedEntry<Q>` interface — `{ question: Q; yourAnswer: string }`
- Added `missed: MissedEntry<Q>[]` state
- `handleNext()` — pushes to `missed` when selected is incorrect
- Keyboard handler — same logic on Enter/Space advance
- `restart()` — resets `missed` to `[]`
- Return value now includes `missed`

**`src/components/DrillDoneScreen.tsx`:**
- Added `MissedReviewItem` interface — `{ prompt: string; correct: string; yourAnswer: string }`
- Added optional `missed?: MissedReviewItem[]` prop (defaults to `[]`)
- Added collapsible "Review mistakes (N)" section below the score card; each item shows: prompt in gray, correct answer in green, wrong answer in red

**`src/pages/VerbDrillPage.tsx`:**
- Passes `missed` from `useDrill` to `DrillDoneScreen`; maps `MissedEntry<DrillQuestion>` → `MissedReviewItem` using `${verb.infinitive} — ${tense} — ${pronoun}` as the prompt

**`src/pages/GrammarDrillPage.tsx`:**
- Same pattern; maps `MissedEntry<DrillQuestion>` → `MissedReviewItem` using `m.question.prompt`

**`src/pages/LevelTestPage.tsx`:**
- Added `missed: QuizQuestion[]` state and `reviewOpen: boolean` state
- `handleNext()` — pushes `questions[current]` to `missed` when incorrect
- `handleRetry()` — resets `missed` and `reviewOpen`
- Added `QuizQuestion` to imports
- Result screen has same collapsible "Review mistakes" section; shows prompt + correct answer per missed question

### Version bump
- `package.json` — `"version": "2.0.0"` → `"2.1.0"`

---

## 35 — Package wiring: @myorg/quiz-engine, @myorg/tts, @myorg/srs

**Commit:** `b5c9d54`

Wired three new monorepo packages into the language-study app so shared logic lives in publishable packages rather than app source.

### Packages added
- **`@myorg/quiz-engine`** (`../packages/quiz-engine/src`) — `useDrill` hook and `DrillDoneScreen` component moved here
- **`@myorg/tts`** (`../packages/tts/src`) — TTS engine and `SpeakButton` component
- **`@myorg/srs`** (`../packages/srs/src`) — SM-2 spaced-repetition algorithm

### Files modified
- **`vite.config.ts`** — added three `resolve.alias` entries pointing to each package's `src/` directory
- **`tsconfig.json`** — added matching `paths` entries so TypeScript resolves the same aliases
- **`src/hooks/useDrill.ts`** — replaced with a 3-line re-export from `@myorg/quiz-engine`
- **`src/utils/tts.ts`** — delegates core engine to `@myorg/tts` while keeping the app-specific `TTS_LANG_MAP`

### Infrastructure note
TypeScript resolution required a symlink: `packages/node_modules → language-study/node_modules`. Without it, `@myorg/quiz-engine`'s `react` import couldn't resolve because module resolution walks up from the package source directory, not from the app root.

---

## 36 — A1 content expansion (all 5 languages)

**Commit:** `a4ac8bc`

Expanded A1 content across every language to give learners a fuller foundation before advancing to A2.

### Content added per language (total across all 5)
- **Grammar:** 10 new lessons (2 per language) — e.g., reflexive verbs (ES), adjective agreement (FR/IT), particles は/が distinction (JA), subject markers 은/는/이/가 (KO)
- **Verbs:** 30 new A1 verbs (6 per language) — high-frequency verbs covering daily actions
- **Vocab:** Additional sets for FR, IT, JA — home objects, food/drink, daily routine
- **Units:** New "Likes & Dislikes" units for FR, IT, JA with fully wired lesson references; all 5 languages had unit lesson arrays audited and corrected

### Files modified
- `src/data/spanish/grammar/a1.ts`, `verbs/a1.ts`
- `src/data/french/grammar/a1.ts`, `verbs/a1.ts`, `vocab/a1.ts`, `units/a1.ts`
- `src/data/italian/grammar/a1.ts`, `verbs/a1.ts`, `vocab/a1.ts`, `units/a1.ts`
- `src/data/japanese/grammar/a1.ts`, `verbs/a1.ts`, `vocab/a1.ts`, `units/a1.ts`
- `src/data/korean/grammar/a1.ts`, `verbs/a1.ts`, `units/a1.ts`

---

## 37 — Progress export and device-only storage warning

**Commit:** `2201d53`

Added a JSON backup export feature and a clear storage warning to the Profile page.

### Export function (`src/pages/ProfilePage.tsx`)
```ts
function exportProgress(): void {
    const data = {
        exportedAt: new Date().toISOString(),
        appVersion: "2.2.0",
        progress: JSON.parse(localStorage.getItem("ls:progress") ?? "{}"),
        srs:      JSON.parse(localStorage.getItem("ls:srs")      ?? "{}"),
        stats:    JSON.parse(localStorage.getItem("ls:stats")    ?? "{}"),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement("a")
    a.href = url
    a.download = `language-study-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
}
```

### UI additions
- **Amber warning banner** — explains that progress is stored only on this device and is not backed up to a server
- **"Export progress (JSON)" button** — triggers the download; placed in a new "Data & backup" section between the language cards and the Account section
- **Module pre-fetch** — `ProfilePage` now calls `loadModule()` for every started language so progress percentages render immediately on load

---

## 38 — Lazy-load language data chunks

**Commit:** `a888814`

Reduced the initial bundle from ~2.27 MB (single chunk) to ~334 KB by switching from static to dynamic language imports.

### Problem
`src/data/modules.ts` previously imported all five language index files statically at the top level. Vite bundled every language's grammar, vocab, verbs, units, reading, listening, and culture data into the main chunk — 2.27 MB before gzip, triggering Vite's chunk-size warning.

### Solution

**`src/data/modules.ts` — rewritten:**
```ts
const loaders: Record<string, () => Promise<{ default: unknown }>> = {
    es: () => import("./spanish"),
    fr: () => import("./french"),
    it: () => import("./italian"),
    ja: () => import("./japanese"),
    ko: () => import("./korean"),
}
const cache: Record<string, LanguageModule> = {}

export function getModule(langId: string): LanguageModule | null {
    return cache[langId] ?? null  // sync, used by all pages
}

export async function loadModule(langId: string): Promise<void> {
    if (cache[langId] || !loaders[langId]) return
    const m = await loaders[langId]()
    cache[langId] = norm(m.default)
}
```

**`src/App.tsx` — `LanguageLoader` layout component:**

All `/learn/:langId/*` routes are nested under a single `<ProtectedRoute><LanguageLoader /></ProtectedRoute>`. `LanguageLoader` calls `loadModule(langId)` and shows a spinner until the chunk resolves, then renders `<Outlet />`. This guarantees that `getModule()` never returns `null` for the active language inside any child route.

**Pre-fetch in navigation paths:**
- `src/pages/LanguageSelectPage.tsx` — calls `loadModule(langId)` immediately on language pick, before `navigate()`, so the chunk starts loading during the navigation transition
- `src/pages/HomePage.tsx` — calls `loadModule(selectedLangId)` in a `useEffect` and stores the result in component state so the home page stats render correctly
- `src/pages/ProfilePage.tsx` — calls `Promise.all(startedIds.map(loadModule))` on mount so progress percentages for all languages render without a manual refresh

### Result
| Chunk | Size | Gzipped |
|-------|------|---------|
| Main bundle | 334 KB | 93 KB |
| Spanish (`es`) | ~390 KB | ~115 KB |
| French (`fr`) | ~390 KB | ~118 KB |
| Italian (`it`) | ~388 KB | ~116 KB |
| Japanese (`ja`) | ~395 KB | ~146 KB |
| Korean (`ko`) | ~392 KB | ~138 KB |

No Vite chunk-size warnings. Only the active language's chunk loads at runtime.

---

## 39 — Netlify SPA redirect rule

**Commit:** `94c3298`

Added `public/_redirects` so Netlify serves `index.html` for all routes, enabling client-side navigation on hard refresh or direct URL access.

### File created: `public/_redirects`
```
/* /index.html 200
```

Vite copies everything in `public/` into `dist/` at build time. When the user uploads the `dist/` folder to Netlify, the `_redirects` file is included automatically — no additional Netlify dashboard configuration required.

---

## 40 — B1 content expansion (all 5 languages)

**Commit:** `a78e684`

Full B1-level content across all five languages — grammar, vocab, verbs, and ordered lesson units — replacing the earlier stubs that covered only tense drilling.

### Content added per language

| Category | Per language | Total (5 langs) |
|----------|-------------|-----------------|
| Grammar lessons | 3–5 new lessons | ~20 lessons |
| Lesson units | 3–5 new units (incl. consolidation) | ~22 units |
| Vocab items | 14 new items | 70 items |
| Verbs | 2 new entries | 10 entries |

### Grammar topics added (examples)
- **ES:** Si-clauses (all 3 types), Estilo Indirecto, Discourse Markers & Collocations
- **FR:** Si-clauses, Passive Voice, Double Object Pronouns, Discourse Markers, Le Discours Indirect
- **IT:** Periodo Ipotetico, Discorso Indiretto, Discourse Markers & Collocations
- **JA:** Conditionals (ば/たら/と), 〜んです, Passive 〜られる, Clause Linking (ので/のに/けど)
- **KO:** Reported Speech (~다고), Obligation/Attempt (~야 하다/~어 보다), Nominalisation, Connector Register

### Additional fixes (applied in same commit)
- **FR:** Added `fr-g-b1-10` (Le Discours Indirect), `fr-b1-u10` unit with 6 test questions, `fr-vb-b1-7` (dire with reported speech conjugations)
- **ES:** Replaced shallow `es-b1-u1` "Habitual Past" stub with "Complex Past Narration" unit (preterite / imperfect / pluperfect interaction); added REVIEW comment on `es-g-b1-2`
- **JA/KO:** Full replacement of `b1Verbs` arrays — old stubs with only Present/Past/Te-form replaced with 4 richer verbs each demonstrating B1-specific patterns (conditionals, passive, ~んです, reported speech, nominalisation, clause linking)

### Files modified
- `src/data/{es,fr,it,ja,ko}/units/b1.ts` — new/replaced units
- `src/data/{es,fr,it,ja,ko}/grammar/b1.ts` — new grammar lessons
- `src/data/{es,fr,it,ja,ko}/vocab/b1.ts` — 14 new vocab items each
- `src/data/{es,fr,it,ja,ko}/verbs/b1.ts` — new/replaced verb entries

---

## 41 — B2/C1 content expansion (all 5 languages)

**Commit:** `d38d7ad`

Additional B2 and C1 content across all five languages — units, grammar lessons, vocab items, and one verb entry per language at B2.

### Content added per language

| Category | B2 | C1 |
|----------|----|----|
| Lesson units | 3 new units | 1 new unit |
| Grammar lessons | 3 new lessons | 1 new lesson |
| Vocab items | 12 new items | 4 new items |
| Verbs | 1 new entry | — |

### Grammar topics added
- **ES B2:** Mixed conditionals (si + pluperfect subj. → cond. simple), concessive subjunctive / ser vs estar advanced, formal register & idioms; **ES C1:** Full subjunctive system (all 4 tenses) + C1 academic discourse (cabe señalar, en aras de, a tenor de)
- **FR B2:** Mixed conditionals, advanced discourse connectors, formal register & French idioms; **FR C1:** Stylistic register variation + C1 formal constructions
- **IT B2:** Periodo ipotetico misto, congiuntivo concessivo + B2 connectors, register & idioms; **IT C1:** Full congiuntivo system + C1 style
- **JA B2:** Formal written Japanese patterns, tendency/uncertainty grammar (~がち, ~かねる, ~に違いない), register mastery; **JA C1:** Keigo full production under pressure
- **KO B2:** Inevitability & concession (~(으)ㄹ 수밖에 없다, ~더라도), honorific nouns, formal written register; **KO C1:** Seamless honorific switching & C1 formal mastery

### Vocab highlights
- **ES:** `por mucho que`, `habida cuenta de`, `no obstante`, `en aras de`, `a tenor de`, `dar en el clavo`, `estar en las nubes`, `no hay mal que por bien no venga`
- **FR:** `quoi que`, `nonobstant`, `avoir beau`, `en dépit de`, `il va sans dire`, `savoir-faire`
- **IT:** `ciononostante`, `a prescindere da`, `fare il punto su`, `vale a dire`, `di buon grado`
- **JA:** `〜に越したことはない`, `〜をものともせず`, `忖度`, `腑に落ちない`
- **KO:** `는바`, `〜(으)ㄹ 만하다`, `기는커녕`, `자업자득`

### Files modified
- `src/data/{es,fr,it,ja,ko}/units/b2.ts` and `units/c1.ts`
- `src/data/{es,fr,it,ja,ko}/grammar/b2.ts` and `grammar/c1.ts`
- `src/data/{es,fr,it,ja,ko}/vocab/b2.ts` and `vocab/c1.ts`

---

## 42 — Japanese A1 hiragana compliance + culture/grammar fixes (all 5 languages)

### A1 culture fixes — all 5 languages

**Policy applied:**
- `cultureVocab` entries replaced to match words that actually appear in each episode's `simpleTarget` (simplified body text), so learners can look up words they just encountered
- Reflection and comparison question `target` fields changed to English (matching `native`) — target-language prompts are inappropriate at A1
- Japanese culture: all kanji converted to hiragana/katakana throughout (`title.target`, photo captions, `body.target`, `simpleTarget`, vocab `word` fields, question `target` prompts, `didYouKnow.target`)

**Per-language culture vocab updated:**
- **ES ep1:** `la comida`, `el desayuno`, `la cena`, `las familias`, `el mediodía`; ep2: `el mercado`, `las frutas y verduras`, `la comunidad`, `el tianguis`, `tradicional`
- **FR ep1:** `la baguette`, `la boulangerie`, `le quartier`, `célèbre`, `les Français`; ep2: `francophone`, `la francophonie`, `une langue internationale`, `utile`, `des millions`
- **IT ep1:** `il caffè`, `il bar`, `l'espresso`, `il cappuccino`, `il mattino`; ep2: `il nord`, `il sud`, `la regione`, `la cucina`, `la pasta al pomodoro`
- **KO ep1:** `눈치`, `기분`, `능력`, `사회생활`, `신호`; ep2: `밥`, `반찬`, `김치`, `식사`, `나눔`
- **JA ep1:** `おじぎ`, `あいさつ`, `かんしゃ`, `しゃざい`, `すみません`; ep2: `いただきます`, `ごちそうさまでした`, `かんしゃ`, `たべもの`, `コンビニ`

### Japanese A1 vocab overhaul (`src/data/japanese/vocab/a1.ts`)

- ~95 `word` fields converted from kanji to hiragana across all categories (numbers, days/time, family, food, body, colours, clothing, places, professions, adjectives, seasons)
- Words kept in kanji (with hiragana reading added in Japanese parentheses): days of week (月曜日（げつようび）etc.), 水（みず）, 手（て）, 本（ほん）, 大学（だいがく）, 学生（がくせい）, 先生（せんせい）, 日本（にほん）, 日本語（にほんご）, 友達（ともだち）, 家族（かぞく）, 子供（こども）, 大きい（おおきい）, 小さい（ちいさい）
- **15 Kanji category entries added** (IDs 156–170) to support the U18 Beginner Kanji unit — one entry per essential kanji: 山、人、上、下、中、日、水、本、学、生、先、語、大、小、手

### Japanese A1 grammar examples (`src/data/japanese/grammar/a1.ts`)

- All `native` fields in `examples` arrays converted to hiragana/katakana across 14 lessons (ja-g-a1-0, 6–13, 15–16, 18–19, 22)
- Katakana loanwords (コーヒー, テレビ, レストラン, バス, チケット, スポーツ etc.) retained as katakana
- Kanji lesson (ja-g-a1-14) left unchanged — showing kanji is its purpose
- Translation fields updated where they referenced kanji forms in conjugation notes (e.g. "(食べる → 食べます)" → "(たべる → たべます)")

### Files modified
- `src/data/{es,fr,it,ja,ko}/culture/a1.ts` — culture vocab + reflection/comparison question language
- `src/data/japanese/vocab/a1.ts` — hiragana conversion, kanji parenthetical readings, 15 Kanji entries (156–170)
- `src/data/japanese/grammar/a1.ts` — example `native` fields converted to hiragana/katakana
- `documents/A1-Guide.md` — updated Japanese writing system description
- `README.md` — updated Japanese A1 vocab count (150 → 170)
- `src/data/{es,fr,it,ja,ko}/verbs/b2.ts`
---

## 43 — Zustand stats store migration

Replaced hand-rolled localStorage adapter (`src/store/stats.ts`) with a Zustand store backed by `zustand/middleware` `persist`.

### Key changes

- **`src/store/useStatsStore.ts`** — new store (previously existed as a thin wrapper; now the canonical implementation)
  - `create()` + `persist()` with `createJSONStorage(() => debouncedLocalStorage(500))`
  - Debounced write adapter: per-key `setTimeout` prevents rapid flashcard-flip writes from hammering `localStorage`; last value always flushed after 500 ms of quiet
  - `version: 1` + `migrate()`: detects pre-Zustand raw `StatsData` shape (no `data` key) and upgrades automatically on first load
  - Actions: `recordActivity`, `recordQuizAnswer`, `resetStats`
  - Selectors: `getGlobalStreak(data)`, `getDailyStats(data, langId)`, `getTodayStats(data, langId)`

- **`src/store/stats.ts`** — **deleted** (was a shim re-exporting from `useStatsStore`; had zero callers after migration)

- **7 pages migrated** off the shim: `CulturePage`, `VerbDrillPage`, `GrammarDrillPage`, `UnitPage`, `ListeningPage`, `ReadingPage`, `FlashcardsPage`
  - `import { recordX } from "../store/stats"` → `import { useStatsStore } from "../store/useStatsStore"`
  - Call sites: `recordActivity(langId)` → `useStatsStore.getState().recordActivity(langId)` etc.

### localStorage format change

| Before | After |
|---|---|
| `ls:stats` → raw `StatsData` object | `ls:stats` → `{ state: { data: StatsData }, version: 1 }` |

Migration is handled automatically by `migrate()` on first load.

---

## 44 — shadcn/ui infrastructure

Added shadcn/ui primitive component library for consistent, accessible UI atoms.

### Setup
- `components.json` — shadcn config (style: "default", baseColor: "slate", CSS variables enabled)
- `tailwind.config.js` — extended with `shadcn` CSS variable tokens + `tailwindcss-animate`
- `src/index.css` — `:root` + `.dark` CSS variable blocks for shadcn theming

### Components added
- `src/components/ui/button.tsx` — `Button` with variant/size props (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`)
- `src/components/ui/badge.tsx` — `Badge` with variant props
- `src/components/ui/progress.tsx` — `Progress` (Radix `ProgressPrimitive` with animated indicator)
- `src/components/ui/card.tsx` — `Card`, `CardHeader`, `CardContent`, `CardFooter`, `CardTitle`, `CardDescription`
- `src/lib/utils.ts` — `cn()` helper (`clsx` + `tailwind-merge`)

---

## 45 — Vitest unit test suite

Added Vitest with jsdom and `@testing-library/jest-dom` for unit testing.

### Setup
- `vitest.config.ts` — `environment: "jsdom"`, `setupFiles: ["src/test/setup.ts"]`
- `src/test/setup.ts` — imports `@testing-library/jest-dom`; provides `InMemoryStorage` class for test isolation (replaces `window.localStorage` so tests don't share state)

### Test files (co-located with source)
- `src/store/useStatsStore.test.ts` — covers `recordActivity`, `recordQuizAnswer`, `resetStats`, `getGlobalStreak`, `migrate()` (pre-Zustand format → v1)
- `src/utils/answerMatch.test.ts` — covers `normalizeAnswer`, `answersMatch` with accent stripping, case folding, punctuation, and Japanese/Korean passthrough

### Test organisation decision
Tests are **co-located** with source files (`*.test.ts` next to the module). `src/test/` is reserved for shared infrastructure only (setup, helpers, fixtures). Rationale: co-location makes it obvious when a module lacks tests and keeps related files together during refactors.

---

## 46 — Performance + architecture fixes

### `useGlobalStreak` hook (`src/hooks/useGlobalStreak.ts`)
- Returns `useStatsStore(s => getGlobalStreak(s.data))` — integer selector
- Zustand's default strict equality (`===`) means `NavBar`, `StatsTab`, and `ProfilePage` only re-render when the streak *number* changes, not on every store write
- Replaces inline `useStatsStore(s => s.data)` + `getGlobalStreak(data)` pattern in all three consumers

### GPU-composited progress bars
- **Before:** `width: ${pct}%` — triggers layout on every animation frame
- **After:** `transform: scaleX(${pct / 100})` + `origin-left` — compositor-only, no layout
- Applied in: `src/components/ProgressBar.tsx`, `src/components/StatsTab.tsx` (breakdown bars), `src/pages/ProfilePage.tsx` (overall + breakdown bars)

### Files modified
- `src/hooks/useGlobalStreak.ts` (new)
- `src/components/NavBar.tsx` — uses `useGlobalStreak()`
- `src/components/StatsTab.tsx` — uses `useGlobalStreak()`; GPU bars
- `src/components/ProgressBar.tsx` — GPU bars; `Readonly<>` on props
- `src/pages/ProfilePage.tsx` — uses `useGlobalStreak()`; GPU bars

---

## 47 — Back navigation redesign

### Problem
`navigate(-1)` breaks when a user arrives via direct URL or deep link: `history.length === 1`, so "back" exits the app or does nothing.

### Design
- All pages use **explicit `backTo` route strings** on `NavBar` — no reliance on browser history
- `NavBar` gains a `fallbackRoute` prop: used only when `backTo="back"` and `globalThis.history.length <= 1`
- `DrillDoneScreen` gains a `backTo` prop passed from the caller, so the done-screen NavBar also uses an explicit destination
- `window.history` → `globalThis.history` throughout (SonarQube S7764)

### Pages updated

| Page | backTo |
|---|---|
| FlashcardsPage (all 5 NavBars) | `` `/learn/${langId}` `` |
| VerbDrillPage (2 NavBars) | `` `/learn/${langId}` `` |
| GrammarDrillPage (2 NavBars) | `` `/learn/${langId}` `` |
| UnitPage (3 NavBars) | `` `/learn/${langId}` `` |
| GrammarPage | `` `/learn/${langId}` `` |
| GrammarLessonPage (2 NavBars) | `` `/learn/${langId}/grammar` `` |
| VocabPage | `` `/learn/${langId}` `` |
| VerbsPage | `` `/learn/${langId}` `` |
| ReadingPage | `` `/learn/${langId}` `` |
| ListeningPage (2 NavBars) | `` `/learn/${langId}` `` |
| CulturePage | `` `/learn/${langId}` `` |
| CategoryReadingPage | `` `/learn/${langId}` `` |
| PlacementPage (2 NavBars) | `"/home"` |
| LevelTestPage (4 NavBars) | `` `/learn/${langId}` `` |
| ProfilePage | `backTo="back" fallbackRoute="/home"` (may be reached from multiple places) |

### Files modified
- `src/components/NavBar.tsx` — `fallbackRoute` prop; `globalThis.history`; `handleBack` logic
- `src/components/DrillDoneScreen.tsx` — `backTo` prop
- All 14 page files above

---

## 48 — French A1 curriculum completion (professor agent)

Goal: bring French A1 to a complete, CEFR-aligned curriculum covering all five competency domains (grammar, vocab, listening, reading, culture) with proper inter-unit linkage.

### Vocab gap analysis + additions (`src/data/french/vocab/a1.ts`)
- **Deduplication:** removed `fatigué/fatiguée` (id 222) and `le médecin` (id 223) — both were duplicates of earlier entries
- **Transport (10 items, ids 246–255):** `le métro`, `le bus`, `la voiture`, `le taxi`, `le train`, `l'avion`, `le vélo`, `à pied`, `la gare`, `l'arrêt de bus`
- **Emergency/Health (5 items, ids 256–260):** `au secours`, `les urgences`, `la pharmacie`, `le médecin`, `appeler la police`
- **Classroom (7 items, ids 261–267):** `le cahier`, `le stylo`, `le tableau`, `le professeur`, `la leçon`, `répéter`, `comprendre`
- **Shopping/Payment (6 items, ids 268–273):** `payer`, `la carte bancaire`, `le reçu`, `la monnaie`, `ça coûte combien ?`, `c'est trop cher`

### New reading passage (`src/data/french/reading/a1.ts`)
- `fr-r-a1-7` "Une carte postale" — CEFR A1 postcard model text; introduces holiday/travel registers

### New listening exercises (`src/data/french/listening/a1.ts`)
- `fr-l-a1-6` "Demander son chemin" — asking for directions; key spatial vocab and polite requests
- `fr-l-a1-7` "Au restaurant — commander un repas" — ordering a meal; lexical complement to `fr-r-a1-4`

### New culture episodes (`src/data/french/culture/a1.ts`)
- `fr-c-a1-3` "Le café en France" — social and cultural role of the café; ties to eating/drinking vocab
- `fr-c-a1-4` "La famille française" — family structures; ties to family vocab unit

### Unit wiring (`src/data/french/units/a1.ts`)
All French A1 units audited for content linkage. Key updates:

| Unit | Change |
|------|--------|
| U1 | `listeningIds: ["fr-l-a1-1"]` |
| U2 | `listeningIds: ["fr-l-a1-4"]` |
| U14 | `listeningIds: ["fr-l-a1-3"]` |
| U19 | `readingIds: ["fr-r-a1-5"]` |
| U20 | `cultureIds: ["fr-c-a1-4"]`, `readingIds: ["fr-r-a1-1"]` |
| U22 | `cultureIds: ["fr-c-a1-1", "fr-c-a1-3"]`, `readingIds: ["fr-r-a1-3"]`, `listeningIds: ["fr-l-a1-2", "fr-l-a1-7"]` |
| U23 | `readingIds: ["fr-r-a1-2", "fr-r-a1-4", "fr-r-a1-6"]`, `listeningIds: ["fr-l-a1-6"]` |
| U27 | `readingIds: ["fr-r-a1-7"]`, `listeningIds: ["fr-l-a1-5"]` |

### Type extension (`src/types/index.ts`)
- Added `readingIds?: string[]` to `LessonUnit` — references `ReadingPassage.id` items linked to this unit
- Added `listeningIds?: string[]` to `LessonUnit` — references `ListeningExercise.id` items linked to this unit
- Added `language?: string` (optional, e.g. `"fr"`) to `GrammarLesson`, `VocabItem`, `Verb`, `ReadingPassage`, `ListeningExercise` — required after Supabase migration, optional now

---

## 49 — Culture post-unit unlock UI

Goal: surface culture episodes contextually at the moment the learner completes a unit, rather than only via the standalone Culture page.

### Design (UX/UI designer consultation)
- Culture cards appear on `TestDoneScreen` only when: test passed AND unit is mastered (or re-completed)
- Amber colour scheme (`amber-50` bg, `amber-200` border, `amber-700` text) — visually distinct from pass/fail states
- Category emoji prefix (`🍽️ food`, `🎭 customs`, `🏛️ history`, etc.)
- Tappable card navigates directly to `/learn/:langId/culture?episode=<id>` → deep-links into the CulturePage episode view

### Implementation (`src/pages/UnitPage.tsx`)
- Added `CULTURE_CATEGORY_EMOJI: Record<string, string>` at module scope (10 categories)
- `TestDoneScreen` signature extended: `cultureEpisodes: CultureEpisode[]` + `onNavigateCulture: (id: string) => void`
- `cultureEpisodes` resolved via `useMemo` from `unit.cultureIds` using `getCultureEpisodes(langId, unit.cultureIds ?? [])`
- Culture card section renders between MistakeReview and navigation buttons when `passed && (isMastered || didComplete) && cultureEpisodes.length > 0`
- `onNavigateCulture` callback: `navigate(\`/learn/${langId}/culture?episode=${id}\`)`

### i18n (`src/i18n/*.ts` — 6 files)
- Added `cultureUnlockHeading: "Unlock with this unit"` to `strings.ts` interface + all 6 translation files

---

## 50 — Fill-in-the-blank grammar drill mode

Goal: add an active-recall (typing) mode to GrammarDrillPage so learners can test themselves beyond multiple-choice.

### Design (UX/UI designer consultation)
- Mode selector shown on the drill start screen: two cards "Multiple choice" and "Type the answer"
- Fill-in: text input centred below the prompt; submit on Enter or button press; immediate colour feedback (green/red pill); advances with Enter/button
- Answer matching: `answerMatches()` from `utils/answerMatch.ts` — accent-insensitive, case-folded, trims whitespace

### Implementation (`src/pages/GrammarDrillPage.tsx`)
- New state: `started: boolean`, `drillMode: "multiple-choice" | "fill-in"`, `fillInput: string`, `fillState: "idle" | "submitted-correct" | "submitted-wrong"`
- `handleNext()` wraps `drill.handleNext()` and resets `fillInput` + `fillState`
- `handleFillSubmit()` resolves current question as `const current = questions[drill.index]` (avoids reference-before-definition bug)
- Start screen: two mode selector cards with icons; selected card shows ring highlight
- Fill-in view: `<input>` + feedback pill replaces `QuizCard` when `drillMode === "fill-in"`
- Multiple-choice view: original `QuizCard` unchanged

---

## 51 — Architecture patterns: Repository, Actions, Storage adapter

Goal: introduce three design patterns to prepare for Supabase migration (Stage 2) without changing any existing behaviour.

### Repository Pattern (`src/data/repo.ts`) — new file
Single seam for all data queries. All future pages import from `repo.ts` instead of calling `getModule()` directly. Stage 2: replace these implementations with async Supabase calls.

**19 named query functions exported:**
- Grammar: `getGrammarForLevel`, `getGrammarLesson`
- Vocab: `getVocabForLevel`, `getVocabItems`
- Verbs: `getVerbsForLevel`, `getVerbs`
- Units: `getUnitsForLevel`, `getUnit`
- Reading: `getReadingPassagesForLevel`, `getReadingPassage`, `getReadingPassages`
- Listening: `getListeningForLevel`, `getListeningExercise`, `getListeningExercises`
- Culture: `getCultureEpisodesForLevel`, `getCultureEpisode`, `getCultureEpisodes`
- Tests: `getPlacementQuestions`, `getLevelQuestions`

### Command Pattern — compound actions (`src/store/actions.ts`) — new file
Co-locates all state mutations that belong together. Stage 2: add Supabase remote writes inside these actions rather than scattered across pages.

**6 compound actions:**
- `completeUnit(langId, unitId, quizScore, quizTotal)` — `masterUnit` + per-question quiz stats + activity
- `completeLessonItem(langId, lessonId)` — `markLessonComplete`
- `completeDrillSession(langId)` — `recordActivity`
- `completeReadingPassage(langId, passageId, quizAnswers[])` — mark + quiz stats + activity
- `completeListeningExercise(langId, exerciseId, quizAnswers[])` — mark + quiz stats + activity
- `completeCultureEpisode(langId, episodeId)` — mark + activity

### Adapter Pattern — progress storage interface (`src/store/IProgressStorage.ts`) — new file
Defines the contract for progress persistence. Stage 2: `SupabaseProgressStorage` implements this; swap in `ProgressContext` without touching any page code.

**7 methods:** `load`, `save`, `markLessonComplete`, `masterUnit`, `setLevel`, `resetLanguage`, `removeLanguage`

### LocalStorageProgressStorage (`src/store/LocalStorageProgressStorage.ts`) — new file
Implements `IProgressStorage` by delegating to the existing `progress.ts` functions. Exports `localProgressStorage` singleton.

---

## 52 — Culture file splitting (per-language A1 micro-chunks)

Goal: split large culture A1 files (~499–526 lines each) into one file per episode so Vite can create micro-chunks for lazy-loaded culture content.

**Pattern:** `culture/a1.ts` → `culture/a1/` directory with one file per episode + `index.ts` re-exporting the same `*A1Culture: CultureEpisode[]` array. No changes to parent `index.ts` assemblers needed (import path `"./culture/a1"` resolves to `a1/index.ts` once `a1.ts` is removed).

**Status: ✅ complete for all 5 languages.**

| Language | Episodes | Files |
|----------|----------|-------|
| French | 4 | `fr-c-a1-{1–4}.ts` + `index.ts` (exports `frA1Culture`) |
| Spanish | 3 | `es-c-a1-{1–3}.ts` + `index.ts` (exports `a1Culture`) |
| Italian | 4 | `it-c-a1-{1–4}.ts` + `index.ts` (exports `itA1Culture`) |
| Japanese | 2 | `ja-c-a1-{1–2}.ts` + `index.ts` (exports `jaA1Culture`) |
| Korean | 2 | `ko-c-a1-{1–2}.ts` + `index.ts` (exports `koA1Culture`) |

Original `a1.ts` files deleted for all 5 languages. Parent `index.ts` assembler imports unchanged — `"./culture/a1"` now resolves to `a1/index.ts`.

**Note:** Spanish exports `a1Culture` (not `esA1Culture`) to match the name `src/data/spanish/index.ts` already imported.

**Files created:**
- `src/data/{french,spanish,italian,japanese,korean}/culture/a1/` — episode files + `index.ts` per language

---

## 53 — Spanish A1 curriculum completion

**Goal:** bring Spanish A1 to the same standard as French A1 (vocab gap-fill, new culture episode, new listening exercise, all units wired).

### Vocab gap-fill (`src/data/spanish/vocab/a1.ts`)
Added 18 new items (IDs 262–279) across four categories:
- **Travel:** coche, bicicleta, a pie, parada de autobús
- **Emergency:** 4 items (emergency vocab)
- **Classroom:** 5 items
- **Shopping:** 5 items

### New content files
- `src/data/spanish/culture/a1/es-c-a1-4.ts` — "El tapeo — la cultura de las tapas" (food/customs)
- `src/data/spanish/culture/a1/index.ts` — updated to export 4 episodes
- `src/data/spanish/listening/a1.ts` — added `es-l-a1-7` "En el médico"

### Unit wiring (`src/data/spanish/units/a1.ts`)
All 7 Spanish A1 units wired with `grammarIds`, `vocabIds`, `verbIds`, `testQuestions`, `readingIds`, `listeningIds`, `cultureIds`.

---

## 54 — Italian A1 curriculum completion

**Goal:** bring Italian A1 to parity (vocab gap-fill, new listening exercise, unit wiring, duplicate fix).

### Vocab gap-fill (`src/data/italian/vocab/a1.ts`)
Added 18 new items (IDs 209–226): Transport (near-complete), Emergency, Classroom, Shopping.

### Content fixes/additions
- `src/data/italian/reading/a1.ts` — `it-r-a1-7` retitled "Il mio appartamento a Bologna" (was duplicate of "La mia casa")
- `src/data/italian/listening/a1.ts` — added `it-l-a1-7` "Dal medico — una visita"

### Unit wiring (`src/data/italian/units/a1.ts`)
All 10 Italian A1 units wired with `grammarIds`, `vocabIds`, `verbIds`, `testQuestions`, `readingIds`, `listeningIds`, `cultureIds`.

---

## 55 — v2.3 UI polish pass

**Goal:** visual quality improvements across the full app.

### Typography
- `index.html` — Google Fonts updated from Poppins to **Plus Jakarta Sans**
- `packages/theme-tokens/src/css/base.css` — `--font-heading: "Plus Jakarta Sans", system-ui, sans-serif`

### Background & surfaces
- `src/index.css` — body background `#f7f5f2` (warm off-white); `.card-lift` hover utility; `.tab-fade` keyframe animation

### ProgressBar (`src/components/ProgressBar.tsx`)
- `color?: StudySection | "default"` prop — gradient fill from `sectionConfig.ts`
- Mount animation: `useState(0)` + `setTimeout(60ms)` → actual value; 700 ms ease-out transition
- `textColor` from `sectionConfig` for percentage label

### `sectionConfig.ts` extended
Added `gradient`, `textColor`, `iconText` fields. **Original section colors preserved** (green/amber/red/blue/slate/teal). All instances now use this single source of truth.

### Per-page updates
- **DashboardPage** — `StudyCard`: gradient accent strip + mini bar, `iconText` color, `card-lift`; `SectionCard`: `card-lift`; all `TabsContent`: `tab-fade`; content pills: amber/green/red/violet per section
- **UnitPage** — all `TabsContent`: `tab-fade`; vocab progress bar: amber gradient; vocab filter toggles: visible `bg-gray-100`; Grammar/Vocab/Verbs/Test tabs: section color on active state
- **HomePage** — ProgressBar calls now pass `color="grammar"`, `color="vocab"`, etc.
- **StatsTab** — `BreakdownBar` uses `gradient` field + width animation
- **ProfilePage** — breakdown bars use `gradient` field; overall bar: violet gradient + animation
- **FlashcardsPage** — toggle container: `bg-amber-50 border-amber-200`; unchecked switches: `data-[state=unchecked]:!bg-amber-300`; rows separated by `divide-y divide-amber-200`

---

## 56 — Repo + Actions wiring to all pages

**Goal:** replace direct `getModule()` + raw progress calls with `repo.ts` query functions and `actions.ts` compound mutations across 15+ pages.

**Pages wired:** GrammarPage, GrammarLessonPage, GrammarDrillPage, VocabPage, VerbsPage, VerbDrillPage, PlacementPage, LevelTestPage, FlashcardsPage, UnitPage, DashboardPage, ReadingPage, ListeningPage, CulturePage, CategoryReadingPage.

**Pattern:** import from `../data/repo` (e.g. `getGrammarForLevel`, `getVocabForLevel`) and `../store/actions` (e.g. `completeDrillSession`, `completeReadingPassage`). `getModule()` direct calls remain only in pages that still use the full module object.

**Fix applied post-wiring:** FlashcardsPage had a stale `mod` reference left after the agent removed the import. Removed `const mod = getModule(langId)` and replaced `mod?.vocab.filter(...)` with `getVocabForLevel(langId, level)`.

---

## 57 — Progress import with smart merge

**Goal:** allow users to restore a JSON backup without losing newer progress made after the export.

### `importProgress()` (`src/pages/ProfilePage.tsx`)
Reads the file with `file.text()` (async, no FileReader needed), parses JSON, validates shape (`progress`, `srs`, `stats` keys required).

### Merge strategy (three helpers)

**`mergeProgressData(current, imported)`**
- `levels` — spread imported first, then overwrite with current (`{ ...importedLevels, ...currentLevels }`): current level always wins for started languages; backup provides level only for languages not yet started
- `completedLessons` / `masteredUnits` — union via `Set` per language key
- `userId`, `selectedLanguage` — always keeps current

**`mergeSRS(current, imported)`**
- Per card: keeps whichever `SRSCardState` has higher `reviewCount`

**`mergeStats(current, imported)`**
- Stats stored as `{ data: StatsData }` (Zustand wrapper) or legacy raw `StatsData`
- Per language / per day: `Math.max()` of each numeric field (reviewed, correct, acts, qTotal, qCorrect)

### UX
- `<label>` wrapping hidden `<input type="file" accept=".json">` — tap to open file picker
- Status feedback inline: idle → "Import progress backup", success → "✓ Imported — reloading…", error → "⚠ {message}"
- On success: 1.2 s delay then `globalThis.location.reload()` so all stores re-hydrate from the merged localStorage data

---

## 58 — Dark mode

**Goal:** full dark mode support with system-preference detection and NavBar toggle.

### Infrastructure
- `tailwind.config.ts` — `darkMode: ["class"]` (was already set)
- `src/index.css` — `.dark {}` block with complete shadcn CSS variable overrides (navy-based dark palette: `--background: 222 47% 7%`, `--card: 222 30% 11%`, `--border: 222 18% 22%`, etc.); `.dark body { background-color: #0c1120 }`
- `src/hooks/useDarkMode.ts` — new hook: reads `localStorage["ls:dark-mode"]`, falls back to `prefers-color-scheme`; toggles `.dark` class on `<html>`; persists on change

### NavBar (`src/components/NavBar.tsx`)
- Sun/moon toggle button added before the profile icon; uses `useDarkMode()` hook
- NavBar itself: `dark:bg-gray-900 dark:border-gray-700`; back button and title: dark text variants

### Components & pages
All pages and components updated with `dark:` Tailwind variants following the mapping:
- `bg-white` → `dark:bg-gray-800`; `bg-gray-50` (page) → `dark:bg-gray-900`; `bg-gray-50` (inner) → `dark:bg-gray-700/50`
- `border-gray-200` → `dark:border-gray-700`; `border-gray-100` → `dark:border-gray-700`
- `text-gray-900` → `dark:text-gray-100`; `text-gray-700` → `dark:text-gray-300`; `text-gray-500` → `dark:text-gray-400`; etc.
- Hover, divide, odd/even row colors updated accordingly
- Section accent colors (green/amber/red/violet/teal/indigo) left unchanged — intentional brand colors

**Files updated:** DashboardPage, UnitPage, FlashcardsPage, HomePage, ProfilePage, GrammarPage, GrammarLessonPage, GrammarDrillPage, VocabPage, VerbsPage, VerbDrillPage, PlacementPage, LevelTestPage, ReadingPage, ListeningPage, CulturePage, StatsTab, DrillDoneScreen, QuizCard, LevelBadge, ProgressBar, LanguagePicker, LocalizedExplanation, VocabTooltip

---

## 59 — A2 Curriculum Overhaul (all 5 languages)

**Goal:** expand all A2 grammar, vocab, and units from partial placeholder content to a full 20-lesson CEFR A2 curriculum, replacing any A1 duplicates with genuine A2-level content.

### Grammar (all 5 languages)

**Spanish, French, Italian** — each expanded from 8 → 20 grammar lessons. Topics added: ser vs estar extended, subjunctive present, reflexive verbs, conditional, imperfect, preterite II (irregular verbs), future tense, imperative, indirect object pronouns, comparatives/superlatives, accentuation, discourse connectors.

**Japanese** — expanded from 8 → 20 lessons. 4 A1 duplicates (て-form progressive, permission, giving/receiving, polite requests) replaced with: potential form, passive form (〜られる), causative (〜させる), causative-passive (〜させられる). 12 new lessons added: conditionals (たら, ば/と/なら), obligation (〜なければなりません), nominalization (こと/の), reported speech/hearsay, appearance/conjecture (そうです/ようです), て-form extensions (てみる, ておく, てしまう), relative clauses, purpose/reason (ために/ので), concession (のに/ても), scope/limits (だけ/しか〜ない), time sequencing (前に/た後で/ながら/あいだに).

**Korean** — expanded from 8 → 20 lessons. 3 A1 duplicates (present tense, past tense, location particle) replaced with: direction verbs (에 가다/오다/다니다), permission (아/어도 되다), obligation (아/어야 하다). 12 new lessons added: progressive past (고 있었다), past experience (적이 있다/없다), suggestions (으면 어때요/는 게 어때요), contrast/concession (지만, 는데, 아/어도), conditional (으면/면), negation strategies (지 않다/못, 안), causative/passive, reported speech, planning/intention (으려고 하다/ㄹ 계획이다), comparative (보다, 만큼), no-need (지 않아도 되다/ㄹ 필요가 없다).

**Files updated per language:** `src/data/<lang>/grammar/a2.ts`

### Vocab (all 5 languages)

Each language expanded to 100+ A2 vocab items (some had 40-80 before). 60–64 new items added per language covering the new grammar topics. Items include example sentences with translations; Japanese and Korean items include `romanized` fields.

**Files updated per language:** `src/data/<lang>/vocab/a2.ts`

### Units (all 5 languages)

Each language expanded from 7–8 units → 20 units. Every unit maps to one grammar lesson, includes 5 `testQuestions`, and references appropriate `vocabIds` and `verbIds`. Korean and Japanese units were completely rewritten to align with the new grammar ID scheme.

**Files updated per language:** `src/data/<lang>/units/a2.ts`

---

## 60 — A2 Culture Episodes (all 5 languages) + Subfolder Refactor

**Goal:** add A2 culture episodes for all 5 languages and migrate all language culture files to the per-episode subfolder pattern (matching the A1 structure established in v2.3).

### Episodes added

All 5 languages now have 3 A2 culture episodes each (15 new episodes total). Each episode includes: bilingual title + subtitle, 3 photos with bilingual captions, a bilingual long-form body passage (~500 words), 5 `cultureVocab` items with `culturalNote`, 2 comprehension questions + 1 reflection prompt, and a `didYouKnow` fact.

| Language | Episodes |
|---|---|
| Spanish | es-c-a2-1 (La Siesta), es-c-a2-2 (Fútbol y pasión), es-c-a2-3 (El flamenco) |
| French | fr-c-a2-1 (Le marché), fr-c-a2-2 (La bande dessinée), fr-c-a2-3 (Le Tour de France) |
| Italian | it-c-a2-1 (La dolce vita), it-c-a2-2 (La pizza), it-c-a2-3 (Il calcio italiano) |
| Japanese | ja-c-a2-1 (温泉 Onsen), ja-c-a2-2 (お弁当 Bento), ja-c-a2-3 (お祭り Matsuri) |
| Korean | ko-c-a2-1 (한국의 식사 문화 Dining), ko-c-a2-2 (한류 Hallyu), ko-c-a2-3 (한국의 계절과 명절 Seasons) |

### Subfolder structure (all 5 languages)

Each language's A2 culture content was split from a flat `culture/a2.ts` file into a `culture/a2/` directory with individual episode files and an `index.ts` re-exporter — matching the `culture/a1/` pattern established in v2.3. The parent language `index.ts` imports remain unchanged (TypeScript resolves `./culture/a2` to `a2/index.ts` automatically).

**Files created per language:**
- `src/data/<lang>/culture/a2/<lang>-c-a2-1.ts`, `<lang>-c-a2-2.ts`, `<lang>-c-a2-3.ts`
- `src/data/<lang>/culture/a2/index.ts`

**Files deleted per language (replaced by subfolder):**
- `src/data/<lang>/culture/a2.ts`
