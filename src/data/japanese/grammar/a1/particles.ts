import { GrammarLesson } from "../../../../types"

export const particlesLessons: GrammarLesson[] = [
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
]
