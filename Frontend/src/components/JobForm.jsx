import React, { useState } from "react";
import "./JobForm.css";

const JobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("applied");
  const [persons, setPersons] = useState([]);
  const [personName, setPersonName] = useState("");
  const [personRole, setPersonRole] = useState("");

  const addPerson = () => {
    if (personName && personRole) {
      setPersons([...persons, { name: personName, role: personRole }]);
      setPersonName("");
      setPersonRole("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobDetails = {
      jobTitle,
      company,
      status,
      persons,
    };

    console.log("Job Submitted:", jobDetails);

    // Reset form
    setJobTitle("");
    setCompany("");
    setStatus("applied");
    setPersons([]);
  };

  return (
    <div className="job-form">
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter company name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview Scheduled</option>
            <option value="offer">Offer Received</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="form-group">
          <h3>Add Person</h3>
          <label htmlFor="personName">Name</label>
          <input
            type="text"
            id="personName"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
            placeholder="Enter name"
          />

          <label htmlFor="personRole">Role</label>
          <input
            type="text"
            id="personRole"
            value={personRole}
            onChange={(e) => setPersonRole(e.target.value)}
            placeholder="Enter role (e.g., interviewer)"
          />

          <button type="button" onClick={addPerson}>
            Add Person
          </button>
        </div>

        {persons.length > 0 && (
          <div className="persons-list">
            <h4>Added Persons</h4>
            <ul>
              {persons.map((person, index) => (
                <li key={index}>
                  {person.name} - {person.role}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
};

export default JobForm;
