// src/data/japanese/culture/b1.ts
import { CultureEpisode } from "../../../types"

export const jaB1Culture: CultureEpisode[] = [
    {
        id: "ja-c-b1-1",
        language: "ja",
        level: "B1",
        category: "festivals",
        region: "all-japanese",
        title: {
            native: "Matsuri — The living heart of Japanese community life",
            target: "お祭り文化 — 夏祭りから神社の伝統まで"
        },
        subtitle: "Japanese festivals are not spectacles for tourists — they are living expressions of community, Shinto faith, and the rhythm of the seasons.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1601931935821-5fbe71157695?w=800",
                caption: {
                    native: "Mikoshi portable shrine carried through the streets during a summer matsuri",
                    target: "夏祭りで街を練り歩く神輿"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800",
                caption: {
                    native: "Lanterns and yukata — the iconic atmosphere of a Japanese summer festival",
                    target: "提灯と浴衣 — 日本の夏祭りの象徴的な雰囲気"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
                caption: {
                    native: "A Shinto shrine gate (torii) — the spiritual origin of every matsuri",
                    target: "鳥居 — すべての祭りの精神的な起源"
                }
            }
        ],

        body: {
            target: `日本の祭り（お祭り）は、単なる娯楽のイベントではありません。その根底には神道という日本固有の宗教があり、自然の神々（八百万の神）に感謝を捧げ、地域の安全や豊作を祈るという精神的な意味があります。

祭りのクライマックスのひとつが、神輿（みこし）の渡御です。神輿とは、神様が乗るとされる輿のことで、町内を担いで練り歩くことで、神様の力を地域全体に行き渡らせるとされています。神輿を担ぐのは名誉なことであり、地域の絆を深める重要な役割を果たします。

夏祭りでは、屋台（食べ物や遊びの露店）が神社の参道に並び、浴衣を着た人々が金魚すくいや射的を楽しみます。盆踊りも夏の祭りの重要な要素で、円を描くように踊ることで、この世に帰ってきた先祖の霊を慰めます。

祭りのもうひとつの特徴は、地域ごとの独自性です。京都の祇園祭、東京の三社祭、大阪の天神祭など、各地の祭りはその土地の歴史や文化を色濃く反映しています。たとえば、徳島の阿波おどりでは独特のリズムと踊りで知られ、数百年の歴史を持ちます。

現代でも祭りは地域コミュニティを結びつける力を持っています。都会に出た若者が祭りのために故郷に帰ることも珍しくありません。祭りは日本人のアイデンティティの核心にある文化的記憶です。`,
            native: `Japanese festivals (matsuri) are not simply entertainment events. At their core lies Shinto, Japan's indigenous religion, and they carry a spiritual meaning: to give thanks to the natural gods (yaoyorozu no kami — the eight million deities) and to pray for the safety of the community and a good harvest.

One of the climaxes of a festival is the mikoshi procession. A mikoshi is a portable shrine said to carry a deity, and by carrying it through the neighbourhood, it is believed that the power of the god is spread throughout the whole community. Carrying the mikoshi is considered an honour and plays an important role in deepening local bonds.

At summer festivals, food stalls (yatai) line the shrine path, and people dressed in yukata enjoy goldfish scooping and shooting galleries. Bon Odori dancing is also an important part of summer festivals — people dance in a circle to comfort the spirits of ancestors who have returned to this world.

Another characteristic of festivals is their local uniqueness. Kyoto's Gion Matsuri, Tokyo's Sanja Matsuri, and Osaka's Tenjin Matsuri each strongly reflect the history and culture of their region. The Awa Odori in Tokushima, for example, is known for its unique rhythm and dance, and has a history of several hundred years.

Even today, festivals have the power to connect local communities. It is not unusual for young people who have moved to the city to return home for the festival. Matsuri are a cultural memory at the core of Japanese identity.`
        },

        cultureVocab: [
            {
                word: "八百万の神",
                romanized: "yaoyorozu no kami",
                translation: "the eight million gods (all the deities of nature)",
                culturalNote: "In Shinto belief, gods (kami) reside in natural phenomena — mountains, rivers, trees, rocks, even specific objects. This explains why Japanese culture treats nature with such reverence."
            },
            {
                word: "神輿",
                romanized: "mikoshi",
                translation: "portable shrine carried in processions",
                culturalNote: "The tradition of carrying a mikoshi (often while chanting 'wasshoi!') is believed to energise the deity and spread its blessings. The louder and more vigorous the carrying, the more the god is said to be pleased."
            },
            {
                word: "盆踊り",
                romanized: "bon odori",
                translation: "Bon festival dance",
                culturalNote: "Bon Odori is danced during the Obon summer festival to welcome and then farewell the spirits of ancestors who return briefly to the living world. The circle dance is deliberately simple so that everyone — young and old — can participate."
            },
            {
                word: "屋台",
                romanized: "yatai",
                translation: "festival food stall",
                culturalNote: "Classic yatai foods include takoyaki (octopus balls), yakisoba (fried noodles), taiyaki (fish-shaped bean paste cakes), kakigōri (shaved ice), and choco banana. The food stalls are as much a cultural institution as the festival itself."
            },
            {
                word: "参道",
                romanized: "sandō",
                translation: "approach path to a shrine or temple",
                culturalNote: "The sandō is the sacred pathway leading to the shrine gate (torii). During festivals it transforms into a market of stalls, but its original purpose is to prepare the visitor spiritually for entering the sacred space."
            }
        ],

        questions: [
            {
                id: "ja-c-b1-1-q1",
                type: "comprehension",
                prompt: {
                    native: "What is the spiritual purpose of carrying a mikoshi through the neighbourhood?",
                    target: "神輿を町内に担いで練り歩く精神的な目的は何ですか？"
                },
                options: [
                    "To spread the power of the deity throughout the whole community",
                    "To demonstrate the physical strength of young men",
                    "To raise funds for the local shrine's maintenance",
                    "To mark the boundary of the shrine's territory"
                ],
                answer: "To spread the power of the deity throughout the whole community"
            },
            {
                id: "ja-c-b1-1-q2",
                type: "comprehension",
                prompt: {
                    native: "What is the purpose of Bon Odori dancing?",
                    target: "盆踊りの目的は何ですか？"
                },
                options: [
                    "To comfort the spirits of ancestors who have returned to this world",
                    "To celebrate the arrival of the new year",
                    "To give thanks for the summer harvest",
                    "To entertain foreign tourists visiting Japan"
                ],
                answer: "To comfort the spirits of ancestors who have returned to this world"
            },
            {
                id: "ja-c-b1-1-q3",
                type: "comparison",
                prompt: {
                    native: "Does your culture have a festival that connects people to their local community or ancestors? What role does it play compared to a Japanese matsuri?",
                    target: "あなたの文化には、地域コミュニティや先祖とつながるお祭りがありますか？日本のお祭りと比べてどんな役割を果たしていますか？"
                }
            }
        ],

        didYouKnow: {
            native: "Kyoto's Gion Matsuri is not just a festival — it is a UNESCO Intangible Cultural Heritage. The festival has been held annually since 869 CE, when it was first performed to appease the gods during a devastating epidemic. The towering yamaboko floats used today can be up to 25 metres tall and weigh 12 tonnes, and are assembled without a single nail, using only ropes — a technique passed down through specialist families over centuries.",
            target: "京都の祇園祭は単なるお祭りではありません。ユネスコ無形文化遺産です。このお祭りは、疫病を鎮めるために初めて行われた869年から毎年開催されています。今日使われる山鉾は高さ最大25メートル、重さ12トンにもなり、釘を一本も使わず縄だけで組み立てられます。これは何世紀にもわたって専門の家系に受け継がれてきた技術です。"
        }
    }
]
