import React, { createContext, useContext, useState } from 'react';

// theme contexts
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

// custom hooks that allows any component to modify top level state
export const useTheme = () => {
  return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
}

const ThemeProvider = ({ children }) => {

  const [darkTheme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(prevState => !prevState)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );

}

export default ThemeProvider;