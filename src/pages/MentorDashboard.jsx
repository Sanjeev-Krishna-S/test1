import React, { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './MentorDashboard.css';

const MentorDashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const mentorId = location.state.mentorId;

  // Fetch the mentor's projects when the component mounts
  useEffect(() => {
    axios.get(`/mentor/${mentorId}`)
      .then(response => {
        // Fetch the details of each project
        const projectPromises = response.data.projects.map(projectId =>
          axios.get(`/project/${projectId}`)
        );
        return Promise.all(projectPromises);
      })
      .then(projectResponses => {
        // Update the projects state with the fetched project data
        const projectsData = projectResponses.map(response => response.data);
        setProjects(projectsData);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, [mentorId]);

  const handleProjectClick = (projectId) => {
    navigate(`/mentor/submission/${projectId}`);
  };

  return (
    <div className="MentorDashboard">
      <div>
        <h2 className="projects-heading">PROJECTS</h2>
        {projects.map((project) => (
          <Accordion
            key={project.projectId}
            onClick={() => handleProjectClick(project.projectId)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="project-name">
                {project.topic}
              </Typography>
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

export default MentorDashboard;
