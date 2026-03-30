# Content File Naming & Structure Conventions

## Directory layout

```
src/data/{langId}/
  index.ts                  — assembler (uses createLanguageModule())
  grammar/
    a1/                     — thematic subfolder when ≥ 5 lessons
      index.ts              — re-exports all lessons as a flat array
      foundations.ts
      verb-conjugation.ts
      ...
    a2.ts                   — single file acceptable up to ~5 lessons / ~150 lines
    b1.ts
    ...
  vocab/
    a1.ts                   — vocab items at this level
    ...
  verbs/
    a1.ts
    ...
  units/
    a1.ts
    ...
  reading/
    a1.ts
    ...
  listening/
    a1.ts
    ...
  culture/
    a1/
      index.ts              — re-exports all episodes as a flat array
      {lang}-c-a1-1.ts      — one file per episode: {langId}-c-{level}-{n}.ts
      {lang}-c-a1-2.ts
      ...
    a2/
      ...
  questions/
    placement.ts            — export name: placementQuestions
    level-tests.ts          — export name: levelQuestions (preferred) or levelTestQuestions
```

## File naming rules

| Content type | Single-level export name | Multi-file subfolder export name |
|---|---|---|
| Grammar | `a1Grammar`, `a2Grammar`, … | same, re-exported from `index.ts` |
| Vocab | `a1Vocab`, `a2Vocab`, … | same |
| Verbs | `a1Verbs`, `a2Verbs`, … | same |
| Units | `a1Units`, `a2Units`, … | same |
| Reading | `a1Reading`, `a2Reading`, … | same |
| Listening | `a1Listening`, `a2Listening`, … | same |
| Culture | `{lang}A1Culture`, … | same, re-exported from `index.ts` |
| Placement | `placementQuestions` | — |
| Level tests | `levelQuestions` | — |

**Preferred:** use generic `a1Grammar`, `a1Vocab` etc. (not language-prefixed) for grammar/vocab/verbs/units/reading/listening. Culture episode exports use language prefix (`esA1Culture`, `frA1Culture`) because episodes are always in per-file format and the prefix prevents name collisions if files are ever imported together.

**Level-test export name:** prefer `levelQuestions` (French, Italian, Japanese use this). Spanish and Korean use `levelTestQuestions` — these should be migrated to `levelQuestions` when the files are next touched.

## When to split a file into a subfolder

Split when either:
- The file exceeds **~200 lines**, OR
- The file contains **more than ~8 lessons / items** of the same type

Spanish A1 grammar (`grammar/a1/`) and all culture levels are good examples of the subfolder pattern.
Japanese and Korean A2 grammar (`grammar/a2.ts`) are 424 lines / 20 lessons and should be split into thematic subfolders (see F-15 in the architecture review).

## IDs

Content IDs follow: `{langId}-{type}-{level}-{n}`

| Type code | Content |
|---|---|
| `g` | grammar lesson |
| `v` | vocab item |
| `vb` | verb |
| `u` | unit |
| `r` | reading passage |
| `l` | listening exercise |
| `c` | culture episode |

Examples: `es-g-a1-3`, `ja-v-a2-12`, `fr-c-a1-1`

## `language` field

Content files do **not** need to set `language` on individual items. `createLanguageModule()` stamps every item with the correct `langId` at assembly time.

## Minimum content density per level

These are the minimum targets that each language must meet before a level is considered complete for release. Numbers are derived from the current content baseline (March 2026) across all 5 languages.

| Content type | A1 min | A2 min | B1+ min | Notes |
|---|---|---|---|---|
| Grammar lessons | **12** | **20** | **15** | A1 is foundational; A2 expands key patterns |
| Vocab items | **150** | **120** | **80** | A1 core vocabulary is the largest investment |
| Verbs | **6** | **6** | **4** | With full conjugation tables |
| Units (path cards) | **8** | **8** | **6** | Each unit groups 1–3 grammar + vocab sets |
| Culture episodes | **3** | **3** | **2** | Split across thematic categories |
| Reading passages | **2** | **3** | **3** | — |
| Listening exercises | **2** | **3** | **3** | — |
| Placement questions | **10** (2/level × 5 levels) | shared | shared | One placement bank covers all levels |
| Level-test questions | **15** per level | same | same | Pass threshold: 12/15 |

### Current baseline (observed counts, 2026-03-30)

| Language | A1 grammar | A2 grammar | A1 vocab | A2 vocab | Total verbs |
|---|---|---|---|---|---|
| Spanish | 35 | 22 | 279 | 130 | 51 |
| French | 39 | 25 | 280 | 144 | 59 |
| Italian | 35 | 20 | 226 | 132 | 49 |
| Japanese | 42 | 20 | 177 | 164 | 61 |
| Korean | 40 | 20 | 174 | 164 | 38 |

All languages meet or exceed the minimums above. When adding new content, maintain at least these counts before bumping the minor version.

### Density rule of thumb

A single grammar lesson should have **5 examples** and **3 inline vocab items** at minimum. A vocab item must have `word`, `translation`, and `example`. Verbs must have at least **2 tenses** with full conjugation tables.
