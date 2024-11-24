import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddJobClick = () => {
    navigate("/jobs/new"); // Redirect to JobForm
  };

  return (
    <div className="dashboard">
      <h1>Welcome to the Job Tracker Dashboard</h1>
      <p>Track your job applications, interviews, and analytics here.</p>

      <div className="dashboard-actions">
        <button onClick={handleAddJobClick} className="add-job-button">
          Add Job
        </button>
      </div>

      <div className="dashboard-overview">
        <h2>Your Job Overview</h2>
        <ul>
          <li>Total Applications: 10</li>
          <li>Interviews Scheduled: 3</li>
          <li>Offers Received: 1</li>
          <li>Jobs Rejected: 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
