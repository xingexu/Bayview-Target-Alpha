import React from 'react';
import './Team.css';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Xinge Xu",
      role: "Co-President",
      school: "Bayview Secondary School",
      year: "Grade 12",
      major: "",
      bio: ""
    },
    {
      id: 2,
      name: "Daniel Chan",
      role: "Co-President",
      school: "St Augustine Catholic High School",
      year: "Grade 11",
      major: "",
      bio: ""
    },
    {
      id: 3,
      name: "Chloe Huang",
      role: "Vice President",
      school: "St Augustine Catholic High School",
      year: "Grade 12",
      major: "",
      bio: ""
    },
    {
      id: 4,
      name: "Trinity Chung",
      role: "Marketing Officer",
      school: "St Augustine Catholic High School",
      year: "Grade 12",
      major: "",
      bio: ""
    },
    {
      id: 5,
      name: "Joshua Lo",
      role: "Social Media Officer",
      school: "Bayview Secondary School",
      year: "Grade 12",
      major: "",
      bio: ""
    },
    {
      id: 6,
      name: "Harrison Wang",
      role: "Logistics Officer",
      school: "Appleby College",
      year: "Grade 11",
      major: "",
      bio: ""
    }
  ];

  return (
    <section className="team section" id="team">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          Our dedicated student leaders are committed to expanding financial literacy across Richmond Hill.
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="member-avatar">
                <div className="avatar-placeholder">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                
                <div className="member-details">
                  <div className="detail-item">
                    <svg className="detail-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{member.school}</span>
                  </div>
                  <div className="detail-item">
                    <svg className="detail-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{member.year}</span>
                  </div>
                </div>
                

              </div>
            </div>
          ))}
        </div>
        
        <div className="team-cta">
          <h3>Join Our Chapter</h3>
          <p>
            We're always looking for passionate students to help grow our emerging chapter. 
            Whether you're interested in event planning, outreach, or strategic planning, 
            there's a place for you on our team.
          </p>
          <a href="#contact" className="btn btn-primary">Join Our Chapter</a>
        </div>
      </div>
    </section>
  );
};

export default Team;
