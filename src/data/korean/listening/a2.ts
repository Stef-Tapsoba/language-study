// src/data/korean/listening/a2.ts — Korean A2 redesign
// 4 listening exercises covering A2 communicative themes.
// script = Korean TTS text, translation = English flat translation

import { ListeningExercise } from "../../../types"

export const a2Listening: ListeningExercise[] = [
    {
        id: "ko-l-a2-1",
        level: "A2",
        title: "박물관에서 — At a Museum",
        script: "실례합니다. 여기서 사진 찍어도 돼요? 이 방에서는 사진 찍으면 안 돼요. 플래시 사용도 금지예요. 그런데 다음 방에서는 촬영 가능해요. 아, 알겠어요. 그럼 이 작품 만져도 돼요? 아니요, 만지면 안 돼요. 죄송해요. 괜찮아요. 그러면 저기 카페에서 음료 마실 수 있어요? 네, 물론이죠! 카페에서는 드셔도 돼요.",
        translation: "Excuse me. May I take photos here? In this room you must not take photos. Flash photography is also prohibited. But in the next room photography is permitted. Ah, I understand. Then may I touch this artwork? No, you must not touch it. I'm sorry. That's okay. In that case, can I have a drink at the café over there? Yes, of course! You may eat and drink in the café.",
        dialogue: [
            { speaker: "관광객", text: "실례합니다. 여기서 사진 찍어도 돼요?", translation: "Excuse me. May I take photos here?" },
            { speaker: "직원", text: "이 방에서는 사진 찍으면 안 돼요. 플래시 사용도 금지예요. 그런데 다음 방에서는 촬영 가능해요.", translation: "In this room you must not take photos. Flash photography is also prohibited. But in the next room photography is permitted." },
            { speaker: "관광객", text: "아, 알겠어요. 그럼 이 작품 만져도 돼요?", translation: "Ah, I understand. Then may I touch this artwork?" },
            { speaker: "직원", text: "아니요, 만지면 안 돼요. 죄송해요.", translation: "No, you must not touch it. I'm sorry." },
            { speaker: "관광객", text: "괜찮아요. 그러면 저기 카페에서 음료 마실 수 있어요?", translation: "That's okay. In that case, can I have a drink at the café over there?" },
            { speaker: "직원", text: "네, 물론이죠! 카페에서는 드셔도 돼요.", translation: "Yes, of course! You may eat and drink in the café." },
        ],
        questions: [
            { id: "ko-l-a2-1-q1", level: "A2", prompt: "Can the tourist take photos in this room?", options: ["Yes, photography is allowed", "No, photography is prohibited", "Yes, but no flash", "Only with the staff's permission"], answer: "No, photography is prohibited" },
            { id: "ko-l-a2-1-q2", level: "A2", prompt: "Where can the tourist take photos?", options: ["In this room", "Nowhere in the museum", "In the next room", "Only outside"], answer: "In the next room" },
            { id: "ko-l-a2-1-q3", level: "A2", prompt: "Can the tourist drink at the café?", options: ["No, no food or drinks allowed", "Yes, eating and drinking is permitted there", "Only water", "Only coffee"], answer: "Yes, eating and drinking is permitted there" },
        ]
    },
    {
        id: "ko-l-a2-2",
        level: "A2",
        title: "오랜만에 만난 친구들 — Old Friends Reuniting",
        script: "현태야, 정말 오랜만이다! 많이 달라졌어. 나? 뭐가 달라졌어? 더 건강해진 것 같아. 운동해? 응, 작년부터 매일 운동하게 됐어. 처음에는 힘들었는데 지금은 괜찮아. 대단하다! 나도 예전보다 훨씬 바빠졌어. 일이 많아졌거든. 그래? 힘들겠다. 그래도 너 한국어 실력이 제일 좋아졌던데? 하하, 아직 멀었어. 근데 예전보다 훨씬 편해진 건 사실이야.",
        translation: "Hyuntae, it's been so long! You've changed a lot. Me? What's changed? You seem to have gotten healthier. Are you exercising? Yeah, since last year I've come to exercise every day. At first it was tough but now it's okay. That's impressive! I've gotten much busier than before. My workload increased. Really? That sounds hard. Still, your Korean has improved the most though? Haha, still a long way to go. But it's true that I've gotten much more comfortable with it than before.",
        dialogue: [
            { speaker: "수아", text: "현태야, 정말 오랜만이다! 많이 달라졌어.", translation: "Hyuntae, it's been so long! You've changed a lot." },
            { speaker: "현태", text: "나? 뭐가 달라졌어?", translation: "Me? What's changed?" },
            { speaker: "수아", text: "더 건강해진 것 같아. 운동해?", translation: "You seem to have gotten healthier. Are you exercising?" },
            { speaker: "현태", text: "응, 작년부터 매일 운동하게 됐어. 처음에는 힘들었는데 지금은 괜찮아.", translation: "Yeah, since last year I've come to exercise every day. At first it was tough but now it's okay." },
            { speaker: "수아", text: "대단하다! 나도 예전보다 훨씬 바빠졌어. 일이 많아졌거든.", translation: "That's impressive! I've gotten much busier than before. My workload increased." },
            { speaker: "현태", text: "그래? 힘들겠다. 그래도 너 한국어 실력이 제일 좋아졌던데?", translation: "Really? That sounds hard. Still, your Korean has improved the most though?" },
            { speaker: "수아", text: "하하, 아직 멀었어. 근데 예전보다 훨씬 편해진 건 사실이야.", translation: "Haha, still a long way to go. But it's true that I've gotten much more comfortable with it than before." },
        ],
        questions: [
            { id: "ko-l-a2-2-q1", level: "A2", prompt: "What change does 수아 notice in 현태?", options: ["He lost weight", "He seems healthier", "He speaks Korean better", "He has a new job"], answer: "He seems healthier" },
            { id: "ko-l-a2-2-q2", level: "A2", prompt: "Since when has 현태 been exercising every day?", options: ["Since this year", "Since last year", "Since two years ago", "Since a month ago"], answer: "Since last year" },
            { id: "ko-l-a2-2-q3", level: "A2", prompt: "How does 수아 feel about her Korean now compared to before?", options: ["Much worse", "The same", "Much more comfortable", "She gave up studying"], answer: "Much more comfortable" },
        ]
    },
    {
        id: "ko-l-a2-3",
        level: "A2",
        title: "교수님께 전화하기 — Calling the Professor's Office",
        script: "안녕하세요, 한국학과입니다. 안녕하세요. 저는 이민준이라고 합니다. 혹시 박 교수님 계세요? 지금 회의 중이셔서 안 계세요. 아, 그렇군요. 혹시 오늘 몇 시에 돌아오실 것 같으세요? 아마 4시쯤이실 것 같아요. 그럼 교수님께 제가 전화했다고 전해주실 수 있는데요? 이민준이라고 하면 아실 거예요. 네, 전해드릴게요. 그리고 혹시 교수님께서 내일 오후에 시간이 있으세요? 내일 오후 2시에서 4시는 비어 있으신 것 같아요. 감사합니다. 수고하세요!",
        translation: "Hello, this is the Korean Studies department. Hello. I'm Lee Minjun. Is Professor Park in by any chance? They're in a meeting right now, so they're not available. Ah, I see. Do you know what time they might return today? It'll probably be around 4 o'clock. In that case, could you let the professor know I called? If you mention Minjun Lee they'll know. Yes, I'll pass it on. Also, by any chance, does the professor have time tomorrow afternoon? Tomorrow between 2 and 4 PM seems to be free. Thank you. Take care!",
        dialogue: [
            { speaker: "조교", text: "안녕하세요, 한국학과입니다.", translation: "Hello, this is the Korean Studies department." },
            { speaker: "민준", text: "안녕하세요. 저는 이민준이라고 합니다. 혹시 박 교수님 계세요?", translation: "Hello. I'm Lee Minjun. Is Professor Park in by any chance?" },
            { speaker: "조교", text: "지금 회의 중이셔서 안 계세요.", translation: "They're in a meeting right now, so they're not available." },
            { speaker: "민준", text: "아, 그렇군요. 혹시 오늘 몇 시에 돌아오실 것 같으세요?", translation: "Ah, I see. Do you know what time they might return today?" },
            { speaker: "조교", text: "아마 4시쯤이실 것 같아요.", translation: "It'll probably be around 4 o'clock." },
            { speaker: "민준", text: "그럼 교수님께 제가 전화했다고 전해주실 수 있는데요? 이민준이라고 하면 아실 거예요.", translation: "In that case, could you let the professor know I called? If you mention Minjun Lee they'll know." },
            { speaker: "조교", text: "네, 전해드릴게요.", translation: "Yes, I'll pass it on." },
            { speaker: "민준", text: "그리고 혹시 교수님께서 내일 오후에 시간이 있으세요?", translation: "Also, by any chance, does the professor have time tomorrow afternoon?" },
            { speaker: "조교", text: "내일 오후 2시에서 4시는 비어 있으신 것 같아요.", translation: "Tomorrow between 2 and 4 PM seems to be free." },
            { speaker: "민준", text: "감사합니다. 수고하세요!", translation: "Thank you. Take care!" },
        ],
        questions: [
            { id: "ko-l-a2-3-q1", level: "A2", prompt: "Why is Professor Park not available right now?", options: ["The professor is teaching a class", "The professor is in a meeting", "The professor is away from campus", "The professor is on holiday"], answer: "The professor is in a meeting" },
            { id: "ko-l-a2-3-q2", level: "A2", prompt: "When does the assistant think the professor will return?", options: ["Around 3 o'clock", "Around 4 o'clock", "Around 5 o'clock", "Tomorrow morning"], answer: "Around 4 o'clock" },
            { id: "ko-l-a2-3-q3", level: "A2", prompt: "When is the professor free tomorrow?", options: ["All afternoon", "Between 2 and 4 PM", "Between 1 and 3 PM", "In the morning only"], answer: "Between 2 and 4 PM" },
        ]
    },
    {
        id: "ko-l-a2-4",
        level: "A2",
        title: "수진 씨의 이야기 — Sujin's Story",
        script: "이번 주가 정말 힘들었어요. 사실은요, 화요일 아침에 중요한 이메일을 쓰고 있었는데, 갑자기 상사분이 회의실로 부르셨어요. 그때 발표 준비가 아직 덜 됐었는데, 상사분이 오늘 발표하라고 하셨어요. 상사가 오늘 발표하라고 하니까 어쩔 수 없었어요. 그래서 점심도 제대로 못 먹고 자료를 준비했어요. 아는 사람도 없는 회의실에서 혼자 준비하는 동안 정말 떨렸어요. 발표 시간이 됐을 때, 솔직히 잘 될 것 같지 않았어요. 그런데 막상 시작하고 나서 생각보다 괜찮았어요. 상사분께서 발표가 끝난 다음에 잘 했다고 말씀해 주셨어요. 처음에 무서웠는데, 나중에는 자신감이 좀 생기게 됐어요. 그리고 이번 경험 덕분에 다음에는 좀 더 잘 준비하기로 했어요. 뭐랄까, 힘들었지만 배운 것 같아요.",
        translation: "This week was really hard. Actually, on Tuesday morning I was writing an important email, when my boss suddenly called me to the meeting room. The presentation preparation wasn't quite done yet at that point — and my boss told me to present today. Since the boss told me to present today, there was nothing I could do about it. So I couldn't eat a proper lunch and prepared the materials. While preparing alone in a meeting room where I didn't know anyone, I was really nervous. When it was time for the presentation, honestly, I didn't think it would go well. But once I actually started, it was better than I thought. After the presentation was over, my boss told me I did well. At first I was scared, but later I ended up gaining a bit of confidence. And thanks to this experience, I've decided to prepare better next time. How shall I put it — it was hard, but I feel like I learned something.",
        questions: [
            { id: "ko-l-a2-4-q1", level: "A2", prompt: "What was Sujin doing on Tuesday morning when something happened?", options: ["She was eating breakfast", "She was writing an important email", "She was preparing a presentation", "She was in a meeting"], answer: "She was writing an important email" },
            { id: "ko-l-a2-4-q2", level: "A2", prompt: "What did the boss tell Sujin to do?", options: ["Prepare for a meeting tomorrow", "Present today", "Write a report", "Call a client"], answer: "Present today" },
            { id: "ko-l-a2-4-q3", level: "A2", prompt: "How did the presentation actually go?", options: ["Very badly — Sujin failed", "Badly — the boss was unhappy", "Better than Sujin expected", "She couldn't do it at all"], answer: "Better than Sujin expected" },
            { id: "ko-l-a2-4-q4", level: "A2", prompt: "What did the boss say after the presentation?", options: ["Nothing — the boss left immediately", "The boss said Sujin did well", "The boss said to try again", "The boss was disappointed"], answer: "The boss said Sujin did well" },
        ]
    },
]
