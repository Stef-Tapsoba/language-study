import { GrammarLesson } from "../../../../types"

export const block4Lessons: GrammarLesson[] = [
    {
        id: "it-g-a1-19",
        level: "A1",
        title: "Modal Verbs: volere & potere",
        explanation: `Volere (to want) and potere (to be able to / can) are modal verbs — followed directly by an infinitive with no preposition in between.

Structure: subject + modal + infinitive
  Voglio mangiare una pizza.   = I want to eat a pizza.
  Puoi parlare italiano?       = Can you speak Italian?
  Non possiamo venire stasera. = We can't come tonight.

Always use the infinitive after these verbs — never a conjugated form:
  ✓ Voglio cucinare.   ✗ Voglio cucino.`,
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [
                { label: "volere (want)", forms: ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"] },
                { label: "potere (can)", forms: ["posso", "puoi", "può", "possiamo", "potete", "possono"] },
            ],
        },
        rules: [
            {
                condition: "Wanting to do something",
                result: "volere + infinitive (no preposition)",
                examples: [
                    { native: "Voglio mangiare.", translation: "I want to eat." },
                    { native: "Vuoi venire?", translation: "Do you want to come?" },
                    { native: "Vogliono partire.", translation: "They want to leave." },
                ],
            },
            {
                condition: "Ability or permission",
                result: "potere + infinitive",
                examples: [
                    { native: "Posso aiutarti?", translation: "Can I help you?" },
                    { native: "Non possiamo venire.", translation: "We can't come." },
                    { native: "Puoi parlare più lentamente?", translation: "Can you speak more slowly?" },
                ],
            },
            {
                condition: "Polite request",
                result: "Puoi / Può + infinitive (potere makes requests sound natural)",
                examples: [
                    { native: "Puoi ripetere?", translation: "Can you repeat?" },
                    { native: "Può portarmi il conto?", translation: "Can you bring me the bill?" },
                ],
            },
            {
                condition: "Negative — non before the modal",
                result: "Non voglio / Non posso",
                examples: [
                    { native: "Non posso venire domani.", translation: "I can't come tomorrow." },
                    { native: "Non voglio uscire stasera.", translation: "I don't want to go out tonight." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Vorrei (I would like — conditional of volere) is even more polite than voglio and widely used for requests: Vorrei un caffè. / Vorrei prenotare un tavolo. Learn it as a fixed form at A1." },
            { type: "forward-ref", content: "Dovere (must/have to) completes the modal trio and is introduced in lesson it-g-a1-33.", refId: "it-g-a1-33" },
        ],
        fixedPhrases: [
            { native: "Voglio imparare l'italiano.", translation: "I want to learn Italian.", note: "volere + infinitive." },
            { native: "Puoi aiutarmi?", translation: "Can you help me?", note: "potere for requests." },
            { native: "Non posso venire.", translation: "I can't come.", note: "Polite refusal." },
            { native: "Vorrei un caffè.", translation: "I'd like a coffee.", note: "vorrei = polite conditional of volere." },
            { native: "Posso?", translation: "May I? / Can I?", note: "One-word permission request." },
        ],
        examples: [
            { native: "Voglio imparare l'italiano.", translation: "I want to learn Italian." },
            { native: "Puoi aiutarmi?", translation: "Can you help me?" },
            { native: "Non posso venire domani.", translation: "I can't come tomorrow." },
            { native: "Vuole cucinare stasera.", translation: "She wants to cook tonight." },
            { native: "Possiamo parlare italiano insieme.", translation: "We can speak Italian together." },
        ],
        inlineVocab: [
            { word: "imparare", translation: "to learn" },
            { word: "aiutare", translation: "to help" },
            { word: "venire", translation: "to come" },
            { word: "cucinare", translation: "to cook" },
            { word: "insieme", translation: "together" },
        ]
    },
    {
        id: "it-g-a1-33",
        level: "A1",
        title: "Dovere — Must / Have To / Should",
        explanation: `**Dovere** expresses obligation, necessity, and probability. Along with volere and potere, it completes the core Italian modal trio. Always followed by an infinitive.

THREE MEANINGS OF DOVERE

1. OBLIGATION — must / have to (external necessity):
   Devo andare dal medico.        I have to go to the doctor.
   Dovete prenotare in anticipo.  You must book in advance.

2. MORAL DUTY — should / ought to:
   Devi chiamare tua madre.       You should call your mother.
   Dobbiamo rispettare gli altri. We should respect others.

3. PROBABILITY — must (logical deduction):
   È mezzogiorno — devi avere fame.  It's noon — you must be hungry.
   Non risponde, deve dormire.        She's not answering, she must be sleeping.

DOVERE vs POTERE vs VOLERE — quick comparison:
  Devo partire.    I must leave.     (obligation — no real choice)
  Posso partire.   I can leave.      (ability/permission — it's possible)
  Voglio partire.  I want to leave.  (desire — personal wish)

See lesson a1-19 for volere and potere.

NEGATIVE — non before dovere:
  Non devo lavorare domani.    I don't have to work tomorrow.
  Non devi fumare qui.         You must not smoke here.

Note the important distinction:
  Non devo    → I don't have to (no obligation)
  Non posso   → I can't (no ability/permission)
  Non devo fumare.   I don't have to smoke. (it's not required)
  Non posso fumare.  I can't smoke. (it's not allowed / I'm unable to)`,
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [{ label: "dovere", forms: ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"] }],
        },
        paradigmTable: {
            pronouns: ["modal", "meaning", "example"],
            verbs: [
                { label: "dovere", forms: ["dovere", "must / have to / should", "Devo partire. (I must leave.)"] },
                { label: "potere", forms: ["potere", "can / be able to / may", "Posso partire. (I can leave.)"] },
                { label: "volere", forms: ["volere", "want to", "Voglio partire. (I want to leave.)"] },
            ],
        },
        rules: [
            {
                condition: "Obligation (must/have to)",
                result: "dovere + infinitive",
                examples: [
                    { native: "Devo andare dal medico.", translation: "I have to go to the doctor." },
                    { native: "Dovete prenotare in anticipo.", translation: "You must book in advance." },
                ],
            },
            {
                condition: "Moral duty (should/ought to)",
                result: "dovere + infinitive",
                examples: [
                    { native: "Devi chiamare tua madre.", translation: "You should call your mother." },
                    { native: "Dobbiamo rispettare gli altri.", translation: "We should respect others." },
                ],
            },
            {
                condition: "Logical deduction (must be)",
                result: "dovere + infinitive or essere",
                examples: [
                    { native: "Deve essere stanca.", translation: "She must be tired." },
                    { native: "Deve dormire — non risponde.", translation: "He must be sleeping — he's not answering." },
                ],
            },
            {
                condition: "Non devo vs non posso",
                result: "non devo = don't have to · non posso = can't",
                examples: [
                    { native: "Non devo lavorare domani.", translation: "I don't have to work tomorrow. (no obligation)" },
                    { native: "Non posso fumare qui.", translation: "I can't smoke here. (not allowed)" },
                ],
            },
        ],
        notes: [
            { type: "warning", content: "Non devo ≠ non posso. Non devo = I don't have to (there is no obligation). Non posso = I can't (it's not possible/allowed). Don't confuse them." },
            { type: "forward-ref", content: "Volere and potere are in lesson it-g-a1-19. Together, dovere/potere/volere form the core Italian modal verb system.", refId: "it-g-a1-19" },
        ],
        fixedPhrases: [
            { native: "Devo studiare stasera.", translation: "I have to study tonight.", note: "dovere + infinitive for obligation." },
            { native: "Non devo lavorare domani.", translation: "I don't have to work tomorrow.", note: "no obligation." },
            { native: "Deve essere tardi.", translation: "It must be late.", note: "dovere for logical deduction." },
            { native: "Dobbiamo andare.", translation: "We have to go.", note: "noi form — very common." },
        ],
        examples: [
            { native: "Devo studiare stasera.", translation: "I have to study tonight." },
            { native: "Devi parlare con il professore.", translation: "You should speak with the teacher." },
            { native: "Deve essere stanca.", translation: "She must be tired. (probability)" },
            { native: "Dobbiamo partire alle otto.", translation: "We have to leave at eight." },
            { native: "Dovete prenotare in anticipo.", translation: "You must book in advance." },
            { native: "Non devo lavorare domani.", translation: "I don't have to work tomorrow." },
        ],
        inlineVocab: [
            { word: "partire", translation: "to leave / depart" },
            { word: "mangiare", translation: "to eat" },
            { word: "lavorare", translation: "to work" },
            { word: "prenotare", translation: "to book / reserve" },
            { word: "rispettare", translation: "to respect" },
            { word: "fumare", translation: "to smoke" },
            { word: "madre", translation: "mother" },
            { word: "stanca", translation: "tired (fem.)" },
            { word: "anticipo", translation: "advance / early" },
        ]
    },
    {
        id: "it-g-a1-30",
        level: "A1",
        title: "Partitive Articles: del, dello, della, dell', dei, degli, delle",
        explanation: `Partitive articles express an unspecified quantity — the English equivalent is 'some', or simply leaving the article out. They are formed by combining the preposition di with the definite article, so they follow exactly the same pattern as the definite articles you already know.

FORMATION — di + definite article:

  di + il   → del     del pane        some bread       (masc. sg., consonant)
  di + lo   → dello   dello zucchero  some sugar       (masc. sg., s+cons, z, gn...)
  di + l'   → dell'   dell'acqua      some water       (masc./fem. sg., vowel)
  di + la   → della   della pasta     some pasta       (fem. sg., consonant)
  di + i    → dei     dei biscotti    some biscuits    (masc. pl.)
  di + gli  → degli   degli amici     some friends     (masc. pl., vowel/s+cons...)
  di + le   → delle   delle mele      some apples      (fem. pl.)

QUICK RULE: choose the partitive the same way you choose the definite article for that noun — just put di in front.
  il pane → del pane    |    lo zucchero → dello zucchero    |    la frutta → della frutta

AFTER NEGATION — all partitives become di (or d' before a vowel):
  Voglio del caffè.        I want some coffee.
  Non voglio caffè.        I don't want (any) coffee.  ← no article at all
  Ho dei problemi.         I have some problems.
  Non ho problemi.         I don't have any problems.

WHEN TO USE
  At the table:      Vuoi del vino?           Do you want some wine?
  Shopping:          Prendo della frutta.      I'll take some fruit.
  Describing:        Ho degli amici a Milano.  I have some friends in Milan.
  Cooking:           Aggiungi dello zucchero.  Add some sugar.`,
        examples: [
            { native: "Vuoi del caffè?", translation: "Do you want some coffee? (del = di + il)" },
            { native: "Prendo della pasta.", translation: "I'll have some pasta. (della = di + la)" },
            { native: "C'è dell'acqua nel frigo.", translation: "There is some water in the fridge. (dell' = di + l')" },
            { native: "Ho dei problemi.", translation: "I have some problems. (dei = di + i)" },
            { native: "Compro delle mele al mercato.", translation: "I'm buying some apples at the market. (delle = di + le)" },
            { native: "Non ho problemi.", translation: "I don't have any problems. (no article after negation)" },
        ],
        inlineVocab: [
            { word: "pane", translation: "bread" },
            { word: "zucchero", translation: "sugar" },
            { word: "acqua", translation: "water" },
            { word: "pasta", translation: "pasta" },
            { word: "biscotti", translation: "biscuits / cookies" },
            { word: "mele", translation: "apples" },
            { word: "frutta", translation: "fruit" },
            { word: "vino", translation: "wine" },
            { word: "caffè", translation: "coffee" },
            { word: "mercato", translation: "market" },
            { word: "frigo", translation: "fridge" },
        ],
        paradigmTable: {
            pronouns: ["definite article", "partitive", "meaning", "example"],
            verbs: [
                { label: "il", forms: ["il", "del", "some (m.sg.)", "del pane"] },
                { label: "lo", forms: ["lo", "dello", "some (m.sg. s+cons/z)", "dello zucchero"] },
                { label: "l'", forms: ["l'", "dell'", "some (vowel)", "dell'acqua"] },
                { label: "la", forms: ["la", "della", "some (f.sg.)", "della pasta"] },
                { label: "i", forms: ["i", "dei", "some (m.pl.)", "dei biscotti"] },
                { label: "gli", forms: ["gli", "degli", "some (m.pl. s+cons/vowel)", "degli amici"] },
                { label: "le", forms: ["le", "delle", "some (f.pl.)", "delle mele"] },
            ],
        },
        rules: [
            {
                condition: "Formation",
                result: "Partitive = di + definite article — same pattern as the article",
                examples: [
                    { native: "del pane", translation: "some bread (di + il)" },
                    { native: "della pasta", translation: "some pasta (di + la)" },
                    { native: "dell'acqua", translation: "some water (di + l')" },
                    { native: "dei biscotti", translation: "some biscuits (di + i)" },
                ],
            },
            {
                condition: "When to use",
                result: "For unspecified quantities — some bread, some water, some friends",
                examples: [
                    { native: "Voglio del caffè.", translation: "I want some coffee." },
                    { native: "Ho degli amici a Milano.", translation: "I have some friends in Milan." },
                    { native: "Prendo della frutta.", translation: "I'll take some fruit." },
                ],
            },
            {
                condition: "After negation",
                result: "Drop the partitive — no article at all after non",
                examples: [
                    { native: "Non voglio caffè.", translation: "I don't want any coffee." },
                    { native: "Non ho problemi.", translation: "I don't have any problems." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The partitive follows the article system perfectly. If the noun takes il → del; if lo → dello; if la → della. Master the articles and the partitives come free.",
            },
            {
                type: "forward-ref",
                content: "Partitives are the plural of the indefinite article. Un libro (a book) → dei libri (some books). Un' amica → delle amiche.",
                refId: "it-g-a1-5",
            },
        ],
        fixedPhrases: [
            { native: "Vuoi del vino?", translation: "Do you want some wine?", note: "del = di + il." },
            { native: "Prendo della pasta.", translation: "I'll have some pasta.", note: "della = di + la." },
            { native: "Ho degli amici lì.", translation: "I have some friends there.", note: "degli before vowel/s+cons plural." },
            { native: "Non ho problemi.", translation: "I don't have any problems.", note: "No partitive after negation." },
        ],
    },
    {
        id: "it-g-a1-20",
        level: "A1",
        title: "Ordering Food & Drinks",
        explanation: `AT THE RESTAURANT — key phrases for ordering

GETTING ATTENTION / ASKING
  Scusi!                   → Excuse me! (to call the waiter)
  Avete un tavolo per due? → Do you have a table for two?
  Posso vedere il menù?    → Can I see the menu?
  Cosa mi consiglia?       → What do you recommend?

ORDERING
  Vorrei...                → I would like... (polite, most common)
  Prendo...                → I'll have... (lit. 'I take')
  Per me...                → For me...
  Da bere, vorrei...       → To drink, I would like...

  Vorrei una pizza margherita.     = I would like a margherita pizza.
  Prendo il risotto, grazie.       = I'll have the risotto, thanks.
  Per me un'acqua minerale.        = A mineral water for me.

ASKING FOR MORE / ENDING
  Altro?                   → Anything else? (waiter asks)
  No, grazie, va bene così. → No thanks, that's fine.
  Il conto, per favore.    → The bill, please.
  È incluso il servizio?   → Is the service included?`,
        examples: [
            { native: "Vorrei una pizza e un'acqua, per favore.", translation: "I would like a pizza and a water, please." },
            { native: "Prendo il risotto.", translation: "I'll have the risotto." },
            { native: "Cosa mi consiglia?", translation: "What do you recommend?" },
            { native: "Il conto, per favore.", translation: "The bill, please." },
            { native: "Avete un tavolo per tre?", translation: "Do you have a table for three?" }
        ],
        inlineVocab: [
            { word: "tavolo", translation: "table" },
            { word: "menù", translation: "menu" },
            { word: "cameriere", translation: "waiter" },
            { word: "risotto", translation: "risotto" },
            { word: "acqua", translation: "water" },
            { word: "servizio", translation: "service" },
            { word: "conto", translation: "bill / check" },
        ],
        rules: [
            {
                condition: "Ordering something",
                result: "Vorrei + noun (most polite). Prendo + noun. Per me + noun.",
                examples: [
                    { native: "Vorrei un caffè.", translation: "I'd like a coffee." },
                    { native: "Prendo la pasta.", translation: "I'll have the pasta." },
                    { native: "Per me l'acqua naturale.", translation: "Still water for me." },
                ],
            },
            {
                condition: "Asking about the menu",
                result: "C'è…? / Avete…? / Cos'è…?",
                examples: [
                    { native: "C'è il risotto oggi?", translation: "Is there risotto today?" },
                    { native: "Avete qualcosa di vegetariano?", translation: "Do you have something vegetarian?" },
                ],
            },
            {
                condition: "Asking for the bill",
                result: "Il conto, per favore.",
                examples: [
                    { native: "Il conto, per favore.", translation: "The bill, please." },
                    { native: "Possiamo avere il conto?", translation: "Can we have the bill?" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Vorrei (I would like — conditional of volere) is the most polite way to order. It's much softer than Voglio (I want) which can sound brusque. Always use Vorrei in restaurants and shops.",
            },
            {
                type: "culture",
                content: "In Italy, coffee culture has very specific rules. Un caffè = an espresso. Cappuccino is only for morning (before 11am). Asking for a \"large coffee\" will confuse people — order an espresso doppio.",
            },
        ],
        fixedPhrases: [
            { native: "Vorrei un caffè.", translation: "I'd like a coffee.", note: "vorrei = most polite ordering form." },
            { native: "Il conto, per favore.", translation: "The bill, please.", note: "Essential end-of-meal phrase." },
            { native: "C'è…? / Avete…?", translation: "Is there…? / Do you have…?", note: "Asking about availability." },
            { native: "Per me l'acqua naturale.", translation: "For me still water.", note: "Very common ordering phrase." },
            { native: "Posso avere…?", translation: "Can I have…?", note: "Polite alternative." },
        ],
    },
    {
        id: "it-g-a1-22",
        level: "A1",
        title: "Giving & Understanding Directions",
        explanation: `Italians give directions using landmarks, not street numbers. The key verbs are girare (turn), andare/continuare (go/keep going), attraversare (cross), and prendere (take — a road or turn). The direction words and useful phrases are in the table below.`,
        examples: [
            { native: "Gira a sinistra al semaforo.", translation: "Turn left at the traffic light." },
            { native: "Vai sempre dritto.", translation: "Go straight ahead." },
            { native: "Prendi la seconda strada a destra.", translation: "Take the second street on the right." },
            { native: "La banca è di fronte alla chiesa.", translation: "The bank is opposite the church." },
            { native: "Scusi, dov'è la stazione?", translation: "Excuse me, where is the train station?" },
            { native: "È a dieci minuti a piedi.", translation: "It's ten minutes on foot." }
        ],
        inlineVocab: [
            { word: "girare", translation: "to turn" },
            { word: "attraversare", translation: "to cross" },
            { word: "piazza", translation: "square / plaza" },
            { word: "semaforo", translation: "traffic light" },
            { word: "banca", translation: "bank" },
            { word: "chiesa", translation: "church" },
            { word: "strada", translation: "street / road" },
            { word: "angolo", translation: "corner" },
        ],
        paradigmTable: {
            pronouns: ["Italian", "English"],
            verbs: [
                { label: "right / left", forms: ["a destra / a sinistra", "to the right / to the left"] },
                { label: "straight ahead", forms: ["dritto / sempre dritto", "straight / keep going straight"] },
                { label: "at the end", forms: ["in fondo", "at the end of the road"] },
                { label: "at the corner", forms: ["all'angolo", "at the corner"] },
                { label: "opposite", forms: ["di fronte a", "opposite / in front of"] },
                { label: "near / far", forms: ["vicino a / lontano da", "near / far from"] },
            ],
        },
        rules: [
            {
                condition: "Asking for directions",
                result: "Scusi, dov'è…? / Scusi, come si arriva a…?",
                examples: [
                    { native: "Scusi, dov'è la stazione?", translation: "Excuse me, where is the station?" },
                    { native: "Come si arriva al Duomo?", translation: "How do you get to the Duomo?" },
                ],
            },
            {
                condition: "Giving directions sequence",
                result: "Vada/Vai dritto, poi giri/gira a destra/sinistra",
                examples: [
                    { native: "Vada dritto, poi giri a destra alla piazza.", translation: "Go straight, then turn right at the square." },
                ],
            },
            {
                condition: "How far / how long",
                result: "È lontano? / Quanto ci vuole?",
                examples: [
                    { native: "È lontano? — No, è qui vicino.", translation: "Is it far? — No, it's nearby." },
                    { native: "Quanto ci vuole? — Ci vogliono dieci minuti.", translation: "How long does it take? — It takes ten minutes." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Directions use the imperative (formal: vada, giri, prenda; informal: vai, girà, prendi). At A1, just learn the formal forms — they work with anyone and are always polite.",
            },
            {
                type: "culture",
                content: "Italians give directions using landmarks constantly: \"Vai fino alla farmacia, poi giri a sinistra.\" (Go to the pharmacy, then turn left.) Street numbers are less used than in other countries.",
            },
        ],
        fixedPhrases: [
            { native: "Scusi, dov'è…?", translation: "Excuse me, where is…?", note: "Standard direction-asking opener." },
            { native: "È qui vicino.", translation: "It's nearby.", note: "Most common reassuring answer." },
            { native: "Come si arriva a…?", translation: "How do you get to…?", note: "More open question for routes." },
            { native: "Quanto ci vuole?", translation: "How long does it take?", note: "ci vuole = it takes (impersonal)." },
            { native: "Sono perso / persa.", translation: "I'm lost.", note: "Essential phrase when you need help." },
        ],
    },
    {
        id: "it-g-a1-12",
        level: "A1",
        title: "Adjective Agreement",
        explanation: `Italian adjectives must agree with the noun in gender and number. Most follow the 4-form -o/-a/-i/-e pattern; adjectives ending in -e are simpler — same form for both genders, just add -i for plural.

POSITION — adjectives usually come AFTER the noun: un ragazzo alto, una pizza buona. Common short adjectives (bello, vecchio, grande, buono, cattivo, primo) often come BEFORE. Position can shift meaning: un grande uomo = a great man · un uomo grande = a big/tall man.`,
        paradigmTable: {
            pronouns: ["masc. singular", "fem. singular", "masc. plural", "fem. plural"],
            verbs: [
                { label: "-o/-a/-i/-e (most adj.)", forms: ["rosso", "rossa", "rossi", "rosse"] },
                { label: "-e/-i (invariable for gender)", forms: ["interessante", "interessante", "interessanti", "interessanti"] },
                { label: "bello (pre-noun, mirrors article)", forms: ["bel/bello/bell'", "bella/bell'", "bei/begli", "belle"] },
                { label: "buono (pre-noun, mirrors indef.)", forms: ["buon/buono", "buona/buon'", "buoni", "buone"] },
            ],
        },
        rules: [
            {
                condition: "Adjective ending in -o",
                result: "Changes: -o (m.sg) / -a (f.sg) / -i (m.pl) / -e (f.pl)",
                examples: [
                    { native: "rosso / rossa / rossi / rosse", translation: "red (m.sg / f.sg / m.pl / f.pl)" },
                    { native: "alto / alta / alti / alte", translation: "tall (m.sg / f.sg / m.pl / f.pl)" },
                ],
            },
            {
                condition: "Adjective ending in -e",
                result: "Same form for masculine and feminine; add -i for plural",
                examples: [
                    { native: "interessante → interessanti", translation: "interesting (sg → pl)" },
                    { native: "grande → grandi", translation: "big/great (sg → pl)" },
                ],
            },
            {
                condition: "Position: after the noun (default)",
                result: "Most adjectives follow the noun they describe",
                examples: [
                    { native: "un ragazzo alto", translation: "a tall boy" },
                    { native: "una casa grande", translation: "a big house" },
                    { native: "libri interessanti", translation: "interesting books" },
                ],
            },
            {
                condition: "Position: before the noun (short common adjectives)",
                result: "bello, vecchio, grande, buono, cattivo, primo, ultimo can precede",
                examples: [
                    { native: "un bel ragazzo", translation: "a handsome boy" },
                    { native: "una bella giornata", translation: "a beautiful day" },
                    { native: "un buon vino", translation: "a good wine" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Adjectives ending in -e are the most learner-friendly — no gender change needed. Only singular → plural: grande → grandi, elegante → eleganti." },
            { type: "warning", content: "When bello and buono go BEFORE a noun, they change form like the articles (bello mirrors lo/gli/l'...; buono mirrors uno/un...). When they go AFTER the noun, they use regular 4-form agreement: bello/bella/belli/belle." },
            { type: "forward-ref", content: "Adjective agreement applies to past participles with essere verbs (passato prossimo). Full treatment at A2.", refId: "it-g-a1-2" },
        ],
        examples: [
            { native: "un libro interessante / una storia interessante", translation: "an interesting book / an interesting story" },
            { native: "Il ragazzo alto / La ragazza alta", translation: "The tall boy / The tall girl" },
            { native: "I libri rossi / Le case rosse", translation: "The red books / The red houses" },
            { native: "un bel ragazzo / una bella ragazza", translation: "a handsome boy / a beautiful girl (before noun)" },
            { native: "un grande uomo / un uomo grande", translation: "a great man / a big man (position changes meaning)" }
        ],
        inlineVocab: [
            { word: "rosso", translation: "red" },
            { word: "storia", translation: "story / history" },
            { word: "ragazzo", translation: "boy" },
            { word: "ragazza", translation: "girl" },
            { word: "alto", translation: "tall" },
            { word: "interessante", translation: "interesting" },
            { word: "bello", translation: "beautiful / handsome" },
            { word: "vecchio", translation: "old" },
            { word: "grande", translation: "big / great" },
            { word: "buono", translation: "good" },
            { word: "cattivo", translation: "bad" },
        ]
    },
    {
        id: "it-g-a1-24",
        level: "A1",
        title: "Demonstrative Adjectives",
        explanation: `Demonstrative adjectives point out specific nouns. Italian has two sets — questo (this, near me) and quello (that, away from me).

QUESTO — this / these (near the speaker)
Forms agree with the noun in gender and number:
  questo → masc. sg. before consonant:    questo libro
  quest' → masc./fem. sg. before vowel:  quest'amico, quest'amica
  questa → fem. sg.:                      questa casa
  questi → masc. pl.:                     questi libri
  queste → fem. pl.:                      queste case

QUELLO — that / those (away from the speaker)
Quello mirrors the definite article (il/lo/l'/la/i/gli/le):
  quel libro       (= il libro)       that book
  quello studente  (= lo studente)    that student
  quell'amico      (= l'amico)        that friend
  quella casa      (= la casa)        that house
  quei libri       (= i libri)        those books
  quegli amici     (= gli amici)      those friends
  quelle case      (= le case)        those houses

QUICK TIP: When in doubt about quello, think of the definite article for that noun — quello follows the same pattern.`,
        examples: [
            { native: "Questo libro è interessante.", translation: "This book is interesting." },
            { native: "Quest'amica è bravissima.", translation: "This friend (fem.) is very good." },
            { native: "Quella casa è grande.", translation: "That house is big." },
            { native: "Quei libri sono miei.", translation: "Those books are mine." },
            { native: "Cos'è questo?", translation: "What is this?" },
        ],
        inlineVocab: [
            { word: "interessante", translation: "interesting" },
            { word: "grande", translation: "big / great" },
        ],
        paradigmTable: {
            pronouns: ["masc. singular", "fem. singular", "masc. plural", "fem. plural"],
            verbs: [
                { label: "questo (this)", forms: ["questo / quest'", "questa / quest'", "questi", "queste"] },
                { label: "quello (that) — mirrors article", forms: ["quel / quello / quell'", "quella / quell'", "quei / quegli", "quelle"] },
            ],
        },
        rules: [
            {
                condition: "This / these (near speaker)",
                result: "Use questo — regular 4-form agreement, quest' before vowels",
                examples: [
                    { native: "questo libro", translation: "this book" },
                    { native: "questa casa", translation: "this house" },
                    { native: "questi libri", translation: "these books" },
                    { native: "queste case", translation: "these houses" },
                    { native: "quest'amico / quest'amica", translation: "this friend (m./f.)" },
                ],
            },
            {
                condition: "That / those (away from speaker)",
                result: "Use quello — mirrors the definite article",
                examples: [
                    { native: "quel libro", translation: "that book (= il)" },
                    { native: "quello studente", translation: "that student (= lo)" },
                    { native: "quell'amico", translation: "that friend (= l')" },
                    { native: "quella casa", translation: "that house (= la)" },
                    { native: "quei libri", translation: "those books (= i)" },
                    { native: "quegli amici", translation: "those friends (= gli)" },
                    { native: "quelle case", translation: "those houses (= le)" },
                ],
            },
            {
                condition: "As pronouns (without a noun)",
                result: "Same forms — just drop the noun",
                examples: [
                    { native: "Prendo questo.", translation: "I'll take this one." },
                    { native: "Preferisce quella.", translation: "She prefers that one." },
                    { native: "Cos'è questo?", translation: "What is this?" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Quello follows the exact same pattern as the definite article. When in doubt about which form of quello to use, just think of which article the noun would take — quello follows it.",
            },
            {
                type: "culture",
                content: "\"Cos'è questo?\" (What is this?) is one of the most useful A1 questions — ask it whenever you encounter something unknown.",
            },
        ],
        fixedPhrases: [
            { native: "Cos'è questo?", translation: "What is this?", note: "questo as pronoun — neutral, no gender needed." },
            { native: "Quanto costa questo / quella?", translation: "How much does this / that cost?", note: "Essential shopping." },
            { native: "Prendo questo/quella.", translation: "I'll take this/that.", note: "Shopping decision." },
        ],
    },
]
