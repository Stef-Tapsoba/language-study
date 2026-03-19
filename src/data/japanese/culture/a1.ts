// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE A1 CULTURE
// src/data/japanese/culture/a1.ts
// ─────────────────────────────────────────────────────────────────────────────
import { CultureEpisode } from "../../../types"

// Two episodes on core cultural concepts that are essential for understanding Japan:
// 1) おじぎ (bowing) — the language of respect and social relationships in Japan
// 2) いただきます (the meal ritual) — the philosophy of food and gratitude in Japan
//
// NOTE: All target-language text is written in hiragana/katakana only (no kanji),
// as this content is for A1 learners who have not yet studied kanji.
export const jaA1Culture: CultureEpisode[] = [
    {
        id: "ja-c-a1-1",
        language: "ja",
        level: "A1",
        category: "customs",
        region: "all-japanese",
        title: {
            native: "おじぎ — The art of bowing in Japan",
            target: "おじぎ — おじぎのぶんか"
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
                    target: "ビジネスのばでのていねいなおじぎ"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
                caption: {
                    native: "Tokyo street life — bowing is part of everyday interaction",
                    target: "とうきょうのまち — おじぎはにちじょうてきなやりとりのいちぶ"
                }
            }
        ],

        body: {
            target: `にほんでは、おじぎはあいさつだけではありません。かんしゃ、しゃざい、そんけい、そしてわかれをあらわすげんごです。

おじぎのかくどはとてもじゅうようです。15どはかるいあいさつです — ともだちやどうりょうとあったときにつかいます。30どはていねいなあいさつです — はじめてあうひとやめうえのひとにつかいます。45どはふかいけいいやかんしゃをあらわします。90どはふかいしゃざいのときだけつかいます。

おじぎはにほんのぶんかのちゅうしんにあるがいねんをはんえいしています。「うち」と「そと」です。「うち」はじぶんのグループ — かぞく、ともだち、かいしゃのどうりょう。「そと」はそれいがいのひと。そとのひとにたいしては、よりせいしきなこうどうがひつようです。

ビジネスのせかいでは、おじぎはひじょうにじゅうようです。ふたりがどうじにおじぎをするとき、だれがさきにあたまをあげるか、どちらがよりふかくおじぎをするかは、ふたりのしゃかいてきなかんけいをはんえいしています。わかいひとやぶかは、としうえのひとやじょうしよりながくおじぎをします。

おじぎはエレベーターのなかでもおこなわれます。ひとりでいるときでも、でんわではなしているときでも、にほんじんはしばしばおじぎをします — あいてがみえなくても。これはしゅうかんがからだにふかくはいっているからです。

がいこくじんがおじぎをまちがえても、にほんじんはほとんどきにしません。おじぎをしようとすることじたいがけいいをしめします。`,
            native: `In Japan, bowing is not just a greeting. It is a language that expresses gratitude, apology, respect, and farewell.

The angle of the bow is very important. 15 degrees is a light greeting — used when meeting friends or colleagues. 30 degrees is a polite greeting — used when meeting someone for the first time or someone senior. 45 degrees expresses deep respect or gratitude. 90 degrees is used only for deep apology.

Bowing reflects a concept at the heart of Japanese culture: 'uchi' and 'soto' — inside and outside. 'Uchi' is your own group — family, friends, company colleagues. 'Soto' is everyone else. With outsiders, more formal behaviour is required.

In the business world, bowing is very important. When two people bow at the same time, who raises their head first and who bows more deeply reflects the social relationship between the two. Younger people or subordinates bow longer than older people or superiors.

Bowing even happens inside elevators. Even when alone, even while speaking on the phone, Japanese people often bow — even when the other person cannot see them. This is because the habit has entered deeply into the body.

If a foreigner bows incorrectly, Japanese people rarely mind. The act of trying to bow itself shows respect.`
        },

        simpleTarget: `にほんでは、おじぎはとてもたいせつです。
おじぎはあいさつのひとつです。
あさいおじぎはかるいあいさつです。
ふかいおじぎはかんしゃやしゃざいをしめします。
にほんじんはまいにちおじぎをします。
がっこうでもしごとでも、おじぎはたいせつです。
がいこくじんがおじぎをすると、にほんじんはとてもうれしいです。`,

        cultureVocab: [
            {
                word: "おじぎ",
                romanized: "ojigi",
                translation: "bow, bowing",
                culturalNote: "The act of bowing is so embedded in Japanese culture that train conductors, shop staff, and customer service workers bow even in phone calls and recorded announcements."
            },
            {
                word: "あいさつ",
                romanized: "aisatsu",
                translation: "greeting",
                culturalNote: "In Japan, greetings are taken very seriously. The right あいさつ at the right time — with the right bow — communicates your relationship and your character."
            },
            {
                word: "かんしゃ",
                romanized: "kansha",
                translation: "gratitude, thankfulness",
                culturalNote: "Expressing かんしゃ through bowing is central to Japanese daily life. A deep, slow bow says 'thank you' more powerfully than words alone."
            },
            {
                word: "しゃざい",
                romanized: "shazai",
                translation: "apology",
                culturalNote: "A 90-degree bow is reserved for deep しゃざい. In Japan, public apologies by company executives or politicians always include a formal, sustained bow."
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
                prompt: { native: "What angle of bow is used for deep apology in Japan?", target: "なんどのおじぎがにほんでふかいしゃざいにつかわれますか？" },
                options: ["15 degrees", "30 degrees", "45 degrees", "90 degrees"],
                answer: "90 degrees"
            },
            {
                id: "ja-c-a1-1-q2",
                type: "comprehension",
                prompt: { native: "What do the concepts of 'uchi' and 'soto' mean?", target: "「うち」と「そと」はどういういみですか？" },
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
                prompt: { native: "How do people greet each other in your culture? Is there a physical gesture like bowing? What does it communicate?", target: "How do people greet each other in your culture? Is there a physical gesture like bowing? What does it communicate?" }
            }
        ],

        didYouKnow: {
            native: "Japanese elevator operators (still a profession in some department stores) are trained to bow to the closing elevator doors when passengers are inside — because the passengers might see them through the gap. The bow continues until the doors are fully closed. This is not considered excessive; it is considered professional.",
            target: "デパートでまだしょくぎょうとしてそんざいするエレベーターガールは、じょうきゃくがなかにいるときにしまるエレベーターのドアにむかっておじぎをするようくんれんされています — じょうきゃくがすきまからこちらをみているかもしれないからです。ドアがかんぜんにしまるまでおじぎはつづきます。これはかじょうとはかんがえられません。プロフェッショナルとかんがえられます。"
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
            target: "いただきます — しょくじのまえに"
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
                    target: "にほんのでんとうてきなしょくじ — すべてのようそにいちがある"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800",
                caption: {
                    native: "A Japanese convenience store (konbini) — surprisingly rich food culture",
                    target: "にほんのコンビニ — おどろくほどゆたかなしょくぶんか"
                }
            }
        ],

        body: {
            target: `にほんでは、しょくじはことばではじまり、ことばでおわります。

しょくじのまえに、みんなが「いただきます」といいます。このことばは「うけとります」というみです。たべもののためにいのちをあたえてくれたどうぶつ、しょくぶつ、そしてりょうりをつくったひとへのかんしゃです。がっこうでも、いえでも、レストランでも — にほんじんはほとんどのばあい、このことばをいいます。

しょくじのあと、「ごちそうさまでした」といいます。これは「ごちそう」（もともとは「はしりまわること」）からきています。むかし、しょくじをつくるためにしょくざいをあつめるためにはしりまわることがひつようでした。ごちそうさまは「あなたはわたしのためにそんなにはしってくれた — ありがとう」というみです。

にほんのしょくぶんかはとてもゆたかです。にほんはせかいでもっともミシュランのほしをもつレストランがあるくにです。とうきょうだけで、パリよりもおおくのミシュランのほしをもっています。

しかし、にほんのしょくぶんかはレストランだけではありません。コンビニエンスストア（コンビニ）もしょくぶんかのじゅうようなぶぶんです。セブン-イレブン、ローソン、ファミリーマートのおにぎり、サンドイッチ、おべんとうは、ひんしつがひじょうにたかいです。おおくのにほんじんはまいにちコンビニでしょくじをかいます。

「もったいない」というがいねんはしょくじにもあてはまります。たべものをむだにすることは、にほんのぶんかではおおきなもんだいです。おさらのすべてをたべることはれいぎただしいことです。`,
            native: `In Japan, a meal begins with words and ends with words.

Before a meal, everyone says 'itadakimasu'. This word means 'I humbly receive'. It is gratitude to the animals and plants that gave their lives for the food, and to the person who prepared it. At school, at home, at restaurants — Japanese people say this word in most situations.

After the meal, they say 'gochisōsama deshita'. This comes from 'gochisō' (a feast — originally, 'running around'). Long ago, gathering ingredients to make a meal required running around to collect them. Gochisōsama means 'you ran around so much for me — thank you'.

Japanese food culture is very rich. Japan has more Michelin-starred restaurants than any other country in the world. Tokyo alone has more Michelin stars than Paris.

But Japanese food culture is not just restaurants. Convenience stores (konbini) are also an important part of food culture. The onigiri, sandwiches and bento boxes at 7-Eleven, Lawson, and FamilyMart are of very high quality. Many Japanese people buy their meals at the konbini every day.

The concept of 'mottainai' also applies to food. Wasting food is a serious issue in Japanese culture. Eating everything on your plate is considered polite.`
        },

        simpleTarget: `にほんでは、しょくじのまえに「いただきます」といいます。
「いただきます」はかんしゃのことばです。
しょくじのあとに「ごちそうさまでした」といいます。
これはりょうりをつくったひとへのおれいです。
にほんのたべものはとてもおいしいです。
とうきょうにはたくさんのゆうめいなレストランがあります。
コンビニのごはんもとてもおいしいです。`,

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
                word: "かんしゃ",
                romanized: "kansha",
                translation: "gratitude, thankfulness",
                culturalNote: "Both いただきます and ごちそうさまでした are expressions of かんしゃ. This deep sense of gratitude for food — and for those who prepared it — runs through all of Japanese food culture."
            },
            {
                word: "たべもの",
                romanized: "tabemono",
                translation: "food",
                culturalNote: "In Japanese, たべもの (food) is treated with great respect. Wasting たべもの is considered deeply impolite — the concept of もったいない (what a waste!) applies strongly to food."
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
                prompt: { native: "What does 'itadakimasu' express?", target: "「いただきます」はなにをひょうげんしますか？" },
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
                prompt: { native: "Is there a ritual in your culture before or after eating? What does it express?", target: "Is there a ritual in your culture before or after eating? What does it express?" }
            },
            {
                id: "ja-c-a1-2-q3",
                type: "comparison",
                prompt: { native: "The concept of 'mottainai' values avoiding waste deeply. Is there a similar idea in your culture or language?", target: "The concept of 'mottainai' values avoiding waste deeply. Is there a similar idea in your culture or language?" }
            }
        ],

        didYouKnow: {
            native: "Tokyo has more Michelin-starred restaurants than any other city in the world — more than Paris, London, and New York combined. But many Tokyo chefs find the attention uncomfortable. Japanese culinary philosophy values quiet mastery over fame, and some chefs have actually asked Michelin to remove them from the guide.",
            target: "とうきょうはせかいでもっともミシュランのほしをもつレストランがおおいとしです — パリ、ロンドン、ニューヨークをあわせたよりもおおいです。しかし、おおくのとうきょうのりょうりにんはこのちゅうもくをいごこちわるくかんじています。にほんのりょうりてつがくはめいせいよりもしずかなじゅくれんをたいせつにしており、いちぶのりょうりにんはじっさいにミシュランにガイドからじぶんたちをはずすようもとめています。"
        }
    }
]
