import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ThemeCustomizer from './components/ThemeCustomizer';

function App() {
  useEffect(() => {
    // Initialize theme settings
    const saved = localStorage.getItem('sakuraTheme');
    if (saved) {
      const settings = JSON.parse(saved);
      document.documentElement.setAttribute('data-sakura-density', settings.sakuraDensity || 'normal');
      document.documentElement.setAttribute('data-palette', settings.palette || 'warm');
      document.documentElement.setAttribute('data-show-illustrations', (settings.showIllustrations !== false).toString());
    } else {
      document.documentElement.setAttribute('data-sakura-density', 'normal');
      document.documentElement.setAttribute('data-palette', 'warm');
      document.documentElement.setAttribute('data-show-illustrations', 'true');
    }

    // Load global sakura animation script
    if (!document.getElementById('sakura-script')) {
      const script = document.createElement('script');
      script.id = 'sakura-script';
      script.src = '/scripts/sakura.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Handle tree opacity on scroll
    const handleScroll = () => {
      const maxDistance = 600;
      const progress = Math.min(window.scrollY / maxDistance, 1);
      const opacity = 0.95 - progress * 0.7;
      document.documentElement.style.setProperty('--tree-opacity-top', opacity.toString());
      document.documentElement.style.setProperty('--tree-opacity-bottom', opacity.toString());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <ThemeToggle />
      <ThemeCustomizer />
      <Header />
      <Hero />
      <div id="global-petals" aria-hidden="true"></div>
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
