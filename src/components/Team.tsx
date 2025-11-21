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
      name: "Chloe Huang",
      role: "Co-President",
      school: "St Augustine Catholic High School",
      year: "Grade 12",
      major: "",
      bio: ""
    },
    {
      id: 3,
      name: "Trinity Chung",
      role: "Marketing Officer",
      school: "St Augustine Catholic High School",
      year: "Grade 12",
      major: "",
      bio: ""
    },
    {
      id: 4,
      name: "Harrison Wang",
      role: "Logistics Officer",
      school: "Appleby College",
      year: "Grade 11",
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
      name: "Daniel Chan",
      role: "Vice President",
      school: "St Augustine Catholic High School",
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
                    <span className="detail-icon">🎓</span>
                    <span>{member.school}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
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
