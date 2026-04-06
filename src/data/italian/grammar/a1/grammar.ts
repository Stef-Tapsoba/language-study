import { GrammarLesson } from "../../../../types"

export const grammarLessons: GrammarLesson[] = [
    {
        id: "it-g-a1-10",
        level: "A1",
        title: "Negation",
        explanation: "To make a sentence negative in Italian, place 'non' directly before the conjugated verb. This is the only step required — Italian does not use 'do/does' as in English. Double negatives are grammatically correct and required in Italian: 'Non mangio mai carne' (I never eat meat — literally 'I don't eat never meat').",
        examples: [
            { native: "Non parlo tedesco.", translation: "I don't speak German." },
            { native: "Non siamo stanchi.", translation: "We are not tired." },
            { native: "Non ha la macchina.", translation: "He does not have a car." },
            { native: "Non mangio mai carne.", translation: "I never eat meat." },
            { native: "Non capisco niente.", translation: "I don't understand anything." }
        ],
        inlineVocab: [
            { word: "tedesco", translation: "German" },
            { word: "stanchi", translation: "tired" },
            { word: "macchina", translation: "car" },
            { word: "carne", translation: "meat" },
            { word: "niente", translation: "nothing" },
        ]
    },
    {
        id: "it-g-a1-11",
        level: "A1",
        title: "Question Formation",
        explanation: `Yes/no questions are formed by raising your intonation — no word reordering needed.
  Statement: Parli italiano.  → You speak Italian.
  Question:  Parli italiano?  → Do you speak Italian? (same words, rising tone)

QUESTION WORDS — always at the start of the sentence:
  chi           → who         Chi è lui?            (Who is he?)
  cosa / che cosa → what      Cosa vuoi?            (What do you want?)
  dove          → where       Dove abiti?           (Where do you live?)
  quando        → when        Quando arrivi?        (When do you arrive?)
  come          → how         Come stai?            (How are you?)
  perché        → why         Perché studi?         (Why do you study?)
  quanto/a      → how much    Quanto costa?         (How much does it cost?)
  quanti/e      → how many    Quanti anni hai?      (How old are you?)
  quale/i       → which       Quale preferisci?     (Which do you prefer?)`,
        examples: [
            { native: "Parli italiano? (rising intonation)", speakText: "Parli italiano?", translation: "Do you speak Italian?" },
            { native: "Come ti chiami?", translation: "What is your name? (lit. How do you call yourself?)" },
            { native: "Dove abiti?", translation: "Where do you live?" },
            { native: "Quando arrivi?", translation: "When do you arrive?" },
            { native: "Perché studi l'italiano?", translation: "Why do you study Italian?" }
        ],
        inlineVocab: [
            { word: "vuoi", translation: "you want" },
            { word: "abiti", translation: "you live" },
            { word: "arrivi", translation: "you arrive" },
            { word: "studi", translation: "you study" },
            { word: "costa", translation: "it costs" },
        ]
    },
    {
        id: "it-g-a1-14",
        level: "A1",
        title: "Core Prepositions: di, a, in, da, con, su, per",
        explanation: `Italian prepositions connect nouns to the rest of the sentence. The key ones at A1:

  di  — of, from (origin, possession):  Sono di Roma. Il libro di Maria.
  a   — to, at (cities, home, school):  Vado a Milano. Sono a casa.
  in  — in, to (countries, rooms):      Sono in Italia. Vado in treno.
  da  — from, since, at someone's:      Vengo da Napoli. Vado da Marco.
  con — with:                           Vivo con la mia famiglia.
  su  — on, about:                      Il libro è sul tavolo.
  per — for, in order to:               Questo è per te. Studio per imparare.

CONTRACTIONS — a, di, su merge with definite articles:

  a  + il/lo/la/l'/i/gli/le  =  al / allo / alla / all' / ai / agli / alle
  di + il/lo/la/l'/i/gli/le  =  del / dello / della / dell' / dei / degli / delle
  su + il/lo/la/l'/i/gli/le  =  sul / sullo / sulla / sull' / sui / sugli / sulle

Note: in and con do NOT contract.

Quick examples: al cinema (a + il), dalla stazione (da + la), sul tavolo (su + il)`,
        examples: [
            { native: "Vado al cinema.", translation: "I'm going to the cinema. (a + il = al)" },
            { native: "Sono di Milano.", translation: "I'm from Milan. (origin)" },
            { native: "Abito in Italia.", translation: "I live in Italy. (in + country)" },
            { native: "Il libro è sulla scrivania.", translation: "The book is on the desk. (su + la = sulla)" },
            { native: "Vengo da Roma.", translation: "I come from Rome." },
            { native: "Studio l'italiano per parlare con gli italiani.", translation: "I study Italian to speak with Italians." },
        ],
        inlineVocab: [
            { word: "cinema", translation: "cinema / movie theater" },
            { word: "scrivania", translation: "desk" },
            { word: "treno", translation: "train" },
            { word: "famiglia", translation: "family" },
            { word: "tavolo", translation: "table" },
            { word: "stazione", translation: "station" },
        ]
    },
    {
        id: "it-g-a1-23",
        level: "A1",
        title: "Possessive Adjectives",
        explanation: `Possessive adjectives in Italian agree in gender and number with the noun they describe — not with the owner. They are almost always preceded by a definite article.

POSSESSIVE ADJECTIVES

  Owner        Masc. Sg.   Fem. Sg.    Masc. Pl.   Fem. Pl.
  io           mio          mia         miei         mie
  tu           tuo          tua         tuoi         tue
  lui / lei    suo          sua         suoi         sue
  noi          nostro       nostra      nostri       nostre
  voi          vostro       vostra      vostri       vostre
  loro         loro         loro        loro         loro    ← invariable

WITH THE DEFINITE ARTICLE — always use il/la/i/le before the possessive:
  il mio libro        my book
  la mia macchina     my car
  i tuoi amici        your friends
  le sue scarpe       his/her shoes

FAMILY MEMBER EXCEPTION — NO article with singular, unmodified family members:
  mio padre      (my father)      NOT il mio padre
  mia sorella    (my sister)      NOT la mia sorella
  tuo fratello   (your brother)
  Article returns in three cases:
  → plurals:    i miei genitori        (my parents)
  → adjective:  il mio caro padre      (my dear father)
  → loro:       la loro sorella        (their sister — always takes article)`,
        examples: [
            { native: "il mio libro", translation: "my book (masc. sg.)", speakText: "il mio libro" },
            { native: "la mia macchina", translation: "my car (fem. sg.)", speakText: "la mia macchina" },
            { native: "mio padre / mia madre", translation: "my father / my mother — no article for singular family" },
            { native: "i miei genitori", translation: "my parents — article returns for plural family" },
            { native: "la loro sorella", translation: "their sister — 'loro' always takes the article" },
        ],
        inlineVocab: [
            { word: "macchina", translation: "car" },
            { word: "scarpe", translation: "shoes" },
            { word: "genitori", translation: "parents" },
            { word: "sorella", translation: "sister" },
            { word: "fratello", translation: "brother" },
        ]
    },
    {
        id: "it-g-a1-24",
        level: "A1",
        title: "Demonstrative Adjectives",
        explanation: `Demonstrative adjectives point out specific nouns. Italian has two sets — questo (this, near me) and quello (that, away from me).

QUESTO — this / these (near the speaker)
Forms agree with the noun in gender and number:
  questo → masc. sg. before consonant:    questo libro
  quest' → masc./fem. sg. before vowel:  quest'amico, quest'amica
  questa → fem. sg.:                      questa casa
  questi → masc. pl.:                     questi libri
  queste → fem. pl.:                      queste case

QUELLO — that / those (away from the speaker)
Quello mirrors the definite article (il/lo/l'/la/i/gli/le):
  quel libro       (= il libro)       that book
  quello studente  (= lo studente)    that student
  quell'amico      (= l'amico)        that friend
  quella casa      (= la casa)        that house
  quei libri       (= i libri)        those books
  quegli amici     (= gli amici)      those friends
  quelle case      (= le case)        those houses

QUICK TIP: When in doubt about quello, think of the definite article for that noun — quello follows the same pattern.`,
        examples: [
            { native: "Questo libro è interessante.", translation: "This book is interesting." },
            { native: "Quest'amica è bravissima.", translation: "This friend (fem.) is very good." },
            { native: "Quella casa è grande.", translation: "That house is big." },
            { native: "Quei libri sono miei.", translation: "Those books are mine." },
            { native: "Cos'è questo?", translation: "What is this?" },
        ],
        inlineVocab: [
            { word: "interessante", translation: "interesting" },
            { word: "grande", translation: "big / great" },
        ]
    },
    {
        id: "it-g-a1-30",
        level: "A1",
        title: "Partitive Articles: del, dello, della, dell', dei, degli, delle",
        explanation: `Partitive articles express an unspecified quantity — the English equivalent is 'some', or simply leaving the article out. They are formed by combining the preposition di with the definite article, so they follow exactly the same pattern as the definite articles you already know.

FORMATION — di + definite article:

  di + il   → del     del pane        some bread       (masc. sg., consonant)
  di + lo   → dello   dello zucchero  some sugar       (masc. sg., s+cons, z, gn...)
  di + l'   → dell'   dell'acqua      some water       (masc./fem. sg., vowel)
  di + la   → della   della pasta     some pasta       (fem. sg., consonant)
  di + i    → dei     dei biscotti    some biscuits    (masc. pl.)
  di + gli  → degli   degli amici     some friends     (masc. pl., vowel/s+cons...)
  di + le   → delle   delle mele      some apples      (fem. pl.)

QUICK RULE: choose the partitive the same way you choose the definite article for that noun — just put di in front.
  il pane → del pane    |    lo zucchero → dello zucchero    |    la frutta → della frutta

AFTER NEGATION — all partitives become di (or d' before a vowel):
  Voglio del caffè.        I want some coffee.
  Non voglio caffè.        I don't want (any) coffee.  ← no article at all
  Ho dei problemi.         I have some problems.
  Non ho problemi.         I don't have any problems.

WHEN TO USE
  At the table:      Vuoi del vino?           Do you want some wine?
  Shopping:          Prendo della frutta.      I'll take some fruit.
  Describing:        Ho degli amici a Milano.  I have some friends in Milan.
  Cooking:           Aggiungi dello zucchero.  Add some sugar.`,
        examples: [
            { native: "Vuoi del caffè?", translation: "Do you want some coffee? (del = di + il)" },
            { native: "Prendo della pasta.", translation: "I'll have some pasta. (della = di + la)" },
            { native: "C'è dell'acqua nel frigo.", translation: "There is some water in the fridge. (dell' = di + l')" },
            { native: "Ho dei problemi.", translation: "I have some problems. (dei = di + i)" },
            { native: "Compro delle mele al mercato.", translation: "I'm buying some apples at the market. (delle = di + le)" },
            { native: "Non ho problemi.", translation: "I don't have any problems. (no article after negation)" },
        ],
        inlineVocab: [
            { word: "pane", translation: "bread" },
            { word: "zucchero", translation: "sugar" },
            { word: "acqua", translation: "water" },
            { word: "pasta", translation: "pasta" },
            { word: "biscotti", translation: "biscuits / cookies" },
            { word: "mele", translation: "apples" },
            { word: "frutta", translation: "fruit" },
            { word: "vino", translation: "wine" },
            { word: "caffè", translation: "coffee" },
            { word: "mercato", translation: "market" },
            { word: "frigo", translation: "fridge" },
        ]
    },
    {
        id: "it-g-a1-31",
        level: "A1",
        title: "C'è / Ci sono — There Is / There Are",
        explanation: `C'è and ci sono are the Italian equivalents of 'there is' and 'there are'. Unlike il y a in French, Italian uses two different forms depending on whether the noun is singular or plural.

FORMS
  c'è — there is    (singular)    c'è = ci + è, contraction of ci è
  ci sono — there are      (plural)

  C'è un bar qui vicino.        There is a bar nearby.
  Ci sono molti turisti.        There are many tourists.

NEGATIVE — non c'è / non ci sono
Place non before c'è or ci sono:
  C'è latte nel frigo.          → Non c'è latte nel frigo.
  Ci sono problemi.             → Non ci sono problemi.

QUESTION — c'è...? / ci sono...?
Raise intonation — no word order change needed:
  C'è un medico?                Is there a doctor?
  Ci sono posti liberi?         Are there any free seats?
  Quanto tempo c'è?             How much time is there?

ASKING WHERE SOMETHING IS
C'è is also used to ask whether something or someone is present — equivalent to 'is X here?':
  C'è Marco?                    Is Marco here? / Is Marco in?
  Sì, c'è. / No, non c'è.      Yes, he's here. / No, he's not here.

C'È / CI SONO vs È / SONO
  c'è / ci sono  → signals existence or presence (there is)
  è / sono  → links subject to description (is / are)
  C'è un ristorante.    There is a restaurant.   (existence)
  È un buon ristorante.     It is a good restaurant. (description)

ECCO — here is / here are (pointing)
A related expression worth knowing: ecco introduces or points out something visible.
  Ecco il menù.         Here is the menu.
  Ecco i tuoi amici.    Here are your friends.
  Ecco!                 There you go! / Here we are!`,
        examples: [
            { native: "C'è un supermercato qui vicino?", translation: "Is there a supermarket nearby?" },
            { native: "Sì, c'è uno all'angolo.", translation: "Yes, there is one on the corner." },
            { native: "Ci sono molti ristoranti in questa via.", translation: "There are many restaurants on this street." },
            { native: "Non c'è latte nel frigo.", translation: "There is no milk in the fridge." },
            { native: "Non ci sono posti liberi.", translation: "There are no free seats." },
            { native: "C'è Marco? — No, non c'è.", translation: "Is Marco here? — No, he's not here." },
            { native: "Ecco il conto.", translation: "Here is the bill." },
        ],
        inlineVocab: [
            { word: "bar", translation: "bar / café" },
            { word: "turisti", translation: "tourists" },
            { word: "latte", translation: "milk" },
            { word: "posti", translation: "seats / places" },
            { word: "ristorante", translation: "restaurant" },
            { word: "supermercato", translation: "supermarket" },
            { word: "medico", translation: "doctor" },
            { word: "conto", translation: "bill / account" },
            { word: "menù", translation: "menu" },
        ]
    },
    {
        id: "it-g-a1-34",
        level: "A1",
        title: "Stressed Pronouns — Me, Te, Lui, Lei...",
        explanation: `Stressed pronouns (pronomi tonici) are used after prepositions, for emphasis, and in short answers without a verb. They are different from the subject pronouns (io, tu, lui...) and appear constantly in everyday Italian.

THE FORMS

  Subject pronoun    Stressed pronoun
  io                 me       (me / I)
  tu                 te       (you)
  lui                lui      (him)
  lei                lei      (her)
  noi                noi      (us / we)
  voi                voi      (you all)
  loro               loro     (them)

Note: noi, voi, lui, lei, and loro are the same as the subject pronouns.
Only io→me and tu→te change form.

WHEN TO USE STRESSED PRONOUNS

1. AFTER PREPOSITIONS — any preposition requires a stressed pronoun:
  con me          with me           Vieni con me?
  da te           at your place     Ci vediamo da te?
  per lui         for him           È per lui.
  senza di lei    without her       È partito senza di lei.
  prima di noi    before us         Sono arrivati prima di noi.
  dopo di voi     after you         Partiamo dopo di voi.

Note: di is inserted between certain prepositions (senza, prima, dopo,
invece, oltre) and the stressed pronoun.

2. AFTER È / SONO (identification — equivalent to French c'est):
  Sono io.          It's me.
  Sei tu?           Is it you?
  È lui.            It's him.
  Siamo noi.        It's us.

3. ALONE OR IN SHORT ANSWERS:
  Chi parla italiano? — Io! / Me!    Who speaks Italian? — Me!
  Chi vuole il caffè? — Io!          Who wants coffee? — Me!

4. FOR EMPHASIS — contrast or focus:
  Vengo anch'io.     I'm coming too.
  Lo faccio io.      I'll do it (myself).
  Parla con lui, non con me.  Talk to him, not to me.

5. ANCHE / NEANCHE — also / neither:
  Anch'io.           Me too.
  Neanche me. / Nemmeno me.   Me neither.

ANCHE + STRESSED PRONOUN
  anche + me → anch'io (not anche me — the elision is standard)
  anche + te → anche te
  anche + lui → anche lui`,
        examples: [
            { native: "Sono io.", translation: "It's me." },
            { native: "Vieni con me?", translation: "Are you coming with me?" },
            { native: "Questo è per te.", translation: "This is for you." },
            { native: "Usciamo senza di lui.", translation: "We're going out without him." },
            { native: "Anch'io voglio un caffè.", translation: "I want a coffee too." },
            { native: "Parla con lei, non con me.", translation: "Talk to her, not to me." },
            { native: "Chi ha fame? — Io!", translation: "Who is hungry? — Me!" },
        ],
        inlineVocab: [
            { word: "caffè", translation: "coffee" },
            { word: "fame", translation: "hunger" },
            { word: "uscire", translation: "to go out" },
        ]
    },
]
