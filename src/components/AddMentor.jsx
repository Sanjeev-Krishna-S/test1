import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import './AddMentor.css';

const AddMentor = () => {
  const [mentor, setMentor] = useState({ mentorId: '', mentorName: '', email: '', phoneNumber: '', password: '', projects: [] });
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('/project/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  
      axios.get('/mentor/')
      .then(response => {
        let mentors = response.data;
        let mentorId = generateMentorId(mentors);
        setMentor(prevMentor => ({ ...prevMentor, mentorId: mentorId }));
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
      });
    }, []);
    
    function generateMentorId(mentors) {
      // Create a Set of existing mentor IDs for efficient lookup
      const mentorIds = new Set(mentors.map(mentor => parseInt(mentor.mentorId.slice(1), 10)));
    
      // Start from 1 and find the smallest integer not in the set
      let newIdNum = 1;
      while (mentorIds.has(newIdNum)) {
        newIdNum++;
      }
    
      // Generate a new mentor ID
      let newId = `M${String(newIdNum).padStart(2, '0')}`;
    
      return newId;
    }
    
  

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
    console.log('Mentor object:', mentor);
    event.preventDefault();
    axios.post('/mentor/add', mentor)
      .then(response => {
        console.log('Mentor added successfully');
        alert('Mentor added successfully'); 
        navigate('/admin/viewmentor');   
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
