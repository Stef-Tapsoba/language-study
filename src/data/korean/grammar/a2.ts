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
    },
    {
        id: "ko-g-a2-5",
        level: "A2",
        title: "-아/어서: Cause and Sequential Connection",
        explanation: {
            native: "The connector -아/어서 has two closely related uses: (1) cause or reason — 'because / so'; (2) sequential action — 'and then'. The critical grammar rule: tense is NEVER marked on the first clause. Only the final verb of the sentence carries tense. To attach -아/어서: if the last vowel of the stem is ㅏ or ㅗ, add 아서; for all other vowels, add 어서; 하다 verbs → 해서. Note: -아/어서 cannot be followed by imperative or propositive endings — use -(으)니까 instead for those contexts.",
            target: "-아/어서는 두 가지로 쓰입니다: ①이유/원인('〜서'): 배가 고파서 먹었어요. ②순차 행동('그러고 나서'): 집에 가서 쉬었어요. 중요한 문법 규칙: 첫 번째 절에는 절대 시제 표시를 하지 않습니다. 시제는 마지막 동사에만 표시합니다. 결합 방법: 어간의 마지막 모음이 ㅏ나 ㅗ면 '아서', 나머지 모음에는 '어서', 하다 동사는 '해서'. 주의: -아/어서 뒤에는 명령형이나 청유형이 올 수 없습니다 — 그 경우에는 -(으)니까를 씁니다."
        },
        examples: [
            { native: "배가 고파서 밥을 먹었어요.", romanized: "Baega gopaseo babeul meogeosseoyo.", translation: "I was hungry so I ate. (cause)" },
            { native: "집에 가서 쉬었어요.", romanized: "Jibe gaseo swiosseoyo.", translation: "I went home and then rested. (sequence)" },
            { native: "피곤해서 일찍 잤어요.", romanized: "Pigonhaeseo iljjik jasseoyo.", translation: "I was tired so I went to sleep early." },
            { native: "지하철을 타서 회사에 갔어요.", romanized: "Jihacheoreul taseo hoesae gasseoyo.", translation: "I took the subway and then went to the office." },
            { native: "날씨가 좋아서 기분이 좋아요.", romanized: "Nalssiga joaseo gibuni joayo.", translation: "The weather is nice so I'm in a good mood." },
        ]
    },
    {
        id: "ko-g-a2-6",
        level: "A2",
        title: "Comparisons: 더 / 덜 / 가장 / 보다",
        explanation: {
            native: "Korean comparisons use: 보다 (than) to mark the thing being compared against; 더 (more) to indicate the higher degree; 덜 (less) for the lower degree; 가장 or 제일 (most/best/least) for superlatives. Word order: [standard]보다 [subject] 더/덜 [adjective]. Superlative: [subject]이/가 가장/제일 [adjective]. To express preference: A보다 B를 더 좋아해요 (I like B more than A). To ask for a preference between two things: A하고 B 중에 뭐가 더 좋아요?",
            target: "비교 표현: 보다(than) — 비교 기준에 붙임; 더(more) — 높은 정도; 덜(less) — 낮은 정도; 가장/제일(most) — 최상급. 어순: [기준]보다 [주어]가 더/덜 [형용사]. 최상급: [주어]이/가 가장/제일 [형용사]. 선호 표현: A보다 B를 더 좋아해요. 둘 중 선호 묻기: A하고 B 중에 뭐가 더 좋아요?"
        },
        examples: [
            { native: "오늘이 어제보다 더 더워요.", romanized: "Oneuri eojeboda deo deowoyo.", translation: "Today is hotter than yesterday." },
            { native: "이게 저것보다 덜 비싸요.", romanized: "Ige jeogeotboda deol bissayo.", translation: "This is less expensive than that." },
            { native: "서울이 제일 큰 도시예요.", romanized: "Seouli jeil keun dosiyeyo.", translation: "Seoul is the biggest city." },
            { native: "차보다 커피를 더 좋아해요.", romanized: "Chaboda keopireul deo joahaeyo.", translation: "I like coffee more than tea." },
            { native: "한국 음식하고 일본 음식 중에 뭐가 더 좋아요?", romanized: "Hanguk eumsikago ilbon eumsik junge mwoga deo joayo?", translation: "Which do you prefer, Korean food or Japanese food?" },
        ]
    },
    {
        id: "ko-g-a2-7",
        level: "A2",
        title: "Opinions: -(으)ㄴ/는 것 같아요 & 생각해요",
        explanation: {
            native: "To express a personal opinion or soft guess, use -(으)ㄴ/는 것 같아요 (I think / it seems). For present adjectives: adj stem + -(으)ㄴ 것 같아요. For present action verbs: verb stem + -는 것 같아요. For past: -은/는 것 같아요 after 았/었. To state an opinion more directly, use: 제 생각에는 ~ (in my opinion) or ~(이)라고 생각해요 (I think that ~). The distinction: 것 같아요 is softer and implies inference or politeness; 생각해요 is a more direct statement of opinion.",
            target: "개인적인 의견이나 추측을 부드럽게 표현할 때 '-(으)ㄴ/는 것 같아요'를 씁니다. 현재 형용사: 형용사 어간 + -(으)ㄴ 것 같아요. 현재 동사: 동사 어간 + -는 것 같아요. 과거: 았/었 + 을 것 같아요. 더 직접적인 의견 표현: '제 생각에는 ~' 또는 '~(이)라고 생각해요'. 차이: 것 같아요는 더 부드럽고 추론이나 공손함을 나타내고; 생각해요는 더 직접적인 의견 표명입니다."
        },
        examples: [
            { native: "이 영화가 재미있는 것 같아요.", romanized: "I yeongwaga jaemiinneun geot gatayo.", translation: "I think this movie is interesting." },
            { native: "오늘 비가 올 것 같아요.", romanized: "Oneul biga ol geot gatayo.", translation: "I think it will rain today." },
            { native: "제 생각에는 이게 더 좋은 방법이에요.", romanized: "Je saenggake neun ige deo joeun bangbobieyo.", translation: "In my opinion, this is the better method." },
            { native: "그 사람이 친절한 것 같아요.", romanized: "Geu sarami chinjeolhan geot gatayo.", translation: "I think that person is kind." },
            { native: "저는 한국어가 어렵다고 생각해요.", romanized: "Jeoneun hangugeo ga eoryeopda go saenggakhaeyo.", translation: "I think Korean is difficult." },
        ]
    },
]
