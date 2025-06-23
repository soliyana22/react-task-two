import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <nav className="navbar">
      <div className='header'>
        <img src="assets/images/logo.png" alt="logo image" className='logo'/>
      </div>
      <ul className="nav-list">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>MAIN</NavLink></li>
        <li><NavLink to="/photogallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Gallery</NavLink></li>
        <li><NavLink to="/ourproject" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Project</NavLink></li>
        <li><NavLink to="/certifications" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Certifications</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contacts</NavLink></li>
        </ul>
    </nav>
  )
}



