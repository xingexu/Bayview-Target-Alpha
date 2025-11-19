import React, { useState, useEffect } from 'react';
import './ThemeCustomizer.css';

interface ThemeSettings {
  sakuraDensity: 'light' | 'normal' | 'heavy';
  palette: 'warm' | 'cool';
  showIllustrations: boolean;
}

const ThemeCustomizer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<ThemeSettings>(() => {
    const saved = localStorage.getItem('sakuraTheme');
    return saved ? JSON.parse(saved) : {
      sakuraDensity: 'normal',
      palette: 'warm',
      showIllustrations: true
    };
  });

  useEffect(() => {
    // Apply settings to document
    document.documentElement.setAttribute('data-sakura-density', settings.sakuraDensity);
    document.documentElement.setAttribute('data-palette', settings.palette);
    document.documentElement.setAttribute('data-show-illustrations', settings.showIllustrations.toString());
    
    // Save to localStorage
    localStorage.setItem('sakuraTheme', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <button 
        className="theme-customizer-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Customize theme"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </button>

      {isOpen && (
        <div className="theme-customizer-panel">
          <div className="customizer-header">
            <h3>🌸 Theme Customization</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close">×</button>
          </div>

          <div className="customizer-section">
            <label>Sakura Density</label>
            <div className="radio-group">
              {(['light', 'normal', 'heavy'] as const).map(density => (
                <button
                  key={density}
                  className={settings.sakuraDensity === density ? 'active' : ''}
                  onClick={() => updateSetting('sakuraDensity', density)}
                >
                  {density.charAt(0).toUpperCase() + density.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="customizer-section">
            <label>Blossom Palette</label>
            <div className="radio-group">
              {(['warm', 'cool'] as const).map(palette => (
                <button
                  key={palette}
                  className={settings.palette === palette ? 'active' : ''}
                  onClick={() => updateSetting('palette', palette)}
                >
                  {palette.charAt(0).toUpperCase() + palette.slice(1)} Pink
                </button>
              ))}
            </div>
          </div>

          <div className="customizer-section">
            <label>
              <input
                type="checkbox"
                checked={settings.showIllustrations}
                onChange={(e) => updateSetting('showIllustrations', e.target.checked)}
              />
              Show Illustrations
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeCustomizer;

