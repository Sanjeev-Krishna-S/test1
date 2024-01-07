import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

  const dummySubmissions = {
    1: [
      { id: 101, studentName: 'John Doe', topic: 'Topic 1', batch: 'Batch A' },
    ],
    2: [
      { id: 102, studentName: 'Alice Smith', topic: 'Topic 2', batch: 'Batch B' },
      // Add more submissions for Project 2
    ],
    3: [
        { id: 103, studentName: 'Jasmine', topic: 'Topic 2', batch: 'Batch C' },
    ],
    4: [
        { id: 104, studentName: 'Rose', topic: 'Topic 3', batch: 'Batch C' },
    ],
    5: [
        { id: 105, studentName: 'Jonathan', topic: 'Topic 3', batch: 'Batch C' },
    ]

    // Add more submissions for other projects
  };

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject((prevSelected) => (prevSelected === projectId ? null : projectId));
  };

  return (
    <div className="MentorDashboard">
      <div>
        <h2>PROJECTS</h2>
        {dummyProjects.map((project) => (
          <Accordion
            key={project.id}
            expanded={selectedProject === project.id}
            onChange={() => handleProjectClick(project.id)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="project-name">{project.name}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                {dummySubmissions[project.id]?.map((submission) => (
                  <li key={submission.id}>
                    {submission.studentName} - {submission.topic} - {submission.batch}
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default MentorDashboard;
