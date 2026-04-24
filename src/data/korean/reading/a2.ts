// src/data/korean/reading/a2.ts — Korean A2 redesign
// 5 reading passages covering A2 grammar and communicative themes.

import { ReadingPassage } from "../../../types"

export const a2Reading: ReadingPassage[] = [
    {
        id: "ko-r-a2-1",
        level: "A2",
        category: "everyday",
        title: "요즘 어떻게 지내요? (How are you these days?)",
        body: {
            target: "저는 요즘 한국어를 열심히 공부하고 있어요. 매일 아침 한 시간씩 공부하기로 했어요. 처음에는 발음하기 어려웠는데, 요즘은 많이 좋아졌어요. 지난주에는 처음으로 한국 친구랑 전화로 이야기했어요. 긴장했는데 생각보다 잘 됐어요. 친구가 천천히 말해 주어서 이해할 수 있었어요. 앞으로도 계속 열심히 하기로 했어요. 한국에 가 보고 싶어서 더 잘하고 싶어요.",
            native: "These days I'm studying Korean diligently. I decided to study one hour every morning. At first it was hard to pronounce, but lately it's gotten much better. Last week I talked on the phone with a Korean friend for the first time. I was nervous but it went better than expected. My friend spoke slowly for me, so I could understand. I've decided to keep going hard from now on. I want to go to Korea, so I want to get better."
        },
        vocabGloss: [
            { word: "열심히", translation: "diligently, hard", romanized: "yeolsimhi" },
            { word: "매일", translation: "every day", romanized: "maeil" },
            { word: "처음에는", translation: "at first", romanized: "cheoeum-eneun" },
            { word: "생각보다", translation: "more than expected, better than I thought", romanized: "saenggakboda" },
            { word: "천천히", translation: "slowly", romanized: "cheoncheonhi" },
            { word: "이해하다", translation: "to understand", romanized: "ihaehada" },
            { word: "앞으로도", translation: "from now on, going forward", romanized: "apeurodo" },
        ],
        questions: [
            { id: "ko-r-a2-1-q1", level: "A2", prompt: "How much does the writer study every morning?", options: ["30 minutes", "One hour", "Two hours", "Three hours"], answer: "One hour" },
            { id: "ko-r-a2-1-q2", level: "A2", prompt: "What happened last week?", options: ["The writer went to Korea", "The writer talked with a Korean friend on the phone", "The writer passed a test", "The writer met a new teacher"], answer: "The writer talked with a Korean friend on the phone" },
            { id: "ko-r-a2-1-q3", level: "A2", prompt: "Why could the writer understand the conversation?", options: ["The friend spoke clearly", "The friend spoke slowly", "The friend used simple words", "The friend sent a message"], answer: "The friend spoke slowly" },
        ]
    },
    {
        id: "ko-r-a2-2",
        level: "A2",
        category: "everyday",
        title: "한국 여행 계획 (Korea Travel Plans)",
        body: {
            target: "저는 내년 봄에 한국에 갈 예정이에요. 오래전부터 가 보고 싶었는데, 드디어 계획을 세웠어요. 서울에서 3일, 부산에서 2일 있을 생각이에요. 서울에서는 경복궁에 가서 한복을 입어 볼 거예요. 그리고 홍대에서 친구들이랑 맛있는 음식을 먹을 예정이에요. 부산에서는 해운대 해변에 갈 생각이에요. 아직 가 본 적이 없어서 정말 기대돼요. 여행 전에 한국어를 더 공부해야 해서 요즘 매일 공부하고 있어요.",
            native: "I'm scheduled to go to Korea next spring. I'd been wanting to go for a long time and I've finally made plans. I'm thinking of spending 3 days in Seoul and 2 days in Busan. In Seoul I'm going to go to Gyeongbokgung and try wearing hanbok. And I'm scheduled to eat delicious food in Hongdae with friends. In Busan I'm thinking of going to Haeundae Beach. I've never been there, so I'm really excited. I have to study Korean more before the trip, so I'm studying every day these days."
        },
        vocabGloss: [
            { word: "내년", translation: "next year", romanized: "naenyeon" },
            { word: "드디어", translation: "finally, at last", romanized: "deudieо" },
            { word: "계획을 세우다", translation: "to make a plan", romanized: "gyehoekeul seuda" },
            { word: "한복", translation: "traditional Korean clothing", romanized: "hanbok" },
            { word: "해운대", translation: "Haeundae (famous beach in Busan)", romanized: "Haeundae" },
            { word: "기대되다", translation: "to be excited/look forward to", romanized: "gidae-doeda" },
        ],
        questions: [
            { id: "ko-r-a2-2-q1", level: "A2", prompt: "When is the writer planning to go to Korea?", options: ["This summer", "Next spring", "Next autumn", "Next winter"], answer: "Next spring" },
            { id: "ko-r-a2-2-q2", level: "A2", prompt: "What does the writer want to try in Seoul?", options: ["Eating street food", "Wearing hanbok", "Going to a concert", "Visiting a museum"], answer: "Wearing hanbok" },
            { id: "ko-r-a2-2-q3", level: "A2", prompt: "Why is the writer studying Korean every day?", options: ["Because Korean is fun", "Because they have a test", "Because they need to study before the trip", "Because they live in Korea"], answer: "Because they need to study before the trip" },
        ]
    },
    {
        id: "ko-r-a2-3",
        level: "A2",
        category: "everyday",
        title: "달라진 나 (A Changed Me)",
        body: {
            target: "1년 전에 저는 한국 음식을 별로 좋아하지 않았어요. 김치는 먹어 본 적도 없었고, 고추장은 너무 맵다고 생각했어요. 그런데 한국 친구를 사귀게 됐는데, 그 친구가 계속 한국 음식을 소개해 줬어요. 처음에는 억지로 먹어 봤는데, 점점 맛있어졌어요. 지금은 한국 음식을 제일 좋아해요. 삼겹살이랑 된장찌개를 먹어 본 적이 있는데 둘 다 정말 맛있었어요. 이제 한국 요리를 배워 보고 싶어요. 사람마다 입맛이 다르지만, 저는 한국 음식이 제 입맛에 딱 맞는 것 같아요.",
            native: "A year ago I didn't really like Korean food. I had never tried kimchi, and I thought gochujang was too spicy. But I came to make a Korean friend, and that friend kept introducing me to Korean food. At first I tried eating it reluctantly, but gradually it got more and more delicious. Now I like Korean food the most. I've tried samgyeopsal and doenjang jjigae — both were really delicious. Now I want to try learning Korean cooking. Every person has different tastes, but I think Korean food is a perfect match for mine."
        },
        vocabGloss: [
            { word: "별로", translation: "not really, not particularly (with negative)", romanized: "byeollo" },
            { word: "사귀다", translation: "to make friends with, befriend", romanized: "saguida" },
            { word: "억지로", translation: "reluctantly, forcibly", romanized: "eokjiro" },
            { word: "점점", translation: "gradually, more and more", romanized: "jeomjeom" },
            { word: "입맛", translation: "taste (in food), palate", romanized: "immmat" },
            { word: "딱 맞다", translation: "to be a perfect fit/match", romanized: "ttak matda" },
        ],
        questions: [
            { id: "ko-r-a2-3-q1", level: "A2", prompt: "Why did the writer change their opinion about Korean food?", options: ["They went to Korea", "A Korean friend kept introducing Korean food", "They watched a cooking show", "They took a Korean cooking class"], answer: "A Korean friend kept introducing Korean food" },
            { id: "ko-r-a2-3-q2", level: "A2", prompt: "What Korean foods has the writer tried? (according to the text)", options: ["Only kimchi", "Samgyeopsal and doenjang jjigae", "Bibimbap and tteokbokki", "Only Korean BBQ"], answer: "Samgyeopsal and doenjang jjigae" },
            { id: "ko-r-a2-3-q3", level: "A2", prompt: "What does the writer want to do now?", options: ["Open a Korean restaurant", "Move to Korea", "Try learning Korean cooking", "Stop eating Korean food"], answer: "Try learning Korean cooking" },
        ]
    },
    {
        id: "ko-r-a2-4",
        level: "A2",
        category: "culture",
        title: "회사 생활 (Office Life in Korea)",
        body: {
            target: "한국 회사 생활은 좀 특별해요. 상사한테서 연락이 오면 빨리 답장해야 해요. 회의가 끝난 다음에는 항상 정리를 해야 하고, 보고서를 제출해야 해요. 퇴근 후에 회식을 하는 것이 일반적이에요. 회식에서는 음식을 먹으면서 같이 이야기를 나눠요. 선배한테 술을 드릴 때는 두 손으로 드려야 해요. 상사가 먼저 드시고 나서 후배들이 먹기 시작해요. 처음에는 어렵게 느껴질 수 있는데, 익숙해지면 괜찮아요.",
            native: "Office life in Korean companies is a bit special. When you receive a message from your boss, you need to reply quickly. After meetings finish, you always have to do a write-up and submit a report. It is common to have a team dinner after work. At team dinners everyone eats food together and talks. When offering alcohol to a senior, you must do so with both hands. The boss eats first and then the juniors begin to eat. It may feel difficult at first, but once you get used to it, it's fine."
        },
        vocabGloss: [
            { word: "상사", translation: "boss, superior", romanized: "sangsa" },
            { word: "답장하다", translation: "to reply (to a message)", romanized: "dapjang-hada" },
            { word: "퇴근 후", translation: "after work, after leaving the office", romanized: "toеgeun hu" },
            { word: "회식", translation: "company/team dinner", romanized: "hoesik" },
            { word: "선배", translation: "senior (at school/work)", romanized: "seonbae" },
            { word: "두 손으로", translation: "with both hands", romanized: "du soneuro" },
            { word: "익숙해지다", translation: "to get used to, become familiar", romanized: "iksukhae jida" },
        ],
        questions: [
            { id: "ko-r-a2-4-q1", level: "A2", prompt: "What must you do when you receive a message from your boss?", options: ["Call back immediately", "Reply quickly", "Wait and reply the next day", "Ask a colleague first"], answer: "Reply quickly" },
            { id: "ko-r-a2-4-q2", level: "A2", prompt: "At a Korean team dinner, who eats first?", options: ["The youngest person", "The newest employee", "The boss/senior person", "Everyone at the same time"], answer: "The boss/senior person" },
            { id: "ko-r-a2-4-q3", level: "A2", prompt: "How should you offer alcohol to a senior person in Korea?", options: ["With your right hand only", "With your left hand only", "With both hands", "With a bow only"], answer: "With both hands" },
        ]
    },
    {
        id: "ko-r-a2-5",
        level: "A2",
        category: "everyday",
        title: "제 친구 지훈이 (My Friend Jihun)",
        body: {
            target: "제 친구 지훈이는 서울에 사는 사람이에요. 대학교 때 처음 만난 친구인데, 지금도 자주 연락하는 사이예요. 지훈이는 요즘 새 직장에 다니기 시작했는데, 일이 많아서 바쁜 것 같아요. 저한테 문자를 보내서 '요즘 회의가 너무 많아서 힘들다'고 했어요. 주말에 만나자고 했는데, 이번 주는 안 된다고 했어요. 그래도 다음 주에는 같이 밥을 먹기로 했어요. 지훈이가 좋아하는 식당에 갈 예정이에요. 오랫동안 못 봤는데 빨리 만나고 싶어요.",
            native: "My friend Jihun is someone who lives in Seoul. He's a friend I first met during university, and we're still in frequent contact. Jihun has recently started at a new job and it seems like he's busy because there's a lot of work. He sent me a text saying 'there are so many meetings lately, it's tough'. I suggested meeting on the weekend, but he said this week doesn't work. Even so, we've decided to eat together next week. We're planning to go to the restaurant Jihun likes. We haven't seen each other in a long time and I want to meet up soon."
        },
        vocabGloss: [
            { word: "사이", translation: "relationship, terms (between people)", romanized: "sai" },
            { word: "다니기 시작하다", translation: "to start going (to school/work)", romanized: "danigi sijakhada" },
            { word: "문자", translation: "text message", romanized: "munja" },
            { word: "힘들다", translation: "to be tough, hard", romanized: "himdeulda" },
            { word: "오랫동안", translation: "for a long time", romanized: "oraetdongan" },
        ],
        questions: [
            { id: "ko-r-a2-5-q1", level: "A2", prompt: "Where did the writer first meet Jihun?", options: ["At work", "At high school", "During university", "Through a mutual friend"], answer: "During university" },
            { id: "ko-r-a2-5-q2", level: "A2", prompt: "What did Jihun say in his text message?", options: ["He wants to meet this week", "There are too many meetings and it's tough", "He started studying Korean", "He changed his phone number"], answer: "There are too many meetings and it's tough" },
            { id: "ko-r-a2-5-q3", level: "A2", prompt: "What have the writer and Jihun decided to do?", options: ["Meet this weekend", "Eat together next week at Jihun's favourite restaurant", "Study Korean together", "Go on a trip to Busan"], answer: "Eat together next week at Jihun's favourite restaurant" },
        ]
    },
]
