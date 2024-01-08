// MentorDashboard.jsx
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from 'react-router-dom';
import './MentorDashboard.css';

const MentorDashboard = () => {
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
    navigate(`/mentor/submission/${projectId}`);
  };

  return (
    <div className="MentorDashboard">
      <div>
        <h2 className="projects-heading">PROJECTS</h2>
        {dummyProjects.map((project) => (
          <Accordion
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="project-name">
                {project.name}
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
