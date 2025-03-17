import './index.css'; // must be before other UI stuff
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "react-hot-toast";
 // <-- This should import Tailwind CSS


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="bottom-center" duration={3000} />
  </React.StrictMode>
);
