// ─────────────────────────────────────────────────────────────────────────────
// A1 VERB ADDITIONS — ALL FIVE LANGUAGES
//
// Each language goes from 7–8 verbs to 13–14 verbs.
// Selection criteria for every addition:
//   1. Appears in existing grammar/vocab examples but has no conjugation table
//   2. Required for A1 functional skills (ordering food, daily routine, etc.)
//   3. High frequency — one of the top 50 verbs in the language
//   4. Not duplicating a verb already drillable from the existing table
//
// UNIT WIRING — at the bottom of each language section, recommended unit
// assignments are listed. Patch the relevant unit's verbIds array.
// ─────────────────────────────────────────────────────────────────────────────

import { Verb } from "../../../types"


// ═════════════════════════════════════════════════════════════════════════════
// SPANISH — append to a1Verbs in data/spanish/verbs/a1.ts
// Currently: hablar, ser, estar, tener, ir, hacer, querer (7)
// Adding:    comer, beber, vivir, trabajar, llamar, poder  (6 → total 13)
// ═════════════════════════════════════════════════════════════════════════════

export const esNewVerbs: Verb[] = [
    {
        id: "es-vb-a1-8",
        level: "A1",
        infinitive: "comer",
        meaning: "to eat",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "como" },
                { pronoun: "tú", form: "comes" },
                { pronoun: "él/ella", form: "come" },
                { pronoun: "nosotros", form: "comemos" },
                { pronoun: "vosotros", form: "coméis" },
                { pronoun: "ellos", form: "comen" }
            ]
        }]
    },
    {
        id: "es-vb-a1-9",
        level: "A1",
        infinitive: "beber",
        meaning: "to drink",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "bebo" },
                { pronoun: "tú", form: "bebes" },
                { pronoun: "él/ella", form: "bebe" },
                { pronoun: "nosotros", form: "bebemos" },
                { pronoun: "vosotros", form: "bebéis" },
                { pronoun: "ellos", form: "beben" }
            ]
        }]
    },
    {
        id: "es-vb-a1-10",
        level: "A1",
        infinitive: "vivir",
        meaning: "to live",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "vivo" },
                { pronoun: "tú", form: "vives" },
                { pronoun: "él/ella", form: "vive" },
                { pronoun: "nosotros", form: "vivimos" },
                { pronoun: "vosotros", form: "vivís" },
                { pronoun: "ellos", form: "viven" }
            ]
        }]
    },
    {
        id: "es-vb-a1-11",
        level: "A1",
        infinitive: "trabajar",
        meaning: "to work",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "trabajo" },
                { pronoun: "tú", form: "trabajas" },
                { pronoun: "él/ella", form: "trabaja" },
                { pronoun: "nosotros", form: "trabajamos" },
                { pronoun: "vosotros", form: "trabajáis" },
                { pronoun: "ellos", form: "trabajan" }
            ]
        }]
    },
    {
        id: "es-vb-a1-12",
        level: "A1",
        infinitive: "llamar",
        meaning: "to call",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "llamo" },
                { pronoun: "tú", form: "llamas" },
                { pronoun: "él/ella", form: "llama" },
                { pronoun: "nosotros", form: "llamamos" },
                { pronoun: "vosotros", form: "llamáis" },
                { pronoun: "ellos", form: "llaman" }
            ]
        }]
    },
    {
        id: "es-vb-a1-13",
        level: "A1",
        infinitive: "poder",
        meaning: "to be able to / can",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "puedo" },
                { pronoun: "tú", form: "puedes" },
                { pronoun: "él/ella", form: "puede" },
                { pronoun: "nosotros", form: "podemos" },
                { pronoun: "vosotros", form: "podéis" },
                { pronoun: "ellos", form: "pueden" }
            ]
        }]
    },
]

