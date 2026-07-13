import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'varahi_theme';

/**
 * Light is Varahi's default face. Dark is a toggle, not a second brand —
 * same hues, different exposure. We do NOT auto-follow prefers-color-scheme on
 * first visit: the light palette is the brand, and a visitor with a dark OS
 * should still meet Varahi as Varahi. Once they choose, we remember.
 */
const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme = stored === 'dark' ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      className="vn-theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <Sun size={17} strokeWidth={1.8} /> : <Moon size={17} strokeWidth={1.8} />}
    </button>
  );
};

export default ThemeToggle;
