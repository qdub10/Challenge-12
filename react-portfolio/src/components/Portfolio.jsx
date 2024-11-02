// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';

const projects = [
  { title: 'Project 1', deployedLink: '#', githubLink: '#' },
  { title: 'Project 2', deployedLink: '#', githubLink: '#' },
  { title: 'Project 3', deployedLink: '#', githubLink: '#' },
  { title: 'Project 4', deployedLink: '#', githubLink: '#' },
  { title: 'Project 5', deployedLink: '#', githubLink: '#' },
  { title: 'Project 6', deployedLink: '#', githubLink: '#' },
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {projects.map((project, index) => (
          <Project key={index} title={project.title} deployedLink={project.deployedLink} githubLink={project.githubLink} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

