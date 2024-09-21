import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import ThemedComponent from './ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>App con Tema Oscuro/Claro</h1>
        <ThemeSwitcher />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;