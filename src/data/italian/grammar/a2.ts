import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "it-g-a2-1",
        level: "A2",
        title: "Il Passato Prossimo",
        explanation: {
            native: `The passato prossimo is the main past tense used in spoken Italian for completed actions. It is formed with an auxiliary verb (avere or essere in the present tense) plus the past participle of the main verb.

PAST PARTICIPLES — regular formation:
  -are verbs → -ato:   parlare → parlato,   mangiare → mangiato
  -ere verbs → -uto:   vendere → venduto,   cadere → caduto
  -ire verbs → -ito:   dormire → dormito,   finire → finito

IRREGULAR PAST PARTICIPLES — must memorise:
  essere → stato       avere → avuto        fare → fatto
  dire → detto         scrivere → scritto   mettere → messo
  prendere → preso     vedere → visto       venire → venuto
  aprire → aperto      chiudere → chiuso    leggere → letto
  bere → bevuto        scegliere → scelto   rispondere → risposto

WHICH AUXILIARY?

AVERE — used by most transitive verbs:
  Ho mangiato una pizza.       I ate a pizza.
  Hai visto il film?           Did you see the film?
  Abbiamo fatto i compiti.     We did the homework.

ESSERE — used by intransitive verbs of motion and change of state:
  andare, venire, arrivare, partire, entrare, uscire, salire, scendere,
  nascere, morire, restare, tornare, diventare, stare, essere

  Sono andato al mercato.      I went to the market.
  Lei è arrivata in ritardo.   She arrived late.
  Siamo tornati tardi.         We came back late.

With essere, the past participle agrees with the subject:
  Lui è partito. → Lei è partita. → Loro sono partiti. → Loro sono partite.

REFLEXIVE VERBS always use essere:
  Mi sono alzato alle sette.   I got up at seven.
  Si è vestita in fretta.      She got dressed quickly.

NEGATION — non before the auxiliary:
  Non ho mangiato.             I didn't eat.
  Non sono uscito ieri.        I didn't go out yesterday.`,
            target: `Il passato prossimo è il tempo passato principale nell'italiano parlato. Si forma con l'ausiliare avere o essere al presente + il participio passato.

PARTICIPI PASSATI — formazione regolare:
  verbi in -are → -ato: parlare → parlato
  verbi in -ere → -uto: vendere → venduto
  verbi in -ire → -ito: dormire → dormito

PARTICIPI IRREGOLARI — da memorizzare:
  essere → stato, avere → avuto, fare → fatto, dire → detto,
  prendere → preso, vedere → visto, venire → venuto, aprire → aperto

QUALE AUSILIARE?

AVERE — per la maggior parte dei verbi transitivi:
  Ho mangiato una pizza. / Hai visto il film?

ESSERE — per i verbi di moto e cambiamento di stato:
  andare, venire, arrivare, partire, entrare, uscire, nascere, morire...
  Sono andato al mercato. / Lei è arrivata in ritardo.

Con essere, il participio concorda con il soggetto:
  Lui è partito. / Lei è partita. / Loro sono partiti/partite.

I verbi riflessivi usano sempre essere:
  Mi sono alzato alle sette. / Si è vestita in fretta.

NEGAZIONE:
  Non ho mangiato. / Non sono uscito ieri.`
        },
        examples: [
            { native: "Ieri ho mangiato una pizza buonissima.", translation: "Yesterday I ate a really delicious pizza." },
            { native: "Lei è arrivata in ritardo alla riunione.", translation: "She arrived late to the meeting. (essere — agreement: arrivata)" },
            { native: "Abbiamo visto un film bellissimo.", translation: "We saw a beautiful film." },
            { native: "Mi sono alzato tardi stamattina.", translation: "I got up late this morning. (reflexive — sempre essere)" },
            { native: "Non sono uscito ieri sera.", translation: "I didn't go out last night." },
            { native: "Hai fatto i compiti?", translation: "Did you do the homework? (irregular: fatto)" },
        ]
    },
    {
        id: "it-g-a2-2",
        level: "A2",
        title: "L'Imperfetto",
        explanation: {
            native: `The imperfetto describes past habits, ongoing situations, background descriptions, and states. It contrasts with the passato prossimo, which marks completed events.

FORMATION
Take the infinitive, remove -re, and add the imperfetto endings:
  -vo, -vi, -va, -vamo, -vate, -vano

  parlare:  parlavo, parlavi, parlava, parlavamo, parlavate, parlavano
  scrivere: scrivevo, scrivevi, scriveva, scrivevamo, scrivevate, scrivevano
  dormire:  dormivo, dormivi, dormiva, dormivamo, dormivate, dormivano

IRREGULAR STEMS:
  essere:  ero, eri, era, eravamo, eravate, erano
  fare:    facevo, facevi, faceva, facevamo, facevate, facevano
  bere:    bevevo, bevevi...
  dire:    dicevo, dicevi...
  tradurre: traducevo...

WHEN TO USE THE IMPERFETTO

1. HABITUAL OR REPEATED PAST ACTIONS ('used to', 'would always'):
  Quando ero bambino, giocavo a calcio ogni giorno.
  When I was a child, I used to play football every day.

2. ONGOING BACKGROUND SITUATION:
  Pioveva e faceva freddo.
  It was raining and it was cold.

3. DESCRIPTIONS IN THE PAST (states, emotions, physical conditions):
  Era stanco e aveva fame.
  He was tired and hungry.

4. WITH EXPRESSIONS OF FREQUENCY OR HABIT:
  sempre, spesso, di solito, ogni giorno, a volte, da bambino
  Di solito prendevo l'autobus.   I used to take the bus.

KEY CONTRAST WITH PASSATO PROSSIMO:
  Dormivo quando ha squillato il telefono.
  I was sleeping (imperfetto — background) when the phone rang (passato prossimo — event).
  See lesson it-g-a2-3 for the full contrast.`,
            target: `L'imperfetto descrive abitudini passate, situazioni continue, descrizioni di sfondo e stati. Si contrappone al passato prossimo.

FORMAZIONE
Si toglie -re all'infinito e si aggiungono le terminazioni:
  -vo, -vi, -va, -vamo, -vate, -vano

  parlare → parlavo, parlavi, parlava, parlavamo, parlavate, parlavano
  scrivere → scrivevo...     dormire → dormivo...

RADICALI IRREGOLARI:
  essere → ero, eri, era, eravamo, eravate, erano
  fare → facevo...    bere → bevevo...    dire → dicevo...

QUANDO SI USA L'IMPERFETTO?

1. Azioni abituali o ripetute nel passato:
  Quando ero bambino, giocavo a calcio ogni giorno.

2. Situazione di sfondo in corso:
  Pioveva e faceva freddo.

3. Descrizioni nel passato (stati, emozioni):
  Era stanco e aveva fame.

4. Con espressioni di frequenza o abitudine:
  sempre, spesso, di solito, ogni giorno
  Di solito prendevo l'autobus.

CONTRASTO CON IL PASSATO PROSSIMO:
  Dormivo (imperfetto — sfondo) quando ha squillato il telefono (passato prossimo — evento).
  Vedi la lezione it-g-a2-3 per il contrasto completo.`
        },
        examples: [
            { native: "Quando ero piccolo, abitavo a Milano.", translation: "When I was little, I lived in Milan." },
            { native: "Faceva freddo e nevicava.", translation: "It was cold and it was snowing. (background description)" },
            { native: "Lei lavorava in un ospedale all'epoca.", translation: "She used to work in a hospital at that time." },
            { native: "Ogni estate andavamo al mare.", translation: "Every summer we used to go to the sea." },
            { native: "Avevo dieci anni e adoravo la musica.", translation: "I was ten years old and I loved music." },
        ]
    },
    {
        id: "it-g-a2-3",
        level: "A2",
        title: "Passato Prossimo vs Imperfetto",
        explanation: {
            native: `Using the passato prossimo and imperfetto together correctly is the central challenge of A2 Italian. Both describe the past but they do completely different jobs.

THE CORE DISTINCTION

PASSATO PROSSIMO — completed events, actions that move the story forward:
  → What happened? What did someone do?
  → Actions with a clear beginning or end
  → A sequence of events

IMPERFETTO — background, states, descriptions, habits:
  → What was it like? What was going on?
  → Ongoing situations without a defined end
  → Repeated or habitual actions

THE FILM ANALOGY
The imperfetto is the camera slowly describing a scene. The passato prossimo is when something suddenly happens and changes the scene.

WORKING TOGETHER IN A SENTENCE
The imperfetto sets the scene; the passato prossimo interrupts or advances it:

  Leggeva quando ha squillato il telefono.
  He was reading (imp.) when the phone rang (p.p.).

  Dormivo quando sei arrivato.
  I was sleeping (imp.) when you arrived (p.p.).

  Mentre mangiavamo, è entrato un uomo strano.
  While we were eating (imp.), a strange man came in (p.p.).

SIGNAL WORDS

Passato prossimo:           Imperfetto:
improvvisamente (suddenly)  sempre (always)
un giorno (one day)         spesso (often)
ieri (yesterday)            ogni giorno (every day)
una volta (once)            di solito (usually)
poi (then)                  a quei tempi (in those days)
alla fine (finally)         quando ero bambino (when I was a child)

COMMON PATTERNS

State interrupted by event:
  Mangiavo quando è entrato.       I was eating when he came in.

State leading to action:
  Avevo fame, quindi ho mangiato.  I was hungry, so I ate.

Change of state (passato prossimo):
  All'improvviso ha avuto paura.   Suddenly she became afraid.`,
            target: `Usare il passato prossimo e l'imperfetto insieme è la sfida principale del livello A2.

LA DISTINZIONE PRINCIPALE

PASSATO PROSSIMO — eventi completati, azioni che fanno avanzare la storia:
  → Cosa è successo? Cosa ha fatto qualcuno?
  → Azioni con un inizio o una fine chiara

IMPERFETTO — sfondo, stati, descrizioni, abitudini:
  → Com'era? Cosa stava succedendo?
  → Situazioni continue senza fine definita

L'ANALOGIA DEL FILM
L'imperfetto = la telecamera che descrive la scena.
Il passato prossimo = qualcosa che accade improvvisamente.

I DUE TEMPI INSIEME:
  Leggeva (imp.) quando ha squillato il telefono (p.p.).
  Dormivo (imp.) quando sei arrivato (p.p.).
  Mentre mangiavamo (imp.), è entrato un uomo strano (p.p.).

PAROLE INDICATRICI:
Passato prossimo: improvvisamente, un giorno, ieri, una volta, poi
Imperfetto: sempre, spesso, ogni giorno, di solito, a quei tempi`
        },
        examples: [
            { native: "Leggevo quando ha chiamato.", translation: "I was reading (imp.) when he called (p.p.)." },
            { native: "Faceva bello quindi siamo usciti.", translation: "The weather was nice (imp.) so we went out (p.p.)." },
            { native: "Quando ero bambina, andavo sempre al parco.", translation: "When I was a child, I always went to the park. (habit → imperfetto)" },
            { native: "Ieri ho lavorato tutto il giorno.", translation: "Yesterday I worked all day. (completed → passato prossimo)" },
            { native: "Parlava con un'amica quando è arrivato l'autobus.", translation: "She was talking with a friend when the bus arrived." },
            { native: "All'improvviso ha cominciato a piovere.", translation: "Suddenly it started to rain. (sudden event → passato prossimo)" },
        ]
    },
    {
        id: "it-g-a2-4",
        level: "A2",
        title: "Il Futuro Semplice",
        explanation: {
            native: `The futuro semplice expresses future events, predictions, and promises. It is more formal and less common than the present tense used for near-future plans in everyday speech, but it is essential for predictions, weather forecasts, and formal contexts.

FORMATION
For -are and -ere verbs: drop the final -e of the infinitive (and change -a- to -e- for -are verbs), then add the endings.
For -ire verbs: drop the final -e and add the same endings.
  -ò, -ai, -à, -emo, -ete, -anno

  parlare:  parlerò, parlerai, parlerà, parleremo, parlerete, parleranno
  scrivere: scriverò, scriverai, scriverà...
  dormire:  dormirò, dormirai, dormirà...

IRREGULAR STEMS — endings stay the same, stem changes:
  essere   → sar-    sarò, sarai, sarà...
  avere    → avr-    avrò, avrai, avrà...
  andare   → andr-   andrò, andrai, andrà...
  fare     → far-    farò, farai, farà...
  venire   → verr-   verrò, verrai, verrà...
  vedere   → vedr-   vedrò, vedrai, vedrà...
  potere   → potr-   potrò, potrai, potrà...
  volere   → vorr-   vorrò, vorrai, vorrà...
  dovere   → dovr-   dovrò, dovrai, dovrà...
  sapere   → sapr-   saprò, saprai, saprà...
  tenere   → terr-   terrò, terrai, terrà...
  rimanere →rimarr- rimarrò...
  bere     → berr-   berrò...

FUTURO SEMPLICE vs PRESENTE FOR FUTURE
In everyday Italian, the present tense is commonly used for near-future plans:
  Domani vado al cinema.     Tomorrow I'm going to the cinema. (present — common)
  Domani andrò al cinema.    Tomorrow I will go to the cinema. (futuro — more formal)

The futuro semplice is preferred for:
  → Predictions and weather: Domani pioverà. (It will rain tomorrow.)
  → Distant or uncertain future: Un giorno capirò tutto.
  → After quando and se (unlike English):
    Quando arriverai, chiamami.   When you arrive, call me.
  → Expressing probability in the present:
    Saranno le tre.   It must be three o'clock. (I think/probably)`,
            target: `Il futuro semplice esprime eventi futuri, previsioni e promesse.

FORMAZIONE
Per i verbi in -are e -ere: si toglie la -e finale dell'infinito (e la -a- diventa -e- per i verbi in -are), poi si aggiungono le terminazioni.
  -ò, -ai, -à, -emo, -ete, -anno

  parlare → parlerò, parlerai, parlerà, parleremo, parlerete, parleranno
  scrivere → scriverò...    dormire → dormirò...

RADICALI IRREGOLARI:
  essere → sar- (sarò)     avere → avr- (avrò)
  andare → andr- (andrò)   fare → far- (farò)
  venire → verr- (verrò)   potere → potr- (potrò)
  volere → vorr- (vorrò)   dovere → dovr- (dovrò)

FUTURO SEMPLICE vs PRESENTE PER IL FUTURO
Nella vita quotidiana il presente si usa spesso per il futuro prossimo:
  Domani vado al cinema. (presente — comune)
  Domani andrò al cinema. (futuro — più formale)

Il futuro semplice è preferito per:
  → Previsioni: Domani pioverà.
  → Futuro lontano o incerto: Un giorno capirò tutto.
  → Dopo quando e se: Quando arriverai, chiamami.
  → Probabilità nel presente: Saranno le tre.`
        },
        examples: [
            { native: "Domani farà bello.", translation: "Tomorrow the weather will be nice. (prediction)" },
            { native: "L'anno prossimo andrò in Giappone.", translation: "Next year I will go to Japan." },
            { native: "Quando arriverai, ti chiamo.", translation: "When you arrive, I'll call you. (quando + futuro)" },
            { native: "Sarà difficile, ma ce la faremo.", translation: "It will be difficult, but we'll manage." },
            { native: "Saranno le dieci — è tardi!", translation: "It must be ten o'clock — it's late! (probability)" },
            { native: "Non dimenticherò mai questo momento.", translation: "I will never forget this moment." },
        ]
    },
    {
        id: "it-g-a2-5",
        level: "A2",
        title: "Il Condizionale Presente",
        explanation: {
            native: `The condizionale presente expresses polite requests, wishes, hypothetical situations, and advice. It is the equivalent of 'would' in English and is essential for polite communication.

FORMATION
Same irregular stems as the futuro semplice + these endings:
  -rei, -resti, -rebbe, -remmo, -reste, -rebbero

  parlare:  parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero
  scrivere: scriverei, scriveresti...
  essere:   sarei, saresti, sarebbe, saremmo, sareste, sarebbero
  avere:    avrei, avresti, avrebbe...
  andare:   andrei, andresti...
  fare:     farei, faresti...
  venire:   verrei, verresti...
  potere:   potrei, potresti...
  volere:   vorrei, vorresti...
  dovere:   dovrei, dovresti...

FOUR KEY USES AT A2

1. POLITE REQUESTS — the most important use:
  Vorrei un caffè, per favore.           I would like a coffee, please.
  Potrei avere il conto?                 Could I have the bill?
  Potrebbe parlare più lentamente?       Could you speak more slowly?

2. WISHES AND DESIRES:
  Mi piacerebbe vivere a Roma.           I would like to live in Rome.
  Vorrebbe imparare a suonare il piano.  He would like to learn to play the piano.

3. ADVICE WITH DOVERE:
  Dovresti riposare di più.              You should rest more.
  Dovrebbe andare dal medico.            He should go to the doctor.

4. HYPOTHETICAL SITUATIONS (with se — see it-g-a2-14):
  Se avessi tempo, viaggerei di più.    If I had time, I would travel more.

CONDIZIONALE vs PRESENTE vs FUTURO
  Voglio un caffè.        I want a coffee.         (presente — diretto)
  Vorrei un caffè.        I would like a coffee.   (condizionale — educato)
  Prenderò un caffè.      I'll have a coffee.      (futuro — deciso)

COMMON CONDITIONAL PHRASES
  Vorrei...               I would like...
  Mi piacerebbe...        I would love...
  Sarebbe bello.          That would be nice.
  Potresti...?            Could you...?
  Bisognerebbe...         One should... / It would be necessary...
  Al posto tuo, io...     If I were you, I would...`,
            target: `Il condizionale presente esprime richieste educate, desideri, situazioni ipotetiche e consigli.

FORMAZIONE
Stessi radicali irregolari del futuro semplice + terminazioni:
  -rei, -resti, -rebbe, -remmo, -reste, -rebbero

  parlare → parlerei, parleresti, parlerebbe...
  essere → sarei...    avere → avrei...
  potere → potrei...   volere → vorrei...   dovere → dovrei...

QUATTRO USI PRINCIPALI

1. RICHIESTE EDUCATE:
  Vorrei un caffè, per favore.
  Potrebbe parlare più lentamente?

2. DESIDERI:
  Mi piacerebbe vivere a Roma.

3. CONSIGLI CON DOVERE:
  Dovresti riposare di più.
  Dovrebbe andare dal medico.

4. SITUAZIONI IPOTETICHE (con se):
  Se avessi tempo, viaggerei di più.

ESPRESSIONI UTILI:
  Vorrei... / Mi piacerebbe... / Sarebbe bello.
  Potresti...? / Al posto tuo, io...`
        },
        examples: [
            { native: "Vorrei prenotare un tavolo per due.", translation: "I would like to book a table for two." },
            { native: "Potresti ripetere, per favore?", translation: "Could you repeat, please?" },
            { native: "Dovresti dormire di più.", translation: "You should sleep more." },
            { native: "Mi piacerebbe vivere in Italia.", translation: "I would love to live in Italy." },
            { native: "Sarebbe fantastico!", translation: "That would be fantastic!" },
            { native: "Al posto tuo, parlerei con il professore.", translation: "If I were you, I would talk to the teacher." },
        ]
    },
    {
        id: "it-g-a2-6",
        level: "A2",
        title: "I Pronomi Diretti",
        explanation: {
            native: `Direct object pronouns replace a noun that directly receives the action of the verb. They avoid repetition and make speech natural.

THE FORMS
  mi / m'    me
  ti / t'    you (informal)
  lo / l'    him / it (masculine)
  la / l'    her / it (feminine)
  ci         us
  vi         you (plural)
  li         them (masculine)
  le         them (feminine)

POSITION — before the conjugated verb:
  Vedi Maria? — Sì, la vedo.          Do you see Maria? — Yes, I see her.
  Prendi l'autobus? — No, non lo prendo. Do you take the bus? — No, I don't take it.

Before a vowel, lo and la contract to l':
  Aiuti Andrea? — Sì, l'aiuto.        Do you help Andrea? — Yes, I help him/her.

POSITION WITH INFINITIVES
The pronoun attaches to the infinitive (which drops its final -e):
  Voglio vederlo domani.               I want to see him tomorrow.
  Puoi aiutarmi?                       Can you help me?
  Non voglio farlo.                    I don't want to do it.

POSITION IN THE PASSATO PROSSIMO
The pronoun goes before the auxiliary:
  Hai visto il film? — Sì, l'ho visto.     Did you see the film? — Yes, I saw it.
  Ha preso le chiavi? — No, non le ha prese.

AGREEMENT IN THE PASSATO PROSSIMO
When a direct object pronoun precedes avere, the past participle agrees:
  Ho visto Maria. → L'ho vista.            (la → feminine → vista)
  Ho comprato i biglietti. → Li ho comprati. (li → masc. pl. → comprati)
  Ho comprato le mele. → Le ho comprate.   (le → fem. pl. → comprate)

NEGATIVE — non before pronoun + verb:
  Non lo vedo.           I don't see him.
  Non l'ho visto.        I didn't see him.`,
            target: `I pronomi diretti sostituiscono un nome che riceve direttamente l'azione del verbo.

LE FORME:
  mi/m' (me), ti/t' (te), lo/l' (lui/lo), la/l' (lei/la),
  ci (noi), vi (voi), li (loro masc.), le (loro fem.)

POSIZIONE — prima del verbo coniugato:
  Vedi Maria? — Sì, la vedo.
  Non lo prendo.

Prima di una vocale, lo/la → l':
  Aiuti Andrea? — Sì, l'aiuto.

CON L'INFINITO — il pronome si attacca all'infinito (che perde la -e finale):
  Voglio vederlo. / Puoi aiutarmi? / Non voglio farlo.

AL PASSATO PROSSIMO — il pronome precede l'ausiliare:
  Hai visto il film? — Sì, l'ho visto.

ACCORDO AL PASSATO PROSSIMO:
Con avere, il participio passato concorda con il pronome diretto:
  L'ho vista. (la → femminile)
  Li ho comprati. (li → masc. plurale)
  Le ho comprate. (le → fem. plurale)`
        },
        examples: [
            { native: "Conosci questo ristorante? — Sì, lo conosco bene.", translation: "Do you know this restaurant? — Yes, I know it well." },
            { native: "Mi ha chiamato ieri sera.", translation: "She called me last night." },
            { native: "Vado a vederli domani.", translation: "I'm going to see them tomorrow." },
            { native: "Hai letto questo libro? — No, non l'ho ancora letto.", translation: "Have you read this book? — No, I haven't read it yet." },
            { native: "L'ho vista stamattina.", translation: "I saw her this morning. (la → vista — feminine agreement)" },
            { native: "Non ci capisce.", translation: "He doesn't understand us." },
        ]
    },
    {
        id: "it-g-a2-7",
        level: "A2",
        title: "I Pronomi Indiretti",
        explanation: {
            native: `Indirect object pronouns replace a noun introduced by a — they indicate to whom or for whom something is done. They are essential for talking about communication, giving, and showing.

THE FORMS
  mi     to me
  ti     to you (informal)
  gli    to him
  le     to her / to you (formal)
  ci     to us
  vi     to you (plural)
  gli    to them (also loro — more formal, placed after verb)

Note: gli means both 'to him' and 'to them' in modern Italian. Le means 'to her'.

POSITION — before the conjugated verb:
  Gli parlo ogni giorno.          I speak to him every day.
  Le ho scritto un messaggio.     I wrote her a message.
  Non mi ha risposto.             He didn't answer me.

COMMON VERBS THAT TAKE INDIRECT OBJECTS (+ a + person):
  parlare a      → gli/le parlare       to speak to him/her
  scrivere a     → gli/le scrivere      to write to him/her
  telefonare a   → gli/le telefonare    to call him/her
  rispondere a   → gli/le rispondere    to answer him/her
  dare a         → gli/le dare          to give to him/her
  dire a         → gli/le dire          to say to him/her
  chiedere a     → gli/le chiedere      to ask him/her
  mandare a      → gli/le mandare       to send to him/her
  mostrare a     → gli/le mostrare      to show him/her
  piacere a      → gli/le piacere       to please / to like

PIACERE WITH INDIRECT PRONOUNS
Piacere always works with indirect pronouns:
  Mi piace il caffè.              I like coffee. (coffee pleases me)
  Gli piacciono i gatti.          He likes cats.
  Le piace studiare.              She likes studying.

COD vs COI
  La vedo.           I see her.       (la = direct — no a)
  Le parlo.          I speak to her.  (le = indirect — replaces a + person)

NO AGREEMENT WITH AVERE
Unlike direct pronouns, indirect pronouns never trigger agreement:
  Gli ho dato il libro. ✓  (no agreement — gli is indirect)`,
            target: `I pronomi indiretti sostituiscono un nome introdotto da a — indicano a chi qualcosa viene fatto.

LE FORME:
  mi (a me), ti (a te), gli (a lui / a loro), le (a lei / a Lei),
  ci (a noi), vi (a voi)

POSIZIONE — prima del verbo coniugato:
  Gli parlo ogni giorno.
  Le ho scritto un messaggio.

VERBI COMUNI CON OGGETTO INDIRETTO:
  parlare a, scrivere a, telefonare a, rispondere a, dare a,
  dire a, chiedere a, mandare a, mostrare a, piacere a

PIACERE CON I PRONOMI INDIRETTI:
  Mi piace il caffè. / Gli piacciono i gatti. / Le piace studiare.

COD vs COI:
  La vedo. (la = diretto — nessuna a)
  Le parlo. (le = indiretto — sostituisce a + persona)

NESSUN ACCORDO CON AVERE:
  Gli ho dato il libro. ✓ (nessun accordo — gli è indiretto)`
        },
        examples: [
            { native: "Gli ho telefonato stamattina.", translation: "I called him this morning." },
            { native: "Puoi dirle di venire?", translation: "Can you tell her to come?" },
            { native: "Ci hanno mandato un invito.", translation: "They sent us an invitation." },
            { native: "Non mi ha risposto.", translation: "He didn't answer me." },
            { native: "Le piace molto la musica classica.", translation: "She likes classical music a lot." },
            { native: "Gli ho dato un regalo.", translation: "I gave him a present." },
        ]
    },
    {
        id: "it-g-a2-8",
        level: "A2",
        title: "Comparativi e Superlativi",
        explanation: {
            native: `Comparatives and superlatives allow you to compare people, things, and actions.

COMPARATIVES

More than: più + adjective/adverb + di (before nouns/pronouns) or che (before adjectives/verbs/prepositions):
  Roma è più grande di Milano.          Rome is bigger than Milan.
  È più intelligente che simpatica.     She's more intelligent than likeable.
  È meglio mangiare che non mangiare.   It's better to eat than not to eat.

Less than: meno + adjective/adverb + di/che:
  Questo libro è meno interessante di quello.  This book is less interesting than that one.

As...as: (così)...come or (tanto)...quanto:
  È (così) alto come suo fratello.      He's as tall as his brother.
  Parla (tanto) bene quanto te.         She speaks as well as you.

WHEN TO USE DI vs CHE:
  di — before nouns, pronouns, numbers:
    più alto di me,  più di cento euro,  meno di dieci minuti
  che — before adjectives, verbs, adverbs, prepositions:
    più stanco che annoiato,  meglio correre che camminare

IRREGULAR COMPARATIVES
  buono/a → migliore (better — NOT più buono in formal Italian)
  cattivo/a → peggiore (worse)
  grande → maggiore (bigger/older — also più grande)
  piccolo → minore (smaller/younger — also più piccolo)
  bene → meglio (better — adverb)
  male → peggio (worse — adverb)

SUPERLATIVES

Relative superlative (the most/least in a group):
  il/la/i/le + più/meno + adjective (+ di for context):
  È il ristorante più caro della città.   It's the most expensive restaurant in the city.
  È la soluzione meno complicata.         It's the least complicated solution.

Absolute superlative (extremely — no comparison):
  Drop the final vowel + add -issimo/a/i/e:
  bello → bellissimo       grande → grandissimo
  stanco → stanchissimo    buono → buonissimo / ottimo

  Questo caffè è buonissimo!              This coffee is absolutely delicious!
  Sono stanchissimo.                      I'm extremely tired.

IRREGULAR ABSOLUTE SUPERLATIVES:
  buono → ottimo (excellent)
  cattivo → pessimo (terrible)
  grande → massimo (maximum/greatest)
  piccolo → minimo (minimum/least)`,
            target: `I comparativi e superlativi permettono di confrontare persone, cose e azioni.

COMPARATIVI
  più + agg./avv. + di/che → Roma è più grande di Milano.
  meno + agg./avv. + di/che → Questo libro è meno interessante di quello.
  (così)...come / (tanto)...quanto → È alto come suo fratello.

QUANDO USARE DI vs CHE:
  di → prima di nomi, pronomi, numeri: più alto di me
  che → prima di aggettivi, verbi, avverbi: più stanco che annoiato

COMPARATIVI IRREGOLARI:
  buono → migliore,  cattivo → peggiore
  grande → maggiore,  piccolo → minore
  bene → meglio,  male → peggio

SUPERLATIVI
Relativo (il più/meno in un gruppo):
  È il ristorante più caro della città.

Assoluto (estremamente — senza confronto):
  bello → bellissimo,  stanco → stanchissimo,  buono → buonissimo/ottimo
  Questo caffè è buonissimo! / Sono stanchissimo.`
        },
        examples: [
            { native: "Questo film è più interessante del primo.", translation: "This film is more interesting than the first one." },
            { native: "Lei parla meno velocemente di lui.", translation: "She speaks less quickly than him." },
            { native: "È il miglior caffè che abbia mai bevuto.", translation: "It's the best coffee I've ever had. (irregular: buono → migliore)" },
            { native: "Mi sento meglio oggi.", translation: "I feel better today. (irregular: bene → meglio)" },
            { native: "È la città più bella che abbia visitato.", translation: "It's the most beautiful city I've visited." },
            { native: "Sono stanchissimo — ho lavorato tutto il giorno.", translation: "I'm exhausted — I've worked all day. (absolute superlative)" },
        ]
    },
    {
        id: "it-g-a2-9",
        level: "A2",
        title: "Le Proposizioni Relative — Che, Chi, Cui",
        explanation: {
            native: `Relative clauses add information about a noun. Italian has three main relative pronouns at A2: che, chi, and cui.

CHE — who / which / that (most common)
Che can refer to people or things and works as both subject and object of the relative clause. It can never be omitted.

As subject (followed directly by a verb):
  Il ragazzo che parla è mio fratello.    The boy who is speaking is my brother.
  Il treno che arriva è in ritardo.       The train that is arriving is late.

As object:
  Il film che ho visto era ottimo.        The film (that) I saw was great.
  La ragazza che conosci si chiama Lucia. The girl (that) you know is called Lucia.

CHI — whoever / the one who (refers only to people)
Chi is used when there is no specific antecedent — it means 'the person who' or 'whoever':
  Chi studia passa l'esame.               Those who study pass the exam.
  Chi arriva tardi non entra.             Whoever arrives late doesn't get in.
  Non conosco chi ha fatto questo.        I don't know who did this.

CUI — whom / which (after prepositions)
Cui replaces che when a preposition is involved. It works for both people and things:
  La persona con cui lavoro è brava.      The person I work with is good.
  La città in cui vivo è bella.           The city I live in is beautiful.
  Il motivo per cui sono qui è...         The reason why I'm here is...

Common preposition + cui combinations:
  con cui      with whom/which
  in cui       in which / where
  a cui        to whom/which
  di cui       of whom/which / about whom
  per cui      for which / why
  su cui       on which

IL/LA/I/LE QUALE — formal alternative to cui (recognition):
  La persona con la quale lavoro...   The person with whom I work... (formal)
  This form is more common in writing — cui is fine for everyday use.`,
            target: `Le proposizioni relative aggiungono informazioni su un nome. I tre pronomi relativi principali al livello A2 sono che, chi e cui.

CHE — chi/che/che (il più comune)
Che si riferisce a persone o cose e funziona sia come soggetto che come oggetto. Non può essere omesso.

Come soggetto (seguito direttamente da un verbo):
  Il ragazzo che parla è mio fratello.
  Il film che ho visto era ottimo.

CHI — chi/colui che (si riferisce solo a persone senza antecedente specifico):
  Chi studia passa l'esame.
  Chi arriva tardi non entra.

CUI — cui/il quale (dopo le preposizioni):
  La persona con cui lavoro è brava.
  La città in cui vivo è bella.
  Il motivo per cui sono qui è...

Preposizioni comuni + cui:
  con cui, in cui, a cui, di cui, per cui, su cui`
        },
        examples: [
            { native: "È l'amico che mi ha aiutato.", translation: "It's the friend who helped me. (che = subject)" },
            { native: "Il libro che stai leggendo è bellissimo.", translation: "The book (that) you're reading is beautiful. (che = object)" },
            { native: "Chi dorme non piglia pesci.", translation: "Those who sleep don't catch fish. (Italian proverb — chi = whoever)" },
            { native: "La ragazza con cui lavoro è molto brava.", translation: "The girl I work with is very good. (con cui — preposition + cui)" },
            { native: "È la città in cui sono nato.", translation: "It's the city I was born in. (in cui)" },
            { native: "Non capisco il motivo per cui è arrabbiato.", translation: "I don't understand the reason why he's angry. (per cui)" },
        ]
    },
    {
        id: "it-g-a2-10",
        level: "A2",
        title: "Stare + Gerundio — The Progressive",
        explanation: {
            native: `The progressive in Italian is formed with stare (present or imperfect) + the gerund. It emphasises that an action is happening right now or was happening at a specific moment.

FORMING THE GERUND
  -are verbs: drop -are, add -ando:    parlare → parlando,   mangiare → mangiando
  -ere verbs: drop -ere, add -endo:    scrivere → scrivendo, leggere → leggendo
  -ire verbs: drop -ire, add -endo:    dormire → dormendo,   finire → finendo

IRREGULAR GERUNDS — must memorise:
  essere → essendo       fare → facendo       dire → dicendo
  bere → bevendo         porre → ponendo

PRESENT PROGRESSIVE — stare (present) + gerund
Emphasises what is happening at this exact moment:
  Sto mangiando.              I am eating (right now).
  Stai dormendo?              Are you sleeping?
  Sta piovendo.               It is raining.
  Stiamo studiando.           We are studying.

IMPERFECT PROGRESSIVE — stare (imperfect) + gerund
Emphasises what was happening at a specific past moment:
  Stavo mangiando quando hai chiamato.    I was eating when you called.
  Cosa stavi facendo?                     What were you doing?

STARE + GERUND vs SIMPLE PRESENT/IMPERFECT
Italian does not require the progressive — the simple present and imperfect usually suffice:
  Mangio.           I eat. / I am eating.
  Sto mangiando.    I am eating. (emphasis on action in progress right now)

Use stare + gerundio when you want to stress that something is happening at this very moment. It is less common than the English present progressive.

POSITION OF PRONOUNS
Pronouns can attach to the gerund OR go before stare:
  Lo sto leggendo. = Sto leggendolo.     I am reading it.
  Ti sto ascoltando. = Sto ascoltandoti. I am listening to you.`,
            target: `Il progressivo in italiano si forma con stare (presente o imperfetto) + il gerundio.

FORMAZIONE DEL GERUNDIO:
  verbi in -are → -ando: parlare → parlando
  verbi in -ere → -endo: scrivere → scrivendo
  verbi in -ire → -endo: dormire → dormendo

GERUNDI IRREGOLARI:
  fare → facendo,  dire → dicendo,  bere → bevendo

PROGRESSIVO PRESENTE — stare (presente) + gerundio
Sottolinea cosa sta accadendo in questo momento:
  Sto mangiando. / Stai dormendo? / Sta piovendo.

PROGRESSIVO IMPERFETTO — stare (imperfetto) + gerundio
Sottolinea cosa stava accadendo in un momento passato specifico:
  Stavo mangiando quando hai chiamato.

STARE + GERUNDIO vs PRESENTE SEMPLICE:
Si usa stare + gerundio quando si vuole sottolineare che qualcosa sta accadendo proprio in questo momento. È meno comune del progressivo inglese.

POSIZIONE DEI PRONOMI:
  Lo sto leggendo. = Sto leggendolo.`
        },
        examples: [
            { native: "Sto studiando per l'esame.", translation: "I am studying for the exam. (right now)" },
            { native: "Cosa stai facendo?", translation: "What are you doing?" },
            { native: "Sta piovendo — prendi l'ombrello.", translation: "It's raining — take the umbrella." },
            { native: "Stavo dormendo quando ha suonato il campanello.", translation: "I was sleeping when the doorbell rang." },
            { native: "Lo sto leggendo — è molto interessante.", translation: "I'm reading it — it's very interesting." },
            { native: "Stiamo aspettando l'autobus.", translation: "We are waiting for the bus." },
        ]
    },
    {
        id: "it-g-a2-11",
        level: "A2",
        title: "Si Impersonale e Si Passivante",
        explanation: {
            native: `The particle si has two important impersonal uses in Italian: si impersonale (one does / people do) and si passivante (passive si — it is done). Both are extremely common and appear constantly in Italian.

SI IMPERSONALE — 'one does / people do / you do'
Structure: si + third person singular of any verb
It expresses a general truth, habit, or rule — nobody specific is performing the action.
  In Italia si mangia bene.           In Italy one eats well / the food is good.
  Si parla italiano qui.              Italian is spoken here.
  Come si dice in italiano?           How do you say it in Italian?
  Non si fa così.                     That's not how it's done / one doesn't do that.
  Si può entrare?                     May one enter? / Can we come in?

With essere and adjectives — adjective is always masculine singular with si impersonale:
  Quando si è giovani, si è felici.   When one is young, one is happy.
  Si è stanchi dopo il lavoro.        One is tired after work.

SI PASSIVANTE — passive meaning with transitive verbs
Structure: si + third person singular or plural of the verb (agrees with the subject/noun)
The noun following the verb determines singular or plural:
  Si vendono appartamenti.             Apartments are for sale. / They sell apartments.
  Si parla inglese.                    English is spoken.
  Si cercano camerieri.                Waiters wanted. / They are looking for waiters.
  Si affitta una stanza.               A room is for rent.

DISTINGUISHING SI IMPERSONALE FROM SI PASSIVANTE
  Si mangia la pizza.       One eats pizza. (si imp. — general habit)
  Si mangiano le pizze.     Pizzas are eaten. (si pass. — pizzas is the subject, plural)
  Si vende la casa.         The house is for sale. (si pass. — singular)
  Si vendono le case.       The houses are for sale. (si pass. — plural)

In practice, si impersonale and si passivante often overlap and the distinction is not always crucial at A2.

COMMON SI EXPRESSIONS
  si sa che...          it is known that... / everyone knows that...
  si dice che...        it is said that... / they say that...
  si vede che...        one can see that... / it's clear that...
  come si fa?           how is it done? / how do you do it?`,
            target: `La particella si ha due usi impersonali importanti: si impersonale (si fa / la gente fa) e si passivante (viene fatto).

SI IMPERSONALE — "si fa / la gente fa"
Struttura: si + terza persona singolare di qualsiasi verbo
Esprime una verità generale, un'abitudine o una regola.
  In Italia si mangia bene.
  Come si dice in italiano?
  Non si fa così.
  Si può entrare?

Con essere + aggettivo — l'aggettivo è sempre maschile singolare:
  Quando si è giovani, si è felici.

SI PASSIVANTE — significato passivo con verbi transitivi
Struttura: si + terza persona singolare o plurale (concorda con il nome che segue)
  Si vendono appartamenti. / Si parla inglese. / Si cercano camerieri.

DISTINZIONE:
  Si mangia la pizza. (si imp. — abitudine generale)
  Si mangiano le pizze. (si pass. — le pizze sono il soggetto, plurale)

ESPRESSIONI COMUNI:
  si sa che... / si dice che... / si vede che... / come si fa?`
        },
        examples: [
            { native: "In questo ristorante si mangia benissimo.", translation: "In this restaurant the food is excellent / one eats very well." },
            { native: "Come si dice 'hello' in italiano?", translation: "How do you say 'hello' in Italian?" },
            { native: "Si cercano camerieri esperti.", translation: "Experienced waiters wanted. (si passivante — plural)" },
            { native: "Non si fuma in questo edificio.", translation: "Smoking is not allowed in this building." },
            { native: "Si dice che questo vino sia ottimo.", translation: "They say this wine is excellent." },
            { native: "Si affitta appartamento — due camere.", translation: "Apartment for rent — two bedrooms." },
        ]
    },
    {
        id: "it-g-a2-12",
        level: "A2",
        title: "Gli Avverbi in -mente",
        explanation: {
            native: `Adverbs modify verbs, adjectives, or other adverbs. Many Italian adverbs are formed from adjectives by adding -mente — equivalent to the English -ly suffix.

FORMATION RULES

1. ADJECTIVE ENDS IN -e (same form for masc. and fem.) — add -mente directly:
  veloce → velocemente          (quickly)
  facile → facilmente           (easily)
  gentile → gentilmente         (kindly)
  semplice → semplicemente      (simply)
  felice → felicemente          (happily)

2. ADJECTIVE ENDS IN -o (different masc./fem.) — add -mente to the FEMININE form:
  lento → lenta → lentamente            (slowly)
  vero → vera → veramente               (truly, really)
  chiaro → chiara → chiaramente         (clearly)
  sicuro → sicura → sicuramente         (surely, certainly)
  solo → sola → solamente               (only, just)

3. ADJECTIVES ENDING IN -le OR -re DROP THE FINAL -e BEFORE -mente:
  normale → normalmen-te → normalmente  (normally)
  regolare → regolar-mente → regolarmente (regularly)
  particolare → particolarmente          (particularly)
  generale → generalmente               (generally)
  finale → finalmente                   (finally)

IRREGULAR / IMPORTANT ADVERBS — must memorise:
  buono → bene          (well)
  cattivo → male        (badly)
  migliore → meglio     (better)
  peggiore → peggio     (worse)
  molto (adj.) → molto (adv.)  (very / a lot — no change)
  poco (adj.) → poco (adv.)    (little — no change)

POSITION
  After the conjugated verb:
    Parla lentamente.           She speaks slowly.
    Risponde sempre gentilmente. He always answers kindly.

  In compound tenses, short adverbs between auxiliary and participle:
    Ha parlato chiaramente.     She spoke clearly.
    Ho finalmente capito.       I finally understood.

  Sentence adverbs (purtroppo, fortunatamente, probabilmente) often go at the start:
    Purtroppo non posso venire.  Unfortunately I can't come.
    Probabilmente arriverà tardi. He'll probably arrive late.`,
            target: `Gli avverbi modificano verbi, aggettivi o altri avverbi. Molti avverbi italiani si formano aggiungendo -mente a un aggettivo.

REGOLE DI FORMAZIONE

1. AGGETTIVO TERMINA IN -e → aggiungere -mente direttamente:
  veloce → velocemente,  facile → facilmente,  gentile → gentilmente

2. AGGETTIVO TERMINA IN -o → aggiungere -mente al FEMMINILE:
  lento → lenta → lentamente
  vero → vera → veramente
  chiaro → chiara → chiaramente

3. AGGETTIVI IN -le O -re → si elimina la -e finale prima di -mente:
  normale → normalmente,  regolare → regolarmente,  finale → finalmente

AVVERBI IRREGOLARI:
  buono → bene,  cattivo → male,  migliore → meglio,  peggiore → peggio

POSIZIONE:
  Dopo il verbo coniugato: Parla lentamente.
  Nei tempi composti, gli avverbi brevi tra ausiliare e participio:
    Ho finalmente capito.
  Avverbi di frase spesso all'inizio:
    Purtroppo non posso venire.`
        },
        examples: [
            { native: "Parla italiano perfettamente.", translation: "She speaks Italian perfectly. (-o → -a → -mente)" },
            { native: "Fortunatamente nessuno si è fatto male.", translation: "Fortunately nobody got hurt. (sentence adverb)" },
            { native: "Finalmente ho capito!", translation: "I finally understood! (-le drops -e → finalmente)" },
            { native: "Rispondi sempre gentilmente.", translation: "You always answer kindly. (-e → -mente)" },
            { native: "Ha parlato chiaramente con tutti.", translation: "He spoke clearly with everyone." },
            { native: "Purtroppo non posso venire domani.", translation: "Unfortunately I can't come tomorrow." },
        ]
    },
    {
        id: "it-g-a2-13",
        level: "A2",
        title: "Il Congiuntivo Presente — Introduzione",
        explanation: {
            native: `The congiuntivo (subjunctive) expresses doubt, opinion, emotion, and uncertainty. It is much more common in Italian than in French or Spanish and appears in everyday speech. At A2, the goal is to recognise the most common patterns and begin producing the most frequent ones.

FORMATION — present subjunctive
  -are verbs: drop -are, add -i, -i, -i, -iamo, -iate, -ino
    parlare: parli, parli, parli, parliamo, parliate, parlino
  -ere verbs: drop -ere, add -a, -a, -a, -iamo, -iate, -ano
    scrivere: scriva, scriva, scriva, scriviamo, scriviate, scrivano
  -ire verbs: drop -ire, add -a, -a, -a, -iamo, -iate, -ano
    dormire: dorma, dorma, dorma, dormiamo, dormiate, dormano
    finire (type 2): finisca, finisca, finisca, finiamo, finiate, finiscano

Note: the io, tu, and lui/lei forms are identical — context makes the subject clear.

IRREGULAR SUBJUNCTIVES — must memorise:
  essere:  sia, sia, sia, siamo, siate, siano
  avere:   abbia, abbia, abbia, abbiamo, abbiate, abbiano
  andare:  vada, vada, vada, andiamo, andiate, vadano
  fare:    faccia, faccia, faccia, facciamo, facciate, facciano
  venire:  venga, venga, venga, veniamo, veniate, vengano
  stare:   stia, stia, stia, stiamo, stiate, stiano
  dare:    dia, dia, dia, diamo, diate, diano
  sapere:  sappia, sappia, sappia, sappiamo, sappiate, sappiano

WHEN TO USE THE CONGIUNTIVO — key triggers at A2

1. OPINION, BELIEF, DOUBT — after penso che, credo che, spero che, temo che:
  Penso che sia stanco.          I think (that) he is tired.
  Credo che abbiano ragione.     I believe they are right.
  Spero che venga.               I hope (that) she comes.

2. IMPERSONAL EXPRESSIONS — after è importante che, è necessario che, bisogna che:
  È importante che tu studi.     It's important that you study.
  Bisogna che lui venga.         It's necessary that he come.

3. AFTER CERTAIN CONJUNCTIONS:
  affinché / perché (so that):   Lo faccio perché tu capisca.
  benché / sebbene (although):   Benché sia stanco, lavora.
  prima che (before):            Parto prima che arrivi.

AT A2 — PRODUCTION FOCUS
Learn these three patterns first:
  Penso/Credo/Spero che + congiuntivo
  È importante/necessario/possibile che + congiuntivo
  Benché + congiuntivo`,
            target: `Il congiuntivo esprime dubbio, opinione, emozione e incertezza. È molto comune in italiano. Al livello A2, l'obiettivo è riconoscere i pattern più comuni e iniziare a produrre quelli più frequenti.

FORMAZIONE — congiuntivo presente:
  verbi in -are → -i, -i, -i, -iamo, -iate, -ino: parlare → parli...
  verbi in -ere → -a, -a, -a, -iamo, -iate, -ano: scrivere → scriva...
  verbi in -ire → -a, -a, -a, -iamo, -iate, -ano: dormire → dorma...

CONGIUNTIVI IRREGOLARI:
  essere → sia,  avere → abbia,  andare → vada,  fare → faccia,
  venire → venga,  stare → stia,  dare → dia

QUANDO SI USA IL CONGIUNTIVO:

1. OPINIONE, CREDENZA, DUBBIO — dopo penso che, credo che, spero che, temo che:
  Penso che sia stanco. / Credo che abbiano ragione. / Spero che venga.

2. ESPRESSIONI IMPERSONALI:
  È importante che tu studi. / Bisogna che lui venga.

3. DOPO CERTE CONGIUNZIONI:
  benché/sebbene (anche se), affinché/perché (affinché), prima che (prima che)

FOCUS AL LIVELLO A2:
  Penso/Credo/Spero che + congiuntivo
  È importante/necessario/possibile che + congiuntivo`
        },
        examples: [
            { native: "Penso che sia una buona idea.", translation: "I think (that) it's a good idea. (sia — essere congiuntivo)" },
            { native: "Spero che vengano alla festa.", translation: "I hope (that) they come to the party. (vengano — venire congiuntivo)" },
            { native: "È importante che tu studi ogni giorno.", translation: "It's important that you study every day." },
            { native: "Credo che abbia ragione.", translation: "I believe he's right. (abbia — avere congiuntivo)" },
            { native: "Benché sia stanco, continua a lavorare.", translation: "Although he's tired, he keeps working." },
            { native: "Spero che tu stia bene.", translation: "I hope you are well. (stia — stare congiuntivo)" },
        ]
    },
    {
        id: "it-g-a2-14",
        level: "A2",
        title: "Le Frasi con SE — Periodo Ipotetico",
        explanation: {
            native: `Se (if) clauses express conditions and their consequences. At A2 there are two key patterns.

PATTERN 1 — REAL / LIKELY CONDITION (se + present → future or present)
The condition is realistic or possible.
  Se + present indicative → future simple (or imperative, or present)

  Se studi, passerai l'esame.          If you study, you will pass the exam.
  Se fa bello, andiamo al mare.        If the weather is nice, we'll go to the sea.
  Se hai fame, c'è il pane.            If you're hungry, there's bread. (present result)
  Se arrivi tardi, chiamami.           If you arrive late, call me. (imperative)

PATTERN 2 — HYPOTHETICAL / CONTRARY TO REALITY (se + imperfetto → condizionale)
The condition is imaginary or unlikely.
  Se + imperfect indicative → conditional present

  Se avessi tempo, studierei di più.    If I had time, I would study more.
  Se fossi ricco, viaggerei.            If I were rich, I would travel.
  Se venisse, sarebbe bello.            If she came, it would be nice.

IMPORTANT RULES
1. Se NEVER combines with future or conditional:
  ✗ Se verrà...    (incorrect)
  ✓ Se viene...    (present — Pattern 1)
  ✗ Se verrebbe... (incorrect)
  ✓ Se venisse...  (imperfect — Pattern 2)

2. The se clause can come first or second:
  Se studi, passi. = Passi, se studi.

3. Se contracts before egli/esso but NOT before other pronouns:
  Se lui viene... (no contraction — se + lui)

COMMON SE PATTERNS
  Se vuoi...              If you want...
  Se è possibile...       If it's possible...
  Se fossi in te...       If I were you...
  E se andassimo...?      What if we went...? (suggestion)`,
            target: `Le frasi con se esprimono condizioni e le loro conseguenze. Al livello A2 ci sono due strutture principali.

STRUTTURA 1 — CONDIZIONE REALE (se + presente → futuro o presente)
La condizione è realistica o possibile.
  Se + indicativo presente → futuro semplice (o imperativo o presente)

  Se studi, passerai l'esame.
  Se fa bello, andiamo al mare.
  Se arrivi tardi, chiamami.

STRUTTURA 2 — CONDIZIONE IPOTETICA (se + imperfetto → condizionale)
La condizione è immaginaria o improbabile.
  Se + indicativo imperfetto → condizionale presente

  Se avessi tempo, studierei di più.
  Se fossi ricco, viaggerei.

REGOLE IMPORTANTI:
1. Se non si combina mai con futuro o condizionale:
  ✗ Se verrà... → ✓ Se viene...
  ✗ Se verrebbe... → ✓ Se venisse...

2. La proposizione con se può venire prima o dopo.

STRUTTURE COMUNI:
  Se vuoi... / Se è possibile... / Se fossi in te...`
        },
        examples: [
            { native: "Se studi, passerai l'esame.", translation: "If you study, you will pass the exam. (se + present → future)" },
            { native: "Se fa bello domani, usciamo.", translation: "If the weather is nice tomorrow, we'll go out." },
            { native: "Se fossi in te, parlerei con lui.", translation: "If I were you, I would talk to him. (se + imperfetto → condizionale)" },
            { native: "Se hai tempo, puoi aiutarmi?", translation: "If you have time, can you help me?" },
            { native: "Se avessi più soldi, viaggerei di più.", translation: "If I had more money, I would travel more." },
            { native: "E se andassimo al cinema stasera?", translation: "What if we went to the cinema tonight? (suggestion)" },
        ]
    },
    {
        id: "it-g-a2-15",
        level: "A2",
        title: "Il Discorso Indiretto",
        explanation: {
            native: `Indirect speech (il discorso indiretto) is used to report what someone said without quoting them directly.

REPORTING STATEMENTS — dire che
Direct:   Dice: «Sono stanco.»               He says: "I am tired."
Indirect: Dice che è stanco.                  He says (that) he is tired.

Direct:   Ha detto: «Ho fame.»                She said: "I am hungry."
Indirect: Ha detto che aveva fame.            She said (that) she was hungry.

TENSE CHANGES WHEN THE REPORTING VERB IS IN THE PAST

When the main verb (dire, spiegare, raccontare, rispondere, annunciare) is past, the reported speech shifts back:

  Direct speech               → Indirect (past reporting verb)
  presente                    → imperfetto
  passato prossimo            → trapassato prossimo (aveva fatto)
  futuro semplice             → condizionale presente
  imperfetto                  → imperfetto (no change)

  «Lavoro.» → Ha detto che lavorava.              (presente → imperfetto)
  «Ho mangiato.» → Ha detto che aveva mangiato.   (p.p. → trapassato)
  «Verrò.» → Ha detto che sarebbe venuto.         (futuro → condizionale)

Note: the trapassato prossimo (aveva mangiato) is introduced here for recognition — full coverage at B1.

REPORTING QUESTIONS — chiedere se / chiedere + question word
Yes/no questions: chiedere se
  Direct:   «Sei pronto?»          Are you ready?
  Indirect: Mi ha chiesto se ero pronto.    He asked me if I was ready.

Information questions: chiedere + question word
  Direct:   «Dove abiti?»          Where do you live?
  Indirect: Mi ha chiesto dove abitavo.    She asked me where I lived.

REPORTING COMMANDS — chiedere di + infinitive / dire di + infinitive
  Direct:   «Parla più lentamente!»
  Indirect: Mi ha chiesto di parlare più lentamente.

PRONOUN AND ADJECTIVE SHIFTS
  «Parto domani.» → Ha detto che partiva il giorno dopo.
  domani → il giorno dopo / l'indomani
  oggi → quel giorno / allora
  ieri → il giorno prima`,
            target: `Il discorso indiretto permette di riportare ciò che qualcuno ha detto senza citarlo direttamente.

RIPORTARE AFFERMAZIONI — dire che:
  Diretto: Dice: « Sono stanco. »
  Indiretto: Dice che è stanco.
  
  Diretto: Ha detto: « Ho fame. »
  Indiretto: Ha detto che aveva fame.

CAMBIAMENTI DI TEMPO (quando il verbo principale è al passato):
  presente → imperfetto
  passato prossimo → trapassato prossimo
  futuro → condizionale

  « Lavoro. » → Ha detto che lavorava.
  « Verrò. » → Ha detto che sarebbe venuto.

RIPORTARE DOMANDE:
  Sì/no → chiedere se:
    « Sei pronto? » → Mi ha chiesto se ero pronto.
  Con parola interrogativa:
    « Dove abiti? » → Mi ha chiesto dove abitavo.

RIPORTARE ORDINI — chiedere di / dire di + infinito:
  « Parla più lentamente! » → Mi ha chiesto di parlare più lentamente.`
        },
        examples: [
            { native: "Dice che è stanco.", translation: "He says (that) he is tired. (present reporting — no shift)" },
            { native: "Ha detto che non poteva venire.", translation: "She said (that) she couldn't come. (poteva — imperfetto)" },
            { native: "Mi ha chiesto se avevo fame.", translation: "He asked me if I was hungry." },
            { native: "Ha chiesto dove abitavo.", translation: "She asked where I lived." },
            { native: "Il professore ci ha detto di fare l'esercizio.", translation: "The teacher told us to do the exercise." },
            { native: "Ha annunciato che sarebbe partito il giorno dopo.", translation: "He announced that he would leave the next day. (futuro → condizionale)" },
        ]
    },
    {
        id: "it-g-a2-16",
        level: "A2",
        title: "Le Congiunzioni — Connettori Avanzati",
        explanation: {
            native: `At A1 you learned basic connectors (e, ma, perché, quindi). At A2 you need a richer set of conjunctions to express time, opposition, cause, and consequence with more precision.

TIME CONJUNCTIONS

quando / mentre — when / while:
  Quando arrivo, ti chiamo.          When I arrive, I'll call you.
  Mentre lui cucinava, lei leggeva.  While he was cooking, she was reading.

prima di + infinitive — before doing (same subject):
  Prima di uscire, controlla le chiavi.  Before going out, check the keys.

dopo + past infinitive — after doing (same subject):
  Dopo aver mangiato, si è riposato.    After eating, he rested.
  Dopo essere arrivata, ha telefonato.  After arriving, she phoned.

appena — as soon as:
  Appena arriva, cominciamo.          As soon as he arrives, we'll start.

finché — until / as long as:
  Aspetto finché non torna.           I'll wait until he comes back.

OPPOSITION AND CONCESSION

però / tuttavia / comunque — however / nevertheless:
  Ha studiato. Però ha fallito.       He studied. However, he failed.

nonostante / sebbene / benché + congiuntivo — although:
  Nonostante la pioggia, siamo usciti.    Despite the rain, we went out.
  Sebbene sia stanco, lavora.             Although he's tired, he works.

anche se — even if (+ indicativo):
  Esco anche se piove.                I go out even if it rains.

CAUSE AND CONSEQUENCE

poiché / siccome — since / given that (cause already known):
  Siccome eri assente, ho preso appunti.  Since you were absent, I took notes.

quindi / perciò / dunque — so / therefore:
  Era tardi, quindi siamo partiti.    It was late, so we left.

infatti — in fact / indeed (confirms a previous statement):
  Ho detto che era buono — infatti lo è.   I said it was good — and indeed it is.

anzi — on the contrary / in fact (corrects or strengthens):
  Non è difficile — anzi, è facilissimo.  It's not difficult — in fact, it's very easy.`,
            target: `Al livello A1 avete imparato i connettori di base (e, ma, perché, quindi). Al livello A2 avete bisogno di congiunzioni più ricche.

CONGIUNZIONI DI TEMPO:
  quando/mentre — quando/mentre
  prima di + infinito — prima di fare
  dopo + infinito passato — dopo aver fatto / dopo essere arrivato
  appena — appena (non appena)
  finché — finché (fino a quando)

OPPOSIZIONE E CONCESSIONE:
  però/tuttavia/comunque — però/tuttavia
  nonostante/sebbene/benché + congiuntivo — nonostante
  anche se — anche se (+ indicativo)

CAUSA E CONSEGUENZA:
  poiché/siccome — poiché/dato che (causa già nota)
  quindi/perciò/dunque — quindi/perciò
  infatti — infatti (conferma)
  anzi — anzi (corregge o rafforza)`
        },
        examples: [
            { native: "Appena arriva, cominciamo.", translation: "As soon as he arrives, we'll start." },
            { native: "Prima di dormire, leggo sempre un po'.", translation: "Before sleeping, I always read a little." },
            { native: "Dopo aver mangiato, siamo andati a passeggiare.", translation: "After eating, we went for a walk." },
            { native: "Mentre lei lavorava, lui preparava la cena.", translation: "While she was working, he was preparing dinner." },
            { native: "Ha studiato tutta la notte. Tuttavia, ha fallito l'esame.", translation: "He studied all night. However, he failed the exam." },
            { native: "Siccome eri assente, ti spiego io.", translation: "Since you were absent, I'll explain it to you." },
            { native: "Non è difficile — anzi, è semplicissimo!", translation: "It's not difficult — in fact, it's very simple!" },
        ]
    },
]