// components/DrillDoneScreen.test.tsx

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { DrillDoneScreen } from "./DrillDoneScreen"
import { en } from "../i18n/en"

// NavBar uses useGlobalStreak → useStatsStore (Zustand). In jsdom it starts with
// empty data so streak === 0, which is fine for these rendering tests.

function renderScreen(props: Partial<React.ComponentProps<typeof DrillDoneScreen>> = {}) {
    const defaults = {
        score: 7,
        total: 10,
        level: "A1" as const,
        navTitle: "Verb Drill",
        ui: en,
        onRestart: vi.fn(),
    }
    return render(
        <MemoryRouter>
            <DrillDoneScreen {...defaults} {...props} />
        </MemoryRouter>
    )
}

// ── renders score and total ────────────────────────────────────────────────────

describe("DrillDoneScreen — rendering", () => {
    it("renders the drill complete heading", () => {
        renderScreen()
        expect(screen.getByText(en.drillComplete)).toBeInTheDocument()
    })

    it("renders the correct score", () => {
        renderScreen({ score: 7, total: 10 })
        // Score number appears alongside the label
        expect(screen.getByText("7")).toBeInTheDocument()
    })

    it("renders the wrong count (total - score)", () => {
        renderScreen({ score: 7, total: 10 })
        expect(screen.getByText("3")).toBeInTheDocument()
    })

    it("renders the percentage", () => {
        renderScreen({ score: 7, total: 10 })
        expect(screen.getByText("70%")).toBeInTheDocument()
    })

    it("renders 100% when all correct", () => {
        renderScreen({ score: 10, total: 10 })
        expect(screen.getByText("100%")).toBeInTheDocument()
    })

    it("renders 0% when all wrong", () => {
        renderScreen({ score: 0, total: 10 })
        expect(screen.getByText("0%")).toBeInTheDocument()
    })

    it("renders the try again button with the correct label", () => {
        renderScreen()
        expect(screen.getByRole("button", { name: en.tryAgain })).toBeInTheDocument()
    })

    it("renders the nav title", () => {
        renderScreen({ navTitle: "Grammar Drill" })
        expect(screen.getByText("Grammar Drill")).toBeInTheDocument()
    })

    it("does not render a review mistakes section when missed is empty", () => {
        renderScreen({ missed: [] })
        expect(screen.queryByText(/Review mistakes/i)).not.toBeInTheDocument()
    })
})

// ── missed items ───────────────────────────────────────────────────────────────

describe("DrillDoneScreen — missed items", () => {
    const missed = [
        { prompt: "he/she", correct: "habla", yourAnswer: "hablan" },
        { prompt: "they", correct: "hablan", yourAnswer: "hablas" },
    ]

    it("renders the review mistakes toggle when missed is non-empty", () => {
        renderScreen({ missed })
        expect(screen.getByText(/Review mistakes \(2\)/)).toBeInTheDocument()
    })

    it("collapsed by default — does not show mistake details initially", () => {
        renderScreen({ missed })
        expect(screen.queryByText("habla")).not.toBeInTheDocument()
    })

    it("expands and shows mistake details on toggle click", async () => {
        renderScreen({ missed })
        await userEvent.click(screen.getByText(/Review mistakes \(2\)/))
        // Use exact strings to avoid "habla" matching inside "hablan".
        expect(screen.getAllByText(/hablan/).length).toBeGreaterThan(0)
        expect(screen.getByText("he/she")).toBeInTheDocument()
    })

    it("shows correct answer and user answer in expanded view", async () => {
        renderScreen({ missed })
        await userEvent.click(screen.getByText(/Review mistakes \(2\)/))
        // There are 2 correct-answer rows and 2 wrong-answer rows (one per missed item).
        const correctAnswers = screen.getAllByText(/^✓ /)
        expect(correctAnswers.length).toBe(2)
        const wrongAnswers = screen.getAllByText(/^✗ /)
        expect(wrongAnswers.length).toBe(2)
        // Exact text match (not regex) avoids ambiguity between "habla" and "hablan".
        expect(screen.getByText("✓ habla", { exact: true })).toBeInTheDocument()
        expect(screen.getByText("✗ hablan", { exact: true })).toBeInTheDocument()
    })

    it("collapses again on second toggle click", async () => {
        renderScreen({ missed })
        const toggle = screen.getByText(/Review mistakes \(2\)/)
        await userEvent.click(toggle)
        await userEvent.click(toggle)
        expect(screen.queryByText(/✓ habla/)).not.toBeInTheDocument()
    })
})

// ── onRestart callback ─────────────────────────────────────────────────────────

describe("DrillDoneScreen — callbacks", () => {
    it("calls onRestart when the try again button is clicked", async () => {
        const onRestart = vi.fn()
        renderScreen({ onRestart })
        await userEvent.click(screen.getByRole("button", { name: en.tryAgain }))
        expect(onRestart).toHaveBeenCalledOnce()
    })
})

// ── trophy vs muscle emoji ─────────────────────────────────────────────────────

describe("DrillDoneScreen — score emoji", () => {
    it("shows trophy emoji when pct >= 70", () => {
        const { container } = renderScreen({ score: 7, total: 10 })
        expect(container).toHaveTextContent("🏆")
    })

    it("shows muscle emoji when pct < 70", () => {
        const { container } = renderScreen({ score: 6, total: 10 })
        expect(container).toHaveTextContent("💪")
    })
})
