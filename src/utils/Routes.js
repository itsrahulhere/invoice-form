import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="/main" element={<PrivateRoute element={<MainPage />} />} />
      <Route
        path="/login"
        element={
          !!localStorage.getItem("session") ? (
            <Navigate to="/main" replace />
          ) : (
            <LoginPage />
          )
        }
      />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
