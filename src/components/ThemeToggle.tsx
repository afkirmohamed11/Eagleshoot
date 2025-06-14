import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { useTheme } from '../i18n/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      type="button"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-secondary dark:text-gray-300" />
      ) : (
        <Sun size={20} className="text-secondary dark:text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
