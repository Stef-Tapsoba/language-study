// Korean placement test questions
// data/korean/questions/placement.ts
import { QuizQuestion } from "../../../types"

// 2 questions per CEFR level (A1, A2, B1, B2, C1) = 10 total.
// Used to determine the user's starting level.

export const placementQuestions: QuizQuestion[] = [
    // A1
    { id: "ko-p-a1-1", level: "A1", prompt: "What does '안녕하세요' mean?", options: ["Goodbye", "Thank you", "Hello", "Excuse me"], answer: "Hello" },
    { id: "ko-p-a1-2", level: "A1", prompt: "Which particle marks the topic of a sentence in Korean?", options: ["을/를", "이/가", "은/는", "에서"], answer: "은/는" },

    // A2
    { id: "ko-p-a2-1", level: "A2", prompt: "How do you say 'I want to go to Korea'?", options: ["한국에 가요.", "한국에 갔어요.", "한국에 가고 싶어요.", "한국에 갈 거예요."], answer: "한국에 가고 싶어요." },
    { id: "ko-p-a2-2", level: "A2", prompt: "How do you say 'I will eat dinner tomorrow'?", options: ["내일 저녁을 먹어요.", "내일 저녁을 먹었어요.", "내일 저녁을 먹을 거예요.", "내일 저녁을 먹고 싶어요."], answer: "내일 저녁을 먹을 거예요." },

    // B1
    { id: "ko-p-b1-1", level: "B1", prompt: "What does ~(으)면 express?", options: ["Desire", "Conditional (if/when)", "Permission", "Prohibition"], answer: "Conditional (if/when)" },
    { id: "ko-p-b1-2", level: "B1", prompt: "Complete: '배가 고파___ 밥을 먹었어요.' (so/because)", options: ["지만", "서", "으면", "기 때문에"], answer: "서" },

    // B2
    { id: "ko-p-b2-1", level: "B2", prompt: "What does '그때 더 열심히 공부했더라면 좋았을 텐데' express?", options: ["A future plan", "A past regret / counterfactual", "A current obligation", "A polite request"], answer: "A past regret / counterfactual" },
    { id: "ko-p-b2-2", level: "B2", prompt: "What does ~ㄹ/을 뻔했다 express?", options: ["Something that definitely happened", "Something that almost happened", "A future certainty", "A regret about the past"], answer: "Something that almost happened" },

    // C1
    { id: "ko-p-c1-1", level: "C1", prompt: "Which is the honorific form of 먹다?", options: ["드시다 only", "잡수시다 only", "Both 드시다 and 잡수시다", "Neither"], answer: "Both 드시다 and 잡수시다" },
    { id: "ko-p-c1-2", level: "C1", prompt: "What does ~에도 불구하고 mean?", options: ["because of", "in spite of", "thanks to", "instead of"], answer: "in spite of" }
]
