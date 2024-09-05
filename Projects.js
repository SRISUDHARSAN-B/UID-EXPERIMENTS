import React from 'react';

const sectionStyle = {
  padding: '50px 0',
  textAlign: 'center',
};

const projectStyle = {
  marginBottom: '20px',
};

const imgStyle = {
  maxWidth: '100%',
  borderRadius: '5px',
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" style={sectionStyle}>
      <div>
      <br></br>
        <h2>My Projects</h2>
        {projects.map((project, index) => (
          <div style={projectStyle} key={index}>
            <img src={project.imageUrl} alt={project.title} style={imgStyle} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
