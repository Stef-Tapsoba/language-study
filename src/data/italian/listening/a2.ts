import { ListeningExercise } from "../../../types"

export const a2Listening: ListeningExercise[] = [
    // ── it-l-a2-1 — Checkpoint 3: Una serata a casa di amici ─────────────────
    {
        id: "it-l-a2-1",
        level: "A2",
        title: "Una serata a casa di amici",
        script: `Sabato sera sono andata a cena da Francesca. La conosco da anni — ci siamo conosciute all'università — ma ultimamente non la vedevo quasi mai. Così quando mi ha invitata, ho accettato subito. Ho portato una bottiglia di vino — ne ho scelta una buona, un Vermentino di Sardegna. Gliel'ho portata e lei era contentissima.

Quando sono arrivata, c'erano già altri tre amici. Uno di loro, Marco, non lo conoscevo. L'ho conosciuto quella sera. Mi sembrava simpatico, così gli ho chiesto dove lavorasse. Mi ha risposto che faceva il fotografo. Non lo sapevo! Francesca non me lo aveva detto.

Durante la cena, Francesca ha cucinato risotto. Ne ha fatto tantissimo — eravamo in cinque, ma ne è rimasto ancora. Ne ho mangiata molta, forse troppa! Il risotto era con i funghi porcini — li adoro. Francesca sa cucinarlo benissimo. Le ho chiesto la ricetta e me la ha mandata sul telefono subito dopo cena.

Dopo aver mangiato, Marco ha tirato fuori una chitarra. Non sapevo che suonasse! L'ho saputo solo quella sera. Ha suonato per quasi un'ora — noi lo ascoltavamo in silenzio. Ci siamo divertiti tantissimo. Alla fine, quando me ne stavo andando, Francesca mi ha detto di tornare presto. Ci torno sicuramente — è stata una delle serate più belle degli ultimi mesi.`,
        translation: `On Saturday evening I went to have dinner at Francesca's. I've known her for years — we met at university — but lately I almost never saw her. So when she invited me, I accepted right away. I brought a bottle of wine — I chose a good one, a Vermentino from Sardinia. I brought it to her and she was very pleased.

When I arrived, there were already three other friends. One of them, Marco, I didn't know. I met him that evening for the first time. He seemed nice, so I asked him where he worked. He told me he was a photographer. I didn't know that! Francesca hadn't told me.

During dinner, Francesca had made risotto. She made an enormous amount — there were five of us but some was still left. I ate a lot, maybe too much! The risotto had porcini mushrooms — I love them. Francesca knows how to cook it brilliantly. I asked her for the recipe and she sent it to me on my phone straight after dinner.

After eating, Marco pulled out a guitar. I didn't know he played! I found out only that evening. He played for almost an hour — we listened to him in silence. We had a wonderful time. At the end, when I was leaving, Francesca told me to come back soon. I'll definitely come back — it was one of the best evenings in months.`,
        dialogue: [
            { speaker: "Valentina (narrante)", text: "Sabato sera sono andata a cena da Francesca. La conosco da anni — ci siamo conosciute all'università — ma ultimamente non la vedevo quasi mai.", translation: "Saturday evening I went to dinner at Francesca's. I've known her for years — we met at university — but lately I almost never saw her." },
            { speaker: "Valentina", text: "Così quando mi ha invitata, ho accettato subito. Ho portato una bottiglia di vino — ne ho scelta una buona, un Vermentino di Sardegna. Gliel'ho portata e lei era contentissima.", translation: "So when she invited me, I accepted right away. I brought a bottle of wine — I chose a good one, a Vermentino. I brought it to her and she was very pleased." },
            { speaker: "Valentina", text: "Quando sono arrivata, c'erano già altri tre amici. Uno di loro, Marco, non lo conoscevo. L'ho conosciuto quella sera.", translation: "When I arrived, there were already three other friends. One of them, Marco, I didn't know. I met him that evening for the first time." },
            { speaker: "Valentina", text: "Francesca ha cucinato risotto. Ne ha fatto tantissimo. Ne ho mangiata molta, forse troppa! Le ho chiesto la ricetta e me la ha mandata subito.", translation: "Francesca cooked risotto. She made an enormous amount. I ate a lot, maybe too much! I asked her for the recipe and she sent it to me right away." },
            { speaker: "Valentina", text: "Dopo aver mangiato, Marco ha tirato fuori una chitarra. Non sapevo che suonasse! L'ho saputo solo quella sera. Ci siamo divertiti tantissimo.", translation: "After eating, Marco pulled out a guitar. I didn't know he played! I found out only that evening. We had a wonderful time." },
        ],
        questions: [
            { id: "it-l-a2-1-q1", level: "A2", prompt: "How long has Valentina known Francesca and where did they meet?", options: ["They met recently at work.", "They have known each other for years — they met at university.", "They grew up in the same neighbourhood.", "They met through Marco."], answer: "They have known each other for years — they met at university." },
            { id: "it-l-a2-1-q2", level: "A2", prompt: "What did Valentina find out about Marco that she hadn't known before?", options: ["That he was Francesca's brother.", "That he was a photographer.", "That he could play the guitar.", "Both b and c"], answer: "Both b and c" },
            { id: "it-l-a2-1-q3", level: "A2", prompt: "In 'ne ho scelta una buona' — what does 'ne' replace?", options: ["Francesca", "The dinner", "A bottle of wine (una bottiglia di vino)", "The recipe"], answer: "A bottle of wine (una bottiglia di vino)" },
            { id: "it-l-a2-1-q4", level: "A2", prompt: "'L'ho saputo solo quella sera' — what construction is this and what does it mean?", options: ["Imperfetto — I used to know it that evening.", "Passato prossimo of sapere = I found out (at that moment), not 'I knew'.", "Futuro — I will know it that evening.", "Condizionale — I would know it."], answer: "Passato prossimo of sapere = I found out (at that moment), not 'I knew'." },
        ],
    },

    // ── it-l-a2-2 — Il viaggio di Matteo (Checkpoint 5) ─────────────────────
    {
        id: "it-l-a2-2",
        level: "A2",
        title: "Il viaggio di Matteo",
        script: `Allora, Matteo me l'ha raccontato ieri sera — e devo dire che non riuscivo quasi a credere ai miei orecchi.

Dunque, Matteo aveva pianificato questo viaggio in Sicilia da mesi. Era il suo sogno da quando era piccolo — sua nonna era di Palermo, e lui non c'era mai stato. Aveva prenotato il volo, il bed and breakfast vicino al centro storico, aveva anche fatto una lista di ristoranti dove voleva andare. Era tutto organizzato.

Il problema è iniziato già all'aeroporto di Milano. Quando è arrivato al banco del check-in, gli hanno detto che il suo volo aveva un ritardo di tre ore — per problemi tecnici, niente di specifico. Matteo mi ha detto che in quel momento avrebbe voluto urlare, però ha cercato di restare calmo. Ha chiamato il bed and breakfast per avvisarli — e per fortuna erano molto disponibili.

Allora, ha aspettato tre ore in aeroporto. Ha mangiato qualcosa, ha letto, ha guardato ogni cinque minuti il tabellone. Alla fine il volo è partito, con quattro ore di ritardo invece di tre. In volo era stanco ma emozionato — si avvicinava finalmente a questo posto che sognava da così tanto tempo.

Quando è atterrato a Palermo era quasi mezzanotte. Ha preso un taxi — l'autista era simpaticissimo, parlava il dialetto siciliano mescolato all'italiano, e Matteo non capiva quasi niente, però rideva. È arrivato al bed and breakfast intorno all'una di notte.

La mattina dopo si è svegliato tardi — dormiva da dieci ore. Ha aperto la finestra e c'era il mercato sotto casa. La gente urlava, vendeva frutta, pescato, erbe. Il sole era fortissimo. E lì, in quel momento, mi ha detto che si è reso conto che ne valeva assolutamente la pena — ritardo, stanchezza, e tutto il resto.

Quindi, insomma, è andata bene. Meglio che bene, alla fine. Mi ha detto che sarebbe tornato il prima possibile — e che avrebbe portato anche me.`,
        translation: `So, Matteo told me about it yesterday evening — and I have to say I could barely believe my ears.

Well, Matteo had been planning this trip to Sicily for months. It had been his dream since he was little — his grandmother was from Palermo, and he had never been. He had booked the flight, the bed and breakfast near the historic centre, he had even made a list of restaurants he wanted to visit. Everything was organised.

The problem started at Milan airport. When he arrived at the check-in desk, they told him his flight had a three-hour delay — for technical problems, nothing specific. Matteo told me that at that moment he wanted to scream, but he tried to stay calm. He called the bed and breakfast to let them know — and fortunately they were very understanding.

So, he waited three hours at the airport. He ate something, read, checked the departures board every five minutes. In the end the flight left, four hours late instead of three. On the plane he was tired but excited — he was finally getting close to this place he had been dreaming about for so long.

When he landed in Palermo it was almost midnight. He took a taxi — the driver was extremely friendly, spoke Sicilian dialect mixed with Italian, and Matteo understood almost nothing, but he was laughing. He arrived at the bed and breakfast around one in the morning.

The next morning he woke up late — he had been sleeping for ten hours. He opened the window and there was a market below. People were shouting, selling fruit, fish, herbs. The sun was very strong. And there, in that moment, he told me he realised it was absolutely worth it — the delay, the tiredness, and everything else.

So, in short, it went well. Better than well, in the end. He told me he would come back as soon as possible — and that he would bring me too.`,
        dialogue: [
            { speaker: "Sofia (narrante)", text: "Allora, Matteo me l'ha raccontato ieri sera. Matteo aveva pianificato questo viaggio in Sicilia da mesi. Era il suo sogno da quando era piccolo.", translation: "So, Matteo told me about it yesterday evening. Matteo had been planning this trip to Sicily for months. It had been his dream since he was little." },
            { speaker: "Sofia", text: "Il problema è iniziato già all'aeroporto di Milano. Il suo volo aveva un ritardo di tre ore. Matteo avrebbe voluto urlare, però ha cercato di restare calmo.", translation: "The problem started at Milan airport. His flight had a three-hour delay. Matteo wanted to scream, but he tried to stay calm." },
            { speaker: "Sofia", text: "Ha aspettato tre ore in aeroporto. Alla fine il volo è partito, con quattro ore di ritardo invece di tre.", translation: "He waited three hours at the airport. In the end the flight left, four hours late instead of three." },
            { speaker: "Sofia", text: "Quando è atterrato a Palermo era quasi mezzanotte. L'autista del taxi parlava il dialetto siciliano e Matteo non capiva quasi niente, però rideva.", translation: "When he landed in Palermo it was almost midnight. The taxi driver spoke Sicilian dialect and Matteo understood almost nothing, but he was laughing." },
            { speaker: "Sofia", text: "La mattina dopo ha aperto la finestra — c'era il mercato sotto casa. Si è reso conto che ne valeva assolutamente la pena. Mi ha detto che sarebbe tornato il prima possibile.", translation: "The next morning he opened the window — there was a market below. He realised it was absolutely worth it. He told me he would come back as soon as possible." },
        ],
        questions: [
            { id: "it-l-a2-2-q1", level: "A2", prompt: "Why did Matteo have a special connection to Sicily?", options: ["He had visited it many times as a child.", "His grandmother was from Palermo.", "He had Sicilian friends.", "He had studied Sicilian history."], answer: "His grandmother was from Palermo." },
            { id: "it-l-a2-2-q2", level: "A2", prompt: "How long was the total delay?", options: ["Two hours", "Three hours", "Four hours", "Five hours"], answer: "Four hours" },
            { id: "it-l-a2-2-q3", level: "A2", prompt: "What convinced Matteo the trip was worth it despite the problems?", options: ["A meal at a famous restaurant", "Opening the window the next morning to see the market, sun, and street life", "Meeting the friendly taxi driver", "Arriving at the bed and breakfast"], answer: "Opening the window the next morning to see the market, sun, and street life" },
            { id: "it-l-a2-2-q4", level: "A2", prompt: "'Era tutto organizzato' — why does the narrator use the imperfetto here?", options: ["Because it is a completed event.", "Because it describes a background state — how things were before the problem started.", "Because 'organizzare' is always imperfetto.", "Because it refers to a habit."], answer: "Because it describes a background state — how things were before the problem started." },
        ],
    },

    // ── it-l-a2-3 — Telefonata all'hotel (Block 4 — condizionale) ─────────────
    {
        id: "it-l-a2-3",
        level: "A2",
        title: "Prenotazione all'Hotel Belvedere",
        script: `Receptionist: Hotel Belvedere, buongiorno.

Cliente: Buongiorno. Vorrei prenotare una camera per due notti — giovedì e venerdì prossimi.

Receptionist: Certo. Avrebbe preferenza per una camera singola o doppia?

Cliente: Doppia, grazie. Avrebbe qualcosa con vista sulla città?

Receptionist: Sì, abbiamo ancora una camera disponibile al terzo piano con vista sul centro storico. Sarebbe per due persone?

Cliente: Sì, esatto. Quanto costerebbe per due notti?

Receptionist: Sarebbero duecento e quaranta euro, colazione inclusa.

Cliente: Ottimo. A che ora è possibile fare il check-in?

Receptionist: Il check-in è dalle quattordici. Se dovesse arrivare prima, possiamo tenerle i bagagli.

Cliente: Perfetto. Potrebbe mandarmi una conferma via email?

Receptionist: Certamente. Le dispiacerebbe lasciarmi il suo indirizzo email?

Cliente: Naturalmente. È bianchi punto marco chiocciola gmail punto com.

Receptionist: Benissimo. Avrà la conferma entro un'ora. C'è altro che posso fare per lei?

Cliente: No, grazie — è stato molto gentile. Arriverò giovedì intorno alle diciassette.

Receptionist: Perfetto. La aspettiamo. Arrivederla.`,
        translation: `Receptionist: Hotel Belvedere, good morning.

Guest: Good morning. I would like to book a room for two nights — next Thursday and Friday.

Receptionist: Of course. Would you prefer a single or double room?

Guest: Double, thank you. Would you have anything with a city view?

Receptionist: Yes, we still have a room available on the third floor with a view of the historic centre. Would it be for two people?

Guest: Yes, exactly. How much would it be for two nights?

Receptionist: It would be two hundred and forty euros, breakfast included.

Guest: Excellent. What time is it possible to check in?

Receptionist: Check-in is from two pm. If you should arrive earlier, we can hold your luggage.

Guest: Perfect. Could you send me a confirmation by email?

Receptionist: Certainly. Would you mind leaving me your email address?

Guest: Of course. It's bianchi dot marco at gmail dot com.

Receptionist: Very good. You'll have the confirmation within an hour. Is there anything else I can do for you?

Guest: No, thank you — you've been very kind. I'll arrive on Thursday around five pm.

Receptionist: Perfect. We look forward to seeing you. Goodbye.`,
        dialogue: [
            { speaker: "Receptionist", text: "Hotel Belvedere, buongiorno.", translation: "Hotel Belvedere, good morning." },
            { speaker: "Cliente", text: "Buongiorno. Vorrei prenotare una camera per due notti — giovedì e venerdì prossimi.", translation: "Good morning. I'd like to book a room for two nights — next Thursday and Friday." },
            { speaker: "Receptionist", text: "Certo. Avrebbe preferenza per una camera singola o doppia?", translation: "Of course. Would you prefer a single or double room?" },
            { speaker: "Cliente", text: "Doppia, grazie. Avrebbe qualcosa con vista sulla città?", translation: "Double, thank you. Would you have anything with a city view?" },
            { speaker: "Receptionist", text: "Sì, abbiamo ancora una camera al terzo piano. Sarebbero duecento e quaranta euro, colazione inclusa.", translation: "Yes, we have a room on the third floor. It would be two hundred and forty euros, breakfast included." },
            { speaker: "Cliente", text: "Potrebbe mandarmi una conferma via email? Arriverò giovedì intorno alle diciassette.", translation: "Could you send me a confirmation by email? I'll arrive on Thursday around five pm." },
        ],
        questions: [
            { id: "it-l-a2-3-q1", level: "A2", prompt: "What type of room does the guest book?", options: ["Single with city view", "Double with city view", "Double with sea view", "Suite"], answer: "Double with city view" },
            { id: "it-l-a2-3-q2", level: "A2", prompt: "What is the total cost including breakfast?", options: ["120 euros", "180 euros", "240 euros", "300 euros"], answer: "240 euros" },
            { id: "it-l-a2-3-q3", level: "A2", prompt: "Count how many times the condizionale is used in the dialogue. Which verb appears most often?", options: ["avere — avrebbe", "volere — vorrei", "potere — potrebbe", "essere — sarebbe"], answer: "volere — vorrei" },
            { id: "it-l-a2-3-q4", level: "A2", prompt: "What time does the guest say they will arrive on Thursday?", options: ["Around 2 pm", "Around 4 pm", "Around 5 pm", "Around 7 pm"], answer: "Around 5 pm" },
        ],
    },

    // ── it-l-a2-4 — Dal medico (Block 5 — health) ────────────────────────────
    {
        id: "it-l-a2-4",
        level: "A2",
        title: "Dal medico — una visita",
        script: `Medico: Allora, cosa la porta qui oggi?

Paziente: Ho mal di gola da tre giorni e la febbre da ieri sera — circa trentotto e mezzo. Mi fanno male anche le orecchie.

Medico: Da quanto tempo ha mal d'orecchi?

Paziente: Da ieri. Il dolore è abbastanza forte, soprattutto a destra.

Medico: Apra la bocca... Sì, la gola è molto arrossata. Le guardo anche le orecchie. Sì, vedo un'infezione. Ha un'angina con otite.

Paziente: È grave?

Medico: No, non è grave, ma bisogna trattarla subito. Le prescrivo degli antibiotici — deve prenderli per dieci giorni, due volte al giorno. Non deve smettere prima anche se si sente meglio dopo due giorni — è importante finire il ciclo.

Paziente: Capisco. Posso lavorare?

Medico: Dovresti stare a casa almeno domani. Beva molta acqua e prenda il paracetamolo se ha ancora la febbre. Se entro tre giorni non migliora, torni a trovarmi.

Paziente: Grazie, dottoressa. Dove vado a ritirare la ricetta?

Medico: Gliela stampo adesso. In farmacia troverà tutto.`,
        translation: `Doctor: So, what brings you here today?

Patient: I've had a sore throat for three days and a fever since last night — about thirty-eight point five. My ears hurt too.

Doctor: How long have your ears been hurting?

Patient: Since yesterday. The pain is quite strong, especially on the right.

Doctor: Open your mouth... Yes, the throat is very red. I'll look at your ears too. Yes, I can see an infection. You have a throat infection with an ear infection.

Patient: Is it serious?

Doctor: No, it's not serious, but it needs treating right away. I'll prescribe antibiotics — you must take them for ten days, twice a day. You must not stop early even if you feel better after two days — it's important to finish the course.

Patient: I understand. Can I go to work?

Doctor: You should stay home at least tomorrow. Drink plenty of water and take paracetamol if you still have a fever. If you haven't improved in three days, come back and see me.

Patient: Thank you, doctor. Where do I pick up the prescription?

Doctor: I'll print it for you now. You'll find everything at the pharmacy.`,
        dialogue: [
            { speaker: "Medico", text: "Allora, cosa la porta qui oggi?", translation: "So, what brings you here today?" },
            { speaker: "Paziente", text: "Ho mal di gola da tre giorni e la febbre da ieri sera. Mi fanno male anche le orecchie.", translation: "I've had a sore throat for three days and a fever since last night. My ears hurt too." },
            { speaker: "Medico", text: "Ha un'angina con otite. Le prescrivo degli antibiotici per dieci giorni.", translation: "You have a throat and ear infection. I'll prescribe antibiotics for ten days." },
            { speaker: "Paziente", text: "Posso lavorare?", translation: "Can I go to work?" },
            { speaker: "Medico", text: "Dovresti stare a casa almeno domani. Beva molta acqua. Se entro tre giorni non migliora, torni a trovarmi.", translation: "You should stay home at least tomorrow. Drink plenty of water. If you haven't improved in three days, come back." },
            { speaker: "Paziente", text: "Grazie, dottoressa. Dove vado a ritirare la ricetta?", translation: "Thank you, doctor. Where do I pick up the prescription?" },
            { speaker: "Medico", text: "Gliela stampo adesso. In farmacia troverà tutto.", translation: "I'll print it for you now. You'll find everything at the pharmacy." },
        ],
        questions: [
            { id: "it-l-a2-4-q1", level: "A2", prompt: "What does the doctor diagnose the patient with?", options: ["Flu and high blood pressure", "A throat and ear infection (angina con otite)", "A cold and stomachache", "Bronchitis"], answer: "A throat and ear infection (angina con otite)" },
            { id: "it-l-a2-4-q2", level: "A2", prompt: "How long must the patient take the antibiotics?", options: ["Five days", "Seven days", "Ten days", "Two weeks"], answer: "Ten days" },
            { id: "it-l-a2-4-q3", level: "A2", prompt: "'Mi fanno male le orecchie' — why is it 'fanno' and not 'fa'?", options: ["Because 'orecchie' is a proper noun.", "Because the ears are plural — the verb agrees with the body part, not the person.", "Because the doctor uses a formal register.", "Because 'fare male' always uses 'fanno'."], answer: "Because the ears are plural — the verb agrees with the body part, not the person." },
            { id: "it-l-a2-4-q4", level: "A2", prompt: "'Gliela stampo adesso' — what does 'gliela' refer to?", options: ["the antibiotics (to him/her)", "the prescription — to the patient (gli/le = to you; la = the prescription, f.)", "the pharmacy", "the appointment"], answer: "the prescription — to the patient (gli/le = to you; la = the prescription, f.)" },
        ],
    },
]
