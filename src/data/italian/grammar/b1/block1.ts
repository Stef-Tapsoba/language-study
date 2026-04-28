import { GrammarLesson } from "../../../../types"

export const block1Lessons: GrammarLesson[] = [
    // ── it-g-b1-1 — Trapassato prossimo: formazione e uso narrativo ───────────
    {
        id: "it-g-b1-1",
        level: "B1",
        title: "Trapassato Prossimo — Formazione e Narrazione",
        explanation: {
            target: `Il trapassato prossimo descrive qualcosa che era già successo PRIMA di un altro evento passato. È il «flashback» della narrazione italiana.

FORMAZIONE
avere/essere all'IMPERFETTO + participio passato

La regola dell'ausiliare è identica al passato prossimo:
• verbi transitivi → avere imperfetto
• verbi di moto/stato/riflessivi → essere imperfetto (participio concorda col soggetto)

CONIUGAZIONE — avere (mangiare)
avevo mangiato / avevi mangiato / aveva mangiato
avevamo mangiato / avevate mangiato / avevano mangiato

CONIUGAZIONE — essere (partire)
ero partito/a / eri partito/a / era partito/a
eravamo partiti/e / eravate partiti/e / erano partiti/e

PARTICIPI IRREGOLARI AD ALTA FREQUENZA
fare → avevo fatto / vedere → avevo visto / dire → avevo detto
mettere → avevo messo / aprire → avevo aperto / scrivere → avevo scritto
venire → ero venuto/a / nascere → ero nato/a

POSIZIONE DEGLI AVVERBI (già/ancora/mai)
vanno SEMPRE tra l'ausiliare e il participio:
avevo già mangiato / non era ancora arrivata / non avevo mai visto

TRE USI PRINCIPALI
1. Azione completata prima di un'altra azione passata
   Quando sono arrivato, lei era già partita.
2. Contesto precedente / ragione di fondo
   Era stanco perché non aveva dormito bene.
3. Retroscena nel discorso indiretto
   Mi ha detto che aveva perso il lavoro il mese prima.`,
            native: `The trapassato prossimo (pluperfect) describes something that had already happened BEFORE another past event — it is the "backstory" tense in Italian.

Formation: imperfetto of avere/essere + past participle. Same auxiliary rule as passato prossimo.

Key uses: completed action before another past event, prior background reason, backstory in reported speech.`
        },
        rules: [
            {
                condition: "Action already completed before another past event",
                result: "Trapassato prossimo — avevo/ero + participio passato",
                examples: [
                    { native: "Quando sono arrivato, lei era già partita.", translation: "When I arrived, she had already left." },
                    { native: "Avevo già mangiato quando mi hai chiamato.", translation: "I had already eaten when you called me." },
                ]
            },
            {
                condition: "Background reason explaining a past situation",
                result: "Trapassato prossimo in the causal/background clause",
                examples: [
                    { native: "Era stanco perché non aveva dormito bene.", translation: "He was tired because he hadn't slept well." },
                    { native: "Conoscevo la città — ci ero andato tante volte.", translation: "I knew the city — I had been there many times." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Scorciatoia: il trapassato è uguale al passato prossimo — ma l'ausiliare è all'imperfetto. Se conosci l'imperfetto di avere/essere (avevo, ero) e il participio passato, conosci già il trapassato." },
            { type: "tip", content: "Già, ancora e mai si inseriscono SEMPRE tra ausiliare e participio: avevo già visto / non era ancora arrivata / non avevo mai capito." },
            { type: "warning", content: "Il trapassato si usa SOLO quando c'è un punto di riferimento passato. Non si usa mai in isolamento per eventi recenti — in quel caso si usa il passato prossimo." },
            { type: "forward-ref", content: "Il trapassato torna nel discorso indiretto (Unità 11): 'Ha detto che aveva già finito.'", refId: "it-g-b1-11" },
        ],
        conjugationTable: {
            pronouns: ["io", "tu", "lui/lei", "noi", "voi", "loro"],
            verbs: [
                { label: "mangiare (avere)", forms: ["avevo mangiato", "avevi mangiato", "aveva mangiato", "avevamo mangiato", "avevate mangiato", "avevano mangiato"] },
                { label: "partire (essere)", forms: ["ero partito/a", "eri partito/a", "era partito/a", "eravamo partiti/e", "eravate partiti/e", "erano partiti/e"] },
                { label: "alzarsi (essere)", forms: ["mi ero alzato/a", "ti eri alzato/a", "si era alzato/a", "ci eravamo alzati/e", "vi eravate alzati/e", "si erano alzati/e"] },
            ]
        },
        examples: [
            { native: "Non avevo mai visto questo posto prima.", translation: "I had never seen this place before." },
            { native: "Quando siamo arrivati, il concerto era già cominciato.", translation: "When we arrived, the concert had already started." },
            { native: "Era esausto perché non aveva dormito per niente in treno.", translation: "He was exhausted because he hadn't slept at all on the train." },
            { native: "La proprietaria era già andata via quando ho bussato.", translation: "The landlady had already left when I knocked." },
            { native: "Non avevo ancora risposto quando mi ha richiamato.", translation: "I hadn't replied yet when he called back." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Com'è andata il primo giorno nella nuova città?", translation: "How did the first day in the new city go?" },
                    { native: "Un disastro — non avevo dormito per niente e quando sono arrivato, la proprietaria era già andata via.", translation: "A disaster — I hadn't slept at all and when I arrived, the landlady had already left." }
                ]
            },
        ],
        inlineVocab: [
            { word: "già", translation: "already" },
            { word: "non ancora", translation: "not yet" },
            { word: "mai", translation: "never" },
            { word: "nel frattempo", translation: "in the meantime" },
            { word: "in quel momento", translation: "at that moment" },
            { word: "esausto/a", translation: "exhausted" },
            { word: "la proprietaria", translation: "the landlady/owner" },
            { word: "a quanto pare", translation: "apparently" },
            { word: "per sbaglio", translation: "by mistake" },
        ],
    },

    // ── it-g-b1-2 — Tre tempi al passato: narrazione estesa ──────────────────
    {
        id: "it-g-b1-2",
        level: "B1",
        title: "Narrazione in Tre Tempi — Passato Prossimo + Imperfetto + Trapassato",
        explanation: {
            target: `Al B1 il parlante sa usare i tre tempi del passato insieme per raccontare storie ricche e stratificate.

I TRE STRATI NARRATIVI
• Imperfetto = il palcoscenico: fondo, atmosfera, stati, abitudini
• Passato prossimo = l'azione: eventi che fanno avanzare la storia
• Trapassato prossimo = il flashback: cosa era già successo prima

DOMANDE GUIDA
"È fondo, atmosfera o stato abituale?" → Imperfetto
"Questo evento è successo e ha fatto avanzare la storia?" → Passato prossimo
"È successo PRIMA degli eventi principali?" → Trapassato prossimo

CONNETTORI NARRATIVI
Per il trapassato: la sera prima, in precedenza, fino ad allora, aveva già...
Per l'imperfetto: all'epoca, in quel periodo, mentre, di solito
Per il passato prossimo: all'improvviso, di colpo, alla fine, così, è stato allora che

ERRORI FREQUENTI AL B1
• Usare solo il passato prossimo (perdendo l'imperfetto) — la storia suona piatta
• Abusare dell'imperfetto per stare «al sicuro» — gli eventi non avanzano
• Dimenticare il trapassato — la backstory scompare`,
            native: `B1 narration integrates all three past tenses: imperfetto (background/states), passato prossimo (plot events), trapassato (backstory that preceded everything). The challenge is choosing the right tense under speaking pressure.`
        },
        rules: [
            {
                condition: "Background, ongoing state, or habitual past action",
                result: "Imperfetto — the scene is running, no start or endpoint",
                examples: [
                    { native: "Era tardi e pioveva leggermente.", translation: "It was late and it was raining slightly." },
                    { native: "Di solito andava al bar alle otto.", translation: "She usually went to the café at eight." },
                ]
            },
            {
                condition: "Sudden or completed plot event",
                result: "Passato prossimo — something happened and changed the story",
                examples: [
                    { native: "All'improvviso ha sentito dei passi.", translation: "Suddenly she heard footsteps." },
                    { native: "Ha accelerato il passo.", translation: "She quickened her pace." },
                ]
            },
            {
                condition: "Prior backstory — what had happened BEFORE the main events",
                result: "Trapassato prossimo — the flashback layer",
                examples: [
                    { native: "Aveva perso l'ultimo autobus.", translation: "She had missed the last bus." },
                    { native: "Non aveva programmato di essere fuori così tardi.", translation: "She hadn't planned to be out so late." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "La metafora del cinema: l'imperfetto è la camera in movimento (scena continua); il passato prossimo è uno scatto fotografico (click — un evento); il trapassato è un flashback a qualcosa di precedente." },
            { type: "tip", content: "Connettori chiave: all'improvviso, di colpo, a quel punto → passato prossimo. Sempre, di solito, ogni giorno, mentre → imperfetto. La sera prima, in precedenza, già → trapassato." },
        ],
        examples: [
            { native: "Era una sera di ottobre. Faceva freddo e la città dormiva.", translation: "It was an October evening. It was cold and the city was asleep." },
            { native: "Sofia camminava veloce perché aveva perso l'ultimo autobus.", translation: "Sofia was walking fast because she had missed the last bus." },
            { native: "All'improvviso ha sentito dei passi dietro di lei. Si è girata. Nessuno.", translation: "Suddenly she heard footsteps behind her. She turned around. No one." },
            { native: "Non aveva programmato di tornare così tardi — la cena si era protratta.", translation: "She hadn't planned to come back so late — the dinner had dragged on." },
            { native: "Alla fine è arrivata a casa — esausta, ma illesa.", translation: "In the end she got home — exhausted but unharmed." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Perché eri così in ritardo ieri sera?", translation: "Why were you so late last night?" },
                    { native: "Avevo perso il treno — non me n'ero accorto che era già passato l'orario.", translation: "I had missed the train — I hadn't noticed the time had already passed." }
                ]
            },
        ],
        inlineVocab: [
            { word: "all'epoca", translation: "at the time / back then" },
            { word: "in precedenza", translation: "previously / before that" },
            { word: "fino ad allora", translation: "until then" },
            { word: "è stato allora che", translation: "that's when" },
            { word: "alla fine", translation: "in the end" },
            { word: "nonostante tutto", translation: "despite everything" },
            { word: "il guasto", translation: "breakdown / fault" },
            { word: "assumere", translation: "to hire" },
            { word: "illeso/a", translation: "unharmed" },
        ],
    },

    // ── it-g-b1-3 — La forma passiva ─────────────────────────────────────────
    {
        id: "it-g-b1-3",
        level: "B1",
        title: "La Forma Passiva — Essere/Venire + Participio e Si Passivante",
        explanation: {
            target: `La forma passiva è molto comune nell'italiano formale — notizie, storia, comunicazioni ufficiali. Ha due strutture principali.

PASSIVO CON ESSERE (tutti i tempi)
essere (qualsiasi tempo) + participio passato
Il participio concorda con il soggetto grammaticale.

La decisione È PRESA dal comitato. (presente)
La legge È STATA APPROVATA ieri. (passato prossimo)
Il castello ERA VISITATO da turisti. (imperfetto)
Il rapporto ERA STATO INVIATO prima. (trapassato)
I risultati SARANNO PUBBLICATI domani. (futuro)

L'agente (chi compie l'azione) si introduce con DA:
La lettera è stata scritta DA Calvino.
I sospettati sono stati arrestati DALLA polizia.

PASSIVO CON VENIRE — solo tempi semplici
Venire enfatizza l'azione mentre accade (non il risultato).
La porta VIENE CHIUSA ogni sera. (azione — presente)
La porta VENIVA CHIUSA alle dieci. (azione abituale — imperfetto)
Il documento VERRÀ PUBBLICATO domani. (futuro)

⚠️ REGOLA CRITICA: venire NON si usa nei tempi composti.
✅ La porta è stata chiusa ieri. (passato prossimo — essere)
❌ La porta è venuta chiusa ieri. (errato)

SI PASSIVANTE — la forma più naturale nel parlato
Si usa quando NON si menziona l'agente.
Si + verbo 3a persona (sing. o pl.) + soggetto grammaticale
Il verbo concorda con il soggetto che segue:

Si vende UNA CASA. (sing.)
Si vendono CASE. (pl.)
Si parla italiano qui.
Si cercano camerieri.
Si è redatto il rapporto. (passato — participio varia col soggetto)
Si sono venduti i biglietti.`,
            native: `The passive voice in Italian uses essere/venire + past participle (agreeing with the grammatical subject) for formal/written contexts. The si passivante (si + 3rd person verb) is more natural in speech and writing when no agent is mentioned.`
        },
        rules: [
            {
                condition: "Passive — emphasising state or result (all tenses)",
                result: "essere + participio passato (agrees with subject) — optionally + da + agent",
                examples: [
                    { native: "La legge è stata approvata dal parlamento.", translation: "The law was approved by parliament." },
                    { native: "I dati erano stati pubblicati prima della riunione.", translation: "The data had been published before the meeting." },
                ]
            },
            {
                condition: "Passive — emphasising the action as it happens (simple tenses only)",
                result: "venire + participio passato — NEVER with compound tenses",
                examples: [
                    { native: "La porta viene chiusa ogni sera alle dieci.", translation: "The door is closed every evening at ten." },
                    { native: "Il rapporto veniva redatto ogni mese.", translation: "The report used to be drafted every month." },
                ]
            },
            {
                condition: "Passive meaning without mentioning the agent (natural register)",
                result: "si + 3rd person singular/plural verb (agrees with following noun)",
                examples: [
                    { native: "Si parla italiano in questa classe.", translation: "Italian is spoken in this class." },
                    { native: "Si cercano due camerieri esperti.", translation: "Two experienced waiters are being sought." },
                ]
            },
        ],
        notes: [
            { type: "warning", content: "Venire come ausiliare passivo funziona SOLO nei tempi semplici (presente, imperfetto, futuro, condizionale). Nei tempi composti si usa SEMPRE essere: è stata chiusa (mai: è venuta chiusa)." },
            { type: "tip", content: "Il si passivante è la scelta predefinita nell'italiano parlato e scritto quando l'agente è assente o non importa. La passiva con essere è più formale e letteraria." },
            { type: "culture", content: "L'italiano dei giornali, delle leggi e dei comunicati ufficiali usa la passiva con essere intensamente. Capire questo registro apre la lettura autentica di testi formali." },
        ],
        paradigmTable: {
            pronouns: ["Ausiliare", "Tense constraint", "Emphasis"],
            verbs: [
                { label: "essere", forms: ["tutti i tempi", "stato/risultato"] },
                { label: "venire", forms: ["solo tempi semplici", "azione in corso"] },
                { label: "si passivante", forms: ["tutti i tempi", "agente assente — registro neutro"] },
            ]
        },
        examples: [
            { native: "Il piano è stato annunciato dal governo questa mattina.", translation: "The plan was announced by the government this morning." },
            { native: "Verranno costruiti 50.000 appartamenti nei prossimi tre anni.", translation: "50,000 flats will be built in the next three years." },
            { native: "La riunione è stata cancellata senza preavviso.", translation: "The meeting was cancelled without notice." },
            { native: "Si vendono appartamenti in zona centrale.", translation: "Flats are for sale in the central area." },
            { native: "Si è redatta una nuova policy in meno di una settimana.", translation: "A new policy was drawn up in less than a week." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Hai sentito? Verranno costruiti nuovi appartamenti a prezzi accessibili.", translation: "Did you hear? New affordable flats will be built." },
                    { native: "Sì, era ora. Se ne parla da anni.", translation: "Yes, it was about time. People have been talking about it for years." }
                ]
            },
        ],
        inlineVocab: [
            { word: "annunciare", translation: "to announce" },
            { word: "approvare", translation: "to approve" },
            { word: "redigere", translation: "to draft / write formally" },
            { word: "pubblicare", translation: "to publish" },
            { word: "arrestare", translation: "to arrest" },
            { word: "accessibile", translation: "affordable / accessible" },
            { word: "avviare", translation: "to launch / start" },
            { word: "il sospettato", translation: "the suspect" },
            { word: "era ora", translation: "it was about time" },
        ],
    },
]
