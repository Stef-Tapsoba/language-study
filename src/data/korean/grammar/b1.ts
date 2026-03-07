// Korean B1 grammar lessons
// data/korean/grammar/b1.ts
import { GrammarLesson } from "../../../types"

export const b1Grammar: GrammarLesson[] = [
    {
        id: "ko-g-b1-1",
        level: "B1",
        title: "~(으)면: Conditional (If / When)",
        explanation: "Expresses a conditional 'if/when'. Attach ~으면 after consonant-ending stems, ~면 after vowel-ending stems. Used for real conditionals, habitual truths, and polite requests. Cannot be combined with past tense markers on the if-clause — tense is only marked on the main clause.",
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
        explanation: "Has two main uses: (1) because/so — stating a cause followed by a result, and (2) sequentially — doing one action then another (and then). Cannot be used with past tense markers; tense is only shown on the final verb. The subject of both clauses is typically the same.",
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
        explanation: "Connects two contrasting clauses, similar to 'but' or 'however'. Attach ~지만 directly to the verb or adjective stem (present tense form without 요). The two clauses can share the same subject or have different subjects. This is a neutral contrast, not emotional.",
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
        explanation: "A formal way to express cause and reason. Attach ~기 때문에 to the verb or adjective stem. It can also be used with nouns directly: noun + 때문에. More formal and written than ~아/어서. The resulting clause cannot take the past tense marker directly.",
        examples: [
            { native: "비가 오기 때문에 집에 있어요.", romanized: "Biga ogi ttaemune jibe isseoyo.", translation: "Because it's raining, I'm staying home." },
            { native: "공부를 안 했기 때문에 시험에 떨어졌어요.", romanized: "Gongbureul an haetgi ttaemune siheome tteoreojyeosseoyo.", translation: "Because I didn't study, I failed the exam." },
            { native: "일 때문에 바빠요.", romanized: "Il ttaemune bappayo.", translation: "I'm busy because of work." },
            { native: "건강 때문에 운동해요.", romanized: "Geongang ttaemune undonghaeyo.", translation: "I exercise because of my health." }
        ]
    }
]
