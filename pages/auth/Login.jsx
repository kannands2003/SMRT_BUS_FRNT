import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the custom CSS

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("https://smartbus-backend.onrender.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data.user)); // Save user details
      navigate("/auth/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div >
      <div className="Nav">
      <nav className="navbar">
      <h1 className="navbar-title">Smart Bus</h1>
        <button onClick={() => navigate("/")} style={{ marginTop: "10px", padding: "10px 20px" }}>
        Go to Home
      </button>
      </nav></div>
    </div>
  );
};

export default Login;
