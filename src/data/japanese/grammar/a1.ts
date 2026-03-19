import { GrammarLesson } from "../../../types"

export const a1Grammar: GrammarLesson[] = [
    {
        id: "ja-g-a1-0",
        level: "A1",
        title: "How Japanese Works — The Big Picture",
        explanation: "Japanese is built differently from European languages in four key ways. Understanding these upfront will make everything else click faster.\n\n1. THREE SCRIPTS — Japanese uses three writing systems simultaneously. Hiragana (ひらがな) is the phonetic alphabet for Japanese words and grammar. Katakana (カタカナ) is used for foreign loanwords and emphasis. Kanji (漢字) are Chinese-origin characters used for content words. A typical sentence mixes all three: 私はコーヒーを飲みます (I drink coffee) uses kanji 私/飲, hiragana は/を/ます, and katakana コーヒー.\n\n2. WORD ORDER IS SOV — the verb always comes last. 'I coffee drink.' not 'I drink coffee.' This never changes, even in questions.\n\n3. PARTICLES DO THE GRAMMAR — small hiragana characters attach to nouns to show their role. は marks the topic. を marks the object. に marks destination or time. で marks where an action happens. Because particles carry meaning, word order can shift without confusion.\n\n4. POLITENESS LEVELS — Japanese verbs change form based on social context. You will learn ます/です form (polite, formal), which is safe for all everyday situations with people you don't know well. Casual plain form comes later.",
        examples: [
            { native: "わたしはコーヒーをのみます。", romanized: "Watashi wa koohii wo nomimasu.", translation: "I drink coffee. (わたし=I, は=topic, コーヒー=coffee, を=object, のみます=drink)" },
            { native: "Subject は Object を Verb ます。", romanized: "S wa O wo V masu.", translation: "Basic SOV sentence — verb always last", speakText: "" },
            { native: "これは ほん です。", romanized: "Kore wa hon desu.", translation: "This is a book. (polite — です/ます style)" },
            { native: "どこに いきますか？", romanized: "Doko ni ikimasu ka?", translation: "Where are you going? (question word stays in place, か at the end)" },
        ]
    },
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
        explanation: `Katakana is the second of Japan's two phonetic syllabaries. It has exactly the same 46 sounds as hiragana, but different character shapes. The two scripts are interchangeable in pronunciation — only the use differs.

WHEN KATAKANA IS USED:
  • Foreign loanwords: コーヒー (koohii = coffee), テレビ (terebi = TV)
  • Foreign names and place names: アメリカ (Amerika), マリア (Maria)
  • Scientific and technical terms
  • Emphasis — like italics in English

KATAKANA CHARACTER TABLE (with hiragana equivalent):
Each row shows: katakana → hiragana → sound

ア行 (a-row):
  ア → あ (a)    イ → い (i)    ウ → う (u)    エ → え (e)    オ → お (o)

カ行 (ka-row):
  カ → か (ka)   キ → き (ki)   ク → く (ku)   ケ → け (ke)   コ → こ (ko)

サ行 (sa-row):
  サ → さ (sa)   シ → し (shi)  ス → す (su)   セ → せ (se)   ソ → そ (so)

タ行 (ta-row):
  タ → た (ta)   チ → ち (chi)  ツ → つ (tsu)  テ → て (te)   ト → と (to)

ナ行 (na-row):
  ナ → な (na)   ニ → に (ni)   ヌ → ぬ (nu)   ネ → ね (ne)   ノ → の (no)

ハ行 (ha-row):
  ハ → は (ha)   ヒ → ひ (hi)   フ → ふ (fu)   ヘ → へ (he)   ホ → ほ (ho)

マ行 (ma-row):
  マ → ま (ma)   ミ → み (mi)   ム → む (mu)   メ → め (me)   モ → も (mo)

ヤ行 (ya-row — 3 only):
  ヤ → や (ya)              ユ → ゆ (yu)              ヨ → よ (yo)

ラ行 (ra-row):
  ラ → ら (ra)   リ → り (ri)   ル → る (ru)   レ → れ (re)   ロ → ろ (ro)

ワ行 + ン:
  ワ → わ (wa)   ヲ → を (wo — object particle only)   ン → ん (n)

SPECIAL KATAKANA RULES:
ー (long vowel mark): extends the preceding vowel. Used constantly in loanwords.
  コーヒー → ko-o-hi-i → "coffee"     ビール → bi-i-ru → "beer"

Double consonants: small ッ doubles the next consonant (same as っ in hiragana).
  ベッド (beddo = bed)    サッカー (sakkaa = soccer)

Combinations for sounds not in Japanese: katakana can combine characters for
foreign sounds that don't exist in Japanese.
  ファ (fa)    ティ (ti)    ウィ (wi)    ヴ (v-sound)`,
        examples: [
            { native: "ア・イ・ウ・エ・オ → あ・い・う・え・お", romanized: "a i u e o", translation: "The ア-row — same sounds as あいうえお, different shapes", speakText: "ア、イ、ウ、エ、オ" },
            { native: "カ・キ・ク・ケ・コ → か・き・く・け・こ", romanized: "ka ki ku ke ko", translation: "The カ-row — same sounds as かきくけこ", speakText: "カ、キ、ク、ケ、コ" },
            { native: "コーヒー", romanized: "koohii", translation: "Coffee — note ー extends the vowel" },
            { native: "レストラン", romanized: "resutoran", translation: "Restaurant (from French/English)" },
            { native: "テレビ", romanized: "terebi", translation: "Television (from English 'TV')" },
            { native: "アイスクリーム", romanized: "aisu kuriimu", translation: "Ice cream — notice how English sounds are adapted" },
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
            { native: "いち、に、さん、し・よん、ご", romanized: "ichi, ni, san, shi/yon, go", translation: "One, two, three, four, five" },
            { native: "ろく、なな・しち、はち、く・きゅう、じゅう", romanized: "roku, nana/shichi, hachi, ku/kyuu, juu", translation: "Six, seven, eight, nine, ten" },
            { native: "じゅういち、じゅうに、にじゅう、さんじゅう", romanized: "juuichi, juuni, nijuu, sanjuu", translation: "Eleven, twelve, twenty, thirty" },
            { native: "ごじゅう、ろくじゅう、ななじゅう、はちじゅう、きゅうじゅう", romanized: "gojuu, rokujuu, nanajuu, hachijuu, kyuujuu", translation: "Fifty, sixty, seventy, eighty, ninety" },
            { native: "ひゃく", romanized: "hyaku", translation: "One hundred" }
        ]
    },
    {
        id: "ja-g-a1-7",
        level: "A1",
        title: "Polite Verbs: ます-form (Present / Future)",
        explanation: "Japanese verbs in polite speech use the ます (masu) form. There are three verb groups. Group 2 (ichidan/ru-verbs): verbs ending in -eru or -iru — remove る and add ます (e.g., 食べる → 食べます). Group 1 (godan/u-verbs): verbs ending in other sounds — change the final sound to its い-row equivalent and add ます (e.g., 飲む → 飲み + ます = 飲みます; 書く → 書き + ます = 書きます). Group 3 (irregular): **する → します**, **来る(くる) → 来ます(きます)**. The ます-form is used for present facts and future actions.",
        examples: [
            { native: "たべます。", romanized: "Tabemasu.", translation: "I eat. / I will eat. (たべる → たべます)" },
            { native: "のみます。", romanized: "Nomimasu.", translation: "I drink. / I will drink. (のむ → のみます)" },
            { native: "いきます。", romanized: "Ikimasu.", translation: "I go. / I will go. (いく → いきます)" },
            { native: "します。", romanized: "Shimasu.", translation: "I do. / I will do. (する → します, irregular)" },
            { native: "きます。", romanized: "Kimasu.", translation: "I come. / I will come. (くる → きます, irregular)" }
        ]
    },
    {
        id: "ja-g-a1-8",
        level: "A1",
        title: "Past Tense: ました (Polite Past)",
        explanation: "To express past actions in polite Japanese, replace ます with ました (mashita) for affirmative past, and replace ません with ませんでした (masen deshita) for negative past. This applies to all verb groups once they are in ます-form. For example: 食べます → 食べました (ate), 食べません → 食べませんでした (did not eat). The copula past is でした (deshita): 〜でした = was/were, 〜じゃありませんでした = was not.",
        examples: [
            { native: "きのう、すしをたべました。", romanized: "Kinou, sushi wo tabemashita.", translation: "Yesterday, I ate sushi." },
            { native: "がっこうにいきました。", romanized: "Gakkou ni ikimashita.", translation: "I went to school." },
            { native: "みずをのみませんでした。", romanized: "Mizu wo nomimasen deshita.", translation: "I did not drink water." },
            { native: "かれはがくせいでした。", romanized: "Kare wa gakusei deshita.", translation: "He was a student." },
            { native: "きませんでした。", romanized: "Kimasen deshita.", translation: "I did not come. / He/She did not come." }
        ]
    },
    {
        id: "ja-g-a1-9",
        level: "A1",
        title: "Negation and Questions",
        explanation: "To negate a polite verb, replace ます with ません (masen): 食べます → 食べません (don't eat). To form a question, add the particle か to the end of a sentence: 食べますか？(Do you eat?). Essential question words: 何(なに/nani) = what, どこ(doko) = where, いつ(itsu) = when, 誰(だれ/dare) = who, どれ(dore) = which one, どう(dou) = how, なぜ/どうして = why, いくら(ikura) = how much, いくつ(ikutsu) = how many. Question words typically come where the unknown information would be in the sentence.",
        examples: [
            { native: "きょうはがっこうにいきません。", romanized: "Kyou wa gakkou ni ikimasen.", translation: "Today I am not going to school." },
            { native: "おなまえはなんですか？", romanized: "Onamae wa nan desu ka?", translation: "What is your name?" },
            { native: "トイレはどこですか？", romanized: "Toire wa doko desu ka?", translation: "Where is the toilet?" },
            { native: "きょう、なにをたべましたか？", romanized: "Kyou, nani wo tabemashita ka?", translation: "What did you eat today?" },
            { native: "いつにほんにきましたか？", romanized: "Itsu Nihon ni kimashita ka?", translation: "When did you come to Japan?" }
        ]
    },
    {
        id: "ja-g-a1-10",
        level: "A1",
        title: "を Particle: Direct Object",
        explanation: "The particle を (written 'wo' but pronounced 'o') marks the direct object of an action — the thing that receives the action of the verb. It always follows the noun that is the object. In English, word order shows us what the object is; in Japanese, を does this job. を is used only with action verbs (not with adjectives or です). Examples: ご飯を食べます (eat rice), 水を飲みます (drink water), 日本語を勉強します (study Japanese), テレビを見ます (watch TV).",
        examples: [
            { native: "ごはんをたべます。", romanized: "Gohan wo tabemasu.", translation: "I eat rice/a meal. (ごはん = object, marked by を)" },
            { native: "みずをのみます。", romanized: "Mizu wo nomimasu.", translation: "I drink water." },
            { native: "にほんごをべんきょうします。", romanized: "Nihongo wo benkyou shimasu.", translation: "I study Japanese." },
            { native: "テレビをみます。", romanized: "Terebi wo mimasu.", translation: "I watch TV." },
            { native: "てがみをかきます。", romanized: "Tegami wo kakimasu.", translation: "I write a letter." }
        ]
    },
    {
        id: "ja-g-a1-11",
        level: "A1",
        title: "に Particle: Location of Existence and Destination",
        explanation: "The particle に (ni) has several core uses at A1 level. (1) Destination with movement verbs: に marks where you are going or coming to with verbs like 行く (go), 来る (come), 帰る (return). Example: 学校に行きます (go to school). (2) Location of existence: に marks where something or someone exists with verbs います (animate) and あります (inanimate). Example: 駅の前にあります (it is in front of the station). (3) Time expressions: に marks a specific point in time. Example: 三時に起きます (wake up at three o'clock). に is NOT used for general time words like 今日, 明日, 毎日.",
        examples: [
            { native: "がっこうにいきます。", romanized: "Gakkou ni ikimasu.", translation: "I go to school. (に = destination)" },
            { native: "にほんにきました。", romanized: "Nihon ni kimashita.", translation: "I came to Japan. (に = destination)" },
            { native: "さんじにおきます。", romanized: "San-ji ni okimasu.", translation: "I wake up at three o'clock. (に = time)" },
            { native: "つくえのうえにほんがあります。", romanized: "Tsukue no ue ni hon ga arimasu.", translation: "There is a book on the desk. (に = location of existence)" },
            { native: "こうえんにこどもがいます。", romanized: "Kouen ni kodomo ga imasu.", translation: "There are children at the park. (に = location of existence)" }
        ]
    },
    {
        id: "ja-g-a1-12",
        level: "A1",
        title: "で Particle: Place of Action and Means",
        explanation: "The particle で (de) marks (1) the location where an action takes place, and (2) the means or tool used to perform an action. This distinguishes it from に: に marks where something exists or where you go TO; で marks where you DO something. For means/transport: バスで来ます (come by bus), 日本語で話します (speak in Japanese), はしで食べます (eat with chopsticks). For location of action: 図書館で勉強します (study at the library), レストランで食べます (eat at the restaurant).",
        examples: [
            { native: "としょかんでべんきょうします。", romanized: "Toshokan de benkyou shimasu.", translation: "I study at the library. (で = place of action)" },
            { native: "レストランでたべました。", romanized: "Resutoran de tabemashita.", translation: "I ate at the restaurant. (で = place of action)" },
            { native: "バスできます。", romanized: "Basu de kimasu.", translation: "I come by bus. (で = means of transport)" },
            { native: "にほんごではなしてください。", romanized: "Nihongo de hanashite kudasai.", translation: "Please speak in Japanese. (で = means/language)" },
            { native: "はしでたべます。", romanized: "Hashi de tabemasu.", translation: "I eat with chopsticks. (で = tool/means)" }
        ]
    },
    {
        id: "ja-g-a1-13",
        level: "A1",
        title: "〜たい: Wanting to Do Something (A1 Bridge)",
        explanation: "To express a desire to do something ('I want to do X'), take the ます-form stem (the part before ます) and add たいです. Example: 食べます → 食べ + たいです = 食べたいです (I want to eat). This form only expresses the speaker's own first-person wants in statements. The object can take が or を — が is slightly more natural with たい. To ask what someone wants to do: 何がしたいですか？ The negative is たくないです (don't want to do). This is the last A1 unit and bridges into A2 grammar.",
        examples: [
            { native: "みずがのみたいです。", romanized: "Mizu ga nomitai desu.", translation: "I want to drink water." },
            { native: "にほんにいきたいです。", romanized: "Nihon ni ikitai desu.", translation: "I want to go to Japan." },
            { native: "すしがたべたいです。", romanized: "Sushi ga tabetai desu.", translation: "I want to eat sushi." },
            { native: "なにがしたいですか？", romanized: "Nani ga shitai desu ka?", translation: "What do you want to do?" },
            { native: "きょうはなにもしたくないです。", romanized: "Kyou wa nanimo shitakunai desu.", translation: "I don't want to do anything today." }
        ]
    },
    {
        id: "ja-g-a1-14",
        level: "A1",
        title: "Beginner Kanji: 15 Essential Characters",
        explanation: "Japanese uses kanji — characters borrowed from Chinese — alongside hiragana and katakana. You have already seen many kanji in examples. This lesson teaches 15 high-frequency kanji you will recognise from A1 content. Most kanji have two readings: kun'yomi (native Japanese reading) and on'yomi (Chinese-origin reading). Compounds usually use on'yomi; standalone words often use kun'yomi. Group 1 — Nature & objects: 日 (にち/ひ — day/sun), 水 (みず — water), 山 (やま/さん — mountain), 本 (ほん/もと — book/origin), 手 (て — hand). Group 2 — People & study: 人 (ひと/じん — person), 学 (がく — study), 生 (せい/なま — life/birth), 先 (せん — before/ahead), 語 (ご — language). Group 3 — Directions: 上 (うえ/じょう — above/up), 下 (した/か — below/down), 中 (なか/ちゅう — inside/middle). Group 4 — Size: 大 (おお/だい — big), 小 (ちい/しょう — small). Key compounds you already know: 日本 (にほん — Japan), 日本語 (にほんご — Japanese language), 日本人 (にほんじん — Japanese person), 大学 (だいがく — university), 学生 (がくせい — student), 先生 (せんせい — teacher).",
        examples: [
            { native: "日・水・山・本・手", romanized: "nichi/hi ・ mizu ・ yama/san ・ hon/moto ・ te", translation: "Sun/day, water, mountain, book/origin, hand" },
            { native: "人・学・生・先・語", romanized: "hito/jin ・ gaku ・ sei/nama ・ sen ・ go", translation: "Person, study, life/birth, before, language" },
            { native: "上・下・中・大・小", romanized: "ue/jou ・ shita/ka ・ naka/chuu ・ oo/dai ・ chii/shou", translation: "Above, below, middle, big, small" },
            { native: "日本・日本語・日本人", romanized: "Nihon ・ Nihongo ・ Nihonjin", translation: "Japan, Japanese language, Japanese person" },
            { native: "大学・学生・先生", romanized: "daigaku ・ gakusei ・ sensei", translation: "University, student, teacher" }
        ]
    },
    {
        id: "ja-g-a1-15",
        level: "A1",
        title: "Likes & Dislikes: 好き / 嫌い",
        explanation: `好き (suki) and 嫌い (kirai) express liking and disliking in Japanese. They are na-adjectives — they use な when placed before a noun, and they follow the XはYが好きです pattern.

STRUCTURE:
  [Person] は [Thing] が 好き です。= [Person] likes [Thing].
  [Person] は [Thing] が 嫌い です。= [Person] dislikes [Thing].

KEY POINT — が not を:
Japanese uses が (not を) to mark the thing you like. This is different from English where "like" takes a direct object. Don't say ×コーヒーを好きです — say ○コーヒーが好きです.

DEGREES:
  大好き (daisuki) = love / really like
  好き (suki) = like
  あまり好きじゃない (amari suki ja nai) = don't really like
  嫌い (kirai) = dislike
  大嫌い (daikirai) = really dislike / hate

QUESTIONS:
  〜が好きですか？ = Do you like ~?
  どんな〜が好きですか？ = What kind of ~ do you like?

NOTE: 好き and 嫌い can also describe activities when followed by の or combined with verb nominalisation — but at A1, just use them with nouns.`,
        examples: [
            { native: "コーヒーがすきです。", romanized: "Koohii ga suki desu.", translation: "I like coffee. (が marks the thing liked)" },
            { native: "さかながきらいです。", romanized: "Sakana ga kirai desu.", translation: "I dislike fish." },
            { native: "すしがだいすきです！", romanized: "Sushi ga daisuki desu!", translation: "I love sushi!" },
            { native: "やさいはあまりすきじゃないです。", romanized: "Yasai wa amari suki ja nai desu.", translation: "I don't really like vegetables." },
            { native: "どんなおんがくがすきですか？", romanized: "Donna ongaku ga suki desu ka?", translation: "What kind of music do you like?" },
            { native: "スポーツがすきですか？", romanized: "Supootsu ga suki desu ka?", translation: "Do you like sport?" },
            { native: "にほんごのべんきょうがすきです。", romanized: "Nihongo no benkyou ga suki desu.", translation: "I like studying Japanese." },
        ]
    },
    {
        id: "ja-g-a1-16",
        level: "A1",
        title: "Counters: Counting Things in Japanese",
        explanation: `In Japanese, you cannot simply say 'two cats' or 'three cups'. You must use a counter word that matches the type of object. This is one of the most distinctive features of Japanese grammar.

STRUCTURE: Number + Counter + の + Noun (or just Number + Counter before a verb)
  りんごが三つあります。 (There are three apples.)
  コーヒーを一杯ください。(One cup of coffee, please.)

THE FIVE ESSENTIAL A1 COUNTERS:

つ — generic objects (1–9, native Japanese numbers only):
  ひとつ(1) ふたつ(2) みっつ(3) よっつ(4) いつつ(5)
  むっつ(6) ななつ(7) やっつ(8) ここのつ(9)
  Use this when you don't know the right counter — it works for most physical objects.
  りんごを三つ食べました。(I ate three apples.)

人(にん) — people:
  一人(ひとり/hitori) 二人(ふたり/futari) 三人(さんにん) 四人(よにん)...
  Note: 1 and 2 people use native Japanese readings (hitori, futari), not Sino-Japanese.
  家族は四人です。(My family has four people.)

本(ほん) — long thin things (bottles, pens, trees, trains, phone calls):
  一本(いっぽん) 二本(にほん) 三本(さんぼん)
  水を一本ください。(One bottle of water, please.)

枚(まい) — flat thin things (paper, tickets, plates, shirts, photographs):
  一枚(いちまい) 二枚(にまい) 三枚(さんまい)
  チケットを二枚ください。(Two tickets, please.)

杯(はい) — cups and glasses of liquid:
  一杯(いっぱい) 二杯(にはい) 三杯(さんばい)
  コーヒーを一杯飲みました。(I drank one cup of coffee.)

SAFE FALLBACK: When unsure, use つ for objects and 人 for people. Native speakers will understand even if it's not perfect.`,
        examples: [
            { native: "りんごがみっつあります。", romanized: "Ringo ga mittsu arimasu.", translation: "There are three apples. (つ = generic objects)" },
            { native: "かぞくはよにんです。", romanized: "Kazoku wa yo-nin desu.", translation: "My family has four people. (人 = people)" },
            { native: "みずをいっぽんください。", romanized: "Mizu wo ippon kudasai.", translation: "One bottle of water, please. (本 = long thin objects)" },
            { native: "チケットをにまいください。", romanized: "Chiketto wo ni-mai kudasai.", translation: "Two tickets, please. (枚 = flat thin objects)" },
            { native: "コーヒーをいっぱいのみました。", romanized: "Koohii wo ippai nomimashita.", translation: "I drank a cup of coffee. (杯 = cups/glasses)" },
        ]
    },
    {
        id: "ja-g-a1-17",
        level: "A1",
        title: "が vs は — Subject vs Topic",
        explanation: `The difference between は (topic) and が (subject) is one of the most confusing things in Japanese for beginners. Both can appear where English uses the subject, but they carry different meaning.

は (WA) — THE TOPIC PARTICLE
は marks what the sentence is about — the topic. It can introduce something already known, set up a contrast, or signal 'as for X...'.
  わたしは がくせいです。(I am a student.) — 'As for me, I am a student.'
  きょうは さむいです。(Today is cold.) — 'As for today, it's cold.'
  は can also imply contrast: コーヒーは すきです。(I like coffee [but maybe not tea].)

が (GA) — THE SUBJECT PARTICLE
が marks the grammatical subject — the new information, the focus, or the answer to a 'who/what' question.
  だれが きましたか？ → たなかさんが きました。(Who came? → Tanaka came.) — が identifies who.
  なにが おいしいですか？ → すしが おいしいです。(What is delicious? → Sushi is delicious.)
  が is used after question words and to answer them.

PREFERENCE AND ABILITY — が is always used with these patterns:
  〜が すきです (like) / 〜が きらいです (dislike)
  〜が わかります (understand) / 〜が できます (can do)
  コーヒーが すきです。(I like coffee.) — always が, never を or は here.

QUICK GUIDE:
  は → this is what we're talking about (topic, contrast, known info)
  が → this is WHO or WHAT (new info, answering a question, focus)
  Both can translate to English 'I/he/she/it' — context decides which to use.

AT A1: When in doubt, use は for general statements. Use が when answering 'who?' or 'what?', and always use が with すき/きらい/わかる.`,
        examples: [
            { native: "わたしは がくせいです。", romanized: "Watashi wa gakusei desu.", translation: "I am a student. (は = topic, general statement)" },
            { native: "だれが きましたか？ → たなかさんが きました。", romanized: "Dare ga kimashita ka? → Tanaka-san ga kimashita.", translation: "Who came? → Tanaka came. (が = answers 'who')", speakText: "だれが きましたか？ たなかさんが きました。" },
            { native: "コーヒーが すきです。", romanized: "Koohii ga suki desu.", translation: "I like coffee. (が always used with すき)" },
            { native: "きょうは さむいですが、あしたは あついです。", romanized: "Kyou wa samui desu ga, ashita wa atsui desu.", translation: "Today is cold, but tomorrow is hot. (は for contrast)" },
            { native: "なにが おいしいですか？", romanized: "Nani ga oishii desu ka?", translation: "What is delicious? (が with question word)" },
        ]
    },
    {
        id: "ja-g-a1-18",
        level: "A1",
        title: "Demonstratives: これ / それ / あれ",
        explanation: `Japanese has three distance levels for demonstratives — not two like English.

これ  this (near the speaker)
それ  that (near the listener)
あれ  that (far from both)

These are standalone pronouns. Add の + noun, or use shorter forms:
  この + noun  →  この本  (this book)
  その + noun  →  その人  (that person)
  あの + noun  →  あの店  (that shop over there)

PLACE WORDS (where):
  ここ   here (near speaker)
  そこ   there (near listener)
  あそこ  over there (far from both)

QUESTION FORMS (which / which one / where):
  どれ   which one? (standalone)
  どの + noun  →  どの本?  (which book?)
  どこ   where?  (you already know this from negation/question unit)

ASKING:
  これは なんですか？   What is this?
  それは いくらですか？  How much is that?
  あれは だれですか？   Who is that (over there)?

SHORTHAND: Japanese speakers often shorten:
  これ → こちら (more polite form, also used for directions/people)`,
        examples: [
            { native: "これは なんですか？", romanized: "Kore wa nan desu ka?", translation: "What is this?" },
            { native: "その ほんは おもしろいです。", romanized: "Sono hon wa omoshiroi desu.", translation: "That book is interesting." },
            { native: "あれは だれですか？", romanized: "Are wa dare desu ka?", translation: "Who is that (over there)?" },
            { native: "どれが あなたのですか？", romanized: "Dore ga anata no desu ka?", translation: "Which one is yours?" },
            { native: "あそこに ゆうびんきょくが あります。", romanized: "Asoko ni yuubinkyoku ga arimasu.", translation: "There is a post office over there." },
        ]
    },
    {
        id: "ja-g-a1-19",
        level: "A1",
        title: "の Particle: Possession & Connection",
        explanation: `の connects two nouns. The first noun describes or owns the second.

POSSESSION:
  わたしの本       my book
  たなかさんの かばん  Tanaka's bag
  先生の じむしょ    the teacher's office

DESCRIPTION / CATEGORY:
  日本語の せんせい   Japanese language teacher  (teacher of Japanese)
  東京の えき       Tokyo station              (station of Tokyo)
  英語の じゅぎょう   English class

KEY RULE: の links nouns only. The pattern is always X の Y = Y of X.
  にほん の たべもの   Japanese food (food of Japan)
  がっこう の ともだち  school friend (friend from school)

ASKING WHOSE:
  これは だれの かばんですか？   Whose bag is this?
  → わたしの かばんです。       It's my bag.
  → わたしのです。              It's mine. (の can stand alone)

NOTE: の as a sentence-final softener (female/gentle speech) is A2+ — focus on possession here.`,
        examples: [
            { native: "これは わたしの です。", romanized: "Kore wa watashi no desu.", translation: "This is mine." },
            { native: "たなかさんの かばんは どこですか？", romanized: "Tanaka-san no kaban wa doko desu ka?", translation: "Where is Tanaka's bag?" },
            { native: "にほんごの じゅぎょうは たのしいです。", romanized: "Nihongo no jugyou wa tanoshii desu.", translation: "Japanese class is fun." },
            { native: "これは だれの ですか？", romanized: "Kore wa dare no desu ka?", translation: "Whose is this?" },
            { native: "とうきょうの えきは おおきいです。", romanized: "Tokyo no eki wa ookii desu.", translation: "Tokyo station is big." },
        ]
    },
    {
        id: "ja-g-a1-20",
        level: "A1",
        title: "い-adjective Conjugation",
        explanation: `い-adjectives end in い. They conjugate directly — no helper needed.

FORMS (using おおきい — big):
  Present affirmative:  おおきいです。     It is big.
  Present negative:     おおきくないです。  It is not big.  (drop い → く + ない)
  Past affirmative:     おおきかったです。  It was big.     (drop い → かった)
  Past negative:        おおきくなかったです。  It was not big.

ATTRIBUTIVE (before a noun — no change to い):
  おおきい いぬ    a big dog
  おいしい たべもの  delicious food

EXCEPTION — いい (good):
  Positive:  いいです        (is good)
  Negative:  よくないです     (NOT いくないです ✗)
  Past:      よかったです     (NOT いかったです ✗)
  Past neg:  よくなかったです

COMMON い-adjectives:
  おいしい (delicious)  たかい (expensive/tall)  やすい (cheap)
  おおきい (big)        ちいさい (small)          あたらしい (new)
  ふるい (old)          たのしい (fun)            むずかしい (difficult)
  おもしろい (interesting)  さむい (cold)         あつい (hot)`,
        examples: [
            { native: "この りんごは おいしいです。", romanized: "Kono ringo wa oishii desu.", translation: "This apple is delicious." },
            { native: "あの えいがは おもしろくないです。", romanized: "Ano eiga wa omoshirokunai desu.", translation: "That movie is not interesting." },
            { native: "きのう さむかったです。", romanized: "Kinou samukatta desu.", translation: "It was cold yesterday." },
            { native: "このホテルは よくなかったです。", romanized: "Kono hoteru wa yokunakatta desu.", translation: "This hotel was not good." },
            { native: "おいしい すしを たべました。", romanized: "Oishii sushi wo tabemashita.", translation: "I ate delicious sushi. (attributive — い unchanged)" },
        ]
    },
    {
        id: "ja-g-a1-21",
        level: "A1",
        title: "な-adjective Conjugation",
        explanation: `な-adjectives behave like nouns with です. They do NOT end in い (or end in い but aren't conjugated like い-adj).

FORMS (using しずか — quiet):
  Present affirmative:  しずかです。          It is quiet.
  Present negative:     しずかじゃないです。   It is not quiet.  (also: しずかではないです)
  Past affirmative:     しずかでした。         It was quiet.
  Past negative:        しずかじゃなかったです。 It was not quiet.

ATTRIBUTIVE — add な before the noun:
  しずかな まち    a quiet town
  きれいな はな    beautiful flowers
  NOTE: In the predicate (after は) no な needed: この まちは しずかです。

COMMON な-adjectives:
  きれい (beautiful/clean)   しずか (quiet)    にぎやか (lively/bustling)
  べんり (convenient)         ゆうめい (famous)  すき (liked/favourite)
  きらい (disliked)           げんき (healthy/energetic)  ひま (free/bored)
  たいへん (hard/tough)       へた (bad at)     じょうず (good at)

CAREFUL — すき and きらい are な-adjectives, used with が:
  すしが すきです。  I like sushi. (not: すしを すきです ✗)`,
        examples: [
            { native: "この こうえんは しずかです。", romanized: "Kono kouen wa shizuka desu.", translation: "This park is quiet." },
            { native: "あの まちは にぎやかじゃないです。", romanized: "Ano machi wa nigiyaka ja nai desu.", translation: "That town is not lively." },
            { native: "きれいな はなですね。", romanized: "Kirei na hana desu ne.", translation: "What beautiful flowers, aren't they! (attributive な)" },
            { native: "えきは べんりでした。", romanized: "Eki wa benri deshita.", translation: "The station was convenient." },
            { native: "ピアノが じょうずです。", romanized: "Piano ga jouzu desu.", translation: "You are good at piano. (じょうず takes が)" },
        ]
    },
    {
        id: "ja-g-a1-22",
        level: "A1",
        title: "Adverbs of Time",
        explanation: `Time expressions in Japanese usually go at the START of the sentence or just before the verb — they are very flexible.

TIME ANCHORS:
  今日 (きょう)    today
  昨日 (きのう)    yesterday
  明日 (あした)    tomorrow
  今週 (こんしゅう)  this week
  先週 (せんしゅう)  last week
  来週 (らいしゅう)  next week

NOW / RELATIVE:
  今 (いま)     now
  もう          already / soon (+ affirmative: もう食べました — already ate)
                or not yet in questions: もうたべましたか？
  まだ          still / not yet (+ negative: まだたべていません — haven't eaten yet)
                or still continuing: まだいます — still here

NOTE: もう vs まだ
  もう〜ました    already did    (もう食べました。 — already ate)
  まだ〜ません   not yet        (まだ食べません。 — not eating yet / haven't eaten yet)

SPEED / ORDER:
  はやく         quickly / early
  ゆっくり        slowly / leisurely
  はじめに        first (in a sequence)
  つぎに          next
  さいごに        finally / last
  あとで          later`,
        examples: [
            { native: "きょうは いそがしいです。", romanized: "Kyou wa isogashii desu.", translation: "I am busy today." },
            { native: "きのう ともだちに あいました。", romanized: "Kinou tomodachi ni aimashita.", translation: "I met a friend yesterday." },
            { native: "もう たべました。", romanized: "Mou tabemashita.", translation: "I already ate." },
            { native: "まだ たべていません。", romanized: "Mada tabete imasen.", translation: "I haven't eaten yet." },
            { native: "ゆっくり はなしてください。", romanized: "Yukkuri hanashite kudasai.", translation: "Please speak slowly." },
            { native: "はじめに てを あらいます。", romanized: "Hajime ni te wo araimasu.", translation: "First I wash my hands." },
        ]
    },
    {
        id: "ja-g-a1-23",
        level: "A1",
        title: "Frequency Adverbs",
        explanation: `Use these adverbs to say how often something happens.

FREQUENCY SCALE (high → low):
  いつも         always
  よく           often
  ときどき        sometimes
  あまり (+ neg)  not much / not very often
  ぜんぜん (+ neg)  not at all / never

IMPORTANT: あまり and ぜんぜん REQUIRE a negative verb:
  あまり たべません。     I don't eat much.      ✓
  あまり たべます。       ✗ (grammatically wrong)
  ぜんぜん わかりません。  I don't understand at all. ✓
  ぜんぜん わかります。   ✗

POSITION: Frequency adverbs come before the verb, or at the start of the sentence:
  わたしは いつも あさごはんを たべます。  I always eat breakfast.
  ときどき えいがを みます。               I sometimes watch films.
  ぜんぜん わかりません。                 I don't understand at all.

DEGREE ADVERBS (bonus — used with adjectives and adverbs):
  とても          very          とても おいしいです。  very delicious
  すごく          really / super すごく さむいです。   really cold
  ちょっと        a little       ちょっと むずかしいです。  a little difficult`,
        examples: [
            { native: "わたしは いつも コーヒーを のみます。", romanized: "Watashi wa itsumo koohii wo nomimasu.", translation: "I always drink coffee." },
            { native: "ときどき えいがを みます。", romanized: "Tokidoki eiga wo mimasu.", translation: "I sometimes watch movies." },
            { native: "あまり にくを たべません。", romanized: "Amari niku wo tabemasen.", translation: "I don't eat much meat." },
            { native: "ぜんぜん わかりません。", romanized: "Zenzen wakarimasen.", translation: "I don't understand at all." },
            { native: "この えいがは とても おもしろいです。", romanized: "Kono eiga wa totemo omoshiroi desu.", translation: "This movie is very interesting." },
        ]
    },
    {
        id: "ja-g-a1-24",
        level: "A1",
        title: "Discourse Connectors",
        explanation: `These words connect separate sentences. They go at the START of a new sentence.

ADDING:
  そして          and / and then
  それから        and then / after that (stronger sequence)
  また            also / again

CONTRASTING:
  でも            but / however (casual, very common)
  しかし          but / however (more formal)
  でも is far more common in everyday speech.

CAUSE / RESULT:
  だから          so / therefore (consequence)
  それで          so / and as a result (softer cause-effect)

TOPIC SHIFT:
  ところで        by the way
  じつは          actually (introducing something the listener might not know)

SEQUENCE (in lists / routines):
  まず            first of all
  つぎに          next
  それから        then / after that
  さいごに        finally

EXAMPLE SEQUENCE:
  まず、てを あらいます。        First, I wash my hands.
  つぎに、りょうりを します。    Next, I cook.
  さいごに、たべます。           Finally, I eat.`,
        examples: [
            { native: "わたしは がくせいです。そして、アルバイトも しています。", romanized: "Watashi wa gakusei desu. Soshite, arubaito mo shite imasu.", translation: "I am a student. And I also work part-time." },
            { native: "たかいです。でも、おいしいです。", romanized: "Takai desu. Demo, oishii desu.", translation: "It's expensive. But it's delicious." },
            { native: "あめが ふりました。だから、いえに いました。", romanized: "Ame ga furimashita. Dakara, ie ni imashita.", translation: "It rained. So I stayed home." },
            { native: "まず てを あらいます。それから たべます。", romanized: "Mazu te wo araimasu. Sorekara tabemasu.", translation: "First I wash my hands. Then I eat." },
            { native: "じつは、にほんごが すきです。", romanized: "Jitsu wa, nihongo ga suki desu.", translation: "Actually, I like Japanese." },
        ]
    },
]
