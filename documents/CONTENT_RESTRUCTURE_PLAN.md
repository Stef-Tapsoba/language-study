# Content Restructure & A1 Completion Plan

*Companion to PLAN.md and IMPLEMENTATION_PROGRESS.md*

> **STATUS: ✅ COMPLETE** — All steps implemented as of March 2026.
> The file structure, content fixes, unit curricula, and progression model described below are all live.
> Remaining gaps (B2/C1 content, reading/listening for non-Spanish languages) are tracked in IMPLEMENTATION_PROGRESS.md.

---

## Goals

1. Bring A1 content to a level where users can genuinely read, write, listen, and speak at A1 before advancing to A2
2. Establish correct grammar scope per language (what belongs at A1, what is bridge, what is A2+)
3. Introduce a **unit-based progression model** within each level
4. Break the monolithic `index.ts` files into a modular, maintainable folder structure

---

## Grammar Scope Per Language

### 🇪🇸 Spanish

| Status | Content |
|--------|---------|
| ✅ Required A1 | Presente de indicativo — regular -ar, -er, -ir verbs |
| ✅ Required A1 | Core irregulars: ser, estar, tener, ir |
| ⚠️ Bridge (end of A1) | Futuro próximo — ir a + infinitivo |
| ⚠️ Bridge (end of A1) | Pretérito perfecto — recognition only |
| ❌ A2+ | Pretérito indefinido, Imperfecto, Condicional, Subjuntivo |

**✅ All issues resolved:** `ir` moved to A1 verbs; `ir a + inf` is A1 bridge unit 14; -er/-ir lessons added; adjective agreement added; `hacer` added to A1 verbs.

---

### 🇫🇷 French

| Status | Content |
|--------|---------|
| ✅ Required A1 | Présent de l'indicatif — regular -er verbs |
| ✅ Required A1 | Core irregulars: être, avoir, aller, faire |
| ⚠️ Bridge (end of A1) | Futur proche — aller + infinitif |
| ⚠️ Bridge (end of A1) | Passé composé — recognition only |
| ❌ A2+ | Imparfait, Conditionnel, Subjonctif |

**✅ All issues resolved:** `futur proche` is now A1 bridge unit 15; avoir/aller/faire grammar lessons added; question formation and numbers/time lessons added; adjective agreement moved to A1 unit 10.

---

### 🇮🇹 Italian

| Status | Content |
|--------|---------|
| ✅ Required A1 | Presente indicativo — regular -are, -ere, -ire verbs |
| ✅ Required A1 | Core irregulars: essere, avere, andare, fare |
| ⚠️ Bridge (end of A1) | Futuro prossimo — andare + infinito |
| ⚠️ Bridge (end of A1) | Passato prossimo — recognition only |
| ❌ A2+ | Imperfetto, Condizionale, Congiuntivo |

**✅ All issues resolved:** avere/andare/fare grammar lessons added; -ere/-ire verb lesson added; negation and question formation added; adjective agreement added; futuro prossimo is A1 bridge unit 15.

---

### 🇯🇵 Japanese (JLPT N5 equivalent)

| Status | Content |
|--------|---------|
| ✅ Required A1 | Non-past tense (present & future, same ます form) |
| ✅ Required A1 | Past tense (ました / ませんでした) |
| ✅ Required A1 | Polite form (ます) |
| ✅ Required A1 | Plain form — basic recognition |
| ✅ Required A1 | Core particles: は (topic), を (object), に / で (time/place) |
| ⚠️ Bridge (end of A1) | 〜たい (want to) |
| ⚠️ Bridge (end of A1) | 〜つもり (plan to) |
| ❌ A2+ | て-form combinations, conditionals, passive/causative |

**✅ All issues resolved.**
- Particles に/で moved to A1 (unit 11)
- 〜たい moved to A1 bridge (unit 14); ます/ました/を particle/katakana lessons all added; see units/a1.ts for full curriculum

---

### 🇰🇷 Korean (TOPIK I Level 1 equivalent)

