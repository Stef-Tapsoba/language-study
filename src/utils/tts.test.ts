// utils/tts.test.ts

import { speak, TTS_LANG_MAP } from "./tts"

// ── helpers ────────────────────────────────────────────────────────────────────

/**
 * jsdom does not implement SpeechSynthesisUtterance. We provide a minimal
 * stand-in so that the @myorg/tts speak() function can construct one.
 * The mock captures the properties set by the real code (lang, rate, text).
 */
class MockSpeechSynthesisUtterance {
    lang = ""
    rate = 1
    text: string
    constructor(text: string) {
        this.text = text
    }
}

type MockUtt = InstanceType<typeof MockSpeechSynthesisUtterance>

function makeSpeechSynthesisMock() {
    return {
        cancel: vi.fn(),
        speak: vi.fn(),
        speaking: false,
    }
}

beforeEach(() => {
    // Install the SpeechSynthesisUtterance mock globally so @myorg/tts can use it.
    // globalThis is the correct cross-environment reference in jsdom.
    Object.defineProperty(globalThis, "SpeechSynthesisUtterance", {
        value: MockSpeechSynthesisUtterance,
        writable: true,
        configurable: true,
    })
})

// ── TTS_LANG_MAP ───────────────────────────────────────────────────────────────

describe("TTS_LANG_MAP", () => {
    it("maps es → es-ES", () => {
        expect(TTS_LANG_MAP["es"]).toBe("es-ES")
    })

    it("maps fr → fr-FR", () => {
        expect(TTS_LANG_MAP["fr"]).toBe("fr-FR")
    })

    it("maps it → it-IT", () => {
        expect(TTS_LANG_MAP["it"]).toBe("it-IT")
    })

    it("maps ja → ja-JP", () => {
        expect(TTS_LANG_MAP["ja"]).toBe("ja-JP")
    })

    it("maps ko → ko-KR", () => {
        expect(TTS_LANG_MAP["ko"]).toBe("ko-KR")
    })
})

// ── speak() ────────────────────────────────────────────────────────────────────

describe("speak", () => {
    let synthMock: ReturnType<typeof makeSpeechSynthesisMock>

    beforeEach(() => {
        synthMock = makeSpeechSynthesisMock()
        Object.defineProperty(globalThis, "speechSynthesis", {
            value: synthMock,
            writable: true,
            configurable: true,
        })
    })

    it("calls speechSynthesis.speak for Spanish (es → es-ES)", () => {
        speak("hola", "es")
        expect(synthMock.speak).toHaveBeenCalledOnce()
        const utt = synthMock.speak.mock.calls[0][0] as MockUtt
        expect(utt.lang).toBe("es-ES")
        expect(utt.text).toBe("hola")
    })

    it("calls speechSynthesis.speak for French (fr → fr-FR)", () => {
        speak("bonjour", "fr")
        const utt = synthMock.speak.mock.calls[0][0] as MockUtt
        expect(utt.lang).toBe("fr-FR")
    })

    it("calls speechSynthesis.speak for Italian (it → it-IT)", () => {
        speak("ciao", "it")
        const utt = synthMock.speak.mock.calls[0][0] as MockUtt
        expect(utt.lang).toBe("it-IT")
    })

    it("calls speechSynthesis.speak for Japanese (ja → ja-JP)", () => {
        speak("こんにちは", "ja")
        const utt = synthMock.speak.mock.calls[0][0] as MockUtt
        expect(utt.lang).toBe("ja-JP")
    })

    it("calls speechSynthesis.speak for Korean (ko → ko-KR)", () => {
        speak("안녕하세요", "ko")
        const utt = synthMock.speak.mock.calls[0][0] as MockUtt
        expect(utt.lang).toBe("ko-KR")
    })

    it("passes through a BCP-47 tag directly when langId is not in the map", () => {
        speak("hello", "en-US")
        const utt = synthMock.speak.mock.calls[0][0] as MockUtt
        expect(utt.lang).toBe("en-US")
    })

    it("cancels any in-progress speech before speaking", () => {
        speak("hola", "es")
        expect(synthMock.cancel).toHaveBeenCalledOnce()
    })

    it("passes the default rate (0.9) to the utterance", () => {
        speak("hola", "es")
        const utt = synthMock.speak.mock.calls[0][0] as MockUtt
        expect(utt.rate).toBe(0.9)
    })

    it("passes a custom rate to the utterance", () => {
        speak("hola", "es", 0.7)
        const utt = synthMock.speak.mock.calls[0][0] as MockUtt
        expect(utt.rate).toBe(0.7)
    })

    it("does not throw when speechSynthesis is undefined", () => {
        Object.defineProperty(globalThis, "speechSynthesis", {
            value: undefined,
            writable: true,
            configurable: true,
        })
        expect(() => speak("hello", "es")).not.toThrow()
    })
})
