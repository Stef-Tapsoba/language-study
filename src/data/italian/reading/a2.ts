import { ReadingPassage } from "../../../types"

export const a2Reading: ReadingPassage[] = [
    // ── it-r-a2-1 — Un weekend che non dimentico (Block 1 — past narration) ──
    {
        id: "it-r-a2-1",
        level: "A2",
        category: "everyday",
        title: "Un weekend che non dimentico",
        body: {
            target: `Era venerdì sera. Ero stanca dopo una settimana di lavoro e volevo solo rilassarmi. Ma la mia amica Giulia mi ha chiamato e mi ha convinto a partire con lei per Firenze.

Siamo partite il sabato mattina presto — con il treno delle sette. Faceva freddo e la stazione era già piena di gente. Mentre aspettavamo sul binario, Giulia ha tirato fuori due cornetti dal sacchetto. "Colazione in treno," ha detto con un sorriso.

Siamo arrivate a Firenze alle nove e mezza. Abbiamo lasciato le valigie in albergo e siamo uscite subito. Faceva un sole bellissimo — uno di quei giorni di novembre in cui la luce è perfetta.

Abbiamo passato la mattina agli Uffizi. Non ci ero mai stata. Mi aspettavo qualcosa di grande, ma non così. Davanti alla Venere di Botticelli mi sono fermata dieci minuti. Non riuscivo a muovermi.

Nel pomeriggio abbiamo camminato per ore. Abbiamo attraversato il Ponte Vecchio, siamo salite al Piazzale Michelangelo, abbiamo visto la città dall'alto. Era bellissima.

La sera abbiamo mangiato una bistecca alla fiorentina in un ristorante nel centro storico. Non l'avevo mai mangiata prima — era enorme, media al sangue, perfetta.

Siamo tornate domenica pomeriggio. Ero stanchissima ma felice. Quello che mi ha colpito di più? Non i monumenti, non il cibo. Il momento davanti alla Venere — quando mi sono resa conto di quanto è bello fermarsi davanti a qualcosa di bello.`,
            native: `It was Friday evening. I was tired after a week of work and just wanted to relax. But my friend Giulia called me and convinced me to go to Florence with her.

We left on Saturday morning early — on the seven o'clock train. It was cold and the station was already full of people. While we waited on the platform, Giulia pulled out two croissants from a bag. "Breakfast on the train," she said with a smile.

We arrived in Florence at half past nine. We left our bags at the hotel and went straight out. The sun was beautiful — one of those November days when the light is perfect.

We spent the morning at the Uffizi. I had never been. I was expecting something great, but not that great. In front of Botticelli's Venus I stopped for ten minutes. I couldn't move.

In the afternoon we walked for hours. We crossed the Ponte Vecchio, we climbed up to Piazzale Michelangelo, we saw the city from above. It was beautiful.

In the evening we ate a bistecca alla fiorentina at a restaurant in the historic centre. I had never eaten it before — it was enormous, medium rare, perfect.

We came back on Sunday afternoon. I was exhausted but happy. What struck me most? Not the monuments, not the food. The moment in front of the Venus — when I realised how beautiful it is to stop in front of something beautiful.`
        },
        vocabGloss: [
            { word: "convincere", translation: "to convince" },
            { word: "il binario", translation: "platform / track" },
            { word: "il cornetto", translation: "Italian croissant (crescent pastry)" },
            { word: "gli Uffizi", translation: "the Uffizi (famous art museum in Florence)" },
            { word: "la bistecca alla fiorentina", translation: "Florentine steak (T-bone, very thick, always served rare)" },
            { word: "al sangue", translation: "rare / bloody (for meat)" },
            { word: "il Piazzale Michelangelo", translation: "Michelangelo Square (panoramic viewpoint in Florence)" },
        ],
        questions: [
            { id: "it-r-a2-1-q1", level: "A2", prompt: "Why did the narrator go to Florence that weekend?", options: ["She had planned it for months.", "Her friend Giulia convinced her to go.", "She had a business meeting there.", "She was already going for another reason."], answer: "Her friend Giulia convinced her to go." },
            { id: "it-r-a2-1-q2", level: "A2", prompt: "What moment affected the narrator most deeply?", options: ["Eating the bistecca alla fiorentina", "Crossing the Ponte Vecchio", "Standing in front of Botticelli's Venus at the Uffizi", "Seeing the city from Piazzale Michelangelo"], answer: "Standing in front of Botticelli's Venus at the Uffizi" },
            { id: "it-r-a2-1-q3", level: "A2", prompt: "In the sentence 'Non ci ero mai stata' — which tense is 'ero stata' and why?", options: ["Present — she is there now.", "Passato prossimo — she had just arrived.", "Trapassato (past perfect) — she had never been before that moment.", "Imperfetto — she used to go."], answer: "Trapassato (past perfect) — she had never been before that moment." },
        ],
    },

    // ── it-r-a2-2 — La rivalità tra Roma e Milano (Block 2 — comparatives) ───
    {
        id: "it-r-a2-2",
        level: "A2",
        category: "culture",
        title: "Roma o Milano — quale è meglio?",
        body: {
            target: `Gli italiani adorano discutere di tutto, ma la discussione più appassionata è sempre la stessa: Roma o Milano?

Roma è più antica, più caotica, e ha sicuramente più storia da vedere. I suoi monumenti sono imbattibili — il Colosseo, il Pantheon, le piazze barocche. Quello che mi piace di Roma è l'atmosfera: la gente parla ad alta voce, il caffè si beve in piedi al bancone, c'è sempre qualcosa che succede. È meno efficiente di Milano, ma è più umana.

Milano, invece, è la capitale economica del paese. È più moderna, più organizzata, e i suoi trasporti funzionano meglio. Chi cerca lavoro sa che le opportunità qui sono maggiori che in qualsiasi altra città italiana. Per fare carriera, non c'è posto migliore.

Ma per la qualità della vita? Dipende da cosa cerchi. Se vuoi musei d'arte contemporanea, moda internazionale, e una vita notturna vivace — Milano è la risposta. Se vuoi storia, cibo tradizionale, clima mite, e un ritmo più lento — Roma, senza dubbio.

Il cibo è un capitolo a parte. A Roma si mangia benissimo: cacio e pepe, carciofi alla romana, supplì. A Milano la cucina è più internazionale — ottima, ma diversa. Meno tradizionale, più innovativa.

La verità? Non c'è una risposta. Molti italiani hanno vissuto in entrambe le città e amano entrambe per ragioni diverse. La rivalità esiste, ma in fondo è affettuosa. Come quella tra fratelli.`,
            native: `Italians love debating everything, but the most passionate debate is always the same: Rome or Milan?

Rome is older, more chaotic, and certainly has more history to see. Its monuments are unbeatable — the Colosseum, the Pantheon, the Baroque piazzas. What I like about Rome is the atmosphere: people speak loudly, coffee is drunk standing at the counter, there is always something happening. It is less efficient than Milan, but more human.

Milan, by contrast, is the economic capital of the country. It is more modern, more organised, and its transport works better. Those looking for work know that opportunities here are greater than in any other Italian city. For building a career, there is no better place.

But for quality of life? It depends on what you're looking for. If you want contemporary art museums, international fashion, and a lively nightlife — Milan is the answer. If you want history, traditional food, mild weather, and a slower pace — Rome, without doubt.

Food is a separate chapter. In Rome the food is excellent: cacio e pepe, Roman-style artichokes, supplì. In Milan the cuisine is more international — excellent, but different. Less traditional, more innovative.

The truth? There is no answer. Many Italians have lived in both cities and love both for different reasons. The rivalry exists, but at heart it is affectionate. Like that between siblings.`
        },
        vocabGloss: [
            { word: "il bancone", translation: "the counter (in a bar)" },
            { word: "la moda", translation: "fashion" },
            { word: "la vita notturna", translation: "nightlife" },
            { word: "il cacio e pepe", translation: "a classic Roman pasta dish with pecorino and black pepper" },
            { word: "il supplì", translation: "Roman fried rice balls filled with tomato and mozzarella" },
            { word: "affettuoso/a", translation: "affectionate" },
            { word: "in fondo", translation: "at heart / deep down" },
        ],
        questions: [
            { id: "it-r-a2-2-q1", level: "A2", prompt: "According to the text, what is Milan better for than Rome?", options: ["Traditional food and history", "Career opportunities and modern transport", "Baroque monuments and piazzas", "Mediterranean climate"], answer: "Career opportunities and modern transport" },
            { id: "it-r-a2-2-q2", level: "A2", prompt: "How does the author describe the rivalry between Rome and Milan?", options: ["Bitter and destructive", "Purely political", "Affectionate, like that between siblings", "A recent invention"], answer: "Affectionate, like that between siblings" },
            { id: "it-r-a2-2-q3", level: "A2", prompt: "Find an example of 'migliore' (adj.) used correctly in the text.", options: ["'funzionano meglio'", "'non c'è posto migliore'", "'più moderna'", "'meno efficiente'"], answer: "'non c'è posto migliore'" },
        ],
    },

    // ── it-r-a2-3 — Una serata di equivoci (Block 3 — pronoun-rich) ──────────
    {
        id: "it-r-a2-3",
        level: "A2",
        category: "everyday",
        title: "Una serata di equivoci",
        body: {
            target: `Mia sorella Paola mi ha chiamato giovedì sera. "Vieni sabato? Faccio una cena — ti aspetto."

Non l'avevo vista da mesi, così ho detto di sì subito. "Vengo — ci conto."

Sabato sera sono arrivato/a con una bottiglia di vino. Gliel'ho portata come regalo. Lei l'ha aperta subito e ne abbiamo bevuta un po' prima di cena.

C'erano anche due suoi colleghi — non li conoscevo. Me li ha presentati: "Lui si chiama Francesco, lei si chiama Marta." Abbiamo parlato per un'ora prima di sederci a tavola.

Durante la cena, Paola ha tirato fuori le lasagne. Ne aveva preparata tantissima — ne abbiamo mangiata fino alle undici. Era buonissima. Gliel'ho detto tre volte.

Poi è arrivato il momento del dolce. Paola ne ha portato uno bellissimo — una torta al cioccolato. Mentre la tagliava, ho detto: "Ma questo dolce l'hai comprato?"

Lei mi ha guardata con un'espressione strana. "L'ho fatto io. Con le mie mani. Ci ho messo tre ore."

Ho capito immediatamente di aver fatto una gaffe enorme. Ho cercato di rimediare: "No, no — intendevo dire che sembrava da pasticceria!"

Lei non mi ha creduta. Non gliene ha parlato per tutto il resto della sera — ma alla fine, quando me ne stavo andando, mi ha sorriso. "Ti voglio bene lo stesso, sai."

Meno male.`,
            native: `My sister Paola called me on Thursday evening. "Are you coming on Saturday? I'm making a dinner — I'm expecting you."

I hadn't seen her for months, so I said yes right away. "I'll come — I'm counting on it."

On Saturday evening I arrived with a bottle of wine. I brought it to her as a gift. She opened it right away and we had some before dinner.

There were also two of her colleagues — I didn't know them. She introduced them to me: "His name is Francesco, her name is Marta." We talked for an hour before sitting down at the table.

During dinner, Paola brought out the lasagne. She had prepared an enormous amount — we ate it until eleven. It was delicious. I told her so three times.

Then came the dessert moment. Paola brought out a beautiful one — a chocolate cake. While she was cutting it, I said: "But did you buy this dessert?"

She looked at me with a strange expression. "I made it myself. With my own hands. It took me three hours."

I realised immediately I had made an enormous gaffe. I tried to make up for it: "No, no — I meant it looked like it came from a pastry shop!"

She didn't believe me. She didn't say a word about it for the rest of the evening — but in the end, when I was leaving, she smiled at me. "I love you all the same, you know."

Thank goodness.`
        },
        vocabGloss: [
            { word: "ci conto", translation: "I'm counting on it / I'll be there" },
            { word: "la gaffe", translation: "social blunder / faux pas" },
            { word: "rimediare", translation: "to make up for / to fix" },
            { word: "la pasticceria", translation: "pastry shop / patisserie" },
            { word: "meno male", translation: "thank goodness / luckily" },
            { word: "gliel'ho portata", translation: "I brought it to her (combined pronoun)" },
            { word: "ne abbiamo bevuta", translation: "we drank some of it (ne = partitive)" },
        ],
        questions: [
            { id: "it-r-a2-3-q1", level: "A2", prompt: "What was the narrator's mistake at dinner?", options: ["They arrived without a gift.", "They implied the cake had been bought rather than home-made.", "They forgot to come at all.", "They broke a glass."], answer: "They implied the cake had been bought rather than home-made." },
            { id: "it-r-a2-3-q2", level: "A2", prompt: "In 'Gliel'ho portata' — what does 'glie-' refer to and what does '-la' refer to?", options: ["glie = to her sister; la = the wine bottle", "glie = to the colleagues; la = the cake", "glie = to herself; la = the gift", "glie = to Francesco; la = Marta"], answer: "glie = to her sister; la = the wine bottle" },
            { id: "it-r-a2-3-q3", level: "A2", prompt: "Find an example of 'ne' used as a partitive in the text.", options: ["'ci conto'", "'ne abbiamo bevuta un po''", "'gliel'ho portata'", "'me li ha presentati'"], answer: "'ne abbiamo bevuta un po''" },
        ],
    },

    // ── it-r-a2-4 — Lettera a me stessa a 20 anni (Block 4 — future/conditional)
    {
        id: "it-r-a2-4",
        level: "A2",
        category: "everyday",
        title: "Cara me di vent'anni",
        body: {
            target: `Cara me di vent'anni,

Ti scrivo dal futuro — ho trentadue anni adesso e ho pensato spesso a cosa avrei voluto sapere quando avevi la tua età.

La prima cosa: non avere tanta fretta. Pensi che a trent'anni tutto sarà risolto, che avrai la carriera, la casa, la certezza. Non funziona così. A trent'anni avrai ancora molte domande — e andrà bene lo stesso.

La seconda: viaggerai di più di quanto pensi. Non sai ancora dove andrai, ma so io quello che ti aspetta — e ti invidio. I viaggi che farai cambieranno il modo in cui vedi il mondo. Quando arriverai in certi posti, capirai cose che adesso non riesci nemmeno a immaginare.

La terza: ci sarà una persona nella tua vita che adesso non conosci ancora. La incontrerai per caso, in un posto che non ti aspetti. Quando l'hai conosciuta — perché succederà — pensa a questa lettera.

Se potessi darti un consiglio, te ne darei uno solo: smetti di aspettare il momento giusto. Non arriverà mai. Il momento giusto è adesso, sempre adesso. Quindi — vai.

Con affetto,
Tu`,
            native: `Dear twenty-year-old me,

I'm writing to you from the future — I'm thirty-two years old now and I've often thought about what I would have wanted to know at your age.

The first thing: don't be in such a hurry. You think that by thirty everything will be resolved, that you'll have the career, the house, the certainty. It doesn't work that way. At thirty you'll still have many questions — and it will be fine anyway.

The second: you'll travel more than you think. You don't know yet where you'll go, but I know what awaits you — and I envy you. The trips you'll take will change the way you see the world. When you arrive in certain places, you'll understand things that right now you can't even imagine.

The third: there will be a person in your life that you don't know yet. You'll meet them by chance, in a place you don't expect. When you met them — because it will happen — think of this letter.

If I could give you one piece of advice, I'd give you just one: stop waiting for the right moment. It will never arrive. The right moment is now, always now. So — go.

With love,
You`
        },
        vocabGloss: [
            { word: "avere fretta", translation: "to be in a hurry" },
            { word: "la certezza", translation: "certainty" },
            { word: "invidiare", translation: "to envy" },
            { word: "per caso", translation: "by chance / accidentally" },
            { word: "smettere di + infinitive", translation: "to stop doing something" },
            { word: "con affetto", translation: "with love / affectionately" },
        ],
        questions: [
            { id: "it-r-a2-4-q1", level: "A2", prompt: "What is the main piece of advice the narrator gives to her younger self?", options: ["Travel more.", "Work harder.", "Stop waiting for the right moment — act now.", "Find the right person."], answer: "Stop waiting for the right moment — act now." },
            { id: "it-r-a2-4-q2", level: "A2", prompt: "In 'te ne darei uno solo' — what does 'ne' replace?", options: ["a piece of advice (un consiglio)", "a person", "a journey", "the letter"], answer: "a piece of advice (un consiglio)" },
            { id: "it-r-a2-4-q3", level: "A2", prompt: "The sentence 'Non sai ancora dove andrai' contains a future tense. Why is 'andrai' (not 'vai') correct here?", options: ["Because the action is in the past.", "Because 'dove' always takes the future in Italian.", "Because the context refers to a future, unknown destination.", "Because 'andare' is irregular."], answer: "Because the context refers to a future, unknown destination." },
        ],
    },

    // ── it-r-a2-5 — Il medico di base (Block 5 — health) ────────────────────
    {
        id: "it-r-a2-5",
        level: "A2",
        category: "everyday",
        title: "Dal medico",
        body: {
            target: `Giovedì mattina mi sono svegliato/a con un mal di gola fortissimo. Avevo anche la febbre — l'ho misurata: trentotto e due. Ho chiamato il medico di base e mi hanno dato un appuntamento per le undici.

Lo studio medico era vicino a casa. Quando sono entrato/a, c'era solo un'altra persona in sala d'attesa. Ho aspettato venti minuti.

Il medico — la dottoressa Ferroni — mi ha fatto accomodare. "Allora, cosa la porta qui oggi?"

"Ho mal di gola da tre giorni e la febbre da ieri sera. Mi fa male anche una delle orecchie — soprattutto la destra."

Ha preso una torcia e ha guardato in gola. "Apra la bocca — dica 'aaah'." Poi ha guardato le orecchie. Ha scritto qualcosa sul computer.

"Ha un'infezione alla gola con interessamento dell'orecchio destro. Niente di grave, ma bisogna trattarla subito. Le prescrivo degli antibiotici — dovrà prenderli per dieci giorni, due volte al giorno. Non li smetta prima anche se si sente meglio: è molto importante finire il ciclo."

"Posso andare a lavorare?"

"Dovresti stare a casa almeno domani. Beva molta acqua, prenda il paracetamolo se ha ancora la febbre. Se entro tre giorni non migliora, torni a trovarmi."

Mi ha stampato la ricetta. In farmacia ho trovato tutto subito. Ho preso la prima compressa con un bicchiere d'acqua, poi sono tornato/a a casa e mi sono messo/a a letto.

La mattina dopo stavo già un po' meglio. Meno male.`,
            native: `On Thursday morning I woke up with a very bad sore throat. I also had a fever — I measured it: thirty-eight point two. I called the GP and they gave me an appointment at eleven.

The surgery was near home. When I went in, there was only one other person in the waiting room. I waited twenty minutes.

The doctor — Dr Ferroni — asked me to sit down. "So, what brings you here today?"

"I've had a sore throat for three days and a fever since last night. One of my ears hurts too — especially the right one."

She took a torch and looked at my throat. "Open your mouth — say 'aaah'." Then she looked at my ears. She typed something on the computer.

"You have a throat infection with involvement of the right ear. Nothing serious, but it needs treating right away. I'll prescribe antibiotics — you'll need to take them for ten days, twice a day. Don't stop them early even if you feel better: it's very important to finish the course."

"Can I go to work?"

"You should stay home at least tomorrow. Drink plenty of water, take paracetamol if you still have a fever. If you haven't improved in three days, come back and see me."

She printed the prescription. At the pharmacy I found everything straight away. I took the first tablet with a glass of water, then I went home and went to bed.

The next morning I was already a little better. Thank goodness.`
        },
        vocabGloss: [
            { word: "il medico di base", translation: "GP / family doctor" },
            { word: "la sala d'attesa", translation: "waiting room" },
            { word: "la torcia", translation: "torch / flashlight" },
            { word: "interessamento", translation: "involvement (medical)" },
            { word: "il ciclo (di antibiotici)", translation: "the course (of antibiotics)" },
            { word: "la compressa", translation: "tablet / pill" },
            { word: "la ricetta", translation: "prescription" },
        ],
        questions: [
            { id: "it-r-a2-5-q1", level: "A2", prompt: "What does the doctor diagnose?", options: ["Flu with fever", "A throat infection with involvement of the right ear", "A cold and mild cough", "High blood pressure"], answer: "A throat infection with involvement of the right ear" },
            { id: "it-r-a2-5-q2", level: "A2", prompt: "Why does the doctor say not to stop the antibiotics early?", options: ["Because they are expensive.", "Because it is important to finish the full course.", "Because the infection is very serious.", "Because the patient might forget."], answer: "Because it is important to finish the full course." },
            { id: "it-r-a2-5-q3", level: "A2", prompt: "'Mi fa male una delle orecchie' — why does the verb 'fa' not change to 'fanno'?", options: ["Because 'orecchie' is masculine.", "Because it refers to just one ear (singular) — 'una delle orecchie'.", "Because 'fare male' never changes.", "Because the pronoun 'mi' requires singular."], answer: "Because it refers to just one ear (singular) — 'una delle orecchie'." },
        ],
    },
]
