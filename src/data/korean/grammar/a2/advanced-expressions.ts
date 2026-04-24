import { GrammarLesson } from "../../../../types"

export const koA2AdvancedExpressions: GrammarLesson[] = [
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
            { native: "엄마가 저를 보고 싶어해요.", romanized: "Eommaga jeoreul bogo sipeohaeyo.", translation: "My mum wants to see me." },
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
            { native: "내일 전화할게요.", romanized: "Naeil jeonhwahalgeyo.", translation: "I'll call you tomorrow. (commitment)" },
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
            { native: "안전벨트를 착용하십시오.", romanized: "Anjeonbelteureul chagyonghasipsio.", translation: "Please fasten your seatbelt. (formal announcement)" },
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
