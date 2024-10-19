import BarberPage from "@/pages/BarberPage";
import BarbershopPage from "@/pages/BarbershopPage";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import GoogleCallbackPage from "../pages/GoogleCallbackPage";
import HomePage from "../pages/HomePage";
import SchedulesPage from "../pages/SchedulesPage";
import SearchPage from "../pages/SearchPage";
import AuthGuard from "./AuthGuard";
import Layout from "./Layout";


export default function Router() {
  return (
    <Routes>
      <Route element={<AuthGuard isPrivate />}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/schedules" element={<SchedulesPage />} />
          <Route path="/barbershop/:id" element={<BarbershopPage />} />
          <Route path="/barber/:id" element={<BarberPage />} />
        </Route>
      </Route>

      <Route element={<AuthGuard isPrivate={false} />}>
        <Route path="/sign-in" element={<AuthPage />} />
        <Route path="/callback/google" element={<GoogleCallbackPage />} />
      </Route>
    </Routes>
  );
}
