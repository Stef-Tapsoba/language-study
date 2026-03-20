import { GrammarLesson } from "../../../../types"

export const foundationsLessons: GrammarLesson[] = [
    {
        id: "it-g-a1-1",
        level: "A1",
        title: "Subject Pronouns",
        explanation: "Italian subject pronouns are often omitted because the verb ending identifies the subject. However, they can be used for emphasis or clarity. The pronouns are: io (I), tu (you informal), lui (he), lei (she), noi (we), voi (you plural), loro (they). Note: 'Lei' (capital) is also used as the formal 'you' in singular.",
        examples: [
            { native: "Io parlo italiano.", translation: "I speak Italian." },
            { native: "Tu sei studentessa.", translation: "You are a student (fem.)." },
            { native: "Lui lavora qui.", translation: "He works here." },
            { native: "Noi viviamo a Roma.", translation: "We live in Rome." },
            { native: "Loro sono amici.", translation: "They are friends." }
        ]
    },
    {
        id: "it-g-a1-2",
        level: "A1",
        title: "Essere (to be)",
        explanation: `**Essere** is one of the two key verbs meaning 'to be'. It is used for identity, nationality, profession, origin, and time.

Conjugation (present tense):
  io      → **sono**   (I am)
  tu      → **sei**    (you are)
  lui/lei → **è**      (he/she is)
  noi     → **siamo**  (we are)
  voi     → **siete**  (you all are)
  loro    → **sono**   (they are)`,
        examples: [
            { native: "Sono italiano.", translation: "I am Italian." },
            { native: "Tu sei studentessa?", translation: "Are you a student?" },
            { native: "Lei è medico.", translation: "She is a doctor." },
            { native: "Siamo stanchi.", translation: "We are tired." },
            { native: "Sono le otto.", translation: "It is eight o'clock." }
        ]
    },
    {
        id: "it-g-a1-3",
        level: "A1",
        title: "Avere (to have)",
        explanation: `Avere means 'to have' and is used for possession, age, and many expressions. The 'h' is always silent.

Conjugation (present tense):
  io      → ho       (I have)
  tu      → hai      (you have)
  lui/lei → ha       (he/she has)
  noi     → abbiamo  (we have)
  voi     → avete    (you all have)
  loro    → hanno    (they have)

Common expressions:
  avere fame         → to be hungry
  avere sete         → to be thirsty
  avere N anni       → to be N years old
  avere freddo/caldo → to be cold/hot`,
        examples: [
            { native: "Ho un cane.", translation: "I have a dog." },
            { native: "Quanti anni hai?", translation: "How old are you?" },
            { native: "Lei ha una macchina.", translation: "She has a car." },
            { native: "Abbiamo fame.", translation: "We are hungry." },
            { native: "Ho vent'anni.", translation: "I am twenty years old." }
        ]
    },
    {
        id: "it-g-a1-4",
        level: "A1",
        title: "Definite Articles",
        explanation: `Italian definite articles (= 'the') change based on gender, number, and the first letter of the following noun.

MASCULINE SINGULAR
  il  — before most consonants:           il libro, il cane, il padre
  lo  — before s+consonant, z, gn, ps, x: lo studente, lo zio, lo zaino
  l'  — before any vowel:                 l'amico, l'uomo

MASCULINE PLURAL
  i   — plural of il:                     i libri, i cani
  gli — plural of lo and l':              gli studenti, gli amici

FEMININE SINGULAR
  la  — before consonants:                la casa, la madre
  l'  — before vowels:                    l'amica, l'ora

FEMININE PLURAL
  le  — plural of both la and l':         le case, le amiche`,
        examples: [
            { native: "il libro", translation: "the book (masc., starts with l)" },
            { native: "lo studente", translation: "the student (masc., starts with st-)" },
            { native: "l'amico", translation: "the friend (masc., starts with vowel)" },
            { native: "la casa", translation: "the house (fem., starts with consonant)" },
            { native: "gli studenti / le case", translation: "the students / the houses (plurals)", speakText: "gli studenti, le case" }
        ]
    },
    {
        id: "it-g-a1-5",
        level: "A1",
        title: "Indefinite Articles",
        explanation: `Indefinite articles (= 'a' / 'an') change based on gender and the first letter of the following noun.

MASCULINE
  un   — before most consonants and vowels:  un libro, un amico
  uno  — before s+consonant, z, gn, ps, x:  uno studente, uno zaino

FEMININE
  una  — before consonants:                  una casa, una pizza
  un'  — before vowels:                      un'amica, un'ora

For 'some' (plural), use dei / degli / delle:
  dei libri (some books) | degli amici (some friends) | delle case (some houses)`,
        examples: [
            { native: "un libro", translation: "a book (masc.)" },
            { native: "uno studente", translation: "a student (masc., starts with st-)" },
            { native: "una casa", translation: "a house (fem.)" },
            { native: "un'amica", translation: "a friend (fem., starts with vowel)" },
            { native: "Vorrei un caffè.", translation: "I would like a coffee." }
        ]
    },
    {
        id: "it-g-a1-12",
        level: "A1",
        title: "Adjective Agreement",
        explanation: `Italian adjectives must agree with the noun in gender and number.

-o / -a / -i / -e pattern (most adjectives):
  Masc. singular: -o  →  un libro rosso       (a red book)
  Fem. singular:  -a  →  una casa rossa        (a red house)
  Masc. plural:   -i  →  i libri rossi         (the red books)
  Fem. plural:    -e  →  le case rosse         (the red houses)

-e / -i pattern (adjectives ending in -e, same for both genders):
  Singular: -e  →  un libro interessante / una storia interessante
  Plural:   -i  →  libri interessanti / storie interessanti

POSITION
• Adjectives usually come AFTER the noun: un ragazzo alto, una pizza buona
• These common ones usually come BEFORE: bello, vecchio, grande, buono, cattivo, primo
• Position can change meaning:
    un grande uomo = a great man  |  un uomo grande = a big/tall man`,
        examples: [
            { native: "un libro interessante / una storia interessante", translation: "an interesting book / an interesting story", speakText: "un libro interessante, una storia interessante" },
            { native: "Il ragazzo alto / La ragazza alta", translation: "The tall boy / The tall girl", speakText: "Il ragazzo alto, La ragazza alta" },
            { native: "I libri rossi / Le case rosse", translation: "The red books / The red houses", speakText: "I libri rossi, Le case rosse" },
            { native: "un bel ragazzo / una bella ragazza", translation: "a handsome boy / a beautiful girl (before noun)", speakText: "un bel ragazzo, una bella ragazza" },
            { native: "un grande uomo / un uomo grande", translation: "a great man / a big man (position changes meaning)", speakText: "un grande uomo, un uomo grande" }
        ]
    },
]
