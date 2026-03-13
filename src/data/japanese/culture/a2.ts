// src/data/japanese/culture/a2.ts
import { CultureEpisode } from "../../../types"

export const jaA2Culture: CultureEpisode[] = [
    {
        id: "ja-c-a2-1",
        language: "ja",
        level: "A2",
        category: "customs",
        region: "all-japanese",
        title: {
            native: "Onsen — Japan's hot spring bath culture",
            target: "温泉 — 日本の湯の文化"
        },
        subtitle: "From volcanic mountains to seaside ryokan, Japan's onsen culture is a ritual of relaxation, community, and the art of bathing properly.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800",
                caption: {
                    native: "An outdoor rotenburo hot spring bath in a forested mountain setting",
                    target: "山の森に囲まれた露天風呂"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
                caption: {
                    native: "Traditional ryokan inn — the setting for many onsen experiences",
                    target: "伝統的な旅館 — 多くの温泉体験の舞台"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?w=800",
                caption: {
                    native: "Beppu city in Oita Prefecture — one of Japan's great onsen towns",
                    target: "大分県別府市 — 日本を代表する温泉の街"
                }
            }
        ],

        body: {
            target: `日本は火山国であるため、全国に約三千の温泉地があります。温泉とは、地中から湧き出る自然の熱湯のことです。日本人にとって温泉は、単なる入浴ではなく、心と体を癒すための大切な文化です。

温泉に入る前には、いくつかのルールを守る必要があります。まず、浴槽に入る前に、かけ湯をして体を洗います。石けんやシャンプーは洗い場で使い、浴槽の中では使いません。タオルは浴槽の中に入れず、頭の上に置くか、洗い場に置きます。入れ墨がある人は、多くの温泉で入浴を断られることがあります。これは昔から続くルールです。

温泉には様々な種類があります。硫黄泉は白く濁っており、皮膚によいと言われています。炭酸泉は血行を促進します。塩化物泉は体を温める効果があります。

有名な温泉地としては、草津（群馬県）、箱根（神奈川県）、別府・湯布院（大分県）、登別（北海道）などがあります。それぞれの温泉地は、泉質や景色、食事などの点で独自の魅力を持っています。

旅館に泊まると、夕食前と朝食前の二回、温泉を楽しむのが一般的です。露天風呂では、自然の景色を眺めながらゆっくりと湯につかることができます。`,
            native: `Because Japan is a volcanic country, there are around three thousand hot spring resorts across the country. An onsen is a natural hot spring that wells up from the ground. For Japanese people, onsen is not simply bathing — it is an important culture for healing the mind and body.

Before entering an onsen, there are several rules to follow. First, before getting into the bath, you must rinse your body with the kakeyu (a scoop of bath water). Soap and shampoo are used at the washing area and never in the bath itself. Towels are not placed in the bath — they go on top of your head or are left at the washing area. People with tattoos may be turned away at many onsen — this is a rule that has continued from long ago.

There are many types of onsen. Sulphur springs are white and cloudy, and are said to be good for the skin. Carbonated springs promote blood circulation. Salt water springs have the effect of warming the body deeply.

Famous onsen resorts include Kusatsu (Gunma Prefecture), Hakone (Kanagawa Prefecture), Beppu and Yufuin (Oita Prefecture), and Noboribetsu (Hokkaido). Each resort has its own unique appeal in terms of water quality, scenery, and food.

When staying at a ryokan inn, it is common to enjoy the onsen twice — once before dinner and once before breakfast. In a rotenburo outdoor bath, you can soak slowly in the hot water while gazing at the natural scenery around you.`
        },

        cultureVocab: [
            {
                word: "温泉",
                romanized: "onsen",
                translation: "hot spring bath",
                culturalNote: "Japan has one of the densest concentrations of hot springs in the world thanks to its volcanic geography. Onsen bathing dates back over 1,000 years and is deeply embedded in Japanese wellness culture."
            },
            {
                word: "露天風呂",
                romanized: "rotenburo",
                translation: "outdoor hot spring bath",
                culturalNote: "The rotenburo (open-air bath) is considered the most desirable onsen experience — especially when surrounded by autumn leaves, snow-covered mountains, or ocean views."
            },
            {
                word: "旅館",
                romanized: "ryokan",
                translation: "traditional Japanese inn",
                culturalNote: "Staying at a ryokan is an art form in itself: tatami rooms, futon bedding, multi-course kaiseki meals, and private or shared onsen baths. A high-end ryokan is called a 'ryokan resort' and can cost several hundred pounds per night."
            },
            {
                word: "かけ湯",
                romanized: "kakeyu",
                translation: "pre-bath rinse (pouring hot water over the body)",
                culturalNote: "An essential onsen etiquette step. It serves two purposes: warming the body before entering the hot bath, and showing respect by cleaning yourself before sharing the communal water."
            },
            {
                word: "泉質",
                romanized: "senshitsu",
                translation: "water quality / mineral composition of a hot spring",
                culturalNote: "Japanese onsen are classified by their mineral content into over ten official types, each with different health benefits — from sodium chloride springs that warm the body to iron springs that turn the water a rust-red colour."
            }
        ],

        questions: [
            {
                id: "ja-c-a2-1-q1",
                type: "comprehension",
                prompt: {
                    native: "Which of the following is correct onsen etiquette according to the passage?",
                    target: "文章によると、正しい温泉マナーはどれですか？"
                },
                options: [
                    "Wash your body at the washing area before entering the bath",
                    "Use shampoo inside the bathtub to save time",
                    "Bring your towel into the bath to dry off after",
                    "Enter the bath immediately after arriving"
                ],
                answer: "Wash your body at the washing area before entering the bath"
            },
            {
                id: "ja-c-a2-1-q2",
                type: "comprehension",
                prompt: {
                    native: "What is said about sulphur springs?",
                    target: "硫黄泉についてどのように書かれていますか？"
                },
                options: [
                    "They are white and cloudy, and said to be good for the skin",
                    "They are clear and promote blood circulation",
                    "They are very salty and warm the body deeply",
                    "They are found only in Hokkaido"
                ],
                answer: "They are white and cloudy, and said to be good for the skin"
            },
            {
                id: "ja-c-a2-1-q3",
                type: "reflection",
                prompt: {
                    native: "Is there a bathing or wellness ritual in your culture that brings people together or has special rules? How does it compare to onsen culture?",
                    target: "あなたの文化に、人々を集めたり特別なルールがある入浴や健康の儀式はありますか？温泉文化と比べてどうですか？"
                }
            }
        ],

        didYouKnow: {
            native: "Monkeys also love onsen. In Nagano Prefecture, Japanese macaques — also called snow monkeys — have been photographed bathing in natural hot springs surrounded by snow since the 1960s. The behaviour began when one young monkey entered the spring to retrieve a soybean, and others followed. Today the Jigokudani Monkey Park is one of Japan's most photographed tourist sights.",
            target: "サルも温泉が大好きです。長野県では、ニホンザル（雪猿とも呼ばれる）が雪に囲まれた天然温泉に入浴している様子が1960年代から撮影されています。この行動は、一匹の若いサルが大豆を取り出すために温泉に入り、他のサルがそれに続いたことから始まりました。今日、地獄谷野猿公苑は日本で最も写真に撮られる観光地のひとつです。"
        }
    }
]
