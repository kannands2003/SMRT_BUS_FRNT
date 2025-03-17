import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <button onClick={() => navigate("/")} style={{ marginTop: "10px", padding: "10px 20px" }}>
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
