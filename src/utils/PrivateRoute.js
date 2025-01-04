import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = !!localStorage.getItem("session");

  return isLoggedIn ? element : <Navigate to="/invoice-form/login" replace />;
};

export default PrivateRoute;
