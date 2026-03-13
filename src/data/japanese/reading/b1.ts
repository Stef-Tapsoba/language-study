// src/data/japanese/reading/b1.ts
import { ReadingPassage } from "../../../types"

export const b1Reading: ReadingPassage[] = [
    {
        id: "ja-r-b1-1",
        level: "B1",
        category: "culture",
        title: "日本の祭り — 地域と季節をつなぐ文化",
        body: {
            target: `日本全国には、毎年数えきれないほどの祭りが行われています。祭りは神社や寺院と深く結びついており、地域の人々が集まって神様に感謝を捧げる行事です。

夏祭りは特に盛んで、屋台が並び、浴衣を着た人々が踊りや花火を楽しみます。京都の祇園祭は日本三大祭りのひとつで、毎年七月に一か月にわたって行われます。山鉾と呼ばれる巨大な山車が市内を練り歩く光景は、世界中の観光客を魅了します。

秋には収穫を祝う祭りが各地で開かれます。東北地方の青森ねぶた祭りでは、色鮮やかな武者絵が描かれた大型の灯篭が夜の街を照らします。

祭りは単なる娯楽ではなく、地域のアイデンティティを守り、世代をつなぐ役割を担っています。若者が太鼓を叩いたり、子供たちが神輿を担いだりすることで、伝統は次の世代へと受け継がれていきます。`,
            native: `Countless festivals are held across Japan every year. Festivals are deeply connected to shrines and temples, and are events where local people gather to offer thanks to the gods.

Summer festivals are particularly vibrant — food stalls line the streets, and people dressed in yukata enjoy dancing and fireworks. Kyoto's Gion Matsuri is one of Japan's three great festivals, held over an entire month every July. The sight of enormous floats called yamaboko parading through the city captivates tourists from around the world.

In autumn, harvest festivals are held throughout the country. At Aomori's Nebuta Matsuri in the Tohoku region, large lanterns painted with vivid warrior figures illuminate the night streets.

Festivals are not mere entertainment — they play a role in preserving regional identity and connecting generations. Through activities like young people playing taiko drums and children carrying mikoshi portable shrines, traditions are passed on to the next generation.`
        },
        vocabGloss: [
            { word: "祭り", romanized: "matsuri", translation: "festival" },
            { word: "屋台", romanized: "yatai", translation: "food stall, street vendor stand" },
            { word: "浴衣", romanized: "yukata", translation: "casual summer kimono" },
            { word: "山鉾", romanized: "yamaboko", translation: "tall festival float used in Gion Matsuri" },
            { word: "灯篭", romanized: "tōrō", translation: "lantern" },
            { word: "神輿", romanized: "mikoshi", translation: "portable shrine carried in processions" }
        ],
        questions: [
            {
                id: "ja-r-b1-1-q1",
                level: "B1",
                prompt: "What is the Gion Matsuri and when does it take place?",
                options: [
                    "One of Japan's three great festivals, held over a month in July in Kyoto",
                    "A harvest festival held in autumn in Aomori",
                    "A fireworks festival in Tokyo held in August",
                    "A lantern festival held in Tohoku in winter"
                ],
                answer: "One of Japan's three great festivals, held over a month in July in Kyoto"
            },
            {
                id: "ja-r-b1-1-q2",
                level: "B1",
                prompt: "What are yamaboko?",
                options: [
                    "Enormous floats that parade through the city",
                    "Large painted lanterns that light up the night",
                    "Traditional drums played by young people",
                    "Portable shrines carried by children"
                ],
                answer: "Enormous floats that parade through the city"
            },
            {
                id: "ja-r-b1-1-q3",
                level: "B1",
                prompt: "According to the passage, what role do festivals play beyond entertainment?",
                options: [
                    "Preserving regional identity and connecting generations",
                    "Attracting foreign investment to local economies",
                    "Replacing religious practice in modern Japan",
                    "Competing with other regions for tourism"
                ],
                answer: "Preserving regional identity and connecting generations"
            },
            {
                id: "ja-r-b1-1-q4",
                level: "B1",
                prompt: "What makes Aomori's Nebuta Matsuri distinctive?",
                options: [
                    "Large lanterns painted with vivid warrior figures illuminate the night streets",
                    "Participants wear yukata and watch fireworks from the river",
                    "Giant floats shaped like animals parade through the city",
                    "It is held over an entire month in July"
                ],
                answer: "Large lanterns painted with vivid warrior figures illuminate the night streets"
            }
        ]
    },
    {
        id: "ja-r-b1-2",
        level: "B1",
        category: "everyday",
        title: "環境問題と私たちの生活",
        body: {
            target: `地球温暖化やプラスチックごみの問題は、今や私たちの日常生活と切り離せないテーマとなっています。日本では、環境への意識が年々高まっており、政府や企業だけでなく、個人レベルでもさまざまな取り組みが広がっています。

スーパーやコンビニでのレジ袋有料化は、使い捨てプラスチックを減らすための重要な一歩です。多くの人がマイバッグを持ち歩くようになり、ごみの削減に貢献しています。また、ごみの分別は日本社会に深く根付いており、燃えるごみ、燃えないごみ、資源ごみなど細かく分けて捨てることが求められます。

一方で、課題も残っています。日本の食品ロスは年間約六百万トンと言われており、まだまだ改善の余地があります。若い世代を中心にエコ意識は高まっていますが、行動に移すのは簡単ではありません。環境問題を解決するには、個人の努力だけでなく、社会全体の仕組みを変えることが必要です。`,
            native: `Issues such as global warming and plastic waste have become themes inseparable from our daily lives. In Japan, environmental awareness is growing year by year, and efforts are spreading not only at government and corporate level but also at the individual level.

The move to charge for plastic bags at supermarkets and convenience stores is an important step in reducing single-use plastic. Many people now carry their own bags, contributing to waste reduction. Separating rubbish is also deeply rooted in Japanese society — people are required to sort their waste carefully into burnable, non-burnable, and recyclable categories.

At the same time, challenges remain. Japan's food waste is said to amount to around six million tonnes per year, and there is still much room for improvement. Eco-consciousness is growing especially among younger generations, but putting that awareness into action is not easy. Solving environmental problems requires not just individual effort, but changes to the structure of society as a whole.`
        },
        vocabGloss: [
            { word: "地球温暖化", romanized: "chikyū ondanka", translation: "global warming" },
            { word: "レジ袋", romanized: "reji bukuro", translation: "plastic shopping bag" },
            { word: "使い捨て", romanized: "tsukaisute", translation: "disposable, single-use" },
            { word: "ごみの分別", romanized: "gomi no bunbetsu", translation: "rubbish separation, waste sorting" },
            { word: "食品ロス", romanized: "shokuhin rosu", translation: "food waste, food loss" },
            { word: "エコ意識", romanized: "eko ishiki", translation: "eco-consciousness, environmental awareness" }
        ],
        questions: [
            {
                id: "ja-r-b1-2-q1",
                level: "B1",
                prompt: "What was the purpose of charging for plastic bags at shops?",
                options: [
                    "To reduce single-use plastic waste",
                    "To raise money for environmental charities",
                    "To encourage people to buy more goods",
                    "To replace paper bags with cloth bags"
                ],
                answer: "To reduce single-use plastic waste"
            },
            {
                id: "ja-r-b1-2-q2",
                level: "B1",
                prompt: "How is rubbish sorted in Japan?",
                options: [
                    "Into burnable, non-burnable, and recyclable categories",
                    "Only into recyclable and non-recyclable",
                    "By colour-coded bags bought from the government",
                    "Into food waste and everything else"
                ],
                answer: "Into burnable, non-burnable, and recyclable categories"
            },
            {
                id: "ja-r-b1-2-q3",
                level: "B1",
                prompt: "How much food waste does Japan produce per year according to the passage?",
                options: [
                    "Around six million tonnes",
                    "Around one million tonnes",
                    "Around sixty million tonnes",
                    "Around six hundred thousand tonnes"
                ],
                answer: "Around six million tonnes"
            },
            {
                id: "ja-r-b1-2-q4",
                level: "B1",
                prompt: "What does the passage say is needed to solve environmental problems?",
                options: [
                    "Not just individual effort, but changes to the structure of society as a whole",
                    "Individual effort alone is enough if everyone participates",
                    "Government regulation without individual behaviour change",
                    "Technology to replace all current energy sources"
                ],
                answer: "Not just individual effort, but changes to the structure of society as a whole"
            }
        ]
    },
    {
        id: "ja-r-b1-3",
        level: "B1",
        category: "everyday",
        title: "留学生の一日 — 東京での生活",
        body: {
            target: `ブラジル出身のマリアさんは、東京の大学に留学して半年が経ちました。最初は言葉の壁に苦労しましたが、今では日常会話ができるようになってきました。

マリアさんの一日は、朝早く始まります。アパートから最寄り駅まで自転車で十分ほど走り、電車で大学へ向かいます。電車の中では、ほとんどの人がスマートフォンを見ているか、静かに眠っています。最初は車内の静けさに驚きましたが、今では慣れました。

午後の授業が終わると、留学生センターで日本語の個別指導を受けます。先生はいつも丁寧に説明してくれるので、とても助かっています。夕方は近所のスーパーで食材を買い、自炊することが多いです。日本のスーパーの食材は新鮮で、値段も手ごろです。

週末には友人と浅草や上野を観光したり、茶道体験に参加したりしています。日本での生活は、不便なこともありますが、毎日新しい発見があって楽しいです。`,
            native: `Maria, who is from Brazil, has been studying abroad at a university in Tokyo for six months. She struggled with the language barrier at first, but she is now able to hold everyday conversations.

Maria's day begins early in the morning. She cycles about ten minutes from her apartment to the nearest station, then takes the train to university. On the train, most people are looking at their smartphones or sleeping quietly. She was surprised by the quietness of the carriage at first, but has now got used to it.

After her afternoon classes, she receives individual Japanese tuition at the international student centre. The teacher always explains things carefully, which she finds very helpful. In the evenings, she often buys ingredients at the local supermarket and cooks for herself. Ingredients at Japanese supermarkets are fresh and reasonably priced.

At weekends she goes sightseeing in Asakusa and Ueno with friends, or takes part in tea ceremony experiences. Life in Japan has its inconveniences, but she enjoys it because there is always something new to discover every day.`
        },
        vocabGloss: [
            { word: "留学生", romanized: "ryūgakusei", translation: "international student, student studying abroad" },
            { word: "言葉の壁", romanized: "kotoba no kabe", translation: "language barrier" },
            { word: "最寄り駅", romanized: "moyori eki", translation: "nearest train station" },
            { word: "個別指導", romanized: "kobetsu shidō", translation: "individual tutoring, one-on-one instruction" },
            { word: "自炊", romanized: "jisui", translation: "cooking for oneself, self-catering" },
            { word: "茶道", romanized: "sadō", translation: "tea ceremony (the way of tea)" }
        ],
        questions: [
            {
                id: "ja-r-b1-3-q1",
                level: "B1",
                prompt: "How does Maria travel from her apartment to the station each day?",
                options: [
                    "By bicycle",
                    "By bus",
                    "On foot",
                    "By taxi"
                ],
                answer: "By bicycle"
            },
            {
                id: "ja-r-b1-3-q2",
                level: "B1",
                prompt: "What surprised Maria about riding the train in Tokyo?",
                options: [
                    "How quiet it was inside the carriage",
                    "How expensive the tickets were",
                    "How crowded it was at all hours",
                    "How often the trains were delayed"
                ],
                answer: "How quiet it was inside the carriage"
            },
            {
                id: "ja-r-b1-3-q3",
                level: "B1",
                prompt: "What does Maria do after her afternoon classes?",
                options: [
                    "Receives individual Japanese tuition at the international student centre",
                    "Goes sightseeing in Asakusa with friends",
                    "Cycles home and cooks dinner immediately",
                    "Studies alone in the university library"
                ],
                answer: "Receives individual Japanese tuition at the international student centre"
            },
            {
                id: "ja-r-b1-3-q4",
                level: "B1",
                prompt: "How does Maria feel about life in Japan overall?",
                options: [
                    "It has inconveniences but she enjoys the daily new discoveries",
                    "She finds it boring compared to life in Brazil",
                    "She is very homesick and wants to return to Brazil",
                    "She loves everything about it with no difficulties"
                ],
                answer: "It has inconveniences but she enjoys the daily new discoveries"
            }
        ]
    }
]
