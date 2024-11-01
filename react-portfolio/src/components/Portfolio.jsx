// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        <Project title="Project 1" deployedLink="#" githubLink="#" />
        <Project title="Project 2" deployedLink="#" githubLink="#" />
        <Project title="Project 3" deployedLink="#" githubLink="#" />
        <Project title="Project 4" deployedLink="#" githubLink="#" />
        <Project title="Project 5" deployedLink="#" githubLink="#" />
        <Project title="Project 6" deployedLink="#" githubLink="#" />
      </div>
    </section>
  );
};

export default Portfolio;
