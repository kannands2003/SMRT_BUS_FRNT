import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedLayout = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedLayout;
