import { Verb } from "../../../types"

export const b2Verbs: Verb[] = [
    {
        id: "it-vb-b2-1",
        level: "B2",
        infinitive: "potere",
        meaning: "to be able to / can",
        conjugations: [
            {
                tense: "Congiuntivo Presente",
                forms: [
                    { pronoun: "io", form: "possa" },
                    { pronoun: "tu", form: "possa" },
                    { pronoun: "lui/lei", form: "possa" },
                    { pronoun: "noi", form: "possiamo" },
                    { pronoun: "voi", form: "possiate" },
                    { pronoun: "loro", form: "possano" }
                ]
            },
            {
                tense: "Congiuntivo Imperfetto",
                forms: [
                    { pronoun: "io", form: "potessi" },
                    { pronoun: "tu", form: "potessi" },
                    { pronoun: "lui/lei", form: "potesse" },
                    { pronoun: "noi", form: "potessimo" },
                    { pronoun: "voi", form: "poteste" },
                    { pronoun: "loro", form: "potessero" }
                ]
            },
            {
                tense: "Condizionale",
                forms: [
                    { pronoun: "io", form: "potrei" },
                    { pronoun: "tu", form: "potresti" },
                    { pronoun: "lui/lei", form: "potrebbe" },
                    { pronoun: "noi", form: "potremmo" },
                    { pronoun: "voi", form: "potreste" },
                    { pronoun: "loro", form: "potrebbero" }
                ]
            }
        ]
    },
    {
        id: "it-vb-b2-2",
        level: "B2",
        infinitive: "volere",
        meaning: "to want",
        conjugations: [
            {
                tense: "Imperfetto",
                forms: [
                    { pronoun: "io", form: "volevo" },
                    { pronoun: "tu", form: "volevi" },
                    { pronoun: "lui/lei", form: "voleva" },
                    { pronoun: "noi", form: "volevamo" },
                    { pronoun: "voi", form: "volevate" },
                    { pronoun: "loro", form: "volevano" }
                ]
            },
            {
                tense: "Congiuntivo Imperfetto",
                forms: [
                    { pronoun: "io", form: "volessi" },
                    { pronoun: "tu", form: "volessi" },
                    { pronoun: "lui/lei", form: "volesse" },
                    { pronoun: "noi", form: "volessimo" },
                    { pronoun: "voi", form: "voleste" },
                    { pronoun: "loro", form: "volessero" }
                ]
            },
            {
                tense: "Condizionale Passato",
                forms: [
                    { pronoun: "io", form: "avrei voluto" },
                    { pronoun: "tu", form: "avresti voluto" },
                    { pronoun: "lui/lei", form: "avrebbe voluto" },
                    { pronoun: "noi", form: "avremmo voluto" },
                    { pronoun: "voi", form: "avreste voluto" },
                    { pronoun: "loro", form: "avrebbero voluto" }
                ]
            }
        ]
    },
    {
        id: "it-vb-b2-3",
        level: "B2",
        infinitive: "avere",
        meaning: "to have",
        conjugations: [
            {
                tense: "Passato Prossimo",
                forms: [
                    { pronoun: "io", form: "ho avuto" },
                    { pronoun: "tu", form: "hai avuto" },
                    { pronoun: "lui/lei", form: "ha avuto" },
                    { pronoun: "noi", form: "abbiamo avuto" },
                    { pronoun: "voi", form: "avete avuto" },
                    { pronoun: "loro", form: "hanno avuto" }
                ]
            },
            {
                tense: "Trapassato Prossimo",
                forms: [
                    { pronoun: "io", form: "avevo avuto" },
                    { pronoun: "tu", form: "avevi avuto" },
                    { pronoun: "lui/lei", form: "aveva avuto" },
                    { pronoun: "noi", form: "avevamo avuto" },
                    { pronoun: "voi", form: "avevate avuto" },
                    { pronoun: "loro", form: "avevano avuto" }
                ]
            },
            {
                tense: "Futuro Anteriore",
                forms: [
                    { pronoun: "io", form: "avrò avuto" },
                    { pronoun: "tu", form: "avrai avuto" },
                    { pronoun: "lui/lei", form: "avrà avuto" },
                    { pronoun: "noi", form: "avremo avuto" },
                    { pronoun: "voi", form: "avrete avuto" },
                    { pronoun: "loro", form: "avranno avuto" }
                ]
            }
        ]
    },
    {
        id: "it-vb-b2-4",
        level: "B2",
        infinitive: "essere",
        meaning: "to be",
        conjugations: [
            {
                tense: "Congiuntivo Trapassato",
                forms: [
                    { pronoun: "io", form: "fossi stato/a" },
                    { pronoun: "tu", form: "fossi stato/a" },
                    { pronoun: "lui/lei", form: "fosse stato/a" },
                    { pronoun: "noi", form: "fossimo stati/e" },
                    { pronoun: "voi", form: "foste stati/e" },
                    { pronoun: "loro", form: "fossero stati/e" },
                ]
            },
            {
                tense: "Condizionale Passato",
                forms: [
                    { pronoun: "io", form: "sarei stato/a" },
                    { pronoun: "tu", form: "saresti stato/a" },
                    { pronoun: "lui/lei", form: "sarebbe stato/a" },
                    { pronoun: "noi", form: "saremmo stati/e" },
                    { pronoun: "voi", form: "sareste stati/e" },
                    { pronoun: "loro", form: "sarebbero stati/e" },
                ]
            },
            {
                tense: "Periodo Ipotetico Misto",
                forms: [
                    { pronoun: "se clause", form: "Se fossi stato più attento…" },
                    { pronoun: "present result", form: "…sarei in una posizione migliore ora. (cond. presente)" },
                    { pronoun: "past result", form: "…non sarebbe successo. (cond. passato)" },
                ]
            }
        ]
    }
]
