import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

// Мы создадим эти страницы в следующих шагах
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import LibraryPage from "../pages/LibraryPage";
import GoogleRedirectPage from "../pages/GoogleRedirectPage";

// Ваш App.tsx был разделен на App и AppContent,
// но для роутинга удобнее держать логику в одном месте.
// Убираем AppContent и css.container из App.tsx,
// т.к. страницы логина/регистрации должны быть во всю ширину.
// Контейнер мы будем применять уже внутри страниц (LibraryPage и т.д.)

function App() {
    return (
        <AuthProvider>
            <Routes>
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
                {/* Добавим /training и /statistics как приватные 
                  (пока ведут на Library) 
                */}
                <Route
                    path="/training"
                    element={
                        <PrivateRoute>
                            {/* <TrainingPage /> */}
                            <LibraryPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/statistics"
                    element={
                        <PrivateRoute>
                            {/* <StatisticsPage /> */}
                            <LibraryPage />
                        </PrivateRoute>
                    }
                />

                {/* Перенаправление с главной страницы */}
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Страница не найдена (по желанию) */}
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </AuthProvider>
    );
}

export default App;
