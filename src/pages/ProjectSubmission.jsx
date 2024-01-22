import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './ProjectSubmission.css';

const ProjectSubmission = () => {
  const [submissions, setSubmissions] = useState([]);
  const [expanded, setExpanded] = useState(false); // Add this state
  const { projectId } = useParams(); // Get the projectId from the URL

  // Fetch all submissions when the component mounts
  useEffect(() => {
    axios.get('http://localhost:4000/submit/')
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
    // Handle edit action here
    console.log(`Edit submission ${submissionId}`);
  };

  const handleDelete = (submissionId) => {
    // Handle delete action here
    console.log(`Delete submission ${submissionId}`);
  };

  return (
    <div className="ProjectSubmission">
      <div className="heading-container">
  <Typography variant="h5" component="div">
    Submissions for Project {projectId}
  </Typography>
</div>

      {submissions.map((submission, index) => (
        <Accordion key={submission.submissionId} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="div">
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
