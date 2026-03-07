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
    }
]
