import { GrammarLesson } from "../../../../types"

// Block 1 — "Le passé en profondeur" (Units 1–3)
// Grammar: Plus-que-parfait, Passive voice

export const block1Lessons: GrammarLesson[] = [
    // ── fr-g-b1-1 : Plus-que-parfait ─────────────────────────────────────────
    {
        id: "fr-g-b1-1",
        level: "B1",
        title: "Le plus-que-parfait (pluperfect)",
        explanation: {
            target: `Le plus-que-parfait (PQP) ajoute une troisième couche temporelle à la narration — il décrit ce qui s'était déjà passé *avant* les événements principaux.

**Formation :** avoir / être à l'**imparfait** + participe passé
- Même règle d'auxiliaire que le passé composé (verbes de mouvement/réfléchis → être ; les autres → avoir)
- Les mêmes participes passés irréguliers que vous connaissez déjà

**Quand l'utiliser ?**
1. Action antérieure : *Quand je suis arrivé, elle **était déjà partie**.*
2. Raison / contexte antérieur : *Il était fatigué parce qu'il **n'avait pas dormi**.*
3. Retour en arrière dans le discours rapporté : *Elle m'a dit qu'elle **avait déjà vu** ce film.*

**Placement des adverbes :** déjà / encore / jamais se placent entre l'auxiliaire et le participe — comme au passé composé.`,
            native: `The plus-que-parfait (PQP) adds a third temporal layer to past narration — it describes what had already happened *before* the main past events.

**Formation:** avoir / être in the **imparfait** + past participle
- Same auxiliary rule as passé composé (motion/reflexive → être; all others → avoir)
- Same irregular past participles you already know

**When to use it:**
1. Prior completed action: *Quand je suis arrivé, elle **était déjà partie**.*
2. Background reason: *Il était fatigué parce qu'il **n'avait pas dormi**.*
3. Backstory in reported speech: *Elle m'a dit qu'elle **avait déjà vu** ce film.*

**Adverb placement:** déjà / encore / jamais slot between the auxiliary and the past participle — same rule as passé composé.`,
        },
        conjugationTable: {
            pronouns: ["j'", "tu", "il/elle", "nous", "vous", "ils/elles"],
            verbs: [
                { label: "manger (avoir)", forms: ["avais mangé", "avais mangé", "avait mangé", "avions mangé", "aviez mangé", "avaient mangé"] },
                { label: "partir (être)", forms: ["étais parti(e)", "étais parti(e)", "était parti(e)", "étions parti(e)s", "étiez parti(e)(s)", "étaient parti(e)s"] },
            ],
        },
        rules: [
            {
                condition: "Action antérieure (avant un autre événement passé)",
                result: "PQP pour l'événement antérieur ; passé composé ou imparfait pour l'événement suivant",
                examples: [
                    { native: "Quand je suis arrivé, elle était déjà partie.", translation: "When I arrived, she had already left." },
                    { native: "Elle n'avait jamais vu la mer avant ce voyage.", translation: "She had never seen the sea before that trip." },
                ],
            },
            {
                condition: "Raison antérieure (pourquoi les choses étaient ainsi)",
                result: "Le PQP explique la cause d'un état passé",
                examples: [
                    { native: "Il était épuisé parce qu'il n'avait pas dormi.", translation: "He was exhausted because he hadn't slept." },
                    { native: "Je connaissais la ville — j'y étais allé(e) plusieurs fois.", translation: "I knew the city — I had been there several times." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Le PQP, c'est exactement comme le passé composé — mais l'auxiliaire est à l'imparfait. Si vous savez : j'avais / j'étais + participe passé = vous savez déjà le PQP." },
            { type: "warning", content: "Placement des adverbes : déjà/jamais/encore se placent ENTRE l'auxiliaire et le participe. j'avais DÉJÀ mangé ✓ — pas j'avais mangé déjà ✗" },
        ],
        examples: [
            { native: "J'avais oublié mon parapluie, donc je me suis mouillé.", translation: "I had forgotten my umbrella, so I got wet." },
            { native: "Elle m'a dit qu'elle avait déjà réservé.", translation: "She told me she had already booked." },
            { native: "Nous avions fini quand les invités sont arrivés.", translation: "We had finished when the guests arrived." },
        ],
        inlineVocab: [
            { word: "la veille", translation: "the day/night before" },
            { word: "entre-temps", translation: "in the meantime" },
            { word: "auparavant", translation: "before that / previously" },
            { word: "déjà", translation: "already" },
            { word: "il s'avère que", translation: "it turns out that" },
        ],
    },

    // ── fr-g-b1-2 : Passive voice ────────────────────────────────────────────
    {
        id: "fr-g-b1-2",
        level: "B1",
        title: "La voix passive (passive voice)",
        explanation: {
            target: `La voix passive permet de mettre l'accent sur l'action ou sur l'objet de l'action, plutôt que sur celui qui agit.

**Formation :** être (à n'importe quel temps) + participe passé — le PP s'accorde avec le sujet grammatical
**L'agent :** par = action délibérée (*par le maire*) | de = description/état (*entouré de*) | sans agent = très fréquent

**Registre :** Le passif est formel. À l'oral, on préfère **on** :
- Formel : *La réunion a été annulée.*
- Oral : *On a annulé la réunion.*`,
            native: `The passive voice shifts focus from who does something to what is done.

**Formation:** être (any tense) + past participle — PP agrees with the grammatical subject
**Agent:** par = deliberate action (*par le maire*) | de = description/state (*entouré de*) | no agent = very common

**Register note:** The passive is formal. In spoken French, use **on** instead:
- Formal: *La réunion a été annulée.*
- Spoken: *On a annulé la réunion.*`,
        },
        paradigmTable: {
            pronouns: ["Temps", "Exemple"],
            verbs: [
                { label: "Présent", forms: ["est construit(e)"] },
                { label: "Passé composé", forms: ["a été construit(e)"] },
                { label: "Imparfait", forms: ["était construit(e)"] },
                { label: "Plus-que-parfait", forms: ["avait été construit(e)"] },
                { label: "Futur simple", forms: ["sera construit(e)"] },
                { label: "Conditionnel", forms: ["serait construit(e)"] },
            ],
        },
        rules: [
            {
                condition: "Être + participe passé — le PP s'accorde avec le sujet",
                result: "Sujet féminin → PP + -e | Pluriel → PP + -s | Féminin pluriel → PP + -es",
                examples: [
                    { native: "Le pont a été construit en 1850.", translation: "The bridge was built in 1850." },
                    { native: "Les lettres ont été envoyées hier.", translation: "The letters were sent yesterday." },
                ],
            },
            {
                condition: "On + verbe actif — alternative naturelle à l'oral",
                result: "Plus naturel en conversation quand on ne précise pas l'agent",
                examples: [
                    { native: "On parle français ici.", translation: "French is spoken here." },
                    { native: "On a annulé la réunion.", translation: "The meeting was cancelled." },
                ],
            },
        ],
        notes: [
            { type: "culture", content: "Les titres de journaux et les communications officielles utilisent beaucoup le passif. Lire la presse française est impossible sans comprendre les constructions être + PP." },
        ],
        examples: [
            { native: "Ce roman a été écrit par Simone de Beauvoir.", translation: "This novel was written by Simone de Beauvoir." },
            { native: "Le colis sera livré demain matin.", translation: "The parcel will be delivered tomorrow morning." },
            { native: "La ville est entourée de forêts.", translation: "The town is surrounded by forests." },
        ],
        inlineVocab: [
            { word: "annoncer", translation: "to announce" },
            { word: "construire", translation: "to build" },
            { word: "publier", translation: "to publish" },
            { word: "entouré(e) de", translation: "surrounded by" },
            { word: "livrer", translation: "to deliver" },
        ],
    },
]
