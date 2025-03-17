import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1>Welcome to Our App</h1>
      <Outlet />
    </div>
  );
};

export default Root;
