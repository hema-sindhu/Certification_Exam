import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching job details (replace with actual API call)
    setTimeout(() => {
      const fetchedJob = {
        id,
        title: "Software Developer",
        company: "Tech Corp",
        location: "New York, NY",
        description: "Develop web applications using React and Node.js.",
        status: "Interview Scheduled",
        dateApplied: "2024-11-01",
      };
      setJob(fetchedJob);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <div>Loading job details...</div>;
  }

  return (
    <div className="job-details">
      <h2>Job Details</h2>
      {job ? (
        <div>
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Date Applied:</strong> {job.dateApplied}</p>
          <p><strong>Description:</strong> {job.description}</p>
        </div>
      ) : (
        <p>Job not found</p>
      )}
    </div>
  );
};

export default JobDetails;
