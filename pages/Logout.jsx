import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear localStorage and redirect
    localStorage.clear();
    navigate("/login");
  }, [navigate]);

  return null; // No UI needed
};

export default Logout;
