// MentorGrading.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './MentorGrading.css';

const MentorGrading = () => {
  const { projectId } = useParams();
  const location = useLocation();

  const { gradingData, selectedStudent, selectedStudentName } = location.state || {};

  const submissionDetails = [
    { topic: 'Topic 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { topic: 'Topic 2', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { topic: 'Topic 3', content: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.' },
  ];

  const filteredSubmissionDetails = selectedStudent.status === 'Not Submitted'
    ? []
    : submissionDetails.filter((detail) => detail.topic === selectedStudent.topic);

  const [grading, setGrading] = useState({ grade: '', comment: '' });

  const [studentData, setStudentData] = useState({
    comments: [],
    grades: [],
    referenceMaterials: [],
  });

  useEffect(() => {
    // Fetch grades, comments, and other data from the backend for the selected student
    // Example:
    // fetchStudentData(selectedStudent.id).then(data => setStudentData(data));
  }, [selectedStudent]);

  const handleGradeChange = (value) => {
    setGrading((prevGrading) => ({ ...prevGrading, grade: value }));
  };

  const handleCommentChange = (value) => {
    setGrading((prevGrading) => ({ ...prevGrading, comment: value }));
  };

  const handleGradeSubmit = () => {
    // Call backend API to submit the grade
    // Example:
    // submitGrade(selectedStudent.id, grading.grade).then(() => fetchStudentData(selectedStudent.id));
    setGrading({ grade: '', comment: '' });
  };

  const handleCommentSubmit = () => {
    // Call backend API to submit the comment
    // Example:
    // submitComment(selectedStudent.id, grading.comment).then(() => fetchStudentData(selectedStudent.id));
    setGrading({ grade: '', comment: '' });
  };

  // Function to handle reference material submission
  const handleReferenceMaterialSubmit = () => {
    // Call backend API to submit the reference material
    // Assume a referenceMaterial state is used to store them
    // Example:
    // submitReferenceMaterial(selectedStudent.id, 'New Reference Material').then(() => fetchStudentData(selectedStudent.id));
  };

  // Function to handle deleting a comment
  const handleDeleteComment = (index) => {
    const newComments = [...studentData.comments];
    newComments.splice(index, 1);
    setStudentData((prevData) => ({ ...prevData, comments: newComments }));
  };

  // Function to handle editing a comment
  const handleEditComment = (index) => {
    const editedComment = prompt('Enter the edited comment:', studentData.comments[index]);
    if (editedComment !== null) {
      const newComments = [...studentData.comments];
      newComments[index] = editedComment;
      setStudentData((prevData) => ({ ...prevData, comments: newComments }));
    }
  };

  // Function to handle editing a grade
  const handleEditGrade = (index) => {
    const editedGrade = prompt('Enter the edited grade:', studentData.grades[index]);
    if (editedGrade !== null) {
      const newGrades = [...studentData.grades];
      newGrades[index] = editedGrade;
      setStudentData((prevData) => ({ ...prevData, grades: newGrades }));
    }
  };

  // Function to handle deleting the entire submission
  const handleDeleteSubmission = () => {
    console.log('Deleted Submission for:', selectedStudentName);
  };

  // Function to handle reference material deletion
  const handleReferenceMaterialDelete = (index) => {
    const newReferenceMaterials = [...studentData.referenceMaterials];
    newReferenceMaterials.splice(index, 1);
    setStudentData((prevData) => ({ ...prevData, referenceMaterials: newReferenceMaterials }));
  };

  return (
    <div className="mentor-grading-container">
      <h2 className="mentor-grading-h2">Submission by {selectedStudentName}</h2>
      {filteredSubmissionDetails.length > 0
        ? filteredSubmissionDetails.map((detail) => (
          <div key={detail.topic}>
            <h3>{detail.topic}</h3>
            <p>{detail.content}</p>
          </div>
        ))
        : <p>No submissions attached</p>
      }
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

      {/* Section to view and edit comments, grades, and reference materials */}
      <div className="mentor-data-section">
        <h3 className="mentor-grading-h3">Student Data for {selectedStudentName}</h3>
        <div>
          <h4>Comments</h4>
          <ul>
            {studentData.comments.map((comment, index) => (
              <li key={index}>
                {comment}
                <button onClick={() => handleDeleteComment(index)}>
                  Delete Comment
                </button>
                <button onClick={() => handleEditComment(index)}>
                  Edit Comment
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Grades</h4>
          <ul>
            {studentData.grades.map((grade, index) => (
              <li key={index}>
                {grade}
                <button onClick={() => handleEditGrade(index)}>
                  Edit Grade
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Reference Materials</h4>
          <ul>
            {studentData.referenceMaterials.map((material, index) => (
              <li key={index}>
                {material}
                <button onClick={() => handleReferenceMaterialDelete(index)}>
                  Delete Material
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleReferenceMaterialSubmit}>
            Add Reference Material
          </button>
        </div>
        <div>
          <button onClick={handleDeleteSubmission}>
            Delete Entire Submission
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorGrading;
