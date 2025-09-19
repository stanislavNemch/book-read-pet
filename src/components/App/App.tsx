import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Импортируем AnimatePresence
import { AuthProvider } from "../context/AuthProvider";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import LibraryPage from "../pages/LibraryPage";
import GoogleRedirectPage from "../pages/GoogleRedirectPage";

function App() {
    const location = useLocation(); // Получаем текущий location

    return (
        <AuthProvider>
            {/* Оборачиваем Routes в AnimatePresence */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <PublicRoute>
                                <RegistrationPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/auth/google-redirect"
                        element={
                            <PublicRoute>
                                <GoogleRedirectPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/library"
                        element={
                            <PrivateRoute>
                                <LibraryPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/training"
                        element={
                            <PrivateRoute>
                                <LibraryPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/statistics"
                        element={
                            <PrivateRoute>
                                <LibraryPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>
            </AnimatePresence>
        </AuthProvider>
    );
}

export default App;
