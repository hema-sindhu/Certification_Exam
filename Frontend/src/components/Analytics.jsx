import React from "react";
import "./Analytics.css"; // Add styles for analytics visualization

const Analytics = () => {
  // Mock data for analytics
  const jobStats = {
    totalJobs: 25,
    stages: {
      applied: 10,
      interviewing: 5,
      offered: 3,
      rejected: 7,
    },
  };

  return (
    <div className="analytics">
      <h2>Job Application Analytics</h2>

      <div className="stats">
        <div className="stat-item">
          <h3>Total Applications</h3>
          <p>{jobStats.totalJobs}</p>
        </div>

        <div className="stat-item">
          <h3>Applied</h3>
          <p>{jobStats.stages.applied}</p>
        </div>

        <div className="stat-item">
          <h3>Interviewing</h3>
          <p>{jobStats.stages.interviewing}</p>
        </div>

        <div className="stat-item">
          <h3>Offered</h3>
          <p>{jobStats.stages.offered}</p>
        </div>

        <div className="stat-item">
          <h3>Rejected</h3>
          <p>{jobStats.stages.rejected}</p>
        </div>
      </div>

      <div className="chart">
        <h3>Application Progress</h3>
        <div className="progress-bar">
          <div
            className="progress applied"
            style={{
              width: `${(jobStats.stages.applied / jobStats.totalJobs) * 100}%`,
            }}
          >
            Applied
          </div>
          <div
            className="progress interviewing"
            style={{
              width: `${
                (jobStats.stages.interviewing / jobStats.totalJobs) * 100
              }%`,
            }}
          >
            Interviewing
          </div>
          <div
            className="progress offered"
            style={{
              width: `${(jobStats.stages.offered / jobStats.totalJobs) * 100}%`,
            }}
          >
            Offered
          </div>
          <div
            className="progress rejected"
            style={{
              width: `${(jobStats.stages.rejected / jobStats.totalJobs) * 100}%`,
            }}
          >
            Rejected
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
