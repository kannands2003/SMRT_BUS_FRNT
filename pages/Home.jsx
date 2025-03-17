import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the custom CSS

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="navbar-title">Smart Bus</h1>
        <button
          onClick={() => navigate("/login")}
          className="navbar-button"
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h2 className="hero-title">Welcome to Smart Bus 🚀</h2>
        <p className="hero-subtitle">
          A simple and powerful platform to manage attendance seamlessly.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="get-started-btn"
        >
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 SmartBus. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
