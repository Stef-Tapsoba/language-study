// pages/DrillPages.test.tsx — render smoke tests for the migrated drill pages
//
// Verifies the ExerciseShell contract: questions are built from the `items`
// prop, onSessionDone fires exactly once when the drill finishes, and
// onComplete is NEVER called (drills do not mark content learned — see the
// key decision in the migration plan).

import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { TooltipProvider } from "../components/ui/tooltip"
import VerbDrillPage from "./VerbDrillPage"
import GrammarDrillPage from "./GrammarDrillPage"
import { _resetProgressStoreForTests } from "../store/useProgressStore"
import { getExerciseConfig } from "../domain/exerciseConfig"
import type { Verb, GrammarLesson } from "../types"

// Deterministic question order: identity shuffle
vi.mock("../utils/arrayUtils", async importOriginal => ({
    ...(await importOriginal<typeof import("../utils/arrayUtils")>()),
    shuffle: <T,>(arr: T[]): T[] => [...arr],
}))

const VERB: Verb = {
    id: "fr-vb-a1-1",
    level: "A1",
    infinitive: "être",
    meaning: "to be",
    conjugations: [{
        tense: "present",
        forms: [
            { pronoun: "je", form: "suis" },
            { pronoun: "tu", form: "es" },
            { pronoun: "il", form: "est" },
            { pronoun: "nous", form: "sommes" },
        ],
    }],
} as unknown as Verb

const LESSONS: GrammarLesson[] = [
    {
        id: "fr-g-a1-1", level: "A1", title: "Être basics",
        examples: [
            { native: "Je suis étudiant.", translation: "I am a student." },
            { native: "Tu es gentil.", translation: "You are kind." },
            { native: "Il est grand.", translation: "He is tall." },
            { native: "Nous sommes prêts.", translation: "We are ready." },
        ],
    },
] as unknown as GrammarLesson[]

function shellProps(onComplete = vi.fn(), onSessionDone = vi.fn()) {
    return {
        langId: "fr",
        level: "A1" as const,
        config: getExerciseConfig("practice", 10),
        onComplete,
        onSessionDone,
        skill: null,
    }
}

function wrap(el: React.ReactElement) {
    return render(<MemoryRouter><TooltipProvider>{el}</TooltipProvider></MemoryRouter>)
}

beforeEach(() => {
    _resetProgressStoreForTests()
})

// ── VerbDrillPage ─────────────────────────────────────────────────────────────

describe("VerbDrillPage under the shell contract", () => {
    it("builds questions from items and completes a session", async () => {
        const onComplete = vi.fn()
        const onSessionDone = vi.fn()
        wrap(<VerbDrillPage items={[VERB]} {...shellProps(onComplete, onSessionDone)} />)

        // 4 conjugation forms → 4 questions. With identity shuffle the first
        // option is always the correct form.
        for (let i = 0; i < 4; i++) {
            const isLast = i === 3
            expect(screen.getByText(`Question ${i + 1} of 4`)).toBeInTheDocument()
            // answer: click the correct form (first radio option)
            const correct = VERB.conjugations[0].forms[i].form
            await userEvent.click(screen.getAllByText(correct)[0])
            await userEvent.click(screen.getByText(isLast ? "See results" : "Next question"))
        }

        expect(onSessionDone).toHaveBeenCalledTimes(1)
        expect(onComplete).not.toHaveBeenCalled()
    })

    it("renders the empty state when items produce no questions", () => {
        wrap(<VerbDrillPage items={[]} {...shellProps()} />)
        expect(screen.getByText(/coming soon/i)).toBeInTheDocument()
    })
})

// ── GrammarDrillPage ──────────────────────────────────────────────────────────

describe("GrammarDrillPage under the shell contract", () => {
    it("shows the mode chooser, then completes a multiple-choice session", async () => {
        const onComplete = vi.fn()
        const onSessionDone = vi.fn()
        wrap(<GrammarDrillPage items={LESSONS} {...shellProps(onComplete, onSessionDone)} />)

        // Start screen with mode chooser is the component's own first render
        expect(screen.getByText("Choose a mode")).toBeInTheDocument()
        await userEvent.click(screen.getByText("Start"))

        // 4 distinct examples → 4 questions (A1: English prompt → target sentence).
        // Identity shuffle → question order follows LESSONS examples order and
        // the first option is the correct native sentence.
        for (let i = 0; i < 4; i++) {
            const isLast = i === 3
            const correct = (LESSONS[0].examples[i] as { native: string }).native
            await userEvent.click(screen.getAllByText(correct)[0])
            await userEvent.click(screen.getByText(isLast ? "See results" : "Next question"))
        }

        expect(onSessionDone).toHaveBeenCalledTimes(1)
        expect(onComplete).not.toHaveBeenCalled()
    })

    it("renders the empty state when there are too few examples", () => {
        wrap(<GrammarDrillPage items={[]} {...shellProps()} />)
        expect(screen.getByText(/Not enough grammar examples/i)).toBeInTheDocument()
    })
})
