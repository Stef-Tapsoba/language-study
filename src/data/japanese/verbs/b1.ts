import { Verb } from "../../../types"

export const b1Verbs: Verb[] = [
    {
        id: "ja-vb-b1-1",
        level: "B1",
        infinitive: "知る",
        romanized: "shiru",
        meaning: "to know / to find out",
        conjugations: [
            {
                tense: "Present & Past (Polite)",
                forms: [
                    { pronoun: "present", form: "知ります", romanized: "shirimasu" },
                    { pronoun: "negative", form: "知りません", romanized: "shirimasen" },
                    { pronoun: "past", form: "知りました", romanized: "shirimashita" },
                    { pronoun: "neg. past", form: "知りませんでした", romanized: "shirimasen deshita" },
                ]
            },
            {
                tense: "Conditional Forms",
                forms: [
                    { pronoun: "ば-form", form: "知れば", romanized: "shireba" },
                    { pronoun: "たら-form", form: "知ったら", romanized: "shittara" },
                    { pronoun: "と-form", form: "知ると", romanized: "shiru to" },
                ]
            },
            {
                tense: "Passive",
                forms: [
                    { pronoun: "passive", form: "知られる", romanized: "shirarero" },
                    { pronoun: "passive polite", form: "知られます", romanized: "shiraremasu" },
                ]
            },
            {
                tense: "〜んです form",
                forms: [
                    { pronoun: "explanatory present", form: "知っているんです", romanized: "shitte iru ndesu" },
                    { pronoun: "explanatory past", form: "知ったんです", romanized: "shittan desu" },
                ]
            }
        ]
    },
    {
        id: "ja-vb-b1-2",
        level: "B1",
        infinitive: "思う",
        romanized: "omou",
        meaning: "to think / to feel",
        conjugations: [
            {
                tense: "Present & Past (Polite)",
                forms: [
                    { pronoun: "present", form: "思います", romanized: "omoimasu" },
                    { pronoun: "negative", form: "思いません", romanized: "omoimasen" },
                    { pronoun: "past", form: "思いました", romanized: "omoimashita" },
                ]
            },
            {
                tense: "Opinion Patterns",
                forms: [
                    { pronoun: "I think (plain)", form: "〜と思います", romanized: "~ to omoimasu" },
                    { pronoun: "I was thinking", form: "〜と思っていました", romanized: "~ to omotte imashita" },
                    { pronoun: "tentative opinion", form: "〜んじゃないかと思います", romanized: "~ n ja nai ka to omoimasu" },
                ]
            },
            {
                tense: "Conditional Forms",
                forms: [
                    { pronoun: "ば-form", form: "思えば", romanized: "omoeba" },
                    { pronoun: "たら-form", form: "思ったら", romanized: "omottara" },
                ]
            },
            {
                tense: "〜んです form",
                forms: [
                    { pronoun: "explanatory", form: "そう思うんです", romanized: "sou omou ndesu" },
                    { pronoun: "past explanation", form: "そう思ったんです", romanized: "sou omotta ndesu" },
                ]
            }
        ]
    },
    {
        id: "ja-vb-b1-3",
        level: "B1",
        infinitive: "行く",
        romanized: "iku",
        meaning: "to go",
        conjugations: [
            {
                tense: "Present & Past (Polite)",
                forms: [
                    { pronoun: "present", form: "行きます", romanized: "ikimasu" },
                    { pronoun: "negative", form: "行きません", romanized: "ikimasen" },
                    { pronoun: "past", form: "行きました", romanized: "ikimashita" },
                    { pronoun: "neg. past", form: "行きませんでした", romanized: "ikimasen deshita" },
                ]
            },
            {
                tense: "Conditional Forms",
                forms: [
                    { pronoun: "ば-form", form: "行けば", romanized: "ikeba" },
                    { pronoun: "たら-form", form: "行ったら", romanized: "ittara" },
                    { pronoun: "と-form", form: "行くと", romanized: "iku to" },
                ]
            },
            {
                tense: "Passive (suffering)",
                forms: [
                    { pronoun: "passive", form: "行かれる", romanized: "ikareru" },
                    { pronoun: "suffering passive", form: "行かれた", romanized: "ikareta" },
                    { pronoun: "example", form: "雨に降られた (I was rained on)", romanized: "ame ni furareta" },
                ]
            },
            {
                tense: "Clause Linking",
                forms: [
                    { pronoun: "ので (because)", form: "行くので", romanized: "iku node" },
                    { pronoun: "のに (despite)", form: "行くのに", romanized: "iku noni" },
                    { pronoun: "けど (but)", form: "行くけど", romanized: "iku kedo" },
                ]
            }
        ]
    },
    {
        id: "ja-vb-b1-4",
        level: "B1",
        infinitive: "読む",
        romanized: "yomu",
        meaning: "to read",
        conjugations: [
            {
                tense: "Present & Past (Polite)",
                forms: [
                    { pronoun: "present", form: "読みます", romanized: "yomimasu" },
                    { pronoun: "negative", form: "読みません", romanized: "yomimasen" },
                    { pronoun: "past", form: "読みました", romanized: "yomimashita" },
                ]
            },
            {
                tense: "Passive",
                forms: [
                    { pronoun: "passive plain", form: "読まれる", romanized: "yomareru" },
                    { pronoun: "passive polite", form: "読まれます", romanized: "yomaremasu" },
                    { pronoun: "passive past", form: "読まれました", romanized: "yomaremashita" },
                ]
            },
            {
                tense: "Conditional Forms",
                forms: [
                    { pronoun: "ば-form", form: "読めば", romanized: "yomeba" },
                    { pronoun: "たら-form", form: "読んだら", romanized: "yondara" },
                    { pronoun: "と-form", form: "読むと", romanized: "yomu to" },
                ]
            },
            {
                tense: "〜たり form",
                forms: [
                    { pronoun: "たり-form", form: "読んだり", romanized: "yondari" },
                    { pronoun: "pattern", form: "読んだり書いたりする", romanized: "yondari kaitari suru" },
                ]
            }
        ]
    },
]
