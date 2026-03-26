import { CultureEpisode } from "../../../../types"

export const itCA22: CultureEpisode = {
    id: "it-c-a2-2",
    language: "it",
    level: "A2",
    category: "culture",
    region: "all-italian",
    title: {
        native: "Le feste italiane",
        target: "Le feste italiane — tradizioni, famiglia e identità"
    },
    subtitle: "Italy's festivals are not just public holidays — they are living traditions that unite communities across generations.",
    photos: [
        {
            url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
            caption: {
                native: "Carnival masks in Venice",
                target: "Le maschere del Carnevale a Venezia"
            },
            credit: "Unsplash"
        },
        {
            url: "https://images.unsplash.com/photo-1462838720694-8a4c39b7fba1?w=800",
            caption: {
                native: "Italian Easter celebrations",
                target: "Pasqua italiana"
            },
            credit: "Unsplash"
        },
        {
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
            caption: {
                native: "Ferragosto at the beach",
                target: "Ferragosto al mare"
            },
            credit: "Unsplash"
        }
    ],
    body: {
        target: "Le feste italiane sono molto più di semplici giorni liberi dal lavoro. Sono momenti in cui le famiglie si riuniscono, le comunità celebrano insieme e le tradizioni si tramandano di generazione in generazione.\n\nIl Carnevale si celebra a febbraio, nei giorni prima della Quaresima. In tutta Italia le persone indossano maschere e costumi colorati, e le città organizzano grandi sfilate. Il Carnevale di Venezia è il più famoso nel mondo: le maschere veneziane — come la bauta e la colombina — sono diventate simboli dell'arte e della cultura italiana. Ma anche Viareggio, in Toscana, è famosa per i suoi carri allegorici giganti, e Ivrea, in Piemonte, organizza la straordinaria «battaglia delle arance», dove migliaia di persone si lanciano arance vere per tre giorni, rievocando una rivolta medievale.\n\nLa Pasqua è la festa religiosa più importante dell'anno. La notte del sabato santo molte famiglie partecipano alla messa di mezzanotte. La domenica mattina si fa la colazione pasquale tradizionale: uova sode, salame, formaggi e la colomba, un dolce a forma di colomba con mandorle e glassa di zucchero. A pranzo, l'agnello è il piatto tipico. Le famiglie si riuniscono intorno alla tavola per ore.\n\nIl Ferragosto, il quindici agosto, è la festa dell'estate. Il nome viene dal latino «Feriae Augusti», le vacanze dell'imperatore Augusto. Ancora oggi, le città italiane si svuotano quasi completamente: tutti vanno al mare o in montagna. Il pranzo tradizionale di Ferragosto è il pollo con i peperoni, un piatto semplice ma simbolico. I negozi chiudono, le strade sono silenziose — è un'Italia diversa, quasi sospesa nel tempo.\n\nLa Befana, il sei gennaio, è una festa molto amata dai bambini. Una vecchietta simpatica arriva di notte e riempie le calze appese al camino: dolci per i bambini buoni, carbone — di solito un dolce nero a forma di carbone — per quelli cattivi. In molte regioni del centro e del sud Italia, la Befana è più attesa di Babbo Natale.\n\nInfine, il due giugno è la Festa della Repubblica. A Roma si svolge una grande parata militare sui Fori Imperiali. È un momento di riflessione sull'identità nazionale e sulla storia italiana del dopoguerra.",
        native: "Italian festivals are much more than simple days off work. They are moments when families reunite, communities celebrate together, and traditions are passed down from generation to generation.\n\nCarnival is celebrated in February, in the days before Lent. Across Italy people wear masks and colourful costumes, and cities organise grand parades. The Venice Carnival is the most famous in the world: Venetian masks — such as the bauta and the colombina — have become symbols of Italian art and culture. But Viareggio in Tuscany is also famous for its giant allegorical floats, and Ivrea in Piedmont organises the extraordinary 'orange battle', where thousands of people throw real oranges at each other for three days, re-enacting a medieval revolt.\n\nEaster is the most important religious festival of the year. On the night of Holy Saturday many families attend midnight Mass. On Sunday morning the traditional Easter breakfast is served: hard-boiled eggs, salami, cheeses, and the colomba — a dove-shaped sweet bread with almonds and sugar glaze. At lunch, lamb is the typical dish. Families gather around the table for hours.\n\nFerragosto, on the fifteenth of August, is the festival of summer. The name comes from the Latin 'Feriae Augusti', the holidays of Emperor Augustus. Even today, Italian cities empty almost completely: everyone goes to the sea or the mountains. The traditional Ferragosto lunch is chicken with peppers, a simple but symbolic dish. Shops close, streets fall silent — it is a different Italy, almost suspended in time.\n\nThe Befana, on the sixth of January, is a festival much loved by children. A friendly old woman arrives at night and fills stockings hung by the fireplace: sweets for well-behaved children, coal — usually a black sweet shaped like coal — for naughty ones. In many regions of central and southern Italy, the Befana is more eagerly awaited than Father Christmas.\n\nFinally, the second of June is the Festa della Repubblica. In Rome a grand military parade takes place along the Imperial Forums. It is a moment of reflection on national identity and Italy's post-war history."
    },
    cultureVocab: [
        {
            word: "la maschera",
            translation: "mask",
            culturalNote: "In Carnival tradition, masks allowed people of all classes to mingle anonymously; the Venetian bauta and colombina are the most iconic."
        },
        {
            word: "la calza della Befana",
            translation: "Befana's stocking",
            culturalNote: "Children hang stockings on the night of 5 January; sweets for good children, coal (now usually a sweet black candy) for naughty ones. The custom predates Christmas gift-giving in Italy."
        },
        {
            word: "il Ferragosto",
            translation: "the August bank holiday",
            culturalNote: "Derives from Latin 'Feriae Augusti' (Augustus's rest). Shops close, cities empty, and the traditional meal is pollo con i peperoni (chicken with peppers)."
        },
        {
            word: "la colomba pasquale",
            translation: "Easter dove cake",
            culturalNote: "A dove-shaped sweet bread with almonds and sugar glaze, sold everywhere in April. Symbol of peace and spring."
        },
        {
            word: "la battaglia delle arance",
            translation: "the orange battle",
            culturalNote: "Ivrea's extraordinary Carnival tradition: teams throw real oranges at each other in the town square for three days, re-enacting a medieval revolt."
        }
    ],
    questions: [
        {
            id: "it-c-a2-2-q1",
            type: "comprehension",
            prompt: {
                native: "What is the tradition of the Befana?",
                target: "Qual è la tradizione della Befana?"
            },
            options: [
                "Portare doni ai bambini nella calza",
                "Organizzare una sfilata di carnevale",
                "Preparare la colomba pasquale",
                "Fare il pranzo in famiglia"
            ],
            answer: "Portare doni ai bambini nella calza"
        },
        {
            id: "it-c-a2-2-q2",
            type: "comprehension",
            prompt: {
                native: "Where does the name 'Ferragosto' come from?",
                target: "Da dove deriva il nome 'Ferragosto'?"
            },
            options: [
                "Dal latino 'Feriae Augusti'",
                "Da una parola francese",
                "Dal nome di un re medievale",
                "Da una città del sud Italia"
            ],
            answer: "Dal latino 'Feriae Augusti'"
        },
        {
            id: "it-c-a2-2-q3",
            type: "reflection",
            prompt: {
                native: "Do you have a festival in your country that brings everyone together in a similar way? What makes it special?",
                target: "Hai una festa nel tuo paese che riunisce tutti in modo simile? Cosa la rende speciale?"
            }
        }
    ]
}
