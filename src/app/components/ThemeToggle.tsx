'use client';

import { useEffect, useState } from 'react';

type themesTypes = 'light' | 'dark' | 'system'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<themesTypes | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('theme') as themesTypes || 'system';
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const applyTheme = (theme: themesTypes) => {
    const root = document.documentElement;

    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = systemDark ? 'dark' : 'light';
    } else {
      root.dataset.theme = theme;
    }
  };

  const handleThemeChange = (newTheme: themesTypes) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  if (!isMounted) {
    return (
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-lg bg-gray-200 animate-pulse w-16" />
        <div className="p-2 rounded-lg bg-gray-200 animate-pulse w-16" />
        <div className="p-2 rounded-lg bg-gray-200 animate-pulse w-16" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleThemeChange('light')}
        className={`p-2 rounded-lg ${theme === 'light' ? 'bg-[var(--prime-color)]' : ''}`}
      >
        Light
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-[var(--prime-color)]' : ''}`}
      >
        Dark
      </button>
      <button
        onClick={() => handleThemeChange('system')}
        className={`p-2 rounded-lg ${theme === 'system' ? 'bg-[var(--prime-color)]' : ''}`}
      >
        System
      </button>
    </div>
  );
}
