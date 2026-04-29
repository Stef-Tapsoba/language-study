// pages/CulturePage.tsx — Culture episode page (upgraded for CultureEpisode type)
import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { Button } from "../components/ui/button"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { useProgress } from "../context/ProgressContext"
import { useStatsStore } from "../store/useStatsStore"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { QuizCard } from "../components/QuizCard"
import { CultureEpisode, CEFR_LEVELS } from "../types"
import { getUI, fmt } from "../i18n"
import { Flag } from "../components/Flag"
import { CATEGORY_META, CATEGORY_META_FALLBACK } from "../data/cultureConfig"

function CategoryPill({ category }: { category: string }) {
    const meta = CATEGORY_META[category] ?? { ...CATEGORY_META_FALLBACK, label: category }
    return (
        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${meta.color}`}>
            {meta.emoji} {meta.label}
        </span>
    )
}

// ---------------------------------------------------------------------------
// Question type badge
// ---------------------------------------------------------------------------
function QuestionTypePill({ type }: { type: "comprehension" | "reflection" | "comparison" }) {
    const cfg = {
        comprehension: { label: "Comprehension", color: "bg-reading-surface text-reading" },
        reflection: { label: "Reflect", color: "bg-listening-surface text-listening" },
        comparison: { label: "Compare", color: "bg-culture-surface text-culture" },
    }[type]
    return (
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cfg.color}`}>
            {cfg.label}
        </span>
    )
}

