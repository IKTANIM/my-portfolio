import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-list">
        <ProjectCard
          title="Project 1"
          description="This is a description of project 1"
          link="https://github.com/your-username/project1"
        />
        <ProjectCard
          title="Project 2"
          description="This is a description of project 2"
          link="https://github.com/your-username/project2"
        />
        {/* Add more projects here */}
      </div>
    </section>
  );
};

export default Projects;
