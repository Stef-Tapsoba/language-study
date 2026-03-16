# Language Study App — Architecture Blueprint

**Version: 2.3**  
**Last updated: March 2026**

---

# 1. Product Philosophy

This app is designed as a **solo, structured, psychologically-aware language institute for adults**.

Instead of organising the product around simple lesson chains, the architecture is built on:

> Core Language Engine + Skill Modules (CO/CE/EO/EE) + Cultural Immersion Layer + Cognitive Reinforcement Layer

The goal is **deep, durable learning** — not streak-driven engagement.

### What this means in practice

- Retrieval practice is the primary mechanism of durable learning. Lesson units are content delivery vehicles; the real learning happens in retrieval events. The architecture reflects this inversion rather than treating retrieval as a bolt-on quiz feature.
- Extrinsic motivation (streaks, badges, leaderboards) undermines intrinsic motivation over time. Adult learners who are streak-driven tend to game the system rather than learn. This app does not use these mechanics.
- Progress transparency toward a self-declared goal is different from gamification. It respects the adult learner without patronising them, but still provides the honest orientation — "am I on track?" — that human learners genuinely need.

---

# 2. Core System

## 2.1 User Model

Tracks:

- **CEFR Level** — A1 through C2, per language
- **Skill breakdown** — CO / CE / EO / EE scores tracked independently
- **Grammar mastery** — per lesson and per pattern
- **Vocabulary retention strength** — SRS-derived confidence score per item
- **Pattern recognition progress**
- **Immersion tolerance** — how much target-language interface the learner can handle
- **Personal goals** — explicitly captured (see section 2.3)
- **Goal progress** — calculated estimate of whether the learner is on track

### What the user model is not

The user model tracks learning state, not engagement state. It does not track streaks, daily logins, or completion rates as primary signals. A learner who comes back after two weeks of absence and works hard matters more than one who opens the app daily and taps through without effort.

---

## 2.2 Learning Engine

Responsible for:

- Spaced repetition scheduling (SM-2 algorithm)
- Retrieval practice prompts
- Daily recall quizzes
- Free recall sessions
- Difficulty adjustment
- Gradual immersion shifts
- Plateau detection and intervention triggers (see section 2.4)

This engine feeds all skill modules and is the primary driver of learning outcomes — not the lesson units themselves.

---

## 2.3 Goal System

**The learner is not a single archetype.** A person learning Spanish for a holiday in three months has completely different needs from someone learning Korean because they're in a relationship with a Korean family, who has different needs from someone learning French for professional certification. Goals shape content relevance, pacing, and what "success" looks like.

### Goal capture

At onboarding, the learner is asked:

- **Why are you learning this language?** (travel, work, heritage, relationship, personal interest, exam preparation, other)
- **What do you want to be able to do?** (have basic conversations, read the news, watch films without subtitles, pass a specific exam, reach a specific CEFR level)
- **By when?** (optional but strongly recommended — enables progress tracking)
- **How much time can you dedicate per day?** (calibrates pacing estimates)

These answers are not just display text. They actively influence:

- Which content is surfaced first (a traveller sees transport and restaurant content early; an exam-preparer sees formal register early)
- How the progress dashboard frames advancement
- What the weekly summary highlights

### Progress transparency

When a learner has set a time-bound goal, the app maintains a visible, honest estimate:

- Current trajectory vs required trajectory
- What would need to change to get back on track
- No false reassurance — if a learner is behind, they are told so directly but constructively

---

## 2.4 Plateau Detection & Failure States

**The blueprint is not only a happy path document.** B1 is where most adult learners abandon language study — the intermediate plateau is well-documented. The system must anticipate and respond to stagnation, regression, and disengagement.

### Plateau detection signals

The engine monitors for:

- CE or CO score not improving over a defined window (e.g., 3 weeks)
- SRS retention rate declining despite continued practice
- Learner skipping or abandoning retrieval sessions repeatedly
- Significant gap between passive recognition (CE/CO) and active production (EO/EE)

### Plateau responses

