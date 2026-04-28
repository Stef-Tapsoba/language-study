import { GrammarLesson } from "../../../../types"

// Block 4 — "Looking Forward" (Units 10–12)
// Grammar: Futur simple, Conditionnel présent, Si clauses + Depuis + Venir de

export const block4Lessons: GrammarLesson[] = [
    // ── fr-g-a2-11 : Futur simple ─────────────────────────────────────────────
    {
        id: "fr-g-a2-11",
        level: "A2",
        title: "Futur simple — formation and use",
        explanation: `You already know the *futur proche* (aller + infinitive) from A1. Now you need the *futur simple* — the tense for predictions, distant plans, formal statements, and the essential *quand + futur* rule.

**Formation:**
- **-er and -ir verbs:** add endings directly to the infinitive
- **-re verbs:** drop the final -e, then add endings

**Endings** (same in all verbs — memorise these first):
-ai, -as, -a, -ons, -ez, -ont

*je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront*

**Irregular stems — all high-frequency (endings are regular):**
| Verb | Stem | Je form |
|---|---|---|
| être | ser- | je serai |
| avoir | aur- | j'aurai |
| aller | ir- | j'irai |
| faire | fer- | je ferai |
| pouvoir | pourr- | je pourrai |
| vouloir | voudr- | je voudrai |
| devoir | devr- | je devrai |
| savoir | saur- | je saurai |
| voir | verr- | je verrai |
| venir | viendr- | je viendrai |

**Futur proche vs futur simple:**
*Futur proche* = near, decided, personal plans: *Je vais appeler ce soir.*
*Futur simple* = predictions, distant plans, formal: *Un jour, j'habiterai à Paris.*

**The quand + futur simple rule (crucial!):**
In French, *quand* followed by a future-meaning clause takes the **futur simple** — not the present tense as in English.
*Quand j'**aurai** le temps, je **lirai** ce livre.*
(When I have time, I'll read this book — English: present after "when"; French: futur simple after quand)`,
        rules: [
            {
                condition: "Regular futur simple (-er and -ir verbs)",
                result: "Add endings to infinitive: -ai/-as/-a/-ons/-ez/-ont",
                heuristic: "parler → parler + ai → je parlerai · finir → finir + ai → je finirai",
                examples: [
                    { native: "Je parlerai au directeur demain matin.", translation: "I'll speak to the director tomorrow morning." },
                    { native: "Ils finiront le projet la semaine prochaine.", translation: "They'll finish the project next week." },
                    { native: "Elle partira à huit heures précises.", translation: "She'll leave at exactly eight o'clock." },
                ],
            },
            {
                condition: "Irregular stems (être, avoir, aller, faire, pouvoir...)",
                result: "Use the irregular stem; endings are always regular",
                examples: [
                    { native: "Je serai là à dix heures.", translation: "I'll be there at ten o'clock." },
                    { native: "On ira en vacances en juillet.", translation: "We'll go on holiday in July." },
                    { native: "Est-ce qu'il pourra venir ?", translation: "Will he be able to come?" },
                ],
            },
            {
                condition: "After quand (when) with future meaning",
                result: "Use futur simple — NOT the present tense (unlike English)",
                examples: [
                    { native: "Quand tu arriveras, appelle-moi.", translation: "When you arrive, call me." },
                    { native: "Quand j'aurai le temps, je lirai ce livre.", translation: "When I have time, I'll read this book." },
                    { native: "Quand ils seront là, on pourra commencer.", translation: "When they're here, we can start." },
                ],
            },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"],
            verbs: [
                { label: "parler (regular)", forms: ["parlerai", "parleras", "parlera", "parlerons", "parlerez", "parleront"] },
                { label: "être (irregular)", forms: ["serai", "seras", "sera", "serons", "serez", "seront"] },
                { label: "avoir (irregular)", forms: ["aurai", "auras", "aura", "aurons", "aurez", "auront"] },
                { label: "aller (irregular)", forms: ["irai", "iras", "ira", "irons", "irez", "iront"] },
                { label: "faire (irregular)", forms: ["ferai", "feras", "fera", "ferons", "ferez", "feront"] },
            ],
        },
        notes: [
            {
                type: "tip",
                content: "The -r- sound is the telltale signal of futur simple. When listening, train your ear to catch it: 'je parlerai' has that distinctive -r-ai ending.",
            },
            {
                type: "warning",
                content: "The quand + futur rule is counterintuitive for English speakers who say 'when I have time' (present). In French it MUST be 'quand j'aurai le temps' (futur simple).",
            },
        ],
        examples: [
            { native: "Demain, il fera beau.", translation: "Tomorrow, the weather will be nice." },
            { native: "Je te dirai la vérité quand tu seras prêt(e).", translation: "I'll tell you the truth when you're ready." },
            { native: "Un jour, j'habiterai au bord de la mer.", translation: "One day, I'll live by the sea." },
            { native: "Le président parlera ce soir à vingt heures.", translation: "The president will speak tonight at eight." },
            { native: "On visitera Florence et Sienne — je n'y suis jamais allé.", translation: "We'll visit Florence and Siena — I've never been there." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "T'as prévu quoi pour les vacances ?", translation: "What have you planned for the holidays?" },
                    { native: "On partira en Italie avec des amis — on visitera Florence et Sienne. Quand on sera là-bas, je te raconterai tout !", translation: "We'll go to Italy with friends — we'll visit Florence and Siena. When we're there, I'll tell you all about it!" },
                ],
            },
        ],
        inlineVocab: [
            { word: "à l'avenir", translation: "in the future" },
            { word: "bientôt", translation: "soon" },
            { word: "d'ici là", translation: "by then" },
            { word: "espérer", translation: "to hope" },
            { word: "prévoir", translation: "to plan / foresee" },
            { word: "envisager de", translation: "to be considering (doing)" },
            { word: "rêver de", translation: "to dream of" },
        ],
    },

    // ── fr-g-a2-12 : Conditionnel présent ───────────────────────────────────
    {
        id: "fr-g-a2-12",
        level: "A2",
        title: "Conditionnel présent — polite requests, wishes, and hypotheticals",
        explanation: `You already know *je voudrais* from A1. That is the conditionnel of *vouloir* — and there are dozens of equally useful forms waiting. The conditionnel is one of the most socially important tenses in French: it marks you as polite, nuanced, and fluent.

**Formation: futur simple stem + imparfait endings**
Same irregular stems as futur simple + endings: -ais, -ais, -ait, -ions, -iez, -aient

*je parlerais, tu parlerais, il parlerait, nous parlerions, vous parleriez, ils parleraient*
*je serais, j'aurais, j'irais, je ferais, je pourrais, je voudrais, je devrais*

**Four main uses:**

**1. Polite requests** (most important at A2):
*Je **voudrais** un café.* (more polite than: *Je veux un café.*)
*Tu **pourrais** m'aider ?* (more polite than: *Tu peux m'aider ?*)
*Vous **auriez** la carte ?*

**2. Wishes and desires:**
*J'**aimerais** vivre à l'étranger un jour.*
*On **voudrait** avoir une maison avec jardin.*

**3. Advice** (tu devrais / il faudrait / il vaudrait mieux):
*Tu **devrais** te reposer.*
*Il **vaudrait** mieux partir tôt.*
*Il **faudrait** réserver à l'avance.*

**4. Hypothetical situations** (previewing si clauses):
*Dans un monde idéal, je **travaillerais** quatre jours par semaine.*
*À ta place, je **lui** **parlerais** franchement.*`,
        rules: [
            {
                condition: "Making polite requests (instead of demanding with present tense)",
                result: "Use conditionnel — especially voudrais, pourrais, pourriez, auriez",
                examples: [
                    { native: "Je voudrais réserver une table pour deux personnes.", translation: "I would like to book a table for two." },
                    { native: "Pourriez-vous répéter plus lentement ?", translation: "Could you repeat more slowly?" },
                    { native: "Auriez-vous une chambre disponible pour ce soir ?", translation: "Would you have a room available for tonight?" },
                ],
            },
            {
                condition: "Expressing wishes and desires",
                result: "Use conditionnel of aimer, vouloir, préférer, rêver",
                examples: [
                    { native: "J'aimerais beaucoup voyager en Asie.", translation: "I would really like to travel in Asia." },
                    { native: "Elle aimerait changer de travail.", translation: "She would like to change jobs." },
                    { native: "Tu n'aimerais pas partir en voyage ?", translation: "Wouldn't you like to go travelling?" },
                ],
            },
            {
                condition: "Giving gentle advice",
                result: "Use tu devrais, vous pourriez, il vaudrait mieux, il faudrait",
                examples: [
                    { native: "Tu devrais consulter un médecin.", translation: "You should see a doctor." },
                    { native: "Il vaudrait mieux partir tôt.", translation: "It would be better to leave early." },
                    { native: "Il faudrait réserver à l'avance.", translation: "One should book in advance." },
                ],
            },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"],
            verbs: [
                { label: "parler", forms: ["parlerais", "parlerais", "parlerait", "parlerions", "parleriez", "parleraient"] },
                { label: "être", forms: ["serais", "serais", "serait", "serions", "seriez", "seraient"] },
                { label: "avoir", forms: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"] },
                { label: "pouvoir", forms: ["pourrais", "pourrais", "pourrait", "pourrions", "pourriez", "pourraient"] },
                { label: "vouloir", forms: ["voudrais", "voudrais", "voudrait", "voudrions", "voudriez", "voudraient"] },
                { label: "devoir", forms: ["devrais", "devrais", "devrait", "devrions", "devriez", "devraient"] },
            ],
        },
        notes: [
            {
                type: "culture",
                content: "Using 'je veux' in a restaurant or hotel can sound demanding — 'je voudrais' or 'j'aimerais' is what fluent speakers actually use. The conditionnel signals you understand French social register.",
            },
            {
                type: "tip",
                content: "The key polite phrases to memorise: Je voudrais... / Pourriez-vous... ? / Auriez-vous... ? / Tu devrais... / Il faudrait... / Il vaudrait mieux...",
            },
            {
                type: "forward-ref",
                content: "The full si + conditionnel structure (Si j'avais le temps, je t'appellerais) is introduced in the next lesson on si clauses.",
                refId: "fr-g-a2-13",
            },
        ],
        examples: [
            { native: "Je voudrais réserver une table pour samedi soir.", translation: "I would like to book a table for Saturday evening." },
            { native: "Ce serait intéressant — vous pourriez me dire ce qu'il y a au menu ?", translation: "That would be interesting — could you tell me what's on the menu?" },
            { native: "Dans un monde idéal, je dormirais jusqu'à midi.", translation: "In an ideal world, I would sleep until noon." },
            { native: "À ta place, je ne ferais pas ça.", translation: "In your position, I wouldn't do that." },
            { native: "J'irais en Islande si j'avais le choix.", translation: "I would go to Iceland if I had the choice." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Bonjour, je voudrais réserver une chambre pour deux nuits — vendredi et samedi. Auriez-vous quelque chose avec vue sur la mer ?", translation: "Good day, I would like to book a room for two nights — Friday and Saturday. Would you have something with a sea view?" },
                    { native: "Bien sûr. Quel serait le prix pour deux nuits ? Et le petit déjeuner serait-il inclus ?", translation: "Of course. What would the price be for two nights? And would breakfast be included?" },
                ],
            },
        ],
        inlineVocab: [
            { word: "souhaiter", translation: "to wish" },
            { word: "aspirer à", translation: "to aspire to" },
            { word: "idéalement", translation: "ideally" },
            { word: "à ta/votre place", translation: "in your position" },
            { word: "dans un monde idéal", translation: "in an ideal world" },
            { word: "il faudrait", translation: "one should / it would be necessary" },
            { word: "il vaudrait mieux", translation: "it would be better" },
        ],
    },

    // ── fr-g-a2-13 : Si clauses + Depuis + Venir de ──────────────────────────
    {
        id: "fr-g-a2-13",
        level: "A2",
        title: "Si clauses (type 1), depuis, and venir de",
        explanation: `Three structures that deal with how the present relates to time: real conditions, ongoing situations, and things that just happened.

**Si clauses type 1 — real/possible conditions:**
*Si + présent → futur simple* (or imperative, or présent for general truths)

*Si tu travailles, tu **réussiras**.*
*Si il fait beau demain, on **ira** à la plage.*
*Si tu passes devant la boulangerie, **prends** une baguette.*

⚠️ **NEVER use futur after si:**
*Si tu **viendras**...* → WRONG. Always: *Si tu **viens**...*

Compare type 1 (real) vs type 2 (hypothetical — B1 content):
- Type 1: *Si j'ai le temps, je t'appellerai.* (I might have time — real)
- Type 2: *Si j'avais le temps, je t'appellerais.* (I don't have time — hypothetical)

---

**Venir de + infinitive — the very recent past ("just"):**
*Je viens de finir mon repas.* (I just finished my meal — moments ago)
*Il vient d'arriver.* (He just arrived)

Use present of *venir* + de + infinitive. Only for events seconds/minutes ago — not hours or days.

*Imparfait* of venir = "had just": *Je venais d'arriver quand le téléphone a sonné.*

---

**Depuis + present tense — ongoing situations:**
Action started in the past and is **still happening now** → use PRESENT tense (not past as in English).

*J'**habite** à Lyon **depuis** deux ans.* (I have been living in Lyon for two years — and still am)
*Il **apprend** le français **depuis** six mois.*

English uses past tense ("I have been living") — French uses **present tense**.

Test: can you add "and still am/do"? → French present + depuis.

Alternative: *Ça **fait** six mois **que** j'apprends le français.* (same meaning, very common in speech)

*Il y a* = ago (completed): *Il a quitté Paris **il y a** deux ans.* (no longer there)
*Depuis* = for/since (still ongoing): *Il **habite** ici **depuis** deux ans.* (still here)`,
        rules: [
            {
                condition: "Three duration words — the key contrast",
                result: "depuis (ongoing now) | il y a (completed ago) | pendant (completed duration)",
                examples: [
                    { native: "J'habite ici depuis deux ans. (still living here — ongoing → présent + depuis)", speakText: "J'habite ici depuis deux ans.", translation: "I have been living here for two years. (still here)" },
                    { native: "Il a quitté Paris il y a deux ans. (left — done → PC + il y a)", speakText: "Il a quitté Paris il y a deux ans.", translation: "He left Paris two years ago. (no longer there)" },
                    { native: "J'ai attendu pendant une heure. (waiting — done and over → PC + pendant)", speakText: "J'ai attendu pendant une heure.", translation: "I waited for an hour. (waiting is finished)" },
                ],
            },
            {
                condition: "Real/possible condition (if X, then Y will happen)",
                result: "Si + présent → futur simple (NEVER futur after si)",
                examples: [
                    { native: "Si tu viens, on ira au restaurant.", translation: "If you come, we'll go to the restaurant." },
                    { native: "Si vous arrivez tôt, vous aurez une bonne table.", translation: "If you arrive early, you'll get a good table." },
                    { native: "S'il a besoin d'aide, appelle-moi.", translation: "If he needs help, call me." },
                ],
            },
            {
                condition: "Something just happened (seconds/minutes ago)",
                result: "Use venir de + infinitive",
                examples: [
                    { native: "Je viens de finir le rapport.", translation: "I just finished the report." },
                    { native: "Elle vient d'arriver — tu l'as ratée de cinq minutes.", translation: "She just arrived — you missed her by five minutes." },
                    { native: "On vient de recevoir les résultats.", translation: "We just received the results." },
                ],
            },
            {
                condition: "Action started in past and still ongoing now",
                result: "Use PRESENT tense + depuis (not past tense)",
                examples: [
                    { native: "J'habite à Lyon depuis deux ans.", translation: "I have been living in Lyon for two years." },
                    { native: "On se connaît depuis l'université.", translation: "We've known each other since university." },
                    { native: "Ça fait combien de temps que tu apprends le français ?", translation: "How long have you been learning French?" },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "NEVER 'Si j'aurai le temps...' — the most common si clause error. After si, always present tense for type 1.",
            },
            {
                type: "warning",
                content: "Depuis + present tense is one of the most persistent errors for English speakers, even at B2. The instinct to use past tense is strong — resist it. If it's still happening, French uses PRESENT.",
            },
            {
                type: "tip",
                content: "Il y a vs depuis: 'Il a quitté Paris il y a deux ans' (left — done, completed). 'Il habite ici depuis deux ans' (lives — still happening). The distinction is whether the action is ongoing.",
            },
        ],
        examples: [
            { native: "Si tout va bien, on se verra vendredi.", translation: "If all goes well, we'll see each other Friday." },
            { native: "Je viens de rater le bus — ça fait vingt minutes que j'attends le suivant !", translation: "I just missed the bus — I've been waiting twenty minutes for the next one!" },
            { native: "Elle travaille dans cette entreprise depuis 2020.", translation: "She has been working in this company since 2020." },
            { native: "Il n'a pas dormi depuis deux jours.", translation: "He hasn't slept for two days." },
            { native: "Si on part maintenant, on arrivera avant la nuit.", translation: "If we leave now, we'll arrive before nightfall." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Ça va ? Tu as l'air stressé.", translation: "Are you okay? You look stressed." },
                    { native: "Oui, je viens de rater le bus. Et ça fait vingt minutes que j'attends ! Si tu as ta voiture, tu pourrais me déposer au centre ville ? Je travaille là depuis mars.", translation: "Yes, I just missed the bus. And I've been waiting twenty minutes! If you have your car, could you drop me in the city centre? I've been working there since March." },
                ],
            },
        ],
        inlineVocab: [
            { word: "à condition que", translation: "on the condition that" },
            { word: "sinon", translation: "otherwise" },
            { word: "tant que", translation: "as long as" },
            { word: "depuis", translation: "for / since (ongoing)" },
            { word: "il y a", translation: "ago (completed)" },
            { word: "ça fait... que", translation: "it's been... that (duration)" },
            { word: "pendant", translation: "during / for (completed)" },
            { word: "déposer", translation: "to drop off (in a car)" },
        ],
    },
]
