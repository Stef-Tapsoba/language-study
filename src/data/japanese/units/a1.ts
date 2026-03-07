import { LessonUnit } from "../../../types"

export const a1Units: LessonUnit[] = [
    {
        id: "ja-a1-u1",
        level: "A1",
        order: 1,
        title: "Hiragana Part 1",
        description: "Learn the first 25 hiragana characters: あ-row through な-row",
        grammarIds: ["ja-g-a1-1"],
        vocabIds: ["ja-v-a1-1", "ja-v-a1-2", "ja-v-a1-7", "ja-v-a1-8"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-1-1", level: "A1", prompt: "Which hiragana represents the sound 'ka'?", options: ["か", "き", "く", "こ"], answer: "か" },
            { id: "ja-uq-a1-1-2", level: "A1", prompt: "What sound does 'し' make?", options: ["si", "shi", "chi", "su"], answer: "shi" },
            { id: "ja-uq-a1-1-3", level: "A1", prompt: "What sound does 'つ' make?", options: ["tu", "ti", "tsu", "chi"], answer: "tsu" },
            { id: "ja-uq-a1-1-4", level: "A1", prompt: "Which hiragana represents 'ni'?", options: ["な", "に", "ぬ", "ね"], answer: "に" },
            { id: "ja-uq-a1-1-5", level: "A1", prompt: "Which row does 'さしすせそ' belong to?", options: ["a-row", "ka-row", "sa-row", "ta-row"], answer: "sa-row" },
            { id: "ja-uq-a1-1-6", level: "A1", prompt: "How do you write 'a i u e o' in hiragana?", options: ["あいうえお", "かきくけこ", "さしすせそ", "たちつてと"], answer: "あいうえお" }
        ]
    },
    {
        id: "ja-a1-u2",
        level: "A1",
        order: 2,
        title: "Hiragana Part 2 & Basic Phrases",
        description: "Complete hiragana: は-row through わ-row + ん; learn basic expressions",
        grammarIds: ["ja-g-a1-2", "ja-g-a1-5"],
        vocabIds: ["ja-v-a1-1", "ja-v-a1-2", "ja-v-a1-3", "ja-v-a1-4", "ja-v-a1-5", "ja-v-a1-9", "ja-v-a1-10", "ja-v-a1-11", "ja-v-a1-12"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-2-1", level: "A1", prompt: "What sound does 'ふ' make?", options: ["hu", "fu", "pu", "bu"], answer: "fu" },
            { id: "ja-uq-a1-2-2", level: "A1", prompt: "Which character represents the nasal 'n' sound at the end of a syllable?", options: ["の", "ぬ", "ん", "な"], answer: "ん" },
            { id: "ja-uq-a1-2-3", level: "A1", prompt: "How do you say 'Good morning' (formal) in Japanese?", options: ["こんにちは", "こんばんは", "おはようございます", "さようなら"], answer: "おはようございます" },
            { id: "ja-uq-a1-2-4", level: "A1", prompt: "What is を (wo) primarily used for in a sentence?", options: ["Topic particle", "Subject particle", "Object particle", "Location particle"], answer: "Object particle" },
            { id: "ja-uq-a1-2-5", level: "A1", prompt: "How do you say 'I'm sorry' (apology) in Japanese?", options: ["すみません", "ありがとう", "ごめんなさい", "どうぞ"], answer: "ごめんなさい" },
            { id: "ja-uq-a1-2-6", level: "A1", prompt: "What does 'はじめまして' mean?", options: ["Thank you", "Excuse me", "Nice to meet you", "Goodbye"], answer: "Nice to meet you" }
        ]
    },
    {
        id: "ja-a1-u3",
        level: "A1",
        order: 3,
        title: "Katakana",
        description: "Learn the 46 katakana characters used for foreign loanwords and foreign names",
        grammarIds: ["ja-g-a1-3"],
        vocabIds: ["ja-v-a1-62", "ja-v-a1-63", "ja-v-a1-71", "ja-v-a1-95", "ja-v-a1-97", "ja-v-a1-99", "ja-v-a1-101", "ja-v-a1-102", "ja-v-a1-109", "ja-v-a1-114", "ja-v-a1-117", "ja-v-a1-145"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-3-1", level: "A1", prompt: "What does katakana primarily represent?", options: ["Native Japanese words", "Grammatical elements", "Foreign loanwords and names", "Numbers only"], answer: "Foreign loanwords and names" },
            { id: "ja-uq-a1-3-2", level: "A1", prompt: "What is 'コーヒー' in English?", options: ["Tea", "Juice", "Coffee", "Water"], answer: "Coffee" },
            { id: "ja-uq-a1-3-3", level: "A1", prompt: "What does the long vowel mark ー (dash) do in katakana?", options: ["Marks the end of a word", "Extends the preceding vowel sound", "Means 'and'", "Separates two words"], answer: "Extends the preceding vowel sound" },
            { id: "ja-uq-a1-3-4", level: "A1", prompt: "What is 'テレビ' in English?", options: ["Telephone", "Television", "Radio", "Computer"], answer: "Television" },
            { id: "ja-uq-a1-3-5", level: "A1", prompt: "Which word is written in katakana?", options: ["さくら", "ともだち", "レストラン", "がっこう"], answer: "レストラン" },
            { id: "ja-uq-a1-3-6", level: "A1", prompt: "What is 'ビール' in English?", options: ["Water", "Tea", "Juice", "Beer"], answer: "Beer" }
        ]
    },
    {
        id: "ja-a1-u4",
        level: "A1",
        order: 4,
        title: "Basic Sentences: X は Y です",
        description: "Form simple 'X is Y' sentences using the topic particle は and copula です",
        grammarIds: ["ja-g-a1-4"],
        vocabIds: ["ja-v-a1-46", "ja-v-a1-47", "ja-v-a1-48", "ja-v-a1-49", "ja-v-a1-50", "ja-v-a1-51", "ja-v-a1-52", "ja-v-a1-53", "ja-v-a1-54", "ja-v-a1-55", "ja-v-a1-119", "ja-v-a1-150"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-4-1", level: "A1", prompt: "How do you say 'I am a student'?", options: ["わたしをがくせいです。", "わたしはがくせいです。", "わたしがくせいです。", "がくせいはわたしです。"], answer: "わたしはがくせいです。" },
            { id: "ja-uq-a1-4-2", level: "A1", prompt: "What does は (wa) mark in a sentence?", options: ["The direct object", "The topic", "The verb", "The location"], answer: "The topic" },
            { id: "ja-uq-a1-4-3", level: "A1", prompt: "How do you make a yes/no question in Japanese?", options: ["Change the word order", "Add の at the end", "Add か at the end", "Add です at the start"], answer: "Add か at the end" },
            { id: "ja-uq-a1-4-4", level: "A1", prompt: "How do you say 'This is not a book'?", options: ["これはほんです。", "これはほんですか？", "これはほんじゃありません。", "これがほんです。"], answer: "これはほんじゃありません。" },
            { id: "ja-uq-a1-4-5", level: "A1", prompt: "What does です (desu) mean?", options: ["Go / comes", "Is / am / are (polite)", "Have / has", "Want"], answer: "Is / am / are (polite)" },
            { id: "ja-uq-a1-4-6", level: "A1", prompt: "Which is correct for 'Are you a teacher?'", options: ["あなたはせんせいです。", "あなたはせんせいですか？", "せんせいはあなたですか？", "あなたをせんせいですか？"], answer: "あなたはせんせいですか？" }
        ]
    },
    {
        id: "ja-a1-u5",
        level: "A1",
        order: 5,
        title: "Greetings & Daily Expressions",
        description: "Master common Japanese greetings and essential polite phrases",
        grammarIds: ["ja-g-a1-5"],
        vocabIds: ["ja-v-a1-1", "ja-v-a1-2", "ja-v-a1-3", "ja-v-a1-4", "ja-v-a1-5", "ja-v-a1-6", "ja-v-a1-7", "ja-v-a1-8", "ja-v-a1-9", "ja-v-a1-10", "ja-v-a1-11", "ja-v-a1-12"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-5-1", level: "A1", prompt: "How do you say 'Good evening'?", options: ["おはようございます", "こんにちは", "こんばんは", "おやすみなさい"], answer: "こんばんは" },
            { id: "ja-uq-a1-5-2", level: "A1", prompt: "What does 'すみません' mean?", options: ["Thank you", "Yes", "Excuse me / I'm sorry", "No"], answer: "Excuse me / I'm sorry" },
            { id: "ja-uq-a1-5-3", level: "A1", prompt: "Which greeting is used during the daytime?", options: ["おはようございます", "こんにちは", "こんばんは", "さようなら"], answer: "こんにちは" },
            { id: "ja-uq-a1-5-4", level: "A1", prompt: "What does 'どうぞ' mean?", options: ["Thank you", "Goodbye", "Please / Here you go / Go ahead", "Excuse me"], answer: "Please / Here you go / Go ahead" },
            { id: "ja-uq-a1-5-5", level: "A1", prompt: "What do you say when meeting someone for the first time?", options: ["ありがとうございます", "はじめまして", "こんばんは", "さようなら"], answer: "はじめまして" }
        ]
    },
    {
        id: "ja-a1-u6",
        level: "A1",
        order: 6,
        title: "Numbers 1–100",
        description: "Learn Sino-Japanese numbers from 1 to 100 and how to form compound numbers",
        grammarIds: ["ja-g-a1-6"],
        vocabIds: ["ja-v-a1-13", "ja-v-a1-14", "ja-v-a1-15", "ja-v-a1-16", "ja-v-a1-17", "ja-v-a1-18", "ja-v-a1-19", "ja-v-a1-20", "ja-v-a1-21", "ja-v-a1-22", "ja-v-a1-23", "ja-v-a1-24", "ja-v-a1-25", "ja-v-a1-26", "ja-v-a1-27"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-6-1", level: "A1", prompt: "What is 'seven' in Sino-Japanese?", options: ["ろく", "なな / しち", "はち", "きゅう"], answer: "なな / しち" },
            { id: "ja-uq-a1-6-2", level: "A1", prompt: "How do you say '15' in Japanese?", options: ["いちご", "じゅうご", "ごじゅう", "じゅう"], answer: "じゅうご" },
            { id: "ja-uq-a1-6-3", level: "A1", prompt: "What is 百 (hyaku)?", options: ["Ten", "Fifty", "One hundred", "One thousand"], answer: "One hundred" },
            { id: "ja-uq-a1-6-4", level: "A1", prompt: "How do you say '30' in Japanese?", options: ["さんびゃく", "さんじゅう", "じゅうさん", "さんぜん"], answer: "さんじゅう" },
            { id: "ja-uq-a1-6-5", level: "A1", prompt: "What is 千 (sen)?", options: ["One hundred", "Five hundred", "One thousand", "Ten thousand"], answer: "One thousand" },
            { id: "ja-uq-a1-6-6", level: "A1", prompt: "Which reading of 4 is preferred to avoid bad associations?", options: ["し", "yon / よん", "Both are equally used", "Neither is used"], answer: "yon / よん" }
        ]
    },
    {
        id: "ja-a1-u7",
        level: "A1",
        order: 7,
        title: "Polite Verbs: ます-form",
        description: "Learn to conjugate verbs in polite present/future form using ます",
        grammarIds: ["ja-g-a1-7"],
        vocabIds: ["ja-v-a1-58", "ja-v-a1-60", "ja-v-a1-104", "ja-v-a1-143", "ja-v-a1-144", "ja-v-a1-145", "ja-v-a1-146", "ja-v-a1-148"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3", "ja-vb-a1-4"],
        testQuestions: [
            { id: "ja-uq-a1-7-1", level: "A1", prompt: "What is the polite present form of 食べる (taberu)?", options: ["食べた", "食べます", "食べません", "食べて"], answer: "食べます" },
            { id: "ja-uq-a1-7-2", level: "A1", prompt: "What is the polite present form of 行く (iku)?", options: ["行きます", "行く", "行って", "行きた"], answer: "行きます" },
            { id: "ja-uq-a1-7-3", level: "A1", prompt: "The irregular verb する (suru) becomes which ます-form?", options: ["するます", "すります", "します", "しいます"], answer: "します" },
            { id: "ja-uq-a1-7-4", level: "A1", prompt: "How do you say 'I drink water' in polite Japanese?", options: ["みずを飲みた。", "みずを飲みます。", "みずを飲む。", "みずを飲んで。"], answer: "みずを飲みます。" },
            { id: "ja-uq-a1-7-5", level: "A1", prompt: "What kind of actions does ます-form express?", options: ["Past actions only", "Present habits and future actions (polite)", "Commands only", "Wishes only"], answer: "Present habits and future actions (polite)" },
            { id: "ja-uq-a1-7-6", level: "A1", prompt: "How do you say 'I go to school' in polite Japanese?", options: ["学校に行く。", "学校に行きます。", "学校に行きた。", "学校に行って。"], answer: "学校に行きます。" }
        ]
    },
    {
        id: "ja-a1-u8",
        level: "A1",
        order: 8,
        title: "Past Tense: ました",
        description: "Express past actions using ました (affirmative) and ませんでした (negative)",
        grammarIds: ["ja-g-a1-8"],
        vocabIds: ["ja-v-a1-35", "ja-v-a1-36", "ja-v-a1-37", "ja-v-a1-38", "ja-v-a1-70", "ja-v-a1-104"],
        verbIds: ["ja-vb-a1-5", "ja-vb-a1-6"],
        testQuestions: [
            { id: "ja-uq-a1-8-1", level: "A1", prompt: "How do you say 'I ate sushi yesterday'?", options: ["昨日、すしを食べます。", "昨日、すしを食べました。", "昨日、すしを食べません。", "昨日、すしを食べた。"], answer: "昨日、すしを食べました。" },
            { id: "ja-uq-a1-8-2", level: "A1", prompt: "How do you form the polite past negative?", options: ["ます → まして", "ます → ませんでした", "ます → ました", "ます → ません"], answer: "ます → ませんでした" },
            { id: "ja-uq-a1-8-3", level: "A1", prompt: "What is the past form of 来ます (kimasu)?", options: ["来ません", "来ました", "来まして", "来ましょう"], answer: "来ました" },
            { id: "ja-uq-a1-8-4", level: "A1", prompt: "How do you say 'She did not come'?", options: ["来ました。", "来ません。", "来ませんでした。", "来て。"], answer: "来ませんでした。" },
            { id: "ja-uq-a1-8-5", level: "A1", prompt: "What is the past copula (was/were) in polite Japanese?", options: ["です", "でした", "でしょう", "ですか"], answer: "でした" },
            { id: "ja-uq-a1-8-6", level: "A1", prompt: "How do you say 'I watched TV last night'?", options: ["昨日の夜、テレビを見ます。", "昨日の夜、テレビを見ました。", "昨日の夜、テレビを見ません。", "昨日の夜、テレビを見て。"], answer: "昨日の夜、テレビを見ました。" }
        ]
    },
    {
        id: "ja-a1-u9",
        level: "A1",
        order: 9,
        title: "Negation & Questions",
        description: "Form negative sentences with ません and ask questions with か and question words",
        grammarIds: ["ja-g-a1-9"],
        vocabIds: ["ja-v-a1-35", "ja-v-a1-36", "ja-v-a1-38", "ja-v-a1-104", "ja-v-a1-106", "ja-v-a1-114", "ja-v-a1-147", "ja-v-a1-148", "ja-v-a1-149", "ja-v-a1-150"],
        verbIds: ["ja-vb-a1-7", "ja-vb-a1-8"],
        testQuestions: [
            { id: "ja-uq-a1-9-1", level: "A1", prompt: "How do you say 'I don't speak Japanese'?", options: ["日本語を話します。", "日本語を話しません。", "日本語を話しました。", "日本語を話すか？"], answer: "日本語を話しません。" },
            { id: "ja-uq-a1-9-2", level: "A1", prompt: "What question word means 'where'?", options: ["なに", "いつ", "どこ", "だれ"], answer: "どこ" },
            { id: "ja-uq-a1-9-3", level: "A1", prompt: "How do you ask 'What is your name?' in Japanese?", options: ["お名前はどこですか？", "お名前はいつですか？", "お名前は何ですか？", "お名前はだれですか？"], answer: "お名前は何ですか？" },
            { id: "ja-uq-a1-9-4", level: "A1", prompt: "What is the question word for 'when'?", options: ["どれ", "いつ", "なに", "どう"], answer: "いつ" },
            { id: "ja-uq-a1-9-5", level: "A1", prompt: "How do you say 'I do not write letters'?", options: ["手紙を書きます。", "手紙を書きました。", "手紙を書きません。", "手紙を書いて。"], answer: "手紙を書きません。" },
            { id: "ja-uq-a1-9-6", level: "A1", prompt: "Where does the question particle か go in a sentence?", options: ["At the beginning", "Before the verb", "After the subject", "At the end of the sentence"], answer: "At the end of the sentence" }
        ]
    },
    {
        id: "ja-a1-u10",
        level: "A1",
        order: 10,
        title: "を Particle: Direct Objects",
        description: "Use the object particle を to mark what the action is done to",
        grammarIds: ["ja-g-a1-10"],
        vocabIds: ["ja-v-a1-58", "ja-v-a1-59", "ja-v-a1-60", "ja-v-a1-61", "ja-v-a1-62", "ja-v-a1-64", "ja-v-a1-65", "ja-v-a1-66", "ja-v-a1-143", "ja-v-a1-145", "ja-v-a1-146", "ja-v-a1-148"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-6", "ja-vb-a1-8"],
        testQuestions: [
            { id: "ja-uq-a1-10-1", level: "A1", prompt: "What is the function of the particle を (wo)?", options: ["Marks the topic", "Marks the subject", "Marks the direct object", "Marks the location"], answer: "Marks the direct object" },
            { id: "ja-uq-a1-10-2", level: "A1", prompt: "Which sentence is correct for 'I eat rice'?", options: ["ご飯は食べます。", "ご飯が食べます。", "ご飯に食べます。", "ご飯を食べます。"], answer: "ご飯を食べます。" },
            { id: "ja-uq-a1-10-3", level: "A1", prompt: "How do you say 'I watch TV'?", options: ["テレビが見ます。", "テレビを見ます。", "テレビは見ます。", "テレビに見ます。"], answer: "テレビを見ます。" },
            { id: "ja-uq-a1-10-4", level: "A1", prompt: "What does 'みずを飲みます' mean?", options: ["I go to the water.", "I drink water.", "The water is good.", "Water, please."], answer: "I drink water." },
            { id: "ja-uq-a1-10-5", level: "A1", prompt: "How do you say 'I write a letter'?", options: ["手紙に書きます。", "手紙は書きます。", "手紙を書きます。", "手紙が書きます。"], answer: "手紙を書きます。" }
        ]
    },
    {
        id: "ja-a1-u11",
        level: "A1",
        order: 11,
        title: "に Particle: Location & Time",
        description: "Use に for destinations with movement verbs, locations of existence, and time expressions",
        grammarIds: ["ja-g-a1-11"],
        vocabIds: ["ja-v-a1-104", "ja-v-a1-105", "ja-v-a1-106", "ja-v-a1-107", "ja-v-a1-108", "ja-v-a1-111", "ja-v-a1-112", "ja-v-a1-113", "ja-v-a1-115", "ja-v-a1-116", "ja-v-a1-28", "ja-v-a1-38"],
        verbIds: ["ja-vb-a1-3", "ja-vb-a1-5"],
        testQuestions: [
            { id: "ja-uq-a1-11-1", level: "A1", prompt: "Which particle marks the destination of movement?", options: ["を", "は", "に", "で"], answer: "に" },
            { id: "ja-uq-a1-11-2", level: "A1", prompt: "How do you say 'I go to school'?", options: ["学校で行きます。", "学校を行きます。", "学校が行きます。", "学校に行きます。"], answer: "学校に行きます。" },
            { id: "ja-uq-a1-11-3", level: "A1", prompt: "How do you say 'I wake up at seven o'clock'?", options: ["七時で起きます。", "七時を起きます。", "七時に起きます。", "七時が起きます。"], answer: "七時に起きます。" },
            { id: "ja-uq-a1-11-4", level: "A1", prompt: "Which sentence correctly uses に for location of existence?", options: ["公園で子供がいます。", "公園に子供がいます。", "公園を子供がいます。", "公園が子供がいます。"], answer: "公園に子供がいます。" },
            { id: "ja-uq-a1-11-5", level: "A1", prompt: "に is NOT used with which type of time word?", options: ["三時 (three o'clock)", "月曜日 (Monday)", "今日 (today)", "六月 (June)"], answer: "今日 (today)" },
            { id: "ja-uq-a1-11-6", level: "A1", prompt: "How do you say 'I came to Japan'?", options: ["日本で来ました。", "日本を来ました。", "日本に来ました。", "日本が来ました。"], answer: "日本に来ました。" }
        ]
    },
    {
        id: "ja-a1-u12",
        level: "A1",
        order: 12,
        title: "で Particle: Place of Action",
        description: "Use で to mark where actions happen and the means or tools used",
        grammarIds: ["ja-g-a1-12"],
        vocabIds: ["ja-v-a1-104", "ja-v-a1-109", "ja-v-a1-110", "ja-v-a1-111", "ja-v-a1-112", "ja-v-a1-115", "ja-v-a1-119", "ja-v-a1-120", "ja-v-a1-121", "ja-v-a1-122", "ja-v-a1-146"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-3", "ja-vb-a1-7"],
        testQuestions: [
            { id: "ja-uq-a1-12-1", level: "A1", prompt: "Which particle marks where an action takes place?", options: ["に", "が", "で", "の"], answer: "で" },
            { id: "ja-uq-a1-12-2", level: "A1", prompt: "How do you say 'I study at the library'?", options: ["図書館に勉強します。", "図書館で勉強します。", "図書館を勉強します。", "図書館が勉強します。"], answer: "図書館で勉強します。" },
            { id: "ja-uq-a1-12-3", level: "A1", prompt: "How do you say 'I come by bus'?", options: ["バスに来ます。", "バスが来ます。", "バスで来ます。", "バスを来ます。"], answer: "バスで来ます。" },
            { id: "ja-uq-a1-12-4", level: "A1", prompt: "What is the difference between に and で for locations?", options: ["に and で mean the same thing", "に marks where you exist/go to; で marks where you do something", "に marks actions; で marks existence", "There is no difference"], answer: "に marks where you exist/go to; で marks where you do something" },
            { id: "ja-uq-a1-12-5", level: "A1", prompt: "How do you say 'Please speak in Japanese'?", options: ["日本語に話してください。", "日本語が話してください。", "日本語で話してください。", "日本語を話してください。"], answer: "日本語で話してください。" },
            { id: "ja-uq-a1-12-6", level: "A1", prompt: "How do you say 'I eat at the restaurant'?", options: ["レストランに食べます。", "レストランで食べます。", "レストランを食べます。", "レストランが食べます。"], answer: "レストランで食べます。" }
        ]
    },
    {
        id: "ja-a1-u13",
        level: "A1",
        order: 13,
        title: "Food & Shopping Vocabulary",
        description: "Build vocabulary for food, drink, shopping, adjectives and describing things",
        grammarIds: [],
        vocabIds: ["ja-v-a1-58", "ja-v-a1-59", "ja-v-a1-60", "ja-v-a1-61", "ja-v-a1-64", "ja-v-a1-65", "ja-v-a1-66", "ja-v-a1-67", "ja-v-a1-68", "ja-v-a1-70", "ja-v-a1-72", "ja-v-a1-129", "ja-v-a1-130", "ja-v-a1-131", "ja-v-a1-132", "ja-v-a1-133", "ja-v-a1-134", "ja-v-a1-137", "ja-v-a1-138"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2"],
        testQuestions: [
            { id: "ja-uq-a1-13-1", level: "A1", prompt: "What does 'おいしい' mean?", options: ["Cheap", "Big", "Delicious", "New"], answer: "Delicious" },
            { id: "ja-uq-a1-13-2", level: "A1", prompt: "What is 'meat' in Japanese?", options: ["さかな", "やさい", "にく", "くだもの"], answer: "にく" },
            { id: "ja-uq-a1-13-3", level: "A1", prompt: "What does 'たかい' mean?", options: ["Cheap / Inexpensive", "Expensive / Tall / High", "Small", "Old"], answer: "Expensive / Tall / High" },
            { id: "ja-uq-a1-13-4", level: "A1", prompt: "What is 'fish' in Japanese?", options: ["にく", "さかな", "たまご", "やさい"], answer: "さかな" },
            { id: "ja-uq-a1-13-5", level: "A1", prompt: "What does 'あたらしい' mean?", options: ["Old", "Big", "New", "Good"], answer: "New" },
            { id: "ja-uq-a1-13-6", level: "A1", prompt: "What is 'egg' in Japanese?", options: ["たまご", "さかな", "にく", "ぎゅうにゅう"], answer: "たまご" }
        ]
    },
    {
        id: "ja-a1-u14",
        level: "A1",
        order: 14,
        title: "Wanting To Do: 〜たい (A1 Bridge)",
        description: "Express desires using たい — the bridge between A1 and A2 grammar",
        grammarIds: ["ja-g-a1-13"],
        vocabIds: ["ja-v-a1-60", "ja-v-a1-70", "ja-v-a1-71", "ja-v-a1-104", "ja-v-a1-106", "ja-v-a1-110", "ja-v-a1-112", "ja-v-a1-147"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3", "ja-vb-a1-4", "ja-vb-a1-6"],
        testQuestions: [
            { id: "ja-uq-a1-14-1", level: "A1", prompt: "How do you say 'I want to eat sushi'?", options: ["すしを食べます。", "すしが食べたいです。", "すしを食べました。", "すしを食べません。"], answer: "すしが食べたいです。" },
            { id: "ja-uq-a1-14-2", level: "A1", prompt: "How is たい formed? Take the ます-form stem and...", options: ["add ない", "add たい", "add て", "add ました"], answer: "add たい" },
            { id: "ja-uq-a1-14-3", level: "A1", prompt: "How do you say 'I want to go to Japan'?", options: ["日本に行きます。", "日本に行きたいです。", "日本に行きました。", "日本に行きません。"], answer: "日本に行きたいです。" },
            { id: "ja-uq-a1-14-4", level: "A1", prompt: "What is the negative form of たいです?", options: ["たくないです", "たいじゃないです", "たいません", "たいでした"], answer: "たくないです" },
            { id: "ja-uq-a1-14-5", level: "A1", prompt: "How do you ask 'What do you want to do?'", options: ["何をしましたか？", "何がしたいですか？", "何をしますか？", "何をしていますか？"], answer: "何がしたいですか？" },
            { id: "ja-uq-a1-14-6", level: "A1", prompt: "たい can be used to express which person's desires directly?", options: ["Any person", "Third person only", "First person (speaker) only", "Second person only"], answer: "First person (speaker) only" }
        ]
    },
    {
        id: "ja-a1-u15",
        level: "A1",
        order: 15,
        title: "Beginner Kanji",
        description: "Learn 15 essential kanji you've already seen in A1 — 日, 水, 山, 本, 人, 学, 生, 先, 語, 上, 下, 中, 大, 小, 手",
        grammarIds: ["ja-g-a1-14"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-15-1", level: "A1", prompt: "What does the kanji 日 mean?", options: ["Water", "Mountain", "Sun / Day", "Person"], answer: "Sun / Day" },
            { id: "ja-uq-a1-15-2", level: "A1", prompt: "What does 日本 (にほん) mean?", options: ["Japanese language", "Japanese person", "Japan", "Japanese food"], answer: "Japan" },
            { id: "ja-uq-a1-15-3", level: "A1", prompt: "What does 先生 (せんせい) mean?", options: ["Student", "University", "Teacher", "Language"], answer: "Teacher" },
            { id: "ja-uq-a1-15-4", level: "A1", prompt: "Which kanji means 'study / learning'?", options: ["生", "先", "学", "語"], answer: "学" },
            { id: "ja-uq-a1-15-5", level: "A1", prompt: "What does 大学 (だいがく) mean?", options: ["Big person", "University", "Teacher", "Study group"], answer: "University" },
            { id: "ja-uq-a1-15-6", level: "A1", prompt: "Which kanji means 'above / up'?", options: ["下", "中", "小", "上"], answer: "上" },
            { id: "ja-uq-a1-15-7", level: "A1", prompt: "What does 学生 (がくせい) mean?", options: ["Teacher", "School", "Student", "Language"], answer: "Student" },
            { id: "ja-uq-a1-15-8", level: "A1", prompt: "What is the kun'yomi reading of 水?", options: ["すい", "みず", "みな", "こう"], answer: "みず" }
        ]
    }
]
