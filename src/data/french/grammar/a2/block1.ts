import { GrammarLesson } from "../../../../types"

// Block 1 — "What Happened?" (Units 1–3)
// Grammar: Passé composé deep dive, Imparfait, PC vs Imparfait contrast

export const block1Lessons: GrammarLesson[] = [
    // ── fr-g-a2-1 : Irregular past participles ──────────────────────────────
    {
        id: "fr-g-a2-1",
        level: "A2",
        title: "Passé composé — irregular past participles",
        explanation: `You already know the passé composé structure from A1. Now it's time to dramatically expand your range with the irregular past participles you'll actually use in conversation.

Regular past participles follow predictable patterns: *parler → parlé, finir → fini, vendre → vendu*. But the verbs you use most — *faire, voir, prendre, mettre, dire, lire, boire* — are all irregular. They must be memorised, but they cluster into families.

**Group 1 — -it (saying/writing things):**
- *dire → dit*, *écrire → écrit*, *lire → lu* (slightly irregular), *décrire → décrit*

**Group 2 — -is (taking/putting/understanding):**
- *prendre → pris*, *comprendre → compris*, *apprendre → appris*, *mettre → mis*, *promettre → promis*

**Group 3 — -ert (opening/offering):**
- *ouvrir → ouvert*, *offrir → offert*, *découvrir → découvert*

**Group 4 — high-frequency -u forms:**
- *voir → vu*, *boire → bu*, *pouvoir → pu*, *vouloir → voulu*, *devoir → dû*, *savoir → su*, *recevoir → reçu*

**Group 5 — standalone essential forms:**
- *faire → fait*, *avoir → eu*, *être → été*, *tenir → tenu*

Memory tip: most irregular past participles are *short* — one syllable. French dropped syllables to make high-frequency verbs faster to say.`,
        rules: [
            {
                condition: "Verbs of saying/writing (Group 1)",
                result: "Past participle ends in -it or -u",
                examples: [
                    { native: "J'ai dit bonjour à tout le monde.", translation: "I said hello to everyone." },
                    { native: "Elle a écrit un long message.", translation: "She wrote a long message." },
                    { native: "Il a lu le journal ce matin.", translation: "He read the newspaper this morning." },
                ],
            },
            {
                condition: "Verbs of taking/putting/understanding (Group 2)",
                result: "Past participle ends in -is",
                examples: [
                    { native: "J'ai pris le train de 8h.", translation: "I took the 8am train." },
                    { native: "Tu as compris la question ?", translation: "Did you understand the question?" },
                    { native: "Elle a mis son manteau.", translation: "She put on her coat." },
                ],
            },
            {
                condition: "High-frequency -u forms (Group 4)",
                result: "Must memorise individually",
                examples: [
                    { native: "J'ai vu Marie hier soir.", translation: "I saw Marie last night." },
                    { native: "On a bu du vin rouge.", translation: "We drank red wine." },
                    { native: "Je n'ai pas pu venir.", translation: "I wasn't able to come." },
                ],
            },
            {
                condition: "Standalone essential forms (Group 5)",
                result: "Fait, eu, été, tenu — memorise these first",
                examples: [
                    { native: "J'ai fait du sport samedi.", translation: "I did sport on Saturday." },
                    { native: "On a eu un problème.", translation: "We had a problem." },
                    { native: "Vous avez été très patients.", translation: "You were very patient." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Run through these aloud every day: J'ai fait, j'ai vu, j'ai pris, j'ai mis, j'ai dit, j'ai écrit, j'ai bu. One week of daily practice and they become automatic.",
            },
            {
                type: "warning",
                content: "Negation wraps around the AUXILIARY, not the past participle. Never say 'Je n'ai mangé pas' — it must be 'Je n'ai PAS mangé'.",
            },
        ],
        examples: [
            { native: "J'ai fait du vélo samedi matin.", translation: "I went cycling Saturday morning." },
            { native: "Tu as vu ce film ?", translation: "Have you seen this film?" },
            { native: "Elle a pris un café au comptoir.", translation: "She had a coffee at the counter." },
            { native: "Nous avons dit la vérité.", translation: "We told the truth." },
            { native: "Il a bu trop de café aujourd'hui.", translation: "He drank too much coffee today." },
            { native: "J'ai reçu ton message ce matin.", translation: "I received your message this morning." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Alors, ton week-end ? Tu as fait quoi ?", translation: "So, your weekend? What did you do?" },
                    { native: "J'ai eu un week-end chargé ! Samedi, j'ai vu un film et dimanche, j'ai pris un brunch avec des amis.", translation: "I had a busy weekend! Saturday I saw a film, and Sunday I had brunch with friends." },
                ],
            },
        ],
        inlineVocab: [
            { word: "raconter", translation: "to tell / recount" },
            { word: "se souvenir de", translation: "to remember" },
            { word: "oublier", translation: "to forget" },
            { word: "chargé(e)", translation: "busy / packed (schedule)" },
            { word: "finalement", translation: "finally / in the end" },
        ],
    },

    // ── fr-g-a2-2 : Passé composé — negation, questions, reflexive verbs ────
    {
        id: "fr-g-a2-2",
        level: "A2",
        title: "Passé composé — negation, questions, and reflexive verbs",
        explanation: `Three areas of the passé composé that need to be fully controlled at A2: negation, question forms, and reflexive verbs.

**Negation in PC:**
*Ne* wraps around the **auxiliary** (avoir/être), not the past participle.
- Je **n'ai pas** mangé. (not: *je n'ai mangé pas*)
- Elle **n'a pas** vu le film.
- Ils **ne sont pas** partis.
- Je **ne me suis pas** levé tôt.

**Questions in PC — three styles:**
| Style | Example | Register |
|---|---|---|
| Intonation | *Tu as vu Marie ?* | Casual spoken |
| Est-ce que | *Est-ce que tu as vu Marie ?* | Neutral |
| Inversion | *As-tu vu Marie ?* | Formal/written |

**Reflexive verbs in PC:**
Reflexive verbs always use **être** as auxiliary. The past participle agrees with the subject.
- Je me suis levé(e) à sept heures.
- Elle s'est habillée rapidement.
- Nous nous sommes retrouvés au café.`,
        rules: [
            {
                condition: "Negation in passé composé",
                result: "Ne...pas wraps around the AUXILIARY (avoir/être)",
                examples: [
                    { native: "Je n'ai pas mangé ce matin.", translation: "I didn't eat this morning." },
                    { native: "Elle n'est pas venue hier.", translation: "She didn't come yesterday." },
                    { native: "Il ne s'est pas souvenu de mon anniversaire.", translation: "He didn't remember my birthday." },
                ],
            },
            {
                condition: "Questions in PC",
                result: "Use intonation (casual), est-ce que (neutral), or inversion (formal)",
                examples: [
                    { native: "Qu'est-ce que tu as fait hier soir ?", translation: "What did you do last night?" },
                    { native: "Où est-ce que tu es allé(e) ce week-end ?", translation: "Where did you go this weekend?" },
                    { native: "As-tu vu Marie récemment ?", translation: "Have you seen Marie recently?" },
                ],
            },
            {
                condition: "Reflexive verbs in PC",
                result: "Always use être; past participle agrees with subject",
                examples: [
                    { native: "Je me suis levé à sept heures.", translation: "I got up at seven o'clock." },
                    { native: "Elle s'est couchée tard.", translation: "She went to bed late." },
                    { native: "Nous nous sommes promenés dans le parc.", translation: "We went for a walk in the park." },
                ],
            },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle", "nous", "vous", "ils / elles"],
            verbs: [
                {
                    label: "se lever (reflexive PC)",
                    forms: [
                        "me suis levé(e)",
                        "t'es levé(e)",
                        "s'est levé / levée",
                        "nous sommes levé(e)s",
                        "vous êtes levé(e)(s)",
                        "se sont levés / levées",
                    ],
                },
            ],
        },
        notes: [
            {
                type: "warning",
                content: "The most common error: 'Je n'ai mangé pas' — WRONG. Negation wraps the auxiliary: 'Je n'ai PAS mangé'.",
            },
            {
                type: "tip",
                content: "For reflexive verbs, say aloud: Je me suis levé, je me suis habillé, je suis parti. The morning routine is excellent practice for reflexive PC.",
            },
        ],
        examples: [
            { native: "Je n'ai pas répondu à son message.", translation: "I didn't reply to his message." },
            { native: "Pourquoi tu n'as pas répondu ?", translation: "Why didn't you reply?" },
            { native: "Elle s'est levée à six heures du matin.", translation: "She got up at six in the morning." },
            { native: "On ne s'est pas vus depuis longtemps.", translation: "We haven't seen each other for a long time." },
            { native: "À quelle heure tu t'es couché(e) ?", translation: "What time did you go to bed?" },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Tu as bien dormi ? Tu t'es levé à quelle heure ?", translation: "Did you sleep well? What time did you get up?" },
                    { native: "Non, je ne me suis pas bien endormi. Je me suis levé à cinq heures — c'était horrible.", translation: "No, I didn't fall asleep well. I got up at five — it was terrible." },
                ],
            },
        ],
        inlineVocab: [
            { word: "s'endormir", translation: "to fall asleep" },
            { word: "se réveiller", translation: "to wake up" },
            { word: "se lever", translation: "to get up" },
            { word: "se coucher", translation: "to go to bed" },
            { word: "se retrouver", translation: "to meet up" },
        ],
    },

    // ── fr-g-a2-3 : L'imparfait — formation and uses ────────────────────────
    {
        id: "fr-g-a2-3",
        level: "A2",
        title: "L'imparfait — formation and uses",
        explanation: `The imparfait (imperfect tense) is the video camera tense — it shows what was happening, what used to happen, or what things were like. The passé composé (Unit 1) is the snapshot tense — it records completed events. Together they tell a full story.

**Formation — the nous rule:**
1. Take the *nous* present tense form
2. Remove *-ons*
3. Add the imparfait endings: -ais, -ais, -ait, -ions, -iez, -aient

*je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient*

The **only true irregular: être** → stem *ét-*: *j'étais, tu étais, il était...*

**The four main uses:**

1. **Habitual/repeated past actions** ("used to..."):
   *Quand j'étais enfant, je jouais au foot tous les week-ends.*

2. **Background description** ("things were like..."):
   *Il faisait beau. La salle était pleine. Elle portait une robe rouge.*

3. **Interrupted action** (ongoing → then PC interrupts):
   *Je dormais quand le téléphone a sonné.*

4. **Ongoing mental/emotional state**:
   *Je croyais qu'il était parti. Elle pensait que c'était fermé.*

**Key time expressions that signal imparfait:**
*toujours, souvent, d'habitude, chaque + [time], quand j'étais enfant/jeune, à l'époque*`,
        rules: [
            {
                condition: "Forming imparfait for any verb except être",
                result: "Take nous present → remove -ons → add endings (-ais/-ais/-ait/-ions/-iez/-aient)",
                heuristic: "faire → faisons → fais- + ais → je faisais · voir → voyons → voy- + ais → je voyais",
                examples: [
                    { native: "Je mangeais souvent dans ce restaurant.", translation: "I used to eat in that restaurant often." },
                    { native: "Il faisait beau ce jour-là.", translation: "The weather was nice that day." },
                    { native: "Nous habitions à Lyon à l'époque.", translation: "We used to live in Lyon at the time." },
                ],
            },
            {
                condition: "Être — the only true irregular",
                result: "Stem is ét- (not the nous form étions)",
                examples: [
                    { native: "J'étais très jeune.", translation: "I was very young." },
                    { native: "C'était délicieux !", translation: "It was delicious!" },
                    { native: "Ils étaient épuisés après le voyage.", translation: "They were exhausted after the trip." },
                ],
            },
            {
                condition: "Describing habitual past actions",
                result: "Use imparfait — test: can you say 'used to' or 'would (habitually)'?",
                examples: [
                    { native: "Chaque été, on allait à la plage.", translation: "Every summer, we used to go to the beach." },
                    { native: "Le dimanche, ma grand-mère cuisinait toujours.", translation: "On Sundays, my grandmother always used to cook." },
                ],
            },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"],
            verbs: [
                { label: "parler", forms: ["parlais", "parlais", "parlait", "parlions", "parliez", "parlaient"] },
                { label: "finir", forms: ["finissais", "finissais", "finissait", "finissions", "finissiez", "finissaient"] },
                { label: "faire", forms: ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"] },
                { label: "être", forms: ["étais", "étais", "était", "étions", "étiez", "étaient"] },
            ],
        },
        notes: [
            {
                type: "tip",
                content: "The je/tu/il/elle endings all sound the same (/ɛ/ as in fête). Only nous (-ions) and vous (-iez) sound different. This is normal — don't panic if you can't hear the difference in speech.",
            },
            {
                type: "culture",
                content: "The imparfait is the tense of memory and nostalgia in French. When French people talk about childhood, they use imparfait instinctively. Understanding it emotionally helps it feel natural.",
            },
        ],
        examples: [
            { native: "Quand j'étais enfant, je jouais dans le jardin.", translation: "When I was a child, I used to play in the garden." },
            { native: "Il faisait froid et il pleuvait.", translation: "It was cold and it was raining." },
            { native: "La salle était pleine de monde.", translation: "The room was full of people." },
            { native: "D'habitude, elle se levait tôt.", translation: "Usually, she used to get up early." },
            { native: "Je ne me sentais pas très bien.", translation: "I wasn't feeling very well." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Tu te souviens de tes vacances d'enfant ?", translation: "Do you remember your childhood holidays?" },
                    { native: "Oh oui ! On allait toujours chez mes grands-parents en Normandie. Ils habitaient dans une grande ferme. C'était magnifique.", translation: "Oh yes! We always used to go to my grandparents' in Normandy. They lived on a big farm. It was wonderful." },
                ],
            },
        ],
        inlineVocab: [
            { word: "l'enfance (f)", translation: "childhood" },
            { word: "le souvenir", translation: "memory / souvenir" },
            { word: "à l'époque", translation: "at the time / back then" },
            { word: "d'habitude", translation: "usually / as a rule" },
            { word: "autrefois", translation: "in the old days" },
        ],
    },

    // ── fr-g-a2-4 : Passé composé vs imparfait — the contrast ───────────────
    {
        id: "fr-g-a2-4",
        level: "A2",
        title: "Passé composé vs imparfait — telling the difference",
        explanation: `This is the single biggest conceptual leap at A2 — and the key to sounding like a real French speaker rather than a textbook.

Both tenses refer to the past, but they frame it differently:

| Passé composé | Imparfait |
|---|---|
| Plot moves forward | Scene / background |
| Completed event | Ongoing state or habit |
| "And then..." | "Meanwhile... at the time..." |
| Answers: *What happened?* | Answers: *What was it like?* |

**Three essential patterns:**

**Pattern 1 — Interrupted action:**
*Imparfait (ongoing)* + *quand* + *PC (what interrupted)*
→ *Je dormais quand le téléphone a sonné.*

**Pattern 2 — Scene + events:**
*Imparfait sentences set the scene* → *PC events fire one after another*
→ *Il était tard et il pleuvait. Soudain, quelqu'un a frappé à la porte.*

**Pattern 3 — Habit broken by single event:**
*Imparfait (baseline)* + *PC (departure from habit)*
→ *D'habitude, je prenais le métro. Mais ce matin-là, j'ai décidé de marcher.*

**Stative verbs** (être, avoir, savoir, penser, vouloir, aimer) are almost always imparfait — unless they mark a *change of state*:
- *Il était nerveux* (imparfait — ongoing)
- *Il est devenu nerveux* (PC — change happened)`,
        rules: [
            {
                condition: "Something happened / plot moved forward",
                result: "Use passé composé",
                examples: [
                    { native: "Soudain, elle a crié.", translation: "Suddenly, she screamed." },
                    { native: "J'ai rencontré Marie hier.", translation: "I met Marie yesterday." },
                    { native: "On a pris un café ensemble.", translation: "We had a coffee together." },
                ],
            },
            {
                condition: "Background, description, ongoing state, or habit",
                result: "Use imparfait",
                examples: [
                    { native: "Il faisait beau ce jour-là.", translation: "The weather was nice that day." },
                    { native: "J'étais fatigué.", translation: "I was tired." },
                    { native: "D'habitude je prenais le bus.", translation: "I usually took the bus." },
                ],
            },
            {
                condition: "Interrupted action: something was happening when something else happened",
                result: "Imparfait (ongoing) + quand + PC (interruption)",
                examples: [
                    { native: "Je dormais quand le téléphone a sonné.", translation: "I was sleeping when the phone rang." },
                    { native: "Elle lisait quand il est entré.", translation: "She was reading when he came in." },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "Never say 'J'ai été fatigué' for an ongoing past state — fatigue is a state, not an event. It must be 'J'étais fatigué'.",
            },
            {
                type: "warning",
                content: "'Soudain' (suddenly) signals a specific moment → always PC. 'Soudain il pleuvait' is wrong — it must be 'Soudain il a commencé à pleuvoir'.",
            },
            {
                type: "tip",
                content: "Ask yourself: is the verb describing a snapshot (event/completed) or a video clip (ongoing/background)? Snapshot → PC. Video → imparfait.",
            },
        ],
        examples: [
            { native: "Il faisait beau quand nous sommes arrivés.", translation: "The weather was nice when we arrived." },
            { native: "Je lisais dans le parc quand il a commencé à pleuvoir.", translation: "I was reading in the park when it started to rain." },
            { native: "D'habitude elle arrivait à l'heure, mais lundi, elle est arrivée en retard.", translation: "She usually arrived on time, but on Monday she arrived late." },
            { native: "J'étais fatigué, donc je me suis couché tôt.", translation: "I was tired, so I went to bed early." },
            { native: "Soudain, une voiture a surgi du virage.", translation: "Suddenly, a car shot out of the bend." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "T'as l'air fatigué — tu as bien dormi ?", translation: "You look tired — did you sleep well?" },
                    { native: "Non, j'avais une nuit horrible. J'étais en train de dormir quand j'ai entendu un bruit énorme dehors.", translation: "No, I had a terrible night. I was sleeping when I heard a huge noise outside." },
                ],
            },
        ],
        inlineVocab: [
            { word: "tout à coup", translation: "suddenly" },
            { word: "soudain", translation: "suddenly" },
            { word: "pendant ce temps", translation: "meanwhile" },
            { word: "être en train de + inf", translation: "to be in the middle of doing" },
            { word: "se rendre compte (de)", translation: "to realise" },
            { word: "remarquer", translation: "to notice" },
            { word: "inattendu(e)", translation: "unexpected" },
        ],
    },
]
