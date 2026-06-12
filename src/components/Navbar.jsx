import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>RM.</Link>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""} end>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink></li>
            <li><NavLink to="/skills" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Skills</NavLink></li>
            <li><NavLink to="/projects" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Contact</NavLink></li>
          </ul>
        </nav>
        <div 
          className={`hamburger ${isMenuOpen ? 'toggle' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
