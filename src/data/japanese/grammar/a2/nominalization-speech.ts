import { GrammarLesson } from "../../../../types"

export const jaA2NominalizationSpeech: GrammarLesson[] = [
    {
        id: "ja-g-a2-11",
        level: "A2",
        title: "Nominalization: 〜こと / 〜の",
        explanation: {
            native: "Nominalization turns a verb clause into a noun phrase, allowing it to function as a subject or object. There are two nominalizers: KOTO (こと): more formal, required after certain verbs (知っている, 忘れる, 決める). Plain form verb + こと. Example: 日本語を話すことは難しい (Speaking Japanese is difficult). NO (の): more informal/conversational, describes an observed event or feeling. Plain form verb + の. Example: 音楽を聞くのが好きです (I like listening to music). KEY DISTINCTION: の sounds warmer and more personal; こと is more formal and abstract. Use こと for rules/decisions/knowledge; use の for feelings, perceptions, and observations.",
            target: "めいしかは どうし句を めいし（名詞）として つかえるように します。ふたつの めいしかし：こと（フォーマル、きまった どうしの あとに ひつよう：しっている、わすれる、きめる）：ふつうけい＋こと（にほんごを はなすことは むずかしい）。の（カジュアル・かんかく てき、みた・かんじた できごとの びょうしゃ）：ふつうけい＋の（おんがくを きくのが すきです）。ちがい：のは あたたかく、こじんてき。ことは かたく、ちしきてき。ルール・けってい・ちしきには こと、かんじょう・ちかく・かんさつには の。"
        },
        examples: [
            { native: "日本語を話すことは難しいです。", romanized: "Nihongo wo hanasu koto wa muzukashii desu.", translation: "Speaking Japanese is difficult. (こと as subject)" },
            { native: "音楽を聞くのが好きです。", romanized: "Ongaku wo kiku no ga suki desu.", translation: "I like listening to music. (の with 好き)" },
            { native: "彼が来ることを知っていましたか？", romanized: "Kare ga kuru koto wo shitte imashita ka?", translation: "Did you know that he was coming? (こと with 知っている)" },
            { native: "運動するのをやめました。", romanized: "Undou suru no wo yamemashita.", translation: "I stopped exercising. (の with やめる — perception-based)" },
            { native: "約束を守ることが大切です。", romanized: "Yakusoku wo mamoru koto ga taisetsu desu.", translation: "Keeping promises is important. (こと — abstract principle)" }
        ],
        inlineVocab: [
            { word: "〜こと", romanized: "~koto", translation: "the act of ~; the fact that ~ (nominalizer)" },
            { word: "〜の", romanized: "~no", translation: "the act of ~ (nominalizer, more conversational)" },
            { word: "大切", romanized: "taisetsu", translation: "important; precious" }
        ]
    },
    {
        id: "ja-g-a2-12",
        level: "A2",
        title: "Reported Speech & Hearsay: 〜と言っていました / 〜そうです / 〜らしい",
        explanation: {
            native: "To report what someone SAID: plain form + と言っていました (They said that...). To convey HEARSAY (information heard from others): plain form + そうです (I heard that...). Example: 明日は雨だそうです (I heard it will rain tomorrow). 〜らしい: also hearsay but sounds more like the speaker has some evidence or basis, and they're drawing a natural inference. CAUTION: Hearsay そうです (plain form + そうです) is different from Appearance そうです (adj stem + そうです — see next lesson). Plain form before と and そうです, but NOT ます/です form.",
            target: "だれかが いったことを つたえる：ふつうけい＋といっていました（〜といっていました＝they said that）。また かのうせつや でんぶんを つたえる：ふつうけい＋そうです（〜そうです＝I heard that）。れい：あしたは あめだそうです（あしたは あめらしい）。らしい：でんぶんだが、なんらかの こんきょが ある、あるいは てきせつな すいろん のかんじ。ちゅうい：でんぶんの そうです（ふつうけい＋そうです）と ようすの そうです（けいようしの ごかん＋そうです）は ちがいます。と・そうです の まえは ふつうけい（ます・です けいでは ない）。"
        },
        examples: [
            { native: "田中さんは結婚すると言っていました。", romanized: "Tanaka-san wa kekkon suru to itte imashita.", translation: "Tanaka-san said (that) they would get married." },
            { native: "明日は雪が降るそうです。", romanized: "Ashita wa yuki ga furu sou desu.", translation: "I heard it will snow tomorrow. (hearsay そうです)" },
            { native: "あのレストランはおいしいらしいです。", romanized: "Ano resutoran wa oishii rashii desu.", translation: "I hear that restaurant is delicious (based on what people say / evidence)." },
            { native: "彼女は来ないと言っていました。", romanized: "Kanojo wa konai to itte imashita.", translation: "She said she wouldn't come." },
            { native: "天気予報によると、明日は晴れるそうです。", romanized: "Tenki yohou ni yoru to, ashita wa hareru sou desu.", translation: "According to the weather forecast, it will be sunny tomorrow." }
        ],
        inlineVocab: [
            { word: "〜と言っていました", romanized: "~to itte imashita", translation: "said that ~ (reported speech)" },
            { word: "〜そうです", romanized: "~sou desu", translation: "I heard that ~ (hearsay)" },
            { word: "〜らしい", romanized: "~rashii", translation: "apparently ~; it seems ~ (evidence-based hearsay)" }
        ]
    },
    {
        id: "ja-g-a2-13",
        level: "A2",
        title: "Appearance & Conjecture: 〜そうです / 〜ようです / 〜みたいです",
        explanation: {
            native: "These forms express what something LOOKS LIKE or what you INFER from visible evidence. APPEARANCE そうです (adj/verb stem + そうです): describes how something looks right now from observation. い-adj: drop い → おいしそう (looks delicious). な-adj: drop な → 元気そう (looks fine). Verb stem: 降りそう (looks like it's going to rain). ようです: more formal inference — plain form + ようです. みたいです: same meaning as ようです but more casual. KEY CONTRAST: 'Appearance そうです' (stem + そう) ≠ 'Hearsay そうです' (plain form + そうです). Common exam trap!",
            target: "これらは「〜のようにみえる / 〜と すいろんする」ことを あらわします。ようすの そうです（けいようしのごかん・どうしのごかん＋そうです）：いま みたかんじを あらわす。いけいようし：い を とる（おいしい→おいしそう）。なけいようし：な を とる（げんき→げんきそう）。どうしのごかん：ふりそう（あめが ふりそう）。ようです（フォーマル）：ふつうけい＋ようです（すいろん）。みたいです（カジュアル）：ようですと おなじ いみ。ポイント：「ようすの そうです」（ごかん＋そう）と「でんぶんの そうです」（ふつうけい＋そうです）は ちがう！しけんに よく でる。"
        },
        examples: [
            { native: "このケーキ、おいしそうですね。", romanized: "Kono keeki, oishisou desu ne.", translation: "This cake looks delicious. (い-adj stem + そう)" },
            { native: "外は寒そうです。", romanized: "Soto wa samusou desu.", translation: "It looks cold outside. (adj stem + そう)" },
            { native: "雨が降りそうです。", romanized: "Ame ga furisou desu.", translation: "It looks like it's going to rain. (verb stem + そう)" },
            { native: "彼は疲れているようです。", romanized: "Kare wa tsukarete iru you desu.", translation: "He seems to be tired. (ようです — inference from observation)" },
            { native: "この映画、面白そうみたいですよ。", romanized: "Kono eiga, omoshirosou mitai desu yo.", translation: "This movie seems like it'll be interesting. (みたいです — casual)" }
        ],
        inlineVocab: [
            { word: "〜そう（な）", romanized: "~sou(na)", translation: "looks ~; seems ~ (from appearance)" },
            { word: "〜ようです", romanized: "~you desu", translation: "it seems that ~; it appears that ~ (formal inference)" },
            { word: "〜みたいです", romanized: "~mitai desu", translation: "it seems that ~; looks like ~ (casual inference)" }
        ]
    },
]
