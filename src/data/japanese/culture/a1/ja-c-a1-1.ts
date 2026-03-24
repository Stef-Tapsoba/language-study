import { CultureEpisode } from "../../../../types"
export const jaCA11: CultureEpisode = {
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
}
