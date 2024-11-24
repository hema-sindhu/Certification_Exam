import React from "react";
import { Link } from "react-router-dom";
import "./JobList.css";

const JobList = () => {
  // Example job data
  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "Tech Corp",
      persons: [
        { name: "Alice Johnson", role: "HR Manager" },
        { name: "Bob Smith", role: "Interviewer" },
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Design Solutions",
      persons: [
        { name: "Emily Davis", role: "Recruiter" },
        { name: "James Brown", role: "Team Lead" },
      ],
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Code Innovators",
      persons: [
        { name: "Sarah Connor", role: "HR Specialist" },
        { name: "John Doe", role: "Technical Interviewer" },
      ],
    },
  ];

  return (
    <div className="job-list">
      <h2>Job Applications</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <div className="persons">
              <h4>Persons Associated:</h4>
              <ul>
                {job.persons.map((person, index) => (
                  <li key={index}>
                    {person.name} - {person.role}
                  </li>
                ))}
              </ul>
            </div>
            <Link to={`/jobs/${job.id}`} className="details-link">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
