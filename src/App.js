import React from 'react';
import ThemeProvider from '@components/ThemeProvider';
import Main from '@pages/Main';
import theme from '@commons/theme';

import AuthWrapper from '@components/Auth';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthWrapper>
        <Main />
      </AuthWrapper>
    </ThemeProvider>
  );
};

export default App;
