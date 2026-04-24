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
            { native: "밥 먹으러 식당에 갔어요.", romanized: "Bap meogeureo sikdange gasseoyo.", translation: "I went to the restaurant to eat.", annotation: "~으러"},
            { native: "운동하기가 싫어요.", romanized: "Undonghagiga sireoyo.", translation: "I hate exercising.", annotation: "~기 with 싫어하다"},
            { native: "한국어를 배우는 것이 재미있어요.", romanized: "Hangugeoreul baeuneun geosi jaemiisseoyo.", translation: "Learning Korean is fun.", annotation: "~는 것 as subject"},
            { native: "숙제를 끝내기 전에 게임을 할 수 없어요.", romanized: "Sukjereul kkeunnaegi jeone geimeul hal su eopseoyo.", translation: "You can't play games before finishing your homework.", annotation: "~기 전에"},
            { native: "책을 읽는 것을 좋아해요.", romanized: "Chaegeul ingneun geoseul joahaeyo.", translation: "I like reading books.", annotation: "~는 것 as object"},
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
            { native: "피곤해서 집에 있었어요. (casual)", romanized: "Pigonhaeseo jibe isseosseoyo.", translation: "I was tired so I stayed home.", annotation: "~아/어서 — casual spoken"},
            { native: "환경오염이 심각하기 때문에 대책이 필요합니다. (formal)", romanized: "Hwangyeongoreum i simgakagi ttaemune daechaegi piryohamnida.", translation: "Because environmental pollution is serious, countermeasures are necessary.", annotation: "~기 때문에 — formal written"},
            { native: "게다가, 비용도 줄일 수 있습니다.", romanized: "Gedaga, biyongdo jureul su isseumnida.", translation: "Furthermore, costs can also be reduced." },
            { native: "결론적으로, 이 방법이 가장 효과적입니다.", romanized: "Gyeollonjeok euro, i bangbopi gajang hyogwajeogimnida.", translation: "In conclusion, this method is the most effective." },
            { native: "어쩔 수 없어요. 그냥 받아들여야 해요.", romanized: "Eojjeol su eopseoyo. Geunyang badadeulryeoya haeyo.", translation: "It can't be helped. We just have to accept it." },
        ]
    },
    {
        id: "ko-g-b1-9",
        level: "B1",
        title: "~(으)ㄴ/는 것 같다 / ~ㄹ/을 것 같다: Conjecture & Appearance",
        explanation: {
            native: "Expresses the speaker's guess, conjecture, or impression — \"it seems like\", \"I think\", \"it looks like\". Three main forms depending on tense: (1) Present/ongoing: verb stem + ~는 것 같다; (2) Past/completed: verb stem + ~(으)ㄴ 것 같다; (3) Future/supposition: verb stem + ~ㄹ/을 것 같다. For adjectives: present uses ~(으)ㄴ 것 같다. Important distinction: ~ㄹ/을 것 같다 expresses what the speaker thinks WILL happen or supposes is the case; ~(이)라고 생각해요 is a more confident opinion. This pattern is essential for polite, non-assertive communication in Korean.",
            target: "화자의 추측, 짐작, 인상을 나타내는 표현으로 '~인 것 같다', '~할 것 같다'를 의미합니다. 시제에 따라 세 가지 형태가 있습니다. (1) 현재/진행: 동사 어간 + ~는 것 같다; (2) 과거/완료: 동사 어간 + ~(으)ㄴ 것 같다; (3) 미래/추측: 동사 어간 + ~ㄹ/을 것 같다. 형용사의 현재는 ~(으)ㄴ 것 같다를 씁니다. 중요한 차이: ~ㄹ/을 것 같다는 앞으로 일어날 일이나 현재에 대한 추측을 나타내고, ~(이)라고 생각해요는 더 확신에 찬 의견을 나타냅니다. 정중하고 단정적이지 않은 표현을 위해 필수적인 패턴입니다."
        },
        examples: [
            { native: "오늘 비가 올 것 같아요.", romanized: "Oneul biga ol geot gatayo.", translation: "It seems like it will rain today. (future supposition)" },
            { native: "그 사람이 피곤한 것 같아요.", romanized: "Geu sarami pigonhan geot gatayo.", translation: "It seems like that person is tired. (present adjective)" },
            { native: "그 영화를 본 것 같아요.", romanized: "Geu yeonghwareul bon geot gatayo.", translation: "It seems like I've seen that film. (past)" },
            { native: "내일 늦을 것 같아서 미리 연락했어요.", romanized: "Naeil neujeul geot gataseo miri yeonraekaesseoyo.", translation: "I thought I'd be late tomorrow, so I contacted you in advance." }
        ]
    },
    {
        id: "ko-g-b1-10",
        level: "B1",
        title: "~아/어지다: Change of State (Becomes / Gets)",
        explanation: {
            native: "Expresses a change of state over time — something \"becomes\" or \"gets\" a certain way. Attach ~아/어지다 to adjective stems. ~아/어지다 acts like a verb (takes tense, aspect markers normally). The change implies a gradual or noticeable shift. Very common with adjectives: 좋아지다 (get better), 많아지다 (increase), 쉬워지다 (get easier), 힘들어지다 (get harder). Also used with some verbs to indicate an uncontrolled state change: 알아지다 (become known), 보여지다 (come to be seen — though 보이다 is more natural). Compare with ~게 되다 (lesson 11) which expresses a situation-based change rather than a quality change.",
            target: "시간이 지나면서 어떤 상태로 변해 가는 것을 나타냅니다. 형용사 어간에 '아/어지다'를 붙여 씁니다. '아/어지다'는 동사처럼 시제와 상 표지를 자연스럽게 취합니다. 이 변화는 점진적이거나 눈에 띄는 변화를 의미합니다. 형용사와 함께 매우 자주 씁니다: 좋아지다, 많아지다, 쉬워지다, 힘들어지다 등. 일부 동사와 함께 써서 통제할 수 없는 상태 변화를 나타내기도 합니다: 알려지다, 보이다. ~게 되다(11과)와 비교: ~게 되다는 상황에 의한 변화이고, ~아/어지다는 질적인 변화입니다."
        },
        examples: [
            { native: "한국어가 점점 쉬워지고 있어요.", romanized: "Hangugeoga jeomjeom swiwojigo isseoyo.", translation: "Korean is gradually getting easier." },
            { native: "날씨가 따뜻해졌어요.", romanized: "Nalssiga ttatteutaejyeosseoyo.", translation: "The weather has gotten warm." },
            { native: "건강이 좋아질 거예요.", romanized: "Geongangi joajil geoyeyo.", translation: "Your health will get better." },
            { native: "한국에 오고 나서 많이 달라졌어요.", romanized: "Hanguge ogo naseo mani tallajeosseoyo.", translation: "I've changed a lot since coming to Korea." }
        ]
    },
    {
        id: "ko-g-b1-11",
        level: "B1",
        title: "~기로 하다 / ~게 되다: Decision & Development",
        explanation: {
            native: "Two patterns for talking about planned changes and developments. ~기로 하다 expresses a deliberate decision: \"I decided to / We decided to\". Attach ~기로 하다 to the verb stem. Past tense: ~기로 했어요. Can also be ~기로 결정하다 (decide formally). ~게 되다 expresses a change of situation — \"come to do / end up doing / it turned out that\". It implies the change happened due to circumstances rather than a deliberate personal choice. Common in contexts where the speaker describes a life development, a new job, moving to a new place. Compare: 한국에 살기로 했어요 (I decided to live in Korea — personal choice) vs 한국에 살게 됐어요 (I came to live in Korea — due to circumstances).",
            target: "계획된 변화와 상황에 따른 발전을 나타내는 두 가지 패턴입니다. ~기로 하다는 의도적인 결정을 나타냅니다: '~하기로 했어요'. 동사 어간에 '기로 하다'를 붙이며, 과거형은 '기로 했어요'입니다. ~기로 결정하다로도 쓸 수 있습니다. ~게 되다는 상황의 변화를 나타냅니다 — '~하게 되다', '결국 ~하게 되다', '~하게 됐어요'. 개인의 선택보다는 상황으로 인해 변화가 일어났음을 의미합니다. 인생의 발전이나 새 직장, 이사 등을 설명할 때 자주 씁니다. 비교: 한국에 살기로 했어요(개인 선택) vs 한국에 살게 됐어요(상황에 따른 결과)."
        },
        examples: [
            { native: "내년에 대학원에 진학하기로 했어요.", romanized: "Naenyeone daehakwone jinhakagi ro haesseoyo.", translation: "I decided to go to graduate school next year." },
            { native: "새 회사에서 일하게 됐어요.", romanized: "Sae hoesaeseo irake dwaesseoyo.", translation: "I came to work at a new company (due to circumstances)." },
            { native: "다이어트를 시작하기로 결정했어요.", romanized: "Daioteureul sijakagiro gyeoljeonghaesseoyo.", translation: "I decided to start a diet." },
            { native: "한국에 오게 된 건 정말 우연이에요.", romanized: "Hanguge oge doen geon jeongmal uyeonieyo.", translation: "How I came to Korea was really by chance." }
        ]
    },
    {
        id: "ko-g-b1-12",
        level: "B1",
        title: "~는지 / ~(으)ㄴ지: Embedded Questions (Whether / What / How)",
        explanation: {
            native: "Embedded questions (indirect questions) in Korean use ~는지 for action verbs and ~(으)ㄴ지 for descriptive verbs and past tense. They are used in constructions like \"I know whether/what/how\", \"I wonder whether\", \"I don't know how\", \"Please tell me where\". Patterns: (1) Action verb present: ~는지; (2) Descriptive verb present: ~(으)ㄴ지; (3) Past tense: ~았/었는지. Common constructions: 알다/모르다 + ~는지 (know/don't know whether), 궁금하다 + ~는지 (wonder whether), 가르쳐 주다 + ~는지 (tell me whether), 물어보다 + ~는지 (ask whether). Question words (뭐, 어디, 왜, 언제, 어떻게, 얼마나) combine naturally with these forms. Key difference from ~다고 하다: that reports what someone SAID; ~는지 reports an unknown or embedded QUESTION.",
            target: "간접 의문문(내포 의문문)에서 쓰는 표현으로, 동작동사 현재형에는 ~는지를, 상태동사 현재형에는 ~(으)ㄴ지를 씁니다. 과거에는 ~았/었는지를 씁니다. '~인지 알다/모르다', '~인지 궁금하다', '~인지 가르쳐 주다', '~인지 물어보다' 등의 구조로 활용됩니다. 의문사(뭐, 어디, 왜, 언제, 어떻게, 얼마나)와 자연스럽게 결합합니다. ~다고 하다와의 차이: 그 표현은 누가 무언가를 말했음을 전달하고, ~는지는 알려지지 않은 질문이나 내포된 의문을 나타냅니다."
        },
        examples: [
            { native: "어디에 있는지 알아요?", romanized: "Eodie inneun ji arayo?", translation: "Do you know where it is?" },
            { native: "뭘 먹을지 모르겠어요.", romanized: "Mwol meogeul ji moreugessoyo.", translation: "I don't know what to eat." },
            { native: "왜 늦었는지 설명해 주세요.", romanized: "Wae neuteosneunji seolmyeonghae juseyo.", translation: "Please explain why you were late." },
            { native: "얼마나 걸리는지 궁금해요.", romanized: "Eolmana geolineunji gunggeumhaeyo.", translation: "I'm curious how long it takes." }
        ]
    },
    {
        id: "ko-g-b1-13",
        level: "B1",
        title: "피동 (被動): Passive Voice (~이/히/리/기)",
        explanation: {
            native: "Korean passive voice is formed by adding one of four suffixes ~이, ~히, ~리, ~기 directly to verb stems — the correct suffix depends on the specific verb (there is no rule, they must be memorised). Common examples: 보다→보이다(be seen), 닫다→닫히다(be closed), 팔다→팔리다(be sold), 안다→안기다(be hugged). The passive subject takes the subject marker ~이/가, and the agent (if mentioned) takes ~에게/에 의해. Korean also uses 되다-passive: verb stem + ~이/히/리/기 + 다, or noun + 되다 (공개되다 = be disclosed). For formal writing, ~에 의해 is used for the agent (more common in written/news contexts than spoken). Contrast with active: 엄마가 아이를 안았어요 (active) → 아이가 엄마에게 안겼어요 (passive). At B1, focus on high-frequency lexical passives that must be memorised as vocabulary items.",
            target: "한국어 피동은 동사 어간에 ~이, ~히, ~리, ~기 중 하나를 붙여 만듭니다. 어떤 접미사를 붙일지는 해당 동사에 따라 다르므로 개별적으로 외워야 합니다. 주요 예시: 보다→보이다, 닫다→닫히다, 팔다→팔리다, 안다→안기다. 피동문에서 피동 주어는 ~이/가를 취하고, 행위자는 ~에게/에 의해로 나타냅니다. 또한 '되다 피동'도 있습니다: 동사 어간 + ~이/히/리/기 + 다, 또는 명사 + 되다(예: 공개되다). 격식체 글쓰기에서 행위자를 나타낼 때는 ~에 의해를 씁니다. 능동과 비교: 엄마가 아이를 안았어요(능동) → 아이가 엄마에게 안겼어요(피동). B1에서는 빈도가 높은 어휘적 피동 표현을 어휘 항목으로 외우는 데 집중합니다."
        },
        examples: [
            { native: "문이 닫혔어요.", romanized: "Muni dachyeosseoyo.", translation: "The door was closed." },
            { native: "그 책이 많이 팔렸어요.", romanized: "Geu chaegi mani pallyeosseoyo.", translation: "That book sold a lot (was sold a lot)." },
            { native: "아이가 엄마에게 안겼어요.", romanized: "Aiga eommaege angyeosseoyo.", translation: "The child was held by their mother." },
            { native: "그 뉴스가 인터넷에서 많이 보였어요.", romanized: "Geu nyuseuga inteoneseo mani boyeosseoyo.", translation: "That news was seen a lot on the internet." }
        ]
    },
]
