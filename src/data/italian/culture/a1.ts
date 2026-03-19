// ─────────────────────────────────────────────────────────────────────────────
// ITALIAN A1 CULTURE
// src/data/italian/culture/a1.ts
// ─────────────────────────────────────────────────────────────────────────────
import { CultureEpisode } from "../../../types"
export const itA1Culture: CultureEpisode[] = [
    {
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
    },

    {
        id: "it-c-a1-2",
        language: "it",
        level: "A1",
        category: "geography",
        region: "north-italy",
        title: {
            native: "Nord e Sud — l'Italia sono due paesi?",
            target: "Nord e Sud — due Italie?"
        },
        subtitle: "Italy only unified as one country in 1861 — and the north-south divide still shapes everything from politics to pasta shapes.",

        video: {
            youtubeId: "",
            title: "",
            channelName: "",
            captionLang: "it"
        },

        photos: [
            {
                url: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800",
                caption: {
                    native: "Milan — Italy's northern economic capital",
                    target: "Milano — la capitale economica del Nord Italia"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800",
                caption: {
                    native: "A village in Sicily — Southern Italy's largest island",
                    target: "Un paese in Sicilia — la più grande isola del Sud Italia"
                }
            }
        ],

        body: {
            target: `Molte persone pensano all'Italia come a un paese unito. Ma la storia è più complicata.

L'Italia è diventata un paese unito solo nel 1861. Prima, il territorio era diviso in molti stati diversi: il Regno di Sardegna al nord, il Granducato di Toscana al centro, il Regno delle Due Sicilie al sud. Ogni stato aveva la propria lingua, la propria cucina e la propria cultura.

Oggi, le differenze tra Nord e Sud sono ancora molto visibili.

Al nord — Milano, Torino, Bologna — c'è l'industria, la finanza e la moda. Il PIL del nord è simile al PIL della Germania. Le persone lavorano molto e mangiano in fretta.

Al sud — Napoli, Palermo, Bari — la vita è diversa. Il ritmo è più lento. Le famiglie sono più importanti. Il cibo è diverso. La pasta al sud è con il sugo di pomodoro. Al nord, la pasta è spesso con il ragù di carne o con il burro.

Anche i dialetti sono diversi. Il milanese, il veneziano, il napoletano e il siciliano sono così diversi che storicamente non si capivano. L'italiano standard — basato sul toscano di Dante e Petrarca — è la lingua ufficiale, ma i dialetti sono ancora vivi.

Per i turisti, questa diversità è un tesoro. Ogni regione ha la sua cucina, la sua architettura, la sua musica. La pizza di Napoli è diversa dalla focaccia di Genova. Il risotto di Milano è diverso dalle arancine di Palermo.

L'Italia non è un paese — è una collezione di culture straordinarie in uno spazio relativamente piccolo.`,
            native: `Many people think of Italy as a united country. But the history is more complicated.

Italy only became a united country in 1861. Before that, the territory was divided into many different states: the Kingdom of Sardinia in the north, the Grand Duchy of Tuscany in the centre, the Kingdom of the Two Sicilies in the south. Each state had its own language, its own cuisine and its own culture.

Today, the differences between North and South are still very visible.

In the north — Milan, Turin, Bologna — there is industry, finance and fashion. The GDP of the north is similar to Germany's GDP. People work a lot and eat quickly.

In the south — Naples, Palermo, Bari — life is different. The pace is slower. Families are more important. The food is different. Pasta in the south is with tomato sauce. In the north, pasta is often with meat ragù or with butter.

Even the dialects are different. Milanese, Venetian, Neapolitan and Sicilian are so different that historically people couldn't understand each other. Standard Italian — based on the Tuscan of Dante and Petrarch — is the official language, but dialects are still alive.

For tourists, this diversity is a treasure. Each region has its own cuisine, its architecture, its music. Neapolitan pizza is different from Genoese focaccia. Milanese risotto is different from Palermitan arancine.

Italy is not one country — it is a collection of extraordinary cultures in a relatively small space.`
        },

        simpleTarget: `L'Italia è un paese grande e molto diverso.
Al nord ci sono Milano e Torino.
Al sud ci sono Napoli e Palermo.
Il nord e il sud hanno culture diverse.
Al nord, la gente mangia risotto e polenta.
Al sud, la gente mangia pizza e pasta al pomodoro.
Ogni regione in Italia ha la sua cucina speciale.`,

        cultureVocab: [
            {
                word: "il nord",
                translation: "the north (of Italy)",
                culturalNote: "Northern Italy — Milan, Turin, Bologna — is one of the richest regions in Europe. It is known for industry, fashion, and rice-based dishes like risotto and polenta."
            },
            {
                word: "il sud",
                translation: "the south (of Italy)",
                culturalNote: "Southern Italy — Naples, Palermo, Bari — has a slower pace of life and a stronger family culture. It gave the world pizza, mozzarella, and pasta al pomodoro."
            },
            {
                word: "la regione",
                translation: "region",
                culturalNote: "Italy has 20 regions, each with its own flag, cuisine, and identity. Many Italians identify as 'Neapolitan' or 'Sicilian' before they identify as 'Italian'."
            },
            {
                word: "la cucina",
                translation: "cuisine, kitchen",
                culturalNote: "Italian 'cucina' means both 'kitchen' and 'cuisine' — the two are inseparable. Every Italian region has its own cucina, fiercely defended as the best in the country."
            },
            {
                word: "la pasta al pomodoro",
                translation: "pasta with tomato sauce",
                culturalNote: "The definitive dish of southern Italy. In the north, pasta is more often served with butter, cream, or meat ragù. This north/south divide is one of Italy's most delicious arguments."
            }
        ],

        questions: [
            {
                id: "it-c-a1-2-q1",
                type: "comprehension",
                prompt: { native: "When did Italy become a unified country?", target: "Quando è diventata l'Italia un paese unito?" },
                options: ["1776", "1815", "1861", "1945"],
                answer: "1861"
            },
            {
                id: "it-c-a1-2-q2",
                type: "reflection",
                prompt: { native: "Does your country have strong regional differences — in food, accent, or culture? How do people feel about these differences?", target: "Does your country have strong regional differences — in food, accent, or culture? How do people feel about these differences?" }
            }
        ],

        didYouKnow: {
            native: "When Italy unified in 1861, only about 2.5% of the population spoke what we now call 'Italian'. The rest spoke regional languages and dialects that were mutually unintelligible. It was mass conscription in WWI — putting men from all regions in the same trenches — and later television, that finally created a shared national language.",
            target: "Quando l'Italia si unificò nel 1861, solo circa il 2,5% della popolazione parlava quello che oggi chiamiamo 'italiano'. Il resto parlava lingue regionali e dialetti reciprocamente incomprensibili. Fu la coscrizione di massa nella Prima Guerra Mondiale — mettere uomini di tutte le regioni nelle stesse trincee — e poi la televisione, a creare finalmente una lingua nazionale condivisa."
        }
    }
]

