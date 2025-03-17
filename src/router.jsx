import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Logout from '../pages/Logout';
//import SignUp from "./pages/auth/SignUp";
import Dashboard from "../pages/Dashboard";
import ProtectedLayout from "../layouts/protectedLayout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      
    ],
  },
  {
    path: "/auth",
    element: <ProtectedLayout />,
    children: [
      { path: "dashboard", element: <Dashboard />
        

       },
       { path:"logout" , element: <Logout /> }, 
 // Dashboard for authenticated users
    ],
  },
  {
    path: "*",
    element: <NotFound />, // Handle unknown routes
  },
]);

export default router;
