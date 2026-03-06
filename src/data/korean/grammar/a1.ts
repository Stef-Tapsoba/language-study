// Korean A1 grammar lessons
// data/korean/grammar/a1.ts
import { GrammarLesson } from "../../../types"

export const a1Grammar: GrammarLesson[] = [
    {
        id: "ko-g-a1-1",
        level: "A1",
        title: "Hangul: The Korean Alphabet",
        explanation: "Hangul (한글) is the Korean writing system, created in 1443 by King Sejong. It has 14 basic consonants (자음) and 10 basic vowels (모음) that combine into syllable blocks. Unlike Chinese or Japanese kanji, Hangul is fully phonetic and can be learned in a few hours.",
        examples: [
            { native: "ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ", romanized: "a ya eo yeo o yo u yu eu i", translation: "The 10 basic vowels" },
            { native: "ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅎ", romanized: "g n d r/l m b s (silent)/ng j h", translation: "10 of the 14 basic consonants" },
            { native: "한글", romanized: "Hangeul", translation: "Hangul (the Korean alphabet)" },
            { native: "가나다라마바사", romanized: "ga na da ra ma ba sa", translation: "Syllables ga, na, da, ra, ma, ba, sa" }
        ]
    },
    {
        id: "ko-g-a1-2",
        level: "A1",
        title: "Basic Sentence: X은/는 Y이에요/예요",
        explanation: "Korean follows Subject-Object-Verb order. The topic particle 은 (after consonant) or 는 (after vowel) marks what the sentence is about. 이에요 (after consonant) or 예요 (after vowel) means 'is/am/are' in polite informal speech (해요체).",
        examples: [
            { native: "저는 학생이에요.", romanized: "Jeoneun haksaengieyo.", translation: "I am a student." },
            { native: "이것은 책이에요.", romanized: "Igeoseun chaegieyo.", translation: "This is a book." },
            { native: "저는 한국 사람이에요.", romanized: "Jeoneun hanguk saramieyo.", translation: "I am Korean." },
            { native: "이름은 민준이에요.", romanized: "Ireumeun minjunieyo.", translation: "The name is Minjun." }
        ]
    },
    {
        id: "ko-g-a1-3",
        level: "A1",
        title: "Greetings and Polite Expressions",
        explanation: "Korean has several speech levels. The most common for everyday use with strangers and acquaintances is polite informal (해요체). The formal polite style (합쇼체/하십시오체) is used in formal situations. Learn both forms for greetings.",
        examples: [
            { native: "안녕하세요.", romanized: "Annyeonghaseyo.", translation: "Hello. (polite)" },
            { native: "감사합니다. / 고마워요.", romanized: "Gamsahamnida. / Gomawoyo.", translation: "Thank you. (formal) / (polite informal)" },
            { native: "괜찮아요.", romanized: "Gwaenchanayo.", translation: "It's okay / I'm fine." },
            { native: "죄송합니다. / 미안해요.", romanized: "Joesonghamnida. / Mianhaeyo.", translation: "I'm sorry. (formal) / (polite informal)" },
            { native: "처음 뵙겠습니다.", romanized: "Cheoeum boepgesseumnida.", translation: "Nice to meet you. (formal)" }
        ]
    },
    {
        id: "ko-g-a1-4",
        level: "A1",
        title: "Numbers: Sino-Korean (일, 이, 삼...)",
        explanation: "Korean has two counting systems. Sino-Korean numbers (한자어 수) are borrowed from Chinese and are used for dates, money, phone numbers, minutes, floors of a building, and counting from 100+.",
        examples: [
            { native: "일(1), 이(2), 삼(3), 사(4), 오(5)", romanized: "il, i, sam, sa, o", translation: "1, 2, 3, 4, 5" },
            { native: "육(6), 칠(7), 팔(8), 구(9), 십(10)", romanized: "yuk, chil, pal, gu, sip", translation: "6, 7, 8, 9, 10" },
            { native: "백(100), 천(1,000), 만(10,000)", romanized: "baek, cheon, man", translation: "100, 1,000, 10,000" },
            { native: "지금 몇 시예요? — 두 시 삼십 분이에요.", romanized: "Jigeum myeot siyeyo? — Du si samsip bunieyo.", translation: "What time is it now? — It is 2:30." }
        ]
    },
    {
        id: "ko-g-a1-5",
        level: "A1",
        title: "Subject Particle 이/가",
        explanation: "The subject particle marks the grammatical subject of a sentence — the new information or focus of the sentence. Use 이 (i) after a consonant-ending word and 가 (ga) after a vowel-ending word. Compare with 은/는 (topic) which marks known or contrasting information.",
        examples: [
            { native: "학생이 와요.", romanized: "Haksaengi wayo.", translation: "A student is coming. (focus on student)" },
            { native: "친구가 있어요.", romanized: "Chinguga isseoyo.", translation: "I have a friend. / A friend exists." },
            { native: "누가 선생님이에요?", romanized: "Nuga seonsaengnimi yeyo?", translation: "Who is the teacher?" },
            { native: "뭐가 맛있어요?", romanized: "Mwoga massisseoyo?", translation: "What is delicious?" }
        ]
    },
    {
        id: "ko-g-a1-6",
        level: "A1",
        title: "Object Particle 을/를",
        explanation: "The object particle marks the direct object of an action verb — the thing being acted upon. Use 을 (eul) after a consonant-ending word and 를 (reul) after a vowel-ending word. In spoken Korean, object particles are often dropped but are important to understand.",
        examples: [
            { native: "밥을 먹어요.", romanized: "Babeul meogeoyo.", translation: "I eat rice. (밥 = rice, ends in consonant → 을)" },
            { native: "물을 마셔요.", romanized: "Mureul masyeoyo.", translation: "I drink water. (물 = water, ends in consonant → 을)" },
            { native: "음악을 들어요.", romanized: "Eumaguel deureoyo.", translation: "I listen to music." },
            { native: "한국어를 공부해요.", romanized: "Hangugeoreul gongbuhaeyo.", translation: "I study Korean. (한국어 = Korean language, ends in vowel → 를)" }
        ]
    },
    {
        id: "ko-g-a1-7",
        level: "A1",
        title: "Location Particles 에 and 에서",
        explanation: "에 (e) marks a destination or static location ('to', 'at', 'in'). 에서 (eseo) marks where an action takes place ('at', 'in', 'from'). Use 에 with verbs like 가다 (go), 오다 (come), 있다 (be/exist). Use 에서 with action verbs like 먹다 (eat), 공부하다 (study), 일하다 (work).",
        examples: [
            { native: "학교에 가요.", romanized: "Hakgyoe gayo.", translation: "I go to school. (에 = destination)" },
            { native: "집에 있어요.", romanized: "Jibe isseoyo.", translation: "I am at home. (에 = static location)" },
            { native: "카페에서 공부해요.", romanized: "Kapee seo gongbuhaeyo.", translation: "I study at the café. (에서 = where action happens)" },
            { native: "한국에서 왔어요.", romanized: "Hangugeso wasseoyo.", translation: "I came from Korea. (에서 = from)" }
        ]
    },
    {
        id: "ko-g-a1-8",
        level: "A1",
        title: "Present Tense: ~아/어요",
        explanation: "Korean verbs end in 다 in dictionary form. For polite present tense (해요체), remove 다 and add 아요 or 어요 based on vowel harmony. If the last stem vowel is ㅏ or ㅗ, add 아요. All other vowels use 어요. 하다 verbs become 해요. Some forms contract: 가 + 아요 → 가요.",
        examples: [
            { native: "먹다 → 먹어요", romanized: "meokda → meogeoyo", translation: "to eat → I eat / you eat (polite)" },
            { native: "가다 → 가요", romanized: "gada → gayo", translation: "to go → I go (가 + 아요 → 가요, contracted)" },
            { native: "마시다 → 마셔요", romanized: "masida → masyeoyo", translation: "to drink → I drink (마시 + 어요 → 마셔요, contracted)" },
            { native: "공부하다 → 공부해요", romanized: "gongbuhada → gongbuhaeyo", translation: "to study → I study (하다 → 해요)" }
        ]
    },
    {
        id: "ko-g-a1-9",
        level: "A1",
        title: "Past Tense: ~았/었어요",
        explanation: "To form the past tense in polite speech, add 았어요 if the last stem vowel is ㅏ or ㅗ, and 었어요 for all other vowels. 하다 verbs become 했어요. Many forms contract in natural speech.",
        examples: [
            { native: "먹다 → 먹었어요", romanized: "meokda → meogeosseoyo", translation: "to eat → ate" },
            { native: "가다 → 갔어요", romanized: "gada → gasseoyo", translation: "to go → went (가 + 았어요 → 갔어요)" },
            { native: "공부하다 → 공부했어요", romanized: "gongbuhada → gongbuhaesseoyo", translation: "to study → studied" },
            { native: "어제 친구를 만났어요.", romanized: "Eoje chingureul mannasseoyo.", translation: "I met a friend yesterday." }
        ]
    },
    {
        id: "ko-g-a1-10",
        level: "A1",
        title: "Negation: 안 and 못",
        explanation: "Place 안 (an) directly before a verb or adjective to negate it ('not', 'don't'). Use 못 (mot) before action verbs to express inability ('cannot', 'unable to'). For 하다 compound verbs, insert 안/못 between the noun and 하다: 공부 안 해요 (don't study) or 공부 못 해요 (can't study).",
        examples: [
            { native: "안 가요.", romanized: "An gayo.", translation: "I don't go. / I'm not going." },
            { native: "안 먹어요.", romanized: "An meogeoyo.", translation: "I don't eat it." },
            { native: "못 해요.", romanized: "Mot haeyo.", translation: "I can't do it." },
            { native: "공부 안 해요.", romanized: "Gongbu an haeyo.", translation: "I don't study. (noun + 안 + 해요)" }
        ]
    },
    {
        id: "ko-g-a1-11",
        level: "A1",
        title: "Numbers: Native Korean (하나, 둘, 셋...)",
        explanation: "Native Korean numbers (순우리말 수) are used for counting objects with counters, telling hours (o'clock), and ages. The numbers 하나(1), 둘(2), 셋(3), 넷(4) shorten to 한, 두, 세, 네 when used before a counter.",
        examples: [
            { native: "하나(1), 둘(2), 셋(3), 넷(4), 다섯(5)", romanized: "hana, dul, set, net, daseot", translation: "1, 2, 3, 4, 5" },
            { native: "여섯(6), 일곱(7), 여덟(8), 아홉(9), 열(10)", romanized: "yeoseot, ilgop, yeodeol, ahop, yeol", translation: "6, 7, 8, 9, 10" },
            { native: "사과 두 개", romanized: "sagwa du gae", translation: "two apples (두 = 둘 shortened before counter 개)" },
            { native: "지금 세 시예요.", romanized: "Jigeum se siyeyo.", translation: "It's three o'clock now. (세 = 셋 shortened before 시)" }
        ]
    },
    {
        id: "ko-g-a1-12",
        level: "A1",
        title: "Question Words: 뭐, 어디, 언제, 왜, 어떻게, 누구",
        explanation: "Korean question words stay in their natural sentence position — unlike English, they are not moved to the front. The sentence ends with a rising intonation or a question verb form.",
        examples: [
            { native: "이게 뭐예요?", romanized: "Ige mwoyeyo?", translation: "What is this? (뭐 = what)" },
            { native: "어디에 가요?", romanized: "Eodie gayo?", translation: "Where are you going? (어디 = where)" },
            { native: "언제 왔어요?", romanized: "Eonje wasseoyo?", translation: "When did you come? (언제 = when)" },
            { native: "왜 안 먹어요?", romanized: "Wae an meogeoyo?", translation: "Why aren't you eating? (왜 = why)" },
            { native: "어떻게 해요?", romanized: "Eotteoke haeyo?", translation: "How do you do it? (어떻게 = how)" },
            { native: "누가 왔어요?", romanized: "Nuga wasseoyo?", translation: "Who came? (누구 → 누가 with subject particle)" }
        ]
    }
]
