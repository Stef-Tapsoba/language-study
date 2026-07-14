// store/useProgressStore.test.tsx — ported from context/ProgressContext.test.tsx
//
// Exercises the Zustand store through rendered components using the documented
// consumption pattern (subscribe to s.progress, derive via progressHelpers) so
// the reactivity model is covered, not just getState() plumbing.

import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useProgressStore, progressHelpers, _resetProgressStoreForTests } from "./useProgressStore"
import { resetProgress } from "./progress"

// ── helpers ────────────────────────────────────────────────────────────────────

function TestConsumer() {
    const progress = useProgressStore(s => s.progress)
    const { level, startedLanguages, selectedLanguage } = progressHelpers(progress)
    return (
        <div>
            <span data-testid="selected">{selectedLanguage ?? "none"}</span>
            <span data-testid="level-es">{level("es")}</span>
            <span data-testid="started">{startedLanguages.join(",")}</span>
        </div>
    )
}

function MutationConsumer() {
    const progress = useProgressStore(s => s.progress)
    const { level, completed, mastered, selectedLanguage } = progressHelpers(progress)
    const setSelectedLanguage = useProgressStore(s => s.setSelectedLanguage)
    const setCurrentLevel = useProgressStore(s => s.setCurrentLevel)
    const markLessonComplete = useProgressStore(s => s.markLessonComplete)
    const masterUnit = useProgressStore(s => s.masterUnit)
    const resetLanguage = useProgressStore(s => s.resetLanguage)
    const removeLanguage = useProgressStore(s => s.removeLanguage)
    return (
        <div>
            <span data-testid="selected">{selectedLanguage ?? "none"}</span>
            <span data-testid="level-es">{level("es")}</span>
            <span data-testid="completed-es">{completed("es").join(",")}</span>
            <span data-testid="mastered-es">{mastered("es").join(",")}</span>
            <button onClick={() => setSelectedLanguage("es")}>set-lang</button>
            <button onClick={() => setCurrentLevel("es", "B1")}>set-level</button>
            <button onClick={() => markLessonComplete("es", "lesson-1", "grammar")}>mark-lesson</button>
            <button onClick={() => masterUnit("es", "unit-1")}>master-unit</button>
            <button onClick={() => resetLanguage("es")}>reset-lang</button>
            <button onClick={() => removeLanguage("es")}>remove-lang</button>
        </div>
    )
}

beforeEach(() => {
    // Clear the progress.ts module cache (localStorage itself is reset by
    // src/test/setup.ts), then re-seed the store from the clean slate.
    resetProgress()
    _resetProgressStoreForTests()
})

// ── initial values ─────────────────────────────────────────────────────────────

describe("useProgressStore initial values", () => {
    it("selectedLanguage is null initially", () => {
        render(<TestConsumer />)
        expect(screen.getByTestId("selected")).toHaveTextContent("none")
    })

    it("level defaults to A1 for unknown language", () => {
        render(<TestConsumer />)
        expect(screen.getByTestId("level-es")).toHaveTextContent("A1")
    })

    it("startedLanguages is empty initially", () => {
        render(<TestConsumer />)
        expect(screen.getByTestId("started")).toHaveTextContent("")
    })
})

// ── setSelectedLanguage ────────────────────────────────────────────────────────

describe("setSelectedLanguage", () => {
    it("updates selectedLanguage reactively", async () => {
        render(<MutationConsumer />)
        await act(async () => {
            await userEvent.click(screen.getByText("set-lang"))
        })
        expect(screen.getByTestId("selected")).toHaveTextContent("es")
    })
})

// ── setCurrentLevel ────────────────────────────────────────────────────────────

describe("setCurrentLevel", () => {
    it("updates level reactively", async () => {
        render(<MutationConsumer />)
        await act(async () => {
            await userEvent.click(screen.getByText("set-level"))
        })
        expect(screen.getByTestId("level-es")).toHaveTextContent("B1")
    })
})

// ── markLessonComplete ─────────────────────────────────────────────────────────

describe("markLessonComplete", () => {
    it("adds the lesson to the completed list", async () => {
        render(<MutationConsumer />)
        await act(async () => {
            await userEvent.click(screen.getByText("mark-lesson"))
        })
        expect(screen.getByTestId("completed-es")).toHaveTextContent("lesson-1")
    })
})

// ── masterUnit ─────────────────────────────────────────────────────────────────

describe("masterUnit", () => {
    it("adds the unit to the mastered list", async () => {
        render(<MutationConsumer />)
        await act(async () => {
            await userEvent.click(screen.getByText("master-unit"))
        })
        expect(screen.getByTestId("mastered-es")).toHaveTextContent("unit-1")
    })
})

// ── resetLanguage ──────────────────────────────────────────────────────────────

describe("resetLanguage", () => {
    it("resets level to A1 and clears lessons/mastered units", async () => {
        render(<MutationConsumer />)

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
        render(<MutationConsumer />)

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
            const progress = useProgressStore(s => s.progress)
            const { selectedLanguage } = progressHelpers(progress)
            const setSelectedLanguage = useProgressStore(s => s.setSelectedLanguage)
            const initUserSession = useProgressStore(s => s.initUserSession)
            return (
                <div>
                    <span data-testid="selected">{selectedLanguage ?? "none"}</span>
                    <button onClick={() => setSelectedLanguage("fr")}>set-fr</button>
                    <button onClick={() => initUserSession("user-2")}>switch-user</button>
                </div>
            )
        }

        render(<SessionConsumer />)

        // Set language as user-1 (no userId on the anonymous progress record)
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

    it("sets isHydrating false and leaves no hydrateError on success", async () => {
        await act(async () => {
            useProgressStore.getState().initUserSession("user-1")
        })
        expect(useProgressStore.getState().isHydrating).toBe(false)
        expect(useProgressStore.getState().hydrateError).toBeNull()
    })
})

// ── mutationError ──────────────────────────────────────────────────────────────

describe("mutationError", () => {
    it("clearMutationError resets the error", () => {
        useProgressStore.setState({ mutationError: new Error("boom") })
        useProgressStore.getState().clearMutationError()
        expect(useProgressStore.getState().mutationError).toBeNull()
    })

    it("a failing storage write sets mutationError and keeps optimistic progress", async () => {
        const { registry } = await import("./registry")
        registry._resetForTests()
        const failing = Object.create(registry.progress) as typeof registry.progress
        failing.masterUnit = async (langId: string, unitId: string) => {
            // Optimistic local write succeeded (Supabase pattern: cache first)…
            const { masterUnit } = await import("./progress")
            masterUnit(langId, unitId)
            // …then the network write fails.
            throw new Error("network down")
        }
        registry.configure({ progress: failing })

        await useProgressStore.getState().masterUnit("es", "unit-net")

        expect(useProgressStore.getState().mutationError?.message).toBe("network down")
        // refresh() is skipped on error, but a manual refresh shows the optimistic write
        useProgressStore.getState().refreshProgress()
        expect(useProgressStore.getState().progress.masteredUnits["es"]).toContain("unit-net")

        registry._resetForTests()
    })
})
