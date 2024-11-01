// src/components/Project.jsx
import React from 'react';

const Project = ({ title, deployedLink, githubLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
    </div>
  );
};

export default Project;
