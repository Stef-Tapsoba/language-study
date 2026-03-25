import { CultureEpisode } from "../../../../types"
export const jaCA14: CultureEpisode = {
    id: "ja-c-a1-4",
    language: "ja",
    level: "A1",
    category: "daily-life",
    region: "all-japanese",
    title: {
        native: "温泉 — Japan's Hot Spring Culture",
        target: "温泉 — おんせんのぶんか"
    },
    subtitle: "Soaking in an onsen is one of Japan's great pleasures — but there are important rules every visitor should know.",

    photos: [
        {
            url: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800",
            caption: {
                native: "A traditional outdoor onsen (rotenburo) surrounded by nature",
                target: "しぜんにかこまれたでんとうてきなろてんぶろ"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
            caption: {
                native: "A ryokan — a traditional Japanese inn with onsen facilities",
                target: "おんせんせつびのあるでんとうてきなにほんのりょかん"
            }
        }
    ],

    body: {
        target: `にほんはかざんのくにです。だから、おんせん（天然温泉）がたくさんあります。にほんぜんこくに3,000いじょうのおんせんちがあります。おんせんにはいることは、にほんじんのせいかつのたいせつなぶぶんです。

おんせんのルール：

まず、おふろにはいるまえに、かならずからだをあらいます。これはとてもたいせつなルールです。おふろのそとにシャワーとせっけんがあります。

つぎに、タオルをおゆのなかにいれてはいけません。タオルはあたまのうえにおいてもいいです。

タトゥー（いれずみ）があるひとは、はいれないおんせんがおおいです。にほんのでんとうでは、タトゥーはとくべつなイメージがあります。さいきんは、タトゥーOKのおんせんもふえています。

おんせんのしゅるい：

日帰り温泉（ひがえりおんせん）は、いちにちでいってかえることができるおんせんです。むかしのにほんのたてものやしぜんのなかにあります。

旅館（りょかん）は、でんとうてきなにほんのやどです。おんせんつきのりょかんにとまると、なんかいもおんせんにはいることができます。

混浴（こんよく）は、おとことおんながいっしょにはいるおんせんです。むかしはよくありましたが、いまはすくなくなっています。

天然温泉のかんばんをさがしてください。これはしぜんのおんせんというしるしです。`,
        native: `Japan is a country of volcanoes. That is why there are many onsen (natural hot springs). There are more than 3,000 onsen resorts across Japan. Bathing in an onsen is an important part of Japanese daily life.

Onsen rules:

First, you must wash your body thoroughly before entering the bath. This is a very important rule. Showers and soap are provided outside the bath area.

Next, you must not put a towel in the hot water. You may rest the towel on your head.

Many onsen do not allow people with tattoos. In Japanese tradition, tattoos carry a particular image. Recently, some onsen that allow tattoos have been increasing.

Types of onsen:

Higaeri onsen (day-trip onsen) are hot springs you can visit and return from in a single day. They are found in traditional Japanese buildings or in nature.

Ryokan are traditional Japanese inns. Staying at a ryokan with onsen facilities allows you to bathe multiple times.

Konnyoku (mixed bathing) is an onsen where men and women bathe together. It used to be common but has become rare today.

Look for the sign 天然温泉. This indicates a natural hot spring.`
    },

    simpleTarget: `にほんにはおんせんがたくさんあります。
おんせんはあたたかいおふろです。
おんせんにはいるまえに、からだをあらいます。
タオルをおゆのなかにいれません。
日帰り温泉はいちにちでいけるおんせんです。
旅館はでんとうてきなにほんのやどです。
「天然温泉」のかんばんをさがしてください。`,

    cultureVocab: [
        {
            word: "温泉 / おんせん",
            romanized: "onsen",
            translation: "hot spring, hot spring bath",
            culturalNote: "Onsen water is naturally heated by volcanic activity and often contains minerals believed to have health benefits. Each region's water has a different mineral composition and feel."
        },
        {
            word: "日帰り温泉",
            romanized: "higaeri onsen",
            translation: "day-trip onsen (visit and return same day)",
            culturalNote: "Day-trip onsen are accessible to everyone — even travellers without hotel bookings. Many are open until late evening, making them perfect for an evening soak after sightseeing."
        },
        {
            word: "旅館",
            romanized: "ryokan",
            translation: "traditional Japanese inn",
            culturalNote: "Staying in a ryokan is an experience in itself — yukata robes, multi-course kaiseki meals, and private or shared onsen. It is considered one of the best ways to experience traditional Japanese hospitality (omotenashi)."
        },
        {
            word: "天然温泉",
            romanized: "tennen onsen",
            translation: "natural hot spring",
            culturalNote: "The sign 天然温泉 guarantees the water is from a genuine geothermal source, not a heated tap-water bath. Look for this on signs outside facilities."
        },
        {
            word: "混浴",
            romanized: "konnyoku",
            translation: "mixed bathing (men and women together)",
            culturalNote: "Once a normal practice in Japan, konnyoku has become rare in modern times. Most onsen today have separate bathing areas for men and women."
        }
    ],

    questions: [
        {
            id: "ja-c-a1-4-q1",
            type: "comprehension",
            prompt: { native: "What must you do before entering an onsen bath?", target: "おんせんにはいるまえに、なにをしなければなりませんか？" },
            options: [
                "Pay a fee at the entrance",
                "Wash your body thoroughly",
                "Remove all jewellery",
                "Ask permission from the staff"
            ],
            answer: "Wash your body thoroughly"
        },
        {
            id: "ja-c-a1-4-q2",
            type: "comprehension",
            prompt: { native: "What does 天然温泉 indicate on an onsen sign?", target: "おんせんのかんばんに「天然温泉」とあるのはなにをしめしていますか？" },
            options: [
                "The onsen allows tattoos",
                "The onsen has mixed bathing",
                "The water is from a genuine natural geothermal source",
                "The onsen is free of charge"
            ],
            answer: "The water is from a genuine natural geothermal source"
        },
        {
            id: "ja-c-a1-4-q3",
            type: "reflection",
            prompt: { native: "Is communal bathing part of the culture in your country? How do you feel about the idea of an onsen?", target: "Is communal bathing part of the culture in your country? How do you feel about the idea of an onsen?" }
        }
    ],

    didYouKnow: {
        native: "Monkeys in Japan have discovered onsen too. In Nagano prefecture, the famous Jigokudani Monkey Park is home to wild Japanese macaques that soak in natural hot springs during winter — just like humans. The sight of snow monkeys relaxing in steaming water has become one of Japan's most iconic images.",
        target: "にほんのさるもおんせんをはっけんしました。ながのけんのゆうめいなじごくだにやえんには、ふゆにてんねんおんせんにつかるやせいのニホンザルがすんでいます — にんげんとおなじように。ゆきのなかでゆにつかるさるのすがたは、にほんのもっともしょうちょうてきなイメージのひとつになっています。"
    }
}
