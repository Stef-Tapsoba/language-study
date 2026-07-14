// store/contentType.test.ts

import { describe, it, expect } from "vitest"
import { inferContentTypeFromId } from "./contentType"

describe("inferContentTypeFromId", () => {
    it("maps each type code to its ContentType", () => {
        expect(inferContentTypeFromId("fr-g-a1-3")).toBe("grammar")
        expect(inferContentTypeFromId("ja-v-a2-12")).toBe("vocab")
        expect(inferContentTypeFromId("ko-vb-b1-4")).toBe("verb")
        expect(inferContentTypeFromId("es-r-a1-1")).toBe("reading")
        expect(inferContentTypeFromId("it-l-c1-2")).toBe("listening")
        expect(inferContentTypeFromId("fr-c-a1-1")).toBe("culture")
        expect(inferContentTypeFromId("es-s-b2-7")).toBe("speaking")
    })

    it("ignores quiz sub-id suffixes", () => {
        expect(inferContentTypeFromId("fr-r-a1-1-q2")).toBe("reading")
        expect(inferContentTypeFromId("ko-l-a1-1-q3")).toBe("listening")
    })

    it("handles suffixed numbering like ko-v-a1-s1", () => {
        expect(inferContentTypeFromId("ko-v-a1-s1")).toBe("vocab")
    })

    it("falls back to grammar for unrecognised ids", () => {
        expect(inferContentTypeFromId("something-weird")).toBe("grammar")
        expect(inferContentTypeFromId("nodashes")).toBe("grammar")
        expect(inferContentTypeFromId("")).toBe("grammar")
    })
})
