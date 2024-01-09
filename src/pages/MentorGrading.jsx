// MentorGrading.jsx
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './MentorGrading.css';

const MentorGrading = () => {
  const { projectId } = useParams();
  const location = useLocation();

  // Extract gradingData and selectedStudent from the location state
  const { gradingData, selectedStudent, selectedStudentName } = location.state || {};

  // Dummy data for submission details
  const submissionDetails = [
    { topic: 'Topic 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { topic: 'Topic 2', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { topic: 'Topic 3', content: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.' },
    // Add more topics and content as needed
  ];

  // Filter submission details based on the selected student's topic
  const filteredSubmissionDetails = submissionDetails.filter(
    (detail) => detail.topic === selectedStudent.topic
  );

  // State to store grading data
  const [grading, setGrading] = useState({ grade: '', comment: '' });

  // Function to handle grading input change
  const handleGradeChange = (value) => {
    setGrading((prevGrading) => ({ ...prevGrading, grade: value }));
  };

  // Function to handle comment input change
  const handleCommentChange = (value) => {
    setGrading((prevGrading) => ({ ...prevGrading, comment: value }));
  };

  // Function to handle grade submission
  const handleGradeSubmit = () => {
    // Implement your logic to submit the grade
    console.log('Submitted Grade:', grading.grade);
  };

  // Function to handle comment submission
  const handleCommentSubmit = () => {
    // Implement your logic to submit the comment
    console.log('Submitted Comment:', grading.comment);
  };

  return (
    <div className="mentor-grading-container">
      <h2 className="mentor-grading-h2">Submission by {selectedStudentName}</h2>
      {filteredSubmissionDetails.map((detail) => (
        <div key={detail.topic}>
          <h3>{detail.topic}</h3>
          <p>{detail.content}</p>
        </div>
      ))}
      {/* Display the selected student's name */}
      <h3 className="mentor-grading-h3">Grading for {selectedStudentName}</h3>
      <table className="mentor-grading-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Grade</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedStudentName}</td>
            <td>
              <input
                className="mentor-grading-input"
                type="text"
                value={grading.grade}
                onChange={(e) => handleGradeChange(e.target.value)}
              />
              <button className="mentor-grading-button" onClick={handleGradeSubmit}>
                Submit Grade
              </button>
            </td>
            <td>
              <textarea
                className="mentor-grading-textarea"
                value={grading.comment}
                onChange={(e) => handleCommentChange(e.target.value)}
              />
              <button className="mentor-grading-button" onClick={handleCommentSubmit}>
                Submit Comment
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MentorGrading;
