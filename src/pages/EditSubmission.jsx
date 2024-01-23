import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Box, Stack } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import './EditSubmission.css';

const EditSubmission = () => {
  const { projectId, submissionId } = useParams();
  const [comments, setComments] = useState('');
  const [marks, setMarks] = useState('');
  const [studentId, setStudentId] = useState('');
  const [submissionFile, setSubmissionFile] = useState('');
  const [batch, setBatch] = useState('');
  const [topic, setTopic] = useState('');
  const [updatedComments, setUpdatedComments] = useState('');
  const [updatedMarks, setUpdatedMarks] = useState('');

  useEffect(() => {
    // Fetch submission details based on submissionId
    axios.get(`http://localhost:4000/submit/${submissionId}`)
      .then(response => {
        const submission = response.data;
        setComments(submission.comments);
        setMarks(submission.marks);
        setStudentId(submission.studentId);
        setSubmissionFile(submission.submissionFile);
        setBatch(submission.batch);
        setTopic(submission.topic);
      })
      .catch(error => {
        console.error('Error fetching submission details:', error);
      });
  }, [submissionId]);

  const handleUpdate = () => {
    // Make API call to update all details
    axios.put(`http://localhost:4000/submit/update/${submissionId}`, { 
      comments: updatedComments || comments,
      marks: updatedMarks || marks,
    })
      .then(response => {
        alert('Submission Updated');
        // Navigate to '/mentor/submission/:projectId'
        window.location.href = `/mentor/submission/${projectId}`;
      })
      .catch(error => {
        console.error('Error updating details:', error);
      });
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        backgroundColor: '#f5f5f5', 
        fontFamily: 'Poppins, sans-serif', 
        width: '100%', 
        padding: '20px', 
        boxSizing: 'border-box' 
      }}
    >
      <Typography variant="h5" align="left" sx={{ width: '100%', margin: '20px 0' }}>
        Edit Submission {submissionId}
      </Typography>
      
      <Typography sx={{ margin: '10px 0' }}>Student ID: {studentId}</Typography>
      <Typography sx={{ margin: '10px 0' }}>Project ID: {projectId}</Typography>
      <Typography sx={{ margin: '10px 0' }}>Submission File: {submissionFile}</Typography>
      <Typography sx={{ margin: '10px 0' }}>Batch: {batch}</Typography>
      <Typography sx={{ margin: '10px 0' }}>Topic: {topic}</Typography>
      <Typography sx={{ margin: '10px 0' }}>Existing Comments: {comments}</Typography>
      <Typography sx={{ margin: '10px 0' }}>Existing Marks: {marks}</Typography>
      
      <Stack spacing={2} width="100%">
        <TextField
          label="Updated Comments"
          multiline
          rows={4}
          value={updatedComments}
          onChange={(e) => setUpdatedComments(e.target.value)}
          sx={{ margin: '10px 0' }}
        />
  
        <TextField
          label="Updated Marks"
          type="number"
          value={updatedMarks}
          onChange={(e) => setUpdatedMarks(e.target.value)}
          sx={{ margin: '10px 0' }}
        />
      </Stack>
  
      <Button variant="contained" color="primary" startIcon={<UpdateIcon />} onClick={handleUpdate} sx={{ margin: '10px 0' }}>
        Update
      </Button>
    </Box>
  );
  
};

export default EditSubmission;
