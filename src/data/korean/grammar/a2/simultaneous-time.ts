import { GrammarLesson } from "../../../../types"

export const koA2SimultaneousTime: GrammarLesson[] = [
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
]
