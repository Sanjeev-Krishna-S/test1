import React, { useState, useEffect } from 'react';
import { TextField, Button, IconButton, InputAdornment, Checkbox, Select, MenuItem } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import './UpdateMentor.css';

const UpdateMentor = () => {
  const location = useLocation();
  const [mentor, setMentor] = useState(location.state.mentorToUpdate);
  const [showPassword, setShowPassword] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!mentor) {
      // Redirect to mentors list or show error
    }
    axios.get('http://localhost:4000/project')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, [mentor]);

  const handleChange = (event) => {
    setMentor({
      ...mentor,
      [event.target.id]: event.target.value,
    });
  };

  const handleProjectChange = (event) => {
    setMentor({
      ...mentor,
      projects: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:4000/mentor/update/${mentor.mentorId}`, mentor)
      .then(response => {
        console.log('Mentor updated successfully');
        alert('Mentor updated successfully');  // Show an alert
        window.location = '/admin/viewmentor';  // Navigate to ViewMentors page
      })
      .catch(error => {
        console.error('Error updating mentor:', error);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <form className='updatementorform' noValidate autoComplete="off" onSubmit={handleUpdate}>
        <div className="form-field">
          <TextField id="mentorId" label="Mentor ID" variant="outlined" fullWidth className="custom-textfield" value={mentor.mentorId} disabled />
        </div>
        <div className="form-field">
          <TextField id="mentorName" label="Mentor Name" variant="outlined" fullWidth className="custom-textfield" value={mentor.mentorName} onChange={handleChange} />
        </div>
        <div className="form-field">
          <TextField id="email" label="Email" variant="outlined" fullWidth className="custom-textfield" value={mentor.email} onChange={handleChange} />
        </div>
        <div className="form-field">
          <TextField id="phoneNumber" label="Phone number" variant="outlined" fullWidth className="custom-textfield" value={mentor.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-field">
          <TextField id="password" label="Password" type={showPassword ? 'text' : 'password'} variant="outlined" fullWidth className="custom-textfield" value={mentor.password} onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form-field">
          <Select
            id="projects"
            multiple
            value={mentor.projects}
            onChange={handleProjectChange}
            renderValue={(selected) => selected.join(', ')}
            fullWidth
          >
            {projects.map((project) => (
              <MenuItem key={project.projectId} value={project.projectId}>
                <Checkbox checked={mentor.projects.includes(project.projectId)} />
                {project.topic}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="form-field">
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMentor;
