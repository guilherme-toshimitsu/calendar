import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  IconButton,
  SnackbarContent,
  Snackbar as MuiSnackbar,
  makeStyles,
} from '@material-ui/core';

import {
  Close as CloseIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  CheckCircle as CheckCircleIcon,
} from '@material-ui/icons';

import { snackBarContentStyles, snackBarStyles } from './styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStylesSnackbarContent = makeStyles(snackBarContentStyles, {
  name: 'snackBarContent',
});
const useStylesSnackbar = makeStyles(snackBarStyles, { name: 'snackBar' });

// eslint-disable-next-line react/display-name
const MySnackbarContent = forwardRef(
  (
    { className, message, onClose, variant, onSuccess, action, ...other },
    ref
  ) => {
    const Icon = variantIcon[variant]
      ? variantIcon[variant]
      : variantIcon.error;
    const classes = useStylesSnackbarContent();

    const actionComponent = (action) =>
      action || [
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={variant === 'error' ? onClose : onSuccess}
          data-testid="snackbar-icon-button-close"
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ];

    return (
      <SnackbarContent
        ref={ref}
        className={clsx(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            <span dangerouslySetInnerHTML={{ __html: message }} />
          </span>
        }
        action={actionComponent(action)}
        {...other}
      />
    );
  }
);

MySnackbarContent.defaultProps = {
  action: null,
};

MySnackbarContent.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  action: PropTypes.any,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  onSuccess: PropTypes.func.isRequired,
};

const SnackBar = ({
  vertical,
  horizontal,
  open,
  action,
  message,
  onClose,
  snackbarType,
  onSuccess,
  ...props
}) => {
  const classes = useStylesSnackbar();
  return (
    <MuiSnackbar
      classes={Object.assign({}, { root: classes.root }, props.classes)}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={onClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
    >
      <MySnackbarContent
        onClose={onClose}
        variant={snackbarType}
        message={message}
        onSuccess={onSuccess}
        action={action}
      />
    </MuiSnackbar>
  );
};

SnackBar.propTypes = {
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
  action: PropTypes.any,
  onClose: PropTypes.func.isRequired,
  snackbarType: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  onSuccess: PropTypes.func,
  classes: PropTypes.object,
};

SnackBar.defaultProps = {
  classes: {},
  vertical: 'top',
  horizontal: 'right',
  snackbarType: 'success',
  message: '',
  action: null,
  onSuccess: () => {},
};

export default SnackBar;
export { MySnackbarContent };
