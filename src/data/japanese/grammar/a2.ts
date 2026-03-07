import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "ja-g-a2-1",
        level: "A2",
        title: "て-form: Connecting Actions and Progressive",
        explanation: {
            native: "The て-form (te-form) is one of the most important verb forms in Japanese. It connects sequential actions ('and then') and forms the progressive with ています. Conjugation rules by verb group: Group 2 (ru-verbs): remove る, add て (食べる → 食べて). Group 1 (u-verbs): く→いて, ぐ→いで, す→して, む/ぬ/ぶ→んで, る/つ/う→って. Exception: 行く → 行って. Group 3 (irregular): する → して, 来る → 来て. Progressive form: て-form + います (e.g., 食べています = am eating). Sequential: て-form connects two actions in order (食べて、寝ます = I eat and then sleep).",
            target: "てけいは にほんごで もっとも たいせつな どうしの かたちです。ふたつの つかいかたが あります：①どうさを つなぐ「〜て、〜ます」、②「〜ています」で いましていることを あらわす。グループ２（るどうし）：るを とって てを つける（たべる→たべて）。グループ１（うどうし）：く→いて、ぐ→いで、す→して、む・ぬ・ぶ→んで、る・つ・う→って。れいがい：いく→いって。グループ３（ふきそく）：する→して、くる→きて。しんこうけいは「てけい＋います」（たべています＝いまたべている）。てけいで どうさを つなぐときは「たべて、ねます」のように つかいます。"
        },
        examples: [
            { native: "食べて、寝ます。", romanized: "Tabete, nemasu.", translation: "I eat and then sleep. (て-form connecting actions)" },
            { native: "今、食べています。", romanized: "Ima, tabete imasu.", translation: "I am eating now. (progressive with ている)" },
            { native: "音楽を聞いています。", romanized: "Ongaku wo kiite imasu.", translation: "I am listening to music. (聞く → 聞いて)" },
            { native: "シャワーを浴びて、着替えます。", romanized: "Shawaa wo abite, kigaemasu.", translation: "I take a shower and then get changed." },
            { native: "何をしていますか？", romanized: "Nani wo shite imasu ka?", translation: "What are you doing? (progressive question)" }
        ]
    },
    {
        id: "ja-g-a2-2",
        level: "A2",
        title: "〜ことができる: Expressing Ability",
        explanation: {
            native: "To express ability ('can do something') in a formal way, use: verb dictionary form + ことができます. The negative is ことができません (cannot do). This is more formal than the potential verb form (e.g., 食べられる) but very common in writing and formal speech. The subject of ability often takes が. ことができる literally means 'the thing/fact of doing is possible'. You can also ask about ability: 〜ことができますか？",
            target: "「〜ことができます」は「〜できます」という いみで、のうりょくを ていねいに あらわす いいかたです。どうしの じしょけい（ふつうけい）の あとに「ことができます」を つけます。ひていは「ことができません」（できない）。かのうどうし（たべられる・のめる）より フォーマルで、ぶんしょうや あらたまった ばめんで よく つかいます。のうりょくの しゅごには「が」を つけることが おおいです。「〜ことができますか？」で あいての のうりょくを きくことも できます。"
        },
        examples: [
            { native: "日本語を話すことができます。", romanized: "Nihongo wo hanasu koto ga dekimasu.", translation: "I can speak Japanese." },
            { native: "車を運転することができません。", romanized: "Kuruma wo unten suru koto ga dekimasen.", translation: "I cannot drive a car." },
            { native: "泳ぐことができますか？", romanized: "Oyogu koto ga dekimasu ka?", translation: "Can you swim?" },
            { native: "ピアノを弾くことができます。", romanized: "Piano wo hiku koto ga dekimasu.", translation: "I can play the piano." },
            { native: "漢字を読むことができません。", romanized: "Kanji wo yomu koto ga dekimasen.", translation: "I cannot read kanji." }
        ]
    },
    {
        id: "ja-g-a2-3",
        level: "A2",
        title: "〜つもりです: Expressing Intentions and Plans",
        explanation: {
            native: "To express a firm intention or plan to do something, use: verb dictionary form + つもりです. The negative (plan NOT to do) uses the negative plain form + つもりです: 〜ないつもりです. This expresses a stronger, more decided intention than たいです (want to). つもり is a noun meaning 'intention/plan'. You can ask about someone's plans: 〜つもりですか？ Note: つもりです is for the speaker's own plans; for third-party plans, you would use 〜と思っています.",
            target: "「〜つもりです」は、じぶんが しようと きめていること・けいかくを つたえるときに つかいます。どうしの じしょけい（ふつうけい）の あとに「つもりです」を つけます。「たいです」（〜したい）よりも いしが つよい ひょうげんです。「つもり」は「いと・けいかく」という いみの めいしです。しないつもりの ときは「〜ないつもりです」を つかいます。あいての よていを きくときは「〜つもりですか？」。ちゅうい：「つもりです」は はなしてじしんの けいかくに つかいます。ほかの ひとの けいかくには「〜とおもっています」を つかいます。"
        },
        examples: [
            { native: "来年、日本に行くつもりです。", romanized: "Rainen, Nihon ni iku tsumori desu.", translation: "I intend to go to Japan next year." },
            { native: "大学で日本語を勉強するつもりです。", romanized: "Daigaku de Nihongo wo benkyou suru tsumori desu.", translation: "I plan to study Japanese at university." },
            { native: "今日は残業しないつもりです。", romanized: "Kyou wa zangyou shinai tsumori desu.", translation: "I don't intend to work overtime today." },
            { native: "週末は何をするつもりですか？", romanized: "Shuumatsu wa nani wo suru tsumori desu ka?", translation: "What do you intend to do on the weekend?" },
            { native: "結婚するつもりはありません。", romanized: "Kekkon suru tsumori wa arimasen.", translation: "I have no intention of getting married." }
        ]
    },
    {
        id: "ja-g-a2-4",
        level: "A2",
        title: "〜たことがある: Past Experience",
        explanation: {
            native: "To express that you have (or have never) done something before, use: verb た-form (plain past) + ことがあります. The negative (have never done) uses: verb た-form + ことがありません. This pattern expresses life experience in general, not a specific past event. To form the た-form, use the same rules as the て-form but with た instead of て. Example: 食べる → 食べた, 行く → 行った, 飲む → 飲んだ. You can ask: 〜たことがありますか？(Have you ever...?)",
            target: "「〜たことがあります」は、いままでに その けいけんが あることを あらわします。どうしの たけい（ふつうかこけい）の あとに「ことがあります」を つけます。けいけんが ない ばあいは「〜たことがありません」。この ひょうげんは とくていの かこの できごとでは なく、じんせいの けいけん ぜんたいに ついて はなすときに つかいます。たけいは てけいと おなじ へんかの ルールで、「て」を「た」に かえるだけです（たべる→たべた、いく→いった、のむ→のんだ）。「〜たことがありますか？」で あいてに けいけんを きくことが できます。"
        },
        examples: [
            { native: "富士山に登ったことがあります。", romanized: "Fujisan ni nobotta koto ga arimasu.", translation: "I have climbed Mt. Fuji before." },
            { native: "寿司を食べたことがありますか？", romanized: "Sushi wo tabeta koto ga arimasu ka?", translation: "Have you ever eaten sushi?" },
            { native: "日本に行ったことがありません。", romanized: "Nihon ni itta koto ga arimasen.", translation: "I have never been to Japan." },
            { native: "この映画を見たことがあります。", romanized: "Kono eiga wo mita koto ga arimasu.", translation: "I have seen this movie before." },
            { native: "スカイダイビングをしたことがありません。", romanized: "Sukaidaibingu wo shita koto ga arimasen.", translation: "I have never gone skydiving." }
        ]
    }
]
