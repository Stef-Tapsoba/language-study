import { GrammarLesson } from "../../../types"

export const b1Grammar: GrammarLesson[] = [
    {
        id: "ko-g-b1-1",
        level: "B1",
        title: "~(으)면: Conditional (If / When)",
        explanation: {
            native: "Expresses a conditional 'if/when'. Attach ~으면 after consonant-ending stems, ~면 after vowel-ending stems. Used for real conditionals, habitual truths, and polite requests. Cannot be combined with past tense markers on the if-clause — tense is only marked on the main clause.",
            target: "'만약 ~라면' 또는 '~할 때'를 나타내는 조건 표현입니다. 어간이 자음으로 끝나면 '으면'을, 모음으로 끝나면 '면'을 붙입니다. 실제 조건, 습관적 사실, 정중한 요청에 모두 사용할 수 있습니다. 조건절에는 과거 시제를 함께 쓸 수 없으며, 시제는 주절의 동사에만 표시합니다."
        },
        examples: [
            { native: "시간이 있으면 같이 갈게요.", romanized: "Sigani isseumyeon gachi galgeyo.", translation: "If I have time, I'll go with you." },
            { native: "비가 오면 집에 있을 거예요.", romanized: "Biga omyeon jibe isseul geoyeyo.", translation: "If it rains, I'll stay home." },
            { native: "열심히 공부하면 성공할 거예요.", romanized: "Yeolsimhi gongbuhameyon seonggonghal geoyeyo.", translation: "If you study hard, you will succeed." },
            { native: "봄이 오면 꽃이 피어요.", romanized: "Bomi omyeon kkochi pieoyo.", translation: "When spring comes, flowers bloom." }
        ]
    },
    {
        id: "ko-g-b1-2",
        level: "B1",
        title: "~아/어서: Because / So (Causal & Sequential)",
        explanation: {
            native: "Has two main uses: (1) because/so — stating a cause followed by a result, and (2) sequentially — doing one action then another (and then). Cannot be used with past tense markers; tense is only shown on the final verb. The subject of both clauses is typically the same.",
            target: "'~아/어서'는 두 가지 주요 용법이 있습니다. 첫째, 원인과 결과를 나타낼 때 씁니다(~해서 ~했어요). 둘째, 두 동작의 순서를 나타낼 때 씁니다(~하고 나서). 이 표현에는 과거 시제 표지를 붙일 수 없으며, 시제는 마지막 동사에만 나타납니다. 두 절의 주어는 보통 같습니다."
        },
        examples: [
            { native: "배가 고파서 밥을 먹었어요.", romanized: "Baega gopaseo babeul meogeosseoyo.", translation: "I was hungry, so I ate." },
            { native: "비가 와서 우산을 가져왔어요.", romanized: "Biga waseo usaneul gajyeowasseoyo.", translation: "It was raining, so I brought an umbrella." },
            { native: "도서관에 가서 공부했어요.", romanized: "Doseogwane gaseo gongbuhaesseoyo.", translation: "I went to the library and (then) studied." },
            { native: "피곤해서 일찍 잤어요.", romanized: "Pigonhaeseo iljjik jasseoyo.", translation: "I was tired, so I went to bed early." }
        ]
    },
    {
        id: "ko-g-b1-3",
        level: "B1",
        title: "~지만: Contrast (But / However)",
        explanation: {
            native: "Connects two contrasting clauses, similar to 'but' or 'however'. Attach ~지만 directly to the verb or adjective stem (present tense form without 요). The two clauses can share the same subject or have different subjects. This is a neutral contrast, not emotional.",
            target: "두 개의 대조되는 절을 연결할 때 씁니다. '하지만', '그러나'와 비슷한 의미입니다. 동사나 형용사 어간에 '지만'을 바로 붙입니다(요 없이). 두 절의 주어가 같을 수도, 다를 수도 있습니다. 감정적인 대립이 아닌 중립적인 대조를 나타냅니다."
        },
        examples: [
            { native: "한국어는 어렵지만 재미있어요.", romanized: "Hangugeoneun eoryeopjiman jaemiisseoyo.", translation: "Korean is difficult but interesting." },
            { native: "비쌌지만 샀어요.", romanized: "Bissatjiman sasseoyo.", translation: "It was expensive, but I bought it." },
            { native: "피곤하지만 일을 해야 해요.", romanized: "Pigonhajiman ireul haeya haeyo.", translation: "I'm tired, but I have to work." },
            { native: "작지만 편해요.", romanized: "Jakjiman pyeonhaeyo.", translation: "It's small but comfortable." }
        ]
    },
    {
        id: "ko-g-b1-4",
        level: "B1",
        title: "~기 때문에: Because of / Due to (Formal)",
        explanation: {
            native: "A formal way to express cause and reason. Attach ~기 때문에 to the verb or adjective stem. It can also be used with nouns directly: noun + 때문에. More formal and written than ~아/어서. The resulting clause cannot take the past tense marker directly.",
            target: "원인과 이유를 나타내는 격식체 표현입니다. 동사나 형용사 어간에 '기 때문에'를 붙입니다. 명사에는 바로 '때문에'를 붙일 수 있습니다(예: 일 때문에). '~아/어서'보다 더 격식적이고 문어체에 가깝습니다. 결과절에 과거 시제를 직접 붙이지 않습니다."
        },
        examples: [
            { native: "비가 오기 때문에 집에 있어요.", romanized: "Biga ogi ttaemune jibe isseoyo.", translation: "Because it's raining, I'm staying home." },
            { native: "공부를 안 했기 때문에 시험에 떨어졌어요.", romanized: "Gongbureul an haetgi ttaemune siheome tteoreojyeosseoyo.", translation: "Because I didn't study, I failed the exam." },
            { native: "일 때문에 바빠요.", romanized: "Il ttaemune bappayo.", translation: "I'm busy because of work." },
            { native: "건강 때문에 운동해요.", romanized: "Geongang ttaemune undonghaeyo.", translation: "I exercise because of my health." }
        ]
    },
    {
        id: "ko-g-b1-5",
        level: "B1",
        title: "Reported Speech: ~다고 하다 / ~라고 하다",
        explanation: {
            native: "Korean reported speech uses different endings based on what type of speech is being reported. Statements: verb/adjective stem + ~(ㄴ/는)다고 하다. For action verbs (present): ~ㄴ/는다고; for descriptive verbs: ~다고; for nouns: ~(이)라고. Questions: stem + ~냐고 하다 (or ~는지 묻다 for content questions). Commands: stem + ~(으)라고 하다. Proposals/suggestions: stem + ~자고 하다. When reporting past speech, 하다 shifts to 했어요. Key phrases: ~다고 들었어요 (I heard that), ~다고 하더라고요 (I heard/noticed that — hearsay evidential).",
            target: "한국어 간접화법은 말의 종류에 따라 다른 어미를 씁니다. 평서문: 동사/형용사 어간 + ~(ㄴ/는)다고 하다. 동작동사(현재): ~ㄴ/는다고; 상태동사: ~다고; 명사: ~(이)라고. 의문문: 어간 + ~냐고 하다 (또는 내용 질문은 ~는지 묻다). 명령문: 어간 + ~(으)라고 하다. 청유문: 어간 + ~자고 하다. 과거의 말을 전할 때는 '하다'를 '했어요'로 바꿉니다. 주요 표현: ~다고 들었어요, ~다고 하더라고요."
        },
        examples: [
            { native: "'바빠요.' → 바쁘다고 했어요.", romanized: "'Bappayo.' → Bappeudago haesseoyo.", translation: "'I'm busy.' → He said he was busy." },
            { native: "'내일 와요?' → 내일 오냐고 물었어요.", romanized: "'Naeil wayo?' → Naeil onyago mureosseoyo.", translation: "'Are you coming tomorrow?' → She asked if I was coming tomorrow." },
            { native: "'빨리 오세요!' → 빨리 오라고 했어요.", romanized: "'Ppalli oseyo!' → Ppalli orado haesseoyo.", translation: "'Come quickly!' → He told me to come quickly." },
            { native: "'같이 가요!' → 같이 가자고 했어요.", romanized: "'Gachi gayo!' → Gachi gajago haesseoyo.", translation: "'Let's go together!' → She suggested going together." },
            { native: "비가 온다고 들었어요.", romanized: "Biga ondago deureosseoyo.", translation: "I heard (that) it's going to rain." },
        ]
    },
    {
        id: "ko-g-b1-6",
        level: "B1",
        title: "Obligation & Attempt: ~아/어야 하다 / ~아/어 보다",
        explanation: {
            native: "~아/어야 하다/되다 expresses obligation or necessity — 'must / have to'. 야 하다 and 야 되다 are largely interchangeable; 야 되다 is slightly softer. Attachment: if the last vowel is ㅏ/ㅗ, add 아야; otherwise add 어야; 하다 verbs → 해야. Negative: ~지 않아도 되다 / 안 ~아/어도 되다 = 'don't have to'. ~아/어 보다 expresses attempt or experience — 'try doing / have tried doing'. It can express encouragement (먹어 봐요 = try eating), past experience (가 봤어요 = I've been there), or possibility testing. Formation: 아/어 + 보다, following the same vowel harmony rules.",
            target: "~아/어야 하다/되다는 의무나 필요를 나타냅니다. '야 하다'와 '야 되다'는 거의 같은 의미이지만 '야 되다'가 조금 더 부드럽습니다. 결합: 마지막 모음이 ㅏ/ㅗ이면 '아야', 그 외에는 '어야', 하다 동사는 '해야'. 부정: ~지 않아도 되다 / 안 ~아/어도 되다 = ~하지 않아도 된다. ~아/어 보다는 시도나 경험을 나타냅니다. 권유(먹어 봐요), 과거 경험(가 봤어요), 가능성 테스트 등에 쓰입니다. 결합: 같은 모음조화 규칙을 따릅니다."
        },
        examples: [
            { native: "오늘 일찍 자야 해요.", romanized: "Oneul iljjik jaya haeyo.", translation: "I have to go to sleep early tonight." },
            { native: "걱정 안 해도 돼요.", romanized: "Geokjeong an haedo dwaeyo.", translation: "You don't have to worry." },
            { native: "이 음식 한번 먹어 봐요.", romanized: "I eumsik hanbeon meogeo bwayo.", translation: "Try eating this food once." },
            { native: "서울에 가 본 적이 있어요?", romanized: "Seoure ga bon jeogi isseoyo?", translation: "Have you ever been to Seoul?" },
            { native: "더 열심히 해야 될 것 같아요.", romanized: "Deo yeolsimhi haeya doel geot gatayo.", translation: "I think I'll have to try harder." },
        ]
    },
    {
        id: "ko-g-b1-7",
        level: "B1",
        title: "Purpose & Nominalisation: ~(으)러 가다 / ~기 / ~는 것",
        explanation: {
            native: "~(으)러 가다/오다 expresses purpose of movement — 'to go/come in order to do'. Attach ~러 after a vowel-ending stem; ~으러 after a consonant-ending stem. Only used with movement verbs (가다, 오다, 다니다). Nominalisation converts a verb into a noun-like form. ~기 is used with specific verbs and adjectives: 좋아하다, 싫어하다, 쉽다, 어렵다, 시작하다, 끝나다. Also in set patterns: ~기 전에 (before doing), ~기 때문에 (because of doing). ~는 것 (present) / ~ㄴ 것 (past adjective) is more versatile and can be used as subject or object in most sentences. ~는 것이 중요해요 = It is important to...",
            target: "~(으)러 가다/오다는 이동의 목적을 나타냅니다. 모음으로 끝나는 어간 뒤에는 '러', 자음으로 끝나는 어간 뒤에는 '으러'를 붙입니다. 이동동사(가다, 오다, 다니다)에만 사용합니다. 명사화는 동사를 명사처럼 만들어 줍니다. ~기는 특정 동사·형용사와 함께 씁니다: 좋아하다, 싫어하다, 쉽다, 어렵다, 시작하다, 끝나다. 또한 고정 표현에도 씁니다: ~기 전에, ~기 때문에. ~는 것(현재)/~ㄴ 것(과거형 형용사)은 더 광범위하게 주어나 목적어로 쓸 수 있습니다. ~는 것이 중요해요 = ~하는 것이 중요하다."
        },
        examples: [
            { native: "밥 먹으러 식당에 갔어요.", romanized: "Bap meogeureo sikdange gasseoyo.", translation: "I went to the restaurant to eat. (~으러)" },
            { native: "운동하기가 싫어요.", romanized: "Undonghagiga sireoyo.", translation: "I hate exercising. (~기 with 싫어하다)" },
            { native: "한국어를 배우는 것이 재미있어요.", romanized: "Hangugeoreul baeuneun geosi jaemiisseoyo.", translation: "Learning Korean is fun. (~는 것 as subject)" },
            { native: "숙제를 끝내기 전에 게임을 할 수 없어요.", romanized: "Sukjereul kkeunnaegi jeone geimeul hal su eopseoyo.", translation: "You can't play games before finishing your homework. (~기 전에)" },
            { native: "책을 읽는 것을 좋아해요.", romanized: "Chaegeul ingneun geoseul joahaeyo.", translation: "I like reading books. (~는 것 as object)" },
        ]
    },
    {
        id: "ko-g-b1-8",
        level: "B1",
        title: "Connector Register: ~아/어서 vs ~기 때문에 & Discourse Markers",
        explanation: {
            native: "~아/어서 and ~기 때문에 both mean 'because', but register differs sharply. ~아/어서 is casual, conversational, and sequential — used in everyday speech. ~기 때문에 is formal, objective, and written — used in essays, presentations, and news. Using ~기 때문에 in casual conversation sounds stiff; using ~아/어서 in a formal report sounds unprofessional. B1 discourse markers: adding (게다가, 또한); contrasting (그러나, 반면에); conceding (물론…하지만); concluding (따라서, 결론적으로, 그러므로). Key fixed expressions: 결정을 내리다 (make a decision), 어쩔 수 없다 (can't be helped), 별로예요 (not great).",
            target: "~아/어서와 ~기 때문에는 둘 다 '때문에'를 뜻하지만 격식 차이가 큽니다. ~아/어서는 구어체이고 일상적이며 순차적입니다. ~기 때문에는 격식체이고 객관적이며 문어체입니다. 격식적인 글에서 ~아/어서를 쓰면 비공식적으로 들리고, 일상 대화에서 ~기 때문에를 쓰면 딱딱하게 들립니다. B1 담화 표지: 추가(게다가, 또한); 대조(그러나, 반면에); 양보(물론…하지만); 결론(따라서, 결론적으로, 그러므로). 주요 고정 표현: 결정을 내리다, 어쩔 수 없다, 별로예요."
        },
        examples: [
            { native: "피곤해서 집에 있었어요. (casual)", romanized: "Pigonhaeseo jibe isseosseoyo.", translation: "I was tired so I stayed home. (~아/어서 — casual spoken)" },
            { native: "환경오염이 심각하기 때문에 대책이 필요합니다. (formal)", romanized: "Hwangyeongoreum i simgakagi ttaemune daechaegi piryohamnida.", translation: "Because environmental pollution is serious, countermeasures are necessary. (~기 때문에 — formal written)" },
            { native: "게다가, 비용도 줄일 수 있습니다.", romanized: "Gedaga, biyongdo jureul su isseumnida.", translation: "Furthermore, costs can also be reduced." },
            { native: "결론적으로, 이 방법이 가장 효과적입니다.", romanized: "Gyeollonjeok euro, i bangbopi gajang hyogwajeogimnida.", translation: "In conclusion, this method is the most effective." },
            { native: "어쩔 수 없어요. 그냥 받아들여야 해요.", romanized: "Eojjeol su eopseoyo. Geunyang badadeulryeoya haeyo.", translation: "It can't be helped. We just have to accept it." },
        ]
    },
]
