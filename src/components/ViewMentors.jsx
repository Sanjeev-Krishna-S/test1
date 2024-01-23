import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Corrected import
import AdminNavbar from './AdminNavbar';
import './ViewMentors.css';

const ViewMentors = () => {
  const [mentors, setMentors] = useState([]);
  const navigate = useNavigate();  // Corrected hook

  useEffect(() => {
    axios.get('http://localhost:4000/mentor')
      .then(response => {
        const sortedMentors = response.data.sort((a, b) => parseInt(a.mentorId.slice(1)) - parseInt(b.mentorId.slice(1)));
        setMentors(sortedMentors);
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
      });
  }, []);

  const handleUpdate = (mentorId) => {
    const mentorToUpdate = mentors.find(mentor => mentor.mentorId === mentorId);
    navigate('/admin/updatementor', { state: { mentorToUpdate } });
  };



  const handleDeleteMentor = (mentorId) => {
    axios.delete(`http://localhost:4000/mentor/remove/${mentorId}`)
      .then(response => {
        console.log('Mentor deleted successfully');
        // You may want to refetch the mentor list or update state accordingly
        setMentors(prevMentors => prevMentors.filter(mentor => mentor.mentorId !== mentorId));
      })
      .catch(error => {
        console.error('Error deleting mentor:', error);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <Grid container className='mentor-container'>
        {mentors.map((mentor) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={mentor.id}>
            <div className='mentorlist'>
              <h2>{mentor.mentorName}</h2>
              <p>{mentor.email}</p>
              <p>{mentor.phoneNumber}</p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleUpdate(mentor.mentorId)}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteMentor(mentor.mentorId)}
                style={{ marginLeft: '10px' }}
              >
                Delete
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ViewMentors;



