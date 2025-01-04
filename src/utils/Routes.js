import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/invoice-form/main"
        element={<PrivateRoute element={<MainPage />} />}
      />
      <Route
        path="/invoice-form/login"
        element={
          !!localStorage.getItem("session") ? (
            <Navigate to="/invoice-form/main" replace />
          ) : (
            <LoginPage />
          )
        }
      />
      <Route
        path="/invoice-form"
        element={<Navigate to="/invoice-form/login" replace />}
      />
      <Route path="*" element={<Navigate to="/invoice-form" replace />} />
    </Routes>
  );
}
