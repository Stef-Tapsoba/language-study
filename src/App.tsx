// App.tsx — Route definitions and top-level app wrapper
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./auth/AuthContext"
import { ProtectedRoute } from "./auth/ProtectedRoute"

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

export default function App() {
    return (
        <AuthProvider>
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

                    {/* Per-language routes */}
                    <Route path="/learn/:langId" element={
                        <ProtectedRoute><DashboardPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/placement" element={
                        <ProtectedRoute><PlacementPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/grammar" element={
                        <ProtectedRoute><GrammarPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/vocab" element={
                        <ProtectedRoute><VocabPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/verbs" element={
                        <ProtectedRoute><VerbsPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/level-test" element={
                        <ProtectedRoute><LevelTestPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/flashcards" element={
                        <ProtectedRoute><FlashcardsPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/verb-drill" element={
                        <ProtectedRoute><VerbDrillPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/grammar-drill" element={
                        <ProtectedRoute><GrammarDrillPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/units/:unitId" element={
                        <ProtectedRoute><UnitPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/reading" element={
                        <ProtectedRoute><ReadingPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/listening" element={
                        <ProtectedRoute><ListeningPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/culture" element={
                        <ProtectedRoute><CulturePage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/reading/:category" element={
                        <ProtectedRoute><CategoryReadingPage /></ProtectedRoute>
                    } />
                    <Route path="/learn/:langId/grammar/:lessonId" element={
                        <ProtectedRoute><GrammarLessonPage /></ProtectedRoute>
                    } />

                    {/* Profile */}
                    <Route path="/profile" element={
                        <ProtectedRoute><ProfilePage /></ProtectedRoute>
                    } />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
