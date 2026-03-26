import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "ja-g-a2-1",
        level: "A2",
        title: "Potential Form: Can / Be Able To",
        explanation: {
            native: "Japanese has two ways to express ability: (1) the potential verb form and (2) ことができる. POTENTIAL VERB FORM: Group 2 (ru-verbs): replace る with られる (食べる → 食べられる). Group 1 (u-verbs): replace the final u-sound with the e-row + る (書く→書ける, 飲む→飲める, 話す→話せる, 行く→行ける). Group 3: する→できる, 来る→来られる. ことができる (more formal): verb dictionary form + ことができる (食べることができる = can eat). The potential subject often takes が. Negative: られない / ことができない.",
            target: "のうりょくを あらわす ほうほうは ふたつ あります。①かのうどうし：グループ２（るどうし）→ るを られるに かえる（たべる→たべられる）。グループ１（うどうし）→ さいごの うのだんを えのだんに かえて るを つける（かく→かける、のむ→のめる、はなす→はなせる）。グループ３：する→できる、くる→こられる。②ことができる（フォーマル）：じしょけい＋ことができる（たべることができる）。かのうの しゅごには「が」を つかうことが おおい。ひてい：〜られない / ことができない。"
        },
        examples: [
            { native: "日本語を話せます。", romanized: "Nihongo wo hanasemasu.", translation: "I can speak Japanese. (potential verb form: 話す→話せる)" },
            { native: "この漢字を読むことができますか？", romanized: "Kono kanji wo yomu koto ga dekimasu ka?", translation: "Can you read this kanji? (ことができる — formal)" },
            { native: "ピアノが弾けません。", romanized: "Piano ga hikemasen.", translation: "I can't play the piano. (negative potential: 弾く→弾ける→弾けない)" },
            { native: "一人で料理できます。", romanized: "Hitori de ryouri dekimasu.", translation: "I can cook by myself. (する→できる)" },
            { native: "どのくらい泳げますか？", romanized: "Dono kurai oyogemasu ka?", translation: "How far can you swim? (泳ぐ→泳げる)" }
        ],
        inlineVocab: [
            { word: "話せる", romanized: "hanaseru", translation: "can speak (potential of 話す)" },
            { word: "読める", romanized: "yomeru", translation: "can read (potential of 読む)" },
            { word: "できる", romanized: "dekiru", translation: "can do; is possible" }
        ]
    },
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
    {
        id: "ja-g-a2-5",
        level: "A2",
        title: "Passive Form: Being Affected by an Action",
        explanation: {
            native: "The passive form describes situations where the subject receives or is affected by someone else's action. CONJUGATION: Group 2 (ru-verbs): replace る with られる (食べる → 食べられる). Group 1 (u-verbs): replace the final u-sound with the a-row + れる (書く→書かれる, 飲む→飲まれる, 話す→話される). Group 3: する→される, 来る→来られる. The doer of the action is marked with に. TWO TYPES: (1) Direct passive — straightforward description (先生にほめられた = I was praised by the teacher). (2) Adversative/indirect passive — expresses that someone was negatively affected (友達に来られて困った = My friend showed up and it was a problem for me).",
            target: "うけみけいは、しゅごが だれかの どうさを うける・えいきょうを うける ばめんで つかいます。かつよう：グループ２（るどうし）→ るを られるに かえる（たべる→たべられる）。グループ１（うどうし）→ さいごの うのだんを あのだんに かえて れるを つける（かく→かかれる、のむ→のまれる、はなす→はなされる）。グループ３：する→される、くる→こられる。どうさをする ひとには に。ふたつの かたち：①ちょくせつ うけみ（ほめられた＝was praised）。②めいわく うけみ（ともだちに こられて こまった＝my friend showed up and I was bothered）。"
        },
        examples: [
            { native: "先生に褒められました。", romanized: "Sensei ni homeraremashita.", translation: "I was praised by my teacher. (direct passive)" },
            { native: "この小説は多くの人に読まれています。", romanized: "Kono shousetsu wa ooku no hito ni yomarete imasu.", translation: "This novel is being read by many people." },
            { native: "財布を盗まれました。", romanized: "Saifu wo nusumaremashita.", translation: "My wallet was stolen. (adversative — I was negatively affected)" },
            { native: "この建物は1850年に建てられました。", romanized: "Kono tatemono wa 1850-nen ni tateraremashita.", translation: "This building was built in 1850. (factual passive)" },
            { native: "雨に降られて、ずぶ濡れになりました。", romanized: "Ame ni furarete, zubu nure ni narimashita.", translation: "It rained on me and I got soaked. (adversative passive — unwanted event)" }
        ],
        inlineVocab: [
            { word: "褒める", romanized: "homeru", translation: "to praise" },
            { word: "盗む", romanized: "nusumu", translation: "to steal" },
            { word: "建てる", romanized: "tateru", translation: "to build" }
        ]
    },
    {
        id: "ja-g-a2-6",
        level: "A2",
        title: "Causative Form: Making & Letting Someone Do",
        explanation: {
            native: "The causative form expresses that someone causes or allows another person to do something. CONJUGATION: Group 2 (ru-verbs): replace る with させる (食べる → 食べさせる). Group 1 (u-verbs): replace the final u-sound with the a-row + せる (書く→書かせる, 飲む→飲ませる, 話す→話させる). Group 3: する→させる, 来る→来させる. The person who causes is the subject (が/は). The person who is made to do the action takes を (if the original verb is intransitive) or に (if the original verb is transitive). MEANING: causative can mean 'make someone do' (compulsory) or 'let/allow someone do' depending on context.",
            target: "しえきけいは、だれかに なにかを させる（きょうせい）または させてあげる（きょか）ことを あらわします。かつよう：グループ２（るどうし）→ るを させるに かえる（たべる→たべさせる）。グループ１（うどうし）→ さいごの うのだんを あのだんに かえて せるを つける（かく→かかせる、のむ→のませる）。グループ３：する→させる、くる→こさせる。させる しゅごは が・は。させられる ひとは じどうしなら を、たどうしなら に。「させる」は「むりやり させる」（きょうせい）または「させてあげる」（きょか）の どちらにも つかいます。"
        },
        examples: [
            { native: "母は子供に野菜を食べさせました。", romanized: "Haha wa kodomo ni yasai wo tabesasemashita.", translation: "My mother made the child eat vegetables. (compulsory)" },
            { native: "先生は学生を立たせました。", romanized: "Sensei wa gakusei wo tatasemashita.", translation: "The teacher made the students stand up." },
            { native: "社長は田中さんを出張させました。", romanized: "Shachou wa Tanaka-san wo shucchou sasemashita.", translation: "The president sent Tanaka on a business trip." },
            { native: "子供に好きなものを食べさせてあげます。", romanized: "Kodomo ni suki na mono wo tabesasete agemasu.", translation: "I'll let the child eat what they like. (permissive)" },
            { native: "少し休ませてください。", romanized: "Sukoshi yasumasete kudasai.", translation: "Please let me rest for a bit. (requesting permission)" }
        ],
        inlineVocab: [
            { word: "させる", romanized: "saseru", translation: "causative auxiliary: make/let someone do" },
            { word: "出張", romanized: "shucchou", translation: "business trip" },
            { word: "立つ", romanized: "tatsu", translation: "to stand up" }
        ]
    },
    {
        id: "ja-g-a2-7",
        level: "A2",
        title: "Causative-Passive: Being Made to Do Something",
        explanation: {
            native: "The causative-passive combines causative and passive meaning: 'to be made to do something' (usually against one's will). FORMATION: causative form + passive られる. Group 2: 食べさせる → 食べさせられる. Group 1 SHORT FORM (common in speech): 飲む→飲まされる (from 飲ませる→飲ませられる, contracted), 書く→書かされる. Group 3: させる→させられる. This form almost always carries a nuance of being forced, compelled, or inconvenienced. It is a classic N4 grammar target.",
            target: "しえきうけみは しえきけいと うけみけいを くみあわせた かたち：「〜させられる」＝ むりやり 〜させられる（ほとんど つねに やらされた、こまった という ニュアンス）。つくりかた：しえきけい＋ られる。グループ２：たべさせる→たべさせられる。グループ１みじかいかたち（はなしことばで よく つかう）：のむ→のまされる（のませられる の しゅくやく）、かく→かかされる。グループ３：させる→させられる。JLPT N4で よく でる ぶんけいです。"
        },
        examples: [
            { native: "子供の頃、嫌いな野菜を食べさせられました。", romanized: "Kodomo no koro, kirai na yasai wo tabesaseraremashita.", translation: "As a child, I was made to eat vegetables I hated." },
            { native: "残業を毎日させられています。", romanized: "Zangyou wo mainichi saserarete imasu.", translation: "I am made to work overtime every day." },
            { native: "上司に全部やらされました。", romanized: "Joushi ni zenbu yarasaremashita.", translation: "I was made to do everything by my boss." },
            { native: "部長のスピーチを一時間聞かされました。", romanized: "Buchou no supiichi wo ichijikan kikasaremashita.", translation: "I was forced to listen to the manager's speech for an hour." },
            { native: "子供に泣かされて、困りました。", romanized: "Kodomo ni nakasarete, komarimashita.", translation: "The child made me cry — it was really upsetting." }
        ],
        inlineVocab: [
            { word: "させられる", romanized: "saserareru", translation: "be made to do; be forced to do" },
            { word: "上司", romanized: "joushi", translation: "boss / superior" },
            { word: "残業", romanized: "zangyou", translation: "overtime work" }
        ]
    },
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
    {
        id: "ja-g-a2-16",
        level: "A2",
        title: "Relative Clauses & Noun Modification",
        explanation: {
            native: "In Japanese, modifying clauses come BEFORE the noun they describe — the opposite of English. The clause uses the plain form: [plain-form clause] + noun. There is NO relative pronoun (no 'who', 'that', 'which'). Examples: 昨日食べた寿司 (the sushi [that] I ate yesterday), 日本語を話す人 (a person who speaks Japanese). The topic particle は cannot be used inside the modifying clause — replace it with が. This pattern is essential for reading and natural speech. Also: 〜という＋noun ('a [noun] called/named/described as ~').",
            target: "にほんごでは、しゅうしょくせつは めいしの まえに おかれます（えいごと ぎゃく）。せつは ふつうけいを つかいます：[ふつうけいの せつ]＋めいし。かんけいだいめいし（who / that / which）は つかいません。れい：きのう たべた すし（the sushi I ate yesterday）、にほんごを はなす ひと（a person who speaks Japanese）。しゅうしょくせつの なかでは は が になります。これは よむ・はなすうえで とても じゅうようです。また：〜という＋めいし（〜という なまえの、〜という いみの）。"
        },
        examples: [
            { native: "昨日食べた寿司は最高でした。", romanized: "Kinou tabeta sushi wa saikou deshita.", translation: "The sushi (that) I ate yesterday was amazing. (past action modifying noun)" },
            { native: "日本語を話す人はどこですか？", romanized: "Nihongo wo hanasu hito wa doko desu ka?", translation: "Where is the person who speaks Japanese? (present action)" },
            { native: "私が買った本を読みましたか？", romanized: "Watashi ga katta hon wo yomimashita ka?", translation: "Did you read the book (that) I bought? (Note: が, not は, inside clause)" },
            { native: "「さくら」というカフェを知っていますか？", romanized: "'Sakura' to iu kafe wo shitte imasu ka?", translation: "Do you know a café called 'Sakura'? (〜という pattern)" },
            { native: "彼女が作った料理がとてもおいしかった。", romanized: "Kanojo ga tsukutta ryouri ga totemo oishikatta.", translation: "The food (that) she made was very delicious." }
        ],
        inlineVocab: [
            { word: "〜という", romanized: "~to iu", translation: "called ~; named ~; known as ~" },
            { word: "修飾節", romanized: "shuushokusetsu", translation: "modifying/relative clause" },
            { word: "最高", romanized: "saikou", translation: "the best; amazing" }
        ]
    },
    {
        id: "ja-g-a2-17",
        level: "A2",
        title: "Purpose & Reason: 〜ために / 〜ので",
        explanation: {
            native: "PURPOSE 〜ために ('in order to / for the purpose of'): verb dictionary form (or noun + の) + ために. Expresses a deliberate goal: 日本語を勉強するために、毎日練習します (I practise every day in order to study Japanese). Cannot be used for involuntary actions. REASON 〜ので ('because / since' — more formal and softer than から): plain form + ので. Sounds more objective and polite than から. Example: 雨が降っているので、家にいます (Because it's raining, I'm staying home). KEY DISTINCTION: ので sounds more polite and explanatory; から sounds more assertive and is used in casual/logical arguments.",
            target: "もくてきの ために（〜するために）：じしょけい（または めいし＋の）＋ために。いとてきな もくひょうを あらわします：にほんごを べんきょうするために、まいにち れんしゅうします。いしの ない どうさには つかえません。りゆうの ので（〜から より ていねい・やわらか）：ふつうけい＋ので。きゃっかんてきで ていねいな かんじ。れい：あめが ふっているので、いえにいます。ちがい：ので は ていねいで せつめいてき、から は じかんてきで ロジカル・カジュアルな ときに つかう。"
        },
        examples: [
            { native: "日本語を上手にするために、毎日練習しています。", romanized: "Nihongo wo jouzu ni suru tame ni, mainichi renshuu shite imasu.", translation: "I practise every day in order to improve my Japanese. (ために — purpose)" },
            { native: "健康のために、毎朝走ります。", romanized: "Kenkou no tame ni, maiasa hashirimasu.", translation: "I run every morning for my health. (noun + のために)" },
            { native: "雨が降っているので、タクシーで行きます。", romanized: "Ame ga futte iru node, takushii de ikimasu.", translation: "Because it's raining, I'll go by taxi. (ので — polite reason)" },
            { native: "体調が悪いので、休ませてください。", romanized: "Taichou ga warui node, yasumasete kudasai.", translation: "As I'm not feeling well, please allow me to rest. (ので — polite explanation)" },
            { native: "試験に合格するために、一生懸命勉強します。", romanized: "Shiken ni goukaku suru tame ni, isshoukenmei benkyou shimasu.", translation: "I will study hard in order to pass the exam." }
        ],
        inlineVocab: [
            { word: "〜ために", romanized: "~tame ni", translation: "in order to ~; for the purpose of ~" },
            { word: "〜ので", romanized: "~node", translation: "because ~; since ~ (polite reason)" },
            { word: "合格する", romanized: "goukaku suru", translation: "to pass (an exam)" }
        ]
    },
    {
        id: "ja-g-a2-18",
        level: "A2",
        title: "Concession & Contrast: 〜のに / 〜ても / 〜けれど",
        explanation: {
            native: "〜のに ('even though / despite the fact that' — expresses surprise, disappointment, or unexpectedness): plain form + のに. Example: 頑張ったのに、失敗しました (Even though I tried hard, I failed). The speaker expected a different result. 〜ても ('even if / even though — concession regardless of condition'): て-form + も. Example: 雨が降っても、行きます (Even if it rains, I'll go). 〜けれど(も) / 〜が: 'but / although' — softer, factual contrast: 高いですけれど、買いたいです (It's expensive, but I want to buy it). のに implies emotional disappointment; ても is purely logical.",
            target: "〜のに（〜にもかかわらず / なのに — きたいどおりにならず がっかり・おどろき）：ふつうけい＋のに。れい：がんばったのに、しっぱいしました（がんばったのに うまくいかなかった — がっかり）。〜ても（〜たとしても — かていてきに ゆずる）：てけい＋も。れい：あめが ふっても、いきます（どんなじょうきょうでも）。〜けれど（も）/ が（やわらかい、じじつてき たいひ）：こうだけれど、〜したい。のには かんじょうてきながっかり；てもは ろんりてきに ゆずる。"
        },
        examples: [
            { native: "一生懸命勉強したのに、試験に落ちました。", romanized: "Isshoukenmei benkyou shita noni, shiken ni ochimashita.", translation: "Even though I studied hard, I failed the exam. (のに — disappointment)" },
            { native: "雨が降っても、試合は続きます。", romanized: "Ame ga futte mo, shiai wa tsuzukimasu.", translation: "Even if it rains, the match will continue. (ても — concession)" },
            { native: "何時間待っても、彼女は来ませんでした。", romanized: "Nan jikan matte mo, kanojo wa kimasen deshita.", translation: "No matter how many hours I waited, she didn't come. (ても — regardless)" },
            { native: "高いですけれど、欲しいです。", romanized: "Takai desu keredo, hoshii desu.", translation: "It's expensive, but I want it. (けれど — mild contrast)" },
            { native: "疲れているのに、まだ働いています。", romanized: "Tsukarete iru noni, mada hataraite imasu.", translation: "Even though I'm tired, I'm still working. (のに — unexpected situation)" }
        ],
        inlineVocab: [
            { word: "〜のに", romanized: "~noni", translation: "even though ~; despite ~ (unexpected/disappointing result)" },
            { word: "〜ても", romanized: "~temo", translation: "even if ~; even though ~ (concession)" },
            { word: "〜けれど", romanized: "~keredo", translation: "but ~; although ~ (mild contrast)" }
        ]
    },
    {
        id: "ja-g-a2-19",
        level: "A2",
        title: "Scope & Limits: 〜だけ / 〜しか〜ない / 〜ばかり",
        explanation: {
            native: "〜だけ ('only / just'): noun/verb + だけ, used with both positive and negative sentences: 一つだけ食べました (I ate just one). 〜しか〜ない ('only ~ / nothing but ~' — always with negative verb, expresses insufficiency or limitation): noun + しか + negative verb: 百円しかありません (I only have 100 yen — implying it's not enough). CONTRAST: だけ is neutral (simply 'only'); しか〜ない carries emotional weight (only, and that's not enough). 〜ばかり: (1) 'nothing but / only doing' (implying excessive focus): ゲームばかりしている (doing nothing but gaming). (2) After た-form: 'just did': 食べたばかりです (I just ate).",
            target: "〜だけ（「だけ / ただ」、ポジティブにも ネガティブにも つかえる）：めいし/どうし＋だけ（ひとつだけ たべました）。〜しか〜ない（かならず ひていどうしと つかう、たりなさや せいやくを あらわす）：めいし＋しか＋ひていどうし（ひゃくえんしか ありません＝ひゃくえんしか ない — たりない）。ちがい：だけは ちゅうりつ（ただ「だけ」）、しか〜ないは かんじょうてき（だけで、たりない）。〜ばかり：①「〜ばかりしている」（〜ばかり で もうほかのことはしない）。②たけい＋ばかり（〜したばかり＝just did）。"
        },
        examples: [
            { native: "あと一つだけお願いします。", romanized: "Ato hitotsu dake onegai shimasu.", translation: "Just one more, please. (だけ — neutral 'only')" },
            { native: "お金が千円しかありません。", romanized: "Okane ga sen-en shika arimasen.", translation: "I only have 1000 yen. (しか〜ない — insufficient, with negative)" },
            { native: "彼はゲームばかりしています。", romanized: "Kare wa geemu bakari shite imasu.", translation: "He does nothing but play games. (ばかり — excessive focus)" },
            { native: "今、食べたばかりです。", romanized: "Ima, tabeta bakari desu.", translation: "I just ate. (たばかり — just completed)" },
            { native: "日本語しか話せません。", romanized: "Nihongo shika hanasemasen.", translation: "I can only speak Japanese. (しか〜ない — limitation)" }
        ],
        inlineVocab: [
            { word: "〜だけ", romanized: "~dake", translation: "only ~; just ~ (neutral limit)" },
            { word: "〜しか〜ない", romanized: "~shika~nai", translation: "only ~ (implying insufficiency; always negative verb)" },
            { word: "〜ばかり", romanized: "~bakari", translation: "nothing but ~; just did ~ (excess or recency)" }
        ]
    },
    {
        id: "ja-g-a2-20",
        level: "A2",
        title: "Time Sequencing: 〜前に / 〜た後で / 〜ながら / 〜あいだに",
        explanation: {
            native: "〜前に ('before doing'): verb dictionary form + 前に (食べる前に = before eating). Note: even if the main clause is past, 前に uses the dictionary form. 〜た後で ('after doing'): verb た-form + 後で (食べた後で = after eating). 〜ながら ('while doing simultaneously — same subject'): verb stem (ます-stem) + ながら (音楽を聞きながら勉強します = I study while listening to music). The main action is the latter verb. 〜あいだ(に) ('during / while — can imply a change happened within a period'): noun/plain form + あいだに (彼が寝ているあいだに、電話が来た = While he was sleeping, a call came).",
            target: "〜まえに（〜するまえに）：じしょけい＋まえに（たべるまえに）。ちゅうい：しゅせつが かこでも、まえには じしょけいをつかいます。〜たあとで（〜したあとで）：たけい＋あとで（たべたあとで）。〜ながら（どうじどうさ — おなじ しゅご）：ますけい（どうしのごかん）＋ながら（おんがくをききながら べんきょうします）。しゅどうさは あとの どうし。〜あいだ（に）（〜している あいだに）：めいし/ふつうけい＋あいだに（かれが ねているあいだに、でんわが きた）。あいだに は そのきかんに なにかが おきた ことを しめす。"
        },
        examples: [
            { native: "寝る前に歯を磨いてください。", romanized: "Neru mae ni ha wo migaite kudasai.", translation: "Please brush your teeth before sleeping. (〜前に — before)" },
            { native: "宿題をした後で、テレビを見ます。", romanized: "Shukudai wo shita ato de, terebi wo mimasu.", translation: "After doing my homework, I'll watch TV. (〜た後で)" },
            { native: "音楽を聞きながら料理をします。", romanized: "Ongaku wo kikinagara ryouri wo shimasu.", translation: "I cook while listening to music. (〜ながら — simultaneous actions)" },
            { native: "私が買い物をしているあいだに、子供たちは公園で遊んでいました。", romanized: "Watashi ga kaimono wo shite iru aida ni, kodomotachi wa kouen de asonde imashita.", translation: "While I was shopping, the kids were playing in the park. (〜あいだに)" },
            { native: "日本に来る前に、少し日本語を勉強しておきました。", romanized: "Nihon ni kuru mae ni, sukoshi Nihongo wo benkyou shite okimashita.", translation: "Before coming to Japan, I studied a little Japanese in advance." }
        ],
        inlineVocab: [
            { word: "〜前に", romanized: "~mae ni", translation: "before doing ~" },
            { word: "〜た後で", romanized: "~ta ato de", translation: "after doing ~" },
            { word: "〜ながら", romanized: "~nagara", translation: "while doing ~ (simultaneously, same subject)" }
        ]
    },
]
