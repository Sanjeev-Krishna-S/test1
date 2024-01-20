import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const dummyProjects = [
    { id: 1, name: 'Project 1', topics: ['Topic 1', 'Topic 2', 'Topic 3'] },
    { id: 2, name: 'Project 2', topics: ['Topic 1', 'Topic 2', 'Topic 3'] },
    { id: 3, name: 'Project 3', topics: ['Topic 1', 'Topic 2', 'Topic 3'] },
    { id: 4, name: 'Project 4', topics: ['Topic 1', 'Topic 2', 'Topic 3'] },
    { id: 5, name: 'Project 5', topics: ['Topic 1', 'Topic 2', 'Topic 3'] },
    // Add more projects as needed
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [newTopic, setNewTopic] = useState('');

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setAnchorEl(null);
  };

  const handleEditClick = (topicId) => {
    console.log(`Edit topic ${topicId} clicked`);
    setAnchorEl(null);
  };

  const handleDeleteClick = (topicId) => {
    console.log(`Delete topic ${topicId} clicked`);
    setAnchorEl(null);
  };

  const handleMenuClick = (event, projectId) => {
    setAnchorEl(event.currentTarget);
    setSelectedProject(projectId);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedProject(null);
  };

  const handleAddTopic = () => {
    console.log(`Add topic "${newTopic}" to project ${selectedProject}`);
    setNewTopic('');
    setAnchorEl(null);
  };

  return (
    <div className="AdminDashboard">
      <h2 className="projects-heading">
        PROJECTS
      </h2>
      <div>
        {dummyProjects.map((project) => (
          <Accordion key={project.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="project-name">{project.name}</Typography>
              <IconButton onClick={(event) => handleMenuClick(event, project.id)}>
                <MoreVertIcon />
              </IconButton>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {project.topics.map((topic, index) => (
                  <li key={index}>
                    {topic}
                    <IconButton onClick={() => handleEditClick(index)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteClick(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </li>
                ))}
                <li>
                  <TextField
                    label="New Topic"
                    variant="outlined"
                    size="small"
                    value={newTopic}
                    onChange={(e) => setNewTopic(e.target.value)}
                  />
                  <Button onClick={handleAddTopic} color="primary" variant="contained" size="small">
                    <AddIcon />
                  </Button>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleEditClick(selectedProject)}>Edit Project</MenuItem>
        <MenuItem onClick={() => handleDeleteClick(selectedProject)}>Delete Project</MenuItem>
        <MenuItem>
          <Button onClick={handleAddTopic} color="primary" variant="contained" size="small">
            <AddIcon /> Add Topic
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AdminDashboard;
