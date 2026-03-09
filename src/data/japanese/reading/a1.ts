// src/data/japanese/reading/a1.ts
import { ReadingPassage } from "../../../types"

export const a1Reading: ReadingPassage[] = [
    {
        id: "ja-r-a1-1",
        level: "A1",
        category: "everyday",
        title: "わたしのかぞく (My Family)",
        body: {
            target: "わたしは田中さくらです。かぞくは四人です。ちちは田中けんじです。ははは田中ゆきです。あには田中たろうです。たろうさんは二十さいです。わたしは十七さいです。わたしたちは東京にすんでいます。いえはおおきいです。いぬがいます。いぬのなまえはポチです。ポチはちいさくてかわいいです。",
            native: "I am Tanaka Sakura. There are four people in my family. My father is Tanaka Kenji. My mother is Tanaka Yuki. My older brother is Tanaka Taro. Taro is twenty years old. I am seventeen years old. We live in Tokyo. Our house is big. We have a dog. The dog's name is Pochi. Pochi is small and cute."
        },
        vocabGloss: [
            { word: "かぞく", translation: "family", romanized: "kazoku" },
            { word: "ちち", translation: "father (my own)", romanized: "chichi" },
            { word: "はは", translation: "mother (my own)", romanized: "haha" },
            { word: "あに", translation: "older brother (my own)", romanized: "ani" },
            { word: "すんでいます", translation: "live (in a place)", romanized: "sunde imasu" },
            { word: "ちいさくて", translation: "small and...", romanized: "chiisaku te" },
            { word: "かわいい", translation: "cute", romanized: "kawaii" }
        ],
        questions: [
            {
                id: "ja-r-a1-1-q1",
                level: "A1",
                prompt: "How many people are in Sakura's family?",
                options: ["Four", "Three", "Five", "Two"],
                answer: "Four"
            },
            {
                id: "ja-r-a1-1-q2",
                level: "A1",
                prompt: "How old is Taro?",
                options: ["Twenty", "Seventeen", "Fifteen", "Twenty-two"],
                answer: "Twenty"
            },
            {
                id: "ja-r-a1-1-q3",
                level: "A1",
                prompt: "Where does the family live?",
                options: ["Tokyo", "Osaka", "Kyoto", "Sapporo"],
                answer: "Tokyo"
            }
        ]
    },
    {
        id: "ja-r-a1-2",
        level: "A1",
        category: "everyday",
        title: "まいにちのせいかつ (Daily Life)",
        body: {
            target: "わたしは毎朝七時におきます。シャワーをあびて、あさごはんをたべます。あさごはんはごはんとみそしるです。八時に学校へいきます。学校でにほんご、すうがく、えいごをべんきょうします。ひるごはんは十二時にたべます。午後はべんきょうしたり、ともだちとあそんだりします。よるごはんはかぞくといっしょにたべます。九時にねます。",
            native: "I wake up every morning at seven o'clock. I take a shower and eat breakfast. Breakfast is rice and miso soup. I go to school at eight o'clock. At school I study Japanese, maths and English. I eat lunch at twelve o'clock. In the afternoon I study or play with friends. I eat dinner together with my family. I go to sleep at nine o'clock."
        },
        vocabGloss: [
            { word: "毎朝", translation: "every morning", romanized: "maiasa" },
            { word: "おきます", translation: "wake up", romanized: "okimasu" },
            { word: "シャワーをあびる", translation: "take a shower", romanized: "shawaa o abiru" },
            { word: "みそしる", translation: "miso soup", romanized: "misoshiru" },
            { word: "べんきょうします", translation: "study", romanized: "benkyou shimasu" },
            { word: "いっしょに", translation: "together", romanized: "issho ni" },
            { word: "ねます", translation: "sleep, go to bed", romanized: "nemasu" }
        ],
        questions: [
            {
                id: "ja-r-a1-2-q1",
                level: "A1",
                prompt: "What does the person eat for breakfast?",
                options: ["Rice and miso soup", "Bread and coffee", "Eggs and toast", "Noodles and tea"],
                answer: "Rice and miso soup"
            },
            {
                id: "ja-r-a1-2-q2",
                level: "A1",
                prompt: "What time does the person go to school?",
                options: ["Eight o'clock", "Seven o'clock", "Nine o'clock", "Half past seven"],
                answer: "Eight o'clock"
            },
            {
                id: "ja-r-a1-2-q3",
                level: "A1",
                prompt: "What time does the person go to sleep?",
                options: ["Nine o'clock", "Ten o'clock", "Eight o'clock", "Eleven o'clock"],
                answer: "Nine o'clock"
            }
        ]
    },
    {
        id: "ja-r-a1-3",
        level: "A1",
        category: "dialogue",
        title: "はじめまして (Nice to Meet You)",
        body: {
            target: "たなか：はじめまして。わたしは田中けんたです。よろしくおねがいします。やまだ：はじめまして。山田みかです。どうぞよろしく。たなか：山田さんはどちらのかたですか。やまだ：大阪です。たなかさんは？たなか：わたしは東京です。山田さんはがくせいですか。やまだ：はい、そうです。大学一年生です。たなかさんは？たなか：わたしはかいしゃいんです。",
            native: "Tanaka: How do you do. I am Tanaka Kenta. Nice to meet you. Yamada: How do you do. I am Yamada Mika. Nice to meet you too. Tanaka: Where are you from, Yamada-san? Yamada: Osaka. What about you, Tanaka-san? Tanaka: I am from Tokyo. Are you a student, Yamada-san? Yamada: Yes, that's right. I'm a first-year university student. What about you, Tanaka-san? Tanaka: I am a company employee."
        },
        vocabGloss: [
            { word: "はじめまして", translation: "How do you do / Nice to meet you (first time)", romanized: "hajimemashite" },
            { word: "よろしくおねがいします", translation: "pleased to meet you / I look forward to working with you", romanized: "yoroshiku onegaishimasu" },
            { word: "どちらのかた", translation: "where are you from? (polite)", romanized: "dochira no kata" },
            { word: "がくせい", translation: "student", romanized: "gakusei" },
            { word: "大学一年生", translation: "first-year university student", romanized: "daigaku ichinens ei" },
            { word: "かいしゃいん", translation: "company employee", romanized: "kaishain" }
        ],
        questions: [
            {
                id: "ja-r-a1-3-q1",
                level: "A1",
                prompt: "Where is Yamada Mika from?",
                options: ["Osaka", "Tokyo", "Kyoto", "Nagoya"],
                answer: "Osaka"
            },
            {
                id: "ja-r-a1-3-q2",
                level: "A1",
                prompt: "What year of university is Yamada in?",
                options: ["First year", "Second year", "Third year", "She is not a student"],
                answer: "First year"
            },
            {
                id: "ja-r-a1-3-q3",
                level: "A1",
                prompt: "What does Tanaka Kenta do?",
                options: ["He is a company employee", "He is a student", "He is a teacher", "He is a doctor"],
                answer: "He is a company employee"
            }
        ]
    },
    {
        id: "ja-r-a1-4",
        level: "A1",
        category: "everyday",
        title: "わたしのへや (My Room)",
        body: {
            target: "わたしのへやはちいさいですが、きれいです。つくえとベッドといすがあります。つくえのうえにほんとノートパソコンがあります。まどのそとにこうえんがあります。まいにちまどからそとをみます。へやのかべはしろいです。すきなポスターをはっています。わたしのへやはしずかでべんきょうしやすいです。",
            native: "My room is small but clean. There is a desk, a bed and a chair. On top of the desk there are books and a laptop. Outside the window there is a park. Every day I look outside from the window. The walls of my room are white. I have put up favourite posters. My room is quiet and easy to study in."
        },
        vocabGloss: [
            { word: "きれい", translation: "clean, pretty", romanized: "kirei" },
            { word: "つくえ", translation: "desk", romanized: "tsukue" },
            { word: "うえ", translation: "on top of, above", romanized: "ue" },
            { word: "まど", translation: "window", romanized: "mado" },
            { word: "かべ", translation: "wall", romanized: "kabe" },
            { word: "はっています", translation: "have put up (on wall)", romanized: "hatte imasu" },
            { word: "しずか", translation: "quiet", romanized: "shizuka" }
        ],
        questions: [
            {
                id: "ja-r-a1-4-q1",
                level: "A1",
                prompt: "What is outside the window?",
                options: ["A park", "A school", "A shop", "A river"],
                answer: "A park"
            },
            {
                id: "ja-r-a1-4-q2",
                level: "A1",
                prompt: "What colour are the walls?",
                options: ["White", "Blue", "Yellow", "Green"],
                answer: "White"
            },
            {
                id: "ja-r-a1-4-q3",
                level: "A1",
                prompt: "What is on top of the desk?",
                options: ["Books and a laptop", "A phone and a lamp", "A TV and games", "Posters and pens"],
                answer: "Books and a laptop"
            }
        ]
    },
    {
        id: "ja-r-a1-5",
        level: "A1",
        category: "everyday",
        title: "すきなたべもの (Favourite Food)",
        body: {
            target: "わたしはたべることがすきです。いちばんすきなたべものはすしです。すしのなかでは、まぐろがいちばんすきです。ラーメンもすきです。からいラーメンがすきです。やきとりもおいしいです。たべものでいちばんきらいなのはなっとうです。においがつよいです。のみものはおちゃがすきです。まいにちのみます。",
            native: "I like eating. My favourite food is sushi. Among sushi, I like tuna the most. I also like ramen. I like spicy ramen. Yakitori is also delicious. The food I dislike the most is natto. The smell is strong. For drinks, I like green tea. I drink it every day."
        },
        vocabGloss: [
            { word: "たべること", translation: "eating (the act of eating)", romanized: "taberu koto" },
            { word: "いちばんすき", translation: "like the most, favourite", romanized: "ichiban suki" },
            { word: "まぐろ", translation: "tuna", romanized: "maguro" },
            { word: "からい", translation: "spicy, hot (taste)", romanized: "karai" },
            { word: "やきとり", translation: "grilled chicken skewers", romanized: "yakitori" },
            { word: "きらい", translation: "dislike", romanized: "kirai" },
            { word: "なっとう", translation: "natto (fermented soybeans)", romanized: "nattou" },
            { word: "におい", translation: "smell", romanized: "nioi" }
        ],
        questions: [
            {
                id: "ja-r-a1-5-q1",
                level: "A1",
                prompt: "What is the person's favourite food?",
                options: ["Sushi", "Ramen", "Yakitori", "Natto"],
                answer: "Sushi"
            },
            {
                id: "ja-r-a1-5-q2",
                level: "A1",
                prompt: "What food does the person dislike?",
                options: ["Natto", "Sushi", "Ramen", "Yakitori"],
                answer: "Natto"
            },
            {
                id: "ja-r-a1-5-q3",
                level: "A1",
                prompt: "What does the person drink every day?",
                options: ["Green tea", "Coffee", "Juice", "Water"],
                answer: "Green tea"
            }
        ]
    }
]
