import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
    </button>
  );
};

export default ThemeSwitcher;