import { GrammarLesson } from "../../../../types"

export const block5Lessons: GrammarLesson[] = [
    // ── it-g-a2-14 — Fare male e la salute ───────────────────────────────────
    {
        id: "it-g-a2-14",
        level: "A2",
        title: "Health Language — Fare Male, Avere, Sentirsi",
        explanation: `The language of health requires a change of perspective for English speakers.

FARE MALE — the key structure for pain
In Italian: La testa (subject) fa male A ME (indirect object).
→ Mi fa male la testa. (My head hurts — lit. "The head hurts me")
→ Ti fanno male i piedi? (Do your feet hurt? — "the feet hurt you")

Structure: [indirect pronoun] + fa male + [singular body part]
           [indirect pronoun] + fanno male + [plural body part]

The verb agrees with the BODY PART, not the person:
mi FA male la schiena (singular) / mi FANNO male i piedi (plural)

PARADIGM:
mi fa/fanno male, ti fa/fanno male, gli fa/fanno male,
le fa/fanno male, ci fa/fanno male, vi fa/fanno male, gli fa/fanno male

ALTERNATIVE: avere + mal di (very common, fixed expressions)
avere mal di testa / mal di schiena / mal di gola / mal di stomaco /
mal di denti / mal d'orecchi / mal di mare / mal d'auto

SYMPTOMS — avere + noun:
avere la febbre, la tosse, il raffreddore, l'influenza,
le vertigini, la nausea, i brividi, il fiato corto

FEELING — sentirsi + adjective:
sentirsi male / bene / meglio / stanco/a / debole / esausto/a / a pezzi

ONGOING SYMPTOMS — stare + gerundio:
Sto tossendo da stamattina. / Sto starnutendo continuamente.

ADVICE REGISTER (contrast):
• Bisogna riposarsi. (impersonal — general advice)
• Devi prendere gli antibiotici. (direct instruction — personal)
• Dovresti stare a casa domani. (conditional — gentle suggestion)
• Non devi smettere prima di finire il ciclo. (direct prohibition)

USEFUL BODY PARTS (irregular plurals — note carefully):
il braccio → le braccia (f. pl.)
il dito → le dita (f. pl.)
il ginocchio → le ginocchia (f. pl.)
la mano → le mani`,
        rules: [
            {
                condition: "Expressing pain in Italian",
                result: "[indirect pronoun] + fa/fanno male + [body part] — verb agrees with body part",
                examples: [
                    { native: "Mi fa male la gola da tre giorni.", translation: "My throat has been hurting for three days." },
                    { native: "Gli fanno male le ginocchia quando fa sport.", translation: "His knees hurt him when he does sport." },
                ]
            },
            {
                condition: "Ongoing symptom with duration",
                result: "stare + gerundio + da + duration",
                examples: [
                    { native: "Sto tossendo da ieri sera.", translation: "I've been coughing since last night." },
                    { native: "Mi sento a pezzi — sto peggiorando.", translation: "I feel terrible — I'm getting worse." },
                ]
            },
        ],
        notes: [
            { type: "warning", content: "'Ho male alla testa' is not standard Italian. Use: 'mi fa male la testa' or 'ho mal di testa'." },
            { type: "tip", content: "The irregular body part plurals (le braccia, le dita, le ginocchia) are among the most frequent irregular forms — learn them in context, not as a list." },
        ],
        examples: [
            { native: "Ho mal di gola da tre giorni e ho la febbre da ieri sera.", translation: "I've had a sore throat for three days and a fever since last night." },
            { native: "Ti fanno male le orecchie?", translation: "Do your ears hurt?" },
            { native: "Mi sento a pezzi — sto peggiorando.", translation: "I feel terrible — I'm getting worse." },
            { native: "Bisogna riposarsi. Devi prendere due compresse al giorno.", translation: "One must rest. You need to take two tablets a day." },
            { native: "Dovresti stare a casa almeno domani.", translation: "You should stay home at least tomorrow." },
            { native: "Non devo smettere prima anche se mi sento meglio dopo due giorni.", translation: "I must not stop early even if I feel better after two days." },
        ],
    },

    // ── it-g-a2-15 — Sentimenti e opinioni ───────────────────────────────────
    {
        id: "it-g-a2-15",
        level: "A2",
        title: "Feelings, Opinions and Agreeing/Disagreeing",
        explanation: `DIVENTARE vs ESSERE vs SENTIRSI — emotional states

essere + adjective → permanent or lasting state: Sono una persona nervosa.
diventare + adjective → change of state (the moment it changes):
• Quando ha sentito la notizia, è diventato molto serio.
• Più parlava, più diventavo nervoso/a.
• Con il tempo sono diventata più paziente.
sentirsi + adjective → internal perception at a moment: Mi sento stanco/a adesso.

Key adjectives for diventare:
nervoso/a, arrabbiato/a, triste, felice, contento/a, ansioso/a,
emozionato/a, commosso/a, imbarazzato/a, sorpreso/a, deluso/a, sollevato/a

EXPRESSING OPINIONS — indicativo (NOT congiuntivo at A2)
All these take indicativo at A2:
• Penso che hai ragione. ✓ (NOT: penso che tu abbia — B1)
• Trovo che questo posto è bellissimo. ✓
• Mi sembra che c'è un errore. ✓
• Credo che è troppo tardi. ✓

Opinion markers:
Secondo me... (most spoken) / A mio avviso... (slightly formal) /
Dal mio punto di vista... (formal/argumentative) /
Ho l'impressione che... / Trovo che... / Mi sembra che...

AGREEING:
Hai ragione. / Sono d'accordo. / Esattamente. / Anch'io la penso così.
Assolutamente. / Certo. / Hai centrato il punto.

PARTIALLY AGREEING:
Sì, ma... / In parte hai ragione, ma... / Capisco cosa vuoi dire, però...
Dipende dal caso. / Non è sempre così, però. / Fino a un certo punto.

DISAGREEING POLITELY:
Non sono d'accordo. / La vedo diversamente.
Non mi convince. / Non è proprio così, secondo me.
Con tutto il rispetto... / Dipende come la si guarda.`,
        rules: [
            {
                condition: "Expressing a change of emotional state",
                result: "Use DIVENTARE (not essere) — captures the moment of change",
                examples: [
                    { native: "Sono diventato/a nervoso/a quando ho visto il conto.", translation: "I became nervous when I saw the bill." },
                    { native: "È diventata triste quando lo ha saputo.", translation: "She became sad when she found out." },
                ]
            },
            {
                condition: "Expressing an opinion at A2 level",
                result: "penso che / trovo che / mi sembra che + INDICATIVO (not congiuntivo)",
                examples: [
                    { native: "Penso che hai ragione su questo punto.", translation: "I think you're right on this point." },
                    { native: "Trovo che la situazione è ingiusta.", translation: "I find the situation unjust." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "At A2 it is perfectly correct to use indicativo after penso che / trovo che / mi sembra che. The congiuntivo after these verbs is B1. Don't let uncertainty about the congiuntivo stop you from expressing opinions." },
            { type: "culture", content: "Italians are expected to have opinions and defend them. Silence or vague answers can be read as disinterest. Learn to disagree politely — 'capisco cosa vuoi dire, però...' is a socially smooth opener." },
        ],
        examples: [
            { native: "Secondo me, questa legge non funzionerà.", translation: "In my opinion, this law won't work." },
            { native: "Trovo che il film è troppo lungo.", translation: "I find the film too long." },
            { native: "Capisco cosa vuoi dire, però la vedo diversamente.", translation: "I understand what you mean, but I see it differently." },
            { native: "Quando ha capito la situazione, è diventata molto seria.", translation: "When she understood the situation, she became very serious." },
            { native: "In parte hai ragione, ma dipende dal caso.", translation: "You're partly right, but it depends on the situation." },
            { native: "Non mi convince per niente questa spiegazione.", translation: "This explanation doesn't convince me at all." },
        ],
    },

    // ── it-g-a2-16 — Connettori avanzati ─────────────────────────────────────
    {
        id: "it-g-a2-16",
        level: "A2",
        title: "Connettori Avanzati e Marcatori Discorsivi",
        explanation: `These connectors turn a list of facts into real communication.

CONTRAST AND CONCESSION
ma — but (most used)
però — but/however (spoken, very natural — interchangeable with ma)
tuttavia — however (slightly formal)
eppure — and yet / even so (expressive, marks paradox)
nonostante (ciò/tutto) — despite (this/everything)
comunque — anyway / in any case (very frequent in speech)
anche se — even if / although
in ogni caso — in any case

Examples:
• Roma è magnifica. Però il traffico è insopportabile.
• Studiavo ogni giorno. Eppure non riuscivo a fare progressi.
• Nonostante tutto, è stata un'esperienza bellissima.
• Comunque, alla fine è andata bene.

ADDITION AND EMPHASIS
inoltre — furthermore / in addition (standard/formal)
oltretutto — what's more / on top of that (spoken emphatic)
soprattutto — above all / especially
tra l'altro — by the way / what's more (spoken)
addirittura — even / amazingly (expressive — very Italian, no single translation)
• Era bello, intelligente, e addirittura sapeva cucinare.

CAUSE AND CONSEQUENCE
quindi — so / therefore (most common)
allora — so / then (spoken)
dunque — therefore / so then (slightly formal)
così — so (spoken)
a causa di — because of (neutral/negative)
per colpa di — because of (implies blame: per colpa tua)
grazie a — thanks to (positive attribution)
dato che / visto che — since / given that

Note: grazie a = positive; a causa di = neutral/negative; per colpa di = assigns blame.

FILLERS — spoken Italian (absorb, don't memorise):
cioè — "I mean" / clarification / correction (very frequent)
allora — "so... / well..." (transition)
ecco — "there / exactly" (confirmation)
insomma — "basically / well / in short" (summary; also frustration tone)
beh — "well..." (hesitation)
diciamo — "let's say / sort of" (hedging)
addirittura — intensifier of surprise

Discourse markers for storytelling:
a un certo punto — at a certain point
nel frattempo — meanwhile
nonostante tutto — despite everything
bisogna dire che — it must be said that / one should note`,
        rules: [
            {
                condition: "Conceding a point while maintaining your position",
                result: "Use però / eppure / tuttavia / nonostante tutto",
                examples: [
                    { native: "Capisco il problema. Però trovo che la soluzione proposta non funziona.", translation: "I understand the problem. However, I think the proposed solution doesn't work." },
                    { native: "Non era il piano originale. Comunque, ha funzionato.", translation: "It wasn't the original plan. Anyway, it worked." },
                ]
            },
            {
                condition: "Attributing cause (positive / neutral / blame)",
                result: "grazie a (positive) / a causa di (neutral) / per colpa di (blame)",
                examples: [
                    { native: "Grazie alla tua guida, abbiamo trovato il posto.", translation: "Thanks to your guidance, we found the place." },
                    { native: "Ho perso il treno a causa del traffico.", translation: "I missed the train because of the traffic." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "'addirittura' has no perfect English translation — it adds intensity and surprise. 'Era bello e addirittura sapeva cucinare' = 'He was handsome and he could even cook.' Using it makes you sound immediately more Italian." },
            { type: "tip", content: "'cioè' is the most-used spoken filler in Italian — it works as clarification, self-correction, hesitation, or transition. It is the equivalent of English 'I mean'." },
        ],
        examples: [
            { native: "Non solo è arrivato in ritardo — per di più non si è nemmeno scusato.", translation: "Not only did he arrive late — on top of that he didn't even apologise." },
            { native: "Nonostante il ritardo, siamo arrivati in tempo.", translation: "Despite the delay, we arrived on time." },
            { native: "Era una serata strana. Eppure non dimenticherò mai quella conversazione.", translation: "It was a strange evening. And yet I'll never forget that conversation." },
            { native: "Cioè, ho capito il concetto, ma non il dettaglio pratico.", translation: "I mean, I understood the concept, but not the practical detail." },
            { native: "Insomma, alla fine è andata bene — un po' stressante, ma bene.", translation: "In short, it ended up fine — a bit stressful, but fine." },
            { native: "Tutto sommato, è stata la vacanza più bella degli ultimi anni.", translation: "All things considered, it was the best holiday of recent years." },
        ],
    },
]
