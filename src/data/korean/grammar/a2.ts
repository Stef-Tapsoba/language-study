import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "ko-g-a2-1",
        level: "A2",
        title: "-에 가다/오다/다니다 (Directional Motion Verbs)",
        explanation: {
            native: "Korean uses three core motion verbs with the destination particle -에: 가다 (to go — movement away from speaker), 오다 (to come — movement toward speaker), 다니다 (to attend/go regularly — habitual or repeated movement). The particle -에 marks the destination. 다니다 implies a routine: you go somewhere regularly and come back, making it ideal for school, work, and gym. Past tense: 가다 → 갔어요, 오다 → 왔어요, 다니다 → 다녔어요.",
            target: "한국어에서 방향을 나타내는 세 가지 핵심 동사를 '-에'와 함께 씁니다: 가다 (말하는 사람에게서 멀어짐), 오다 (말하는 사람 쪽으로 가까워짐), 다니다 (규칙적/반복적 이동). '-에'는 목적지를 나타냅니다. 다니다는 학교, 직장, 헬스장처럼 정기적으로 가는 곳에 씁니다. 과거형: 가다 → 갔어요, 오다 → 왔어요, 다니다 → 다녔어요."
        },
        examples: [
            { native: "학교에 가요.", romanized: "Hakgyoe gayo.", translation: "I go to school. (going away)" },
            { native: "집에 와요.", romanized: "Jibe wayo.", translation: "I come home. (toward speaker)" },
            { native: "회사에 다녀요.", romanized: "Hoesae danyeoyo.", translation: "I go to work regularly." },
            { native: "어디에 가요?", romanized: "Eodie gayo?", translation: "Where are you going?" },
            { native: "어느 학교에 다녀요?", romanized: "Eoneu hakgyoe danyeoyo?", translation: "Which school do you attend?" }
        ],
        inlineVocab: [
            { word: "다니다", romanized: "danida", translation: "to attend / go regularly" },
            { word: "도착하다", romanized: "dochakada", translation: "to arrive" },
            { word: "출발하다", romanized: "chulbalhada", translation: "to depart / set off" }
        ]
    },
    {
        id: "ko-g-a2-2",
        level: "A2",
        title: "-(으)ㄹ 수 있다/없다 (Ability & Possibility)",
        explanation: {
            native: "To express ability ('can/be able to') use the verb stem + (으)ㄹ 수 있어요. For inability, use 없어요. If the stem ends in a consonant, add 을 수; if it ends in a vowel or ㄹ, add ㄹ 수. This structure expresses general or learned ability. For situational inability in a specific moment, use 못 + verb instead.",
            target: "능력이나 가능성을 나타낼 때 '(으)ㄹ 수 있어요'를 씁니다. 불가능할 때는 '(으)ㄹ 수 없어요'를 씁니다. 동사 어간이 자음으로 끝나면 '을 수', 모음이나 ㄹ로 끝나면 'ㄹ 수'를 붙입니다. 상황적 불가능(지금 이 순간)에는 '못 + 동사'를 씁니다."
        },
        examples: [
            { native: "한국어를 할 수 있어요.", romanized: "Hangugeoreul hal su isseoyo.", translation: "I can speak Korean." },
            { native: "수영을 할 수 없어요.", romanized: "Suyeongeul hal su eopseoyo.", translation: "I cannot swim." },
            { native: "지금 올 수 있어요?", romanized: "Jigeum ol su isseoyo?", translation: "Can you come now?" },
            { native: "자전거를 탈 수 있어요.", romanized: "Jajeongeoreul tal su isseoyo.", translation: "I can ride a bicycle." },
            { native: "이 문을 열 수 없어요.", romanized: "I muneul yeol su eopseoyo.", translation: "I can't open this door." }
        ],
        inlineVocab: [
            { word: "운전하다", romanized: "unjeonhada", translation: "to drive" },
            { word: "수영하다", romanized: "suyeonghada", translation: "to swim" },
            { word: "가능하다", romanized: "ganeunghada", translation: "to be possible" }
        ]
    },
    {
        id: "ko-g-a2-3",
        level: "A2",
        title: "-아/어도 되다 / -(으)면 안 되다 (Permission & Prohibition)",
        explanation: {
            native: "To ask for or grant permission, use verb stem + -아/어도 되다 (it's okay to / may). To express prohibition, use verb stem + -(으)면 안 되다 (must not / not allowed). Asking: -아/어도 돼요? (May I...?). Short answers: 돼요 (yes, you may) / 안 돼요 (no, you may not). Formation follows the same ㅏ/ㅗ → -아, other → -어 rule.",
            target: "허락을 구하거나 줄 때는 '-아/어도 되다'를 씁니다. 금지를 나타낼 때는 '-(으)면 안 되다'를 씁니다. 질문: '-아/어도 돼요?' 짧은 대답: '돼요 / 안 돼요'. 결합은 '-아요/어요'와 같은 규칙입니다 (ㅏ/ㅗ → -아, 나머지 → -어)."
        },
        examples: [
            { native: "여기서 사진을 찍어도 돼요?", romanized: "Yeogiseo sajineul jjigeodo dwaeyo?", translation: "May I take photos here?" },
            { native: "여기서 담배를 피우면 안 돼요.", romanized: "Yeogiseo dambaereul piumyeon an dwaeyo.", translation: "You must not smoke here." },
            { native: "이 의자에 앉아도 돼요? — 네, 돼요.", romanized: "I uijae anjado dwaeyo? — Ne, dwaeyo.", translation: "May I sit in this chair? — Yes, you may." },
            { native: "도서관에서 전화하면 안 돼요.", romanized: "Doseogwaneseo jeonwahomyeon an dwaeyo.", translation: "You must not make phone calls in the library." },
            { native: "여기에 주차하면 안 돼요.", romanized: "Yeogie juchahomyeon an dwaeyo.", translation: "You must not park here." }
        ],
        inlineVocab: [
            { word: "허락 (許諾)", romanized: "heorak", translation: "permission" },
            { word: "금지 (禁止)", romanized: "geumji", translation: "prohibition" },
            { word: "규칙 (規則)", romanized: "gyuchik", translation: "rule / regulation" }
        ]
    },
    {
        id: "ko-g-a2-4",
        level: "A2",
        title: "-고 있다 (Progressive — Ongoing Actions)",
        explanation: {
            native: "Attach -고 있어요 to a verb stem to express an ongoing action ('am/is/are -ing'). The negative is -고 있지 않아요 or simply 안 ~ 고 있어요. Note: some verbs like 알다 (to know) and 입다 (to wear) use -고 있다 to express a resulting state — 알고 있어요 means 'I know' (I am in a state of knowing); 입고 있어요 means 'I am wearing' (in a state of being dressed).",
            target: "지금 진행 중인 동작을 나타낼 때 '-고 있어요'를 씁니다. 부정형: '-고 있지 않아요' 또는 '안 ~ 고 있어요'. 알다(알고 있어요 = 알고 있는 상태), 입다(입고 있어요 = 입고 있는 상태)처럼 결과 상태를 나타내기도 합니다."
        },
        examples: [
            { native: "지금 밥을 먹고 있어요.", romanized: "Jigeum babeul meokgo isseoyo.", translation: "I am eating right now." },
            { native: "뭐 하고 있어요?", romanized: "Mwo hago isseoyo?", translation: "What are you doing?" },
            { native: "음악을 듣고 있어요.", romanized: "Eumaguel deutgo isseoyo.", translation: "I am listening to music." },
            { native: "그 영화를 보고 있어요.", romanized: "Geu yeonghwareul bogo isseoyo.", translation: "I am watching that movie." },
            { native: "알고 있어요.", romanized: "Algo isseoyo.", translation: "I know. (in a state of knowing)" }
        ],
        inlineVocab: [
            { word: "준비하다", romanized: "junbihada", translation: "to prepare" },
            { word: "기다리다", romanized: "gidarida", translation: "to wait" },
            { word: "결과 상태", romanized: "gyeolgwa sangtae", translation: "resulting state" }
        ]
    },
    {
        id: "ko-g-a2-5",
        level: "A2",
        title: "-아야/어야 하다 (Obligation — Must/Have To)",
        explanation: {
            native: "To express obligation or necessity ('must / have to'), use verb stem + -아야/어야 하다. Formation: ㅏ/ㅗ stem → -아야 하다; other vowel stems → -어야 하다; 하다 verbs → 해야 하다. In speech, -아야/어야 해요 is most common. Past: -아야/어야 했어요. The negative (don't have to) uses -지 않아도 되다, not -아야/어야 안 하다.",
            target: "의무나 필요성을 나타낼 때 '-아야/어야 하다'를 씁니다. 결합: ㅏ/ㅗ → -아야 하다, 나머지 → -어야 하다, 하다 → 해야 하다. 구어: '-아야/어야 해요'. 과거형: -아야/어야 했어요. 부정 (안 해도 됨): '-지 않아도 되다' (-아야/어야 안 하다는 틀린 형태)."
        },
        examples: [
            { native: "약을 먹어야 해요.", romanized: "Yageul meogeoya haeyo.", translation: "I have to take medicine." },
            { native: "내일까지 제출해야 해요.", romanized: "Naeilkkaji jechulhaeya haeyo.", translation: "I have to submit it by tomorrow." },
            { native: "지금 가야 해요?", romanized: "Jigeum gaya haeyo?", translation: "Do I have to go now?" },
            { native: "숙제를 해야 했어요.", romanized: "Sukjereul haeya haesseoyo.", translation: "I had to do the homework. (past)" },
            { native: "열심히 공부해야 해요.", romanized: "Yeolsimhi gongbuhaeya haeyo.", translation: "I must study hard." }
        ],
        inlineVocab: [
            { word: "의무 (義務)", romanized: "uimu", translation: "obligation / duty" },
            { word: "제출하다", romanized: "jechulhada", translation: "to submit / hand in" },
            { word: "반드시", romanized: "bandeusi", translation: "definitely / must" }
        ]
    },
    {
        id: "ko-g-a2-6",
        level: "A2",
        title: "Comparisons — 더 / 덜 / 가장 / 보다",
        explanation: {
            native: "Korean comparisons use: 보다 (than) to mark the standard; 더 (more) for higher degree; 덜 (less) for lower degree; 가장 or 제일 (most) for superlatives. Word order: [standard]보다 [subject]이/가 더/덜 [adjective]. Superlative: [subject]이/가 가장/제일 [adjective]. Preference: A보다 B를 더 좋아해요 (I prefer B over A). Asking between options: A하고 B 중에 뭐가 더 좋아요?",
            target: "비교 표현: 보다(than) — 비교 기준에 붙임; 더(more); 덜(less); 가장/제일(most). 어순: [기준]보다 [주어]이/가 더/덜 [형용사]. 최상급: [주어]이/가 가장/제일 [형용사]. 선호: A보다 B를 더 좋아해요. 둘 중 선택: A하고 B 중에 뭐가 더 좋아요?"
        },
        examples: [
            { native: "오늘이 어제보다 더 더워요.", romanized: "Oneuri eojeboda deo deowoyo.", translation: "Today is hotter than yesterday." },
            { native: "이게 저것보다 덜 비싸요.", romanized: "Ige jeogeotboda deol bissayo.", translation: "This is less expensive than that." },
            { native: "서울이 제일 큰 도시예요.", romanized: "Seouli jeil keun dosiyeyo.", translation: "Seoul is the biggest city." },
            { native: "차보다 커피를 더 좋아해요.", romanized: "Chaboda keopireul deo joahaeyo.", translation: "I like coffee more than tea." },
            { native: "한국 음식하고 일본 음식 중에 뭐가 더 좋아요?", romanized: "Hanguk eumsikago ilbon eumsik junge mwoga deo joayo?", translation: "Which do you prefer, Korean food or Japanese food?" }
        ],
        inlineVocab: [
            { word: "비교하다", romanized: "bigyo hada", translation: "to compare" },
            { word: "차이 (差異)", romanized: "chai", translation: "difference" },
            { word: "비슷하다", romanized: "biseutada", translation: "to be similar" }
        ]
    },
    {
        id: "ko-g-a2-7",
        level: "A2",
        title: "-(으)ㄴ/는 것 같아요 & 생각해요 (Opinions & Guesses)",
        explanation: {
            native: "To express a soft opinion or inference: -(으)ㄴ/는 것 같아요 (I think / it seems). For present adjectives: adj stem + -(으)ㄴ 것 같아요. For present action verbs: verb stem + -는 것 같아요. For future/supposition: -(으)ㄹ 것 같아요. For direct opinions: 제 생각에는 ~ (in my opinion) or ~(이)라고 생각해요. 것 같아요 is softer; 생각해요 is more direct.",
            target: "부드러운 의견이나 추측: '-(으)ㄴ/는 것 같아요'. 현재 형용사: -(으)ㄴ 것 같아요. 현재 동사: -는 것 같아요. 미래/추측: -(으)ㄹ 것 같아요. 직접적 의견: '제 생각에는 ~' / '~(이)라고 생각해요'. 것 같아요는 추론이나 공손함, 생각해요는 더 직접적입니다."
        },
        examples: [
            { native: "이 영화가 재미있는 것 같아요.", romanized: "I yeongwaga jaemiinneun geot gatayo.", translation: "I think this movie is interesting." },
            { native: "오늘 비가 올 것 같아요.", romanized: "Oneul biga ol geot gatayo.", translation: "I think it will rain today." },
            { native: "제 생각에는 이게 더 좋은 방법이에요.", romanized: "Je saenggage neun ige deo joeun bangbobieyo.", translation: "In my opinion, this is the better method." },
            { native: "그 사람이 친절한 것 같아요.", romanized: "Geu sarami chinjeolhan geot gatayo.", translation: "I think that person is kind." },
            { native: "저는 한국어가 어렵다고 생각해요.", romanized: "Jeoneun hangugeo ga eoryeopda go saenggakhaeyo.", translation: "I think Korean is difficult." }
        ],
        inlineVocab: [
            { word: "의견 (意見)", romanized: "uigyeon", translation: "opinion" },
            { word: "추측하다", romanized: "chuceukhada", translation: "to guess / conjecture" },
            { word: "확실하다", romanized: "hwaksilhada", translation: "to be certain / sure" }
        ]
    },
    {
        id: "ko-g-a2-8",
        level: "A2",
        title: "-에서…까지 / -부터…까지 (From … To)",
        explanation: {
            native: "Two paired boundary markers: -에서…까지 marks spatial range (from place A to place B); -부터…까지 marks time range (from time A to time B). Key distinction: -에서 is for physical locations as a starting point; -부터 is for time starting points. To ask how long something takes: 얼마나 걸려요? (얼마나 + 걸리다 = how long does it take?).",
            target: "두 가지 범위 표현: -에서…까지 = 공간 범위 (A 장소에서 B 장소까지); -부터…까지 = 시간 범위 (A 시간부터 B 시간까지). 핵심 구분: -에서는 출발 장소에, -부터는 시작 시간에 붙입니다. 소요 시간 질문: 얼마나 걸려요?"
        },
        examples: [
            { native: "서울에서 부산까지 기차로 두 시간 반이에요.", romanized: "Seoureseo Busankaji gicharol du sigan banieyo.", translation: "It's two and a half hours from Seoul to Busan by train." },
            { native: "아침 9시부터 저녁 6시까지 일해요.", romanized: "Achim ahopsibuteo jeonyeok yeoseotsikkaji ilhaeyo.", translation: "I work from 9am to 6pm." },
            { native: "학교에서 집까지 얼마나 걸려요?", romanized: "Hakgyoeseo jibkkaji eolmana geollyeoyo?", translation: "How long does it take from school to home?" },
            { native: "월요일부터 금요일까지 학교에 가요.", romanized: "Woryoilbuteo geumyoilkkaji hakgyoe gayo.", translation: "I go to school from Monday to Friday." },
            { native: "여기서 역까지 걸어서 10분이에요.", romanized: "Yeogiseo yeokkkaji georeoseo sib bunieyo.", translation: "It's a 10-minute walk from here to the station." }
        ],
        inlineVocab: [
            { word: "걸리다", romanized: "geollida", translation: "to take (time)" },
            { word: "거리 (距離)", romanized: "geori", translation: "distance" },
            { word: "기간 (期間)", romanized: "gigan", translation: "period / duration" }
        ]
    },
    {
        id: "ko-g-a2-9",
        level: "A2",
        title: "-(으)면 (Conditional — If / When)",
        explanation: {
            native: "Verb/adjective stem + -(으)면 = if / when. Formation: consonant-ending stems → -으면; vowel or ㄹ-ending stems → -면 (ㄹ drops). Used for real, predictable conditions. Also used for polite suggestions: ~으면 좋겠어요 (it would be nice if...) and ~으면 어때요? (how about...?). The condition clause comes before the result clause.",
            target: "동사/형용사 어간 + -(으)면 = 만약 ~ 면. 결합: 자음 어간 → -으면; 모음/ㄹ 어간 → -면 (ㄹ 탈락). 실제적이고 예측 가능한 조건에 씁니다. 정중한 제안: ~으면 좋겠어요 / ~으면 어때요? 조건절이 결과절 앞에 옵니다."
        },
        examples: [
            { native: "날씨가 좋으면 공원에 가요.", romanized: "Nalssiga joeuomyeon gongwone gayo.", translation: "If the weather is nice, I go to the park." },
            { native: "시간이 있으면 같이 커피 마셔요.", romanized: "Sigani isseumyeon gachi keopI masyeoyo.", translation: "If you have time, let's have coffee together." },
            { native: "모르면 물어보세요.", romanized: "Moreumyeon mureoboseyo.", translation: "If you don't know, please ask." },
            { native: "한국에 가면 삼겹살을 드세요.", romanized: "Hanguge gamyeon samgyeopsareul deuseyo.", translation: "If you go to Korea, eat samgyeopsal." },
            { native: "돈이 있으면 좋겠어요.", romanized: "Doni isseumyeon jokesseoyo.", translation: "It would be nice if I had money." }
        ],
        inlineVocab: [
            { word: "조건 (條件)", romanized: "jogeon", translation: "condition" },
            { word: "결과 (結果)", romanized: "gyeolgwa", translation: "result / outcome" },
            { word: "가정 (假定)", romanized: "gajeong", translation: "assumption / hypothesis" }
        ]
    },
    {
        id: "ko-g-a2-10",
        level: "A2",
        title: "-지만 (Contrast — But / However)",
        explanation: {
            native: "Verb/adjective stem + -지만 = but / however. Connects two contrasting clauses in a single sentence. Tense is typically carried only by the final verb. For contrast between separate sentences, use: 그렇지만 / 하지만 (but/however) or 그래도 (even so / still). -지만 cannot start a sentence — it always connects within one.",
            target: "동사/형용사 어간 + -지만 = 하지만/그러나. 하나의 문장 안에서 두 절을 대조합니다. 시제는 보통 마지막 동사에만 씁니다. 문장 간 대조에는 '그렇지만 / 하지만'이나 '그래도'를 씁니다. -지만은 문장을 시작할 수 없습니다."
        },
        examples: [
            { native: "이 식당은 비싸지만 맛있어요.", romanized: "I sikdangeun bissajiman massisseoyo.", translation: "This restaurant is expensive, but it's delicious." },
            { native: "한국어가 어렵지만 재미있어요.", romanized: "Hangugeoga eoryeopjiman jaemiisseoyo.", translation: "Korean is difficult, but it's interesting." },
            { native: "피곤하지만 일해야 해요.", romanized: "Pigonhajiman ilhaeya haeyo.", translation: "I'm tired, but I have to work." },
            { native: "이 영화를 봤지만 재미없었어요.", romanized: "I yeonghwareul bwatjiman jaemieopsseosseoyo.", translation: "I watched this movie, but it wasn't interesting." },
            { native: "작지만 예뻐요.", romanized: "Jakjiman yeppoyo.", translation: "It's small, but it's pretty." }
        ],
        inlineVocab: [
            { word: "반면에", romanized: "banmyeon e", translation: "on the other hand" },
            { word: "그렇지만", romanized: "geureojiman", translation: "however / but (sentence-initial)" },
            { word: "그래도", romanized: "geraedo", translation: "even so / still" }
        ]
    },
    {
        id: "ko-g-a2-11",
        level: "A2",
        title: "-거나 (Alternative — Or)",
        explanation: {
            native: "Verb/adjective stem + -거나 = or (for listing alternatives). Presents either-or choices between verbs or adjectives: [option A]-거나 [option B]. For nouns, use -이나/나 instead. The pattern -거나 하다 softens the meaning to 'or something like that'. Note: 또는 is the formal/written equivalent; 아니면 is used in spoken questions ('A or B?').",
            target: "동사/형용사 어간 + -거나 = 또는. 동사/형용사 사이에서 선택지를 나타냅니다. 명사에는 '-이나/나'를 씁니다. '-거나 하다'는 '~ 뭐 그런 것' 뉘앙스. 격식체/문어: 또는; 구어 선택 질문: 아니면."
        },
        examples: [
            { native: "주말에 집에 있거나 친구를 만나요.", romanized: "Jumale jibe itgeona chingureul mannayo.", translation: "On weekends I stay home or meet friends." },
            { native: "커피를 마시거나 차를 마셔요.", romanized: "Keopireul masigeona chareul masyeoyo.", translation: "I drink coffee or tea." },
            { native: "영화를 보거나 음악을 들어요.", romanized: "Yeonghwareul bogeona eumageul deuroyo.", translation: "I watch movies or listen to music." },
            { native: "빨갛거나 파란 것을 골라요.", romanized: "Ppalgatgeona paran geoseul gorayo.", translation: "Choose something red or blue." },
            { native: "운동하거나 산책하거나 해요.", romanized: "Undonghageona sanchaekhageona haeyo.", translation: "I exercise or take a walk or something like that." }
        ],
        inlineVocab: [
            { word: "선택 (選擇)", romanized: "seonntaek", translation: "choice / selection" },
            { word: "또는", romanized: "ttoneun", translation: "or (formal/written)" },
            { word: "아니면", romanized: "animyeon", translation: "or (spoken / in questions)" }
        ]
    },
    {
        id: "ko-g-a2-12",
        level: "A2",
        title: "-(으)면서 (Simultaneous Actions — While Doing)",
        explanation: {
            native: "Verb stem + -(으)면서 = while doing / at the same time as. Both actions must share the same subject. Consonant-ending stems → -으면서; vowel or ㄹ-ending → -면서. Contrast: -고 is sequential (first A, then B); -(으)면서 is simultaneous (A and B at the same time). Very common to describe multitasking.",
            target: "동사 어간 + -(으)면서 = ~하면서 (동시에 두 가지 동작). 두 동작의 주어가 같아야 합니다. 자음 어간 → -으면서; 모음/ㄹ 어간 → -면서. 비교: -고는 순차적(A 하고 B), -(으)면서는 동시. 멀티태스킹을 설명할 때 자주 씁니다."
        },
        examples: [
            { native: "음악을 들으면서 공부해요.", romanized: "Eumageul deureumyeonseo gongbuhaeyo.", translation: "I study while listening to music." },
            { native: "밥을 먹으면서 TV를 봐요.", romanized: "Babeul meogeumyeonseo tibureul bwayo.", translation: "I watch TV while eating." },
            { native: "걸으면서 전화해요.", romanized: "Georeumyeonseo jeonwahaeyo.", translation: "I talk on the phone while walking." },
            { native: "노래를 부르면서 청소해요.", romanized: "Noraereul bureumyeonseo cheongsohaeyo.", translation: "I clean while singing." },
            { native: "커피를 마시면서 신문을 읽어요.", romanized: "Keopireul masimyeonseo sinmuneul ilgeoyo.", translation: "I read the newspaper while drinking coffee." }
        ],
        inlineVocab: [
            { word: "동시에", romanized: "dongsi e", translation: "at the same time / simultaneously" },
            { word: "함께", romanized: "hamkke", translation: "together" },
            { word: "집중하다", romanized: "jipjunghada", translation: "to concentrate / focus" }
        ]
    },
    {
        id: "ko-g-a2-13",
        level: "A2",
        title: "-기 전에 / -(으)ㄴ 후에 (Before and After)",
        explanation: {
            native: "Verb stem + -기 전에 = before doing. Verb stem + -(으)ㄴ 후에 = after doing. Key rule: -기 전에 always uses the plain verb stem (no tense marking). -(으)ㄴ 후에: consonant-ending → -은 후에; vowel/ㄹ-ending → -ㄴ 후에. With nouns: 식사 전에 / 식사 후에. Alternative: 다음에 can replace 후에 informally; -고 나서 also means 'after doing' with an even more explicit sequence.",
            target: "동사 어간 + -기 전에 = ~하기 전에. 동사 어간 + -(으)ㄴ 후에 = ~한 후에. 핵심: -기 전에는 항상 기본 어간(시제 없음). -(으)ㄴ 후에: 자음 어간 → -은 후에; 모음/ㄹ 어간 → -ㄴ 후에. 명사: 식사 전에 / 식사 후에. 비격식: 다음에 ≈ 후에; -고 나서 = 더 명확한 순서 표현."
        },
        examples: [
            { native: "자기 전에 이를 닦아요.", romanized: "Jagi jeone ireul dakkayo.", translation: "I brush my teeth before sleeping." },
            { native: "밥을 먹은 후에 산책해요.", romanized: "Babeul meogeun hue sanchaekhaeyo.", translation: "I take a walk after eating." },
            { native: "수업 전에 숙제를 해요.", romanized: "Sueop jeone sukjereul haeyo.", translation: "I do homework before class." },
            { native: "일이 끝난 후에 친구를 만날 거예요.", romanized: "Iri kkeutnan hue chingureul mannal geoyeyo.", translation: "I will meet a friend after work finishes." },
            { native: "씻고 나서 잘 거예요.", romanized: "Ssitgo naseo jal geoyeyo.", translation: "I'll wash up and then sleep." }
        ],
        inlineVocab: [
            { word: "이전 (以前)", romanized: "ijeon", translation: "before / prior" },
            { word: "이후 (以後)", romanized: "ihu", translation: "after / subsequent" },
            { word: "순서 (順序)", romanized: "sunseo", translation: "order / sequence" }
        ]
    },
    {
        id: "ko-g-a2-14",
        level: "A2",
        title: "-(으)ㄴ/는 것 (Nominalization — Turning Verbs into Nouns)",
        explanation: {
            native: "Korean turns verb phrases into noun phrases using 것 (thing / the fact of). Pattern: action verb stem + -는 것 (present/habitual); completed action + -(으)ㄴ 것 (past); adjective + -(으)ㄴ 것 (descriptive state). These noun phrases can fill any noun slot (subject, object, etc.). Naturally used after 좋아하다, 싫어하다, 알다, 모르다, 시작하다 etc. 것 can be shortened to 거 in informal speech.",
            target: "한국어에서 '것'으로 동사 구를 명사 구로 만들 수 있습니다. 형태: 동사 어간 + -는 것 (현재/습관); 완료 + -(으)ㄴ 것 (과거); 형용사 + -(으)ㄴ 것 (상태). 주어나 목적어 자리에 올 수 있습니다. 좋아하다, 싫어하다, 알다, 모르다 등 뒤에 자주 씁니다. 비격식: 것 → 거."
        },
        examples: [
            { native: "한국어를 배우는 것이 재미있어요.", romanized: "Hangugeoreul baeuneun geosi jaemiisseoyo.", translation: "Learning Korean is interesting." },
            { native: "운동하는 것을 좋아해요.", romanized: "Undonghaneun geoseul joahaeyo.", translation: "I like exercising." },
            { native: "어제 먹은 것이 맛있었어요.", romanized: "Eoje meogeun geosi massisseosseoyo.", translation: "What I ate yesterday was delicious." },
            { native: "모르는 것은 물어보세요.", romanized: "Moreuneun geoseun mureoboseyo.", translation: "Please ask about things you don't know." },
            { native: "중요한 것은 건강이에요.", romanized: "Jungyohan geoseun geongang ieyo.", translation: "What's important is health." }
        ],
        inlineVocab: [
            { word: "명사화 (名詞化)", romanized: "myeongsahwa", translation: "nominalization" },
            { word: "사실 (事實)", romanized: "sasil", translation: "fact / truth" },
            { word: "경험 (經驗)", romanized: "gyeongheom", translation: "experience" }
        ]
    },
    {
        id: "ko-g-a2-15",
        level: "A2",
        title: "-(으)ㄴ Adjective Clauses — Describing Nouns (Past/State)",
        explanation: {
            native: "In Korean, verbs and adjectives directly modify nouns without a relative pronoun. For completed/past action verbs: verb stem + -(으)ㄴ + noun (consonant stem → -은; vowel/ㄹ stem → -ㄴ). For descriptive adjectives: adjective stem + -(으)ㄴ + noun. These are called 관형형 (attributive forms). Examples: 먹은 음식 (the food I ate), 예쁜 꽃 (a pretty flower), 읽은 책 (the book I read).",
            target: "한국어에서 동사와 형용사는 관계대명사 없이 바로 명사를 수식합니다. 완료/과거 동사: 어간 + -(으)ㄴ + 명사 (자음 → -은; 모음/ㄹ → -ㄴ). 형용사: 어간 + -(으)ㄴ + 명사. 이를 관형형이라고 합니다. 예: 먹은 음식, 예쁜 꽃, 읽은 책."
        },
        examples: [
            { native: "어제 읽은 책이 재미있었어요.", romanized: "Eoje ilgeun chaegi jaemiisseosseoyo.", translation: "The book I read yesterday was interesting." },
            { native: "예쁜 꽃을 샀어요.", romanized: "Yeppeun kkocheul sasseoyo.", translation: "I bought pretty flowers." },
            { native: "먹은 음식이 맛있었어요.", romanized: "Meogeun eumsigi massisseosseoyo.", translation: "The food I ate was delicious." },
            { native: "작은 가방을 사고 싶어요.", romanized: "Jageun gabangeul sago sipeoyo.", translation: "I want to buy a small bag." },
            { native: "어제 만난 사람이 친절했어요.", romanized: "Eoje mannan sarami chinjeolhaesseoyo.", translation: "The person I met yesterday was kind." }
        ],
        inlineVocab: [
            { word: "관형형 (冠形形)", romanized: "gwanhyeonghyeong", translation: "attributive / modifier form" },
            { word: "수식하다", romanized: "susikhada", translation: "to modify / describe" },
            { word: "형용사 (形容詞)", romanized: "hyeongyongsa", translation: "adjective / descriptive verb" }
        ]
    },
    {
        id: "ko-g-a2-16",
        level: "A2",
        title: "-는 Adjective Clauses — Describing Nouns (Present Action)",
        explanation: {
            native: "For action verbs modifying nouns in a present or habitual sense: verb stem + -는 + noun. Descriptive adjectives do NOT use -는 for modification — they use -(으)ㄴ (lesson 15). Common patterns: -는 사람 (a person who...), -는 곳 (a place where...), -는 것 (the thing that...), -는 음식 (food that...). This lets you build complex noun descriptions naturally in Korean.",
            target: "현재/습관적 동작의 동사가 명사를 수식할 때: 동사 어간 + -는 + 명사. 형용사는 -는을 쓰지 않고 -(으)ㄴ을 씁니다. 자주 쓰는 패턴: -는 사람, -는 곳, -는 것, -는 음식. 복잡한 명사 수식을 자연스럽게 만들 수 있습니다."
        },
        examples: [
            { native: "지금 먹는 음식이 뭐예요?", romanized: "Jigeum meongneun eumsigi mwoyeyo?", translation: "What is the food you're eating now?" },
            { native: "한국어를 가르치는 선생님이에요.", romanized: "Hangugeoreul gareuchineun seonsaengnim ieyo.", translation: "She's a teacher who teaches Korean." },
            { native: "제가 좋아하는 노래예요.", romanized: "Jega joahaneun noraeyeyo.", translation: "It's a song I like." },
            { native: "자주 가는 카페가 있어요.", romanized: "Jaju ganeun kapega isseoyo.", translation: "There's a café I go to often." },
            { native: "한국어를 공부하는 사람이 많아요.", romanized: "Hangugeoreul gongbuhaneun sarami manayo.", translation: "There are many people who study Korean." }
        ],
        inlineVocab: [
            { word: "현재형 관형사", romanized: "hyeonjae hyeong gwanhyeongsa", translation: "present attributive modifier" },
            { word: "자주", romanized: "jaju", translation: "often / frequently" },
            { word: "항상", romanized: "hangsang", translation: "always" }
        ]
    },
    {
        id: "ko-g-a2-17",
        level: "A2",
        title: "-고 싶어하다 / -아/어하다 (Third-Person Feelings)",
        explanation: {
            native: "First-person feelings use adjectives directly (무서워요 = I'm scared), but for third-person subjects, use -아/어하다 to describe their observable behavior. Pattern: feeling adjective stem + -아/어하다. Key examples: 좋아하다 (to like), 싫어하다 (to dislike), 무서워하다 (to seem afraid), 기뻐하다 (to seem happy), 슬퍼하다 (to seem sad). Third-person desires: -고 싶어하다. Also for sensations: 배고파하다 (to seem hungry), 추워하다 (to seem cold).",
            target: "1인칭 감정은 형용사를 씁니다 (무서워요). 3인칭 감정을 묘사할 때는 '-아/어하다'로 관찰 가능한 행동을 표현합니다. 감정 형용사 어간 + -아/어하다. 예: 좋아하다, 싫어하다, 무서워하다, 기뻐하다, 슬퍼하다. 3인칭 바람: -고 싶어하다. 감각에도 적용: 배고파하다, 추워하다."
        },
        examples: [
            { native: "동생이 강아지를 무서워해요.", romanized: "Dongsaengi gangajireul museowohaeyo.", translation: "My younger sibling is afraid of dogs." },
            { native: "친구가 한국 음식을 좋아해요.", romanized: "Chinguga hanguk eumsigul joahaeyo.", translation: "My friend likes Korean food." },
            { native: "그 아이는 혼자 있는 것을 싫어해요.", romanized: "Geu aineun honja inneun geoseul silheohaeyo.", translation: "That child dislikes being alone." },
            { native: "엄마가 저를 보고 싶어해요.", romanized: "Eommaga jeoreul bogo sipohaeyo.", translation: "My mum wants to see me." },
            { native: "아이가 배고파해요.", romanized: "Aiga baegopahaeyo.", translation: "The child seems hungry." }
        ],
        inlineVocab: [
            { word: "감정 (感情)", romanized: "gamjeong", translation: "emotion / feeling" },
            { word: "표현하다", romanized: "pyohyeonhada", translation: "to express" },
            { word: "관찰하다", romanized: "gwanchalhada", translation: "to observe" }
        ]
    },
    {
        id: "ko-g-a2-18",
        level: "A2",
        title: "-(으)ㄹ게요 (Volitional Promise & Responsive Commitment)",
        explanation: {
            native: "-(으)ㄹ게요 expresses the speaker's on-the-spot decision, promise, or offer — made in response to what the listener said or needs. Only used with a first-person subject. Contrast with -(으)ㄹ 거예요 (neutral future plan, pre-decided): -ㄹ게요 is made in the moment for the listener's benefit. Formation: consonant-ending → -을게요; vowel/ㄹ-ending → -ㄹ게요.",
            target: "-(으)ㄹ게요는 말하는 사람이 상대방을 위해 그 자리에서 결정하거나 약속하거나 제안하는 것을 표현합니다. 1인칭에만 씁니다. -(으)ㄹ 거예요와 비교: 거예요는 이미 결정된 계획(중립적), -ㄹ게요는 상대방을 위해 그 순간 결정. 결합: 자음 → -을게요; 모음/ㄹ → -ㄹ게요."
        },
        examples: [
            { native: "제가 할게요!", romanized: "Jega halgeyo!", translation: "I'll do it! (responsive offer)" },
            { native: "조심할게요.", romanized: "Josimhalgeyo.", translation: "I'll be careful. (promise after a warning)" },
            { native: "내일 전화할게요.", romanized: "Naeil jeonwahaltgeyo.", translation: "I'll call you tomorrow. (commitment)" },
            { native: "제가 도와드릴게요.", romanized: "Jega dowadeurilgeyo.", translation: "I'll help you. (offer for listener)" },
            { native: "빨리 올게요.", romanized: "Ppalli olgeyo.", translation: "I'll come quickly / I'll be right there." }
        ],
        inlineVocab: [
            { word: "약속 (約束)", romanized: "yakssok", translation: "promise / appointment" },
            { word: "결심 (決心)", romanized: "gyeolsim", translation: "decision / resolution" },
            { word: "자원하다", romanized: "jawonhada", translation: "to volunteer" }
        ]
    },
    {
        id: "ko-g-a2-19",
        level: "A2",
        title: "-(으)세요 / -(으)십시오 (Honorific Requests & Formal Commands)",
        explanation: {
            native: "-(으)세요 is a polite/honorific imperative for everyday interactions with strangers, elders, and customers. -(으)십시오 is highly formal — used in announcements and official instructions. Formation: consonant-ending → -(으)세요 / -(으)십시오; vowel/ㄹ-ending → -세요 / -십시오. Special honorific forms: 먹다/마시다 → 드세요, 자다 → 주무세요, 있다 → 계세요. Contrast with A1 -아/어 주세요 (please do [as a favour]).",
            target: "-(으)세요는 일상에서 낯선 사람, 어른, 고객에게 쓰는 공손한 명령형입니다. -(으)십시오는 공지나 공식 지시에 씁니다. 결합: 자음 → -(으)세요/십시오; 모음/ㄹ → -세요/-십시오. 특수 존댓말: 먹다/마시다 → 드세요, 자다 → 주무세요, 있다 → 계세요. A1 '-아/어 주세요'(부탁)와 구별."
        },
        examples: [
            { native: "여기에 앉으세요.", romanized: "Yeogie anjeuseyo.", translation: "Please sit here. (polite)" },
            { native: "이쪽으로 오세요.", romanized: "Ijjogeuro oseyo.", translation: "Please come this way." },
            { native: "안전벨트를 착용하십시오.", romanized: "Anjeonbelteureul chagyonghashipsio.", translation: "Please fasten your seatbelt. (formal announcement)" },
            { native: "천천히 말씀해 주세요.", romanized: "Cheoncheonhi malsseum haejuseyo.", translation: "Please speak slowly." },
            { native: "음식을 드세요.", romanized: "Eumsiguel deuseyo.", translation: "Please eat. (honorific form of 먹다)" }
        ],
        inlineVocab: [
            { word: "존댓말 (尊待말)", romanized: "jondaenmal", translation: "honorific / polite speech" },
            { word: "공식적 (公式的)", romanized: "gongsikjeok", translation: "formal / official" },
            { word: "안내하다", romanized: "annaehada", translation: "to guide / direct" }
        ]
    },
    {
        id: "ko-g-a2-20",
        level: "A2",
        title: "-지 않아도 되다 / -(으)ㄹ 필요가 없다 (No Need To / Don't Have To)",
        explanation: {
            native: "To express lack of obligation ('don't have to / no need to'): (1) verb stem + -지 않아도 되다 = it's okay even if you don't do it; (2) verb stem + -(으)ㄹ 필요가 없다 = there's no need to. Both contrast with -아야/어야 하다 (must). Important: the negative of obligation is NOT -아야/어야 안 하다. 안 해도 돼요 is a very natural short form.",
            target: "의무가 없음을 표현할 때: ① '-지 않아도 되다' = 안 해도 괜찮다; ② '-(으)ㄹ 필요가 없다' = 할 필요가 없다. 둘 다 '-아야/어야 하다'와 반대입니다. 중요: '-아야/어야 안 하다'는 잘못된 형태입니다. '안 해도 돼요'는 매우 자연스러운 단축형입니다."
        },
        examples: [
            { native: "오늘은 오지 않아도 돼요.", romanized: "Oneureun oji anhado dwaeyo.", translation: "You don't have to come today." },
            { native: "걱정하지 않아도 돼요.", romanized: "Geokjeonghaji anhado dwaeyo.", translation: "You don't have to worry." },
            { native: "서두를 필요가 없어요.", romanized: "Seodureul pillyoga eopseoyo.", translation: "There's no need to hurry." },
            { native: "비싼 선물을 살 필요가 없어요.", romanized: "Bissan seonmureul sal pillyoga eopseoyo.", translation: "There's no need to buy an expensive gift." },
            { native: "안 해도 돼요.", romanized: "An haedo dwaeyo.", translation: "You don't have to do it. (casual short form)" }
        ],
        inlineVocab: [
            { word: "서두르다", romanized: "seodureuda", translation: "to hurry / rush" },
            { word: "걱정하다", romanized: "geokjeonghada", translation: "to worry" },
            { word: "필요 (必要)", romanized: "pillyo", translation: "need / necessity" }
        ]
    },
]
