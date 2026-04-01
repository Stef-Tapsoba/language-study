import { LessonUnit } from "../../../types"

export const a2Units: LessonUnit[] = [
    {
        id: "ko-a2-u1",
        level: "A2",
        order: 1,
        title: "Getting Around: Direction & Movement",
        description: "Use -에 가다, -에 오다, and -에 다니다 to say where you go, come to, and regularly attend.",
        grammarIds: ["ko-g-a2-1"],
        vocabIds: ["ko-v-a2-081", "ko-v-a2-082", "ko-v-a2-083", "ko-v-a2-084"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u1-q1", level: "A2",
                prompt: "How do you say 'I go to school every day'?",
                options: ["학교에서 가요.", "매일 학교에 가요.", "학교에 왔어요.", "학교에 다니고 싶어요."],
                answer: "매일 학교에 가요."
            },
            {
                id: "ko-a2-u1-q2", level: "A2",
                prompt: "What is the difference between 가다 and 오다?",
                options: [
                    "가다 = to come toward the speaker; 오다 = to go away",
                    "가다 = to go away from the speaker; 오다 = to come toward the speaker",
                    "They mean the same thing",
                    "가다 is formal; 오다 is informal"
                ],
                answer: "가다 = to go away from the speaker; 오다 = to come toward the speaker"
            },
            {
                id: "ko-a2-u1-q3", level: "A2",
                prompt: "Which verb means 'to regularly attend / commute to'?",
                options: ["가다", "오다", "다니다", "돌아가다"],
                answer: "다니다"
            },
            {
                id: "ko-a2-u1-q4", level: "A2",
                prompt: "How do you say 'She comes to the library every morning'?",
                options: [
                    "그녀는 매일 아침 도서관에 가요.",
                    "그녀는 매일 아침 도서관에 와요.",
                    "그녀는 매일 아침 도서관에 있어요.",
                    "그녀는 매일 아침 도서관을 다녀요."
                ],
                answer: "그녀는 매일 아침 도서관에 와요."
            },
            {
                id: "ko-a2-u1-q5", level: "A2",
                prompt: "What does '기차' mean?",
                options: ["Bus", "Subway", "Train", "Taxi"],
                answer: "Train"
            }
        ]
    },
    {
        id: "ko-a2-u2",
        level: "A2",
        order: 2,
        title: "Ability: ~(으)ㄹ 수 있다/없다",
        description: "Say what you can and cannot do",
        grammarIds: ["ko-g-a2-2"],
        vocabIds: ["ko-v-a2-079", "ko-v-a2-081", "ko-v-a2-082"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u2-q1", level: "A2",
                prompt: "How do you say 'I can speak Korean'?",
                options: ["한국어를 말해요.", "한국어를 말할 수 있어요.", "한국어를 말하고 싶어요.", "한국어를 말했어요."],
                answer: "한국어를 말할 수 있어요."
            },
            {
                id: "ko-a2-u2-q2", level: "A2",
                prompt: "Complete: '저는 수영을 ___ 수 없어요.' (cannot)",
                options: ["할", "하는", "하고", "해"],
                answer: "할"
            },
            {
                id: "ko-a2-u2-q3", level: "A2",
                prompt: "What does '오른쪽' mean?",
                options: ["Left", "Straight", "Right", "Back"],
                answer: "Right"
            },
            {
                id: "ko-a2-u2-q4", level: "A2",
                prompt: "What does '왼쪽' mean?",
                options: ["Right", "Left", "Front", "Back"],
                answer: "Left"
            },
            {
                id: "ko-a2-u2-q5", level: "A2",
                prompt: "~(으)ㄹ 수 없어요 means:",
                options: ["I don't want to", "I can't / I'm not able to", "I don't know how", "I won't"],
                answer: "I can't / I'm not able to"
            }
        ]
    },
    {
        id: "ko-a2-u3",
        level: "A2",
        order: 3,
        title: "Permission & Prohibition",
        description: "Ask for and grant permission with -아/어도 되다. Say what is not allowed with -(으)면 안 되다.",
        grammarIds: ["ko-g-a2-3"],
        vocabIds: ["ko-v-a2-105", "ko-v-a2-106", "ko-v-a2-107", "ko-v-a2-108"],
        verbIds: [],
        listeningIds: ["ko-l-a2-1"],
        testQuestions: [
            {
                id: "ko-a2-u3-q1", level: "A2",
                prompt: "How do you ask 'May I come in?'",
                options: ["들어가야 해요?", "들어가도 돼요?", "들어가면 안 돼요?", "들어갈 수 있어요?"],
                answer: "들어가도 돼요?"
            },
            {
                id: "ko-a2-u3-q2", level: "A2",
                prompt: "How do you say 'You must not smoke here'?",
                options: ["여기서 담배를 피워도 돼요.", "여기서 담배를 피우면 안 돼요.", "여기서 담배를 피울 수 없어요.", "여기서 담배를 피우지 마세요."],
                answer: "여기서 담배를 피우면 안 돼요."
            },
            {
                id: "ko-a2-u3-q3", level: "A2",
                prompt: "Which form grants permission?",
                options: ["-아/어도 돼요", "-(으)면 안 돼요", "-아야 해요", "-(으)ㄹ 수 없어요"],
                answer: "-아/어도 돼요"
            },
            {
                id: "ko-a2-u3-q4", level: "A2",
                prompt: "What does '규칙' mean?",
                options: ["Permission", "Habit", "Rule", "Prohibition"],
                answer: "Rule"
            },
            {
                id: "ko-a2-u3-q5", level: "A2",
                prompt: "How do you say 'Is it okay if I sit here?'",
                options: ["여기 앉아야 해요?", "여기 앉으면 안 돼요?", "여기 앉아도 돼요?", "여기에 앉을 수 있어요?"],
                answer: "여기 앉아도 돼요?"
            }
        ]
    },
    {
        id: "ko-a2-u4",
        level: "A2",
        order: 4,
        title: "Ongoing Actions: ~고 있다",
        description: "Describe actions in progress right now",
        grammarIds: ["ko-g-a2-4"],
        vocabIds: ["ko-v-a2-080", "ko-v-a2-083"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u4-q1", level: "A2",
                prompt: "How do you say 'I am eating right now'?",
                options: ["지금 밥을 먹어요.", "지금 밥을 먹었어요.", "지금 밥을 먹고 있어요.", "지금 밥을 먹을 거예요."],
                answer: "지금 밥을 먹고 있어요."
            },
            {
                id: "ko-a2-u4-q2", level: "A2",
                prompt: "What does '기차' mean?",
                options: ["Bus", "Subway", "Train", "Taxi"],
                answer: "Train"
            },
            {
                id: "ko-a2-u4-q3", level: "A2",
                prompt: "~고 있어요 describes:",
                options: ["A completed action", "An ongoing action (in progress)", "A future plan", "A habitual action"],
                answer: "An ongoing action (in progress)"
            },
            {
                id: "ko-a2-u4-q4", level: "A2",
                prompt: "How do you say 'I am studying'?",
                options: ["공부했어요.", "공부할 거예요.", "공부하고 있어요.", "공부해야 해요."],
                answer: "공부하고 있어요."
            },
            {
                id: "ko-a2-u4-q5", level: "A2",
                prompt: "What does '주' mean?",
                options: ["Day", "Month", "Week", "Year"],
                answer: "Week"
            }
        ]
    },
    {
        id: "ko-a2-u5",
        level: "A2",
        order: 5,
        title: "Obligation & Necessity",
        description: "Express what must be done using -아야/어야 하다. Practice everyday obligations and necessities.",
        grammarIds: ["ko-g-a2-5"],
        vocabIds: ["ko-v-a2-092", "ko-v-a2-109", "ko-v-a2-110", "ko-v-a2-111", "ko-v-a2-112"],
        verbIds: [],
        readingIds: ["ko-r-a2-1"],
        testQuestions: [
            {
                id: "ko-a2-u5-q1", level: "A2",
                prompt: "How do you say 'I have to go now'?",
                options: ["이제 가도 돼요.", "이제 가면 안 돼요.", "이제 가야 해요.", "이제 가고 싶어요."],
                answer: "이제 가야 해요."
            },
            {
                id: "ko-a2-u5-q2", level: "A2",
                prompt: "Complete: '숙제를 ___ 해요.' (I have to do homework)",
                options: ["해도", "하면", "해야", "할 수"],
                answer: "해야"
            },
            {
                id: "ko-a2-u5-q3", level: "A2",
                prompt: "-아야/어야 하다 expresses:",
                options: ["Permission", "Prohibition", "Ability", "Obligation / necessity"],
                answer: "Obligation / necessity"
            },
            {
                id: "ko-a2-u5-q4", level: "A2",
                prompt: "What does '준비하다' mean?",
                options: ["To finish", "To prepare", "To practise", "To study"],
                answer: "To prepare"
            },
            {
                id: "ko-a2-u5-q5", level: "A2",
                prompt: "How do you say 'You must rest'?",
                options: ["쉬어도 돼요.", "쉬면 안 돼요.", "쉬어야 해요.", "쉴 수 있어요."],
                answer: "쉬어야 해요."
            }
        ]
    },
    {
        id: "ko-a2-u6",
        level: "A2",
        order: 6,
        title: "Comparing & Expressing Preferences",
        description: "Compare people, places, and things using 더 (more), 덜 (less), and 가장/제일 (most). Express preferences with 보다 더 좋아해요.",
        grammarIds: ["ko-g-a2-6"],
        vocabIds: ["ko-v-a2-094", "ko-v-a2-095", "ko-v-a2-096", "ko-v-a2-097", "ko-v-a2-098"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u6-q1", level: "A2",
                prompt: "How do you say 'I like coffee more than tea'?",
                options: ["차보다 커피를 더 좋아해요.", "차가 커피보다 더 좋아요.", "커피가 더 좋고 차도 좋아요.", "커피보다 차를 더 좋아해요."],
                answer: "차보다 커피를 더 좋아해요.",
                hint: "[Thing you like less]보다 [thing you prefer]를 더 좋아해요."
            },
            {
                id: "ko-a2-u6-q2", level: "A2",
                prompt: "What does 가장 / 제일 mean?",
                options: ["more", "less", "most / best", "very"],
                answer: "most / best"
            },
            {
                id: "ko-a2-u6-q3", level: "A2",
                prompt: "Complete: '이 가방이 저 가방보다 ___ 비싸요.' (more expensive)",
                options: ["덜", "더", "가장", "제일"],
                answer: "더"
            },
            {
                id: "ko-a2-u6-q4", level: "A2",
                prompt: "How do you ask 'Which do you prefer, Korean food or Japanese food?'",
                options: ["한국 음식이 일본 음식보다 더 좋아요?", "한국 음식하고 일본 음식 중에 뭐가 더 좋아요?", "한국 음식을 일본 음식에서 좋아해요?", "어떤 음식이 가장 좋아요?"],
                answer: "한국 음식하고 일본 음식 중에 뭐가 더 좋아요?"
            },
            {
                id: "ko-a2-u6-q5", level: "A2",
                prompt: "What does '덜' mean?",
                options: ["more", "most", "less", "very much"],
                answer: "less"
            }
        ]
    },
    {
        id: "ko-a2-u7",
        level: "A2",
        order: 7,
        title: "Opinions & Conjecture",
        description: "Express opinions and make guesses using -(으)ㄴ/는 것 같아요 and 제 생각에는.",
        grammarIds: ["ko-g-a2-7"],
        vocabIds: ["ko-v-a2-099", "ko-v-a2-100", "ko-v-a2-101", "ko-v-a2-102", "ko-v-a2-103", "ko-v-a2-104"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u7-q1", level: "A2",
                prompt: "How do you say 'I think this is delicious'?",
                options: ["이게 맛있어요.", "이게 맛있는 것 같아요.", "이게 맛있다고 해요.", "이게 맛있고 싶어요."],
                answer: "이게 맛있는 것 같아요."
            },
            {
                id: "ko-a2-u7-q2", level: "A2",
                prompt: "What does '제 생각에는' mean?",
                options: ["I'm thinking", "in my opinion", "I don't know", "according to the news"],
                answer: "in my opinion"
            },
            {
                id: "ko-a2-u7-q3", level: "A2",
                prompt: "How do you say 'It seems like it will rain'?",
                options: ["비가 와요.", "비가 올 것 같아요.", "비가 오고 있어요.", "비가 왔어요."],
                answer: "비가 올 것 같아요."
            },
            {
                id: "ko-a2-u7-q4", level: "A2",
                prompt: "How do you say 'Happy birthday!' in Korean?",
                options: ["축하합니다!", "생일 축하해요!", "오래오래 사세요!", "건강하세요!"],
                answer: "생일 축하해요!"
            },
            {
                id: "ko-a2-u7-q5", level: "A2",
                prompt: "What does '동의해요' mean?",
                options: ["I disagree", "I understand", "I agree", "I'm sorry"],
                answer: "I agree"
            }
        ]
    },
    {
        id: "ko-a2-u8",
        level: "A2",
        order: 8,
        title: "From Here to There: Range & Duration",
        description: "Express where something starts and ends with -에서…까지 (place) and -부터…까지 (time). Ask 'how long does it take?' with 얼마나 걸려요?",
        grammarIds: ["ko-g-a2-8"],
        vocabIds: ["ko-v-a2-113", "ko-v-a2-114", "ko-v-a2-115", "ko-v-a2-116"],
        verbIds: [],
        listeningIds: ["ko-l-a2-2"],
        testQuestions: [
            {
                id: "ko-a2-u8-q1", level: "A2",
                prompt: "How do you say 'From Seoul to Busan'?",
                options: ["서울까지 부산에서", "서울에서 부산까지", "서울부터 부산에서", "서울에서 부산부터"],
                answer: "서울에서 부산까지"
            },
            {
                id: "ko-a2-u8-q2", level: "A2",
                prompt: "Which particle pair is used for time ranges (e.g. 'from Monday to Friday')?",
                options: ["-에서…까지", "-부터…까지", "-에…까지", "-에서…에"],
                answer: "-부터…까지"
            },
            {
                id: "ko-a2-u8-q3", level: "A2",
                prompt: "How do you ask 'How long does it take from here to the station?'",
                options: ["여기서 역까지 멀어요?", "여기서 역까지 얼마나 걸려요?", "여기서 역까지 어떻게 가요?", "여기서 역까지 시간이 있어요?"],
                answer: "여기서 역까지 얼마나 걸려요?"
            },
            {
                id: "ko-a2-u8-q4", level: "A2",
                prompt: "What does '걸리다' mean in a time context?",
                options: ["to arrive", "to take (time) / to require", "to travel", "to walk"],
                answer: "to take (time) / to require"
            },
            {
                id: "ko-a2-u8-q5", level: "A2",
                prompt: "How do you say 'I study from 9 AM to 11 PM'?",
                options: ["아침 9시에서 밤 11시까지 공부해요.", "아침 9시부터 밤 11시까지 공부해요.", "아침 9시에 밤 11시까지 공부해요.", "아침 9시까지 밤 11시부터 공부해요."],
                answer: "아침 9시부터 밤 11시까지 공부해요."
            }
        ]
    },
    {
        id: "ko-a2-u9",
        level: "A2",
        order: 9,
        title: "Conditionals: If… Then…",
        description: "Express conditions and consequences using -(으)면. Build 'if…then' sentences for weather, plans, and advice.",
        grammarIds: ["ko-g-a2-9"],
        vocabIds: ["ko-v-a2-117", "ko-v-a2-118", "ko-v-a2-119", "ko-v-a2-120"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u9-q1", level: "A2",
                prompt: "How do you say 'If it rains, I will stay home'?",
                options: ["비가 오면 집에 있을 거예요.", "비가 오고 집에 있을 거예요.", "비가 오지만 집에 있을 거예요.", "비가 오서 집에 있을 거예요."],
                answer: "비가 오면 집에 있을 거예요."
            },
            {
                id: "ko-a2-u9-q2", level: "A2",
                prompt: "Complete: '시간이 ___ 연락해 주세요.' (If you have time, please contact me)",
                options: ["있지만", "있어서", "있으면", "있고"],
                answer: "있으면"
            },
            {
                id: "ko-a2-u9-q3", level: "A2",
                prompt: "-(으)면 is attached to:",
                options: ["A noun", "The final verb of the sentence", "The verb/adjective stem of the condition clause", "An adverb"],
                answer: "The verb/adjective stem of the condition clause"
            },
            {
                id: "ko-a2-u9-q4", level: "A2",
                prompt: "What does '합격하다' mean?",
                options: ["To study hard", "To pass an exam", "To fail", "To register"],
                answer: "To pass an exam"
            },
            {
                id: "ko-a2-u9-q5", level: "A2",
                prompt: "How do you say 'If you are sick, rest'?",
                options: ["아프고 쉬세요.", "아프지만 쉬세요.", "아프면 쉬세요.", "아파서 쉬세요."],
                answer: "아프면 쉬세요."
            }
        ]
    },
    {
        id: "ko-a2-u10",
        level: "A2",
        order: 10,
        title: "Contrast: But… / Although…",
        description: "Express contrasting ideas in a single sentence using -지만 (but / although). Compare -지만 with the sentence connector 그런데.",
        grammarIds: ["ko-g-a2-10"],
        vocabIds: ["ko-v-a2-121", "ko-v-a2-122", "ko-v-a2-123", "ko-v-a2-124"],
        verbIds: [],
        readingIds: ["ko-r-a2-2"],
        testQuestions: [
            {
                id: "ko-a2-u10-q1", level: "A2",
                prompt: "How do you say 'This bag is expensive but pretty'?",
                options: ["이 가방은 비싸서 예뻐요.", "이 가방은 비싸면 예뻐요.", "이 가방은 비싸지만 예뻐요.", "이 가방은 비싸고 예뻐요."],
                answer: "이 가방은 비싸지만 예뻐요."
            },
            {
                id: "ko-a2-u10-q2", level: "A2",
                prompt: "-지만 attaches to:",
                options: ["A noun directly", "The verb/adjective stem of the first clause", "An adverb", "The object particle"],
                answer: "The verb/adjective stem of the first clause"
            },
            {
                id: "ko-a2-u10-q3", level: "A2",
                prompt: "What does '어렵다' mean?",
                options: ["to be easy", "to be interesting", "to be difficult", "to be boring"],
                answer: "to be difficult"
            },
            {
                id: "ko-a2-u10-q4", level: "A2",
                prompt: "Complete: '한국어는 어렵___ 재미있어요.'",
                options: ["서", "면", "지만", "고"],
                answer: "지만"
            },
            {
                id: "ko-a2-u10-q5", level: "A2",
                prompt: "How do you say 'The food is cheap but delicious'?",
                options: ["음식이 싸서 맛있어요.", "음식이 싸지만 맛있어요.", "음식이 싸면 맛있어요.", "음식이 싸고 맛있어요."],
                answer: "음식이 싸지만 맛있어요."
            }
        ]
    },
    {
        id: "ko-a2-u11",
        level: "A2",
        order: 11,
        title: "Alternatives: Either… or…",
        description: "Offer alternatives and express 'or' in the same clause using -거나. Distinguish -거나 (in a clause) from 아니면 (between sentences).",
        grammarIds: ["ko-g-a2-11"],
        vocabIds: ["ko-v-a2-125", "ko-v-a2-126", "ko-v-a2-127", "ko-v-a2-128"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u11-q1", level: "A2",
                prompt: "How do you say 'I exercise or read a book on weekends'?",
                options: ["주말에 운동하지만 책을 읽어요.", "주말에 운동하거나 책을 읽어요.", "주말에 운동하면 책을 읽어요.", "주말에 운동하고 책을 읽어요."],
                answer: "주말에 운동하거나 책을 읽어요."
            },
            {
                id: "ko-a2-u11-q2", level: "A2",
                prompt: "-거나 attaches to:",
                options: ["A noun", "The verb/adjective stem", "An adverb", "The subject particle"],
                answer: "The verb/adjective stem"
            },
            {
                id: "ko-a2-u11-q3", level: "A2",
                prompt: "What does '아니면' mean?",
                options: ["and", "but", "or / otherwise", "so"],
                answer: "or / otherwise"
            },
            {
                id: "ko-a2-u11-q4", level: "A2",
                prompt: "How do you say 'Do you want to eat or drink something?'",
                options: ["뭔가 먹거나 마시고 싶어요?", "뭔가 먹지만 마시고 싶어요?", "뭔가 먹으면 마시고 싶어요?", "뭔가 먹어서 마시고 싶어요?"],
                answer: "뭔가 먹거나 마시고 싶어요?"
            },
            {
                id: "ko-a2-u11-q5", level: "A2",
                prompt: "What does '둘 다' mean?",
                options: ["Neither one", "Only one", "Both", "Just me"],
                answer: "Both"
            }
        ]
    },
    {
        id: "ko-a2-u12",
        level: "A2",
        order: 12,
        title: "Doing Two Things at Once",
        description: "Describe two simultaneous actions using -(으)면서 (while doing). Express multitasking in everyday Korean.",
        grammarIds: ["ko-g-a2-12"],
        vocabIds: ["ko-v-a2-129", "ko-v-a2-130", "ko-v-a2-131", "ko-v-a2-132"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u12-q1", level: "A2",
                prompt: "How do you say 'I listen to music while studying'?",
                options: ["공부하고 음악을 들어요.", "공부하면 음악을 들어요.", "공부하면서 음악을 들어요.", "공부해서 음악을 들어요."],
                answer: "공부하면서 음악을 들어요."
            },
            {
                id: "ko-a2-u12-q2", level: "A2",
                prompt: "-(으)면서 connects two actions that are:",
                options: ["Sequential (one after the other)", "Simultaneous (happening at the same time)", "Contradictory", "Conditional"],
                answer: "Simultaneous (happening at the same time)"
            },
            {
                id: "ko-a2-u12-q3", level: "A2",
                prompt: "What does '동시에' mean?",
                options: ["one by one", "at the same time", "alternately", "slowly"],
                answer: "at the same time"
            },
            {
                id: "ko-a2-u12-q4", level: "A2",
                prompt: "How do you say 'She sings while walking'?",
                options: ["그녀는 걸으면서 노래해요.", "그녀는 걸어서 노래해요.", "그녀는 걷지만 노래해요.", "그녀는 걸으면 노래해요."],
                answer: "그녀는 걸으면서 노래해요."
            },
            {
                id: "ko-a2-u12-q5", level: "A2",
                prompt: "What does '운동' mean?",
                options: ["Sleep", "Music", "Exercise / sport", "Work"],
                answer: "Exercise / sport"
            }
        ]
    },
    {
        id: "ko-a2-u13",
        level: "A2",
        order: 13,
        title: "Before & After",
        description: "Sequence actions in time using -기 전에 (before doing) and -(으)ㄴ 후에 (after doing). Describe daily routines in order.",
        grammarIds: ["ko-g-a2-13"],
        vocabIds: ["ko-v-a2-133", "ko-v-a2-134", "ko-v-a2-135", "ko-v-a2-136"],
        verbIds: [],
        listeningIds: ["ko-l-a2-3"],
        testQuestions: [
            {
                id: "ko-a2-u13-q1", level: "A2",
                prompt: "How do you say 'I brush my teeth before sleeping'?",
                options: ["자고 나서 양치질을 해요.", "자기 전에 양치질을 해요.", "자면서 양치질을 해요.", "잔 후에 양치질을 해요."],
                answer: "자기 전에 양치질을 해요."
            },
            {
                id: "ko-a2-u13-q2", level: "A2",
                prompt: "What form comes before 전에?",
                options: ["verb stem + -기", "verb stem + -(으)ㄴ", "verb stem + -고", "plain infinitive"],
                answer: "verb stem + -기"
            },
            {
                id: "ko-a2-u13-q3", level: "A2",
                prompt: "How do you say 'I go to the library after class'?",
                options: ["수업 전에 도서관에 가요.", "수업하면서 도서관에 가요.", "수업한 후에 도서관에 가요.", "수업하기 전에 도서관에 가요."],
                answer: "수업한 후에 도서관에 가요."
            },
            {
                id: "ko-a2-u13-q4", level: "A2",
                prompt: "What does '먼저' mean?",
                options: ["later", "always", "first / before anything else", "after"],
                answer: "first / before anything else"
            },
            {
                id: "ko-a2-u13-q5", level: "A2",
                prompt: "What does '나중에' mean?",
                options: ["earlier", "first", "later / afterwards", "never"],
                answer: "later / afterwards"
            }
        ]
    },
    {
        id: "ko-a2-u14",
        level: "A2",
        order: 14,
        title: "Talking About Things: Nominalization",
        description: "Turn verbs and adjectives into noun phrases using -(으)ㄴ/는 것. Say 'the thing I like', 'studying is hard', and more.",
        grammarIds: ["ko-g-a2-14"],
        vocabIds: ["ko-v-a2-137", "ko-v-a2-138", "ko-v-a2-139", "ko-v-a2-140"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u14-q1", level: "A2",
                prompt: "How do you say 'Studying is important'?",
                options: ["공부가 중요해요.", "공부하는 것이 중요해요.", "공부하기가 중요해요.", "공부한 것이 중요해요."],
                answer: "공부하는 것이 중요해요."
            },
            {
                id: "ko-a2-u14-q2", level: "A2",
                prompt: "How do you say 'the thing I like most'?",
                options: ["제일 좋아한 것", "제일 좋아하는 것", "제일 좋은 것", "제일 좋아하기"],
                answer: "제일 좋아하는 것"
            },
            {
                id: "ko-a2-u14-q3", level: "A2",
                prompt: "What does '것' function as in 좋아하는 것?",
                options: ["A verb ending", "A nominalizer ('thing' / 'the act of')", "A topic marker", "An adjective suffix"],
                answer: "A nominalizer ('thing' / 'the act of')"
            },
            {
                id: "ko-a2-u14-q4", level: "A2",
                prompt: "What does '습관' mean?",
                options: ["hobby", "experience", "habit", "schedule"],
                answer: "habit"
            },
            {
                id: "ko-a2-u14-q5", level: "A2",
                prompt: "How do you say 'I know that he is a student'?",
                options: ["그가 학생인 것을 알아요.", "그가 학생하는 것을 알아요.", "그가 학생기 것을 알아요.", "그가 학생고 것을 알아요."],
                answer: "그가 학생인 것을 알아요."
            }
        ]
    },
    {
        id: "ko-a2-u15",
        level: "A2",
        order: 15,
        title: "Describing Nouns: Past & State Modifiers",
        description: "Use -(으)ㄴ to turn past actions and stative adjectives into noun modifiers: 먹은 음식 (the food I ate), 예쁜 꽃 (a pretty flower).",
        grammarIds: ["ko-g-a2-15"],
        vocabIds: ["ko-v-a2-141", "ko-v-a2-142", "ko-v-a2-143", "ko-v-a2-144"],
        verbIds: [],
        readingIds: ["ko-r-a2-3"],
        testQuestions: [
            {
                id: "ko-a2-u15-q1", level: "A2",
                prompt: "How do you say 'the movie I watched yesterday'?",
                options: ["어제 보는 영화", "어제 보고 싶은 영화", "어제 본 영화", "어제 볼 영화"],
                answer: "어제 본 영화"
            },
            {
                id: "ko-a2-u15-q2", level: "A2",
                prompt: "-(으)ㄴ is used to modify a noun with a:",
                options: ["present action", "future plan", "past action or stative adjective", "habitual action"],
                answer: "past action or stative adjective"
            },
            {
                id: "ko-a2-u15-q3", level: "A2",
                prompt: "Which is correct for 'a famous restaurant'?",
                options: ["유명하는 식당", "유명한 식당", "유명하고 식당", "유명한 것 식당"],
                answer: "유명한 식당"
            },
            {
                id: "ko-a2-u15-q4", level: "A2",
                prompt: "What does '특별하다' mean?",
                options: ["to be normal", "to be special", "to be famous", "to be new"],
                answer: "to be special"
            },
            {
                id: "ko-a2-u15-q5", level: "A2",
                prompt: "How do you say 'a pretty flower'?",
                options: ["예쁘는 꽃", "예쁘고 꽃", "예쁜 꽃", "예쁘기 꽃"],
                answer: "예쁜 꽃"
            }
        ]
    },
    {
        id: "ko-a2-u16",
        level: "A2",
        order: 16,
        title: "Describing Nouns: Present Action Modifiers",
        description: "Use -는 to modify nouns with ongoing or habitual actions: 읽는 책 (the book I'm reading), 사는 곳 (the place where I live).",
        grammarIds: ["ko-g-a2-16"],
        vocabIds: ["ko-v-a2-145", "ko-v-a2-146", "ko-v-a2-147", "ko-v-a2-148"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u16-q1", level: "A2",
                prompt: "How do you say 'the book I am reading'?",
                options: ["읽은 책", "읽는 책", "읽을 책", "읽기 책"],
                answer: "읽는 책"
            },
            {
                id: "ko-a2-u16-q2", level: "A2",
                prompt: "-는 is used with action verbs to describe:",
                options: ["a completed action", "a future action", "an ongoing or habitual action", "a conditional action"],
                answer: "an ongoing or habitual action"
            },
            {
                id: "ko-a2-u16-q3", level: "A2",
                prompt: "How do you say 'a friend who lives in Seoul'?",
                options: ["서울에 산 친구", "서울에 살는 친구", "서울에 사는 친구", "서울에 살기 친구"],
                answer: "서울에 사는 친구"
            },
            {
                id: "ko-a2-u16-q4", level: "A2",
                prompt: "What does '가르치다' mean?",
                options: ["to learn", "to study", "to teach", "to practise"],
                answer: "to teach"
            },
            {
                id: "ko-a2-u16-q5", level: "A2",
                prompt: "How do you say 'a teacher who teaches Korean'?",
                options: ["한국어를 가르친 선생님", "한국어를 가르치는 선생님", "한국어를 가르칠 선생님", "한국어를 가르치기 선생님"],
                answer: "한국어를 가르치는 선생님"
            }
        ]
    },
    {
        id: "ko-a2-u17",
        level: "A2",
        order: 17,
        title: "Talking About Others' Feelings",
        description: "Describe third-person emotions using -고 싶어하다 (want to) and -아/어하다 (feel). Learn why Korean distinguishes first-person from third-person feelings.",
        grammarIds: ["ko-g-a2-17"],
        vocabIds: ["ko-v-a2-149", "ko-v-a2-150", "ko-v-a2-151", "ko-v-a2-152"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u17-q1", level: "A2",
                prompt: "How do you say 'My friend wants to go to Korea' (third person)?",
                options: ["친구가 한국에 가고 싶어요.", "친구가 한국에 가고 싶어해요.", "친구가 한국에 가고 싶대요.", "친구가 한국에 가고 싶겠어요."],
                answer: "친구가 한국에 가고 싶어해요."
            },
            {
                id: "ko-a2-u17-q2", level: "A2",
                prompt: "Why does Korean use -고 싶어하다 for third-person desires?",
                options: [
                    "It is more polite",
                    "Korean marks whether feelings are directly experienced (1st person) or observed (3rd person)",
                    "It is an older grammatical form",
                    "There is no difference — both forms are correct"
                ],
                answer: "Korean marks whether feelings are directly experienced (1st person) or observed (3rd person)"
            },
            {
                id: "ko-a2-u17-q3", level: "A2",
                prompt: "How do you say 'The child is scared of dogs'?",
                options: ["아이가 개를 무서워요.", "아이가 개를 무서워해요.", "아이가 개를 무섭다해요.", "아이가 개를 무서워하고 싶어요."],
                answer: "아이가 개를 무서워해요."
            },
            {
                id: "ko-a2-u17-q4", level: "A2",
                prompt: "What does '기뻐하다' mean?",
                options: ["to be sad (3rd person)", "to be delighted / overjoyed (3rd person)", "to be angry (3rd person)", "to be afraid (3rd person)"],
                answer: "to be delighted / overjoyed (3rd person)"
            },
            {
                id: "ko-a2-u17-q5", level: "A2",
                prompt: "How do you say 'She dislikes spicy food'?",
                options: ["그녀가 매운 음식이 싫어요.", "그녀가 매운 음식을 싫어해요.", "그녀가 매운 음식이 싫다해요.", "그녀가 매운 음식을 싫어하고 싶어요."],
                answer: "그녀가 매운 음식을 싫어해요."
            }
        ]
    },
    {
        id: "ko-a2-u18",
        level: "A2",
        order: 18,
        title: "Making Promises: -(으)ㄹ게요",
        description: "Express personal promises and volitional commitments to others using -(으)ㄹ게요. Understand why it differs from -(으)ㄹ 거예요.",
        grammarIds: ["ko-g-a2-18"],
        vocabIds: ["ko-v-a2-153", "ko-v-a2-154", "ko-v-a2-155", "ko-v-a2-156"],
        verbIds: [],
        listeningIds: ["ko-l-a2-4"],
        testQuestions: [
            {
                id: "ko-a2-u18-q1", level: "A2",
                prompt: "How do you say 'I will help you' (as a promise/offer)?",
                options: ["도와줄 거예요.", "도와줄게요.", "도와주면 돼요.", "도와줘야 해요."],
                answer: "도와줄게요."
            },
            {
                id: "ko-a2-u18-q2", level: "A2",
                prompt: "-(으)ㄹ게요 expresses:",
                options: ["A general future plan (neutral)", "A personal promise or commitment to the listener", "A conditional action", "A habitual action"],
                answer: "A personal promise or commitment to the listener"
            },
            {
                id: "ko-a2-u18-q3", level: "A2",
                prompt: "How do you say 'I will contact you when I arrive'?",
                options: ["도착하면 연락했어요.", "도착하면 연락할 거예요.", "도착하면 연락할게요.", "도착하면 연락하면 돼요."],
                answer: "도착하면 연락할게요."
            },
            {
                id: "ko-a2-u18-q4", level: "A2",
                prompt: "What does '노력하다' mean?",
                options: ["to rest", "to make an effort / try hard", "to promise", "to contact"],
                answer: "to make an effort / try hard"
            },
            {
                id: "ko-a2-u18-q5", level: "A2",
                prompt: "How do you say 'I will definitely keep my promise'?",
                options: ["약속을 꼭 지킬 거예요.", "약속을 꼭 지킬게요.", "약속을 꼭 지켜야 해요.", "약속을 꼭 지킬 수 있어요."],
                answer: "약속을 꼭 지킬게요."
            }
        ]
    },
    {
        id: "ko-a2-u19",
        level: "A2",
        order: 19,
        title: "Polite Requests & Honorific Commands",
        description: "Make polite requests and give instructions using -(으)세요 and the formal -(으)십시오. Navigate Korean formality levels in service and professional settings.",
        grammarIds: ["ko-g-a2-19"],
        vocabIds: ["ko-v-a2-157", "ko-v-a2-158", "ko-v-a2-159", "ko-v-a2-160"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-a2-u19-q1", level: "A2",
                prompt: "How do you say 'Please come in'?",
                options: ["들어와요.", "들어오세요.", "들어오십시오.", "들어오지 마세요."],
                answer: "들어오세요."
            },
            {
                id: "ko-a2-u19-q2", level: "A2",
                prompt: "What is the difference between -(으)세요 and -(으)십시오?",
                options: [
                    "-(으)세요 is more formal than -(으)십시오",
                    "-(으)십시오 is more formal (used in announcements/official settings); -(으)세요 is polite everyday speech",
                    "They are exactly the same",
                    "-(으)세요 is only used with seniors"
                ],
                answer: "-(으)십시오 is more formal (used in announcements/official settings); -(으)세요 is polite everyday speech"
            },
            {
                id: "ko-a2-u19-q3", level: "A2",
                prompt: "How do you say 'Please speak slowly'?",
                options: ["천천히 말해요.", "천천히 말하세요.", "천천히 말해 주세요.", "천천히 말하면 돼요."],
                answer: "천천히 말해 주세요."
            },
            {
                id: "ko-a2-u19-q4", level: "A2",
                prompt: "What does '잠깐' mean?",
                options: ["slowly", "for a moment / just a sec", "please", "right now"],
                answer: "for a moment / just a sec"
            },
            {
                id: "ko-a2-u19-q5", level: "A2",
                prompt: "How do you say 'Please wait a moment'?",
                options: ["잠깐 기다리면 돼요.", "잠깐 기다려 주세요.", "잠깐 기다려야 해요.", "잠깐 기다렸어요."],
                answer: "잠깐 기다려 주세요."
            }
        ]
    },
    {
        id: "ko-a2-u20",
        level: "A2",
        order: 20,
        title: "No Need To: Absence of Obligation",
        description: "Express that something is not required using -지 않아도 되다 and 필요가 없다. Reassure others and decline unnecessary actions gracefully.",
        grammarIds: ["ko-g-a2-20"],
        vocabIds: ["ko-v-a2-161", "ko-v-a2-162", "ko-v-a2-163", "ko-v-a2-164"],
        verbIds: [],
        readingIds: ["ko-r-a2-4"],
        testQuestions: [
            {
                id: "ko-a2-u20-q1", level: "A2",
                prompt: "How do you say 'You don't need to worry'?",
                options: ["걱정하면 안 돼요.", "걱정하지 않아도 돼요.", "걱정하지 마세요.", "걱정할 수 없어요."],
                answer: "걱정하지 않아도 돼요."
            },
            {
                id: "ko-a2-u20-q2", level: "A2",
                prompt: "-지 않아도 되다 expresses:",
                options: ["prohibition", "obligation", "ability", "absence of obligation (no need to)"],
                answer: "absence of obligation (no need to)"
            },
            {
                id: "ko-a2-u20-q3", level: "A2",
                prompt: "How do you say 'It's okay — you don't need to hurry'?",
                options: ["서두르면 안 돼요.", "서두르지 않아도 돼요.", "서두르지 마세요.", "서두를 수 없어요."],
                answer: "서두르지 않아도 돼요."
            },
            {
                id: "ko-a2-u20-q4", level: "A2",
                prompt: "What does '충분하다' mean?",
                options: ["to be necessary", "to be important", "to be enough / sufficient", "to be empty"],
                answer: "to be enough / sufficient"
            },
            {
                id: "ko-a2-u20-q5", level: "A2",
                prompt: "How do you say 'There is no need for a bag'?",
                options: ["가방이 없어도 돼요.", "가방이 필요가 없어요.", "가방이 필요하지 않아야 해요.", "가방이 있으면 안 돼요."],
                answer: "가방이 필요가 없어요."
            }
        ]
    },
]
