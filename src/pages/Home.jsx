import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Rukshan Mohottige</span></h1>
          <h2>IT Student @ Institute of Technology, University of Moratuwa</h2>
          <p>I'm a passionate Information Technology student building my skills in software development and web technologies. Welcome to my personal portfolio!</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <a href="https://github.com/Rukshanmohottige" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + '/Screenshot 2026-06-12 024511.png'} alt="Rukshan Mohottige" />
        </div>
      </div>
    </section>
  );
}

export default Home;
