import { GrammarLesson } from "../../../../types"

export const koA2NominalizationClauses: GrammarLesson[] = [
    {
        id: "ko-g-a2-14",
        level: "A2",
        title: "-(으)ㄴ/는 것 (Nominalization — Turning Verbs into Nouns)",
        explanation: {
            native: "Korean turns verb phrases into noun phrases using 것 (thing / the fact of). Pattern: action verb stem + -는 것 (present/habitual); completed action + -(으)ㄴ 것 (past); adjective + -(으)ㄴ 것 (descriptive state). These noun phrases can fill any noun slot (subject, object, etc.). Naturally used after 좋아하다, 싫어하다, 알다, 모르다, 시작하다 etc. 것 can be shortened to 거 in informal speech.",
            target: "한국어에서 '것'으로 동사 구를 명사 구로 만들 수 있습니다. 형태: 동사 어간 + -는 것 (현재/습관); 완료 + -(으)ㄴ 것 (과거); 형용사 + -(으)ㄴ 것 (상태). 주어나 목적어 자리에 올 수 있습니다. 좋아하다, 싫어하다, 알다, 모르다 등 뒤에 자주 씁니다. 비격식: 것 → 거."
        },
        examples: [
            { native: "한국어를 배우는 것이 재미있어요.", romanized: "Hangugeoreul baeuneun geosi jaemiisseoyo.", translation: "Learning Korean is interesting." },
            { native: "운동하는 것을 좋아해요.", romanized: "Undonghaneun geoseul joahaeyo.", translation: "I like exercising." },
            { native: "어제 먹은 것이 맛있었어요.", romanized: "Eoje meogeun geosi massisseosseoyo.", translation: "What I ate yesterday was delicious." },
            { native: "모르는 것은 물어보세요.", romanized: "Moreuneun geoseun mureoboseyo.", translation: "Please ask about things you don't know." },
            { native: "중요한 것은 건강이에요.", romanized: "Jungyohan geoseun geongang ieyo.", translation: "What's important is health." }
        ],
        inlineVocab: [
            { word: "명사화 (名詞化)", romanized: "myeongsahwa", translation: "nominalization" },
            { word: "사실 (事實)", romanized: "sasil", translation: "fact / truth" },
            { word: "경험 (經驗)", romanized: "gyeongheom", translation: "experience" }
        ]
    },
    {
        id: "ko-g-a2-15",
        level: "A2",
        title: "-(으)ㄴ Adjective Clauses — Describing Nouns (Past/State)",
        explanation: {
            native: "In Korean, verbs and adjectives directly modify nouns without a relative pronoun. For completed/past action verbs: verb stem + -(으)ㄴ + noun (consonant stem → -은; vowel/ㄹ stem → -ㄴ). For descriptive adjectives: adjective stem + -(으)ㄴ + noun. These are called 관형형 (attributive forms). Examples: 먹은 음식 (the food I ate), 예쁜 꽃 (a pretty flower), 읽은 책 (the book I read).",
            target: "한국어에서 동사와 형용사는 관계대명사 없이 바로 명사를 수식합니다. 완료/과거 동사: 어간 + -(으)ㄴ + 명사 (자음 → -은; 모음/ㄹ → -ㄴ). 형용사: 어간 + -(으)ㄴ + 명사. 이를 관형형이라고 합니다. 예: 먹은 음식, 예쁜 꽃, 읽은 책."
        },
        examples: [
            { native: "어제 읽은 책이 재미있었어요.", romanized: "Eoje ilgeun chaegi jaemiisseosseoyo.", translation: "The book I read yesterday was interesting." },
            { native: "예쁜 꽃을 샀어요.", romanized: "Yeppeun kkocheul sasseoyo.", translation: "I bought pretty flowers." },
            { native: "먹은 음식이 맛있었어요.", romanized: "Meogeun eumsigi massisseosseoyo.", translation: "The food I ate was delicious." },
            { native: "작은 가방을 사고 싶어요.", romanized: "Jageun gabangeul sago sipeoyo.", translation: "I want to buy a small bag." },
            { native: "어제 만난 사람이 친절했어요.", romanized: "Eoje mannan sarami chinjeolhaesseoyo.", translation: "The person I met yesterday was kind." }
        ],
        inlineVocab: [
            { word: "관형형 (冠形形)", romanized: "gwanhyeonghyeong", translation: "attributive / modifier form" },
            { word: "수식하다", romanized: "susikhada", translation: "to modify / describe" },
            { word: "형용사 (形容詞)", romanized: "hyeongyongsa", translation: "adjective / descriptive verb" }
        ]
    },
    {
        id: "ko-g-a2-16",
        level: "A2",
        title: "-는 Adjective Clauses — Describing Nouns (Present Action)",
        explanation: {
            native: "For action verbs modifying nouns in a present or habitual sense: verb stem + -는 + noun. Descriptive adjectives do NOT use -는 for modification — they use -(으)ㄴ (lesson 15). Common patterns: -는 사람 (a person who...), -는 곳 (a place where...), -는 것 (the thing that...), -는 음식 (food that...). This lets you build complex noun descriptions naturally in Korean.",
            target: "현재/습관적 동작의 동사가 명사를 수식할 때: 동사 어간 + -는 + 명사. 형용사는 -는을 쓰지 않고 -(으)ㄴ을 씁니다. 자주 쓰는 패턴: -는 사람, -는 곳, -는 것, -는 음식. 복잡한 명사 수식을 자연스럽게 만들 수 있습니다."
        },
        examples: [
            { native: "지금 먹는 음식이 뭐예요?", romanized: "Jigeum meongneun eumsigi mwoyeyo?", translation: "What is the food you're eating now?" },
            { native: "한국어를 가르치는 선생님이에요.", romanized: "Hangugeoreul gareuchineun seonsaengnim ieyo.", translation: "She's a teacher who teaches Korean." },
            { native: "제가 좋아하는 노래예요.", romanized: "Jega joahaneun noraeyeyo.", translation: "It's a song I like." },
            { native: "자주 가는 카페가 있어요.", romanized: "Jaju ganeun kapega isseoyo.", translation: "There's a café I go to often." },
            { native: "한국어를 공부하는 사람이 많아요.", romanized: "Hangugeoreul gongbuhaneun sarami manayo.", translation: "There are many people who study Korean." }
        ],
        inlineVocab: [
            { word: "현재형 관형사", romanized: "hyeonjae hyeong gwanhyeongsa", translation: "present attributive modifier" },
            { word: "자주", romanized: "jaju", translation: "often / frequently" },
            { word: "항상", romanized: "hangsang", translation: "always" }
        ]
    },
]
