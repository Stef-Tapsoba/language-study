// domain/skills.ts — The four CEFR competencies tracked independently.
//
// Blueprint §2.1/§3: CO (Compréhension Orale — listening), CE (Compréhension
// Écrite — reading), EO (Expression Orale — speaking), EE (Expression Écrite —
// writing). Grammar/vocab/verb work is core knowledge feeding all four and is
// deliberately NOT attributed to any single skill.

export type Skill = "CO" | "CE" | "EO" | "EE"

export const SKILLS: readonly Skill[] = ["CO", "CE", "EO", "EE"] as const

export const SKILL_LABELS: Record<Skill, string> = {
    CO: "Listening",
    CE: "Reading",
    EO: "Speaking",
    EE: "Writing",
}

export const SKILL_ICONS: Record<Skill, string> = {
    CO: "🎧",
    CE: "📖",
    EO: "🎤",
    EE: "✍️",
}
