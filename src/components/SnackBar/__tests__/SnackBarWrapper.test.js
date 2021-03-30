import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { useSnackBar } from '../';

import SnackBarWrapper from '../SnackBarWrapper';

const theme = {};

describe('<SnackBarWrapper />', () => {
  test('if render', () => {
    const { asFragment } = render(
        <SnackBarWrapper>
          <div />
        </SnackBarWrapper>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('change context', () => {
    const Euclides = () => {
      const { openSnackBar } = useSnackBar();

      return (
        <div
          data-testid="div1"
          onClick={() => {
            openSnackBar({
              snackbarType: 'error',
              message: 'error.default.404',
              autoClose: 3000,
            });
          }}
        />
      );
    };

    act(() => {
      const { getByTestId } = render(
          <SnackBarWrapper>
            <Euclides />
          </SnackBarWrapper>
      );

      fireEvent.click(getByTestId('div1'));
    });
  });

  test('onSuccess context', () => {
    const Euclides = () => {
      const { openSnackBar } = useSnackBar();

      return (
        <div
          data-testid="div1"
          onClick={() => {
            openSnackBar({
              snackbarType: 'success',
              message: 'success',
              autoClose: 1,
              onSuccess: () => {},
            });
          }}
        />
      );
    };

    act(() => {
      const { getByTestId } = render(
          <SnackBarWrapper>
            <Euclides />
          </SnackBarWrapper>
      );

      fireEvent.click(getByTestId('div1'));
    });
  });

  test('error with autoclose', () => {
    const Euclides = () => {
      const { openSnackBar } = useSnackBar();

      return (
        <div
          data-testid="div1"
          onClick={() => {
            openSnackBar({
              snackbarType: 'error',
              message: 'success',
              autoClose: 1,
              onSuccess: () => {},
            });
          }}
        />
      );
    };

    act(() => {
      const { getByTestId } = render(
          <SnackBarWrapper>
            <Euclides />
          </SnackBarWrapper>
      );

      fireEvent.click(getByTestId('div1'));
    });
  });

  test('onSuccess without autoclose', () => {
    const Euclides = () => {
      const { openSnackBar } = useSnackBar();

      return (
        <div
          data-testid="div1"
          onClick={() => {
            openSnackBar({
              snackbarType: 'success',
              message: 'success',
              onSuccess: () => {},
            });
          }}
        />
      );
    };

    const { getByTestId } = render(
        <SnackBarWrapper>
          <Euclides />
        </SnackBarWrapper>
    );

    fireEvent.click(getByTestId('div1'));

    act(() => {
      fireEvent.click(getByTestId('snackbar-icon-button-close'));
    });
  });

  test('onClose without autoclose', () => {
    const Euclides = () => {
      const { openSnackBar } = useSnackBar();

      return (
        <div
          data-testid="div1"
          onClick={() => {
            openSnackBar({
              snackbarType: 'error',
              message: 'success',
              onSuccess: () => {},
            });
          }}
        />
      );
    };

    const { getByTestId } = render(
        <SnackBarWrapper>
          <Euclides />
        </SnackBarWrapper>
    );

    fireEvent.click(getByTestId('div1'));

    act(() => {
      fireEvent.click(getByTestId('snackbar-icon-button-close'));
    });
  });

  test('onSuccess without autoclose default function', () => {
    const Euclides = () => {
      const { openSnackBar } = useSnackBar();

      return (
        <div
          data-testid="div1"
          onClick={() => {
            openSnackBar({
              snackbarType: 'success',
              message: 'success',
            });
          }}
        />
      );
    };

    const { getByTestId } = render(
      <ThemeProvider theme={createMuiTheme(theme)}>
        <SnackBarWrapper>
          <Euclides />
        </SnackBarWrapper>
      </ThemeProvider>
    );

    fireEvent.click(getByTestId('div1'));

    act(() => {
      fireEvent.click(getByTestId('snackbar-icon-button-close'));
    });
  });
});
