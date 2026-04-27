import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
    // ── it-g-a2-5 — Comparativi e superlativi ────────────────────────────────
    {
        id: "it-g-a2-5",
        level: "A2",
        title: "Comparativi e Superlativi",
        explanation: `COMPARATIVES: più / meno / tanto...quanto

DI OR CHE? — the critical distinction

Use DI when comparing two different things/people with the same quality:
• Roma è più grande DI Milano. (two nouns)
• Lei è più alta DI me. (pronoun — use tonic: me, te, lui, lei, noi, voi, loro)
• Ho più soldi DI te.

Use CHE when comparing two adjectives, two verbs, or two nouns in the same grammatical role:
• È più intelligente CHE bella. (two adjectives)
• Mangio più pasta CHE riso. (two objects of the same verb)
• Mi piace più camminare CHE correre. (two infinitives)
• È più facile dire CHE fare.

EQUALITY: tanto/così...quanto/come
• Maria è tanto brava quanto sua sorella. (just as good as)

SUPERLATIVE RELATIVE: il/la/i/le + più/meno + adjective
• È il più bel quartiere di Roma. (adjective before noun stays before)
• È la città più animata. (adjective after noun: article repeated)
• È il miglior ristorante della città.
• After a superlative, use DI (not in): il più famoso d'Italia.

SUPERLATIVO ASSOLUTO (-issimo/a/i/e)
Remove final vowel + add -issimo: bello → bellissimo, stanco → stanchissimo (ch!)
No più with -issimo. Never più bellissimo.

IRREGOLARS (essential):
buono → migliore (adj) / meglio (adv) / ottimo (abs. superl.)
cattivo → peggiore (adj) / peggio (adv) / pessimo (abs. superl.)
grande → maggiore / piccolo → minore (for abstract/figurative comparisons)

KEY DISTINCTION — meglio vs migliore:
• meglio = adverb (modifies a verb): Parla meglio di me.
• migliore = adjective (modifies a noun): È un caffè migliore. / Questo è migliore.
Never say più bene — always meglio.`,
        rules: [
            {
                condition: "Comparing two different people/things",
                result: "più/meno + adjective + DI + noun/tonic pronoun",
                examples: [
                    { native: "Roma è più antica di Milano.", translation: "Rome is older than Milan." },
                    { native: "Lavora più di me.", translation: "She works more than me." },
                ]
            },
            {
                condition: "Comparing two qualities/verbs/actions of the same thing",
                result: "più/meno + adjective/verb + CHE + adjective/verb",
                examples: [
                    { native: "È più intelligente che simpatico.", translation: "He's more intelligent than likeable." },
                    { native: "È più facile capire che parlare.", translation: "It's easier to understand than to speak." },
                ]
            },
        ],
        notes: [
            { type: "warning", content: "migliore vs meglio: 'migliore' is an adjective (this coffee is better), 'meglio' is an adverb (she speaks better). Never 'più buono' for quality evaluations — use 'migliore'." },
            { type: "tip", content: "-issimo is quintessentially Italian — use it freely: bellissimo, bravissimo, stanchissimo. It adds expressive force without any comparison." },
        ],
        examples: [
            { native: "Roma è più grande di Napoli, ma Napoli è più animata.", translation: "Rome is bigger than Naples, but Naples is livelier." },
            { native: "Questo vino è migliore di quello di ieri.", translation: "This wine is better than yesterday's." },
            { native: "Parla meglio di lui.", translation: "She speaks better than him." },
            { native: "È la migliore pizzeria della città.", translation: "It's the best pizzeria in the city." },
            { native: "Ero stanchissimo/a dopo la camminata.", translation: "I was extremely tired after the walk." },
            { native: "Milano è meno cara di quanto pensi.", translation: "Milan is less expensive than you think." },
        ],
    },

    // ── it-g-a2-6 — Pronomi relativi ─────────────────────────────────────────
    {
        id: "it-g-a2-6",
        level: "A2",
        title: "Pronomi Relativi — che, cui, dove, quello che",
        explanation: `Relative pronouns connect two sentences. They make your Italian sound natural rather than choppy.

CHE — subject or direct object (never changes, never elides)
As SUBJECT: Ho un amico che parla giapponese. (the friend speaks)
As OBJECT: Il libro che sto leggendo è bellissimo. (I am reading the book)
• che is invariable — it never changes form
• In passato prossimo: La pizza che ho ordinata era deliziosa. (participle agrees — fem. sg.)

CUI — used ONLY after a preposition
• a cui: La persona a cui ho scritto non ha risposto.
• di cui: Il libro di cui ti ho parlato è esaurito.
• con cui: L'amico con cui viaggio si chiama Marco.
• per cui: Il motivo per cui sono partito era semplice.
• in cui: Il periodo in cui vivevo a Roma era bellissimo.

TEST: If you would say "to whom / for which / with whom" → use CUI.
NEVER use che after a preposition: ~~a che~~ → a cui ✓

DOVE — relative of place
• È il caffè dove lavoro ogni mattina.
• È l'albergo dove abbiamo soggiornato.
• dove = in cui (both correct — dove more common in speech)

QUELLO CHE / CIÒ CHE — "what / the thing that"
Used when there is no specific noun antecedent:
• Quello che mi piace di Roma è l'atmosfera.
• Non capisco quello che dici.
• Dimmi quello che vuoi.
• Ciò che mi sorprende è la sua pazienza. (more formal)

HIGH-FREQUENCY PATTERNS to automate:
• È quello/quella che... — È lei che ha pagato.
• Il motivo per cui... — Il motivo per cui sono qui è semplice.
• È per questo che... — È per questo che non mi fido.
• L'unico/a che... — Sei l'unica persona che capisce.`,
        rules: [
            {
                condition: "No preposition before the relative",
                result: "Use CHE (subject or direct object)",
                examples: [
                    { native: "È una città che adoro.", translation: "It's a city I love." },
                    { native: "Le persone che arrivano sono i miei genitori.", translation: "The people who are arriving are my parents." },
                ]
            },
            {
                condition: "Preposition before the relative",
                result: "Use CUI (a cui / di cui / con cui / per cui...)",
                examples: [
                    { native: "L'amico con cui viaggio si chiama Luca.", translation: "The friend I travel with is called Luca." },
                    { native: "Il motivo per cui sono partito è semplice.", translation: "The reason I left is simple." },
                ]
            },
        ],
        notes: [
            { type: "warning", content: "Never use 'che' after a preposition: 'la persona a che ho scritto' is wrong. Always: 'la persona a cui ho scritto'." },
            { type: "tip", content: "'quello che' is enormously frequent in spoken Italian. Learn these chunks: quello che mi piace è... / quello che non capisco è... / è per questo che..." },
        ],
        examples: [
            { native: "Ho visto un film che era noioso, ma ho aspettato fino alla fine.", translation: "I saw a film that was boring, but I waited until the end." },
            { native: "La canzone di cui ti parlo la conoscono tutti.", translation: "The song I'm telling you about everyone knows." },
            { native: "C'è un bar dove fanno il miglior cornetto della città.", translation: "There's a bar where they make the best croissant in the city." },
            { native: "Quello che mi piace di questa città è l'atmosfera.", translation: "What I like about this city is the atmosphere." },
            { native: "È la ragazza con cui ho studiato al liceo.", translation: "She's the girl I studied with at secondary school." },
            { native: "Non è esattamente quello che mi aspettavo.", translation: "It's not exactly what I was expecting." },
        ],
    },

    // ── it-g-a2-7 — Negazione espansa ────────────────────────────────────────
    {
        id: "it-g-a2-7",
        level: "A2",
        title: "Negazione Espansa — non...più, niente, nessuno e altro",
        explanation: `A1 covered non...mai, non...niente, non...nessuno. Now use them in compound tenses and add advanced negative structures.

POSITION IN COMPOUND TENSES — critical rule:
• non...più and non...mai → BETWEEN auxiliary and participle:
  Non ho più mangiato lì. / Non sono mai stato/a a Venezia.
• non...niente/nulla → AFTER the participle:
  Non ho capito niente. / Non ho detto nulla.
• non...nessuno → AFTER the participle:
  Non ho visto nessuno. / Non ha incontrato nessuno.

NON...PIÙ — "no longer / not anymore" (marks a change of state)
• Non abita più a Roma. (she used to — now she doesn't)
• Non abbiamo più connessione.

NON...NIENTE / NULLA — "nothing / not anything"
niente = more frequent in speech; nulla = slightly more formal/emphatic
• Non ho mangiato niente. / Non ho detto nulla.
As SUBJECT (omit non): Niente funziona. / Nulla è cambiato.

NON...NESSUNO — "nobody / not anyone"
As subject (omit non): Nessuno è venuto. / Nessuno sa la risposta.
As adjective: nessun problema / nessuno studente / nessuna ragione

NON...AFFATTO / PER NIENTE — "not at all"
• affatto = more formal: Non sono affatto d'accordo.
• per niente = spoken, protest: Non è vero per niente!

NON...NEANCHE / NEMMENO — "not even"
• Non ha detto nemmeno una parola.
• Non ho dormito neanche un'ora.
As standalone reply: — Sei andato? — Nemmeno. (Me neither.)
As subject: Neanche lui lo sa. (Not even he knows.)

SOLO / SOLTANTO + NON...CHE — restriction (NOT a negative!)
• Lavoro solo tre giorni a settimana.
• Non mangio che insalata. (= I eat only salad — the verb is POSITIVE)
non...che is NOT a full negation — it restricts, not denies.`,
        rules: [
            {
                condition: "non...più / non...mai in compound tense",
                result: "Go BETWEEN auxiliary and participle",
                examples: [
                    { native: "Non ho più mangiato lì.", translation: "I no longer eat there." },
                    { native: "Non sono mai stato/a in Giappone.", translation: "I have never been to Japan." },
                ]
            },
            {
                condition: "non...niente / non...nessuno in compound tense",
                result: "Go AFTER the participle",
                examples: [
                    { native: "Non ho capito niente.", translation: "I understood nothing." },
                    { native: "Non ho visto nessuno.", translation: "I didn't see anyone." },
                ]
            },
        ],
        notes: [
            { type: "warning", content: "'non...che' is NOT a complete negation — 'Non mangio che insalata' means 'I eat only salad', not 'I don't eat salad'. The verb action still happens — it is simply restricted." },
            { type: "tip", content: "'Neanche / nemmeno' as a standalone reply is very natural in conversation: 'Hai capito?' — 'Neanche!' means 'Not at all / Me neither.'" },
            { type: "culture", content: "'Neanche per sogno' (not even in your dreams) is a vivid Italian refusal. 'Non dire niente a nessuno' is the classic gossip opener." },
        ],
        examples: [
            { native: "Non ci vediamo più spesso da quando si è trasferito.", translation: "We don't see each other as often since he moved." },
            { native: "Nessuno è venuto alla festa.", translation: "Nobody came to the party." },
            { native: "Non mi è piaciuto per niente quel film.", translation: "I didn't like that film at all." },
            { native: "Faceva solo lavoro — non aveva più tempo per niente.", translation: "He only worked — he no longer had time for anything." },
            { native: "Neanche io lo sapevo.", translation: "I didn't know either." },
            { native: "Non ho che qualche minuto — dobbiamo fare in fretta.", translation: "I only have a few minutes — we need to be quick." },
        ],
    },
]
