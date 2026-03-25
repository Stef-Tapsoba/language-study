// src/data/korean/reading/a1.ts
import { ReadingPassage } from "../../../types"

export const a1Reading: ReadingPassage[] = [
    {
        id: "ko-r-a1-1",
        level: "A1",
        category: "everyday",
        title: "제 가족 (My Family)",
        body: {
            target: "저는 김민준이에요. 저희 가족은 네 명이에요. 아버지 성함은 김철수예요. 어머니 성함은 이영희예요. 저는 남동생이 있어요. 남동생 이름은 김민호예요. 민호는 열다섯 살이에요. 저는 열여덟 살이에요. 우리 가족은 서울에 살아요. 우리 집은 아파트예요. 고양이가 있어요. 고양이 이름은 나비예요. 나비는 하얗고 귀여워요.",
            native: "I am Kim Minjun. There are four people in my family. My father's name is Kim Cheolsu. My mother's name is Lee Younghee. I have a younger brother. My younger brother's name is Kim Minho. Minho is fifteen years old. I am eighteen years old. Our family lives in Seoul. Our home is an apartment. We have a cat. The cat's name is Nabi. Nabi is white and cute."
        },
        vocabGloss: [
            { word: "가족", translation: "family", romanized: "gajok" },
            { word: "아버지", translation: "father", romanized: "abeoji" },
            { word: "어머니", translation: "mother", romanized: "eomeoni" },
            { word: "남동생", translation: "younger brother", romanized: "namdongsaeng" },
            { word: "살아요", translation: "live (in a place)", romanized: "sarayo" },
            { word: "아파트", translation: "apartment", romanized: "apateu" },
            { word: "하얗고", translation: "white and...", romanized: "hayakgo" },
            { word: "귀여워요", translation: "is cute", romanized: "gwiyeowoyo" }
        ],
        questions: [
            {
                id: "ko-r-a1-1-q1",
                level: "A1",
                prompt: "How many people are in Minjun's family?",
                options: ["Four", "Three", "Five", "Two"],
                answer: "Four"
            },
            {
                id: "ko-r-a1-1-q2",
                level: "A1",
                prompt: "How old is Minho?",
                options: ["Fifteen", "Eighteen", "Twelve", "Twenty"],
                answer: "Fifteen"
            },
            {
                id: "ko-r-a1-1-q3",
                level: "A1",
                prompt: "Where does the family live?",
                options: ["Seoul", "Busan", "Incheon", "Daegu"],
                answer: "Seoul"
            }
        ]
    },
    {
        id: "ko-r-a1-2",
        level: "A1",
        category: "everyday",
        title: "하루 일과 (Daily Routine)",
        body: {
            target: "저는 매일 아침 일곱 시에 일어나요. 샤워를 하고 아침밥을 먹어요. 아침밥은 밥과 국이에요. 여덟 시에 학교에 가요. 학교에서 국어, 수학, 영어를 공부해요. 열두 시에 점심을 먹어요. 오후에는 공부하거나 친구들과 놀아요. 저녁밥은 가족과 같이 먹어요. 밤 열 시에 자요. 바쁘지만 즐거운 하루예요!",
            native: "I wake up every morning at seven o'clock. I take a shower and eat breakfast. Breakfast is rice and soup. I go to school at eight o'clock. At school I study Korean, maths and English. I eat lunch at twelve o'clock. In the afternoon I study or play with friends. I eat dinner together with my family. I go to sleep at ten o'clock at night. It's a busy but enjoyable day!"
        },
        vocabGloss: [
            { word: "매일", translation: "every day", romanized: "maeil" },
            { word: "일어나요", translation: "wake up", romanized: "ireonayo" },
            { word: "샤워를 하다", translation: "to take a shower", romanized: "syaworeul hada" },
            { word: "아침밥", translation: "breakfast (morning meal)", romanized: "achimbap" },
            { word: "공부해요", translation: "study", romanized: "gongbuhaeyo" },
            { word: "같이", translation: "together", romanized: "gachi" },
            { word: "자요", translation: "sleep, go to bed", romanized: "jayo" },
            { word: "즐거운", translation: "enjoyable, fun", romanized: "jeulgeoun" }
        ],
        questions: [
            {
                id: "ko-r-a1-2-q1",
                level: "A1",
                prompt: "What does the person eat for breakfast?",
                options: ["Rice and soup", "Bread and coffee", "Noodles", "Eggs and toast"],
                answer: "Rice and soup"
            },
            {
                id: "ko-r-a1-2-q2",
                level: "A1",
                prompt: "What time does the person go to school?",
                options: ["Eight o'clock", "Seven o'clock", "Nine o'clock", "Half past seven"],
                answer: "Eight o'clock"
            },
            {
                id: "ko-r-a1-2-q3",
                level: "A1",
                prompt: "What time does the person go to sleep?",
                options: ["Ten o'clock", "Nine o'clock", "Eleven o'clock", "Eight o'clock"],
                answer: "Ten o'clock"
            }
        ]
    },
    {
        id: "ko-r-a1-3",
        level: "A1",
        category: "dialogue",
        title: "처음 뵙겠습니다 (Nice to Meet You)",
        body: {
            target: "이준: 안녕하세요. 저는 이준이에요. 만나서 반가워요. 수진: 안녕하세요. 저는 박수진이에요. 저도 반가워요. 이준: 수진 씨는 어디 출신이에요? 수진: 저는 부산 출신이에요. 이준 씨는요? 이준: 저는 서울 출신이에요. 수진 씨는 직업이 뭐예요? 수진: 저는 대학생이에요. 이준 씨는요? 이준: 저는 회사원이에요.",
            native: "Lee Jun: Hello. I am Lee Jun. Nice to meet you. Park Sujin: Hello. I am Park Sujin. Nice to meet you too. Lee Jun: Where are you from, Sujin? Sujin: I am from Busan. What about you, Jun? Lee Jun: I am from Seoul. What is your job, Sujin? Sujin: I am a university student. What about you, Jun? Lee Jun: I am a company employee."
        },
        vocabGloss: [
            { word: "만나서 반가워요", translation: "nice to meet you", romanized: "mannaseo bangawoyo" },
            { word: "출신", translation: "from (hometown/origin)", romanized: "chulsin" },
            { word: "직업", translation: "job, occupation", romanized: "jigeop" },
            { word: "대학생", translation: "university student", romanized: "daehaksaeng" },
            { word: "회사원", translation: "company employee", romanized: "hoesawon" }
        ],
        questions: [
            {
                id: "ko-r-a1-3-q1",
                level: "A1",
                prompt: "Where is Park Sujin from?",
                options: ["Busan", "Seoul", "Incheon", "Daejeon"],
                answer: "Busan"
            },
            {
                id: "ko-r-a1-3-q2",
                level: "A1",
                prompt: "What does Park Sujin do?",
                options: ["She is a university student", "She is a company employee", "She is a teacher", "She is a doctor"],
                answer: "She is a university student"
            },
            {
                id: "ko-r-a1-3-q3",
                level: "A1",
                prompt: "What does Lee Jun do?",
                options: ["He is a company employee", "He is a student", "He is a teacher", "He is from Busan"],
                answer: "He is a company employee"
            }
        ]
    },
    {
        id: "ko-r-a1-4",
        level: "A1",
        category: "everyday",
        title: "제 방 (My Room)",
        body: {
            target: "제 방은 작지만 깨끗해요. 책상, 침대, 의자가 있어요. 책상 위에 책과 노트북이 있어요. 창문 밖에 공원이 있어요. 매일 창문으로 밖을 봐요. 방 벽은 하얘요. 좋아하는 포스터를 붙였어요. 제 방은 조용해서 공부하기 좋아요.",
            native: "My room is small but clean. There is a desk, a bed and a chair. On top of the desk there are books and a laptop. Outside the window there is a park. Every day I look outside through the window. The walls of my room are white. I have put up favourite posters. My room is quiet and good for studying."
        },
        vocabGloss: [
            { word: "작지만", translation: "small but...", romanized: "jakjiman" },
            { word: "깨끗해요", translation: "is clean", romanized: "kkaekkeuthaeyo" },
            { word: "책상", translation: "desk", romanized: "chaeksang" },
            { word: "창문", translation: "window", romanized: "changmun" },
            { word: "벽", translation: "wall", romanized: "byeok" },
            { word: "붙였어요", translation: "put up, stuck (on wall)", romanized: "buchyeosseoyo" },
            { word: "조용해서", translation: "because it is quiet", romanized: "joyonghae seo" }
        ],
        questions: [
            {
                id: "ko-r-a1-4-q1",
                level: "A1",
                prompt: "What is outside the window?",
                options: ["A park", "A school", "A river", "A market"],
                answer: "A park"
            },
            {
                id: "ko-r-a1-4-q2",
                level: "A1",
                prompt: "What colour are the walls?",
                options: ["White", "Blue", "Yellow", "Green"],
                answer: "White"
            },
            {
                id: "ko-r-a1-4-q3",
                level: "A1",
                prompt: "What is on top of the desk?",
                options: ["Books and a laptop", "A phone and a lamp", "Posters and pens", "A TV and games"],
                answer: "Books and a laptop"
            }
        ]
    },
    {
        id: "ko-r-a1-5",
        level: "A1",
        category: "everyday",
        title: "좋아하는 음식 (Favourite Food)",
        body: {
            target: "저는 먹는 것을 좋아해요. 제일 좋아하는 음식은 비빔밥이에요. 비빔밥에는 야채, 고기, 계란이 들어가요. 삼겹살도 좋아해요. 친구들과 같이 구워 먹으면 정말 맛있어요. 떡볶이는 매콤해서 좋아해요. 제일 싫어하는 음식은 홍어예요. 냄새가 너무 강해요. 음료는 유자차를 좋아해요. 겨울에 자주 마셔요.",
            native: "I love eating. My favourite food is bibimbap. Bibimbap contains vegetables, meat and egg. I also like samgyeopsal (grilled pork belly). It is really delicious when you grill it together with friends. I like tteokbokki because it is spicy. The food I dislike the most is hongeo (fermented skate). The smell is too strong. For drinks, I like yujacha (citron tea). I drink it often in winter."
        },
        vocabGloss: [
            { word: "먹는 것", translation: "eating (the act of eating)", romanized: "meongneun geot" },
            { word: "제일 좋아하는", translation: "favourite, like the most", romanized: "jeil joahaneun" },
            { word: "비빔밥", translation: "bibimbap (mixed rice dish)", romanized: "bibimbap" },
            { word: "삼겹살", translation: "samgyeopsal (grilled pork belly)", romanized: "samgyeopsal" },
            { word: "매콤해서", translation: "because it is spicy", romanized: "maekomhae seo" },
            { word: "홍어", translation: "hongeo (fermented skate fish)", romanized: "hongeo" },
            { word: "유자차", translation: "yujacha (citron tea)", romanized: "yujacha" }
        ],
        questions: [
            {
                id: "ko-r-a1-5-q1",
                level: "A1",
                prompt: "What is the person's favourite food?",
                options: ["Bibimbap", "Samgyeopsal", "Tteokbokki", "Hongeo"],
                answer: "Bibimbap"
            },
            {
                id: "ko-r-a1-5-q2",
                level: "A1",
                prompt: "What food does the person dislike?",
                options: ["Hongeo", "Bibimbap", "Tteokbokki", "Samgyeopsal"],
                answer: "Hongeo"
            },
            {
                id: "ko-r-a1-5-q3",
                level: "A1",
                prompt: "When does the person often drink yujacha?",
                options: ["In winter", "In summer", "Every morning", "After meals"],
                answer: "In winter"
            }
        ]
    },
    {
        id: "ko-r-a1-6",
        level: "A1",
        category: "everyday",
        title: "시장에서 (At the Market)",
        body: {
            target: "민수: 저기요, 이 사과 얼마예요?\n상인: 사과는 한 개에 오백 원이에요.\n민수: 그럼 세 개 주세요. 그리고 저 딸기는요?\n상인: 딸기는 한 팩에 삼천 원이에요.\n민수: 좀 비싸요. 이천오백 원에 살 수 있어요?\n상인: 네, 괜찮아요. 딸기 한 팩 드릴게요.\n민수: 감사합니다. 카드로 계산해도 돼요?\n상인: 아니요, 현금만 받아요. 죄송해요.\n민수: 알겠어요. 여기 오천 원이요.\n상인: 거스름돈 오백 원 드릴게요. 또 오세요!",
            native: "Minsu: Excuse me, how much are these apples?\nSeller: Apples are five hundred won each.\nMinsu: Then please give me three. And those strawberries?\nSeller: Strawberries are three thousand won per pack.\nMinsu: That's a bit expensive. Can I buy them for two thousand five hundred won?\nSeller: Yes, that's fine. I'll give you one pack of strawberries.\nMinsu: Thank you. Can I pay by card?\nSeller: No, we only accept cash. Sorry.\nMinsu: I see. Here's five thousand won.\nSeller: Here's five hundred won in change. Come again!"
        },
        vocabGloss: [
            { word: "시장", translation: "market", romanized: "sijang" },
            { word: "상인", translation: "seller, vendor", romanized: "sangin" },
            { word: "팩", translation: "pack (packaging unit)", romanized: "paek" },
            { word: "비싸요", translation: "is expensive", romanized: "bissayo" },
            { word: "계산하다", translation: "to pay, to calculate the bill", romanized: "gyesanhada" },
            { word: "현금", translation: "cash", romanized: "hyeongeum" },
            { word: "거스름돈", translation: "change (money returned)", romanized: "geoseureum don" },
            { word: "또 오세요", translation: "please come again", romanized: "tto oseyo" }
        ],
        questions: [
            {
                id: "ko-r-a1-6-q1",
                level: "A1",
                prompt: "How much does Minsu pay for three apples?",
                options: ["1,500 won", "3,000 won", "1,000 won", "500 won"],
                answer: "1,500 won"
            },
            {
                id: "ko-r-a1-6-q2",
                level: "A1",
                prompt: "How much does Minsu pay for the strawberries?",
                options: ["3,000 won", "2,500 won", "1,500 won", "2,000 won"],
                answer: "2,500 won"
            },
            {
                id: "ko-r-a1-6-q3",
                level: "A1",
                prompt: "Why can't Minsu pay by card?",
                options: ["The card machine is broken", "The shop only accepts cash", "The total is too small", "He forgot his card"],
                answer: "The shop only accepts cash"
            }
        ]
    },
    {
        id: "ko-r-a1-7",
        level: "A1",
        category: "everyday",
        title: "병원에서 (At the Doctor's)",
        body: {
            target: "저는 어제부터 몸이 안 좋아요. 머리가 아프고 목도 아파요. 열도 있어요. 그래서 오늘 아침에 병원에 갔어요. 의사 선생님이 물었어요. \"어디가 아파요?\" 저는 대답했어요. \"머리랑 목이 아파요. 그리고 기침도 해요.\" 의사 선생님은 진찰을 했어요. \"감기예요. 걱정하지 마세요.\" 의사 선생님이 약을 처방해 주셨어요. 약국에서 약을 샀어요. 하루에 세 번 먹어야 해요. 집에서 쉬어야 해요. 빨리 낫고 싶어요.",
            native: "I have not been feeling well since yesterday. My head hurts and my throat hurts too. I also have a fever. So I went to the hospital this morning. The doctor asked, 'Where does it hurt?' I replied, 'My head and throat hurt. And I also have a cough.' The doctor examined me. 'It's a cold. Don't worry.' The doctor prescribed medicine for me. I bought the medicine at the pharmacy. I need to take it three times a day. I need to rest at home. I want to get better quickly."
        },
        vocabGloss: [
            { word: "몸이 안 좋아요", translation: "not feeling well (body is not good)", romanized: "momi an joayo" },
            { word: "열", translation: "fever", romanized: "yeol" },
            { word: "기침", translation: "cough", romanized: "gichim" },
            { word: "진찰", translation: "medical examination", romanized: "jinchal" },
            { word: "감기", translation: "cold (illness)", romanized: "gamgi" },
            { word: "약", translation: "medicine", romanized: "yak" },
            { word: "처방하다", translation: "to prescribe", romanized: "cheobanghada" },
            { word: "낫다", translation: "to get better, to recover", romanized: "natda" }
        ],
        questions: [
            {
                id: "ko-r-a1-7-q1",
                level: "A1",
                prompt: "What symptoms does the person have? (Choose the most complete answer)",
                options: ["Headache only", "Headache, sore throat, fever, and cough", "Fever and cough only", "Sore throat and stomachache"],
                answer: "Headache, sore throat, fever, and cough"
            },
            {
                id: "ko-r-a1-7-q2",
                level: "A1",
                prompt: "What does the doctor diagnose?",
                options: ["Flu", "Stomachache", "A cold", "Toothache"],
                answer: "A cold"
            },
            {
                id: "ko-r-a1-7-q3",
                level: "A1",
                prompt: "How often does the person need to take the medicine?",
                options: ["Once a day", "Twice a day", "Three times a day", "Four times a day"],
                answer: "Three times a day"
            }
        ]
    }
]
