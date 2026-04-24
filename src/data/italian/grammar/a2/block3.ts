import { GrammarLesson } from "../../../../types"

export const block3Lessons: GrammarLesson[] = [
    // ── it-g-a2-8 — Pronomi diretti ───────────────────────────────────────────
    {
        id: "it-g-a2-8",
        level: "A2",
        title: "Pronomi Diretti — lo, la, li, le (and agreement)",
        explanation: `Direct object pronouns replace the direct object (what/who receives the verb's action directly, no preposition).

THE PRONOUNS
mi (me), ti (you), lo/l' (him/it m.), la/l' (her/it f.), ci (us), vi (you pl.), li (them m.), le (them f.)
Formal: La / L' (always capital L)

POSITION: always BEFORE the conjugated verb
• La guardo. (I watch her/it.)  • Li aspetto. (I'm waiting for them.)
• Non lo capisco. (I don't understand him/it.) — non goes before the pronoun

WITH INFINITIVE (modale + infinito): two correct positions
• Lo voglio vedere. OR Voglio vederlo. (both natural)
• La puoi chiamare? OR Puoi chiamarla?

WITH GERUNDIO (stare + gerundio):
• Lo stavo guardando. OR Stavo guardandolo.

IN THE PASSATO PROSSIMO:
Pronoun goes BEFORE the auxiliary.
The PAST PARTICIPLE AGREES with the pronoun in gender and number:
• lo/l' (m.sg.) → no visible change: L'ho visto.
• la/l' (f.sg.) → add -a: L'ho vista.
• li (m.pl.) → add -i: Li ho visti.
• le (f.pl.) → add -e: Le ho viste.

Examples:
• La pizza? L'ho ordinata. (pizza = f.sg. → -a)
• I biglietti? Li ho comprati. (biglietti = m.pl. → -i)
• Le chiavi? Le hai trovate? (chiavi = f.pl. → -e)
• Quel libro? L'ho letto. (libro = m.sg. → letto, no change needed)

INDIRECT pronouns do NOT cause agreement (see next unit).`,
        rules: [
            {
                condition: "Present tense with direct object pronoun",
                result: "Pronoun goes immediately BEFORE the conjugated verb",
                examples: [
                    { native: "Guardo la televisione → La guardo.", translation: "I watch television / I watch it.", annotation: "la televisione (fem.) → la" },
                    { native: "Invito i miei amici → Li invito.", translation: "I invite my friends / I invite them.", annotation: "gli amici (masc.pl.) → li" },
                ]
            },
            {
                condition: "Passato prossimo with direct object pronoun",
                result: "Pronoun before auxiliary; past participle agrees with pronoun",
                examples: [
                    { native: "Ho ordinata la pizza → L'ho ordinata.", translation: "I ordered the pizza / I ordered it.", annotation: "la pizza (fem.) → la → L' (before vowel); PP agrees: ordinata" },
                    { native: "Ho comprati i biglietti → Li ho comprati.", translation: "I bought the tickets / I bought them.", annotation: "i biglietti (masc.pl.) → li; PP agrees: comprati" },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Agreement in the passato prossimo is real and audible: 'l'ho vistO' (film, m.) vs 'l'ho vistA' (persona, f.). Train both forms." },
            { type: "tip", content: "Two positions with infinitive are both natural. 'Lo voglio vedere' is perhaps slightly more common in rapid speech; 'voglio vederlo' slightly more formal." },
        ],
        paradigmTable: {
            pronouns: ["Person", "Pronoun", "Example"],
            verbs: [
                { label: "1st sg.", forms: ["mi", "Mi chiama. / Mi ha chiamato."] },
                { label: "2nd sg.", forms: ["ti", "Ti aspetto. / Ti ho aspettato."] },
                { label: "3rd sg. m.", forms: ["lo / l'", "Lo guardo. / L'ho visto."] },
                { label: "3rd sg. f.", forms: ["la / l'", "La chiamo. / L'ho chiamata."] },
                { label: "1st pl.", forms: ["ci", "Ci vede. / Ci ha visto."] },
                { label: "2nd pl.", forms: ["vi", "Vi aspetto. / Vi ho aspettato."] },
                { label: "3rd pl. m.", forms: ["li", "Li conosco. / Li ho conosciuti."] },
                { label: "3rd pl. f.", forms: ["le", "Le trovo. / Le ho trovate."] },
            ]
        },
        examples: [
            { native: "Hai visto il nuovo film di Sorrentino? — No, non l'ho ancora visto.", translation: "Have you seen the new Sorrentino film? — No, I haven't seen it yet." },
            { native: "L'ho adorato — l'ho visto due volte già.", translation: "I loved it — I've already seen it twice." },
            { native: "Gli attori? Li trovi bravi?", translation: "The actors? Do you find them good?" },
            { native: "Hai letto le recensioni? Le ho lette tutte.", translation: "Have you read the reviews? I've read them all." },
            { native: "Stavo guardandolo quando mi hai chiamato.", translation: "I was watching it when you called me." },
            { native: "Lo guardi stasera — non lo rimpiangerai.", translation: "Watch it tonight — you won't regret it." },
        ],
    },

    // ── it-g-a2-9 — Pronomi indiretti + ci locativo + ne ─────────────────────
    {
        id: "it-g-a2-9",
        level: "A2",
        title: "Pronomi Indiretti, Ci Locativo e Ne",
        explanation: `Indirect object pronouns replace "a + person" (to/for someone).

INDIRECT PRONOUNS
mi (to me), ti (to you), gli (to him / to them), le (to her / formal to you),
ci (to us), vi (to you pl.), gli (to them — modern standard Italian)

Important: gli = to him AND to them. The form 'loro' after the verb is archaic/very formal.
• Gli ho parlato. = I spoke to him. AND = I spoke to them. (context clarifies)

POSITION: same as direct — before the conjugated verb
• Gli parlo domani. / Le ho mandato un messaggio. / Ci ha spiegato tutto.
INDIRECT pronouns do NOT cause past participle agreement:
• Le ho telefonato. (NOT: le ho telefonata)

Verbs that take indirect objects: dire, dare, parlare, scrivere, mandare,
chiedere, spiegare, mostrare, telefonare, rispondere, sembrare, piacere, interessare

CI LOCATIVO — replaces a/in + place (= French y)
• Vai in centro? → Ci vai?  • Abiti a Milano? → Ci abiti?
• Sei andato/a al supermercato? → Ci sei andato/a?
Position: same as other pronouns
• Non ci vado mai. / Ci siamo stati l'estate scorsa.
• Voglio andarci domani. OR Ci voglio andare domani.

NE — replaces di + noun/concept, partitive, or a quantity
1. Partitive/quantity: Vuoi del vino? → Ne vuoi? / Ho tre fratelli → Ne ho tre.
2. After di: Parliamo di politica → Ne parliamo.
3. Ho paura degli esami → Ne ho paura.

NE in passato prossimo — the participle agrees with the implied noun:
• Ne ho mangiata molta. (pizza, f.) / Ne ho bevuti tre. (caffè, m.pl.)
The quantity stays in the sentence: Ne ho comprati due chili.

COMBINED PRONOUNS (pronomi combinati):
mi/ti/ci/vi + lo/la/li/le/ne → me lo / te la / ce li / ve ne
gli/le → glie- fused with second pronoun: glielo, gliela, glieli, gliele, gliene
• Mi dai il numero? → Me lo dai?
• Gli spiego la situazione → Gliela spiego.
• Ne parli a Marco? → Gliene parli?`,
        rules: [
            {
                condition: "Complement introduced by 'a + person'",
                result: "Use indirect pronoun (mi/ti/gli/le/ci/vi/gli)",
                examples: [
                    { native: "Scrivo ai miei genitori → Gli scrivo.", translation: "I write to my parents / I write to them.", annotation: "ai miei genitori (pl.) → gli" },
                    { native: "Telefono a Maria → Le telefono.", translation: "I call Maria / I call her.", annotation: "a Maria (fem.sg.) → le" },
                ]
            },
            {
                condition: "Reference to a place (a/in + location)",
                result: "Use CI locativo",
                examples: [
                    { native: "Vai in palestra? → Ci vai?", translation: "Do you go to the gym? / Do you go there?", annotation: "in palestra → ci" },
                    { native: "Ci siamo stati l'estate scorsa.", translation: "We were there last summer." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Combined pronouns have only two patterns: mi/ti/ci/vi become me/te/ce/ve before lo/la/li/le/ne. gli/le both become glie- and fuse into one word (glielo, gliela, gliene)." },
            { type: "warning", content: "Indirect pronouns NEVER cause past participle agreement: 'Le ho telefonato' is correct (NOT 'le ho telefonata')." },
            { type: "tip", content: "ci locativo is often confused with ci in reflexive verbs (ci vediamo). Context always clarifies: 'ci vado' = I go there; 'ci vediamo' = we see each other." },
        ],
        examples: [
            { native: "Hai parlato a Marco della festa? — Sì, gli ho detto tutto.", translation: "Did you tell Marco about the party? — Yes, I told him everything." },
            { native: "Vai al mercato domani? Ci vado sempre il sabato.", translation: "Are you going to the market tomorrow? I always go (there) on Saturdays." },
            { native: "Ne ha fatto tantissimo — siamo in cinque ma ne è rimasto ancora.", translation: "She made a huge amount — there are five of us but some is still left." },
            { native: "Ti mando la foto → Te la mando.", translation: "I'll send you the photo / I'll send it to you.", annotation: "ti (to you) + la (photo) → te la" },
            { native: "Glielo spiego adesso.", translation: "I'll explain it to him/her/them right now." },
            { native: "Ce ne dai un po'?", translation: "Will you give us some of it?" },
        ],
    },

    // ── it-g-a2-10 — Sapere/conoscere + tenere/rimanere/scegliere ─────────────
    {
        id: "it-g-a2-10",
        level: "A2",
        title: "Sapere vs Conoscere in Past Tenses + Key Irregular Verbs",
        explanation: `SAPERE vs CONOSCERE — changes of meaning in the past tenses

PRESENT (revision):
• sapere: knows facts, knows how to do (+ che / + infinitive / + indirect question)
  → So che sei stanco. / So nuotare. / Non so dove abita.
• conoscere: knows/is acquainted with (persons, places, things)
  → Conosco tua sorella. / Conosco bene Roma.

PASSATO PROSSIMO — different meaning:
• ho saputo = "I found out" / "I just learned" (change of state — a discovery)
  → Ho saputo che ti sei sposata! Congratulazioni!
  → Ho saputo della notizia ieri sera. / Quando l'ho saputo, non ci credevo.
• ho conosciuto = "I met for the first time" / "I made the acquaintance of"
  → Ho conosciuto tuo fratello alla festa.
  → L'ho conosciuta in vacanza l'anno scorso.

IMPERFETTO:
• sapevo = I knew (ongoing background knowledge)
• conoscevo = I was acquainted with (ongoing familiarity)

CONTRAST TABLE:
ho saputo | I found out (moment) | Ieri ho saputo che Marco è partito.
sapevo    | I knew (background)  | Sapevo già che sarebbe partito.
ho conosciuto | I met (first time) | Ho conosciuto Sara al lavoro.
conoscevo    | I knew / was acquainted | Conoscevo già tua sorella dalla scuola.

IRREGULAR PRESENT-TENSE VERBS — tenere family
tenere: tengo, tieni, tiene, teniamo, tenete, tengono
Same pattern: mantenere, ottenere, contenere, trattenere, sostenere

rimanere: rimango, rimani, rimane, rimaniamo, rimanete, rimangono
venire (revision): vengo, vieni, viene, veniamo, venite, vengono

scegliere: scelgo, scegli, sceglie, scegliamo, scegliete, scelgono
Same pattern: togliere (tolgo), cogliere (colgo), raccogliere (raccolgo), sciogliere (sciolgo)

IMPERFETTO IRREGOLARS (revision from Block 1):
fare → facevo / dire → dicevo / bere → bevevo`,
        rules: [
            {
                condition: "sapere in passato prossimo",
                result: "ho saputo = I found out / discovered (a change of state, not just past knowledge)",
                examples: [
                    { native: "Ho saputo che ti sei trasferito — quando?", translation: "I found out you've moved — when?" },
                    { native: "Quando l'ho saputo, non ci credevo.", translation: "When I found out, I couldn't believe it." },
                ]
            },
            {
                condition: "conoscere in passato prossimo",
                result: "ho conosciuto = I met for the first time",
                examples: [
                    { native: "Ho conosciuto il professore Martini al convegno.", translation: "I met Professor Martini at the conference for the first time." },
                    { native: "Dove avete conosciuto il vostro capo?", translation: "Where did you first meet your boss?" },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "tenere and venire share the same irregular pattern: 1st sg. and 3rd pl. add -ng-: tengo/tengono, vengo/vengono. Once you know one family, you know them all." },
            { type: "tip", content: "scegliere → scelgo: the -gliere family always drops gl → lgo in 1st sg. and 3rd pl. togliere → tolgo, raccogliere → raccolgo." },
        ],
        conjugationTable: {
            pronouns: ["io", "tu", "lui/lei", "noi", "voi", "loro"],
            verbs: [
                { label: "tenere", forms: ["tengo", "tieni", "tiene", "teniamo", "tenete", "tengono"] },
                { label: "rimanere", forms: ["rimango", "rimani", "rimane", "rimaniamo", "rimanete", "rimangono"] },
                { label: "scegliere", forms: ["scelgo", "scegli", "sceglie", "scegliamo", "scegliete", "scelgono"] },
            ]
        },
        examples: [
            { native: "Conoscevo già la sua ricerca — era famosa.", translation: "I was already familiar with his research — it was famous." },
            { native: "Ho conosciuto il direttore alla riunione di ieri.", translation: "I met the director at yesterday's meeting for the first time." },
            { native: "Non l'avevo ancora saputo — me l'hai detto tu.", translation: "I hadn't found out yet — you told me." },
            { native: "Rimango a casa stasera — sono stanco/a.", translation: "I'm staying home tonight — I'm tired." },
            { native: "Quale scegli? — Di solito scelgo il pesce.", translation: "Which do you choose? — I usually choose the fish." },
            { native: "Tiene molto alla puntualità.", translation: "He cares a great deal about punctuality." },
        ],
    },
]
