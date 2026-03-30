import { koA2MotionAbilityPermission } from "./motion-ability-permission"
import { koA2ProgressiveObligationComparisons } from "./progressive-obligation-comparisons"
import { koA2OpinionsAndConnectors } from "./opinions-and-connectors"
import { koA2SimultaneousTime } from "./simultaneous-time"
import { koA2NominalizationClauses } from "./nominalization-clauses"
import { koA2AdvancedExpressions } from "./advanced-expressions"

export const a2Grammar = [
    ...koA2MotionAbilityPermission,
    ...koA2ProgressiveObligationComparisons,
    ...koA2OpinionsAndConnectors,
    ...koA2SimultaneousTime,
    ...koA2NominalizationClauses,
    ...koA2AdvancedExpressions,
]
