import { GrammarLesson } from "../../../../types"

export const jaA2TeForm: GrammarLesson[] = [
    {
        id: "ja-g-a2-14",
        level: "A2",
        title: "て-form Extensions I: 〜てみる / 〜ておく",
        explanation: {
            native: "Japanese attaches auxiliary verbs to the て-form to add nuance. 〜てみる: 'try doing something to see what happens / what it's like'. The key nuance is curiosity or experimentation: 食べてみます (I'll try eating it). 〜ておく: do something in advance as preparation, or do something and leave it in a state. It implies deliberate preparation or leaving a result in place: 予約しておきます (I'll make the reservation in advance). In casual speech: 〜とく (しておく → しとく). Both follow the て-form + みる / おく pattern.",
            target: "てけいに ほじょどうしを つけて ニュアンスを くわえます。〜てみる：「ためしに 〜する / 〜してみる」。こうきしんや じっけん のニュアンス：たべてみます（ためしに たべます）。〜ておく：じゅんびとして まえもって なにかを する、または けっかのじょうたいを のこす：よやくしておきます（まえもって よやくします）。はなしことば：〜とく（しておく→しとく）。どちらも てけい＋みる / おく の かたち。"
        },
        examples: [
            { native: "この料理、食べてみてください。", romanized: "Kono ryouri, tabete mite kudasai.", translation: "Please try eating this dish. (てみる — try it out)" },
            { native: "日本語で話してみましょう。", romanized: "Nihongo de hanashite mimashou.", translation: "Let's try speaking in Japanese." },
            { native: "旅行の前にホテルを予約しておきます。", romanized: "Ryokou no mae ni hoteru wo yoyaku shite okimasu.", translation: "I'll book the hotel in advance before the trip. (ておく — preparation)" },
            { native: "メモしておきますね。", romanized: "Memo shite okimasu ne.", translation: "I'll make a note of it (and keep it for later)." },
            { native: "新しいアプリを使ってみましたが、とても便利でした。", romanized: "Atarashii apuri wo tsukatte mimashita ga, totemo benri deshita.", translation: "I tried the new app and it was very convenient." }
        ],
        inlineVocab: [
            { word: "〜てみる", romanized: "~te miru", translation: "try doing ~ (to see what it's like)" },
            { word: "〜ておく", romanized: "~te oku", translation: "do ~ in advance / leave ~ in a state (preparation)" },
            { word: "予約する", romanized: "yoyaku suru", translation: "to make a reservation" }
        ]
    },
    {
        id: "ja-g-a2-15",
        level: "A2",
        title: "て-form Extensions II: 〜てしまう / 〜ことにする / 〜ことになる",
        explanation: {
            native: "〜てしまう: (1) action is COMPLETED fully (often with a sense of finality, regret, or accidental action): 食べてしまいました (I ended up eating it all / I accidentally ate it). Casual: 〜ちゃう / 〜じゃう. 〜ことにする: to DECIDE to do something (speaker's own decision): 毎日運動することにしました (I've decided to exercise every day). 〜ことになる: a situation has BEEN DECIDED or COME ABOUT — often by external circumstances or from others' decisions: 来年転勤することになりました (It has been decided that I'll be transferred next year — not necessarily by me).",
            target: "〜てしまう：①どうさが かんぜんに かんりょうする（しばしば ざんねん・うっかり の ニュアンス）：たべてしまいました（ぜんぶ たべちゃった）。はなしことば：〜ちゃう / 〜じゃう。〜ことにする：じぶん じしんで きめる（じぶんの けってい）：まいにち うんどうすることにしました（わたしが きめた）。〜ことになる：じょうきょうや ほかの ひとの けってい、または じぜんの うごきから そう きまった（がいぶからの けってい）：らいねん てんきんすることに なりました（きまったこと — じぶんで きめたとは かぎらない）。"
        },
        examples: [
            { native: "宿題を忘れてしまいました。", romanized: "Shukudai wo wasurete shimaimashita.", translation: "I (accidentally/regrettably) forgot my homework. (てしまう — regret)" },
            { native: "ケーキを全部食べてしまった。", romanized: "Keeki wo zenbu tabete shimatta.", translation: "I ended up eating the whole cake. (completion with regret)" },
            { native: "来年から日記を書くことにしました。", romanized: "Rainen kara nikki wo kaku koto ni shimashita.", translation: "I've decided to start writing a diary from next year. (ことにする — own decision)" },
            { native: "来年東京に転勤することになりました。", romanized: "Rainen Toukyou ni tenkin suru koto ni narimashita.", translation: "It has been decided that I'll be transferred to Tokyo next year. (ことになる — external)" },
            { native: "財布を落としちゃった！", romanized: "Saifu wo otoshichatta!", translation: "I dropped my wallet! (ちゃった — casual てしまった)" }
        ],
        inlineVocab: [
            { word: "〜てしまう", romanized: "~te shimau", translation: "end up doing ~; accidentally do ~ (finality/regret)" },
            { word: "〜ことにする", romanized: "~koto ni suru", translation: "decide to do ~ (speaker's own decision)" },
            { word: "〜ことになる", romanized: "~koto ni naru", translation: "it has been decided that ~; it turns out that ~ (external)" }
        ]
    },
]
