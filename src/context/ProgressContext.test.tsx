// context/ProgressContext.test.tsx

import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ProgressProvider, useProgress } from "./ProgressContext"

// ── helpers ────────────────────────────────────────────────────────────────────

function TestConsumer() {
    const ctx = useProgress()
    return (
        <div>
            <span data-testid="selected">{ctx.selectedLanguage ?? "none"}</span>
            <span data-testid="level-es">{ctx.level("es")}</span>
            <span data-testid="started">{ctx.startedLanguages.join(",")}</span>
        </div>
    )
}

function MutationConsumer() {
    const ctx = useProgress()
    return (
        <div>
            <span data-testid="selected">{ctx.selectedLanguage ?? "none"}</span>
            <span data-testid="level-es">{ctx.level("es")}</span>
            <span data-testid="completed-es">{ctx.completed("es").join(",")}</span>
            <span data-testid="mastered-es">{ctx.mastered("es").join(",")}</span>
            <button onClick={() => ctx.setSelectedLanguage("es")}>set-lang</button>
            <button onClick={() => ctx.setCurrentLevel("es", "B1")}>set-level</button>
            <button onClick={() => ctx.markLessonComplete("es", "lesson-1")}>mark-lesson</button>
            <button onClick={() => ctx.masterUnit("es", "unit-1")}>master-unit</button>
            <button onClick={() => ctx.resetLanguage("es")}>reset-lang</button>
            <button onClick={() => ctx.removeLanguage("es")}>remove-lang</button>
        </div>
    )
}

// ── provider renders children ──────────────────────────────────────────────────

describe("ProgressProvider", () => {
    it("renders children", () => {
        render(
            <ProgressProvider>
                <div data-testid="child">content</div>
            </ProgressProvider>
        )
        expect(screen.getByTestId("child")).toBeInTheDocument()
    })
})

// ── initial values ─────────────────────────────────────────────────────────────

describe("useProgress initial values", () => {
    it("selectedLanguage is null initially", () => {
        render(<ProgressProvider><TestConsumer /></ProgressProvider>)
        expect(screen.getByTestId("selected")).toHaveTextContent("none")
    })

    it("level defaults to A1 for unknown language", () => {
        render(<ProgressProvider><TestConsumer /></ProgressProvider>)
        expect(screen.getByTestId("level-es")).toHaveTextContent("A1")
    })

    it("startedLanguages is empty initially", () => {
        render(<ProgressProvider><TestConsumer /></ProgressProvider>)
        expect(screen.getByTestId("started")).toHaveTextContent("")
    })
})

// ── setSelectedLanguage ────────────────────────────────────────────────────────

describe("setSelectedLanguage", () => {
    it("updates selectedLanguage in React state", async () => {
        render(<ProgressProvider><MutationConsumer /></ProgressProvider>)
        await act(async () => {
            await userEvent.click(screen.getByText("set-lang"))
        })
        expect(screen.getByTestId("selected")).toHaveTextContent("es")
    })
})

// ── setCurrentLevel ────────────────────────────────────────────────────────────

describe("setCurrentLevel", () => {
    it("updates level in React state", async () => {
        render(<ProgressProvider><MutationConsumer /></ProgressProvider>)
        await act(async () => {
            await userEvent.click(screen.getByText("set-level"))
        })
        expect(screen.getByTestId("level-es")).toHaveTextContent("B1")
    })
})

// ── markLessonComplete ─────────────────────────────────────────────────────────

describe("markLessonComplete", () => {
    it("adds the lesson to the completed list", async () => {
        render(<ProgressProvider><MutationConsumer /></ProgressProvider>)
        await act(async () => {
            await userEvent.click(screen.getByText("mark-lesson"))
        })
        expect(screen.getByTestId("completed-es")).toHaveTextContent("lesson-1")
    })
})

// ── masterUnit ─────────────────────────────────────────────────────────────────

describe("masterUnit", () => {
    it("adds the unit to the mastered list", async () => {
        render(<ProgressProvider><MutationConsumer /></ProgressProvider>)
        await act(async () => {
            await userEvent.click(screen.getByText("master-unit"))
        })
        expect(screen.getByTestId("mastered-es")).toHaveTextContent("unit-1")
    })
})

// ── resetLanguage ──────────────────────────────────────────────────────────────

describe("resetLanguage", () => {
    it("resets level to A1 and clears lessons/mastered units", async () => {
        render(<ProgressProvider><MutationConsumer /></ProgressProvider>)

        // First set some data
        await act(async () => {
            await userEvent.click(screen.getByText("set-level"))
        })
        await act(async () => {
            await userEvent.click(screen.getByText("mark-lesson"))
        })
        await act(async () => {
            await userEvent.click(screen.getByText("master-unit"))
        })

        expect(screen.getByTestId("level-es")).toHaveTextContent("B1")
        expect(screen.getByTestId("completed-es")).toHaveTextContent("lesson-1")

        // Now reset
        await act(async () => {
            await userEvent.click(screen.getByText("reset-lang"))
        })

        expect(screen.getByTestId("level-es")).toHaveTextContent("A1")
        expect(screen.getByTestId("completed-es")).toHaveTextContent("")
        expect(screen.getByTestId("mastered-es")).toHaveTextContent("")
    })
})

// ── removeLanguage ─────────────────────────────────────────────────────────────

describe("removeLanguage", () => {
    it("removes language and clears selectedLanguage", async () => {
        render(<ProgressProvider><MutationConsumer /></ProgressProvider>)

        await act(async () => {
            await userEvent.click(screen.getByText("set-lang"))
        })
        await act(async () => {
            await userEvent.click(screen.getByText("set-level"))
        })

        await act(async () => {
            await userEvent.click(screen.getByText("remove-lang"))
        })

        expect(screen.getByTestId("selected")).toHaveTextContent("none")
        expect(screen.getByTestId("level-es")).toHaveTextContent("A1")
    })
})

// ── initUserSession ────────────────────────────────────────────────────────────

describe("initUserSession", () => {
    it("wipes progress when called with a different userId", async () => {
        function SessionConsumer() {
            const ctx = useProgress()
            return (
                <div>
                    <span data-testid="selected">{ctx.selectedLanguage ?? "none"}</span>
                    <button onClick={() => ctx.setSelectedLanguage("fr")}>set-fr</button>
                    <button onClick={() => ctx.initUserSession("user-2")}>switch-user</button>
                </div>
            )
        }

        render(<ProgressProvider><SessionConsumer /></ProgressProvider>)

        // Establish user-1 session with progress
        await act(async () => {
            const { initUserSession } = useProgress as unknown as { initUserSession: (id: string) => void }
            void initUserSession
        })

        // Set language as user-1 (without initUserSession, just set data directly)
        await act(async () => {
            await userEvent.click(screen.getByText("set-fr"))
        })
        expect(screen.getByTestId("selected")).toHaveTextContent("fr")

        // Switch to user-2 — should wipe progress
        await act(async () => {
            await userEvent.click(screen.getByText("switch-user"))
        })
        expect(screen.getByTestId("selected")).toHaveTextContent("none")
    })
})

// ── useProgress outside provider ───────────────────────────────────────────────

describe("useProgress outside ProgressProvider", () => {
    it("throws a descriptive error", () => {
        function Naked() {
            useProgress()
            return null
        }
        const spy = vi.spyOn(console, "error").mockImplementation(() => {})
        expect(() => render(<Naked />)).toThrow("useProgress must be used inside <ProgressProvider>")
        spy.mockRestore()
    })
})
