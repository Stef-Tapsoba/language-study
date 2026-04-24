import { GrammarLesson } from "../../../../types"

export const block3Lessons: GrammarLesson[] = [
    // ── Unit 9: -아/어서 vs -(으)니까 ─────────────────────────────────────────
    {
        id: "ko-g-a2-9",
        level: "A2",
        title: "왜 안 왔어요? — -아/어서 vs -(으)니까 (the critical distinction)",
        explanation: "Both -아/어서 and -(으)니까 translate as 'because/so' in English — which is exactly the problem. The choice depends on what comes AFTER the connector, not before. -아/어서 = natural cause→result (factual, no command after). -(으)니까 = speaker's reasoning to justify a decision, command, or suggestion. CRITICAL RULES: (1) After -아/어서, you CANNOT use an imperative, suggestion, or speaker's stated intention. (2) You CANNOT attach -았/었 to -아/어서 — past meaning comes from the final verb.",
        rules: [
            {
                condition: "-아/어서: natural sequence or factual cause (no imperative/suggestion after)",
                result: "Present stem (vowel harmony) + -아서 (ㅏ/ㅗ stems) or -어서 (all others) or -해서 (하다)",
                examples: [
                    { native: "배가 고파서 밥을 먹었어요.", romanized: "Baega gopaseo bab-eul meogeosseoyo.", translation: "I was hungry, so I ate." },
                    { native: "비가 와서 집에 있었어요.", romanized: "Bi-ga waseo jibe isseosseoyo.", translation: "It rained, so I stayed home." },
                    { native: "한국에 가서 김치를 먹었어요.", romanized: "Hanguge gaseo kimchi-reul meogeosseoyo.", translation: "I went to Korea and ate kimchi." },
                ]
            },
            {
                condition: "-(으)니까: speaker's reasoning to justify a command, suggestion, or decision",
                result: "Vowel/ㄹ stem + -니까 / Consonant stem + -으니까",
                examples: [
                    { native: "배고프니까 드세요.", romanized: "Baegopeunikka deuseyo.", translation: "Since you're hungry, please eat." },
                    { native: "날씨가 좋으니까 산책할까요?", romanized: "Nalssiga joeunikka sanaekhalkkaayo?", translation: "The weather's nice — shall we take a walk?" },
                    { native: "바쁘니까 나중에 전화할게요.", romanized: "Bappeunikka najunge jeonhwahalgeyo.", translation: "I'm busy, so I'll call later." },
                ]
            },
        ],
        notes: [
            {
                type: "warning",
                content: "CRITICAL: -아/어서 CANNOT be followed by: imperatives (-(으)세요, 주세요), suggestions (-(으)ㄹ까요), or 1st person intentions (-(으)ㄹ 게요). ✗ 피곤해서 쉬세요. ✓ 피곤하니까 쉬세요."
            },
            {
                type: "warning",
                content: "TENSE RULE: You CANNOT put -았/었 before -아/어서. The final verb carries all tense meaning. ✗ 피곤했어서 잤어요. ✓ 피곤해서 잤어요."
            },
            {
                type: "tip",
                content: "Memory tip: -(으)니까 sounds like 'since/given that' — you are USING the reason to justify what follows. -아/어서 is more like 'and so' — describing what naturally happened."
            },
            {
                type: "tip",
                content: "Test: Can you substitute 'given that' before the second clause? And is the second clause a decision, suggestion, or command? → Use -(으)니까. Otherwise → -아/어서."
            },
        ],
        examples: [
            { native: "갑자기 몸이 안 좋아서 못 갔어요.", romanized: "Gapjagi momi an joaseo mot gasseoyo.", translation: "I suddenly felt unwell, so I couldn't go." },
            { native: "피곤하니까 쉬세요.", romanized: "Pigonhaniikka swiseyo.", translation: "Since you're tired, please rest." },
            { native: "추우니까 코트를 입으세요.", romanized: "Chuuniikka koteu-reul ipeuseyo.", translation: "Since it's cold, put on a coat." },
            { native: "길이 막혀서 늦었어요.", romanized: "Giri makkyeoseo neujeosseoyo.", translation: "The traffic was bad, so I was late." },
            { native: "다음 주에 또 모이니까 그때 와요.", romanized: "Daeum jue tto moiniikka geuttae wayo.", translation: "We're meeting again next week, so come then." },
        ],
    },

    // ── Unit 10: -는데 ─────────────────────────────────────────────────────
    {
        id: "ko-g-a2-10",
        level: "A2",
        title: "좀 바쁜데요... — The four uses of -는데",
        explanation: "-는데 / -(으)ㄴ데 / -인데 is one of the most important and most frequently used structures in natural Korean. It connects clauses in four ways: (1) background context — setting up information before making a point, (2) contrast — softer alternative to -지만 (but), (3) soft trailing statement — implying a request without stating it, (4) mild reaction or acknowledgment. The form changes by verb type and tense.",
        rules: [
            {
                condition: "Formation by verb type",
                result: "Action verb present: -는데 | Descriptive verb: -(으)ㄴ데 | Past (any): -았/었는데 | Noun + 이다: 인데",
                examples: [
                    { native: "먹는데 (eating — action present)", romanized: "meongneunde", translation: "I'm eating, but / while eating..." },
                    { native: "바쁜데 (busy — descriptive)", romanized: "bappeunde", translation: "I'm busy, but..." },
                    { native: "먹었는데 (ate — past)", romanized: "meogeonnneunde", translation: "I ate, but..." },
                    { native: "학생인데 (is a student — copula)", romanized: "haksaenginde", translation: "I'm a student, but..." },
                ]
            },
            {
                condition: "Use 1 — Background context (setting up what comes next)",
                result: "First clause is context; second clause is the point",
                examples: [
                    { native: "지금 바쁜데, 나중에 전화할게요.", romanized: "Jigeum bappeunde, najunge jeonhwahalgeyo.", translation: "I'm busy right now — I'll call later." },
                    { native: "오늘 날씨가 좋은데, 산책할까요?", romanized: "Oneul nalssiga joeunde, sanaekhalkkaayo?", translation: "The weather's nice today — shall we take a walk?" },
                ]
            },
            {
                condition: "Use 3 — Soft trailing statement (implicit request — sentence ends in -는데요)",
                result: "Statement + -는데요... (trailing off, implying a request)",
                examples: [
                    { native: "주문하고 싶은데요...", romanized: "Jumunhago sipeundeyo...", translation: "I'd like to order... (implying: are you available?)" },
                    { native: "길을 모르는데요...", romanized: "Gireul moreuneundeyo...", translation: "I don't know the way... (implying: can you help?)" },
                ]
            },
        ],
        notes: [
            {
                type: "warning",
                content: "있다/없다 follow ACTION verb rules → 있는데, 없는데 (NOT 있은데/없은데). 맛있다 → 맛있는데."
            },
            {
                type: "tip",
                content: "The trailing -는데요 (Use 3) is the most socially important use. In Korean service situations (cafés, shops, offices), making requests with -는데요 is more polite than direct imperatives. 물 주세요 = bare. 물이 필요한데요... = natural and soft."
            },
            {
                type: "tip",
                content: "-는데 vs -지만: Both can mean 'but'. -지만 is more emphatic and formal. -는데 is softer and more conversational — preferred in natural speech for most contrast situations."
            },
        ],
        examples: [
            { native: "지금 서울에 있는데, 만날 수 있어요?", romanized: "Jigeum Seoul-e inneunde, mannal su isseoyo?", translation: "I'm in Seoul right now — can we meet?" },
            { native: "한국어를 공부하는데 어려워요.", romanized: "Hangugeoreul gongbuhaneunde eoryeowoyo.", translation: "I study Korean, but it's hard." },
            { native: "좋은데요!", romanized: "Joheundeyo!", translation: "That's really nice! (mild reaction)" },
            { native: "비싼데요...", romanized: "Bissandeyo...", translation: "That's quite expensive, though..." },
            { native: "숙제가 많은데 오래 걸려요?", romanized: "Sukjega manneunde orae geollyeoyo?", translation: "You have a lot of homework — will it take long?" },
        ],
    },

    // ── Unit 11: -(으)면서 + -고 나서 ─────────────────────────────────────────
    {
        id: "ko-g-a2-11",
        level: "A2",
        title: "음악을 들으면서 공부해요 — Simultaneous and sequential actions",
        explanation: "-(으)면서 = doing A and B at the SAME TIME (both actions by the SAME subject). -고 나서 = doing B AFTER A is fully finished (sequential, emphasises completion of A first). Neither is interchangeable with plain -고, which is neutral and ambiguous about timing.",
        rules: [
            {
                condition: "-(으)면서: simultaneous actions — SAME subject only",
                result: "Vowel/ㄹ stem + -면서 / Consonant stem + -으면서",
                examples: [
                    { native: "음악을 들으면서 공부해요.", romanized: "Eumagul deureuimyeonseo gongbuhaeyo.", translation: "I study while listening to music." },
                    { native: "밥을 먹으면서 TV를 봐요.", romanized: "Bab-eul meogeumyeonseo TV-reul bwayo.", translation: "I watch TV while eating." },
                    { native: "걸으면서 스마트폰을 봐요.", romanized: "Georeuimyeonseo seumateuponeul bwayo.", translation: "I look at my phone while walking." },
                ]
            },
            {
                condition: "KEY RULE: -(으)면서 requires the SAME subject for both actions",
                result: "If different subjects → use -는 동안 (during/while) instead",
                examples: [
                    { native: "✗ 제가 공부하면서 친구가 요리해요.", romanized: "WRONG — different subjects", translation: "WRONG: different people doing simultaneous things" },
                    { native: "✓ 제가 공부하는 동안 친구가 요리해요.", romanized: "Jega gongbuhaneun dongan chinguga yorihaeyo.", translation: "While I study, my friend cooks." },
                ]
            },
            {
                condition: "-고 나서: sequential — A is fully completed before B begins",
                result: "Verb stem + -고 나서 (no vowel harmony — always -고 나서)",
                examples: [
                    { native: "밥을 먹고 나서 운동해요.", romanized: "Bab-eul meokgo naseo undonghaeyo.", translation: "I exercise after eating." },
                    { native: "씻고 나서 잤어요.", romanized: "Ssitgo naseo jasseoyo.", translation: "I went to sleep after washing up." },
                    { native: "커피를 다 마시고 나서 서점에 갔어요.", romanized: "Keopi-reul da masigo naseo seojome gasseoyo.", translation: "After finishing my coffee, I went to the bookshop." },
                ]
            },
        ],
        notes: [
            {
                type: "warning",
                content: "-(으)면서 CANNOT be used when two different people are doing different things simultaneously. This is the most common error: ✗ 비가 오면서 저는 집에 있었어요. ✓ 비가 오는 동안 저는 집에 있었어요."
            },
            {
                type: "tip",
                content: "듣다 and 걷다 are ㄷ-irregular: 듣다 → 들으면서, 걷다 → 걸으면서."
            },
            {
                type: "tip",
                content: "-고 나서 emphasises that A was FINISHED before B started. Plain -고 is more neutral. Use -고 나서 when you want to make the sequence explicit: 먹고 나서 바로 나갔어요 (left immediately after eating — not during)."
            },
        ],
        examples: [
            { native: "커피를 마시면서 뉴스를 봐요.", romanized: "Keopi-reul masimyeonseo nyuseureul bwayo.", translation: "I watch the news while drinking coffee." },
            { native: "이어폰을 끼면서 운동해요.", romanized: "Ieoponeul kkimyeonseo undonghaeyo.", translation: "I exercise while putting in my earphones." },
            { native: "숙제를 하고 나서 TV를 봐요.", romanized: "Sukjereul hago naseo TV-reul bwayo.", translation: "I watch TV after doing homework." },
            { native: "샤워하고 나서 잤어요.", romanized: "Syawohago naseo jasseoyo.", translation: "I went to sleep after showering." },
            { native: "일을 다 하고 나서 쉬어요.", romanized: "Ireul da hago naseo swieyo.", translation: "I rest after finishing all the work." },
        ],
    },

    // ── Unit 12: Noun modifiers -는/-(으)ㄴ/-(으)ㄹ ────────────────────────────
    {
        id: "ko-g-a2-12",
        level: "A2",
        title: "먹을 거 있어요? — Noun modifiers: -는, -(으)ㄴ, -(으)ㄹ",
        explanation: "Korean puts a modified verb BEFORE the noun (not after, like English relative clauses). Three modifier forms: -는 for action verb present ('is doing/does'), -(으)ㄴ for action verb past ('did') OR descriptive verb present ('is adj'), -(으)ㄹ for future/potential ('will/to'). These unlock high-frequency patterns like 먹을 거, 할 일, 갈 곳, 아는 사람.",
        rules: [
            {
                condition: "Action verb — present modifier (what is happening / what someone does)",
                result: "Action verb stem + -는 + noun (no vowel/consonant split)",
                examples: [
                    { native: "지금 먹는 음식이 뭐예요?", romanized: "Jigeum meongneun eumsigi mwoyeyo?", translation: "What is the food you're eating right now?" },
                    { native: "서울에 사는 친구가 있어요.", romanized: "Seoul-e saneun chinguga isseoyo.", translation: "I have a friend who lives in Seoul." },
                    { native: "아는 사람이에요.", romanized: "Aneun saramieyo.", translation: "It's someone I know." },
                ]
            },
            {
                condition: "Action verb — past modifier (what was done) OR descriptive verb — present modifier (current state)",
                result: "After vowel/ㄹ: + ㄴ | After consonant: + 은",
                examples: [
                    { native: "어제 만난 친구예요.", romanized: "Eoje mannan chinguyeyo.", translation: "It's the friend I met yesterday." },
                    { native: "제가 읽은 책이에요.", romanized: "Jega ilgeun chaegieyo.", translation: "It's a book I've read." },
                    { native: "어려운 문제예요.", romanized: "Eoryeoun munjeyeyo.", translation: "It's a difficult problem." },
                ]
            },
            {
                condition: "Future / potential modifier (what will be done / something to do)",
                result: "After vowel/ㄹ: + ㄹ | After consonant: + 을",
                examples: [
                    { native: "먹을 거 있어요?", romanized: "Meogeul geo isseoyo?", translation: "Is there anything to eat?" },
                    { native: "할 일이 많아요.", romanized: "Hal iri manayo.", translation: "I have a lot of things to do." },
                    { native: "갈 곳이 없어요.", romanized: "Gal gosi eoopseoyo.", translation: "There's nowhere to go." },
                ]
            },
        ],
        notes: [
            {
                type: "warning",
                content: "있다/없다 follow ACTION verb rules: 있는 (not 있은), 없는 (not 없은). 맛있다 → 맛있는. This is a very common error."
            },
            {
                type: "warning",
                content: "알다 drops ㄹ before ㄴ: 알다 → 아는 사람 (not 알는). Same rule as 알아요 → the ㄹ is always dropped before ㄴ."
            },
            {
                type: "tip",
                content: "High-frequency chunks to memorise: 아는 사람 (someone I know), 모르는 사람 (a stranger), 먹을 거 (something to eat), 할 일 (things to do), 갈 곳 (somewhere to go), 좋아하는 것 (something I like), 사는 곳 (the place I live)."
            },
        ],
        examples: [
            { native: "제가 좋아하는 음악이에요.", romanized: "Jega joahaneun eumagieyo.", translation: "It's music I like." },
            { native: "전에 간 식당에 또 가고 싶어요.", romanized: "Jeone gan sikdange tto gago sipeoyo.", translation: "I want to go to the restaurant I went to before again." },
            { native: "오늘 볼 영화 있어요?", romanized: "Oneul bol yeonghwa isseoyo?", translation: "Is there a movie to watch today?" },
            { native: "이야기할 시간이 있어요?", romanized: "Iyaghal sigani isseoyo?", translation: "Do you have time to talk?" },
            { native: "아까 먹은 음식 이름이 뭐예요?", romanized: "Akka meogeun eumsig irumi mwoyeyo?", translation: "What's the name of the food I ate a moment ago?" },
        ],
    },
]
