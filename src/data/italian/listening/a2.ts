// src/data/italian/listening/a2.ts
import { ListeningExercise } from "../../../types"

export const a2Listening: ListeningExercise[] = [
    {
        id: "it-l-a2-1",
        level: "A2",
        title: "Il meteo — bollettino meteorologico",
        script: "Buonasera e benvenuti al bollettino meteo. Questa sera arrivano nuvole da ovest. Questa notte pioverà al nord e al nord-ovest d'Italia. Domani mattina farà freddo con temperature intorno ai sei gradi. Nel pomeriggio il sole tornerà al centro e al sud. Le temperature saliranno tra i quattordici e i diciassette gradi. Il fine settimana il tempo sarà variabile con possibili rovesci sabato. Domenica sarà la giornata migliore della settimana con sole su tutta la penisola.",
        translation: "Good evening and welcome to the weather bulletin. This evening clouds are arriving from the west. Tonight it will rain in the north and north-west of Italy. Tomorrow morning it will be cold with temperatures around six degrees. In the afternoon the sun will return in the centre and south. Temperatures will rise to between fourteen and seventeen degrees. At the weekend the weather will be changeable with possible showers on Saturday. Sunday will be the best day of the week with sunshine across the whole peninsula.",
        questions: [
            {
                id: "it-l-a2-1-q1",
                level: "A2",
                prompt: "Dove pioverà questa notte?",
                options: ["Al nord e al nord-ovest", "Al sud e al centro", "In tutta Italia", "Solo a Roma"],
                answer: "Al nord e al nord-ovest"
            },
            {
                id: "it-l-a2-1-q2",
                level: "A2",
                prompt: "Quali temperature sono previste nel pomeriggio?",
                options: ["Tra 14 e 17 gradi", "Intorno ai 6 gradi", "Tra 10 e 12 gradi", "Oltre i 20 gradi"],
                answer: "Tra 14 e 17 gradi"
            },
            {
                id: "it-l-a2-1-q3",
                level: "A2",
                prompt: "Quale sarà il giorno migliore del fine settimana?",
                options: ["Domenica", "Sabato", "Entrambi", "Nessuno dei due"],
                answer: "Domenica"
            }
        ]
    },
    {
        id: "it-l-a2-2",
        level: "A2",
        title: "Alla stazione — comprare un biglietto",
        script: "Buongiorno, vorrei un biglietto per Venezia, per favore. Per quando? Per oggi, il treno delle quindici. In prima o in seconda classe? In seconda classe, grazie. Solo andata o andata e ritorno? Andata e ritorno. Il ritorno per quando? Domenica prossima, la sera se possibile. C'è un Frecciargento alle diciassette e cinquanta. Perfetto! Quanto costa? Ottantasei euro in totale. Pago con carta. Ecco i suoi biglietti. Buon viaggio!",
        translation: "Good morning, I'd like a ticket to Venice, please. For when? For today, the three o'clock train. First or second class? Second class, thank you. Single or return? Return. When for the return? Next Sunday, in the evening if possible. There's a Frecciargento at seventeen fifty. Perfect! How much is it? Eighty-six euros in total. I'll pay by card. Here are your tickets. Have a good journey!",
        dialogue: [
            { speaker: "Cliente", text: "Buongiorno, vorrei un biglietto per Venezia, per favore.", translation: "Good morning, I'd like a ticket to Venice, please." },
            { speaker: "Impiegato", text: "Per quando?", translation: "For when?" },
            { speaker: "Cliente", text: "Per oggi, il treno delle quindici.", translation: "For today, the three o'clock train." },
            { speaker: "Impiegato", text: "In prima o in seconda classe?", translation: "First or second class?" },
            { speaker: "Cliente", text: "In seconda classe, grazie.", translation: "Second class, thank you." },
            { speaker: "Impiegato", text: "Solo andata o andata e ritorno?", translation: "Single or return?" },
            { speaker: "Cliente", text: "Andata e ritorno.", translation: "Return." },
            { speaker: "Impiegato", text: "Il ritorno per quando?", translation: "When for the return?" },
            { speaker: "Cliente", text: "Domenica prossima, la sera se possibile.", translation: "Next Sunday, in the evening if possible." },
            { speaker: "Impiegato", text: "C'è un Frecciargento alle diciassette e cinquanta.", translation: "There's a Frecciargento at seventeen fifty." },
            { speaker: "Cliente", text: "Perfetto! Quanto costa?", translation: "Perfect! How much is it?" },
            { speaker: "Impiegato", text: "Ottantasei euro in totale.", translation: "Eighty-six euros in total." },
            { speaker: "Cliente", text: "Pago con carta.", translation: "I'll pay by card." },
            { speaker: "Impiegato", text: "Ecco i suoi biglietti. Buon viaggio!", translation: "Here are your tickets. Have a good journey!" },
        ],
        questions: [
            {
                id: "it-l-a2-2-q1",
                level: "A2",
                prompt: "Dove vuole andare la persona?",
                options: ["A Venezia", "A Milano", "A Roma", "A Firenze"],
                answer: "A Venezia"
            },
            {
                id: "it-l-a2-2-q2",
                level: "A2",
                prompt: "Che tipo di biglietto prende?",
                options: ["Andata e ritorno in seconda classe", "Solo andata in prima classe", "Andata e ritorno in prima classe", "Solo andata in seconda classe"],
                answer: "Andata e ritorno in seconda classe"
            },
            {
                id: "it-l-a2-2-q3",
                level: "A2",
                prompt: "Quanto costano i biglietti?",
                options: ["Ottantasei euro", "Cinquantasei euro", "Cento euro", "Settanta euro"],
                answer: "Ottantasei euro"
            }
        ]
    },
    {
        id: "it-l-a2-3",
        level: "A2",
        title: "La famiglia Rossi — descrizione",
        script: "La famiglia Rossi è una famiglia tipica di Milano. Il signor Rossi ha quarantaquattro anni. È ingegnere. Lavora in un'azienda di informatica dal lunedì al venerdì. La signora Rossi ha quarantuno anni. È avvocatessa. Hanno tre figli: una figlia di diciassette anni che si chiama Chiara, e due gemelli di dieci anni che si chiamano Andrea e Matteo. Il fine settimana, la famiglia ama andare in bicicletta nei parchi della città. Hanno anche due gatti, Neve e Carbone. I Rossi abitano in un grande appartamento con vista sul parco.",
        translation: "The Rossi family is a typical family from Milan. Mr Rossi is forty-four years old. He is an engineer. He works in an IT company from Monday to Friday. Mrs Rossi is forty-one years old. She is a lawyer. They have three children: a seventeen-year-old daughter called Chiara, and ten-year-old twins called Andrea and Matteo. At the weekend, the family likes cycling in the city parks. They also have two cats, Neve and Carbone. The Rossis live in a large apartment with a view of the park.",
        questions: [
            {
                id: "it-l-a2-3-q1",
                level: "A2",
                prompt: "Qual è il lavoro del signor Rossi?",
                options: ["Ingegnere", "Avvocato", "Medico", "Insegnante"],
                answer: "Ingegnere"
            },
            {
                id: "it-l-a2-3-q2",
                level: "A2",
                prompt: "Quanti anni hanno i gemelli?",
                options: ["Dieci anni", "Diciassette anni", "Dodici anni", "Otto anni"],
                answer: "Dieci anni"
            },
            {
                id: "it-l-a2-3-q3",
                level: "A2",
                prompt: "Cosa fa la famiglia nel fine settimana?",
                options: ["Va in bicicletta nei parchi", "Va al mare", "Visita musei", "Fa sport in palestra"],
                answer: "Va in bicicletta nei parchi"
            }
        ]
    },
    {
        id: "it-l-a2-4",
        level: "A2",
        title: "Il mio weekend — raccontare attività",
        script: "Ciao Valentina! Hai passato un bel weekend? Sì, molto! Sabato mattina ho fatto una passeggiata al parco con degli amici. Poi nel pomeriggio sono andata al cinema. Ho visto un film italiano bellissimo. Sabato sera ho cenato in un ristorante tipico con la mia famiglia. Abbiamo mangiato la pizza e i dolci erano fantastici! Domenica ha fatto brutto tempo. Allora sono rimasta a casa e ho letto un libro. E tu, cosa hai fatto nel fine settimana?",
        translation: "Hi Valentina! Did you have a nice weekend? Yes, very much! On Saturday morning I went for a walk in the park with some friends. Then in the afternoon I went to the cinema. I saw a beautiful Italian film. On Saturday evening I had dinner at a typical restaurant with my family. We ate pizza and the desserts were fantastic! On Sunday the weather was bad. So I stayed at home and read a book. And you, what did you do at the weekend?",
        dialogue: [
            { speaker: "Amica", text: "Ciao Valentina! Hai passato un bel weekend?", translation: "Hi Valentina! Did you have a nice weekend?" },
            { speaker: "Valentina", text: "Sì, molto! Sabato mattina ho fatto una passeggiata al parco con degli amici. Poi nel pomeriggio sono andata al cinema. Ho visto un film italiano bellissimo. Sabato sera ho cenato in un ristorante tipico con la mia famiglia. Abbiamo mangiato la pizza e i dolci erano fantastici! Domenica ha fatto brutto tempo. Allora sono rimasta a casa e ho letto un libro.", translation: "Yes, very much! On Saturday morning I went for a walk in the park with some friends. Then in the afternoon I went to the cinema. I saw a beautiful Italian film. On Saturday evening I had dinner at a typical restaurant with my family. We ate pizza and the desserts were fantastic! On Sunday the weather was bad. So I stayed at home and read a book." },
            { speaker: "Amica", text: "E tu, cosa hai fatto nel fine settimana?", translation: "And you, what did you do at the weekend?" },
        ],
        questions: [
            {
                id: "it-l-a2-4-q1",
                level: "A2",
                prompt: "Dove è andata Valentina sabato mattina?",
                options: ["Al parco", "Al cinema", "Al ristorante", "A casa di amici"],
                answer: "Al parco"
            },
            {
                id: "it-l-a2-4-q2",
                level: "A2",
                prompt: "Cosa hanno mangiato al ristorante?",
                options: ["La pizza", "La pasta", "Il pesce", "La carne"],
                answer: "La pizza"
            },
            {
                id: "it-l-a2-4-q3",
                level: "A2",
                prompt: "Perché è rimasta a casa domenica?",
                options: ["Ha fatto brutto tempo", "Era stanca", "Doveva lavorare", "Era malata"],
                answer: "Ha fatto brutto tempo"
            }
        ]
    }
]
