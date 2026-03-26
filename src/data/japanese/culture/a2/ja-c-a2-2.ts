import { CultureEpisode } from "../../../../types"

export const jaCA22: CultureEpisode = {
    id: "ja-c-a2-2",
    language: "ja",
    level: "A2",
    category: "food",
    region: "all-japanese",
    title: {
        native: "Bento Culture — The Art of the Packed Lunch",
        target: "お弁当文化 — 日本の詰め合わせの美学"
    },
    subtitle: "The Japanese bento box is far more than a packed lunch. It is a craft, a language of care, and a window into how food, aesthetics, and love intersect in everyday Japanese life.",
    photos: [
        {
            url: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800",
            caption: {
                native: "A colourful homemade bento box with rice, vegetables, and protein",
                target: "ご飯・野菜・タンパク質が詰まった手作りのカラフルなお弁当"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800",
            caption: {
                native: "Ekiben — station bento sold on bullet trains and railway platforms across Japan",
                target: "駅弁 — 新幹線や全国の駅で販売される駅弁"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
            caption: {
                native: "A kyaraben (character bento) shaped like popular anime characters",
                target: "キャラ弁 — 人気アニメキャラクターを模した可愛いお弁当"
            }
        }
    ],
    body: {
        target: `お弁当の歴史は古く、平安時代（794年〜1185年）にまで遡ります。当時は干し飯（ほしいい）という乾燥させたご飯を持ち歩いていたとされています。現在のような蓋付きの弁当箱が普及したのは江戸時代のことで、お花見や観劇の際に美しい弁当を持参することが、豊かさや教養の象徴とされていました。

現代のお弁当文化は多岐にわたります。「キャラ弁」は、アニメや動物のキャラクターをご飯やおかずで表現した弁当です。子供のためにお母さんが丁寧に作ることが多く、愛情表現のひとつとして広く知られています。「駅弁」は、全国の鉄道駅や新幹線の中で販売される地域の名産品を使った弁当です。旅の楽しみのひとつとして、多くの旅行者に愛されています。

日本の学校では、給食（きゅうしょく）という仕組みがあります。栄養バランスの取れた温かい食事が学校から提供され、当番の生徒が自分たちで配膳します。一方で、私立学校や一部の学校では今もお弁当を持参する文化が残っています。

コンビニのお弁当も日本では重要な存在です。セブンイレブン・ファミリーマート・ローソンなどのコンビニは、毎日新鮮な弁当を数十種類揃えています。これらは電子レンジで温めてすぐに食べられる手軽さから、会社員や学生を中心に広く利用されています。

お弁当を誰かのために作ることは、日本では愛情や気遣いの表現です。「あの人のために、早起きして弁当を作る」という行為には、言葉では言い尽くせない優しさが込められています。`,
        native: `The history of bento stretches back to the Heian period (794–1185 AD), when people are said to have carried dried rice called hoshi-ii. The lid-equipped bento box that we know today became widespread in the Edo period, and bringing an elegant bento to hanami (cherry blossom viewing) or theatre was a symbol of wealth and culture.

Modern bento culture takes many forms. Kyaraben (character bento) are lunchboxes designed to resemble anime characters or animals, using rice and side dishes. They are most often made by mothers for their children and are widely recognised as a form of expressing love. Ekiben (station bento) are sold at train stations and on bullet trains across the country, using each region's local specialities. They are cherished by travellers as one of the pleasures of a journey.

Japanese schools operate a system called kyushoku (school lunch), where nutritionally balanced hot meals are provided by the school. Students take turns serving the food themselves. However, in some private schools and in certain regions, the tradition of bringing a homemade bento continues.

Convenience store bento (konbini bento) are also a major part of Japanese food culture. Chains like 7-Eleven, FamilyMart, and Lawson stock dozens of fresh bento varieties every day. The ease of microwaving them and eating straight away makes them popular with office workers and students.

Making a bento for someone in Japan is an expression of affection and care. The act of waking up early to pack lunch for someone carries a tenderness that goes beyond words.`
    },
    cultureVocab: [
        {
            word: "お弁当",
            romanized: "obentou",
            translation: "packed lunch / lunchbox",
            culturalNote: "The word bento (弁当) dates to the late Azuchi–Momoyama period. The お prefix adds politeness. A beautifully packed bento is seen as a measure of care and skill — presented at school, work, picnics, and even at sports tournaments."
        },
        {
            word: "キャラ弁",
            romanized: "kyaraben",
            translation: "character bento — a lunchbox designed as a cute character",
            culturalNote: "Kyaraben became a social phenomenon in Japan in the 2000s. Mothers compete in informal contests and post photos online. Making one can take an hour or more. It reflects the Japanese aesthetic value of 可愛い (kawaii — cuteness) applied even to meals."
        },
        {
            word: "駅弁",
            romanized: "ekiben",
            translation: "station bento sold at train stations",
            culturalNote: "The first ekiben was sold at Utsunomiya Station in 1885. Today, Japan's railway companies sell over 2,000 varieties of ekiben. Buying one before boarding a bullet train is considered a ritual of Japanese travel."
        },
        {
            word: "給食",
            romanized: "kyuushoku",
            translation: "school lunch (provided by the school)",
            culturalNote: "Japan's kyushoku system was introduced after WWII to combat malnutrition. Today it is considered one of the healthiest school lunch systems in the world. Students in Japan clean their classrooms and serve each other's food — teaching community values alongside nutrition."
        },
        {
            word: "お花見弁当",
            romanized: "ohanami bentou",
            translation: "cherry blossom viewing bento",
            culturalNote: "Hanami (flower viewing) season in spring is Japan's most beloved outdoor occasion. Families and friends spread tarps under blooming sakura and share elaborate bento boxes, sake, and snacks. The bento prepared for hanami is often the most beautiful of the year."
        }
    ],
    questions: [
        {
            id: "ja-c-a2-2-q1",
            type: "comprehension",
            prompt: {
                native: "What is a kyaraben?",
                target: "キャラ弁とは何ですか？"
            },
            options: [
                "A bento sold at train stations with local specialities",
                "A bento shaped to resemble anime or animal characters",
                "A nutritious school lunch provided by the school",
                "A convenience store bento that can be microwaved"
            ],
            answer: "A bento shaped to resemble anime or animal characters"
        },
        {
            id: "ja-c-a2-2-q2",
            type: "comprehension",
            prompt: {
                native: "What does making a bento for someone represent in Japanese culture?",
                target: "日本文化では、誰かのためにお弁当を作ることは何を表しますか？"
            },
            options: [
                "A professional obligation",
                "A sign of wealth and social status",
                "An expression of affection and care",
                "A school requirement"
            ],
            answer: "An expression of affection and care"
        },
        {
            id: "ja-c-a2-2-q3",
            type: "reflection",
            prompt: {
                native: "Is there a food or meal in your culture that is made with special care as an act of love or dedication? How does it compare to the Japanese bento tradition?",
                target: "あなたの文化に、愛情や献身の表れとして特別な心を込めて作る食べ物や食事はありますか？日本のお弁当文化と比べてどうでしょうか？"
            }
        }
    ],
    didYouKnow: {
        native: "The word 'bento' itself has entered English — and not just as a food term. 'Bento box thinking' is used in UX design to describe a layout where content is neatly compartmentalised in a grid. Apple has used the term in product keynotes. The bento aesthetic — structured, beautiful, nothing wasted — has quietly influenced how the world thinks about organisation and presentation.",
        target: "「弁当」という言葉は英語にも取り入れられています。食の文脈だけでなく、「ベントーボックス思考」というUXデザイン用語として、コンテンツをグリッド状に整然と区分けするレイアウトを指すこともあります。Appleも製品発表でこの言葉を使ったことがあります。構造的で美しく、無駄がない弁当の美学は、世界の整理術やプレゼンテーションのあり方に静かな影響を与えています。"
    }
}
