// src/data/japanese/listening/b1.ts
import { ListeningExercise } from "../../../types"

export const b1Listening: ListeningExercise[] = [
    {
        id: "ja-l-b1-1",
        level: "B1",
        title: "台風による運行遅延のお知らせ — Typhoon delay announcement",
        script: `お客様にお知らせいたします。台風十八号の接近にともない、東海道新幹線は現在、東京—名古屋間において運行を一時見合わせております。再開の見通しは、本日午後三時以降となっております。なお、在来線につきましても、一部区間で遅延および運休が発生しております。お急ぎのお客様には大変ご不便をおかけし、誠に申し訳ございません。最新の運行情報は、各ホームの電光掲示板およびJR東日本の公式ウェブサイトにてご確認ください。また、特急券をお持ちのお客様は、有効期限内であれば払い戻しの手続きが窓口にて可能です。引き続き、安全運行のため皆様のご理解とご協力をお願いいたします。`,
        translation: `We have an announcement for our passengers. Due to the approach of Typhoon No. 18, the Tōkaidō Shinkansen is currently suspending operations between Tokyo and Nagoya. The outlook for resumption of service is from 3:00 p.m. today onwards. Please note that delays and cancellations are also occurring on some sections of conventional lines. We sincerely apologise for the great inconvenience this causes to passengers in a hurry. Please check the latest service information on the electronic notice boards on each platform and on the official JR East website. Passengers holding limited express tickets may also process a refund at the ticket window within the validity period. We ask for your continued understanding and cooperation in the interest of safe operation.`,
        questions: [
            {
                id: "ja-l-b1-1-q1",
                level: "B1",
                prompt: "What has caused the disruption to train services?",
                options: [
                    "Typhoon No. 18 approaching",
                    "A serious accident on the line",
                    "Emergency track maintenance work",
                    "A power failure at Tokyo station"
                ],
                answer: "Typhoon No. 18 approaching"
            },
            {
                id: "ja-l-b1-1-q2",
                level: "B1",
                prompt: "From what time is service expected to resume?",
                options: [
                    "From 3:00 p.m. today",
                    "From early tomorrow morning",
                    "From 9:00 a.m. today",
                    "From 6:00 p.m. today"
                ],
                answer: "From 3:00 p.m. today"
            },
            {
                id: "ja-l-b1-1-q3",
                level: "B1",
                prompt: "What can passengers with limited express tickets do?",
                options: [
                    "Process a refund at the ticket window within the validity period",
                    "Board any train free of charge until the typhoon passes",
                    "Exchange their ticket for a bus voucher",
                    "Claim overnight accommodation from JR East"
                ],
                answer: "Process a refund at the ticket window within the validity period"
            }
        ]
    },
    {
        id: "ja-l-b1-2",
        level: "B1",
        title: "大学生のアルバイト事情 — Student part-time work interview",
        script: `インタビュアー：今日はアルバイトについて聞かせてください。どんなアルバイトをしていますか？

学生：はい。週に三回、駅の近くのコンビニでアルバイトをしています。主にレジの担当と品出しをしています。

インタビュアー：なぜアルバイトを始めたんですか？

学生：親からの仕送りだけでは生活費が足りないので、自分で稼ぐことにしました。あと、社会経験を積みたいという気持ちもありました。

インタビュアー：大変なことはありますか？

学生：授業とアルバイトの両立が難しいですね。特に試験期間はシフトを減らしてもらうよう店長にお願いしています。あと、深夜のシフトは体力的にきついですね。

インタビュアー：アルバイトをして良かったと思うことはありますか？

学生：お金の大切さをよく理解できるようになりました。それから、接客を通じてコミュニケーション能力が上がった気がします。就職活動でも自己PRになると思っています。`,
        translation: `Interviewer: Please tell me about your part-time work today. What kind of part-time job do you do?

Student: Yes. I work part-time at a convenience store near the station three times a week. I mainly work the cash register and stock shelves.

Interviewer: Why did you start working part-time?

Student: The allowance from my parents wasn't enough for living expenses, so I decided to earn money myself. I also wanted to gain social experience.

Interviewer: Is there anything difficult about it?

Student: It's hard to balance classes and work. Especially during exam periods, I ask my manager to reduce my shifts. Also, the late-night shifts are physically tough.

Interviewer: Is there anything you're glad about from doing part-time work?

Student: I've come to understand the value of money much better. Also, I feel like my communication skills have improved through customer service. I think it'll also help me sell myself during job-hunting.`,
        questions: [
            {
                id: "ja-l-b1-2-q1",
                level: "B1",
                prompt: "What are the student's main duties at the convenience store?",
                options: [
                    "Working the cash register and stocking shelves",
                    "Making food and cleaning the store",
                    "Managing staff schedules and deliveries",
                    "Handling customer complaints and returns"
                ],
                answer: "Working the cash register and stocking shelves"
            },
            {
                id: "ja-l-b1-2-q2",
                level: "B1",
                prompt: "What does the student find most difficult about working part-time?",
                options: [
                    "Balancing classes and work, especially during exam periods",
                    "Dealing with rude customers at the cash register",
                    "The long commute to the workplace",
                    "Not earning enough money"
                ],
                answer: "Balancing classes and work, especially during exam periods"
            },
            {
                id: "ja-l-b1-2-q3",
                level: "B1",
                prompt: "What does the student say they have gained from working part-time?",
                options: [
                    "A better understanding of the value of money and improved communication skills",
                    "A guaranteed job offer from the convenience store company",
                    "The ability to speak English with foreign customers",
                    "Technical skills in stock management software"
                ],
                answer: "A better understanding of the value of money and improved communication skills"
            }
        ]
    },
    {
        id: "ja-l-b1-3",
        level: "B1",
        title: "日本の伝統的な家 — A traditional Japanese house",
        script: `日本の伝統的な家、いわゆる「古民家」は、現代の住宅とは大きく異なります。今日は、その主な特徴と部屋の種類についてご紹介します。

まず玄関から入ると、土間という土や石でできたスペースがあります。ここで靴を脱いで、上がり框に上がります。靴を脱ぐ習慣は、家の中を清潔に保つための重要な文化的実践です。

居間には畳という草で織られた敷物が敷かれています。畳の部屋では、直接床に座るか、座布団を使います。テーブルは低く、食事のときは正座または胡坐をかくことが多いです。

また、ふすまと呼ばれる引き戸で部屋を仕切ることができます。ふすまを開けると二つの部屋がひとつの大きな空間になります。これは日本の家が空間を柔軟に使う工夫のひとつです。

床の間は、掛け軸や生け花を飾るための特別な空間です。客間に設けられることが多く、家の美的感覚を示す場所です。

縁側は、建物の外側に設けられた木製の廊下で、庭と室内をつなぐ中間的な空間です。夏には縁側に座って庭を眺めながら涼む習慣があります。`,
        translation: `Traditional Japanese houses, known as kominka, are very different from modern homes. Today I will introduce their main features and types of rooms.

Entering through the front door, there is a space called the doma, made of earth or stone. Here, you remove your shoes and step up onto the agari-kamachi threshold. The custom of removing shoes is an important cultural practice to keep the inside of the house clean.

The living room is covered with tatami — woven grass mats. In a tatami room, you sit directly on the floor or use cushions called zabuton. The table is low, and during meals people often sit in seiza (kneeling) or cross-legged.

Rooms can be divided using sliding doors called fusuma. When the fusuma is opened, two rooms become one large space. This is one of the ways Japanese houses make flexible use of space.

The tokonoma is a special alcove for displaying hanging scrolls and flower arrangements. It is often found in the guest room and is the place that expresses the aesthetic sensibility of the home.

The engawa is a wooden corridor set on the outside of the building, an intermediate space connecting the garden and the interior. In summer, there is a custom of sitting on the engawa to enjoy the garden and cool down.`,
        questions: [
            {
                id: "ja-l-b1-3-q1",
                level: "B1",
                prompt: "What is the doma in a traditional Japanese house?",
                options: [
                    "An earth or stone entrance space where you remove your shoes",
                    "A low table used for eating meals",
                    "A special alcove for displaying art",
                    "A wooden corridor connecting the garden to the inside"
                ],
                answer: "An earth or stone entrance space where you remove your shoes"
            },
            {
                id: "ja-l-b1-3-q2",
                level: "B1",
                prompt: "What is the function of fusuma?",
                options: [
                    "Sliding doors that can divide or open up rooms to create flexible space",
                    "Woven grass mats that cover the floor",
                    "Cushions used for sitting on the tatami floor",
                    "A wooden outdoor corridor running around the house"
                ],
                answer: "Sliding doors that can divide or open up rooms to create flexible space"
            },
            {
                id: "ja-l-b1-3-q3",
                level: "B1",
                prompt: "What is the engawa and how is it used in summer?",
                options: [
                    "A wooden corridor connecting garden and interior, used for sitting and cooling down",
                    "A special guest room used for tea ceremony",
                    "A storage area beneath the floor for keeping food cool",
                    "An outdoor garden space for growing flowers"
                ],
                answer: "A wooden corridor connecting garden and interior, used for sitting and cooling down"
            }
        ]
    }
]
