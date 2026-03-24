// components/StatsTab.test.tsx

import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { StatsTab } from "./StatsTab"
import { ProgressProvider } from "../context/ProgressContext"
import { useStatsStore } from "../store/useStatsStore"
import { act } from "@testing-library/react"

// ── helpers ────────────────────────────────────────────────────────────────────

function renderTab(langId = "es", level: "A1" | "A2" | "B1" = "A1") {
    return render(
        <MemoryRouter>
            <ProgressProvider>
                <StatsTab langId={langId} level={level} />
            </ProgressProvider>
        </MemoryRouter>
    )
}

// Reset the Zustand store before each test so stats don't bleed between tests.
beforeEach(() => {
    useStatsStore.setState({ data: {} })
})

// ── basic rendering ────────────────────────────────────────────────────────────

describe("StatsTab — basic rendering", () => {
    it("renders without crashing", () => {
        expect(() => renderTab()).not.toThrow()
    })

    it("renders the 'day streak' label", () => {
        renderTab()
        expect(screen.getByText("day streak")).toBeInTheDocument()
    })

    it("renders the 'cards reviewed' label", () => {
        renderTab()
        expect(screen.getByText("cards reviewed")).toBeInTheDocument()
    })

    it("renders the 'quiz accuracy' label", () => {
        renderTab()
        expect(screen.getByText("quiz accuracy")).toBeInTheDocument()
    })

    it("renders the 'Daily reviews' chart heading", () => {
        renderTab()
        expect(screen.getByText("Daily reviews")).toBeInTheDocument()
    })

    it("renders the 'Progress breakdown' section", () => {
        renderTab()
        expect(screen.getByText("Progress breakdown")).toBeInTheDocument()
    })

    it("renders 14 day columns in the chart", () => {
        const { container } = renderTab()
        // Each day has a wrapping div with flex items — we look for the day label divs
        // (the chart renders 14 entries, each with a key of the date string)
        // The simplest assertion: the chart container renders 14 date entries.
        // We target the bar chart area by locating elements with title attr (tooltip).
        // Each day has 2 bar divs with title. 14 days × 2 bars = 28 titled elements.
        const bars = container.querySelectorAll("[title]")
        expect(bars.length).toBe(28)
    })
})

// ── streak display ─────────────────────────────────────────────────────────────

describe("StatsTab — streak", () => {
    it("shows 0 streak when no activity recorded", () => {
        renderTab()
        // The streak chip renders "{streak}🔥" — with 0 streak it shows "0🔥"
        expect(screen.getByText(/0🔥/)).toBeInTheDocument()
    })

    it("shows non-zero streak after activity is recorded today", () => {
        act(() => {
            useStatsStore.getState().recordActivity("es")
        })
        renderTab()
        expect(screen.getByText(/1🔥/)).toBeInTheDocument()
    })
})

// ── empty state message ────────────────────────────────────────────────────────

describe("StatsTab — empty state", () => {
    it("renders the empty state message when total reviews is 0", () => {
        renderTab()
        expect(
            screen.getByText("Complete a drill, flashcard session, or exercise to see your stats.")
        ).toBeInTheDocument()
    })

    it("does not show empty state message after reviews are recorded", () => {
        act(() => {
            useStatsStore.getState().recordReview("es", true)
        })
        renderTab()
        expect(
            screen.queryByText("Complete a drill, flashcard session, or exercise to see your stats.")
        ).not.toBeInTheDocument()
    })
})

// ── cards reviewed chip ────────────────────────────────────────────────────────

describe("StatsTab — cards reviewed chip", () => {
    it("shows 0 in the 14-day card when no reviews", () => {
        renderTab()
        // First chip value is allReviewed (sum of 14 day history)
        // We find the parent cell containing "cards reviewed" and check its number
        const chip = screen.getAllByText("0")[0]
        expect(chip).toBeInTheDocument()
    })

    it("reflects reviews recorded via the store", () => {
        act(() => {
            useStatsStore.getState().recordReview("es", true)
            useStatsStore.getState().recordReview("es", false)
        })
        renderTab()
        // allReviewed should be 2
        expect(screen.getByText("2")).toBeInTheDocument()
    })
})

// ── progress breakdown bars ────────────────────────────────────────────────────

describe("StatsTab — progress breakdown", () => {
    it("renders all 5 section labels", () => {
        renderTab()
        expect(screen.getByText("Grammar")).toBeInTheDocument()
        expect(screen.getByText("Vocabulary")).toBeInTheDocument()
        expect(screen.getByText("Verbs")).toBeInTheDocument()
        expect(screen.getByText("Reading")).toBeInTheDocument()
        expect(screen.getByText("Listening")).toBeInTheDocument()
    })
})