| Status | Content |
|--------|---------|
| ✅ Required A1 | Present tense -아요 / -어요 |
| ✅ Required A1 | Past tense -았/었어요 |
| ✅ Required A1 | Polite speech endings |
| ✅ Required A1 | Existence verbs: 있다 / 없다 |
| ⚠️ Bridge (end of A1) | Near future -(으)ㄹ 거예요 |
| ⚠️ Bridge (end of A1) | Desire -고 싶어요 |
| ❌ A2+ | Conditionals, passive, causative, complex connectors |

**✅ All issues resolved:** present/past tense moved to A1 (units 7 & 9); 고 싶다 is A1 bridge unit 16; 있다/없다 lesson added (unit 10); native numbers added (unit 6); particle lessons 이/가, 을/를, 에/에서 all added (units 11–12).

---

## Progression Model: Units Within a Level

Instead of a flat list of grammar/vocab/verbs, each level is divided into **ordered units**. A unit groups related grammar, vocab, verbs, and a short test.

### Rules
- Unit N+1 unlocks when unit N is mastered (completed or tested out of)
- Users can **test out** of any unit at any time to unlock the next
- Mastered units remain accessible — testing out does not remove access
- Bridge units are simply the last units within A1 (no special tag needed)

### Unit Mastery
A unit is marked "mastered" when the user either:
- Completes all grammar/vocab within the unit and passes the mini-test, OR
- Takes the unit test cold and passes (test-out)

---

## New Type: `LessonUnit`

```typescript
// Add to src/types/index.ts
interface LessonUnit {
  id: string              // "es-a1-u1"
  level: CEFRLevel
  order: number           // 1, 2, 3... sequential within the level
  title: string           // "Greetings & Basics"
  description: string     // one-line summary shown in dashboard
  grammarIds: string[]    // references GrammarLesson.id
  vocabIds: string[]      // references VocabItem.id
  verbIds: string[]       // references Verb.id (may be empty)
  testQuestions: QuizQuestion[]  // 5–8 questions to test out of this unit
}
```

### Updated `LanguageModule`

```typescript
interface LanguageModule {
  grammar: GrammarLesson[]
  vocab: VocabItem[]
  verbs: Verb[]
  units: LessonUnit[]           // new
  placementQuestions: QuizQuestion[]
  levelQuestions: QuizQuestion[]
}
```

### Updated `UserProgress`

```typescript
interface UserProgress {
  userId: string
  language: string
  level: CEFRLevel
  completedLessons: string[]    // keep existing (grammar/vocab mark-complete)
  masteredUnits: string[]       // unit IDs: completed OR tested-out
}
```

---

## New File Structure

Each language follows the same pattern. `index.ts` becomes a pure assembler.

```
src/data/
├── modules.ts                    ← unchanged external API: getModule(langId)
│
├── spanish/
│   ├── index.ts                  ← assembles LanguageModule from sub-files
│   ├── grammar/
│   │   ├── a1.ts                 ← GrammarLesson[] for A1
│   │   ├── a2.ts
│   │   └── b1.ts
│   ├── vocab/
│   │   ├── a1.ts                 ← VocabItem[] for A1 (~150 items target)
│   │   ├── a2.ts
│   │   └── b1.ts
│   ├── verbs/
│   │   ├── a1.ts                 ← Verb[] for A1 (8–10 verbs target)
│   │   ├── a2.ts
│   │   └── b1.ts
│   ├── units/
│   │   ├── a1.ts                 ← LessonUnit[] ordered A1 curriculum
│   │   ├── a2.ts
│   │   └── b1.ts
│   └── questions/
│       ├── placement.ts          ← placement QuizQuestion[]
│       └── level-tests.ts        ← all level test QuizQuestion[] (A1/A2/B1)
│
├── french/     (same structure)
├── italian/    (same structure)
├── japanese/   (same structure)
└── korean/     (same structure)
```

### Assembler pattern (`spanish/index.ts`)

```typescript
import { a1Grammar, a2Grammar, b1Grammar } from './grammar'
import { a1Vocab,   a2Vocab,   b1Vocab   } from './vocab'
import { a1Verbs,   a2Verbs,   b1Verbs   } from './verbs'
import { a1Units,   a2Units,   b1Units   } from './units'
import { placementQuestions }              from './questions/placement'
import { levelQuestions }                  from './questions/level-tests'

export const spanishModule: LanguageModule = {
  grammar:  [...a1Grammar, ...a2Grammar, ...b1Grammar],
  vocab:    [...a1Vocab,   ...a2Vocab,   ...b1Vocab],
  verbs:    [...a1Verbs,   ...a2Verbs,   ...b1Verbs],
  units:    [...a1Units,   ...a2Units,   ...b1Units],
  placementQuestions,
  levelQuestions,
}
```

