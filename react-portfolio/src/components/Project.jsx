// src/components/Project.jsx
import React from 'react';

const Project = ({ title, deployedLink, githubLink, image }) => {
  return (
    <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
      {image && <img src={image} alt={`${title} Screenshot`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />}
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
    </div>
  );
};

export default Project;
