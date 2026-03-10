// Korean B2 grammar lessons
// data/korean/grammar/b2.ts
import { GrammarLesson } from "../../../types"

export const b2Grammar: GrammarLesson[] = [
    {
        id: "ko-g-b2-1",
        level: "B2",
        title: "Passive & Causative Verbs (피동/사동)",
        explanation: {
            native: "Korean has two derived verb forms: passive (피동) and causative (사동). Passives are formed by adding -이-, -히-, -리-, or -기- to the verb stem (e.g., 보다 → 보이다 'to be seen', 닫다 → 닫히다 'to be closed', 열다 → 열리다 'to be opened', 안다 → 안기다 'to be held'). Another passive pattern uses -아/어지다 added to the verb stem (e.g., 알아지다 'to become known', 좋아지다 'to get better'). Causatives express making or letting someone do something. Causative suffixes -이-, -히-, -리-, -기-, -우-, -추- are added to the stem (e.g., 먹다 → 먹이다 'to feed', 읽다 → 읽히다 'to make read', 보다 → 보이다 'to show'). The compound 시키다 is also used to form causatives with Sino-Korean action verbs (공부시키다 'to make study').",
            target: "한국어에는 파생 동사 형태인 피동과 사동이 있습니다. 피동은 동사 어간에 '-이-, -히-, -리-, -기-'를 붙여 만듭니다(예: 보다 → 보이다, 닫다 → 닫히다, 열다 → 열리다, 안다 → 안기다). '-아/어지다'를 붙여 피동을 나타내기도 합니다(예: 알아지다, 좋아지다). 사동은 누군가가 무언가를 하도록 만들거나 허락하는 것을 표현합니다. 사동 접미사 '-이-, -히-, -리-, -기-, -우-, -추-'를 어간에 붙입니다(예: 먹다 → 먹이다, 읽다 → 읽히다). 한자어 동사에는 '시키다'를 결합하여 사동을 만들기도 합니다(예: 공부시키다)."
        },
        examples: [
            { native: "문이 바람에 닫혔어요.", translation: "The door was closed by the wind." },
            { native: "그 소식이 전국에 알려졌어요.", translation: "That news became known throughout the country." },
            { native: "선생님이 학생들에게 책을 읽혔어요.", translation: "The teacher made the students read books." },
            { native: "어머니가 아이에게 밥을 먹였어요.", translation: "The mother fed rice to the child." }
        ]
    },
    {
        id: "ko-g-b2-2",
        level: "B2",
        title: "Indirect Speech (간접화법)",
        explanation: {
            native: "Indirect speech (간접화법) is used to report what someone said, asked, or commanded without quoting them directly. For declarative statements, add -다고 하다 to the verb stem in present tense (verb + -(ㄴ/는)다고 하다) or past tense (verb + -았/었다고 하다). For questions, use -냐고 묻다 / -냐고 하다 (verb stem + -냐고 묻다). For imperatives (commands), use -(으)라고 하다 (verb stem + -(으)라고 하다). For requests with -아/어요, use -아/어 달라고 하다. Tense backshift occurs: present reported speech often uses -ㄴ/는다고 for action verbs, and -(이)라고 for copula (이다). Adjectives use -다고 in the present. Contractions like 한다고 하다 → 한다고 해요 are natural in spoken Korean.",
            target: "간접화법은 다른 사람의 말이나 질문, 명령을 직접 인용하지 않고 전달할 때 씁니다. 평서문: 동사 어간에 '-ㄴ/는다고 하다'(현재), '-았/었다고 하다'(과거)를 붙입니다. 의문문: '-냐고 묻다/하다'를 씁니다. 명령문: '-(으)라고 하다'를 씁니다. 요청문: '-아/어 달라고 하다'를 씁니다. 시제 변환이 발생합니다. 형용사는 현재에 '-다고'를 씁니다. 구어에서는 '한다고 해요'처럼 자연스럽게 축약합니다."
        },
        examples: [
            { native: "그는 내일 한국에 온다고 했어요.", translation: "He said he is coming to Korea tomorrow." },
            { native: "선생님이 언제 졸업하냐고 물었어요.", translation: "The teacher asked when I would graduate." },
            { native: "어머니가 일찍 자라고 하셨어요.", translation: "My mother told me to go to bed early." },
            { native: "친구가 같이 밥을 먹자고 했어요.", translation: "My friend suggested that we eat together." }
        ]
    },
    {
        id: "ko-g-b2-3",
        level: "B2",
        title: "Advanced Connectors",
        explanation: {
            native: "B2-level Korean uses several advanced connectors to express nuanced logical relationships. (1) -ㄹ/을수록: 'the more...the more'. Attach to the verb/adjective stem + -(으)ㄹ수록. Often combined with 더 in the main clause: 공부할수록 더 재미있어요 (The more you study, the more interesting it gets). (2) -자마자: 'as soon as'. Directly follows the verb stem: 집에 오자마자 전화했어요 (I called as soon as I got home). (3) -는데도: 'even though, despite'. Attach to the present stem: 비가 오는데도 나갔어요 (She went out even though it was raining). For adjectives and past tense: adj/verb + -은/ㄴ데도. (4) -더라도: 'even if (hypothetical)'. Attach to verb/adjective stem + -더라도: 힘들더라도 포기하지 마세요 (Even if it is hard, don't give up). This differs from -더라도 in that it expresses a hypothetical concession rather than a real contrast.",
            target: "고급 연결 표현을 통해 논리적 관계를 세밀하게 나타낼 수 있습니다. (1) '-ㄹ/을수록': 앞 절의 정도가 강해질수록 뒤 절도 그렇게 됨을 나타냅니다. 주절에 '더'와 자주 결합합니다. (2) '-자마자': '~하는 즉시'를 나타냅니다. 동사 어간 바로 뒤에 붙입니다. (3) '-는데도': '~임에도 불구하고'를 나타냅니다. 현재형 어간에 붙이며, 형용사·과거형에는 '-은/ㄴ데도'를 씁니다. (4) '-더라도': 가정적 양보를 나타냅니다. 실제 대립(-지만)이 아닌 가상의 상황에서도 뒤 절의 내용이 변하지 않음을 강조합니다."
        },
        examples: [
            { native: "연습할수록 실력이 늘어요.", translation: "The more you practice, the more your skills improve." },
            { native: "수업이 끝나자마자 친구를 만났어요.", translation: "I met my friend as soon as class ended." },
            { native: "피곤한데도 계속 일했어요.", translation: "She kept working even though she was tired." },
            { native: "어렵더라도 끝까지 해 보세요.", translation: "Even if it is difficult, please try until the end." }
        ]
    },
    {
        id: "ko-g-b2-4",
        level: "B2",
        title: "Formal Register (격식체): -ㅂ니다 / -습니다",
        explanation: {
            native: "The formal polite register uses -ㅂ니다 (after vowel stems) and -습니다 (after consonant stems) for statements, and -ㅂ니까 / -습니까 for questions. This register is used in business meetings, news broadcasts, official presentations, public announcements, and formal writing. Compared to the informal polite -아/어요, -ㅂ니다 is more distant and respectful. Common forms: 합니다 (do), 했습니다 (did), 할 것입니다 (will do), 입니다 (is/am), 있습니다 (there is/are), 없습니다 (there is not). Questions: 하십니까? 있습니까? This form does not contract and maintains full formality in professional settings.",
            target: "격식체는 '-ㅂ니다'(모음 어간)와 '-습니다'(자음 어간)로 문장을 끝내며, 의문문에는 '-ㅂ니까/-습니까'를 씁니다. 비즈니스 회의, 뉴스, 공식 발표, 격식적인 글쓰기에 쓰입니다. 비격식 경어 '-아/어요'보다 더 거리감 있고 공식적입니다. 주요 형태: 합니다, 했습니다, 할 것입니다, 입니다, 있습니다, 없습니다. 의문문: 하십니까?, 있습니까? 이 형태는 축약하지 않으며 전문적 상황에서 격식을 유지합니다."
        },
        examples: [
            { native: "저희 회사는 최고의 서비스를 제공합니다.", translation: "Our company provides the best service." },
            { native: "내일 회의가 오전 열 시에 있습니다.", translation: "Tomorrow's meeting is at ten o'clock in the morning." },
            { native: "이번 분기 매출이 증가했습니다.", translation: "Sales increased this quarter." },
            { native: "질문이 있으십니까?", translation: "Do you have any questions?" }
        ]
    },
    {
        id: "ko-g-b2-5",
        level: "B2",
        title: "Expressing Regret & Wishes",
        explanation: {
            native: "Korean has several structures for expressing wishes, hopes, and regrets about past or hypothetical situations. (1) -았/었으면 좋겠다: expresses a wish or hope. The subject can be the speaker or a third party. 비가 그쳤으면 좋겠다 (I hope the rain stops). For present/future wishes, use -(으)면 좋겠다. (2) -(으)ㄹ걸 그랬다: expresses regret that the speaker did NOT do something. Attach -(으)ㄹ걸 그랬다 to the verb stem: 더 열심히 공부할걸 그랬다 (I should have studied harder). This implies a past action that was not taken. (3) -지 않았더라면: 'if only I hadn't (done something)'. This is a past counterfactual: 거짓말을 하지 않았더라면 이 문제가 없었을 거예요 (If only I hadn't lied, this problem wouldn't exist). The main clause typically uses -았/었을 거예요 or -았/었을 텐데.",
            target: "한국어에는 소원, 희망, 과거나 가상 상황에 대한 후회를 표현하는 구조가 있습니다. (1) '-았/었으면 좋겠다': 바람이나 희망을 나타냅니다. 현재·미래 소원에는 '-(으)면 좋겠다'를 씁니다. (2) '-(으)ㄹ걸 그랬다': 하지 않은 행동에 대한 후회를 나타냅니다. 어간에 '-(으)ㄹ걸 그랬다'를 붙입니다. (3) '-지 않았더라면': '~하지 않았더라면 좋았을 텐데'의 과거 반사실 조건문입니다. 주절에는 보통 '-았/었을 거예요' 또는 '-았/었을 텐데'를 씁니다."
        },
        examples: [
            { native: "날씨가 더 좋았으면 좋겠어요.", translation: "I wish the weather were better." },
            { native: "그때 더 열심히 공부할걸 그랬어요.", translation: "I should have studied harder back then." },
            { native: "그 말을 하지 않았더라면 이렇게 되지 않았을 거예요.", translation: "If only I hadn't said that, things wouldn't have turned out this way." },
            { native: "일찍 출발했으면 늦지 않았을 텐데.", translation: "If only we had left earlier, we wouldn't have been late." }
        ]
    }
]
