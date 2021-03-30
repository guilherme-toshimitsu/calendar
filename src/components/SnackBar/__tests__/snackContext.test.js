import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

import snackContext from '../snackContext';

const theme = {};

describe('<snackContext />', () => {
  test('if render', () => {
    const { asFragment } = render(
      <ThemeProvider theme={createMuiTheme(theme)}>
        <snackContext />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test.todo('if props change');
});
