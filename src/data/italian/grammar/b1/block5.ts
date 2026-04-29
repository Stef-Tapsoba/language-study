import { GrammarLesson } from "../../../../types"

export const block5Lessons: GrammarLesson[] = [
    // ── it-g-b1-14 — Verbi di percezione e fare causativo ────────────────────
    {
        id: "it-g-b1-14",
        level: "B1",
        title: "Verbi di Percezione + Infinito e Fare Causativo",
        explanation: {
            target: `Due costruzioni molto frequenti nell'italiano naturale: i verbi di percezione seguiti dall'infinito (ho sentito cantare) e il fare causativo (faccio riparare la macchina).

VERBI DI PERCEZIONE + OGGETTO + INFINITO
verbo di percezione + oggetto diretto + infinito

Ho visto Maria BALLARE. (I saw Maria dancing)
Ho sentito qualcuno BUSSARE alla porta. (I heard someone knocking)
Ho sentito il cuore BATTERE più forte. (I felt my heart beating faster)
Ho osservato il professore SPIEGARE il concetto.

Verbi di percezione che reggono questa costruzione:
vedere / sentire / guardare / ascoltare / osservare / notare

CON I PRONOMI — il pronome va prima del verbo di percezione:
L'ho vista ballare. (I saw her dancing)
L'ho sentito uscire. (I heard him leaving)
Li hai visti passare? (Did you see them go by?)

ALTERNATIVA: infinito o gerundio (entrambi corretti)
Ho visto Maria ballare / ballando. (entrambi corretti)
Il gerundio enfatizza la natura progressiva dell'azione.

FARE CAUSATIVO
fare + infinito = far fare qualcosa (to have sth done / to make sb do sth)

Faccio RIPARARE la macchina. (I'm having the car repaired)
Ha fatto COSTRUIRE un muro. (He had a wall built)
Il professore fa LAVORARE gli studenti. (makes them work)
Questo mi FA RIDERE. (This makes me laugh)

Con agente specificato: fare + inf. + da/a + persona
Ha fatto riparare la macchina DA un meccanico.
Ha fatto preparare la sala AGLI impiegati.

CON I PRONOMI:
La faccio riparare. (I'm having it fixed)
L'ha fatta pulire. (She had it cleaned)

PARTICIPIO DI FATTO — mai concorda nella costruzione causativa
La macchina che ho FATTO riparare. (fatto — invariabile)

LASCIARE + INFINITO
lasciare + infinito = to let / allow
Lasciami parlare. (Let me speak)
Non ti lascio uscire così. (I won't let you go out like that)
Lascialo andare. (Let him go)
Li ho lasciati fare. (I let them do it)`,
            native: `Perception verbs (vedere, sentire, guardare) take a direct object + infinitive. The subject of the infinitive is the preceding object. Fare causativo (fare + infinitive) means to have something done or to make someone do something. Fatto is invariable in causative constructions.`
        },
        rules: [
            {
                condition: "Perception verb + what you perceive someone doing",
                result: "verb of perception + direct object + infinitive (or gerundio)",
                examples: [
                    { native: "Ho sentito qualcuno bussare alla porta.", translation: "I heard someone knocking at the door." },
                    { native: "L'ho vista uscire di corsa.", translation: "I saw her rush out." },
                ]
            },
            {
                condition: "Having something done / making someone do something",
                result: "fare + infinitive (+ da/a + agent if specified)",
                examples: [
                    { native: "Faccio riparare la macchina domani.", translation: "I'm having the car repaired tomorrow." },
                    { native: "Ha fatto costruire un muro dal vicino.", translation: "She had a wall built by the neighbour." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "L'alternanza infinito/gerundio con i verbi di percezione è caratteristica dell'italiano — entrambe le forme sono corrette. Il gerundio sottolinea l'azione in corso." },
            { type: "warning", content: "Il participio passato di 'fatto' nelle costruzioni causative è SEMPRE invariabile: 'La macchina che ho fatto riparare' (non 'fatta'). Regola importante per la scrittura." },
            { type: "tip", content: "La posizione del pronome: va PRIMA del verbo di percezione, non prima dell'infinito. 'L'ho vista uscire' (corretto) — non 'ho vista lei uscire'." },
        ],
        examples: [
            { native: "Hai sentito i vicini cantare ieri sera? Li ho sentiti fino a mezzanotte.", translation: "Did you hear the neighbours singing last night? I heard them until midnight." },
            { native: "Li ho lasciati fare — in fondo era venerdì.", translation: "I let them do it — after all it was Friday." },
            { native: "La finestra? La faccio riparare lunedì.", translation: "The window? I'm having it repaired on Monday." },
            { native: "Mi ha fatto pensare a quando eravamo più giovani.", translation: "It made me think of when we were younger." },
            { native: "Ho osservato il tecnico lavorare per capire come funzionava.", translation: "I watched the technician work to understand how it worked." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Hai sentito qualcosa di strano prima?", translation: "Did you hear something strange earlier?" },
                    { native: "Sì, ho sentito qualcuno bussare, ma quando ho aperto non c'era nessuno. Poi ho visto il gatto passare — l'avevo lasciato uscire senza accorgermene.", translation: "Yes, I heard someone knocking, but when I opened there was no one. Then I saw the cat go by — I'd let it out without noticing." }
                ]
            },
        ],
        inlineVocab: [
            { word: "l'alba", translation: "dawn" },
            { word: "la mezzanotte", translation: "midnight" },
            { word: "in fondo", translation: "after all / basically" },
            { word: "battere", translation: "to beat (heart)" },
            { word: "notare", translation: "to notice" },
            { word: "riparare", translation: "to repair" },
            { word: "costruire", translation: "to build" },
            { word: "divertirsi un sacco", translation: "to have a great time" },
        ],
    },

    // ── it-g-b1-15 — Struttura del discorso B1 ────────────────────────────────
    {
        id: "it-g-b1-15",
        level: "B1",
        title: "Struttura del Discorso B1 — Sfumatura, Qualificazione e Riformulazione",
        explanation: {
            target: `Il salto da A2 a B1 è in gran parte fluidità discorsiva — saper qualificare, organizzare e recuperare in tempo reale. Questi strumenti rendono il parlante riflessivo e strutturato.

SFUMATURA E QUALIFICAZIONE (hedging)
mi sembra che — it seems to me that (neutro)
ho l'impressione che — I have the impression that (neutro)
si potrebbe dire che — one could say that (formale)
in una certa misura — to a certain extent (formale)
in qualche modo — in a way / sort of (neutro)
più o meno — more or less (informale)
per quanto ne so — as far as I know (neutro)
in linea di massima — generally speaking (formale)
a quanto pare — apparently / it seems (neutro)

RAFFORZAMENTO
è evidente che / è innegabile che / non c'è dubbio che
è indiscutibile che / bisogna riconoscere che

APERTURA E INQUADRATURA
per quanto riguarda — as regards
in merito a — regarding (formale)
prima di tutto / anzitutto — first of all

ELENCO E SEQUENZA
da un lato... dall'altro — on one hand... on the other
in primo luogo... in secondo luogo — firstly... secondly
per cominciare... poi... infine — to begin with... then... finally
inoltre — moreover / besides
d'altra parte — on the other hand / moreover

CONCLUSIONE
in definitiva — in short / all in all
in conclusione — in conclusion
in sostanza — essentially
alla fin fine — when all is said and done
quello che è chiaro è che — what is clear is that

RIFORMULAZIONE E CHIARIMENTO
cioè — that is to say / I mean (molto frequente nel parlato)
vale a dire — that is to say (formale)
in altre parole — in other words
per essere più precisi — to be more precise
mi spiego meglio — let me explain better (self-repair)
quello che intendo dire è che — what I mean is

CEDERE UN PUNTO (concedere)
è vero che / non si può negare che / bisogna riconoscere che
ammetto che / certo che... / sì, ma...

NOTA: cioè è il connettore di chiarimento più frequente nell'italiano parlato — funziona come chiarimento, auto-correzione, esitazione o transizione. È l'equivalente dell'inglese 'I mean'.`,
            native: `B1 discourse toolkit: hedging expressions (mi sembra che, in una certa misura), structuring argument (da un lato/dall'altro, in primo luogo), concluding (in definitiva, in sostanza), reformulating (cioè, in altre parole). These tools make the difference between A2 and B1 speaking.`
        },
        rules: [
            {
                condition: "Expressing an opinion with hedging (not stating as absolute fact)",
                result: "mi sembra che / ho l'impressione che / si potrebbe dire che + claim",
                examples: [
                    { native: "Mi sembra che i vantaggi siano reali, ma bisogna sfumarli.", translation: "It seems to me that the advantages are real, but they need qualifying." },
                    { native: "Si potrebbe dire che la situazione è migliorata, in una certa misura.", translation: "One could say that the situation has improved, to a certain extent." },
                ]
            },
            {
                condition: "Structuring a two-sided argument",
                result: "da un lato... dall'altro / in primo luogo... in secondo luogo",
                examples: [
                    { native: "Da un lato, la flessibilità è innegabile. Dall'altro, manca il legame sociale.", translation: "On the one hand, the flexibility is undeniable. On the other, the social bond is missing." },
                    { native: "In primo luogo, i costi sono aumentati. In secondo luogo, i tempi si sono allungati.", translation: "Firstly, costs have increased. Secondly, timescales have lengthened." },
                ]
            },
            {
                condition: "Clarifying or reformulating what you just said",
                result: "cioè / vale a dire / in altre parole / mi spiego meglio",
                examples: [
                    { native: "Non sono completamente contrario — cioè, ho qualche riserva, ma capisco la logica.", translation: "I'm not completely against it — I mean, I have some reservations, but I understand the logic." },
                    { native: "È una questione di priorità, vale a dire di scelte politiche.", translation: "It's a question of priorities, that is to say of political choices." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Cioè è il marcatore di chiarimento più frequente nell'italiano parlato. Usalo liberamente quando hai bisogno di chiarire, correggere o elaborare — suona immediatamente naturale." },
            { type: "tip", content: "La struttura da un lato... dall'altro è l'impalcatura base per qualsiasi argomento bilanciato in italiano. Costruisci ogni posizione con questa struttura prima di concludere con 'in definitiva'." },
            { type: "culture", content: "L'italiano accademico, giornalistico e politico valorizza la capacità di riconoscere l'opposizione (è vero che... tuttavia) prima di mantenere la propria posizione. È un segno di maturità intellettuale." },
        ],
        examples: [
            { native: "Per quanto riguarda il lavoro da remoto, mi sembra che i vantaggi siano reali, ma bisogna sfumarli.", translation: "As regards remote work, it seems to me that the advantages are real, but they need qualifying." },
            { native: "Da un lato, la flessibilità è innegabile. Dall'altro, manca il legame sociale in ufficio.", translation: "On the one hand, the flexibility is undeniable. On the other, the social bond in the office is missing." },
            { native: "È vero che alcuni studi mostrano un aumento della produttività. Bisogna riconoscere, tuttavia, che non è così per tutti.", translation: "It is true that some studies show an increase in productivity. One must acknowledge, however, that this is not the case for everyone." },
            { native: "In definitiva, non si tratta di scegliere tra ufficio e casa, ma di trovare un equilibrio.", translation: "In short, it's not about choosing between office and home, but about finding a balance." },
            { native: "Cioè, ho capito il concetto generale, ma non i dettagli pratici.", translation: "I mean, I understood the general concept, but not the practical details." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Qual è la tua posizione sulla questione?", translation: "What is your position on the issue?" },
                    { native: "Mi sembra che la situazione sia complessa — da un lato ci sono vantaggi reali, dall'altro rischi significativi. È vero che ci sono progressi; tuttavia, in definitiva, bisogna riconoscere che non siamo ancora arrivati.", translation: "It seems to me the situation is complex — on one hand there are real advantages, on the other significant risks. It is true that there is progress; however, in short, one must acknowledge we haven't arrived yet." }
                ]
            },
        ],
        inlineVocab: [
            { word: "sfumare", translation: "to nuance / qualify" },
            { word: "la produttività", translation: "productivity" },
            { word: "la coesione di gruppo", translation: "team cohesion" },
            { word: "generalizzato/a", translation: "widespread" },
            { word: "l'ambiente domestico", translation: "home environment" },
            { word: "in particolare / soprattutto", translation: "in particular / above all" },
            { word: "gli spostamenti", translation: "commutes / journeys" },
            { word: "non si tratta di... ma di", translation: "it's not about... but about" },
        ],
    },

    // ── it-g-b1-16 — L'italiano vivo: gergo, intercalari e varietà regionali ─
    {
        id: "it-g-b1-16",
        level: "B1",
        title: "L'Italiano Vivo — Gergo, Intercalari e Varietà Regionali",
        explanation: {
            target: `Il B1 ti dà la grammatica. Questa unità ti dà l'italiano reale — quello che senti nei film, nella musica e nelle conversazioni quotidiane.

**Gergo comune:**
*figata / figo/a* (cosa/persona fantastica) | *sbattimento* (fatica/seccatura) | *boh* (non lo so) | *mah* (chi sa/vabbè) | *meno male* (per fortuna) | *dai* (su, andiamo) | *mica* (per niente) | *roba* (cose) | *mito* (persona leggendaria)

**Intercalari (fillers):**
*cioè* (chiarimento — "I mean") | *tipo* (approssimazione — "like") | *beh* (transizione — "well") | *praticamente* (sintesi — "basically") | *insomma* (riassunto — "well / so") | *ecco* (conferma — "exactly") | *magari* (forse/speriamo — "maybe / if only")

**Grammatica B1 nel parlato — rimane intatta, si comprime:**
*Non penso che venga.* → identico nel parlato | *Se avessi saputo...* → identico | *Glielo ho detto.* → identico
L'italiano colloquiale non è grammatica sbagliata — è grammatica compressa. Cambia il ritmo, non la struttura.

**Varietà regionali (consapevolezza ricettiva):**
Nord (Milano/Torino/Venezia): accento piatto, ritmo rapido, influenze germaniche | Roma/centro: Romanesco — *aò!, ammazza!, 'na cifra, famo* | Sud/Napoli: accento melodico, *jammo!, uagliò* | Sicilia: influenze arabe e spagnole nel vocabolario`,
            native: `B1 gives you the grammar. This unit gives you real Italian — what you hear in films, music, and everyday conversations.

**Everyday slang:**
*figata / figo/a* (awesome thing / cool person) | *sbattimento* (hassle) | *boh* (dunno) | *mah* (who knows / whatever) | *meno male* (thank goodness) | *dai* (come on) | *mica* (not at all) | *roba* (stuff) | *mito* (legend / cool person)

**Intercalari (fillers):**
*cioè* (clarification — "I mean") | *tipo* (approximation — "like") | *beh* (transition — "well") | *praticamente* (summary — "basically") | *insomma* (hedge — "well / so / all in all") | *ecco* (confirmation — "exactly") | *magari* (possibility — "maybe / if only")

**B1 grammar in spoken Italian — intact, compressed:**
*Non penso che venga.* → identical in speech | *Se avessi saputo...* → identical | *Glielo ho detto.* → identical
Colloquial Italian is not broken grammar — it is compressed grammar. The rhythm changes, not the structure.

**Regional varieties (receptive awareness):**
North (Milan/Turin/Venice): flat accent, faster pace, Germanic loanwords | Rome/centre: Romanesco — aò!, ammazza!, 'na cifra, famo | South/Naples: melodic accent, jammo!, uagliò | Sicily: Arabic and Spanish influence on vocabulary`,
        },
        rules: [
            {
                condition: "Intercalari — discourse fillers in natural speech",
                result: "Place at the start or mid-sentence; mark thinking, clarification, or emphasis",
                examples: [
                    { native: "Cioè, non intendevo offenderti.", translation: "I mean, I didn't mean to offend you." },
                    { native: "Era tipo le tre di notte.", translation: "It was like three in the morning." },
                    { native: "Praticamente non avevo capito niente.", translation: "Basically I hadn't understood anything." },
                    { native: "Beh, dipende dalla situazione.", translation: "Well, it depends on the situation." },
                    { native: "Ecco, questo è esattamente il problema.", translation: "Exactly, that's precisely the problem." },
                ],
            },
            {
                condition: "Key idioms — fare figura and essential fixed expressions",
                result: "Non-literal meanings — receptive comprehension and active production both valuable",
                examples: [
                    { native: "Ho fatto una brutta figura davanti a tutti.", translation: "I made a bad impression in front of everyone." },
                    { native: "Costa un occhio della testa.", translation: "It costs a fortune." },
                    { native: "Non mi va di uscire stasera.", translation: "I don't feel like going out tonight." },
                    { native: "Abbiamo preso due piccioni con una fava.", translation: "We killed two birds with one stone." },
                    { native: "In bocca al lupo! — Crepi!", translation: "Good luck! — Thanks! (lit. may the wolf die!)" },
                ],
            },
        ],
        notes: [
            {
                type: "culture",
                content: "Italy achieved political unification only in 1861 — and linguistic unification has never been complete. Regional languages and dialects (Neapolitan, Sicilian, Venetian, Sardinian) are still spoken by millions. A learner who can navigate both the formal congiuntivo and the Roman ammazza! has truly arrived at B1. The richness of Italian comes from this extraordinary plurality.",
            },
            {
                type: "tip",
                content: "Fare una figura is one of the most culturally loaded Italian expressions. Bella figura (making a good impression) is a core cultural value — in dress, speech, hospitality, and professional conduct. Brutta figura is socially dreaded. Use this idiom freely — Italians will immediately know you understand something deep about the culture.",
            },
            {
                type: "warning",
                content: "Register: gergo and slang are informal. Avoid in professional or formal contexts. Intercalari like cioè, beh, and praticamente are less marked — you'll hear them even in media and educated conversation.",
            },
        ],
        examples: [
            { native: "Beh, praticamente stavo tipo aspettando da ore, cioè, non avevo capito l'orario.", translation: "Well, basically I was like waiting for hours, I mean, I hadn't understood the time." },
            { native: "È una figata! Andiamo assolutamente.", translation: "It's awesome! We're absolutely going." },
            { native: "Non mi va proprio. Che sbattimento.", translation: "I really don't feel like it. What a hassle." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Allora, com'è andata? Pensavo fossi sparito/a!", translation: "So, how did it go? I thought you'd vanished!" },
                    { native: "Beh, praticamente stavo tipo aspettando da ore, cioè, non avevo capito l'orario. Boh, dai, alla fine è andata bene — è stata una figata, insomma. Meno male!", translation: "Well, basically I was like waiting for hours, I mean, I hadn't understood the time. Dunno, come on, in the end it was fine — it was awesome, all in all. Thank goodness!" },
                ],
            },
        ],
        inlineVocab: [
            { word: "figata / figo/a", translation: "something awesome / a cool person (slang)" },
            { word: "sbattimento", translation: "hassle / effort (slang)" },
            { word: "boh", translation: "dunno (hesitation marker)" },
            { word: "meno male", translation: "thank goodness / luckily" },
            { word: "dai", translation: "come on / okay (encouragement)" },
            { word: "cioè", translation: "I mean / like (clarification filler)" },
            { word: "tipo", translation: "like / kind of (approximation filler, informal)" },
            { word: "praticamente", translation: "basically / pretty much (summary filler)" },
            { word: "insomma", translation: "well / so / all in all (hedging filler)" },
            { word: "beh", translation: "well (transition filler)" },
            { word: "fare una figura (bella/brutta)", translation: "to make a (good/bad) impression" },
            { word: "costare un occhio della testa", translation: "to cost a fortune" },
            { word: "non mi va", translation: "I don't feel like it" },
            { word: "in bocca al lupo / crepi", translation: "good luck / thanks (fixed pair)" },
            { word: "prendere due piccioni con una fava", translation: "to kill two birds with one stone" },
        ],
    },
]