When a plateau is detected, the system responds visibly — not silently. Options include:

- **Explicit acknowledgement** — "Your reading comprehension has been stable for three weeks. This is normal at this level and here's why."
- **Mode shift** — suggest moving from new content to intensive review of existing content
- **Difficulty recalibration** — temporarily reduce difficulty to rebuild fluency and confidence before advancing
- **Goal recalibration** — offer to adjust the timeline or scope of the goal if it has become unrealistic
- **Content reframe** — if a learner is stuck on grammar, shift to cultural content or listening to approach the same material from a different angle

### Regression handling

If a learner returns after a significant absence:

- Do not present the next unseen content — run a diagnostic retrieval session first
- Estimate retention decay and surface items most likely to have been forgotten
- Recalibrate the SRS intervals before resuming normal progression

---

# 3. Skill Modules

The app is structured around four balanced competencies:

| Skill | Description | Module Type |
|-------|-------------|-------------|
| CO | Compréhension Orale | Listening |
| CE | Compréhension Écrite | Reading |
| EO | Expression Orale | Speaking |
| EE | Expression Écrite | Writing |

**The skills are balanced in the curriculum but not equal in implementation complexity.** CO and CE are comprehension tasks — testable with MCQs, inference questions, and recall prompts, buildable without AI/ML. EO and EE require production, which is a fundamentally different problem requiring either AI evaluation or explicit self-assessment frameworks. This distinction drives the freemium model (section 9) and the phased roadmap (section 10).

---

## 3.1 CO — Listening Module

### Content

- Native dialogues
- Speeches and interviews
- Cultural audio
- News clips
- Graded listening (speed and complexity adjusted by level)

### Features

- Adjustable playback speed
- Replay segments
- Optional transcript reveal (hidden by default at B1+)
- Comprehension questions
- Inference questions
- Free recall summaries

### Non-happy paths

- **Learner fails comprehension questions repeatedly** → do not simply replay the audio. Surface the vocabulary and grammar structures causing the difficulty before re-attempting.
- **Learner relies on transcript too early** → gentle friction: transcript reveal requires a first attempt without it at B1+. The immersion model (section 7) enforces this progressively.
- **Audio content is too native-speed** → speed controls must be prominent, not buried.

---

## 3.2 CE — Reading Module

### Content

- Articles and cultural essays
- Historical snippets
- Biographies
- Dialect comparisons
- Literature excerpts (B2+)

### Features

- Vocabulary highlighting and tap-to-gloss
- Context inference prompts
- Thematic vocabulary tracking
- Comprehension tests
- Reflection prompts

### Non-happy paths

- **Learner over-relies on tap-to-gloss** → track how often individual words are looked up. If the same word is looked up 5+ times, surface it as an SRS item with a prompt: "You've looked this up several times — let's make sure it sticks."
- **Comprehension scores plateau** → see section 2.4 plateau responses.
- **Passage difficulty is mismatched** → the difficulty label (A1/A2/B1 etc.) should be validated against actual learner performance, not just assigned editorially.

---

## 3.3 EO — Speaking Module

### Structure

- Guided repetition
- Scenario-based roleplays
- Reaction prompts
- Debate questions (advanced levels)
- Spontaneous speaking prompts

### Focus

Structured oral tasks with self-assessment frameworks — not endless chatbot interaction. The goal is building fluency through deliberate practice, not conversation simulation.

### Self-assessment at A1–B1 (pre-AI)

Without AI speech scoring, EO feedback relies on:

- **Rubrics** — clear, simple criteria the learner evaluates themselves against (Did I use the correct verb tense? Did I include all three required elements?)
- **Model answers** — pre-recorded native speaker responses to the same prompt, for comparison
- **Reflection prompts** — "What was difficult about that response? What would you say differently?"

Self-assessment is research-validated for language learning when rubrics are specific and learners have enough metalinguistic awareness to apply them honestly. At A1, rubrics must be extremely simple (2–3 criteria maximum). They become more nuanced at A2+.

### Non-happy paths

