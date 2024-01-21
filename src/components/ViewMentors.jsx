import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests
import AdminNavbar from './AdminNavbar';
import './ViewMentors.css';

const ViewMentors = ({ handleUpdate, handleDelete }) => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Fetch data from the server using axios.get
    axios.get('http://localhost:4000/mentor') 
      .then(response => {
        setMentors(response.data);
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <div>
      <AdminNavbar />
      <Grid container className='mentor-container'>
        {mentors.map((mentor) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={mentor.id}>
            <div className='mentorlist'>
              <h2>{mentor.name}</h2>
              <p>{mentor.email}</p>
              <p>{mentor.phone}</p>
              <Button variant="contained" color="primary" onClick={() => handleUpdate(mentor.id)}>
                Update
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDelete(mentor.id)}
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


