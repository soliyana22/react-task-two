import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="header">
        <img src="assets/images/logo.png" alt="logo" className="logo" />
      </div>

      <div className="hamburger" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" className="nav-link">MAIN</NavLink></li>
        <li><NavLink to="/photogallery" className="nav-link">Gallery</NavLink></li>
        <li><NavLink to="/ourproject" className="nav-link">Project</NavLink></li>
        <li><NavLink to="/certifications" className="nav-link">Certifications</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contacts</NavLink></li>
      </ul>
    </nav>
  );
};
