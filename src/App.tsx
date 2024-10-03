import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import GoogleCallbackPage from "./pages/GoogleCallbackPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/callback/google" element={<GoogleCallbackPage />}/>
      <Route path="/home" element={<HomePage />}/>
    </Routes>
  );
}
export default App;
