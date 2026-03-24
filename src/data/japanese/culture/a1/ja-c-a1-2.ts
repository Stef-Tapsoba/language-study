import { CultureEpisode } from "../../../../types"
export const jaCA12: CultureEpisode = {
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
