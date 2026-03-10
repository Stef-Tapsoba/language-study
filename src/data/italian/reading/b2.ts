import { ReadingPassage } from "../../../types"

export const b2Reading: ReadingPassage[] = [
    {
        id: "it-r-b2-1",
        level: "B2",
        category: "everyday",
        title: "La politica italiana e i giovani",
        body: {
            target: "Negli ultimi anni, la partecipazione dei giovani italiani alla vita politica è diventata un tema centrale nel dibattito pubblico. Secondo diversi sondaggi, l'astensionismo elettorale tra i ventenni e i trentenni ha raggiunto livelli preoccupanti: in alcune elezioni regionali, meno del quaranta per cento degli aventi diritto si è recato alle urne. Le cause di questo fenomeno sono molteplici. Da un lato, molti giovani affermano di non sentirsi rappresentati dalle forze politiche tradizionali, percepite come distanti dalle loro esigenze quotidiane. Dall'altro, la precarietà lavorativa e le difficoltà economiche contribuiscono a generare un senso di disillusione nei confronti delle istituzioni. Tuttavia, non mancano segnali incoraggianti: movimenti giovanili impegnati sul fronte ambientale e sociale dimostrano che la partecipazione civica può assumere forme nuove, al di fuori dei canali istituzionali tradizionali.",
            native: "In recent years, the participation of young Italians in political life has become a central theme in public debate. According to various surveys, electoral abstentionism among those in their twenties and thirties has reached worrying levels: in some regional elections, fewer than forty percent of those entitled to vote went to the polls. The causes of this phenomenon are multiple. On the one hand, many young people say they do not feel represented by traditional political forces, which they perceive as remote from their daily needs. On the other hand, job insecurity and economic difficulties contribute to generating a sense of disillusionment with the institutions. However, there are encouraging signs: youth movements active on environmental and social issues demonstrate that civic participation can take new forms, outside the traditional institutional channels."
        },
        vocabGloss: [
            { word: "l'astensionismo", translation: "abstentionism / voter abstention" },
            { word: "gli aventi diritto", translation: "those entitled (to vote)" },
            { word: "recarsi alle urne", translation: "to go to the polls" },
            { word: "la precarietà lavorativa", translation: "job insecurity" },
            { word: "la disillusione", translation: "disillusionment" },
            { word: "la partecipazione civica", translation: "civic participation" }
        ],
        questions: [
            {
                id: "it-r-b2-1-q1",
                level: "B2",
                prompt: "Quale problema viene descritto riguardo ai giovani italiani e le elezioni?",
                options: ["Votano in massa per i partiti di opposizione", "Mostrano alti livelli di astensionismo elettorale", "Partecipano attivamente alla vita parlamentare", "Non hanno ancora il diritto di voto"],
                answer: "Mostrano alti livelli di astensionismo elettorale"
            },
            {
                id: "it-r-b2-1-q2",
                level: "B2",
                prompt: "Quale percentuale di aventi diritto ha votato in alcune elezioni regionali?",
                options: ["Più del sessanta per cento", "Meno del quaranta per cento", "Circa il cinquanta per cento", "Circa il settanta per cento"],
                answer: "Meno del quaranta per cento"
            },
            {
                id: "it-r-b2-1-q3",
                level: "B2",
                prompt: "Secondo il testo, come percepiscono molti giovani le forze politiche tradizionali?",
                options: ["Come vicine alle loro esigenze", "Come troppo radicali", "Come distanti dalle loro esigenze quotidiane", "Come efficienti ma poco comunicative"],
                answer: "Come distanti dalle loro esigenze quotidiane"
            },
            {
                id: "it-r-b2-1-q4",
                level: "B2",
                prompt: "Qual è il segnale incoraggiante citato nel testo?",
                options: ["L'aumento della partecipazione alle elezioni nazionali", "Movimenti giovanili impegnati su temi ambientali e sociali", "La creazione di nuovi partiti politici giovanili", "La riduzione della disoccupazione tra i giovani"],
                answer: "Movimenti giovanili impegnati su temi ambientali e sociali"
            }
        ]
    },
    {
        id: "it-r-b2-2",
        level: "B2",
        category: "history",
        title: "Il Rinascimento italiano",
        body: {
            target: "Il Rinascimento fu un periodo di straordinaria fioritura culturale che si sviluppò in Italia tra il XIV e il XVI secolo, per poi diffondersi in tutta Europa. Nato nelle città-stato della Toscana, in particolare a Firenze sotto il mecenatismo della famiglia Medici, il Rinascimento si caratterizzò per il ritorno all'umanesimo classico e per una nuova visione dell'uomo come centro dell'universo. Artisti del calibro di Leonardo da Vinci, Michelangelo e Raffaello ridefinirono i confini della pittura, della scultura e dell'architettura, mentre pensatori come Niccolò Machiavelli e Francesco Petrarca contribuirono a trasformare la filosofia e la letteratura. Il Rinascimento non fu solo un fenomeno artistico: rappresentò anche una profonda rivoluzione intellettuale che pose le basi del pensiero scientifico moderno e della cultura occidentale contemporanea.",
            native: "The Renaissance was a period of extraordinary cultural flowering that developed in Italy between the fourteenth and sixteenth centuries, before spreading throughout Europe. Born in the city-states of Tuscany, particularly in Florence under the patronage of the Medici family, the Renaissance was characterised by a return to classical humanism and a new vision of man as the centre of the universe. Artists of the calibre of Leonardo da Vinci, Michelangelo, and Raphael redefined the boundaries of painting, sculpture, and architecture, while thinkers such as Niccolò Machiavelli and Francesco Petrarch contributed to transforming philosophy and literature. The Renaissance was not only an artistic phenomenon: it also represented a profound intellectual revolution that laid the foundations of modern scientific thought and contemporary Western culture."
        },
        vocabGloss: [
            { word: "la fioritura", translation: "flowering / flourishing" },
            { word: "il mecenatismo", translation: "patronage (of the arts)" },
            { word: "l'umanesimo", translation: "humanism" },
            { word: "del calibro di", translation: "of the calibre of" },
            { word: "ridefinire i confini", translation: "to redefine the boundaries" },
            { word: "porre le basi", translation: "to lay the foundations" }
        ],
        questions: [
            {
                id: "it-r-b2-2-q1",
                level: "B2",
                prompt: "Dove nacque il Rinascimento italiano?",
                options: ["A Roma, sotto il patronato del Papa", "A Venezia, grazie ai commerci marittimi", "In Toscana, in particolare a Firenze", "A Milano, alla corte degli Sforza"],
                answer: "In Toscana, in particolare a Firenze"
            },
            {
                id: "it-r-b2-2-q2",
                level: "B2",
                prompt: "Quale famiglia favorì il Rinascimento a Firenze con il proprio mecenatismo?",
                options: ["La famiglia Borgia", "La famiglia Medici", "La famiglia Sforza", "La famiglia Este"],
                answer: "La famiglia Medici"
            },
            {
                id: "it-r-b2-2-q3",
                level: "B2",
                prompt: "Quale fu la nuova visione dell'uomo caratteristica del Rinascimento?",
                options: ["L'uomo come servitore di Dio", "L'uomo come centro dell'universo", "L'uomo come parte della natura", "L'uomo come essere irrazionale"],
                answer: "L'uomo come centro dell'universo"
            },
            {
                id: "it-r-b2-2-q4",
                level: "B2",
                prompt: "Oltre all'arte, cosa rappresentò il Rinascimento secondo il testo?",
                options: ["Una crisi religiosa profonda", "Una rivoluzione industriale", "Una profonda rivoluzione intellettuale", "Un periodo di guerre tra città-stato"],
                answer: "Una profonda rivoluzione intellettuale"
            }
        ]
    },
    {
        id: "it-r-b2-3",
        level: "B2",
        category: "literature",
        title: "Italo Calvino e le città invisibili",
        body: {
            target: "Italo Calvino è considerato uno dei più importanti scrittori italiani del Novecento. Nato a Cuba nel 1923 e cresciuto in Liguria, Calvino ha saputo combinare la tradizione narrativa italiana con le avanguardie letterarie internazionali, dando vita a opere di straordinaria originalità. Il suo romanzo più celebre, 'Le città invisibili', pubblicato nel 1972, è strutturato come una serie di dialoghi immaginari tra il viaggiatore veneziano Marco Polo e il Gran Khan Kublai. Polo descrive al Khan cinquantacinque città fantastiche, ognuna delle quali esplora un tema diverso: la memoria, il desiderio, il tempo, la morte. La critica letteraria ha interpretato il libro come un'allegoria della città moderna e dei suoi contradditori, come una riflessione sulla natura della narrazione stessa, e come un'opera che sfida le categorie tradizionali del romanzo.",
            native: "Italo Calvino is considered one of the most important Italian writers of the twentieth century. Born in Cuba in 1923 and raised in Liguria, Calvino was able to combine the Italian narrative tradition with international literary avant-gardes, creating works of extraordinary originality. His most celebrated novel, 'Invisible Cities', published in 1972, is structured as a series of imaginary dialogues between the Venetian traveller Marco Polo and the Great Khan Kublai. Polo describes to the Khan fifty-five fantastical cities, each of which explores a different theme: memory, desire, time, death. Literary critics have interpreted the book as an allegory of the modern city and its contradictions, as a reflection on the nature of narration itself, and as a work that challenges the traditional categories of the novel."
        },
        vocabGloss: [
            { word: "le avanguardie letterarie", translation: "literary avant-gardes" },
            { word: "dando vita a", translation: "giving life to / creating" },
            { word: "fantastiche", translation: "fantastical / imaginary" },
            { word: "l'allegoria", translation: "allegory" },
            { word: "contraddittori", translation: "contradictions" },
            { word: "sfidare", translation: "to challenge" }
        ],
        questions: [
            {
                id: "it-r-b2-3-q1",
                level: "B2",
                prompt: "Dove nacque Italo Calvino?",
                options: ["In Liguria", "A Roma", "A Cuba", "A Venezia"],
                answer: "A Cuba"
            },
            {
                id: "it-r-b2-3-q2",
                level: "B2",
                prompt: "Come è strutturato il romanzo 'Le città invisibili'?",
                options: ["Come un diario di viaggio", "Come dialoghi tra Marco Polo e il Gran Khan", "Come una serie di lettere", "Come un racconto poliziesco"],
                answer: "Come dialoghi tra Marco Polo e il Gran Khan"
            },
            {
                id: "it-r-b2-3-q3",
                level: "B2",
                prompt: "Quante città fantastiche descrive Marco Polo nel romanzo?",
                options: ["Trentadue", "Quarantaquattro", "Cinquantacinque", "Sessantasei"],
                answer: "Cinquantacinque"
            },
            {
                id: "it-r-b2-3-q4",
                level: "B2",
                prompt: "Come ha interpretato la critica letteraria 'Le città invisibili'?",
                options: ["Come una guida turistica medievale", "Come un'allegoria della città moderna e della narrazione stessa", "Come un romanzo storico sulla vita di Marco Polo", "Come una critica al sistema capitalista"],
                answer: "Come un'allegoria della città moderna e della narrazione stessa"
            }
        ]
    },
    {
        id: "it-r-b2-4",
        level: "B2",
        category: "culture",
        title: "Il dibattito sull'ambiente in Italia",
        body: {
            target: "Il cambiamento climatico è ormai al centro del dibattito politico e culturale italiano. Negli ultimi anni, eventi meteorologici estremi — siccità prolungate al Sud, alluvioni al Nord, erosione costiera — hanno reso tangibili gli effetti del riscaldamento globale anche per i cittadini comuni. Di conseguenza, la pressione sui governi affinché adottino politiche ambientali più ambiziose è aumentata notevolmente. Tuttavia, il dibattito è complesso: da un lato, i sostenitori della transizione ecologica sottolineano l'urgenza di ridurre le emissioni e investire nelle energie rinnovabili; dall'altro, rappresentanti dell'industria e dei sindacati temono le ricadute occupazionali di una ristrutturazione economica troppo rapida. Vale la pena sottolineare che l'Italia, nonostante le difficoltà politiche, ha raggiunto alcuni obiettivi importanti in materia di energie rinnovabili, posizionandosi tra i Paesi europei più attivi nel settore solare.",
            native: "Climate change is now at the centre of Italian political and cultural debate. In recent years, extreme weather events — prolonged droughts in the South, floods in the North, coastal erosion — have made the effects of global warming tangible even to ordinary citizens. Consequently, pressure on governments to adopt more ambitious environmental policies has grown considerably. However, the debate is complex: on the one hand, supporters of the ecological transition emphasise the urgency of reducing emissions and investing in renewable energy; on the other, representatives of industry and trade unions fear the employment consequences of too rapid an economic restructuring. It is worth emphasising that Italy, despite its political difficulties, has achieved some important objectives in the field of renewable energy, positioning itself among the most active European countries in the solar sector."
        },
        vocabGloss: [
            { word: "eventi meteorologici estremi", translation: "extreme weather events" },
            { word: "l'alluvione", translation: "flood" },
            { word: "tangibile", translation: "tangible" },
            { word: "la transizione ecologica", translation: "the ecological transition" },
            { word: "le ricadute occupazionali", translation: "employment consequences" },
            { word: "posizionarsi", translation: "to position oneself" }
        ],
        questions: [
            {
                id: "it-r-b2-4-q1",
                level: "B2",
                prompt: "Quali eventi hanno reso visibili gli effetti del riscaldamento globale in Italia?",
                options: ["Terremoti e eruzioni vulcaniche", "Siccità, alluvioni e erosione costiera", "Neve eccezionale e valanghe", "Incendi e frane"],
                answer: "Siccità, alluvioni e erosione costiera"
            },
            {
                id: "it-r-b2-4-q2",
                level: "B2",
                prompt: "Cosa chiedono i sostenitori della transizione ecologica?",
                options: ["Una riduzione delle tasse sul carburante", "Investimenti nell'industria pesante", "Riduzione delle emissioni e investimenti nelle energie rinnovabili", "Il blocco dell'immigrazione"],
                answer: "Riduzione delle emissioni e investimenti nelle energie rinnovabili"
            },
            {
                id: "it-r-b2-4-q3",
                level: "B2",
                prompt: "Cosa temono i rappresentanti dell'industria riguardo alla transizione ecologica?",
                options: ["Un aumento delle tasse", "Le ricadute occupazionali di una ristrutturazione troppo rapida", "La perdita di competitività sui mercati esteri", "La riduzione dei sussidi governativi"],
                answer: "Le ricadute occupazionali di una ristrutturazione troppo rapida"
            },
            {
                id: "it-r-b2-4-q4",
                level: "B2",
                prompt: "In quale settore delle energie rinnovabili l'Italia si è distinta in Europa?",
                options: ["Energia eolica", "Energia idroelettrica", "Energia nucleare", "Energia solare"],
                answer: "Energia solare"
            }
        ]
    }
]
