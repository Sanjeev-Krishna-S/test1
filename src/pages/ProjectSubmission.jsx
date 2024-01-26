import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './ProjectSubmission.css';

const ProjectSubmission = () => {
  const [submissions, setSubmissions] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Fetch all submissions when the component mounts
  useEffect(() => {
    axios.get('/submit/')
      .then(response => {
        // Filter the submissions for the current project
        const projectSubmissions = response.data.filter(submission => submission.projectId === projectId);
        setSubmissions(projectSubmissions);
      })
      .catch(error => {
        console.error('Error fetching submissions:', error);
      });
  }, [projectId]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleEdit = (submissionId) => {
    // Redirect to the edit page with the project ID and submission ID
    console.log(`Edit submission ${submissionId}`);

    navigate(`/mentor/submission/${projectId}/${submissionId}`);
  };

  const handleDelete = async (submissionId) => {
    try {
      // Delete the submission on the server
      await axios.delete(`/submit/remove/${submissionId}`);

      // Update the local state to remove the deleted submission
      setSubmissions(prevSubmissions => prevSubmissions.filter(submission => submission.submissionId !== submissionId));

      alert(`Submission with ID ${submissionId} deleted successfully!`);
    } catch (error) {
      console.error(`Error deleting submission with ID ${submissionId}:`, error);
    }
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  // Filter submissions based on selected filter
  const filteredSubmissions = submissions.filter(submission => {
    if (selectedFilter === 'All') {
      return true; // Show all submissions
    }
    return (
      (!selectedFilter || submission.topic === selectedFilter || submission.batch === selectedFilter)
    );
  });

  // Get unique topics and batches for the filter dropdown
  const uniqueTopics = Array.from(new Set(submissions.map(submission => submission.topic)));
  const uniqueBatches = Array.from(new Set(submissions.map(submission => submission.batch)));

  return (
    <div className="ProjectSubmission">
      <div className="heading-container">
        <Typography variant="h5" component="div">
          Submissions for Project {projectId}
        </Typography>
      </div>

      <div className="filter-container">
        <FormControl variant="outlined">
          <InputLabel id="filter-label">Filter</InputLabel>
          <Select
            labelId="filter-label"
            id="filter-select"
            value={selectedFilter}
            label="Filter"
            onChange={handleFilterChange}
          >
            <MenuItem value="All">All Submissions</MenuItem>
            {uniqueTopics.map(topic => (
              <MenuItem key={topic} value={topic}>
                Topic: {topic}
              </MenuItem>
            ))}
            {uniqueBatches.map(batch => (
              <MenuItem key={batch} value={batch}>
                Batch: {batch}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {filteredSubmissions.map((submission, index) => (
        <Accordion key={submission.submissionId} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="div" className='ProjectID'>
              Submission ID: {submission.submissionId}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {submission.submissionStatus === 'Completed' ? (
              <>
                <Typography>Marks: {submission.marks}</Typography>
                <Typography>Student ID: {submission.studentId}</Typography>
                <Typography>Topic: {submission.topic}</Typography>
                <Typography>Batch: {submission.batch}</Typography>
                <Typography>Submission File: {submission.submissionFile}</Typography>
                <Typography>Comments: {submission.comments}</Typography>
                <div className="button-container">
                  <Button variant="contained" color="primary" onClick={() => handleEdit(submission.submissionId)}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(submission.submissionId)}>Delete</Button>
                </div>
              </>
            ) : (
              <>
                <Typography color="error">Status: {submission.submissionStatus}</Typography>
                <Typography>Student ID: {submission.studentId}</Typography>
                <Typography>Topic: {submission.topic}</Typography>
                <Typography>Batch: {submission.batch}</Typography>
                <Typography>Marks: 0</Typography>
                <Typography>Comments: Nil</Typography>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ProjectSubmission;
