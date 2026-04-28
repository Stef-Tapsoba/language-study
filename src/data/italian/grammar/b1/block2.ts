import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
    // ── it-g-b1-4 — Congiuntivo presente: volontà ─────────────────────────────
    {
        id: "it-g-b1-4",
        level: "B1",
        title: "Congiuntivo Presente — Volontà e Necessità",
        explanation: {
            target: `Il congiuntivo è un modo verbale, non un tempo. Si attiva quando il verbo principale esprime soggettività: volontà, emozione, dubbio, possibilità. Al B1 si impara il congiuntivo presente.

PRE-GRAMMATICA — ascolta prima
"Voglio che tu VENGA stasera. Mia madre vuole che SIAMO tutti a casa."
"Il medico consiglia che FACCIA sport. È meglio che LEI ASPETTI."
Queste forme diverse dall'indicativo si chiamano congiuntivo.

FORMAZIONE REGOLARE
Verbi -ARE: -i, -i, -i, -iamo, -iate, -ino (es. parli, parli, parli, parliamo, parliate, parlino)
Verbi -ERE/-IRE: -a, -a, -a, -iamo, -iate, -ano (es. scriva, parta)

Nota: io/tu/lui/lei hanno la stessa forma — il contesto chiarisce.

IRREGOLARI AD ALTA FREQUENZA (da memorizzare)
essere → sia, sia, sia, siamo, siate, siano
avere → abbia, abbia, abbia, abbiamo, abbiate, abbiano
andare → vada, vada, vada, andiamo, andiate, vadano
fare → faccia, faccia, faccia, facciamo, facciate, facciano
potere → possa, possa, possa, possiamo, possiate, possano
volere → voglia / venire → venga / sapere → sappia
dare → dia / stare → stia

DUE CONDIZIONI PER IL CONGIUNTIVO
1. Il verbo principale esprime volontà, necessità, emozione o dubbio
2. I soggetti sono DIVERSI

Stesso soggetto → INFINITO: Voglio PARTIRE.
Soggetti diversi → che + CONGIUNTIVO: Voglio che TU PARTA.

VERBI CHE ATTIVANO IL CONGIUNTIVO (volontà/necessità)
volere che / desiderare che / preferire che / sperare che
chiedere che / insistere che / esigere che / consigliare che
suggerire che / proporre che / augurarsi che
bisogna che / è necessario che / è importante che
è fondamentale che / è meglio che / occorre che

⚠️ NOTA PER CHI HA STUDIATO ITALIANO A SCUOLA
Se hai sentito dire che il congiuntivo è «opzionale» o «letterario» — è sbagliato. Nell'italiano educato quotidiano è sistematicamente atteso. Questo curricolo lo insegna come obbligatorio.`,
            native: `The congiuntivo (subjunctive) is triggered when there are two different subjects and the main verb expresses will, emotion, doubt, or possibility. Same subject → infinitive. Different subjects → che + congiuntivo.`
        },
        rules: [
            {
                condition: "Same subject after verb of will",
                result: "Use infinitive — no che, no congiuntivo",
                examples: [
                    { native: "Voglio partire subito.", translation: "I want to leave right away." },
                    { native: "Preferisco restare a casa.", translation: "I prefer to stay at home." },
                ]
            },
            {
                condition: "Different subjects after verb of will",
                result: "che + congiuntivo presente",
                examples: [
                    { native: "Voglio che tu parta subito.", translation: "I want you to leave right away." },
                    { native: "Preferisco che restiate a casa.", translation: "I prefer you to stay at home." },
                ]
            },
            {
                condition: "Impersonal expression of necessity/importance",
                result: "bisogna che / è necessario che / è meglio che + congiuntivo",
                examples: [
                    { native: "Bisogna che tu finisca i compiti prima di uscire.", translation: "You need to finish your homework before going out." },
                    { native: "È importante che voi siate presenti.", translation: "It is important that you are present." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Il congiuntivo è un MODO, non un tempo. Pensa: 'viene attivato da certi verbi che segnalano soggettività, non da certi momenti nel tempo.'" },
            { type: "tip", content: "Irregolari da memorizzare subito: sia (essere), abbia (avere), vada (andare), faccia (fare), possa (potere), venga (venire). Questi compaiono in ogni conversazione." },
            { type: "warning", content: "Nell'italiano informale parlato, alcuni usano l'indicativo dopo penso che/voglio che. Ma nell'italiano standard scritto e parlato con cura, il congiuntivo è obbligatorio. Impara la forma corretta." },
        ],
        conjugationTable: {
            pronouns: ["che io", "che tu", "che lui/lei", "che noi", "che voi", "che loro"],
            verbs: [
                { label: "parlare", forms: ["parli", "parli", "parli", "parliamo", "parliate", "parlino"] },
                { label: "scrivere", forms: ["scriva", "scriva", "scriva", "scriviamo", "scriviate", "scrivano"] },
                { label: "essere", forms: ["sia", "sia", "sia", "siamo", "siate", "siano"] },
                { label: "avere", forms: ["abbia", "abbia", "abbia", "abbiamo", "abbiate", "abbiano"] },
                { label: "andare", forms: ["vada", "vada", "vada", "andiamo", "andiate", "vadano"] },
                { label: "fare", forms: ["faccia", "faccia", "faccia", "facciamo", "facciate", "facciano"] },
            ]
        },
        examples: [
            { native: "Voglio che venga alla riunione.", translation: "I want him to come to the meeting." },
            { native: "Lei preferisce che partiamo prima.", translation: "She prefers us to leave earlier." },
            { native: "Il medico consiglia che faccia sport.", translation: "The doctor advises her to do sport." },
            { native: "Mi auguro che tutto vada bene.", translation: "I hope everything goes well." },
            { native: "È necessario che tu sia presente.", translation: "It is necessary for you to be present." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Mio padre vuole che tutta la famiglia sia lì prima di venerdì sera.", translation: "My father wants the whole family to be there by Friday evening." },
                    { native: "Capisco. Preferisco che andiamo sabato mattina — così finisco il rapporto venerdì.", translation: "I understand. I prefer we go on Saturday morning — that way I finish the report on Friday." }
                ]
            },
        ],
        inlineVocab: [
            { word: "esigere", translation: "to demand" },
            { word: "insistere che", translation: "to insist that" },
            { word: "bisogna che", translation: "it is necessary that" },
            { word: "occorre che", translation: "it is needed that" },
            { word: "augurarsi che", translation: "to hope / wish that" },
            { word: "fondamentale", translation: "fundamental / essential" },
            { word: "puntuale", translation: "on time / punctual" },
        ],
    },

    // ── it-g-b1-5 — Congiuntivo presente: emozione e dubbio ──────────────────
    {
        id: "it-g-b1-5",
        level: "B1",
        title: "Congiuntivo Presente — Emozione, Dubbio e Possibilità",
        explanation: {
            target: `Il congiuntivo si usa anche dopo verbi ed espressioni di EMOZIONE, DUBBIO e POSSIBILITÀ — perché queste esprimono soggettività, non certezza.

IL PRINCIPIO GUIDA: CERTEZZA vs SOGGETTIVITÀ
Certezza → INDICATIVO: So che VIENE. / È certo che È vero.
Dubbio/emozione → CONGIUNTIVO: Dubito che VENGA. / Ho paura che SIA vero.

VERBI DI EMOZIONE (che + congiuntivo)
essere contento/a che / essere triste che / dispiacere che
sorprendere che / avere paura che / temere che
essere orgoglioso/a che / essere deluso/a che / essere sollevato/a che

VERBI DI DUBBIO/POSSIBILITÀ (che + congiuntivo)
dubitare che / non credere che / non pensare che
è possibile che / è probabile che / è improbabile che
sembra che / pare che / non è detto che

CONTRASTO AFFERMATIVO/NEGATIVO
Penso che SIA bravo. (standard — cong.) / Penso che È bravo. (informale parlato)
Non penso che SIA bravo. (cong. — sempre)

⚠️ NOTA: In italiano informale, penso che + indicativo è frequente nel parlato. Nell'italiano standard e scritto si usa il congiuntivo. Entrambi si sentono — insegniamo la forma corretta.

ESPRESSIONI IMPERSONALI CON EMOZIONE
è un peccato che / è strano che / è normale che
è raro che / è incredibile che / è ingiusto che

NOTA PER CHI HA STUDIATO ITALIANO A SCUOLA
Il contrasto "penso che + indicativo (informale) vs congiuntivo (standard)" e la regola "non penso che → sempre congiuntivo" raramente vengono insegnate esplicitamente. Sono contenuto genuinamente nuovo anche per chi ha già studiato.`,
            native: `Congiuntivo is also triggered by verbs of emotion (fear, happiness, surprise) and doubt (dubito che, è possibile che, sembra che). The key principle: certainty → indicativo; subjectivity/uncertainty → congiuntivo.`
        },
        rules: [
            {
                condition: "Certainty or established fact",
                result: "Indicativo — so che, è certo che, vedo che",
                examples: [
                    { native: "So che viene domani.", translation: "I know he's coming tomorrow." },
                    { native: "È certo che il progetto è approvato.", translation: "It is certain that the project is approved." },
                ]
            },
            {
                condition: "Emotion (contento, paura, dispiacere, sorpresa...)",
                result: "che + congiuntivo",
                examples: [
                    { native: "Sono contento che tu sia venuto.", translation: "I'm happy that you came." },
                    { native: "Mi dispiace che tu non possa restare.", translation: "I'm sorry you can't stay." },
                ]
            },
            {
                condition: "Doubt, belief, or uncertain possibility",
                result: "che + congiuntivo",
                examples: [
                    { native: "Dubito che abbia ragione.", translation: "I doubt he's right." },
                    { native: "È possibile che ci sia un errore.", translation: "It's possible there's a mistake." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Sembra che e pare che sono molto frequenti nel giornalismo e nell'italiano parlato colto — impara queste formule come chunks: 'Sembra che la situazione sia grave. Pare che abbiano già deciso.'" },
            { type: "warning", content: "Non confondere: 'Penso CHE VENGA' (cong. — standard) vs 'Penso DI VENIRE' (infinito — stesso soggetto). La preposizione di + infinito segnala stesso soggetto." },
        ],
        examples: [
            { native: "Sono contento che tu sia qui.", translation: "I'm happy you're here." },
            { native: "Ho paura che non ce la faccia in tempo.", translation: "I'm afraid he won't make it in time." },
            { native: "Mi sorprende che faccia così caldo a novembre.", translation: "It surprises me that it's so warm in November." },
            { native: "Non credo che sappia la verità.", translation: "I don't think he knows the truth." },
            { native: "Sembra che la situazione sia grave.", translation: "It seems that the situation is serious." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Ho sentito che Carlo lascia il lavoro — ti sorprende?", translation: "I heard Carlo is leaving his job — does that surprise you?" },
                    { native: "Mi sorprende che se ne vada — pensavo che gli piacesse. Ma non sono sicura che sia definitivo.", translation: "It surprises me that he's leaving — I thought he liked it. But I'm not sure it's final." }
                ]
            },
        ],
        inlineVocab: [
            { word: "sorprendente", translation: "surprising" },
            { word: "è un peccato", translation: "it's a shame" },
            { word: "sollevato/a", translation: "relieved" },
            { word: "deluso/a", translation: "disappointed" },
            { word: "convenire (a qn.)", translation: "to suit / be right for sb" },
            { word: "definitivo/a", translation: "definitive / final" },
            { word: "pare che", translation: "it seems that / apparently" },
            { word: "francamente", translation: "honestly / frankly" },
        ],
    },

    // ── it-g-b1-6 — Congiuntivo: congiunzioni ─────────────────────────────────
    {
        id: "it-g-b1-6",
        level: "B1",
        title: "Congiuntivo Presente — Congiunzioni di Finalità e Concessione",
        explanation: {
            target: `Alcune congiunzioni grammaticali attivano SEMPRE il congiuntivo — non perché ci sia un verbo di volontà o emozione, ma per la natura della congiunzione stessa.

FINALITÀ (scopo)
Stesso soggetto → PER + infinito: Lavoro per finire in tempo.
Soggetti diversi → PERCHÉ/AFFINCHÉ + congiuntivo: Te lo spiego perché tu capisca.

perché (scopo) — neutro/informale
affinché — formale/scritto

Ti scrivo PERCHÉ TU SAPPIA cosa è successo.
Parliamo piano PERCHÉ GLI STUDENTI CAPISCANO.
Abbiamo organizzato tutto AFFINCHÉ LEI SI SENTA a suo agio.

CONCESSIONE (anche se, nonostante)
benché + congiuntivo = although (più comune, neutro)
sebbene + congiuntivo = although (leggermente formale/letterario)
nonostante (che) + congiuntivo = despite
anche se + INDICATIVO (attenzione: NON congiuntivo)

TABELLA DELLE TRE CONGIUNZIONI DI CONCESSIONE
benché — neutro/moderno — la scelta standard: MASTERED benché
sebbene — formale/leggermente desueto — stessa funzione di benché
nonostante (che) — flessibile: può seguire un sostantivo O il congiuntivo

Benché SIA stanco, è venuto.
Sebbene la situazione SIA difficile, ci sono progressi.
Nonostante la pioggia, siamo usciti. (+ sostantivo — no congiuntivo)
Nonostante PIOVESSE, siamo usciti. (+ congiuntivo)
Anche se sono stanco, uscirò. (indicativo — anche se ≠ benché)

CONGIUNZIONI TEMPORALI E CONDIZIONALI
prima che + congiuntivo — before (azione non ancora avvenuta)
finché non + congiuntivo — until (futuro/ipotetico)
a meno che (non) + congiuntivo — unless
a condizione che + congiuntivo — provided that
senza che + congiuntivo — without (diversi soggetti)
nel caso in cui + congiuntivo — in case

Chiamami PRIMA CHE TU PARTA.
Aspetta FINCHÉ NON ARRIVI.
Vengo, A MENO CHE NON PIOVA.
È partito SENZA CHE NESSUNO LO SAPESSE.

FINCHÉ vs FINCHÉ NON
Ho lavorato finché C'ERA luce. (indicativo — fatto passato)
Aspetta finché non ARRIVI. (congiuntivo — futuro/incerto)`,
            native: `Certain conjunctions always trigger the congiuntivo: perché/affinché (purpose with different subjects), benché/sebbene (concession), prima che, finché non, a meno che, senza che. These are grammatically governed — the congiuntivo is obligatory, regardless of meaning.`
        },
        rules: [
            {
                condition: "Purpose conjunction, different subjects",
                result: "perché / affinché + congiuntivo (NOT per + infinito)",
                examples: [
                    { native: "Te lo spiego perché tu capisca.", translation: "I'm explaining it to you so that you understand." },
                    { native: "Parliamo piano perché gli studenti capiscano.", translation: "We speak slowly so that students understand." },
                ]
            },
            {
                condition: "Concession — although/even though",
                result: "benché / sebbene + congiuntivo (NOT anche se — that takes indicativo)",
                examples: [
                    { native: "Benché sia stanca, ha continuato a lavorare.", translation: "Although she was tired, she kept working." },
                    { native: "Sebbene la situazione sia difficile, restiamo ottimisti.", translation: "Although the situation is difficult, we remain optimistic." },
                ]
            },
            {
                condition: "Temporal/conditional: before, until, unless",
                result: "prima che / finché non / a meno che (non) + congiuntivo",
                examples: [
                    { native: "Chiamami prima che tu parta.", translation: "Call me before you leave." },
                    { native: "Vengo, a meno che non piova.", translation: "I'll come, unless it rains." },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Padroneggia benché — è il più comune. Sebbene e nonostante che le imparerai dalla lettura. Non sovraccaricarti con tutte e tre all'inizio." },
            { type: "warning", content: "A meno che non — la doppia negazione è obbligatoria nella forma standard anche se nell'italiano informale a volte si omette il 'non'. Impara: 'a meno che non venga'." },
            { type: "tip", content: "Stesso soggetto → per + infinito. Soggetti diversi → perché + congiuntivo. Questa distinzione è una delle più produttive e testabili del B1." },
        ],
        examples: [
            { native: "Ho deciso di andare all'estero, benché sia una decisione difficile.", translation: "I've decided to go abroad, although it's a difficult decision." },
            { native: "Parto tra tre mesi, a meno che non ci siano problemi con il visto.", translation: "I'm leaving in three months, unless there are problems with the visa." },
            { native: "Gliel'ho detto perché capisse le mie ragioni.", translation: "I told her so that she would understand my reasons." },
            { native: "È partito senza che nessuno lo sapesse.", translation: "He left without anyone knowing." },
            { native: "Aspetto finché non arrivi — poi me ne vado.", translation: "I'll wait until you arrive — then I'm leaving." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Hai qualcosa di organizzato finché non trovi casa là?", translation: "Do you have something organised until you find a place there?" },
                    { native: "Sì, un'amica mi ospita affinché io possa cercare con calma. Voglio partire prima che cominci l'autunno.", translation: "Yes, a friend is putting me up so I can look without rushing. I want to leave before autumn begins." }
                ]
            },
        ],
        inlineVocab: [
            { word: "l'estero", translation: "abroad" },
            { word: "a meno che (non)", translation: "unless" },
            { word: "finché non", translation: "until" },
            { word: "prima che", translation: "before" },
            { word: "senza che", translation: "without" },
            { word: "benché / sebbene", translation: "although" },
            { word: "affinché", translation: "in order that (formal)" },
            { word: "ospitare", translation: "to host / put up" },
            { word: "il visto", translation: "visa" },
        ],
    },

    // ── it-g-b1-7 — Congiuntivo: superlativo e relativa incerta ──────────────
    {
        id: "it-g-b1-7",
        level: "B1",
        title: "Congiuntivo Presente — Superlativo e Relativa con Referente Incerto",
        explanation: {
            target: `Due altri contesti importanti attivano il congiuntivo: il superlativo relativo e le relative con referente incerto.

1. CONGIUNTIVO DOPO IL SUPERLATIVO
Quando una relativa segue un superlativo o un'espressione come l'unico/il primo, il congiuntivo esprime giudizio soggettivo.

[Superlativo / l'unico / il primo / l'ultima cosa] + che + congiuntivo

È il film migliore che ABBIA mai visto.
È l'unica persona che SAPPIA davvero ascoltarmi.
È la cosa più strana che ABBIA mai sentito.
È stato il primo studente che ABBIA capito il concetto.
È l'unico posto dove mi SENTA davvero a casa.

2. CONGIUNTIVO IN RELATIVE CON REFERENTE INCERTO
Referente incerto (cerco, voglio trovare) → congiuntivo
Referente certo/esistente → indicativo

Cerco qualcuno che PARLI giapponese. (incerto — forse non esiste)
Ho trovato qualcuno che PARLA giapponese. (certo — esiste)
C'è un posto dove POSSIAMO parcheggiare? (incerto)
Conosco un posto dove POSSIAMO parcheggiare. (certo)

REVISIONE COMPLETA DEI TRIGGER DEL CONGIUNTIVO B1
Volontà → volere che, preferire che, chiedere che
Necessità → bisogna che, è necessario che, è meglio che
Emozione → essere contento che, avere paura che, dispiacere che
Dubbio → dubitare che, non credere che, è possibile che
Finalità → perché, affinché
Concessione → benché, sebbene, nonostante
Temporali (futuro) → prima che, finché non, a meno che
Superlativo / unico → il migliore che, l'unico che
Relativa incerta → cercare qualcuno che...
Certezza → sapere che, è certo che → INDICATIVO`,
            native: `Two final B1 contexts for the congiuntivo: (1) after superlatives and l'unico/il primo (subjective judgement); (2) in relative clauses with an uncertain or non-existent referent. This completes the full B1 congiuntivo system.`
        },
        rules: [
            {
                condition: "Relative clause after superlative or l'unico/il primo",
                result: "congiuntivo — expresses subjective judgement",
                examples: [
                    { native: "È il libro migliore che abbia letto quest'anno.", translation: "It's the best book I've read this year." },
                    { native: "Sei l'unica persona che capisca davvero la situazione.", translation: "You're the only person who truly understands the situation." },
                ]
            },
            {
                condition: "Relative clause — referent uncertain or sought (not yet found)",
                result: "congiuntivo — existence unconfirmed",
                examples: [
                    { native: "Cerco un appartamento che sia tranquillo e non troppo caro.", translation: "I'm looking for a flat that is quiet and not too expensive." },
                    { native: "Conosci qualcuno che sappia riparare computer?", translation: "Do you know someone who knows how to fix computers?" },
                ]
            },
        ],
        notes: [
            { type: "tip", content: "Test rapido per la relativa: chiedi 'so già CHE esiste?' — Sì → indicativo. No / forse → congiuntivo. 'Ho trovato un appartamento che ha il balcone' (so che esiste) vs 'Cerco un appartamento che abbia il balcone' (forse non esiste)." },
            { type: "tip", content: "La tabella di revisione dei trigger del congiuntivo (sopra) è il tuo documento di riferimento. Prima del CP2, assicurati di poter produrre almeno una frase per ogni categoria." },
        ],
        examples: [
            { native: "È il miglior ristorante che conosca in questa città.", translation: "It's the best restaurant I know in this city." },
            { native: "È l'unica cosa che mi preoccupi davvero.", translation: "It's the only thing that really worries me." },
            { native: "Cerco qualcuno che possa aiutarmi con la traduzione.", translation: "I'm looking for someone who can help me with the translation." },
            { native: "È stato il viaggio più bello che abbia mai fatto.", translation: "It was the most beautiful trip I've ever taken." },
            { native: "È fondamentale che ci sia una vera cucina — non solo un angolo cottura.", translation: "It's essential there's a proper kitchen — not just a kitchenette." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Cerco un appartamento che sia tranquillo, non troppo caro e vicino al centro.", translation: "I'm looking for a flat that is quiet, not too expensive and close to the centre." },
                    { native: "Dubito che troviamo tutto questo sotto 1000 euro, ma cercherò prima che gli appartamenti migliori vadano via.", translation: "I doubt we'll find all that under 1000 euros, but I'll look before the best flats go." }
                ]
            },
        ],
        inlineVocab: [
            { word: "il quartiere", translation: "neighbourhood" },
            { word: "esigere", translation: "to demand" },
            { word: "la richiesta", translation: "a request" },
            { word: "gradevole", translation: "pleasant" },
            { word: "l'angolo cottura", translation: "kitchenette" },
            { word: "davvero", translation: "truly / really" },
            { word: "fondamentale", translation: "essential / fundamental" },
        ],
    },
]
