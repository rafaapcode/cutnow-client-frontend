import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import GoogleCallbackPage from "../pages/GoogleCallbackPage";
import HomePage from "../pages/HomePage";
import AuthGuard from "./AuthGuard";
import Layout from "./Layout";

export default function Router() {
  return (
    <Routes>
      <Route element={<AuthGuard isPrivate />}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Route>

      <Route element={<AuthGuard isPrivate={false} />}>
        <Route path="/sign-in" element={<AuthPage />} />
        <Route path="/callback/google" element={<GoogleCallbackPage />} />
      </Route>
    </Routes>
  );
}
