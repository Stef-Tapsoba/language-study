import { GrammarLesson } from "../../../../types"

export const jaA2Conditionals: GrammarLesson[] = [
    {
        id: "ja-g-a2-8",
        level: "A2",
        title: "Conditional I: 〜たら (If / When)",
        explanation: {
            native: "〜たら is the most versatile Japanese conditional, used for 'if', 'when', or 'after' a condition is met. FORMATION: plain past form (た-form) + ら. Applies to verbs, い-adjectives, and nouns/な-adjectives (だったら). USES: (1) Hypothetical conditions: もし雨が降ったら、行きません (If it rains, I won't go). (2) 'When' — after a completed action: 家に帰ったら、電話します (When I get home, I'll call). (3) Suggestions: 〜たらどうですか？ (How about...? / Why don't you...?). Key rule: the result clause refers to a time AFTER the condition is satisfied.",
            target: "「〜たら」は もっとも おおく つかわれる にほんごの じょうけんけいで、「もし〜したら」「〜したとき」「〜した後で」などの いみに なります。つくりかた：ふつうかこけい（たけい）＋ら（どうし・い けいようし・な けいようし/めいし「だったら」）。つかいかた：①かていの じょうけん（もし あめが ふったら、いきません）、②「〜したとき」（いえに かえったら、でんわします）、③ていあん（〜たら どうですか？）。ポイント：けっかせつは じょうけんが みたされた あとの ことを あらわします。"
        },
        examples: [
            { native: "もし雨が降ったら、家にいます。", romanized: "Moshi ame ga futtara, ie ni imasu.", translation: "If it rains, I'll stay home." },
            { native: "宿題が終わったら、ゲームをしてもいいよ。", romanized: "Shukudai ga owattara, geemu wo shite mo ii yo.", translation: "When your homework is done, you can play games." },
            { native: "安かったら、買います。", romanized: "Yasukattara, kaimasu.", translation: "If it's cheap, I'll buy it. (い-adj: 安い → 安かったら)" },
            { native: "先生だったら、どう教えますか？", romanized: "Sensei dattara, dou oshiemasu ka?", translation: "If you were a teacher, how would you teach?" },
            { native: "疲れたら、少し休んだらどうですか？", romanized: "Tsukaretara, sukoshi yasundara dou desu ka?", translation: "If you're tired, why don't you rest a little? (suggestion pattern)" }
        ],
        inlineVocab: [
            { word: "もし", romanized: "moshi", translation: "if (used to signal a hypothesis)" },
            { word: "〜たらどうですか", romanized: "~tara dou desu ka", translation: "Why don't you ~? / How about ~?" },
            { word: "終わる", romanized: "owaru", translation: "to finish / to end" }
        ]
    },
    {
        id: "ja-g-a2-9",
        level: "A2",
        title: "Conditional II: 〜ば / 〜と / 〜なら",
        explanation: {
            native: "Japanese has four conditionals. You know 〜たら. The others: 〜ば (natural result if condition met — often hypothetical or advice): verb: replace final u with eba (行く→行けば, 食べる→食べれば); い-adj: replace い with ければ (安い→安ければ). 〜と (automatic / natural consequence — describes inevitable results): plain form + と (ボタンを押すと、ドアが開く = Press the button and the door opens). 〜なら (contextual condition — 'if that's the case / if we're talking about'): noun/plain form + なら. KEY DISTINCTIONS: と cannot be used for speaker's intentions in the result clause (cannot use ます/てください). ば is often used for advice (〜すればいいです). なら implies the condition was stated by the listener.",
            target: "にほんごの じょうけんけいは ４つ：たら（すでに がくしゅう）、ば、と、なら。〜ば：じょうけんが みたされれば しぜんに そうなる、または てい の ばあいに つかう。どうし：さいごの うを えに かえて ばをつける（いく→いけば、たべる→たべれば）。いけいようし：い→ければ（やすい→やすければ）。〜と：じどうてき・ひつぜんてき な けっか（ボタンをおすと、ドアがあく）。じしょけい＋と。けっかせつに いしを あらわす ひょうげん（ます、てください）は つかえない。〜なら：きいた じょうほうを うけて「もし そうなら」。"
        },
        examples: [
            { native: "もっと練習すれば、上手になりますよ。", romanized: "Motto renshuu sureba, jouzu ni narimasu yo.", translation: "If you practise more, you'll get better. (ば — advice)" },
            { native: "このボタンを押すと、切符が出ます。", romanized: "Kono botan wo osu to, kippu ga demasu.", translation: "When you press this button, the ticket comes out. (と — automatic result)" },
            { native: "安ければ、買います。", romanized: "Yasukereba, kaimasu.", translation: "If it's cheap, I'll buy it. (ば — い-adjective)" },
            { native: "日本語を勉強するなら、このアプリがいいですよ。", romanized: "Nihongo wo benkyou suru nara, kono apuri ga ii desu yo.", translation: "If you're going to study Japanese, this app is good. (なら — contextual)" },
            { native: "春になると、桜が咲きます。", romanized: "Haru ni naru to, sakura ga sakimasu.", translation: "When spring comes, the cherry blossoms bloom. (と — natural consequence)" }
        ],
        inlineVocab: [
            { word: "練習する", romanized: "renshuu suru", translation: "to practise" },
            { word: "上手になる", romanized: "jouzu ni naru", translation: "to get good at; to improve" },
            { word: "咲く", romanized: "saku", translation: "to bloom (flowers)" }
        ]
    },
    {
        id: "ja-g-a2-10",
        level: "A2",
        title: "Obligation & Lack of Necessity",
        explanation: {
            native: "To express OBLIGATION (must do): 〜なければなりません (more formal) or 〜なければいけません (slightly less formal). Formation: negative ない-form, remove い, add ければなりません (食べる→食べなければなりません). Spoken shortcut: 〜なきゃ / 〜なくちゃ (very casual: 行かなきゃ = gotta go). To express NO OBLIGATION (don't have to / it's okay not to): 〜なくてもいいです. Formation: ない-form → なくて + もいいです (食べなくてもいいです = you don't have to eat). Compare with 〜てはいけません (must NOT do — prohibition).",
            target: "ぎむを あらわす（〜しなければならない）：〜なければなりません（フォーマル）または 〜なければいけません。つくりかた：ないけい から い を とって ければなりません を つける（たべる→たべなければなりません）。はなしことば：〜なきゃ / 〜なくちゃ（ひじょうに カジュアル）。ふひつよう（〜しなくてもいい）：〜なくてもいいです。つくりかた：ないけい→なくて＋もいいです（たべなくてもいいです＝you don't have to eat）。くらべかた：〜てはいけません＝してはだめ（きんし）、〜なくてもいいです＝しなくていい（ふひつよう）。"
        },
        examples: [
            { native: "毎日薬を飲まなければなりません。", romanized: "Mainichi kusuri wo nomanakereba narimasen.", translation: "I have to take medicine every day. (obligation)" },
            { native: "明日は早く起きなければいけません。", romanized: "Ashita wa hayaku okinakereba ikemasen.", translation: "I have to wake up early tomorrow." },
            { native: "今日は残業しなくてもいいです。", romanized: "Kyou wa zangyou shinakute mo ii desu.", translation: "You don't have to work overtime today. (no obligation)" },
            { native: "宿題は明日までに出さなければなりません。", romanized: "Shukudai wa ashita made ni dasanakereba narimasen.", translation: "I have to submit the homework by tomorrow." },
            { native: "スーツを着なくてもいいですか？", romanized: "Suutsu wo kinakute mo ii desu ka?", translation: "Is it okay if I don't wear a suit?" }
        ],
        inlineVocab: [
            { word: "〜なければなりません", romanized: "~nakereba narimasen", translation: "must do ~; have to do ~" },
            { word: "〜なくてもいいです", romanized: "~nakute mo ii desu", translation: "don't have to do ~; it's okay not to" },
            { word: "薬", romanized: "kusuri", translation: "medicine" }
        ]
    },
]
