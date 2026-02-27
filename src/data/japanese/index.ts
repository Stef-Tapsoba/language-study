// data/japanese/index.ts
import { LanguageModule } from "../../types"

const module: LanguageModule = {
    grammar: [
        {
            id: "ja-g-a1-1",
            level: "A1",
            title: "Hiragana: The Basic Script",
            explanation: "Hiragana is a syllabic script with 46 characters. Each character represents a syllable (e.g. か = ka, き = ki). It is used for native Japanese words and grammatical elements. Learning hiragana is the essential first step.",
            examples: [
                { native: "あいうえお", romanized: "a i u e o", translation: "The five vowels" },
                { native: "かきくけこ", romanized: "ka ki ku ke ko", translation: "The 'k' row" },
                { native: "さしすせそ", romanized: "sa shi su se so", translation: "The 's' row" }
            ]
        },
        {
            id: "ja-g-a1-2",
            level: "A1",
            title: "Basic Sentence Structure: X は Y です",
            explanation: "Japanese sentences follow Subject-Object-Verb order. The particle は (wa) marks the topic. です (desu) means 'is/am/are' in polite speech.",
            examples: [
                { native: "わたしは がくせい です。", romanized: "Watashi wa gakusei desu.", translation: "I am a student." },
                { native: "これは ほん です。", romanized: "Kore wa hon desu.", translation: "This is a book." },
                { native: "かれは にほんじん です。", romanized: "Kare wa nihonjin desu.", translation: "He is Japanese." }
            ]
        },
        {
            id: "ja-g-a1-3",
            level: "A1",
            title: "Greetings and Polite Phrases",
            explanation: "Japanese has different levels of politeness. These are the standard (polite) greetings used in most everyday situations.",
            examples: [
                { native: "おはようございます。", romanized: "Ohayou gozaimasu.", translation: "Good morning. (formal)" },
                { native: "こんにちは。", romanized: "Konnichiwa.", translation: "Hello / Good afternoon." },
                { native: "こんばんは。", romanized: "Konbanwa.", translation: "Good evening." },
                { native: "ありがとうございます。", romanized: "Arigatou gozaimasu.", translation: "Thank you very much." },
                { native: "すみません。", romanized: "Sumimasen.", translation: "Excuse me / I'm sorry." }
            ]
        },
        {
            id: "ja-g-a1-4",
            level: "A1",
            title: "Numbers 1–10",
            explanation: "Japanese has two counting systems: native Japanese (hitotsu, futatsu…) and Sino-Japanese (ichi, ni, san…). The Sino-Japanese numbers are used for most counting.",
            examples: [
                { native: "一 (いち)", romanized: "ichi", translation: "1" },
                { native: "二 (に)", romanized: "ni", translation: "2" },
                { native: "三 (さん)", romanized: "san", translation: "3" },
                { native: "五 (ご)", romanized: "go", translation: "5" },
                { native: "十 (じゅう)", romanized: "juu", translation: "10" }
            ]
        },
        {
            id: "ja-g-a2-1",
            level: "A2",
            title: "て-Form and Connecting Actions",
            explanation: "The て-form (te-form) connects sequential actions ('and then') and forms progressive expressions with います (imasu). For Group 1 verbs, the ending changes before て: く→いて, ぐ→いで, す→して, む/ぬ/ぶ→んで, る/つ/う→って.",
            examples: [
                { native: "食べて、寝ます。", romanized: "Tabete, nemasu.", translation: "I eat and then sleep." },
                { native: "今、食べています。", romanized: "Ima, tabete imasu.", translation: "I am eating now." },
                { native: "音楽を聞いています。", romanized: "Ongaku wo kiite imasu.", translation: "I am listening to music." }
            ]
        },
        {
            id: "ja-g-a2-2",
            level: "A2",
            title: "〜たい: Expressing Wants and Desires",
            explanation: "To say you want to do something, replace ます (masu) with たいです (tai desu). The target of desire uses が or を. This form only works for first-person wants in statements; use たがっている for third person.",
            examples: [
                { native: "水を飲みたいです。", romanized: "Mizu wo nomitai desu.", translation: "I want to drink water." },
                { native: "日本に行きたいです。", romanized: "Nihon ni ikitai desu.", translation: "I want to go to Japan." },
                { native: "何が食べたいですか？", romanized: "Nani ga tabetai desu ka?", translation: "What do you want to eat?" }
            ]
        },
        {
            id: "ja-g-a2-3",
            level: "A2",
            title: "〜ことができる: Expressing Ability",
            explanation: "To express ability ('can do something'), use the dictionary form of the verb + ことができます. This is the formal way; the potential form of the verb is also common but introduced later.",
            examples: [
                { native: "日本語を話すことができます。", romanized: "Nihongo wo hanasu koto ga dekimasu.", translation: "I can speak Japanese." },
                { native: "車を運転することができません。", romanized: "Kuruma wo unten suru koto ga dekimasen.", translation: "I cannot drive a car." },
                { native: "泳ぐことができますか？", romanized: "Oyogu koto ga dekimasu ka?", translation: "Can you swim?" }
            ]
        },
        {
            id: "ja-g-a2-4",
            level: "A2",
            title: "Particles: に (direction/time) and で (location/means)",
            explanation: "に marks the destination of movement, a point in time, or a purpose. で marks where an action takes place, or the means/tool used for an action.",
            examples: [
                { native: "学校に行きます。", romanized: "Gakkou ni ikimasu.", translation: "I go to school. (に = destination)" },
                { native: "三時に起きます。", romanized: "San-ji ni okimasu.", translation: "I wake up at three. (に = time)" },
                { native: "図書館で勉強します。", romanized: "Toshokan de benkyou shimasu.", translation: "I study at the library. (で = location of action)" },
                { native: "バスで来ます。", romanized: "Basu de kimasu.", translation: "I come by bus. (で = means)" }
            ]
        },
        {
            id: "ja-g-b1-1",
            level: "B1",
            title: "〜なければならない / 〜なければいけない (Must / Have to)",
            explanation: "Expresses obligation or necessity. Formed from the negative conditional (〜なければ) + ならない or いけない. The plain form: verb negative stem + なければならない.",
            examples: [
                { native: "毎日勉強しなければなりません。", romanized: "Mainichi benkyou shinakereba narimasen.", translation: "I must study every day." },
                { native: "早く起きなければいけない。", romanized: "Hayaku okinakereba ikenai.", translation: "I have to wake up early." },
                { native: "薬を飲まなければなりません。", romanized: "Kusuri wo nomanakereba narimasen.", translation: "I must take the medicine." },
                { native: "もっと練習しなければならない。", romanized: "Motto renshuu shinakereba naranai.", translation: "I have to practice more." }
            ]
        },
        {
            id: "ja-g-b1-2",
            level: "B1",
            title: "〜てもいい (It's okay to / May)",
            explanation: "Expresses permission. Formed by attaching もいい to the て-form of a verb. The negative 〜てはいけない means 'must not / is not allowed'.",
            examples: [
                { native: "ここで写真を撮ってもいいですか？", romanized: "Koko de shashin wo totte mo ii desu ka?", translation: "May I take a photo here?" },
                { native: "もう帰ってもいいよ。", romanized: "Mou kaette mo ii yo.", translation: "You may go home now." },
                { native: "窓を開けてもいいですか？", romanized: "Mado wo akete mo ii desu ka?", translation: "May I open the window?" },
                { native: "ここに座ってはいけません。", romanized: "Koko ni suwatte wa ikemasen.", translation: "You must not sit here." }
            ]
        },
        {
            id: "ja-g-b1-3",
            level: "B1",
            title: "〜ようになる (Come to / Get to the point where)",
            explanation: "Expresses a change in state or ability over time. Attached to the dictionary form (positive) or negative form of a verb + なる. Common for describing learned abilities.",
            examples: [
                { native: "日本語が話せるようになりました。", romanized: "Nihongo ga hanaseru you ni narimashita.", translation: "I've come to be able to speak Japanese." },
                { native: "毎日走るようになった。", romanized: "Mainichi hashiru you ni natta.", translation: "I've started running every day." },
                { native: "辛い食べ物が食べられるようになった。", romanized: "Karai tabemono ga taberareru you ni natta.", translation: "I've gotten to the point where I can eat spicy food." },
                { native: "早起きするようになりました。", romanized: "Hayaoki suru you ni narimashita.", translation: "I've come to wake up early." }
            ]
        },
        {
            id: "ja-g-b1-4",
            level: "B1",
            title: "〜たり〜たりする (Doing things like / Among other things)",
            explanation: "Used to list representative actions from a larger set. Formed by attaching り to the た-form of verbs, then adding する/しました. Implies 'doing things like X and Y'.",
            examples: [
                { native: "週末は映画を見たり、本を読んだりします。", romanized: "Shuumatsu wa eiga wo mitari, hon wo yondari shimasu.", translation: "On weekends I do things like watch movies and read books." },
                { native: "旅行で写真を撮ったり、ご飯を食べたりした。", romanized: "Ryokou de shashin wo tottari, gohan wo tabetari shita.", translation: "On the trip I took photos, ate food, and so on." },
                { native: "雨が降ったり止んだりしている。", romanized: "Ame ga futtari yandari shite iru.", translation: "It keeps raining and stopping." },
                { native: "勉強したり遊んだりする。", romanized: "Benkyou shitari asondari suru.", translation: "I study, play, and do other things." }
            ]
        },
    ],

    vocab: [
        { id: "ja-v-a1-1", level: "A1", word: "こんにちは", romanized: "Konnichiwa", translation: "Hello", category: "Greetings", example: { native: "こんにちは！げんきですか？", romanized: "Konnichiwa! Genki desu ka?", translation: "Hello! Are you well?" } },
        { id: "ja-v-a1-2", level: "A1", word: "ありがとう", romanized: "Arigatou", translation: "Thank you", category: "Greetings", example: { native: "ありがとうございます。", romanized: "Arigatou gozaimasu.", translation: "Thank you very much." } },
        { id: "ja-v-a1-3", level: "A1", word: "はい", romanized: "Hai", translation: "Yes", category: "Basics", example: { native: "はい、そうです。", romanized: "Hai, sou desu.", translation: "Yes, that's right." } },
        { id: "ja-v-a1-4", level: "A1", word: "いいえ", romanized: "Iie", translation: "No", category: "Basics", example: { native: "いいえ、ちがいます。", romanized: "Iie, chigaimasu.", translation: "No, that's different." } },
        { id: "ja-v-a1-5", level: "A1", word: "すみません", romanized: "Sumimasen", translation: "Excuse me / Sorry", category: "Greetings", example: { native: "すみません、えきはどこですか？", romanized: "Sumimasen, eki wa doko desu ka?", translation: "Excuse me, where is the station?" } },
        { id: "ja-v-a1-6", level: "A1", word: "みず", romanized: "Mizu", translation: "Water", category: "Food", example: { native: "みずをください。", romanized: "Mizu wo kudasai.", translation: "Water, please." } },
        { id: "ja-v-a1-7", level: "A1", word: "ごはん", romanized: "Gohan", translation: "Rice / Meal", category: "Food", example: { native: "ごはんをたべます。", romanized: "Gohan wo tabemasu.", translation: "I eat rice / a meal." } },
        { id: "ja-v-a1-8", level: "A1", word: "ともだち", romanized: "Tomodachi", translation: "Friend", category: "People", example: { native: "かれはわたしのともだちです。", romanized: "Kare wa watashi no tomodachi desu.", translation: "He is my friend." } },
        { id: "ja-v-a1-9", level: "A1", word: "がっこう", romanized: "Gakkou", translation: "School", category: "Places", example: { native: "がっこうにいきます。", romanized: "Gakkou ni ikimasu.", translation: "I go to school." } },
        { id: "ja-v-a1-10", level: "A1", word: "にほん", romanized: "Nihon", translation: "Japan", category: "Places", example: { native: "にほんにすんでいます。", romanized: "Nihon ni sunde imasu.", translation: "I live in Japan." } },
        { id: "ja-v-a2-1", level: "A2", word: "スーパー", romanized: "Suupaa", translation: "Supermarket", category: "Places", example: { native: "スーパーにいきました。", romanized: "Suupaa ni ikimashita.", translation: "I went to the supermarket." } },
        { id: "ja-v-a2-2", level: "A2", word: "しゅう", romanized: "Shuu", translation: "Week", category: "Time", example: { native: "せんしゅう、ともだちにあいました。", romanized: "Senshuu, tomodachi ni aimashita.", translation: "Last week I met a friend." } },
        { id: "ja-v-a2-3", level: "A2", word: "おかね", romanized: "Okane", translation: "Money", category: "Daily life", example: { native: "おかねがありません。", romanized: "Okane ga arimasen.", translation: "I don't have money." } },
        { id: "ja-v-a2-4", level: "A2", word: "レストラン", romanized: "Resutoran", translation: "Restaurant", category: "Places", example: { native: "レストランでたべましょう。", romanized: "Resutoran de tabemashou.", translation: "Let's eat at the restaurant." } },
        { id: "ja-v-a2-5", level: "A2", word: "みぎ", romanized: "Migi", translation: "Right", category: "Directions", example: { native: "みぎにまがってください。", romanized: "Migi ni magatte kudasai.", translation: "Please turn right." } },
        { id: "ja-v-a2-6", level: "A2", word: "ひだり", romanized: "Hidari", translation: "Left", category: "Directions", example: { native: "ひだりにまがってください。", romanized: "Hidari ni magatte kudasai.", translation: "Please turn left." } },
        { id: "ja-v-a2-7", level: "A2", word: "じかん", romanized: "Jikan", translation: "Time", category: "Daily life", example: { native: "じかんがありません。", romanized: "Jikan ga arimasen.", translation: "I don't have time." } },
        { id: "ja-v-a2-8", level: "A2", word: "でんしゃ", romanized: "Densha", translation: "Train", category: "Travel", example: { native: "でんしゃにのります。", romanized: "Densha ni norimasu.", translation: "I take the train." } },
        { id: "ja-v-a2-9", level: "A2", word: "えき", romanized: "Eki", translation: "Station", category: "Places", example: { native: "えきはどこですか？", romanized: "Eki wa doko desu ka?", translation: "Where is the station?" } },
        { id: "ja-v-a2-10", level: "A2", word: "りょこう", romanized: "Ryokou", translation: "Travel / Trip", category: "Travel", example: { native: "りょこうがすきです。", romanized: "Ryokou ga suki desu.", translation: "I like travelling." } },
        { id: "ja-v-b1-1", level: "B1", word: "かんきょう (環境)", romanized: "kankyou", translation: "Environment", category: "Society", example: { native: "環境を守る必要があります。", romanized: "Kankyou wo mamoru hitsuyou ga arimasu.", translation: "We need to protect the environment." } },
        { id: "ja-v-b1-2", level: "B1", word: "しゃかい (社会)", romanized: "shakai", translation: "Society", category: "Society", example: { native: "社会はどんどん変わっています。", romanized: "Shakai wa dondon kawatte imasu.", translation: "Society is changing rapidly." } },
        { id: "ja-v-b1-3", level: "B1", word: "けんこう (健康)", romanized: "kenkou", translation: "Health", category: "Health", example: { native: "健康のために運動します。", romanized: "Kenkou no tame ni undou shimasu.", translation: "I exercise for my health." } },
        { id: "ja-v-b1-4", level: "B1", word: "じゆう (自由)", romanized: "jiyuu", translation: "Freedom", category: "Society", example: { native: "言論の自由は大切です。", romanized: "Genron no jiyuu wa taisetsu desu.", translation: "Freedom of speech is important." } },
        { id: "ja-v-b1-5", level: "B1", word: "きかい (機会)", romanized: "kikai", translation: "Opportunity / Chance", category: "Society", example: { native: "いい機会をありがとうございます。", romanized: "Ii kikai wo arigatou gozaimasu.", translation: "Thank you for the good opportunity." } },
        { id: "ja-v-b1-6", level: "B1", word: "もんだい (問題)", romanized: "mondai", translation: "Problem / Issue", category: "Basics", example: { native: "何か問題がありますか？", romanized: "Nanika mondai ga arimasu ka?", translation: "Is there any problem?" } },
        { id: "ja-v-b1-7", level: "B1", word: "むずかしい (難しい)", romanized: "muzukashii", translation: "Difficult", category: "Basics", example: { native: "この問題は難しいです。", romanized: "Kono mondai wa muzukashii desu.", translation: "This problem is difficult." } },
        { id: "ja-v-b1-8", level: "B1", word: "たいせつ (大切)", romanized: "taisetsu", translation: "Important / Precious", category: "Basics", example: { native: "健康は一番大切です。", romanized: "Kenkou wa ichiban taisetsu desu.", translation: "Health is the most important thing." } },
        { id: "ja-v-b1-9", level: "B1", word: "せいかつ (生活)", romanized: "seikatsu", translation: "Life / Daily life", category: "Daily life", example: { native: "日本の生活に慣れました。", romanized: "Nihon no seikatsu ni naremashita.", translation: "I got used to life in Japan." } },
        { id: "ja-v-b1-10", level: "B1", word: "いけん (意見)", romanized: "iken", translation: "Opinion / View", category: "Discussion", example: { native: "あなたの意見を聞かせてください。", romanized: "Anata no iken wo kikasete kudasai.", translation: "Please tell me your opinion." } },
    ],

    verbs: [
        {
            id: "ja-vb-a1-1",
            level: "A1",
            infinitive: "食べる",
            romanized: "taberu",
            meaning: "to eat",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "Affirmative", form: "食べます", romanized: "tabemasu" },
                        { pronoun: "Negative", form: "食べません", romanized: "tabemasen" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "Affirmative", form: "食べました", romanized: "tabemashita" },
                        { pronoun: "Negative", form: "食べませんでした", romanized: "tabemasen deshita" }
                    ]
                }
            ]
        },
        {
            id: "ja-vb-a1-2",
            level: "A1",
            infinitive: "飲む",
            romanized: "nomu",
            meaning: "to drink",
            conjugations: [{
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "飲みます", romanized: "nomimasu" },
                    { pronoun: "Negative", form: "飲みません", romanized: "nomimasen" }
                ]
            }]
        },
        {
            id: "ja-vb-a1-3",
            level: "A1",
            infinitive: "行く",
            romanized: "iku",
            meaning: "to go",
            conjugations: [{
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "行きます", romanized: "ikimasu" },
                    { pronoun: "Negative", form: "行きません", romanized: "ikimasen" }
                ]
            }]
        },
        {
            id: "ja-vb-a1-4",
            level: "A1",
            infinitive: "する",
            romanized: "suru",
            meaning: "to do",
            conjugations: [{
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "します", romanized: "shimasu" },
                    { pronoun: "Negative", form: "しません", romanized: "shimasen" }
                ]
            }]
        },
        {
            id: "ja-vb-a2-1",
            level: "A2",
            infinitive: "見る",
            romanized: "miru",
            meaning: "to see / to watch",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "Affirmative", form: "見ます", romanized: "mimasu" },
                        { pronoun: "Negative", form: "見ません", romanized: "mimasen" }
                    ]
                },
                {
                    tense: "て-form",
                    forms: [
                        { pronoun: "て-form", form: "見て", romanized: "mite" }
                    ]
                }
            ]
        },
        {
            id: "ja-vb-a2-2",
            level: "A2",
            infinitive: "来る",
            romanized: "kuru",
            meaning: "to come (irregular)",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "Affirmative", form: "来ます", romanized: "kimasu" },
                        { pronoun: "Negative", form: "来ません", romanized: "kimasen" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "Affirmative", form: "来ました", romanized: "kimashita" },
                        { pronoun: "Negative", form: "来ませんでした", romanized: "kimasen deshita" }
                    ]
                }
            ]
        },
        {
            id: "ja-vb-a2-3",
            level: "A2",
            infinitive: "話す",
            romanized: "hanasu",
            meaning: "to speak / to talk",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "Affirmative", form: "話します", romanized: "hanashimasu" },
                        { pronoun: "Negative", form: "話しません", romanized: "hanashimasen" }
                    ]
                },
                {
                    tense: "て-form",
                    forms: [
                        { pronoun: "て-form", form: "話して", romanized: "hanashite" }
                    ]
                }
            ]
        },
        {
            id: "ja-vb-a2-4",
            level: "A2",
            infinitive: "書く",
            romanized: "kaku",
            meaning: "to write",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "Affirmative", form: "書きます", romanized: "kakimasu" },
                        { pronoun: "Negative", form: "書きません", romanized: "kakimasen" }
                    ]
                },
                {
                    tense: "て-form",
                    forms: [
                        { pronoun: "て-form", form: "書いて", romanized: "kaite" }
                    ]
                }
            ]
        },
        {
            id: "ja-vb-b1-1",
            level: "B1",
            infinitive: "しる (知る)",
            romanized: "shiru",
            meaning: "to know / to find out",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "positive", form: "知ります", romanized: "shirimasu" },
                        { pronoun: "negative", form: "知りません", romanized: "shirimasen" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "positive", form: "知りました", romanized: "shirimashita" },
                        { pronoun: "negative", form: "知りませんでした", romanized: "shirimasen deshita" }
                    ]
                },
                {
                    tense: "Te-form",
                    forms: [
                        { pronoun: "て-form", form: "知って", romanized: "shitte" }
                    ]
                }
            ]
        },
        {
            id: "ja-vb-b1-2",
            level: "B1",
            infinitive: "おもう (思う)",
            romanized: "omou",
            meaning: "to think / to feel",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "positive", form: "思います", romanized: "omoimasu" },
                        { pronoun: "negative", form: "思いません", romanized: "omoimasen" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "positive", form: "思いました", romanized: "omoimashita" },
                        { pronoun: "negative", form: "思いませんでした", romanized: "omoimasen deshita" }
                    ]
                },
                {
                    tense: "Te-form",
                    forms: [
                        { pronoun: "て-form", form: "思って", romanized: "omotte" }
                    ]
                }
            ]
        },
        {
            id: "ja-vb-b1-3",
            level: "B1",
            infinitive: "つかう (使う)",
            romanized: "tsukau",
            meaning: "to use",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "positive", form: "使います", romanized: "tsukaimasu" },
                        { pronoun: "negative", form: "使いません", romanized: "tsukaimasen" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "positive", form: "使いました", romanized: "tsukaimashita" },
                        { pronoun: "negative", form: "使いませんでした", romanized: "tsukaimasen deshita" }
                    ]
                },
                {
                    tense: "Te-form",
                    forms: [
                        { pronoun: "て-form", form: "使って", romanized: "tsukatte" }
                    ]
                }
            ]
        },
        {
            id: "ja-vb-b1-4",
            level: "B1",
            infinitive: "よむ (読む)",
            romanized: "yomu",
            meaning: "to read",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "positive", form: "読みます", romanized: "yomimasu" },
                        { pronoun: "negative", form: "読みません", romanized: "yomimasen" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "positive", form: "読みました", romanized: "yomimashita" },
                        { pronoun: "negative", form: "読みませんでした", romanized: "yomimasen deshita" }
                    ]
                },
                {
                    tense: "Te-form",
                    forms: [
                        { pronoun: "て-form", form: "読んで", romanized: "yonde" }
                    ]
                }
            ]
        },
    ],

    placementQuestions: [
        { id: "ja-p-a1-1", level: "A1", prompt: "What does 'こんにちは' mean?", options: ["Goodbye", "Thank you", "Hello", "Excuse me"], answer: "Hello" },
        { id: "ja-p-a1-2", level: "A1", prompt: "What particle marks the topic of a sentence?", options: ["を", "が", "は", "に"], answer: "は" },
        { id: "ja-p-a2-1", level: "A2", prompt: "How do you say 'I am eating now' (progressive)?", options: ["食べます", "食べています", "食べました", "食べません"], answer: "食べています" },
        { id: "ja-p-a2-2", level: "A2", prompt: "What is the te-form of 食べる?", options: ["食べて", "食べた", "食べに", "食べで"], answer: "食べて" },
        { id: "ja-p-b1-1", level: "B1", prompt: "Which form expresses 'must do'?", options: ["〜てもいい", "〜なければならない", "〜てはいけない", "〜ことができる"], answer: "〜なければならない" },
        { id: "ja-p-b1-2", level: "B1", prompt: "What does 〜ことができる express?", options: ["Must do", "Cannot do", "Able to do", "Should do"], answer: "Able to do" },
        { id: "ja-p-b2-1", level: "B2", prompt: "Which is the conditional form of 食べる?", options: ["食べれば", "食べたら", "食べなら", "食べては"], answer: "食べれば" },
        { id: "ja-p-b2-2", level: "B2", prompt: "What does 〜ようだ express?", options: ["Direct quotation", "Conjecture based on evidence", "Desire", "Permission"], answer: "Conjecture based on evidence" },
        { id: "ja-p-c1-1", level: "C1", prompt: "Which is the humble form of 言う?", options: ["おっしゃる", "申す", "いただく", "くださる"], answer: "申す" },
        { id: "ja-p-c1-2", level: "C1", prompt: "What does 〜にもかかわらず mean?", options: ["because of", "in spite of", "thanks to", "in order to"], answer: "in spite of" }
    ],

    levelQuestions: [
        { id: "ja-lt-a1-1", level: "A1", prompt: "What does 'ありがとう' mean?", options: ["Hello", "Goodbye", "Thank you", "Excuse me"], answer: "Thank you" },
        { id: "ja-lt-a1-2", level: "A1", prompt: "What does 'はい' mean?", options: ["No", "Yes", "Maybe", "Please"], answer: "Yes" },
        { id: "ja-lt-a1-3", level: "A1", prompt: "How do you say 'I am a student'?", options: ["わたしはがくせいです。", "がくせいはわたしです。", "わたしをがくせいです。", "わたしがくせいです。"], answer: "わたしはがくせいです。" },
        { id: "ja-lt-a1-4", level: "A1", prompt: "What is 'water' in Japanese?", options: ["ごはん", "みず", "おちゃ", "ジュース"], answer: "みず" },
        { id: "ja-lt-a1-5", level: "A1", prompt: "What does 'ともだち' mean?", options: ["Teacher", "Family", "Friend", "Enemy"], answer: "Friend" },
        { id: "ja-lt-a1-6", level: "A1", prompt: "How do you say 'Good evening'?", options: ["おはようございます", "こんにちは", "こんばんは", "おやすみなさい"], answer: "こんばんは" },
        { id: "ja-lt-a1-7", level: "A1", prompt: "What is 3 in Japanese (Sino-Japanese)?", options: ["ひとつ", "に", "さん", "よん"], answer: "さん" },
        { id: "ja-lt-a1-8", level: "A1", prompt: "How do you say 'I eat' (polite)?", options: ["食べません", "食べる", "食べます", "食べました"], answer: "食べます" },
        { id: "ja-lt-a1-9", level: "A1", prompt: "What particle marks the direct object?", options: ["は", "が", "に", "を"], answer: "を" },
        { id: "ja-lt-a1-10", level: "A1", prompt: "What does 'すみません' mean?", options: ["Thank you", "Goodbye", "Excuse me", "Yes"], answer: "Excuse me" },
        { id: "ja-lt-a1-11", level: "A1", prompt: "What is 'school' in Japanese?", options: ["にほん", "がっこう", "みず", "ごはん"], answer: "がっこう" },
        { id: "ja-lt-a1-12", level: "A1", prompt: "How do you say 'to go' (polite present)?", options: ["行きます", "行きません", "行きました", "行って"], answer: "行きます" },
        { id: "ja-lt-a1-13", level: "A1", prompt: "What does です mean at the end of a sentence?", options: ["Question marker", "Polite copula (is/am/are)", "Past tense marker", "Plural marker"], answer: "Polite copula (is/am/are)" },
        { id: "ja-lt-a1-14", level: "A1", prompt: "What does 'いいえ' mean?", options: ["Yes", "No", "Please", "Hello"], answer: "No" },
        { id: "ja-lt-a1-15", level: "A1", prompt: "How do you say 'I drink' (polite)?", options: ["飲みません", "飲みます", "飲みました", "飲む"], answer: "飲みます" },
        { id: "ja-lt-a2-1", level: "A2", prompt: "How do you say 'I am watching TV now'?", options: ["テレビを見ます。", "テレビを見ました。", "テレビを見ています。", "テレビを見ません。"], answer: "テレビを見ています。" },
        { id: "ja-lt-a2-2", level: "A2", prompt: "How do you say 'I want to go to Japan'?", options: ["日本に行きます。", "日本に行きたいです。", "日本に行きました。", "日本に行けます。"], answer: "日本に行きたいです。" },
        { id: "ja-lt-a2-3", level: "A2", prompt: "What is the te-form of 飲む (to drink)?", options: ["飲んで", "飲んた", "飲んて", "飲みて"], answer: "飲んで" },
        { id: "ja-lt-a2-4", level: "A2", prompt: "What does 'おかね' mean?", options: ["Food", "Water", "Money", "Time"], answer: "Money" },
        { id: "ja-lt-a2-5", level: "A2", prompt: "How do you say 'I can speak Japanese'?", options: ["日本語を話します。", "日本語を話したいです。", "日本語を話すことができます。", "日本語を話しています。"], answer: "日本語を話すことができます。" },
        { id: "ja-lt-a2-6", level: "A2", prompt: "Which particle marks the destination of movement?", options: ["で", "を", "が", "に"], answer: "に" },
        { id: "ja-lt-a2-7", level: "A2", prompt: "What does 'でんしゃ' mean?", options: ["Station", "Bus", "Train", "Taxi"], answer: "Train" },
        { id: "ja-lt-a2-8", level: "A2", prompt: "How do you say 'to come' (polite present)?", options: ["来ました", "来ません", "来ます", "来て"], answer: "来ます" },
        { id: "ja-lt-a2-9", level: "A2", prompt: "What does 'みぎ' mean?", options: ["Left", "Right", "Front", "Back"], answer: "Right" },
        { id: "ja-lt-a2-10", level: "A2", prompt: "How do you say 'I study at the library'?", options: ["図書館に勉強します。", "図書館で勉強します。", "図書館を勉強します。", "図書館が勉強します。"], answer: "図書館で勉強します。" },
        { id: "ja-lt-a2-11", level: "A2", prompt: "What does 'えき' mean?", options: ["School", "Restaurant", "Station", "Supermarket"], answer: "Station" },
        { id: "ja-lt-a2-12", level: "A2", prompt: "How do you say 'I write a letter'?", options: ["手紙を読みます。", "手紙を書きます。", "手紙を話します。", "手紙を見ます。"], answer: "手紙を書きます。" },
        { id: "ja-lt-a2-13", level: "A2", prompt: "What does 'りょこう' mean?", options: ["Food", "Travel / Trip", "Money", "Friend"], answer: "Travel / Trip" },
        { id: "ja-lt-a2-14", level: "A2", prompt: "How do you express 'I want to eat sushi'?", options: ["すしを食べます。", "すしを食べました。", "すしが食べたいです。", "すしを食べています。"], answer: "すしが食べたいです。" },
        { id: "ja-lt-a2-15", level: "A2", prompt: "What particle marks where an action takes place?", options: ["に", "で", "を", "が"], answer: "で" },
        { id: "ja-lt-b1-1", level: "B1", prompt: "Which form expresses 'must do'?", options: ["〜てもいい", "〜なければならない", "〜てはいけない", "〜ようになる"], answer: "〜なければならない" },
        { id: "ja-lt-b1-2", level: "B1", prompt: "What does 〜てもいい mean?", options: ["must not", "have to", "it's okay to / may", "come to be"], answer: "it's okay to / may" },
        { id: "ja-lt-b1-3", level: "B1", prompt: "What does かんきょう (環境) mean?", options: ["Society", "Health", "Environment", "Freedom"], answer: "Environment" },
        { id: "ja-lt-b1-4", level: "B1", prompt: "Which grammar pattern expresses 'I've come to be able to do X'?", options: ["〜たり〜たりする", "〜てもいい", "〜ようになる", "〜なければならない"], answer: "〜ようになる" },
        { id: "ja-lt-b1-5", level: "B1", prompt: "What does もんだい (問題) mean?", options: ["Opportunity", "Problem", "Health", "Opinion"], answer: "Problem" },
        { id: "ja-lt-b1-6", level: "B1", prompt: "How do you say 'May I take a photo?' using てもいい?", options: ["写真を撮らなければならない", "写真を撮ってもいいですか", "写真を撮ってはいけない", "写真を撮るようになった"], answer: "写真を撮ってもいいですか" },
        { id: "ja-lt-b1-7", level: "B1", prompt: "What does せいかつ (生活) mean?", options: ["Freedom", "Society", "Daily life", "Challenge"], answer: "Daily life" },
        { id: "ja-lt-b1-8", level: "B1", prompt: "The 〜たり〜たりする pattern is used to:", options: ["express prohibition", "list representative actions", "express ability", "express obligation"], answer: "list representative actions" },
        { id: "ja-lt-b1-9", level: "B1", prompt: "What does むずかしい mean?", options: ["Important", "Interesting", "Difficult", "Easy"], answer: "Difficult" },
        { id: "ja-lt-b1-10", level: "B1", prompt: "Polite past of 読む: '本を___。'", options: ["読みます", "読みました", "読んで", "読もう"], answer: "読みました" },
        { id: "ja-lt-b1-11", level: "B1", prompt: "What does たいせつ (大切) mean?", options: ["Difficult", "Important / Precious", "Interesting", "Beautiful"], answer: "Important / Precious" },
        { id: "ja-lt-b1-12", level: "B1", prompt: "Which means 'you must not sit here'?", options: ["ここに座ってもいいです", "ここに座りましょう", "ここに座ってはいけません", "ここに座るようになった"], answer: "ここに座ってはいけません" },
        { id: "ja-lt-b1-13", level: "B1", prompt: "What does いけん (意見) mean?", options: ["Problem", "Freedom", "Opinion", "Health"], answer: "Opinion" },
        { id: "ja-lt-b1-14", level: "B1", prompt: "Te-form of 使う is:", options: ["使いて", "使って", "使んで", "使えて"], answer: "使って" },
        { id: "ja-lt-b1-15", level: "B1", prompt: "What does きかい (機会) mean?", options: ["Machine", "Opportunity", "Environment", "Society"], answer: "Opportunity" },
    ]
}

export default module
