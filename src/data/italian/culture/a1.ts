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
    },

    {
        id: "it-c-a1-3",
        language: "it",
        level: "A1",
        category: "customs",
        region: "all-italian",
        title: {
            native: "I gesti italiani — comunicare con le mani",
            target: "I gesti italiani — comunicare con le mani"
        },
        subtitle: "Italians are famous for talking with their hands — but each gesture has a precise meaning that every visitor should know.",

        video: {
            youtubeId: "",
            title: "",
            channelName: "",
            captionLang: "it"
        },

        photos: [
            {
                url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
                caption: {
                    native: "Italians use gestures as a natural part of conversation",
                    target: "Gli italiani usano i gesti come parte naturale della conversazione"
                }
            }
        ],

        body: {
            target: `In Italia, le mani parlano. I gesti sono una parte importante della comunicazione italiana — non un'aggiunta, ma una parte essenziale del messaggio.

Il gesto più famoso nel mondo è il "gesto del carciofo": le cinque dita unite, con il palmo rivolto verso l'alto, mosse su e giù. In Italia questo gesto significa "cosa vuoi?" o "cosa stai dicendo?". Non è scortese — è normale.

Un altro gesto comune è il "gesto del denaro": strofinare il pollice contro l'indice e il medio. Significa "costa molto" o "ci vuole denaro".

Il gesto della mano al mento — muovere il dorso della mano verso l'esterno sotto il mento — significa "non me ne importa niente" o "vai via". Questo gesto può sembrare offensivo se non si conosce il contesto.

Il gesto di portare le dita unite alla bocca, come per un bacio, significa che qualcosa è buonissimo — il cibo, il vino, una persona bella. È il modo italiano di dire "magnifico!".

I gesti italiani cambiano un poco da regione a regione. Al sud, i gesti sono spesso più espressivi. Al nord, le persone gesticolano meno. Ma in tutta Italia, parlare senza le mani sembra strano.

Per uno straniero, imparare i gesti italiani è importante quanto imparare le parole. Un gesto sbagliato può creare confusione o — a volte — ofendere qualcuno senza volerlo.`,
            native: `In Italy, hands speak. Gestures are an important part of Italian communication — not an addition, but an essential part of the message.

The most famous gesture in the world is the "artichoke gesture": five fingers together, palm facing upward, moved up and down. In Italy this gesture means "what do you want?" or "what are you saying?". It is not rude — it is normal.

Another common gesture is the "money gesture": rubbing the thumb against the index and middle fingers. It means "it costs a lot" or "it requires money".

The hand-to-chin gesture — moving the back of the hand outward under the chin — means "I don't care" or "go away". This gesture can seem offensive if you don't know the context.

The gesture of bringing the fingertips together to the lips, as if for a kiss, means something is delicious — food, wine, a beautiful person. It is the Italian way of saying "magnificent!".

Italian gestures vary a little from region to region. In the south, gestures are often more expressive. In the north, people gesticulate less. But throughout Italy, speaking without your hands seems strange.

For a foreigner, learning Italian gestures is as important as learning the words. A wrong gesture can cause confusion or — sometimes — offend someone without meaning to.`
        },

        simpleTarget: `Gli italiani parlano con le mani.
I gesti sono importanti in Italia.
Un gesto famoso significa "cosa vuoi?".
Un altro gesto significa "buonissimo!".
I gesti cambiano da regione a regione.
È importante imparare i gesti italiani.`,

        cultureVocab: [
            {
                word: "il gesto",
                translation: "gesture",
                culturalNote: "Italian gestures ('gesti') are so codified that there is an official 'Dictionary of Italian Gestures'. Researchers have counted over 250 distinct gestures used regularly in everyday Italian conversation."
            },
            {
                word: "le dita",
                translation: "fingers (plural of 'il dito')",
                culturalNote: "Many Italian gestures involve specific finger positions. 'Le dita unite' (fingers together) is the starting point for several of the most iconic gestures."
            },
            {
                word: "il palmo",
                translation: "palm (of the hand)",
                culturalNote: "The orientation of the palm — up, down, or sideways — completely changes the meaning of an Italian gesture. The same hand shape with a different palm direction can mean the opposite thing."
            },
            {
                word: "gesticolare",
                translation: "to gesticulate, to use hand gestures",
                culturalNote: "In Italian culture, gesticulating is not considered theatrical or excessive — it is simply how you speak. Sitting on your hands during a conversation would feel very unnatural to an Italian."
            },
            {
                word: "offendere",
                translation: "to offend",
                culturalNote: "Some Italian gestures that seem neutral to outsiders can cause offence. The chin-flick gesture ('mano al mento') in particular is quite strong and should be used carefully by learners."
            }
        ],

        questions: [
            {
                id: "it-c-a1-3-q1",
                type: "comprehension",
                prompt: { native: "What does the gesture of bringing fingertips together to the lips mean?", target: "Cosa significa il gesto di portare le dita unite alla bocca?" },
                options: ["Something is delicious / magnificent", "I don't care", "What do you want?", "It costs a lot"],
                answer: "Something is delicious / magnificent"
            },
            {
                id: "it-c-a1-3-q2",
                type: "comprehension",
                prompt: { native: "According to the text, where in Italy do people gesticulate more?", target: "Secondo il testo, dove in Italia si gesticola di più?" },
                options: ["Al sud", "Al nord", "In Toscana", "A Roma"],
                answer: "Al sud"
            },
            {
                id: "it-c-a1-3-q3",
                type: "comprehension",
                prompt: { native: "What does the 'money gesture' (rubbing thumb against fingers) mean?", target: "Cosa significa il 'gesto del denaro'?" },
                options: ["Costa molto / ci vuole denaro", "Cosa vuoi?", "Buonissimo!", "Non me ne importa niente"],
                answer: "Costa molto / ci vuole denaro"
            },
            {
                id: "it-c-a1-3-q4",
                type: "reflection",
                prompt: { native: "Does your culture use hand gestures in conversation? Are there any gestures that mean different things in different cultures?", target: "Does your culture use hand gestures in conversation? Are there any gestures that mean different things in different cultures?" }
            }
        ],

        didYouKnow: {
            native: "In 2021, UNESCO added the art of Neapolitan gesture to its list of Intangible Cultural Heritage. Naples has the richest gesture vocabulary in Italy — linguists have documented over 60 distinct gestures unique to the Neapolitan tradition, many of which date back to ancient Greek and Roman times.",
            target: "Nel 2021, l'UNESCO ha aggiunto l'arte del gesto napoletano alla sua lista del Patrimonio Culturale Immateriale. Napoli ha il vocabolario gestuale più ricco d'Italia — i linguisti hanno documentato oltre 60 gesti distinti unici della tradizione napoletana, molti dei quali risalgono all'epoca greco-romana."
        }
    },

    {
        id: "it-c-a1-4",
        language: "it",
        level: "A1",
        category: "food",
        region: "all-italian",
        title: {
            native: "La pasta — una tradizione nazionale",
            target: "La pasta — una tradizione nazionale"
        },
        subtitle: "Italy has over 350 pasta shapes — and strict unwritten rules about which sauce goes with which pasta. Breaking them is considered almost criminal.",

        video: {
            youtubeId: "",
            title: "",
            channelName: "",
            captionLang: "it"
        },

        photos: [
            {
                url: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800",
                caption: {
                    native: "Fresh pasta being made by hand — a centuries-old Italian tradition",
                    target: "La pasta fresca fatta a mano — una tradizione italiana di secoli"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800",
                caption: {
                    native: "Different pasta shapes pair with different sauces — the rules are strict",
                    target: "Diversi formati di pasta si abbinano a diversi sughi — le regole sono rigide"
                }
            }
        ],

        body: {
            target: `La pasta è il piatto simbolo dell'Italia. Gli italiani mangiano pasta quasi ogni giorno — a pranzo o a cena. È parte della cultura, non solo del menu.

In Italia esistono più di trecentocinquanta formati di pasta diversi. Ogni formato ha un nome e, spesso, una storia. Gli spaghetti, le penne, i rigatoni, le tagliatelle, i fusilli — ogni tipo di pasta ha la sua forma speciale.

La regola più importante della pasta italiana è questa: ogni formato di pasta si abbina a un sugo specifico. Gli spaghetti vanno con la carbonara o l'amatriciana, non con il ragù. Il ragù alla bolognese va con le tagliatelle, non con gli spaghetti. Le penne vanno con l'arrabbiata. Chi sbaglia abbinamento è considerato quasi un criminale gastronomico.

La pasta si divide in due grandi categorie: la pasta secca e la pasta fresca. La pasta secca — come gli spaghetti e le penne — si fa con acqua e semola di grano duro. La pasta fresca — come le tagliatelle e i tortellini — si fa con acqua, farina e uova.

Ogni regione italiana ha la sua pasta tradizionale. In Emilia-Romagna ci sono le tagliatelle e i tortellini. In Campania ci sono gli spaghetti. In Sicilia ci sono le busiate. In Lombardia ci sono i pizzoccheri.

La pasta non è solo cibo. È identità, storia e famiglia. Per molti italiani, il modo in cui la nonna fa la pasta è il modo giusto — e tutti gli altri modi sono sbagliati.`,
            native: `Pasta is Italy's symbolic dish. Italians eat pasta almost every day — at lunch or dinner. It is part of the culture, not just the menu.

In Italy there are more than three hundred and fifty different pasta shapes. Each shape has a name and, often, a history. Spaghetti, penne, rigatoni, tagliatelle, fusilli — each type of pasta has its own special form.

The most important rule of Italian pasta is this: each pasta shape pairs with a specific sauce. Spaghetti go with carbonara or amatriciana, not with ragù. Bolognese ragù goes with tagliatelle, not spaghetti. Penne go with arrabbiata. Whoever makes the wrong pairing is considered almost a gastronomic criminal.

Pasta is divided into two main categories: dried pasta and fresh pasta. Dried pasta — like spaghetti and penne — is made with water and durum wheat semolina. Fresh pasta — like tagliatelle and tortellini — is made with water, flour and eggs.

Each Italian region has its own traditional pasta. In Emilia-Romagna there are tagliatelle and tortellini. In Campania there are spaghetti. In Sicily there are busiate. In Lombardy there are pizzoccheri.

Pasta is not just food. It is identity, history and family. For many Italians, the way grandmother makes pasta is the right way — and all other ways are wrong.`
        },

        simpleTarget: `La pasta è molto importante in Italia.
Gli italiani mangiano pasta ogni giorno.
Ci sono molti formati di pasta diversi.
Ogni pasta ha il suo sugo speciale.
La pasta secca e la pasta fresca sono diverse.
Ogni regione italiana ha la sua pasta tradizionale.`,

        cultureVocab: [
            {
                word: "il formato di pasta",
                translation: "pasta shape",
                culturalNote: "Italy has over 350 named pasta shapes. The shape is not decorative — it determines which sauce clings to it best. Tubes trap chunky sauces; thin long pasta is best with smooth sauces."
            },
            {
                word: "il sugo",
                translation: "sauce (for pasta)",
                culturalNote: "In Italian, 'sugo' specifically means a cooked tomato-based pasta sauce. 'Salsa' is more generic. The distinction matters — calling a ragù a 'salsa' would raise Italian eyebrows."
            },
            {
                word: "la pasta fresca",
                translation: "fresh pasta",
                culturalNote: "Fresh pasta is made with eggs and flour, often by hand, and must be eaten within a day or two. It is considered more refined than dried pasta, and is the norm for special Sunday lunches and celebrations."
            },
            {
                word: "la pasta secca",
                translation: "dried pasta",
                culturalNote: "Dried pasta (pasta secca) is the everyday staple of Italian households. Unlike fresh pasta, it can be stored for months. It is made from durum wheat semolina and water — no eggs."
            },
            {
                word: "il ragù",
                translation: "meat sauce (slow-cooked)",
                culturalNote: "Ragù alla Bolognese — the world-famous 'Bolognese sauce' — is officially registered with the Bologna Chamber of Commerce. The authentic recipe uses tagliatelle, not spaghetti. Serving it with spaghetti, as is common internationally, is considered deeply wrong in Italy."
            }
        ],

        questions: [
            {
                id: "it-c-a1-4-q1",
                type: "comprehension",
                prompt: { native: "According to the text, how many pasta shapes exist in Italy?", target: "Secondo il testo, quanti formati di pasta esistono in Italia?" },
                options: ["Più di trecentocinquanta", "Più di cento", "Circa cinquanta", "Più di mille"],
                answer: "Più di trecentocinquanta"
            },
            {
                id: "it-c-a1-4-q2",
                type: "comprehension",
                prompt: { native: "What is the correct pasta for ragù alla bolognese?", target: "Quale pasta è corretta per il ragù alla bolognese?" },
                options: ["Le tagliatelle", "Gli spaghetti", "Le penne", "I rigatoni"],
                answer: "Le tagliatelle"
            },
            {
                id: "it-c-a1-4-q3",
                type: "comprehension",
                prompt: { native: "What is fresh pasta (pasta fresca) made with?", target: "Con cosa si fa la pasta fresca?" },
                options: ["Acqua, farina e uova", "Solo acqua e semola", "Latte e farina", "Solo farina e sale"],
                answer: "Acqua, farina e uova"
            },
            {
                id: "it-c-a1-4-q4",
                type: "reflection",
                prompt: { native: "Does your country have a dish that is as central to national identity as pasta is to Italians? What makes it special?", target: "Does your country have a dish that is as central to national identity as pasta is to Italians? What makes it special?" }
            }
        ],

        didYouKnow: {
            native: "The idea that Marco Polo brought pasta to Italy from China is a myth. Written records of pasta in Italy date back to at least 1154 AD — over a century before Marco Polo was born. The myth was probably invented by a 1929 American macaroni industry newsletter trying to make pasta seem exotic.",
            target: "L'idea che Marco Polo abbia portato la pasta in Italia dalla Cina è un mito. I documenti scritti sulla pasta in Italia risalgono almeno al 1154 d.C. — oltre un secolo prima della nascita di Marco Polo. Il mito fu probabilmente inventato da un bollettino del settore maccheroni americano del 1929 che cercava di rendere la pasta esotica."
        }
    }
]

