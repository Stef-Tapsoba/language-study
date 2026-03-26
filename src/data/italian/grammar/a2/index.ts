import { GrammarLesson } from "../../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "it-g-a2-1",
        level: "A2",
        title: "Passato Prossimo",
        explanation: {
            native: "The passato prossimo is the main past tense used in conversation. It expresses completed past actions. Formation: present tense of avere or essere + past participle. Most verbs use avere. Verbs of motion, change of state, and all reflexive verbs use essere, and the past participle must agree with the subject in gender and number. Regular past participles: -are → -ato (parlato), -ere → -uto (venduto), -ire → -ito (dormito). Many common verbs have irregular participles: fatto, detto, messo, aperto, scritto, letto, visto, stato.",
            target: "Il passato prossimo è il tempo passato principale usato nella conversazione. Esprime azioni completate nel passato. Formazione: presente di avere o essere + participio passato. La maggior parte dei verbi usa avere. I verbi di moto, cambiamento di stato e tutti i verbi riflessivi usano essere; in questo caso il participio passato concorda in genere e numero con il soggetto. Participi passati regolari: -are → -ato (parlato), -ere → -uto (venduto), -ire → -ito (dormito). Molti verbi comuni hanno participi irregolari: fatto, detto, messo, aperto, scritto, letto, visto, stato."
        },
        examples: [
            { native: "Ho mangiato la pizza.", translation: "I ate the pizza." },
            { native: "Siamo andati al cinema.", translation: "We went to the cinema." },
            { native: "Lei ha studiato tutto il giorno.", translation: "She studied all day." },
            { native: "Sono arrivata in ritardo.", translation: "I (fem.) arrived late." }
        ],
        inlineVocab: [
            { word: "il participio passato", translation: "the past participle" },
            { word: "il verbo ausiliare", translation: "the auxiliary verb" },
            { word: "concordare", translation: "to agree (in gender/number)" }
        ]
    },
    {
        id: "it-g-a2-2",
        level: "A2",
        title: "Imperfetto (Imperfect Tense)",
        explanation: {
            native: "The imperfetto describes habitual or ongoing past actions, past states, background descriptions, and what was happening when something else occurred. It contrasts with the passato prossimo, which marks completed events. Formation: remove the infinitive ending and add imperfetto endings: -avo/-avi/-ava/-avamo/-avate/-avano (-are verbs); -evo/-evi/-eva/-evamo/-evate/-evano (-ere verbs); -ivo/-ivi/-iva/-ivamo/-ivate/-ivano (-ire verbs). Essere is irregular: ero, eri, era, eravamo, eravate, erano.",
            target: "L'imperfetto descrive azioni abituali o in corso nel passato, stati passati, descrizioni di sfondo e ciò che stava accadendo quando si verificava qualcos'altro. Si contrappone al passato prossimo, che indica eventi completati. Formazione: si toglie la desinenza dell'infinito e si aggiungono le desinenze dell'imperfetto: -avo/-avi/-ava/-avamo/-avate/-avano (verbi in -are); -evo/-evi/-eva/-evamo/-evate/-evano (verbi in -ere); -ivo/-ivi/-iva/-ivamo/-ivate/-ivano (verbi in -ire). Essere è irregolare: ero, eri, era, eravamo, eravate, erano."
        },
        examples: [
            { native: "Da bambino, giocavo a calcio ogni giorno.", translation: "As a child, I used to play football every day." },
            { native: "Quando vivevo a Roma, andavo spesso al mercato.", translation: "When I lived in Rome, I often went to the market." },
            { native: "Pioveva quando sono uscito.", translation: "It was raining when I went out." },
            { native: "Era una bella giornata.", translation: "It was a beautiful day." }
        ],
        inlineVocab: [
            { word: "da bambino/a", translation: "as a child" },
            { word: "abituale", translation: "habitual, regular" },
            { word: "lo sfondo", translation: "the background" }
        ]
    },
    {
        id: "it-g-a2-3",
        level: "A2",
        title: "Reflexive Verbs in the Past",
        explanation: {
            native: "When reflexive verbs are used in the passato prossimo, they always take essere as the auxiliary. The past participle must agree in gender and number with the subject: -o (masc. sing.), -a (fem. sing.), -i (masc. pl.), -e (fem. pl.). The reflexive pronoun (mi, ti, si, ci, vi, si) goes before essere. This pattern applies to all reflexive verbs: alzarsi, svegliarsi, lavarsi, divertirsi, incontrarsi, sposarsi, etc. When two people do something to each other (reciprocal), the same pattern applies: ci siamo visti (we saw each other), si sono incontrati (they met each other).",
            target: "Quando i verbi riflessivi vengono usati al passato prossimo, prendono sempre essere come ausiliare. Il participio passato deve concordare in genere e numero con il soggetto: -o (masch. sing.), -a (femm. sing.), -i (masch. pl.), -e (femm. pl.). Il pronome riflessivo (mi, ti, si, ci, vi, si) va prima di essere. Questo schema si applica a tutti i verbi riflessivi: alzarsi, svegliarsi, lavarsi, divertirsi, incontrarsi, sposarsi, ecc. Quando due persone fanno qualcosa l'una all'altra (reciproco), vale lo stesso schema: ci siamo visti, si sono incontrati."
        },
        examples: [
            { native: "Mi sono svegliato tardi stamattina.", translation: "I woke up late this morning. (masc.)" },
            { native: "Si è alzata alle sei.", translation: "She got up at six." },
            { native: "Ci siamo divertiti molto alla festa.", translation: "We enjoyed ourselves a lot at the party." },
            { native: "Si sono incontrati davanti al bar.", translation: "They met (each other) in front of the bar." },
            { native: "Vi siete sposati in chiesa?", translation: "Did you (pl.) get married in church?" }
        ],
        inlineVocab: [
            { word: "il verbo riflessivo", translation: "the reflexive verb" },
            { word: "il reciproco", translation: "the reciprocal" },
            { word: "concordare", translation: "to agree (gender/number)" }
        ]
    },
    {
        id: "it-g-a2-4",
        level: "A2",
        title: "Futuro Semplice (Simple Future)",
        explanation: {
            native: "The futuro semplice expresses future plans and predictions. Formation: for -are and -ere verbs, drop the final -e of the infinitive (and change -a- to -e- for -are verbs), then add: -ò, -ai, -à, -emo, -ete, -anno. For -ire verbs, drop -e and add the same endings. Common irregular stems: essere → sar-, avere → avr-, fare → far-, andare → andr-, venire → verr-, potere → potr-, volere → vorr-, dovere → dovr-.",
            target: "Il futuro semplice esprime piani futuri e previsioni. Formazione: per i verbi in -are e -ere si toglie la -e finale dell'infinito (e la -a- diventa -e- per i verbi in -are), poi si aggiungono: -ò, -ai, -à, -emo, -ete, -anno. Per i verbi in -ire si toglie la -e e si aggiungono le stesse desinenze. Radici irregolari comuni: essere → sar-, avere → avr-, fare → far-, andare → andr-, venire → verr-, potere → potr-, volere → vorr-, dovere → dovr-."
        },
        examples: [
            { native: "Domani andrò al supermercato.", translation: "Tomorrow I will go to the supermarket." },
            { native: "Mangeremo insieme sabato.", translation: "We will eat together on Saturday." },
            { native: "Partiranno la settimana prossima.", translation: "They will leave next week." },
            { native: "Sarà bello!", translation: "It will be wonderful!" }
        ],
        inlineVocab: [
            { word: "la radice irregolare", translation: "the irregular stem" },
            { word: "la previsione", translation: "the prediction" },
            { word: "il piano futuro", translation: "the future plan" }
        ]
    },
    {
        id: "it-g-a2-5",
        level: "A2",
        title: "Modal Verbs in the Past",
        explanation: {
            native: "In the passato prossimo, modal verbs (dovere, potere, volere) can take either avere or essere as auxiliary. When followed by a verb that normally takes avere, use avere: ho dovuto lavorare. When followed by a verb that takes essere, you may use either avere or essere — essere is more formal and the participle agrees with the subject: sono potuto uscire / ho potuto uscire. In everyday spoken Italian, avere is the more common choice. Riuscire (to manage/succeed) always takes essere: sono riuscito a finire.",
            target: "Al passato prossimo, i verbi modali (dovere, potere, volere) possono prendere avere o essere come ausiliare. Quando sono seguiti da un verbo che normalmente usa avere, si usa avere: ho dovuto lavorare. Quando sono seguiti da un verbo che usa essere, si può usare avere o essere — essere è più formale e il participio concorda con il soggetto: sono potuto uscire / ho potuto uscire. Nel parlato quotidiano, avere è la scelta più comune. Riuscire usa sempre essere: sono riuscito a finire."
        },
        examples: [
            { native: "Ho dovuto lavorare tutta la notte.", translation: "I had to work all night." },
            { native: "Non ho potuto venire alla festa.", translation: "I couldn't come to the party." },
            { native: "Ha voluto provare il piatto tipico.", translation: "He wanted to try the local dish." },
            { native: "Sono riuscita a prenotare il tavolo.", translation: "She managed to book the table." },
            { native: "Non siamo potuti uscire per il maltempo.", translation: "We couldn't go out because of bad weather. (essere)" }
        ],
        inlineVocab: [
            { word: "riuscire a", translation: "to manage to, to succeed in" },
            { word: "il maltempo", translation: "bad weather" },
            { word: "formale", translation: "formal" }
        ]
    },
    {
        id: "it-g-a2-6",
        level: "A2",
        title: "Comparatives and Superlatives",
        explanation: {
            native: "To compare in Italian: più ... di/che (more ... than), meno ... di/che (less ... than), tanto ... quanto (as ... as). Use di before nouns/pronouns, and che before adjectives, verbs, or prepositions. The relative superlative uses il/la/i/le più + adjective. Irregular forms: buono → migliore (better), cattivo → peggiore (worse). Absolute superlative (extremely): drop final vowel + add -issimo/a.",
            target: "Per comparare in italiano: più ... di/che (more ... than), meno ... di/che (less ... than), tanto ... quanto (as ... as). Si usa di davanti a nomi/pronomi, e che davanti ad aggettivi, verbi o preposizioni. Il superlativo relativo si forma con il/la/i/le più + aggettivo. Forme irregolari: buono → migliore (meglio), cattivo → peggiore (peggio). Superlativo assoluto (extremely): eliminare la vocale finale + aggiungere -issimo/a."
        },
        examples: [
            { native: "Roma è più grande di Firenze.", translation: "Rome is bigger than Florence." },
            { native: "Questo libro è meno interessante di quello.", translation: "This book is less interesting than that one." },
            { native: "Parla tanto velocemente quanto lui.", translation: "She speaks as quickly as he does." },
            { native: "È il miglior ristorante della città.", translation: "It's the best restaurant in the city." },
            { native: "Questo film è bellissimo.", translation: "This film is absolutely beautiful." }
        ],
        inlineVocab: [
            { word: "il superlativo relativo", translation: "the relative superlative" },
            { word: "il superlativo assoluto", translation: "the absolute superlative" },
            { word: "migliore / peggiore", translation: "better / worse" }
        ]
    },
    {
        id: "it-g-a2-7",
        level: "A2",
        title: "Relative Clauses: che and chi",
        explanation: {
            native: "Relative clauses join two ideas about the same noun. Che (that / who / which) is the most versatile relative pronoun — it can refer to people or things and works as both subject and object. Chi means 'the one who / those who / whoever' and always refers to people. Unlike English, che cannot be dropped in Italian.",
            target: "Le proposizioni relative collegano due idee sullo stesso nome. Che (that/who/which) è il pronome relativo più versatile — può riferirsi a persone o cose e funziona sia come soggetto che come complemento. Chi significa 'colui/colei che / coloro che / chiunque' e si riferisce sempre a persone. A differenza dell'inglese, che non può essere omesso in italiano."
        },
        examples: [
            { native: "Il ragazzo che gioca è mio fratello.", translation: "The boy who is playing is my brother. (subject)" },
            { native: "Il film che ho visto era noioso.", translation: "The film (that) I saw was boring. (object)" },
            { native: "Chi studia passa l'esame.", translation: "Those who study pass the exam." },
            { native: "La persona che cercavo non c'era.", translation: "The person I was looking for wasn't there." },
            { native: "Questo è tutto quello che so.", translation: "This is all (that) I know." }
        ],
        inlineVocab: [
            { word: "la proposizione relativa", translation: "the relative clause" },
            { word: "il pronome relativo", translation: "the relative pronoun" },
            { word: "noioso/a", translation: "boring" }
        ]
    },
    {
        id: "it-g-a2-8",
        level: "A2",
        title: "Futuro di Probabilità (Future of Probability)",
        explanation: {
            native: "In Italian, the future tense is often used to express probability or conjecture about the present — not a real future event, but a guess about what is likely true right now. English equivalents include 'must be', 'I wonder if', 'probably'. This is very common in spoken Italian and signals that the speaker is guessing, not certain. It applies to all future tense forms.",
            target: "In italiano, il futuro si usa spesso per esprimere probabilità o supposizione sul presente — non un evento futuro reale, ma un'ipotesi su ciò che è probabilmente vero adesso. Gli equivalenti in inglese includono 'must be', 'I wonder if', 'probably'. Questo uso è molto comune nell'italiano parlato e segnala che chi parla sta ipotizzando, non affermando una certezza. Si applica a tutte le forme del futuro."
        },
        examples: [
            { native: "Dov'è Marco? — Sarà in ufficio.", translation: "Where's Marco? — He's probably in the office. (must be)" },
            { native: "Quanti anni avrà quella signora?", translation: "How old do you think that lady is? (I wonder how old...)" },
            { native: "Avrà quarant'anni, più o meno.", translation: "She must be about forty, more or less." },
            { native: "Perché non risponde? Starà dormendo.", translation: "Why isn't he answering? He must be sleeping." },
            { native: "Costerà molto quel ristorante.", translation: "That restaurant is probably expensive." }
        ],
        inlineVocab: [
            { word: "la probabilità", translation: "probability" },
            { word: "la supposizione", translation: "conjecture, guess" },
            { word: "più o meno", translation: "more or less" }
        ]
    },
    {
        id: "it-g-a2-9",
        level: "A2",
        title: "Condizionale Presente (Conditional)",
        explanation: {
            native: "The condizionale presente expresses wishes, polite requests, hypothetical situations, and suggestions. Formation: use the same stem as the futuro semplice (including all irregulars), then add the endings: -ei, -esti, -ebbe, -emmo, -este, -ebbero. It is the Italian equivalent of English 'would'. Use it to be polite when asking for something (Vorrei un caffè), to express what you would do (Mangerei la pizza), and for gentle suggestions (Dovresti studiare).",
            target: "Il condizionale presente esprime desideri, richieste educate, situazioni ipotetiche e suggerimenti. Formazione: si usa la stessa radice del futuro semplice (incluse tutte le irregolari), poi si aggiungono le desinenze: -ei, -esti, -ebbe, -emmo, -este, -ebbero. È l'equivalente italiano di 'would' in inglese. Si usa per essere educati quando si chiede qualcosa (Vorrei un caffè), per esprimere cosa si farebbe (Mangerei la pizza) e per suggerimenti gentili (Dovresti studiare)."
        },
        examples: [
            { native: "Vorrei un caffè, per favore.", translation: "I would like a coffee, please. (polite request)" },
            { native: "Potresti aprire la finestra?", translation: "Could you open the window? (polite request)" },
            { native: "Mangerei volentieri una pizza.", translation: "I would happily eat a pizza." },
            { native: "Dovresti dormire di più.", translation: "You should sleep more. (suggestion)" },
            { native: "Cosa faresti con un milione di euro?", translation: "What would you do with a million euros?" }
        ],
        inlineVocab: [
            { word: "il condizionale", translation: "the conditional" },
            { word: "volentieri", translation: "gladly, willingly" },
            { word: "ipotetico/a", translation: "hypothetical" }
        ]
    },
    {
        id: "it-g-a2-10",
        level: "A2",
        title: "Passato Prossimo vs Imperfetto",
        explanation: {
            native: "Choosing between passato prossimo and imperfetto is one of the most important A2 skills. Passato prossimo: completed actions with a clear beginning and end, sudden events, sequences of events (prima ... poi ... dopo). Imperfetto: descriptions, states, habitual past actions, ongoing background actions, age/weather/feelings in the past. A classic pattern: the imperfetto sets the scene; the passato prossimo interrupts it. Think of imperfetto as a film running in the background, and passato prossimo as the events that happen in that scene.",
            target: "Scegliere tra passato prossimo e imperfetto è una delle competenze più importanti dell'A2. Passato prossimo: azioni completate con inizio e fine chiari, eventi improvvisi, sequenze di eventi (prima ... poi ... dopo). Imperfetto: descrizioni, stati, azioni abituali nel passato, azioni di sfondo in corso, età/tempo/sentimenti nel passato. Schema classico: l'imperfetto dà lo sfondo; il passato prossimo lo interrompe. Pensa all'imperfetto come a un film in corso sullo sfondo, e al passato prossimo come agli eventi che accadono in quella scena."
        },
        examples: [
            { native: "Leggevo un libro quando ha suonato il telefono.", translation: "I was reading a book when the phone rang. (background + event)" },
            { native: "Ieri sono andato al mercato, ho comprato la frutta e sono tornato a casa.", translation: "Yesterday I went to the market, bought fruit and came home. (sequence)" },
            { native: "Aveva vent'anni e studiava medicina.", translation: "She was twenty and was studying medicine. (state + habit)" },
            { native: "Di solito prendevo il caffè al bar, ma quel giorno ho fatto colazione a casa.", translation: "I usually had coffee at the bar, but that day I had breakfast at home." }
        ],
        inlineVocab: [
            { word: "lo sfondo", translation: "the background" },
            { word: "improvviso/a", translation: "sudden" },
            { word: "di solito", translation: "usually" }
        ]
    },
    {
        id: "it-g-a2-11",
        level: "A2",
        title: "Real Conditionals (se + Presente + Futuro)",
        explanation: {
            native: "Italian real conditionals express situations that are genuinely possible. The pattern is: se + present tense (condition) + future tense (result). This is equivalent to English 'if ... (present), ... will'. Note: never use the future tense after se in Italian. The condition clause can come first or second in the sentence.",
            target: "I condizionali reali in italiano esprimono situazioni genuinamente possibili. Lo schema è: se + presente (condizione) + futuro (risultato). Equivale all'inglese 'if ... (present), ... will'. Nota: non si usa mai il futuro dopo se in italiano. La proposizione condizionale può venire prima o dopo nella frase."
        },
        examples: [
            { native: "Se hai fame, mangeremo subito.", translation: "If you are hungry, we will eat right away." },
            { native: "Se piove, prenderò l'ombrello.", translation: "If it rains, I will take my umbrella." },
            { native: "Se studia, passerà l'esame.", translation: "If she studies, she will pass the exam." },
            { native: "Andremo al mare se fa bel tempo.", translation: "We will go to the beach if the weather is nice." },
            { native: "Se arrivi in ritardo, ti aspetterò.", translation: "If you arrive late, I will wait for you." }
        ],
        inlineVocab: [
            { word: "la condizione", translation: "the condition" },
            { word: "il risultato", translation: "the result" },
            { word: "subito", translation: "immediately, right away" }
        ]
    },
    {
        id: "it-g-a2-12",
        level: "A2",
        title: "Formal Imperative (Lei)",
        explanation: {
            native: "In Italian, the formal 'you' is Lei (third person singular), and its imperative forms differ from the tu forms. For -are verbs, the Lei imperative uses the -i ending (the opposite of the informal): parlare → parli! For -ere and -ire verbs, the Lei imperative uses the -a ending: prendere → prenda!, sentire → senta! Common irregular formal imperatives: essere → sia, avere → abbia, venire → venga, fare → faccia, andare → vada. Negatives: non + formal imperative. Reflexive pronouns stay separate with Lei and come before the verb: si accomodi! (please sit down).",
            target: "In italiano, il 'tu' formale è Lei (terza persona singolare), e le sue forme dell'imperativo differiscono da quelle di tu. Per i verbi in -are, l'imperativo di Lei usa la desinenza -i (l'opposto dell'informale): parlare → parli! Per i verbi in -ere e -ire, l'imperativo di Lei usa la desinenza -a: prendere → prenda!, sentire → senta! Imperativi formali irregolari comuni: essere → sia, avere → abbia, venire → venga, fare → faccia, andare → vada. Negativo: non + imperativo formale. I pronomi riflessivi rimangono separati con Lei e vengono prima del verbo: si accomodi!"
        },
        examples: [
            { native: "Parli più lentamente, per favore.", translation: "Please speak more slowly. (formal)" },
            { native: "Prenda pure un posto.", translation: "Please take a seat. (formal)" },
            { native: "Mi dica — posso aiutarla?", translation: "Tell me — can I help you? (formal)" },
            { native: "Si accomodi, prego.", translation: "Please make yourself comfortable. (formal)" },
            { native: "Non si preoccupi.", translation: "Don't worry. (formal)" }
        ],
        inlineVocab: [
            { word: "formale", translation: "formal" },
            { word: "accomodarsi", translation: "to make oneself comfortable, to sit down" },
            { word: "preoccuparsi", translation: "to worry" }
        ]
    },
    {
        id: "it-g-a2-13",
        level: "A2",
        title: "Direct Object Pronouns",
        explanation: {
            native: "Direct object pronouns replace a direct object (the thing or person directly affected by the verb). Italian direct object pronouns: mi (me), ti (you, inform.), lo (him/it masc.), la (her/it fem.), ci (us), vi (you pl.), li (them masc.), le (them fem.). They go immediately before the conjugated verb. With infinitives, they attach to the end (dropping the final -e). In the passato prossimo with avere, the past participle agrees in gender and number with the pronoun: l'ho vista (I saw her), li ho comprati (I bought them).",
            target: "I pronomi di complemento oggetto diretto sostituiscono un complemento oggetto diretto (la cosa o la persona direttamente interessata dall'azione). Pronomi diretti italiani: mi (me), ti (te, inform.), lo (lui/esso masch.), la (lei/essa femm.), ci (noi), vi (voi), li (loro masch.), le (loro femm.). Vanno immediatamente prima del verbo coniugato. Con gli infiniti, si attaccano alla fine (togliendo la -e finale). Al passato prossimo con avere, il participio passato concorda in genere e numero con il pronome: l'ho vista, li ho comprati."
        },
        examples: [
            { native: "Conosci Marco? — Sì, lo conosco.", translation: "Do you know Marco? — Yes, I know him." },
            { native: "Hai visto Maria? — Non l'ho vista.", translation: "Have you seen Maria? — I haven't seen her." },
            { native: "Compri i giornali? — Li compro ogni mattina.", translation: "Do you buy newspapers? — I buy them every morning." },
            { native: "Vuoi chiamarmi stasera?", translation: "Do you want to call me tonight? (pronoun attached to infinitive)" },
            { native: "Le scarpe? Le ho comprate ieri.", translation: "The shoes? I bought them yesterday. (agreement with le)" }
        ],
        inlineVocab: [
            { word: "il complemento oggetto diretto", translation: "the direct object" },
            { word: "il pronome diretto", translation: "the direct object pronoun" },
            { word: "la concordanza", translation: "the agreement (gender/number)" }
        ]
    },
    {
        id: "it-g-a2-14",
        level: "A2",
        title: "Indirect Object Pronouns",
        explanation: {
            native: "Indirect object pronouns replace the indirect object (the recipient of the action, usually introduced by 'to' or 'for'). Italian indirect object pronouns: mi (to me), ti (to you, inform.), gli (to him), le (to her), ci (to us), vi (to you pl.), gli / loro (to them). Gli is increasingly used for all genders in modern spoken Italian. They go before the conjugated verb (or attach to infinitive). Unlike direct pronouns, there is no agreement in the passato prossimo.",
            target: "I pronomi di complemento indiretto sostituiscono il complemento di termine (il destinatario dell'azione, di solito introdotto da 'a' o 'per'). Pronomi indiretti italiani: mi (a me), ti (a te, inform.), gli (a lui), le (a lei), ci (a noi), vi (a voi), gli / loro (a loro). Gli è sempre più usato per tutti i generi nell'italiano moderno parlato. Vanno prima del verbo coniugato (o si attaccano all'infinito). A differenza dei pronomi diretti, non c'è concordanza al passato prossimo."
        },
        examples: [
            { native: "Ti ho mandato un messaggio.", translation: "I sent you a message." },
            { native: "Gli piace il calcio.", translation: "He likes football. (football pleases him)" },
            { native: "Le ho dato il libro.", translation: "I gave her the book." },
            { native: "Ci hanno offerto il caffè.", translation: "They offered us a coffee." },
            { native: "Posso dirti una cosa?", translation: "Can I tell you something? (attached to infinitive)" }
        ],
        inlineVocab: [
            { word: "il complemento indiretto", translation: "the indirect object" },
            { word: "il destinatario", translation: "the recipient" },
            { word: "offrire", translation: "to offer" }
        ]
    },
    {
        id: "it-g-a2-15",
        level: "A2",
        title: "Double Object Pronouns",
        explanation: {
            native: "When both a direct and an indirect pronoun are used together, the indirect comes first and changes form: mi → me, ti → te, ci → ce, vi → ve, gli/le → glie-. The combined form is written as one word: me lo (it to me), te la (it to you), glielo (it to him/her/them), ce li (them to us), ve le (them to you pl.). Both pronouns come before the conjugated verb, or both attach to the infinitive. In the passato prossimo, the past participle agrees with the direct object pronoun.",
            target: "Quando si usano insieme un pronome diretto e uno indiretto, l'indiretto viene prima e cambia forma: mi → me, ti → te, ci → ce, vi → ve, gli/le → glie-. La forma combinata si scrive come una parola sola: me lo (it to me), te la (it to you), glielo (it to him/her/them), ce li (them to us), ve le (them to you pl.). Entrambi i pronomi vanno prima del verbo coniugato, o entrambi si attaccano all'infinito. Al passato prossimo, il participio concorda con il pronome oggetto diretto."
        },
        examples: [
            { native: "Mi puoi dare il sale? — Te lo passo subito.", translation: "Can you pass me the salt? — I'll pass it to you right away." },
            { native: "Ha dato il libro a Maria? — Gliel'ho dato ieri.", translation: "Did you give the book to Maria? — I gave it to her yesterday." },
            { native: "Ci puoi spiegare la regola?", translation: "Can you explain the rule to us?" },
            { native: "Vuoi dirglielo tu?", translation: "Do you want to tell him/her that? (attached to infinitive)" },
            { native: "Ve le ho mandate ieri.", translation: "I sent them to you (pl.) yesterday. (le = them, fem.)" }
        ],
        inlineVocab: [
            { word: "i pronomi combinati", translation: "the combined/double pronouns" },
            { word: "passare", translation: "to pass, to hand" },
            { word: "spiegare", translation: "to explain" }
        ]
    },
    {
        id: "it-g-a2-16",
        level: "A2",
        title: "Ci and Ne",
        explanation: {
            native: "Ci has two main uses: (1) place — replacing a place previously mentioned (equivalent to 'there'): Sei mai stato a Roma? — Sì, ci sono stato; (2) with certain verbs: crederci (to believe in it), pensarci (to think about it), tenerci (to care about it). Ne replaces a quantity or a noun introduced by di: Hai del pane? — Sì, ne ho (I have some); Quanti fratelli hai? — Ne ho due (I have two [of them]). Both ci and ne go before the conjugated verb or attach to the infinitive.",
            target: "Ci ha due usi principali: (1) luogo — sostituisce un luogo già menzionato (equivalente a 'there'): Sei mai stato a Roma? — Sì, ci sono stato; (2) con certi verbi: crederci (to believe in it), pensarci (to think about it), tenerci (to care about it). Ne sostituisce una quantità o un nome introdotto da di: Hai del pane? — Sì, ne ho; Quanti fratelli hai? — Ne ho due. Sia ci che ne vanno prima del verbo coniugato o si attaccano all'infinito."
        },
        examples: [
            { native: "Sei mai andato a Venezia? — No, non ci sono mai andato.", translation: "Have you ever been to Venice? — No, I've never been there." },
            { native: "Ci penso spesso.", translation: "I think about it often." },
            { native: "Quante ore hai lavorato? — Ne ho lavorate otto.", translation: "How many hours did you work? — I worked eight (of them)." },
            { native: "Vuoi del vino? — Sì, grazie, ne prendo un po'.", translation: "Do you want some wine? — Yes, thank you, I'll have a little." },
            { native: "Non me ne importa.", translation: "I don't care about it." }
        ],
        inlineVocab: [
            { word: "tenerci", translation: "to care about it" },
            { word: "pensarci", translation: "to think about it" },
            { word: "importare", translation: "to matter, to care" }
        ]
    },
    {
        id: "it-g-a2-17",
        level: "A2",
        title: "Adverbs with -mente",
        explanation: {
            native: "Italian adverbs are commonly formed by adding -mente to the feminine singular form of the adjective. If the adjective ends in -le or -re (after a vowel), drop the final -e before adding -mente. Examples: lento → lenta → lentamente (slowly); rapido → rapida → rapidamente (quickly); facile → facilmente (easily); regolare → regolarmente (regularly). Adverbs are invariable (they never change for gender or number). They typically follow the verb or come at the start of a clause for emphasis.",
            target: "Gli avverbi italiani si formano comunemente aggiungendo -mente alla forma femminile singolare dell'aggettivo. Se l'aggettivo termina in -le o -re (dopo una vocale), si toglie la -e finale prima di aggiungere -mente. Esempi: lento → lenta → lentamente; rapido → rapida → rapidamente; facile → facilmente; regolare → regolarmente. Gli avverbi sono invariabili (non cambiano mai per genere o numero). Seguono di solito il verbo o vengono all'inizio di una frase per enfasi."
        },
        examples: [
            { native: "Parla lentamente, per favore.", translation: "Please speak slowly." },
            { native: "Ha risposto rapidamente.", translation: "He answered quickly." },
            { native: "Studio regolarmente ogni mattina.", translation: "I study regularly every morning." },
            { native: "Fortunatamente non era grave.", translation: "Fortunately it wasn't serious." },
            { native: "Sinceramente, non lo so.", translation: "Honestly / Sincerely, I don't know." }
        ],
        inlineVocab: [
            { word: "l'avverbio", translation: "the adverb" },
            { word: "invariabile", translation: "invariable (doesn't change)" },
            { word: "l'enfasi", translation: "emphasis" }
        ]
    },
    {
        id: "it-g-a2-18",
        level: "A2",
        title: "Discourse Connectors",
        explanation: {
            native: "Connectors help you link ideas and structure your speech or writing more fluently. Key Italian connectors for A2: quindi / allora (so, therefore), però / ma (but, however), anche se (even though, although), invece (instead, on the other hand), tuttavia (however, nevertheless), inoltre (furthermore, also), anzi (on the contrary, in fact), cioè (that is, I mean), insomma (in short, basically). These are essential for sounding natural in Italian beyond simple sentences.",
            target: "I connettivi ti aiutano a collegare le idee e a strutturare il discorso o la scrittura in modo più fluente. Connettivi italiani chiave per l'A2: quindi / allora (so, therefore), però / ma (but, however), anche se (even though, although), invece (instead, on the other hand), tuttavia (however, nevertheless), inoltre (furthermore, also), anzi (on the contrary, in fact), cioè (that is, I mean), insomma (in short, basically). Sono essenziali per suonare naturali in italiano oltre le semplici frasi."
        },
        examples: [
            { native: "Ero stanco, quindi sono andato a letto presto.", translation: "I was tired, so I went to bed early." },
            { native: "Mi piace la pizza, però preferisco la pasta.", translation: "I like pizza, but I prefer pasta." },
            { native: "Anche se piove, voglio uscire.", translation: "Even though it's raining, I want to go out." },
            { native: "Lui studia il francese; io invece studio il tedesco.", translation: "He studies French; I, on the other hand, study German." },
            { native: "È simpatico, anzi, è il mio migliore amico.", translation: "He's nice — in fact, he's my best friend." }
        ],
        inlineVocab: [
            { word: "il connettivo", translation: "the connector, the linking word" },
            { word: "anzi", translation: "on the contrary, in fact" },
            { word: "insomma", translation: "in short, basically, well" }
        ]
    },
    {
        id: "it-g-a2-19",
        level: "A2",
        title: "Verbs with Prepositions",
        explanation: {
            native: "Many Italian verbs require a specific preposition before an infinitive or noun. The two most important prepositions in this context are a and di. Verbs + a + infinitive include: andare a (to go and do), venire a (to come and do), cominciare a (to start), imparare a (to learn to), riuscire a (to manage to), provare a (to try to). Verbs + di + infinitive include: cercare di (to try to), pensare di (to think of/plan to), smettere di (to stop), finire di (to finish), dimenticarsi di (to forget to), avere voglia di (to feel like). Other useful patterns: avere bisogno di (to need), avere paura di (to be afraid of).",
            target: "Molti verbi italiani richiedono una preposizione specifica prima di un infinito o di un nome. Le due preposizioni più importanti in questo contesto sono a e di. Verbi + a + infinito: andare a (to go and do), venire a (to come and do), cominciare a (to start), imparare a (to learn to), riuscire a (to manage to), provare a (to try to). Verbi + di + infinito: cercare di (to try to), pensare di (to think of/plan to), smettere di (to stop), finire di (to finish), dimenticarsi di (to forget to), avere voglia di (to feel like). Altri schemi utili: avere bisogno di (to need), avere paura di (to be afraid of)."
        },
        examples: [
            { native: "Ho imparato a sciare l'anno scorso.", translation: "I learned to ski last year." },
            { native: "Cercate di arrivare in orario.", translation: "Try to arrive on time." },
            { native: "Ho dimenticato di comprare il latte.", translation: "I forgot to buy the milk." },
            { native: "Pensi di venire alla festa?", translation: "Are you thinking of coming to the party?" },
            { native: "Ho voglia di mangiare qualcosa di dolce.", translation: "I feel like eating something sweet." }
        ],
        inlineVocab: [
            { word: "avere voglia di", translation: "to feel like (doing something)" },
            { word: "dimenticarsi di", translation: "to forget to" },
            { word: "in orario", translation: "on time" }
        ]
    },
    {
        id: "it-g-a2-20",
        level: "A2",
        title: "Stare + Gerundio (Progressive Form)",
        explanation: {
            native: "Italian uses stare + gerundio to describe an action that is happening right now or was happening at a particular moment — similar to English '-ing' forms. Formation: present or imperfect of stare + gerundio. The gerundio is formed by adding -ando (-are verbs) or -endo (-ere / -ire verbs) to the stem. Common irregular gerundi: essere → essendo, fare → facendo, bere → bevendo, dire → dicendo. Reflexive pronouns and object pronouns attach to the gerundio or come before stare.",
            target: "L'italiano usa stare + gerundio per descrivere un'azione in corso in questo momento o che era in corso in un momento particolare — simile alle forme in '-ing' in inglese. Formazione: presente o imperfetto di stare + gerundio. Il gerundio si forma aggiungendo -ando (verbi in -are) o -endo (verbi in -ere / -ire) alla radice. Gerundi irregolari comuni: essere → essendo, fare → facendo, bere → bevendo, dire → dicendo. I pronomi riflessivi e i pronomi oggetto si attaccano al gerundio o vengono prima di stare."
        },
        examples: [
            { native: "Cosa stai facendo? — Sto studiando.", translation: "What are you doing? — I'm studying." },
            { native: "Stava mangiando quando l'ho chiamato.", translation: "He was eating when I called him." },
            { native: "Stavamo aspettando da un'ora.", translation: "We had been waiting for an hour." },
            { native: "Mi sta spiegando la grammatica.", translation: "She is explaining the grammar to me." },
            { native: "Sta piovendo ancora?", translation: "Is it still raining?" }
        ],
        inlineVocab: [
            { word: "il gerundio", translation: "the gerund (-ing form)" },
            { word: "in corso", translation: "in progress, ongoing" },
            { word: "ancora", translation: "still, again" }
        ]
    },
]
