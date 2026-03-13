// src/data/korean/listening/b1.ts
import { ListeningExercise } from "../../../types"

export const b1Listening: ListeningExercise[] = [
    {
        id: "ko-l-b1-1",
        level: "B1",
        title: "케이팝 콘서트 안내 — K-pop concert announcement",
        script: `안녕하세요, 청취자 여러분. BTS 서울 콘서트 관련 안내 말씀드리겠습니다. 오는 토요일과 일요일, 이틀간 잠실 올림픽 주경기장에서 'WORLD TOUR SEOUL' 공연이 열립니다. 총 좌석 수는 팔만 석이며, 현재 온라인 예매는 마감되었습니다. 단, 당일 현장 판매 티켓이 오전 열 시부터 경기장 티켓 부스에서 한정 수량 판매될 예정입니다. 티켓 가격은 VIP석 이십오만 원, 일반석 구만 원입니다. 공연장 주변 교통 혼잡이 예상되므로 대중교통 이용을 강력히 권장합니다. 잠실역 2호선과 8호선을 이용하시면 편리하게 오실 수 있습니다. 또한 공연 당일 경기장 반경 오백 미터 이내에서는 불법 음반 판매가 엄격히 금지되어 있으니 유의하시기 바랍니다. 멋진 공연 즐기시길 바랍니다!`,
        translation: `Hello, listeners. We have an announcement regarding the BTS Seoul concert. This coming Saturday and Sunday, over two days, the 'WORLD TOUR SEOUL' performance will be held at Jamsil Olympic Main Stadium. The total seating capacity is 80,000, and online booking is now closed. However, a limited number of on-the-day tickets will be sold from 10am at the stadium ticket booths. Ticket prices are 250,000 won for VIP seats and 90,000 won for general seats. Heavy traffic congestion is expected around the concert venue, so the use of public transport is strongly recommended. You can get here conveniently by taking Line 2 and Line 8 to Jamsil Station. Also please note that the illegal sale of albums within a 500-metre radius of the stadium on the day of the concert is strictly prohibited. We hope you enjoy the wonderful performance!`,
        questions: [
            {
                id: "ko-l-b1-1-q1",
                level: "B1",
                prompt: "Where and when will the concert take place?",
                options: [
                    "Jamsil Olympic Stadium, this Saturday and Sunday",
                    "Gwanghwamun Plaza, next weekend",
                    "COEX Arena, on Saturday only",
                    "Yeouido Hangang Park, over three days"
                ],
                answer: "Jamsil Olympic Stadium, this Saturday and Sunday"
            },
            {
                id: "ko-l-b1-1-q2",
                level: "B1",
                prompt: "How can fans still get tickets?",
                options: [
                    "By buying limited on-the-day tickets at the stadium booth from 10am",
                    "By calling the concert hotline before Saturday",
                    "Online booking is still open for VIP seats only",
                    "Tickets are available at convenience stores"
                ],
                answer: "By buying limited on-the-day tickets at the stadium booth from 10am"
            },
            {
                id: "ko-l-b1-1-q3",
                level: "B1",
                prompt: "What is prohibited within 500 metres of the stadium on the day?",
                options: [
                    "The illegal sale of albums",
                    "Street food vending",
                    "Photography of any kind",
                    "Parking private vehicles"
                ],
                answer: "The illegal sale of albums"
            }
        ]
    },
    {
        id: "ko-l-b1-2",
        level: "B1",
        title: "유학생 인터뷰 — interview with a university student about studying abroad",
        script: `기자: 안녕하세요. 현재 해외 유학을 준비 중이시라고 들었어요. 어느 나라로 가실 예정인가요?
민준: 네, 내년 봄 학기에 캐나다 토론토 대학교에 교환학생으로 갈 예정이에요.
기자: 왜 캐나다를 선택하셨나요?
민준: 영어 실력도 키우고 싶고, 캐나다는 다문화 사회라서 다양한 사람들을 만날 수 있을 것 같아서요. 그리고 토론토 대학교는 제 전공인 컴퓨터공학으로 세계적으로 유명하거든요.
기자: 준비하면서 어려운 점은 없었나요?
민준: 비자 신청 서류가 정말 복잡했어요. 성적 증명서, 재정 보증 서류, 추천서 등 준비할 게 엄청 많았거든요. 영어 면접도 있었는데 많이 긴장했어요.
기자: 유학 가서 가장 기대되는 것은 무엇인가요?
민준: 다양한 나라에서 온 친구들과 함께 공부하고 교류하는 것이 가장 기대돼요. 그리고 한국에서와는 다른 교육 방식을 직접 경험해 보고 싶어요.
기자: 좋은 경험이 되길 바랍니다. 감사합니다.`,
        translation: `Reporter: Hello. I heard you are currently preparing to study abroad. Which country are you planning to go to?
Minjun: Yes, I'm planning to go to the University of Toronto in Canada as an exchange student in the spring semester next year.
Reporter: Why did you choose Canada?
Minjun: I want to improve my English skills, and Canada is a multicultural society so I thought I'd be able to meet diverse people. Also, the University of Toronto is world-renowned for my major, which is computer science.
Reporter: Were there any difficulties while preparing?
Minjun: The visa application documents were really complicated. There was a huge amount to prepare — transcripts, financial guarantee documents, letters of recommendation, and more. There was also an English interview, which made me very nervous.
Reporter: What are you most looking forward to when you go to study abroad?
Minjun: I'm most looking forward to studying and interacting with friends from various countries. I also want to experience directly an education style different from what we have in Korea.
Reporter: I hope it's a great experience. Thank you.`,
        questions: [
            {
                id: "ko-l-b1-2-q1",
                level: "B1",
                prompt: "Where is Minjun going to study abroad?",
                options: [
                    "University of Toronto, Canada",
                    "University of British Columbia, Canada",
                    "Oxford University, UK",
                    "MIT, USA"
                ],
                answer: "University of Toronto, Canada"
            },
            {
                id: "ko-l-b1-2-q2",
                level: "B1",
                prompt: "What was one difficulty Minjun faced during preparations?",
                options: [
                    "The visa application documents were very complicated",
                    "His English level was not high enough to apply",
                    "The university rejected his application at first",
                    "He could not find a recommendation letter writer"
                ],
                answer: "The visa application documents were very complicated"
            },
            {
                id: "ko-l-b1-2-q3",
                level: "B1",
                prompt: "What is Minjun most looking forward to abroad?",
                options: [
                    "Studying with friends from various countries and experiencing a different education style",
                    "Improving his French language skills",
                    "Travelling across North America during holidays",
                    "Working part-time to earn money"
                ],
                answer: "Studying with friends from various countries and experiencing a different education style"
            }
        ]
    },
    {
        id: "ko-l-b1-3",
        level: "B1",
        title: "제주도 여행 계획 — planning a trip to Jeju Island",
        script: `수아: 여보세요?
태영: 어, 수아야! 나 태영이야. 잘 지냈어?
수아: 응, 잘 지냈어. 무슨 일이야?
태영: 다음 달 연휴에 제주도 여행 갈 건데, 같이 갈래?
수아: 오, 좋아! 몇 박 몇 일이야?
태영: 3박 4일 생각하고 있어. 비행기는 이미 알아봤는데, 김포에서 제주까지 왕복 이십만 원 정도 나오더라고.
수아: 괜찮은데. 숙소는?
태영: 성산 일출봉 근처에 게스트하우스 어때? 하루에 사만 원 정도야. 아니면 서귀포 쪽 호텔로 할까?
수아: 게스트하우스 좋아. 거기서 일출도 보고 싶어. 뭐 타고 다닐 거야?
태영: 렌터카 빌리려고. 제주도는 대중교통이 불편하거든. 하루에 오만 원 정도면 될 것 같아.
수아: 그거 좋겠다. 올레길도 걷고 흑돼지도 먹고!
태영: 맞아, 꼭 가야지! 한라산 등산도 계획에 넣어놨어.
수아: 완벽하다. 그럼 자세한 건 나중에 다시 이야기하자.`,
        translation: `Sua: Hello?
Taeyoung: Oh, Sua! It's Taeyoung. How have you been?
Sua: Good, I've been fine. What's up?
Taeyoung: I'm going on a trip to Jeju Island over the holiday next month — do you want to come?
Sua: Oh, great! How many nights?
Taeyoung: I'm thinking three nights and four days. I've already looked into flights — it's about 200,000 won return from Gimpo to Jeju.
Sua: That's reasonable. What about accommodation?
Taeyoung: How about a guesthouse near Seongsan Ilchulbong? It's about 40,000 won a day. Or should we do a hotel in Seogwipo?
Sua: I like the guesthouse. I want to watch the sunrise there too. How are we getting around?
Taeyoung: I'm going to rent a car. Public transport on Jeju is inconvenient. I think about 50,000 won a day will do.
Sua: That sounds great. Walk the Jeju Olle trail and eat black pork too!
Taeyoung: Right, we definitely have to! I've also put Hallasan mountain hiking in the plan.
Sua: Perfect. Let's talk again about the details later then.`,
        questions: [
            {
                id: "ko-l-b1-3-q1",
                level: "B1",
                prompt: "How long is the planned Jeju trip?",
                options: [
                    "Three nights and four days",
                    "Two nights and three days",
                    "Four nights and five days",
                    "One week"
                ],
                answer: "Three nights and four days"
            },
            {
                id: "ko-l-b1-3-q2",
                level: "B1",
                prompt: "Why does Taeyoung want to rent a car on Jeju?",
                options: [
                    "Because public transport on Jeju is inconvenient",
                    "Because it is cheaper than taking a bus",
                    "Because they plan to drive to the airport",
                    "Because there are no taxis on the island"
                ],
                answer: "Because public transport on Jeju is inconvenient"
            },
            {
                id: "ko-l-b1-3-q3",
                level: "B1",
                prompt: "What activities are mentioned in their plan?",
                options: [
                    "Walking the Olle trail, eating black pork, and hiking Hallasan",
                    "Visiting a theme park, surfing, and seeing a K-pop concert",
                    "Scuba diving, cycling, and visiting Gyeongbokgung",
                    "Watching the sunset, jet-skiing, and going to a museum"
                ],
                answer: "Walking the Olle trail, eating black pork, and hiking Hallasan"
            }
        ]
    }
]
