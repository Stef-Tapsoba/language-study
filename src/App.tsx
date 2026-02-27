// App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./auth/AuthContext"
import { ProtectedRoute } from "./auth/ProtectedRoute"

import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
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

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    {/* Root → languages */}
                    <Route path="/" element={<Navigate to="/languages" replace />} />

                    {/* Protected */}
                    <Route path="/languages" element={
                        <ProtectedRoute><LanguageSelectPage /></ProtectedRoute>
                    } />

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

                    <Route path="/profile" element={
                        <ProtectedRoute><ProfilePage /></ProtectedRoute>
                    } />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/languages" replace />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}