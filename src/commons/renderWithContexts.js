import React from 'react';
import theme from './theme';
import ThemeProvider from '@components/ThemeProvider';
import Auth from '@components/Auth';

const renderWithTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

const renderWithThemeAndContext = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <Auth>{children}</Auth>
    </ThemeProvider>
  );
};

export { renderWithTheme, renderWithThemeAndContext };
