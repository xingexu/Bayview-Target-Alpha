import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Bayview - Richmond Hill Target Alpha</h2>
        <p className="section-subtitle">
          We're the Bayview - Richmond Hill chapter of Canada's largest student-led financial literacy organization, 
          dedicated to empowering youth with essential financial knowledge and skills across Richmond Hill.
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To promote financial literacy among Richmond Hill's youth through engaging workshops, 
                educational resources, and collaborative learning experiences. We believe every young 
                person deserves the knowledge and tools to make informed financial decisions.
              </p>
            </div>
            
            <div className="about-card">
              <h3>What We Do</h3>
              <p>
                As part of the national Target Alpha network, we host local workshops, 
                and networking events. Our members participate in various activities 
                that build financial knowledge, problem-solving skills, and teamwork.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Why Join Our Chapter?</h3>
              <p>
                Gain practical financial skills, network with like-minded peers, participate in 
                exciting activities, and build a strong foundation for your financial future. 
                Plus, connect with professionals in the financial industry across Richmond Hill.
              </p>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <h4>Target Alpha Bayview - Richmond Hill</h4>
                <p>Building Financial Leaders of Tomorrow</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-stats">
          <div className="stat-card">
            <h3>2024</h3>
            <p>Chapter Founded</p>
          </div>
          <div className="stat-card">
            <h3>50</h3>
            <p>Member Chapter</p>
          </div>
          <div className="stat-card">
            <h3>8+</h3>
            <p>Schools Represented</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Student-Led</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
