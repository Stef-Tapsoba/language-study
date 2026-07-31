// src/data/japanese/listening/a2.ts
import { ListeningExercise } from "../../../types"

export const a2Listening: ListeningExercise[] = [
    {
        id: "ja-l-a2-1",
        level: "A2",
        title: "てんきよほう — weather forecast",
        script: "こんばんは、てんきよほうです。あしたのてんきをおつたえします。とうきょうは午前中はくもりです。ひるごろからあめがふりはじめます。きおんはひじゅうどぐらいです。かさをわすれずに。おおさかはいちにちはれのよそうです。きおんはにじゅうごどまであがるでしょう。もっけいはくもりときどきはれです。しゅうまつはぜんこくてきにてんきがよくなるみこみです。",
        translation: "Good evening, here is the weather forecast. We will tell you tomorrow's weather. Tokyo will be cloudy in the morning. It will start to rain around midday. The temperature will be around nineteen degrees. Don't forget your umbrella. Osaka is expected to be sunny all day. The temperature will rise to twenty-five degrees. The Hokuriku region will be cloudy with some sunshine. At the weekend, weather is expected to improve nationwide.",
        questions: [
            {
                id: "ja-l-a2-1-q1",
                level: "A2",
                prompt: "What will Tokyo's weather be like in the morning?",
                options: ["Cloudy", "Sunny", "Rainy", "Snowy"],
                answer: "Cloudy"
            },
            {
                id: "ja-l-a2-1-q2",
                level: "A2",
                prompt: "What is Osaka's forecast?",
                options: ["Sunny all day", "Rainy in the afternoon", "Cloudy with some sun", "Stormy"],
                answer: "Sunny all day"
            },
            {
                id: "ja-l-a2-1-q3",
                level: "A2",
                prompt: "What is the weekend forecast?",
                options: ["Good weather nationwide", "Rain everywhere", "Cloudy with showers", "Mixed weather"],
                answer: "Good weather nationwide"
            }
        ]
    },
    {
        id: "ja-l-a2-2",
        level: "A2",
        title: "えきで — at the train station",
        script: "すみません、きょうとまでのきっぷをいちまいください。おとなひとりですか。はい。こだまとのぞみがありますが、どちらになさいますか。のぞみのほうがはやいですか。のぞみはこだまよりやくにじゅっぷんはやいですよ。じゃあ、のぞみをください。かたみちですかおうふくですか。かたみちでいいです。いちにちだいなんえんですか。じゅうごせんえんになります。クレジットカードはつかえますか。はい、つかえます。",
        translation: "Excuse me, one ticket to Kyoto please. Is it one adult? Yes. There is the Kodama and the Nozomi, which would you like? Is the Nozomi faster? The Nozomi is about twenty minutes faster than the Kodama. Then I'll take the Nozomi please. Single or return? Single is fine. How much is it? It will be fifteen thousand yen. Can I use a credit card? Yes, you can.",
        dialogue: [
            { speaker: "Customer", text: "すみません、きょうとまでのきっぷをいちまいください。", translation: "Excuse me, one ticket to Kyoto please." },
            { speaker: "Clerk",    text: "おとなひとりですか。", translation: "Is it one adult?" },
            { speaker: "Customer", text: "はい。", translation: "Yes." },
            { speaker: "Clerk",    text: "こだまとのぞみがありますが、どちらになさいますか。", translation: "There is the Kodama and the Nozomi, which would you like?" },
            { speaker: "Customer", text: "のぞみのほうがはやいですか。", translation: "Is the Nozomi faster?" },
            { speaker: "Clerk",    text: "のぞみはこだまよりやくにじゅっぷんはやいですよ。", translation: "The Nozomi is about twenty minutes faster than the Kodama." },
            { speaker: "Customer", text: "じゃあ、のぞみをください。", translation: "Then I'll take the Nozomi please." },
            { speaker: "Clerk",    text: "かたみちですかおうふくですか。", translation: "Single or return?" },
            { speaker: "Customer", text: "かたみちでいいです。いちにちだいなんえんですか。", translation: "Single is fine. How much is it?" },
            { speaker: "Clerk",    text: "じゅうごせんえんになります。", translation: "It will be fifteen thousand yen." },
            { speaker: "Customer", text: "クレジットカードはつかえますか。", translation: "Can I use a credit card?" },
            { speaker: "Clerk",    text: "はい、つかえます。", translation: "Yes, you can." }
        ],
        questions: [
            {
                id: "ja-l-a2-2-q1",
                level: "A2",
                prompt: "Where does the customer want to go?",
                options: ["Kyoto", "Tokyo", "Osaka", "Nagoya"],
                answer: "Kyoto"
            },
            {
                id: "ja-l-a2-2-q2",
                level: "A2",
                prompt: "Which train does the customer choose?",
                options: ["Nozomi", "Kodama", "Shinkansen (unspecified)", "Local train"],
                answer: "Nozomi"
            },
            {
                id: "ja-l-a2-2-q3",
                level: "A2",
                prompt: "How much is the ticket?",
                options: ["15,000 yen", "10,000 yen", "20,000 yen", "12,000 yen"],
                answer: "15,000 yen"
            }
        ]
    },
    {
        id: "ja-l-a2-3",
        level: "A2",
        title: "なつやすみのけいかく — summer holiday plans",
        script: "なつやすみになにをするつもりですか。かぞくでおきなわにいくつもりです。おきなわですか！すごいですね。うみできれいなさかなをみたいとおもっています。シュノーケリングをするつもりですか。はい、はじめてなのですこしこわいですが、たのしみです。ともだちはどうですか。わたしのともだちはにほんをでてかいがいりょこうをするそうです。どこにいくんですか。ヨーロッパにいくそうです。いいですね。",
        translation: "What are you planning to do during summer vacation? I'm planning to go to Okinawa with my family. Okinawa! That's great. I'm thinking I want to see beautiful fish in the sea. Are you planning to go snorkelling? Yes, it's my first time so I'm a little nervous, but I'm looking forward to it. What about your friend? I heard my friend is leaving Japan and travelling abroad. Where are they going? I heard they're going to Europe. That sounds great.",
        dialogue: [
            { speaker: "Friend A", text: "なつやすみになにをするつもりですか。", translation: "What are you planning to do during summer vacation?" },
            { speaker: "Friend B", text: "かぞくでおきなわにいくつもりです。", translation: "I'm planning to go to Okinawa with my family." },
            { speaker: "Friend A", text: "おきなわですか！すごいですね。", translation: "Okinawa! That's great." },
            { speaker: "Friend B", text: "うみできれいなさかなをみたいとおもっています。", translation: "I'm thinking I want to see beautiful fish in the sea." },
            { speaker: "Friend A", text: "シュノーケリングをするつもりですか。", translation: "Are you planning to go snorkelling?" },
            { speaker: "Friend B", text: "はい、はじめてなのですこしこわいですが、たのしみです。", translation: "Yes, it's my first time so I'm a little nervous, but I'm looking forward to it." },
            { speaker: "Friend A", text: "ともだちはどうですか。", translation: "What about your friend?" },
            { speaker: "Friend B", text: "わたしのともだちはにほんをでてかいがいりょこうをするそうです。", translation: "I heard my friend is leaving Japan and travelling abroad." },
            { speaker: "Friend A", text: "どこにいくんですか。", translation: "Where are they going?" },
            { speaker: "Friend B", text: "ヨーロッパにいくそうです。", translation: "I heard they're going to Europe." },
            { speaker: "Friend A", text: "いいですね。", translation: "That sounds great." }
        ],
        questions: [
            {
                id: "ja-l-a2-3-q1",
                level: "A2",
                prompt: "Where is the speaker planning to go this summer?",
                options: ["Okinawa", "Tokyo", "Europe", "Osaka"],
                answer: "Okinawa"
            },
            {
                id: "ja-l-a2-3-q2",
                level: "A2",
                prompt: "How does the speaker feel about snorkelling?",
                options: ["A little nervous but looking forward to it", "Very excited and not nervous", "Not interested", "Very scared and doesn't want to go"],
                answer: "A little nervous but looking forward to it"
            },
            {
                id: "ja-l-a2-3-q3",
                level: "A2",
                prompt: "Where is the speaker's friend going?",
                options: ["Europe", "Okinawa", "Tokyo", "America"],
                answer: "Europe"
            }
        ]
    },
    {
        id: "ja-l-a2-4",
        level: "A2",
        title: "せんしゅうのしゅうまつ — last weekend",
        script: "せんしゅうのしゅうまつはなにをしましたか。どようびはともだちとえいがをみにいきました。どんなえいがでしたか。にほんのアニメのえいがでした。とてもおもしろかったです。にちようびはどうでしたか。にちようびはあめがふっていたので、いえにいました。いえでなにをしましたか。おかあさんとりょうりをつくりました。なにをつくりましたか。カレーをつくりました。おいしかったですよ。",
        translation: "What did you do last weekend? On Saturday I went to see a film with friends. What kind of film was it? It was a Japanese anime film. It was very interesting. What about Sunday? On Sunday it was raining so I stayed at home. What did you do at home? I cooked with my mother. What did you make? We made curry. It was delicious.",
        dialogue: [
            { speaker: "Friend A", text: "せんしゅうのしゅうまつはなにをしましたか。", translation: "What did you do last weekend?" },
            { speaker: "Friend B", text: "どようびはともだちとえいがをみにいきました。", translation: "On Saturday I went to see a film with friends." },
            { speaker: "Friend A", text: "どんなえいがでしたか。", translation: "What kind of film was it?" },
            { speaker: "Friend B", text: "にほんのアニメのえいがでした。とてもおもしろかったです。", translation: "It was a Japanese anime film. It was very interesting." },
            { speaker: "Friend A", text: "にちようびはどうでしたか。", translation: "What about Sunday?" },
            { speaker: "Friend B", text: "にちようびはあめがふっていたので、いえにいました。", translation: "On Sunday it was raining so I stayed at home." },
            { speaker: "Friend A", text: "いえでなにをしましたか。", translation: "What did you do at home?" },
            { speaker: "Friend B", text: "おかあさんとりょうりをつくりました。", translation: "I cooked with my mother." },
            { speaker: "Friend A", text: "なにをつくりましたか。", translation: "What did you make?" },
            { speaker: "Friend B", text: "カレーをつくりました。おいしかったですよ。", translation: "We made curry. It was delicious." }
        ],
        questions: [
            {
                id: "ja-l-a2-4-q1",
                level: "A2",
                prompt: "What did the speaker do on Saturday?",
                options: ["Went to see a film with friends", "Stayed at home", "Made curry", "Went shopping"],
                answer: "Went to see a film with friends"
            },
            {
                id: "ja-l-a2-4-q2",
                level: "A2",
                prompt: "Why did the speaker stay home on Sunday?",
                options: ["Because it was raining", "Because they were tired", "Because they had homework", "Because they were sick"],
                answer: "Because it was raining"
            },
            {
                id: "ja-l-a2-4-q3",
                level: "A2",
                prompt: "What did the speaker cook at home?",
                options: ["Curry", "Sushi", "Ramen", "Tempura"],
                answer: "Curry"
            }
        ]
    }
]
