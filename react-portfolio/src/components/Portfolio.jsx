// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';

const projects = [
  { title: 'Contract Tracking', deployedLink: 'https://eslickjr.github.io/Bankroll/', githubLink: 'https://github.com/eslickjr/Bankroll', image: 'src/assets/Screenshot 2024-11-03 183332.png' },
  

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

