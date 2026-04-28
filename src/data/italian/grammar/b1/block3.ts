import { GrammarLesson } from "../../../../types"

export const block3Lessons: GrammarLesson[] = [
    // ── it-g-b1-8 — Periodo ipotetico tipo 2 e tipo 3 ─────────────────────────
    {
        id: "it-g-b1-8",
        level: "B1",
        title: "Periodo Ipotetico — Tipo 2 (Ipotetico) e Tipo 3 (Controfattuale)",
        explanation: {
            target: `All'A2 hai imparato il tipo 1 (se + presente → futuro/presente). Il B1 aggiunge i tipi 2 e 3: il regno dell'immaginazione, dei rimpianti e della speculazione.

I TRE TIPI A CONFRONTO
Tipo 1: se + PRESENTE → futuro/presente (reale/probabile)
Tipo 2: se + CONGIUNTIVO IMPERFETTO → CONDIZIONALE PRESENTE (ipotetico ora)
Tipo 3: se + CONGIUNTIVO TRAPASSATO → CONDIZIONALE PASSATO (controfattuale passato)

TIPO 2 — Ipotetico presente (contrario alla realtà attuale)
Se AVESSI tempo, VIAGGEREI di più. (ma non ce l'ho)
Se FOSSE qui, le cose SAREBBERO diverse.
Se POTESTE cambiare una cosa, cosa SCEGLIERESTE?

TIPO 3 — Controfattuale passato (rimpianto, diversa storia)
Se AVESSI AVUTO tempo, AVREI VIAGGIATO di più.
Se FOSSE ARRIVATA prima, AVREMMO POTUTO partire insieme.
Se NON AVESSI DETTO quella cosa, niente SAREBBE SUCCESSO.

CONGIUNTIVO IMPERFETTO — FORMAZIONE
Base: forma loro del PASSATO REMOTO → togli -rono → aggiungi -ssi/-ssi/-sse/-ssimo/-ste/-ssero

⚠️ PREREQUISITO: il congiuntivo imperfetto si forma dal passato remoto loro. Verifica:
andare → andarono → andassi / fare → fecero → facessi
essere → furono → fossi / avere → ebbero → avessi
dire → dissero → dicessi / vedere → videro → vedessi
venire → vennero → venissi / potere → poterono → potessi

⚠️ NOTA PER CHI HA UN ITALIANO DI IMPOSTAZIONE SETTENTRIONALE
Il passato remoto è raramente usato nella conversazione del Nord (Milano, Torino, Venezia). Tuttavia le sue forme sono necessarie per costruire il congiuntivo imperfetto. Impara le forme «loro» come base grammaticale, anche se non le usi nel parlato.

CONDIZIONALE PASSATO — FORMAZIONE
condizionale di avere/essere + participio passato
avrei mangiato / sarei partito/a / avrei fatto / sarei venuto/a

CONDIZIONALE PASSATO INDIPENDENTE (senza se)
AVREI DOVUTO dirti prima. (I should have told you)
AVRESTI POTUTO chiedere! (You could have asked)
MI SAREBBE PIACIUTO esserci. (I would have liked to be there)

USO GIORNALISTICO DEL CONDIZIONALE PASSATO
Per riportare informazioni non verificate:
Secondo i media, AVREBBE RASSEGNATO le dimissioni ieri.
L'incidente AVREBBE CAUSATO tre feriti. (reportedly)`,
            native: `Type 2 hypothetical: se + congiuntivo imperfetto → condizionale presente (contrary to current reality). Type 3 counterfactual: se + congiuntivo trapassato → condizionale passato (past regret). The congiuntivo imperfetto is formed from the passato remoto loro form.`
        },
        rules: [
            {
                condition: "Hypothetical present — contrary to current reality",
                result: "se + congiuntivo imperfetto → condizionale presente",
                examples: [
                    { native: "Se avessi più tempo, imparerei a suonare il piano.", translation: "If I had more time, I'd learn to play the piano." },
                    { native: "Se fossi te, non lo farei.", translation: "If I were you, I wouldn't do it." },
                ]
            },
            {
                condition: "Counterfactual past — different past = different outcome",
                result: "se + congiuntivo trapassato → condizionale passato",
                examples: [
                    { native: "Se avessi studiato di più, avrei superato l'esame.", translation: "If I had studied more, I would have passed the exam." },
                    { native: "Se non fosse partita, saremmo ancora insieme.", translation: "If she hadn't left, we'd still be together." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Avrei dovuto / avrei potuto / mi sarebbe piaciuto sono chunks ad alta frequenza — impara queste espressioni come blocchi. 'Avrei dovuto non smettere mai' è già italiano autentico." },
            { type: "warning", content: "MAI usare il condizionale nella clausola con se: 'Se avrei tempo' è errato — sempre il congiuntivo imperfetto nella clausola se. Il condizionale va nella clausola principale." },
            { type: "culture", content: "Il condizionale passato giornalistico (avrebbe detto, avrebbe causato) segnala informazione non verificata — identico al condizionale giornalistico di francese e spagnolo. Essenziale per leggere le notizie italiane." },
        ],
        conjugationTable: {
            pronouns: ["io", "tu", "lui/lei", "noi", "voi", "loro"],
            verbs: [
                { label: "essere (cong. imperf.)", forms: ["fossi", "fossi", "fosse", "fossimo", "foste", "fossero"] },
                { label: "avere (cong. imperf.)", forms: ["avessi", "avessi", "avesse", "avessimo", "aveste", "avessero"] },
                { label: "fare (cong. imperf.)", forms: ["facessi", "facessi", "facesse", "facessimo", "faceste", "facessero"] },
                { label: "partire (cond. pass.)", forms: ["sarei partito/a", "saresti partito/a", "sarebbe partito/a", "saremmo partiti/e", "sareste partiti/e", "sarebbero partiti/e"] },
            ]
        },
        examples: [
            { native: "Se potessi scegliere un'altra professione, cosa faresti?", translation: "If you could choose another profession, what would you do?" },
            { native: "Se fossi stata più coraggiosa, mi sarei dedicata al teatro.", translation: "If I had been braver, I would have devoted myself to theatre." },
            { native: "Avrei dovuto dirti prima — mi dispiace.", translation: "I should have told you earlier — I'm sorry." },
            { native: "Se avessimo saputo allora quello che sappiamo ora, avremmo fatto molte cose diversamente.", translation: "If we had known then what we know now, we would have done many things differently." },
            { native: "Avresti potuto chiedere — era semplice.", translation: "You could have asked — it was simple." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Se avessi viaggiato di più da giovane, cosa avresti fatto?", translation: "If you had travelled more when you were young, what would you have done?" },
                    { native: "Avrei imparato diverse lingue. Avrei dovuto non smettere mai di esplorare.", translation: "I would have learned several languages. I should have never stopped exploring." }
                ]
            },
        ],
        inlineVocab: [
            { word: "se solo... / magari", translation: "if only" },
            { word: "all'epoca", translation: "at the time" },
            { word: "dedicarsi a", translation: "to devote oneself to" },
            { word: "riprendere", translation: "to take up again" },
            { word: "avrei dovuto", translation: "I should have" },
            { word: "avrei potuto", translation: "I could have" },
            { word: "mi sarebbe piaciuto", translation: "I would have liked" },
            { word: "secondo (i media)", translation: "according to (the media)" },
            { word: "rassegnare le dimissioni", translation: "to resign" },
            { word: "diversamente", translation: "differently" },
        ],
    },

    // ── it-g-b1-9 — Pronomi combinati ─────────────────────────────────────────
    {
        id: "it-g-b1-9",
        level: "B1",
        title: "Pronomi Combinati — Glielo, Gliele, Dammelo",
        explanation: {
            target: `I pronomi doppi (combinati) si usano quando una frase ha sia un pronome indiretto che un pronome diretto. In italiano naturale si evita sempre di ripetere i sostantivi — i pronomi doppi rendono il parlato fluido.

PRE-GRAMMATICA — ascolta prima
"Non glielo ho ancora restituito. Gliele hai date? Sì, me le aveva chieste ieri."
Senti come glielo/gliele/me le scorrono in modo naturale?

REGOLA 1: mi/ti/ci/vi → me/te/ce/ve + lo/la/li/le/ne
mi + lo → me lo / mi + la → me la / mi + li → me li / mi + le → me le
ti + lo → te lo / ci + lo → ce lo / vi + lo → ve lo

REGOLA 2: gli/le → glie- fuso con il secondo pronome
gli + lo → glielo / gli + la → gliela / gli + li → glieli / gli + le → gliele
le + lo → glielo / le + la → gliela (stessa forma — contesto chiarisce)

NOTA PER CHI HA STUDIATO CON GRAMMATICHE VECCHIE
Le grammatiche tradizionali usavano 'le' (femm. sing.) e 'loro' (plur.) per il complemento indiretto. L'italiano moderno usa GLI per entrambi (maschile singolare, femminile singolare, plurale). Glielo può quindi significare «lo do a lui», «lo do a lei» o «lo do a loro». Il contesto chiarisce sempre.

NEI TEMPI COMPOSTI
Entrambi i pronomi vanno PRIMA dell'ausiliare.
Il participio passato concorda con il pronome diretto (lo/la/li/le) precedente:
Gliel'ho data ieri. (gliela + avere → data concorda con la)
Me li ha dati. (me li + avere → dati concorda con li)

IMPERATIVO AFFERMATIVO — pronomi attaccati (doppi)
Dammelo. (da' + me + lo — consonante raddoppiata)
Diccelo. (di' + ci + lo)
Diglielo. (di' + gli + lo)
Mostrategliela. (mostate + gli + la — forma voi)
Attenzione: i monosillabi (da', di', fa', sta') raddoppiano la consonante del primo pronome.

IMPERATIVO NEGATIVO — pronomi separati prima del verbo
Non me lo dire. / Non glielo spiegare.`,
            native: `Double object pronouns combine indirect + direct pronouns. mi/ti/ci/vi become me/te/ce/ve before lo/la/li/le/ne. gli/le both become glie- and fuse into one word (glielo, gliela, glieli, gliele). In affirmative imperatives, double pronouns attach after the verb.`
        },
        rules: [
            {
                condition: "mi/ti/ci/vi + direct pronoun",
                result: "Change to me/te/ce/ve + lo/la/li/le",
                examples: [
                    { native: "Me lo dai? (mi + lo)", translation: "Will you give it to me?" },
                    { native: "Te la mando domani. (ti + la)", translation: "I'll send it to you tomorrow." },
                ]
            },
            {
                condition: "gli/le + direct pronoun",
                result: "glielo/gliela/glieli/gliele — fused into one word",
                examples: [
                    { native: "Glielo do subito. (gli + lo)", translation: "I'll give it to him/her right away." },
                    { native: "Gliele ho restituite ieri. (gli + le)", translation: "I returned them to him/her yesterday." },
                ]
            },
            {
                condition: "Affirmative imperative + double pronouns",
                result: "Attach after verb — monosyllabic imperatives double the first consonant",
                examples: [
                    { native: "Dammelo! (da' + me + lo)", translation: "Give it to me!" },
                    { native: "Diglielo da parte mia.", translation: "Tell him/her from me." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Solo due pattern da imparare: (1) mi/ti/ci/vi → me/te/ce/ve prima di lo/la/li/le/ne; (2) gli/le → glie- + secondo pronome fuso. Due regole coprono tutta la tabella." },
            { type: "warning", content: "Il participio passato concorda con il pronome DIRETTO precedente (non con l'indiretto): 'Gliel'ho data' (la lettera, femm. → data). 'Me li ha restituiti' (i libri, masc. pl. → restituiti)." },
            { type: "culture", content: "I pronomi doppi glielo/gliela/glieli/gliele sono specificamente italiani — non hanno un equivalente esatto in spagnolo o francese. Usarli correttamente è un segno di padronanza autentica dell'italiano." },
        ],
        paradigmTable: {
            pronouns: ["Indiretto", "+ lo", "+ la", "+ li", "+ le"],
            verbs: [
                { label: "mi", forms: ["me lo", "me la", "me li", "me le"] },
                { label: "ti", forms: ["te lo", "te la", "te li", "te le"] },
                { label: "gli / le", forms: ["glielo", "gliela", "glieli", "gliele"] },
                { label: "ci", forms: ["ce lo", "ce la", "ce li", "ce le"] },
                { label: "vi", forms: ["ve lo", "ve la", "ve li", "ve le"] },
            ]
        },
        examples: [
            { native: "Hai restituito il libro a Luca? — No, non glielo ho ancora restituito.", translation: "Did you return the book to Luca? — No, I haven't returned it to him yet." },
            { native: "Le chiavi della sala — gliele hai date? — Sì, gliele ho date stamattina.", translation: "The hall keys — did you give them to her? — Yes, I gave them to her this morning." },
            { native: "Gli appunti del corso — te li mando adesso.", translation: "The course notes — I'll send them to you now." },
            { native: "Diglielo da parte mia — mi deve offrire un caffè.", translation: "Tell him from me — he owes me a coffee." },
            { native: "Dammelo e lo leggo stasera.", translation: "Give it to me and I'll read it tonight." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Puoi portare il libro a Luca stasera?", translation: "Can you take the book to Luca tonight?" },
                    { native: "Sì, glielo porto. E le chiavi — me le aveva chieste ieri, gliele do anche quelle.", translation: "Yes, I'll bring it to him. And the keys — he'd asked me for them yesterday, I'll give those to him too." }
                ]
            },
        ],
        inlineVocab: [
            { word: "restituire (qc. a qn.)", translation: "to return (sth to sb)" },
            { word: "portare (qc. a qn.)", translation: "to bring/take (sth to sb)" },
            { word: "offrire (a qn.)", translation: "to treat / buy for (sb)" },
            { word: "da parte mia", translation: "on my behalf" },
            { word: "gli appunti", translation: "(course) notes" },
            { word: "promesso", translation: "promised / I promise" },
            { word: "me ne sono dimenticato", translation: "I forgot about it" },
        ],
    },

    // ── it-g-b1-10 — Pronomi relativi avanzati: cui, il quale, quello che ─────
    {
        id: "it-g-b1-10",
        level: "B1",
        title: "Pronomi Relativi Avanzati — Cui, Il Quale, Quello Che",
        explanation: {
            target: `All'A2 hai imparato che, chi, dove. Il B1 aggiunge cui (dopo preposizione), il quale/la quale (formale), quello che / ciò che (riferimento astratto) e il cui / la cui (possessivo relativo).

CUI — DOPO PREPOSIZIONE
Cui sostituisce un sostantivo dopo una preposizione (di/a/con/per/su/da/tra/fra):

È il libro DI CUI ho bisogno. (di + questo libro)
È la persona DI CUI ti ho parlato. (di + questa persona)
L'amico CON CUI viaggio si chiama Marco.
Il motivo PER CUI sono partito era semplice.

TEST: "Posso dire 'preposizione + nome' qui?" → Sì → usa cui

VERBI/ESPRESSIONI COMUNI CON DI → di cui
parlare di / aver bisogno di / aver paura di / ricordarsi di
essere orgoglioso/a di / occuparsi di / fidarsi di

IL CUI / LA CUI — possessivo relativo (whose)
L'articolo (il/la/i/le) concorda con la COSA POSSEDUTA (non col possessore):
È un amico IL CUI PADRE è medico. (il padre — masch. sing.)
Una società I CUI DIRETTORI si sono dimessi. (i direttori — masch. pl.)
Una ragazza LA CUI STORIA è commovente. (la storia — femm. sing.)

IL QUALE / LA QUALE / I QUALI / LE QUALI
Varianti formali — usate dopo preposizione o per evitare ambiguità:
La ragione PER LA QUALE sono venuto...
Il collega CON IL QUALE ho lavorato...
Gli studenti AI QUALI ho insegnato...
Le preposizioni si contraggono: di il quale → del quale, a i quali → ai quali

QUANDO USARE: principalmente nell'italiano formale/scritto. Al B1: comprensione prioritaria, produzione come obiettivo B2.

QUELLO CHE / CIÒ CHE — riferimento astratto
quello che — neutro: Quello che mi piace è l'atmosfera.
ciò che — formale: Ciò che mi ha colpito è la semplicità.
quel che — informale: Quel che voglio dire è che...

Usati anche per enfasi/topicalizzazione:
QUELLO CHE voglio davvero dire è che...
QUELLO CHE è importante è provare.`,
            native: `Advanced relative pronouns: cui (after prepositions), il cui/la cui (possessive whose), il quale/la quale (formal alternatives), quello che/ciò che (abstract "what/which"). Cui is the most practically important B1 addition.`
        },
        rules: [
            {
                condition: "Preposition + relative pronoun",
                result: "preposition + cui (NOT preposition + che)",
                examples: [
                    { native: "Il progetto di cui siamo orgogliosi ha vinto il premio.", translation: "The project we are proud of won the prize." },
                    { native: "La persona a cui ho scritto non ha risposto.", translation: "The person I wrote to didn't reply." },
                ]
            },
            {
                condition: "Possessive relative (whose)",
                result: "article + cui + noun — article agrees with the POSSESSED thing",
                examples: [
                    { native: "È un amico il cui padre è medico.", translation: "It's a friend whose father is a doctor." },
                    { native: "Una storia la cui fine è imprevedibile.", translation: "A story whose ending is unpredictable." },
                ]
            },
            {
                condition: "Abstract reference (what / the thing that)",
                result: "quello che / ciò che (formal) / quel che (informal)",
                examples: [
                    { native: "Quello che mi piace di questa città è l'atmosfera.", translation: "What I like about this city is the atmosphere." },
                    { native: "Ciò che mi ha sorpreso è la sua semplicità.", translation: "What surprised me is its simplicity." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Test affidabile per cui: 'Posso dire preposizione + nome qui?' Se sì, usa cui. 'La persona di cui ti ho parlato' = 'ho parlato di questa persona' → di cui. Funziona sempre." },
            { type: "tip", content: "Quello che è uno degli strumenti più potenti per organizzare l'argomentazione parlata. Inizia ogni opinione con 'Quello che penso è che...' o 'Quello che mi preoccupa è...' — suona subito più sofisticato." },
            { type: "tip", content: "Il quale/la quale: comprendi quando lo leggi, producilo quando vuoi suonare formale. Non ti bloccare cercando di usarlo nel parlato quotidiano." },
        ],
        examples: [
            { native: "È il libro di cui avevo bisogno da settimane.", translation: "It's the book I had needed for weeks." },
            { native: "Ricordi il collega con cui avevo lavorato al progetto europeo?", translation: "Do you remember the colleague I had worked with on the European project?" },
            { native: "È un'azienda i cui prodotti sono esportati in tutto il mondo.", translation: "It's a company whose products are exported worldwide." },
            { native: "Quello che mi rendo conto è che questo tipo di opportunità non si ripresenta spesso.", translation: "What I realise is that this kind of opportunity doesn't come up often." },
            { native: "La ragione per la quale esito è il rischio economico.", translation: "The reason I hesitate is the financial risk." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Cosa ti attira di più di questo progetto?", translation: "What attracts you most about this project?" },
                    { native: "Quello che mi attira è la dimensione internazionale — e il collega con cui lavorerei è qualcuno di cui mi fido.", translation: "What attracts me is the international dimension — and the colleague I'd work with is someone I trust." }
                ]
            },
        ],
        inlineVocab: [
            { word: "il cui / la cui / i cui / le cui", translation: "whose" },
            { word: "quello che / ciò che", translation: "what / which" },
            { word: "di cui", translation: "of / about which" },
            { word: "a cui", translation: "to which" },
            { word: "con cui", translation: "with which" },
            { word: "l'aspettativa", translation: "leave of absence" },
            { word: "fidarsi di", translation: "to trust" },
            { word: "rendersi conto (di)", translation: "to realise" },
            { word: "la dimensione", translation: "dimension / aspect" },
        ],
    },
]
