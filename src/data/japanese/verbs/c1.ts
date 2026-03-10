import { Verb } from "../../../types"

export const c1Verbs: Verb[] = [
    {
        id: "ja-vb-c1-1",
        level: "C1",
        infinitive: "いただく",
        romanized: "itadaku",
        meaning: "to receive / to eat / to drink (humble)",
        conjugations: [
            {
                tense: "Humble Plain",
                forms: [
                    { pronoun: "plain", form: "いただく", romanized: "itadaku" },
                    { pronoun: "polite", form: "いただきます", romanized: "itadakimasu" },
                    { pronoun: "neg plain", form: "いただかない", romanized: "itadakanai" },
                    { pronoun: "neg polite", form: "いただきません", romanized: "itadakimasen" }
                ]
            },
            {
                tense: "～ていただく Form",
                forms: [
                    { pronoun: "plain request", form: "～ていただく", romanized: "te-itadaku" },
                    { pronoun: "polite request", form: "～ていただけますか", romanized: "te-itadakemasu-ka" },
                    { pronoun: "soft request", form: "～ていただけないでしょうか", romanized: "te-itadakenai-deshō-ka" },
                    { pronoun: "desire form", form: "～ていただきたい", romanized: "te-itadakitai" }
                ]
            },
            {
                tense: "Permission Form",
                forms: [
                    { pronoun: "allow me to", form: "～させていただく", romanized: "sasete-itadaku" },
                    { pronoun: "polite allow", form: "～させていただきます", romanized: "sasete-itadakimasu" },
                    { pronoun: "request allow", form: "～させていただけますか", romanized: "sasete-itadakemasu-ka" },
                    { pronoun: "soft request allow", form: "～させていただけないでしょうか", romanized: "sasete-itadakenai-deshō-ka" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-c1-2",
        level: "C1",
        infinitive: "おっしゃる",
        romanized: "ossharu",
        meaning: "to say / to speak (respectful)",
        conjugations: [
            {
                tense: "Respectful Present",
                forms: [
                    { pronoun: "plain", form: "おっしゃる", romanized: "ossharu" },
                    { pronoun: "polite", form: "おっしゃいます", romanized: "ossharimasu" },
                    { pronoun: "neg plain", form: "おっしゃらない", romanized: "ossharanai" },
                    { pronoun: "neg polite", form: "おっしゃいません", romanized: "osshairimasen" }
                ]
            },
            {
                tense: "Respectful Past",
                forms: [
                    { pronoun: "plain past", form: "おっしゃった", romanized: "osshatta" },
                    { pronoun: "polite past", form: "おっしゃいました", romanized: "ossharimashita" },
                    { pronoun: "neg plain past", form: "おっしゃらなかった", romanized: "ossharanakatta" },
                    { pronoun: "neg polite past", form: "おっしゃいませんでした", romanized: "ossharimasendeshita" }
                ]
            },
            {
                tense: "Honorific Request",
                forms: [
                    { pronoun: "direct request", form: "おっしゃってください", romanized: "osshatte-kudasai" },
                    { pronoun: "polite request", form: "おっしゃっていただけますか", romanized: "osshatte-itadakemasu-ka" },
                    { pronoun: "formal request", form: "おっしゃってくださいませ", romanized: "osshatte-kudasaimase" },
                    { pronoun: "soft request", form: "おっしゃっていただけませんか", romanized: "osshatte-itadakemasen-ka" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-c1-3",
        level: "C1",
        infinitive: "まいる",
        romanized: "mairu",
        meaning: "to go / to come (humble)",
        conjugations: [
            {
                tense: "Humble Present",
                forms: [
                    { pronoun: "plain", form: "まいる", romanized: "mairu" },
                    { pronoun: "polite", form: "まいります", romanized: "mairimasu" },
                    { pronoun: "neg plain", form: "まいらない", romanized: "mairanai" },
                    { pronoun: "neg polite", form: "まいりません", romanized: "mairimasen" }
                ]
            },
            {
                tense: "Humble Past",
                forms: [
                    { pronoun: "plain past", form: "まいった", romanized: "maitta" },
                    { pronoun: "polite past", form: "まいりました", romanized: "mairimashita" },
                    { pronoun: "neg plain past", form: "まいらなかった", romanized: "mairanakatta" },
                    { pronoun: "neg polite past", form: "まいりませんでした", romanized: "mairimasendeshita" }
                ]
            },
            {
                tense: "Combined Keigo",
                forms: [
                    { pronoun: "going to", form: "～にまいります", romanized: "ni-mairimasu" },
                    { pronoun: "coming from", form: "～からまいりました", romanized: "kara-mairimashita" },
                    { pronoun: "going as far as", form: "～までまいります", romanized: "made-mairimasu" },
                    { pronoun: "plan to go", form: "～へまいる予定です", romanized: "e-mairu-yotei-desu" }
                ]
            }
        ]
    }
]
