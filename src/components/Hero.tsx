import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Load global sakura animation script (only once)
    if (!document.getElementById('sakura-script')) {
      const script = document.createElement('script');
      script.id = 'sakura-script';
      script.src = '/scripts/sakura.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    document.documentElement.setAttribute('data-hero-in-view', 'true');

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        document.documentElement.setAttribute('data-hero-in-view', inView ? 'true' : 'false');
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Empowering Markham's Youth with
              <span className="highlight"> Financial Literacy</span>
            </h1>
            <p className="hero-subtitle">
              Join the emerging student-led financial literacy organization in Markham. 
              Learn, grow, and build your financial knowledge alongside peers from across the region.
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">
                Learn More
              </a>
              <a 
                href="https://targetalpha.ca" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                Join Target Alpha
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>50</h3>
              <p>Member Chapter</p>
            </div>
            <div className="stat-item">
              <h3>8+</h3>
              <p>Members from 8+ Schools</p>
            </div>
            <div className="stat-item">
              <h3>3</h3>
              <p>Annual Events</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-branches hero-branches-bottom" aria-hidden="true">
        <img
          src={`${process.env.PUBLIC_URL}/assets/tree-left.png`}
          alt=""
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/tree-right.png`}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
