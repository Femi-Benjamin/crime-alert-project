import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from "./pages/auth";
import { OverviewPage } from "./pages/dashboard";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="auth/login" element={<LoginPage />} />
                    <Route path="auth/signup" element={<SignupPage />} />
                    <Route path="dashboard">
                        <Route index element={<OverviewPage />} />
                        <Route path="overview" element={<OverviewPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
