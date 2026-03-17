import { GrammarLesson } from "../../../types"

export const b2Grammar: GrammarLesson[] = [
    {
        id: "it-g-b2-1",
        level: "B2",
        title: "Il Congiuntivo Imperfetto",
        explanation: {
            native: "The imperfect subjunctive (congiuntivo imperfetto) is used in hypothetical sentences, after 'magari' (I wish), after 'come se' (as if), and in past contexts where the present subjunctive would be used in present contexts. It is formed from the infinitive stem: -are verbs → -assi, -assi, -asse, -assimo, -aste, -assero (e.g. parlare → parlassi); -ere verbs → -essi, -essi, -esse, -essimo, -este, -essero (e.g. credere → credessi); -ire verbs → -issi, -issi, -isse, -issimo, -iste, -issero (e.g. partire → partissi). Essere is irregular: fossi, fossi, fosse, fossimo, foste, fossero. It appears in the 'if' clause of second conditional sentences (se + congiuntivo imperfetto) and after verbs of wishing in the past.",
            target: "Il congiuntivo imperfetto si usa nelle frasi ipotetiche, dopo 'magari' per esprimere un desiderio, dopo 'come se', e nei contesti al passato in cui nel presente si userebbe il congiuntivo presente. Si forma dalla radice dell'infinito: verbi in -are → -assi, -assi, -asse, -assimo, -aste, -assero (es. parlare → parlassi); verbi in -ere → -essi, -essi, -esse, -essimo, -este, -essero (es. credere → credessi); verbi in -ire → -issi, -issi, -isse, -issimo, -iste, -issero (es. partire → partissi). Essere è irregolare: fossi, fossi, fosse, fossimo, foste, fossero. Compare nella proposizione ipotetica di 2° tipo (se + congiuntivo imperfetto + condizionale presente) e dopo verbi di desiderio al passato."
        },
        examples: [
            { native: "Magari avessi più tempo libero!", translation: "I wish I had more free time!" },
            { native: "Se potessi, viaggerei ogni mese.", translation: "If I could, I would travel every month." },
            { native: "Si comporta come se fosse il capo.", translation: "He behaves as if he were the boss." },
            { native: "Speravo che tu venissi alla festa.", translation: "I was hoping you would come to the party." }
        ]
    },
    {
        id: "it-g-b2-2",
        level: "B2",
        title: "La Forma Passiva",
        explanation: {
            native: "The passive voice in Italian is formed with the auxiliary essere + the past participle of the main verb. The past participle agrees in gender and number with the subject. The agent (the one performing the action) is introduced by the preposition 'da'. The passive can be formed in any tense by changing the tense of essere: è scritto (present), è stato scritto (passato prossimo), era scritto (imperfect), sarà scritto (future), sarebbe scritto (conditional). Venire can replace essere in simple tenses (but not compound tenses) to give a more dynamic sense. Andare + past participle has a modal sense of obligation: la lettera va spedita (the letter must be sent).",
            target: "La forma passiva in italiano si costruisce con l'ausiliare essere + participio passato del verbo principale. Il participio passato concorda in genere e numero con il soggetto. L'agente (chi compie l'azione) è introdotto dalla preposizione 'da'. La forma passiva si può costruire in qualsiasi tempo modificando il tempo di essere: è scritto (presente), è stato scritto (passato prossimo), era scritto (imperfetto), sarà scritto (futuro), sarebbe scritto (condizionale). Venire può sostituire essere nei tempi semplici (non composti) per dare un senso più dinamico all'azione. Andare + participio passato ha valore di obbligo: la lettera va spedita (the letter must be sent)."
        },
        examples: [
            { native: "Il romanzo è stato scritto da un autore italiano.", translation: "The novel was written by an Italian author." },
            { native: "Le nuove leggi vengono discusse in parlamento.", translation: "The new laws are being discussed in parliament." },
            { native: "La decisione sarà presa dal consiglio di amministrazione.", translation: "The decision will be made by the board of directors." },
            { native: "Questi documenti vanno firmati entro domani.", translation: "These documents must be signed by tomorrow." }
        ]
    },
    {
        id: "it-g-b2-3",
        level: "B2",
        title: "Pronomi Relativi Avanzati",
        explanation: {
            native: "Beyond basic 'che' and 'cui', Italian has more advanced relative pronouns. 'Il cui / la cui / i cui / le cui' (whose) expresses possession and is placed between the article and the noun it modifies: 'lo scrittore il cui romanzo è famoso' (the writer whose novel is famous). 'Colui che / colei che / coloro che' (he who / she who / those who) are formal/literary forms used to make general statements. 'Il quale / la quale / i quali / le quali' are used in formal register and when 'che' or 'cui' might be ambiguous; they agree in gender and number and can combine with prepositions: 'al quale', 'della quale', 'nei quali'. 'Chi' (whoever / the one who) introduces indefinite relative clauses.",
            target: "Oltre ai pronomi relativi di base 'che' e 'cui', l'italiano dispone di pronomi relativi più avanzati. 'Il cui / la cui / i cui / le cui' (whose) esprime possesso e si inserisce tra l'articolo e il nome che accompagna: 'lo scrittore il cui romanzo è famoso'. 'Colui che / colei che / coloro che' (he who / she who / those who) sono forme formali o letterarie usate per enunciazioni generali. 'Il quale / la quale / i quali / le quali' si usano nel registro formale o quando 'che' o 'cui' potrebbero risultare ambigui; concordano in genere e numero e si combinano con le preposizioni: 'al quale', 'della quale', 'nei quali'. 'Chi' (whoever / the one who) introduce proposizioni relative indefinite."
        },
        examples: [
            { native: "Il professore, la cui ricerca è riconosciuta a livello internazionale, terrà una conferenza.", translation: "The professor, whose research is internationally recognised, will give a lecture." },
            { native: "Coloro che desiderano partecipare devono iscriversi entro venerdì.", translation: "Those who wish to participate must register by Friday." },
            { native: "Il contratto, al quale mi riferivo, è già stato firmato.", translation: "The contract to which I was referring has already been signed." },
            { native: "Chi studia con costanza ottiene sempre buoni risultati.", translation: "Whoever studies consistently always achieves good results." }
        ]
    },
    {
        id: "it-g-b2-4",
        level: "B2",
        title: "Il Discorso Indiretto",
        explanation: {
            native: "Reported speech (discorso indiretto) in Italian involves a change of verb tenses when the reporting verb is in the past. Direct speech uses 'ha detto:' with quotation; indirect speech uses 'ha detto che' + a clause. Tense backshift rules: present → imperfect (dice 'ho fame' → ha detto che aveva fame); passato prossimo → trapassato prossimo (dice 'ho mangiato' → ha detto che aveva mangiato); future → conditional (dice 'andrò' → ha detto che sarebbe andato). For yes/no questions, use 'ha chiesto se' + clause. For information questions, use 'ha chiesto + question word + clause'. Imperative becomes infinitive: 'Vieni!' → ha detto di venire. Demonstratives and adverbs also shift: questo → quello, qui → lì, oggi → quel giorno, domani → il giorno dopo.",
            target: "Il discorso indiretto in italiano richiede una modifica dei tempi verbali quando il verbo reggente è al passato. Il discorso diretto usa 'ha detto:' con le virgolette; il discorso indiretto usa 'ha detto che' + proposizione. Regole di concordanza dei tempi: presente → imperfetto (dice 'ho fame' → ha detto che aveva fame); passato prossimo → trapassato prossimo (dice 'ho mangiato' → ha detto che aveva mangiato); futuro → condizionale (dice 'andrò' → ha detto che sarebbe andato). Per le domande a risposta sì/no si usa 'ha chiesto se' + proposizione. Per le domande con pronome interrogativo si usa 'ha chiesto + pronome interrogativo + proposizione'. L'imperativo diventa infinito: 'Vieni!' → ha detto di venire. Anche dimostrativi e avverbi cambiano: questo → quello, qui → lì, oggi → quel giorno, domani → il giorno dopo."
        },
        examples: [
            { native: "Ha detto che non poteva venire alla riunione.", translation: "He said that he could not come to the meeting." },
            { native: "Mi ha chiesto se avessi già letto il rapporto.", translation: "She asked me if I had already read the report." },
            { native: "Ha annunciato che il progetto sarebbe stato completato entro l'estate.", translation: "He announced that the project would be completed by summer." },
            { native: "Il professore ha chiesto di consegnare i compiti entro venerdì.", translation: "The professor asked us to hand in the assignments by Friday." }
        ]
    },
    {
        id: "it-g-b2-5",
        level: "B2",
        title: "Il Periodo Ipotetico di 2° tipo",
        explanation: {
            native: "The second type of hypothetical sentence (periodo ipotetico di 2° tipo) expresses a situation that is contrary to present reality or is considered unlikely. The 'if' clause (protasi) uses the congiuntivo imperfetto, and the main clause (apodosi) uses the condizionale presente. Structure: Se + congiuntivo imperfetto, condizionale presente. Example: 'Se avessi più denaro, comprerei una casa' (If I had more money, I would buy a house — but I don't). This contrasts with the first type (se + presente indicativo, futuro/presente), which expresses a realistic condition. The order of the two clauses can be reversed: 'Comprerei una casa se avessi più denaro.' Note: never use the indicative in the 'se' clause of a second conditional in Italian.",
            target: "Il periodo ipotetico di 2° tipo esprime una situazione contraria alla realtà presente o considerata poco probabile. La proposizione ipotetica (protasi) usa il congiuntivo imperfetto, e la proposizione principale (apodosi) usa il condizionale presente. Struttura: Se + congiuntivo imperfetto, condizionale presente. Esempio: 'Se avessi più denaro, comprerei una casa' (ma non ce l'ho). Questo si contrappone al 1° tipo (se + presente indicativo, futuro/presente), che esprime una condizione realistica. L'ordine delle due proposizioni può essere invertito: 'Comprerei una casa se avessi più denaro.' Attenzione: nella proposizione con 'se' del 2° tipo non si usa mai il modo indicativo in italiano."
        },
        examples: [
            { native: "Se vivessi a Parigi, imparerei il francese.", translation: "If I lived in Paris, I would learn French." },
            { native: "Se il governo riducesse le tasse, l'economia migliorerebbe.", translation: "If the government reduced taxes, the economy would improve." },
            { native: "Parleresti con il direttore se ne avessi l'opportunità?", translation: "Would you talk to the director if you had the opportunity?" },
            { native: "Se potessi scegliere, vivrei in Toscana.", translation: "If I could choose, I would live in Tuscany." }
        ]
    },
    {
        id: "it-g-b2-6",
        level: "B2",
        title: "Periodo Ipotetico Misto & Condizionale Giornalistico",
        explanation: {
            native: "The mixed conditional (periodo ipotetico misto) combines a past hypothetical condition with a present result: Se + congiuntivo trapassato → condizionale presente. Example: Se avessi studiato medicina, sarei medico adesso. This contrasts with the 3° tipo (past → past: Se avesse studiato, sarebbe diventato medico). The journalistic conditional: condizionale passato is used in newspapers and broadcasts to report unconfirmed information — Il ministro avrebbe rassegnato le dimissioni = The minister is reported to have resigned.",
            target: "Il periodo ipotetico misto combina una condizione ipotetica nel passato con una conseguenza nel presente: Se + congiuntivo trapassato → condizionale presente. Esempio: Se avessi studiato medicina, sarei medico adesso. Questo contrasta con il 3° tipo (passato → passato). Il condizionale giornalistico: il condizionale passato nei giornali e nelle trasmissioni indica un'informazione non confermata — Il ministro avrebbe rassegnato le dimissioni."
        },
        examples: [
            { native: "Se avessi imparato prima l'italiano, ora sarei più fluente.", translation: "If I had learned Italian earlier, I would be more fluent now. (mixed)" },
            { native: "Per quanto si impegni, non riesce a convincerli.", translation: "No matter how hard he tries, he can't convince them. (concessive)" },
            { native: "Il premier avrebbe incontrato il presidente in segreto.", translation: "The prime minister reportedly met the president in secret. (journalistic conditional)" },
        ]
    },
    {
        id: "it-g-b2-7",
        level: "B2",
        title: "Congiuntivo Concessivo & Connettivi B2",
        explanation: {
            native: "Concessive conjunctions requiring the congiuntivo: sebbene, benché, nonostante (che), quantunque, per quanto, malgrado (che). The tense follows sequence rules: present main verb → congiuntivo presente; past main verb → congiuntivo imperfetto. Purpose: affinché, perché (so that), a condizione che + congiuntivo. Key B2 formal connectors: di conseguenza, in quanto, dal momento che, poiché (because/since — formal); tuttavia, ciononostante (however); stante + noun (given); in merito a (with regard to). The construction a meno che non + congiuntivo always requires non even when the meaning is positive.",
            target: "Congiunzioni concessive che richiedono il congiuntivo: sebbene, benché, nonostante (che), quantunque, per quanto, malgrado (che). Il tempo segue le regole di correlazione: verbo principale al presente → congiuntivo presente; verbo principale al passato → congiuntivo imperfetto. Finalità: affinché, perché (finalità), a condizione che + congiuntivo. Connettivi formali B2 chiave: di conseguenza, in quanto, dal momento che, poiché; tuttavia, ciononostante; stante + nome; in merito a. A meno che non + congiuntivo richiede sempre il non anche con significato positivo."
        },
        examples: [
            { native: "Sebbene il progetto sia ambizioso, è realizzabile.", translation: "Although the project is ambitious, it is achievable." },
            { native: "Parlerò lentamente affinché tutti capiscano.", translation: "I will speak slowly so that everyone understands." },
            { native: "Verrò, a meno che non piova. (note: non is compulsory)", translation: "I'll come, unless it rains." },
            { native: "In merito alla questione finanziaria, si rimanda alla relazione allegata.", translation: "With regard to the financial question, reference is made to the attached report." },
        ]
    },
    {
        id: "it-g-b2-8",
        level: "B2",
        title: "Registro & Idiomi B2",
        explanation: {
            native: "Italian has a significant divergence between formal written and informal spoken registers. Formal written: poiché/in quanto (because), nonostante/malgrado (despite), in merito a (regarding), a seguito di (following), stante (given), tuttavia (however). Nominalisation compresses clauses: anche se è difficile → nonostante la difficoltà. Informal: dai! (come on!), figurati (don't worry / you're welcome), cavarsela (to manage), in bocca al lupo (good luck). Key idioms: non ci piove (no doubt about it), avere un diavolo per capello (to be furious), cavarsela (to cope), non avere peli sulla lingua (to speak one's mind).",
            target: "L'italiano ha una notevole divergenza tra il registro scritto formale e il parlato informale. Scritto formale: poiché/in quanto, nonostante/malgrado, in merito a, a seguito di, stante, tuttavia. La nominalizzazione comprime le proposizioni: anche se è difficile → nonostante la difficoltà. Informale: dai!, figurati, cavarsela, in bocca al lupo. Idiomi chiave: non ci piove, avere un diavolo per capello, cavarsela, non avere peli sulla lingua."
        },
        examples: [
            { native: "Non avere peli sulla lingua, e digli esattamente quello che pensi.", translation: "Don't hold back, and tell him exactly what you think. (idiom: don't have hairs on your tongue)" },
            { native: "Nonostante le difficoltà, il progetto è andato avanti.", translation: "Despite the difficulties, the project went ahead. (nominalisation)" },
            { native: "Se la cava benissimo in situazioni difficili.", translation: "She manages very well in difficult situations." },
        ]
    }
]
