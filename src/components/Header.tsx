import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h2>Bayview - Richmond Hill Target Alpha</h2>
        </div>
        
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
          <a href="https://targetalpha.ca" target="_blank" rel="noopener noreferrer" className="join-btn">
            Join Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
