import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="text-center">Check out my recent work and repositories on GitHub.</p>
        <div className="projects-grid">
          <div className="project-card">
            <h3>GitHub Profile</h3>
            <p>Explore my source code, academic projects, and contributions.</p>
            <a href="https://github.com/Rukshanmohottige" target="_blank" rel="noreferrer" className="project-link">View GitHub &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
