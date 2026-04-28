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

    // ── fr-g-b1-16 : Depuis + imparfait ──────────────────────────────────────
    {
        id: "fr-g-b1-16",
        level: "B1",
        title: "Depuis + imparfait — la durée dans le passé",
        explanation: {
            target: `À l'A2, vous avez appris *depuis + présent* pour une situation encore vraie maintenant.
Au B1, *depuis + imparfait* exprime ce qui *durait déjà* quand un événement passé s'est produit.

**Formule :** imparfait + depuis + indication de durée → interrompu ou contextualisé par un événement au PC.

*J'**attendais** depuis une heure **quand** il est arrivé.*
*(I had been waiting for an hour when he arrived.)*

**Alternative orale fréquente : ça faisait... que + imparfait**
*Ça **faisait** une heure que j'**attendais** quand il est arrivé.*`,
            native: `At A2 you learned *depuis + présent* for a situation still ongoing now.
At B1, *depuis + imparfait* expresses what *had been going on* when a past event occurred.

**Pattern:** imparfait + depuis + time expression → interrupted or contextualised by a PC event.

*J'**attendais** depuis une heure **quand** il est arrivé.*
*(I had been waiting for an hour when he arrived.)*

**Common spoken alternative: ça faisait... que + imparfait**
*Ça **faisait** une heure que j'**attendais** quand il est arrivé.*`,
        },
        rules: [
            {
                condition: "Depuis + présent (A2) → action encore en cours maintenant",
                result: "Présent + depuis",
                examples: [
                    { native: "Il travaille ici depuis trois ans.", translation: "He has worked here for three years. (still does)" },
                ],
            },
            {
                condition: "Depuis + imparfait (B1) → action en cours au moment d'un événement passé",
                result: "Imparfait + depuis + PC (événement survenu à ce moment-là)",
                examples: [
                    { native: "J'attendais depuis une heure quand il est finalement arrivé.", translation: "I had been waiting for an hour when he finally arrived." },
                    { native: "Elle étudiait le français depuis six mois quand elle a passé son premier examen.", translation: "She had been studying French for six months when she took her first exam." },
                    { native: "Ça faisait deux ans qu'il cherchait un emploi quand il a reçu cette offre.", translation: "He had been looking for a job for two years when he received that offer." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Test : pouvez-vous dire 'ça faisait... que' à la place ? Si oui, utilisez l'imparfait, pas le présent. Ça faisait une heure que j'attendais = j'attendais depuis une heure." },
            { type: "warning", content: "Ne confondez pas : Je travaille ici depuis 3 ans (encore maintenant — présent) vs Je travaillais là depuis 3 ans quand j'ai démissionné (passé révolu — imparfait)." },
        ],
        examples: [
            { native: "Il dormait depuis deux heures quand le téléphone a sonné.", translation: "He had been asleep for two hours when the phone rang." },
            { native: "Ça faisait des mois qu'on se connaissait quand on a décidé de partir ensemble.", translation: "We had known each other for months when we decided to travel together." },
        ],
        inlineVocab: [
            { word: "ça faisait... que", translation: "it had been... that / for" },
            { word: "depuis lors", translation: "since then" },
            { word: "au moment où", translation: "at the moment when" },
        ],
    },

    // ── fr-g-b1-17 : Devoir / pouvoir / vouloir — imparfait vs passé composé ─
    {
        id: "fr-g-b1-17",
        level: "B1",
        title: "Devoir, pouvoir, vouloir en récit — imparfait vs passé composé",
        explanation: {
            target: `Ces trois verbes ont des **significations différentes** selon qu'ils sont à l'imparfait ou au passé composé. C'est l'un des points les plus importants — et les plus mal maîtrisés — de la narration française au B1.

**Devoir**
- **Je devais** (imparfait) = j'étais censé / j'avais l'obligation (état, pas forcément réalisé)
- **J'ai dû** (PC) = j'ai été obligé — et je l'ai fait

**Pouvoir**
- **Je pouvais** (imparfait) = j'avais la capacité / la permission (état en cours)
- **J'ai pu** (PC) = j'ai réussi / j'ai eu la possibilité — et c'est arrivé

**Vouloir**
- **Je voulais** (imparfait) = c'était mon désir (état, sans action forcément)
- **J'ai voulu** (PC) = j'ai essayé / j'ai décidé d'agir`,
            native: `These three verbs have **different meanings** depending on whether they are in the imparfait or passé composé. This is one of the most important — and most under-taught — points of French B1 narration.

**Devoir**
- **Je devais** (imparfait) = I was supposed to / I had an obligation (state, not necessarily carried out)
- **J'ai dû** (PC) = I had to — and I did

**Pouvoir**
- **Je pouvais** (imparfait) = I was able to / had permission (ongoing state)
- **J'ai pu** (PC) = I managed to / was able to — and it happened

**Vouloir**
- **Je voulais** (imparfait) = I wanted to (desire, state — no action implied)
- **J'ai voulu** (PC) = I tried to / decided to act on it`,
        },
        rules: [
            {
                condition: "Devoir : obligation en cours vs obligation réalisée",
                result: "Imparfait = état d'obligation ; PC = nécessité accomplie",
                examples: [
                    { native: "Je devais partir à dix heures, mais j'ai raté mon train.", speakText: "Je devais partir à dix heures, mais j'ai raté mon train.", translation: "I was supposed to leave at ten, but I missed my train. (devais = unrealised obligation)" },
                    { native: "J'ai dû partir sans lui dire au revoir.", speakText: "J'ai dû partir sans lui dire au revoir.", translation: "I had to leave without saying goodbye. (j'ai dû = it happened)" },
                ],
            },
            {
                condition: "Pouvoir : capacité en cours vs capacité accomplie",
                result: "Imparfait = état de capacité ; PC = réussite concrète",
                examples: [
                    { native: "Je pouvais travailler des heures sans me fatiguer.", translation: "I could work for hours without getting tired. (ongoing ability)" },
                    { native: "Finalement, j'ai pu le convaincre.", translation: "Eventually, I managed to convince him. (concrete achievement)" },
                ],
            },
            {
                condition: "Vouloir : désir en cours vs intention mise en acte",
                result: "Imparfait = état de désir ; PC = action tentée",
                examples: [
                    { native: "Je voulais lui parler, mais il est parti avant.", translation: "I wanted to talk to him, but he left first. (voulais = unfulfilled desire)" },
                    { native: "J'ai voulu l'appeler — son téléphone était éteint.", translation: "I tried to call him — his phone was off. (j'ai voulu = attempted)" },
                ],
            },
        ],
        notes: [
            { type: "warning", content: "Erreur fréquente : 'Je pouvais finalement lui parler' ✗ → 'J'ai finalement pu lui parler' ✓. Si l'action s'est accomplie et a eu lieu, utilisez le passé composé." },
            { type: "tip", content: "Testez avec 'et c'est arrivé' : j'ai dû partir (et c'est arrivé) ✓ | je devais partir (et c'est arrivé?) — pas forcément. Si l'événement est accompli → PC." },
        ],
        examples: [
            { native: "Il devait nous rejoindre mais il a annulé au dernier moment.", translation: "He was supposed to join us but cancelled at the last minute." },
            { native: "Elle a pu obtenir un rendez-vous le jour même.", translation: "She managed to get an appointment the same day." },
            { native: "J'ai voulu protester, mais le débat était déjà terminé.", translation: "I tried to protest, but the debate was already over." },
        ],
        inlineVocab: [
            { word: "être censé(e) + inf.", translation: "to be supposed to" },
            { word: "réussir à + inf.", translation: "to manage to / succeed in" },
            { word: "tenter de + inf.", translation: "to try to" },
            { word: "au dernier moment", translation: "at the last moment" },
        ],
    },
]
