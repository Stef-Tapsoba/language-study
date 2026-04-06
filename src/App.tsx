// App.tsx — Route definitions and top-level app wrapper
import { useState, useEffect, lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams } from "react-router-dom"
import { AuthProvider } from "./auth/AuthContext"
import { ExerciseShell } from "./components/ExerciseShell"
import { DebugBadge } from "./components/DebugBadge"
import { TooltipProvider } from "./components/ui/tooltip"
import { ProtectedRoute } from "./auth/ProtectedRoute"
import { ProgressProvider, useProgress } from "./context/ProgressContext"
import { getModule, loadModule, loadAdvancedModule, isAdvancedLoaded } from "./data/modules"

const LandingPage        = lazy(() => import("./pages/LandingPage").then(m => ({ default: m.LandingPage })))
const LoginPage          = lazy(() => import("./pages/LoginPage").then(m => ({ default: m.LoginPage })))
const RegisterPage       = lazy(() => import("./pages/RegisterPage").then(m => ({ default: m.RegisterPage })))
const HomePage           = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })))
const LanguageSelectPage = lazy(() => import("./pages/LanguageSelectPage").then(m => ({ default: m.LanguageSelectPage })))
const DashboardPage      = lazy(() => import("./pages/DashboardPage").then(m => ({ default: m.DashboardPage })))
const PlacementPage      = lazy(() => import("./pages/PlacementPage").then(m => ({ default: m.PlacementPage })))
const GrammarPage        = lazy(() => import("./pages/GrammarPage").then(m => ({ default: m.GrammarPage })))
const VocabPage          = lazy(() => import("./pages/VocabPage").then(m => ({ default: m.VocabPage })))
const VerbsPage          = lazy(() => import("./pages/VerbsPage").then(m => ({ default: m.VerbsPage })))
const LevelTestPage      = lazy(() => import("./pages/LevelTestPage").then(m => ({ default: m.LevelTestPage })))
const ProfilePage        = lazy(() => import("./pages/ProfilePage").then(m => ({ default: m.ProfilePage })))
const FlashcardsPage     = lazy(() => import("./pages/FlashcardsPage").then(m => ({ default: m.FlashcardsPage })))
const VerbDrillPage      = lazy(() => import("./pages/VerbDrillPage").then(m => ({ default: m.VerbDrillPage })))
const GrammarDrillPage   = lazy(() => import("./pages/GrammarDrillPage").then(m => ({ default: m.GrammarDrillPage })))
const UnitPage           = lazy(() => import("./pages/UnitPage").then(m => ({ default: m.UnitPage })))
const ReadingPage        = lazy(() => import("./pages/ReadingPage").then(m => ({ default: m.ReadingPage })))
const ListeningPage      = lazy(() => import("./pages/ListeningPage").then(m => ({ default: m.ListeningPage })))
const CulturePage        = lazy(() => import("./pages/CulturePage").then(m => ({ default: m.CulturePage })))
const CategoryReadingPage = lazy(() => import("./pages/CategoryReadingPage").then(m => ({ default: m.CategoryReadingPage })))
const GrammarLessonPage  = lazy(() => import("./pages/GrammarLessonPage").then(m => ({ default: m.GrammarLessonPage })))
const ReviewPage         = lazy(() => import("./pages/ReviewPage").then(m => ({ default: m.ReviewPage })))
const GoalPickerPage     = lazy(() => import("./pages/GoalPickerPage").then(m => ({ default: m.GoalPickerPage })))

// Ensures the language data chunk is loaded before any /learn/:langId page renders.
// For B2+ users, also waits for the advanced (B2–C1) chunk to merge before rendering,
// so components always receive complete data for the active level.
function LanguageLoader() {
    const { langId } = useParams<{ langId: string }>()
    const { level: getLevel } = useProgress()

    const isFullyLoaded = (id: string) => {
        if (!getModule(id)) return false
        const lv = getLevel(id)
        return (lv !== "B2" && lv !== "C1") || isAdvancedLoaded(id)
    }

    const [ready, setReady] = useState(() => Boolean(langId && isFullyLoaded(langId)))

    useEffect(() => {
        if (!langId) return
        if (isFullyLoaded(langId)) { setReady(true); return }

        async function load() {
            await loadModule(langId!)
            const lv = getLevel(langId!)
            if (lv === "B2" || lv === "C1") await loadAdvancedModule(langId!)
            setReady(true)
        }
        load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [langId])

    if (!ready) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
        </div>
    )

    return <Outlet />
}

export default function App() {
    return (
        <AuthProvider>
            <TooltipProvider>
            <ProgressProvider>
            <BrowserRouter>
                <Suspense fallback={
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                }>
                <Routes>
                    {/* Public */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    {/* Authenticated home */}
                    <Route path="/home" element={
                        <ProtectedRoute><HomePage /></ProtectedRoute>
                    } />

                    {/* Language selection (add / switch) */}
                    <Route path="/languages" element={
                        <ProtectedRoute><LanguageSelectPage /></ProtectedRoute>
                    } />

                    {/* Per-language routes — protected once, module loaded before any child renders */}
                    <Route path="/learn/:langId" element={
                        <ProtectedRoute><LanguageLoader /></ProtectedRoute>
                    }>
                        <Route index element={<DashboardPage />} />
                        <Route path="placement" element={<PlacementPage />} />
                        <Route path="grammar" element={<GrammarPage />} />
                        <Route path="grammar/:lessonId" element={<GrammarLessonPage />} />
                        <Route path="vocab" element={<VocabPage />} />
                        <Route path="verbs" element={<VerbsPage />} />
                        <Route path="level-test" element={<LevelTestPage />} />
                        <Route path="flashcards" element={<FlashcardsPage />} />
                        <Route path="verb-drill" element={<VerbDrillPage />} />
                        <Route path="grammar-drill" element={<GrammarDrillPage />} />
                        <Route path="units/:unitId" element={<UnitPage />} />
                        <Route path="reading" element={<ReadingPage />} />
                        <Route path="reading/:category" element={<CategoryReadingPage />} />
                        <Route path="listening" element={<ListeningPage />} />
                        <Route path="culture" element={<CulturePage />} />
                        {/* Registry-based exercises — ExerciseShell looks up the type and renders it */}
                        <Route path="exercise/:exerciseTypeId" element={<ExerciseShell />} />
                        {/* Break-return review session */}
                        <Route path="review" element={<ReviewPage />} />
                        {/* Learning goal picker */}
                        <Route path="goal" element={<GoalPickerPage />} />
                    </Route>

                    {/* Profile */}
                    <Route path="/profile" element={
                        <ProtectedRoute><ProfilePage /></ProtectedRoute>
                    } />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
                </Suspense>
                <DebugBadge />
            </BrowserRouter>
            </ProgressProvider>
            </TooltipProvider>
        </AuthProvider>
    )
}
