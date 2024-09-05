import React from 'react';

const sectionStyle = {
  padding: '50px 0',
};

const skillStyle = {
  marginBottom: '20px',
};

const skillBarStyle = {
  backgroundColor: '#ddd',
  borderRadius: '5px',
  height: '20px',
  width: '100%',
};

const skillProgressStyle = (level) => ({
  width: level,
  backgroundColor: '#4caf50',
  height: '100%',
  borderRadius: '5px',
});

const Skills = ({ skills }) => {
  return (
    <section id="skills" style={sectionStyle}>
      <div>
      <br></br>
        <h2>My Skills</h2>
        {skills.map((skill, index) => (
          <div style={skillStyle} key={index}>
            <h3>{skill.name}</h3>
            <div style={skillBarStyle}>
              <div style={skillProgressStyle(skill.level)}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
