import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
  TextField,
  Button,
  Modal,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [expandedProjects, setExpandedProjects] = useState([]);
  const [newProjectTopic, setNewProjectTopic] = useState('');
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [updatedTopic, setUpdatedTopic] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/project')
      .then(response => {
        // Sort projects by ID in ascending order
        const sortedProjects = response.data.sort((a, b) => parseInt(a.projectId.slice(1)) - parseInt(b.projectId.slice(1)));
        setProjects(sortedProjects);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);
  

  const generateNewProjectId = () => {
    // Create a Set of existing project IDs for efficient lookup
    const projectIds = new Set(projects.map(project => parseInt(project.projectId.slice(1), 10)));
  
    // Start from 1 and find the smallest integer not in the set
    let newIdNum = 1;
    while (projectIds.has(newIdNum)) {
      newIdNum++;
    }
  
    // Generate a new project ID
    let newId = `P${String(newIdNum).padStart(2, '0')}`;
  
    return newId;
  };
  

  const handleAddProject = () => {
    const newProjectId = generateNewProjectId();

    // Update the state locally without waiting for the server response
    setProjects(prevProjects => [
      ...prevProjects,
      { id: newProjectId, projectId: newProjectId, topic: newProjectTopic }
    ]);
    setExpandedProjects(prevExpanded => [...prevExpanded, newProjectId]);

    // Send the request to the server
    axios.post('http://localhost:4000/project/add', {
      projectId: newProjectId,
      topic: newProjectTopic
    })
      .then(() => {
        // Update the state with the server response if needed
        alert('New project added successfully!');
      })
      .catch(error => {
        console.error('Error adding project:', error);
      });

    // Clear the new project topic
    setNewProjectTopic('');
  };

  const handleToggleProject = (projectId) => {
    setExpandedProjects(prevExpanded => {
      if (prevExpanded.includes(projectId)) {
        return [];
      } else {
        return [projectId];
      }
    });
  };
  const handleDeleteClick = async (projectId) => {
    try {
      await axios.delete(`http://localhost:4000/project/remove/${projectId}`);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== projectId)
      );
      setExpandedProjects((prevExpanded) =>
        prevExpanded.filter((id) => id !== projectId)
      );
      alert(`Project with ID ${projectId} deleted successfully!`);
    } catch (error) {
      console.error(`Error deleting project with ID ${projectId}:`, error);
    }
  };  
 
  const handleEditClick = (project) => {
    setSelectedProject(project);
    setUpdatedTopic(project.topic);
    setUpdateModalOpen(true);
  };

  const handleUpdateProject = async (projectId, updatedTopic) => {
    try {
      await axios.put(`http://localhost:4000/project/update/${projectId}`, {
        topic: updatedTopic,
      });
  
      // Update the local state immediately
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === projectId ? { ...project, topic: updatedTopic } : project
        )
      );
  
      // Close the modal
      setUpdateModalOpen(false);
      alert(`Project with ID ${projectId} updated successfully!`);
    } catch (error) {
      console.error(`Error updating project with ID ${projectId}:`, error);
    }
  };
  
  return (
    <div className="AdminDashboard">
      <h2 className="projects-heading">PROJECTS</h2>
      <div>
        {projects.map((project) => (
          <Accordion
            key={project.id}
            expanded={expandedProjects.includes(project.projectId)}
            onChange={() => handleToggleProject(project.projectId)}
            sx={{ width: '100%' }} // Set a fixed width for the accordion
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="project-name">{project.projectId}</Typography>
              {!expandedProjects.includes(project.projectId) && (
                <div>
                  <IconButton onClick={() => handleEditClick(project)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteClick(project.projectId)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              )}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{project.topic}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className="add-project-container" style={{ width: '100%' }}>
        <TextField
          label="Project Topic"
          variant="outlined"
          size="small"
          fullWidth
          value={newProjectTopic}
          onChange={(e) => setNewProjectTopic(e.target.value)}
        />
        <Button
          onClick={handleAddProject}
          color="primary"
          variant="contained"
          size="small"
          style={{ marginTop: '10px', width: '100%' }} // Set the width to match the accordion
        >
          <AddIcon /> Add Project
        </Button>
      </div>
      <Modal
        open={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
            textAlign: 'center', // Center align the content
          }}
        >
          <Typography variant="h6">Update Project</Typography>
          <TextField
            label="Project ID"
            value={selectedProject.projectId}
            variant="outlined"
            disabled
            fullWidth
            sx={{ mb: 1 }}
          />
          <TextField
            label="Project Topic"
            value={updatedTopic}
            variant="outlined"
            fullWidth
            onChange={(e) => setUpdatedTopic(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => handleUpdateProject(selectedProject.projectId, updatedTopic)}
            sx={{ width: '100%', mt: 2 }} // Full width and margin-top
          >
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
