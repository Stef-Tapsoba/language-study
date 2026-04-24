import { GrammarLesson } from "../../../../types"

export const block1Lessons: GrammarLesson[] = [
    // ── Unit 1: -고 있다 (Progressive) ──────────────────────────────────────
    {
        id: "ko-g-a2-1",
        level: "A2",
        title: "지금 뭐 하고 있어요? — Progressive with -고 있다",
        explanation: "The -고 있다 pattern expresses an ongoing action (progressive) or an ongoing state. Attach -고 있어요 to any verb stem — there are no vowel harmony rules to worry about. For the past progressive use -고 있었어요.",
        rules: [
            {
                condition: "Action in progress right now",
                result: "Verb stem + -고 있어요",
                examples: [
                    { native: "밥을 먹고 있어요.", romanized: "Bap-eul meokgo isseoyo.", translation: "I am eating right now." },
                    { native: "공부하고 있어요.", romanized: "Gongbuhago isseoyo.", translation: "I'm studying." },
                    { native: "요즘 한국어를 열심히 공부하고 있어요.", romanized: "Yojeum hangugeoreul yeolsimhi gongbuhago isseoyo.", translation: "These days I'm studying Korean hard." },
                ]
            },
            {
                condition: "Ongoing state — wearing (stative use)",
                result: "Wearing verb stem + -고 있어요",
                examples: [
                    { native: "파란 코트를 입고 있어요.", romanized: "Paran koteu-reul ipgo isseoyo.", translation: "I'm wearing a blue coat." },
                    { native: "안경을 쓰고 있어요.", romanized: "Angyeongeul sseugo isseoyo.", translation: "They're wearing glasses." },
                    { native: "신발을 신고 있어요?", romanized: "Sinbareul singo isseoyo?", translation: "Are you wearing shoes?" },
                ]
            },
            {
                condition: "Past progressive (was doing when something else happened)",
                result: "Verb stem + -고 있었어요",
                examples: [
                    { native: "자고 있었는데 전화가 왔어요.", romanized: "Jago isseonnneunde jeonhwaga wasseoyo.", translation: "I was sleeping when the phone rang." },
                    { native: "그때 숙제를 하고 있었어요.", romanized: "Geuttae sukjereul hago isseosseoyo.", translation: "At that time I was doing homework." },
                ]
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Wearing verbs: 입다 (clothes) → 입고 있어요, 신다 (shoes) → 신고 있어요, 쓰다 (hat/glasses) → 쓰고 있어요, 끼다 (gloves/ring) → 끼고 있어요. These describe the resulting state of wearing, not the action of putting on."
            },
            {
                type: "tip",
                content: "Time expressions: 지금 (jigeum – right now), 요즘 (yojeum – these days), 아직 (ajik – still), 계속 (gyesok – continuously)."
            },
        ],
        examples: [
            { native: "지금 뭐 하고 있어요?", romanized: "Jigeum mwo hago isseoyo?", translation: "What are you doing right now?" },
            { native: "전화하고 있어요, 잠깐만요.", romanized: "Jeonhwahago isseoyo, jamkkanmanyo.", translation: "I'm on the phone — just a moment." },
            { native: "선생님은 빨간 스카프를 하고 있어요.", romanized: "Seonsaengnimeun ppalgan seukapeureul hago isseoyo.", translation: "The teacher is wearing a red scarf." },
            { native: "아직 일하고 있어요?", romanized: "Ajik ilhago isseoyo?", translation: "Are you still working?" },
            { native: "계속 기다리고 있어요.", romanized: "Gyesok gidarigo isseoyo.", translation: "I'm still waiting." },
        ],
    },

    // ── Unit 2: -(으)ㄹ 수 있다/없다 + -아/어도 되다 + -(으)면 안 되다 ────────
    {
        id: "ko-g-a2-2",
        level: "A2",
        title: "할 수 있어요? 해도 돼요? — Ability, permission, prohibition",
        explanation: "Three essential structures: -(으)ㄹ 수 있다/없다 expresses ability or possibility, -아/어도 되다 expresses permission, and -(으)면 안 되다 expresses prohibition. These three are NOT interchangeable — ability is about skill or possibility, permission is about what is allowed, prohibition is about what is forbidden.",
        rules: [
            {
                condition: "Ability / possibility — can / cannot",
                result: "Vowel/ㄹ stem + -ㄹ 수 있어요 / Consonant stem + -을 수 있어요",
                examples: [
                    { native: "갈 수 있어요.", romanized: "Gal su isseoyo.", translation: "I can go." },
                    { native: "먹을 수 있어요.", romanized: "Meogeul su isseoyo.", translation: "I can eat." },
                    { native: "한국어를 말할 수 없어요.", romanized: "Hangugeoreul malhal su eoopseoyo.", translation: "I can't speak Korean." },
                ]
            },
            {
                condition: "Permission — it's okay to / may I",
                result: "Present tense stem (vowel harmony) + -도 돼요",
                examples: [
                    { native: "사진 찍어도 돼요?", romanized: "Sajin jjigeodo dwaeyo?", translation: "May I take a photo?" },
                    { native: "여기 앉아도 돼요?", romanized: "Yeogi anjado dwaeyo?", translation: "May I sit here?" },
                    { native: "오늘은 안 와도 돼요.", romanized: "Oneureun an wado dwaeyo.", translation: "You don't have to come today." },
                ]
            },
            {
                condition: "Prohibition — must not / not allowed",
                result: "Vowel stem + -면 안 돼요 / Consonant stem + -으면 안 돼요",
                examples: [
                    { native: "사진 찍으면 안 돼요.", romanized: "Sajin jjigeumyeon an dwaeyo.", translation: "You must not take photos." },
                    { native: "담배를 피우면 안 돼요.", romanized: "Dambaereul piumyeon an dwaeyo.", translation: "You must not smoke." },
                    { native: "만지면 안 돼요.", romanized: "Manjimyeon an dwaeyo.", translation: "You must not touch it." },
                ]
            },
        ],
        notes: [
            {
                type: "warning",
                content: "KEY DISTINCTION: 갈 수 있어요 = I CAN go (ability). 가도 돼요 = It's OK to go (permission). 가면 안 돼요 = You MUST NOT go (prohibition). These three are not interchangeable."
            },
            {
                type: "tip",
                content: "못 + verb is the more casual spoken negation: 못 가요 (can't go). 갈 수 없어요 is clearer when emphasising impossibility."
            },
            {
                type: "tip",
                content: "혹시 (hoksi – by any chance) before a permission question makes it even gentler: 혹시 앉아도 돼요? (Would it perhaps be okay to sit here?)"
            },
        ],
        examples: [
            { native: "운전할 수 있어요?", romanized: "Unjeonhal su isseoyo?", translation: "Can you drive?" },
            { native: "지금은 갈 수 없어요.", romanized: "Jigeumeun gal su eoopseoyo.", translation: "I can't go right now." },
            { native: "이거 만져도 돼요?", romanized: "Igeo manyeodo dwaeyo?", translation: "May I touch this?" },
            { native: "여기서 드시면 안 돼요.", romanized: "Yeogiseo deusimyeon an dwaeyo.", translation: "You must not eat here." },
            { native: "플래시 사용하면 안 돼요.", romanized: "Peullaesi sayonghamyeon an dwaeyo.", translation: "You must not use flash." },
        ],
    },

    // ── Unit 3: -아/어야 하다/되다 + -(으)ㄹ 게요 vs 거예요 ────────────────────
    {
        id: "ko-g-a2-3",
        level: "A2",
        title: "해야 해요 / 할게요 — Obligation and first-person commitment",
        explanation: "두 가지 핵심 패턴: -아/어야 하다/되다 expresses obligation (must/have to), and -(으)ㄹ 게요 expresses a spontaneous first-person decision or promise — contrasted with -(으)ㄹ 거예요 which is a neutral future plan for any person.",
        rules: [
            {
                condition: "Obligation — have to / must",
                result: "Present tense stem (vowel harmony) + -야 해요 (or -야 돼요, same meaning)",
                examples: [
                    { native: "가야 해요.", romanized: "Gaya haeyo.", translation: "I have to go." },
                    { native: "공부해야 해요.", romanized: "Gongbuhaeya haeyo.", translation: "I have to study." },
                    { native: "일해야 돼요.", romanized: "Ilhaeya dwaeyo.", translation: "I have to work." },
                ]
            },
            {
                condition: "No obligation — don't have to (NOT prohibition!)",
                result: "안 + present stem + -아/어도 돼요",
                examples: [
                    { native: "안 와도 돼요.", romanized: "An wado dwaeyo.", translation: "You don't have to come." },
                    { native: "안 해도 돼요.", romanized: "An haedo dwaeyo.", translation: "You don't have to do it." },
                ]
            },
            {
                condition: "Spontaneous decision / promise — 1st person ONLY",
                result: "Vowel/ㄹ stem + -ㄹ게요 / Consonant stem + -을게요",
                examples: [
                    { native: "제가 할게요.", romanized: "Jega halgeyo.", translation: "I'll do it." },
                    { native: "제가 전화할게요.", romanized: "Jega jeonhwahalgeyo.", translation: "I'll call you." },
                    { native: "먼저 갈게요.", romanized: "Meonjeo galgeyo.", translation: "I'll go ahead first." },
                ]
            },
        ],
        notes: [
            {
                type: "warning",
                content: "안 해도 돼요 (no obligation — OK not to do it) is VERY DIFFERENT from 하면 안 돼요 (prohibition — must not do it). This is one of the most common A2 errors."
            },
            {
                type: "warning",
                content: "-(으)ㄹ 게요 is ONLY for the speaker (1st person). You CANNOT say 그 사람이 갈게요. For predictions about others use -(으)ㄹ 거예요."
            },
            {
                type: "tip",
                content: "KEY CONTRAST: 내일 갈 거예요 (neutral plan/prediction — any person) vs 제가 갈게요 (I've decided right now — speaker only, promise or spontaneous commitment)."
            },
        ],
        examples: [
            { native: "오늘까지 보고서를 써야 해요.", romanized: "Oneulkkaji bogoseoreul sseo-ya haeyo.", translation: "I have to write the report by today." },
            { native: "거짓말하면 안 돼요.", romanized: "Geojimalhamyeon an dwaeyo.", translation: "You must not lie." },
            { native: "제가 살게요!", romanized: "Jega salgeyo!", translation: "I'll buy it! / It's my treat!" },
            { native: "기다릴게요.", romanized: "Gidarilgeyo.", translation: "I'll wait." },
            { native: "연락할게요.", romanized: "Yeollakhalgeyo.", translation: "I'll be in touch." },
        ],
    },

    // ── Unit 4: -아/어 주다/드리다 + 한테/한테서/께 ───────────────────────────
    {
        id: "ko-g-a2-4",
        level: "A2",
        title: "도와드릴까요? — Helping others and direction particles",
        explanation: "-아/어 주다 means 'do [verb] for someone'. Use -아/어 주다 for peers/equals and -아/어 드리다 (humble) for respected people (elders, teachers, customers). The particles 한테 (to/for a person, spoken), 한테서 (from a person, spoken), and 께 (to/for a respected person, honorific) mark direction of exchanges.",
        rules: [
            {
                condition: "Doing something for a peer or younger person",
                result: "Present stem (vowel harmony) + -아/어 주다",
                examples: [
                    { native: "제가 도와줄게요.", romanized: "Jega dowajulgeyo.", translation: "I'll help you." },
                    { native: "사진 찍어 줄 수 있어요?", romanized: "Sajin jjigeojul su isseoyo?", translation: "Could you take a photo for me?" },
                    { native: "친구가 가르쳐 줬어요.", romanized: "Chinguga gareuchyeo jwosseoyo.", translation: "A friend taught me." },
                ]
            },
            {
                condition: "Doing something for a respected person (humble)",
                result: "Present stem (vowel harmony) + -아/어 드리다",
                examples: [
                    { native: "제가 도와드릴게요.", romanized: "Jega dowadeurilgeyo.", translation: "I'll help you. (humble)" },
                    { native: "제가 설명해 드릴게요.", romanized: "Jega seolmyeonghae deurilgeyo.", translation: "I'll explain it for you. (humble)" },
                ]
            },
            {
                condition: "Direction particles — to/from people",
                result: "한테 (to/for, spoken), 한테서 (from, spoken), 께 (to/for, honorific)",
                examples: [
                    { native: "친구한테 줬어요.", romanized: "Chinguhante jwosseoyo.", translation: "I gave it to a friend." },
                    { native: "친구한테서 받았어요.", romanized: "Chinguhanteseo badasseoyo.", translation: "I received it from a friend." },
                    { native: "선생님께 드렸어요.", romanized: "Seonsaengnim-kke deuryeosseoyo.", translation: "I gave it to the teacher." },
                ]
            },
        ],
        notes: [
            {
                type: "warning",
                content: "Using 주다 when you should say 드리다 (for a teacher, elder, or customer) is a social error in Korean. Always use 드리다 when doing something for someone deserving respect."
            },
            {
                type: "tip",
                content: "한테/한테서 = spoken, everyday. 에게/에게서 = written/formal. 께 = respectful. The particle 한테서 marks the SOURCE — where something came from."
            },
        ],
        examples: [
            { native: "저한테 주세요.", romanized: "Jeohante juseyo.", translation: "Please give it to me." },
            { native: "선생님께 드리세요.", romanized: "Seonsaengnim-kke deuriaseyo.", translation: "Give it to the teacher." },
            { native: "아이한테 설명해 줬어요.", romanized: "Aihante seolmyeonghae jwosseoyo.", translation: "I explained it to the child." },
            { native: "알려드릴게요.", romanized: "Allyeodeurilgeyo.", translation: "I'll let you know." },
            { native: "부모님께 연락했어요.", romanized: "Bumonim-kke yeollakhaesseoyo.", translation: "I contacted my parents." },
        ],
    },
]
