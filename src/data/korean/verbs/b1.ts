// Korean B1 verbs
// data/korean/verbs/b1.ts
import { Verb } from "../../../types"

// B1 verbs — verbs used in more complex sentences with conditionals and connectors.

export const b1Verbs: Verb[] = [
    {
        id: "ko-vb-b1-1",
        level: "B1",
        infinitive: "생각하다",
        romanized: "saenggakhada",
        meaning: "to think",
        conjugations: [
            {
                tense: "Present & Past (Polite)",
                forms: [
                    { pronoun: "polite", form: "생각해요", romanized: "saenggakhaeyo" },
                    { pronoun: "formal", form: "생각합니다", romanized: "saenggakamnida" },
                    { pronoun: "past polite", form: "생각했어요", romanized: "saenggakhaesseoyo" },
                    { pronoun: "negative", form: "생각 안 해요", romanized: "saenggak an haeyo" },
                ]
            },
            {
                tense: "Connectors",
                forms: [
                    { pronoun: "-(으)면 (if)", form: "생각하면", romanized: "saenggakhamyeon" },
                    { pronoun: "-아/어서 (because)", form: "생각해서", romanized: "saenggakhaeseo" },
                    { pronoun: "-기 때문에 (formal because)", form: "생각하기 때문에", romanized: "saenggakhagi ttaemune" },
                    { pronoun: "-지만 (but)", form: "생각하지만", romanized: "saenggakhajiman" },
                ]
            },
            {
                tense: "Reported Speech",
                forms: [
                    { pronoun: "statement", form: "생각한다고 해요", romanized: "saenggakhanda go haeyo" },
                    { pronoun: "past statement", form: "생각했다고 해요", romanized: "saenggakhaetdago haeyo" },
                    { pronoun: "opinion expr.", form: "~(이)라고 생각해요", romanized: "~(i)rago saenggakhaeyo" },
                ]
            },
            {
                tense: "Nominalisation",
                forms: [
                    { pronoun: "~기 form", form: "생각하기", romanized: "saenggakhagi" },
                    { pronoun: "~는 것", form: "생각하는 것", romanized: "saenggakhaneun geot" },
                ]
            }
        ]
    },
    {
        id: "ko-vb-b1-2",
        level: "B1",
        infinitive: "먹다",
        romanized: "meokda",
        meaning: "to eat",
        conjugations: [
            {
                tense: "Present & Past (Polite)",
                forms: [
                    { pronoun: "polite", form: "먹어요", romanized: "meogeoyo" },
                    { pronoun: "formal", form: "먹습니다", romanized: "meokseumnida" },
                    { pronoun: "past polite", form: "먹었어요", romanized: "meogeosseoyo" },
                    { pronoun: "informal (반말)", form: "먹어", romanized: "meogeo" },
                ]
            },
            {
                tense: "Obligation & Attempt",
                forms: [
                    { pronoun: "must eat", form: "먹어야 해요", romanized: "meogeoya haeyo" },
                    { pronoun: "try eating", form: "먹어 봐요", romanized: "meogeo bwayo" },
                    { pronoun: "don't have to", form: "안 먹어도 돼요", romanized: "an meogeodo dwaeyo" },
                ]
            },
            {
                tense: "Reported Speech",
                forms: [
                    { pronoun: "statement (eats)", form: "먹는다고 해요", romanized: "meongneundago haeyo" },
                    { pronoun: "statement (ate)", form: "먹었다고 해요", romanized: "meogeotdago haeyo" },
                    { pronoun: "command (eat!)", form: "먹으라고 해요", romanized: "meogeurago haeyo" },
                    { pronoun: "suggestion (let's eat)", form: "먹자고 해요", romanized: "meokjago haeyo" },
                ]
            },
            {
                tense: "Nominalisation",
                forms: [
                    { pronoun: "~기", form: "먹기", romanized: "meokgi" },
                    { pronoun: "~는 것", form: "먹는 것", romanized: "meongneun geot" },
                    { pronoun: "example", form: "먹는 것이 좋아요 (I like eating)", romanized: "meongneun geosi joayo" },
                ]
            }
        ]
    },
    {
        id: "ko-vb-b1-3",
        level: "B1",
        infinitive: "가다",
        romanized: "gada",
        meaning: "to go",
        conjugations: [
            {
                tense: "Present & Past (Polite)",
                forms: [
                    { pronoun: "polite", form: "가요", romanized: "gayo" },
                    { pronoun: "formal", form: "갑니다", romanized: "gamnida" },
                    { pronoun: "past polite", form: "갔어요", romanized: "gasseoyo" },
                    { pronoun: "informal", form: "가", romanized: "ga" },
                ]
            },
            {
                tense: "Connectors",
                forms: [
                    { pronoun: "-(으)면 (if)", form: "가면", romanized: "gamyeon" },
                    { pronoun: "-아/어서 (so/because)", form: "가서", romanized: "gaseo" },
                    { pronoun: "-기 때문에 (formal)", form: "가기 때문에", romanized: "gagi ttaemune" },
                    { pronoun: "-지만 (but)", form: "가지만", romanized: "gajiman" },
                ]
            },
            {
                tense: "Purpose & Attempt",
                forms: [
                    { pronoun: "~(으)러 가다", form: "가러 가다", romanized: "gareo gada" },
                    { pronoun: "try going", form: "가 봐요", romanized: "ga bwayo" },
                    { pronoun: "must go", form: "가야 해요", romanized: "gaya haeyo" },
                ]
            },
            {
                tense: "Reported Speech",
                forms: [
                    { pronoun: "statement (goes)", form: "간다고 해요", romanized: "gandago haeyo" },
                    { pronoun: "statement (went)", form: "갔다고 해요", romanized: "gatdago haeyo" },
                    { pronoun: "suggestion (let's go)", form: "가자고 해요", romanized: "gajago haeyo" },
                ]
            }
        ]
    },
    {
        id: "ko-vb-b1-4",
        level: "B1",
        infinitive: "하다",
        romanized: "hada",
        meaning: "to do",
        conjugations: [
            {
                tense: "Present & Past (Polite)",
                forms: [
                    { pronoun: "polite", form: "해요", romanized: "haeyo" },
                    { pronoun: "formal", form: "합니다", romanized: "hamnida" },
                    { pronoun: "past polite", form: "했어요", romanized: "haesseoyo" },
                    { pronoun: "informal", form: "해", romanized: "hae" },
                ]
            },
            {
                tense: "Obligation & Attempt",
                forms: [
                    { pronoun: "must do", form: "해야 해요", romanized: "haeya haeyo" },
                    { pronoun: "must do (formal)", form: "해야 됩니다", romanized: "haeya doemnida" },
                    { pronoun: "try doing", form: "해 봐요", romanized: "hae bwayo" },
                    { pronoun: "don't have to", form: "안 해도 돼요", romanized: "an haedo dwaeyo" },
                ]
            },
            {
                tense: "Reported Speech",
                forms: [
                    { pronoun: "statement (does)", form: "한다고 해요", romanized: "handago haeyo" },
                    { pronoun: "statement (did)", form: "했다고 해요", romanized: "haetdago haeyo" },
                    { pronoun: "command (do it!)", form: "하라고 해요", romanized: "harago haeyo" },
                    { pronoun: "question (doing?)", form: "하냐고 해요", romanized: "hanyago haeyo" },
                ]
            },
            {
                tense: "Nominalisation & Connectors",
                forms: [
                    { pronoun: "~기", form: "하기", romanized: "hagi" },
                    { pronoun: "~는 것", form: "하는 것", romanized: "haneun geot" },
                    { pronoun: "-아/어서", form: "해서", romanized: "haeseo" },
                    { pronoun: "-기 때문에", form: "하기 때문에", romanized: "hagi ttaemune" },
                ]
            }
        ]
    },
    {
        id: "ko-vb-b1-5",
        level: "B1",
        infinitive: "말하다",
        romanized: "malhada",
        meaning: "to say / to speak / to tell",
        conjugations: [
            {
                tense: "Present & Past (Polite)",
                forms: [
                    { pronoun: "polite", form: "말해요", romanized: "malhaeyo" },
                    { pronoun: "formal", form: "말합니다", romanized: "malham-nida" },
                    { pronoun: "past polite", form: "말했어요", romanized: "malhaesseoyo" },
                    { pronoun: "informal", form: "말해", romanized: "malhae" },
                ]
            },
            {
                tense: "Reported Speech",
                forms: [
                    { pronoun: "statement", form: "말한다고 해요", romanized: "malhandago haeyo" },
                    { pronoun: "past statement", form: "말했다고 해요", romanized: "malhaetdago haeyo" },
                    { pronoun: "command", form: "말하라고 해요", romanized: "malharago haeyo" },
                    { pronoun: "question", form: "말하냐고 해요", romanized: "malhanyago haeyo" },
                ]
            },
            {
                tense: "Obligation & Attempt",
                forms: [
                    { pronoun: "must say", form: "말해야 해요", romanized: "malhaeya haeyo" },
                    { pronoun: "try saying", form: "말해 봐요", romanized: "malhae bwayo" },
                    { pronoun: "don't have to say", form: "말 안 해도 돼요", romanized: "mal an haedo dwaeyo" },
                ]
            }
        ]
    },
    {
        id: "ko-vb-b1-6",
        level: "B1",
        infinitive: "배우다",
        romanized: "baeuda",
        meaning: "to learn / to study (a skill)",
        conjugations: [
            {
                tense: "Present & Past (Polite)",
                forms: [
                    { pronoun: "polite", form: "배워요", romanized: "baewoeyo" },
                    { pronoun: "formal", form: "배웁니다", romanized: "baeumnida" },
                    { pronoun: "past polite", form: "배웠어요", romanized: "baewosseoyo" },
                    { pronoun: "informal", form: "배워", romanized: "baewo" },
                ]
            },
            {
                tense: "Obligation & Attempt",
                forms: [
                    { pronoun: "must learn", form: "배워야 해요", romanized: "baewoya haeyo" },
                    { pronoun: "try learning", form: "배워 봐요", romanized: "baewo bwayo" },
                    { pronoun: "have tried learning", form: "배워 봤어요", romanized: "baewo bwasseoyo" },
                ]
            },
            {
                tense: "Nominalisation",
                forms: [
                    { pronoun: "~기", form: "배우기", romanized: "baeuge" },
                    { pronoun: "~는 것", form: "배우는 것", romanized: "baeuneun geot" },
                ]
            }
        ]
    },
]
