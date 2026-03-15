// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE A1 CULTURE
// src/data/japanese/culture/a1.ts
// ─────────────────────────────────────────────────────────────────────────────
import { CultureEpisode } from "../../../types"

// Two episodes on core cultural concepts that are essential for understanding Japan:
// 1) おじぎ (bowing) — the language of respect and social relationships in Japan
// 2) いただきます (the meal ritual) — the philosophy of food and gratitude in Japan
export const jaA1Culture: CultureEpisode[] = [
    {
        id: "ja-c-a1-1",
        language: "ja",
        level: "A1",
        category: "customs",
        region: "all-japanese",
        title: {
            native: "おじぎ — The art of bowing in Japan",
            target: "おじぎ — お辞儀の文化"
        },
        subtitle: "Bowing in Japan is a language of its own — the angle, duration, and context all carry precise meaning.",

        video: {
            youtubeId: "boQmX6feIn0",
            title: "The Subtle Art of Japanese Bowing",
            channelName: "That Japanese Man Yuta",
            captionLang: "ja"
        },

        photos: [
            {
                url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
                caption: {
                    native: "A respectful bow in a business setting",
                    target: "ビジネスの場での丁寧なお辞儀"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
                caption: {
                    native: "Tokyo street life — bowing is part of everyday interaction",
                    target: "東京の街 — お辞儀は日常的なやりとりの一部"
                }
            }
        ],

        body: {
            target: `日本では、お辞儀はあいさつだけではありません。感謝、謝罪、尊敬、そして別れを表す言語です。

お辞儀の角度はとても重要です。15度は軽いあいさつです — 友達や同僚と会ったときに使います。30度はていねいなあいさつです — 初めて会う人や目上の人に使います。45度は深い敬意や感謝を表します。90度は深い謝罪のときだけ使います。

お辞儀は日本の文化の中心にあるがいねんを反映しています。「内」と「外」です。「内」は自分のグループ — 家族、友達、会社の同僚。「外」はそれ以外の人。外の人に対しては、より正式な行動が必要です。

ビジネスの世界では、お辞儀は非常に重要です。二人が同時にお辞儀をするとき、誰が先に頭を上げるか、どちらがより深くお辞儀をするかは、二人の社会的な関係を反映しています。若い人や部下は、年上の人や上司より長くお辞儀をします。

お辞儀はエレベーターの中でも行われます。一人でいるときでも、電話で話しているときでも、日本人はしばしばお辞儀をします — 相手が見えなくても。これは習慣が体に深く入っているからです。

外国人がお辞儀を間違えても、日本人はほとんど気にしません。お辞儀をしようとすること自体が敬意を示します。`,
            native: `In Japan, bowing is not just a greeting. It is a language that expresses gratitude, apology, respect, and farewell.

The angle of the bow is very important. 15 degrees is a light greeting — used when meeting friends or colleagues. 30 degrees is a polite greeting — used when meeting someone for the first time or someone senior. 45 degrees expresses deep respect or gratitude. 90 degrees is used only for deep apology.

Bowing reflects a concept at the heart of Japanese culture: 'uchi' and 'soto' — inside and outside. 'Uchi' is your own group — family, friends, company colleagues. 'Soto' is everyone else. With outsiders, more formal behaviour is required.

In the business world, bowing is very important. When two people bow at the same time, who raises their head first and who bows more deeply reflects the social relationship between the two. Younger people or subordinates bow longer than older people or superiors.

Bowing even happens inside elevators. Even when alone, even while speaking on the phone, Japanese people often bow — even when the other person cannot see them. This is because the habit has entered deeply into the body.

If a foreigner bows incorrectly, Japanese people rarely mind. The act of trying to bow itself shows respect.`
        },

        cultureVocab: [
            {
                word: "お辞儀 (おじぎ)",
                romanized: "ojigi",
                translation: "bow, bowing",
                culturalNote: "The act of bowing is so embedded in Japanese culture that train conductors, shop staff, and customer service workers bow even in phone calls and recorded announcements."
            },
            {
                word: "内 (うち)",
                romanized: "uchi",
                translation: "inside, one's own group",
                culturalNote: "One of the most important concepts in Japanese social life. Your uchi (family, close colleagues) are treated very differently from those outside the group."
            },
            {
                word: "外 (そと)",
                romanized: "soto",
                translation: "outside, those not in one's group",
                culturalNote: "The uchi/soto distinction affects language (different politeness levels), behaviour, and social obligations. It's why Japanese is so complex grammatically — different speech for different relationships."
            },
            {
                word: "敬語 (けいご)",
                romanized: "keigo",
                translation: "honorific language, polite speech",
                culturalNote: "A whole system of Japanese speech levels — sonkeigo (respectful), kenjōgo (humble), and teineigo (polite). Mastering keigo takes years even for Japanese people."
            },
            {
                word: "すみません",
                romanized: "sumimasen",
                translation: "excuse me / I'm sorry / thank you",
                culturalNote: "Used for apology, to get attention, and even to express gratitude (when receiving a favour makes you feel you've imposed). One word, three English concepts."
            }
        ],

        questions: [
            {
                id: "ja-c-a1-1-q1",
                type: "comprehension",
                prompt: { native: "What angle of bow is used for deep apology in Japan?", target: "何度のお辞儀が日本で深い謝罪に使われますか？" },
                options: ["15 degrees", "30 degrees", "45 degrees", "90 degrees"],
                answer: "90 degrees"
            },
            {
                id: "ja-c-a1-1-q2",
                type: "comprehension",
                prompt: { native: "What do the concepts of 'uchi' and 'soto' mean?", target: "「内」と「外」はどういう意味ですか？" },
                options: [
                    "Morning and evening",
                    "Public and private spaces",
                    "One's own group versus outsiders",
                    "Young people and older people"
                ],
                answer: "One's own group versus outsiders"
            },
            {
                id: "ja-c-a1-1-q3",
                type: "comparison",
                prompt: { native: "How do people greet each other in your culture? Is there a physical gesture like bowing? What does it communicate?", target: "あなたの文化では人々はどのように挨拶しますか？お辞儀のような身体的なジェスチャーはありますか？それは何を伝えますか？" }
            }
        ],

        didYouKnow: {
            native: "Japanese elevator operators (still a profession in some department stores) are trained to bow to the closing elevator doors when passengers are inside — because the passengers might see them through the gap. The bow continues until the doors are fully closed. This is not considered excessive; it is considered professional.",
            target: "デパートでまだ職業として存在するエレベーターガールは、乗客が中にいるときに閉まるエレベーターのドアに向かってお辞儀をするよう訓練されています — 乗客が隙間からこちらを見ているかもしれないからです。ドアが完全に閉まるまでお辞儀は続きます。これは過剰とは考えられません。プロフェッショナルと考えられます。"
        }
    },

    {
        id: "ja-c-a1-2",
        language: "ja",
        level: "A1",
        category: "food",
        region: "all-japanese",
        title: {
            native: "いただきます — food, gratitude, and the Japanese meal",
            target: "いただきます — 食事の前に"
        },
        subtitle: "The words said before and after a Japanese meal carry the entire philosophy of the culture's relationship with food and life.",

        video: {
            youtubeId: "4bVUe8lPbeo",
            title: "Japanese Table Manners: What are Itadakimasu & Gochisousama?",
            channelName: "Tokyo Spark",
            captionLang: "ja"
        },

        photos: [
            {
                url: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
                caption: {
                    native: "A traditional Japanese meal — every element has its place",
                    target: "日本の伝統的な食事 — すべての要素に位置がある"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800",
                caption: {
                    native: "A Japanese convenience store (konbini) — surprisingly rich food culture",
                    target: "日本のコンビニ — 驚くほど豊かな食文化"
                }
            }
        ],

        body: {
            target: `日本では、食事は言葉で始まり、言葉で終わります。

食事の前に、みんなが「いただきます」と言います。この言葉は「受け取ります」という意味です。食べ物のために命を与えてくれた動物、植物、そして料理を作った人への感謝です。学校でも、家でも、レストランでも — 日本人はほとんどの場合、この言葉を言います。

食事の後、「ごちそうさまでした」と言います。これは「ごちそう」（ごちそう＝ごちそう、走り回ること）から来ています。昔、食事を作るために食材を集めるために走り回ることが必要でした。ごちそうさまは「あなたは私のためにそんなに走ってくれた — ありがとう」という意味です。

日本の食事文化はとても豊かです。日本は世界で最もミシュランの星を持つレストランがある国です。東京だけで、パリよりも多くのミシュランの星を持っています。

しかし、日本の食文化はレストランだけではありません。コンビニエンスストア（コンビニ）も食文化の重要な部分です。セブン-イレブン、ローソン、ファミリーマートのおにぎり、サンドイッチ、弁当は、品質が非常に高いです。多くの日本人は毎日コンビニで食事を買います。

「もったいない」という概念は食事にも適用されます。食べ物を無駄にすることは、日本文化では大きな問題です。お皿のすべてを食べることは礼儀正しいことです。`,
            native: `In Japan, a meal begins with words and ends with words.

Before a meal, everyone says 'itadakimasu'. This word means 'I humbly receive'. It is gratitude to the animals and plants that gave their lives for the food, and to the person who prepared it. At school, at home, at restaurants — Japanese people say this word in most situations.

After the meal, they say 'gochisōsama deshita'. This comes from 'gochisō' (a feast — originally, 'running around'). Long ago, gathering ingredients to make a meal required running around to collect them. Gochisōsama means 'you ran around so much for me — thank you'.

Japanese food culture is very rich. Japan has more Michelin-starred restaurants than any other country in the world. Tokyo alone has more Michelin stars than Paris.

But Japanese food culture is not just restaurants. Convenience stores (konbini) are also an important part of food culture. The onigiri, sandwiches and bento boxes at 7-Eleven, Lawson, and FamilyMart are of very high quality. Many Japanese people buy their meals at the konbini every day.

The concept of 'mottainai' also applies to food. Wasting food is a serious issue in Japanese culture. Eating everything on your plate is considered polite.`
        },

        cultureVocab: [
            {
                word: "いただきます",
                romanized: "itadakimasu",
                translation: "I humbly receive (said before eating)",
                culturalNote: "Has no perfect English translation. It simultaneously thanks the cook, the farmers, the animals and plants. Skipping it is considered somewhat rude, even eating alone."
            },
            {
                word: "ごちそうさまでした",
                romanized: "gochisōsama deshita",
                translation: "Thank you for the meal (said after eating)",
                culturalNote: "Also said to restaurant staff when leaving, and to the host of any meal. The 'deshita' (past tense) is the polite form; 'gochisōsama' alone is casual."
            },
            {
                word: "もったいない",
                romanized: "mottainai",
                translation: "What a waste! (regret about wastefulness)",
                culturalNote: "A concept so culturally powerful it has been adopted internationally by environmentalists. Nobel Peace Prize winner Wangari Maathai used it as a global sustainability slogan."
            },
            {
                word: "お弁当 (おべんとう)",
                romanized: "obentō",
                translation: "packed meal, lunchbox",
                culturalNote: "Japanese bento culture is extraordinary — elaborately decorated 'kyaraben' (character bento) are made by parents for children's school lunches, sometimes taking 45+ minutes to prepare."
            },
            {
                word: "コンビニ",
                romanized: "konbini",
                translation: "convenience store",
                culturalNote: "Japanese convenience stores are genuinely world-class food destinations. The onigiri, sandwiches, hot foods and seasonal items are considered a point of national pride."
            }
        ],

        questions: [
            {
                id: "ja-c-a1-2-q1",
                type: "comprehension",
                prompt: { native: "What does 'itadakimasu' express?", target: "「いただきます」は何を表現しますか？" },
                options: [
                    "A request for more food",
                    "Gratitude to the cook, the food's origins, and all who made it possible",
                    "A wish for good health",
                    "Permission to start eating"
                ],
                answer: "Gratitude to the cook, the food's origins, and all who made it possible"
            },
            {
                id: "ja-c-a1-2-q2",
                type: "reflection",
                prompt: { native: "Is there a ritual in your culture before or after eating? What does it express?", target: "あなたの文化では食事の前や後に儀式はありますか？それは何を表現していますか？" }
            },
            {
                id: "ja-c-a1-2-q3",
                type: "comparison",
                prompt: { native: "The concept of 'mottainai' values avoiding waste deeply. Is there a similar idea in your culture or language?", target: "「もったいない」という概念は無駄を避けることを深く重視します。あなたの文化や言語に同じような考えがありますか？" }
            }
        ],

        didYouKnow: {
            native: "Tokyo has more Michelin-starred restaurants than any other city in the world — more than Paris, London, and New York combined. But many Tokyo chefs find the attention uncomfortable. Japanese culinary philosophy values quiet mastery over fame, and some chefs have actually asked Michelin to remove them from the guide.",
            target: "東京は世界で最もミシュランの星を持つレストランが多い都市です — パリ、ロンドン、ニューヨークを合わせたよりも多いです。しかし、多くの東京の料理人はこの注目を居心地悪く感じています。日本の料理哲学は名声よりも静かな熟練を重視しており、一部の料理人は実際にミシュランにガイドから自分たちを外すよう求めています。"
        }
    }
]

