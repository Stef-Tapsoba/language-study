// src/data/italian/reading/a2.ts
import { ReadingPassage } from "../../../types"

export const a2Reading: ReadingPassage[] = [
    {
        id: "it-r-a2-1",
        level: "A2",
        category: "culture",
        title: "Le feste in Italia",
        body: {
            target: "L'Italia celebra molte feste durante l'anno. Il Carnevale è una festa molto colorata. A Venezia, il Carnevale è famoso in tutto il mondo per le maschere e i costumi elaborati. La Pasqua è una festa importante: le famiglie si riuniscono per mangiare insieme l'agnello e la colomba pasquale. Il Ferragosto, il 15 agosto, è il giorno di vacanza per eccellenza: molti italiani vanno al mare o in montagna. Il 2 novembre, il Giorno dei Morti, è un giorno dedicato al ricordo dei defunti. A Natale, le famiglie preparano il presepe e si scambiano i regali il 25 dicembre o il 6 gennaio, la Befana.",
            native: "Italy celebrates many festivals throughout the year. Carnival is a very colourful festival. In Venice, Carnival is famous worldwide for its elaborate masks and costumes. Easter is an important festival: families get together to eat lamb and dove-shaped cake. Ferragosto, on 15 August, is the holiday par excellence: many Italians go to the seaside or the mountains. On 2 November, the Day of the Dead, is a day dedicated to remembering the deceased. At Christmas, families set up the nativity scene and exchange gifts on 25 December or 6 January, the Befana."
        },
        vocabGloss: [
            { word: "maschere", translation: "masks" },
            { word: "costumi elaborati", translation: "elaborate costumes" },
            { word: "si riuniscono", translation: "get together" },
            { word: "agnello", translation: "lamb" },
            { word: "colomba pasquale", translation: "Easter dove cake" },
            { word: "per eccellenza", translation: "par excellence / above all" },
            { word: "defunti", translation: "the deceased" },
            { word: "presepe", translation: "nativity scene" }
        ],
        questions: [
            {
                id: "it-r-a2-1-q1",
                level: "A2",
                prompt: "Per cosa è famoso il Carnevale di Venezia?",
                options: ["Per le maschere e i costumi elaborati", "Per i fuochi d'artificio", "Per le corse dei cavalli", "Per la musica tradizionale"],
                answer: "Per le maschere e i costumi elaborati"
            },
            {
                id: "it-r-a2-1-q2",
                level: "A2",
                prompt: "Quando è il Ferragosto?",
                options: ["Il 15 agosto", "Il 2 novembre", "Il 25 dicembre", "Il 6 gennaio"],
                answer: "Il 15 agosto"
            },
            {
                id: "it-r-a2-1-q3",
                level: "A2",
                prompt: "Cosa preparano le famiglie italiane a Natale?",
                options: ["Il presepe", "Le maschere", "L'agnello", "La colomba"],
                answer: "Il presepe"
            },
            {
                id: "it-r-a2-1-q4",
                level: "A2",
                prompt: "Cosa fanno molti italiani a Ferragosto?",
                options: ["Vanno al mare o in montagna", "Restano a casa in famiglia", "Visitano le chiese", "Fanno il Carnevale"],
                answer: "Vanno al mare o in montagna"
            }
        ]
    },
    {
        id: "it-r-a2-2",
        level: "A2",
        category: "culture",
        title: "La cucina italiana",
        body: {
            target: "La cucina italiana è una delle più famose al mondo. Ogni regione ha i suoi piatti tipici. Al nord, si mangiano risotto, polenta e pasta all'uovo. Al sud, la pasta di semola è più comune, con sughi di pomodoro e pesce. La pizza è nata a Napoli: la pizza Margherita ha i colori della bandiera italiana — verde (basilico), bianco (mozzarella) e rosso (pomodoro). Il gelato italiano è famoso per la sua cremosità. L'espresso è molto importante nella vita quotidiana: gli italiani bevono il caffè al bar, spesso in piedi al bancone. La cucina italiana è basata su ingredienti semplici e freschi.",
            native: "Italian cuisine is one of the most famous in the world. Every region has its own typical dishes. In the north, risotto, polenta and egg pasta are eaten. In the south, semolina pasta is more common, with tomato and fish sauces. Pizza was born in Naples: the Margherita pizza has the colours of the Italian flag — green (basil), white (mozzarella) and red (tomato). Italian gelato is famous for its creaminess. Espresso is very important in daily life: Italians drink coffee at the bar, often standing at the counter. Italian cuisine is based on simple, fresh ingredients."
        },
        vocabGloss: [
            { word: "piatti tipici", translation: "typical dishes" },
            { word: "pasta all'uovo", translation: "egg pasta" },
            { word: "semola", translation: "semolina (type of wheat)" },
            { word: "sughi", translation: "sauces" },
            { word: "bandiera", translation: "flag" },
            { word: "cremosità", translation: "creaminess" },
            { word: "bancone", translation: "counter (at a bar)" }
        ],
        questions: [
            {
                id: "it-r-a2-2-q1",
                level: "A2",
                prompt: "Dove è nata la pizza?",
                options: ["A Napoli", "A Roma", "A Milano", "A Palermo"],
                answer: "A Napoli"
            },
            {
                id: "it-r-a2-2-q2",
                level: "A2",
                prompt: "Quali sono i colori della pizza Margherita?",
                options: ["Verde, bianco e rosso", "Giallo, bianco e rosso", "Verde, giallo e rosso", "Bianco, nero e rosso"],
                answer: "Verde, bianco e rosso"
            },
            {
                id: "it-r-a2-2-q3",
                level: "A2",
                prompt: "Come bevono il caffè gli italiani al bar?",
                options: ["Spesso in piedi al bancone", "Seduti a un tavolo", "A casa propria", "Con molto latte"],
                answer: "Spesso in piedi al bancone"
            },
            {
                id: "it-r-a2-2-q4",
                level: "A2",
                prompt: "Su cosa è basata la cucina italiana?",
                options: ["Ingredienti semplici e freschi", "Spezie esotiche", "Cotture lunghe e complesse", "Prodotti importati"],
                answer: "Ingredienti semplici e freschi"
            }
        ]
    },
    {
        id: "it-r-a2-3",
        level: "A2",
        category: "culture",
        title: "Roma e i suoi monumenti",
        body: {
            target: "Roma è la capitale dell'Italia e una delle città più belle del mondo. È chiamata 'la Città Eterna'. Il Colosseo è il monumento più famoso. È un anfiteatro antico dove i gladiatori combattevano. Il Vaticano è uno stato indipendente dentro Roma. È la sede del Papa e della Chiesa Cattolica. La Basilica di San Pietro è enorme e bellissima. La Fontana di Trevi è famosa in tutto il mondo: secondo la tradizione, se lanci una moneta nell'acqua, tornerai a Roma. I Musei Vaticani custodiscono la Cappella Sistina con gli affreschi di Michelangelo.",
            native: "Rome is the capital of Italy and one of the most beautiful cities in the world. It is called 'the Eternal City'. The Colosseum is the most famous monument. It is an ancient amphitheatre where gladiators used to fight. The Vatican is an independent state within Rome. It is the seat of the Pope and the Catholic Church. St Peter's Basilica is enormous and beautiful. The Trevi Fountain is famous worldwide: according to tradition, if you throw a coin into the water, you will return to Rome. The Vatican Museums house the Sistine Chapel with Michelangelo's frescoes."
        },
        vocabGloss: [
            { word: "Città Eterna", translation: "Eternal City" },
            { word: "anfiteatro", translation: "amphitheatre" },
            { word: "gladiatori", translation: "gladiators" },
            { word: "combattevano", translation: "used to fight" },
            { word: "sede", translation: "seat, headquarters" },
            { word: "lanci una moneta", translation: "you throw a coin" },
            { word: "custodiscono", translation: "house, preserve" },
            { word: "affreschi", translation: "frescoes" }
        ],
        questions: [
            {
                id: "it-r-a2-3-q1",
                level: "A2",
                prompt: "Come viene chiamata Roma?",
                options: ["La Città Eterna", "La Città del Sole", "La Città d'Arte", "La Città dei Papi"],
                answer: "La Città Eterna"
            },
            {
                id: "it-r-a2-3-q2",
                level: "A2",
                prompt: "Cos'è il Colosseo?",
                options: ["Un anfiteatro antico", "Una basilica", "Un museo", "Un palazzo reale"],
                answer: "Un anfiteatro antico"
            },
            {
                id: "it-r-a2-3-q3",
                level: "A2",
                prompt: "Secondo la tradizione della Fontana di Trevi, cosa succede se lanci una moneta?",
                options: ["Tornerai a Roma", "I tuoi desideri si avverano", "Avrai fortuna", "Troverai l'amore"],
                answer: "Tornerai a Roma"
            },
            {
                id: "it-r-a2-3-q4",
                level: "A2",
                prompt: "Dove si trovano gli affreschi di Michelangelo?",
                options: ["Nella Cappella Sistina", "Nel Colosseo", "Nella Fontana di Trevi", "In Piazza Navona"],
                answer: "Nella Cappella Sistina"
            }
        ]
    },
    {
        id: "it-r-a2-4",
        level: "A2",
        category: "everyday",
        title: "Il mio quartiere",
        body: {
            target: "Abito in un quartiere tranquillo alla periferia di Bologna. Nel mio quartiere ci sono molti negozi. C'è una panetteria, un supermercato, una farmacia e alcuni bar. Il mercato si svolge ogni martedì e venerdì mattina. Si trovano verdure fresche, frutta di stagione e prodotti locali. C'è anche un bel parco dove i bambini giocano e gli anziani passeggiano. I mezzi pubblici sono comodi: c'è una fermata dell'autobus a tre minuti da casa mia. Amo il mio quartiere perché è tranquillo ma ha tutto il necessario.",
            native: "I live in a quiet neighbourhood on the outskirts of Bologna. In my neighbourhood there are many shops. There is a bakery, a supermarket, a pharmacy and some bars. The market takes place every Tuesday and Friday morning. You can find fresh vegetables, seasonal fruit and local products. There is also a lovely park where children play and elderly people stroll. Public transport is convenient: there is a bus stop three minutes from my home. I love my neighbourhood because it is quiet but has everything you need."
        },
        vocabGloss: [
            { word: "periferia", translation: "outskirts, suburbs" },
            { word: "panetteria", translation: "bakery" },
            { word: "si svolge", translation: "takes place" },
            { word: "di stagione", translation: "seasonal" },
            { word: "anziani", translation: "elderly people" },
            { word: "passeggiano", translation: "stroll, walk" },
            { word: "mezzi pubblici", translation: "public transport" },
            { word: "fermata dell'autobus", translation: "bus stop" }
        ],
        questions: [
            {
                id: "it-r-a2-4-q1",
                level: "A2",
                prompt: "Quando si svolge il mercato nel quartiere?",
                options: ["Il martedì e il venerdì mattina", "Il sabato e la domenica", "Tutti i giorni", "Il mercoledì sera"],
                answer: "Il martedì e il venerdì mattina"
            },
            {
                id: "it-r-a2-4-q2",
                level: "A2",
                prompt: "Quale mezzo pubblico c'è vicino a casa?",
                options: ["L'autobus", "Il tram", "La metropolitana", "Il treno"],
                answer: "L'autobus"
            },
            {
                id: "it-r-a2-4-q3",
                level: "A2",
                prompt: "Perché la persona ama il suo quartiere?",
                options: ["È tranquillo ma ha tutto il necessario", "È in centro città", "È vicino al mare", "Ha molti ristoranti"],
                answer: "È tranquillo ma ha tutto il necessario"
            },
            {
                id: "it-r-a2-4-q4",
                level: "A2",
                prompt: "Cosa fanno gli anziani nel parco?",
                options: ["Passeggiano", "Giocano", "Leggono il giornale", "Fanno sport"],
                answer: "Passeggiano"
            }
        ]
    }
]
