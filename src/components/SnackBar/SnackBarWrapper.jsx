import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SnackBar from './SnackBar';
import { SnackBarProvider } from './snackContext';

const initialValuesSnackBar = {
  vertical: 'top',
  horizontal: 'right',
  snackbarType: 'success',
  message: 'general.ok',
  autoClose: false,
  action: null,
  onSuccess: () => {},
};

const SnackBarWrapper = ({ children }) => {
  const [snackValues, setSnackValues] = useState(initialValuesSnackBar);
  const [open, setOpen] = useState(false);

  const openSnackBar = (val) => {
    const snack = Object.assign(initialValuesSnackBar, val);
    setSnackValues(snack);
    setOpen(true);
  };

  const onSuccess = () => {
    snackValues.onSuccess();
    setOpen(false);
  };

  useEffect(() => {
    if (open === true && snackValues.autoClose) {
      setTimeout(() => {
        setOpen(false);
        if (snackValues.snackbarType === 'success') {
          snackValues.onSuccess();
        }
      }, snackValues.autoClose);
    }
  }, [open, snackValues.autoClose, setOpen, snackValues]);

  return (
    <SnackBarProvider
      value={{
        snackValues: snackValues,
        openSnackBar,
      }}
    >
      <SnackBar
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={() => onSuccess()}
        vertical={snackValues.vertical}
        horizontal={snackValues.horizontal}
        snackbarType={snackValues.snackbarType}
        action={snackValues.action}
        message={snackValues.message}
      />
      {children}
    </SnackBarProvider>
  );
};

SnackBarWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default SnackBarWrapper;
