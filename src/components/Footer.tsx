import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Markham Target Alpha</h3>
            <p>
              Empowering Markham's youth with financial literacy through education, 
              workshops, and community engagement.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://targetalpha.ca" target="_blank" rel="noopener noreferrer">Official Website</a></li>
              <li><a href="https://targetalpha.ca/events" target="_blank" rel="noopener noreferrer">Competitions</a></li>
              <li><a href="https://targetalpha.ca/contact" target="_blank" rel="noopener noreferrer">Get Support</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li><a href="https://targetalpha.ca/join" target="_blank" rel="noopener noreferrer">Join Target Alpha</a></li>
              <li><a href="#contact">Join Our Chapter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Markham Target Alpha. All rights reserved.</p>
            <p>
              Part of the <a href="https://targetalpha.ca" target="_blank" rel="noopener noreferrer">Target Alpha Canada</a> network
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
