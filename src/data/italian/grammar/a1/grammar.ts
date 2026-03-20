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
            { native: "Parli italiano? (rising intonation)", translation: "Do you speak Italian?" },
            { native: "Come ti chiami?", translation: "What is your name? (lit. How do you call yourself?)" },
            { native: "Dove abiti?", translation: "Where do you live?" },
            { native: "Quando arrivi?", translation: "When do you arrive?" },
            { native: "Perché studi l'italiano?", translation: "Why do you study Italian?" }
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
            { native: "mio padre / mia madre", translation: "my father / my mother — no article for singular family", speakText: "mio padre, mia madre" },
            { native: "i miei genitori", translation: "my parents — article returns for plural family" },
            { native: "la loro sorella", translation: "their sister — 'loro' always takes the article" },
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
        ]
    },
]
