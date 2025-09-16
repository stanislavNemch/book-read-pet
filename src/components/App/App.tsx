import Header from "../Header/Header";
import css from "./App.module.css";
import { useAuth } from "../hooks/useAuth";
import { AuthProvider } from "../context/AuthProvider";

function AppContent() {

    return (
        <div className={css.container}>
            
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

export default App;