// SPANISH UNIT WIRING:
// es-a1-u5  (Regular -er Verbs)    → add "es-vb-a1-8", "es-vb-a1-9"
// es-a1-u6  (Regular -ir Verbs)    → add "es-vb-a1-10"
// es-a1-u3  (Regular -ar Verbs)    → add "es-vb-a1-11", "es-vb-a1-12"
// es-a1-u10 (Food, Drink & Order)  → add "es-vb-a1-8", "es-vb-a1-9", "es-vb-a1-13"
// es-a1-u13 (Review)               → add "es-vb-a1-8", "es-vb-a1-9", "es-vb-a1-13"


// ═════════════════════════════════════════════════════════════════════════════
// FRENCH — append to a1Verbs in data/french/verbs/a1.ts
// Currently: être, avoir, aller, faire, parler, vouloir, pouvoir (7)
//            — pouvoir is orphaned (not in any unit)
// Adding:    manger, boire, venir, prendre, lire, habiter  (6 → total 13)
// ═════════════════════════════════════════════════════════════════════════════

export const frNewVerbs: Verb[] = [
    {
        id: "fr-vb-a1-8",
        level: "A1",
        infinitive: "manger",
        meaning: "to eat",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "mange" },
                { pronoun: "tu", form: "manges" },
                { pronoun: "il/elle", form: "mange" },
                { pronoun: "nous", form: "mangeons" }, // -e kept before -ons to preserve soft g
                { pronoun: "vous", form: "mangez" },
                { pronoun: "ils/elles", form: "mangent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-9",
        level: "A1",
        infinitive: "boire",
        meaning: "to drink",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "bois" },
                { pronoun: "tu", form: "bois" },
                { pronoun: "il/elle", form: "boit" },
                { pronoun: "nous", form: "buvons" },
                { pronoun: "vous", form: "buvez" },
                { pronoun: "ils/elles", form: "boivent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-10",
        level: "A1",
        infinitive: "venir",
        meaning: "to come",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "viens" },
                { pronoun: "tu", form: "viens" },
                { pronoun: "il/elle", form: "vient" },
                { pronoun: "nous", form: "venons" },
                { pronoun: "vous", form: "venez" },
                { pronoun: "ils/elles", form: "viennent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-11",
        level: "A1",
        infinitive: "prendre",
        meaning: "to take / to have (food or transport)",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "prends" },
                { pronoun: "tu", form: "prends" },
                { pronoun: "il/elle", form: "prend" },
                { pronoun: "nous", form: "prenons" },
                { pronoun: "vous", form: "prenez" },
                { pronoun: "ils/elles", form: "prennent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-12",
        level: "A1",
        infinitive: "lire",
        meaning: "to read",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "lis" },
                { pronoun: "tu", form: "lis" },
                { pronoun: "il/elle", form: "lit" },
                { pronoun: "nous", form: "lisons" },
                { pronoun: "vous", form: "lisez" },
                { pronoun: "ils/elles", form: "lisent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-13",
        level: "A1",
        infinitive: "habiter",
        meaning: "to live (somewhere) / to reside",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "habite" },
                { pronoun: "tu", form: "habites" },
                { pronoun: "il/elle", form: "habite" },
                { pronoun: "nous", form: "habitons" },
                { pronoun: "vous", form: "habitez" },
                { pronoun: "ils/elles", form: "habitent" }
            ]
        }]
    },
]

// FRENCH UNIT WIRING:
// fr-a1-u7  (Faire — daily life)   → add "fr-vb-a1-8"   (manger)
// fr-a1-u13 (Food & Café)          → add "fr-vb-a1-8", "fr-vb-a1-9", "fr-vb-a1-11"
// fr-a1-u6  (Aller — destinations) → add "fr-vb-a1-10"  (venir)
// fr-a1-u14 (Places & Routine)     → add "fr-vb-a1-13"  (habiter)
// fr-a1-u5  (-er Verbs)            → add "fr-vb-a1-13"  (habiter — model -er verb)
// fr-a1-u15 (Bridge: futur proche) → add "fr-vb-a1-12"  (lire)
// fr-a1-u13 (Food)                 → add "fr-vb-a1-7"   (pouvoir — FIX orphan)


