import React from 'react';

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
          <div className="skill-card">
            <h3>Programming</h3>
            <p>Java, Python, C++</p>
          </div>
          <div className="skill-card">
            <h3>Tools & Technologies</h3>
            <p>Git, GitHub, VS Code</p>
          </div>
          <div className="skill-card">
            <h3>Database</h3>
            <p>SQL, MySQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
