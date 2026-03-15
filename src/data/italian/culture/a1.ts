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

        cultureVocab: [
            {
                word: "il bar",
                translation: "Italian café / coffee bar",
                culturalNote: "The Italian 'bar' is nothing like an English pub. It's open from 6am, serves coffee, pastries, lunch, and yes, alcohol — but it's primarily a coffee and social space."
            },
            {
                word: "il barista",
                translation: "coffee bar worker",
                culturalNote: "In Italy, 'barista' is a skilled profession. A good barista knows their regulars' orders, and the relationship between a neighbourhood and its barista can last decades."
            },
            {
                word: "il caffè sospeso",
                translation: "suspended coffee (paid forward for someone in need)",
                culturalNote: "A Neapolitan tradition of paying for an extra coffee that a stranger can collect later. Now practiced in cafés worldwide as an act of everyday generosity."
            },
            {
                word: "al banco",
                translation: "at the counter (standing)",
                culturalNote: "Drinking 'al banco' (standing at the bar counter) is cheaper than sitting at a table — the two-price system is legally allowed and universally practiced."
            },
            {
                word: "il cappuccino",
                translation: "espresso with steamed milk foam",
                culturalNote: "Named for the Capuchin friars, whose brown robes matched the colour. The rule against afternoon cappuccino is so strong that even Italian children know it."
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
                prompt: { native: "How do people drink coffee in your country? How is it different from Italian coffee culture?", target: "Come si beve il caffè nel tuo paese? In cosa è diverso dalla cultura del caffè italiana?" }
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

        cultureVocab: [
            {
                word: "il Risorgimento",
                translation: "the Italian unification movement (1815–1871)",
                culturalNote: "Literally 'the Resurgence'. The political movement that united the Italian peninsula into one kingdom, led by figures like Garibaldi and Cavour."
            },
            {
                word: "il dialetto",
                translation: "dialect",
                culturalNote: "Italian dialects are so distinct linguistically that many are considered separate languages. Venetian, Neapolitan and Sicilian are all recognised as regional languages by the EU."
            },
            {
                word: "il campanilismo",
                translation: "strong loyalty to one's own town/village",
                culturalNote: "From 'campanile' (bell tower) — the idea that your town's bell tower is the centre of the world. Italians often identify with their specific city or region before 'Italy'."
            },
            {
                word: "le arancine / gli arancini",
                translation: "Sicilian fried rice balls",
                culturalNote: "Even the name is contested: in Palermo they're 'arancine' (feminine), in Catania they're 'arancini' (masculine). A small but fierce cultural debate."
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
                prompt: { native: "Does your country have strong regional differences — in food, accent, or culture? How do people feel about these differences?", target: "Il tuo paese ha forti differenze regionali — nel cibo, nell'accento o nella cultura? Come si sentono le persone riguardo a queste differenze?" }
            }
        ],

        didYouKnow: {
            native: "When Italy unified in 1861, only about 2.5% of the population spoke what we now call 'Italian'. The rest spoke regional languages and dialects that were mutually unintelligible. It was mass conscription in WWI — putting men from all regions in the same trenches — and later television, that finally created a shared national language.",
            target: "Quando l'Italia si unificò nel 1861, solo circa il 2,5% della popolazione parlava quello che oggi chiamiamo 'italiano'. Il resto parlava lingue regionali e dialetti reciprocamente incomprensibili. Fu la coscrizione di massa nella Prima Guerra Mondiale — mettere uomini di tutte le regioni nelle stesse trincee — e poi la televisione, a creare finalmente una lingua nazionale condivisa."
        }
    }
]