- **Learner skips speaking tasks consistently** → speaking anxiety is a documented barrier. Do not penalise. Surface lower-stakes alternatives: recording with no playback, shorter prompts, controlled substitution drills before open production.
- **Self-assessment is consistently over-optimistic** → compare self-assessed scores against CE/CO performance. If a learner rates their speaking highly but struggles with reading at the same level, surface the discrepancy gently.
- **Learner has no model to compare against** → model answers are not optional infrastructure — they are essential for self-assessment to function.

---

## 3.4 EE — Writing Module

### Content

- Sentence construction
- Paragraph writing
- Story prompts
- Opinion essays
- Cultural reflections

### Feedback layers (AI-enabled — premium)

1. Grammar corrections
2. Style suggestions
3. Vocabulary enrichment
4. Clarity analysis

### Self-assessment at A1–B1 (pre-AI)

- Sentence-level writing: answer key comparison (controlled tasks with correct forms)
- Paragraph-level writing: rubric-based self-check (grammar, vocabulary range, task completion)
- Peer comparison: model paragraphs with annotation highlighting what was done well and why

### Non-happy paths

- **Learner produces only safe, simple sentences** → avoidance of error is a well-documented failure mode. Design tasks that require the learner to use structures just beyond their comfort zone. Reward attempts, not only correct output.
- **Grammar corrections overwhelm without explanation** → never surface a correction without a reason. "Changed to subjunctive because..." is useful. A red underline is not.

---

# 4. Cultural Immersion Module

Integrated but also accessible as a standalone section.

### Content

- History timelines
- Regional maps
- Dialect comparisons (audio + text)
- Political and cultural systems overview
- Literature and pop culture excerpts
- Culture episodes: long-form bilingual reads with video, vocabulary, and reflection prompts

### Integration with skill modules

| Cultural content | Feeds into |
|---|---|
| Essays and readings | CE tasks |
| Audio documentaries and dialogues | CO tasks |
| Cultural scenarios and role contexts | EO prompts |
| Reflective writing on cultural topics | EE tasks |

### Reciprocal relationship with language progress

Cultural content is not purely parallel to language progress — it is contextualised by it. Deeper or more nuanced cultural content unlocks as language level advances. At A1, culture episodes are designed to build curiosity and motivation. At B1+, they are reading and listening exercises in their own right.

This creates a reciprocal loop: language progress unlocks richer cultural content; engaging with cultural content drives language progress.

### Non-happy paths

- **Culture content feels disconnected from language study** → every culture episode must surface vocabulary into the SRS and link explicitly to grammar structures the learner has encountered.
- **Regional diversity is collapsed** → Spanish is not monolithic; neither is French, Arabic, or Portuguese. The cultural module must represent the diversity of each language's world, not a single national stereotype.

---

# 5. Pattern Discovery System

Instead of immediate rule explanation:

1. Present examples carefully selected so the pattern is discoverable
2. Ask the learner what they notice
3. Delay formal explanation
4. Confirm or refine the hypothesis

This approach has solid research support for long-term retention. Learners who discover a rule retain it more durably than learners who are told the rule.

### Design requirements

For Pattern Discovery to work, examples must be deliberately chosen — not incidentally assembled. The pattern must be inferable from the examples given. This requires editorial care during content creation, not just at the UI level.

### Non-happy paths

**When the learner's hypothesis is wrong**

This is not an edge case — it is a common outcome, especially with irregular verbs, particles, and gender agreement. A wrong hypothesis that is reinforced is worse than no discovery phase at all.

The system must:

- Never confirm an incorrect hypothesis with positive feedback before checking it
- Provide a correction that respects the learner's reasoning: "That's a reasonable pattern to notice — but there's an exception that changes things. Here's what's actually happening."
- Return to the pattern in a future retrieval session to confirm the correct understanding has been consolidated

**When the pattern is too abstract to discover**

Some patterns genuinely require explicit instruction first (Korean speech levels, Japanese counters, French liaison). Pattern Discovery is not appropriate for every grammar point. The system must distinguish between inductive and deductive content.

---

# 6. Cognitive Reinforcement Layer

