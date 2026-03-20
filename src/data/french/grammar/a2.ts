// src/data/french/grammar/a2.ts
import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "fr-g-a2-1",
        level: "A2",
        title: "Le Passé Composé",
        explanation: {
            native: `The passé composé is the main past tense used in spoken French for completed actions. It is formed with an auxiliary verb (avoir or être in the present tense) plus the past participle of the main verb.

PAST PARTICIPLES — regular formation:
  -er verbs → -é:    parler → parlé,   manger → mangé,   aller → allé
  -ir verbs → -i:    finir → fini,     choisir → choisi
  -re verbs → -u:    attendre → attendu, vendre → vendu

IRREGULAR PAST PARTICIPLES — must memorise:
  être → été        avoir → eu         faire → fait
  dire → dit        écrire → écrit     mettre → mis
  prendre → pris    voir → vu          vouloir → voulu
  pouvoir → pu      venir → venu       boire → bu
  lire → lu         savoir → su        ouvrir → ouvert

WHICH AUXILIARY?

AVOIR — used by most verbs:
  J'ai mangé.         I ate.
  Tu as fini.         You finished.
  Il a fait.          He did.
  Nous avons vu.      We saw.

ÊTRE — used by verbs of motion and change of state (the DR and MRS VANDERTRAMP verbs):
  aller/venir, arriver/partir, entrer/sortir, monter/descendre,
  naître/mourir, rester, tomber, retourner, passer, devenir

  Je suis allé(e).         I went.
  Elle est partie.         She left.
  Nous sommes arrivés.     We arrived.
  Ils sont restés.         They stayed.

With être, the past participle agrees with the subject in gender and number:
  Il est parti.        Elle est partie.
  Ils sont partis.     Elles sont parties.

REFLEXIVE VERBS always use être:
  Je me suis levé(e).      I got up.
  Elle s'est habillée.     She got dressed.

NEGATION — ne...pas wraps the auxiliary:
  Je n'ai pas mangé.       I didn't eat.
  Il n'est pas venu.       He didn't come.`,
            target: `Le passé composé est le temps du passé principal à l'oral. On le forme avec un auxiliaire (avoir ou être au présent) + le participe passé.

PARTICIPES PASSÉS — formation régulière :
  verbes en -er → -é :   parler → parlé
  verbes en -ir → -i :   finir → fini
  verbes en -re → -u :   attendre → attendu

PARTICIPES IRRÉGULIERS — à mémoriser :
  être → été,  avoir → eu,  faire → fait,  dire → dit,
  prendre → pris,  voir → vu,  venir → venu,  mettre → mis

QUEL AUXILIAIRE ?

AVOIR — pour la majorité des verbes :
  J'ai mangé. / Tu as fini. / Il a fait. / Nous avons vu.

ÊTRE — pour les verbes de mouvement et de changement d'état :
  aller, venir, arriver, partir, entrer, sortir, monter, descendre,
  naître, mourir, rester, tomber, retourner, passer, devenir

  Je suis allé(e). / Elle est partie. / Nous sommes arrivés.

Avec être, le participe passé s'accorde avec le sujet :
  Il est parti. → Elle est partie. → Ils sont partis. → Elles sont parties.

Les verbes réfléchis utilisent toujours être :
  Je me suis levé(e). / Elle s'est habillée.

NÉGATION — ne...pas entoure l'auxiliaire :
  Je n'ai pas mangé. / Il n'est pas venu.`
        },
        examples: [
            { native: "J'ai mangé une pizza hier soir.", translation: "I ate a pizza last night." },
            { native: "Elle est arrivée en retard.", translation: "She arrived late. (être — agreement: arrivée)" },
            { native: "Nous avons vu un film excellent.", translation: "We watched an excellent film." },
            { native: "Ils sont partis ce matin.", translation: "They left this morning. (être — motion verb)" },
            { native: "Je me suis levé à sept heures.", translation: "I got up at seven. (reflexive — always être)" },
            { native: "Tu n'as pas fini tes devoirs?", translation: "You haven't finished your homework?" },
        ]
    },
    {
        id: "fr-g-a2-2",
        level: "A2",
        title: "L'Imparfait",
        explanation: {
            native: `The imparfait describes past situations, ongoing or habitual actions in the past, and background context. It contrasts with the passé composé, which marks completed events. The same event can be described differently depending on which tense you use.

FORMATION
Take the nous present tense form, remove -ons, and add the imparfait endings:
  -ais, -ais, -ait, -ions, -iez, -aient

  parler:  nous parlons → parl- → je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient
  finir:   nous finissons → finiss- → je finissais...
  faire:   nous faisons → fais- → je faisais...
  prendre: nous prenons → pren- → je prenais...

THE ONLY IRREGULAR STEM: être → ét-
  j'étais, tu étais, il était, nous étions, vous étiez, ils étaient

WHEN TO USE THE IMPARFAIT

1. HABITUAL OR REPEATED PAST ACTIONS ('used to', 'would always'):
  Quand j'étais enfant, je jouais au foot.
  When I was a child, I used to play football.

2. ONGOING BACKGROUND SITUATION:
  Il faisait beau et les oiseaux chantaient.
  The weather was nice and the birds were singing.

3. DESCRIPTIONS IN THE PAST (physical, emotional, mental states):
  Elle était fatiguée et triste.
  She was tired and sad.

4. WITH EXPRESSIONS OF FREQUENCY/HABIT:
  tous les jours, souvent, chaque semaine, d'habitude, autrefois
  D'habitude, je prenais le bus.
  I usually took the bus.

KEY CONTRAST WITH PASSÉ COMPOSÉ:
  Il pleuvait quand je suis sorti.
  It was raining (imparfait — background) when I went out (passé composé — event).
  See lesson fr-g-a2-3 for the full contrast.`,
            target: `L'imparfait décrit des situations passées, des actions habituelles ou continues dans le passé, et le contexte de fond. Il contraste avec le passé composé, qui marque des événements complétés.

FORMATION
On prend la forme « nous » au présent, on enlève -ons, et on ajoute les terminaisons :
  -ais, -ais, -ait, -ions, -iez, -aient

  parler → nous parlons → parl- → je parlais, tu parlais, il parlait...
  faire → nous faisons → fais- → je faisais...

SEUL RADICAL IRRÉGULIER : être → ét-
  j'étais, tu étais, il était, nous étions, vous étiez, ils étaient

QUAND UTILISER L'IMPARFAIT ?

1. Actions habituelles ou répétées dans le passé :
  Quand j'étais enfant, je jouais au foot.

2. Situation de fond en cours :
  Il faisait beau et les oiseaux chantaient.

3. Descriptions dans le passé (états physiques, émotions) :
  Elle était fatiguée et triste.

4. Avec des expressions de fréquence :
  tous les jours, souvent, d'habitude, autrefois
  D'habitude, je prenais le bus.

CONTRASTE AVEC LE PASSÉ COMPOSÉ :
  Il pleuvait (imparfait — fond) quand je suis sorti (passé composé — événement).
  Voir la leçon fr-g-a2-3 pour le contraste complet.`
        },
        examples: [
            { native: "Quand j'étais petit, je habitais à Lyon.", translation: "When I was young, I lived in Lyon." },
            { native: "Il faisait froid et il neigeait.", translation: "It was cold and it was snowing. (background description)" },
            { native: "Elle travaillait dans un hôpital à l'époque.", translation: "She used to work in a hospital at that time." },
            { native: "Tous les étés, nous allions à la mer.", translation: "Every summer, we used to go to the sea." },
            { native: "J'avais dix ans et j'adorais la musique.", translation: "I was ten years old and I loved music." },
        ]
    },
    {
        id: "fr-g-a2-3",
        level: "A2",
        title: "Passé Composé vs Imparfait — The Key Contrast",
        explanation: {
            native: `Using the passé composé and imparfait together correctly is the central challenge of A2 French. Both describe the past but they do completely different jobs in a sentence. Understanding when to use each one transforms your ability to tell stories and describe past events.

THE CORE DISTINCTION

PASSÉ COMPOSÉ — completed events, specific moments, actions that move the story forward:
  → What happened? What did someone do?
  → Actions with a clear beginning or end
  → A sequence of events

IMPARFAIT — background, states, descriptions, habits:
  → What was it like? What was going on?
  → Ongoing situations with no defined end
  → Repeated or habitual actions

THE FILM ANALOGY
Think of the imparfait as the camera slowly panning across a scene — describing what things looked like, what was happening. The passé composé is when something suddenly happens and changes the scene.

WORKING TOGETHER IN A SENTENCE
The imparfait sets the scene; the passé composé interrupts or advances it:

  Il lisait quand le téléphone a sonné.
  He was reading (imparfait — ongoing) when the phone rang (passé composé — event).

  Je dormais quand tu es arrivé.
  I was sleeping (imparfait) when you arrived (passé composé).

  Elle faisait ses devoirs et écoutait de la musique.
  She was doing her homework and listening to music. (both ongoing — imparfait)

  Elle a fait ses devoirs et a écouté de la musique.
  She did her homework and listened to music. (both completed — passé composé)

SIGNAL WORDS

Passé composé:             Imparfait:
soudain (suddenly)         toujours (always)
un jour (one day)          souvent (often)
hier (yesterday)           tous les jours (every day)
une fois (once)            d'habitude (usually)
puis (then)                à cette époque (at that time)
enfin (finally)            quand j'étais enfant (when I was a child)

COMMON PATTERNS

State that was interrupted:
  Je mangeais quand il est entré.     I was eating when he came in.

State vs event:
  J'avais faim, alors j'ai mangé.     I was hungry (state), so I ate (action).

Change of state (passé composé):
  Soudain, elle a eu peur.     Suddenly, she became afraid.
  (the moment fear began — passé composé, not imparfait)`,
            target: `Utiliser le passé composé et l'imparfait ensemble est le défi principal du niveau A2. Les deux décrivent le passé, mais ils ont des fonctions différentes.

LA DISTINCTION PRINCIPALE

PASSÉ COMPOSÉ — événements complétés, actions qui font avancer l'histoire :
  → Qu'est-ce qui s'est passé ?
  → Actions avec un début ou une fin claire

IMPARFAIT — fond, états, descriptions, habitudes :
  → Comment c'était ? Qu'est-ce qui se passait ?
  → Situations continues sans fin définie

L'ANALOGIE DU FILM
L'imparfait = la caméra qui décrit la scène.
Le passé composé = quelque chose qui arrive et change la scène.

LES DEUX TEMPS ENSEMBLE
  Il lisait quand le téléphone a sonné.
  (lisait = imparfait/fond ; a sonné = passé composé/événement)

  Je dormais quand tu es arrivé.
  (dormais = imparfait ; es arrivé = passé composé)

MOTS INDICATEURS

Passé composé :            Imparfait :
soudain, un jour, hier,    toujours, souvent, tous les jours,
une fois, puis, enfin      d'habitude, à cette époque`
        },
        examples: [
            { native: "Je lisais quand il a appelé.", translation: "I was reading (imparfait) when he called (passé composé)." },
            { native: "Il faisait beau alors nous sommes sortis.", translation: "The weather was nice (imparfait) so we went out (passé composé)." },
            { native: "Quand j'étais enfant, j'adorais le chocolat.", translation: "When I was a child, I loved chocolate. (habit → imparfait)" },
            { native: "Hier, j'ai travaillé toute la journée.", translation: "Yesterday, I worked all day. (completed → passé composé)" },
            { native: "Elle parlait avec son amie quand le bus est arrivé.", translation: "She was talking with her friend when the bus arrived." },
            { native: "Soudain, il a commencé à pleuvoir.", translation: "Suddenly, it started to rain. (sudden event → passé composé)" },
        ]
    },
    {
        id: "fr-g-a2-4",
        level: "A2",
        title: "Le Futur Simple",
        explanation: {
            native: `The futur simple expresses future events, predictions, and promises. At A1 you learned the futur proche (aller + infinitive) for plans and intentions. The futur simple is used for more distant or less certain futures, predictions, and formal contexts.

FORMATION — add these endings to the infinitive (keep the full infinitive for -er and -ir verbs; drop the final -e for -re verbs):
  -ai, -as, -a, -ons, -ez, -ont

  parler:   je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront
  finir:    je finirai, tu finiras, il finira...
  attendre: j'attendrai (drop -e), tu attendras...

IRREGULAR STEMS — endings stay the same, stem changes:
  être    → ser-     je serai
  avoir   → aur-     j'aurai
  aller   → ir-      j'irai
  faire   → fer-     je ferai
  venir   → viendr-  je viendrai
  voir    → verr-    je verrai
  pouvoir → pourr-   je pourrai
  vouloir → voudr-   je voudrai
  savoir  → saur-    je saurai
  devoir  → devr-    je devrai
  tenir   → tiendr-  je tiendrai
  envoyer → enverr-  j'enverrai
  courir  → courr-   je courrai
  mourir  → mourr-   je mourrai

FUTUR SIMPLE vs FUTUR PROCHE

Both express the future but with different nuance:

Futur proche (aller + inf.) — immediate plans, decided intentions:
  Je vais partir demain.    I'm going to leave tomorrow. (it's decided)

Futur simple — predictions, distant future, less certain, formal:
  Un jour, je partirai en voyage.    One day, I'll go travelling.
  Il pleuvra demain.                 It will rain tomorrow. (weather prediction)

In everyday spoken French, the futur proche is far more common.
The futur simple is more common in writing and formal speech.

AFTER QUAND — futur simple required
In English we use present after 'when'. In French, future is required:
  Quand tu arriveras, appelle-moi.
  When you arrive (lit. will arrive), call me.
  This is a key difference from English.`,
            target: `Le futur simple exprime des événements futurs, des prédictions et des promesses.

FORMATION — on ajoute ces terminaisons à l'infinitif :
  -ai, -as, -a, -ons, -ez, -ont

  parler → je parlerai, tu parleras, il parlera, nous parlerons...
  finir → je finirai...
  attendre → j'attendrai (on enlève le -e final)

RADICAUX IRRÉGULIERS — les terminaisons restent les mêmes :
  être → ser- (je serai)     avoir → aur- (j'aurai)
  aller → ir- (j'irai)       faire → fer- (je ferai)
  venir → viendr-            voir → verr-
  pouvoir → pourr-           vouloir → voudr-

FUTUR SIMPLE vs FUTUR PROCHE
  Futur proche — plans immédiats et décidés :
    Je vais partir demain. (c'est décidé)
  Futur simple — prédictions, futur lointain, contexte formel :
    Un jour, je partirai en voyage.
    Il pleuvra demain.

APRÈS QUAND — le futur simple est obligatoire :
  Quand tu arriveras, appelle-moi.
  (En anglais on utilise le présent après "when", mais en français on utilise le futur.)`
        },
        examples: [
            { native: "Demain, il fera beau.", translation: "Tomorrow, the weather will be nice. (prediction)" },
            { native: "J'irai en France l'année prochaine.", translation: "I will go to France next year." },
            { native: "Quand tu arriveras, appelle-moi.", translation: "When you arrive, call me. (quand + futur simple)" },
            { native: "Elle sera médecin un jour.", translation: "She will be a doctor one day." },
            { native: "Nous aurons plus de temps la semaine prochaine.", translation: "We will have more time next week." },
            { native: "Tu verras — ce sera fantastique!", translation: "You'll see — it will be fantastic!" },
        ]
    },
    {
        id: "fr-g-a2-5",
        level: "A2",
        title: "Le Conditionnel — Politesse et Hypothèses",
        explanation: {
            native: `The conditional expresses polite requests, wishes, hypothetical situations, and advice. At A2, focus on the present conditional, which is extremely common in everyday French.

FORMATION — same irregular stems as the futur simple + imparfait endings:
  -ais, -ais, -ait, -ions, -iez, -aient

  parler:   je parlerais, tu parlerais, il parlerait, nous parlerions, vous parleriez, ils parleraient
  être:     je serais, tu serais, il serait...
  avoir:    j'aurais, tu aurais, il aurait...
  aller:    j'irais...
  faire:    je ferais...
  pouvoir:  je pourrais...
  vouloir:  je voudrais...
  devoir:   je devrais...

FOUR KEY USES AT A2

1. POLITE REQUESTS — the most important use:
  Je voudrais un café, s'il vous plaît.    I would like a coffee, please.
  Je pourrais avoir l'addition?             Could I have the bill?
  Vous pourriez parler plus lentement?      Could you speak more slowly?

2. WISHES AND DESIRES:
  J'aimerais voyager en Asie.              I would like to travel in Asia.
  Il aimerait apprendre le piano.          He would like to learn piano.

3. ADVICE WITH DEVOIR:
  Tu devrais te reposer.                   You should rest.
  Il devrait aller chez le médecin.        He should go to the doctor.

4. HYPOTHETICAL SITUATIONS (with si — see fr-g-a2-13):
  Si j'avais le temps, je voyagerais plus. If I had time, I would travel more.

CONDITIONNEL vs PRÉSENT vs FUTUR
  Je veux un café.        I want a coffee.        (present — direct)
  Je voudrais un café.    I would like a coffee.  (conditional — polite)
  Je vais prendre un café. I'm going to have a coffee. (futur proche — decided)

COMMON CONDITIONAL PHRASES
  Je voudrais...          I would like...
  J'aimerais...           I would love...
  Ce serait bien.         That would be nice.
  Tu pourrais...?         Could you...?
  Il faudrait...          One should... / It would be necessary...
  À ta place, je...       If I were you, I would...`,
            target: `Le conditionnel exprime des demandes polies, des souhaits, des situations hypothétiques et des conseils.

FORMATION — mêmes radicaux irréguliers que le futur simple + terminaisons de l'imparfait :
  -ais, -ais, -ait, -ions, -iez, -aient

  parler → je parlerais, tu parlerais, il parlerait...
  être → je serais...     avoir → j'aurais...
  pouvoir → je pourrais... vouloir → je voudrais...
  devoir → je devrais...

QUATRE UTILISATIONS PRINCIPALES

1. DEMANDES POLIES :
  Je voudrais un café, s'il vous plaît.
  Vous pourriez parler plus lentement ?

2. SOUHAITS :
  J'aimerais voyager en Asie.

3. CONSEILS AVEC DEVOIR :
  Tu devrais te reposer.
  Il devrait aller chez le médecin.

4. SITUATIONS HYPOTHÉTIQUES (avec si) :
  Si j'avais le temps, je voyagerais plus.

EXPRESSIONS UTILES :
  Je voudrais... / J'aimerais... / Ce serait bien.
  Tu pourrais... ? / À ta place, je...`
        },
        examples: [
            { native: "Je voudrais réserver une table pour deux.", translation: "I would like to book a table for two." },
            { native: "Vous pourriez répéter, s'il vous plaît?", translation: "Could you repeat, please?" },
            { native: "Tu devrais dormir plus.", translation: "You should sleep more." },
            { native: "J'aimerais vivre à Paris.", translation: "I would love to live in Paris." },
            { native: "Ce serait fantastique!", translation: "That would be fantastic!" },
            { native: "À ta place, je parlerais au professeur.", translation: "If I were you, I would talk to the teacher." },
        ]
    },
    {
        id: "fr-g-a2-6",
        level: "A2",
        title: "Les Pronoms COD — Direct Object Pronouns",
        explanation: {
            native: `Direct object pronouns replace a noun that directly receives the action of the verb — the thing or person being acted upon. Using them avoids repetition and makes speech sound natural.

THE FORMS
  me / m'    me
  te / t'    you (informal)
  le / l'    him / it (masculine)
  la / l'    her / it (feminine)
  nous       us
  vous       you (formal or plural)
  les        them (masc. or fem.)

POSITION — before the conjugated verb:
  Tu vois Marie? — Oui, je la vois.      Do you see Marie? — Yes, I see her.
  Tu prends le bus? — Non, je ne le prends pas.

Before a vowel, le and la contract to l':
  Tu aides André? — Oui, je l'aide.

POSITION WITH INFINITIVES
The pronoun goes before the infinitive, not the conjugated verb:
  Je vais le voir demain.          I'm going to see him tomorrow.
  Tu peux m'aider?                 Can you help me?
  Elle ne veut pas le faire.       She doesn't want to do it.

POSITION IN THE PASSÉ COMPOSÉ
The pronoun goes before the auxiliary avoir or être:
  Tu as vu le film? — Oui, je l'ai vu.     Did you see the film? — Yes, I saw it.
  Elle a pris les clés? — Non, elle ne les a pas prises.

AGREEMENT IN THE PASSÉ COMPOSÉ
When a direct object pronoun precedes avoir, the past participle agrees:
  J'ai vu Marie. → Je l'ai vue.           (la → feminine agreement)
  J'ai pris les livres. → Je les ai pris. (les → masculine plural — no change)
  J'ai pris les pommes. → Je les ai prises. (les → feminine plural)

NEGATIVE — ne...pas wraps the pronoun + verb:
  Je ne le vois pas.        I don't see him.
  Je ne l'ai pas vu.        I didn't see him.`,
            target: `Les pronoms COD remplacent un nom qui reçoit directement l'action du verbe.

LES FORMES :
  me/m' (me), te/t' (te), le/l' (le/lui), la/l' (la/elle), nous, vous, les (les/eux/elles)

POSITION — avant le verbe conjugué :
  Tu vois Marie ? — Oui, je la vois.
  Tu prends le bus ? — Non, je ne le prends pas.

Avant une voyelle, le/la deviennent l' :
  Tu aides André ? — Oui, je l'aide.

AVEC UN INFINITIF — le pronom précède l'infinitif :
  Je vais le voir demain.
  Tu peux m'aider ?

AU PASSÉ COMPOSÉ — le pronom précède l'auxiliaire :
  Tu as vu le film ? — Oui, je l'ai vu.

ACCORD AU PASSÉ COMPOSÉ
Quand un pronom COD précède avoir, le participe passé s'accorde :
  Je l'ai vue. (la → féminin)
  Je les ai prises. (les → féminin pluriel)

NÉGATION :
  Je ne le vois pas. / Je ne l'ai pas vu.`
        },
        examples: [
            { native: "Tu connais ce restaurant? — Oui, je le connais bien.", translation: "Do you know this restaurant? — Yes, I know it well." },
            { native: "Elle m'a appelé hier soir.", translation: "She called me last night." },
            { native: "Je vais les inviter à la fête.", translation: "I'm going to invite them to the party." },
            { native: "Tu as lu ce livre? — Non, je ne l'ai pas encore lu.", translation: "Have you read this book? — No, I haven't read it yet." },
            { native: "Je l'ai vue ce matin.", translation: "I saw her this morning. (la → vue — feminine agreement)" },
            { native: "Il ne nous comprend pas.", translation: "He doesn't understand us." },
        ]
    },
    {
        id: "fr-g-a2-7",
        level: "A2",
        title: "Les Pronoms COI — Indirect Object Pronouns",
        explanation: {
            native: `Indirect object pronouns replace a noun introduced by à — they indicate to whom or for whom something is done. They are essential for talking about communication and giving.

THE FORMS
  me / m'    to me
  te / t'    to you
  lui        to him / to her
  nous       to us
  vous       to you
  leur       to them

Note: lui and leur do not show gender — lui means both 'to him' and 'to her'.

POSITION — same as direct object pronouns, before the conjugated verb:
  Je lui parle.                   I speak to him/her.
  Je leur écris.                  I write to them.
  Il ne m'a pas répondu.          He didn't answer me.

COMMON VERBS THAT TAKE INDIRECT OBJECTS (+ à + person):
  parler à      → lui parler         to speak to him/her
  écrire à      → lui écrire         to write to him/her
  téléphoner à  → lui téléphoner     to call him/her
  répondre à    → lui répondre       to answer him/her
  donner à      → lui donner         to give to him/her
  dire à        → lui dire           to say to him/her
  demander à    → lui demander       to ask him/her
  envoyer à     → lui envoyer        to send to him/her
  montrer à     → lui montrer        to show him/her

COD vs COI — the key distinction:
  Je la vois.        I see her.          (la = direct object — no à)
  Je lui parle.      I speak to her.     (lui = indirect object — replaces à + person)

  Je le regarde.     I watch him.        (direct — no à)
  Je lui souris.     I smile at him.     (indirect — sourire à quelqu'un)

NO AGREEMENT WITH AVOIR
Unlike direct object pronouns, indirect object pronouns never trigger past participle agreement:
  Je lui ai donné le livre. ✓  (no agreement — lui is indirect)
  Je l'ai donnée à Marie. ✓    (agreement — la is direct, replaces 'Marie')`,
            target: `Les pronoms COI remplacent un nom introduit par à — ils indiquent à qui quelque chose est fait.

LES FORMES :
  me/m' (à moi), te/t' (à toi), lui (à lui/elle), nous, vous, leur (à eux/elles)

Note : lui et leur ne montrent pas le genre.

POSITION — avant le verbe conjugué :
  Je lui parle. / Je leur écris. / Il ne m'a pas répondu.

VERBES COURANTS AVEC UN COI :
  parler à, écrire à, téléphoner à, répondre à, donner à,
  dire à, demander à, envoyer à, montrer à

COD vs COI :
  Je la vois. (la = COD — pas de à)
  Je lui parle. (lui = COI — remplace à + personne)

PAS D'ACCORD AU PASSÉ COMPOSÉ :
  Je lui ai donné le livre. (pas d'accord — lui est COI)`
        },
        examples: [
            { native: "Je lui ai téléphoné ce matin.", translation: "I called him/her this morning." },
            { native: "Tu peux lui dire bonjour de ma part?", translation: "Can you say hello to him/her from me?" },
            { native: "Nous leur avons envoyé une invitation.", translation: "We sent them an invitation." },
            { native: "Elle ne m'a pas répondu.", translation: "She didn't answer me." },
            { native: "Il lui a donné un cadeau.", translation: "He gave her/him a present." },
            { native: "Je leur parle tous les jours.", translation: "I speak to them every day." },
        ]
    },
    {
        id: "fr-g-a2-8",
        level: "A2",
        title: "Les Pronoms Y et EN",
        explanation: {
            native: `Y and en are two essential pronouns that replace specific types of phrases. They appear constantly in French and are required for natural-sounding speech.

LE PRONOM Y

Y replaces:
1. A place introduced by à, en, dans, sur, chez, etc.:
  Tu vas à Paris? — Oui, j'y vais.         Are you going to Paris? — Yes, I'm going there.
  Elle est au bureau? — Oui, elle y est.    Is she at the office? — Yes, she's there.

2. A thing or idea introduced by à (not a person):
  Tu penses à ton voyage? — Oui, j'y pense.   Are you thinking about your trip? — Yes, I'm thinking about it.
  Il répond à l'email? — Oui, il y répond.

Note: y cannot replace à + a person — use lui/leur instead:
  Je pense à Marie. → Je pense à elle. (not: j'y pense)
  Je lui parle. (à + person → lui, not y)

LE PRONOM EN

En replaces:
1. A quantity introduced by de / du / de la / des:
  Tu veux du café? — Oui, j'en veux.        Do you want coffee? — Yes, I want some.
  Elle a des enfants? — Oui, elle en a deux. Does she have children? — Yes, she has two.

2. A place meaning 'from there':
  Tu viens de Paris? — Oui, j'en viens.      Are you from Paris? — Yes, I'm from there.

3. A thing introduced by de (after verbs/adjectives + de):
  Tu parles de ton projet? — Oui, j'en parle. Are you talking about your project? — Yes.
  Il a besoin d'aide? — Oui, il en a besoin.

POSITION — before the conjugated verb, same as other pronouns:
  J'y vais. / Je n'y vais pas. / Je vais y aller.

WITH NUMBERS — en is required even when a number follows:
  Tu as des frères? — Oui, j'en ai deux.    Yes, I have two (of them).
  ✗ Oui, j'ai deux. (incorrect in French — en must be present)`,
            target: `Y et en sont deux pronoms essentiels qui remplacent des types de groupes nominaux spécifiques.

LE PRONOM Y remplace :
1. Un lieu introduit par à, en, dans, sur, chez... :
  Tu vas à Paris ? — Oui, j'y vais.
  Elle est au bureau ? — Oui, elle y est.

2. Une chose ou idée introduite par à (pas une personne) :
  Tu penses à ton voyage ? — Oui, j'y pense.

Note : y ne peut pas remplacer à + une personne → utiliser lui/leur.

LE PRONOM EN remplace :
1. Une quantité introduite par de/du/de la/des :
  Tu veux du café ? — Oui, j'en veux.
  Elle a des enfants ? — Oui, elle en a deux.

2. Un lieu (sens « de là ») :
  Tu viens de Paris ? — Oui, j'en viens.

3. Une chose introduite par de :
  Tu parles de ton projet ? — Oui, j'en parle.

AVEC LES NOMBRES — en est obligatoire :
  Tu as des frères ? — Oui, j'en ai deux. (pas : j'ai deux ✗)`
        },
        examples: [
            { native: "Tu vas au supermarché? — Oui, j'y vais.", translation: "Are you going to the supermarket? — Yes, I'm going there." },
            { native: "Tu as de l'argent? — Oui, j'en ai un peu.", translation: "Do you have money? — Yes, I have a little." },
            { native: "Vous pensez à votre voyage? — Oui, nous y pensons.", translation: "Are you thinking about your trip? — Yes, we're thinking about it." },
            { native: "Il vient de Lyon — il en vient.", translation: "He's from Lyon — he's from there." },
            { native: "Tu as des frères et sœurs? — Oui, j'en ai trois.", translation: "Do you have siblings? — Yes, I have three." },
            { native: "J'y vais tous les jours.", translation: "I go there every day." },
        ]
    },
    {
        id: "fr-g-a2-9",
        level: "A2",
        title: "Les Pronoms Relatifs — Qui et Que",
        explanation: {
            native: `Relative clauses add information about a noun. Qui and que are the two most important relative pronouns at A2. They connect two ideas about the same noun and allow you to build longer, more sophisticated sentences.

QUI — subject of the relative clause
Qui replaces the subject — the noun performing the action in the relative clause.
  L'homme qui parle est mon père.       The man who is speaking is my father.
  Le train qui arrive est en retard.    The train that is arriving is late.
  J'ai un ami qui parle cinq langues.   I have a friend who speaks five languages.

Test: if a verb follows immediately after qui, qui is the subject.

QUE / QU' — object of the relative clause
Que replaces the direct object — the noun receiving the action.
  Le film que j'ai vu était excellent.  The film (that) I saw was excellent.
  La fille que tu connais s'appelle Léa. The girl (that) you know is called Léa.
  C'est le livre qu'elle m'a offert.    It's the book she gave me.

Before a vowel, que contracts to qu':
  Le café qu'il aime est très fort.     The coffee (that) he likes is very strong.

AGREEMENT WITH QUE IN THE PASSÉ COMPOSÉ
When que precedes a passé composé with avoir, the past participle agrees with the antecedent:
  La robe que j'ai achetée est rouge.   (robe = feminine → achetée)
  Les livres que tu as lus sont bons.   (livres = masculine plural → lus)

KEY DIFFERENCES

QUI:                              QUE/QU':
subject of relative clause        direct object of relative clause
followed directly by a verb       followed by a subject + verb
never contracts                   contracts to qu' before vowel
no agreement effect               triggers agreement in passé composé

BOTH QUI AND QUE CANNOT BE OMITTED in French, unlike 'that' in English:
  The book I bought. → Le livre que j'ai acheté. (que cannot be dropped)`,
            target: `Les propositions relatives donnent des informations sur un nom. Qui et que sont les deux pronoms relatifs les plus importants au niveau A2.

QUI — sujet de la proposition relative
Qui remplace le sujet — le nom qui fait l'action :
  L'homme qui parle est mon père.
  J'ai un ami qui parle cinq langues.

Test : si un verbe suit directement, qui est le sujet.

QUE/QU' — objet direct de la proposition relative
Que remplace l'objet direct — le nom qui reçoit l'action :
  Le film que j'ai vu était excellent.
  C'est le livre qu'elle m'a offert.

Devant une voyelle, que → qu'.

ACCORD AVEC QUE AU PASSÉ COMPOSÉ
Quand que précède un passé composé avec avoir, le participe s'accorde :
  La robe que j'ai achetée est rouge. (robe = féminin)
  Les livres que tu as lus sont bons. (livres = masc. pluriel)

DIFFÉRENCE PRINCIPALE :
  QUI → suivi directement d'un verbe (sujet)
  QUE → suivi d'un sujet + verbe (objet direct)

Ni qui ni que ne peuvent être omis en français.`
        },
        examples: [
            { native: "C'est l'ami qui m'a aidé.", translation: "It's the friend who helped me. (qui = subject)" },
            { native: "Le restaurant que tu recommandes est fermé.", translation: "The restaurant (that) you recommend is closed. (que = object)" },
            { native: "J'ai une collègue qui parle quatre langues.", translation: "I have a colleague who speaks four languages." },
            { native: "La chanson qu'il écoute est magnifique.", translation: "The song (that) he's listening to is beautiful." },
            { native: "Les photos que j'ai prises sont floues.", translation: "The photos (that) I took are blurry. (que → agreement: prises)" },
            { native: "C'est lui qui a dit ça.", translation: "It's him who said that." },
        ]
    },
    {
        id: "fr-g-a2-10",
        level: "A2",
        title: "Comparatifs et Superlatifs",
        explanation: {
            native: `Comparatives and superlatives allow you to compare people, things, and actions.

COMPARATIVES

More than: plus + adjective/adverb + que
  Paris est plus grand que Lyon.         Paris is bigger than Lyon.
  Elle parle plus vite que moi.          She speaks faster than me.

Less than: moins + adjective/adverb + que
  Ce livre est moins cher que l'autre.   This book is less expensive than the other.

As...as: aussi + adjective/adverb + aussi
  Il est aussi grand que son frère.      He is as tall as his brother.

IRREGULAR COMPARATIVES
  bon/bonne → meilleur/meilleure (better — NOT plus bon)
  bien → mieux (better — for adverbs)
  mauvais → pire (worse — also plus mauvais is used)
  mal → pis (worse — also plus mal is used)

  Ce restaurant est meilleur que l'autre.   This restaurant is better than the other.
  Je me sens mieux aujourd'hui.             I feel better today.

SUPERLATIVES

The most: le/la/les plus + adjective (+ de for context)
  C'est le film le plus intéressant.         It's the most interesting film.
  C'est la ville la plus belle de France.    It's the most beautiful city in France.

The least: le/la/les moins + adjective
  C'est la solution la moins compliquée.     It's the least complicated solution.

POSITION OF SUPERLATIVE ADJECTIVES
If the adjective normally follows the noun, the superlative also follows:
  le restaurant le plus cher       the most expensive restaurant
If the adjective normally precedes the noun, the superlative precedes too:
  le plus grand restaurant         the biggest restaurant

IRREGULAR SUPERLATIVES
  bon → le meilleur / la meilleure
  bien → le mieux
  mauvais → le pire / le plus mauvais

COMPARING QUANTITIES
  plus de + noun + que      more...than
  moins de + noun + que     less/fewer...than
  autant de + noun + que    as much/many...as
  Il a plus d'amis que moi.    He has more friends than me.`,
            target: `Les comparatifs et superlatifs permettent de comparer des personnes, des choses et des actions.

COMPARATIFS
  plus + adjectif/adverbe + que → Paris est plus grand que Lyon.
  moins + adjectif/adverbe + que → Ce livre est moins cher que l'autre.
  aussi + adjectif/adverbe + que → Il est aussi grand que son frère.

COMPARATIFS IRRÉGULIERS :
  bon → meilleur (mieux pour les adverbes)
  mauvais → pire (plus mauvais aussi possible)

SUPERLATIFS
  le/la/les plus + adjectif (+ de) :
    C'est le film le plus intéressant.
    C'est la ville la plus belle de France.
  le/la/les moins + adjectif :
    C'est la solution la moins compliquée.

SUPERLATIFS IRRÉGULIERS :
  bon → le meilleur / la meilleure
  bien → le mieux

COMPARER DES QUANTITÉS :
  plus de / moins de / autant de + nom + que
  Il a plus d'amis que moi.`
        },
        examples: [
            { native: "Ce film est plus intéressant que le premier.", translation: "This film is more interesting than the first one." },
            { native: "Elle parle moins vite que lui.", translation: "She speaks less quickly than him." },
            { native: "C'est le meilleur café de la ville.", translation: "It's the best coffee in the city. (irregular: bon → meilleur)" },
            { native: "Je me sens mieux aujourd'hui.", translation: "I feel better today. (irregular: bien → mieux)" },
            { native: "C'est la plus belle ville que j'ai visitée.", translation: "It's the most beautiful city I have visited." },
            { native: "Il a autant de patience que sa mère.", translation: "He has as much patience as his mother." },
        ]
    },
    {
        id: "fr-g-a2-11",
        level: "A2",
        title: "Les Adverbes en -ment",
        explanation: {
            native: `Adverbs modify verbs, adjectives, or other adverbs. Many French adverbs are formed from adjectives by adding -ment — equivalent to the English -ly suffix.

FORMATION RULES

1. ADJECTIVE ENDS IN A VOWEL — add -ment directly to the masculine form:
  vrai → vraiment          (truly)
  poli → poliment          (politely)
  facile → facilement      (easily)
  rapide → rapidement      (quickly)
  rare → rarement          (rarely)

2. ADJECTIVE ENDS IN A CONSONANT — add -ment to the FEMININE form:
  lent → lente → lentement       (slowly)
  doux → douce → doucement       (gently, softly)
  heureux → heureuse → heureusement  (happily, fortunately)
  actif → active → activement    (actively)
  naturel → naturelle → naturellement (naturally)

3. ADJECTIVES ENDING IN -ant OR -ent → -amment / -emment (both pronounced -amment):
  courant → couramment      (fluently)
  fréquent → fréquemment    (frequently)
  évident → évidemment      (obviously)
  récent → récemment        (recently)
  patient → patiemment      (patiently)

IRREGULAR ADVERBS — must memorise:
  bon → bien          (well — not bonnement)
  mauvais → mal       (badly)
  meilleur → mieux    (better)
  petit → peu         (little, not much)

POSITION
Adverbs of manner follow the conjugated verb:
  Elle parle lentement.         She speaks slowly.
  Il travaille sérieusement.    He works seriously.

In compound tenses, short common adverbs go between auxiliary and participle:
  Il a bien dormi.              He slept well.
  Nous avons vraiment aimé.     We really liked it.

Longer adverbs typically go after the past participle:
  Elle a parlé lentement.       She spoke slowly.`,
            target: `Les adverbes modifient des verbes, adjectifs ou d'autres adverbes. Beaucoup d'adverbes français se forment en ajoutant -ment à un adjectif.

RÈGLES DE FORMATION

1. ADJECTIF TERMINÉ PAR UNE VOYELLE → ajouter -ment au masculin :
  vrai → vraiment,  poli → poliment,  facile → facilement

2. ADJECTIF TERMINÉ PAR UNE CONSONNE → ajouter -ment au FÉMININ :
  lent → lente → lentement
  doux → douce → doucement
  heureux → heureuse → heureusement

3. ADJECTIFS EN -ant OU -ent → -amment / -emment :
  courant → couramment,  fréquent → fréquemment,  évident → évidemment

ADVERBES IRRÉGULIERS :
  bon → bien,  mauvais → mal,  meilleur → mieux,  petit → peu

POSITION
  Adverbes de manière → après le verbe conjugué :
    Elle parle lentement.
  Dans les temps composés, les adverbes courts → entre auxiliaire et participe :
    Il a bien dormi. / Nous avons vraiment aimé.`
        },
        examples: [
            { native: "Elle parle français couramment.", translation: "She speaks French fluently. (-ant → -amment)" },
            { native: "Il conduit lentement.", translation: "He drives slowly. (lent → lente → lentement)" },
            { native: "Heureusement, personne n'a été blessé.", translation: "Fortunately, nobody was hurt." },
            { native: "J'ai vraiment apprécié ce repas.", translation: "I really appreciated this meal. (vraiment — short adverb between aux. and participle)" },
            { native: "Parle plus doucement, s'il te plaît.", translation: "Speak more softly, please." },
            { native: "Il répond rarement aux emails.", translation: "He rarely answers emails." },
        ]
    },
    {
        id: "fr-g-a2-12",
        level: "A2",
        title: "Les Expressions Impersonnelles — Il Faut, Il Est...",
        explanation: {
            native: `Impersonal expressions use il as a fixed subject that doesn't refer to any real person or thing. They are essential for expressing necessity, possibility, and general truths.

IL FAUT — necessity / obligation
Il faut is the most important impersonal expression. It means 'it is necessary', 'one must', 'you have to'.
  il faut + infinitive:
  Il faut réserver.           One must book / You have to book.
  Il faut partir maintenant.  We need to leave now.
  Il ne faut pas fumer ici.   You must not smoke here.

  il faut + noun:
  Il faut du courage.         Courage is needed / You need courage.
  Il faut du temps.           It takes time.

IL EST + ADJECTIVE + DE + INFINITIVE
These expressions give evaluations and opinions:
  Il est important de...      It is important to...
  Il est possible de...       It is possible to...
  Il est impossible de...     It is impossible to...
  Il est facile de...         It is easy to...
  Il est difficile de...      It is difficult to...
  Il est nécessaire de...     It is necessary to...
  Il est interdit de...       It is forbidden to...

  Il est important de parler lentement.   It is important to speak slowly.
  Il est possible de réserver en ligne.   It is possible to book online.
  Il est interdit de fumer.               It is forbidden to smoke.

IL Y A — there is / there are (see fr-g-a1-32)
Already covered at A1 — review if needed.

IL FAIT — weather expressions (see fr-g-a1-30)
Already covered at A1.

OTHER COMMON IMPERSONAL EXPRESSIONS:
  Il paraît que...       It seems that... / Apparently...
  Il s'agit de...        It's about... / It concerns...
  Il vaut mieux...       It's better to...
  Il suffit de...        It's enough to... / All you need to do is...

  Il vaut mieux attendre.          It's better to wait.
  Il suffit de cliquer ici.        You just need to click here.
  Il paraît qu'il va pleuvoir.     Apparently it's going to rain.`,
            target: `Les expressions impersonnelles utilisent il comme sujet fixe qui ne se réfère pas à une vraie personne ou chose.

IL FAUT — nécessité / obligation
  il faut + infinitif :
    Il faut réserver. / Il faut partir maintenant.
    Il ne faut pas fumer ici.
  il faut + nom :
    Il faut du courage. / Il faut du temps.

IL EST + ADJECTIF + DE + INFINITIF :
  Il est important de parler lentement.
  Il est possible de réserver en ligne.
  Il est interdit de fumer.
  → important, possible, impossible, facile, difficile, nécessaire, interdit

AUTRES EXPRESSIONS IMPERSONNELLES :
  Il vaut mieux attendre. (Il vaut mieux + infinitif)
  Il suffit de cliquer ici.
  Il paraît qu'il va pleuvoir.
  Il s'agit de...`
        },
        examples: [
            { native: "Il faut réserver à l'avance.", translation: "You have to book in advance." },
            { native: "Il ne faut pas arriver en retard.", translation: "You must not arrive late." },
            { native: "Il est important d'écouter attentivement.", translation: "It is important to listen carefully." },
            { native: "Il est interdit de prendre des photos ici.", translation: "It is forbidden to take photos here." },
            { native: "Il vaut mieux appeler avant de venir.", translation: "It's better to call before coming." },
            { native: "Il suffit de remplir ce formulaire.", translation: "You just need to fill in this form." },
        ]
    },
    {
        id: "fr-g-a2-13",
        level: "A2",
        title: "Les Phrases avec SI — Conditionnelles",
        explanation: {
            native: `Si (if) clauses express conditions and their consequences. At A2, there are two key patterns. Learning to recognise which tense combination to use is essential.

PATTERN 1 — REAL / LIKELY CONDITION (si + present → future)
The condition is realistic or possible. This is the most common pattern at A2.
  Si + present tense → future simple (or imperative, or present)

  Si tu travailles, tu réussiras.      If you work, you will succeed.
  S'il fait beau, nous irons au parc.  If the weather is nice, we will go to the park.
  Si tu as faim, mange quelque chose.  If you're hungry, eat something. (imperative)
  Si c'est vrai, c'est grave.          If it's true, it's serious. (present result)

PATTERN 2 — HYPOTHETICAL / UNLIKELY CONDITION (si + imparfait → conditionnel)
The condition is imaginary or contrary to reality. This extends into A2/B1.
  Si + imparfait → conditional present

  Si j'avais le temps, je voyagerais.    If I had time, I would travel.
  Si tu venais, ce serait super.         If you came, it would be great.
  Si j'étais riche, j'achèterais...      If I were rich, I would buy...

IMPORTANT RULES
1. Si NEVER combines directly with the future or conditional:
  ✗ Si tu viendras...    (incorrect)
  ✓ Si tu viens...       (present tense after si)

2. The si clause can come first or second — meaning doesn't change:
  Si tu as faim, mange. = Mange, si tu as faim.

3. Si contracts to s' before il and ils only:
  S'il fait beau...     If the weather is nice...
  S'ils viennent...     If they come...
  Si elle vient... (no contraction before elle — starts with vowel but no contraction)

COMMON SI CLAUSE STARTERS
  Si tu veux...          If you want...
  Si c'est possible...   If it's possible...
  Si j'étais toi...      If I were you...
  Si on allait...?       What if we went...? (suggestion)`,
            target: `Les phrases avec si expriment des conditions et leurs conséquences. Au niveau A2, il y a deux structures principales.

STRUCTURE 1 — CONDITION RÉELLE (si + présent → futur)
La condition est réaliste ou possible.
  Si + présent → futur simple (ou impératif, ou présent)

  Si tu travailles, tu réussiras.
  S'il fait beau, nous irons au parc.
  Si tu as faim, mange quelque chose.

STRUCTURE 2 — CONDITION HYPOTHÉTIQUE (si + imparfait → conditionnel)
La condition est imaginaire ou contraire à la réalité.
  Si + imparfait → conditionnel présent

  Si j'avais le temps, je voyagerais.
  Si tu venais, ce serait super.

RÈGLES IMPORTANTES :
1. Jamais si + futur ou conditionnel :
  ✗ Si tu viendras... → ✓ Si tu viens...
2. La proposition en si peut venir en premier ou en deuxième.
3. Si → s' seulement devant il et ils :
  S'il fait beau... / S'ils viennent...`
        },
        examples: [
            { native: "Si tu étudies, tu réussiras l'examen.", translation: "If you study, you will pass the exam. (si + present → future)" },
            { native: "S'il fait froid, nous resterons à la maison.", translation: "If it's cold, we'll stay at home." },
            { native: "Si j'étais toi, je lui parlerais.", translation: "If I were you, I would talk to him/her. (si + imparfait → conditional)" },
            { native: "Si tu as le temps, appelle-moi.", translation: "If you have time, call me. (si + present → imperative)" },
            { native: "Si on allait au cinéma ce soir?", translation: "What if we went to the cinema tonight? (suggestion)" },
            { native: "Elle viendrait si elle pouvait.", translation: "She would come if she could. (conditional result)" },
        ]
    },
    {
        id: "fr-g-a2-14",
        level: "A2",
        title: "Le Discours Indirect — Rapporter des Paroles",
        explanation: {
            native: `Indirect speech (le discours indirect) is used to report what someone said without quoting them directly. It is essential for telling stories and recounting conversations.

REPORTING STATEMENTS — dire que
Direct:   Il dit: «Je suis fatigué.»           He says: "I am tired."
Indirect: Il dit qu'il est fatigué.             He says (that) he is tired.

Direct:   Elle a dit: «J'ai faim.»              She said: "I am hungry."
Indirect: Elle a dit qu'elle avait faim.        She said (that) she was hungry.

TENSE CHANGES WHEN THE REPORTING VERB IS IN THE PAST

When the main verb (dire, expliquer, raconter, répondre, annoncer) is in a past tense, the reported speech tense shifts back:

  Direct speech          → Indirect speech (past reporting verb)
  présent                → imparfait
  passé composé          → plus-que-parfait (had done)
  futur simple           → conditionnel présent
  imparfait              → imparfait (no change)

  «Je travaille.» → Il a dit qu'il travaillait.        (présent → imparfait)
  «J'ai mangé.» → Elle a dit qu'elle avait mangé.      (PC → plus-que-parfait)
  «Je viendrai.» → Il a dit qu'il viendrait.           (futur → conditionnel)

Note: the plus-que-parfait (avait mangé) is introduced here for recognition — full coverage at B1.

REPORTING QUESTIONS — demander si / demander + question word
Yes/no questions: demander si
  Direct:   «Tu es prêt?»          Are you ready?
  Indirect: Il m'a demandé si j'étais prêt.    He asked me if I was ready.

Information questions: demander + question word
  Direct:   «Où tu habites?»       Where do you live?
  Indirect: Elle m'a demandé où j'habitais.    She asked me where I lived.
  Direct:   «Qu'est-ce que tu veux?»
  Indirect: Il a demandé ce que je voulais.    He asked what I wanted.

REPORTING COMMANDS — demander de + infinitive
  Direct:   «Parle plus lentement!»
  Indirect: Elle m'a demandé de parler plus lentement.   She asked me to speak more slowly.

PRONOUN SHIFTS
Personal pronouns change to reflect the reporter's perspective:
  «Je pars.» → Il a dit qu'il partait.      (je → il)
  «Nous venons.» → Ils ont dit qu'ils venaient.   (nous → ils)`,
            target: `Le discours indirect permet de rapporter ce que quelqu'un a dit sans le citer directement.

RAPPORTER DES AFFIRMATIONS — dire que :
  Direct : Il dit : « Je suis fatigué. »
  Indirect : Il dit qu'il est fatigué.
  
  Direct : Elle a dit : « J'ai faim. »
  Indirect : Elle a dit qu'elle avait faim.

CHANGEMENTS DE TEMPS (quand le verbe principal est au passé) :
  présent → imparfait
  passé composé → plus-que-parfait
  futur → conditionnel

  « Je travaille. » → Il a dit qu'il travaillait.
  « Je viendrai. » → Il a dit qu'il viendrait.

RAPPORTER DES QUESTIONS :
  Oui/non → demander si :
    « Tu es prêt ? » → Il m'a demandé si j'étais prêt.
  Questions avec mot interrogatif :
    « Où tu habites ? » → Elle m'a demandé où j'habitais.

RAPPORTER DES ORDRES — demander de + infinitif :
  « Parle plus lentement ! » → Elle m'a demandé de parler plus lentement.`
        },
        examples: [
            { native: "Il dit qu'il est fatigué.", translation: "He says (that) he is tired. (present reporting verb — no tense shift)" },
            { native: "Elle a dit qu'elle ne pouvait pas venir.", translation: "She said (that) she couldn't come. (pouvait — imparfait from présent)" },
            { native: "Il m'a demandé si j'avais faim.", translation: "He asked me if I was hungry." },
            { native: "Elle a demandé où j'habitais.", translation: "She asked where I lived." },
            { native: "Le professeur nous a demandé de faire l'exercice.", translation: "The teacher asked us to do the exercise." },
            { native: "Il a annoncé qu'il partirait le lendemain.", translation: "He announced that he would leave the next day. (futur → conditionnel)" },
        ]
    },
    {
        id: "fr-g-a2-15",
        level: "A2",
        title: "Depuis — Duration in the Present",
        explanation: {
            native: `Depuis expresses an action that started in the past and is still continuing in the present. This is a fundamental difference from English, which uses the present perfect ('I have lived here for...') or past simple ('I've been waiting since...'). French uses the PRESENT tense with depuis.

DEPUIS + DURATION (for how long):
  Structure: present tense + depuis + duration
  J'habite ici depuis deux ans.        I have lived here for two years. (and still do)
  Il travaille là depuis six mois.     He has worked there for six months.
  J'attends depuis vingt minutes.      I have been waiting for twenty minutes.

DEPUIS + POINT IN TIME (since when):
  Structure: present tense + depuis + specific time
  Elle étudie le français depuis septembre.    She has been studying French since September.
  Je le connais depuis mon enfance.            I have known him since my childhood.
  Ils sont mariés depuis 1998.                 They have been married since 1998.

ASKING HOW LONG — depuis combien de temps / depuis quand:
  Depuis combien de temps tu habites ici?     How long have you lived here?
  → J'habite ici depuis trois ans.
  Depuis quand tu apprends le français?       Since when have you been learning French?
  → Depuis janvier.

NEGATIVE — passé composé (NOT present + depuis):
  In the negative, use passé composé + depuis:
  Je ne l'ai pas vu depuis deux semaines.     I haven't seen him for two weeks.
  Elle n'a pas travaillé depuis lundi.        She hasn't worked since Monday.

DEPUIS vs IL Y A vs PENDANT
  depuis     ongoing from past to now:    J'habite ici depuis 2020. (still here)
  il y a     completed — X time ago:      J'ai déménagé il y a trois ans. (ago)
  pendant    completed duration:          J'ai habité à Paris pendant deux ans. (no longer)`,
            target: `Depuis exprime une action qui a commencé dans le passé et qui continue dans le présent. En français, on utilise le PRÉSENT avec depuis — contrairement à l'anglais qui utilise le present perfect.

DEPUIS + DURÉE :
  J'habite ici depuis deux ans.
  Il travaille là depuis six mois.
  J'attends depuis vingt minutes.

DEPUIS + POINT DANS LE TEMPS :
  Elle étudie le français depuis septembre.
  Je le connais depuis mon enfance.

DEMANDER LA DURÉE :
  Depuis combien de temps tu habites ici ? → J'habite ici depuis trois ans.
  Depuis quand tu apprends le français ? → Depuis janvier.

NÉGATIF — passé composé + depuis :
  Je ne l'ai pas vu depuis deux semaines.
  Elle n'a pas travaillé depuis lundi.

DEPUIS vs IL Y A vs PENDANT :
  depuis → action continue : J'habite ici depuis 2020. (encore maintenant)
  il y a → il y a combien de temps : J'ai déménagé il y a trois ans. (fini)
  pendant → durée passée et finie : J'ai habité à Paris pendant deux ans.`
        },
        examples: [
            { native: "J'apprends le français depuis six mois.", translation: "I have been learning French for six months. (still learning — present tense)" },
            { native: "Depuis combien de temps tu habites ici?", translation: "How long have you lived here?" },
            { native: "Elle est malade depuis lundi.", translation: "She has been ill since Monday." },
            { native: "Je ne l'ai pas vu depuis deux semaines.", translation: "I haven't seen him for two weeks. (negative — passé composé)" },
            { native: "Il travaille dans cette entreprise depuis dix ans.", translation: "He has worked in this company for ten years." },
            { native: "J'ai commencé il y a trois ans — j'étudie depuis trois ans.", translation: "I started three years ago — I have been studying for three years. (il y a = ago, depuis = for/since)" },
        ]
    },
    {
        id: "fr-g-a2-16",
        level: "A2",
        title: "Les Conjonctions — Connecteurs Avancés",
        explanation: {
            native: `At A1 you learned basic connectors (et, mais, parce que, donc). At A2 you need a richer set of conjunctions and connectors to express time, opposition, cause, and consequence with more precision.

TIME CONJUNCTIONS

quand / lorsque — when (simultaneous or sequential):
  Quand j'arrive, je te téléphone.     When I arrive, I'll call you.
  Lorsque j'étais enfant, je lisais.   When I was a child, I used to read.

pendant que — while (two simultaneous actions):
  Pendant qu'il cuisinait, elle lisait. While he was cooking, she was reading.

avant de + infinitive — before doing (same subject):
  Avant de partir, vérifie tes affaires.  Before leaving, check your things.

après + past infinitive — after doing (same subject):
  Après avoir mangé, il s'est reposé.   After eating, he rested.
  Après être arrivée, elle a téléphoné. After arriving, she phoned.

dès que — as soon as:
  Dès qu'il arrive, on commence.     As soon as he arrives, we'll start.

OPPOSITION AND CONCESSION

bien que + subjunctive — although (A2/B1 boundary — learn as fixed phrase):
  Bien qu'il soit fatigué, il continue.   Although he's tired, he continues.

même si — even if:
  Même si c'est difficile, je vais essayer.   Even if it's hard, I'll try.

pourtant / cependant — however / yet (connects two sentences):
  Il a étudié. Pourtant, il a échoué.    He studied. Yet he failed.

CAUSE AND CONSEQUENCE

puisque — since / given that (cause already known):
  Puisque tu es là, aide-moi.    Since you're here, help me.

car — because / for (more formal than parce que):
  Je reste ici car il pleut.     I'm staying here because it's raining.

c'est pourquoi — that's why / this is why:
  Je suis fatigué, c'est pourquoi je pars tôt.   I'm tired, that's why I'm leaving early.

alors — so / then:
  Il était tard, alors on est partis.   It was late, so we left.`,
            target: `Au niveau A1, vous avez appris les connecteurs de base (et, mais, parce que, donc). Au niveau A2, vous avez besoin de conjonctions plus riches pour exprimer le temps, l'opposition, la cause et la conséquence.

CONJONCTIONS DE TEMPS :
  quand/lorsque — quand (simultané ou séquentiel)
  pendant que — pendant que (deux actions simultanées)
  avant de + infinitif — avant de faire
  après + infinitif passé — après avoir fait / après être arrivé(e)
  dès que — dès que (aussitôt que)

OPPOSITION ET CONCESSION :
  même si — même si (+ indicatif)
  pourtant / cependant — pourtant / cependant (connecte deux phrases)

CAUSE ET CONSÉQUENCE :
  puisque — puisque (cause déjà connue)
  car — parce que (plus formel)
  c'est pourquoi — c'est pourquoi
  alors — donc / alors`
        },
        examples: [
            { native: "Dès qu'il arrive, on commence.", translation: "As soon as he arrives, we'll start." },
            { native: "Avant de sortir, j'ai vérifié mes clés.", translation: "Before going out, I checked my keys." },
            { native: "Après avoir mangé, nous sommes allés nous promener.", translation: "After eating, we went for a walk." },
            { native: "Pendant qu'elle travaillait, il préparait le dîner.", translation: "While she was working, he was preparing dinner." },
            { native: "Il a étudié toute la nuit, pourtant il a raté l'examen.", translation: "He studied all night, yet he failed the exam." },
            { native: "Puisque tu es là, tu peux m'aider.", translation: "Since you're here, you can help me." },
            { native: "J'étais épuisé, c'est pourquoi je suis parti tôt.", translation: "I was exhausted, that's why I left early." },
        ]
    },
]