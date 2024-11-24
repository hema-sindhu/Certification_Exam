const express = require('express');
const router = express.Router();
const { addJob, getJobs, updateJob, deleteJob } = require('../controllers/jobController');

// Add new job
router.post('/jobs', addJob);

// Get all jobs
router.get('/jobs', getJobs);

// Update a job application
router.put('/jobs/:id', updateJob);

// Delete a job application
router.delete('/jobs/:id', deleteJob);

module.exports = router;
