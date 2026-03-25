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
        ],
        inlineVocab: [
            { word: "ごはん", translation: "rice / meal" },
            { word: "みず", translation: "water" },
            { word: "にほんご", translation: "Japanese language" },
            { word: "テレビ", translation: "television" },
            { word: "てがみ", translation: "letter" },
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
        ],
        inlineVocab: [
            { word: "がっこう", translation: "school" },
            { word: "にほん", translation: "Japan" },
            { word: "こうえん", translation: "park" },
            { word: "こども", translation: "child / children" },
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
        ],
        inlineVocab: [
            { word: "としょかん", translation: "library" },
            { word: "レストラン", translation: "restaurant" },
            { word: "バス", translation: "bus" },
            { word: "にほんご", translation: "Japanese language" },
            { word: "はし", translation: "chopsticks" },
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
        ],
        inlineVocab: [
            { word: "がくせい", translation: "student" },
            { word: "コーヒー", translation: "coffee" },
            { word: "すし", translation: "sushi" },
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
        ],
        inlineVocab: [
            { word: "ほん", translation: "book" },
            { word: "かばん", translation: "bag" },
            { word: "にほんご", translation: "Japanese language" },
            { word: "えき", translation: "station" },
        ]
    },
    {
        id: "ja-g-a1-29",
        level: "A1",
        title: "も Particle — Also / Too / Either",
        explanation: `も (mo) means 'also', 'too', or 'as well'. It replaces は, が, or を when you want to say that something additional shares the same predicate. It is one of the highest-frequency particles in Japanese.

REPLACING は — adding a topic:
  わたしは がくせいです。     I am a student.
  わたしも がくせいです。     I am also a student. (も replaces は)

  たなかさんは にほんじんです。  Tanaka is Japanese.
  やまださんも にほんじんです。  Yamada is also Japanese.

REPLACING が — adding a subject:
  コーヒーが すきです。      I like coffee.
  おちゃも すきです。        I also like tea.

REPLACING を — adding an object:
  すしを たべました。        I ate sushi.
  さしみも たべました。      I also ate sashimi.

NEGATIVE + も — 'either / not...either'
In negative sentences, も means 'either' — it extends the negation:
  コーヒーは のみません。    I don't drink coffee.
  おちゃも のみません。      I don't drink tea either.

  なにも + negative verb = nothing at all:
  なにも わかりません。      I don't understand anything.
  なにも たべませんでした。  I didn't eat anything.

  だれも + negative verb = nobody:
  だれも いません。          There is nobody. / Nobody is here.

も WITH NUMBERS — 'as many/much as' (emphasis):
  いちじかんも まちました。  I waited a whole hour. (emphasis on quantity)
  ひゃくえんも ありません。  I don't even have 100 yen.

STACKING も — 'both...and / neither...nor':
  すしも さしみも すきです。      I like both sushi and sashimi.
  コーヒーも おちゃも のみません。 I drink neither coffee nor tea.

も NEVER stacks with は, が, or を — it replaces them entirely.
Other particles (に, で, から, まで) keep their particle and add も after:
  がっこうにも いきました。   I also went to school.
  としょかんでも べんきょうしました。  I studied at the library too.`,
        examples: [
            { native: "わたしも にほんごを べんきょうしています。", romanized: "Watashi mo nihongo wo benkyou shite imasu.", translation: "I am also studying Japanese." },
            { native: "このえいがも おもしろいです。", romanized: "Kono eiga mo omoshiroi desu.", translation: "This movie is also interesting." },
            { native: "なにも たべませんでした。", romanized: "Nani mo tabemasen deshita.", translation: "I didn't eat anything." },
            { native: "だれも きませんでした。", romanized: "Dare mo kimasen deshita.", translation: "Nobody came." },
            { native: "すしも さしみも すきです。", romanized: "Sushi mo sashimi mo suki desu.", translation: "I like both sushi and sashimi." },
            { native: "わたしも そう おもいます。", romanized: "Watashi mo sou omoimasu.", translation: "I think so too." },
        ],
        inlineVocab: [
            { word: "えいが", translation: "movie / film" },
            { word: "すし", translation: "sushi" },
            { word: "さしみ", translation: "sashimi" },
            { word: "にほんご", translation: "Japanese language" },
        ]
    },
    {
        id: "ja-g-a1-30",
        level: "A1",
        title: "から and まで — From / Since and To / Until",
        explanation: `から (kara) and まで (made) mark the starting and ending points of time, place, and range. They are often used together but work independently too.

から — FROM / SINCE / BECAUSE

Starting point in time:
  くじから はたらきます。         I work from nine o'clock.
  げつようびから べんきょうします。 I will study from Monday.

Starting point in place:
  とうきょうから きました。        I came from Tokyo.
  うちから がっこうまで           from home to school

Origin / source:
  せんせいから きいた。            I heard it from my teacher.

まで — TO / UNTIL / AS FAR AS

Ending point in time:
  ごじまで はたらきます。          I work until five o'clock.
  らいしゅうまで まちます。        I will wait until next week.

Ending point in place:
  えきまで あるきました。          I walked to the station.
  ここから えきまで とおいですか？ Is it far from here to the station?

USING から AND まで TOGETHER
They combine naturally to express 'from X to Y':

Time:
  くじから ごじまで はたらきます。
  I work from nine to five.

  げつようびから きんようびまで
  From Monday to Friday.

Place:
  うちから えきまで じゅっぷんです。
  It's ten minutes from home to the station.

  とうきょうから おおさかまで しんかんせんで にじかんです。
  It's two hours from Tokyo to Osaka by shinkansen.

から AS 'BECAUSE' — reason connector (second grammatical function)
から also means 'because / so' when it follows a verb, adjective, or です.
This is a separate grammatical function from the starting-point から above.

PATTERN:
  [Reason clause] から、[Result clause]。
  [Result clause]。[Reason clause] から。  (reason at the end)

EXAMPLES:
  さむいから、うちにいます。       Because it's cold, I'm staying home.
  つかれたから、ねます。           Because I'm tired, I'll sleep.
  にほんごが すきだから、べんきょうします。
                                    Because I like Japanese, I study it.
  やすいですから、かいました。     Because it was cheap, I bought it.

  REASON AT THE END (common in speech):
  うちにいます。さむいから。       I'm staying home. Because it's cold.
  This trailing から gives the reason after the fact — very natural in conversation.

KEY — HOW TO TELL THE TWO から APART:
  Range から  →  follows a NOUN (time/place):   くじから はたらく (work from 9)
  Reason から →  follows a VERB or ADJECTIVE:   さむいから うちにいる (cold, so I stay home)

Both appear heavily on N5 — recognise and use both.`,
        examples: [
            { native: "くじから ごじまで はたらきます。", romanized: "Kuji kara goji made hatarakimasu.", translation: "I work from nine to five." },
            { native: "とうきょうから きました。", romanized: "Tokyo kara kimashita.", translation: "I came from Tokyo." },
            { native: "えきまで あるきましょう。", romanized: "Eki made arukimashou.", translation: "Let's walk to the station." },
            { native: "げつようびから きんようびまで べんきょうします。", romanized: "Getsuyoubi kara kin'youbi made benkyou shimasu.", translation: "I study from Monday to Friday." },
            { native: "ここから えきまで とおいですか？", romanized: "Koko kara eki made tooi desu ka?", translation: "Is it far from here to the station?" },
            { native: "なんじから なんじまで ですか？", romanized: "Nanji kara nanji made desu ka?", translation: "From what time to what time is it?" },
        ],
        inlineVocab: [
            { word: "とうきょう", translation: "Tokyo" },
            { word: "えき", translation: "station" },
        ]
    },
    {
        id: "ja-g-a1-31",
        level: "A1",
        title: "と Particle — And / With",
        explanation: `The particle と (to) has two core uses at A1: listing nouns ('A and B') and expressing accompaniment ('together with someone'). Both are extremely common from the very first conversations.

と FOR LISTING NOUNS — 'and'
と connects nouns in an exhaustive list — it implies these are ALL the items.
  パンと バター         bread and butter
  コーヒーと おちゃ     coffee and tea
  すしと さしみと てんぷら  sushi, sashimi and tempura

Exhaustive means: パンとバターを かいました = I bought bread and butter (and nothing else).
This distinguishes と from や (A2), which lists examples non-exhaustively.

  すしと さしみを たべました。
  I ate sushi and sashimi. (those two things, complete list)

と FOR ACCOMPANIMENT — 'with / together with'
  ともだちと いきます。      I'm going with a friend.
  かぞくと たべました。      I ate with my family.
  だれと きましたか？        Who did you come with?
  ひとりで きました。        I came alone. (ひとりで = by oneself, contrast with と)

と IN COMMON PHRASES
  いっしょに — together (often used with と):
  ともだちと いっしょに べんきょうします。
  I study together with my friend.

  〜と はなす — to talk with:
  せんせいと はなしました。   I talked with my teacher.

  〜と おもう — I think that (A2+ structure, just recognise):
  むずかしいと おもいます。   I think it's difficult.

と vs で for 'with'
  と = with a person (accompaniment)       ともだちと いく    go with a friend
  で = with a tool/means                   はしで たべる     eat with chopsticks
  See lesson a1-12 for で.`,
        examples: [
            { native: "コーヒーと おちゃを ください。", romanized: "Koohii to ocha wo kudasai.", translation: "Coffee and tea, please." },
            { native: "ともだちと えいがを みました。", romanized: "Tomodachi to eiga wo mimashita.", translation: "I watched a movie with a friend." },
            { native: "だれと きましたか？", romanized: "Dare to kimashita ka?", translation: "Who did you come with?" },
            { native: "かぞくと いっしょに たべます。", romanized: "Kazoku to issho ni tabemasu.", translation: "I eat together with my family." },
            { native: "パンと バターと ジュースを かいました。", romanized: "Pan to bataa to juusu wo kaimashita.", translation: "I bought bread, butter and juice." },
            { native: "せんせいと はなしました。", romanized: "Sensei to hanashimashita.", translation: "I talked with my teacher." },
        ],
        inlineVocab: [
            { word: "コーヒー", translation: "coffee" },
            { word: "おちゃ", translation: "green tea" },
            { word: "ともだち", translation: "friend" },
            { word: "かぞく", translation: "family" },
            { word: "せんせい", translation: "teacher" },
        ]
    },
    {
        id: "ja-g-a1-37",
        level: "A1",
        title: "へ Particle — Direction",
        explanation: `The particle へ (written 'he', pronounced 'e' as a particle) marks the direction of movement — where someone or something is headed. It is closely related to に but carries a different nuance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BASIC USE — marking direction:
  へ follows a place word to show the direction of travel.

  がっこうへ いきます。   I am going to school.
  にほんへ きました。     I came to Japan.
  うちへ かえります。     I will return home.
  どこへ いきますか？     Where are you going?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
へ vs に — the key distinction:

Both can mark destination with movement verbs (行く, 来る, 帰る).
The difference is one of emphasis:

  に  →  emphasises the ARRIVAL POINT (endpoint, destination reached)
  へ  →  emphasises the DIRECTION / JOURNEY (the heading, not necessarily arrival)

Practical effect at A1:
  がっこうに いきます。   I go to school.  (に: arriving at school is the point)
  がっこうへ いきます。   I head to school. (へ: direction of travel)

In many everyday sentences, both are interchangeable and native speakers use both freely.
Where they differ:

  へ ONLY — direction without clear arrival:
  そとへ でましょう。      Let's head outside. (direction, not a fixed endpoint)
  みなみへ すすんでください。  Please proceed southward. (compass direction — へ is natural)

  に ONLY — cannot use へ:
  さんじに おきます。     I wake up at 3 o'clock. (TIME — に only, never へ)
  いすに すわります。     I sit in the chair. (static position — に, not へ)
  つくえに ほんが あります。 There is a book on the desk. (existence — に, not へ)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMMON PHRASES WITH へ:
  どこへ いきますか？       Where are you going?
  どちらへ？                Where to? (polite)
  にほんへ ようこそ！       Welcome to Japan!
  みぎへ まがってください。 Please turn right.
  まっすぐ まえへ いってください。  Please go straight ahead.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AT A1: Use へ freely with 行く/来る/帰る to mean 'to/toward'.
Reserve に when talking about time, existence (あります/います), or static location.`,
        examples: [
            { native: "どこへ いきますか？", romanized: "Doko e ikimasu ka?", translation: "Where are you going?" },
            { native: "とうきょうへ いきます。", romanized: "Tokyo e ikimasu.", translation: "I am going to Tokyo." },
            { native: "にほんへ ようこそ！", romanized: "Nihon e youkoso!", translation: "Welcome to Japan!" },
            { native: "うちへ かえりましょう。", romanized: "Uchi e kaerimashou.", translation: "Let's head home." },
            { native: "みぎへ まがってください。", romanized: "Migi e magatte kudasai.", translation: "Please turn right." },
            { native: "がっこうへ いきます。／ がっこうに いきます。", romanized: "Gakkou e ikimasu. / Gakkou ni ikimasu.", translation: "I go to school. (both natural — へ = direction, に = destination)", speakText: "がっこうへ いきます。" },
        ],
        inlineVocab: [
            { word: "とうきょう", translation: "Tokyo" },
            { word: "うち", translation: "home / house" },
            { word: "がっこう", translation: "school" },
        ]
    },
]
