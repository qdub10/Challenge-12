// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <h1>Quinn White</h1>
      <nav>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>About Me</Link></li>
          <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          <li><Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