// ═════════════════════════════════════════════════════════════════════════════
// ITALIAN — append to a1Verbs in data/italian/verbs/a1.ts
// Currently: essere, avere, parlare, andare, fare, volere, potere (7)
// Adding:    mangiare, bere, venire, abitare, leggere, studiare  (6 → total 13)
// ═════════════════════════════════════════════════════════════════════════════

export const itNewVerbs: Verb[] = [
    {
        id: "it-vb-a1-8",
        level: "A1",
        infinitive: "mangiare",
        meaning: "to eat",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "io", form: "mangio" },
                { pronoun: "tu", form: "mangi" },    // -i not -ii (drops extra i)
                { pronoun: "lui/lei", form: "mangia" },
                { pronoun: "noi", form: "mangiamo" },
                { pronoun: "voi", form: "mangiate" },
                { pronoun: "loro", form: "mangiano" }
            ]
        }]
    },
    {
        id: "it-vb-a1-9",
        level: "A1",
        infinitive: "bere",
        meaning: "to drink",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "io", form: "bevo" },
                { pronoun: "tu", form: "bevi" },
                { pronoun: "lui/lei", form: "beve" },
                { pronoun: "noi", form: "beviamo" },
                { pronoun: "voi", form: "bevete" },
                { pronoun: "loro", form: "bevono" }
            ]
        }]
    },
    {
        id: "it-vb-a1-10",
        level: "A1",
        infinitive: "venire",
        meaning: "to come",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "io", form: "vengo" },
                { pronoun: "tu", form: "vieni" },
                { pronoun: "lui/lei", form: "viene" },
                { pronoun: "noi", form: "veniamo" },
                { pronoun: "voi", form: "venite" },
                { pronoun: "loro", form: "vengono" }
            ]
        }]
    },
    {
        id: "it-vb-a1-11",
        level: "A1",
        infinitive: "abitare",
        meaning: "to live (somewhere) / to reside",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "io", form: "abito" },
                { pronoun: "tu", form: "abiti" },
                { pronoun: "lui/lei", form: "abita" },
                { pronoun: "noi", form: "abitiamo" },
                { pronoun: "voi", form: "abitate" },
                { pronoun: "loro", form: "abitano" }
            ]
        }]
    },
    {
        id: "it-vb-a1-12",
        level: "A1",
        infinitive: "leggere",
        meaning: "to read",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "io", form: "leggo" },
                { pronoun: "tu", form: "leggi" },
                { pronoun: "lui/lei", form: "legge" },
                { pronoun: "noi", form: "leggiamo" },
                { pronoun: "voi", form: "leggete" },
                { pronoun: "loro", form: "leggono" }
            ]
        }]
    },
    {
        id: "it-vb-a1-13",
        level: "A1",
        infinitive: "studiare",
        meaning: "to study",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "io", form: "studio" },
                { pronoun: "tu", form: "studi" },    // -i not -ii (drops extra i)
                { pronoun: "lui/lei", form: "studia" },
                { pronoun: "noi", form: "studiamo" },
                { pronoun: "voi", form: "studiate" },
                { pronoun: "loro", form: "studiano" }
            ]
        }]
    },
]

// ITALIAN UNIT WIRING:
// it-a1-u4  (-are Verbs)           → add "it-vb-a1-11", "it-vb-a1-13" (abitare, studiare)
// it-a1-u7  (-ere/-ire Verbs)      → add "it-vb-a1-9", "it-vb-a1-12"  (bere, leggere)
// it-a1-u5  (Andare & Fare)        → add "it-vb-a1-10"                 (venire)
// it-a1-u12 (Food & Restaurants)   → add "it-vb-a1-8", "it-vb-a1-9"   (mangiare, bere)


// ═════════════════════════════════════════════════════════════════════════════
// JAPANESE — append to a1Verbs in data/japanese/verbs/a1.ts
// Currently: 食べる, 飲む, 行く, する, 来る, 見る, 話す, 書く (8)
// Adding:    読む, 聞く, 買う, 起きる, 寝る, 帰る  (6 → total 14)
// ═════════════════════════════════════════════════════════════════════════════

