import { GrammarLesson } from "../../../../types"

export const koA2OpinionsAndConnectors: GrammarLesson[] = [
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
            { native: "제 생각에는 이게 더 좋은 방법이에요.", romanized: "Je saenggage neun ige deo joeun bangbeopieyo.", translation: "In my opinion, this is the better method." },
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
            { native: "날씨가 좋으면 공원에 가요.", romanized: "Nalssiga joeumyeon gongwone gayo.", translation: "If the weather is nice, I go to the park." },
            { native: "시간이 있으면 같이 커피 마셔요.", romanized: "Sigani isseumyeon gachi keopi masyeoyo.", translation: "If you have time, let's have coffee together." },
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
            { word: "그래도", romanized: "geuraedo", translation: "even so / still" }
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
            { word: "선택 (選擇)", romanized: "seontaek", translation: "choice / selection" },
            { word: "또는", romanized: "ttoneun", translation: "or (formal/written)" },
            { word: "아니면", romanized: "animyeon", translation: "or (spoken / in questions)" }
        ]
    },
]
