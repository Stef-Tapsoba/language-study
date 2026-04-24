import { GrammarLesson } from "../../../../types"

export const block4Lessons: GrammarLesson[] = [
    // ── it-g-a2-11 — Futuro semplice ─────────────────────────────────────────
    {
        id: "it-g-a2-11",
        level: "A2",
        title: "Futuro Semplice — Formation and Uses",
        explanation: `FORMATION — the same endings for all verb groups

KEY RULE FOR -ARE VERBS: the -a- changes to -e-!
parlARE → parlerò (NOT parlarò)
lavorARE → lavorerò
comprARE → comprerò

-ERE verbs: drop the final -e → vender-
-IRE verbs: drop the final -e → partir-

ENDINGS (same for all groups):
io → -ò | tu → -ai | lui/lei → -à | noi → -emo | voi → -ete | loro → -anno

Regular examples:
parlare → parlerò, parlerai, parlerà, parleremo, parlerete, parleranno
vendere → venderò, venderai, venderà...
partire → partirò, partirai, partirà...

IRREGULAR STEMS (same endings always):
essere → sar-    avere → avr-    andare → andr-    fare → far-
potere → potr-   volere → vorr-  dovere → dovr-    sapere → sapr-
vedere → vedr-   venire → verr-  rimanere → rimarr- tenere → terr-
bere → berr-     vivere → vivr-

Compounds follow the base: mantenere → manterrò, ottenere → otterrò

USES
1. Plans and future events (formal/distant): Un giorno vivrò in Italia.
2. Formal announcements: Il presidente parlerà alle 20:00.
3. EPISTEMIC use (probability in present): Saranno le tre. / Avrà quarant'anni.
   → This means "it must be about 3 o'clock" — very common in spoken Italian.
4. QUANDO + futuro rule: Unlike English, Italian requires future after quando for future events.
   Quando avrò tempo, lo leggerò. (NOT: quando ho tempo...)
   Quando arriverà, glielo dirò.
5. SE rule: NEVER use futuro after se → always present indicative.
   Se ho tempo, lo faccio. (NOT: se avrò tempo)

Contrast with other future expressions:
• sto per partire = about to leave (imminent, now)
• domani parto = leaving tomorrow (decided plan, near future → present)
• un giorno partirò = one day I'll leave (distant, projected → futuro semplice)`,
        rules: [
            {
                condition: "-ARE verbs in the futuro semplice",
                result: "The -a- changes to -e-: parlARE → parlerò (NOT parlarò)",
                examples: [
                    { native: "Domani parlerò con il direttore.", translation: "Tomorrow I'll speak with the director." },
                    { native: "Mangeremo insieme venerdì.", translation: "We'll eat together on Friday." },
                ]
            },
            {
                condition: "Epistemic future (probability/supposition about the present)",
                result: "Future tense expresses 'must be / probably is'",
                examples: [
                    { native: "Saranno le tre — è tardi.", translation: "It must be about three — it's late." },
                    { native: "Dov'è Marco? Sarà in ufficio.", translation: "Where's Marco? He's probably in the office." },
                ]
            },
        ],
        notes: [
            { type: "warning", content: "NEVER use the future after 'se': 'Se avrò tempo' is wrong → 'Se ho tempo' is correct. This is different from 'quando', which does take the future." },
            { type: "warning", content: "-ARE verbs change -a- to -e-: parlare → parlerò, not parlarò. This is one of the most common errors." },
            { type: "tip", content: "The epistemic future (saranno le tre, avrà quarant'anni) is genuinely common in spoken Italian — don't skip it as an advanced curiosity." },
        ],
        conjugationTable: {
            pronouns: ["io", "tu", "lui/lei", "noi", "voi", "loro"],
            verbs: [
                { label: "parlare", forms: ["parlerò", "parlerai", "parlerà", "parleremo", "parlerete", "parleranno"] },
                { label: "essere", forms: ["sarò", "sarai", "sarà", "saremo", "sarete", "saranno"] },
                { label: "avere", forms: ["avrò", "avrai", "avrà", "avremo", "avrete", "avranno"] },
                { label: "andare", forms: ["andrò", "andrai", "andrà", "andremo", "andrete", "andranno"] },
                { label: "volere", forms: ["vorrò", "vorrai", "vorrà", "vorremo", "vorrete", "vorranno"] },
            ]
        },
        examples: [
            { native: "Finirò il report la settimana prossima.", translation: "I'll finish the report next week." },
            { native: "Quando avrò i soldi, comprerò una macchina nuova.", translation: "When I have the money, I'll buy a new car." },
            { native: "Un giorno aprirò un piccolo studio tutto mio.", translation: "One day I'll open a small studio of my own." },
            { native: "Andrà bene — ne sono sicuro/a.", translation: "It'll go well — I'm sure of it." },
            { native: "Sarà stanco/a — ha lavorato tutto il giorno.", translation: "He/she must be tired — he/she worked all day." },
            { native: "Se piove, restiamo a casa.", translation: "If it rains, we'll stay home." },
        ],
    },

    // ── it-g-a2-12 — Condizionale presente ───────────────────────────────────
    {
        id: "it-g-a2-12",
        level: "A2",
        title: "Condizionale Presente — Polite Requests, Wishes, Advice",
        explanation: `The condizionale has the SAME STEMS as the futuro semplice. Only the endings change.

ENDINGS:
io → -ei | tu → -esti | lui/lei → -ebbe | noi → -emmo | voi → -este | loro → -ebbero

Examples:
parlare → parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero
essere → sarei, saresti, sarebbe, saremmo, sareste, sarebbero
volere → vorrei, vorresti, vorrebbe, vorremmo, vorreste, vorrebbero

FOUR KEY USES

1. POLITE REQUESTS (most important — use this every day in Italy)
Vorrei un caffè, per favore. (NOT: voglio — sounds blunt)
Potrei avere il conto? / Potrebbe dirmi dov'è la stazione?
Le dispiacerebbe aprire la finestra? / Le andrebbe bene domani?
→ 'Vorrei' replaces 'voglio' in all public/service contexts.

2. WISHES AND PREFERENCES
Mi piacerebbe vivere in Italia. / Vorrei una casa con il giardino.
Sarebbe bello andare in vacanza insieme. / Preferirei un posto più tranquillo.

3. ADVICE (dovresti / potresti / bisognerebbe)
Dovresti riposare di più. (You should rest more — NOT: devi → sounds like an order)
Potresti chiamarlo tu — è meglio. / Bisognerebbe studiare ogni giorno.
Non dovresti bere caffè con questo farmaco.

4. HYPOTHETICAL ("in an ideal world")
Con più soldi, comprerei quella casa.
Al posto tuo, non lo farei. / Sarebbe un sogno abitare lì.

KEY POLITE FORMULAS (learn as fixed chunks):
• Vorrei... (ordering, requesting)
• Potrei avere...? (asking for something)
• Potrebbe...? (asking someone to do something)
• Le dispiacerebbe...? (asking a favour — very polite)
• Sarebbe possibile...? (asking if possible)
• Le andrebbe bene...? (proposing time/option)`,
        rules: [
            {
                condition: "Making a request in a service context (restaurant, hotel, office)",
                result: "Use condizionale — VORREI (not voglio), POTREI (not posso)",
                examples: [
                    { native: "Vorrei prenotare una camera per due notti.", translation: "I would like to book a room for two nights." },
                    { native: "Potrei avere il menu, per favore?", translation: "Could I have the menu, please?" },
                ]
            },
            {
                condition: "Giving advice gently",
                result: "dovresti / potresti / bisognerebbe (not devi — too direct)",
                examples: [
                    { native: "Dovresti stare a casa domani.", translation: "You should stay home tomorrow." },
                    { native: "Bisognerebbe prenotare in anticipo.", translation: "One should book in advance." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Vorrei is the single most important word in this unit. It is the culturally expected form when ordering or requesting anything in public. 'Voglio' is not wrong but sounds blunt." },
            { type: "tip", content: "The stems are identical to the futuro semplice — if you know andrò/farei, you know andrei/farei. Only the endings differ." },
            { type: "culture", content: "In Italy, using 'tu' + present when addressing a stranger in a shop or restaurant signals you don't know the registers. Learning condizionale IS learning Italian manners." },
        ],
        examples: [
            { native: "Vorrei prenotare un tavolo per due persone.", translation: "I would like to reserve a table for two." },
            { native: "Avrebbe una camera con vista sul mare?", translation: "Would you have a room with a sea view?" },
            { native: "Mi piacerebbe molto imparare il pianoforte.", translation: "I would really like to learn the piano." },
            { native: "Al posto tuo, parlerei con il capo subito.", translation: "In your place, I would speak to the boss right away." },
            { native: "Sarebbe bellissimo vivere vicino al mare.", translation: "It would be wonderful to live near the sea." },
            { native: "Bisognerebbe avere più coraggio.", translation: "One should have more courage." },
        ],
    },

    // ── it-g-a2-13 — Se clauses type 1 + stare per + da + duration ─────────
    {
        id: "it-g-a2-13",
        level: "A2",
        title: "Se Clauses Type 1, Stare Per, and Da + Duration",
        explanation: `SE CLAUSES — TYPE 1 (real/possible conditions)
Structure: SE + present indicative → present or future simple
• Se piove, restiamo a casa. / Se piove, resteremo a casa.
• Se hai fame, c'è del pane in cucina.
• Se prendi il treno delle 8, arriverai in orario.
• Se vuoi, posso aiutarti.

ABSOLUTE RULE: NEVER use futuro in the se-clause.
✗ Se avrò tempo → ✓ Se ho tempo
✗ Se pioverà → ✓ Se piove
✗ Se verrò → ✓ Se vengo

Note: Type 2 (se + congiuntivo imperfetto → condizionale) = B1 content.

STARE PER + INFINITIVE — imminent future
Present: sto per / stai per / sta per / stiamo per / state per / stanno per + infinitive
• Sta per piovere — prendi l'ombrello.
• Stiamo per partire — sei pronto/a?
• Stai per perdere il treno — corri!

STAVA PER + INFINITIVE (imperfetto — was about to)
• Stavo per chiamarti! (I was just about to call you!)
• Stavamo per andare quando ha squillato il telefono.
• Stava per perdere il treno — per fortuna è arrivato in tempo.

DA + DURATION + PRESENT INDICATIVE
Italian uses the PRESENT tense (not passato prossimo) for actions that started in the past and CONTINUE now:
Studio italiano da due anni. (I have been studying Italian for two years — and still am)
Abito a Roma da sei mesi. / Aspetto da venti minuti!

✗ Ho studiato italiano da due anni. (WRONG for ongoing action)
✓ Studio italiano da due anni. (CORRECT)

CONTRAST: da vs fa
• presente + DA: Studio italiano da due anni. (still going on)
• passato prossimo + FA: Ho iniziato a studiare due anni fa. (completed moment in past)

Vivo a Milano da cinque anni. (still living there — present + da)
Mi sono trasferito/a a Milano cinque anni fa. (the move itself — completed)

EMPHATIC FORM: È da [duration] che + present
• È da due anni che studio italiano. (same meaning, more emphatic)
• È da stamattina che ti aspetto!

WITH NEGATION:
• Non vado in palestra da tre settimane. (I haven't been for 3 weeks)
• Non lo vedo da Natale. (I haven't seen him since Christmas)`,
        rules: [
            {
                condition: "Se + condition (real/possible)",
                result: "NEVER future in the se-clause: use present indicative",
                examples: [
                    { native: "Se fa bello domenica, andiamo al lago.", translation: "If the weather's nice on Sunday, we'll go to the lake." },
                    { native: "Se continua così, finirà tardi.", translation: "If it continues like this, it'll end late." },
                ]
            },
            {
                condition: "Action that started in the past and continues NOW",
                result: "Present indicative + DA + duration (NOT passato prossimo)",
                examples: [
                    { native: "Studio italiano da due anni.", translation: "I have been studying Italian for two years." },
                    { native: "Conosco Marco da dieci anni.", translation: "I have known Marco for ten years." },
                ]
            },
        ],
        notes: [
            { type: "warning", content: "'Ho studiato italiano da due anni' is wrong for an ongoing action. The present + da is one of the most common English→Italian errors." },
            { type: "tip", content: "'Stava per' in storytelling is very natural: 'Stavo per uscire quando ha suonato il campanello.' It adds drama to any anecdote." },
        ],
        examples: [
            { native: "Se non lo chiami tu, lo chiamo io.", translation: "If you don't call him, I will." },
            { native: "Sto per uscire — puoi richiamarmi tra dieci minuti?", translation: "I'm about to go out — can you call me back in ten minutes?" },
            { native: "Stavo per dimenticare il portafoglio!", translation: "I was just about to forget my wallet!" },
            { native: "Lavoro in questa azienda da tre anni.", translation: "I have been working at this company for three years." },
            { native: "È da stamattina che ti aspetto!", translation: "I've been waiting for you since this morning!" },
            { native: "Non la sento da Natale — devo chiamarla.", translation: "I haven't heard from her since Christmas — I should call her." },
        ],
    },
]