export const jaNewVerbs: Verb[] = [
    {
        id: "ja-vb-a1-9",
        level: "A1",
        infinitive: "読む",
        romanized: "yomu",
        meaning: "to read",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "読みます", romanized: "yomimasu" },
                    { pronoun: "Negative", form: "読みません", romanized: "yomimasen" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "読みました", romanized: "yomimashita" },
                    { pronoun: "Negative", form: "読みませんでした", romanized: "yomimasen deshita" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-a1-10",
        level: "A1",
        infinitive: "聞く",
        romanized: "kiku",
        meaning: "to listen / to hear / to ask",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "聞きます", romanized: "kikimasu" },
                    { pronoun: "Negative", form: "聞きません", romanized: "kikimasen" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "聞きました", romanized: "kikimashita" },
                    { pronoun: "Negative", form: "聞きませんでした", romanized: "kikimasen deshita" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-a1-11",
        level: "A1",
        infinitive: "買う",
        romanized: "kau",
        meaning: "to buy",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "買います", romanized: "kaimasu" },
                    { pronoun: "Negative", form: "買いません", romanized: "kaimasen" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "買いました", romanized: "kaimashita" },
                    { pronoun: "Negative", form: "買いませんでした", romanized: "kaimasen deshita" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-a1-12",
        level: "A1",
        infinitive: "起きる",
        romanized: "okiru",
        meaning: "to wake up / to get up",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "起きます", romanized: "okimasu" },
                    { pronoun: "Negative", form: "起きません", romanized: "okimasen" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "起きました", romanized: "okimashita" },
                    { pronoun: "Negative", form: "起きませんでした", romanized: "okimasen deshita" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-a1-13",
        level: "A1",
        infinitive: "寝る",
        romanized: "neru",
        meaning: "to sleep / to go to bed",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "寝ます", romanized: "nemasu" },
                    { pronoun: "Negative", form: "寝ません", romanized: "nemasen" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "寝ました", romanized: "nemashita" },
                    { pronoun: "Negative", form: "寝ませんでした", romanized: "nemasen deshita" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-a1-14",
        level: "A1",
        infinitive: "帰る",
        romanized: "kaeru",
        meaning: "to return home / to go back",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "帰ります", romanized: "kaerimasu" },
                    { pronoun: "Negative", form: "帰りません", romanized: "kaerimasen" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "帰りました", romanized: "kaerimashita" },
                    { pronoun: "Negative", form: "帰りませんでした", romanized: "kaerimasen deshita" }
                ]
            }
        ]
    },
]

// JAPANESE UNIT WIRING:
// ja-a1-u7  (ます-form)            → add "ja-vb-a1-9", "ja-vb-a1-10", "ja-vb-a1-11"
// ja-a1-u8  (Past tense ました)    → add "ja-vb-a1-12", "ja-vb-a1-13", "ja-vb-a1-14"
// ja-a1-u11 (に particle)          → add "ja-vb-a1-12", "ja-vb-a1-14" (時間に起きます, 家に帰ります)
// ja-a1-u13 (Food & Shopping)      → add "ja-vb-a1-9", "ja-vb-a1-11"  (読む, 買う)


// ═════════════════════════════════════════════════════════════════════════════
// KOREAN — append to a1Verbs in data/korean/verbs/a1.ts
// Currently: 먹다, 가다, 마시다, 하다, 있다, 없다, 오다, 좋아하다 (8)
// Adding:    살다, 공부하다, 일하다, 만나다, 사다, 읽다  (6 → total 14)
// ═════════════════════════════════════════════════════════════════════════════

