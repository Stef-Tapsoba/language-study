import { GrammarLesson } from "../../../../types"

export const block4Lessons: GrammarLesson[] = [
    // ── it-g-b1-11 — Discorso indiretto ──────────────────────────────────────
    {
        id: "it-g-b1-11",
        level: "B1",
        title: "Il Discorso Indiretto — Retrocessione Temporale",
        explanation: {
            target: `Il discorso indiretto riferisce ciò che qualcuno ha detto, chiesto o ordinato. Quando il verbo di reportage è al passato, i tempi verbali scalano indietro (retrocessione temporale).

TRASFORMAZIONE DI BASE
Diretto: Ha detto: "VERRÒ domani."
Indiretto: Ha detto che SAREBBE VENUTO il giorno dopo.

Quattro cambiamenti chiave:
1. Togli le virgolette; aggiungi che
2. Cambia i pronomi (1a → 3a persona)
3. Fai scalare il tempo (se il verbo di reportage è al passato)
4. Cambia le espressioni temporali

TABELLA DI RETROCESSIONE (verbo di reportage al passato)
Presente → Imperfetto: "Sono stanco." → Ha detto che ERA stanco.
Passato prossimo → Trapassato: "Ho finito." → Ha detto che AVEVA FINITO.
Futuro → Condizionale presente: "Verrò." → Ha detto che SAREBBE VENUTO.
Imperfetto → Imperfetto (invariato): "Lavoravo." → Ha detto che LAVORAVA.
Condizionale → Condizionale (invariato)

DOMANDE INDIRETTE
Sì/No: usa SE
"Viene?" → Mi ha chiesto SE VENIVA.
"Hai mangiato?" → Mi ha chiesto SE AVEVO MANGIATO.

Domande con parola interrogativa: mantieni la parola, usa ordine normale
"Dove vai?" → Mi ha chiesto DOVE ANDASSI / dove andavo.
"Quando arriverà?" → Voleva sapere QUANDO SAREBBE ARRIVATO.
"Perché hai fatto questo?" → Mi ha chiesto PERCHÉ AVESSI FATTO questo.

ORDINI E RICHIESTE INDIRETTI
Usa DI + INFINITO:
"Chiudi la porta!" → Mi ha detto DI CHIUDERE la porta.
"Non fate rumore!" → Ci ha chiesto DI NON FARE rumore.

NESSUNA RETROCESSIONE — verbo di reportage al presente
Dice che È stanco. / Spiega che STA PER partire. / Penso che VENGA.

CAMBIO DI ESPRESSIONI TEMPORALI
oggi → quel giorno / ieri → il giorno prima
domani → il giorno dopo / questa mattina → quella mattina
adesso → in quel momento / qui → lì / la prossima settimana → la settimana successiva`,
            native: `Reported speech (discorso indiretto) transforms direct quotations. When the reporting verb is in the past, tenses backshift: presente → imperfetto, passato prossimo → trapassato, futuro → condizionale presente. Yes/no questions use se; wh-questions keep the question word with normal word order. Commands → di + infinito.`
        },
        rules: [
            {
                condition: "Reporting a statement (past reporting verb)",
                result: "che + backshifted tense (presente → imperfetto; p.p. → trapassato; futuro → condizionale)",
                examples: [
                    { native: "'Sono stanco.' → Ha detto che era stanco.", translation: "'I'm tired.' → He said he was tired." },
                    { native: "'Verrò domani.' → Ha detto che sarebbe venuto il giorno dopo.", translation: "'I'll come tomorrow.' → She said she would come the next day." },
                ]
            },
            {
                condition: "Reporting a yes/no question",
                result: "mi ha chiesto se + backshifted tense",
                examples: [
                    { native: "'Hai fame?' → Mi ha chiesto se avevo fame.", translation: "'Are you hungry?' → She asked me if I was hungry." },
                    { native: "'Vieni alla festa?' → Mi ha chiesto se venivo alla festa.", translation: "'Are you coming to the party?' → He asked me if I was coming to the party." },
                ]
            },
            {
                condition: "Reporting a command or request",
                result: "ha detto / ha chiesto + di + infinito",
                examples: [
                    { native: "'Chiudi la porta!' → Mi ha detto di chiudere la porta.", translation: "'Close the door!' → He told me to close the door." },
                    { native: "'Non fare tardi!' → Ci ha chiesto di non fare tardi.", translation: "'Don't be late!' → She asked us not to be late." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Quando il verbo di reportage è al PRESENTE (dice che, spiega che), non c'è retrocessione temporale — i tempi rimangono invariati. Buona notizia che semplifica molte situazioni quotidiane." },
            { type: "tip", content: "La retrocessione più importante da padroneggiare: futuro → condizionale presente: 'Verrò' → 'Ha detto che sarebbe venuto'. Questo è il pattern che suona più «italiano»." },
            { type: "warning", content: "Ricorda di cambiare le espressioni temporali: domani → il giorno dopo; oggi → quel giorno; qui → lì; questa settimana → quella settimana." },
        ],
        paradigmTable: {
            pronouns: ["Discorso diretto", "Discorso indiretto (past reporting verb)"],
            verbs: [
                { label: "presente", forms: ["imperfetto"] },
                { label: "passato prossimo", forms: ["trapassato prossimo"] },
                { label: "futuro semplice", forms: ["condizionale presente"] },
                { label: "imperfetto", forms: ["imperfetto (invariato)"] },
                { label: "condizionale", forms: ["condizionale (invariato)"] },
            ]
        },
        examples: [
            { native: "Mi ha detto che era dispiaciuto di non aver risposto prima — aveva avuto dei problemi.", translation: "He told me he was sorry for not having replied earlier — he had had some problems." },
            { native: "Mi ha chiesto se potevamo spostare la riunione al lunedì successivo.", translation: "She asked me if we could move the meeting to the following Monday." },
            { native: "Ci ha chiesto di avvertire gli altri partecipanti quel giorno stesso.", translation: "She asked us to notify the other participants that same day." },
            { native: "Voleva sapere cosa avessi deciso — e perché avessi cambiato idea.", translation: "He wanted to know what I had decided — and why I had changed my mind." },
            { native: "Ha detto che non c'era nessun problema.", translation: "She said there was no problem." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Cosa ti ha detto esattamente?", translation: "What exactly did she tell you?" },
                    { native: "Mi ha detto che il progetto sarebbe stato rimandato e ci ha chiesto di non dire niente ai clienti finché non avessero deciso.", translation: "She told me the project would be postponed and asked us not to tell the clients anything until they had decided." }
                ]
            },
        ],
        inlineVocab: [
            { word: "riferire", translation: "to report / relay" },
            { word: "secondo lui/lei", translation: "according to him/her" },
            { word: "a quanto pare", translation: "apparently" },
            { word: "spostare", translation: "to move / reschedule" },
            { word: "avvertire", translation: "to warn / notify" },
            { word: "cambiare idea", translation: "to change one's mind" },
            { word: "dispiacersi di", translation: "to be sorry about" },
            { word: "affermare che", translation: "to claim / assert that" },
            { word: "negare che", translation: "to deny that" },
        ],
    },

    // ── it-g-b1-12 — Gerundio e stare + gerundio ──────────────────────────────
    {
        id: "it-g-b1-12",
        level: "B1",
        title: "Il Gerundio — Modo, Causa, Concessione e Stare + Gerundio",
        explanation: {
            target: `Il gerundio è una forma verbale non finita che esprime circostanza simultanea — modo, mezzo, causa, condizione, concessione. All'A2 hai imparato stare + gerundio al presente. Il B1 ne espande tutti gli usi.

FORMAZIONE REGOLARE
Verbi -ARE: togli -are, aggiungi -ando (parlare → parlando)
Verbi -ERE: togli -ere, aggiungi -endo (scrivere → scrivendo)
Verbi -IRE: togli -ire, aggiungi -endo (partire → partendo)

IRREGOLARI (stessa radice del noi al presente)
fare → facendo / bere → bevendo / dire → dicendo
tradurre → traducendo / porre → ponendo / essere → essendo / avere → avendo

STARE + GERUNDIO — progressivo (tutti i tempi)
Presente: Sto studiando. (I am studying — right now)
Imperfetto: Stavo studiando. (I was studying — interrupted)
Futuro: Starò dormendo. / Condizionale: Starei lavorando.

STAVA + GERUNDIO — fondamentale per la narrazione B1
Stavo CAMMINANDO quando ho sentito dei passi.
Stava DORMENDO quando ha squillato il telefono.
Stavamo MANGIANDO quando è arrivata la notizia.

Confronto con l'imperfetto semplice:
Camminavo → descrive la scena continua (sfondo)
Stavo camminando → enfatizza l'azione in corso in quel preciso momento (più vivido)
Entrambi sono corretti — stava + gerundio è più enfatico.

USI DEL GERUNDIO (stesso soggetto della frase principale)
Modo/mezzo (while / by):
STUDIANDO tutti i giorni, ha migliorato molto. (By studying)
CAMMINANDO, ho incontrato un vecchio amico. (While walking)

Causa:
SAPENDO la risposta, non ha detto niente. (Knowing)
NON AVENDO dormito, era esausto. (Not having slept)

Condizione:
LAVORANDO di più, potresti guadagnare di più. (By working)

⚠️ REGOLA CRITICA: il gerundio deve avere lo STESSO soggetto del verbo principale.
✅ CAMMINANDO, ho incontrato Marco. (io cammino — io incontro)
❌ CAMMINANDO per strada, è cominciato a piovere. (errato — diversi soggetti)

PUR + GERUNDIO — concessione (anche se / nonostante)
PUR ESSENDO stanco, è venuto. (Even though he was tired)
PUR SAPENDO la verità, ha taciuto. (Even though she knew)
PUR NON CAPENDO tutto, ho partecipato. (Even though I didn't understand)

Alternativa elegante a benché + congiuntivo — stesso significato, struttura diversa.`,
            native: `The gerundio expresses simultaneous circumstances (manner, cause, condition). It must share its subject with the main verb. Stava + gerundio (imperfect progressive) is essential for B1 narration. Pur + gerundio = concession (even though/despite doing).`
        },
        rules: [
            {
                condition: "Action in progress interrupted by another event",
                result: "stava/stavo/stavamo + gerundio → passato prossimo (interrupting event)",
                examples: [
                    { native: "Stavo camminando quando ho sentito i passi.", translation: "I was walking when I heard the footsteps." },
                    { native: "Stava dormendo quando ha squillato il telefono.", translation: "He was sleeping when the phone rang." },
                ]
            },
            {
                condition: "Manner/means — how something is done",
                result: "gerundio at start of clause (same subject as main verb)",
                examples: [
                    { native: "Studiando ogni giorno, ha migliorato molto.", translation: "By studying every day, she improved a lot." },
                    { native: "Lavorando sodo, otterrai i risultati che vuoi.", translation: "By working hard, you'll get the results you want." },
                ]
            },
            {
                condition: "Concession — even though/despite",
                result: "pur + gerundio (same subject — elegant alternative to benché + congiuntivo)",
                examples: [
                    { native: "Pur essendo stanca, ha continuato a lavorare.", translation: "Even though she was tired, she kept working." },
                    { native: "Pur non capendo tutto, ho cercato di partecipare.", translation: "Even though I didn't understand everything, I tried to participate." },
                ]
            },
        ],
        notes: [
            { type: "warning", content: "Il gerundio deve avere lo STESSO soggetto del verbo principale. 'Camminando per strada, è cominciato a piovere' è errato perché i soggetti sono diversi (chi cammina ≠ chi piove)." },
            { type: "tip", content: "Pur + gerundio è un'alternativa elegante e stilisticamente raffinata a benché + congiuntivo. Usarlo segnala subito un livello più alto di italiano." },
            { type: "tip", content: "Stava + gerundio (imperfetto progressivo) è probabilmente la struttura più utile di questa unità per la narrazione. Praticalo abbondantemente: 'Stavo leggendo quando...' / 'Stavamo cenando quando...'" },
        ],
        conjugationTable: {
            pronouns: ["io", "tu", "lui/lei", "noi", "voi", "loro"],
            verbs: [
                { label: "stare + gerundio (presente)", forms: ["sto leggendo", "stai leggendo", "sta leggendo", "stiamo leggendo", "state leggendo", "stanno leggendo"] },
                { label: "stare + gerundio (imperfetto)", forms: ["stavo leggendo", "stavi leggendo", "stava leggendo", "stavamo leggendo", "stavate leggendo", "stavano leggendo"] },
            ]
        },
        examples: [
            { native: "Stavo cercando le chiavi quando ho sentito il campanello.", translation: "I was looking for my keys when I heard the doorbell." },
            { native: "Pur cercando di essere più organizzato, faccio sempre lo stesso errore.", translation: "Even though I try to be more organised, I always make the same mistake." },
            { native: "Non avendo dormito bene, era difficile concentrarmi.", translation: "Not having slept well, it was hard to concentrate." },
            { native: "Studiando di più, dovresti migliorare — ma poi guardi il telefono.", translation: "By studying more, you should improve — but then you look at your phone." },
            { native: "Pur sapendo la risposta, ha preferito non parlare.", translation: "Even though she knew the answer, she preferred not to speak." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Cosa stai facendo?", translation: "What are you doing?" },
                    { native: "Sto leggendo. Stavo scrivendo un'email, ma non riesco a concentrarmi — pur cercando.", translation: "I'm reading. I was writing an email, but I can't concentrate — even though I'm trying." }
                ]
            },
        ],
        inlineVocab: [
            { word: "stare + gerundio", translation: "to be doing (continuous)" },
            { word: "pur + gerundio", translation: "even though/despite doing" },
            { word: "concentrarsi", translation: "to concentrate" },
            { word: "il campanello", translation: "the doorbell" },
            { word: "dimenticarsi (di)", translation: "to forget" },
            { word: "migliorare", translation: "to improve" },
            { word: "guadagnare", translation: "to earn" },
            { word: "mentre", translation: "while" },
        ],
    },

    // ── it-g-b1-13 — Connettori logici B1 ────────────────────────────────────
    {
        id: "it-g-b1-13",
        level: "B1",
        title: "Connettori Logici B1 — Causa, Conseguenza, Concessione, Opposizione",
        explanation: {
            target: `La differenza tra l'italiano A2 e il B1 è in parte la precisione dei connettori: saper dire esattamente «perché», «cosa ne segue», «nonostante questo» e «al contrario». Questi strumenti sono l'architettura dell'argomentazione strutturata.

CAUSA (già noto: perché, siccome)
B1 aggiunge:

poiché + frase — formale
Poiché il tempo è brutto, restiamo a casa.
dato che + frase — neutro
Dato che non vieni, iniziamo senza di te.
visto che + frase — informale
Visto che sei già lì, puoi aiutarci?
a causa di + sostantivo — neutro/negativo
A causa del maltempo, l'evento è stato annullato.
per via di + sostantivo — informale
Per via di un problema tecnico, il volo è in ritardo.

CONSEGUENZA (già noto: quindi, allora)
B1 aggiunge:

pertanto — formale: Non è stato raggiunto un accordo; pertanto, non si può procedere.
di conseguenza — neutro: Le vendite sono aumentate; di conseguenza, il profitto è cresciuto.
perciò — neutro: Era tardi, perciò siamo partiti subito.
tanto da + infinito — misura: Era così stanco da non riuscire a parlare.

CONCESSIONE (già noto: però, ma)
B1 aggiunge:

eppure — eppure ha continuato. (yet / and yet — espressivo, specificamente italiano)
tuttavia — formale: La situazione è difficile; tuttavia, ci sono progressi.
ciononostante — formale: Ciononostante, ha accettato.
comunque — neutro: Comunque, alla fine è andata bene.
lo stesso — informale: È rischioso, ma ci proviamo lo stesso.

OPPOSIZIONE (già noto: ma, però)
B1 aggiunge:

mentre — confronto: Il nord è industriale, mentre il sud è più turistico.
invece — contrasto con precedente: Non mi è piaciuta la prima parte; il finale, invece, era eccellente.
al contrario — contraddizione diretta: Non è un problema lieve — al contrario, è grave.
d'altra parte — altra prospettiva: È costosa; d'altra parte, è necessaria.

NOTA: eppure è specificamente italiano — non ha un equivalente esatto in spagnolo o francese. Ha una sfumatura emotiva di sorpresa/contrasto. Usarlo fa suonare l'italiano autentico.`,
            native: `B1 discourse connectors for cause (poiché/dato che/visto che), consequence (pertanto/di conseguenza/perciò), concession (eppure/tuttavia/comunque), and opposition (mentre/invece/al contrario). Precision of connectors distinguishes A2 from B1 Italian.`
        },
        rules: [
            {
                condition: "Cause — since/given that (different registers)",
                result: "poiché (formal) / dato che (neutral) / visto che (informal)",
                examples: [
                    { native: "Dato che non sei disponibile, rimando la riunione.", translation: "Given that you're not available, I'm postponing the meeting." },
                    { native: "Poiché i risultati erano insoddisfacenti, si è deciso di ripetere il test.", translation: "Since the results were unsatisfactory, it was decided to repeat the test." },
                ]
            },
            {
                condition: "Consequence — therefore (different registers)",
                result: "pertanto (formal) / di conseguenza (neutral) / perciò (neutral)",
                examples: [
                    { native: "Non è stato raggiunto un accordo; pertanto, non si può procedere.", translation: "No agreement was reached; therefore, we cannot proceed." },
                    { native: "Il budget è stato tagliato; di conseguenza, il progetto è in ritardo.", translation: "The budget was cut; as a result, the project is behind." },
                ]
            },
            {
                condition: "Concession — yet/however/despite",
                result: "eppure (expressive) / tuttavia (formal) / comunque (neutral spoken)",
                examples: [
                    { native: "Era stanco; eppure ha continuato a lavorare tutta la notte.", translation: "He was tired; and yet he kept working all night." },
                    { native: "La situazione è grave. Tuttavia, ci sono segnali di miglioramento.", translation: "The situation is serious. However, there are signs of improvement." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Eppure è il connettore più caratteristicamente italiano di questo gruppo — ha una sfumatura emotiva di paradosso che non si traduce perfettamente. 'Studiavo ogni giorno. Eppure non riuscivo a fare progressi.' Usarlo fa suonare l'italiano più autentico." },
            { type: "tip", content: "Tuttavia (scritto/formale) vs comunque (parlato/neutro) — stesso significato, registro diverso. In una mail formale: tuttavia. In una conversazione: comunque." },
            { type: "tip", content: "Invece è molto frequente nell'italiano parlato colto — non dimenticare di usarlo nei compiti orali come connettore di contrasto naturale." },
        ],
        examples: [
            { native: "La situazione economica è preoccupante. Dato che la disoccupazione rimane alta, è necessario agire.", translation: "The economic situation is worrying. Given that unemployment remains high, action is needed." },
            { native: "Le misure proposte sono insufficienti — pertanto, molti economisti chiedono una riforma più profonda.", translation: "The proposed measures are insufficient — therefore, many economists are calling for deeper reform." },
            { native: "Era stanco; eppure ha continuato.", translation: "He was tired; and yet he kept going." },
            { native: "L'occupazione è aumentata nelle città, mentre le aree rurali continuano a soffrire.", translation: "Employment has risen in cities, whereas rural areas continue to struggle." },
            { native: "Non mi è piaciuto il primo tempo; il finale, invece, era eccellente.", translation: "I didn't like the first half; the ending, on the other hand, was excellent." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Hai capito perché il progetto è stato bloccato?", translation: "Did you understand why the project was blocked?" },
                    { native: "Dato che il budget era stato tagliato senza preavviso, la direzione ha deciso di sospendere tutto; pertanto, siamo in attesa. Eppure avevamo lavorato benissimo fino ad allora.", translation: "Given that the budget had been cut without warning, management decided to suspend everything; therefore, we're waiting. And yet we had been working very well until then." }
                ]
            },
        ],
        inlineVocab: [
            { word: "poiché", translation: "since / because (formal)" },
            { word: "dato che", translation: "given that" },
            { word: "visto che", translation: "given that (informal)" },
            { word: "a causa di", translation: "due to (+ noun)" },
            { word: "pertanto", translation: "therefore (formal)" },
            { word: "di conseguenza", translation: "as a consequence" },
            { word: "perciò", translation: "therefore / so" },
            { word: "eppure", translation: "yet / and yet" },
            { word: "tuttavia", translation: "however (formal)" },
            { word: "comunque", translation: "anyway / however" },
            { word: "ciononostante", translation: "nonetheless (formal)" },
            { word: "invece", translation: "instead / on the other hand" },
            { word: "al contrario", translation: "on the contrary" },
            { word: "d'altra parte", translation: "on the other hand" },
        ],
    },
]
