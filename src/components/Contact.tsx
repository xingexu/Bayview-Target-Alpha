import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    message: '',
    interest: 'general'
  });

  // Form handlers (ready for future form implementation)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      school: '',
      message: '',
      interest: 'general'
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have questions about joining Bayview - Richmond Hill Target Alpha? 
          We'd love to hear from you!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:yorkregiontargetalpha@gmail.com">yorkregiontargetalpha@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:6477617567">(647) 761-7567</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div>
                <h4>Official Website</h4>
                <p><a href="https://targetalpha.ca" target="_blank" rel="noopener noreferrer">targetalpha.ca</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Richmond Hill, Ontario, Canada</p>
              </div>
            </div>
          </div>
          
          <div className="contact-cta-large">
            <h3>Visit Official Website</h3>
            <div className="cta-buttons">
              <a href="https://targetalpha.ca" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit Official Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
