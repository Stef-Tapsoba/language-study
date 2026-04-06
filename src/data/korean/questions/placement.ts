// Korean placement test questions
// data/korean/questions/placement.ts
import { QuizQuestion } from "../../../types"

// 4 questions per CEFR level = 20 total.
// Used to determine the user's starting level.

export const placementQuestions: QuizQuestion[] = [
    // A1
    { id: "ko-p-a1-1", level: "A1", prompt: "What does '안녕하세요' mean?", options: ["Goodbye", "Thank you", "Hello", "Excuse me"], answer: "Hello" },
    { id: "ko-p-a1-2", level: "A1", prompt: "Which particle marks the topic of a sentence in Korean?", options: ["을/를", "이/가", "은/는", "에서"], answer: "은/는" },
    { id: "ko-p-a1-3", level: "A1", prompt: "Which particle marks the object of a verb in Korean?", options: ["은/는", "이/가", "을/를", "에서"], answer: "을/를" },
    { id: "ko-p-a1-4", level: "A1", prompt: "How do you say 'It is cold' in polite Korean?", options: ["춥다.", "추워요.", "추웠어요.", "추울 거예요."], answer: "추워요." },

    // A2
    { id: "ko-p-a2-1", level: "A2", prompt: "How do you say 'I want to go to Korea'?", options: ["한국에 가요.", "한국에 갔어요.", "한국에 가고 싶어요.", "한국에 갈 거예요."], answer: "한국에 가고 싶어요." },
    { id: "ko-p-a2-2", level: "A2", prompt: "How do you say 'I will eat dinner tomorrow'?", options: ["내일 저녁을 먹어요.", "내일 저녁을 먹었어요.", "내일 저녁을 먹을 거예요.", "내일 저녁을 먹고 싶어요."], answer: "내일 저녁을 먹을 거예요." },
    { id: "ko-p-a2-3", level: "A2", prompt: "Complete: '어제 영화를 ___ .' (to watch — past tense, polite)", options: ["봐요", "볼 거예요", "봤어요", "보고 싶어요"], answer: "봤어요" },
    { id: "ko-p-a2-4", level: "A2", prompt: "Complete: '지금 밥을 ___ .' (to eat — currently in progress, polite)", options: ["먹어요", "먹었어요", "먹고 있어요", "먹을 거예요"], answer: "먹고 있어요" },

    // B1
    { id: "ko-p-b1-1", level: "B1", prompt: "What does ~(으)면 express?", options: ["Desire", "Conditional (if/when)", "Permission", "Prohibition"], answer: "Conditional (if/when)" },
    { id: "ko-p-b1-2", level: "B1", prompt: "Complete: '배가 고파___ 밥을 먹었어요.' (so/because)", options: ["지만", "서", "으면", "기 때문에"], answer: "서" },
    { id: "ko-p-b1-3", level: "B1", prompt: "Which connector is more appropriate in a formal written essay?", options: ["~아/어서", "~기 때문에", "~고", "~지만"], answer: "~기 때문에" },
    { id: "ko-p-b1-4", level: "B1", prompt: "Complete (reported speech): '그는 내일 온다___ 했어요.'", options: ["고", "서", "지만", "면"], answer: "고" },

    // B2
    { id: "ko-p-b2-1", level: "B2", prompt: "What does '그때 더 열심히 공부했더라면 좋았을 텐데' express?", options: ["A future plan", "A past regret / counterfactual", "A current obligation", "A polite request"], answer: "A past regret / counterfactual" },
    { id: "ko-p-b2-2", level: "B2", prompt: "What does ~ㄹ/을 뻔했다 express?", options: ["Something that definitely happened", "Something that almost happened", "A future certainty", "A regret about the past"], answer: "Something that almost happened" },
    { id: "ko-p-b2-3", level: "B2", prompt: "Complete the formal written sentence: '비가 많이 오___ 행사가 취소되었습니다.'", options: ["기 때문에", "아서", "므로", "지만"], answer: "므로" },
    { id: "ko-p-b2-4", level: "B2", prompt: "What does '이에 따라' mean in formal Korean?", options: ["On the other hand", "Accordingly / in response to this", "In spite of this", "That is to say"], answer: "Accordingly / in response to this" },

    // C1
    { id: "ko-p-c1-1", level: "C1", prompt: "Which is the honorific form of 먹다?", options: ["드시다 only", "잡수시다 only", "Both 드시다 and 잡수시다", "Neither"], answer: "Both 드시다 and 잡수시다" },
    { id: "ko-p-c1-2", level: "C1", prompt: "What does ~에도 불구하고 mean?", options: ["because of", "in spite of", "thanks to", "instead of"], answer: "in spite of" },
    { id: "ko-p-c1-3", level: "C1", prompt: "What speech level is '-습니다 / -ㅂ니다'?", options: ["해요체 — everyday polite", "합쇼체 — most formal (presentations, public speech)", "해체 — casual / 반말", "격식체 — written only"], answer: "합쇼체 — most formal (presentations, public speech)" },
    { id: "ko-p-c1-4", level: "C1", prompt: "Which phrase means 'from this perspective / in this regard' in academic Korean?", options: ["이에 따라", "이러한 점에서", "이로 인해", "다시 말해"], answer: "이러한 점에서" },
]