---

## A1 Unit Curriculum Per Language

### 🇪🇸 Spanish — 14 A1 Units

| # | Title | Grammar Covered | Vocab Focus |
|---|-------|----------------|-------------|
| 1 | Greetings & Survival | — | hola, gracias, perdón, sí/no, por favor |
| 2 | Subject Pronouns & Ser | Subject Pronouns, Ser | nationalities, professions |
| 3 | Estar & Descriptions | Ser vs Estar | adjectives: cansado, feliz, bien |
| 4 | Articles & Noun Gender | Articles el/la/un/una | common nouns |
| 5 | Present: -ar Verbs | Regular -ar endings | hablar, trabajar, estudiar, escuchar |
| 6 | Present: -er & -ir Verbs | Regular -er/-ir endings | comer, beber, vivir, escribir |
| 7 | Negation & Questions | Negation + Question formation | dónde, qué, quién, cuándo |
| 8 | Tener & Numbers | Tener (present), Numbers 0–100 | números, edad, hora |
| 9 | Ir & Directions | Ir (present) | derecha, izquierda, recto, lejos, cerca |
| 10 | Adjective Agreement | Adjective agreement (m/f/pl) | colors, sizes, qualities |
| 11 | Time & Days | Telling time + days/months | días, meses, estaciones |
| 12 | Family & Daily Life | — | familia, rutina, casa, trabajo |
| 13 | Food & Shopping | — | comida, bebidas, precios, tiendas |
| 14 | Bridge: Near Future | Ir a + infinitivo | mañana, esta noche, pronto, después |

---

### 🇫🇷 French — 15 A1 Units

| # | Title | Grammar Covered | Vocab Focus |
|---|-------|----------------|-------------|
| 1 | Greetings & Politeness | — | bonjour, merci, s'il vous plaît, pardon |
| 2 | Subject Pronouns & Être | Subject Pronouns, Être | nationalités, professions |
| 3 | Avoir (to have) | Avoir (present + uses) | famille, possession, âge |
| 4 | Articles & Noun Gender | le/la/l'/les, un/une/des | nouns m/f, élision |
| 5 | Present: -er Verbs | Regular -er endings | parler, travailler, habiter, aimer |
| 6 | Aller (to go) | Aller (present) | directions: à droite, à gauche, tout droit |
| 7 | Faire (to do/make) | Faire (present) | faire du sport, les courses, la cuisine |
| 8 | Negation (ne…pas) | Negation structure | ne…pas, ne…plus, ne…jamais |
| 9 | Question Formation | est-ce que, inversion, intonation | question words: où, quand, qui, pourquoi |
| 10 | Adjective Agreement | Basic m/f/pl agreement | grand/grande, beau/belle, petit/petite |
| 11 | Numbers & Telling Time | Numbers 0–100, heures | l'heure, demi, quart, jours, mois |
| 12 | Family & Relationships | — | famille, ami, collègue, voisin |
| 13 | Food, Café & Shopping | — | nourriture, boissons, commander, payer |
| 14 | Places & Daily Routine | — | ville, maison, quartier, tous les jours |
| 15 | Bridge: Futur Proche | Aller + infinitif | demain, bientôt, ce soir, la semaine prochaine |

---

### 🇮🇹 Italian — 15 A1 Units

