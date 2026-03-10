// Korean C1 verbs — honorific and humble speech forms
// data/korean/verbs/c1.ts
import { Verb } from "../../../types"

export const c1Verbs: Verb[] = [
    {
        id: "ko-vb-c1-1",
        level: "C1",
        infinitive: "드리다",
        romanized: "deurida",
        meaning: "to give (honorific — giving to a superior)",
        conjugations: [
            {
                tense: "Honorific Present",
                forms: [
                    { pronoun: "Informal honorific", form: "드리다", romanized: "deurida" },
                    { pronoun: "Formal honorific", form: "드립니다", romanized: "deurimnida" },
                    { pronoun: "Informal honorific negative", form: "드리지 않다", romanized: "deuriji-anda" },
                    { pronoun: "Formal honorific negative", form: "드리지 않습니다", romanized: "deuriji-anseumnida" }
                ]
            },
            {
                tense: "Honorific Past",
                forms: [
                    { pronoun: "Informal honorific past", form: "드렸다", romanized: "deuryeotda" },
                    { pronoun: "Formal honorific past", form: "드렸습니다", romanized: "deuryeosseumnida" },
                    { pronoun: "Informal honorific past negative", form: "드리지 않았다", romanized: "deuriji-anatta" },
                    { pronoun: "Formal honorific past negative", form: "드리지 않았습니다", romanized: "deuriji-anasseumnida" }
                ]
            },
            {
                tense: "Compound -드리다 Forms",
                forms: [
                    { pronoun: "말씀드리다 (to tell respectfully)", form: "말씀드리다", romanized: "malsseum-deurida" },
                    { pronoun: "보여드리다 (to show respectfully)", form: "보여드리다", romanized: "boyeo-deurida" },
                    { pronoun: "도와드리다 (to help respectfully)", form: "도와드리다", romanized: "dowa-deurida" },
                    { pronoun: "알려드리다 (to inform respectfully)", form: "알려드리다", romanized: "allyeo-deurida" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-c1-2",
        level: "C1",
        infinitive: "여쭙다",
        romanized: "yeojupda",
        meaning: "to ask (humble — asking a superior)",
        conjugations: [
            {
                tense: "Humble Present",
                forms: [
                    { pronoun: "Informal humble", form: "여쭙다", romanized: "yeojupda" },
                    { pronoun: "Formal humble", form: "여쭙습니다", romanized: "yeojupseumnida" },
                    { pronoun: "Informal humble negative", form: "여쭙지 않다", romanized: "yeojupji-anda" },
                    { pronoun: "Formal humble negative", form: "여쭙지 않습니다", romanized: "yeojupji-anseumnida" }
                ]
            },
            {
                tense: "Humble Past",
                forms: [
                    { pronoun: "Informal humble past", form: "여쭸다", romanized: "yeojwotda" },
                    { pronoun: "Formal humble past", form: "여쭸습니다", romanized: "yeojwosseumnida" },
                    { pronoun: "Informal humble past negative", form: "여쭙지 않았다", romanized: "yeojupji-anatta" },
                    { pronoun: "Formal humble past negative", form: "여쭙지 않았습니다", romanized: "yeojupji-anasseumnida" }
                ]
            },
            {
                tense: "Indirect Speech Integration",
                forms: [
                    { pronoun: "I asked [humble]", form: "여쭤봤습니다", romanized: "yeojwobwatseumnida" },
                    { pronoun: "I will ask [humble]", form: "여쭤보겠습니다", romanized: "yeojwobogessemnida" },
                    { pronoun: "May I ask?", form: "여쭤봐도 될까요?", romanized: "yeojwobwado-doelkkayo" },
                    { pronoun: "When I asked [humble]", form: "여쭤봤더니", romanized: "yeojwobwatdeoni" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-c1-3",
        level: "C1",
        infinitive: "뵙다",
        romanized: "boepda",
        meaning: "to see / meet (humble — meeting a superior)",
        conjugations: [
            {
                tense: "Humble Present",
                forms: [
                    { pronoun: "Informal humble", form: "뵙다", romanized: "boepda" },
                    { pronoun: "Formal humble", form: "뵙습니다", romanized: "boepseumnida" },
                    { pronoun: "Informal humble negative", form: "뵙지 않다", romanized: "boepji-anda" },
                    { pronoun: "Formal humble negative", form: "뵙지 않습니다", romanized: "boepji-anseumnida" }
                ]
            },
            {
                tense: "Humble Past",
                forms: [
                    { pronoun: "Informal humble past", form: "뵀다", romanized: "boatda" },
                    { pronoun: "Formal humble past", form: "뵀습니다", romanized: "boasseumnida" },
                    { pronoun: "Informal humble past negative", form: "뵙지 않았다", romanized: "boepji-anatta" },
                    { pronoun: "Formal humble past negative", form: "뵙지 않았습니다", romanized: "boepji-anasseumnida" }
                ]
            },
            {
                tense: "Formal Contexts",
                forms: [
                    { pronoun: "I will meet you [formal]", form: "뵙겠습니다", romanized: "boepgessemnida" },
                    { pronoun: "I have met [formal]", form: "뵌 적이 있습니다", romanized: "boen-jeogi-isseumnida" },
                    { pronoun: "I hope to be able to meet", form: "뵐 수 있기를 바랍니다", romanized: "boel-su-itgireul-baramnida" },
                    { pronoun: "Nice to meet you [formal]", form: "처음 뵙겠습니다", romanized: "cheoeum-boepgessemnida" }
                ]
            }
        ]
    }
]
