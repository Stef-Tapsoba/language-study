// src/data/korean/reading/a2.ts
import { ReadingPassage } from "../../../types"

export const a2Reading: ReadingPassage[] = [
    {
        id: "ko-r-a2-1",
        level: "A2",
        category: "culture",
        title: "한국의 명절 (Korean Holidays)",
        body: {
            target: "한국에는 중요한 명절이 있어요. 설날은 음력 1월 1일이에요. 온 가족이 모여서 떡국을 먹어요. 어른들께 세배를 드리고 세뱃돈을 받아요. 추석은 음력 8월 15일이에요. 한국의 추수감사절이에요. 가족이 모여서 성묘를 가고 송편을 만들어 먹어요. 어린이날은 5월 5일이에요. 아이들이 선물을 받고 가족과 함께 즐거운 시간을 보내요. 한글날은 10월 9일로 한국어를 기념하는 날이에요.",
            native: "Korea has important holidays. Seollal is the first day of the first month of the lunar calendar. The whole family gathers and eats tteokguk (rice cake soup). They bow to elders and receive New Year's money. Chuseok is the 15th day of the eighth lunar month. It is Korea's Thanksgiving. Families gather, visit ancestral graves and make and eat songpyeon (rice cakes). Children's Day is 5 May. Children receive gifts and spend a happy time with their families. Hangeul Day is 9 October, a day that celebrates the Korean language."
        },
        vocabGloss: [
            { word: "명절", translation: "traditional holiday", romanized: "myeongjeol" },
            { word: "설날", translation: "Lunar New Year", romanized: "seollal" },
            { word: "떡국", translation: "tteokguk (rice cake soup)", romanized: "tteokguk" },
            { word: "세배", translation: "deep bow (to elders, New Year)", romanized: "sebae" },
            { word: "세뱃돈", translation: "New Year's money (gift to children)", romanized: "sebaetdon" },
            { word: "추석", translation: "Chuseok (Korean Thanksgiving)", romanized: "chuseok" },
            { word: "성묘", translation: "visiting ancestral graves", romanized: "seongmyo" },
            { word: "송편", translation: "songpyeon (half-moon rice cakes)", romanized: "songpyeon" }
        ],
        questions: [
            {
                id: "ko-r-a2-1-q1",
                level: "A2",
                prompt: "What do people eat on Seollal?",
                options: ["Tteokguk (rice cake soup)", "Songpyeon", "Bibimbap", "Samgyeopsal"],
                answer: "Tteokguk (rice cake soup)"
            },
            {
                id: "ko-r-a2-1-q2",
                level: "A2",
                prompt: "What is Chuseok similar to?",
                options: ["Thanksgiving", "New Year", "Children's Day", "A language holiday"],
                answer: "Thanksgiving"
            },
            {
                id: "ko-r-a2-1-q3",
                level: "A2",
                prompt: "What is Hangeul Day?",
                options: ["A day celebrating the Korean language", "Korean New Year", "Children's holiday", "A harvest festival"],
                answer: "A day celebrating the Korean language"
            },
            {
                id: "ko-r-a2-1-q4",
                level: "A2",
                prompt: "What do children receive at Seollal after bowing to elders?",
                options: ["New Year's money", "Songpyeon", "Tteokguk", "Gifts from parents"],
                answer: "New Year's money"
            }
        ]
    },
    {
        id: "ko-r-a2-2",
        level: "A2",
        category: "culture",
        title: "한국 음식 문화 (Korean Food Culture)",
        body: {
            target: "한국 음식은 세계적으로 유명해요. 한국 음식의 특징은 반찬이에요. 밥상에는 밥, 국, 그리고 여러 가지 반찬이 나와요. 김치는 한국의 대표 음식이에요. 배추, 무, 오이 등으로 만들어요. 발효 음식이라서 건강에 좋아요. 한국에서는 밥을 먹을 때 숟가락과 젓가락을 사용해요. 식당에서 물과 반찬은 무료예요. 식사 전에 \"잘 먹겠습니다\"라고 해요. 이것은 음식에 감사하는 표현이에요.",
            native: "Korean food is famous worldwide. A characteristic of Korean food is banchan (side dishes). A meal includes rice, soup and various side dishes. Kimchi is Korea's representative food. It is made with napa cabbage, radish, cucumber and more. Because it is fermented food, it is good for health. In Korea, a spoon and chopsticks are used when eating rice. At restaurants, water and side dishes are free. Before eating, people say 'jal meokgesseumnida'. This is an expression of thanks for the food."
        },
        vocabGloss: [
            { word: "특징", translation: "characteristic, feature", romanized: "teukjing" },
            { word: "반찬", translation: "banchan (side dishes)", romanized: "banchan" },
            { word: "김치", translation: "kimchi (fermented vegetables)", romanized: "kimchi" },
            { word: "발효", translation: "fermentation", romanized: "balhyo" },
            { word: "숟가락", translation: "spoon", romanized: "sutgarak" },
            { word: "젓가락", translation: "chopsticks", romanized: "jeotgarak" },
            { word: "무료", translation: "free (of charge)", romanized: "muryo" },
            { word: "잘 먹겠습니다", translation: "expression said before eating", romanized: "jal meokgesseumnida" }
        ],
        questions: [
            {
                id: "ko-r-a2-2-q1",
                level: "A2",
                prompt: "What are banchan?",
                options: ["Side dishes", "A type of soup", "A main course", "A type of kimchi"],
                answer: "Side dishes"
            },
            {
                id: "ko-r-a2-2-q2",
                level: "A2",
                prompt: "Why is kimchi considered healthy?",
                options: ["Because it is fermented food", "Because it contains vegetables", "Because it is spicy", "Because it has vitamins"],
                answer: "Because it is fermented food"
            },
            {
                id: "ko-r-a2-2-q3",
                level: "A2",
                prompt: "What is provided for free at Korean restaurants?",
                options: ["Water and side dishes", "Rice and soup", "Dessert and tea", "Kimchi only"],
                answer: "Water and side dishes"
            },
            {
                id: "ko-r-a2-2-q4",
                level: "A2",
                prompt: "What does 'jal meokgesseumnida' mean?",
                options: ["An expression of thanks before eating", "The food is delicious", "I am hungry", "Please give me more"],
                answer: "An expression of thanks before eating"
            }
        ]
    },
    {
        id: "ko-r-a2-3",
        level: "A2",
        category: "culture",
        title: "서울 관광 (Sightseeing in Seoul)",
        body: {
            target: "서울은 대한민국의 수도예요. 오래된 것과 현대적인 것이 공존하는 도시예요. 경복궁은 조선 시대의 왕궁이에요. 아름다운 한국 전통 건축을 볼 수 있어요. 인사동은 전통 공예품, 찻집, 갤러리가 많은 거리예요. 명동은 쇼핑과 음식으로 유명해요. 외국인 관광객이 정말 많아요. 북촌 한옥마을에서는 전통 한옥을 볼 수 있어요. 남산서울타워는 서울 전경을 볼 수 있는 명소예요. 한강 공원에서는 자전거를 타거나 피크닉을 즐길 수 있어요.",
            native: "Seoul is the capital of South Korea. It is a city where old and modern coexist. Gyeongbokgung is a royal palace from the Joseon Dynasty. You can see beautiful traditional Korean architecture. Insadong is a street with many traditional crafts, tea houses and galleries. Myeongdong is famous for shopping and food. There are really many foreign tourists. In Bukchon Hanok Village you can see traditional hanok houses. Namsan Seoul Tower is a famous spot where you can see a panoramic view of Seoul. At Hangang Park you can ride bicycles or enjoy a picnic."
        },
        vocabGloss: [
            { word: "수도", translation: "capital city", romanized: "sudo" },
            { word: "공존하다", translation: "to coexist", romanized: "gongjeonhada" },
            { word: "왕궁", translation: "royal palace", romanized: "wanggung" },
            { word: "전통", translation: "traditional", romanized: "jeontong" },
            { word: "공예품", translation: "crafts, handicrafts", romanized: "gong yepum" },
            { word: "한옥", translation: "hanok (traditional Korean house)", romanized: "hanok" },
            { word: "전경", translation: "panoramic view", romanized: "jeongyeong" },
            { word: "명소", translation: "famous spot, attraction", romanized: "myeongso" }
        ],
        questions: [
            {
                id: "ko-r-a2-3-q1",
                level: "A2",
                prompt: "What is Gyeongbokgung?",
                options: ["A royal palace from the Joseon Dynasty", "A shopping street", "A traditional village", "A tower"],
                answer: "A royal palace from the Joseon Dynasty"
            },
            {
                id: "ko-r-a2-3-q2",
                level: "A2",
                prompt: "What is Myeongdong famous for?",
                options: ["Shopping and food", "Traditional crafts", "Palaces and history", "A panoramic view"],
                answer: "Shopping and food"
            },
            {
                id: "ko-r-a2-3-q3",
                level: "A2",
                prompt: "What can you see at Namsan Seoul Tower?",
                options: ["A panoramic view of Seoul", "Traditional hanok houses", "Royal palace buildings", "A famous street market"],
                answer: "A panoramic view of Seoul"
            },
            {
                id: "ko-r-a2-3-q4",
                level: "A2",
                prompt: "What can you do at Hangang Park?",
                options: ["Ride bicycles or have a picnic", "See traditional crafts", "Visit a palace", "Go shopping"],
                answer: "Ride bicycles or have a picnic"
            }
        ]
    },
    {
        id: "ko-r-a2-4",
        level: "A2",
        category: "everyday",
        title: "한국 학교생활 (Korean School Life)",
        body: {
            target: "한국 학교는 보통 3월에 시작해요. 학생들은 교복을 입어요. 수업은 오전 여덟 시 반부터 오후 네 시까지예요. 점심은 급식실에서 먹어요. 반 친구들과 같이 먹어요. 방과 후에는 동아리 활동이 있어요. 축구, 농구, 음악 동아리가 있어요. 한국 학생들은 공부를 많이 해요. 학원에 다니는 학생도 많아요. 한국에서는 학생들이 직접 교실을 청소해요. 이것은 책임감을 키우기 위해서예요.",
            native: "Korean schools usually start in March. Students wear uniforms. Classes are from eight thirty in the morning to four in the afternoon. Students eat lunch in the cafeteria. They eat with their classmates. After school there are club activities. There are football, basketball and music clubs. Korean students study a lot. Many students also attend private academies. In Korea, students clean the classrooms themselves. This is to build a sense of responsibility."
        },
        vocabGloss: [
            { word: "교복", translation: "school uniform", romanized: "gyobok" },
            { word: "급식실", translation: "school cafeteria", romanized: "geupsikshil" },
            { word: "방과 후", translation: "after school", romanized: "banggwa hu" },
            { word: "동아리", translation: "club (school/hobby)", romanized: "dongari" },
            { word: "학원", translation: "private academy/cram school", romanized: "hagwon" },
            { word: "청소", translation: "cleaning", romanized: "cheongso" },
            { word: "책임감", translation: "sense of responsibility", romanized: "chaeimgam" }
        ],
        questions: [
            {
                id: "ko-r-a2-4-q1",
                level: "A2",
                prompt: "When do Korean schools usually start?",
                options: ["March", "September", "January", "April"],
                answer: "March"
            },
            {
                id: "ko-r-a2-4-q2",
                level: "A2",
                prompt: "What is a 학원 (hagwon)?",
                options: ["A private academy/cram school", "A school club", "A school cafeteria", "A type of classroom"],
                answer: "A private academy/cram school"
            },
            {
                id: "ko-r-a2-4-q3",
                level: "A2",
                prompt: "Why do students clean the classrooms themselves?",
                options: ["To build a sense of responsibility", "Because there are no cleaners", "It is part of the exam", "To save money"],
                answer: "To build a sense of responsibility"
            },
            {
                id: "ko-r-a2-4-q4",
                level: "A2",
                prompt: "What time do classes end?",
                options: ["Four in the afternoon", "Three in the afternoon", "Five in the afternoon", "Half past three"],
                answer: "Four in the afternoon"
            }
        ]
    }
]