| # | Title | Grammar Covered | Vocab Focus |
|---|-------|----------------|-------------|
| 1 | Greetings & Politeness | — | ciao, grazie, prego, scusi, buongiorno |
| 2 | Subject Pronouns & Essere | Subject Pronouns, Essere | nazionalità, professioni |
| 3 | Avere (to have) | Avere (present + uses) | famiglia, possesso, età |
| 4 | Articles (il/lo/la/i/gli/le) | Articles + noun gender | libro, casa, studente, amica |
| 5 | Present: -are Verbs | Regular -are endings | parlare, lavorare, abitare, amare |
| 6 | Present: -ere & -ire Verbs | Regular -ere/-ire endings | scrivere, leggere, dormire, partire |
| 7 | Andare & Directions | Andare (present) | destra, sinistra, dritto, vicino, lontano |
| 8 | Fare | Fare (present) | fare sport, la spesa, colazione, una passeggiata |
| 9 | Negation & Questions | Non + verb, question formation | non, dove, che cosa, chi, quando |
| 10 | Adjective Agreement | Gender/number agreement | bello/bella, grande, piccolo, nuovo |
| 11 | Numbers & Time | Numbers 0–100, telling time | l'ora, i giorni, i mesi, le stagioni |
| 12 | Family & Relationships | — | famiglia, amici, colleghi, vicini |
| 13 | Food & Eating Out | — | cibo, ristorante, ordinare, il conto |
| 14 | Daily Life & Places | — | casa, città, negozio, routine quotidiana |
| 15 | Bridge: Futuro Prossimo | Andare + infinito | domani, stasera, tra poco, il prossimo fine settimana |

---

### 🇯🇵 Japanese — 14 A1 Units

| # | Title | Grammar Covered | Vocab Focus |
|---|-------|----------------|-------------|
| 1 | Hiragana Part 1 | あ-な rows | core hiragana reading |
| 2 | Hiragana Part 2 | は-ん rows + dakuten | full hiragana chart, double consonants |
| 3 | Katakana Basics | ア-ン + common patterns | loanwords: コーヒー、テレビ、レストラン |
| 4 | Greetings & Basic Phrases | Greetings grammar | おはよう、こんにちは、ありがとう、すみません |
| 5 | X は Y です | Basic sentence structure (は、です) | わたし、がくせい、にほんじん、しごと |
| 6 | Numbers & Counters | Numbers 1–100, basic counters | 一〜百、〜本、〜枚、〜個 |
| 7 | Non-past Polite (ます) | ます-form present/future | 食べます、飲みます、行きます、します |
| 8 | Past Polite (ました) | ました / ませんでした | 食べました、行きました |
| 9 | Negation & Questions | 〜ません、か question particle | plain negatives, question intonation |
| 10 | Particle を (object) | を particle | 〜をたべます、〜をのみます、〜をみます |
| 11 | Particles に & で | に (destination/time), で (place/means) | 学校に、３時に、バスで、図書館で |
| 12 | Daily Life & Food | — | ごはん、みず、がっこう、うち、しごと |
| 13 | Plain Form Recognition | Dictionary form (basic) | 食べる、飲む、行く — recognition only |
| 14 | Bridge: 〜たい | 〜たいです (want to) | 食べたい、行きたい、見たい |

---

### 🇰🇷 Korean — 16 A1 Units

| # | Title | Grammar Covered | Vocab Focus |
|---|-------|----------------|-------------|
| 1 | Hangul Part 1 | Vowels + basic consonants | ㅏ ㅓ ㅗ ㅜ ㅡ ㅣ + 가나다라... |
| 2 | Hangul Part 2 | Final consonants (받침) | 밥, 책, 학교, 물 |
| 3 | Greetings & Expressions | Greetings forms | 안녕하세요, 감사합니다, 죄송합니다, 괜찮아요 |
| 4 | Basic Sentence: 은/는 + 이에요/예요 | Topic particle + copula | 저, 학생, 선생님, 한국 사람 |
| 5 | Sino-Korean Numbers | 일이삼사오... | 날짜, 전화번호, 가격, 분 |
| 6 | Native Korean Numbers | 하나둘셋넷다섯... | 나이, 개수, 시간 (hours) |
| 7 | Present Tense: -아요/-어요 | Vowel harmony + 해요 | 먹어요, 가요, 해요, 마셔요 |
| 8 | Negation: 안 & 못 | 안 + verb, 못 + verb | 안 먹어요, 못 가요 |
| 9 | Past Tense: -았/었어요 | Past tense formation | 먹었어요, 갔어요, 했어요 |
| 10 | 있다 / 없다 | Existence + possession | 있어요, 없어요, 뭐가 있어요? |
| 11 | Particles: 이/가 & 을/를 | Subject + object particles | 밥을 먹어요, 친구가 와요 |
| 12 | Particles: 에 & 에서 | Location particles | 학교에 가요, 식당에서 먹어요 |
| 13 | Questions & Question Words | Question formation | 어디, 뭐, 언제, 누구, 어떻게, 왜 |
| 14 | Family, Food & Daily Life | — | 가족, 음식, 일상, 집, 학교 |
| 15 | Bridge: -(으)ㄹ 거예요 | Near future construction | 갈 거예요, 먹을 거예요 |
| 16 | Bridge: -고 싶어요 | Desire construction | 먹고 싶어요, 가고 싶어요 |

