import { GrammarLesson } from "../../../types"

export const a1Grammar: GrammarLesson[] = [
    {
        id: "ja-g-a1-1",
        level: "A1",
        title: "Hiragana Part 1: あ-row through な-row",
        explanation: "Hiragana is one of Japan's two phonetic syllabaries, with 46 base characters. Each character represents a syllable. Part 1 covers the first five rows: あ-row (a, i, u, e, o), か-row (ka, ki, ku, ke, ko), さ-row (sa, shi, su, se, so), た-row (ta, chi, tsu, te, to), and な-row (na, ni, nu, ne, no). Mastering these 25 characters gives you the foundation for reading and writing basic Japanese. Note special sounds: し = shi (not si), ち = chi (not ti), つ = tsu (not tu).",
        examples: [
            { native: "あいうえお", romanized: "a i u e o", translation: "The five vowels (あ-row)" },
            { native: "かきくけこ", romanized: "ka ki ku ke ko", translation: "The か-row (k sounds)" },
            { native: "さしすせそ", romanized: "sa shi su se so", translation: "The さ-row (s sounds — note: し = shi)" },
            { native: "たちつてと", romanized: "ta chi tsu te to", translation: "The た-row (t sounds — note: ち = chi, つ = tsu)" },
            { native: "なにぬねの", romanized: "na ni nu ne no", translation: "The な-row (n sounds)" }
        ]
    },
    {
        id: "ja-g-a1-2",
        level: "A1",
        title: "Hiragana Part 2: は-row through わ-row + ん",
        explanation: "Part 2 completes the hiragana syllabary with the remaining rows: は-row (ha, hi, fu, he, ho), ま-row (ma, mi, mu, me, mo), や-row (ya, yu, yo), ら-row (ra, ri, ru, re, ro), わ-row (wa, wo), and the nasal ん (n). Special note: は is pronounced 'wa' when used as a topic particle; を is pronounced 'o' and used only as the object particle. ふ = fu (not hu). After learning all 46 characters, you can read almost any Japanese text written in hiragana.",
        examples: [
            { native: "はひふへほ", romanized: "ha hi fu he ho", translation: "The は-row (h sounds — note: ふ = fu)" },
            { native: "まみむめも", romanized: "ma mi mu me mo", translation: "The ま-row (m sounds)" },
            { native: "やゆよ", romanized: "ya yu yo", translation: "The や-row (y sounds — only 3 characters)" },
            { native: "らりるれろ", romanized: "ra ri ru re ro", translation: "The ら-row (r sounds — a soft r/l sound)" },
            { native: "わをん", romanized: "wa wo n", translation: "わ (wa), を (wo/o — object particle), ん (n — syllabic nasal)" }
        ]
    },
    {
        id: "ja-g-a1-3",
        level: "A1",
        title: "Katakana: ア-row through ン",
        explanation: "Katakana is the second Japanese syllabary, with the same 46 sounds as hiragana but different character shapes. Katakana is used primarily for foreign loanwords, foreign names, scientific terms, and emphasis (like italics). The rows follow the same structure as hiragana: ア-row (a, i, u, e, o), カ-row (ka, ki, ku, ke, ko), サ-row (sa, shi, su, se, so), タ-row (ta, chi, tsu, te, to), ナ-row (na, ni, nu, ne, no), ハ-row (ha, hi, fu, he, ho), マ-row (ma, mi, mu, me, mo), ヤ-row (ya, yu, yo), ラ-row (ra, ri, ru, re, ro), ワ-row (wa, wo), and ン (n). Loanwords often use a long vowel mark ー (e.g., コーヒー = koohii = coffee).",
        examples: [
            { native: "コーヒー", romanized: "koohii", translation: "Coffee (loanword from English, written in katakana)" },
            { native: "レストラン", romanized: "resutoran", translation: "Restaurant (loanword from French/English)" },
            { native: "アイスクリーム", romanized: "aisu kuriimu", translation: "Ice cream (loanword from English)" },
            { native: "テレビ", romanized: "terebi", translation: "Television / TV (loanword from English)" },
            { native: "スマートフォン", romanized: "sumaato fon", translation: "Smartphone (loanword from English)" }
        ]
    },
    {
        id: "ja-g-a1-4",
        level: "A1",
        title: "Basic Sentence Structure: X は Y です",
        explanation: "Japanese sentences generally follow Subject-Object-Verb order, but the most basic pattern uses the topic particle は (wa) and the polite copula です (desu). The pattern 'X は Y です' means 'X is Y'. は marks the topic of the sentence — what you are talking about. です is the polite form of 'to be' and comes at the end. To make it negative, use じゃありません or ではありません (is not). To make a question, add the question particle か at the end.",
        examples: [
            { native: "わたしは がくせい です。", romanized: "Watashi wa gakusei desu.", translation: "I am a student." },
            { native: "これは ほん です。", romanized: "Kore wa hon desu.", translation: "This is a book." },
            { native: "かれは にほんじん です。", romanized: "Kare wa nihonjin desu.", translation: "He is Japanese." },
            { native: "あなたは せんせい ですか？", romanized: "Anata wa sensei desu ka?", translation: "Are you a teacher?" },
            { native: "これは ほん じゃありません。", romanized: "Kore wa hon ja arimasen.", translation: "This is not a book." }
        ]
    },
    {
        id: "ja-g-a1-5",
        level: "A1",
        title: "Greetings and Basic Expressions",
        explanation: "Japanese has different levels of politeness. These are the standard polite greetings used in everyday situations. おはようございます (ohayou gozaimasu) is the formal 'good morning'; the casual version is just おはよう. こんにちは (konnichiwa) is used during the daytime. こんばんは (konbanwa) is for evening. ありがとうございます (arigatou gozaimasu) is the formal 'thank you'; the casual is ありがとう. すみません (sumimasen) means both 'excuse me' and 'I'm sorry'. はじめまして (hajimemashite) is said when meeting someone for the first time, followed by よろしくおねがいします (yoroshiku onegaishimasu), roughly 'please treat me well'.",
        examples: [
            { native: "おはようございます。", romanized: "Ohayou gozaimasu.", translation: "Good morning. (formal)" },
            { native: "こんにちは。", romanized: "Konnichiwa.", translation: "Hello / Good afternoon." },
            { native: "こんばんは。", romanized: "Konbanwa.", translation: "Good evening." },
            { native: "ありがとうございます。", romanized: "Arigatou gozaimasu.", translation: "Thank you very much." },
            { native: "はじめまして。よろしくおねがいします。", romanized: "Hajimemashite. Yoroshiku onegaishimasu.", translation: "Nice to meet you. Please be kind to me." }
        ]
    },
    {
        id: "ja-g-a1-6",
        level: "A1",
        title: "Numbers 1–100",
        explanation: "Japanese uses Sino-Japanese (Chinese-origin) numbers for most counting. The basic numbers are: 一(ichi/1), 二(ni/2), 三(san/3), 四(shi or yon/4), 五(go/5), 六(roku/6), 七(nana or shichi/7), 八(hachi/8), 九(ku or kyuu/9), 十(juu/10). Compound numbers are formed by combining: 十一(juuichi/11), 二十(nijuu/20), 三十(sanjuu/30), and so on. 百(hyaku) = 100. Note: 四 is often read as 'yon' and 七 as 'nana' to avoid confusion with 死(death) and other words.",
        examples: [
            { native: "一、二、三、四、五", romanized: "ichi, ni, san, shi/yon, go", translation: "One, two, three, four, five" },
            { native: "六、七、八、九、十", romanized: "roku, nana/shichi, hachi, ku/kyuu, juu", translation: "Six, seven, eight, nine, ten" },
            { native: "十一、十二、二十、三十", romanized: "juuichi, juuni, nijuu, sanjuu", translation: "Eleven, twelve, twenty, thirty" },
            { native: "五十、六十、七十、八十、九十", romanized: "gojuu, rokujuu, nanajuu, hachijuu, kyuujuu", translation: "Fifty, sixty, seventy, eighty, ninety" },
            { native: "百", romanized: "hyaku", translation: "One hundred" }
        ]
    },
    {
        id: "ja-g-a1-7",
        level: "A1",
        title: "Polite Verbs: ます-form (Present / Future)",
        explanation: "Japanese verbs in polite speech use the ます (masu) form. There are three verb groups. Group 2 (ichidan/ru-verbs): verbs ending in -eru or -iru — remove る and add ます (e.g., 食べる → 食べます). Group 1 (godan/u-verbs): verbs ending in other sounds — change the final sound to its い-row equivalent and add ます (e.g., 飲む → 飲み + ます = 飲みます; 書く → 書き + ます = 書きます). Group 3 (irregular): する → します, 来る(くる) → 来ます(きます). The ます-form is used for present facts and future actions.",
        examples: [
            { native: "食べます。", romanized: "Tabemasu.", translation: "I eat. / I will eat. (食べる → 食べます)" },
            { native: "飲みます。", romanized: "Nomimasu.", translation: "I drink. / I will drink. (飲む → 飲みます)" },
            { native: "行きます。", romanized: "Ikimasu.", translation: "I go. / I will go. (行く → 行きます)" },
            { native: "します。", romanized: "Shimasu.", translation: "I do. / I will do. (する → します, irregular)" },
            { native: "来ます。", romanized: "Kimasu.", translation: "I come. / I will come. (来る → 来ます, irregular)" }
        ]
    },
    {
        id: "ja-g-a1-8",
        level: "A1",
        title: "Past Tense: ました (Polite Past)",
        explanation: "To express past actions in polite Japanese, replace ます with ました (mashita) for affirmative past, and replace ません with ませんでした (masen deshita) for negative past. This applies to all verb groups once they are in ます-form. For example: 食べます → 食べました (ate), 食べません → 食べませんでした (did not eat). The copula past is でした (deshita): 〜でした = was/were, 〜じゃありませんでした = was not.",
        examples: [
            { native: "昨日、すしを食べました。", romanized: "Kinou, sushi wo tabemashita.", translation: "Yesterday, I ate sushi." },
            { native: "学校に行きました。", romanized: "Gakkou ni ikimashita.", translation: "I went to school." },
            { native: "水を飲みませんでした。", romanized: "Mizu wo nomimasen deshita.", translation: "I did not drink water." },
            { native: "彼は学生でした。", romanized: "Kare wa gakusei deshita.", translation: "He was a student." },
            { native: "来ませんでした。", romanized: "Kimasen deshita.", translation: "I did not come. / He/She did not come." }
        ]
    },
    {
        id: "ja-g-a1-9",
        level: "A1",
        title: "Negation and Questions",
        explanation: "To negate a polite verb, replace ます with ません (masen): 食べます → 食べません (don't eat). To form a question, add the particle か to the end of a sentence: 食べますか？(Do you eat?). Essential question words: 何(なに/nani) = what, どこ(doko) = where, いつ(itsu) = when, 誰(だれ/dare) = who, どれ(dore) = which one, どう(dou) = how, なぜ/どうして = why, いくら(ikura) = how much, いくつ(ikutsu) = how many. Question words typically come where the unknown information would be in the sentence.",
        examples: [
            { native: "今日は学校に行きません。", romanized: "Kyou wa gakkou ni ikimasen.", translation: "Today I am not going to school." },
            { native: "お名前は何ですか？", romanized: "Onamae wa nan desu ka?", translation: "What is your name?" },
            { native: "トイレはどこですか？", romanized: "Toire wa doko desu ka?", translation: "Where is the toilet?" },
            { native: "今日、何を食べましたか？", romanized: "Kyou, nani wo tabemashita ka?", translation: "What did you eat today?" },
            { native: "いつ日本に来ましたか？", romanized: "Itsu Nihon ni kimashita ka?", translation: "When did you come to Japan?" }
        ]
    },
    {
        id: "ja-g-a1-10",
        level: "A1",
        title: "を Particle: Direct Object",
        explanation: "The particle を (written 'wo' but pronounced 'o') marks the direct object of an action — the thing that receives the action of the verb. It always follows the noun that is the object. In English, word order shows us what the object is; in Japanese, を does this job. を is used only with action verbs (not with adjectives or です). Examples: ご飯を食べます (eat rice), 水を飲みます (drink water), 日本語を勉強します (study Japanese), テレビを見ます (watch TV).",
        examples: [
            { native: "ご飯を食べます。", romanized: "Gohan wo tabemasu.", translation: "I eat rice/a meal. (ご飯 = object, marked by を)" },
            { native: "水を飲みます。", romanized: "Mizu wo nomimasu.", translation: "I drink water." },
            { native: "日本語を勉強します。", romanized: "Nihongo wo benkyou shimasu.", translation: "I study Japanese." },
            { native: "テレビを見ます。", romanized: "Terebi wo mimasu.", translation: "I watch TV." },
            { native: "手紙を書きます。", romanized: "Tegami wo kakimasu.", translation: "I write a letter." }
        ]
    },
    {
        id: "ja-g-a1-11",
        level: "A1",
        title: "に Particle: Location of Existence and Destination",
        explanation: "The particle に (ni) has several core uses at A1 level. (1) Destination with movement verbs: に marks where you are going or coming to with verbs like 行く (go), 来る (come), 帰る (return). Example: 学校に行きます (go to school). (2) Location of existence: に marks where something or someone exists with verbs います (animate) and あります (inanimate). Example: 駅の前にあります (it is in front of the station). (3) Time expressions: に marks a specific point in time. Example: 三時に起きます (wake up at three o'clock). に is NOT used for general time words like 今日, 明日, 毎日.",
        examples: [
            { native: "学校に行きます。", romanized: "Gakkou ni ikimasu.", translation: "I go to school. (に = destination)" },
            { native: "日本に来ました。", romanized: "Nihon ni kimashita.", translation: "I came to Japan. (に = destination)" },
            { native: "三時に起きます。", romanized: "San-ji ni okimasu.", translation: "I wake up at three o'clock. (に = time)" },
            { native: "机の上に本があります。", romanized: "Tsukue no ue ni hon ga arimasu.", translation: "There is a book on the desk. (に = location of existence)" },
            { native: "公園に子供がいます。", romanized: "Kouen ni kodomo ga imasu.", translation: "There are children at the park. (に = location of existence)" }
        ]
    },
    {
        id: "ja-g-a1-12",
        level: "A1",
        title: "で Particle: Place of Action and Means",
        explanation: "The particle で (de) marks (1) the location where an action takes place, and (2) the means or tool used to perform an action. This distinguishes it from に: に marks where something exists or where you go TO; で marks where you DO something. For means/transport: バスで来ます (come by bus), 日本語で話します (speak in Japanese), はしで食べます (eat with chopsticks). For location of action: 図書館で勉強します (study at the library), レストランで食べます (eat at the restaurant).",
        examples: [
            { native: "図書館で勉強します。", romanized: "Toshokan de benkyou shimasu.", translation: "I study at the library. (で = place of action)" },
            { native: "レストランで食べました。", romanized: "Resutoran de tabemashita.", translation: "I ate at the restaurant. (で = place of action)" },
            { native: "バスで来ます。", romanized: "Basu de kimasu.", translation: "I come by bus. (で = means of transport)" },
            { native: "日本語で話してください。", romanized: "Nihongo de hanashite kudasai.", translation: "Please speak in Japanese. (で = means/language)" },
            { native: "はしで食べます。", romanized: "Hashi de tabemasu.", translation: "I eat with chopsticks. (で = tool/means)" }
        ]
    },
    {
        id: "ja-g-a1-13",
        level: "A1",
        title: "〜たい: Wanting to Do Something (A1 Bridge)",
        explanation: "To express a desire to do something ('I want to do X'), take the ます-form stem (the part before ます) and add たいです. Example: 食べます → 食べ + たいです = 食べたいです (I want to eat). This form only expresses the speaker's own first-person wants in statements. The object can take が or を — が is slightly more natural with たい. To ask what someone wants to do: 何がしたいですか？ The negative is たくないです (don't want to do). This is the last A1 unit and bridges into A2 grammar.",
        examples: [
            { native: "水が飲みたいです。", romanized: "Mizu ga nomitai desu.", translation: "I want to drink water." },
            { native: "日本に行きたいです。", romanized: "Nihon ni ikitai desu.", translation: "I want to go to Japan." },
            { native: "すしが食べたいです。", romanized: "Sushi ga tabetai desu.", translation: "I want to eat sushi." },
            { native: "何がしたいですか？", romanized: "Nani ga shitai desu ka?", translation: "What do you want to do?" },
            { native: "今日は何もしたくないです。", romanized: "Kyou wa nanimo shitakunai desu.", translation: "I don't want to do anything today." }
        ]
    }
]
