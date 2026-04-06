// Korean B2 grammar lessons
// data/korean/grammar/b2.ts
import { GrammarLesson } from "../../../types"

export const b2Grammar: GrammarLesson[] = [
    {
        id: "ko-g-b2-1",
        level: "B2",
        title: "Passive & Causative Verbs (피동/사동)",
        explanation: {
            native: "Korean has two derived verb forms: passive (피동) and causative (사동). Passives are formed by adding -이-, -히-, -리-, or -기- to the verb stem (e.g., 보다 → 보이다 'to be seen', 닫다 → 닫히다 'to be closed', 열다 → 열리다 'to be opened', 안다 → 안기다 'to be held'). Another passive pattern uses -아/어지다 added to the verb stem (e.g., 알아지다 'to become known', 좋아지다 'to get better'). Causatives express making or letting someone do something. Causative suffixes -이-, -히-, -리-, -기-, -우-, -추- are added to the stem (e.g., 먹다 → 먹이다 'to feed', 읽다 → 읽히다 'to make read', 보다 → 보이다 'to show'). The compound 시키다 is also used to form causatives with Sino-Korean action verbs (공부시키다 'to make study').",
            target: "한국어에는 파생 동사 형태인 피동과 사동이 있습니다. 피동은 동사 어간에 '-이-, -히-, -리-, -기-'를 붙여 만듭니다(예: 보다 → 보이다, 닫다 → 닫히다, 열다 → 열리다, 안다 → 안기다). '-아/어지다'를 붙여 피동을 나타내기도 합니다(예: 알아지다, 좋아지다). 사동은 누군가가 무언가를 하도록 만들거나 허락하는 것을 표현합니다. 사동 접미사 '-이-, -히-, -리-, -기-, -우-, -추-'를 어간에 붙입니다(예: 먹다 → 먹이다, 읽다 → 읽히다). 한자어 동사에는 '시키다'를 결합하여 사동을 만들기도 합니다(예: 공부시키다)."
        },
        examples: [
            { native: "문이 바람에 닫혔어요.", translation: "The door was closed by the wind." },
            { native: "그 소식이 전국에 알려졌어요.", translation: "That news became known throughout the country." },
            { native: "선생님이 학생들에게 책을 읽혔어요.", translation: "The teacher made the students read books." },
            { native: "어머니가 아이에게 밥을 먹였어요.", translation: "The mother fed rice to the child." }
        ]
    },
    {
        id: "ko-g-b2-2",
        level: "B2",
        title: "Indirect Speech (간접화법)",
        explanation: {
            native: "Indirect speech (간접화법) is used to report what someone said, asked, or commanded without quoting them directly. For declarative statements, add -다고 하다 to the verb stem in present tense (verb + -(ㄴ/는)다고 하다) or past tense (verb + -았/었다고 하다). For questions, use -냐고 묻다 / -냐고 하다 (verb stem + -냐고 묻다). For imperatives (commands), use -(으)라고 하다 (verb stem + -(으)라고 하다). For requests with -아/어요, use -아/어 달라고 하다. Tense backshift occurs: present reported speech often uses -ㄴ/는다고 for action verbs, and -(이)라고 for copula (이다). Adjectives use -다고 in the present. Contractions like 한다고 하다 → 한다고 해요 are natural in spoken Korean.",
            target: "간접화법은 다른 사람의 말이나 질문, 명령을 직접 인용하지 않고 전달할 때 씁니다. 평서문: 동사 어간에 '-ㄴ/는다고 하다'(현재), '-았/었다고 하다'(과거)를 붙입니다. 의문문: '-냐고 묻다/하다'를 씁니다. 명령문: '-(으)라고 하다'를 씁니다. 요청문: '-아/어 달라고 하다'를 씁니다. 시제 변환이 발생합니다. 형용사는 현재에 '-다고'를 씁니다. 구어에서는 '한다고 해요'처럼 자연스럽게 축약합니다."
        },
        examples: [
            { native: "그는 내일 한국에 온다고 했어요.", translation: "He said he is coming to Korea tomorrow." },
            { native: "선생님이 언제 졸업하냐고 물었어요.", translation: "The teacher asked when I would graduate." },
            { native: "어머니가 일찍 자라고 하셨어요.", translation: "My mother told me to go to bed early." },
            { native: "친구가 같이 밥을 먹자고 했어요.", translation: "My friend suggested that we eat together." }
        ]
    },
    {
        id: "ko-g-b2-3",
        level: "B2",
        title: "Advanced Connectors",
        explanation: {
            native: "B2-level Korean uses several advanced connectors to express nuanced logical relationships. (1) -ㄹ/을수록: 'the more...the more'. Attach to the verb/adjective stem + -(으)ㄹ수록. Often combined with 더 in the main clause: 공부할수록 더 재미있어요 (The more you study, the more interesting it gets). (2) -자마자: 'as soon as'. Directly follows the verb stem: 집에 오자마자 전화했어요 (I called as soon as I got home). (3) -는데도: 'even though, despite'. Attach to the present stem: 비가 오는데도 나갔어요 (She went out even though it was raining). For adjectives and past tense: adj/verb + -은/ㄴ데도. (4) -더라도: 'even if (hypothetical)'. Attach to verb/adjective stem + -더라도: 힘들더라도 포기하지 마세요 (Even if it is hard, don't give up). This differs from -더라도 in that it expresses a hypothetical concession rather than a real contrast.",
            target: "고급 연결 표현을 통해 논리적 관계를 세밀하게 나타낼 수 있습니다. (1) '-ㄹ/을수록': 앞 절의 정도가 강해질수록 뒤 절도 그렇게 됨을 나타냅니다. 주절에 '더'와 자주 결합합니다. (2) '-자마자': '~하는 즉시'를 나타냅니다. 동사 어간 바로 뒤에 붙입니다. (3) '-는데도': '~임에도 불구하고'를 나타냅니다. 현재형 어간에 붙이며, 형용사·과거형에는 '-은/ㄴ데도'를 씁니다. (4) '-더라도': 가정적 양보를 나타냅니다. 실제 대립(-지만)이 아닌 가상의 상황에서도 뒤 절의 내용이 변하지 않음을 강조합니다."
        },
        examples: [
            { native: "연습할수록 실력이 늘어요.", translation: "The more you practice, the more your skills improve." },
            { native: "수업이 끝나자마자 친구를 만났어요.", translation: "I met my friend as soon as class ended." },
            { native: "피곤한데도 계속 일했어요.", translation: "She kept working even though she was tired." },
            { native: "어렵더라도 끝까지 해 보세요.", translation: "Even if it is difficult, please try until the end." }
        ]
    },
    {
        id: "ko-g-b2-4",
        level: "B2",
        title: "Formal Register (격식체): -ㅂ니다 / -습니다",
        explanation: {
            native: "The formal polite register uses -ㅂ니다 (after vowel stems) and -습니다 (after consonant stems) for statements, and -ㅂ니까 / -습니까 for questions. This register is used in business meetings, news broadcasts, official presentations, public announcements, and formal writing. Compared to the informal polite -아/어요, -ㅂ니다 is more distant and respectful. Common forms: 합니다 (do), 했습니다 (did), 할 것입니다 (will do), 입니다 (is/am), 있습니다 (there is/are), 없습니다 (there is not). Questions: 하십니까? 있습니까? This form does not contract and maintains full formality in professional settings.",
            target: "격식체는 '-ㅂ니다'(모음 어간)와 '-습니다'(자음 어간)로 문장을 끝내며, 의문문에는 '-ㅂ니까/-습니까'를 씁니다. 비즈니스 회의, 뉴스, 공식 발표, 격식적인 글쓰기에 쓰입니다. 비격식 경어 '-아/어요'보다 더 거리감 있고 공식적입니다. 주요 형태: 합니다, 했습니다, 할 것입니다, 입니다, 있습니다, 없습니다. 의문문: 하십니까?, 있습니까? 이 형태는 축약하지 않으며 전문적 상황에서 격식을 유지합니다."
        },
        examples: [
            { native: "저희 회사는 최고의 서비스를 제공합니다.", translation: "Our company provides the best service." },
            { native: "내일 회의가 오전 열 시에 있습니다.", translation: "Tomorrow's meeting is at ten o'clock in the morning." },
            { native: "이번 분기 매출이 증가했습니다.", translation: "Sales increased this quarter." },
            { native: "질문이 있으십니까?", translation: "Do you have any questions?" }
        ]
    },
    {
        id: "ko-g-b2-5",
        level: "B2",
        title: "Expressing Regret & Wishes",
        explanation: {
            native: "Korean has several structures for expressing wishes, hopes, and regrets about past or hypothetical situations. (1) -았/었으면 좋겠다: expresses a wish or hope. The subject can be the speaker or a third party. 비가 그쳤으면 좋겠다 (I hope the rain stops). For present/future wishes, use -(으)면 좋겠다. (2) -(으)ㄹ걸 그랬다: expresses regret that the speaker did NOT do something. Attach -(으)ㄹ걸 그랬다 to the verb stem: 더 열심히 공부할걸 그랬다 (I should have studied harder). This implies a past action that was not taken. (3) -지 않았더라면: 'if only I hadn't (done something)'. This is a past counterfactual: 거짓말을 하지 않았더라면 이 문제가 없었을 거예요 (If only I hadn't lied, this problem wouldn't exist). The main clause typically uses -았/었을 거예요 or -았/었을 텐데.",
            target: "한국어에는 소원, 희망, 과거나 가상 상황에 대한 후회를 표현하는 구조가 있습니다. (1) '-았/었으면 좋겠다': 바람이나 희망을 나타냅니다. 현재·미래 소원에는 '-(으)면 좋겠다'를 씁니다. (2) '-(으)ㄹ걸 그랬다': 하지 않은 행동에 대한 후회를 나타냅니다. 어간에 '-(으)ㄹ걸 그랬다'를 붙입니다. (3) '-지 않았더라면': '~하지 않았더라면 좋았을 텐데'의 과거 반사실 조건문입니다. 주절에는 보통 '-았/었을 거예요' 또는 '-았/었을 텐데'를 씁니다."
        },
        examples: [
            { native: "날씨가 더 좋았으면 좋겠어요.", translation: "I wish the weather were better." },
            { native: "그때 더 열심히 공부할걸 그랬어요.", translation: "I should have studied harder back then." },
            { native: "그 말을 하지 않았더라면 이렇게 되지 않았을 거예요.", translation: "If only I hadn't said that, things wouldn't have turned out this way." },
            { native: "일찍 출발했으면 늦지 않았을 텐데.", translation: "If only we had left earlier, we wouldn't have been late." }
        ]
    },
    {
        id: "ko-g-b2-6",
        level: "B2",
        title: "-(으)ㄹ 수밖에 없다 & ~(으)ㄹ지라도",
        explanation: {
            native: "-(으)ㄹ 수밖에 없다: expresses inevitability — 'have no choice but to' / 'there is nothing to do but'. Formed from: verb stem + -(으)ㄹ 수밖에 없다. The negative form is rarely used. This pattern is more emphatic than -아/어야 하다 — it implies all other options have been exhausted. ~(으)ㄹ지라도: a formal/literary concessive meaning 'even if / even though'. More formal than -더라도 and -아/어도. Used in essays, formal speeches, and literary contexts. Also note: -(으)므로 is the formal written causal connector (therefore / since), used in academic writing and official documents — distinct from conversational -아/어서 and -니까.",
            target: "-(으)ㄹ 수밖에 없다：불가피함을 나타냅니다 — '〜할 수밖에 없다' / '다른 방법이 없다'. 형태: 동사 어간 + -(으)ㄹ 수밖에 없다. 부정형은 잘 쓰이지 않습니다. -아/어야 하다보다 더 강조적인 표현으로, 다른 모든 선택지가 소진되었음을 내포합니다. ~(으)ㄹ지라도：격식체/문어체의 양보 표현으로 '〜할지라도'를 의미합니다. -더라도나 -아/어도보다 더 격식적입니다. 에세이, 공식 연설, 문학적 맥락에서 사용됩니다. 또한：-(으)므로는 격식체 문어의 인과 접속사('따라서/〜이므로')로, 학술적 글쓰기와 공식 문서에 사용됩니다 — 구어체 -아/어서, -니까와 구별됩니다."
        },
        examples: [
            { native: "이 계획은 수정할 수밖에 없습니다.", romanized: "I gyehoek eun sujeong hal su bakke eopseumnida.", translation: "There is no choice but to revise this plan." },
            { native: "결과가 나쁠지라도, 최선을 다해야 합니다.", romanized: "Gyeolgwaga nappeul jirido, choeseoneul dahaeya hamnida.", translation: "Even if the result is bad, we must do our best." },
            { native: "예산이 부족하므로, 계획을 수정해야 합니다.", romanized: "Yesani bujokhameueo, gyehoekeul sujeonghaeya hamnida.", translation: "Since/because the budget is insufficient, the plan must be revised. (formal -(으)므로)" },
        ]
    },
    {
        id: "ko-g-b2-7",
        level: "B2",
        title: "Honorific Nouns & Full Sentence Honorification",
        explanation: {
            native: "Full Korean honorifics require consistent honorification throughout an entire sentence — not just the final verb. Honorific nouns (존칭어): 이름 → 성함 (name); 집/댁 → 댁 (home); 나이 → 연세 (age); 밥/음식 → 진지 (meal); 말 → 말씀 (words/speech); 병 → 병환 (illness). Honorific verbs: 먹다/마시다 → 드시다/잡수시다; 있다 → 계시다; 자다 → 주무시다; 죽다 → 돌아가시다. Key humble verbs (자기낮춤): 주다 → 드리다; 묻다 → 여쭙다; 보다 (show) → 보여 드리다; 말하다 → 말씀 드리다. Object honorific: when the object of the verb is a senior person, Korean adds -께 (to someone respected) instead of -에게.",
            target: "한국어의 완전한 경어법은 문장 전체에 일관된 높임을 요구합니다 — 문장 종결 동사만이 아닙니다. 높임 명사(존칭어): 이름→성함, 집→댁, 나이→연세, 밥/음식→진지, 말→말씀, 병→병환. 높임 동사: 먹다/마시다→드시다/잡수시다, 있다→계시다, 자다→주무시다, 죽다→돌아가시다. 낮춤 동사(자기낮춤): 주다→드리다, 묻다→여쭙다, 보다(보여주다)→보여 드리다, 말하다→말씀 드리다. 목적어 높임: 동사의 목적어가 어른일 때, 한국어는 -에게 대신 -께를 사용합니다."
        },
        examples: [
            { native: "선생님, 성함이 어떻게 되세요?", romanized: "Seonsaengnim, seonghami eotteoke doeseyo?", translation: "Teacher, what is your name? (성함 = honorific noun for 이름)" },
            { native: "할머니께서 진지를 드십니다.", romanized: "Halmeonigeseo jinjireul deuisimnida.", translation: "Grandmother is eating her meal. (진지 = honorific for meal; 드시다 = honorific eat; -께서 = honorific subject marker)" },
            { native: "선생님께 여쭤봐도 될까요?", romanized: "Seonsaengnimkke yeojwobwado doelkkayo?", translation: "May I ask the teacher? (께 = to a respected person; 여쭙다 = humble ask)" },
        ]
    },
    {
        id: "ko-g-b2-8",
        level: "B2",
        title: "Formal Written Register & Academic Discourse Markers",
        explanation: {
            native: "Formal written Korean diverges significantly from spoken Korean. Key features of formal written style: (1) Use of 합쇼체 (-ㅂ니다/-습니다) throughout. (2) Sino-Korean academic connectors: 따라서 (therefore), 반면에 (on the other hand), 즉 (in other words/namely), 나아가 (furthermore), 이에 따라 (accordingly), 그러나 (however — formal). (3) Formal causal connectors: -(으)므로 (therefore/since — academic), -기 때문에 (because — formal/objective). (4) Impersonal constructions: 〜것으로 보인다 (it appears that), 〜할 필요가 있다 (it is necessary to), 〜을 알 수 있다 (it can be understood that). (5) Nominalisation in formal writing: -(으)ㅁ as a formal nominaliser (more written-register than -기 or -는 것).",
            target: "문어체 한국어는 구어체와 상당히 다릅니다. 격식 문어체의 주요 특징: (1) 합쇼체(-ㅂ니다/-습니다)의 일관된 사용. (2) 한자어 학술 접속사: 따라서, 반면에, 즉, 나아가, 이에 따라, 그러나. (3) 격식 인과 접속사: -(으)므로(학술체), -기 때문에(격식/객관). (4) 비인칭 구문: 〜것으로 보인다, 〜할 필요가 있다, 〜을 알 수 있다. (5) 격식 문어의 명사화: -(으)ㅁ (-기나 -는 것보다 격식적인 명사화소)."
        },
        examples: [
            { native: "데이터가 불충분하므로 결론을 내리기 어렵다.", romanized: "Deitaga bulchungbunhameueo gyeollon eul naerigi eoryeopda.", translation: "Since the data is insufficient, it is difficult to draw a conclusion. (-(으)므로 + formal)" },
            { native: "반면에, 긍정적인 결과도 나타났다.", romanized: "Banmyeone, geungjeongjeok in gyeolgwado natannatda.", translation: "On the other hand, positive results also appeared." },
            { native: "이 현상은 복잡한 사회적 요인에 기인함을 알 수 있다.", romanized: "I hyeonsang eun bokjap an sahoejeogyoin e giin ham eul al su itda.", translation: "It can be understood that this phenomenon is attributable to complex social factors. (formal -(으)ㅁ nominalisation)" },
        ]
    },
    {
        id: "ko-g-b2-9",
        level: "B2",
        title: "-(으)므로: Formal Causal Connector (Academic Writing)",
        explanation: {
            native: "~(으)므로 is a formal written causal connector meaning \"because\" or \"therefore\", used almost exclusively in academic writing, official documents, news and formal reports. It is NEVER used in casual conversation (use ~아/어서 or ~기 때문에 for spoken contexts). Attachment: verb/adjective stem + (으)므로. Consonant-ending stems: add ~으므로; vowel-ending stems: add ~므로. It can link two clauses within a sentence or appear at the end of a clause. Key distinction: ~기 때문에 (B1 — causal, can be used in conversation) vs ~(으)므로 (B2 — formal written only). Common contexts: legal documents, academic papers, news articles, official announcements.",
            target: "~(으)므로는 '때문에' 또는 '그러므로'를 의미하는 격식체 인과 접속어로, 학술 글쓰기, 공문서, 뉴스, 공식 보고서에서만 사용됩니다. 일상 대화에서는 절대 사용하지 않으며(구어체에서는 ~아/어서나 ~기 때문에를 사용), 자음으로 끝나는 어간에는 ~으므로를, 모음으로 끝나는 어간에는 ~므로를 붙입니다. 문장 내 두 절을 연결하거나 절 끝에 올 수 있습니다. 핵심 구별: ~기 때문에(B1 — 인과, 대화에서도 사용 가능) vs ~(으)므로(B2 — 격식 문어체 전용). 주요 맥락: 법률 문서, 학술 논문, 뉴스 기사, 공식 발표문."
        },
        examples: [
            { native: "이 연구는 표본 수가 충분하지 않으므로 결과를 일반화하기 어렵다.", romanized: "I yeonguneun pyobon suga chungbunhaji aneulmuro gyeolwareul ilbanhwahagi eoryeopda.", translation: "Because this study has an insufficient sample size, it is difficult to generalise the results." },
            { native: "날씨가 좋지 않으므로 야외 행사는 취소되었습니다.", romanized: "Nalssiga jochi aneulmuro yaoe haengsaneun chwisodoeeotsseumnida.", translation: "Since the weather is not good, the outdoor event has been cancelled." },
            { native: "이 법은 모든 시민에게 적용되므로 예외는 없습니다.", romanized: "I beobeun modeun simineoge jeogyongdoemeurog yewoineun eopseumnida.", translation: "Since this law applies to all citizens, there are no exceptions." },
            { native: "비용이 초과되었으므로 예산 조정이 필요합니다.", romanized: "Biyongi chogwadoeotsseulmuro yesan jojeoni pilyoamnida.", translation: "Since costs have been exceeded, budget adjustment is needed." }
        ]
    },
    {
        id: "ko-g-b2-10",
        level: "B2",
        title: "-(으)ㅁ: Formal Nominalisation in Academic Korean",
        explanation: {
            native: "~(으)ㅁ is a formal nominalising suffix that converts a verb or adjective into a noun form used in written/formal registers. It creates a more formal, literary noun compared to ~기 (B1) or ~는 것 (B1). Attachment: verb/adjective stem + ㅁ (after vowel) or 음 (after consonant). Examples: 알다 → 앎 (knowledge), 살다 → 삶 (life/living), 죽다 → 죽음 (death), 믿다 → 믿음 (faith/trust). Many ~(으)ㅁ forms have lexicalised into standard nouns. Use in formal sentences: as subject/object in academic writing: \"자유란 스스로 결정할 수 있음을 의미한다\" (Freedom means being able to decide for oneself). Contrast: ~기 (infinitival — process-focused) vs ~(으)ㅁ (nominal — result/fact-focused, more formal).",
            target: "~(으)ㅁ은 동사나 형용사를 문어체·격식체에서 사용하는 명사 형태로 바꾸는 격식 명사화 접미사입니다. ~기(B1)나 ~는 것(B1)보다 더 격식적이고 문어적인 명사를 만듭니다. 붙이는 방법: 모음 어간 + ㅁ, 자음 어간 + 음. 예: 알다 → 앎, 살다 → 삶, 죽다 → 죽음, 믿다 → 믿음. 많은 ~(으)ㅁ 형태는 일반 명사로 굳어졌습니다. 격식체 문장에서 주어나 목적어로 쓰입니다: «자유란 스스로 결정할 수 있음을 의미한다». 비교: ~기(부정사 — 과정 중심) vs ~(으)ㅁ(명사 — 결과/사실 중심, 더 격식적)."
        },
        examples: [
            { native: "삶이란 선택의 연속이다.", romanized: "Sami-ran seonteagui yeonsokida.", translation: "Life is a series of choices. (삶 = lexicalised ~(으)ㅁ form of 살다)" },
            { native: "그의 죽음은 많은 사람에게 충격을 주었다.", romanized: "Geuui jugeumeon manheun saramege chunggyeogeul jueotsda.", translation: "His death was a shock to many people. (죽음 = ~(으)ㅁ form of 죽다)" },
            { native: "자유란 스스로 결정할 수 있음을 의미한다.", romanized: "Jayuran seuseuro gyeoljeonghal su isseumeul uimihanda.", translation: "Freedom means being able to decide for oneself. (~(으)ㅁ as object in formal definition)" },
            { native: "이 문제의 해결됨이 확인되었다.", romanized: "I munjeui haegyeoldoeomi hwagindoeotsda.", translation: "The resolution of this problem was confirmed. (formal academic usage)" }
        ]
    },
    {
        id: "ko-g-b2-11",
        level: "B2",
        title: "~에 따라 / ~에 따르면: Academic Citation and Formal Conditionality",
        explanation: {
            native: "~에 따라 (depending on / according to / in accordance with) and ~에 따르면 (according to) are essential formal structures in academic Korean. ~에 따라: attaches to nouns; expresses \"depending on X\" or \"in accordance with X\": \"상황에 따라 대응 방법이 달라질 수 있다\" (the response method can vary depending on the situation). ~에 따르면: used specifically for citation and attribution — \"연구에 따르면\" (according to the study), \"전문가에 따르면\" (according to experts). These differ from ~에 의하면 (also citation-like but slightly more formal/written). ~에 따라 vs ~에 의해: 에 따라 = dependent on/in line with; 에 의해 = passive agent marker (by X). Both appear constantly in news, research papers, and formal reports.",
            target: "~에 따라와 ~에 따르면은 학술 한국어에서 필수적인 격식 표현입니다. ~에 따라: 명사에 붙어 '~에 따르면' 또는 '~에 맞춰'를 의미합니다: «상황에 따라 대응 방법이 달라질 수 있다». ~에 따르면: 인용과 출처 밝히기에 사용됩니다 — «연구에 따르면», «전문가에 따르면». ~에 의하면과는 구별됩니다(~에 의하면은 더 격식적이고 문어적). ~에 따라 vs ~에 의해: 에 따라 = ~에 따라서/~에 맞춰; 에 의해 = 피동 행위자 표시(~에 의해). 뉴스, 연구 논문, 공식 보고서에 빈번하게 등장합니다."
        },
        examples: [
            { native: "연구에 따르면, 수면 부족은 인지 기능에 부정적인 영향을 미친다.", romanized: "Yeongu e ttareumyeon, sumyeon bujogeun inji ginung e bujeongjeog-in yeonghyang-eul michinda.", translation: "According to the study, sleep deprivation has a negative effect on cognitive function." },
            { native: "상황에 따라 적절한 전략이 달라진다.", romanized: "Sanghwang e ttara jeokcheolhan jeonryagi dallaajinda.", translation: "The appropriate strategy varies depending on the situation." },
            { native: "정부 정책에 따라 기업들은 새로운 기준을 따라야 한다.", romanized: "Jeongbu jeongchaeg e ttara gieopdeureun saeroun gijeoneul ttarayahanda.", translation: "Companies must follow new standards in accordance with government policy." },
            { native: "전문가에 따르면, 이 문제는 단기적으로 해결되기 어렵다.", romanized: "Jeonmunga e ttareumyeon, i munjeneun dangijeog-euro haegyeoldoegi eoryeopda.", translation: "According to experts, this problem is difficult to resolve in the short term." }
        ]
    },
    {
        id: "ko-g-b2-12",
        level: "B2",
        title: "~한편 / ~반면에: Academic Contrast and Balanced Argumentation",
        explanation: {
            native: "~한편 (on the other hand / meanwhile / at the same time) and ~반면에 (on the other hand / in contrast) are essential discourse connectors for balanced academic argumentation in Korean. ~한편 introduces an additional perspective, an alternative aspect, or a simultaneous development: \"경제는 성장하고 있다. 한편, 불평등은 심화되고 있다.\" ~반면에 explicitly contrasts two opposing elements: \"A국의 출산율은 증가하고 있는 반면에, B국의 출산율은 감소하고 있다.\" Both appear constantly in formal Korean writing, news commentary, and TOPIK writing tasks. Compare to the conversational equivalent: 그런데 (but/however — casual/neutral); 하지만 (but — neutral, B1). These B2 connectors signal a more formal, analytical register.",
            target: "~한편과 ~반면에는 한국어 학술 글쓰기의 균형 잡힌 논증에 필수적인 담화 접속어입니다. ~한편은 추가적인 관점, 다른 측면, 또는 동시에 일어나는 발전을 소개합니다: «경제는 성장하고 있다. 한편, 불평등은 심화되고 있다.» ~반면에는 두 가지 대립되는 요소를 명시적으로 대조합니다: «A국의 출산율은 증가하고 있는 반면에, B국은 감소하고 있다.» 둘 다 격식체 한국어 글쓰기, 뉴스 논평, TOPIK 쓰기 과제에 자주 나타납니다. 구어체 대응어: 그런데(일상/중립), 하지만(중립, B1). 이 B2 접속어들은 더 격식적이고 분석적인 문체를 나타냅니다."
        },
        examples: [
            { native: "경제 성장률은 회복세를 보이고 있다. 한편, 실업률은 여전히 높은 수준을 유지하고 있다.", romanized: "Gyeongje seongjangnyureun hoeboksereul boigo itda. Hanpyeon, sireomnyureun yeojeonhi nop-eun sujeoneul yujiaegoitda.", translation: "The economic growth rate is showing signs of recovery. On the other hand, the unemployment rate remains at a high level." },
            { native: "도시 지역의 인구는 급격히 증가하고 있는 반면에, 농촌 지역은 인구 감소를 겪고 있다.", romanized: "Dosi jigyeog-ui inggoneun geupgyeokhi jeunggahago itneun banmyeon-e, nongchon jigyeogeun inggu gamsoreul gyeokgo itda.", translation: "While urban areas are experiencing rapid population growth, rural areas are suffering population decline." },
            { native: "이 기술은 생산성을 높이는 반면에, 일자리 감소를 초래할 수 있다.", romanized: "I gisureun saengsanseong-eul nop-ineun banmyeon-e, iljari gamsoreul choraehal su itda.", translation: "While this technology increases productivity, it may lead to job losses." },
            { native: "한편으로는 개인의 자유가 중요하고, 다른 한편으로는 사회적 책임도 중요하다.", romanized: "Hanpyeon-euroneun gaeinui jayuga jungyohago, dareun hanpyeon-euroneun sahoejeok chaegimdo jungyohada.", translation: "On one hand, individual freedom is important; on the other hand, social responsibility is also important." }
        ]
    },
    {
        id: "ko-g-b2-13",
        level: "B2",
        title: "사동 (使動): Causative Verbs — Active Production",
        explanation: {
            native: "Causative verbs (사동사) express \"making/letting/having someone do something\". Korean has two causative types. (1) Morphological causatives: formed by adding ~이, ~히, ~리, ~기, ~우, ~추 suffixes to verb stems. These must be memorised as vocabulary items: 먹다 → 먹이다 (to feed), 입다 → 입히다 (to dress someone), 읽다 → 읽히다 (to make/have someone read), 앉다 → 앉히다 (to seat someone), 웃다 → 웃기다 (to make someone laugh). (2) Analytical causative: verb stem + ~게 하다 — general productive causative usable with any verb: \"공부하게 하다\" (to make/let study), \"일하게 하다\" (to make/let work). The suffix causative is often more natural for basic verbs; ~게 하다 is used for others. In context: subject + object marker(을/를) + causative verb. The caused person takes either 에게 or 을/를 depending on the verb.",
            target: "사동사는 '누군가에게 어떤 행동을 하게 만들다/시키다'를 표현합니다. 한국어 사동에는 두 가지 유형이 있습니다. (1) 형태적 사동: 동사 어간에 ~이, ~히, ~리, ~기, ~우, ~추 접미사를 붙입니다. 어휘 항목으로 외워야 합니다: 먹다 → 먹이다, 입다 → 입히다, 읽다 → 읽히다, 앉다 → 앉히다, 웃다 → 웃기다. (2) 분석적 사동: 동사 어간 + ~게 하다 — 모든 동사에 사용 가능한 생산적 사동: «공부하게 하다», «일하게 하다». 접미사 사동은 기본 동사에 더 자연스럽고, ~게 하다는 다른 동사에 사용됩니다. 문맥에서: 주어 + 목적어(을/를) + 사동사. 피사동자는 동사에 따라 에게 또는 을/를 취합니다."
        },
        examples: [
            { native: "엄마가 아이에게 밥을 먹였어요.", romanized: "Eomma ga ai ege bab eul meogyeosseoyo.", translation: "The mother fed the child. (먹다 → 먹이다: ~이 causative)" },
            { native: "선생님이 학생들을 앉혔어요.", romanized: "Seonsaengnimi haksaengdeureul anjeosseoyo.", translation: "The teacher seated the students. (앉다 → 앉히다: ~히 causative)" },
            { native: "부모님이 저를 공부하게 했어요.", romanized: "Bumonnimi jeoreul gongbuhage haesseoyo.", translation: "My parents made me study. (~게 하다 analytical causative)" },
            { native: "그 농담이 모두를 웃겼어요.", romanized: "Geu nongdami modureul utgyeosseoyo.", translation: "That joke made everyone laugh. (웃다 → 웃기다: ~기 causative)" }
        ]
    }
]
