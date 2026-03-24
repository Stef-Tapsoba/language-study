import { CultureEpisode } from "../../../../types"
export const itCA11: CultureEpisode = {
    id: "it-c-a1-1",
    language: "it",
    level: "A1",
    category: "daily-life",
    region: "all-italian",
    title: {
        native: "Il caffè italiano — più di una bevanda",
        target: "Il caffè italiano"
    },
    subtitle: "In Italy, coffee is a ritual with unwritten rules — and ordering it wrong will tell everyone you're a tourist.",

    video: {
        youtubeId: "C64LaSfpDvU",
        title: "How to Order Espresso Like An Italian",
        channelName: "NowThis Impact",
        captionLang: "it"
    },

    photos: [
        {
            url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800",
            caption: {
                native: "An espresso at the bar — drunk standing up in less than a minute",
                target: "Un espresso al bar — bevuto in piedi in meno di un minuto"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
            caption: {
                native: "A cappuccino — only acceptable before 11am in Italy",
                target: "Un cappuccino — accettabile solo prima delle 11 in Italia"
            }
        }
    ],

    body: {
        target: `In Italia, il caffè non è solo una bevanda. È un rituale sociale con regole precise.

Il caffè italiano è l'espresso. È piccolo — circa 25 millilitri — e molto forte. Si beve in piedi al bar, in pochi minuti. Non si siede per bere un espresso in Italia. O meglio: si può sedere, ma costa di più.

Le regole del caffè italiano sono famose nel mondo. La regola più importante: il cappuccino si beve solo al mattino, prima delle undici. Non dopo pranzo, non dopo cena. Se ordini un cappuccino alle tre del pomeriggio, il barista ti guarda con sorpresa — e tutti sanno che sei straniero.

Perché questa regola? Gli italiani credono che il latte del cappuccino sia pesante per lo stomaco. Dopo un pasto, si beve l'espresso, non il cappuccino.

Il bar italiano è il centro della vita sociale. Le persone vanno al bar per un caffè veloce al mattino, per parlare con il barista, per leggere il giornale. Il caffè costa poco — circa un euro — perché il bar guadagna dal volume, non dal prezzo.

In Italia, il caffè "normale" è l'espresso. Se vuoi un caffè lungo come in America o nel nord Europa, devi chiedere un "caffè americano" — e il barista probabilmente farà una faccia.

Il Nord e il Sud d'Italia hanno tradizioni diverse. A Napoli, il caffè è una istituzione quasi religiosa. La "Napoli coffee ceremony" è famosa: il caffè sospeso — pagare un caffè in anticipo per una persona che non può permetterselo — è una tradizione napoletana di solidarietà sociale.`,
        native: `In Italy, coffee is not just a drink. It is a social ritual with precise rules.

Italian coffee is espresso. It is small — about 25 millilitres — and very strong. It is drunk standing at the bar, in a few minutes. You don't sit down to drink an espresso in Italy. Or rather: you can sit, but it costs more.

The rules of Italian coffee are famous around the world. The most important rule: cappuccino is only drunk in the morning, before eleven o'clock. Not after lunch, not after dinner. If you order a cappuccino at three in the afternoon, the barista looks at you in surprise — and everyone knows you're a foreigner.

Why this rule? Italians believe that the milk in the cappuccino is heavy on the stomach. After a meal, you drink an espresso, not a cappuccino.

The Italian bar is the centre of social life. People go to the bar for a quick coffee in the morning, to talk to the barista, to read the newspaper. Coffee costs little — about one euro — because the bar earns through volume, not price.

In Italy, "normal" coffee is an espresso. If you want a long coffee like in America or northern Europe, you have to ask for a "caffè americano" — and the barista will probably make a face.

Northern and Southern Italy have different traditions. In Naples, coffee is an almost religious institution. The "Napoli coffee ceremony" is famous: the caffè sospeso — paying for a coffee in advance for someone who cannot afford it — is a Neapolitan tradition of social solidarity.`
    },

    simpleTarget: `In Italia, il caffè è molto importante.
Gli italiani bevono il caffè ogni giorno.
Il bar è un posto centrale nella vita italiana.
Un espresso è piccolo e molto forte.
Il cappuccino si beve solo al mattino.
Il bar apre la mattina presto.
Un caffè in Italia costa circa un euro.`,

    cultureVocab: [
        {
            word: "il caffè",
            translation: "coffee / café",
            culturalNote: "In Italian, 'caffè' means both the drink (espresso) and the place (the bar). Ordering 'un caffè' always means an espresso — you must specify if you want anything else."
        },
        {
            word: "il bar",
            translation: "Italian café / coffee bar",
            culturalNote: "The Italian 'bar' is open from 6am and serves coffee, pastries, and lunch. It is the centre of neighbourhood social life — most Italians visit their local bar every morning."
        },
        {
            word: "l'espresso",
            translation: "espresso (strong, small coffee)",
            culturalNote: "The standard Italian coffee — about 25ml, drunk standing at the counter in under a minute. Sitting at a table to drink it costs more and is considered a tourist habit."
        },
        {
            word: "il cappuccino",
            translation: "espresso with steamed milk foam",
            culturalNote: "Named for the Capuchin friars, whose brown robes matched the colour. The rule against drinking cappuccino after 11am is so strong that even Italian children know it."
        },
        {
            word: "il mattino",
            translation: "the morning",
            culturalNote: "The morning bar visit is sacred in Italy. A quick espresso and a cornetto (Italian croissant) at the bar counter is how millions of Italians start every single day."
        }
    ],

    questions: [
        {
            id: "it-c-a1-1-q1",
            type: "comprehension",
            prompt: { native: "Until what time is it acceptable to drink a cappuccino in Italy?", target: "Fino a che ora è accettabile bere un cappuccino in Italia?" },
            options: ["8am", "11am", "1pm", "3pm"],
            answer: "11am"
        },
        {
            id: "it-c-a1-1-q2",
            type: "comprehension",
            prompt: { native: "What is a 'caffè sospeso'?", target: "Che cos'è un 'caffè sospeso'?" },
            options: [
                "A very strong espresso",
                "A coffee served cold",
                "A coffee paid for in advance for someone who can't afford it",
                "A coffee with alcohol added"
            ],
            answer: "A coffee paid for in advance for someone who can't afford it"
        },
        {
            id: "it-c-a1-1-q3",
            type: "comparison",
            prompt: { native: "How do people drink coffee in your country? How is it different from Italian coffee culture?", target: "How do people drink coffee in your country? How is it different from Italian coffee culture?" }
        }
    ],

    didYouKnow: {
        native: "Italy has no Starbucks tradition — the first Starbucks opened in Milan only in 2018, and it had to present itself as a 'Reserve Roastery' (a premium concept store) rather than a standard café, specifically to avoid comparison with Italian espresso bars. Italians largely consider American filter coffee to be hot water.",
        target: "L'Italia non ha una tradizione Starbucks — il primo Starbucks ha aperto a Milano solo nel 2018, e ha dovuto presentarsi come 'Reserve Roastery' (un concept store premium) piuttosto che come un normale bar, per evitare il confronto con i bar espresso italiani. Gli italiani considerano in gran parte il caffè filtro americano come acqua calda."
    }
}
