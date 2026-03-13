// src/data/italian/culture/b1.ts
import { CultureEpisode } from "../../../types"

export const itB1Culture: CultureEpisode[] = [
    {
        id: "it-c-b1-1",
        language: "it",
        level: "B1",
        category: "festivals",
        region: "all-italian",
        title: {
            native: "Il Carnevale in Italia",
            target: "Il Carnevale in Italia — maschere, satira e tradizione"
        },
        subtitle: "Carnival in Italy is one of the world's great festivals — a time of masks, satire, and spectacular floats that has been celebrated for centuries.",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
                caption: {
                    native: "Elaborate Venetian masks at the Venice Carnival",
                    target: "Maschere veneziane elaborate al Carnevale di Venezia"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1549317336-206569e8475c?w=800",
                caption: {
                    native: "Giant satirical floats at the Viareggio Carnival",
                    target: "Carri allegorici giganti al Carnevale di Viareggio"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1576501756541-e08ce9e4c56a?w=800",
                caption: {
                    native: "Colourful confetti and costumes in an Italian piazza",
                    target: "Coriandoli colorati e costumi in una piazza italiana"
                },
                credit: "Unsplash"
            }
        ],
        body: {
            target: "Il Carnevale è una delle feste più antiche e vivaci della tradizione italiana. Si celebra nei giorni che precedono la Quaresima, con il culmine nel martedì grasso — l'ultimo giorno prima del mercoledì delle ceneri, quando inizia il periodo di astinenza cattolico. Storicamente, il Carnevale era l'unico momento in cui le gerarchie sociali si rovesciavano: il povero poteva vestirsi da nobile, il servo poteva criticare il padrone grazie alla protezione dell'anonimato garantita dalla maschera.\n\nIl Carnevale di Venezia è il più famoso al mondo. Le sue origini risalgono al XII secolo. I veneziani indossano costumi storici di straordinaria eleganza — abiti in seta, tricorni e le celebri maschere bianche a forma di becco, chiamate «bauta» o «medico della peste». Le maschere tradizionali veneziane — Arlecchino, Pantalone, la Colombina — derivano dalla Commedia dell'Arte, il teatro popolare italiano del Cinquecento. Oggi, il Carnevale di Venezia dura circa due settimane e attira centinaia di migliaia di visitatori da tutto il mondo.\n\nIl Carnevale di Viareggio, in Toscana, ha una tradizione completamente diversa. È famoso per i suoi giganteschi carri allegorici — costruzioni alte anche quindici metri realizzate in cartapesta — che sfilano sul lungomare con figurazioni satiriche di politici, personaggi famosi ed eventi dell'anno. La satira politica è il cuore del Carnevale di Viareggio: ogni carro racconta qualcosa dell'Italia e del mondo contemporaneo.\n\nAltri carnevali regionali importanti sono quello di Ivrea, famoso per la «battaglia delle arance» — dove i cittadini si lanciano arance per ricordare una rivolta medievale contro un tiranno — e quello di Putignano in Puglia, considerato il più antico d'Europa.\n\nIn tutta Italia, anche i bambini festeggiano il Carnevale a scuola: si travestono da personaggi fantastici, si lanciano coriandoli e mangiano le chiacchiere, i dolci fritti tradizionali di questo periodo.",
            native: "Carnival is one of the most ancient and lively festivals in Italian tradition. It is celebrated in the days leading up to Lent, with its peak on Martedì Grasso — the last day before Ash Wednesday, when the Catholic period of abstinence begins. Historically, Carnival was the only moment when social hierarchies were overturned: the poor could dress as nobles, the servant could criticise the master, protected by the anonymity guaranteed by the mask.\n\nThe Venice Carnival is the most famous in the world. Its origins go back to the twelfth century. Venetians wear historical costumes of extraordinary elegance — silk gowns, tricorn hats and the celebrated white beak-shaped masks known as 'bauta' or 'plague doctor'. The traditional Venetian masks — Harlequin, Pantalone, Colombina — derive from the Commedia dell'Arte, the Italian popular theatre of the sixteenth century. Today, the Venice Carnival lasts about two weeks and attracts hundreds of thousands of visitors from around the world.\n\nThe Viareggio Carnival in Tuscany has a completely different tradition. It is famous for its giant allegorical floats — constructions up to fifteen metres tall made of papier-mâché — which parade along the seafront with satirical depictions of politicians, famous figures and events of the year. Political satire is the heart of the Viareggio Carnival: each float tells a story about contemporary Italy and the world.\n\nOther important regional carnivals include Ivrea, famous for the 'Battle of the Oranges' — where citizens throw oranges at each other to recall a medieval revolt against a tyrant — and Putignano in Puglia, considered the oldest in Europe.\n\nThroughout Italy, children also celebrate Carnival at school: they dress up as fantastical characters, throw confetti and eat chiacchiere, the traditional fried pastries of this time of year."
        },
        cultureVocab: [
            {
                word: "il martedì grasso",
                translation: "Fat Tuesday / Mardi Gras",
                culturalNote: "The final and most exuberant day of Carnival, immediately before Ash Wednesday. In Italian tradition it is a day of excess — eating, drinking and celebrating before the austerity of Lent."
            },
            {
                word: "la maschera",
                translation: "mask",
                culturalNote: "In Venetian Carnival tradition, masks served a profound social function: they made everyone anonymous and equal. A masked nobleman and a masked commoner were indistinguishable — one of the few moments of enforced social equality in the Republic of Venice."
            },
            {
                word: "la Commedia dell'Arte",
                translation: "Italian popular theatre genre (16th century)",
                culturalNote: "A form of improvised theatre featuring stock characters with fixed masks and personalities. Arlecchino (the witty servant), Pantalone (the miserly merchant) and Colombina (the clever maid) became archetypes exported across all of European theatre and commedia."
            },
            {
                word: "i carri allegorici",
                translation: "allegorical floats",
                culturalNote: "The floats of the Viareggio Carnival are works of art: year-round teams of artisans build papier-mâché sculptures of enormous size. A winning float can become an iconic image of Italian political satire for that year."
            },
            {
                word: "le chiacchiere",
                translation: "fried Carnival pastry strips dusted with icing sugar",
                culturalNote: "Called 'chiacchiere' in Lombardy, 'crostoli' in the Veneto, 'frappe' in Rome, 'bugie' in Liguria — same pastry, dozens of regional names. A perfect example of Italian regional culinary identity."
            }
        ],
        questions: [
            {
                id: "it-c-b1-1-q1",
                type: "comprehension",
                prompt: {
                    native: "What was the historical social function of Carnival masks in Venice?",
                    target: "Qual era la funzione sociale storica delle maschere di Carnevale a Venezia?"
                },
                options: [
                    "To make participants look more beautiful and elegant",
                    "To protect wearers from the cold winter weather",
                    "To make everyone anonymous and briefly equal regardless of social class",
                    "To identify which neighbourhood each person came from"
                ],
                answer: "To make everyone anonymous and briefly equal regardless of social class"
            },
            {
                id: "it-c-b1-1-q2",
                type: "comprehension",
                prompt: {
                    native: "What makes the Viareggio Carnival distinctive compared to Venice?",
                    target: "Cosa rende il Carnevale di Viareggio diverso rispetto a quello di Venezia?"
                },
                options: [
                    "It is held entirely on the water in boats and gondolas",
                    "It is famous for giant satirical papier-mâché floats that mock political figures",
                    "It features only historical costumes from the Renaissance period",
                    "It is the oldest Carnival festival in Europe"
                ],
                answer: "It is famous for giant satirical papier-mâché floats that mock political figures"
            },
            {
                id: "it-c-b1-1-q3",
                type: "reflection",
                prompt: {
                    native: "Does your country or culture have a festival where normal social rules are suspended or inverted? What purpose does it serve?",
                    target: "Nel tuo paese o nella tua cultura esiste una festa in cui le normali regole sociali vengono sospese o invertite? Quale scopo ha?"
                }
            }
        ]
    }
]