export const koNewVerbs: Verb[] = [
    {
        id: "ko-vb-a1-9",
        level: "A1",
        infinitive: "살다",
        romanized: "salda",
        meaning: "to live (somewhere)",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "살아요", romanized: "sarayo" },
                    { pronoun: "Negative", form: "안 살아요", romanized: "an sarayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "살았어요", romanized: "sarasseoyo" },
                    { pronoun: "Negative", form: "안 살았어요", romanized: "an sarasseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-10",
        level: "A1",
        infinitive: "공부하다",
        romanized: "gongbuhada",
        meaning: "to study",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "공부해요", romanized: "gongbuhaeyo" },
                    { pronoun: "Negative", form: "공부 안 해요", romanized: "gongbu an haeyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "공부했어요", romanized: "gongbuhaesseoyo" },
                    { pronoun: "Negative", form: "공부 안 했어요", romanized: "gongbu an haesseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-11",
        level: "A1",
        infinitive: "일하다",
        romanized: "ilhada",
        meaning: "to work",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "일해요", romanized: "ilhaeyo" },
                    { pronoun: "Negative", form: "일 안 해요", romanized: "il an haeyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "일했어요", romanized: "ilhaesseoyo" },
                    { pronoun: "Negative", form: "일 안 했어요", romanized: "il an haesseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-12",
        level: "A1",
        infinitive: "만나다",
        romanized: "mannada",
        meaning: "to meet",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "만나요", romanized: "mannayo" },
                    { pronoun: "Negative", form: "안 만나요", romanized: "an mannayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "만났어요", romanized: "mannasseoyo" },
                    { pronoun: "Negative", form: "안 만났어요", romanized: "an mannasseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-13",
        level: "A1",
        infinitive: "사다",
        romanized: "sada",
        meaning: "to buy",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "사요", romanized: "sayo" },
                    { pronoun: "Negative", form: "안 사요", romanized: "an sayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "샀어요", romanized: "sasseoyo" },
                    { pronoun: "Negative", form: "안 샀어요", romanized: "an sasseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-14",
        level: "A1",
        infinitive: "읽다",
        romanized: "ikda",
        meaning: "to read",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "읽어요", romanized: "ilgeoyo" },
                    { pronoun: "Negative", form: "안 읽어요", romanized: "an ilgeoyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "읽었어요", romanized: "ilgeosseoyo" },
                    { pronoun: "Negative", form: "안 읽었어요", romanized: "an ilgeosseoyo" }
                ]
            }
        ]
    },
]

// KOREAN UNIT WIRING:
// ko-a1-u5  (Particles: Subject & Object) → add "ko-vb-a1-10", "ko-vb-a1-11"
// ko-a1-u7  (Going Places)               → add "ko-vb-a1-9"   (살다 — 어디에 살아요?)
// ko-a1-u8  (Doing Things)               → add "ko-vb-a1-10", "ko-vb-a1-11"
// ko-a1-u9  (Past Tense)                 → add "ko-vb-a1-12", "ko-vb-a1-13", "ko-vb-a1-14"
// ko-a1-u12 (Review)                     → add "ko-vb-a1-9" through "ko-vb-a1-14"


// ─────────────────────────────────────────────────────────────────────────────
// SUMMARY
//
// Spanish:  7 → 13  (+ comer, beber, vivir, trabajar, llamar, poder)
// French:   7 → 13  (+ manger, boire, venir, prendre, lire, habiter)
//                     also wire existing fr-vb-a1-7 pouvoir into fr-a1-u13
// Italian:  7 → 13  (+ mangiare, bere, venire, abitare, leggere, studiare)
// Japanese: 8 → 14  (+ 読む, 聞く, 買う, 起きる, 寝る, 帰る)
// Korean:   8 → 14  (+ 살다, 공부하다, 일하다, 만나다, 사다, 읽다)
//
// All additions follow the same verb frequency principle:
//   eat + drink        → food/ordering units (all 5 languages)
//   live + study/work  → daily routine units (all 5 languages)
//   read + listen/buy  → daily activities units (all 5 languages)
//   come + return      → movement/location units (all 5 languages)
// ─────────────────────────────────────────────────────────────────────────────
