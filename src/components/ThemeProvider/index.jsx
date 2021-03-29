import React, { useState, useContext, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@commons/theme';

const DEFAULT_THEME = 'light';

const ThemeStylerContext = createContext();
const ThemeStylerProvider = ThemeStylerContext.Provider;
const useTheme = () => useContext(ThemeStylerContext);

const themepicks = Object.keys(theme);

export default function ThemeStyler(props) {
  const [selectedTheme, setSelectedTheme] = useState(DEFAULT_THEME);

  function themeSelector(themeType) {
    theme.hasOwnProperty(themeType) && setSelectedTheme(themeType);
  }

  return (
    <ThemeStylerProvider value={{ themepicks, themeSelector }}>
      <ThemeProvider theme={theme[selectedTheme]}>
        {props.children}
      </ThemeProvider>
    </ThemeStylerProvider>
  );
}

export { useTheme };
