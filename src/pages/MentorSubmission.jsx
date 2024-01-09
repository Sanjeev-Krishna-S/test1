// MentorSubmission.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './MentorSubmission.css';
import MentorGrading from './MentorGrading'; // Import MentorGrading component

const MentorSubmission = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const getStatus = (submission) => (
    <span className={submission.status === 'Submitted' ? 'submitted' : 'notSubmitted'}>
      {submission.status}
    </span>
  );

  // Dummy data for grading (moved from MentorGrading.jsx)
  const dummyGradingData = [
    { id: 101, studentName: 'John Doe', grade: '', comment: '' },
    { id: 102, studentName: 'Jasmine', grade: '', comment: '' },
    { id: 103, studentName: 'Jennifer', grade: '', comment: '' },
    { id: 104, studentName: 'Alex', grade: '', comment: '' },
    { id: 105, studentName: 'Emma', grade: '', comment: '' },
    // Add more students as needed
  ];

  // State to keep track of the selected student ID
  const [selectedStudent, setSelectedStudent] = useState(null);

  const dummySubmissions = {
    1: [
      { id: 101, studentName: 'John Doe', topic: 'Topic 1', batch: 'Batch A', status: 'Submitted' },
      { id: 102, studentName: 'Jasmine', topic: 'Topic 2', batch: 'Batch B', status: 'Not Submitted' },
      { id: 103, studentName: 'Jennifer', topic: 'Topic 3', batch: 'Batch C', status: 'Submitted' },
      { id: 104, studentName: 'Alex', topic: 'Topic 4', batch: 'Batch B', status: 'Not Submitted' },
      { id: 105, studentName: 'Emma', topic: 'Topic 5', batch: 'Batch C', status: 'Submitted' },
    ],
    2: [
      { id: 201, studentName: 'Alice Smith', topic: 'Topic 1', batch: 'Batch A', status: 'Submitted' },
      { id: 202, studentName: 'Bob', topic: 'Topic 2', batch: 'Batch B', status: 'Not Submitted' },
      { id: 203, studentName: 'Charlie', topic: 'Topic 3', batch: 'Batch C', status: 'Submitted' },
      { id: 204, studentName: 'David', topic: 'Topic 4', batch: 'Batch A', status: 'Not Submitted' },
      { id: 205, studentName: 'Eva', topic: 'Topic 5', batch: 'Batch B', status: 'Submitted' },
    ],
    3: [
      { id: 301, studentName: 'Johnson', topic: 'Topic 1', batch: 'Batch A', status: 'Submitted' },
      { id: 302, studentName: 'Johnny', topic: 'Topic 2', batch: 'Batch B', status: 'Not Submitted' },
      { id: 303, studentName: 'Parker', topic: 'Topic 3', batch: 'Batch C', status: 'Submitted' },
      { id: 304, studentName: 'Peter', topic: 'Topic 4', batch: 'Batch C', status: 'Not Submitted' },
      { id: 305, studentName: 'Eve', topic: 'Topic 5', batch: 'Batch B', status: 'Submitted' },
    ],
    4: [
      { id: 401, studentName: 'Jennifer', topic: 'Topic 1', batch: 'Batch A', status: 'Submitted' },
      { id: 402, studentName: 'Aizen', topic: 'Topic 2', batch: 'Batch B', status: 'Not Submitted' },
      { id: 403, studentName: 'Kurosaki', topic: 'Topic 3', batch: 'Batch C', status: 'Submitted' },
      { id: 404, studentName: 'Itadori', topic: 'Topic 4', batch: 'Batch A', status: 'Not Submitted' },
      { id: 405, studentName: 'Fushiguro', topic: 'Topic 5', batch: 'Batch A', status: 'Submitted' },
    ],
    5: [
      { id: 501, studentName: 'Alice Smith', topic: 'Topic 1', batch: 'Batch A', status: 'Submitted' },
      { id: 502, studentName: 'Bob', topic: 'Topic 2', batch: 'Batch B', status: 'Not Submitted' },
      { id: 503, studentName: 'Charlie', topic: 'Topic 3', batch: 'Batch C', status: 'Submitted' },
      { id: 504, studentName: 'David', topic: 'Topic 4', batch: 'Batch D', status: 'Not Submitted' },
      { id: 505, studentName: 'Eva', topic: 'Topic 5', batch: 'Batch E', status: 'Submitted' },
    ],
    // Add more submissions for other projects
  };

  const submissions = dummySubmissions[projectId] || [];

  // State for combined batch and topic filter
  const [selectedFilter, setSelectedFilter] = useState('');

  // Function to handle filter change
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  // Extract batch and topic from the selected filter
  const [selectedBatch, selectedTopic] = selectedFilter.split('-');

  // Function to handle accordion click
const handleAccordionClick = (studentId, studentName) => {
    // Find the selected student's data from dummySubmissions
    const selectedStudentData = submissions.find((student) => student.id === studentId);
  
    // Pass gradingData and selectedStudent as state to the MentorGrading page
    navigate(`/mentor/submission/${projectId}/grade`, {
      state: {
        gradingData: dummySubmissions[projectId], // Use dummySubmissions as gradingData
        selectedStudent: selectedStudentData,
        selectedStudentName: studentName,
      },
    });
  };

  return (
    <div className="MentorSubmission">
      <h2>Submission Details for Project {projectId}</h2>
      <div className="filters">
        {/* Combined batch and topic filter */}
        <label htmlFor="combinedFilter">Filter:</label>
        <select id="combinedFilter" value={selectedFilter} onChange={handleFilterChange}>
          <optgroup label="Topics">
            <option value="">All Topics</option>
            <option value="Topic A">Topic A</option>
            <option value="Topic B">Topic B</option>
            <option value="Topic C">Topic C</option>
            {/* Add more topics as needed */}
          </optgroup>
          <optgroup label="Batches">
            <option value="">All Batches</option>
            <option value="Batch A">Batch A</option>
            <option value="Batch B">Batch B</option>
            <option value="Batch C">Batch C</option>
            {/* Add more batches as needed */}
          </optgroup>
        </select>
      </div>

      {submissions.map((submission) => (
  <Accordion
    key={submission.id}
    onClick={() => handleAccordionClick(submission.id, submission.studentName)}
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>
        <strong>Student Name:</strong> {submission.studentName} |
        <strong> Topic:</strong> {submission.topic} |
        <strong> Batch:</strong> {submission.batch}
      </Typography>
      <div className="submissionStatus">{getStatus(submission)}</div>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {/* Additional details if needed */}
      </Typography>
    </AccordionDetails>
  </Accordion>
))}
    </div>
  );
};

export default MentorSubmission;