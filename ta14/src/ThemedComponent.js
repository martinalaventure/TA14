import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { theme } = useTheme();

  const styles = {
    light: {
      backgroundColor: 'white',
      color: 'black',
      padding: '20px',
      border: '1px solid #ccc',
    },
    dark: {
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      border: '1px solid #333',
    },
  };

  return (
    <div style={theme === 'light' ? styles.light : styles.dark}>
      Este es un componente con tema {theme}.
    </div>
  );
};

export default ThemedComponent;