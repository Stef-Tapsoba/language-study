import { jaA2VerbForms } from "./verb-forms"
import { jaA2IntentionsExperience } from "./intentions-experience"
import { jaA2Conditionals } from "./conditionals"
import { jaA2NominalizationSpeech } from "./nominalization-speech"
import { jaA2TeForm } from "./te-form"
import { jaA2AdvancedStructures } from "./advanced-structures"

export const a2Grammar = [
    ...jaA2VerbForms,
    ...jaA2IntentionsExperience,
    ...jaA2Conditionals,
    ...jaA2NominalizationSpeech,
    ...jaA2TeForm,
    ...jaA2AdvancedStructures,
]
