'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system';
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const applyTheme = (theme: 'light' | 'dark' | 'system') => {
    const root = document.documentElement;
    
    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = systemDark ? 'dark' : 'light';
    } else {
      root.dataset.theme = theme;
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={() => handleThemeChange('light')}
        className={`p-2 ${theme === 'light' ? 'bg-primary text-white' : 'bg-gray-200'}`}
      >
        Light
      </button>
      <button 
        onClick={() => handleThemeChange('dark')}
        className={`p-2 ${theme === 'dark' ? 'bg-primary text-white' : 'bg-gray-200'}`}
      >
        Dark
      </button>
      <button 
        onClick={() => handleThemeChange('system')}
        className={`p-2 ${theme === 'system' ? 'bg-primary text-white' : 'bg-gray-200'}`}
      >
        System
      </button>
    </div>
  );
}
