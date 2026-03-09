// src/data/japanese/reading/a2.ts
import { ReadingPassage } from "../../../types"

export const a2Reading: ReadingPassage[] = [
    {
        id: "ja-r-a2-1",
        level: "A2",
        category: "culture",
        title: "にほんのまつり (Japanese Festivals)",
        body: {
            target: "にほんにはたくさんのまつりがあります。はなみは春にさくらの花の下でたべたりのんだりするならわしです。ゴールデンウィークは四月から五月にかけての大型連休です。たなばたは七月七日に、おりひめとひこぼしのかなしいこいのはなしをいわうまつりです。たんざくにねがいごとをかいてたけにかざります。おぼんは夏に先祖のたましいをむかえるじかんです。かぞくがあつまり、ぼんおどりをおどります。",
            native: "Japan has many festivals. Hanami is the custom in spring of eating and drinking under cherry blossom trees. Golden Week is a long holiday from April to May. Tanabata is celebrated on 7 July, commemorating the sad love story of Orihime and Hikoboshi. People write wishes on strips of paper and decorate bamboo with them. Obon is a time in summer to welcome the spirits of ancestors. Families gather and dance the Bon Odori."
        },
        vocabGloss: [
            { word: "まつり", translation: "festival", romanized: "matsuri" },
            { word: "はなみ", translation: "cherry blossom viewing", romanized: "hanami" },
            { word: "ならわし", translation: "custom, tradition", romanized: "narawashi" },
            { word: "大型連休", translation: "long holiday (consecutive days off)", romanized: "oogata renkyuu" },
            { word: "たんざく", translation: "small strip of paper (for writing wishes)", romanized: "tanzaku" },
            { word: "ねがいごと", translation: "wish", romanized: "negaigoto" },
            { word: "先祖", translation: "ancestors", romanized: "senzo" },
            { word: "ぼんおどり", translation: "Bon Odori (traditional Obon dance)", romanized: "bon odori" }
        ],
        questions: [
            {
                id: "ja-r-a2-1-q1",
                level: "A2",
                prompt: "What do people do during Hanami?",
                options: ["Eat and drink under cherry blossom trees", "Dance around bamboo", "Visit ancestors' graves", "Watch fireworks"],
                answer: "Eat and drink under cherry blossom trees"
            },
            {
                id: "ja-r-a2-1-q2",
                level: "A2",
                prompt: "What do people do on Tanabata?",
                options: ["Write wishes on paper strips and decorate bamboo", "Dance the Bon Odori", "View cherry blossoms", "Take a long holiday"],
                answer: "Write wishes on paper strips and decorate bamboo"
            },
            {
                id: "ja-r-a2-1-q3",
                level: "A2",
                prompt: "What is Obon?",
                options: ["A time to welcome the spirits of ancestors", "A spring cherry blossom festival", "A star festival on 7 July", "A national holiday in April"],
                answer: "A time to welcome the spirits of ancestors"
            },
            {
                id: "ja-r-a2-1-q4",
                level: "A2",
                prompt: "When is Golden Week?",
                options: ["From April to May", "In July", "In August", "In March"],
                answer: "From April to May"
            }
        ]
    },
    {
        id: "ja-r-a2-2",
        level: "A2",
        category: "culture",
        title: "にほんのたべもの (Japanese Food Culture)",
        body: {
            target: "にほんのしょくじは世界でも人気があります。すしはなまの魚とすめしをくみあわせたりょうりです。ラーメンはちゅうごくからきたりょうりですが、にほんでどくじのはったつをとげました。みそしるはまいにちのしょくじでよくのまれます。べんとうはにほんのおべんとうぶんかをあらわしています。えきやスーパーでかんたんにかえます。にほんでは「いただきます」とたべるまえにいいます。これはたべものにかんしゃするいみです。",
            native: "Japanese food is popular around the world. Sushi is a dish that combines raw fish and vinegared rice. Ramen came from China but underwent unique development in Japan. Miso soup is often drunk at daily meals. Bento represents Japanese bento culture. You can easily buy them at stations and supermarkets. In Japan, people say 'itadakimasu' before eating. This means giving thanks for the food."
        },
        vocabGloss: [
            { word: "しょくじ", translation: "meal, food", romanized: "shokuji" },
            { word: "すめし", translation: "vinegared rice (for sushi)", romanized: "sumeshi" },
            { word: "どくじのはったつ", translation: "unique development", romanized: "dokuji no hattatsu" },
            { word: "べんとう", translation: "bento (packed lunch)", romanized: "bentou" },
            { word: "いただきます", translation: "expression said before eating (thanks for the food)", romanized: "itadakimasu" },
            { word: "かんしゃする", translation: "to give thanks, be grateful", romanized: "kansha suru" }
        ],
        questions: [
            {
                id: "ja-r-a2-2-q1",
                level: "A2",
                prompt: "What is sushi made of?",
                options: ["Raw fish and vinegared rice", "Noodles and broth", "Fermented soybeans", "Grilled meat and vegetables"],
                answer: "Raw fish and vinegared rice"
            },
            {
                id: "ja-r-a2-2-q2",
                level: "A2",
                prompt: "Where did ramen originally come from?",
                options: ["China", "Korea", "Japan", "The USA"],
                answer: "China"
            },
            {
                id: "ja-r-a2-2-q3",
                level: "A2",
                prompt: "What does 'itadakimasu' mean?",
                options: ["Giving thanks for the food", "The food is delicious", "Please eat", "I am hungry"],
                answer: "Giving thanks for the food"
            },
            {
                id: "ja-r-a2-2-q4",
                level: "A2",
                prompt: "Where can you easily buy bento?",
                options: ["At stations and supermarkets", "Only at restaurants", "Only at convenience stores", "At schools"],
                answer: "At stations and supermarkets"
            }
        ]
    },
    {
        id: "ja-r-a2-3",
        level: "A2",
        category: "culture",
        title: "とうきょうのかんこう (Sightseeing in Tokyo)",
        body: {
            target: "東京はにほんのしゅとで、せかいでいちばんひとがおおいとしのひとつです。あさくさにはふるいてらがあります。せんそうじというてらはとくにゆうめいです。しぶやのスクランブルこうさてんはせかいでもゆうめいなかんこうスポットです。しんじゅくはおおきなしょっぴんぐエリアです。百貨店やレストランがたくさんあります。はらじゅくはわかいひとにひとなくかわいいものがたくさんあります。東京タワーとスカイツリーからはとしのうつくしいけしきをみることができます。",
            native: "Tokyo is the capital of Japan and one of the most populous cities in the world. In Asakusa there is an old temple. The temple called Senso-ji is particularly famous. Shibuya Scramble Crossing is a famous tourist spot worldwide. Shinjuku is a large shopping area. There are many department stores and restaurants. Harajuku is very popular with young people and has many cute things. From Tokyo Tower and Skytree you can see a beautiful view of the city."
        },
        vocabGloss: [
            { word: "しゅと", translation: "capital city", romanized: "shuto" },
            { word: "てら", translation: "Buddhist temple", romanized: "tera" },
            { word: "スクランブルこうさてん", translation: "scramble crossing (pedestrian)", romanized: "sukuramburu kousaten" },
            { word: "かんこうスポット", translation: "tourist spot", romanized: "kankou supotto" },
            { word: "百貨店", translation: "department store", romanized: "hyakkaten" },
            { word: "けしき", translation: "scenery, view", romanized: "keshiki" }
        ],
        questions: [
            {
                id: "ja-r-a2-3-q1",
                level: "A2",
                prompt: "What is famous in Asakusa?",
                options: ["An old temple called Senso-ji", "A scramble crossing", "A shopping area", "Tokyo Tower"],
                answer: "An old temple called Senso-ji"
            },
            {
                id: "ja-r-a2-3-q2",
                level: "A2",
                prompt: "What is Shinjuku known for?",
                options: ["Shopping — department stores and restaurants", "Old temples", "Young fashion", "A famous crossing"],
                answer: "Shopping — department stores and restaurants"
            },
            {
                id: "ja-r-a2-3-q3",
                level: "A2",
                prompt: "What can you do from Tokyo Tower and Skytree?",
                options: ["See a beautiful view of the city", "Go shopping", "Visit old temples", "Watch a scramble crossing"],
                answer: "See a beautiful view of the city"
            },
            {
                id: "ja-r-a2-3-q4",
                level: "A2",
                prompt: "Which area is popular with young people?",
                options: ["Harajuku", "Asakusa", "Shinjuku", "Shibuya"],
                answer: "Harajuku"
            }
        ]
    },
    {
        id: "ja-r-a2-4",
        level: "A2",
        category: "everyday",
        title: "にほんのがっこうせいかつ (Japanese School Life)",
        body: {
            target: "にほんのがっこうはふつう四月にはじまります。がくせいはせいふくをきます。がっこうのじかんは八時半からごごさんじごろまでです。きゅうしょくはしょくどうでたべます。くみのみんなでいっしょにたべます。ほうかごはクラブかつどうがあります。やきゅうやサッカーやおんがくのクラブがあります。しゅうじはにほんのかれいなもじをかくかつどうです。にほんでは学校のそうじはがくせいがします。これはきょういくのいちぶです。",
            native: "Japanese schools usually start in April. Students wear uniforms. School hours are from eight thirty to around three in the afternoon. Students eat school lunch in the dining hall. Everyone in the class eats together. After school there are club activities. There are clubs for baseball, football and music. Shodo is the activity of writing beautiful Japanese characters. In Japan, the school cleaning is done by the students themselves. This is part of their education."
        },
        vocabGloss: [
            { word: "せいふく", translation: "school uniform", romanized: "seifuku" },
            { word: "きゅうしょく", translation: "school lunch", romanized: "kyuushoku" },
            { word: "ほうかご", translation: "after school", romanized: "houkago" },
            { word: "クラブかつどう", translation: "club activities", romanized: "kurabu katsudou" },
            { word: "しゅうじ", translation: "Japanese calligraphy", romanized: "shuuji" },
            { word: "そうじ", translation: "cleaning", romanized: "souji" },
            { word: "きょういく", translation: "education", romanized: "kyouiku" }
        ],
        questions: [
            {
                id: "ja-r-a2-4-q1",
                level: "A2",
                prompt: "When do Japanese schools usually start (which month)?",
                options: ["April", "September", "January", "March"],
                answer: "April"
            },
            {
                id: "ja-r-a2-4-q2",
                level: "A2",
                prompt: "Who cleans the school in Japan?",
                options: ["The students themselves", "Cleaning staff", "The teachers", "Parents"],
                answer: "The students themselves"
            },
            {
                id: "ja-r-a2-4-q3",
                level: "A2",
                prompt: "What is shodo?",
                options: ["Writing beautiful Japanese characters", "A baseball club", "A type of school lunch", "A cleaning activity"],
                answer: "Writing beautiful Japanese characters"
            },
            {
                id: "ja-r-a2-4-q4",
                level: "A2",
                prompt: "When do club activities take place?",
                options: ["After school", "Before school", "During lunch", "At weekends only"],
                answer: "After school"
            }
        ]
    }
]
