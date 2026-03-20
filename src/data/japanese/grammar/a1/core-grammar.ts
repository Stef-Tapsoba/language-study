import { GrammarLesson } from "../../../../types"

export const coreGrammarLessons: GrammarLesson[] = [
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
]
