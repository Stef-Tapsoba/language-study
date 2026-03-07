import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "ko-g-a2-1",
        level: "A2",
        title: "~고 싶다: Expressing Desires",
        explanation: {
            native: "To say you want to do something, attach 고 싶어요 to the verb stem. This applies to first-person desires in direct speech. For third-person desires, use 고 싶어하다 (고 싶어해요). To ask about someone's desire, use 고 싶어요? with rising intonation.",
            target: "~고 싶어요는 무언가를 하고 싶을 때 사용합니다. 동사 어간에 '고 싶어요'를 붙입니다. 1인칭(나)에게는 '고 싶어요'를 씁니다. 3인칭(그, 그녀)에게는 '고 싶어하다'를 씁니다. 질문할 때는 끝을 올려서 말합니다."
        },
        examples: [
            { native: "물을 마시고 싶어요.", romanized: "Mureul masigo sipeoyo.", translation: "I want to drink water." },
            { native: "한국에 가고 싶어요.", romanized: "Hanguge gago sipeoyo.", translation: "I want to go to Korea." },
            { native: "뭘 먹고 싶어요?", romanized: "Mwol meokgo sipeoyo?", translation: "What do you want to eat?" },
            { native: "그는 커피를 마시고 싶어해요.", romanized: "Geuneun keopireul masigo sipeoyo.", translation: "He wants to drink coffee. (third person → 싶어해요)" }
        ]
    },
    {
        id: "ko-g-a2-2",
        level: "A2",
        title: "~(으)ㄹ 수 있다/없다: Ability",
        explanation: {
            native: "To express ability ('can/be able to') use the verb stem + (으)ㄹ 수 있어요. For inability, use 없어요. If the stem ends in a consonant, add 을 수; if it ends in a vowel or ㄹ, add ㄹ 수. This structure is more permanent ability than 못 (situational inability).",
            target: "능력이나 가능성을 나타낼 때 '(으)ㄹ 수 있어요'를 씁니다. 불가능할 때는 '(으)ㄹ 수 없어요'를 씁니다. 동사 어간이 자음으로 끝나면 '을 수'를, 모음이나 ㄹ로 끝나면 'ㄹ 수'를 붙입니다. '못'은 상황에 따른 불가능이고, '수 없다'는 더 일반적인 불가능을 나타냅니다."
        },
        examples: [
            { native: "한국어를 할 수 있어요.", romanized: "Hangugeoreul hal su isseoyo.", translation: "I can speak Korean." },
            { native: "수영을 할 수 없어요.", romanized: "Suyeongeul hal su eopseoyo.", translation: "I cannot swim." },
            { native: "지금 올 수 있어요?", romanized: "Jigeum ol su isseoyo?", translation: "Can you come now?" },
            { native: "자전거를 탈 수 있어요.", romanized: "Jajeongeoreul tal su isseoyo.", translation: "I can ride a bicycle." }
        ]
    },
    {
        id: "ko-g-a2-3",
        level: "A2",
        title: "~(으)ㄹ 거예요: Future Intention",
        explanation: {
            native: "To express a future plan or intention, attach (으)ㄹ 거예요 to the verb stem. If the stem ends in a consonant, add 을 거예요. If it ends in a vowel, add ㄹ 거예요. This is the most natural way to express future events in everyday conversation.",
            target: "미래의 계획이나 의도를 말할 때 '(으)ㄹ 거예요'를 씁니다. 동사 어간이 자음으로 끝나면 '을 거예요'를, 모음으로 끝나면 'ㄹ 거예요'를 붙입니다. 일상 대화에서 미래를 표현하는 가장 자연스러운 방법입니다."
        },
        examples: [
            { native: "내일 학교에 갈 거예요.", romanized: "Naeil hakgyoe gal geoyeyo.", translation: "I will go to school tomorrow." },
            { native: "저녁에 밥을 먹을 거예요.", romanized: "Jeonyeoge babeul meogeul geoyeyo.", translation: "I will eat dinner in the evening." },
            { native: "주말에 뭐 할 거예요?", romanized: "Jumale mwo hal geoyeyo?", translation: "What will you do on the weekend?" },
            { native: "비가 올 거예요.", romanized: "Biga ol geoyeyo.", translation: "It will rain." }
        ]
    },
    {
        id: "ko-g-a2-4",
        level: "A2",
        title: "~고 있다: Progressive Action (Ongoing)",
        explanation: {
            native: "Attach 고 있어요 to a verb stem to express an ongoing action ('am/is/are -ing'). The negative is 고 있지 않아요 or simply 안 ~ 고 있어요. This tense focuses on an action in progress at the moment of speaking.",
            target: "지금 진행 중인 동작을 나타낼 때 '고 있어요'를 씁니다. 동사 어간에 '고 있어요'를 붙입니다. 부정형은 '고 있지 않아요' 또는 '안 ~ 고 있어요'입니다. 말하는 순간에 하고 있는 행동을 표현할 때 사용합니다."
        },
        examples: [
            { native: "지금 밥을 먹고 있어요.", romanized: "Jigeum babeul meokgo isseoyo.", translation: "I am eating right now." },
            { native: "뭐 하고 있어요?", romanized: "Mwo hago isseoyo?", translation: "What are you doing?" },
            { native: "음악을 듣고 있어요.", romanized: "Eumaguel deutgo isseoyo.", translation: "I am listening to music." },
            { native: "그 영화를 보고 있어요.", romanized: "Geu yeonghwareul bogo isseoyo.", translation: "I am watching that movie." }
        ]
    }
]
