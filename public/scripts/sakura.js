// Global Falling Cherry Blossom Petals Animation
(function() {
  'use strict';

let density = 300; // ms between petals (normal)
let isActive = true;
let intervalId = null;
let container = document.getElementById('global-petals');

  function getDensity() {
    const densitySetting = document.documentElement.getAttribute('data-sakura-density') || 'normal';
    switch(densitySetting) {
      case 'light': return 600;
      case 'heavy': return 150;
      default: return 300;
    }
  }

function spawnPetal() {
  if (!isActive) return;
  if (!container) {
    container = document.getElementById('global-petals');
  }
  if (!container) return;

    const petal = document.createElement('img');
    petal.src = '/assets/petal.svg';
    petal.className = 'sakura-petal';
    petal.alt = '';
    petal.setAttribute('aria-hidden', 'true');

    const duration = 6 + Math.random() * 6;
    const scale = 0.6 + Math.random() * 0.6;
    const opacity = 0.5 + Math.random() * 0.3;

  petal.style.position = 'absolute';
  petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.opacity = opacity;
    petal.style.transform = `scale(${scale})`;

  container.appendChild(petal);

    setTimeout(() => {
      if (petal.parentNode) {
        petal.parentNode.removeChild(petal);
      }
    }, duration * 1000 + 2000);
  }

  function updateDensity() {
    const newDensity = getDensity();
    if (newDensity !== density) {
      if (intervalId) {
        clearInterval(intervalId);
      }
      density = newDensity;
      intervalId = setInterval(spawnPetal, density);
    }
  }

function checkIllustrations() {
  const showIllustrations = document.documentElement.getAttribute('data-show-illustrations') !== 'false';
  const heroInView = document.documentElement.getAttribute('data-hero-in-view') !== 'false';
  isActive = showIllustrations && !heroInView;
  document.documentElement.setAttribute('data-petals-active', isActive ? 'true' : 'false');
  }

  // Initialize
  checkIllustrations();
  updateDensity();

  // Watch for theme changes
const observer = new MutationObserver(() => {
  checkIllustrations();
  updateDensity();
});

  observer.observe(document.documentElement, {
    attributes: true,
  attributeFilter: ['data-sakura-density', 'data-show-illustrations', 'data-hero-in-view']
  });

  // Start animation
  intervalId = setInterval(() => {
    checkIllustrations();
    if (isActive) {
      spawnPetal();
    }
  }, density);

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    observer.disconnect();
  });
})();
