import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import GoogleCallbackPage from "./pages/GoogleCallbackPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/callback/google" element={<GoogleCallbackPage />}/>
    </Routes>
  );
}
export default App;
