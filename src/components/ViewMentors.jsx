import React from 'react';
import { Button , Grid } from '@mui/material';
import AdminNavbar from './AdminNavbar';
import './ViewMentors.css'

const ViewMentors = ({ handleUpdate, handleDelete }) => {
   const  mentors = [
    {
        id:1,
        name:"John",
        email:"john@gmail.com",
        phone:965432123
    },
    {
        id:2,
        name:"Leonard",
        email:"leonard@gmail.com",
        phone:965564121
    },
    {
        "id": 3,
        "name": "Bob",
        "email": "bob@gmail.com",
        "phone": 965432125
    },
    {
        "id": 4,
        "name": "Alice",
        "email": "alice@gmail.com",
        "phone": 965432126
    }

   ]
  return (
    <div>
        <AdminNavbar/>
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
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(mentor.id)} style={{marginLeft: '10px'}}>
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