// ---------------------------------------------------------------------------
// YouTube embed
// ---------------------------------------------------------------------------
function VideoEmbed({ video }: Readonly<{ video: NonNullable<CultureEpisode["video"]> }>) {
    const [playing, setPlaying] = useState(false)

    const src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1${video.startSeconds ? `&start=${video.startSeconds}` : ""
        }${video.captionLang ? `&cc_lang_pref=${video.captionLang}&cc_load_policy=1` : ""}`

    return (
        <div className="rounded-2xl overflow-hidden border border-border-default bg-black">
            {playing ? (
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            ) : (
                <button
                    onClick={() => setPlaying(true)}
                    className="relative w-full group"
                    style={{ paddingTop: "56.25%" }}
                    aria-label={`Play: ${video.title}`}
                >
                    {/* YouTube thumbnail */}
                    <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                            <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent text-left">
                        <p className="text-white text-sm font-medium leading-snug">{video.title}</p>
                        <p className="text-white/60 text-xs mt-0.5">{video.channelName}</p>
                    </div>
                </button>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// Photo essay
// ---------------------------------------------------------------------------
function PhotoEssay({ photos }: { photos: CultureEpisode["photos"] }) {
    const [activeIdx, setActiveIdx] = useState(0)
    if (photos.length === 0) return null
    const photo = photos[activeIdx]

    return (
        <div className="rounded-2xl overflow-hidden border border-border-default bg-surface-card">
            <div className="relative" style={{ paddingTop: "60%" }}>
                <img
                    key={photo.url}
                    src={photo.url}
                    alt={photo.caption.native}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-sm leading-snug">{photo.caption.target ?? photo.caption.native}</p>
                    {photo.credit && <p className="text-white/50 text-xs mt-0.5">{photo.credit}</p>}
                </div>
            </div>
            {/* Thumbnail strip */}
            {photos.length > 1 && (
                <div className="flex gap-2 p-3">
                    {photos.map((p, i) => (
                        <button
                            key={p.url}
                            onClick={() => setActiveIdx(i)}
                            className={`flex-1 rounded-lg overflow-hidden border-2 transition-colors ${i === activeIdx ? "border-amber-500" : "border-transparent"
                                }`}
                            style={{ paddingTop: "25%" }}
                        >
                            <img src={p.url} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover -mt-[25%]" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// Culture vocab — enhanced with cultural note
// ---------------------------------------------------------------------------
function CultureVocabPanel({ vocab }: { vocab: CultureEpisode["cultureVocab"] }) {
    const [open, setOpen] = useState(true)
    const [expanded, setExpanded] = useState<string | null>(null)

    return (
        <div className="bg-surface-card rounded-2xl border border-border-default overflow-hidden">
            <button
                onClick={() => setOpen(v => !v)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-text-sec hover:bg-surface-elevated"
            >
                <span>🔑 Key vocabulary & cultural notes</span>
                <span className="text-text-ter text-xs">{open ? "▲" : "▼"}</span>
            </button>
            {open && (
                <div className="px-4 pb-4 flex flex-col gap-2">
                    {vocab.map(v => (
                        <button
                            key={v.word}
                            onClick={() => setExpanded(exp => exp === v.word ? null : v.word)}
                            className="w-full text-left bg-vocab-surface hover:bg-vocab-surface/80 rounded-xl px-4 py-3 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <p className="text-sm font-bold text-text-pri">{v.word}</p>
                                    {v.romanized && (
                                        <p className="text-xs text-romanized font-medium">{v.romanized}</p>
                                    )}
                                    <p className="text-xs text-text-sec mt-0.5">{v.translation}</p>
                                </div>
                                {v.culturalNote && (
                                    <span className="text-xs text-vocab shrink-0 mt-0.5">
                                        {expanded === v.word ? "▲" : "💡"}
                                    </span>
                                )}
                            </div>
                            {expanded === v.word && v.culturalNote && (
                                <p className="text-xs text-text-sec mt-2 pt-2 border-t border-vocab-border leading-relaxed">
                                    {v.culturalNote}
                                </p>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// Did you know
// ---------------------------------------------------------------------------
function DidYouKnow({ content }: Readonly<{ content: NonNullable<CultureEpisode["didYouKnow"]> }>) {
    const [showTarget, setShowTarget] = useState(false)

    return (
        <div className="bg-vocab-surface border border-vocab-border rounded-2xl p-5">
            <p className="text-xs font-bold text-vocab uppercase tracking-wider mb-2">💡 Did you know?</p>
            <p className="text-sm text-text-pri leading-relaxed">
                {showTarget && content.target ? content.target : content.native}
            </p>
            {content.target && (
                <button
                    onClick={() => setShowTarget(v => !v)}
                    className="mt-3 text-xs text-vocab hover:underline font-medium"
                >
                    {showTarget ? "Show in English" : "Read in target language"}
                </button>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// Open-ended reflection question
// ---------------------------------------------------------------------------
function ReflectionCard({ question }: { question: CultureEpisode["questions"][number] }) {
    const [answered, setAnswered] = useState(false)
    const prompt = question.prompt.target ?? question.prompt.native

    return (
        <div className="bg-surface-card rounded-2xl border border-border-default p-5">
            <div className="flex items-center gap-2 mb-3">
                <QuestionTypePill type={question.type as "reflection" | "comparison"} />
            </div>
            <p className="text-sm font-medium text-text-pri leading-relaxed mb-3">{prompt}</p>
            {!answered ? (
                <button
                    onClick={() => setAnswered(true)}
                    className="text-xs text-grammar hover:underline font-medium"
                >
                    I've thought about this →
                </button>
            ) : (
                <div className="flex items-center gap-2 text-grammar">
                    <span className="text-sm">✓</span>
                    <span className="text-xs font-medium">Noted</span>
                </div>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// Quiz section — handles both comprehension (MCQ) and reflection/comparison
// ---------------------------------------------------------------------------
function QuizSection({
    episode,
    langId,
    ui,
}: {
    episode: CultureEpisode
    langId: string
    ui: ReturnType<typeof getUI>
}) {
    const compQs = episode.questions.filter(q => q.type === "comprehension" && q.options && q.answer)
    const openQs = episode.questions.filter(q => q.type !== "comprehension" || !q.options)

    const [quizOpen, setQuizOpen] = useState(false)
    const [quizIndex, setQuizIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [quizScore, setQuizScore] = useState(0)
    const [quizDone, setQuizDone] = useState(false)

    function handleSelect(opt: string) { setSelected(opt); setRevealed(true) }

    function handleNext() {
        const q = compQs[quizIndex]
        const newScore = quizScore + (selected === q.answer ? 1 : 0)
        if (quizIndex + 1 >= compQs.length) {
            setQuizScore(newScore); setQuizDone(true)
        } else {
            setQuizScore(newScore); setQuizIndex(i => i + 1); setSelected(null); setRevealed(false)
        }
    }

    return (
        <div className="flex flex-col gap-4">
            {/* MCQ comprehension */}
            {compQs.length > 0 && (
                <>
                    {!quizOpen ? (
                        <button
                            onClick={() => setQuizOpen(true)}
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold
                                       rounded-xl py-3 text-sm transition-colors"
                        >
                            {ui.checkUnderstanding}
                        </button>
                    ) : quizDone ? (
                        <div className="bg-surface-card rounded-2xl border border-border-default p-5 text-center">
                            <div className="text-3xl mb-2">{quizScore === compQs.length ? "🎉" : "💪"}</div>
                            <p className="font-semibold text-text-pri">
                                {fmt(ui.youAnswered, { score: quizScore, total: compQs.length })}
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between text-sm text-text-sec">
                                <span>{fmt(ui.questionOf, { n: quizIndex + 1, total: compQs.length })}</span>
                                <span>{ui.scoreLabel}: {quizScore}</span>
                            </div>
                            <QuizCard
                                question={compQs[quizIndex].prompt.native}
                                options={compQs[quizIndex].options!}
                                selected={selected}
                                correct={revealed ? compQs[quizIndex].answer! : null}
                                onSelect={handleSelect}
                            />
                            {revealed && (
                                <Button
                                    onClick={handleNext}
                                    className="w-full rounded-xl py-3"
                                >
                                    {quizIndex + 1 >= compQs.length ? ui.seeResults : ui.nextQuestion}
                                </Button>
                            )}
                        </div>
                    )}
                </>
            )}

            {/* Reflection / comparison questions */}
            {openQs.map(q => (
                <ReflectionCard key={q.id} question={q} />
            ))}
        </div>
    )
}

// ---------------------------------------------------------------------------
// CultureEpisodeView — full episode reading view
// ---------------------------------------------------------------------------
function CultureEpisodeView({
    episode,
    langId,
    level,
    completed,
    ui,
}: Readonly<{
    episode: CultureEpisode
    langId: string
    level: string
    completed: string[]
    ui: ReturnType<typeof getUI>
}>) {
    const showTranslation = level === "A1" || level === "A2"
    const [translationShown, setTranslationShown] = useState(level === "A1")
    const [markedRead, setMarkedRead] = useState(completed.includes(episode.id))
    const { markLessonComplete } = useProgress()

    function handleMarkRead() {
        markLessonComplete(langId, episode.id, "culture")
        useStatsStore.getState().recordActivity(langId)
        setMarkedRead(true)
    }

    const bodyText = episode.body.target ?? episode.body.native

    return (
        <div className="flex flex-col gap-5 pb-28">

            {/* Header */}
            <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                    <CategoryPill category={episode.category} />
                    <h2 className="text-xl font-bold text-text-pri mt-2 leading-tight">
                        {episode.title.target ?? episode.title.native}
                    </h2>
                    <p className="text-sm text-text-sec mt-1 italic">{episode.subtitle}</p>
                </div>
                <LevelBadge level={episode.level} />
            </div>

            {/* Video */}
            {episode.video && <VideoEmbed video={episode.video} />}

            {/* Photo essay */}
            {episode.photos.length > 0 && (
                <PhotoEssay photos={episode.photos} />
            )}

            {/* Body text */}
            {episode.simpleTarget ? (
                <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                    <p className="text-base text-text-pri leading-relaxed whitespace-pre-line">{episode.body.native}</p>
                    <div className="mt-4 pt-4 border-t border-border-subtle">
                        <p className="text-xs font-semibold text-grammar uppercase tracking-wide mb-3">
                            📖 Simple {getLanguage(langId)?.name} — reading practice
                        </p>
                        <p className="text-sm text-text-sec leading-relaxed whitespace-pre-line">
                            {episode.simpleTarget}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                    <p className="text-base text-text-pri leading-relaxed whitespace-pre-line">{bodyText}</p>
                    {showTranslation && (
                        <div className="mt-4 pt-4 border-t border-border-subtle">
                            <button
                                onClick={() => setTranslationShown(v => !v)}
                                className="text-sm text-grammar hover:underline mb-2"
                            >
                                {translationShown ? ui.hideEnglish : ui.showEnglish}
                            </button>
                            {translationShown && (
                                <p className="text-sm text-text-sec leading-relaxed whitespace-pre-line">
                                    {episode.body.native}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Culture vocab */}
            <CultureVocabPanel vocab={episode.cultureVocab} />

            {/* Did you know */}
            {episode.didYouKnow && <DidYouKnow content={episode.didYouKnow} />}

            {/* Questions (MCQ + open reflection) */}
            <QuizSection episode={episode} langId={langId} ui={ui} />

            {/* Sticky mark-as-read bar */}
            <div className="fixed bottom-0 left-0 right-0 z-20 bg-surface-card border-t border-border-default px-4 pt-3 pb-safe">
                <div className="max-w-xl mx-auto">
                    <button
                        onClick={markedRead ? undefined : handleMarkRead}
                        disabled={markedRead}
                        className={`w-full font-semibold rounded-xl py-3 text-sm transition-colors border ${markedRead
                            ? "border-grammar-border text-grammar bg-grammar-surface cursor-default"
                            : "border-amber-600 bg-amber-600 text-white hover:bg-amber-700"
                            }`}
                    >
                        {markedRead ? `✓ ${ui.passageComplete}` : ui.markAsRead}
                    </button>
                </div>
            </div>
        </div>
    )
}

// ---------------------------------------------------------------------------
// CultureBrowse — episode card grid
// ---------------------------------------------------------------------------
function CultureBrowse({
    episodes,
    completed,
    onSelect,
    ui,
}: Readonly<{
    episodes: CultureEpisode[]
    completed: string[]
    onSelect: (e: CultureEpisode) => void
    ui: ReturnType<typeof getUI>
}>) {
    if (episodes.length === 0) {
        return (
            <div className="text-center py-16 text-text-ter">
                <p className="text-4xl mb-3">🌍</p>
                <p className="font-medium">No cultural episodes at this level yet</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3">
            {episodes.map(ep => {
                const isDone = completed.includes(ep.id)
                return (
                    <button
                        key={ep.id}
                        onClick={() => onSelect(ep)}
                        className="w-full text-left bg-surface-card rounded-2xl border border-border-default overflow-hidden
                                   hover:border-amber-400 hover:shadow-sm transition-all"
                    >
                        {/* Video thumbnail strip */}
                        <div className="relative h-28 bg-vocab-surface overflow-hidden">
                            {ep.video ? (
                                <img
                                    src={`https://img.youtube.com/vi/${ep.video.youtubeId}/mqdefault.jpg`}
                                    alt={ep.title.native}
                                    className="w-full h-full object-cover opacity-80"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-4xl">{CATEGORY_META[ep.category]?.emoji ?? "🌍"}</span>
                                </div>
                            )}
                            {/* Play chip — only when video exists */}
                            {ep.video && (
                                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/60 rounded-full px-2.5 py-1">
                                    <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                    <span className="text-white text-xs font-medium">{ep.video.channelName}</span>
                                </div>
                            )}
                            {isDone && (
                                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold
                                                rounded-full w-6 h-6 flex items-center justify-center">
                                    ✓
                                </div>
                            )}
                        </div>

                        {/* Card body */}
                        <div className="p-4">
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                        <CategoryPill category={ep.category} />
                                    </div>
                                    <p className="font-semibold text-text-pri leading-snug">
                                        {ep.title.native}
                                    </p>
                                    <p className="text-xs text-text-sec mt-1 line-clamp-2 leading-relaxed">
                                        {ep.subtitle}
                                    </p>
                                </div>
                                <LevelBadge level={ep.level} />
                            </div>
                            <div className="mt-3 flex items-center gap-3 text-xs text-text-ter">
                                <span>📸 {ep.photos.length} photos</span>
                                <span>🔑 {ep.cultureVocab.length} words</span>
                                <span>❓ {ep.questions.length} questions</span>
                            </div>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}

