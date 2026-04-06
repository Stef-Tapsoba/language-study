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
    },
    {
        id: "it-g-b2-9",
        level: "B2",
        title: "Congiuntivo Passato e Trapassato — Strutture Complesse",
        explanation: {
            native: "The congiuntivo passato expresses an action that was completed before the main clause action, when the main clause trigger is in the present or future. Formation: avere/essere in congiuntivo presente + past participle. The congiuntivo trapassato expresses a completed action that happened before another past action, when the main clause trigger is in a past tense. Formation: avere/essere in congiuntivo imperfetto + past participle. Key tense sequence: main clause present/future + che + congiuntivo passato (completed past action); main clause past + che + congiuntivo trapassato (past-in-past action). Common triggers: pensare, credere, sperare, temere, nonostante, benché, sebbene, prima che, senza che.",
            target: "Il congiuntivo passato esprime un'azione già completata prima dell'azione della frase principale, quando il predicato reggente è al presente o al futuro. Formazione: avere/essere al congiuntivo presente + participio passato. Il congiuntivo trapassato esprime un'azione conclusa avvenuta prima di un'altra azione passata, quando il predicato reggente è a un tempo passato. Formazione: avere/essere al congiuntivo imperfetto + participio passato. Sequenza dei tempi principale: frase principale al presente/futuro + che + congiuntivo passato; frase principale al passato + che + congiuntivo trapassato. Reggenti comuni: pensare, credere, sperare, temere, nonostante, benché, prima che, senza che."
        },
        examples: [
            { native: "Sono contento che tu sia venuto alla festa.", translation: "I'm glad that you came to the party. (congiuntivo passato: main present, subordinate completed)" },
            { native: "Credo che abbiano già deciso.", translation: "I believe they have already decided. (congiuntivo passato after credere)" },
            { native: "Nonostante avesse studiato molto, non superò l'esame.", translation: "Although he had studied a lot, he didn't pass the exam. (congiuntivo trapassato after nonostante with past main)" },
            { native: "Era felice che fossero arrivati in tempo.", translation: "He was happy that they had arrived on time. (congiuntivo trapassato: main past + completed prior arrival)" }
        ]
    },
    {
        id: "it-g-b2-10",
        level: "B2",
        title: "La Nominalizzazione — Italiano Accademico e Formale",
        explanation: {
            native: "Nominalisation in formal Italian converts verbs and adjectives into noun phrases, producing the dense, impersonal style of academic and journalistic writing. Key patterns: verb → noun (sviluppare → lo sviluppo, ridurre → la riduzione, attuare → l'attuazione); adjective → noun (libero → la libertà, giusto → la giustizia). The structure \"il fatto che + congiuntivo\" is a key formal construction. Impersonal formal structures: \"è opportuno sottolineare che\", \"occorre precisare che\", \"va tenuto presente che\". The infinitive as subject in formal register: \"risolvere questo problema richiede tempo\" (solving this problem takes time). Gerund in formal argumentation: \"pur ammettendo che...\" (while admitting that...).",
            target: "La nominalizzazione nell'italiano formale trasforma verbi e aggettivi in sintagmi nominali, producendo lo stile denso e impersonale della scrittura accademica e giornalistica. Schemi principali: verbo → nome (sviluppare → lo sviluppo, ridurre → la riduzione, attuare → l'attuazione); aggettivo → nome (libero → la libertà). La struttura «il fatto che + congiuntivo» è una costruzione formale fondamentale. Strutture impersonali formali: «è opportuno sottolineare che», «occorre precisare che», «va tenuto presente che». L'infinito come soggetto nel registro formale: «risolvere questo problema richiede tempo». Il gerundio nell'argomentazione: «pur ammettendo che...»."
        },
        examples: [
            { native: "Lo sviluppo economico dipende da molteplici fattori.", translation: "Economic development depends on multiple factors. (nominalisation: sviluppare → lo sviluppo)" },
            { native: "Il fatto che i prezzi continuino a salire preoccupa i consumatori.", translation: "The fact that prices continue to rise worries consumers. (il fatto che + congiuntivo)" },
            { native: "È opportuno sottolineare che i dati presentati sono preliminari.", translation: "It is appropriate to point out that the data presented are preliminary. (formal: è opportuno sottolineare)" },
            { native: "Pur ammettendo le difficoltà, bisogna trovare una soluzione.", translation: "While admitting the difficulties, a solution must be found. (pur + gerundio = concession)" }
        ]
    },
    {
        id: "it-g-b2-11",
        level: "B2",
        title: "Strutture Impersonali — Distanza e Oggettività nel Discorso Formale",
        explanation: {
            native: "Formal Italian regularly uses impersonal structures to achieve objectivity and distance. Key patterns: (1) Si + active verb for impersonal generalisations: \"Si ritiene che...\", \"Si prevede che...\", \"Si osserva che...\" — used extensively in academic/journalistic writing. (2) The formal passive with venire: venire + past participle in simple tenses (NOT compound): \"I risultati vengono analizzati\" (The results are being analysed). (3) Formal impersonal expressions: \"è necessario che + congiuntivo\", \"risulta opportuno + infinito\", \"appare evidente che + indicativo\". (4) Modal constructions for formal hedging: \"sembrerebbe che + congiuntivo\" (it would seem that), \"si potrebbe ipotizzare che\" (one might hypothesise that).",
            target: "L'italiano formale usa regolarmente strutture impersonali per ottenere oggettività e distanza. Schemi principali: (1) Si + verbo attivo per generalizzazioni impersonali: «Si ritiene che...», «Si prevede che...», «Si osserva che...». (2) Passivo formale con venire: venire + participio passato nei tempi semplici (NON composti): «I risultati vengono analizzati». (3) Espressioni impersonali formali: «è necessario che + congiuntivo», «risulta opportuno + infinito», «appare evidente che + indicativo». (4) Costruzioni modali per l'attenuazione formale: «sembrerebbe che + congiuntivo», «si potrebbe ipotizzare che»."
        },
        examples: [
            { native: "Si ritiene che il cambiamento climatico rappresenti una minaccia esistenziale.", translation: "It is believed that climate change represents an existential threat. (si + active = impersonal)" },
            { native: "I dati vengono raccolti e analizzati ogni trimestre.", translation: "The data is collected and analysed every quarter. (venire + past participle = formal passive)" },
            { native: "Risulta opportuno precisare i limiti di questa analisi.", translation: "It is appropriate to specify the limits of this analysis. (risulta opportuno = formal hedging)" },
            { native: "Sembrerebbe che la situazione stia migliorando.", translation: "It would seem that the situation is improving. (sembrerebbe che + congiuntivo = cautious assertion)" }
        ]
    },
    {
        id: "it-g-b2-12",
        level: "B2",
        title: "La Concordanza dei Tempi nelle Proposizioni Subordinate",
        explanation: {
            native: "The sequence of tenses (concordanza dei tempi) governs which tense appears in a subordinate clause based on the tense of the main clause. In Italian, this is particularly important with the congiuntivo. General rule: if the main clause is present or future → use congiuntivo presente or passato in the subordinate clause. If the main clause is past (imperfetto, passato prossimo, passato remoto) → use congiuntivo imperfetto or trapassato. Summary table: main present → sub congiuntivo presente (simultaneous) / passato (prior); main past → sub congiuntivo imperfetto (simultaneous or subsequent) / trapassato (prior to main action). This rule produces naturalness in complex Italian sentences and is heavily tested in Italian certification exams.",
            target: "La concordanza dei tempi regola quale tempo compare nella proposizione subordinata in base al tempo della frase principale. In italiano è particolarmente importante con il congiuntivo. Regola generale: se la frase principale è al presente o al futuro → si usa il congiuntivo presente o passato nella subordinata. Se la frase principale è al passato (imperfetto, passato prossimo, passato remoto) → si usa il congiuntivo imperfetto o trapassato. Tavola riassuntiva: principale al presente → subordinata al congiuntivo presente (contemporaneità) / passato (anteriorità); principale al passato → subordinata al congiuntivo imperfetto (contemporaneità o posteriorità) / trapassato (anteriorità). Questa regola è fondamentale per la naturalezza delle frasi complesse italiane."
        },
        examples: [
            { native: "Penso che Marco lavori ancora.", translation: "I think Marco is still working. (main: present; sub: congiuntivo presente — simultaneous)" },
            { native: "Penso che Marco abbia già finito.", translation: "I think Marco has already finished. (main: present; sub: congiuntivo passato — prior action)" },
            { native: "Pensavo che Marco lavorasse ancora.", translation: "I thought Marco was still working. (main: imperfetto; sub: congiuntivo imperfetto — simultaneous)" },
            { native: "Pensavo che Marco avesse già finito.", translation: "I thought Marco had already finished. (main: imperfetto; sub: congiuntivo trapassato — prior to main)" }
        ]
    },
    {
        id: "it-g-b2-13",
        level: "B2",
        title: "Condizionale Avanzato — Usi Giornalistici e Retorici",
        explanation: {
            native: "Italian uses the conditional in two important B2 contexts beyond hypothesis. (1) The journalistic conditional (condizionale giornalistico): the condizionale presente is used to report unverified information, distancing the writer from direct assertion: \"Il governo avrebbe preso una decisione importante\" (The government is reported to have made an important decision). The condizionale passato is also used: \"Il ministro avrebbe già rassegnato le dimissioni\" (The minister is said to have already resigned). This is a standard convention in quality Italian journalism. (2) The modal/rhetorical conditional for formal distancing or polite assertion: \"Sarebbe opportuno esaminare le prove\" (It would be appropriate to examine the evidence) — no explicit condition, the conditional itself creates the softening effect.",
            target: "L'italiano usa il condizionale in due importanti contesti B2 oltre all'ipotesi. (1) Il condizionale giornalistico: il condizionale presente è usato per riportare informazioni non verificate, distanziando il giornalista dall'affermazione diretta: «Il governo avrebbe preso una decisione importante». Si usa anche il condizionale passato: «Il ministro avrebbe già rassegnato le dimissioni». È una convenzione standard nel giornalismo di qualità italiano. (2) Il condizionale modale/retorico per l'attenuazione formale o un'affermazione educata: «Sarebbe opportuno esaminare le prove» — senza condizione esplicita, il condizionale stesso crea l'effetto di distanza."
        },
        examples: [
            { native: "Il governo avrebbe deciso di posticipare le elezioni, secondo fonti attendibili.", translation: "The government is reported to have decided to postpone elections, according to reliable sources. (journalistic conditional)" },
            { native: "Il presidente avrebbe firmato il decreto nella giornata di ieri.", translation: "The president is said to have signed the decree yesterday. (journalistic past conditional)" },
            { native: "Sarebbe opportuno condurre ulteriori indagini prima di trarre conclusioni.", translation: "It would be appropriate to conduct further investigations before drawing conclusions. (modal conditional)" },
            { native: "Ci vorrebbe più coraggio da parte dei leader politici.", translation: "More courage would be needed from political leaders. (modal: volere → vorrebbe)" }
        ]
    }
]
