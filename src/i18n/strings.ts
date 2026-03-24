// i18n/strings.ts
// Defines the shape of all translatable UI shell strings.
// System/error messages are never translated — they live only in en.ts.

export interface UIStrings {
    // Navigation
    signOut: string
    changeLevel: string
    currentLevel: string

    // Dashboard tabs
    tabPath: string
    tabStudy: string
    tabPractice: string
    tabTest: string

    // Level names
    levelBeginner: string
    levelElementary: string
    levelIntermediate: string
    levelUpperIntermediate: string
    levelAdvanced: string

    // Study section cards
    sectionGrammar: string
    sectionVocab: string
    sectionVerbs: string
    sectionFlashcards: string
    sectionVerbDrill: string
    sectionGrammarDrill: string
    sectionFlashcardsDesc: string
    sectionVerbDrillDesc: string
    sectionGrammarDrillDesc: string

    // Unit page tabs
    unitTabGrammar: string
    unitTabVocab: string
    unitTabVerbs: string
    unitTabTest: string

    // Unit page actions
    markComplete: string
    markLearned: string
    showEnglish: string
    hideEnglish: string

    // Test out screen
    testOutTitle: string
    startTest: string
    retakeTest: string
    nextQuestion: string
    seeResults: string
    unitComplete: string
    keepStudying: string
    alreadyCompleted: string
    markUnitComplete: string
    backToDashboard: string
    tryAgain: string
    /** Use {n} and {total} as placeholders: "Question {n} of {total}" */
    questionOf: string
    scoreLabel: string
    /** Use {score} and {total}: "You answered {score} of {total} correctly." */
    youAnswered: string

    // Level test (dashboard card)
    levelTestTitle: string
    /** Use {pass}, {total}, {next}: "Pass {pass}/{total} to advance to {next}" */
    levelTestDesc: string

    // Level test page
    levelTestPassed: string
    levelTestKeepPractising: string
    /** "Advance to {next}" */
    levelTestAdvanceTo: string
    levelTestAtHighest: string
    /** "You need {pass} correct answers to advance." */
    levelTestNeedScore: string

    // Flashcards
    tapToReveal: string
    gotIt: string
    notYet: string
    roundComplete: string
    reviewComplete: string
    /** "Review {n} missed" */
    reviewMissed: string
    startOver: string
    showTranslation: string
    hideTranslation: string

    // Drills (shared)
    drillComplete: string
    scoreCorrect: string
    scoreWrong: string

    // Grammar drill — A1/A2 direction (English → pick target sentence)
    grammarDrillInstruction: string
    grammarDrillQuestion: string
    // Grammar drill — B1+ direction (target sentence → pick English meaning)
    grammarDrillInstructionB1: string
    grammarDrillQuestionB1: string

    // Verb drill
    /** Template with {pronoun} placeholder: "Conjugate for: {pronoun}" */
    conjugateFor: string

    // Reading (CE)
    sectionReading: string
    sectionReadingDesc: string
    sectionCulture: string
    sectionCultureDesc: string
    cultureUnlockHeading: string
    checkUnderstanding: string
    markAsRead: string
    passageComplete: string
    /** "No passages at {level} yet" */
    noPassagesYet: string
    showVocab: string
    hideVocab: string
    vocabGlossTitle: string
    categoryBadgeEveryday: string
    categoryBadgeCulture: string
    categoryBadgeHistory: string
    categoryBadgeLiterature: string
    categoryBadgeDialogue: string

    // Listening (CO)
    sectionListening: string
    sectionListeningDesc: string
    playAudio: string
    stopAudio: string
    slowSpeed: string
    normalSpeed: string
    showTranscript: string
    hideTranscript: string
    markAsListened: string
    listeningComplete: string
    noExercisesYet: string
    showQuestions: string
}
