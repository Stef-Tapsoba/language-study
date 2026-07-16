// domain/goalTrajectory.test.ts

import { describe, it, expect } from "vitest"
import { computeTrajectory, type TrajectoryInput } from "./goalTrajectory"

const TODAY = "2026-07-15"

function input(overrides: Partial<TrajectoryInput> = {}): TrajectoryInput {
    return {
        unitTotalsByLevel: { A1: 10, A2: 10, B1: 10 },
        masteredByLevel: {},
        currentLevel: "A1",
        plan: { targetLevel: "B1", targetDate: "2026-12-31" },
        masteredDates: {},
        today: TODAY,
        ...overrides,
    }
}

/** N mastery dates spread inside the trailing 28-day window. */
function recentDates(n: number): Record<string, string> {
    const dates: Record<string, string> = {}
    for (let i = 0; i < n; i++) {
        const d = new Date(TODAY + "T00:00:00")
        d.setDate(d.getDate() - (i * 3 + 1))
        dates[`u${i}`] = d.toISOString().slice(0, 10)
    }
    return dates
}

describe("computeTrajectory — statuses", () => {
    it("no-plan when plan is null", () => {
        expect(computeTrajectory(input({ plan: null })).status).toBe("no-plan")
    })

    it("achieved when current level is past the target", () => {
        const t = computeTrajectory(input({ currentLevel: "B2", plan: { targetLevel: "A2" } }))
        expect(t.status).toBe("achieved")
        expect(t.progressPct).toBe(100)
    })

    it("achieved when every unit in the span is mastered", () => {
        const t = computeTrajectory(input({
            masteredByLevel: { A1: 10, A2: 10, B1: 10 },
        }))
        expect(t.status).toBe("achieved")
    })

    it("no-date when the plan has no target date", () => {
        const t = computeTrajectory(input({ plan: { targetLevel: "B1" } }))
        expect(t.status).toBe("no-date")
        expect(t.remainingUnits).toBe(30)
    })

    it("insufficient-data when fewer than 2 recent mastery events", () => {
        const t = computeTrajectory(input({ masteredDates: recentDates(1) }))
        expect(t.status).toBe("insufficient-data")
        expect(t.requiredPerWeek).toBeGreaterThan(0)
        expect(t.actualPerWeek).toBeNull()
    })

    it("ignores mastery events outside the 28-day window", () => {
        const t = computeTrajectory(input({
            masteredDates: { old1: "2026-01-01", old2: "2026-02-01" },
        }))
        expect(t.status).toBe("insufficient-data")
    })
})

describe("computeTrajectory — verdict bands", () => {
    // 30 units remaining, ~169 days left → required ≈ 1.24/week.
    it("behind when actual pace is well below required", () => {
        const t = computeTrajectory(input({ masteredDates: recentDates(2) }))   // 0.5/week
        expect(t.status).toBe("behind")
        expect(t.actualPerWeek).toBeLessThan(t.requiredPerWeek!)
    })

    it("on-track when actual pace is within ±15% of required", () => {
        const t = computeTrajectory(input({ masteredDates: recentDates(5) }))   // 1.25/week
        expect(t.status).toBe("on-track")
    })

    it("ahead when actual pace clearly exceeds required", () => {
        const t = computeTrajectory(input({ masteredDates: recentDates(9) }))   // 2.25/week
        expect(t.status).toBe("ahead")
    })

    it("behind when the target date has passed, regardless of pace", () => {
        const t = computeTrajectory(input({
            plan: { targetLevel: "B1", targetDate: "2026-07-01" },
            masteredDates: recentDates(9),
        }))
        expect(t.status).toBe("behind")
        expect(t.daysLeft).toBeLessThanOrEqual(0)
    })
})

describe("computeTrajectory — span accounting", () => {
    it("counts units across every level from current through target", () => {
        const t = computeTrajectory(input({
            currentLevel: "A2",
            masteredByLevel: { A1: 10, A2: 4 },   // A1 is outside the span now
            plan: { targetLevel: "B1" },
        }))
        // Span = A2 + B1 = 20 units; 4 done
        expect(t.doneUnits).toBe(4)
        expect(t.remainingUnits).toBe(16)
        expect(t.progressPct).toBe(20)
    })

    it("caps mastered counts at the level total", () => {
        const t = computeTrajectory(input({
            masteredByLevel: { A1: 99 },
            plan: { targetLevel: "A1" },
        }))
        expect(t.status).toBe("achieved")
    })
})
