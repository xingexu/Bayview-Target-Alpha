import React from 'react';
import './Events.css';

const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Markham Chapter Introductory Meeting",
      description: "Join us for our introductory meeting where we'll discuss our mission, upcoming events, and how you can get involved in promoting financial literacy across Markham.",
      date: "September 1, 2025",
      type: "Meeting",
      location: "Google Meet",
      status: "Registration Open",
      link: "https://meet.google.com/hjf-waee-tgs?authuser=0&hs=122&ijlm=1756759210027"
    }
  ];

  return (
    <section className="events section" id="events">
      <div className="container">
        <h2 className="section-title">Our Events</h2>
        <p className="section-subtitle">
          Join us for exciting workshops and networking opportunities throughout the year.
        </p>
        
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <span className={`event-type ${event.type.toLowerCase()}`}>
                  {event.type}
                </span>
                <span className={`event-status ${event.status.toLowerCase().replace(' ', '-')}`}>
                  {event.status}
                </span>
              </div>
              
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              
              <div className="event-details">
                <div className="event-detail">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{event.date}</span>
                </div>
                <div className="event-detail">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{event.location}</span>
                </div>
              </div>
              
              <div className="event-actions">
                <a 
                  href="https://meet.google.com/hjf-waee-tgs?authuser=0&hs=122&ijlm=1756759210027" 
                  className="btn btn-primary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ cursor: 'pointer', position: 'relative', zIndex: 10 }}
                  onClick={() => window.open('https://meet.google.com/hjf-waee-tgs?authuser=0&hs=122&ijlm=1756759210027', '_blank')}
                >
                  Join Meeting
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="upcoming-competitions">
          <h3>Upcoming Target Alpha Competitions</h3>
          <p className="competitions-subtitle">
            Stay updated on national competition deadlines and registration periods.
          </p>
          
          <div className="competitions-grid">
            <div className="competition-card">
              <div className="competition-header">
                <span className="competition-type">Competition</span>
                <span className="deadline-status coming-soon">Coming Soon</span>
              </div>
              
              <h4 className="competition-title">SPC - Stock Pitch Competition</h4>
              <p className="competition-description">
                Target Alpha's Stock Pitch Competition is Canada's largest stock pitch competition for high school students, 
                in which competitors pitch a stock to industry professionals. Over 300 students participated last year.
              </p>
              
              <div className="competition-details">
                <div className="detail-item">
                  <span className="detail-label">Registration Deadline:</span>
                  <span className="detail-value">October 15, 2025</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Competition Date:</span>
                  <span className="detail-value">November 2025</span>
                </div>
              </div>
              
              <a href="https://targetalpha.ca/events" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            
            <div className="competition-card">
              <div className="competition-header">
                <span className="competition-type">Competition</span>
                <span className="deadline-status coming-soon">Coming Soon</span>
              </div>
              
              <h4 className="competition-title">STC - Stock Trading Competition</h4>
              <p className="competition-description">
                Target Alpha's Stock Trading Competition allows students to buy and sell stocks in an eventful 3-month simulation 
                with sponsor-led workshops. Over 380 students competed last year.
              </p>
              
              <div className="competition-details">
                <div className="detail-item">
                  <span className="detail-label">Registration Opens:</span>
                  <span className="detail-value">December 2025</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Competition Date:</span>
                  <span className="detail-value">February 2026</span>
                </div>
              </div>
              
              <a href="https://targetalpha.ca/events" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            
            <div className="competition-card">
              <div className="competition-header">
                <span className="competition-type">Competition</span>
                <span className="deadline-status coming-soon">Coming Soon</span>
              </div>
              
              <h4 className="competition-title">FPC - Financial Planner's Conference</h4>
              <p className="competition-description">
                Target Alpha's Financial Planners Competition allows participants to create and pitch a solution to a case study 
                in groups of 1-4 members. Over 300 students participated last year.
              </p>
              
              <div className="competition-details">
                <div className="detail-item">
                  <span className="detail-label">Registration Opens:</span>
                  <span className="detail-value">March 2026</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Competition Date:</span>
                  <span className="detail-value">May 2026</span>
                </div>
              </div>
              
              <a href="https://targetalpha.ca/events" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        <div className="events-cta">
          <h3>Want to Join Our Chapter?</h3>
          <p>
            Are you a student in Markham interested in joining Markham Target Alpha? 
            We're always looking for passionate members to help grow our 50-member chapter.
          </p>
          <a href="#contact" className="btn btn-primary">Join Our Chapter</a>
        </div>
      </div>
    </section>
  );
};

export default Events;
