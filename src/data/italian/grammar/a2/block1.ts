import { GrammarLesson } from "../../../../types"

export const block1Lessons: GrammarLesson[] = [
    // ── it-g-a2-1 — Passato prossimo: irregular past participles ──────────────
    {
        id: "it-g-a2-1",
        level: "A2",
        title: "Passato Prossimo — Irregular Past Participles",
        explanation: `The passato prossimo is Italian's main spoken past tense. You already know the regular participles (-ato, -uto, -ito). Now master the irregulars — they are all high-frequency verbs you need every day.

AUXILIARY RECAP
• avere → transitive verbs (have a direct object)
• essere → motion, change of state, reflexives — participle agrees with subject

IRREGULAR GROUPS

Group 1 — ending -to (most frequent)
fare → fatto    dire → detto    scrivere → scritto
leggere → letto    mettere → messo    aprire → aperto
offrire → offerto    scoprire → scoperto

Group 2 — ending -so/-sto
rispondere → risposto    chiedere → chiesto
rimanere → rimasto (essere)    stare → stato (essere)

Group 3 — ending -so (vedere family)
vedere → visto    perdere → perso    prendere → preso
decidere → deciso    dividere → diviso

Group 4 — highest frequency (avere/essere)
essere → stato (essere)    avere → avuto (avere)
venire → venuto (essere)    volere → voluto (avere)
potere → potuto (avere)    dovere → dovuto (avere)
sapere → saputo (avere)    conoscere → conosciuto (avere)
vivere → vissuto (avere or essere)

Note on ESSERE agreement: the participle changes endings with essere:
• sono andato (m.sg.) / sono andata (f.sg.) / siamo andati / siamo andate`,
        rules: [
            {
                condition: "Verb uses AVERE",
                result: "Participle does NOT agree: ho fatto, ho detto, ho visto",
                examples: [
                    { native: "Ho fatto colazione.", translation: "I had breakfast." },
                    { native: "Hai detto la verità?", translation: "Did you tell the truth?" },
                    { native: "Ha visto quel film.", translation: "He saw that film." },
                ]
            },
            {
                condition: "Verb uses ESSERE",
                result: "Participle agrees with subject in gender & number",
                examples: [
                    { native: "Sono andato al mercato.", translation: "I went to the market. (m)" },
                    { native: "Sono andata al mercato.", translation: "I went to the market. (f)" },
                    { native: "Siamo rimasti a casa.", translation: "We stayed home. (m/mixed)" },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Agreement with essere is AUDIBLE in Italian — sono andatO vs sono andatA. Train both forms from day one." },
            { type: "tip", content: "vivere accepts both auxiliaries: ho vissuto a Londra (common in the North) / sono vissuto/a a Londra (South and literary)." },
            { type: "warning", content: "The most common errors are choosing the wrong auxiliary (avere vs essere) and forgetting to agree the participle with essere verbs." },
        ],
        conjugationTable: {
            pronouns: ["io", "tu", "lui/lei", "noi", "voi", "loro"],
            verbs: [
                { label: "fare (avere)", forms: ["ho fatto", "hai fatto", "ha fatto", "abbiamo fatto", "avete fatto", "hanno fatto"] },
                { label: "venire (essere)", forms: ["sono venuto/a", "sei venuto/a", "è venuto/a", "siamo venuti/e", "siete venuti/e", "sono venuti/e"] },
                { label: "alzarsi (essere)", forms: ["mi sono alzato/a", "ti sei alzato/a", "si è alzato/a", "ci siamo alzati/e", "vi siete alzati/e", "si sono alzati/e"] },
            ]
        },
        examples: [
            { native: "Ho preso un caffè al bar stamattina.", translation: "I had a coffee at the bar this morning." },
            { native: "Hai chiesto informazioni all'ufficio?", translation: "Did you ask for information at the office?" },
            { native: "Non ho risposto al suo messaggio.", translation: "I didn't reply to his/her message." },
            { native: "Siamo rimasti a casa tutto il weekend.", translation: "We stayed home all weekend." },
            { native: "Mi sono alzato/a tardi sabato.", translation: "I got up late on Saturday." },
            { native: "Com'è andata la serata?", translation: "How did the evening go?" },
        ],
    },

    // ── it-g-a2-2 — Questions, negation, and reflexives in passato prossimo ──
    {
        id: "it-g-a2-2",
        level: "A2",
        title: "Passato Prossimo — Questions, Negation & Reflexives",
        explanation: `NEGATION: non goes BEFORE the auxiliary
• Non ho dormito bene. (I didn't sleep well.)
• Non sono andato/a in palestra. (I didn't go to the gym.)
• Non ha detto niente. (She didn't say anything.)

QUESTIONS: use rising intonation or interrogative words
• Hai mangiato? — Cosa hai fatto ieri?
• Dove sei andato/a ieri sera? — Con chi hai cenato?
• A che ora ti sei svegliato/a? — Come ti è andata?

REFLEXIVE VERBS in passato prossimo:
All reflexives use essere. The participle agrees with the subject.

alzarsi — mi sono alzato/a, ti sei alzato/a, si è alzato/a,
          ci siamo alzati/e, vi siete alzati/e, si sono alzati/e

Key reflexives to master:
• svegliarsi (to wake up)     • farsi la doccia (to have a shower)
• vestirsi (to get dressed)   • divertirsi (to have fun)
• sentirsi (to feel)          • rendersi conto (to realise)`,
        rules: [
            {
                condition: "Negation in passato prossimo",
                result: "non + auxiliary + participle",
                examples: [
                    { native: "Non ho capito niente.", translation: "I didn't understand anything." },
                    { native: "Non sono rimasto/a a lungo.", translation: "I didn't stay long." },
                ]
            },
            {
                condition: "Question with interrogative word",
                result: "Interrogative + auxiliary + subject + participle",
                examples: [
                    { native: "Cosa hai fatto nel weekend?", translation: "What did you do at the weekend?" },
                    { native: "Perché non hai risposto?", translation: "Why didn't you answer?" },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Com'è andata? / Come ti è andata? — essential expressions for asking how something went. Learn them as fixed phrases." },
            { type: "tip", content: "Reflexive chain for morning routine: Mi sono svegliato/a → mi sono alzato/a → mi sono fatto/a la doccia → mi sono vestito/a → sono uscito/a." },
        ],
        examples: [
            { native: "Cosa hai fatto nel weekend?", translation: "What did you do at the weekend?" },
            { native: "Dove sei andato/a ieri sera?", translation: "Where did you go last night?" },
            { native: "Non ho potuto dormire — c'era troppo rumore.", translation: "I couldn't sleep — there was too much noise." },
            { native: "Mi sono svegliato/a alle sette e mi sono fatto/a la doccia.", translation: "I woke up at seven and had a shower." },
            { native: "Vi siete divertiti alla festa?", translation: "Did you have fun at the party?" },
            { native: "Com'è andata l'intervista?", translation: "How did the interview go?" },
        ],
    },

    // ── it-g-a2-3 — L'imperfetto ──────────────────────────────────────────────
    {
        id: "it-g-a2-3",
        level: "A2",
        title: "L'Imperfetto — Formation and Uses",
        explanation: `The imperfetto is the tense of memory, atmosphere, habit, and ongoing background. It is formed from the infinitive stem — simpler than French.

REGULAR FORMATION
-are verbs: stem + -avo/-avi/-ava/-avamo/-avate/-avano
-ere verbs: stem + -evo/-evi/-eva/-evamo/-evate/-evano
-ire verbs: stem + -ivo/-ivi/-iva/-ivamo/-ivate/-ivano

Examples: parlavo, leggevo, dormivo

THE ONLY TRUE IRREGULAR: essere
ero, eri, era, eravamo, eravate, erano

"HISTORICAL ROOTS": fare, dire, bere
These look irregular but use Latin stems — same as noi in the present:
• facciamo → fac-: facevo, facevi, faceva, facevamo, facevate, facevano
• diciamo → dic-: dicevo, dicevi, diceva...
• beviamo → bev-: bevevo, bevevi, beveva...

Also: tradurre → traducevo, condurre → conducevo

OTHER HIGH-FREQUENCY FORMS
avevo, volevo, potevo, dovevo, sapevo, venivo, andavo, stavo, uscivo

FOUR USES
1. Habitual past: Da bambino giocavo a calcio ogni pomeriggio.
2. Background state/description: Faceva freddo. La piazza era piena di gente.
3. Interrupted action (preview — Unit 3): Dormivo quando il telefono ha squillato.
4. Mental states: Credevo che fosse chiuso. Non sapevo che eri lì.

Time expressions that signal the imperfetto:
sempre, spesso, di solito, ogni, tutti i, da bambino/a, all'epoca, una volta`,
        rules: [
            {
                condition: "Habitual/repeated past action",
                result: "Imperfetto — 'used to' or 'would always'",
                examples: [
                    { native: "Da piccolo andavo al mare ogni estate.", translation: "As a child I went to the sea every summer." },
                    { native: "La domenica mia nonna cucinava sempre.", translation: "On Sundays my grandmother always cooked." },
                ]
            },
            {
                condition: "Background state or description",
                result: "Imperfetto — scene-setting, no specific moment",
                examples: [
                    { native: "Faceva freddo e la strada era vuota.", translation: "It was cold and the street was empty." },
                    { native: "Portava un cappotto rosso.", translation: "She was wearing a red coat." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Think of the imperfetto as a camera filming. No start or end — just duration. The passato prossimo is a snapshot: click. Unit 3 explores the contrast." },
            { type: "tip", content: "fare → facevo, dire → dicevo, bere → bevevo are NOT arbitrary exceptions. The stems come from Latin (facere, dicere, bibere) and survive in noi forms: facciamo, diciamo, beviamo." },
        ],
        conjugationTable: {
            pronouns: ["io", "tu", "lui/lei", "noi", "voi", "loro"],
            verbs: [
                { label: "parlare", forms: ["parlavo", "parlavi", "parlava", "parlavamo", "parlavate", "parlavano"] },
                { label: "leggere", forms: ["leggevo", "leggevi", "leggeva", "leggevamo", "leggevate", "leggevano"] },
                { label: "dormire", forms: ["dormivo", "dormivi", "dormiva", "dormivamo", "dormivate", "dormivano"] },
                { label: "essere", forms: ["ero", "eri", "era", "eravamo", "eravate", "erano"] },
                { label: "fare", forms: ["facevo", "facevi", "faceva", "facevamo", "facevate", "facevano"] },
            ]
        },
        examples: [
            { native: "Da bambino abitavo in un piccolo paese in Umbria.", translation: "As a child I lived in a small village in Umbria." },
            { native: "D'estate andavamo al lago ogni anno.", translation: "In summer we went to the lake every year." },
            { native: "Eravamo in cinque in famiglia.", translation: "There were five of us in the family." },
            { native: "Non sapevo la risposta.", translation: "I didn't know the answer." },
            { native: "Facevo sport ogni pomeriggio quando ero al liceo.", translation: "I did sport every afternoon when I was at secondary school." },
            { native: "Come stavi in quel periodo?", translation: "How were you doing during that period?" },
        ],
    },

    // ── it-g-a2-4 — PP vs Imperfetto contrast + stavo + gerundio ─────────────
    {
        id: "it-g-a2-4",
        level: "A2",
        title: "Passato Prossimo vs Imperfetto — The Contrast + Stavo + Gerundio",
        explanation: `This is the most important distinction in A2 Italian.

THE CORE METAPHOR
• Passato prossimo = the plot moving forward. Something HAPPENED. Click. Click.
• Imperfetto = the scene running. The world as it was. Continuous, no endpoint.

PATTERN 1 — INTERRUPTED ACTION (most important)
Imperfetto (what was ongoing) + quando + Passato prossimo (what broke it)
→ Dormivo quando il telefono ha squillato.
→ Leggevo nel parco quando ha cominciato a piovere.
→ Pranzavamo quando è entrata Maria.

STAVO + GERUNDIO (progressive form)
For even stronger emphasis on "I was in the middle of...":
-are verbs: -ando (mangiando, guardando)
-ere verbs: -endo (leggendo, vedendo)
-ire verbs: -endo (dormendo, uscendo)
Irregulars: facendo, dicendo, bevendo

Stavo dormendo quando ha squillato = I was (in the middle of) sleeping when it rang.
Both forms are correct — stavo + gerundio is more emphatic.

PATTERN 2 — BACKGROUND + EVENTS
Imperfetto (how things were) → then Passato prossimo / Passato prossimo / Passato prossimo
→ Era tardi e pioveva. All'improvviso qualcuno ha bussato alla porta. Ho aperto...

PATTERN 3 — HABIT vs ONE-TIME EVENT
Di solito prendevo l'autobus. Ma quella mattina HO DECISO di camminare.
(imperfetto = the norm; passato prossimo = the break from it)

SIGNAL WORDS
PP: all'improvviso, di colpo, d'un tratto, a quel punto, poi, allora, infine
Imperfetto: sempre, spesso, di solito, ogni, mentre, all'epoca, una volta`,
        rules: [
            {
                condition: "Interrupted action",
                result: "Imperfetto + quando + Passato prossimo",
                examples: [
                    { native: "Stavo dormendo quando ha squillato il telefono.", translation: "I was sleeping when the phone rang." },
                    { native: "Guidavi quando hai visto l'incidente?", translation: "Were you driving when you saw the accident?" },
                ]
            },
            {
                condition: "All'improvviso / Di colpo → sudden event",
                result: "Use passato prossimo — sudden events are completed moments",
                examples: [
                    { native: "All'improvviso ha cominciato a piovere.", translation: "Suddenly it started to rain." },
                    { native: "Di colpo si è fermata.", translation: "Suddenly she stopped." },
                ]
            },
        ],
        notes: [
            { type: "warning", content: "Never: 'Il telefono squillava' for a single phone call — a phone ringing once is a completed event → passato prossimo: ha squillato." },
            { type: "warning", content: "Never: 'Stavo mangiando la pizza ogni domenica' — habits use simple imperfetto: mangiavo." },
            { type: "tip", content: "Stavo + gerundio cannot be used for habits or states. Only for actions truly in progress at a specific moment." },
        ],
        examples: [
            { native: "Era una sera di ottobre. Faceva freddo e pioveva leggermente.", translation: "It was an October evening. It was cold and raining slightly." },
            { native: "Stavo tornando a casa quando ho visto Marco.", translation: "I was on my way home when I saw Marco." },
            { native: "Di solito bevevo il caffè a casa, ma quella mattina sono andato al bar.", translation: "I usually had coffee at home, but that morning I went to the bar." },
            { native: "Leggevo il giornale quando è arrivata la notizia.", translation: "I was reading the newspaper when the news arrived." },
            { native: "Stava mangiando i miei avanzi seduto al tavolo.", translation: "He was eating my leftovers seated at the table." },
            { native: "Alla fine mi sono addormentato/a sul divano.", translation: "In the end I fell asleep on the sofa." },
        ],
    },
]