// ---------------------------------------------------------------------------
// CulturePage — root
// ---------------------------------------------------------------------------
export function CulturePage() {
    const { langId = "" } = useParams()
    const [searchParams] = useSearchParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const { level: getLevel, completed: getCompleted } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)

    const [selectedEpisode, setSelectedEpisode] = useState<CultureEpisode | null>(() => {
        const id = searchParams.get("episode")
        if (!id || !mod) return null
        return mod.cultureEpisodes?.find((ep: CultureEpisode) => ep.id === id) ?? null
    })

    if (!language || !mod) return null

    // mod.cultureEpisodes is the new field — falls back to empty array
    const episodes: CultureEpisode[] = (mod.cultureEpisodes ?? [])
        .filter((ep: CultureEpisode) => CEFR_LEVELS.indexOf(ep.level) <= CEFR_LEVELS.indexOf(level))

    const completed = getCompleted(langId)
    const handleBack = selectedEpisode ? () => setSelectedEpisode(null) : undefined

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar
                title={selectedEpisode ? (selectedEpisode.title.target ?? selectedEpisode.title.native) : ui.sectionCulture}
                level={level}
                backTo="back" fallbackRoute={`/learn/${langId}`}
                onBack={handleBack}
            />

            {/* Hero banner — browse view only */}
            {!selectedEpisode && (
                <div className="bg-vocab-surface border-b border-vocab-border px-4 py-5">
                    <div className="max-w-xl mx-auto flex items-center gap-3">
                        <Flag langId={langId} size="lg" />
                        <div>
                            <p className="font-bold text-text-pri">{language.name} · Cultural Episodes</p>
                            <p className="text-xs text-vocab mt-0.5">
                                Stories, traditions, and cultural context
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <main className="max-w-xl mx-auto px-4 py-6">
                {selectedEpisode ? (
                    <CultureEpisodeView
                        episode={selectedEpisode}
                        langId={langId}
                        level={level}
                        completed={completed}
                        ui={ui}
                    />
                ) : (
                    <CultureBrowse
                        episodes={episodes}
                        completed={completed}
                        onSelect={setSelectedEpisode}
                        ui={ui}
                    />
                )}
            </main>
        </div>
    )
}