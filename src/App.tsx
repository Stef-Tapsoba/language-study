// App.tsx — Route definitions and top-level app wrapper
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams } from "react-router-dom"
import { AuthProvider } from "./auth/AuthContext"
import { ProtectedRoute } from "./auth/ProtectedRoute"
import { ProgressProvider } from "./context/ProgressContext"
import { getModule, loadModule } from "./data/modules"

import { LandingPage } from "./pages/LandingPage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { HomePage } from "./pages/HomePage"
import { LanguageSelectPage } from "./pages/LanguageSelectPage"
import { DashboardPage } from "./pages/DashboardPage"
import { PlacementPage } from "./pages/PlacementPage"
import { GrammarPage } from "./pages/GrammarPage"
import { VocabPage } from "./pages/VocabPage"
import { VerbsPage } from "./pages/VerbsPage"
import { LevelTestPage } from "./pages/LevelTestPage"
import { ProfilePage } from "./pages/ProfilePage"
import { FlashcardsPage } from "./pages/FlashcardsPage"
import { VerbDrillPage } from "./pages/VerbDrillPage"
import { GrammarDrillPage } from "./pages/GrammarDrillPage"
import { UnitPage } from "./pages/UnitPage"
import { ReadingPage } from "./pages/ReadingPage"
import { ListeningPage } from "./pages/ListeningPage"
import { CulturePage } from "./pages/CulturePage"
import { CategoryReadingPage } from "./pages/CategoryReadingPage"
import { GrammarLessonPage } from "./pages/GrammarLessonPage"

// Ensures the language data chunk is loaded before any /learn/:langId page renders.
// getModule() is synchronous and reads from cache — this gate means it never returns null
// for the active language.
function LanguageLoader() {
    const { langId } = useParams<{ langId: string }>()
    const [ready, setReady] = useState(() => Boolean(langId && getModule(langId)))

    useEffect(() => {
        if (!langId || getModule(langId)) { setReady(true); return }
        loadModule(langId).then(() => setReady(true))
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
            <ProgressProvider>
            <BrowserRouter>
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
                    </Route>

                    {/* Profile */}
                    <Route path="/profile" element={
                        <ProtectedRoute><ProfilePage /></ProtectedRoute>
                    } />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </BrowserRouter>
            </ProgressProvider>
        </AuthProvider>
    )
}
