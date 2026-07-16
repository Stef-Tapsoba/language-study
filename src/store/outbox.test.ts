// store/outbox.test.ts

import { describe, it, expect, beforeEach, vi } from "vitest"
import { outbox, syncOrQueue, type OutboxOp } from "./outbox"
import type { SupabaseClient } from "@supabase/supabase-js"

// ---------------------------------------------------------------------------
// Mock Supabase client — upsert/update/rpc resolve { error } like supabase-js
// ---------------------------------------------------------------------------

function makeSb(overrides: { upsertError?: unknown; updateError?: unknown; rpcError?: unknown } = {}) {
    const calls: Array<{ kind: string; table?: string; payload?: unknown }> = []
    const upsert = vi.fn((payload: unknown) => {
        calls.push({ kind: "upsert", payload })
        return Promise.resolve({ error: overrides.upsertError ?? null })
    })
    const eq = vi.fn(() => Promise.resolve({ error: overrides.updateError ?? null }))
    const update = vi.fn((payload: unknown) => {
        calls.push({ kind: "update", payload })
        return { eq }
    })
    const from = vi.fn((table: string) => {
        calls[calls.length] = calls[calls.length] // no-op, table recorded below
        return { upsert, update }
    })
    const rpc = vi.fn((_fn: string, args: unknown) => {
        calls.push({ kind: "rpc", payload: args })
        return Promise.resolve({ error: overrides.rpcError ?? null })
    })
    return { sb: { from, rpc } as unknown as SupabaseClient, upsert, update, rpc, calls }
}

function upsertOp(key: string, n = 1): OutboxOp {
    return { kind: "upsert", table: "mastered_units", payload: { n }, onConflict: "user_id", key }
}

function statOp(key: string, reviewed: number): OutboxOp {
    return {
        kind: "rpc-stat",
        key,
        args: {
            p_user_id: "u1", p_lang_id: "fr", p_date: "2026-07-13",
            p_reviewed: reviewed, p_correct: 0, p_acts: 0, p_q_total: 0, p_q_correct: 0,
        },
    }
}

function queued(): Array<{ op: OutboxOp; tries: number }> {
    return JSON.parse(localStorage.getItem("ls:outbox:u1") ?? "[]")
}

beforeEach(() => {
    outbox._resetForTests()
    outbox.setUser("u1")
})

// ---------------------------------------------------------------------------

describe("enqueue", () => {
    it("persists ops under the per-user key", () => {
        outbox.enqueue(upsertOp("a"))
        outbox.enqueue(upsertOp("b"))
        expect(outbox.size()).toBe(2)
        expect(localStorage.getItem("ls:outbox:u1")).toBeTruthy()
    })

    it("coalesces same-key upserts — newest payload wins", () => {
        outbox.enqueue(upsertOp("a", 1))
        outbox.enqueue(upsertOp("a", 2))
        expect(outbox.size()).toBe(1)
        const [head] = queued()
        expect((head.op as Extract<OutboxOp, { kind: "upsert" }>).payload).toEqual({ n: 2 })
    })

    it("sums deltas for same-key rpc-stat ops", () => {
        outbox.enqueue(statOp("stats|fr|2026-07-13", 1))
        outbox.enqueue(statOp("stats|fr|2026-07-13", 2))
        expect(outbox.size()).toBe(1)
        const [head] = queued()
        expect((head.op as Extract<OutboxOp, { kind: "rpc-stat" }>).args.p_reviewed).toBe(3)
    })

    it("sums deltas for same-key rpc-skill-stat ops", () => {
        const skillOp = (total: number, correct: number): OutboxOp => ({
            kind: "rpc-skill-stat",
            key: "skillstats|fr|2026-07-15|CE",
            args: {
                p_user_id: "u1", p_lang_id: "fr", p_date: "2026-07-15",
                p_skill: "CE", p_total: total, p_correct: correct,
            },
        })
        outbox.enqueue(skillOp(1, 1))
        outbox.enqueue(skillOp(1, 0))
        expect(outbox.size()).toBe(1)
        const [head] = queued()
        const args = (head.op as Extract<OutboxOp, { kind: "rpc-skill-stat" }>).args
        expect(args.p_total).toBe(2)
        expect(args.p_correct).toBe(1)
    })

    it("isolates queues per user", () => {
        outbox.enqueue(upsertOp("a"))
        outbox.setUser("u2")
        expect(outbox.size()).toBe(0)
        outbox.setUser("u1")
        expect(outbox.size()).toBe(1)
    })

    it("no-ops when no user is set", () => {
        outbox._resetForTests()
        outbox.enqueue(upsertOp("a"))
        expect(localStorage.getItem("ls:outbox:u1")).toBeNull()
    })
})

describe("flush", () => {
    it("replays queued ops FIFO and empties the queue", async () => {
        const { sb, upsert } = makeSb()
        outbox.configure(sb)
        outbox.enqueue(upsertOp("a", 1))
        outbox.enqueue(upsertOp("b", 2))
        await outbox.flush()
        expect(outbox.size()).toBe(0)
        expect(upsert).toHaveBeenNthCalledWith(1, { n: 1 }, { onConflict: "user_id" })
        expect(upsert).toHaveBeenNthCalledWith(2, { n: 2 }, { onConflict: "user_id" })
    })

    it("stops at the first failure and keeps remaining ops with a bumped retry count", async () => {
        const { sb } = makeSb({ upsertError: new Error("offline") })
        outbox.configure(sb)
        outbox.enqueue(upsertOp("a"))
        outbox.enqueue(upsertOp("b"))
        await outbox.flush()
        const q = queued()
        expect(q).toHaveLength(2)
        expect(q[0].tries).toBe(1)
        expect(q[1].tries).toBe(0)
    })

    it("drops a poison op after MAX_TRIES attempts", async () => {
        const { sb } = makeSb({ upsertError: new Error("constraint violation") })
        outbox.configure(sb)
        outbox.enqueue(upsertOp("poison"))
        for (let i = 0; i < 10; i++) await outbox.flush()
        expect(outbox.size()).toBe(0)
    })

    it("no-ops when unconfigured (Stage 1)", async () => {
        outbox.enqueue(upsertOp("a"))
        await outbox.flush()   // no sb configured
        expect(outbox.size()).toBe(1)
    })
})

describe("syncOrQueue", () => {
    it("executes immediately and queues nothing on success", async () => {
        const { sb, upsert } = makeSb()
        await syncOrQueue(sb, upsertOp("a"))
        expect(upsert).toHaveBeenCalledOnce()
        expect(outbox.size()).toBe(0)
    })

    it("queues the op and rethrows on failure", async () => {
        const { sb } = makeSb({ upsertError: new Error("offline") })
        await expect(syncOrQueue(sb, upsertOp("a"))).rejects.toThrow("offline")
        expect(outbox.size()).toBe(1)
    })

    it("executes update ops with match filters", async () => {
        const { sb, update } = makeSb()
        await syncOrQueue(sb, {
            kind: "update", table: "profiles",
            payload: { selected_language: "fr" },
            match: { id: "u1" },
            key: "profiles|selected_language|u1",
        })
        expect(update).toHaveBeenCalledWith({ selected_language: "fr" })
    })
})
