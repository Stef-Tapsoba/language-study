import { CultureEpisode } from "../../../../types"

export const itCA21: CultureEpisode = {
    id: "it-c-a2-1",
    language: "it",
    level: "A2",
    category: "food",
    region: "all-italian",
    title: {
        native: "Il caffè italiano",
        target: "Il caffè italiano — rituale, regole e vita sociale"
    },
    subtitle: "In Italy, coffee is not just a drink — it is a social institution with unwritten rules that every Italian knows by heart.",
    photos: [
        {
            url: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800",
            caption: {
                native: "A freshly pulled espresso at an Italian bar counter",
                target: "Un espresso appena estratto al bancone di un bar italiano"
            },
            credit: "Unsplash"
        },
        {
            url: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=800",
            caption: {
                native: "Cappuccino — only acceptable before 11am in Italian culture",
                target: "Cappuccino — accettabile solo prima delle undici nella cultura italiana"
            },
            credit: "Unsplash"
        },
        {
            url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800",
            caption: {
                native: "The Italian bar — the beating heart of neighbourhood social life",
                target: "Il bar italiano — il cuore pulsante della vita sociale del quartiere"
            },
            credit: "Unsplash"
        }
    ],
    body: {
        target: "In Italia, il caffè è molto più di una bevanda. È un rituale quotidiano con regole precise che ogni italiano conosce fin da bambino.\n\nIl caffè italiano per eccellenza è l'espresso: una piccola tazza di circa venticinque millilitri, intensa e densa. Si ordina semplicemente dicendo «un caffè», e il barista sa cosa fare. Lo si beve in piedi al bancone in uno o due minuti, poi si va al lavoro. Sedersi a un tavolo per un espresso è possibile, ma costa di più.\n\nLa regola più famosa riguarda il cappuccino: si beve solo al mattino, prima delle undici. Mai dopo pranzo, mai dopo cena. Gli italiani credono che il latte nel cappuccino sia troppo pesante per lo stomaco dopo un pasto. Se un turista ordina un cappuccino alle tre del pomeriggio, il barista lo serve — ma con una certa sorpresa.\n\nIl bar italiano non è come un pub inglese o un caffè americano. Apre molto presto, spesso alle sei del mattino, e serve colazione, caffè, pranzo veloce e dolci. È un punto di incontro sociale: le persone parlano con il barista, leggono il giornale, si trovano con gli amici.\n\nA Napoli, il caffè ha una dimensione quasi spirituale. La tradizione del «caffè sospeso» — pagare in anticipo un caffè per una persona sconosciuta che non può permetterselo — è un gesto di solidarietà tipicamente napoletano che si è diffuso in tutto il mondo.",
        native: "In Italy, coffee is much more than a drink. It is a daily ritual with precise rules that every Italian knows from childhood.\n\nThe Italian coffee par excellence is espresso: a small cup of about twenty-five millilitres, intense and dense. It is ordered simply by saying 'un caffè', and the barista knows what to do. You drink it standing at the counter in one or two minutes, then go to work. Sitting at a table for an espresso is possible, but costs more.\n\nThe most famous rule concerns cappuccino: it is only drunk in the morning, before eleven o'clock. Never after lunch, never after dinner. Italians believe that the milk in cappuccino is too heavy on the stomach after a meal. If a tourist orders a cappuccino at three in the afternoon, the barista serves it — but with a certain surprise.\n\nThe Italian bar is not like an English pub or an American coffee shop. It opens very early, often at six in the morning, and serves breakfast, coffee, a quick lunch and pastries. It is a social meeting point: people chat with the barista, read the newspaper, meet friends.\n\nIn Naples, coffee has an almost spiritual dimension. The tradition of 'caffè sospeso' — paying in advance for a coffee for an unknown person who cannot afford it — is a typically Neapolitan gesture of solidarity that has spread around the world."
    },
    cultureVocab: [
        {
            word: "il caffè / l'espresso",
            translation: "coffee / espresso",
            culturalNote: "In Italy, 'un caffè' always means an espresso. Asking for 'un espresso' is slightly redundant but perfectly understood. Americano, lungo, and macchiato are variations on the espresso, not separate traditions."
        },
        {
            word: "il bar",
            translation: "café, coffee bar",
            culturalNote: "The Italian 'bar' is open from early morning and serves coffee, pastries, sandwiches, and alcohol. It is the social hub of any Italian neighbourhood — nothing like a British pub."
        },
        {
            word: "il cappuccino",
            translation: "espresso with steamed milk and foam",
            culturalNote: "Named after the Capuchin friars, whose habits matched the warm brown colour. The strict morning-only rule is so deeply cultural that even young children learn it early."
        },
        {
            word: "al bancone",
            translation: "at the counter (standing)",
            culturalNote: "Drinking 'al bancone' is cheaper than sitting at a table — a legally permitted two-tier price system that has existed for decades. Most Italians drink their daily espresso this way."
        },
        {
            word: "il caffè sospeso",
            translation: "suspended coffee (a prepaid coffee for someone in need)",
            culturalNote: "A Neapolitan tradition of anonymous generosity: you pay for an extra coffee that a stranger can later claim. The custom has spread to cafés in dozens of countries worldwide."
        }
    ],
    questions: [
        {
            id: "it-c-a2-1-q1",
            type: "comprehension",
            prompt: {
                native: "According to Italian coffee culture, when should you NOT drink a cappuccino?",
                target: "Secondo la cultura del caffè italiana, quando NON si dovrebbe bere un cappuccino?"
            },
            options: [
                "In the morning before work",
                "After lunch or dinner",
                "At the bar counter",
                "With a pastry"
            ],
            answer: "After lunch or dinner"
        },
        {
            id: "it-c-a2-1-q2",
            type: "comprehension",
            prompt: {
                native: "What is a 'caffè sospeso'?",
                target: "Che cos'è un 'caffè sospeso'?"
            },
            options: [
                "A very strong double espresso",
                "A coffee served cold over ice",
                "A coffee paid for in advance for someone who cannot afford it",
                "A coffee made with suspended coffee grounds"
            ],
            answer: "A coffee paid for in advance for someone who cannot afford it"
        },
        {
            id: "it-c-a2-1-q3",
            type: "reflection",
            prompt: {
                native: "Do you have a daily ritual involving food or drink in your culture? How does it compare to the Italian coffee ritual?",
                target: "Hai un rituale quotidiano legato al cibo o alle bevande nella tua cultura? Come si confronta con il rituale del caffè italiano?"
            }
        }
    ]
}
