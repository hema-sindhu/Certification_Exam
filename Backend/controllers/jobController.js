const Job = require('../models/Job');

// Add a job application
const addJob = async (req, res) => {
  const { companyName, jobRole, status, interviewDate, persons } = req.body;

  try {
    const newJob = new Job({ companyName, jobRole, status, interviewDate, persons });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error adding job:', error);
    res.status(500).json({ message: 'Error adding job application' });
  }
};

// Get all job applications
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    if (jobs.length === 0) {
      return res.status(404).json({ message: 'No job applications found' });
    }
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching job applications' });
  }
};

// Get a specific job by ID
const getJobById = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    console.error('Error fetching job by ID:', error);
    res.status(500).json({ message: 'Error fetching job application' });
  }
};

// Update a job application
const updateJob = async (req, res) => {
  const { id } = req.params;
  const { companyName, jobRole, status, interviewDate, persons } = req.body;

  try {
    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { companyName, jobRole, status, interviewDate, persons },
      { new: true }
    );
    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(updatedJob);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ message: 'Error updating job application' });
  }
};

// Delete a job application
const deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findByIdAndDelete(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json({ message: 'Job application deleted' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: 'Error deleting job application' });
  }
};

module.exports = { addJob, getJobs, getJobById, updateJob, deleteJob };
