import { CultureEpisode } from "../../../../types"
export const jaCA13: CultureEpisode = {
    id: "ja-c-a1-3",
    language: "ja",
    level: "A1",
    category: "daily-life",
    region: "all-japanese",
    title: {
        native: "コンビニ — Japan's convenience store culture",
        target: "コンビニ — にほんのコンビニぶんか"
    },
    subtitle: "Japan's convenience stores are not just shops — they are a way of life, open 24 hours and offering services you'd never expect from a corner store.",

    photos: [
        {
            url: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800",
            caption: {
                native: "A glowing konbini at night — a familiar sight on every Japanese street corner",
                target: "よるにひかるコンビニ — にほんのまちかどにあるおなじみのけしき"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=800",
            caption: {
                native: "おにぎり and bento boxes — the heart of the konbini food section",
                target: "おにぎりとおべんとう — コンビニのしょくひんコーナーのちゅうしん"
            }
        }
    ],

    body: {
        target: `にほんには、コンビニエンスストア — コンビニ — がやく5まん6せんけんあります。ひとりのにほんじんがいちねんでコンビニにいくかいすうは、へいきん300かいいじょうといわれています。

コンビニはただのみせではありません。にほんのコンビニでは、しょくひんをかうだけでなく、いろいろなサービスがあります。ATMでおかねをひきだすことができます。こうきょうりょうきんをはらうことができます。コピーきやスキャナーをつかうことができます。チケットをよやくしたりうけとったりすることもできます。

いちばんにんきなのは、セブン-イレブン、ファミリーマート、ローソンのさんだいチェーンです。にほんじゅうのどこにいってもみつかります。えきのなかにも、やまのなかにも、しまのうえにもあります。

コンビニのたべものはとくべつです。おにぎりはにほんのコンビニのシンボルです。つめたいおにぎりとあたたかいおにぎりがあります。おでん、からあげ、にくまんなど、あたたかいたべものもカウンターにあります。

コンビニにはいったら「いらっしゃいませ」というあいさつがきこえます。しょくひんをかったら「レジぶくろはいりますか？」ときかれることがあります。「いりません、けっこうです」とこたえましょう。`,
        native: `Japan has approximately 56,000 convenience stores — konbini. It is said that the average Japanese person visits a konbini more than 300 times a year.

A konbini is not just a shop. At a Japanese konbini, you can do far more than buy food. You can withdraw cash from an ATM, pay public utility bills, use a photocopier or scanner, and book or pick up tickets.

The three biggest chains are Seven-Eleven, FamilyMart, and Lawson. You will find them everywhere in Japan — inside train stations, in the mountains, even on remote islands.

The food at konbini is something special. Onigiri (rice balls) are the symbol of the Japanese konbini. There are cold ones and warm ones. Hot food such as oden (fish cake stew), fried chicken, and steamed pork buns is also available at the counter.

When you walk into a konbini you will hear 'irasshaimase' — welcome. When you buy something you may be asked 'Reji bukuro wa irimasu ka?' — Do you need a bag? Answer 'irimasen, kekkou desu' — No thank you.`
    },

    simpleTarget: `にほんにはコンビニがたくさんあります。
コンビニはまいにちひらいています。よるもひらいています。
コンビニでたべものをかうことができます。
おにぎりはにほんのコンビニのたべものです。
コンビニでATMやコピーきもつかえます。
「いらっしゃいませ」はコンビニのあいさつです。`,

    cultureVocab: [
        {
            word: "コンビニ",
            romanized: "konbini",
            translation: "convenience store (short for コンビニエンスストア)",
            culturalNote: "In Japan, konbini are so embedded in daily life that they serve as community hubs — you can pay taxes, print documents, buy concert tickets, and eat a full meal, all at 3am."
        },
        {
            word: "おにぎり",
            romanized: "onigiri",
            translation: "rice ball — triangular, wrapped in nori seaweed",
            culturalNote: "The konbini perfected a plastic wrapper that keeps the nori crispy and separate from the rice until you open it. Peeling it correctly (following the numbers 1-2-3) is a small rite of passage for visitors."
        },
        {
            word: "いらっしゃいませ",
            romanized: "irasshaimase",
            translation: "welcome (said when a customer enters)",
            culturalNote: "You do not need to reply to いらっしゃいませ. Staff are trained to say it to every customer. Replying with a nod or small smile is perfectly fine."
        },
        {
            word: "レジ",
            romanized: "reji",
            translation: "cash register; checkout",
            culturalNote: "At the コンビニ レジ you will be offered bags, chopsticks, forks, and sometimes heating for your food. A simple うなずき (nod) or gesture is enough if your Japanese isn't ready yet."
        },
        {
            word: "あたためますか",
            romanized: "atatamemasu ka",
            translation: "Shall I heat this up for you?",
            culturalNote: "Staff ask this for many konbini items like bento boxes. Say 'はい、おねがいします' (yes please) or 'いいえ、けっこうです' (no thank you)."
        }
    ],

    questions: [
        {
            id: "ja-c-a1-3-q1",
            type: "comprehension",
            prompt: { native: "Approximately how many convenience stores are there in Japan?", target: "にほんにはやくなんけんのコンビニがありますか？" },
            options: ["About 5,600", "About 56,000", "About 560", "About 560,000"],
            answer: "About 56,000"
        },
        {
            id: "ja-c-a1-3-q2",
            type: "comprehension",
            prompt: { native: "Which of these is NOT a service typically available at a Japanese konbini?", target: "つぎのうち、にほんのコンビニでふつうできないサービスはどれですか？" },
            options: [
                "Withdrawing cash from an ATM",
                "Paying utility bills",
                "Getting a medical prescription filled",
                "Picking up event tickets"
            ],
            answer: "Getting a medical prescription filled"
        },
        {
            id: "ja-c-a1-3-q3",
            type: "comparison",
            prompt: { native: "Do convenience stores in your country offer similar services? What surprised you most about Japanese konbini culture?", target: "あなたのくにのコンビニでもにたようなサービスがありますか？にほんのコンビニぶんかでいちばんおどろいたことはなんですか？" }
        }
    ],

    didYouKnow: {
        native: "During the 2011 Tōhoku earthquake and tsunami, convenience stores were among the first businesses to reopen in affected areas. They had emergency protocols built in — stores automatically shifted to emergency distribution mode, providing food and supplies to survivors. The konbini is not just a business; it is infrastructure.",
        target: "2011ねんのとうほくだいしんさいとつなみのとき、コンビニはひさいちでさいしょにさいかいしたひとつです。コンビニにはきんきゅうじたいのプロトコルがあり、じどうてきにひじょうはいきゅうモードにきりかわり、ひさいしゃにしょくりょうとぶっしをていきょうしました。コンビニはただのビジネスではなく、しゃかいのインフラです。"
    }
}