Active across all modules. Not a separate feature — the primary mechanism through which learning becomes durable.

### Mechanisms

- Daily retrieval quizzes (active recall, not recognition)
- Weekly free recall (learner reconstructs what they've studied without prompts)
- Thematic recall exercises (vocabulary in context, not isolated)
- "Explain yesterday's rule" prompts (metalinguistic consolidation)
- Cross-skill reinforcement (vocabulary seen in CE surfaces in EO prompts)

### Architectural implication

**Lesson units are content delivery vehicles. The cognitive reinforcement layer is where learning actually happens.** The data model must support performance tracking per retrieval event — not just completion tracking per lesson. A learner who completes a lesson without consolidating it has not learned; a learner who struggles through a retrieval session has.

This inversion should be visible in the interface: the progress dashboard should foreground retrieval performance, not lesson completion percentage.

### Non-happy paths

- **Learner skips retrieval sessions** → do not surface new content until overdue retrieval items are resolved. New content on top of unretained content compounds the problem.
- **Retrieval feels punitive** → difficulty must be calibrated so retrieval is challenging but achievable. Repeated failures on the same item need a different intervention, not more repetition.
- **Weekly free recall produces nothing** → this is diagnostic information, not a failure state. Surface the specific topics that couldn't be recalled and schedule intensive review.

---

# 7. Immersion Progression Model

| Level | Interface Language |
|-------|-------------------|
| A1 | Mostly native language |
| A2 | Balanced |
| B1 | Mostly target language |
| B2+ | Fully target language |

Gradual exposure builds cognitive resilience without overwhelming beginners.

### Design requirements

- The shift between levels must be gradual and predictable — learners should see it coming, not be surprised by it
- Learners at A2+ should have the option to temporarily revert to more native-language support when encountering genuinely difficult new material, without this resetting their immersion level
- The immersion level affects interface labels, instructions, and prompts — not just content language

### Non-happy paths

- **Learner is placed too high by the placement test** → the immersion level of the interface should always be verified against actual performance in the first two weeks. A learner placed at B1 who consistently struggles may need to drop back.
- **Learner finds full immersion at B2+ demotivating rather than stimulating** → provide an explicit "slow down" option that temporarily increases native-language support without changing the CEFR level assessment.

---

# 8. Technical Architecture Overview

## Frontend

- React + TypeScript
- Modular skill dashboards
- Dynamic content renderer
- Immersion-aware UI (interface language adapts to level)

## Backend

- User model service
- Skill tracking service (performance data, not just completion data)
- Content service
- Assessment engine
- Isolated AI/ML microservice (modular and replaceable — see section 10)

## Data model priorities

The data model must capture **performance on retrieval events**, not only lesson completion. Key fields:

- Per-item SRS state (interval, ease factor, next review date, repetition count)
- Per-session retrieval accuracy
- Skill scores updated by assessment, not just by content completion
- Goal progress calculations

## AI/ML Layer

Used selectively for high-value, hard-to-replace tasks:

- Writing evaluation (grammar, style, clarity)
- Speech scoring
- Adaptive difficulty calibration
- Prompt generation for EO tasks

**Designed to be modular and replaceable.** The system functions without the AI/ML layer — EO and EE degrade to self-assessment mode rather than breaking. AI features are enhancements, not dependencies.

---

# 9. Monetisation Model — Freemium with Skill Gating

### Free tier

- Limited CE + CO content
- Basic retrieval practice
- Limited daily tasks
- Goal setting and progress tracking

### Premium tier

- Full EO (Speaking) module with model answers and feedback
- Full EE (Writing) module with AI-assisted feedback
- Advanced immersion levels
- Detailed feedback layers
- Expanded cultural library
- Advanced analytics and progress modelling

### Rationale

Skill gating aligns revenue with the features that are most computationally expensive and most personally valuable. CO and CE can be served largely as static content. EO and EE require production infrastructure, model answers, and feedback mechanisms that justify premium pricing.

Progress transparency and goal tracking are **free** — they are core to the product philosophy of respecting the adult learner.

---

# 10. Phased Development Strategy

## Phase 1 — Core engine (current: v2.x)

- Core SRS engine
- CE + CO modules
- A1 content for all five languages (French, Spanish, Italian, Japanese, Korean)
- Grammar, vocabulary, and verb drill system
- Placement test
- Culture episodes (A1)
- Basic writing tasks (controlled, answer-key-based)

## Phase 2 — Production skills + feedback

- Speaking module: guided prompts, model answers, self-assessment rubrics
- Writing module: paragraph-level tasks with structured feedback
- Dialect and regional content modules
- Plateau detection and intervention system
- Goal system with progress transparency

## Phase 3 — Deep adaptation + reinforcement

- Full cognitive reinforcement layer (weekly free recall, cross-skill reinforcement)
- Advanced adaptive immersion
- Goal-based dynamic learning paths
- Pattern Discovery system (inductive grammar for select content)
- B1+ content for all languages

## Phase 4 — AI/ML integration

- AI writing evaluation (grammar, style, clarity)
- Speech scoring for EO module
- Adaptive difficulty calibration driven by ML
- Personalised content sequencing based on goal profile

---

# 11. Known Design Risks

These are documented here to ensure they are addressed consciously during implementation, not discovered in production.

| Risk | Description | Mitigation |
|---|---|---|
| Plateau at B1 | Most adult learners abandon at intermediate level | Plateau detection (section 2.4), goal recalibration, content reframe |
| Self-assessment inflation | Learners over-rate their EO/EE performance without calibration | Cross-reference with CO/CE scores; simple rubrics; model answers mandatory |
| Wrong hypothesis in Pattern Discovery | Learner infers incorrect pattern and it gets reinforced | Never confirm before checking; correction respects learner's reasoning |
| Retention debt | Learner advances through content without consolidating | Block new content until overdue retrieval items are resolved |
| Goal abandonment | Time-bound goals become demoralising when behind | Honest but constructive progress display; offer recalibration not just failure |
| Absence handling | Learner returns after weeks away and is presented with new content | Run diagnostic retrieval first; recalibrate SRS intervals before resuming |
| Immersion shock | Learner placed too high and full-immersion interface is demotivating | Temporary native-language support option without resetting CEFR assessment |
| Regional flattening | Cultural content presents one dialect/country as "the" language | Explicit regional diversity in culture module; flagged in content guidelines |

---

# 12. Deployment Strategy

## Context

Solo developer. No backend. localStorage-only data persistence today. Target: web, iOS, and Android. Priority: get an MVP live as quickly as possible, validate with real users, then build toward the full architecture described in this blueprint.

This section documents a realistic, staged path from the current prototype to a production-ready multi-platform product — without over-engineering before the product has been validated.

---

## 12.1 The Core Constraint: localStorage

The current data layer is entirely in the browser's localStorage. This works for a prototype but creates hard limits at production:

- **No cross-device sync** — a user's progress on their phone does not appear on their laptop
- **No data recovery** — clearing the browser or switching devices loses all progress
- **No account system** — no way to gate premium features, restore purchases, or support multiple users on one device
- **No analytics** — impossible to understand how real users are actually using the app

These are not just technical inconveniences — they are user experience blockers that will prevent retention for any serious learner. The deployment strategy is built around resolving these in the right order.

---

## 12.2 Stage 1 — Web MVP (Deploy Now)

**Goal:** Get a real URL with real content in front of real users as quickly as possible. Validate that people find the content and UX compelling before investing in native apps or backend infrastructure.

### What to ship

- The current React + TypeScript app with all A1 content for all five languages
- Grammar, vocabulary, verb drills, flashcards, placement test, culture episodes
- localStorage for all progress — explicitly communicated to users as a known limitation
- A clear "progress warning" in the profile page: "Your progress is saved on this device only. Export your data to back it up." (with a JSON export function)

### Where to host

**Vercel** is the correct choice for a solo React developer shipping an MVP:
- Zero-config deployment from a Git push
- Free tier is sufficient for an MVP
- Custom domain support
- Edge CDN — fast globally without configuration
- No server to manage

Deployment is literally: `npm run build` → push to GitHub → Vercel auto-deploys.

### What not to build yet

- No authentication system
- No backend API
- No database
- No payment processing

These will be needed — but building them before validating that users actually want the product is wasted time.

### Success criteria before moving to Stage 2

- Real users are completing A1 units
- Retention over 2+ weeks from at least some users
- Clear signal that cross-device sync is a pain point people actually want solved (not just assumed)

---

## 12.3 Stage 2 — Backend + Accounts

**Goal:** Replace localStorage with a real data layer, enabling cross-device sync, data recovery, and the foundation for premium features.

### Technology choices

**Backend: Supabase**

For a solo developer, Supabase is the right choice over building a custom backend:
- PostgreSQL database with a full REST and realtime API out of the box
- Built-in authentication (email, Google, Apple Sign-In) — no auth server to build
- Row-level security means user data is isolated without complex middleware
- Generous free tier; predictable pricing as it scales
- TypeScript client library integrates cleanly with the existing React codebase
- The `@myorg/api-client` package referenced in the codebase can be pointed at Supabase endpoints without a full custom API

**What moves to Supabase**

| Currently in localStorage | Moves to Supabase |
|---|---|
| User progress (levels, completed lessons) | `user_progress` table |
| SRS card states (intervals, ease factors) | `srs_cards` table |
| Mastered units | Part of `user_progress` |
| Selected language | User profile |

Content data (grammar lessons, vocab, verb tables, culture episodes) stays as static TypeScript files bundled with the app — it does not go in the database. It is read-only and ships with the build.

**Migration path from localStorage**

When a user creates an account, offer to migrate their existing localStorage progress into their new account. This preserves the MVP cohort's progress and creates a smooth upgrade path.

### Authentication

Supabase Auth handles:
- Email + password
- Google OAuth
- Apple Sign-In (required for iOS App Store)

Apple Sign-In is **mandatory** for any iOS app that offers social login. If you ship Google login without Apple login, Apple will reject the app. Plan for this from the start.

### Success criteria before moving to Stage 3

- Cross-device sync working reliably
- Account creation and login flow polished
- Zero data loss incidents
- Foundation in place to gate features by account type (free vs premium)

---

## 12.4 Stage 3 — Mobile Apps (iOS + Android)

**Goal:** Ship native mobile apps using the existing React codebase, without rewriting the product.

### Technology choice: Capacitor

**Capacitor** (by the Ionic team) is the right choice for converting an existing React web app to iOS and Android:
- Wraps the existing web app in a native WebView — no rewrite, no React Native migration
- Full access to native device APIs (camera, notifications, haptics, in-app purchases) through a plugin system
- The same TypeScript codebase serves web, iOS, and Android
- Maintained by a well-funded company with a strong track record

**Why not React Native?**

React Native requires rewriting the UI layer. The existing React + Tailwind component tree would need to be rebuilt in React Native components. For a solo developer with a working web app, this is months of work with no user-facing benefit. Capacitor ships the same app.

**Why not a PWA (Progressive Web App)?**

A PWA can be installed on mobile and works offline, but:
- Cannot be listed in the App Store or Google Play — which is where language learners look for apps
- Cannot use native in-app purchase APIs — which is required for premium monetisation on mobile
- Push notifications are unreliable on iOS via PWA

A PWA is a reasonable interim step to test mobile UX before App Store submission, but it is not a substitute for native app distribution.

### Mobile-specific considerations

**Offline support**

Mobile users expect the app to work without an internet connection. With Capacitor, the app bundle ships with the device. Content data (static TypeScript files) is available offline automatically. The only online dependency is syncing SRS progress to Supabase. This should be queued locally and synced when connectivity returns — not blocked on it.

**Push notifications**

Capacitor's push notification plugin enables:
- Daily retrieval practice reminders (opt-in, not forced)
- Goal milestone alerts
- "You have overdue review items" nudges

These are motivational tools, not engagement manipulation. They should be honest and easy to disable.

**App Store requirements**

| Requirement | Notes |
|---|---|
| Apple Developer account | $99/year — required before any iOS submission |
| Google Play Developer account | $25 one-time fee |
| Privacy policy | Required by both stores — must be live at a URL before submission |
| Apple Sign-In | Required if any other social login is offered |
| In-app purchase setup | Required before premium features can be gated on iOS/Android |
| App Store review | Apple review typically takes 1–3 days for new apps; plan accordingly |

### Success criteria before moving to Stage 4

- iOS and Android apps live in their respective stores
- In-app purchase infrastructure in place (even if no premium features are live yet)
- Offline sync working reliably

---

## 12.5 Stage 4 — Monetisation Infrastructure

**Goal:** Add premium gating without disrupting the free experience or requiring an app rebuild.

### Web monetisation: Stripe

Stripe is the standard choice for web subscription billing:
- Stripe Checkout handles the payment UI — no custom payment form to build
- Stripe Customer Portal handles subscription management (upgrade, downgrade, cancel) — no custom billing UI to build
- Webhooks update the user's Supabase account tier on payment events
- Stripe + Supabase is a well-documented integration with existing open-source starter kits

### Mobile monetisation: RevenueCat

Mobile in-app purchases are handled by Apple and Google, not Stripe. RevenueCat sits on top of both:
- Single SDK that abstracts Apple StoreKit and Google Play Billing
- Syncs subscription status to Supabase via webhooks
- Handles receipt validation, restore purchases, and subscription lifecycle events
- Free tier covers early-stage volume

**The split**: web users pay via Stripe, mobile users pay via the App Store / Play Store. RevenueCat ensures both paths update the same Supabase user record.

### What premium actually gates

At the point monetisation is introduced, the freemium split should be concrete. Based on the blueprint's freemium model:

| Free | Premium |
|---|---|
| Full A1 content, one language | All levels, all languages |
| CO + CE modules | + EO + EE modules |
| Basic SRS flashcards | Advanced analytics and goal tracking |
| Culture episodes (limited) | Full culture library |
| Goal setting | Goal tracking with progress estimates |

The exact split should be informed by Stage 1–3 usage data — which features users actually engage with most, and which they would pay to unlock.

### Monetisation timing

Do not introduce monetisation before:
- A stable, tested user experience exists
- Cross-device sync works reliably (users will not pay for an app that loses their progress)
- Enough content exists to justify a subscription (A1 alone is not enough — A2 content needs to be in progress)
- Real users have validated that the free tier is compelling enough to convert

---

## 12.6 Deployment Timeline Summary

| Stage | Milestone | Prerequisite |
|---|---|---|
| **1 — Web MVP** | Live URL with A1 content, localStorage | Content complete (in progress) |
| **2 — Backend** | Accounts, cross-device sync | Stage 1 validated |
| **3 — Mobile** | iOS + Android in stores | Stage 2 stable |
| **4 — Monetisation** | Premium tier, billing, in-app purchases | Stage 3 stable + A2 content |

---

## 12.7 What to Avoid

**Avoid building the backend before validating the product.** A backend takes weeks to build correctly. If the MVP reveals that the core content or UX needs significant changes, that time is wasted. Ship with localStorage first.

**Avoid React Native.** The migration cost is not justified when Capacitor ships the same result with the existing codebase.

**Avoid custom authentication.** Auth is security-critical and time-consuming to get right. Supabase Auth handles it correctly out of the box.

**Avoid multi-language server infrastructure.** The content layer (grammar, vocab, verbs, culture) is static data. It should stay bundled with the app, not served from a CMS or API. This keeps the app fast, offline-capable, and simple to deploy.

**Avoid monetising before retention is proven.** A subscription product without proven retention will not grow. Validate that users come back before asking them to pay.

---

# Vision Summary

A structured, cognitively-designed, emotionally supportive self-study language institute for adults.

Not gamified.  
Not chaotic.  
Not streak-obsessed.

Built for durable mastery — and honest about what durable mastery actually requires.