---

## Vocabulary Target per Language at A1

**Goal: ~150 items per language (up from 10 currently)**

| Theme | Count |
|-------|-------|
| Greetings & politeness | 12 |
| Numbers 1–100 | 15 |
| Days, months, seasons | 20 |
| Family & relationships | 15 |
| Food & drinks | 25 |
| Body parts | 10 |
| Colors | 8 |
| Clothing | 8 |
| Places & locations | 15 |
| Directions | 8 |
| Professions | 10 |
| Time expressions | 12 |
| Common adjectives | 15 |
| **Total** | **~173** |

---

## Verb Target per Language at A1

**Goal: 8–10 verbs at A1 (up from 4 currently)**

Each verb should include **present + past polite forms** at a minimum. For Japanese/Korean, include romanized fields throughout.

| Language | Required A1 Verbs |
|----------|------------------|
| Spanish  | hablar, ser, estar, tener, ir, hacer, querer |
| French   | être, avoir, aller, faire, parler, vouloir, pouvoir |
| Italian  | essere, avere, parlare, andare, fare, volere, potere |
| Japanese | 食べる, 飲む, 行く, する, 来る, 見る, 話す, 書く |
| Korean   | 먹다, 가다, 마시다, 하다, 오다, 보다, 말하다, 있다/없다 |

---

## App Changes Required

### `src/types/index.ts`
- Add `LessonUnit` interface (see above)
- Add `units: LessonUnit[]` to `LanguageModule`
- Add `masteredUnits: string[]` to `UserProgress`

### `src/store/progress.ts`
- Add `getMasteredUnits(langId): string[]`
- Add `masterUnit(langId, unitId): void`
- Add `isUnitUnlocked(langId, unitId, allUnits): boolean`
  - Rule: first unit always unlocked; unit N unlocked if unit N-1 is mastered

### New page: `UnitPage` (`/learn/:langId/unit/:unitId`)
- Shows the unit's grammar lessons, vocab, and verbs in sequence
- "Test Out" button at the top (skip to mini-test directly)
- Mini-test at the bottom (5–8 questions)
- On pass: unit marked as mastered, next unit unlocked

### Updated: `DashboardPage`
- Replace flat grammar/vocab/verbs progress grid with ordered unit list
- Show lock icons on future units, checkmarks on mastered units, progress indicators on in-progress units

### New route in `App.tsx`
- `/learn/:langId/unit/:unitId` → `UnitPage`

---

## UX Notes (To Design Later)

- **Tabs within the unit page** — easy navigation between grammar, vocab, verbs, and the unit test within a single unit. To be designed when working on UX.
- Dashboard unit list should show estimated time per unit
- Consider a "continue where you left off" shortcut on the dashboard

---

## Implementation Order — ✅ ALL STEPS COMPLETE

```
✅ Step 1 — Types: LessonUnit, LocalizedText, ReadingPassage, ListeningExercise added
✅ Step 2 — File restructure: all 5 languages split into grammar/vocab/verbs/units/questions + assembler index.ts
✅ Step 3 — Fix misassigned content (Korean tenses, Japanese particles, Spanish ir, French futur proche)
✅ Step 4 — Add missing A1 grammar (all languages)
✅ Step 5 — Expand A1 vocabulary to ~150 items per language
✅ Step 6 — Expand A1 verbs to 7–8 per language
✅ Step 7 — units/a1.ts for each language (ordered curriculum with test questions)
✅ Step 8 — Progress store: getMasteredUnits, masterUnit, isUnitUnlocked, resetLanguageProgress (fixed), removeLanguage
✅ Step 9 — UnitPage built; DashboardPage updated with Path tab
```
