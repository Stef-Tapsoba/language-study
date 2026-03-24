/// <reference types="vitest/globals" />
import "@testing-library/jest-dom"

// ---------------------------------------------------------------------------
// In-memory localStorage mock
// jsdom ships its own localStorage implementation, but we replace it with an
// explicit in-memory store so every test starts from a clean slate and writes
// never bleed through to a shared singleton.
// ---------------------------------------------------------------------------

class InMemoryStorage implements Storage {
    private store: Record<string, string> = {}

    get length(): number {
        return Object.keys(this.store).length
    }

    key(index: number): string | null {
        return Object.keys(this.store)[index] ?? null
    }

    getItem(key: string): string | null {
        return Object.prototype.hasOwnProperty.call(this.store, key)
            ? this.store[key]
            : null
    }

    setItem(key: string, value: string): void {
        this.store[key] = String(value)
    }

    removeItem(key: string): void {
        delete this.store[key]
    }

    clear(): void {
        this.store = {}
    }
}

// Replace the jsdom localStorage/sessionStorage globals before each test
// and clear them after, giving every test file a pristine storage environment.
beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
        value: new InMemoryStorage(),
        writable: true,
        configurable: true,
    })
    Object.defineProperty(window, "sessionStorage", {
        value: new InMemoryStorage(),
        writable: true,
        configurable: true,
    })
})

afterEach(() => {
    window.localStorage.clear()
})
