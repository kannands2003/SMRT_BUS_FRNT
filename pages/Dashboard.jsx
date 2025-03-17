import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [userDetails, setUserDetails] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(user?.name);
  const [showDropdown, setShowDropdown] = useState(false);

  // Route stops and static current stop set to CEC
  const stops = ["CEC", "PALLIPURAM", "THYKATTUSERRY", "HOME"];
  const currentStop = "CEC"; // Always blink on this

  useEffect(() => {
    if (user?.role === "admin") {
      fetch("https://smartbus-backend.onrender.com/auth/users")
        .then((res) => res.json())
        .then((data) => setAllUsers(data))
        .catch((error) => console.error("Error fetching users:", error));
    }
  }, [user]);

  useEffect(() => {
    if (!selectedUser) return;

    fetch("https://smartbus-backend.onrender.com/udetails/me", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: selectedUser }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUserDetails(data);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error("Error fetching user details:", error));
  }, [selectedUser]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="dashboard-container">
      {/* Route Map */}
      <div className="route-map-container">
        {stops.map((stop, index) => {
          const isCurrent = stop === currentStop;
          const isCompleted = false; // No completed logic since CEC is always current
          const isUpcoming = stop !== currentStop;

          return (
            <div
              key={stop}
              className={`stop ${isCompleted ? "completed" : ""} ${isCurrent ? "current" : ""} ${isUpcoming ? "upcoming" : ""}`}
            >
              {stop}
              {index < stops.length - 1 && <span className="line" />}
            </div>
          );
        })}
      </div>

      {/* Profile avatar */}
      <div className="profile-container">
        <div className="profile-avatar" onClick={toggleDropdown}>
          {user?.name?.charAt(0).toUpperCase()}
        </div>
        {showDropdown && (
          <div className="dropdown-content">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      <div className="dashboard-header">
        <div className="user-info">
          <h2>
            <strong>Welcome </strong>
            {user?.name}
          </h2>
        </div>
      </div>

      {user?.role === "admin" && (
        <div className="user-select">
          <label>Select User:</label>
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
            {allUsers.map((u) => (
              <option key={u._id} value={u.name}>
                {u.name} ({u.email})
              </option>
            ))}
          </select>
        </div>
      )}

      <h3>Attendance Records</h3>
      {userDetails.length > 0 ? (
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Stop</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((detail) => (
              <tr key={detail._id}>
                <td>{new Date(detail.Date).toLocaleDateString()}</td>
                <td>{detail.Time}</td>
                <td>{detail.Status}</td>
                <td>{detail.Stop}</td>
                <td>
                  {detail.Image ? (
                    <img src={detail.Image} alt="User" width="50" height="50" />
                  ) : (
                    "No Image"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No attendance records found.</p>
      )}
    </div>
  );
};

export default Dashboard;
