import React from 'react';
import { render } from '@testing-library/react';
import { createMuiTheme } from '@material-ui/core';

import SnackBar, { MySnackbarContent } from '../SnackBar';

const theme = {};

describe('<SnackBar />', () => {
  test('if render', () => {
    const { asFragment } = render(
      <SnackBar
        vertical="top"
        horizontal="center"
        open={false}
        action={() => {}}
        message="msg"
        onClose={() => {}}
        snackbarType="success"
        onSuccess={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<MySnackBarContent />', () => {
  test('if render', () => {
    const { asFragment } = render(
      <MySnackbarContent
        vertical="top"
        horizontal="center"
        open={false}
        action={() => {}}
        message="msg"
        onClose={() => {}}
        variant="success"
        onSuccess={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('if render without action', () => {
    const { asFragment } = render(
      <MySnackbarContent
        vertical="top"
        horizontal="center"
        open={false}
        message="msg"
        onClose={() => {}}
        onSuccess={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
