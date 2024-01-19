// AdminDashboard.jsx
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const dummyProjects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
    { id: 4, name: 'Project 4' },
    { id: 5, name: 'Project 5' },
    // Add more projects as needed
  ];

  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/admin/project/${projectId}`);
  };

  const handleAddClick = () => {
    // Handle logic for adding a new project
    console.log('Add project clicked');
  };

  const handleEditClick = (projectId) => {
    // Handle logic for editing the selected project
    console.log(`Edit project ${projectId} clicked`);
  };

  const handleDeleteClick = (projectId) => {
    // Handle logic for deleting the selected project
    console.log(`Delete project ${projectId} clicked`);
  };

  return (
    <div className="AdminDashboard">
      <h2 className="projects-heading">
        PROJECTS
        <IconButton onClick={handleAddClick} color="primary">
          <AddIcon />
        </IconButton>
      </h2>
      <div>
        {dummyProjects.map((project) => (
          <Accordion
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="project-name">
                {project.name}
              </Typography>
              <IconButton onClick={() => handleEditClick(project.id)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteClick(project.id)}>
                <DeleteIcon />
              </IconButton>
            </AccordionSummary>
            <AccordionDetails>
              {/* Include content here if needed */}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
