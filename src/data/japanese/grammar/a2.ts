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
    },
    {
        id: "ja-g-a2-5",
        level: "A2",
        title: "〜てもいいです / 〜てはいけません: Permission & Prohibition",
        explanation: {
            native: "To ask for permission, use: て-form + もいいですか？ (Is it okay to...?). To grant permission, say: て-form + もいいです (You may...). To express prohibition, use: て-form + はいけません (You must not...). The polite negative of permission is: て-form + はいけません or てはだめです (slightly less formal). These patterns are essential for everyday situations — shops, offices, public spaces, and social settings.",
            target: "きょかを もとめるときは「てけい＋もいいですか？」を つかいます（〜してもいいですか？）。きょかを あたえるときは「てけい＋もいいです」。きんしを あらわすときは「てけい＋はいけません」（〜してはいけません）。ていねいな ひていは「てはいけません」または「てはだめです」（すこし カジュアル）。これらの ひょうげんは みせ・オフィス・こうきょう・しゃかいてきな ばめんで ひつようです。"
        },
        examples: [
            { native: "ここで写真を撮ってもいいですか？", romanized: "Koko de shashin wo totte mo ii desu ka?", translation: "May I take photos here?" },
            { native: "はい、撮ってもいいですよ。", romanized: "Hai, totte mo ii desu yo.", translation: "Yes, you may take photos." },
            { native: "ここでタバコを吸ってはいけません。", romanized: "Koko de tabako wo sutte wa ikemasen.", translation: "You must not smoke here." },
            { native: "この部屋に入ってもいいですか？", romanized: "Kono heya ni haitte mo ii desu ka?", translation: "May I enter this room?" },
            { native: "授業中に電話を使ってはいけません。", romanized: "Jugyouchuu ni denwa wo tsukatte wa ikemasen.", translation: "You must not use your phone during class." },
        ]
    },
    {
        id: "ja-g-a2-6",
        level: "A2",
        title: "Giving & Receiving: あげる・もらう・くれる",
        explanation: {
            native: "Japanese has three distinct verbs for giving and receiving, chosen based on the direction of the action relative to the speaker. あげる: the speaker (or someone) gives to someone else (away from the speaker). もらう: the speaker (or someone) receives from someone else. くれる: someone gives to the speaker or the speaker's in-group. The key distinction is the speaker's perspective — くれる always involves the speaker as the recipient. Use に to mark the receiver with あげる and くれる; use に or から to mark the giver with もらう.",
            target: "にほんごには あげる・もらう・くれる という さんつの どうしが あり、はなしてとの かんけいによって つかいわけます。あげる：はなして（または だれか）が たにんに あたえる（はなしてから はなれる）。もらう：はなして（または だれか）が たにんから うけとる。くれる：だれかが はなして または はなしての グループに あたえる。おもな ちがいは はなしての かんてん — くれるは かならず はなしてが うけとる。あげる・くれるの うけとる ひとには に、もらうの あたえる ひとには に または から を つかいます。"
        },
        examples: [
            { native: "友達にプレゼントをあげました。", romanized: "Tomodachi ni purezento wo agemashita.", translation: "I gave a present to my friend. (I → friend)" },
            { native: "母からお金をもらいました。", romanized: "Haha kara okane wo moraimashita.", translation: "I received money from my mother. (mother → me)" },
            { native: "田中さんが私に本をくれました。", romanized: "Tanaka-san ga watashi ni hon wo kuremashita.", translation: "Tanaka-san gave me a book. (someone → me)" },
            { native: "誰にあげましたか？", romanized: "Dare ni agemashita ka?", translation: "Who did you give it to?" },
            { native: "先生に花をもらいました。", romanized: "Sensei ni hana wo moraimashita.", translation: "I received flowers from my teacher." },
        ]
    },
    {
        id: "ja-g-a2-7",
        level: "A2",
        title: "〜と思います / 〜のほうが好きです: Opinions & Preferences",
        explanation: {
            native: "To express a personal opinion, use: plain form verb/adjective + と思います (I think that...). The plain form is used inside the clause before と, not the polite ます/です form. To express a preference between two things, use: A より B のほうが好きです (I like B better than A). The particle より marks the thing being compared against. To ask for a preference: どちらのほうが好きですか？ (Which do you prefer?)",
            target: "いけんを あらわすときは「ふつうけい＋とおもいます」を つかいます（〜だとおもいます）。とのまえは ていねいけい（ます・です）でなく、ふつうけい（じしょけい・たけい・ないけい）を つかいます。ふたつの ものを くらべて すきなほうを いうときは「Aより Bのほうが すきです」。よりは くらべる たいしょうに つきます。どちらのほうが すきですか？＝which do you prefer?"
        },
        examples: [
            { native: "このレストランはおいしいと思います。", romanized: "Kono resutoran wa oishii to omoimasu.", translation: "I think this restaurant is delicious." },
            { native: "明日は雨が降ると思います。", romanized: "Ashita wa ame ga furu to omoimasu.", translation: "I think it will rain tomorrow." },
            { native: "犬より猫のほうが好きです。", romanized: "Inu yori neko no hou ga suki desu.", translation: "I like cats better than dogs." },
            { native: "夏より冬のほうが好きです。", romanized: "Natsu yori fuyu no hou ga suki desu.", translation: "I prefer winter to summer." },
            { native: "どちらのほうが好きですか？", romanized: "Dochira no hou ga suki desu ka?", translation: "Which do you prefer?" },
        ]
    },
    {
        id: "ja-g-a2-8",
        level: "A2",
        title: "Polite Requests: 〜てください / 〜てくれませんか / 〜ていただけませんか",
        explanation: {
            native: "Japanese has a graduated system for making requests, from direct to very polite. て-form + ください is the standard polite request ('please do ~'). て-form + くれませんか is softer — a question asking if someone would do something for you ('would you ~?'). て-form + いただけませんか is the most polite form, used with strangers, superiors, or in formal situations ('would you be so kind as to ~?'). The negative request (please don't) uses: ないで + ください. Choosing the right level matters — ください with a superior can sound abrupt; いただけませんか with a close friend sounds strange.",
            target: "にほんごには ていねいさの ちがう たのみかたが あります。てけい＋ください：ていねいな たのみ（〜してください）。てけい＋くれませんか：もっと やわらかい たのみかた、「〜してくれませんか？」。てけい＋いただけませんか：もっとも ていねいな かたち、めうえの ひとや はじめての ひとに つかいます。ひていの たのみ（〜しないで）：ないけい＋ください。えらびかたが たいせつです — てうえの ひとに ただ ください だと ぶっきらぼうに きこえることも あります。"
        },
        examples: [
            { native: "もう一度言ってください。", romanized: "Mou ichido itte kudasai.", translation: "Please say it again. (standard polite request)" },
            { native: "ちょっと待ってくれませんか？", romanized: "Chotto matte kuremasen ka?", translation: "Could you wait a moment? (softer request)" },
            { native: "ここにサインしていただけませんか？", romanized: "Koko ni sain shite itadakemasen ka?", translation: "Would you be so kind as to sign here? (very polite — formal context)" },
            { native: "ここで写真を撮らないでください。", romanized: "Koko de shashin wo toranai de kudasai.", translation: "Please don't take photos here. (negative request)" },
            { native: "窓を開けてくれませんか？", romanized: "Mado wo akete kuremasen ka?", translation: "Would you open the window?" },
        ]
    },
]
