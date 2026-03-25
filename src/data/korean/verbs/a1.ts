// Korean A1 verbs
// data/korean/verbs/a1.ts
import { Verb } from "../../../types"

// A1 verbs — core daily action verbs, each with present and past tense.
// 있다 and 없다 are descriptive verbs (adjectives in English) but fully conjugated as verbs in Korean.
// 오다 moved here from the old A2 data — it is essential at A1 alongside 가다.
// Order: 가다, 오다, 하다, 있다, 없다, 먹다 first (most foundational), then remaining original verbs, then new additions.

export const a1Verbs: Verb[] = [
    {
        id: "ko-vb-a1-2",
        level: "A1",
        infinitive: "가다",
        romanized: "gada",
        meaning: "to go",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "가요", romanized: "gayo" },
                    { pronoun: "Negative", form: "안 가요", romanized: "an gayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "갔어요", romanized: "gasseoyo" },
                    { pronoun: "Negative", form: "안 갔어요", romanized: "an gasseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-7",
        level: "A1",
        infinitive: "오다",
        romanized: "oda",
        meaning: "to come",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "와요", romanized: "wayo" },
                    { pronoun: "Negative", form: "안 와요", romanized: "an wayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "왔어요", romanized: "wasseoyo" },
                    { pronoun: "Negative", form: "안 왔어요", romanized: "an wasseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-4",
        level: "A1",
        infinitive: "하다",
        romanized: "hada",
        meaning: "to do",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "해요", romanized: "haeyo" },
                    { pronoun: "Negative", form: "안 해요", romanized: "an haeyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "했어요", romanized: "haesseoyo" },
                    { pronoun: "Negative", form: "안 했어요", romanized: "an haesseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-5",
        level: "A1",
        infinitive: "있다",
        romanized: "itda",
        meaning: "to exist / to have / to be (at a place)",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "있어요", romanized: "isseoyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "있었어요", romanized: "isseosseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-6",
        level: "A1",
        infinitive: "없다",
        romanized: "eopda",
        meaning: "to not exist / to not have / to be absent",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "없어요", romanized: "eopseoyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "없었어요", romanized: "eopseosseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-1",
        level: "A1",
        infinitive: "먹다",
        romanized: "meokda",
        meaning: "to eat",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "먹어요", romanized: "meogeoyo" },
                    { pronoun: "Negative", form: "안 먹어요", romanized: "an meogeoyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "먹었어요", romanized: "meogeosseoyo" },
                    { pronoun: "Negative", form: "안 먹었어요", romanized: "an meogeosseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-3",
        level: "A1",
        infinitive: "마시다",
        romanized: "masida",
        meaning: "to drink",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "마셔요", romanized: "masyeoyo" },
                    { pronoun: "Negative", form: "안 마셔요", romanized: "an masyeoyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "마셨어요", romanized: "masyeosseoyo" },
                    { pronoun: "Negative", form: "안 마셨어요", romanized: "an masyeosseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-8",
        level: "A1",
        infinitive: "좋아하다",
        romanized: "joahada",
        meaning: "to like",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "좋아해요", romanized: "joahaeyo" },
                    { pronoun: "Negative", form: "안 좋아해요", romanized: "an joahaeyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "좋아했어요", romanized: "joahaesseoyo" },
                    { pronoun: "Negative", form: "안 좋아했어요", romanized: "an joahaesseoyo" }
                ]
            }
        ]
    },
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
    {
        id: "ko-vb-a1-15",
        level: "A1",
        infinitive: "요리하다",
        romanized: "yorihada",
        meaning: "to cook",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "요리해요", romanized: "yorihaeyo" },
                    { pronoun: "Negative", form: "요리 안 해요", romanized: "yori an haeyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "요리했어요", romanized: "yorihaesseoyo" },
                    { pronoun: "Negative", form: "요리 안 했어요", romanized: "yori an haesseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-16",
        level: "A1",
        infinitive: "보다",
        romanized: "boda",
        meaning: "to see / to watch",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "봐요", romanized: "bwayo" },
                    { pronoun: "Negative", form: "안 봐요", romanized: "an bwayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "봤어요", romanized: "bwasseoyo" },
                    { pronoun: "Negative", form: "안 봤어요", romanized: "an bwasseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-17",
        level: "A1",
        infinitive: "쓰다",
        romanized: "sseuda",
        meaning: "to write / to use",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "써요", romanized: "sseoyo" },
                    { pronoun: "Negative", form: "안 써요", romanized: "an sseoyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "썼어요", romanized: "sseosseoyo" },
                    { pronoun: "Negative", form: "안 썼어요", romanized: "an sseosseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-18",
        level: "A1",
        infinitive: "듣다",
        romanized: "deutda",
        meaning: "to listen",
        conjugations: [
            // ㄷ-irregular: 듣- → 들- before vowel suffix
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "들어요", romanized: "deureoyo" },
                    { pronoun: "Negative", form: "안 들어요", romanized: "an deureoyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "들었어요", romanized: "deureosseoyo" },
                    { pronoun: "Negative", form: "안 들었어요", romanized: "an deureosseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-19",
        level: "A1",
        infinitive: "자다",
        romanized: "jada",
        meaning: "to sleep",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "자요", romanized: "jayo" },
                    { pronoun: "Negative", form: "안 자요", romanized: "an jayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "잤어요", romanized: "jasseoyo" },
                    { pronoun: "Negative", form: "안 잤어요", romanized: "an jasseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-20",
        level: "A1",
        infinitive: "알다",
        romanized: "alda",
        meaning: "to know",
        conjugations: [
            // ㄹ-irregular. Note: the negative of 알다 is 모르다 (not 안 알아요).
            // Both forms shown for clarity.
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "알아요", romanized: "arayo" },
                    { pronoun: "Negative (→ 모르다)", form: "몰라요", romanized: "mollayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "알았어요", romanized: "arasseoyo" },
                    { pronoun: "Negative (→ 모르다)", form: "몰랐어요", romanized: "mollasseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a1-21",
        level: "A1",
        infinitive: "모르다",
        romanized: "moreuda",
        meaning: "to not know",
        conjugations: [
            // 르-irregular: 모르- → 몰라- / 몰랐-.
            // This verb expresses negation in itself; there is no standard 안 모르다 form.
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "몰라요", romanized: "mollayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "몰랐어요", romanized: "mollasseoyo" }
                ]
            }
        ]
    },
]
