// src/data/korean/listening/a2.ts
import { ListeningExercise } from "../../../types"

export const a2Listening: ListeningExercise[] = [
    {
        id: "ko-l-a2-1",
        level: "A2",
        title: "일기 예보 — weather forecast",
        script: "안녕하세요, 일기 예보입니다. 내일 날씨를 알려드릴게요. 서울은 오전에 흐릴 예정이에요. 낮부터 비가 내리기 시작해요. 기온은 십팔 도 정도예요. 우산을 챙기세요. 부산은 하루 종일 맑을 예정이에요. 기온은 이십오 도까지 올라갈 거예요. 주말에는 전국적으로 날씨가 좋아질 전망이에요.",
        translation: "Hello, here is the weather forecast. We will tell you about tomorrow's weather. Seoul is expected to be cloudy in the morning. It will start to rain from midday. The temperature will be around eighteen degrees. Please take your umbrella. Busan is expected to be sunny all day. The temperature will rise to twenty-five degrees. At the weekend, the weather is forecast to improve nationwide.",
        questions: [
            {
                id: "ko-l-a2-1-q1",
                level: "A2",
                prompt: "What will Seoul's weather be like in the morning?",
                options: ["Cloudy", "Sunny", "Rainy", "Snowy"],
                answer: "Cloudy"
            },
            {
                id: "ko-l-a2-1-q2",
                level: "A2",
                prompt: "What is Busan's forecast for tomorrow?",
                options: ["Sunny all day", "Rainy in the afternoon", "Cloudy with some sun", "Stormy"],
                answer: "Sunny all day"
            },
            {
                id: "ko-l-a2-1-q3",
                level: "A2",
                prompt: "What is the weekend forecast?",
                options: ["Good weather nationwide", "Rain everywhere", "Cloudy with showers", "Mixed weather"],
                answer: "Good weather nationwide"
            }
        ]
    },
    {
        id: "ko-l-a2-2",
        level: "A2",
        title: "기차역에서 — at the train station",
        script: "어서 오세요. 부산까지 표 한 장 주세요. 어른 한 명이요? 네. KTX랑 무궁화호가 있는데 어느 걸로 드릴까요? KTX가 더 빠른가요? KTX가 무궁화호보다 두 시간 정도 빨라요. 그럼 KTX로 주세요. 편도예요 왕복이에요? 편도로 주세요. 얼마예요? 오만이천 원이에요. 카드 되나요? 네, 됩니다. 감사합니다. 좋은 여행 되세요!",
        translation: "Welcome. One ticket to Busan please. One adult? Yes. There is the KTX and the Mugunghwa, which would you like? Is the KTX faster? The KTX is about two hours faster than the Mugunghwa. Then I'll take the KTX please. Single or return? Single please. How much is it? It is fifty-two thousand won. Can I pay by card? Yes, you can. Thank you. Have a good trip!",
        questions: [
            {
                id: "ko-l-a2-2-q1",
                level: "A2",
                prompt: "Where does the customer want to go?",
                options: ["Busan", "Seoul", "Incheon", "Daegu"],
                answer: "Busan"
            },
            {
                id: "ko-l-a2-2-q2",
                level: "A2",
                prompt: "How much faster is the KTX than the Mugunghwa?",
                options: ["About two hours", "About one hour", "About thirty minutes", "About three hours"],
                answer: "About two hours"
            },
            {
                id: "ko-l-a2-2-q3",
                level: "A2",
                prompt: "How much does the ticket cost?",
                options: ["52,000 won", "42,000 won", "62,000 won", "30,000 won"],
                answer: "52,000 won"
            }
        ]
    },
    {
        id: "ko-l-a2-3",
        level: "A2",
        title: "여름 방학 계획 — summer holiday plans",
        script: "여름 방학에 뭐 할 거예요? 가족이랑 제주도에 갈 거예요. 제주도요? 좋겠다! 바다에서 예쁜 물고기를 보고 싶어요. 스노클링을 할 거예요? 네, 처음이라서 조금 떨리지만 기대돼요. 친구는요? 친구는 한국을 떠나서 해외여행을 한다고 해요. 어디에 가요? 유럽에 간다고 해요. 좋겠다.",
        translation: "What are you going to do during summer vacation? I'm going to go to Jeju Island with my family. Jeju Island? That sounds great! I want to see beautiful fish in the sea. Are you going to go snorkelling? Yes, it's my first time so I'm a little nervous but I'm looking forward to it. What about your friend? I heard my friend is leaving Korea and travelling abroad. Where are they going? I heard they're going to Europe. That sounds nice.",
        questions: [
            {
                id: "ko-l-a2-3-q1",
                level: "A2",
                prompt: "Where is the speaker going for summer vacation?",
                options: ["Jeju Island", "Seoul", "Europe", "Busan"],
                answer: "Jeju Island"
            },
            {
                id: "ko-l-a2-3-q2",
                level: "A2",
                prompt: "How does the speaker feel about snorkelling?",
                options: ["Nervous but looking forward to it", "Very excited and not nervous at all", "Not interested", "Too scared to go"],
                answer: "Nervous but looking forward to it"
            },
            {
                id: "ko-l-a2-3-q3",
                level: "A2",
                prompt: "Where is the speaker's friend going?",
                options: ["Europe", "Jeju Island", "America", "Japan"],
                answer: "Europe"
            }
        ]
    },
    {
        id: "ko-l-a2-4",
        level: "A2",
        title: "지난 주말 — last weekend",
        script: "지난 주말에 뭐 했어요? 토요일에 친구들이랑 영화를 봤어요. 어떤 영화였어요? 한국 로맨스 영화였어요. 정말 재미있었어요. 일요일에는요? 일요일에는 비가 와서 집에 있었어요. 집에서 뭐 했어요? 어머니랑 요리를 했어요. 뭘 만들었어요? 김치찌개를 만들었어요. 맛있었어요. 저도 해 보고 싶다!",
        translation: "What did you do last weekend? On Saturday I watched a film with friends. What kind of film was it? It was a Korean romance film. It was really interesting. What about Sunday? On Sunday it was raining so I stayed at home. What did you do at home? I cooked with my mother. What did you make? We made kimchi jjigae (kimchi stew). It was delicious. I want to try making it too!",
        questions: [
            {
                id: "ko-l-a2-4-q1",
                level: "A2",
                prompt: "What did the speaker do on Saturday?",
                options: ["Watched a film with friends", "Stayed at home", "Made kimchi stew", "Went shopping"],
                answer: "Watched a film with friends"
            },
            {
                id: "ko-l-a2-4-q2",
                level: "A2",
                prompt: "Why did the speaker stay home on Sunday?",
                options: ["Because it was raining", "Because they were tired", "Because they had homework", "Because they were sick"],
                answer: "Because it was raining"
            },
            {
                id: "ko-l-a2-4-q3",
                level: "A2",
                prompt: "What did the speaker cook at home?",
                options: ["Kimchi jjigae (kimchi stew)", "Bibimbap", "Samgyeopsal", "Tteokbokki"],
                answer: "Kimchi jjigae (kimchi stew)"
            }
        ]
    }
]
