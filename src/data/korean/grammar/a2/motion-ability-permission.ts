import { GrammarLesson } from "../../../../types"

export const koA2MotionAbilityPermission: GrammarLesson[] = [
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
            { native: "도서관에서 전화하면 안 돼요.", romanized: "Doseogwaneseo jeonhwahamyeon an dwaeyo.", translation: "You must not make phone calls in the library." },
            { native: "여기에 주차하면 안 돼요.", romanized: "Yeogie juchahamyeon an dwaeyo.", translation: "You must not park here." }
        ],
        inlineVocab: [
            { word: "허락 (許諾)", romanized: "heorak", translation: "permission" },
            { word: "금지 (禁止)", romanized: "geumji", translation: "prohibition" },
            { word: "규칙 (規則)", romanized: "gyuchik", translation: "rule / regulation" }
        ]
    },
]
