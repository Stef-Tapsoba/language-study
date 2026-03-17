// Korean C1 grammar lessons
// data/korean/grammar/c1.ts
import { GrammarLesson } from "../../../types"

export const c1Grammar: GrammarLesson[] = [
    {
        id: "ko-g-c1-1",
        level: "C1",
        title: "Formal Written Structures (격식체 문어 구조)",
        explanation: {
            native: "Advanced Korean writing uses formal connective endings that rarely appear in speech but are essential for official documents, academic papers, legal texts, and formal speeches. (1) -(으)므로: a formal written connector meaning 'therefore' or 'since/because'. Attach to verb/adjective stem: 바쁘므로 참석이 어렵습니다 (Since I am busy, attendance is difficult). Unlike -아/어서 or -기 때문에, -(으)므로 carries a more elevated, written register. (2) -는바: a formal written connector meaning 'given that' or 'in that'. Used to state a premise before drawing a conclusion: 문제가 심각한바, 즉각적인 조치가 필요합니다 (Given that the problem is serious, immediate action is needed). (3) -(으)ㄹ지언정: a formal concessive meaning 'even if / though I may'. Stronger than -더라도 and almost exclusively literary/formal: 어렵더라도 포기하지 않을지언정 대충 하지는 않겠다 (Even if I may not give up, I will not do it carelessly). These forms are found in government documents, academic writing, formal news commentary, and literary prose.",
            target: "고급 한국어 문어체에는 구어에서 거의 사용되지 않지만 공문서, 학술 논문, 법률 문서, 격식체 연설에 필수적인 연결 어미가 있습니다. (1) '-(으)므로': '~이므로, ~이기 때문에'를 뜻하는 격식체 문어 연결 어미입니다. 동사/형용사 어간에 붙입니다(예: 바쁘므로 참석이 어렵습니다). '-아/어서'나 '-기 때문에'보다 격조가 높습니다. (2) '-는바': '~인 바, ~이므로'를 뜻하는 격식체 문어 연결 어미로, 전제를 제시한 후 결론을 도출할 때 씁니다(예: 문제가 심각한바, 즉각적인 조치가 필요합니다). (3) '-(으)ㄹ지언정': '-더라도'보다 강한 양보 표현으로 문어체·문학체에서만 거의 사용됩니다(예: 어렵더라도 포기하지 않을지언정 대충 하지는 않겠다). 이 형태들은 정부 문서, 학술 글쓰기, 격식체 뉴스 논평, 문학적 산문에서 찾아볼 수 있습니다."
        },
        examples: [
            { native: "바쁘므로 참석이 어렵습니다.", translation: "Since I am busy, attendance is difficult." },
            { native: "문제가 심각한바, 즉각적인 조치가 필요합니다.", translation: "Given that the problem is serious, immediate action is needed." },
            { native: "어렵더라도 포기하지 않을지언정 대충 하지는 않겠다.", translation: "Even if it is difficult, I may not give up, but I will not do it carelessly." },
            { native: "시간이 부족하므로 핵심만 말씀드리겠습니다.", translation: "Since time is limited, I will speak only to the essentials." }
        ]
    },
    {
        id: "ko-g-c1-2",
        level: "C1",
        title: "Advanced Modality (고급 양상 표현)",
        explanation: {
            native: "C1-level Korean includes several high-frequency modality expressions that add nuance to judgement, evaluation, and concession. (1) -(으)ㄹ 만하다: expresses that something is 'worth doing' or 'can be done / deserves to be done'. Attach -(으)ㄹ to the verb stem, then 만하다: 이 영화는 볼 만하다 (This film is worth watching). With nouns in citation contexts: 그의 주장은 들을 만하다 (His argument is worth hearing). (2) -기는커녕: expresses 'far from doing X, (the opposite happened)'. Follows a verb noun form (-기는커녕) and is followed by a contrasting, typically worse outcome: 쉬기는커녕 더 바빠졌다 (Far from resting, I became even busier). (3) -치고: expresses 'for someone who is X / given that one is X, surprisingly...'. Follows a noun and sets up a contrast: 학생치고 매우 성숙하다 (For a student, she is very mature); 초보치고 잘 한다 (For a beginner, he does well). The construction implies a deviation from what is expected of that category.",
            target: "C1 수준의 한국어에는 판단, 평가, 양보에 뉘앙스를 더하는 양상 표현들이 있습니다. (1) '-(으)ㄹ 만하다': '~할 가치가 있다, ~할 수 있다'를 뜻합니다. 동사 어간에 '-(으)ㄹ'을 붙이고 '만하다'를 씁니다(예: 이 영화는 볼 만하다, 그의 주장은 들을 만하다). (2) '-기는커녕': 'X는커녕 (X는 고사하고) 오히려 반대의 상황이 되었다'를 나타냅니다. 동사 명사형(-기는커녕) 뒤에 대조적·부정적 결과가 옵니다(예: 쉬기는커녕 더 바빠졌다). (3) '-치고': '~치고는 (예상과 달리)'를 뜻합니다. 명사 뒤에 붙어 그 범주에서 기대되는 것과의 차이를 나타냅니다(예: 학생치고 매우 성숙하다, 초보치고 잘 한다). 이 구문은 해당 범주에서 예상되는 것에서 벗어남을 함의합니다."
        },
        examples: [
            { native: "이 영화는 볼 만하다.", translation: "This film is worth watching." },
            { native: "그의 주장은 들을 만하다.", translation: "His argument is worth hearing." },
            { native: "쉬기는커녕 더 바빠졌다.", translation: "Far from resting, I became even busier." },
            { native: "초보치고 정말 잘 한다.", translation: "For a beginner, she does really well." }
        ]
    },
    {
        id: "ko-g-c1-3",
        level: "C1",
        title: "Discourse Cohesion in Academic Writing (학문적 담론 결속)",
        explanation: {
            native: "Academic Korean writing relies on a set of discourse connectors (담론 표지) to guide the reader through arguments, examples, and conclusions. These connectors appear frequently in academic papers, formal essays, and scholarly presentations. (1) 즉 (jeuk): 'that is / in other words' — used to clarify or restate a concept: 즉, 이 연구는 새로운 접근 방식을 제안한다. (2) 나아가 (naaga): 'furthermore / going further' — introduces an additional or stronger point: 나아가, 이 문제는 더 넓은 맥락에서 다루어야 한다. (3) 이에 따라 (ie ttara): 'accordingly / following this' — introduces a consequence or response to what was just stated: 이에 따라 정책을 수정하였다. (4) 오히려 (ohiryeo): 'rather / on the contrary' — introduces a surprising or contrary outcome: 오히려 상황이 악화되었다. (5) 반면에 (banmyeone): 'on the other hand' — introduces a contrast: 그는 성공했다. 반면에 그녀는 실패했다. Mastery of these connectors allows writers to build cohesive, logically-structured academic arguments in Korean.",
            target: "학술 한국어 글쓰기에서는 독자가 논거, 예시, 결론을 따라갈 수 있도록 담론 결속 장치(담론 표지)를 활용합니다. (1) '즉': '다시 말해, 그것은 곧'을 뜻하며 개념을 명확히 설명하거나 재진술할 때 씁니다. (2) '나아가': '더 나아가, 한걸음 더 나아가면'을 뜻하며 추가적·심화된 논점을 도입합니다. (3) '이에 따라': '그에 따라, 그 결과로'를 뜻하며 앞서 언급한 내용의 결과나 대응을 제시합니다. (4) '오히려': '도리어, 반대로'를 뜻하며 예상과 다른 놀라운 결과를 제시합니다. (5) '반면에': '그에 반해, 다른 한편으로는'을 뜻하며 대조를 도입합니다. 이러한 결속 장치를 숙달하면 한국어로 일관성 있고 논리적으로 구조화된 학술적 논거를 구성할 수 있습니다."
        },
        examples: [
            { native: "즉, 이 연구는 새로운 접근 방식을 제안한다.", translation: "In other words, this study proposes a new approach." },
            { native: "나아가, 이 문제는 더 넓은 맥락에서 다루어야 한다.", translation: "Furthermore, this issue must be addressed in a broader context." },
            { native: "이에 따라 정책을 수정하였다.", translation: "Accordingly, the policy was revised." },
            { native: "오히려 상황이 악화되었다.", translation: "On the contrary, the situation worsened." }
        ]
    },
    {
        id: "ko-g-c1-4",
        level: "C1",
        title: "Classical and Literary Forms (고전적·문어적 형식)",
        explanation: {
            native: "Classical Korean literary forms appear in historical texts, poetry, proverbs, ceremonial speeches, and traditional literature. Understanding them is essential for reading classical Korean literature and understanding formal rhetorical traditions. (1) -노라: a literary first-person assertive ending conveying strong conviction or declaration. Found in poetry and formal literature: 나는 알노라 (I know [literary assertion]). (2) -(으)ㄹ지니: an archaic connective meaning 'for / since / therefore' used in literary or classical texts to link cause with consequence: 길이 멀지니, 일찍 출발하라 (Since the road is long, depart early). (3) -이라: a literary copula or citation ending equivalent to 이다 in literary/formal texts: 이것이 진실이라 하노라 (I declare that this is the truth). (4) -도다: a literary exclamatory sentence-final ending expressing strong emotion or admiration, found in classical poetry and ceremonial language: 아, 아름답도다! (Ah, how beautiful!). These forms are no longer productive in modern speech but appear in classical literature, hymns, ceremonial oratory, and literary quotations.",
            target: "고전 한국어 문학 형식은 역사적 텍스트, 시, 속담, 의식적 연설, 고전 문학에서 나타납니다. 한국 고전 문학을 읽고 격식체 수사 전통을 이해하는 데 필수적입니다. (1) '-노라': 강한 확신이나 선언을 담은 문학적 1인칭 단정 종결 어미입니다(예: 나는 알노라). (2) '-(으)ㄹ지니': 원인과 결과를 연결하는 고어·문어체 연결 어미로 '~이니, ~이므로'를 뜻합니다(예: 길이 멀지니, 일찍 출발하라). (3) '-이라': 문어·격식체 텍스트에서 '이다'에 상당하는 문학적 서술격 종결 어미입니다(예: 이것이 진실이라 하노라). (4) '-도다': 강한 감정이나 탄미를 나타내는 문학적 감탄 종결 어미로 고전 시와 의식적 언어에서 찾아볼 수 있습니다(예: 아, 아름답도다!). 이 형태들은 현대 구어에서는 더 이상 사용되지 않지만 고전 문학, 찬송가, 의식 연설, 문학적 인용에 나타납니다."
        },
        examples: [
            { native: "나는 알노라.", translation: "I know (literary assertion)." },
            { native: "길이 멀지니, 일찍 출발하라.", translation: "Since the road is long, depart early." },
            { native: "이것이 진실이라 하노라.", translation: "I declare that this is the truth." },
            { native: "아, 아름답도다!", translation: "Ah, how beautiful!" }
        ]
    },
    {
        id: "ko-g-c1-5",
        level: "C1",
        title: "Four-Character Idioms (사자성어) & Proverbs (속담)",
        explanation: {
            native: "Korean rhetoric frequently employs 사자성어 (four-character idioms of Sino-Korean origin) and 속담 (native Korean proverbs) in formal speech, writing, public discourse, and literature. These expressions carry cultural and philosophical weight and demonstrate rhetorical sophistication. Key 사자성어: (1) 일석이조 (一石二鳥, ilseok-ijo): 'kill two birds with one stone' — achieving two things with one action; (2) 자업자득 (自業自得, jaeoP-jadeuk): 'reap what you sow' — suffering the consequences of one's own actions; (3) 이심전심 (以心傳心, isim-jeonsim): 'heart-to-heart understanding without words' — telepathic mutual understanding; (4) 오비이락 (烏飛梨落, obi-irak): 'a crow flies and a pear falls' — used to describe an unfortunate coincidence of timing. Key 속담: (1) 가는 말이 고와야 오는 말이 곱다: 'the words you send out must be kind for the words that come back to be kind' — treat others as you wish to be treated; (2) 세 살 버릇 여든까지 간다: 'habits from age three last until eighty' — early habits are hard to break. In formal usage, these idioms enhance rhetorical effect, demonstrate cultural literacy, and add concision to complex ideas.",
            target: "한국어 수사법에서는 격식체 연설, 글쓰기, 공적 담론, 문학에서 사자성어(한자어 네 글자 관용어)와 속담(고유 한국어 격언)을 자주 씁니다. 주요 사자성어: (1) 일석이조(一石二鳥): 한 가지 행동으로 두 가지 목적을 달성함; (2) 자업자득(自業自得): 자신이 저지른 일의 결과를 스스로 받음; (3) 이심전심(以心傳心): 말 없이 마음이 통함; (4) 오비이락(烏飛梨落): 까마귀가 날자 배가 떨어지는 것처럼 공교로운 우연의 일치. 주요 속담: (1) 가는 말이 고와야 오는 말이 곱다: 남에게 좋게 대해야 나도 좋은 대우를 받음; (2) 세 살 버릇 여든까지 간다: 어릴 때 형성된 습관은 평생 간다. 격식체 사용에서 이 표현들은 수사적 효과를 높이고 문화적 소양을 드러내며 복잡한 개념을 간결하게 표현합니다."
        },
        examples: [
            { native: "이 프로젝트는 일석이조의 효과가 있습니다.", translation: "This project has the effect of killing two birds with one stone." },
            { native: "남을 속인 결과가 이렇게 됐으니, 자업자득이지요.", translation: "This is the result of deceiving others — he reaps what he sowed." },
            { native: "우리는 말하지 않아도 이심전심으로 통한다.", translation: "We understand each other without words — a true heart-to-heart connection." },
            { native: "세 살 버릇 여든까지 간다는 말처럼, 어릴 때 독서 습관을 들이는 것이 중요하다.", translation: "As the saying goes, habits from age three last until eighty — it is important to build a reading habit from a young age." }
        ]
    },
    {
        id: "ko-g-c1-6",
        level: "C1",
        title: "Seamless Honorific Switching & C1 Formal Mastery",
        explanation: {
            native: "C1 Korean requires seamless, spontaneous honorific switching as the social context shifts within a single interaction. Full C1 honorific production means: (1) Consistent use of honorific nouns AND honorific/humble verbs throughout, not just at sentence endings. (2) Appropriate -께 (to a respected person) vs -에게 (neutral). (3) Humble verb production: 여쭙다 (ask humbly), 드리다 (give humbly), 말씀 드리다 (tell humbly), 뵙다 (meet humbly), 보여 드리다. (4) Real-time register switching: 합쇼체 in presentations → 해요체 in Q&A → 반말 with close colleagues — all within the same event, without awkward transitions. C1 also includes: advanced written structures (-는바 for given that/in that; -(으)ㄹ 만하다 for worth doing; 기는커녕 for far from); 사자성어 in appropriate contexts; full academic written style.",
            target: "C1 한국어는 단일 상호작용 내에서 사회적 맥락이 바뀔 때 자연스럽고 즉각적인 경어 전환을 요구합니다. 완전한 C1 경어 생산이란: (1) 문장 종결뿐 아니라, 높임 명사와 높임/낮춤 동사를 전체적으로 일관되게 사용하는 것. (2) -께(존칭 대상)와 -에게(중립)의 적절한 구분. (3) 낮춤 동사 생산: 여쭙다, 드리다, 말씀 드리다, 뵙다, 보여 드리다. (4) 실시간 격식 전환: 발표 시 합쇼체 → Q&A 시 해요체 → 친한 동료와 반말 — 모두 같은 자리에서, 어색한 전환 없이. C1에는 또한 포함됩니다: 고급 문어 구조(-는바, -(으)ㄹ 만하다, 기는커녕), 적절한 맥락에서의 사자성어 사용, 완전한 학술 문어 스타일."
        },
        examples: [
            { native: "선생님께 말씀 드리고 싶은 것이 있습니다.", romanized: "Seonsaengnimkke malsseum deurego sip eun geosi itseumnida.", translation: "There is something I would like to tell you, teacher. (humble chain: 께 + 말씀 드리다)" },
            { native: "그것은 충분히 고려할 만한 의견입니다.", romanized: "Geugeot eun chungbunhi goryeohal manhan euigyeon imnida.", translation: "That is an opinion worth considering sufficiently. (-(으)ㄹ 만하다 = worth doing)" },
            { native: "쉬기는커녕 더 바빠졌습니다.", romanized: "Swigi neun keonyeong deo bappajyeotseumnida.", translation: "Far from resting, things got even busier. (-기는커녕 = far from)" },
            { native: "이에 따라, 예산을 재검토할 필요가 있는바, 이를 위한 회의를 소집하고자 합니다.", romanized: "Ie ttara, yesaneul jaegeomt ohaeya hal piryo ga inneun ba, ireuil wihan hoeireul sojib hago ja hamnida.", translation: "Accordingly, given that there is a need to re-examine the budget, we intend to convene a meeting for this purpose. (-는바 formal written; -고자 하다 formal intention)" },
        ]
    }
]
