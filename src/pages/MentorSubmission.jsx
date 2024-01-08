// MentorSubmission.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './MentorSubmission.css';

const MentorSubmission = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

  const getStatus = (submission) => (
    <span className={submission.status === 'Submitted' ? 'submitted' : 'notSubmitted'}>
      {submission.status}
    </span>
  );
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
      { id: 301, studentName: 'Alice Smith', topic: 'Topic 1', batch: 'Batch A', status: 'Submitted' },
      { id: 302, studentName: 'Bob', topic: 'Topic 2', batch: 'Batch B', status: 'Not Submitted' },
      { id: 303, studentName: 'Charlie', topic: 'Topic 3', batch: 'Batch C', status: 'Submitted' },
      { id: 304, studentName: 'David', topic: 'Topic 4', batch: 'Batch C', status: 'Not Submitted' },
      { id: 305, studentName: 'Eva', topic: 'Topic 5', batch: 'Batch B', status: 'Submitted' },
    ],
    4: [
      { id: 401, studentName: 'Alice Smith', topic: 'Topic 1', batch: 'Batch A', status: 'Submitted' },
      { id: 402, studentName: 'Bob', topic: 'Topic 2', batch: 'Batch B', status: 'Not Submitted' },
      { id: 403, studentName: 'Charlie', topic: 'Topic 3', batch: 'Batch C', status: 'Submitted' },
      { id: 404, studentName: 'David', topic: 'Topic 4', batch: 'Batch A', status: 'Not Submitted' },
      { id: 405, studentName: 'Eva', topic: 'Topic 5', batch: 'Batch A', status: 'Submitted' },
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

  // Apply filters based on selectedBatch and selectedTopic
  const filteredSubmissions = submissions.filter((submission) => {
    return (
      (!selectedBatch || submission.batch === selectedBatch) &&
      (!selectedTopic || submission.topic === selectedTopic)
    );
  });
  const handleAccordionClick = () => {
    navigate(`/mentor/submission/${projectId}/grade`); // Redirect to MentorGrading page
  };
  
  return (
    <div className="MentorSubmission">
      <div className="MentorSubmissionHeader">
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
      </div>

      {filteredSubmissions.map((submission) => (
        <Accordion key={submission.id} onClick={handleAccordionClick}>
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
              {/* You can remove the date attribute */}
              {/* <strong>Submission Date:</strong> {submission.date} */}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

    </div>
  );
};

export default MentorSubmission;