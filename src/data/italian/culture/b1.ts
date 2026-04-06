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
    },
    {
        id: "it-c-b1-2",
        language: "it",
        level: "B1",
        category: "customs",
        region: "all-italian",
        title: {
            native: "La famiglia italiana — il cuore di tutto",
            target: "La famiglia italiana"
        },
        subtitle: "In Italy, the family is not just a social unit — it is the institution around which everything else is organised, from Sunday lunch to housing choices to career advice.",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800",
                caption: {
                    native: "An Italian family gathered around the Sunday lunch table",
                    target: "Una famiglia italiana riunita attorno alla tavola domenicale"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
                caption: {
                    native: "Grandparents and grandchildren — three generations together",
                    target: "Nonni e nipoti — tre generazioni insieme"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800",
                caption: {
                    native: "A large Italian family meal with multiple generations",
                    target: "Un grande pranzo familiare italiano con più generazioni"
                },
                credit: "Unsplash"
            }
        ],
        body: {
            target: `In Italia, circa il settanta per cento dei giovani tra i diciotto e i trentaquattro anni vive ancora con i genitori — una delle percentuali più alte dell'Europa occidentale. Le ragioni sono in parte economiche (salari bassi, contratti precari, affitti elevati) ma anche profondamente culturali: lasciare casa non è il rito di passaggio che rappresenta in Gran Bretagna o in Germania. In Italia si lascia la casa dei genitori quando si forma una nuova famiglia — non semplicemente quando si compiono diciotto anni o si finisce l'università. La casa non è una rampa di lancio; è il centro di tutto.

Il mammismo: il legame profondo tra le madri italiane e i loro figli — in particolare i maschi. La parola bamboccioni — adulti che vivono in casa con i genitori, letteralmente "bambini grandi" — fu usata in modo dispregiativo da un ministro del governo nel 2007 per criticare i giovani italiani che restavano a casa. La reazione fu di indignazione: molti sentivano che era il sistema economico, non la famiglia, il vero problema. La parola entrò nel vocabolario nazionale come simbolo del dibattito generazionale.

Il pranzo domenicale è un'istituzione quasi sacra. Tutta la famiglia — genitori, nonni, zii, cugini — si riunisce a mezzogiorno. Il pranzo dura due, tre, a volte quattro ore. È l'ancora settimanale della vita familiare. Le nonne sono le custodi delle ricette, e preparare il pranzo domenicale è un atto d'amore e di continuità. I giovani italiani che si trasferiscono altrove per lavoro spesso tornano a casa nel fine settimana per il pranzo.

Nord e Sud: il modello familiare è forte in tutta Italia, ma più intenso al sud. In Calabria o in Sicilia, le reti familiari sono la principale rete di sicurezza sociale — forniscono alloggio, contatti lavorativi, assistenza all'infanzia. A Milano o a Torino, il modello è simile ma temperato da un welfare state più sviluppato e da una maggiore indipendenza economica individuale. Eppure, anche i giovani professionisti milanesi tornano spesso dai genitori nel fine settimana.

Il cambiamento: le generazioni più giovani stanno cominciando a ridefinire la famiglia italiana. Sempre più italiani scelgono di non sposarsi, l'Italia ha uno dei tassi di natalità più bassi del mondo (tra i più bassi in Europa), e il concetto di famiglia si sta allargando per includere le coppie dello stesso sesso. La legge del 2016 sulle unioni civili ha istituito le unioni civili per le coppie omosessuali. La tensione tra tradizione e cambiamento definisce la cultura familiare italiana contemporanea.`,
            native: `In Italy, around seventy per cent of young people between the ages of eighteen and thirty-four still live with their parents — one of the highest rates in Western Europe. The reasons are partly economic (low youth wages, precarious contracts, high rents) but also deeply cultural: leaving home is not the rite of passage it is in the UK or Germany. In Italy, you leave home when you form a new family — not simply when you turn eighteen or finish university. The house is not a launching pad; it is the centre of everything.

Il mammismo: the deep bond between Italian mothers and their children — especially sons. The word bamboccioni — adults living at home with their parents, literally "big babies" — was used disparagingly by a government minister in 2007 to criticise young Italians for staying at home. The reaction was outrage: many felt it was the economic system, not the family, that was the real problem. The word entered the national vocabulary as a symbol of the generational debate.

Sunday lunch is a near-sacred institution. The whole family — parents, grandparents, aunts, uncles, cousins — gathers at midday. The meal lasts two, three, sometimes four hours. It is the weekly anchor of family life. Grandmothers are the custodians of recipes, and cooking Sunday lunch is an act of love and continuity. Young Italians who move away for work often return home at weekends for il pranzo.

North vs South: the family model is strong throughout Italy but more intense in the south. In Calabria or Sicily, family networks are the primary social safety net — they provide housing, job connections, and childcare. In Milan or Turin, the model is similar but moderated by a stronger welfare state and more individual economic independence. Still, even Milanese young professionals often go home to their parents at weekends.

The change: younger generations are beginning to redefine the Italian family. More Italians are choosing not to marry, Italy has one of the lowest birth rates in the world (among the lowest in the EU), and the concept of family is expanding to include same-sex partnerships. The 2016 "unioni civili" law established civil unions for same-sex couples. The tension between tradition and change defines contemporary Italian family culture.`
        },
        cultureVocab: [
            {
                word: "il mammismo",
                translation: "the mother-son bond / excessive attachment to one's mother",
                culturalNote: "A culturally loaded term. In English it is sometimes translated as 'mamma's boy culture' but this misses the nuance. In Italy it is not necessarily pejorative — many Italians see it as a positive closeness. It only becomes negative when it interferes with adult relationships."
            },
            {
                word: "i bamboccioni",
                translation: "adult children who live with their parents (literally 'big babies')",
                culturalNote: "Coined by Minister Tommaso Padoa-Schioppa in 2007 to describe adults staying in the family home. The term ignited a national debate about whether young Italians were lazy or simply victims of a labour market that offered no stable footing."
            },
            {
                word: "il pranzo domenicale",
                translation: "Sunday lunch",
                culturalNote: "The central family ritual of Italian life. Even Italians who have left home for work or study often return on Sundays. The meal typically includes multiple courses and lasts several hours. It is less about food than about togetherness and continuity."
            },
            {
                word: "la famiglia allargata",
                translation: "the extended family",
                culturalNote: "Grandparents, aunts, uncles and cousins often live nearby and are actively involved in childcare, finances and daily life. In many Italian cities it is common to find three generations living within walking distance of each other."
            },
            {
                word: "le unioni civili",
                translation: "civil unions",
                culturalNote: "Italy established legal civil unions for same-sex couples in 2016, one of the last Western European countries to do so. The compromise law stopped short of full marriage equality (which France had adopted in 2013) but gave same-sex couples many of the same legal rights. The debate continues."
            }
        ],
        questions: [
            {
                id: "it-c-b1-2-q1",
                type: "comprehension",
                prompt: {
                    native: "What does the text suggest is the main reason so many Italian young adults continue to live with their parents?",
                    target: "Cosa suggerisce il testo come ragione principale per cui così tanti giovani adulti italiani continuano a vivere con i genitori?"
                },
                options: [
                    "A combination of economic factors (low wages, precarious work, high rents) and cultural norms around family life",
                    "A government policy that requires young people to stay at home until marriage",
                    "The lack of universities outside major cities, forcing students to study from home",
                    "A purely cultural preference with no economic dimension"
                ],
                answer: "A combination of economic factors (low wages, precarious work, high rents) and cultural norms around family life"
            },
            {
                id: "it-c-b1-2-q2",
                type: "comprehension",
                prompt: {
                    native: "What role does Sunday lunch play in Italian family life?",
                    target: "Che ruolo ha il pranzo domenicale nella vita familiare italiana?"
                },
                options: [
                    "It is a quick meal before the afternoon's activities",
                    "It is a weekly gathering of the extended family that can last several hours and serves as the main anchor of family connection",
                    "It is a formal occasion reserved for special celebrations and birthdays",
                    "It is primarily a meal for children and grandparents, while parents eat separately"
                ],
                answer: "It is a weekly gathering of the extended family that can last several hours and serves as the main anchor of family connection"
            },
            {
                id: "it-c-b1-2-q3",
                type: "reflection",
                prompt: {
                    native: "Italy has one of the lowest birth rates in the world despite placing enormous cultural value on family. How do you explain this apparent paradox? Do you think the traditional Italian family model is sustainable for future generations?",
                    target: "L'Italia ha uno dei tassi di natalità più bassi al mondo nonostante attribuisca un enorme valore culturale alla famiglia. Come spieghi questo apparente paradosso? Pensi che il modello familiare italiano tradizionale sia sostenibile per le generazioni future?"
                }
            }
        ],
        didYouKnow: {
            native: "Italy's birth rate fell to a historic low of 1.20 children per woman in 2023 — one of the lowest in the world. The government has tried various financial incentives to encourage families to have more children, including cash bonuses and tax deductions, with limited effect. Demographers note the paradox: Italy is culturally obsessed with family and children, yet has among the fewest births per capita in Europe. The explanation lies in economics (childcare costs, low female employment rates, precarious youth contracts) rather than culture — Italians want children but feel they cannot afford them.",
            target: "Il tasso di natalità italiano è sceso nel 2023 a un minimo storico di 1,20 figli per donna — uno dei più bassi al mondo. Il governo ha tentato vari incentivi finanziari per incoraggiare le famiglie ad avere più figli, tra cui bonus in denaro e detrazioni fiscali, con effetti limitati. I demografi notano il paradosso: l'Italia è culturalmente ossessionata dalla famiglia e dai bambini, eppure registra tra le nascite pro capite più basse d'Europa. La spiegazione risiede nell'economia (costi dell'assistenza all'infanzia, bassi tassi di occupazione femminile, contratti precari per i giovani) piuttosto che nella cultura — gli italiani vogliono figli ma sentono di non poterseli permettere."
        },
        relatedIds: ["it-c-a2-3", "it-c-b1-1"]
    },
    {
        id: "it-c-b1-3",
        language: "it",
        level: "B1",
        category: "geography",
        region: "all-italian",
        title: {
            native: "Nord e Sud — un paese, due velocità",
            target: "Nord e Sud"
        },
        subtitle: "Italy has been a unified country since 1861 — yet its north-south divide remains one of the most profound and discussed contrasts in European society.",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
                caption: {
                    native: "The modern skyline of Milan — symbol of Italy's industrial north",
                    target: "Il moderno skyline di Milano — simbolo del nord industriale italiano"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800",
                caption: {
                    native: "The ancient temples of Agrigento in Sicily",
                    target: "Gli antichi templi di Agrigento in Sicilia"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=800",
                caption: {
                    native: "A traditional southern Italian village perched on a hillside",
                    target: "Un tradizionale villaggio dell'Italia meridionale arroccato su una collina"
                },
                credit: "Unsplash"
            }
        ],
        body: {
            target: `L'Italia si unificò solo nel 1861 — molto più tardi della Francia (unificata da secoli) o della Spagna. Prima dell'unificazione, la penisola era un mosaico di regni, ducati, stati pontifici e territori sotto controllo straniero. Il Regno delle Due Sicilie nel sud era economicamente molto diverso dal nord in via di industrializzazione. L'unificazione fu in gran parte imposta dalla Casa Savoia del nord, e molti meridionali la vissero non come una liberazione ma come una conquista. Questa tensione non si è mai del tutto risolta.

Il divario economico oggi: il nord Italia è una delle regioni industriali più produttive d'Europa — Lombardia, Piemonte e Veneto formano il "triangolo industriale". Aziende come Ferrari, Pirelli, Armani, Prada e Fiat hanno la loro sede nel nord. Il PIL pro capite della Lombardia è paragonabile a quello della Germania. Al contrario, il sud (il Mezzogiorno) presenta cifre di PIL pro capite più vicine all'Europa orientale, tassi di disoccupazione del 20-25% in alcune aree, e prospettive di vita significativamente inferiori per i giovani.

La dimensione culturale: gli insulti che ciascuna parte usa raccontano la storia — "terrone" (da "terra", usato dai nordisti per i meridionali, con implicazioni di arretratezza contadina) e "polentone" (mangiatore di polenta, usato dai meridionali per i nordisti, con implicazioni di rigidità nordica). Sono parole che gli italiani usano con gradi variabili di ironia e risentimento. La Lega Nord (ora Lega) ha costruito la sua identità politica in parte sul risentimento nordista di "dover sovvenzionare" il sud.

Le grandi emigrazioni: l'Italia ha conosciuto due migrazioni di massa. La prima fu la "Grande Emigrazione" del 1880-1930, quando milioni di italiani del sud emigrarono nelle Americhe — creando le comunità italo-americane di New York, Buenos Aires e San Paolo. La seconda fu interna: dagli anni Cinquanta agli anni Settanta, milioni di persone si spostarono da Sicilia, Calabria e Campania verso Torino, Milano e Genova per lavorare nelle fabbriche FIAT e negli impianti industriali. Il nord fu costruito, in parte, dal sud.

Il rovescio della medaglia: il sud ha le sue straordinarie ricchezze. Gli antichi templi greci di Agrigento, le cattedrali normanne di Palermo, le rovine romane di Pompei ed Ercolano, la cucina (la pizza di Napoli, gli arancini della Sicilia, la nduja della Calabria). Il concetto di "Campania Felix" — la terra fertile e felice — ci ricorda che il sud fu un tempo il cuore ricco e colto della civiltà mediterranea. Molti italiani e stranieri lo stanno riscoprendo.`,
            native: `Italy was unified only in 1861 — much later than France (unified for centuries) or Spain. Before unification, the peninsula was a patchwork of kingdoms, duchies, papal states and foreign-controlled territories. The Kingdom of the Two Sicilies in the south was economically very different from the industrialising north. Unification was largely imposed by the northern House of Savoy, and many southerners experienced it not as liberation but as conquest. This tension has never fully been resolved.

The economic divide today: Italy's north is one of the most productive industrial regions in Europe — Lombardia, Piemonte and Veneto form the "triangolo industriale." Companies like Ferrari, Pirelli, Armani, Prada and Fiat are headquartered in the north. Per capita GDP in Lombardia is similar to Germany's. In contrast, the south (il Mezzogiorno) has GDP per capita figures closer to Eastern Europe, unemployment rates of 20-25% in some areas, and significantly lower life prospects for young people.

The cultural dimension: the insults each side uses tell the story — "terrone" (from "terra," earth — used by northerners for southerners, implying peasant backwardness) and "polentone" (polenta-eater — used by southerners for northerners, implying cold northern rigidity). These are words that Italians use with varying degrees of irony and hurt. The Lega Nord (now Lega) built its political identity partly on northern resentment of "having to subsidise" the south.

The great emigrations: Italy has seen two massive migrations. The first was the "Grande Emigrazione" of 1880-1930, when millions of southern Italians emigrated to the Americas — creating the Italian-American communities of New York, Buenos Aires and São Paulo. The second was internal: from the 1950s to the 1970s, millions moved from Sicily, Calabria and Campania to Turin, Milan and Genoa to work in the FIAT factories and industrial plants. The north was built, partly, by the south.

The other side of the coin: the south has its own extraordinary riches. Ancient Greek temples in Agrigento, Norman cathedrals in Palermo, Roman ruins in Pompeii and Herculaneum, the cuisine (pizza from Naples, arancini from Sicily, nduja from Calabria). The concept of "Campania Felix" — the fertile happy land — reminds us that the south was once the wealthy, cultured heartland of Mediterranean civilisation. Many Italians and foreigners are now rediscovering it.`
        },
        cultureVocab: [
            {
                word: "il Mezzogiorno",
                translation: "the South of Italy (literally 'midday/noon')",
                culturalNote: "The term refers to the southern half of the Italian peninsula, including Sicily and Sardinia. Like the French 'Midi,' it uses the sun at its highest to designate the south. The term carries both geographic precision and economic connotations of underdevelopment."
            },
            {
                word: "la questione meridionale",
                translation: "the Southern Question",
                culturalNote: "First articulated in the 19th century after unification, the questione meridionale asks why the south has remained economically behind the north for 160 years. It is one of the most debated topics in Italian history, economics and sociology. Causes proposed range from geography and climate to corruption, the Mafia, and the structural effects of unification itself."
            },
            {
                word: "il triangolo industriale",
                translation: "the industrial triangle",
                culturalNote: "Milan (finance and fashion), Turin (automotive, Fiat) and Genoa (port, logistics) form Italy's economic powerhouse. The phrase dates from the post-war economic miracle (il miracolo economico) of the 1950s-60s, when Italy transformed from an agricultural to an industrial economy faster than any other country."
            },
            {
                word: "i terroni / i polentoni",
                translation: "derogatory regional nicknames",
                culturalNote: "'Terrone' (earth-person) is used by some northerners for southerners; 'polentone' (polenta-eater) is used by southerners for northerners. Both are considered offensive when used seriously, but many Italians use them with ironic affection between friends. Their existence tells you something real about how deeply the divide is felt."
            },
            {
                word: "la Grande Emigrazione",
                translation: "the Great Emigration (1880-1930)",
                culturalNote: "Approximately 13 million Italians emigrated between 1880 and 1930, the majority from southern Italy and Sicily. The US received the most, followed by Argentina and Brazil. This created the world's largest Italian diaspora. Cities like New York, Buenos Aires and São Paulo still have Italian cultural communities directly descended from this migration."
            }
        ],
        questions: [
            {
                id: "it-c-b1-3-q1",
                type: "comprehension",
                prompt: {
                    native: "The text mentions two major emigration waves from southern Italy. What were they, and where did people go?",
                    target: "Il testo menziona due grandi ondate migratorie dall'Italia meridionale. Quali furono e dove andarono le persone?"
                },
                options: [
                    "The Grande Emigrazione to the Americas (1880-1930), and an internal migration to northern industrial cities like Turin and Milan (1950s-1970s)",
                    "A migration to northern Africa in the 1800s, and a migration to Australia in the 1900s",
                    "An internal migration from north to south in the 1800s, and an emigration to the Americas in the 1900s",
                    "Two waves of emigration to the United States, separated by the First World War"
                ],
                answer: "The Grande Emigrazione to the Americas (1880-1930), and an internal migration to northern industrial cities like Turin and Milan (1950s-1970s)"
            },
            {
                id: "it-c-b1-3-q2",
                type: "comprehension",
                prompt: {
                    native: "What is the 'triangolo industriale' and which cities does it include?",
                    target: "Cos'è il 'triangolo industriale' e quali città include?"
                },
                options: [
                    "Milan, Turin and Genoa — Italy's northern industrial powerhouse, home to major companies in finance, automotive and logistics",
                    "Rome, Naples and Palermo — Italy's largest cities by population",
                    "Venice, Florence and Bologna — the cities of Italy's cultural and artistic heritage",
                    "Turin, Lyon and Marseille — a cross-border industrial zone between Italy and France"
                ],
                answer: "Milan, Turin and Genoa — Italy's northern industrial powerhouse, home to major companies in finance, automotive and logistics"
            },
            {
                id: "it-c-b1-3-q3",
                type: "reflection",
                prompt: {
                    native: "Italy has been unified for over 160 years, yet the north-south divide persists. Do you think economic differences between regions are permanent features of large countries, or can they be resolved by policy? Can you think of a similar regional divide in another country?",
                    target: "L'Italia è unificata da oltre 160 anni, eppure il divario Nord-Sud persiste. Pensi che le differenze economiche tra regioni siano caratteristiche permanenti dei grandi paesi, o possano essere risolte con politiche adeguate? Riesci a pensare a un divario regionale simile in un altro paese?"
                }
            }
        ],
        didYouKnow: {
            native: "The city of Detroit in the United States has an Italian-American neighbourhood called 'Italians on the East Side' — but the most Italian city outside Italy is arguably Buenos Aires, where an estimated 25 million Argentines have Italian ancestry (about 60% of the population). Argentine Spanish reflects this: many Italian loanwords entered Rioplatense Spanish, and the distinctive melodic rhythm of Buenos Aires speech is thought by some linguists to derive from the Neapolitan and Genoese intonation patterns of 19th-century immigrants.",
            target: "La città di Detroit negli Stati Uniti ha un quartiere italo-americano chiamato 'Italians on the East Side' — ma la città più italiana fuori dall'Italia è probabilmente Buenos Aires, dove si stima che circa 25 milioni di argentini abbiano origini italiane (circa il 60% della popolazione). Lo spagnolo argentino ne risente: molti prestiti linguistici italiani sono entrati nello spagnolo rioplatense, e il caratteristico ritmo melodico del parlato di Buenos Aires è ritenuto da alcuni linguisti derivare dai modelli di intonazione napoletani e genovesi degli immigrati del XIX secolo."
        },
        relatedIds: ["it-c-b1-1", "it-c-b1-2"]
    }
]
