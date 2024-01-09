// MentorGrading.jsx
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const MentorGrading = () => {
  const { projectId } = useParams();
  const location = useLocation();

  // Extract gradingData and selectedStudent from the location state
  const { gradingData, selectedStudent, selectedStudentName } = location.state || {};

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

  return (
    <div>
      <h2>Mentor Grading for Project {projectId}</h2>
      {/* Display the selected student's name */}
      <h3>Grading for {selectedStudentName}</h3>
      <table>
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
                type="text"
                value={grading.grade}
                onChange={(e) => handleGradeChange(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={grading.comment}
                onChange={(e) => handleCommentChange(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MentorGrading;
