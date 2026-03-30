import { GrammarLesson } from "../../../../types"

export const jaA2IntentionsExperience: GrammarLesson[] = [
    {
        id: "ja-g-a2-2",
        level: "A2",
        title: "〜つもりです: Intentions & Plans",
        explanation: {
            native: "To express a firm intention or plan to do something, use: verb dictionary form + つもりです. The negative (plan NOT to do) uses the negative plain form + つもりです: 〜ないつもりです. This expresses a stronger, more decided intention than たいです (want to). つもり is a noun meaning 'intention / plan'. You can ask about someone's plans: 〜つもりですか？ Note: つもりです is for the speaker's own plans; for third-party plans, use 〜と思っています.",
            target: "「〜つもりです」は、じぶんが しようと きめていること・けいかくを つたえるときに つかいます。どうしの じしょけい（ふつうけい）の あとに「つもりです」を つけます。「たいです」よりも いしが つよい ひょうげんです。しないつもりの ときは「〜ないつもりです」を つかいます。あいての よていを きくときは「〜つもりですか？」。ちゅうい：「つもりです」は はなしてじしんの けいかくに つかいます。"
        },
        examples: [
            { native: "来年、日本に行くつもりです。", romanized: "Rainen, Nihon ni iku tsumori desu.", translation: "I intend to go to Japan next year." },
            { native: "大学で日本語を勉強するつもりです。", romanized: "Daigaku de Nihongo wo benkyou suru tsumori desu.", translation: "I plan to study Japanese at university." },
            { native: "今日は残業しないつもりです。", romanized: "Kyou wa zangyou shinai tsumori desu.", translation: "I don't intend to work overtime today." },
            { native: "週末は何をするつもりですか？", romanized: "Shuumatsu wa nani wo suru tsumori desu ka?", translation: "What do you intend to do on the weekend?" },
            { native: "結婚するつもりはありません。", romanized: "Kekkon suru tsumori wa arimasen.", translation: "I have no intention of getting married." }
        ],
        inlineVocab: [
            { word: "つもり", romanized: "tsumori", translation: "intention / plan" },
            { word: "来年", romanized: "rainen", translation: "next year" },
            { word: "残業", romanized: "zangyou", translation: "overtime work" }
        ]
    },
    {
        id: "ja-g-a2-3",
        level: "A2",
        title: "〜たことがある: Past Experience",
        explanation: {
            native: "To express that you have (or have never) done something before, use: verb た-form (plain past) + ことがあります. The negative (have never done) uses: verb た-form + ことがありません. This pattern expresses life experience in general, not a specific past event. The た-form follows the same rules as the て-form but with た instead of て. Example: 食べる → 食べた, 行く → 行った, 飲む → 飲んだ. Ask: 〜たことがありますか？ (Have you ever...?)",
            target: "「〜たことがあります」は、いままでに その けいけんが あることを あらわします。どうしの たけい（ふつうかこけい）の あとに「ことがあります」を つけます。けいけんが ない ばあいは「〜たことがありません」。この ひょうげんは とくていの かこの できごとでは なく、じんせいの けいけんぜんたいについて はなすときに つかいます。「〜たことがありますか？」で あいてに けいけんを きくことが できます。"
        },
        examples: [
            { native: "富士山に登ったことがあります。", romanized: "Fujisan ni nobotta koto ga arimasu.", translation: "I have climbed Mt. Fuji before." },
            { native: "寿司を食べたことがありますか？", romanized: "Sushi wo tabeta koto ga arimasu ka?", translation: "Have you ever eaten sushi?" },
            { native: "日本に行ったことがありません。", romanized: "Nihon ni itta koto ga arimasen.", translation: "I have never been to Japan." },
            { native: "この映画を見たことがあります。", romanized: "Kono eiga wo mita koto ga arimasu.", translation: "I have seen this movie before." },
            { native: "スカイダイビングをしたことがありません。", romanized: "Sukaidaibingu wo shita koto ga arimasen.", translation: "I have never gone skydiving." }
        ],
        inlineVocab: [
            { word: "〜たことがある", romanized: "~ta koto ga aru", translation: "have (ever) done ~" },
            { word: "登る", romanized: "noboru", translation: "to climb" },
            { word: "経験", romanized: "keiken", translation: "experience" }
        ]
    },
    {
        id: "ja-g-a2-4",
        level: "A2",
        title: "〜と思います / 〜のほうが好きです: Opinions & Preferences",
        explanation: {
            native: "To express a personal opinion, use: plain form verb/adjective + と思います (I think that...). The plain form is used inside the clause before と — not the polite ます/です form. To express a preference between two things, use: A より B のほうが好きです (I like B better than A). The particle より marks the thing being compared against. To ask for a preference: どちらのほうが好きですか？",
            target: "いけんを あらわすときは「ふつうけい＋とおもいます」を つかいます。とのまえは ていねいけい（ます・です）でなく、ふつうけい（じしょけい・たけい・ないけい）を つかいます。ふたつの ものを くらべて すきなほうを いうときは「Aより Bのほうが すきです」。よりは くらべる たいしょうに つきます。「どちらのほうが すきですか？」＝ which do you prefer?"
        },
        examples: [
            { native: "このレストランはおいしいと思います。", romanized: "Kono resutoran wa oishii to omoimasu.", translation: "I think this restaurant is delicious." },
            { native: "明日は雨が降ると思います。", romanized: "Ashita wa ame ga furu to omoimasu.", translation: "I think it will rain tomorrow." },
            { native: "犬より猫のほうが好きです。", romanized: "Inu yori neko no hou ga suki desu.", translation: "I like cats better than dogs." },
            { native: "夏より冬のほうが好きです。", romanized: "Natsu yori fuyu no hou ga suki desu.", translation: "I prefer winter to summer." },
            { native: "どちらのほうが好きですか？", romanized: "Dochira no hou ga suki desu ka?", translation: "Which do you prefer?" }
        ],
        inlineVocab: [
            { word: "〜と思います", romanized: "~to omoimasu", translation: "I think that ~" },
            { word: "〜より", romanized: "~yori", translation: "than ~ (comparison particle)" },
            { word: "〜のほうが", romanized: "~no hou ga", translation: "~ is (more) / I prefer ~" }
        ]
    },
]
