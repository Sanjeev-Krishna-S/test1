import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import './AddMentor.css';

const AddMentor = () => {
  const [mentor, setMentor] = useState({ mentorId: '', mentorName: '', email: '', phoneNumber: '', password: '', projects: [] });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/project/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });

    axios.get('http://localhost:4000/mentor/')
      .then(response => {
        let mentorCount = response.data.length + 1;
        let mentorId = `M0${mentorCount}`;
        if (mentorCount >= 10) {
          mentorId = `M${mentorCount}`;
        }
        setMentor(prevMentor => ({ ...prevMentor, mentorId: mentorId }));
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
      });
  }, []);

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setMentor(prevMentor => ({
      ...prevMentor,
      [name]: value,
    }));
  };

  const handleProjectsChange = (event) => {
    const selectedProjects = event.target.value;
    setMentor(prevMentor => ({
      ...prevMentor,
      projects: selectedProjects,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/mentor/add', mentor)
      .then(response => {
        console.log('Mentor added successfully');
        alert('Mentor added successfully'); 
        window.location = '/admin/viewmentor';  
      })
      .catch(error => {
        console.error('Error adding mentor:', error);
      });
  };
  
  return (
    <div>
      <AdminNavbar />
      <form className='addmentorform' noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-field">
          <TextField id="mentorId" label="Mentor ID" variant="outlined" fullWidth className="custom-textfield" value={mentor.mentorId} disabled />
        </div>
        <FormControl className="form-field custom-textfield" variant="outlined" fullWidth>
          <TextField name="mentorName" label="Mentor Name" variant="outlined" fullWidth value={mentor.mentorName} onChange={handleTextChange} />
        </FormControl>
        <FormControl className="form-field custom-textfield" variant="outlined" fullWidth>
          <TextField name="email" label="Email" variant="outlined" fullWidth value={mentor.email} onChange={handleTextChange} />
        </FormControl>
        <FormControl className="form-field custom-textfield" variant="outlined" fullWidth>
          <TextField name="phoneNumber" label="Phone number" variant="outlined" fullWidth value={mentor.phoneNumber} onChange={handleTextChange} />
        </FormControl>
        <FormControl className="form-field custom-textfield" variant="outlined" fullWidth>
          <TextField name="password" label="Password" type="password" variant="outlined" fullWidth value={mentor.password} onChange={handleTextChange} />
        </FormControl>
        <div className="form-field">
          <FormControl variant="outlined" fullWidth className="custom-textfield">
            <InputLabel id="projects-label">Project topics allotted</InputLabel>
            <Select
              labelId="projects-label"
              id="projects"
              multiple
              value={mentor.projects}
              onChange={handleProjectsChange}
              label="Project topics allotted"
              renderValue={(selected) => selected.join(', ')}
            >
              {projects.map((project) => (
                <MenuItem key={project.projectId} value={project.projectId}>
                  <Checkbox checked={mentor.projects.indexOf(project.projectId) > -1} />
                  <ListItemText primary={project.topic} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="form-field">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMentor;
